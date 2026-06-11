/* ai-infra — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-06-11 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "AI Infrastructure & Data Centers — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · AI infrastructure value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">AI infrastructure</span><br>value chain,<br><span class=\"tnum\">14</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the silicon and high-bandwidth memory, through networking and optical interconnect, the servers,\n       power and cooling, the data-center REITs that house it all, out to the hyperscalers whose capex pulls the whole chain.\n       Graded on returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"14\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"8\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of ~10 Jun 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap, trailing/forward P/E, gross/operating/net margin and revenue growth are taken\n      from public market data and company filings <b>as of ~10 Jun 2026</b> and will drift as prices move. Derived metrics\n      (ROIC, ROE, FCF margin/conversion, EV/EBITDA, net debt) and the 0-10 radar scores are the author's estimates and\n      normalizations. REIT multiples (Equinix, Digital Realty) are GAAP-P/E-like and read high; judge them on P/FFO and yield.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps, trailing/forward P/E, margins and revenue growth are gathered from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time - they drift as markets move. ROIC, ROE, FCF margin/yield/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations, not consensus pulls. Equinix and Digital Realty are REITs: their GAAP P/E reads high, so judge them on P/FFO, AFFO growth and yield. Reverse-DCF uses a transparent 10-year FCF-to-equity model.<br><br><b>Verify live before acting.</b> This is an analytical tool, not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A GPU designer and a data-center REIT can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, every row color-graded best&#8594;worst within the cohort (green = best). Click a column header to sort by that metric. Headline ratios are sourced ~10 Jun 2026; ROIC/FCF rows are estimates. REITs and thin-margin assemblers are not directly comparable to the chip designers - read within each layer.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a near-monopoly (GPUs, cloud networking) reads very differently from a contested field (servers, optics). The denominator is labelled per bar; figures are illustrative estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "silicon",
      "label": "AI silicon",
      "c": "#C0392B"
    },
    {
      "k": "memory",
      "label": "Memory & storage",
      "c": "#16557B"
    },
    {
      "k": "networking",
      "label": "Networking",
      "c": "#1B6CA8"
    },
    {
      "k": "optics",
      "label": "Optical interconnect",
      "c": "#2E86AB"
    },
    {
      "k": "servers",
      "label": "Servers & systems",
      "c": "#D35400"
    },
    {
      "k": "power",
      "label": "Power & thermal",
      "c": "#1E8E6B"
    },
    {
      "k": "reits",
      "label": "Data-center REITs",
      "c": "#8E5DA8"
    },
    {
      "k": "cloud",
      "label": "Hyperscalers / cloud",
      "c": "#6A4C93"
    }
  ],
  "data": [
    {
      "tk": "NVDA",
      "nm": "NVIDIA",
      "bz": "AI accelerators / GPUs",
      "color": "#76B900",
      "layer": "silicon",
      "share": {
        "pct": 88,
        "rank": "#1",
        "conf": "high",
        "market": "data-center AI accelerators"
      },
      "price": 200.42,
      "mcap": 4854.37,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The demand engine of the AI build-out — GPUs plus the CUDA moat define training compute and pull the whole infrastructure chain (TTM revenue ~$253B, Q1 FY27 +85% YoY).",
      "bull": "~88% AI-training share with CUDA lock-in; ~74% gross margin and prodigious FCF.",
      "bear": "Hyperscaler concentration; any AI-capex digestion hits hardest here.",
      "r": {
        "val": 6,
        "growth": 10,
        "roic": 10,
        "moat": 10,
        "fcf": 10,
        "bs": 10,
        "scal": 10
      },
      "m": {
        "peTTM": 31.9,
        "peFwd": 15.7,
        "pegFwd": 0.5,
        "evEbitda": 29.1,
        "evSales": 19,
        "pfcf": 30,
        "fcfYield": 2.4,
        "revCagrHist": 85.2,
        "epsCagrFwd": 45,
        "gross": 74.1,
        "op": 65.6,
        "net": 63.0,
        "roic": 90,
        "roe": 114.3,
        "fcfMargin": 48,
        "fcfConv": 95,
        "sbc": 3.5,
        "netDebtEbitda": -1.5,
        "intCov": 999
      },
      "d": {
        "revPS": 10.42,
        "netCashPS": 1.5,
        "fcfM": 0.48
      }
    },
    {
      "tk": "AVGO",
      "nm": "Broadcom",
      "bz": "Custom AI silicon + networking",
      "color": "#CC092F",
      "layer": "silicon",
      "share": {
        "pct": 65,
        "rank": "#1",
        "conf": "medium",
        "market": "custom AI accelerator silicon"
      },
      "price": 372.1,
      "mcap": 1770.3,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The hyperscaler-ASIC and networking-silicon winner with a sticky software tail; Q1 CY26 AI chip revenue ~$10.8B, +143% YoY.",
      "bull": "Co-leader in custom AI ASICs + data-center networking; huge FCF.",
      "bear": "M&A-built portfolio with VMware debt; high trailing multiple.",
      "r": {
        "val": 5,
        "growth": 9,
        "roic": 8,
        "moat": 8,
        "fcf": 10,
        "bs": 6,
        "scal": 9
      },
      "m": {
        "peTTM": 61.7,
        "peFwd": 19.2,
        "pegFwd": 1,
        "evEbitda": 43.3,
        "evSales": 24.1,
        "pfcf": 35,
        "fcfYield": 2,
        "revCagrHist": 47.9,
        "epsCagrFwd": 28,
        "gross": 76.3,
        "op": 49.0,
        "net": 38.8,
        "roic": 18,
        "roe": 37.3,
        "fcfMargin": 42,
        "fcfConv": 100,
        "sbc": 5,
        "netDebtEbitda": 1.8,
        "intCov": 9
      },
      "d": {
        "revPS": 15.94,
        "netCashPS": -12,
        "fcfM": 0.42
      }
    },
    {
      "tk": "AMD",
      "nm": "AMD",
      "bz": "CPUs + AI accelerators",
      "color": "#ED1C24",
      "layer": "silicon",
      "share": {
        "pct": 29,
        "rank": "#2",
        "conf": "high",
        "market": "x86 CPUs (units)"
      },
      "price": 452.4,
      "mcap": 737.68,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The only credible non-NVIDIA AI-GPU roadmap plus durable server-CPU share gains; 2025 revenue $34.6B (+34%), TTM ~$37.5B.",
      "bull": "Server-CPU share gains + MI-series optionality; asset-light, net cash.",
      "bear": "Trailing P/E ~110 and fwd ~52 bake in a big, unproven ramp.",
      "r": {
        "val": 2,
        "growth": 9,
        "roic": 5,
        "moat": 6,
        "fcf": 7,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 150.8,
        "peFwd": 34.6,
        "pegFwd": 1.7,
        "evEbitda": 98.1,
        "evSales": 19.5,
        "pfcf": 70,
        "fcfYield": 1.3,
        "revCagrHist": 37.8,
        "epsCagrFwd": 40,
        "gross": 53.1,
        "op": 14.4,
        "net": 13.4,
        "roic": 9,
        "roe": 8.1,
        "fcfMargin": 16,
        "fcfConv": 100,
        "sbc": 6,
        "netDebtEbitda": -0.5,
        "intCov": 99
      },
      "d": {
        "revPS": 23.02,
        "netCashPS": 3,
        "fcfM": 0.16
      }
    },
    {
      "tk": "MU",
      "nm": "Micron",
      "bz": "DRAM / HBM memory",
      "color": "#0073CF",
      "layer": "memory",
      "share": {
        "pct": 23,
        "rank": "#3",
        "conf": "high",
        "market": "DRAM + HBM memory"
      },
      "price": 891.88,
      "mcap": 1005.8,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The Western HBM lever — AI accelerators need ever more high-bandwidth memory; FY25 revenue $37.4B (+49%) and the cycle has turned hard in Micron's favor (fwd P/E ~8.5 on peak earnings).",
      "bull": "HBM sold out with pricing power; memory up-cycle and US fab incentives.",
      "bear": "Brutally cyclical commodity memory; heavy capex; stock ran to record highs.",
      "r": {
        "val": 6,
        "growth": 9,
        "roic": 7,
        "moat": 6,
        "fcf": 6,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 42.2,
        "peFwd": 8.0,
        "pegFwd": 0.3,
        "evEbitda": 27.2,
        "evSales": 17.2,
        "pfcf": 14,
        "fcfYield": 3,
        "revCagrHist": 196.3,
        "epsCagrFwd": 30,
        "gross": 58.4,
        "op": 67.6,
        "net": 41.5,
        "roic": 18,
        "roe": 39.8,
        "fcfMargin": 18,
        "fcfConv": 75,
        "sbc": 3,
        "netDebtEbitda": 0.3,
        "intCov": 30
      },
      "d": {
        "revPS": 51.8,
        "netCashPS": -10,
        "fcfM": 0.15
      }
    },
    {
      "tk": "ANET",
      "nm": "Arista Networks",
      "bz": "Data-center networking",
      "color": "#249FDB",
      "layer": "networking",
      "share": {
        "pct": 45,
        "rank": "#1",
        "conf": "high",
        "market": "high-speed data-center switching"
      },
      "price": 151.76,
      "mcap": 191.09,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The AI-back-end networking standard — 400/800G Ethernet for the largest AI clusters; TTM revenue ~$9.7B, 2026 guide raised to ~$11.5B, ~38% net margin.",
      "bull": "Share leader in cloud/AI Ethernet; ~65% gross margin, net cash.",
      "bear": "Hyperscaler customer concentration; supply constraints; ~46x fwd P/E.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 10,
        "moat": 8,
        "fcf": 9,
        "bs": 10,
        "scal": 8
      },
      "m": {
        "peTTM": 52.3,
        "peFwd": 34.1,
        "pegFwd": 2,
        "evEbitda": 42.2,
        "evSales": 18.4,
        "pfcf": 50,
        "fcfYield": 1.8,
        "revCagrHist": 35.1,
        "epsCagrFwd": 18,
        "gross": 63.5,
        "op": 42.7,
        "net": 38.3,
        "roic": 30,
        "roe": 31.5,
        "fcfMargin": 35,
        "fcfConv": 95,
        "sbc": 3,
        "netDebtEbitda": -2,
        "intCov": 999
      },
      "d": {
        "revPS": 7.72,
        "netCashPS": 8,
        "fcfM": 0.35
      }
    },
    {
      "tk": "COHR",
      "nm": "Coherent",
      "bz": "Optical transceivers & lasers",
      "color": "#005EB8",
      "layer": "optics",
      "share": {
        "pct": 35,
        "rank": "#1",
        "conf": "medium",
        "market": "datacom optical transceivers"
      },
      "price": 354.77,
      "mcap": 69.41,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "An optics turnaround levered straight to AI bandwidth — 800G/1.6T transceivers are the bottleneck inside every AI cluster; FY25 revenue $5.8B (+23%).",
      "bull": "Leading datacom optics share into the AI bandwidth surge; margin recovery.",
      "bear": "Levered balance sheet; competitive transceiver pricing; ~49x fwd P/E.",
      "r": {
        "val": 5,
        "growth": 9,
        "roic": 4,
        "moat": 6,
        "fcf": 5,
        "bs": 4,
        "scal": 7
      },
      "m": {
        "peTTM": 169.7,
        "peFwd": 43.8,
        "pegFwd": 1.5,
        "evEbitda": 53.9,
        "evSales": 10.7,
        "pfcf": 40,
        "fcfYield": 1.5,
        "revCagrHist": 20.5,
        "epsCagrFwd": 30,
        "gross": 37.0,
        "op": 13.6,
        "net": 7.1,
        "roic": 7,
        "roe": 4.7,
        "fcfMargin": 8,
        "fcfConv": 70,
        "sbc": 3,
        "netDebtEbitda": 2.5,
        "intCov": 6
      },
      "d": {
        "revPS": 39.48,
        "netCashPS": -25,
        "fcfM": 0.08
      }
    },
    {
      "tk": "CIEN",
      "nm": "Ciena",
      "bz": "Coherent optical / DCI",
      "color": "#0091B3",
      "layer": "optics",
      "share": {
        "pct": 25,
        "rank": "#2",
        "conf": "medium",
        "market": "coherent optical networking"
      },
      "price": 434.65,
      "mcap": 61.53,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Coherent optical systems connecting data centers; Q2 FY26 revenue +40% YoY, FY26 guide raised to ~$6.3B (+32%), cloud-provider revenue 42% of total and +76%.",
      "bull": "DCI demand from hyperscalers (cloud now 42% of revenue); $7.7B backlog.",
      "bear": "Lumpy carrier mix; gross-margin pressure; valuation has run with the AI-optics trade.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 6,
        "moat": 6,
        "fcf": 6,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 145.4,
        "peFwd": 45.2,
        "pegFwd": 1.4,
        "evEbitda": 78.8,
        "evSales": 11.1,
        "pfcf": 40,
        "fcfYield": 2,
        "revCagrHist": 39.5,
        "epsCagrFwd": 32,
        "gross": 43.0,
        "op": 15.2,
        "net": 7.9,
        "roic": 9,
        "roe": 15.5,
        "fcfMargin": 10,
        "fcfConv": 80,
        "sbc": 3,
        "netDebtEbitda": 1,
        "intCov": 12
      },
      "d": {
        "revPS": 39.28,
        "netCashPS": -5,
        "fcfM": 0.09
      }
    },
    {
      "tk": "SMCI",
      "nm": "Super Micro",
      "bz": "AI servers & liquid-cooled systems",
      "color": "#19A974",
      "layer": "servers",
      "share": {
        "pct": 8,
        "rank": "#2",
        "conf": "low",
        "market": "AI server systems"
      },
      "price": 29.27,
      "mcap": 17.6,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The fastest AI-server assembler, first to scale liquid-cooled racks (~$39B of recent orders) — high growth, thin margins, and accounting scars.",
      "bull": "First-mover in liquid-cooled AI racks; rapid revenue scaling.",
      "bear": "Wafer-thin margins; a $7B financing plan sent shares down ~27%; governance overhang.",
      "r": {
        "val": 5,
        "growth": 10,
        "roic": 6,
        "moat": 3,
        "fcf": 3,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 21.4,
        "peFwd": 9.0,
        "pegFwd": 0.5,
        "evEbitda": 16.1,
        "evSales": 0.8,
        "pfcf": 18,
        "fcfYield": 2,
        "revCagrHist": 122.7,
        "epsCagrFwd": 25,
        "gross": 8.4,
        "op": 6.1,
        "net": 3.7,
        "roic": 12,
        "roe": 17.9,
        "fcfMargin": 4,
        "fcfConv": 40,
        "sbc": 2,
        "netDebtEbitda": 0.5,
        "intCov": 15
      },
      "d": {
        "revPS": 56.37,
        "netCashPS": 2,
        "fcfM": 0.04
      }
    },
    {
      "tk": "DELL",
      "nm": "Dell Technologies",
      "bz": "AI servers + infrastructure",
      "color": "#007DB8",
      "layer": "servers",
      "share": {
        "pct": 20,
        "rank": "#1",
        "conf": "high",
        "market": "enterprise & AI server shipments"
      },
      "price": 369.83,
      "mcap": 239.69,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The enterprise AI-server share leader; FY26 revenue $113.5B (+19%), TTM ~$134B, riding a record AI-server backlog.",
      "bull": "#1 AI-server backlog + scale; strong FCF and capital returns.",
      "bear": "Low server margins; PC cyclicality; AI mix dilutes gross margin.",
      "r": {
        "val": 7,
        "growth": 7,
        "roic": 9,
        "moat": 5,
        "fcf": 8,
        "bs": 4,
        "scal": 6
      },
      "m": {
        "peTTM": 30.4,
        "peFwd": 17.5,
        "pegFwd": 1.2,
        "evEbitda": 18.7,
        "evSales": 1.9,
        "pfcf": 14,
        "fcfYield": 5,
        "revCagrHist": 87.5,
        "epsCagrFwd": 12,
        "gross": 19.2,
        "op": 8.3,
        "net": 6.3,
        "roic": 30,
        "roe": 150,
        "fcfMargin": 6,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 1.5,
        "intCov": 12
      },
      "d": {
        "revPS": 201.73,
        "netCashPS": -15,
        "fcfM": 0.06
      }
    },
    {
      "tk": "VRT",
      "nm": "Vertiv",
      "bz": "Power & thermal management",
      "color": "#00857D",
      "layer": "power",
      "share": {
        "pct": 22,
        "rank": "#1",
        "conf": "high",
        "market": "data-center power & cooling systems"
      },
      "price": 280.98,
      "mcap": 107.93,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The pure-play on data-center power and liquid cooling — Q1 26 organic sales +23%, FY26 guide $13.5-14B (+~30%), adj. op margin ~23%, backlog >$12B.",
      "bull": "Leader in DC power/thermal with surging orders and margin expansion.",
      "bear": "Cyclical capex exposure; ~50x fwd P/E leaves little room for error.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 9,
        "moat": 7,
        "fcf": 8,
        "bs": 6,
        "scal": 8
      },
      "m": {
        "peTTM": 70.8,
        "peFwd": 31.7,
        "pegFwd": 1.6,
        "evEbitda": 45.6,
        "evSales": 10.0,
        "pfcf": 45,
        "fcfYield": 1.8,
        "revCagrHist": 30.1,
        "epsCagrFwd": 30,
        "gross": 37.2,
        "op": 16.4,
        "net": 14.4,
        "roic": 22,
        "roe": 45.1,
        "fcfMargin": 14,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": 0.8,
        "intCov": 20
      },
      "d": {
        "revPS": 28.37,
        "netCashPS": -3,
        "fcfM": 0.16
      }
    },
    {
      "tk": "EQIX",
      "nm": "Equinix",
      "bz": "Data-center REIT (colocation)",
      "color": "#ED1C24",
      "layer": "reits",
      "share": {
        "pct": 12,
        "rank": "#1",
        "conf": "high",
        "market": "retail colocation / interconnection"
      },
      "price": 1038.33,
      "mcap": 102.4,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The interconnection-dense colocation REIT — a global network-effect moat; 2026 revenue guide ~$10.2B (+10-11%), ~51% adjusted-EBITDA margin, AFFO +12-14%.",
      "bull": "Interconnection moat and pricing power; durable recurring revenue.",
      "bear": "Capital-intensive REIT; AI training favors hyperscale over retail colo; ~30x P/FFO.",
      "r": {
        "val": 4,
        "growth": 7,
        "roic": 6,
        "moat": 9,
        "fcf": 7,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 73.5,
        "peFwd": 54.0,
        "pegFwd": 4,
        "evEbitda": 29.1,
        "evSales": 13.1,
        "pfcf": 40,
        "fcfYield": 1.9,
        "revCagrHist": 12.1,
        "epsCagrFwd": 12,
        "gross": 51.6,
        "op": 24.3,
        "net": 14.9,
        "roic": 7,
        "roe": 10.1,
        "fcfMargin": 20,
        "fcfConv": 80,
        "sbc": 1,
        "netDebtEbitda": 3,
        "intCov": 8
      },
      "d": {
        "revPS": 97.1,
        "netCashPS": -60,
        "fcfM": 0.2
      }
    },
    {
      "tk": "DLR",
      "nm": "Digital Realty",
      "bz": "Hyperscale data-center REIT",
      "color": "#0061A0",
      "layer": "reits",
      "share": {
        "pct": 10,
        "rank": "#2",
        "conf": "high",
        "market": "hyperscale data-center capacity"
      },
      "price": 180.78,
      "mcap": 64.66,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Scaled hyperscale-capacity landlord; 2025 core FFO/sh $7.39 (+10%), 2026 guide $7.90-8.00, ~2.6% dividend yield, leasing into record demand.",
      "bull": "Record hyperscale leasing and a large development pipeline.",
      "bear": "Funding/dilution needs; rate-sensitive; tenant concentration.",
      "r": {
        "val": 5,
        "growth": 6,
        "roic": 5,
        "moat": 8,
        "fcf": 6,
        "bs": 5,
        "scal": 6
      },
      "m": {
        "peTTM": 49.0,
        "peFwd": 63.1,
        "pegFwd": 4,
        "evEbitda": 28.8,
        "evSales": 13.2,
        "pfcf": 45,
        "fcfYield": 2.6,
        "revCagrHist": 16.7,
        "epsCagrFwd": 8,
        "gross": 55.3,
        "op": 17.2,
        "net": 21.8,
        "roic": 5,
        "roe": 5.7,
        "fcfMargin": 18,
        "fcfConv": 70,
        "sbc": 1,
        "netDebtEbitda": 5.5,
        "intCov": 5
      },
      "d": {
        "revPS": 18.47,
        "netCashPS": -50,
        "fcfM": 0.16
      }
    },
    {
      "tk": "MSFT",
      "nm": "Microsoft",
      "bz": "Hyperscaler (Azure + OpenAI)",
      "color": "#737373",
      "layer": "cloud",
      "share": {
        "pct": 24,
        "rank": "#2",
        "conf": "high",
        "market": "public cloud (IaaS+PaaS)"
      },
      "price": 397.36,
      "mcap": 2951.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The enterprise AI distribution machine — Azure + Copilot on the OpenAI partnership; TTM revenue $318B (+18%), ~47% operating margin.",
      "bull": "Azure AI growth + Copilot attach across a vast install base; fortress balance sheet.",
      "bear": "Enormous AI capex pressures FCF (recently negative growth); ~22x fwd for mega-cap.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 10,
        "moat": 10,
        "fcf": 9,
        "bs": 10,
        "scal": 9
      },
      "m": {
        "peTTM": 23.7,
        "peFwd": 20.5,
        "pegFwd": 2.4,
        "evEbitda": 16.3,
        "evSales": 9.4,
        "pfcf": 40,
        "fcfYield": 2.3,
        "revCagrHist": 18.3,
        "epsCagrFwd": 14,
        "gross": 68.3,
        "op": 46.3,
        "net": 39.3,
        "roic": 28,
        "roe": 34.0,
        "fcfMargin": 28,
        "fcfConv": 90,
        "sbc": 2,
        "netDebtEbitda": -0.5,
        "intCov": 999
      },
      "d": {
        "revPS": 42.84,
        "netCashPS": 5,
        "fcfM": 0.3
      }
    },
    {
      "tk": "ORCL",
      "nm": "Oracle",
      "bz": "Cloud infrastructure (OCI)",
      "color": "#C74634",
      "layer": "cloud",
      "share": {
        "pct": 6,
        "rank": "#4",
        "conf": "medium",
        "market": "public cloud infrastructure (OCI)"
      },
      "price": 201.26,
      "mcap": 578.83,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The surprise AI-cloud share-taker — RPO backlog ~$553B (+325% YoY) as AI labs rent OCI; FY revenue $57.4B (+8%), Q4 guide +18-20% cc, funded by heavy debt-financed capex.",
      "bull": "Explosive OCI/RPO backlog; differentiated AI-cluster economics.",
      "bear": "Debt-funded capex and weak near-term FCF; backlog conversion is the open question.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 7,
        "moat": 6,
        "fcf": 5,
        "bs": 4,
        "scal": 8
      },
      "m": {
        "peTTM": 36.1,
        "peFwd": 25.0,
        "pegFwd": 1.5,
        "evEbitda": 25.8,
        "evSales": 11.0,
        "pfcf": 45,
        "fcfYield": 1.5,
        "revCagrHist": 21.7,
        "epsCagrFwd": 18,
        "gross": 67.1,
        "op": 32.7,
        "net": 25.3,
        "roic": 15,
        "roe": 57.6,
        "fcfMargin": 8,
        "fcfConv": 40,
        "sbc": 3,
        "netDebtEbitda": 3,
        "intCov": 8
      },
      "d": {
        "revPS": 22.54,
        "netCashPS": -25,
        "fcfM": 0.1
      }
    }
  ]
};
