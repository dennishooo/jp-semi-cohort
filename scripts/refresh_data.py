#!/usr/bin/env python3
"""
refresh_data.py - refresh the quantitative fields in data/<industry>.js from a
trusted market-data source (yfinance), preserving all qualitative/curated content.

WHY THIS EXISTS
  The dashboards mix two kinds of fields:
    * QUANTITATIVE, observable facts (price, market cap, P/E, margins, ...)  -> refreshable
    * CURATED judgements (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear,
      moat, share-of-market) -> NOT in any API; authored by hand.
  This script ONLY overwrites the observable fields and leaves everything else byte-for-byte
  intact, so a data refresh can never silently clobber the curated analysis.

WHERE IT RUNS
  The sandbox that authored the site has no outbound network, so this is designed to run
  where the network is open: a GitHub Action (see .github/workflows/refresh-data.yml) or a
  local machine. It needs `yfinance` (pip) and `node` (to parse the JS data files).

USAGE
  python scripts/refresh_data.py                       # refresh every data/*.js, write changes
  python scripts/refresh_data.py --dry-run             # report only, write nothing
  python scripts/refresh_data.py --only finance,space  # scope to specific files
  python scripts/refresh_data.py --asof 2026-06-11     # record an as-of date in the report

OUTPUT
  Rewrites data/<industry>.js (stable JSON-formatted JS) and writes data/REFRESH_REPORT.md
  summarising every change, skip (private/pre-IPO names), and item needing manual review
  (non-USD listings, implausible values).
"""
from __future__ import annotations
import argparse, json, math, subprocess, sys, time, datetime, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data"

# --- field map: yfinance .info key -> how to land it in the record -----------------------
# Only these get overwritten. Everything else (r{}, pegFwd, roic, fcf*, sbc, netDebt, intCov,
# epsCagrFwd, netCashPS, fcfM, thesis, share, ...) is PRESERVED from the existing file.
PE_SENTINEL = 999      # the engine treats >=999 / negative as "n/m" - loss-makers map to this
def _pos_pe(v):        # P/E: keep only sane positive values, else n/m sentinel
    return round(v, 1) if (v is not None and math.isfinite(v) and 0 < v < 900) else PE_SENTINEL
def _ratio(v, lo=-50, hi=300):
    return round(v, 1) if (v is not None and math.isfinite(v) and lo <= v <= hi) else None
def _pct(v, lo=-200, hi=400):
    return round(v * 100, 1) if (v is not None and math.isfinite(v) and lo/100 <= v <= hi/100) else None

def map_fields(info: dict) -> dict:
    """Return {dotted_path: value} for the fields we are willing to overwrite."""
    price = info.get("currentPrice") or info.get("regularMarketPrice")
    mcap  = info.get("marketCap")
    out = {}
    if price and math.isfinite(price):                 out["price"]        = round(price, 2)
    if mcap and math.isfinite(mcap):                   out["mcap"]         = round(mcap / 1e9, 2)  # -> $B
    out["m.peTTM"]   = _pos_pe(info.get("trailingPE"))
    out["m.peFwd"]   = _pos_pe(info.get("forwardPE"))
    if (v := _ratio(info.get("enterpriseToEbitda"))) is not None: out["m.evEbitda"] = v
    if (v := _ratio(info.get("enterpriseToRevenue"))) is not None: out["m.evSales"]  = v
    if (v := _pct(info.get("grossMargins")))   is not None: out["m.gross"]       = v
    if (v := _pct(info.get("operatingMargins"))) is not None: out["m.op"]        = v
    if (v := _pct(info.get("profitMargins")))  is not None: out["m.net"]         = v
    if (v := _pct(info.get("returnOnEquity"))) is not None: out["m.roe"]         = v
    if (v := _pct(info.get("revenueGrowth")))  is not None: out["m.revCagrHist"] = v  # NB: YoY, not multi-yr CAGR
    rps = info.get("revenuePerShare")
    if rps and math.isfinite(rps):                     out["d.revPS"]      = round(rps, 2)
    return {k: v for k, v in out.items() if v is not None}

# --- JS data file <-> python dict --------------------------------------------------------
def load_config(path: pathlib.Path) -> dict:
    """Evaluate the data/<x>.js file in node and return its window.CONFIG as a dict."""
    js = f"global.window={{}};require({json.dumps(str(path.resolve()))});process.stdout.write(JSON.stringify(window.CONFIG));"
    out = subprocess.run(["node", "-e", js], capture_output=True, text=True, cwd=ROOT)
    if out.returncode != 0:
        raise RuntimeError(f"node failed to parse {path.name}: {out.stderr.strip()}")
    return json.loads(out.stdout)

def dump_config(path: pathlib.Path, cfg: dict, banner: str):
    """Write window.CONFIG back as stable, valid-JS JSON (quoted keys are legal JS)."""
    body = json.dumps(cfg, ensure_ascii=False, indent=2)
    path.write_text(f"/* {banner} */\nwindow.CONFIG = {body};\n")

def fetch_info(ticker: str) -> dict | None:
    import yfinance as yf
    try:
        info = yf.Ticker(ticker).info
        # yfinance returns a near-empty dict for unknown / private names
        if not info or not (info.get("currentPrice") or info.get("regularMarketPrice") or info.get("marketCap")):
            return None
        return info
    except Exception as e:
        print(f"  ! fetch error {ticker}: {e}", file=sys.stderr)
        return None

def apply(rec: dict, updates: dict) -> list[str]:
    """Apply dotted-path updates to a record; return human-readable change lines."""
    changes = []
    for path, new in updates.items():
        if "." in path:
            grp, key = path.split(".", 1)
            old = rec.get(grp, {}).get(key)
            tgt = rec.setdefault(grp, {})
        else:
            grp, key, old, tgt = None, path, rec.get(path), rec
        if old != new:
            changes.append(f"{path}: {old} -> {new}")
            tgt[key] = new
    return changes

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--only", help="comma-separated file stems, e.g. finance,space")
    ap.add_argument("--dry-run", action="store_true", help="report only; write nothing")
    ap.add_argument("--asof", default=datetime.date.today().isoformat(), help="as-of date for the report")
    ap.add_argument("--sleep", type=float, default=0.4, help="seconds between fetches (rate-limit cushion)")
    args = ap.parse_args()

    files = sorted(DATA.glob("*.js"))
    if args.only:
        stems = {s.strip() for s in args.only.split(",")}
        files = [f for f in files if f.stem in stems]
    if not files:
        sys.exit("no matching data files")

    report = [f"# Data refresh report", "",
              f"- **As of:** {args.asof}",
              f"- **Source:** yfinance (Yahoo Finance) — observable fields only",
              f"- **Mode:** {'dry-run (no writes)' if args.dry_run else 'write'}",
              "",
              "Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. "
              "All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.",
              ""]
    grand_changed = grand_skipped = grand_review = 0

    for f in files:
        cfg = load_config(f)
        recs = cfg["data"]
        print(f"\n== {f.name} ({len(recs)} names) ==")
        sec_changed, sec_skip, sec_review = [], [], []
        for rec in recs:
            tk = rec["tk"]
            info = fetch_info(tk)
            time.sleep(args.sleep)
            if info is None:
                sec_skip.append(f"`{tk}` {rec['nm']} — no market data (private/pre-IPO or unknown symbol); left unchanged")
                continue
            cur = info.get("currency", "USD")
            review_note = ""
            updates = map_fields(info)
            # Non-USD listing: price is in local currency and yfinance marketCap is too, so
            # writing mcap as USD$B would corrupt it. Keep price, DROP mcap, flag for review.
            if cur and cur != "USD":
                updates.pop("mcap", None)
                review_note = f" — currency **{cur}** (mcap skipped; verify price/currency)"
            ch = apply(rec, updates)
            if ch:
                sec_changed.append(f"`{tk}` {rec['nm']}: " + "; ".join(ch))
            if review_note:
                sec_review.append(f"`{tk}` {rec['nm']}{review_note}")
            print(f"  {tk:8} {'updated' if ch else 'no-change':10} {review_note}")

        if not args.dry_run and (sec_changed):
            dump_config(f, cfg, f"{f.stem} — data + copy for the shared dashboard engine. "
                                f"Quantitative fields refreshed {args.asof} via scripts/refresh_data.py; "
                                f"radar scores & ROIC/FCF estimates are curated.")
        report += [f"## {f.name}", "",
                   f"- changed: {len(sec_changed)} · skipped: {len(sec_skip)} · review: {len(sec_review)}", ""]
        if sec_changed: report += ["**Changed**"] + [f"- {c}" for c in sec_changed] + [""]
        if sec_review:  report += ["**Needs review**"] + [f"- {c}" for c in sec_review] + [""]
        if sec_skip:    report += ["**Skipped (preserved)**"] + [f"- {c}" for c in sec_skip] + [""]
        grand_changed += len(sec_changed); grand_skipped += len(sec_skip); grand_review += len(sec_review)

    report.insert(5, f"- **Totals:** {grand_changed} changed · {grand_skipped} skipped · {grand_review} need review")
    (DATA / "REFRESH_REPORT.md").write_text("\n".join(report))
    print(f"\nTotals: {grand_changed} changed, {grand_skipped} skipped, {grand_review} need review")
    print(f"Report: data/REFRESH_REPORT.md")

if __name__ == "__main__":
    main()
