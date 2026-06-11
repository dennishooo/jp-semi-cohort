# Data refresh pipeline

`refresh_data.py` refreshes the **observable** quantitative fields in `data/<industry>.js`
from a trusted market-data source ([yfinance](https://pypi.org/project/yfinance/)), while
**preserving every curated/judgement field**.

## What it touches vs. preserves

| Refreshed (observable)                                    | Preserved (curated — no API has these) |
|-----------------------------------------------------------|----------------------------------------|
| `price`, `mcap` ($B)                                      | `r{}` — the 0–10 radar scores          |
| `m.peTTM`, `m.peFwd`, `m.evEbitda`, `m.evSales`           | `m.roic`, `m.fcfYield/Margin/Conv`     |
| `m.gross`, `m.op`, `m.net`, `m.roe`, `m.revCagrHist`      | `m.sbc`, `m.netDebtEbitda`, `m.intCov` |
| `d.revPS`                                                 | `m.pegFwd`, `m.epsCagrFwd`             |
|                                                           | `thesis`, `bull`, `bear`, `share{}`, `d.netCashPS`, `d.fcfM` |

The round-trip overwrites **only** the left column; all other bytes survive. So a refresh can
never silently clobber the hand-authored analysis.

## Why it doesn't run in the authoring sandbox

The sandbox that builds the site has no outbound network (`Host not in allowlist` for Yahoo,
SEC EDGAR, etc.). This script is built to run where the network is open: a **GitHub Action**
(`.github/workflows/refresh-data.yml`) or your local machine.

## Run it

```bash
pip install yfinance            # node must also be on PATH (used to parse the JS data files)
python scripts/refresh_data.py                       # all files, write changes
python scripts/refresh_data.py --dry-run             # report only
python scripts/refresh_data.py --only finance,space  # scope to specific pages
```

Or trigger **Actions → Refresh market data → Run workflow** on GitHub. It runs the script,
uploads `REFRESH_REPORT.md` as an artifact, and opens a PR with the data changes for review.

## Caveats (read before trusting the output)

- **Point-in-time & single-source.** Figures are a snapshot from one provider; verify before acting.
- **`revCagrHist` is YoY**, not a multi-year CAGR — yfinance only exposes trailing growth.
- **Non-USD listings** keep their local-currency price but **skip `mcap`** (yfinance market cap is in
  the listing currency); these are flagged "needs review" in the report.
- **Private / pre-IPO names** (e.g. SpaceX, OpenAI) have no market data — they are skipped and left
  unchanged, and listed in the report.
- **Loss-makers** map P/E to the engine's `999` "n/m" sentinel.

## Extending to SEC EDGAR (optional)

For US filers, `data.sec.gov/api/xbrl/companyfacts` gives authoritative XBRL fundamentals
(revenue, net income, ...) with no API key (a descriptive `User-Agent` is required). It needs
a ticker→CIK map (`www.sec.gov/files/company_tickers.json`) and does not provide price/market
cap. It's a good cross-check source; wire it as a fallback in `fetch_info`/`map_fields`.
