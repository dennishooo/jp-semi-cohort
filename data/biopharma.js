/* biopharma — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-06-11 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Obesity & Biopharma (GLP-1) — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · obesity & biopharma value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">obesity drug</span><br>value chain,<br><span class=\"tnum\">13</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the GLP-1 leaders and clinical-stage obesity challengers, through diversified big pharma, the life-science tools\n       and CDMOs that manufacture the drugs, out to the med-tech and devices benefiting from the metabolic-health wave. Graded on\n       returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"13\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of ~10 Jun 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, P/E, margins and revenue/guidance are from public market data and filings <b>as of\n      ~10 Jun 2026</b> and drift as prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Viking is a\n      <b>pre-revenue</b> clinical biotech: trailing P/E is n/m and it is graded on trial data and buyout optionality. Novo Nordisk and\n      Roche are US-listed ADRs (native DKK/CHF). For ABBV the GAAP P/E reads high on acquisition amortization - read it on ~14x fwd EPS.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps, P/E, margins and revenue/guidance are from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time. ROIC, ROE, FCF margin/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations. Viking is pre-revenue (forward P/E n/m). Novo Nordisk and Roche are US-listed ADRs; AbbVie's GAAP P/E is inflated by acquisition amortization, so read forward EPS. Reverse-DCF uses a 10-year FCF-to-equity model.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A GLP-1 maker and a surgical-robotics firm can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. Headline ratios sourced ~10 Jun 2026; ROIC/FCF rows are estimates. Pre-revenue biotech shows n/m multiples; some pharma GAAP P/Es read high on amortization - cross-check the forward column.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a near-monopoly (GLP-1 incretins, surgical robotics) reads very differently from a contested field (diversified pharma, tools). The denominator is labelled per bar; estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "glp1",
      "label": "GLP-1 leaders",
      "c": "#C0392B"
    },
    {
      "k": "challenger",
      "label": "Obesity challengers",
      "c": "#D35400"
    },
    {
      "k": "pharma",
      "label": "Diversified pharma",
      "c": "#1B6CA8"
    },
    {
      "k": "tools",
      "label": "Life-science tools",
      "c": "#1E8E6B"
    },
    {
      "k": "devices",
      "label": "Med-tech & devices",
      "c": "#8E5DA8"
    }
  ],
  "data": [
    {
      "tk": "LLY",
      "nm": "Eli Lilly",
      "bz": "GLP-1 leader (tirzepatide)",
      "color": "#D52B1E",
      "layer": "glp1",
      "share": {
        "pct": 50,
        "rank": "#1",
        "conf": "high",
        "market": "incretin / GLP-1 obesity & diabetes"
      },
      "price": 1136.37,
      "mcap": 1013.35,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The franchise of the decade — tirzepatide (Mounjaro/Zepbound) plus an oral and next-gen pipeline; FY25 revenue ~$63B (+~32%), ~82% gross margin, ~$1.02T market cap.",
      "bull": "Best-in-class incretin efficacy + deep pipeline; massive volume/pricing runway.",
      "bear": "Rich multiple; manufacturing scale-up and competition risk.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 9,
        "moat": 10,
        "fcf": 8,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 40.3,
        "peFwd": 25.5,
        "pegFwd": 1,
        "evEbitda": 29.0,
        "evSales": 14.6,
        "pfcf": 55,
        "fcfYield": 1.5,
        "revCagrHist": 55.5,
        "epsCagrFwd": 30,
        "gross": 82.8,
        "op": 49.4,
        "net": 35.0,
        "roic": 28,
        "roe": 107.5,
        "fcfMargin": 22,
        "fcfConv": 80,
        "sbc": 2,
        "netDebtEbitda": 0.6,
        "intCov": 40
      },
      "d": {
        "revPS": 80.61,
        "netCashPS": -8,
        "fcfM": 0.22
      }
    },
    {
      "tk": "NVO",
      "nm": "Novo Nordisk",
      "bz": "GLP-1 co-leader (semaglutide)",
      "color": "#001965",
      "layer": "glp1",
      "share": {
        "pct": 45,
        "rank": "#2",
        "conf": "high",
        "market": "incretin / GLP-1 obesity & diabetes"
      },
      "price": 42.81,
      "mcap": 189.61,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Semaglutide's originator (Ozempic/Wegovy) — the value side of the duopoly after a ~42% 52-week drop; trailing P/E ~10, EV/EBITDA ~7.7, 2025 revenue ~$45B (+6%).",
      "bull": "Entrenched franchise + oral amycretin pipeline; cheap at ~10x trailing.",
      "bear": "US share erosion vs Lilly; pipeline setbacks; pricing/compounding pressure.",
      "r": {
        "val": 7,
        "growth": 6,
        "roic": 10,
        "moat": 9,
        "fcf": 9,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 10.0,
        "peFwd": 12.9,
        "pegFwd": 1,
        "evEbitda": 1.8,
        "evSales": 1.0,
        "pfcf": 15,
        "fcfYield": 4,
        "revCagrHist": 24.0,
        "epsCagrFwd": 5,
        "gross": 83.2,
        "op": 61.6,
        "net": 37.2,
        "roic": 40,
        "roe": 71.4,
        "fcfMargin": 25,
        "fcfConv": 85,
        "sbc": 1,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 73.77,
        "netCashPS": -1,
        "fcfM": 0.3
      }
    },
    {
      "tk": "VKTX",
      "nm": "Viking Therapeutics",
      "bz": "Obesity biotech (VK2735)",
      "color": "#E8590C",
      "layer": "challenger",
      "share": {
        "pct": 5,
        "rank": "#5",
        "conf": "low",
        "market": "next-gen incretin obesity drugs"
      },
      "price": 27.75,
      "mcap": 3.22,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The premier clinical-stage obesity challenger — a dual GLP-1/GIP in injectable and oral forms; pre-revenue with only ~$155M cash, and a prime acquisition target.",
      "bull": "Competitive efficacy data + oral optionality; buyout candidate.",
      "bear": "No revenue; binary trial risk; thin cash needs a partner or raise to scale.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 1,
        "moat": 5,
        "fcf": 1,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 99,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 0,
        "epsCagrFwd": 90,
        "gross": 0,
        "op": 0.0,
        "net": 0.0,
        "roic": -30,
        "roe": -70.0,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 15,
        "netDebtEbitda": -0.5,
        "intCov": 1
      },
      "d": {
        "revPS": 0,
        "netCashPS": 1.4,
        "fcfM": -3
      }
    },
    {
      "tk": "AMGN",
      "nm": "Amgen",
      "bz": "Biotech + obesity (MariTide)",
      "color": "#0063C3",
      "layer": "challenger",
      "share": {
        "pct": 8,
        "rank": "#4",
        "conf": "medium",
        "market": "biologics + monthly incretin"
      },
      "price": 337.73,
      "mcap": 182.28,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A diversified biotech with a differentiated monthly obesity injectable (MariTide, Phase III readout early 2027) as call-option upside; 2026 revenue guide $37-38.4B, ~15.5x fwd P/E.",
      "bull": "MariTide monthly-dosing optionality on a cash-rich biologics base.",
      "bear": "MariTide data mixed; legacy maturation; heavy debt from Horizon.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 8,
        "moat": 8,
        "fcf": 9,
        "bs": 5,
        "scal": 6
      },
      "m": {
        "peTTM": 24.0,
        "peFwd": 14.4,
        "pegFwd": 1.4,
        "evEbitda": 13.5,
        "evSales": 6.1,
        "pfcf": 16,
        "fcfYield": 5,
        "revCagrHist": 5.8,
        "epsCagrFwd": 8,
        "gross": 71.4,
        "op": 33.8,
        "net": 21.0,
        "roic": 15,
        "roe": 101.3,
        "fcfMargin": 30,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 3,
        "intCov": 9
      },
      "d": {
        "revPS": 69.12,
        "netCashPS": -55,
        "fcfM": 0.3
      }
    },
    {
      "tk": "HIMS",
      "nm": "Hims & Hers",
      "bz": "Telehealth + GLP-1 distribution",
      "color": "#0F7C5A",
      "layer": "challenger",
      "share": {
        "pct": 10,
        "rank": "#3",
        "conf": "low",
        "market": "D2C telehealth & weight-loss"
      },
      "price": 27.78,
      "mcap": 6.43,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The consumer front-end of the obesity wave — telehealth subscriptions distributing weight-loss and other therapies; 2025 revenue $2.35B (+59%), but shares sold off post-Q1.",
      "bull": "Rapid subscriber growth + GLP-1 attach; high-margin consumer platform.",
      "bear": "Compounding/regulatory risk; reliance on branded-drug access; volatile.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 6,
        "moat": 4,
        "fcf": 7,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 999,
        "peFwd": 31.2,
        "pegFwd": 0.7,
        "evEbitda": 81.7,
        "evSales": 2.9,
        "pfcf": 45,
        "fcfYield": 2,
        "revCagrHist": 3.8,
        "epsCagrFwd": 40,
        "gross": 72.9,
        "op": -7.9,
        "net": -0.6,
        "roic": 12,
        "roe": -2.7,
        "fcfMargin": 8,
        "fcfConv": 90,
        "sbc": 6,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 10.46,
        "netCashPS": 1.5,
        "fcfM": 0.08
      }
    },
    {
      "tk": "PFE",
      "nm": "Pfizer",
      "bz": "Diversified pharma + oral obesity",
      "color": "#0093D0",
      "layer": "pharma",
      "share": {
        "pct": 6,
        "rank": "#5",
        "conf": "medium",
        "market": "diversified branded pharmaceuticals"
      },
      "price": 25.6,
      "mcap": 145.91,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Deep-value big pharma — ~8.9x fwd P/E and a ~6.7% yield, with oncology (Seagen) and an oral-obesity lottery ticket; 2026 revenue guide $59.5-62.5B.",
      "bull": "Cheap, high-yield, with oncology pipeline and oral-obesity optionality.",
      "bear": "2028+ patent cliffs; pipeline must replace COVID revenue; oral-GLP-1 setbacks.",
      "r": {
        "val": 8,
        "growth": 3,
        "roic": 6,
        "moat": 6,
        "fcf": 7,
        "bs": 5,
        "scal": 5
      },
      "m": {
        "peTTM": 19.5,
        "peFwd": 9.0,
        "pegFwd": 1.5,
        "evEbitda": 7.8,
        "evSales": 3.1,
        "pfcf": 11,
        "fcfYield": 7,
        "revCagrHist": 5.4,
        "epsCagrFwd": 6,
        "gross": 74.8,
        "op": 31.6,
        "net": 11.8,
        "roic": 8,
        "roe": 8.3,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 2.5,
        "intCov": 9
      },
      "d": {
        "revPS": 11.13,
        "netCashPS": -10,
        "fcfM": 0.2
      }
    },
    {
      "tk": "MRK",
      "nm": "Merck",
      "bz": "Pharma (Keytruda) + cardio-metabolic",
      "color": "#00857C",
      "layer": "pharma",
      "share": {
        "pct": 10,
        "rank": "#3",
        "conf": "high",
        "market": "oncology + diversified pharma"
      },
      "price": 119.09,
      "mcap": 294.13,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Keytruda's cash engine funding a pipeline pivot ahead of the 2028 patent cliff; 2025 revenue $65B, 2026 guide $65.8-67B, decade-low ~12x fwd P/E.",
      "bull": "Keytruda cash flow + broad pipeline; subcutaneous reformulation extends it.",
      "bear": "Keytruda concentration into 2028 LOE; pipeline must deliver.",
      "r": {
        "val": 7,
        "growth": 5,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 33.5,
        "peFwd": 12.5,
        "pegFwd": 1.6,
        "evEbitda": 11.4,
        "evSales": 5.1,
        "pfcf": 14,
        "fcfYield": 6,
        "revCagrHist": 4.9,
        "epsCagrFwd": 9,
        "gross": 76.7,
        "op": 38.6,
        "net": 13.6,
        "roic": 18,
        "roe": 18.9,
        "fcfMargin": 25,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 1,
        "intCov": 30
      },
      "d": {
        "revPS": 26.42,
        "netCashPS": -15,
        "fcfM": 0.25
      }
    },
    {
      "tk": "ABBV",
      "nm": "AbbVie",
      "bz": "Immunology + diversified pharma",
      "color": "#071D49",
      "layer": "pharma",
      "share": {
        "pct": 12,
        "rank": "#2",
        "conf": "high",
        "market": "immunology biologics"
      },
      "price": 224.95,
      "mcap": 397.44,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Past the Humira cliff with Skyrizi/Rinvoq growing strongly; Q1 26 revenue $15B (+12%), 2026 adjusted EPS $14.37-14.57 (~14x fwd), high yield, heavy leverage.",
      "bull": "Skyrizi/Rinvoq durable growth replacing Humira; strong FCF and dividend.",
      "bear": "Large debt load (high GAAP P/E from amortization); pipeline must keep filling.",
      "r": {
        "val": 5,
        "growth": 7,
        "roic": 7,
        "moat": 8,
        "fcf": 9,
        "bs": 4,
        "scal": 6
      },
      "m": {
        "peTTM": 111.4,
        "peFwd": 13.8,
        "pegFwd": 1.3,
        "evEbitda": 15.4,
        "evSales": 7.3,
        "pfcf": 17,
        "fcfYield": 5,
        "revCagrHist": 12.4,
        "epsCagrFwd": 9,
        "gross": 72.0,
        "op": 32.2,
        "net": 5.8,
        "roic": 12,
        "roe": 80,
        "fcfMargin": 30,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 2.8,
        "intCov": 9
      },
      "d": {
        "revPS": 35.5,
        "netCashPS": -35,
        "fcfM": 0.3
      }
    },
    {
      "tk": "RHHBY",
      "nm": "Roche",
      "bz": "Pharma + diagnostics (CH)",
      "color": "#0066CC",
      "layer": "pharma",
      "share": {
        "pct": 11,
        "rank": "#2",
        "conf": "medium",
        "market": "oncology + diagnostics"
      },
      "price": 50.23,
      "mcap": 323.53,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The world's leading oncology and diagnostics franchise; trailing P/E ~21 on ~CHF 109B revenue, a steady, dividend-rich pharma compounder (US-listed ADR).",
      "bull": "Oncology + diagnostics leadership; durable cash generation and dividend.",
      "bear": "Biosimilar erosion; pipeline dependence; FX (CHF) translation.",
      "r": {
        "val": 6,
        "growth": 5,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 19.9,
        "peFwd": 15.6,
        "pegFwd": 2,
        "evEbitda": 14.3,
        "evSales": 5.4,
        "pfcf": 18,
        "fcfYield": 5,
        "revCagrHist": -0.4,
        "epsCagrFwd": 8,
        "gross": 74.5,
        "op": 30,
        "net": 20.3,
        "roic": 15,
        "roe": 37.3,
        "fcfMargin": 22,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 1,
        "intCov": 30
      },
      "d": {
        "revPS": 9.95,
        "netCashPS": -5,
        "fcfM": 0.22
      }
    },
    {
      "tk": "TMO",
      "nm": "Thermo Fisher",
      "bz": "Life-science tools & CDMO",
      "color": "#E1251B",
      "layer": "tools",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "life-science tools + bioprocessing"
      },
      "price": 482.04,
      "mcap": 179.14,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The picks-and-shovels giant of biopharma — instruments, bioprocessing and contract manufacturing; ~19.4x fwd P/E, ~$44B revenue, raised 2026 EPS guide $24.6-25.1.",
      "bull": "Scaled tools + CDMO levered to obesity-drug manufacturing; recovery underway.",
      "bear": "Cyclical bioprocessing recovery; China and academic-funding exposure.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 7,
        "moat": 9,
        "fcf": 8,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 27.2,
        "peFwd": 17.7,
        "pegFwd": 2,
        "evEbitda": 19.4,
        "evSales": 4.8,
        "pfcf": 26,
        "fcfYield": 3,
        "revCagrHist": 6.2,
        "epsCagrFwd": 9,
        "gross": 40.9,
        "op": 17.9,
        "net": 15.2,
        "roic": 9,
        "roe": 13.5,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 2,
        "intCov": 15
      },
      "d": {
        "revPS": 120.36,
        "netCashPS": -30,
        "fcfM": 0.18
      }
    },
    {
      "tk": "DHR",
      "nm": "Danaher",
      "bz": "Bioprocessing & diagnostics tools",
      "color": "#0067B1",
      "layer": "tools",
      "share": {
        "pct": 18,
        "rank": "#2",
        "conf": "high",
        "market": "bioprocessing + diagnostics tools"
      },
      "price": 183.63,
      "mcap": 129.97,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A premium tools compounder centered on high-margin bioprocessing consumables; Q1 26 revenue $5.9B, ~$24.8B TTM, ~20x fwd P/E, ~5.5% forward growth.",
      "bull": "High-margin recurring bioprocessing consumables; disciplined capital allocation.",
      "bear": "Bioprocessing normalization; China; full multiple.",
      "r": {
        "val": 4,
        "growth": 6,
        "roic": 7,
        "moat": 9,
        "fcf": 8,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 36.5,
        "peFwd": 20.2,
        "pegFwd": 2.4,
        "evEbitda": 18.1,
        "evSales": 5.8,
        "pfcf": 30,
        "fcfYield": 2.5,
        "revCagrHist": 3.7,
        "epsCagrFwd": 10,
        "gross": 59.0,
        "op": 22.9,
        "net": 14.9,
        "roic": 9,
        "roe": 7.1,
        "fcfMargin": 20,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 1.5,
        "intCov": 20
      },
      "d": {
        "revPS": 34.87,
        "netCashPS": -8,
        "fcfM": 0.2
      }
    },
    {
      "tk": "ISRG",
      "nm": "Intuitive Surgical",
      "bz": "Robotic surgery (da Vinci)",
      "color": "#7A2E8E",
      "layer": "devices",
      "share": {
        "pct": 80,
        "rank": "#1",
        "conf": "high",
        "market": "soft-tissue surgical robotics"
      },
      "price": 412.02,
      "mcap": 145.92,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The robotic-surgery near-monopoly — da Vinci 5 install base compounding; Q1 26 revenue $2.77B (+23%), 2026 procedure growth guided 13.5-15.5%, fortress net cash.",
      "bull": "~80% share + recurring instrument/service revenue; ~68% gross margin, net cash.",
      "bear": "~46x fwd P/E; capital-equipment cyclicality; eventual competition.",
      "r": {
        "val": 2,
        "growth": 8,
        "roic": 9,
        "moat": 10,
        "fcf": 9,
        "bs": 10,
        "scal": 8
      },
      "m": {
        "peTTM": 51.8,
        "peFwd": 34.9,
        "pegFwd": 2.6,
        "evEbitda": 36.4,
        "evSales": 13.4,
        "pfcf": 55,
        "fcfYield": 1.6,
        "revCagrHist": 23.0,
        "epsCagrFwd": 18,
        "gross": 66.3,
        "op": 30.9,
        "net": 28.2,
        "roic": 18,
        "roe": 17.2,
        "fcfMargin": 28,
        "fcfConv": 90,
        "sbc": 4,
        "netDebtEbitda": -3,
        "intCov": 999
      },
      "d": {
        "revPS": 29.7,
        "netCashPS": 25,
        "fcfM": 0.28
      }
    },
    {
      "tk": "DXCM",
      "nm": "Dexcom",
      "bz": "Continuous glucose monitoring",
      "color": "#9C4DCC",
      "layer": "devices",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "high",
        "market": "continuous glucose monitors"
      },
      "price": 74.77,
      "mcap": 28.85,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A CGM leader riding metabolic-health awareness (GLP-1 co-use and the OTC Stelo launch); 2025 revenue $4.66B (+16%), ~25x fwd P/E.",
      "bull": "CGM secular growth + OTC expansion; high gross margins.",
      "bear": "GLP-1 net impact on diabetes volumes debated; Abbott competition.",
      "r": {
        "val": 4,
        "growth": 8,
        "roic": 7,
        "moat": 7,
        "fcf": 7,
        "bs": 7,
        "scal": 8
      },
      "m": {
        "peTTM": 32.1,
        "peFwd": 24.3,
        "pegFwd": 1.4,
        "evEbitda": 21.5,
        "evSales": 5.8,
        "pfcf": 35,
        "fcfYield": 2,
        "revCagrHist": 15.0,
        "epsCagrFwd": 22,
        "gross": 61.5,
        "op": 21.4,
        "net": 19.3,
        "roic": 14,
        "roe": 35.6,
        "fcfMargin": 18,
        "fcfConv": 95,
        "sbc": 5,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 12.39,
        "netCashPS": 2,
        "fcfM": 0.18
      }
    }
  ]
};
