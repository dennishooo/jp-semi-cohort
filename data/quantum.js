/* quantum — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-06-11 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Quantum Computing — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · quantum-computing value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">quantum</span><br>value chain,<br><span class=\"tnum\">10</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the pure-play quantum hardware names, through the big-tech quantum programs, out to the enabling hardware\n       (cryogenic test, GPU acceleration). The frontier theme of 2026 - mostly optionality, graded on growth, moat direction,\n       balance-sheet runway and what today's price already assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"10\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"3\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of ~10 Jun 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price and market cap are from public market data <b>as of ~10 Jun 2026</b> and drift as prices move. The\n      pure-plays (IonQ, Rigetti, D-Wave, QCI) are <b>pre-revenue research bets</b> with n/m P/E, tiny sales (EV/Sales reads extreme) and\n      deep losses - graded on cash runway and optionality, not returns. For the big-tech names quantum is a rounding error; they are\n      really valued on AI/cloud. ROIC/FCF and the 0-10 scores are derived estimates.</div>",
    "footer": "<b>Sources &amp; method.</b> Prices and market caps are from public market data <b>as of ~10 Jun 2026</b> and are point-in-time. The pure-play quantum names are pre-revenue: P/E is n/m, EV/Sales is extreme on negligible sales, and they are graded on growth, moat and balance-sheet runway, not current returns. For the big-tech names (IBM, Alphabet, Microsoft, Honeywell, NVIDIA) quantum is immaterial to financials - the figures reflect the whole company. ROIC, FCF and the 0-10 radar scores are the author's estimates. Commercial quantum advantage is still years out.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A pure-play qubit maker and a GPU accelerator can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. The pure-plays show n/m multiples, extreme EV/Sales and deeply negative margins - read them on cash runway and growth, not returns; the big-tech names reflect whole-company AI/cloud economics, not quantum.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate share <b>within each company's served market</b> - grouped by layer, so a modality leader (trapped-ion, GPU acceleration) reads differently from a contested field (superconducting, big-tech programs). Figures are illustrative estimates - confidence is low here."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "pureplay",
      "label": "Pure-play quantum",
      "c": "#C0392B"
    },
    {
      "k": "bigtech",
      "label": "Big-tech quantum",
      "c": "#1B6CA8"
    },
    {
      "k": "enabling",
      "label": "Enabling hardware",
      "c": "#1E8E6B"
    }
  ],
  "data": [
    {
      "tk": "IONQ",
      "nm": "IonQ",
      "bz": "Trapped-ion quantum computers",
      "color": "#0B7DC4",
      "layer": "pureplay",
      "share": {
        "pct": 30,
        "rank": "#1",
        "conf": "low",
        "market": "trapped-ion quantum systems"
      },
      "price": 56.63,
      "mcap": 21.14,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The leading pure-play — trapped-ion systems via cloud and on-prem plus a quantum-networking push; 2025 revenue $130M (+202%), 2026 guide $225-245M, but a $510M net loss; valuation is a long-dated option.",
      "bull": "Highest-profile pure-play with networking optionality and a deep cash pile.",
      "bear": "Tiny revenue vs ~$21B cap; deep losses; long road to fault tolerance.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 6,
        "fcf": 1,
        "bs": 8,
        "scal": 8
      },
      "m": {
        "peTTM": 145.2,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": -28.9,
        "evSales": 102.3,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 202,
        "epsCagrFwd": 80,
        "gross": 36.1,
        "op": -99,
        "net": 174.9,
        "roic": -30,
        "roe": 11.3,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 20,
        "netDebtEbitda": -3,
        "intCov": 1
      },
      "d": {
        "revPS": 0.6,
        "netCashPS": 4.5,
        "fcfM": -3
      }
    },
    {
      "tk": "RGTI",
      "nm": "Rigetti Computing",
      "bz": "Superconducting quantum",
      "color": "#6A1B9A",
      "layer": "pureplay",
      "share": {
        "pct": 15,
        "rank": "#3",
        "conf": "low",
        "market": "superconducting quantum processors"
      },
      "price": 19.45,
      "mcap": 6.46,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A superconducting-qubit pure-play building its own fab and chips (Cepheus-1-108Q); 2025 revenue just $7M but Q1 26 +193% on Novera/government deals, op loss $26M, no profit expected in 2026.",
      "bull": "Vertically integrated superconducting stack; improving fidelity and bookings.",
      "bear": "Pre-commercial, cash-burning, dilutive; behind on scale.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 5,
        "fcf": 1,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 250,
        "pfcf": 99,
        "fcfYield": -2,
        "revCagrHist": 198.9,
        "epsCagrFwd": 90,
        "gross": 30,
        "op": -99,
        "net": 0.0,
        "roic": -30,
        "roe": -57.1,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 25,
        "netDebtEbitda": -2,
        "intCov": 1
      },
      "d": {
        "revPS": 0.03,
        "netCashPS": 1.5,
        "fcfM": -8
      }
    },
    {
      "tk": "QBTS",
      "nm": "D-Wave Quantum",
      "bz": "Annealing + gate quantum",
      "color": "#00897B",
      "layer": "pureplay",
      "share": {
        "pct": 10,
        "rank": "#4",
        "conf": "low",
        "market": "quantum annealing systems"
      },
      "price": 23.25,
      "mcap": 8.61,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The commercial-annealing pioneer (with a gate-model roadmap) — actually selling optimization use-cases and now pursuing a ~$100M CHIPS Act award, still deeply unprofitable.",
      "bull": "Real annealing revenue + optimization use-cases; gate-model roadmap.",
      "bear": "Annealing's general-purpose value is debated; losses and dilution.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 5,
        "fcf": 1,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": 99,
        "evSales": 200,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": -80.9,
        "epsCagrFwd": 80,
        "gross": 66.3,
        "op": -99,
        "net": 0.0,
        "roic": -30,
        "roe": -55.3,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 20,
        "netDebtEbitda": -2,
        "intCov": 1
      },
      "d": {
        "revPS": 0.04,
        "netCashPS": 2,
        "fcfM": -6
      }
    },
    {
      "tk": "QUBT",
      "nm": "Quantum Computing Inc",
      "bz": "Photonic quantum + chips",
      "color": "#C2185B",
      "layer": "pureplay",
      "share": {
        "pct": 5,
        "rank": "#5",
        "conf": "low",
        "market": "photonic quantum / thin-film chips"
      },
      "price": 9.53,
      "mcap": 2.15,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A speculative photonic-quantum and thin-film-chip story — Q1 26 revenue $3.7M from the LSI/NuCrypt deals, a ~$1.4B cash pile funding a Fab 2 plan; binary outcomes.",
      "bull": "Photonic approach + a chip-foundry angle; big cash cushion and optionality.",
      "bear": "Almost no revenue; among the most speculative names here.",
      "r": {
        "val": 1,
        "growth": 10,
        "roic": 1,
        "moat": 4,
        "fcf": 1,
        "bs": 8,
        "scal": 6
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 9,
        "evEbitda": -20.2,
        "evSales": 269.7,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 90,
        "epsCagrFwd": 90,
        "gross": -15.4,
        "op": -99,
        "net": 0.0,
        "roic": -30,
        "roe": -4.4,
        "fcfMargin": -99,
        "fcfConv": 0,
        "sbc": 30,
        "netDebtEbitda": -1,
        "intCov": 1
      },
      "d": {
        "revPS": 0.02,
        "netCashPS": 5,
        "fcfM": -8
      }
    },
    {
      "tk": "IBM",
      "nm": "IBM",
      "bz": "Enterprise quantum (Nighthawk/roadmap)",
      "color": "#1F70C1",
      "layer": "bigtech",
      "share": {
        "pct": 25,
        "rank": "#1",
        "conf": "medium",
        "market": "enterprise quantum systems & cloud"
      },
      "price": 272.36,
      "mcap": 255.99,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The enterprise quantum leader by roadmap and installed systems — committing $10B over five years, targeting a Nighthawk 360-qubit system by end-2026; a profitable, dividend-paying software/services giant funding the research.",
      "bull": "Credible quantum roadmap + enterprise distribution; cash-generative base.",
      "bear": "Quantum is immaterial to earnings today; core growth is modest.",
      "r": {
        "val": 5,
        "growth": 5,
        "roic": 7,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 24.1,
        "peFwd": 20.3,
        "pegFwd": 2.6,
        "evEbitda": 18.9,
        "evSales": 4.6,
        "pfcf": 18,
        "fcfYield": 5,
        "revCagrHist": 9.5,
        "epsCagrFwd": 7,
        "gross": 58.4,
        "op": 13.8,
        "net": 15.6,
        "roic": 12,
        "roe": 35.8,
        "fcfMargin": 16,
        "fcfConv": 90,
        "sbc": 3,
        "netDebtEbitda": 2,
        "intCov": 12
      },
      "d": {
        "revPS": 73.71,
        "netCashPS": -25,
        "fcfM": 0.16
      }
    },
    {
      "tk": "GOOGL",
      "nm": "Alphabet",
      "bz": "Quantum (Willow) + AI",
      "color": "#EA4335",
      "layer": "bigtech",
      "share": {
        "pct": 25,
        "rank": "#1",
        "conf": "medium",
        "market": "quantum research (Willow chip)"
      },
      "price": 356.38,
      "mcap": 4346.03,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Willow's error-correction milestones make Alphabet a quantum frontrunner — funded by one of the best cash engines in the world (Q1 26 revenue +22%), now raising ~$85B for AI infrastructure.",
      "bull": "Leading quantum research + limitless funding; AI/search/cloud cash machine.",
      "bear": "Quantum is a rounding error to the P&L; valued on AI/ads, not qubits.",
      "r": {
        "val": 6,
        "growth": 8,
        "roic": 10,
        "moat": 9,
        "fcf": 9,
        "bs": 10,
        "scal": 8
      },
      "m": {
        "peTTM": 27.8,
        "peFwd": 24.6,
        "pegFwd": 1.2,
        "evEbitda": 26.6,
        "evSales": 10.1,
        "pfcf": 26,
        "fcfYield": 3,
        "revCagrHist": 21.8,
        "epsCagrFwd": 14,
        "gross": 60.4,
        "op": 36.1,
        "net": 37.9,
        "roic": 30,
        "roe": 38.9,
        "fcfMargin": 24,
        "fcfConv": 90,
        "sbc": 4,
        "netDebtEbitda": -1,
        "intCov": 999
      },
      "d": {
        "revPS": 34.93,
        "netCashPS": 3,
        "fcfM": 0.24
      }
    },
    {
      "tk": "MSFT",
      "nm": "Microsoft",
      "bz": "Topological quantum (Majorana)",
      "color": "#737373",
      "layer": "bigtech",
      "share": {
        "pct": 20,
        "rank": "#2",
        "conf": "low",
        "market": "topological quantum + Azure Quantum"
      },
      "price": 397.36,
      "mcap": 2951.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A differentiated topological-qubit bet (Majorana 1) plus Azure Quantum as the cloud distribution layer, on top of the enterprise-AI machine (TTM revenue $318B, ~47% op margin).",
      "bull": "Novel topological approach + Azure Quantum distribution; fortress base.",
      "bear": "Topological qubits unproven; quantum immaterial to near-term results.",
      "r": {
        "val": 4,
        "growth": 8,
        "roic": 10,
        "moat": 10,
        "fcf": 9,
        "bs": 10,
        "scal": 8
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
      "tk": "HON",
      "nm": "Honeywell",
      "bz": "Quantinuum (trapped-ion) parent",
      "color": "#E61E28",
      "layer": "bigtech",
      "share": {
        "pct": 30,
        "rank": "#1",
        "conf": "medium",
        "market": "trapped-ion quantum (Quantinuum)"
      },
      "price": 205.88,
      "mcap": 130.46,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "Honeywell holds the majority of Quantinuum, a hardware leader that IPO'd on 5 Jun 2026 ($60/share, ~$10B pre-money) — a quantum call option inside a diversified industrial (2026 EPS guide $8.88-9.18).",
      "bull": "Majority stake in a top trapped-ion player, now public; value-surfacing IPO.",
      "bear": "Core Honeywell is slow-growth industrial; aerospace spin-off in motion.",
      "r": {
        "val": 5,
        "growth": 5,
        "roic": 8,
        "moat": 8,
        "fcf": 8,
        "bs": 6,
        "scal": 6
      },
      "m": {
        "peTTM": 32.9,
        "peFwd": 18.0,
        "pegFwd": 2.6,
        "evEbitda": 18.4,
        "evSales": 4.2,
        "pfcf": 22,
        "fcfYield": 4,
        "revCagrHist": 2.4,
        "epsCagrFwd": 8,
        "gross": 36.9,
        "op": 21,
        "net": 10.9,
        "roic": 14,
        "roe": 24.3,
        "fcfMargin": 18,
        "fcfConv": 90,
        "sbc": 1,
        "netDebtEbitda": 1.8,
        "intCov": 15
      },
      "d": {
        "revPS": 59.25,
        "netCashPS": -15,
        "fcfM": 0.15
      }
    },
    {
      "tk": "FORM",
      "nm": "FormFactor",
      "bz": "Cryogenic test & probe cards",
      "color": "#1E8E6B",
      "layer": "enabling",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "medium",
        "market": "semiconductor probe cards + cryo test"
      },
      "price": 115.81,
      "mcap": 9.03,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A picks-and-shovels enabler — probe cards and cryogenic test systems needed to characterize quantum and advanced chips; 2025 revenue $785M, Q1 26 +32%, a real profitable base under the quantum/cryo optionality.",
      "bull": "Profitable test-equipment franchise with quantum/cryo optionality.",
      "bear": "Quantum is a small slice; semiconductor-test cyclicality dominates; ~134x trailing P/E.",
      "r": {
        "val": 3,
        "growth": 7,
        "roic": 6,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 7
      },
      "m": {
        "peTTM": 139.5,
        "peFwd": 41.5,
        "pegFwd": 2.5,
        "evEbitda": 63.7,
        "evSales": 10.4,
        "pfcf": 40,
        "fcfYield": 1.5,
        "revCagrHist": 32.0,
        "epsCagrFwd": 15,
        "gross": 42.2,
        "op": 17.7,
        "net": 8.1,
        "roic": 12,
        "roe": 6.8,
        "fcfMargin": 14,
        "fcfConv": 90,
        "sbc": 4,
        "netDebtEbitda": -1.5,
        "intCov": 999
      },
      "d": {
        "revPS": 10.84,
        "netCashPS": 8,
        "fcfM": 0.14
      }
    },
    {
      "tk": "NVDA",
      "nm": "NVIDIA",
      "bz": "Quantum-classical (CUDA-Q + GPUs)",
      "color": "#76B900",
      "layer": "enabling",
      "share": {
        "pct": 80,
        "rank": "#1",
        "conf": "high",
        "market": "GPU-accelerated quantum simulation"
      },
      "price": 200.42,
      "mcap": 4854.37,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The hybrid-quantum kingmaker — GPUs and CUDA-Q simulate and orchestrate quantum systems, so NVIDIA wins regardless of which qubit modality wins; ~74% gross margin and a vast cash engine.",
      "bull": "Owns the classical-acceleration layer every quantum roadmap leans on; cash machine.",
      "bear": "Quantum is immaterial to revenue; valued entirely on AI compute.",
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
        "fcfYield": 2.5,
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
    }
  ]
};
