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

# Display ticker -> Yahoo Finance symbol, where they differ: foreign listings that need an
# exchange suffix, renamed/dashed US symbols, and short codes that collide with an unrelated
# US ticker (e.g. "AI" = C3.ai on Yahoo, but here it's Air Liquide). For local-currency names
# the currency guard in main() still skips their (local-currency) market cap.
YAHOO_OVERRIDES = {
    # finance
    "LSEG": "LSEG.L", "HSBC": "HSBA.L", "ALV": "ALV.DE", "BRK.B": "BRK-B",
    # semiconductors — Japan (.T)
    "6857": "6857.T", "4063": "4063.T", "6146": "6146.T", "6963": "6963.T", "4004": "4004.T",
    "6861": "6861.T", "6723": "6723.T", "8035": "8035.T", "7735": "7735.T", "4186": "4186.T",
    "4182": "4182.T", "3436": "3436.T", "4062": "4062.T", "6967": "6967.T", "4091": "4091.T",
    "4901": "4901.T", "4005": "4005.T", "285A": "285A.T", "6503": "6503.T", "6504": "6504.T",
    "7729": "7729.T", "3132": "3132.T",
    # Korea (.KS)
    "005930": "005930.KS", "000660": "000660.KS",
    # Taiwan (.TW)
    "6488": "6488.TW", "2454": "2454.TW", "2360": "2360.TW", "6239": "6239.TW",
    "8046": "8046.TW", "3036": "3036.TW", "3702": "3702.TW",
    # Hong Kong (.HK)
    "0981": "0981.HK", "1347": "1347.HK", "0522": "0522.HK", "0992": "0992.HK", "1810": "1810.HK",
    # mainland China (.SS Shanghai / .SZ Shenzhen)
    "600584": "600584.SS", "002371": "002371.SZ", "002156": "002156.SZ", "002594": "002594.SZ",
    # Europe (ambiguous short codes mapped to the real listing)
    "AI": "AI.PA", "SOI": "SOI.PA", "IFX": "IFX.DE", "WAF": "WAF.DE", "ASM": "ASM.AS",
    "BESI": "BESI.AS", "SMHN": "SMHN.DE", "ATS": "ATS.VI",
    # space
    "AIR": "AIR.PA", "SES": "SESG.PA",
    # robotics
    "ABB": "ABBN.SW", "6954": "6954.T", "6506": "6506.T",
}

_FX_CACHE: dict[str, float | None] = {}
def fx_to_usd(currency: str | None) -> float | None:
    """USD per 1 unit of `currency`. Handles GBp (London pence = GBP/100). Cached."""
    if currency in (None, "USD"):
        return 1.0
    if currency in _FX_CACHE:
        return _FX_CACHE[currency]
    import yfinance as yf
    base = "GBP" if currency == "GBp" else currency
    rate = None
    for attempt in range(3):
        try:
            t = yf.Ticker(f"{base}USD=X")
            rate = getattr(t.fast_info, "last_price", None) or \
                   (t.info.get("regularMarketPrice") or t.info.get("currentPrice"))
            if rate:
                break
        except Exception:
            pass
        time.sleep(1.0 * (attempt + 1))
    if rate and currency == "GBp":
        rate = rate / 100.0          # pence -> pounds
    _FX_CACHE[currency] = rate
    return rate

def map_fields(info: dict, currency: str = "USD", rate: float | None = 1.0,
               baseline: dict | None = None) -> tuple[dict, str]:
    """Return ({dotted_path: value}, review_note) for the fields we overwrite.
    Currency-denominated fields (price, mcap, revPS) are handled per-currency; ratio fields
    are currency-independent. Guards reject values that yfinance reports unreliably, judged
    on the *value* (not the sector) so legit payment/exchange/fintech names aren't frozen:
      * EV multiples: skip non-positive values (banks/insurers report negative or nonsensical EVs).
      * gross margin: skip <=0 (banks report 0.0) and >=98 (a "no cost of revenue" artifact);
        keeps real operating-company margins, incl. high-gross software/networks up to ~97%.
      * revPS: only when financial-statement currency is USD AND within 0.2x-5x of the
        curated baseline (catches local-currency / per-ADR unit mismatches, incl. BRK.B)."""
    out, note = {}, ""
    fin_ccy = info.get("financialCurrency")
    base = (baseline or {})

    price = info.get("currentPrice") or info.get("regularMarketPrice")
    # Display price stays in the record's currency; London pence -> pounds to match a "£" label.
    if price and math.isfinite(price):
        out["price"] = round(price / 100 if currency == "GBp" else price, 2)
    # Market cap always in USD $B. USD names use the reported cap; foreign names derive it
    # (shares x USD price) to avoid the local-currency cap ambiguity.
    if currency in (None, "USD"):
        mcap = info.get("marketCap")
        if mcap and math.isfinite(mcap):
            out["mcap"] = round(mcap / 1e9, 2)
    else:
        shares = info.get("sharesOutstanding")
        if price and shares and rate and math.isfinite(price) and math.isfinite(shares):
            out["mcap"] = round(shares * price * rate / 1e9, 2)   # rate folds in GBp/100
        else:
            note = f" — currency **{currency}**: USD mcap not derivable (missing shares/FX); mcap left unchanged"

    # ratios — currency-independent. Value-driven guards, not sector-driven (see docstring).
    out["m.peTTM"] = _pos_pe(info.get("trailingPE"))
    out["m.peFwd"] = _pos_pe(info.get("forwardPE"))
    if (v := _ratio(info.get("enterpriseToEbitda"))) is not None and v > 0: out["m.evEbitda"] = v
    if (v := _ratio(info.get("enterpriseToRevenue"))) is not None and v > 0: out["m.evSales"]  = v
    if (v := _pct(info.get("grossMargins"))) is not None and 0 < v < 98: out["m.gross"] = v
    if (v := _pct(info.get("operatingMargins"))) is not None: out["m.op"]        = v
    if (v := _pct(info.get("profitMargins")))  is not None: out["m.net"]         = v
    if (v := _pct(info.get("returnOnEquity"))) is not None: out["m.roe"]         = v
    if (v := _pct(info.get("revenueGrowth")))  is not None: out["m.revCagrHist"] = v  # NB: YoY, not multi-yr CAGR

    # revenue/share: USD financial-statement currency only, and sanity-bounded vs the baseline
    rps = info.get("revenuePerShare")
    if currency in (None, "USD") and fin_ccy == "USD" and rps and math.isfinite(rps):
        old = base.get("d", {}).get("revPS")
        if not old or (0.2 <= rps / old <= 5):
            out["d.revPS"] = round(rps, 2)
    return {k: v for k, v in out.items() if v is not None}, note

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

def fetch_info(ticker: str, retries: int = 3) -> tuple[dict | None, str]:
    """Fetch .info for a ticker (after symbol-override), retrying transient failures.
    Returns (info_or_None, yahoo_symbol_used)."""
    import yfinance as yf
    sym = YAHOO_OVERRIDES.get(ticker, ticker)
    for attempt in range(retries):
        try:
            info = yf.Ticker(sym).info
            # yfinance returns a near-empty dict for unknown / private names
            if info and (info.get("currentPrice") or info.get("regularMarketPrice") or info.get("marketCap")):
                return info, sym
        except Exception as e:
            if attempt == retries - 1:
                print(f"  ! fetch error {ticker} ({sym}): {e}", file=sys.stderr)
        if attempt < retries - 1:
            time.sleep(1.0 * (attempt + 1))   # back off on transient 404 / rate-limit
    return None, sym

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
            info, sym = fetch_info(tk)
            time.sleep(args.sleep)
            via = f" (via `{sym}`)" if sym != tk else ""
            if info is None:
                sec_skip.append(f"`{tk}` {rec['nm']}{via} — no market data (private/pre-IPO or unresolved symbol); left unchanged")
                continue
            cur = info.get("currency", "USD")
            rate = fx_to_usd(cur)
            updates, review_note = map_fields(info, cur, rate, baseline=rec)
            ch = apply(rec, updates)
            if ch:
                sec_changed.append(f"`{tk}` {rec['nm']}{via}: " + "; ".join(ch))
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
