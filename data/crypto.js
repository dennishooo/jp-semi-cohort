/* crypto — data + copy for the shared dashboard engine. Quantitative fields refreshed 2026-06-11 via scripts/refresh_data.py; radar scores & ROIC/FCF estimates are curated. */
window.CONFIG = {
  "meta": {
    "title": "Crypto & Digital Assets — 3-Year Comparison",
    "hero": "<div class=\"eyebrow reveal\">Equity comparison · 3-year horizon · digital-asset value chain</div>\n    <h1 class=\"reveal\" style=\"--d:.06s\">The whole <span class=\"lede\">digital asset</span><br>value chain,<br><span class=\"tnum\">10</span> names deep.</h1>\n    <p class=\"reveal\" style=\"--d:.16s\">From the exchanges and brokers, through the miners (and their AI-compute pivots), the leveraged digital-asset treasuries,\n       the stablecoin and infrastructure issuers, out to the asset managers channeling institutional flows. A volatile, high-beta theme,\n       graded on returns vs. cost of capital, moat direction, balance-sheet resilience and what today's price assumes.</p>\n    <div class=\"statrow reveal\" style=\"--d:.24s\">\n      <div class=\"stat\"><div class=\"sv\" data-count=\"10\">0</div><div class=\"sl\">Companies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"5\">0</div><div class=\"sl\">Chain layers</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"1\">0</div><div class=\"sl\">Currencies</div></div>\n      <div class=\"stat\"><div class=\"sv\" data-count=\"6\">0</div><div class=\"sl\">Lenses &amp; views</div></div>\n    </div>\n    <div class=\"meta reveal\" style=\"--d:.3s\">\n      <span><b>Prices &amp; caps</b> as of ~10 Jun 2026 (point-in-time)</span>\n      <span><b>Source</b> public market data / SEC filings</span>\n      <span><b>Derived &amp; score fields</b> estimates</span>\n    </div>\n    <div class=\"scrollcue reveal\" style=\"--d:.38s\">Scroll to explore <span class=\"arr\">&#8595;</span></div>\n    <div class=\"flag\" id=\"tickerflag\">\n      <b>Accuracy note -</b> price, market cap and revenue are from public market data and filings <b>as of ~10 Jun 2026</b> and drift as\n      prices move. ROIC, FCF and the 0-10 radar scores are derived estimates. Almost every name here is a <b>high-beta proxy for crypto\n      prices</b>: miners and the MSTR treasury vehicle carry negative or n/m earnings and heavy dilution, and are graded on balance-sheet\n      runway and BTC exposure (read MSTR on bitcoin-NAV, not P/E). BlackRock is included only for its dominant spot-BTC ETF (IBIT).</div>",
    "footer": "<b>Sources &amp; method.</b> Prices, market caps and revenue are from public market data and SEC filings <b>as of ~10 Jun 2026</b> and are point-in-time. ROIC, ROE, FCF margin/conversion, EV/EBITDA, net-debt and the 0-10 radar scores are the author's estimates and normalizations. Every name is a high-beta crypto proxy; miners are typically loss-making at lower BTC prices, and MSTR is best read on bitcoin net-asset-value per share rather than earnings. Galaxy's reported \"revenue\" is gross/notional and not comparable. Reverse-DCF is unreliable for the pre-profit names.<br><br><b>Verify live before acting.</b> Not investment advice; the author is not a financial adviser.",
    "captions": {
      "radar": "A crypto exchange and a Bitcoin miner can score similarly for opposite reasons.",
      "heatmap": "<span class=\"dec\">Decision it helps make:</span> the full grid, color-graded best&#8594;worst (green = best). Click a column to sort. Headline figures sourced ~10 Jun 2026; ROIC/FCF rows are estimates. Miners and treasuries show negative/n/m multiples - read them on Bitcoin exposure and cash runway, not GAAP returns.",
      "market": "<span class=\"dec\">Decision it helps make:</span> who actually <em>owns</em> their slice of the chain. Bars show approximate global share <b>within each company's served market</b> - grouped by layer, so a leader (US exchange, USDC, spot-ETF) reads differently from a contested field (miners, treasuries). The denominator is labelled per bar; estimates."
    },
    "naText": "n/a — outside a single served market"
  },
  "layers": [
    {
      "k": "exchange",
      "label": "Exchanges & brokers",
      "c": "#C0392B"
    },
    {
      "k": "miner",
      "label": "Miners & compute",
      "c": "#D35400"
    },
    {
      "k": "treasury",
      "label": "Digital-asset treasuries",
      "c": "#1B6CA8"
    },
    {
      "k": "stablecoin",
      "label": "Stablecoin & infrastructure",
      "c": "#1E8E6B"
    },
    {
      "k": "services",
      "label": "Asset mgmt & ETF",
      "c": "#8E5DA8"
    }
  ],
  "data": [
    {
      "tk": "COIN",
      "nm": "Coinbase",
      "bz": "Crypto exchange + custody",
      "color": "#0052FF",
      "layer": "exchange",
      "share": {
        "pct": 50,
        "rank": "#1",
        "conf": "high",
        "market": "U.S. regulated crypto exchange"
      },
      "price": 153.97,
      "mcap": 40.57,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The blue-chip US crypto exchange — trading, custody, USDC economics and L2 (Base); Q1 26 revenue $1.41B but transaction revenue fell 23% Q/Q as the cycle cooled.",
      "bull": "Dominant US exchange + USDC/Base optionality; profitable in up-markets.",
      "bear": "Earnings swing violently with crypto volumes; fee compression; regulation.",
      "r": {
        "val": 4,
        "growth": 8,
        "roic": 7,
        "moat": 8,
        "fcf": 7,
        "bs": 7,
        "scal": 9
      },
      "m": {
        "peTTM": 57.2,
        "peFwd": 31.0,
        "pegFwd": 2.5,
        "evEbitda": 38.0,
        "evSales": 6.1,
        "pfcf": 30,
        "fcfYield": 3,
        "revCagrHist": -30.8,
        "epsCagrFwd": 15,
        "gross": 85.5,
        "op": -7.1,
        "net": 12.7,
        "roic": 18,
        "roe": 6.7,
        "fcfMargin": 35,
        "fcfConv": 95,
        "sbc": 8,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 23.92,
        "netCashPS": 16,
        "fcfM": 0.35
      }
    },
    {
      "tk": "HOOD",
      "nm": "Robinhood",
      "bz": "Retail brokerage + crypto",
      "color": "#00C805",
      "layer": "exchange",
      "share": {
        "pct": 15,
        "rank": "#3",
        "conf": "medium",
        "market": "retail brokerage + crypto trading"
      },
      "price": 86.36,
      "mcap": 77.77,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The retail platform where equities, options and crypto converge — surging crypto and subscription revenue, now profitable; a high-beta proxy for retail risk appetite.",
      "bull": "Crypto + net-interest + subscriptions reaccelerating; high incremental margins.",
      "bear": "Cyclical retail/crypto exposure; heavy SBC; rich multiple.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 6,
        "moat": 6,
        "fcf": 8,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 41.9,
        "peFwd": 30.8,
        "pegFwd": 1,
        "evEbitda": 35,
        "evSales": 15.7,
        "pfcf": 45,
        "fcfYield": 1.5,
        "revCagrHist": 15.1,
        "epsCagrFwd": 35,
        "gross": 92.2,
        "op": 38.5,
        "net": 41.1,
        "roic": 10,
        "roe": 21.5,
        "fcfMargin": 40,
        "fcfConv": 110,
        "sbc": 8,
        "netDebtEbitda": -3,
        "intCov": 999
      },
      "d": {
        "revPS": 5.17,
        "netCashPS": 6,
        "fcfM": 0.4
      }
    },
    {
      "tk": "MARA",
      "nm": "MARA Holdings",
      "bz": "Bitcoin miner + treasury",
      "color": "#FF6B00",
      "layer": "miner",
      "share": {
        "pct": 15,
        "rank": "#1",
        "conf": "medium",
        "market": "Bitcoin hash-rate"
      },
      "price": 12.62,
      "mcap": 4.81,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "One of the largest Bitcoin miners and the #2 corporate BTC holder (~53,250 BTC, ~$3.6B); Q1 26 revenue $174.6M — a leveraged, volatile proxy for Bitcoin and hash-price.",
      "bull": "Scaled hash-rate + large BTC treasury; energy-cost and AI-pivot focus.",
      "bear": "Post-halving economics, dilution, and full Bitcoin-price beta.",
      "r": {
        "val": 3,
        "growth": 8,
        "roic": 2,
        "moat": 4,
        "fcf": 3,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 2,
        "evEbitda": -9.2,
        "evSales": 7.9,
        "pfcf": 40,
        "fcfYield": -2,
        "revCagrHist": -18.4,
        "epsCagrFwd": 30,
        "gross": 45.3,
        "op": -10,
        "net": -15,
        "roic": -3,
        "roe": -67.3,
        "fcfMargin": -15,
        "fcfConv": 30,
        "sbc": 10,
        "netDebtEbitda": 1,
        "intCov": 2
      },
      "d": {
        "revPS": 2.38,
        "netCashPS": 9,
        "fcfM": -0.2
      }
    },
    {
      "tk": "RIOT",
      "nm": "Riot Platforms",
      "bz": "Bitcoin miner + AI/HPC pivot",
      "color": "#F7931A",
      "layer": "miner",
      "share": {
        "pct": 10,
        "rank": "#2",
        "conf": "low",
        "market": "Bitcoin hash-rate + HPC hosting"
      },
      "price": 24.08,
      "mcap": 9.11,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A large miner pivoting power capacity toward AI/HPC hosting; TTM revenue ~$653M — optionality to convert cheap megawatts into higher-value compute.",
      "bull": "Big low-cost power footprint with AI/HPC conversion optionality.",
      "bear": "Mining losses, dilution, and uncertain HPC-pivot execution.",
      "r": {
        "val": 3,
        "growth": 9,
        "roic": 1,
        "moat": 4,
        "fcf": 2,
        "bs": 7,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 2,
        "evEbitda": -29.9,
        "evSales": 15.0,
        "pfcf": 45,
        "fcfYield": -3,
        "revCagrHist": 3.6,
        "epsCagrFwd": 40,
        "gross": 32.3,
        "op": -20,
        "net": -132.8,
        "roic": -5,
        "roe": -32.5,
        "fcfMargin": -20,
        "fcfConv": 20,
        "sbc": 12,
        "netDebtEbitda": -0.5,
        "intCov": 2
      },
      "d": {
        "revPS": 1.89,
        "netCashPS": 5,
        "fcfM": -0.25
      }
    },
    {
      "tk": "CLSK",
      "nm": "CleanSpark",
      "bz": "Bitcoin miner (low-cost power)",
      "color": "#0AC18E",
      "layer": "miner",
      "share": {
        "pct": 8,
        "rank": "#3",
        "conf": "low",
        "market": "Bitcoin hash-rate"
      },
      "price": 14.9,
      "mcap": 3.82,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A low-cost, efficiency-focused Bitcoin miner expanding into AI infrastructure; Q2 26 revenue $136M (down 25% Q/Q on lower BTC) but gross margin held above 40%.",
      "bull": "Low energy costs and strong fleet efficiency; disciplined growth.",
      "bear": "Pure mining beta to Bitcoin; halving pressure; capital needs.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 2,
        "moat": 3,
        "fcf": 3,
        "bs": 7,
        "scal": 6
      },
      "m": {
        "peTTM": 999,
        "peFwd": 999,
        "pegFwd": 1.5,
        "evEbitda": -13.8,
        "evSales": 7.2,
        "pfcf": 35,
        "fcfYield": -1,
        "revCagrHist": -24.9,
        "epsCagrFwd": 30,
        "gross": 50.7,
        "op": -5,
        "net": -67.7,
        "roic": -2,
        "roe": -34.8,
        "fcfMargin": -12,
        "fcfConv": 30,
        "sbc": 9,
        "netDebtEbitda": 0.5,
        "intCov": 2
      },
      "d": {
        "revPS": 2.66,
        "netCashPS": 4,
        "fcfM": -0.15
      }
    },
    {
      "tk": "IREN",
      "nm": "IREN Limited",
      "bz": "Bitcoin miner + AI cloud",
      "color": "#5B2A86",
      "layer": "miner",
      "share": {
        "pct": 8,
        "rank": "#4",
        "conf": "low",
        "market": "Bitcoin hash-rate + AI cloud"
      },
      "price": 51.52,
      "mcap": 18.41,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A renewables-powered miner aggressively building GPU/AI-cloud capacity (AI cloud revenue ~doubled to $34M) — up ~649% in a year, funded by $2.6B of convertibles; an AI-data-center story wearing a mining jacket.",
      "bull": "Renewable power + fast AI-cloud buildout; data-center optionality.",
      "bear": "Execution and funding/dilution risk; straddles two volatile businesses.",
      "r": {
        "val": 3,
        "growth": 10,
        "roic": 3,
        "moat": 5,
        "fcf": 3,
        "bs": 7,
        "scal": 8
      },
      "m": {
        "peTTM": 69.6,
        "peFwd": 999,
        "pegFwd": 1.5,
        "evEbitda": 137.0,
        "evSales": 26.6,
        "pfcf": 50,
        "fcfYield": -2,
        "revCagrHist": -0.0,
        "epsCagrFwd": 50,
        "gross": 68.4,
        "op": -64.5,
        "net": 20.9,
        "roic": 2,
        "roe": 7.7,
        "fcfMargin": -15,
        "fcfConv": 30,
        "sbc": 8,
        "netDebtEbitda": 0.5,
        "intCov": 3
      },
      "d": {
        "revPS": 2.65,
        "netCashPS": 3,
        "fcfM": -0.1
      }
    },
    {
      "tk": "MSTR",
      "nm": "Strategy",
      "bz": "Bitcoin treasury (leveraged)",
      "color": "#FF9900",
      "layer": "treasury",
      "share": {
        "pct": 40,
        "rank": "#1",
        "conf": "medium",
        "market": "public Bitcoin treasury holdings"
      },
      "price": 115.35,
      "mcap": 40.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The original leveraged Bitcoin treasury — ~845,000 BTC (~$69B) funded by ~$8.2B of convertibles; notably, the stock now trades roughly at-or-below its bitcoin NAV after a ~58% one-year drop.",
      "bull": "Largest corporate BTC stack; capital-markets machine to keep accumulating.",
      "bear": "Premium has collapsed; convertible leverage amplifies Bitcoin drawdowns.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 3,
        "moat": 5,
        "fcf": 3,
        "bs": 4,
        "scal": 8
      },
      "m": {
        "peTTM": 999,
        "peFwd": 25.9,
        "pegFwd": 9,
        "evEbitda": -4.0,
        "evSales": 113.1,
        "pfcf": 99,
        "fcfYield": -1,
        "revCagrHist": 11.9,
        "epsCagrFwd": 0,
        "gross": 68.1,
        "op": 50,
        "net": 0.0,
        "roic": 3,
        "roe": -30.8,
        "fcfMargin": -5,
        "fcfConv": 0,
        "sbc": 5,
        "netDebtEbitda": 3,
        "intCov": 2
      },
      "d": {
        "revPS": 1.65,
        "netCashPS": 174,
        "fcfM": -0.05
      }
    },
    {
      "tk": "GLXY",
      "nm": "Galaxy Digital",
      "bz": "Crypto financial services + AI",
      "color": "#1B6CA8",
      "layer": "treasury",
      "share": {
        "pct": 10,
        "rank": "#3",
        "conf": "medium",
        "market": "crypto trading, asset mgmt & data centers"
      },
      "price": 30.15,
      "mcap": 11.76,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "A diversified crypto merchant bank — trading, asset management and a data-center pivot (Helios) bridging crypto and AI; Q1 26 swung to a $216M net loss on digital-asset price declines.",
      "bull": "Diversified crypto franchise + AI data-center optionality.",
      "bear": "Earnings volatility; crypto-price beta; pivot execution.",
      "r": {
        "val": 4,
        "growth": 9,
        "roic": 5,
        "moat": 5,
        "fcf": 5,
        "bs": 6,
        "scal": 7
      },
      "m": {
        "peTTM": 999,
        "peFwd": 322.2,
        "pegFwd": 1,
        "evEbitda": 0.2,
        "evSales": 0.2,
        "pfcf": 20,
        "fcfYield": 3,
        "revCagrHist": -20.6,
        "epsCagrFwd": 20,
        "gross": 100.0,
        "op": 95.9,
        "net": -0.3,
        "roic": 8,
        "roe": -6.5,
        "fcfMargin": 15,
        "fcfConv": 90,
        "sbc": 6,
        "netDebtEbitda": 0.5,
        "intCov": 8
      },
      "d": {
        "revPS": 306.04,
        "netCashPS": 4,
        "fcfM": 0.12
      }
    },
    {
      "tk": "CRCL",
      "nm": "Circle Internet",
      "bz": "USDC stablecoin issuer",
      "color": "#1E8E6B",
      "layer": "stablecoin",
      "share": {
        "pct": 80,
        "rank": "#1",
        "conf": "high",
        "market": "fiat-backed stablecoins (USDC)"
      },
      "price": 78.93,
      "mcap": 21.1,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The regulated stablecoin pure-play — USDC is ~80% of dollar stablecoin transactions and the reserves earn the float; Q1 26 revenue $694M, a direct lever on stablecoin adoption and payments rails.",
      "bull": "Dominant regulated stablecoin with growing adoption; reserve-income engine.",
      "bear": "Earnings are interest-rate dependent; Tether dominance; distribution costs.",
      "r": {
        "val": 2,
        "growth": 10,
        "roic": 6,
        "moat": 7,
        "fcf": 7,
        "bs": 8,
        "scal": 9
      },
      "m": {
        "peTTM": 999,
        "peFwd": 35.4,
        "pegFwd": 1,
        "evEbitda": 40,
        "evSales": 6.3,
        "pfcf": 55,
        "fcfYield": 1.5,
        "revCagrHist": 20.0,
        "epsCagrFwd": 35,
        "gross": 8.1,
        "op": 6.5,
        "net": -2.8,
        "roic": 12,
        "roe": -3.0,
        "fcfMargin": 30,
        "fcfConv": 100,
        "sbc": 6,
        "netDebtEbitda": -1,
        "intCov": 99
      },
      "d": {
        "revPS": 13.95,
        "netCashPS": 8,
        "fcfM": 0.3
      }
    },
    {
      "tk": "BLK",
      "nm": "BlackRock",
      "bz": "Crypto asset mgmt (IBIT ETF)",
      "color": "#000000",
      "layer": "services",
      "share": {
        "pct": 50,
        "rank": "#1",
        "conf": "high",
        "market": "spot crypto ETF assets (IBIT)"
      },
      "price": 1010.68,
      "mcap": 164.59,
      "cur": "$",
      "mcapUSD": true,
      "thesis": "The TradFi on-ramp — BlackRock's IBIT is the dominant spot-Bitcoin ETF, channeling institutional flows into the asset class for a fee, atop the world's largest asset manager.",
      "bull": "Dominant crypto-ETF franchise on the largest asset-management platform.",
      "bear": "Crypto is a tiny slice of BLK; fee-rate and market-level sensitivity.",
      "r": {
        "val": 5,
        "growth": 8,
        "roic": 8,
        "moat": 9,
        "fcf": 9,
        "bs": 9,
        "scal": 8
      },
      "m": {
        "peTTM": 25.4,
        "peFwd": 16.6,
        "pegFwd": 1.9,
        "evEbitda": 16,
        "evSales": 6.4,
        "pfcf": 22,
        "fcfYield": 3.8,
        "revCagrHist": 27.0,
        "epsCagrFwd": 11,
        "gross": 46.9,
        "op": 35.6,
        "net": 24.4,
        "roic": 10,
        "roe": 11.9,
        "fcfMargin": 33,
        "fcfConv": 95,
        "sbc": 2,
        "netDebtEbitda": 0.3,
        "intCov": 40
      },
      "d": {
        "revPS": 165.35,
        "netCashPS": 5,
        "fcfM": 0.32
      }
    }
  ]
};
