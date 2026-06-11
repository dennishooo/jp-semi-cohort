# Data refresh report

- **As of:** 2026-06-11
- **Source:** yfinance (Yahoo Finance) — observable fields only
- **Mode:** write
- **Totals:** 226 changed · 6 skipped · 52 need review

Overwritten fields: `price`, `mcap` ($B), `m.peTTM/peFwd/evEbitda/evSales/gross/op/net/roe/revCagrHist`, `d.revPS`. All other fields (the 0-10 radar scores, ROIC/FCF estimates, thesis, bull/bear, share-of-market) are **curated and preserved**.

## ai-infra.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `NVDA` NVIDIA: price: 208.19 -> 200.42; mcap: 5040 -> 4854.37; m.peTTM: 32 -> 30.7; m.peFwd: 24 -> 15.7; m.evEbitda: 22 -> 29.1; m.gross: 74 -> 74.1; m.op: 62 -> 65.6; m.net: 52 -> 63.0; m.roe: 90 -> 114.3; m.revCagrHist: 60 -> 85.2; d.revPS: 10.4 -> 10.42
- `AVGO` Broadcom: price: 371.89 -> 372.1; mcap: 1760 -> 1770.3; m.peTTM: 70 -> 61.7; m.peFwd: 24 -> 19.2; m.evEbitda: 28 -> 43.3; m.evSales: 24 -> 24.1; m.gross: 76 -> 76.3; m.op: 45 -> 49.0; m.net: 40 -> 38.8; m.roe: 40 -> 37.3; m.revCagrHist: 35 -> 47.9; d.revPS: 13 -> 15.94
- `AMD` AMD: price: 467.97 -> 452.4; mcap: 800 -> 737.68; m.peTTM: 110 -> 150.8; m.peFwd: 52 -> 34.6; m.evEbitda: 55 -> 98.1; m.evSales: 21 -> 19.5; m.gross: 52 -> 53.1; m.op: 22 -> 14.4; m.net: 12 -> 13.4; m.roe: 11 -> 8.1; m.revCagrHist: 34 -> 37.8; d.revPS: 23 -> 23.02
- `MU` Micron: price: 879.48 -> 891.88; mcap: 1010 -> 1005.8; m.peTTM: 44 -> 42.2; m.peFwd: 8.5 -> 8.0; m.evEbitda: 8 -> 27.2; m.evSales: 5 -> 17.2; m.gross: 40 -> 58.4; m.op: 33 -> 67.6; m.net: 28 -> 41.5; m.roe: 24 -> 39.8; m.revCagrHist: 49 -> 196.3; d.revPS: 45 -> 51.8
- `ANET` Arista Networks: price: 156.4 -> 151.76; mcap: 194 -> 191.09; m.peTTM: 54 -> 52.3; m.peFwd: 46 -> 34.1; m.evEbitda: 40 -> 42.2; m.evSales: 18 -> 18.4; m.gross: 65 -> 63.5; m.op: 42 -> 42.7; m.net: 38 -> 38.3; m.roe: 32 -> 31.5; m.revCagrHist: 30 -> 35.1; d.revPS: 7.8 -> 7.72
- `COHR` Coherent: price: 356 -> 354.77; mcap: 55 -> 69.41; m.peTTM: 60 -> 169.7; m.peFwd: 48 -> 43.8; m.evEbitda: 18 -> 53.9; m.evSales: 4 -> 10.7; m.gross: 38 -> 37.0; m.op: 15 -> 13.6; m.net: 8 -> 7.1; m.roe: 9 -> 4.7; m.revCagrHist: 23 -> 20.5; d.revPS: 38 -> 39.48
- `CIEN` Ciena: price: 440 -> 434.65; mcap: 62 -> 61.53; m.peTTM: 68 -> 145.4; m.peFwd: 45 -> 45.2; m.evEbitda: 22 -> 78.8; m.evSales: 3 -> 11.1; m.gross: 44 -> 43.0; m.op: 15 -> 15.2; m.net: 10 -> 7.9; m.roe: 14 -> 15.5; m.revCagrHist: 32 -> 39.5; d.revPS: 45 -> 39.28
- `SMCI` Super Micro: price: 40.62 -> 29.27; mcap: 24 -> 17.6; m.peTTM: 21 -> 21.4; m.peFwd: 13 -> 9.0; m.evEbitda: 11 -> 16.1; m.evSales: 0.9 -> 0.8; m.gross: 12 -> 8.4; m.op: 6 -> 6.1; m.net: 5 -> 3.7; m.roe: 16 -> 17.9; m.revCagrHist: 40 -> 122.7; d.revPS: 50 -> 56.37
- `DELL` Dell Technologies: price: 239 -> 369.83; mcap: 248 -> 239.69; m.peTTM: 22 -> 30.4; m.peFwd: 22 -> 17.5; m.evEbitda: 12 -> 18.7; m.evSales: 0.9 -> 1.9; m.gross: 22 -> 19.2; m.op: 7 -> 8.3; m.net: 4 -> 6.3; m.revCagrHist: 19 -> 87.5; d.revPS: 190 -> 201.73
- `VRT` Vertiv: price: 284 -> 280.98; mcap: 121 -> 107.93; m.peTTM: 60 -> 70.8; m.peFwd: 50 -> 31.7; m.evEbitda: 40 -> 45.6; m.evSales: 9 -> 10.0; m.gross: 36 -> 37.2; m.op: 21 -> 16.4; m.net: 15 -> 14.4; m.roe: 40 -> 45.1; m.revCagrHist: 29 -> 30.1; d.revPS: 36 -> 28.37
- `EQIX` Equinix: price: 1059.84 -> 1038.33; mcap: 104 -> 102.4; m.peTTM: 75 -> 73.5; m.peFwd: 60 -> 54.0; m.evEbitda: 22 -> 29.1; m.evSales: 10 -> 13.1; m.gross: 48 -> 51.6; m.op: 18 -> 24.3; m.net: 12 -> 14.9; m.roe: 9 -> 10.1; m.revCagrHist: 11 -> 12.1; d.revPS: 90 -> 97.1
- `DLR` Digital Realty: price: 188.2 -> 180.78; mcap: 70 -> 64.66; m.peTTM: 95 -> 49.0; m.peFwd: 70 -> 63.1; m.evEbitda: 22 -> 28.8; m.evSales: 9 -> 13.2; m.gross: 48 -> 55.3; m.op: 16 -> 17.2; m.net: 9 -> 21.8; m.roe: 6 -> 5.7; m.revCagrHist: 10 -> 16.7; d.revPS: 17 -> 18.47
- `MSFT` Microsoft: price: 403.41 -> 397.36; mcap: 3100 -> 2951.76; m.peTTM: 24 -> 23.7; m.peFwd: 22 -> 20.5; m.evEbitda: 22 -> 16.3; m.evSales: 12 -> 9.4; m.gross: 69 -> 68.3; m.op: 47 -> 46.3; m.net: 36 -> 39.3; m.roe: 33 -> 34.0; m.revCagrHist: 18 -> 18.3; d.revPS: 43 -> 42.84
- `ORCL` Oracle: price: 230.33 -> 201.26; mcap: 603 -> 578.83; m.peTTM: 37 -> 36.1; m.peFwd: 27 -> 18.7; m.evEbitda: 20 -> 25.8; m.evSales: 9 -> 11.0; m.gross: 70 -> 67.1; m.op: 32 -> 32.7; m.net: 22 -> 25.3; m.roe: 80 -> 57.6; m.revCagrHist: 8 -> 21.7; d.revPS: 20.5 -> 22.54

## biopharma.js

- changed: 13 · skipped: 0 · review: 0

**Changed**
- `LLY` Eli Lilly: price: 1153.81 -> 1136.37; mcap: 1020 -> 1013.35; m.peTTM: 50 -> 40.3; m.peFwd: 32 -> 25.5; m.evEbitda: 32 -> 29.0; m.evSales: 17 -> 14.6; m.gross: 82 -> 82.8; m.op: 42 -> 49.4; m.net: 28 -> 35.0; m.roe: 60 -> 107.5; m.revCagrHist: 32 -> 55.5; d.revPS: 70 -> 80.61
- `NVO` Novo Nordisk: price: 42 -> 42.81; mcap: 187 -> 189.61; m.peTTM: 9.95 -> 10.0; m.peFwd: 13.37 -> 12.9; m.evEbitda: 7.7 -> 1.8; m.evSales: 4 -> 1.0; m.gross: 84 -> 83.2; m.op: 45 -> 61.6; m.net: 35 -> 37.2; m.roe: 80 -> 71.4; m.revCagrHist: 6 -> 24.0; d.revPS: 10 -> 73.77
- `VKTX` Viking Therapeutics: price: 29.17 -> 27.75; mcap: 3.97 -> 3.22; m.op: -99 -> 0.0; m.net: -99 -> 0.0; m.roe: -25 -> -70.0
- `AMGN` Amgen: price: 354 -> 337.73; mcap: 189 -> 182.28; m.peTTM: 17 -> 24.0; m.peFwd: 15 -> 14.4; m.evEbitda: 12 -> 13.5; m.evSales: 5 -> 6.1; m.gross: 75 -> 71.4; m.op: 40 -> 33.8; m.net: 28 -> 21.0; m.roe: 90 -> 101.3; m.revCagrHist: 5 -> 5.8; d.revPS: 71 -> 69.12
- `HIMS` Hims & Hers: price: 30 -> 27.78; mcap: 6.8 -> 6.43; m.peTTM: 60 -> 999; m.peFwd: 40 -> 31.2; m.evEbitda: 35 -> 81.7; m.evSales: 2.5 -> 2.9; m.gross: 75 -> 72.9; m.op: 8 -> -7.9; m.net: 7 -> -0.6; m.roe: 18 -> -2.7; m.revCagrHist: 59 -> 3.8; d.revPS: 12 -> 10.46
- `PFE` Pfizer: price: 25.65 -> 25.6; mcap: 146 -> 145.91; m.peTTM: 11 -> 19.5; m.peFwd: 8.9 -> 9.0; m.evEbitda: 8 -> 7.8; m.evSales: 3 -> 3.1; m.gross: 72 -> 74.8; m.op: 28 -> 31.6; m.net: 22 -> 11.8; m.roe: 12 -> 8.3; m.revCagrHist: 2 -> 5.4; d.revPS: 10.7 -> 11.13
- `MRK` Merck: price: 120 -> 119.09; mcap: 295 -> 294.13; m.peTTM: 17 -> 33.5; m.peFwd: 12 -> 12.5; m.evEbitda: 10 -> 11.4; m.evSales: 4 -> 5.1; m.gross: 75 -> 76.7; m.op: 38 -> 38.6; m.net: 30 -> 13.6; m.roe: 30 -> 18.9; m.revCagrHist: 1 -> 4.9; d.revPS: 26 -> 26.42
- `ABBV` AbbVie: price: 229 -> 224.95; mcap: 405 -> 397.44; m.peTTM: 106 -> 111.4; m.peFwd: 15 -> 13.8; m.evEbitda: 14 -> 15.4; m.evSales: 6 -> 7.3; m.gross: 70 -> 72.0; m.op: 35 -> 32.2; m.net: 15 -> 5.8; m.revCagrHist: 9 -> 12.4; d.revPS: 35 -> 35.5
- `RHHBY` Roche: price: 50.55 -> 50.23; mcap: 315 -> 323.53; m.peTTM: 21 -> 19.9; m.peFwd: 17 -> 15.6; m.evEbitda: 13 -> 14.3; m.evSales: 2.5 -> 5.4; m.gross: 72 -> 74.5; m.net: 22 -> 20.3; m.roe: 30 -> 37.3; m.revCagrHist: 4 -> -0.4; d.revPS: 21 -> 9.95
- `TMO` Thermo Fisher: price: 469.63 -> 482.04; mcap: 174.5 -> 179.14; m.peTTM: 28 -> 27.2; m.peFwd: 19 -> 17.7; m.evEbitda: 18 -> 19.4; m.evSales: 4 -> 4.8; m.gross: 42 -> 40.9; m.op: 22 -> 17.9; m.net: 16 -> 15.2; m.roe: 14 -> 13.5; m.revCagrHist: 5 -> 6.2; d.revPS: 117 -> 120.36
- `DHR` Danaher: price: 185.71 -> 183.63; mcap: 131.4 -> 129.97; m.peTTM: 32 -> 36.5; m.peFwd: 20 -> 20.2; m.evEbitda: 20 -> 18.1; m.evSales: 5.5 -> 5.8; m.gross: 60 -> 59.0; m.op: 25 -> 22.9; m.net: 18 -> 14.9; m.roe: 12 -> 7.1; m.revCagrHist: 4 -> 3.7; d.revPS: 35 -> 34.87
- `ISRG` Intuitive Surgical: price: 483 -> 412.02; mcap: 172.6 -> 145.92; m.peTTM: 59 -> 51.8; m.peFwd: 46 -> 34.9; m.evEbitda: 45 -> 36.4; m.evSales: 16 -> 13.4; m.gross: 68 -> 66.3; m.op: 38 -> 30.9; m.net: 30 -> 28.2; m.roe: 18 -> 17.2; m.revCagrHist: 21 -> 23.0; d.revPS: 30 -> 29.7
- `DXCM` Dexcom: price: 77.24 -> 74.77; mcap: 29.8 -> 28.85; m.peTTM: 31 -> 32.1; m.peFwd: 25 -> 24.3; m.evEbitda: 20 -> 21.5; m.evSales: 6 -> 5.8; m.gross: 62 -> 61.5; m.op: 18 -> 21.4; m.net: 15 -> 19.3; m.roe: 20 -> 35.6; m.revCagrHist: 16 -> 15.0; d.revPS: 12 -> 12.39

## crypto.js

- changed: 10 · skipped: 0 · review: 0

**Changed**
- `COIN` Coinbase: price: 174 -> 153.97; mcap: 54 -> 40.57; m.peTTM: 30 -> 57.2; m.peFwd: 44 -> 31.0; m.evEbitda: 20 -> 38.0; m.evSales: 9 -> 6.1; m.gross: 85 -> 85.5; m.op: 35 -> -7.1; m.net: 30 -> 12.7; m.roe: 25 -> 6.7; m.revCagrHist: 30 -> -30.8; d.revPS: 23 -> 23.92
- `HOOD` Robinhood: price: 85 -> 86.36; mcap: 75 -> 77.77; m.peTTM: 55 -> 41.9; m.peFwd: 38 -> 30.8; m.evSales: 18 -> 15.7; m.gross: 88 -> 92.2; m.op: 45 -> 38.5; m.net: 38 -> 41.1; m.roe: 15 -> 21.5; m.revCagrHist: 45 -> 15.1; d.revPS: 4 -> 5.17
- `MARA` MARA Holdings: price: 13.06 -> 12.62; mcap: 5.07 -> 4.81; m.peFwd: 40 -> 999; m.evEbitda: 15 -> -9.2; m.evSales: 5.6 -> 7.9; m.gross: 40 -> 45.3; m.roe: -5 -> -67.3; m.revCagrHist: 30 -> -18.4; d.revPS: 2.3 -> 2.38
- `RIOT` Riot Platforms: price: 25.2 -> 24.08; mcap: 9.56 -> 9.11; m.peFwd: 50 -> 999; m.evEbitda: 18 -> -29.9; m.evSales: 14 -> 15.0; m.gross: 35 -> 32.3; m.net: -25 -> -132.8; m.roe: -6 -> -32.5; m.revCagrHist: 30 -> 3.6; d.revPS: 1.7 -> 1.89
- `CLSK` CleanSpark: price: 16.82 -> 14.9; mcap: 4.1 -> 3.82; m.peFwd: 35 -> 999; m.evEbitda: 12 -> -13.8; m.evSales: 7 -> 7.2; m.gross: 42 -> 50.7; m.net: -10 -> -67.7; m.roe: -4 -> -34.8; m.revCagrHist: 40 -> -24.9; d.revPS: 1.9 -> 2.66
- `IREN` IREN Limited: price: 55.4 -> 51.52; mcap: 19.8 -> 18.41; m.peTTM: 999 -> 69.6; m.peFwd: 40 -> 999; m.evEbitda: 20 -> 137.0; m.evSales: 30 -> 26.6; m.gross: 45 -> 68.4; m.op: 5 -> -64.5; m.net: -5 -> 20.9; m.roe: -2 -> 7.7; m.revCagrHist: 80 -> -0.0; d.revPS: 1.7 -> 2.65
- `MSTR` Strategy: price: 154.2 -> 115.35; mcap: 54 -> 40.76; m.peFwd: 999 -> 25.9; m.evEbitda: 99 -> -4.0; m.evSales: 99 -> 113.1; m.gross: 80 -> 68.1; m.net: 40 -> 0.0; m.roe: 8 -> -30.8; m.revCagrHist: 0 -> 11.9; d.revPS: 1.4 -> 1.65
- `GLXY` Galaxy Digital: price: 32.68 -> 30.15; mcap: 8.43 -> 11.76; m.peTTM: 25 -> 999; m.peFwd: 18 -> 322.2; m.evEbitda: 12 -> 0.2; m.evSales: 5 -> 0.2; m.gross: 60 -> 100.0; m.op: 20 -> 95.9; m.net: 10 -> -0.3; m.roe: 12 -> -6.5; m.revCagrHist: 40 -> -20.6; d.revPS: 4.2 -> 306.04
- `CRCL` Circle Internet: price: 79.12 -> 78.93; mcap: 21.73 -> 21.1; m.peTTM: 80 -> 999; m.peFwd: 45 -> 35.4; m.evSales: 8 -> 6.3; m.gross: 40 -> 8.1; m.op: 30 -> 6.5; m.net: 28 -> -2.8; m.roe: 18 -> -3.0; m.revCagrHist: 40 -> 20.0; d.revPS: 10.2 -> 13.95
- `BLK` BlackRock: price: 1050 -> 1010.68; mcap: 160 -> 164.59; m.peTTM: 24 -> 25.4; m.peFwd: 21 -> 16.6; m.evSales: 7 -> 6.4; m.gross: 50 -> 46.9; m.op: 38 -> 35.6; m.net: 30 -> 24.4; m.roe: 15 -> 11.9; m.revCagrHist: 9 -> 27.0; d.revPS: 67 -> 165.35

## cyber.js

- changed: 11 · skipped: 0 · review: 0

**Changed**
- `PANW` Palo Alto Networks: price: 265.43 -> 263.22; mcap: 216 -> 214.52; m.peTTM: 214 -> 226.9; m.peFwd: 64 -> 63.9; m.evEbitda: 60 -> 143.9; m.evSales: 22 -> 20.1; m.gross: 74 -> 72.0; m.op: 18 -> -2.5; m.net: 12 -> 7.9; m.roe: 20 -> 4.8; m.revCagrHist: 15 -> 31.1; d.revPS: 11.7 -> 14.83
- `CRWD` CrowdStrike: price: 642.8 -> 647.74; mcap: 167 -> 164.89; m.peFwd: 95 -> 103.6; m.evSales: 30 -> 31.6; m.gross: 75 -> 75.1; m.op: 8 -> -2.2; m.net: 5 -> -0.6; m.roe: 10 -> -0.2; m.revCagrHist: 25 -> 25.6; d.revPS: 20 -> 20.22
- `FTNT` Fortinet: price: 136.7 -> 138.88; mcap: 104 -> 101.75; m.peTTM: 40 -> 53.8; m.peFwd: 28.6 -> 40.5; m.evEbitda: 24 -> 41.9; m.evSales: 13 -> 13.9; m.gross: 80 -> 80.3; m.op: 32 -> 31.3; m.net: 25 -> 27.5; m.roe: 60 -> 132.4; m.revCagrHist: 13 -> 20.1; d.revPS: 9.2 -> 9.47
- `ZS` Zscaler: price: 144 -> 124.73; mcap: 22.6 -> 20.17; m.peFwd: 60 -> 27.1; m.evSales: 7 -> 5.8; m.gross: 80 -> 76.7; m.op: 5 -> -3.3; m.net: 3 -> -2.4; m.roe: 8 -> -3.7; m.revCagrHist: 25 -> 25.4; d.revPS: 21 -> 19.98
- `NET` Cloudflare: price: 234.5 -> 219.67; mcap: 87.5 -> 77.97; m.peFwd: 180 -> 140.8; m.evSales: 30 -> 33.1; m.gross: 77 -> 73.3; m.op: 4 -> -9.7; m.net: 3 -> -3.7; m.roe: 7 -> -5.9; m.revCagrHist: 30 -> 33.5; d.revPS: 7.4 -> 6.65
- `OKTA` Okta: price: 81 -> 114.92; mcap: 14.2 -> 19.97; m.peTTM: 61 -> 83.3; m.peFwd: 28 -> 26.9; m.evEbitda: 22 -> 66.7; m.evSales: 5 -> 5.9; m.gross: 76 -> 77.4; m.op: 8 -> 7.3; m.net: 8 -> 8.2; m.roe: 7 -> 3.7; m.revCagrHist: 12 -> 11.2; d.revPS: 16.7 -> 16.99
- `S` SentinelOne: price: 12.5 -> 14.79; mcap: 4.53 -> 5.07; m.peFwd: 80 -> 29.9; m.evEbitda: 60 -> -17.0; m.evSales: 4.5 -> 4.2; m.gross: 75 -> 73.2; m.op: -12 -> -28.8; m.net: -15 -> -30.4; m.roe: -8 -> -21.4; m.revCagrHist: 22 -> 20.8; d.revPS: 3 -> 3.16
- `RPD` Rapid7: price: 7.15 -> 7.21; m.peTTM: 8 -> 20.6; m.peFwd: 6 -> 4.6; m.evEbitda: 9 -> 13.6; m.evSales: 1.5 -> 0.9; m.gross: 70 -> 69.7; m.op: 8 -> 0.0; m.net: 6 -> 2.6; m.roe: 30 -> 19.7; m.revCagrHist: 2 -> -0.3; d.revPS: 13.5 -> 13.16
- `QLYS` Qualys: price: 111.53 -> 110.2; mcap: 3.06 -> 3.88; m.peTTM: 22 -> 19.7; m.peFwd: 19 -> 13.3; m.evEbitda: 14 -> 14.1; m.evSales: 4 -> 5.1; m.gross: 80 -> 83.2; m.op: 30 -> 35.0; m.net: 28 -> 29.4; m.roe: 40 -> 37.7; m.revCagrHist: 10 -> 9.8; d.revPS: 26 -> 19.06
- `TENB` Tenable: price: 27.85 -> 26.8; mcap: 3.08 -> 2.96; m.peFwd: 25 -> 12.3; m.evEbitda: 18 -> 74.4; m.gross: 77 -> 78.2; m.op: 6 -> 4.3; m.net: -3 -> -1.2; m.roe: 20 -> -3.7; m.revCagrHist: 11 -> 9.6; d.revPS: 8.3 -> 8.59
- `GEN` Gen Digital: price: 24.82 -> 24.62; mcap: 15 -> 14.83; m.peTTM: 17 -> 15.7; m.peFwd: 9 -> 7.5; m.evEbitda: 12 -> 9.5; m.evSales: 5 -> 4.5; m.gross: 82 -> 78.5; m.op: 50 -> 63.4; m.net: 30 -> 19.5; m.roe: 40 -> 39.9; d.revPS: 8 -> 8.17

## finance.js

- changed: 27 · skipped: 1 · review: 3

**Changed**
- `ICE` Intercontinental Exchange: price: 165 -> 140.34; mcap: 95 -> 79.36; m.peTTM: 28 -> 20.6; m.peFwd: 22 -> 15.9; m.evEbitda: 18 -> 15.0; m.gross: 72 -> 100.0; m.op: 45 -> 57.3; m.net: 28 -> 37.7; m.roe: 14 -> 13.9; m.revCagrHist: 7 -> 20.4; d.revPS: 28 -> 18.3
- `CME` CME Group: price: 260 -> 263.8; mcap: 94 -> 95.32; m.peTTM: 26 -> 22.5; m.peFwd: 24 -> 20.4; m.evEbitda: 20 -> 20.2; m.evSales: 16 -> 14.4; m.gross: 85 -> 100.0; m.op: 65 -> 69.8; m.net: 58 -> 63.3; m.roe: 14 -> 15.9; m.revCagrHist: 5 -> 14.4; d.revPS: 13 -> 18.75
- `LSEG` London Stock Exchange Group (via `LSEG.L`): price: 105 -> 9014.0; m.peTTM: 28 -> 38.0; m.peFwd: 24 -> 16.8; m.evEbitda: 17 -> 16.4; m.evSales: 7.5 -> 5.9; m.gross: 68 -> 88.1; m.op: 30 -> 24.9; m.net: 22 -> 13.4; m.roe: 11 -> 6.4; m.revCagrHist: 7 -> 4.6; d.revPS: 20 -> 17.84
- `SPGI` S&P Global: price: 520 -> 426.38; mcap: 160 -> 126.21; m.peTTM: 33 -> 27.0; m.peFwd: 28 -> 19.2; m.evEbitda: 24 -> 18.2; m.evSales: 12 -> 9.1; m.gross: 73 -> 70.5; m.op: 48 -> 44.3; m.net: 33 -> 30.4; m.roe: 16 -> 13.9; m.revCagrHist: 9 -> 10.4; d.revPS: 18 -> 52.03
- `MSCI` MSCI Inc: price: 580 -> 608.52; mcap: 45 -> 44.26; m.peTTM: 38 -> 34.8; m.peFwd: 33 -> 27.0; m.evEbitda: 28 -> 26.6; m.evSales: 18 -> 15.6; m.gross: 82 -> 82.9; m.op: 55 -> 53.7; m.net: 42 -> 40.7; m.revCagrHist: 10 -> 14.1; d.revPS: 11 -> 42.95
- `MCO` Moody's: price: 480 -> 450.69; mcap: 86 -> 78.72; m.peTTM: 38 -> 32.4; m.peFwd: 32 -> 24.2; m.evEbitda: 25 -> 22.2; m.evSales: 13 -> 10.8; m.gross: 72 -> 74.4; m.op: 45 -> 45.7; m.net: 30 -> 31.7; m.roe: 55 -> 71.4; m.revCagrHist: 9 -> 8.1; d.revPS: 17 -> 44.16
- `V` Visa: price: 360 -> 322.96; mcap: 700 -> 614.19; m.peTTM: 32 -> 28.2; m.peFwd: 28 -> 21.7; m.evEbitda: 24 -> 20.5; m.evSales: 20 -> 14.4; m.gross: 80 -> 97.8; m.op: 67 -> 67.3; m.net: 54 -> 51.7; m.roe: 45 -> 60.3; m.revCagrHist: 10 -> 17.1; d.revPS: 15 -> 22.45
- `MA` Mastercard: price: 560 -> 489.08; mcap: 510 -> 432.14; m.peTTM: 38 -> 28.3; m.peFwd: 32 -> 21.5; m.evEbitda: 28 -> 20.7; m.evSales: 24 -> 13.1; m.gross: 76 -> 100.0; m.op: 58 -> 60.8; m.net: 45 -> 45.9; m.roe: 170 -> 232.1; m.revCagrHist: 12 -> 15.8; d.revPS: 16 -> 37.72
- `PYPL` PayPal: price: 70 -> 40.7; mcap: 70 -> 35.9; m.peTTM: 16 -> 7.6; m.peFwd: 13 -> 7.1; m.evEbitda: 9 -> 5.8; m.evSales: 2 -> 1.1; m.gross: 46 -> 40.9; m.roe: 21 -> 25.1; m.revCagrHist: 7 -> 7.2; d.revPS: 60 -> 35.86
- `JPM` JPMorgan Chase: price: 290 -> 309.14; mcap: 810 -> 828.34; m.peTTM: 14 -> 14.8; m.peFwd: 13 -> 13.1; m.evSales: 3.5 -> 3.4; m.gross: 62 -> 0.0; m.op: 42 -> 43.7; m.net: 32 -> 33.9; m.roe: 17 -> 16.5; m.revCagrHist: 5 -> 12.7; d.revPS: 58 -> 63.1
- `BAC` Bank of America: price: 48 -> 54.54; mcap: 360 -> 387.05; m.peTTM: 13 -> 13.5; m.peFwd: 11 -> 10.8; m.evSales: 3 -> 3.3; m.gross: 58 -> 0.0; m.op: 38 -> 36.0; m.net: 28 -> 29.0; m.roe: 11 -> 10.6; m.revCagrHist: 4 -> 8.1; d.revPS: 40 -> 14.78
- `WFC` Wells Fargo: price: 80 -> 81.97; mcap: 260 -> 250.84; m.peTTM: 13 -> 12.7; m.peFwd: 11 -> 10.4; m.evSales: 3.2 -> 3.4; m.gross: 60 -> 0.0; m.op: 36 -> 29.4; m.net: 27 -> 26.7; m.revCagrHist: 3 -> 5.7; d.revPS: 45 -> 25.74
- `HSBC` HSBC Holdings (via `HSBA.L`): price: 10 -> 1293.4; m.peTTM: 9 -> 14.2; m.peFwd: 8 -> 9.1; m.evSales: 2.8 -> -2.6; m.gross: 55 -> 0.0; m.op: 40 -> 50.7; m.net: 30 -> 35.0; m.roe: 13 -> 11.6; m.revCagrHist: 3 -> 3.3; d.revPS: 35 -> 3.69
- `GS` Goldman Sachs: price: 620 -> 1001.29; mcap: 200 -> 295.39; m.peTTM: 14 -> 18.8; m.peFwd: 12 -> 15.3; m.evSales: 3 -> 0.3; m.gross: 55 -> 82.3; m.op: 32 -> 38.6; m.net: 28 -> 29.4; m.roe: 13 -> 14.5; m.revCagrHist: 8 -> 14.5; d.revPS: 95 -> 199.49
- `MS` Morgan Stanley: price: 140 -> 206.66; mcap: 225 -> 325.96; m.peTTM: 16 -> 18.7; m.peFwd: 14 -> 16.3; m.evSales: 3.4 -> 3.5; m.gross: 58 -> 87.4; m.op: 33 -> 40.6; m.net: 25 -> 24.8; m.roe: 15 -> 16.4; m.revCagrHist: 8 -> 16.3; d.revPS: 70 -> 46.66
- `SCHW` Charles Schwab: price: 80 -> 89.27; mcap: 145 -> 155.25; m.peTTM: 20 -> 17.7; m.peFwd: 16 -> 12.4; m.gross: 70 -> 97.5; m.op: 42 -> 49.4; m.net: 30 -> 38.0; m.roe: 15 -> 19.1; m.revCagrHist: 10 -> 15.8; d.revPS: 28 -> 13.89
- `IBKR` Interactive Brokers: price: 210 -> 85.42; mcap: 95 -> 144.89; m.peTTM: 28 -> 36.7; m.peFwd: 24 -> 29.7; m.evSales: 12 -> -6.0; m.gross: 90 -> 93.0; m.op: 72 -> 76.8; m.net: 55 -> 16.1; m.roe: 18 -> 23.6; m.revCagrHist: 18 -> 16.8; d.revPS: 11 -> 14.54
- `HOOD` Robinhood Markets: price: 85 -> 86.36; mcap: 75 -> 77.77; m.peTTM: 55 -> 41.9; m.peFwd: 38 -> 30.8; m.evSales: 18 -> 15.7; m.gross: 88 -> 92.2; m.op: 45 -> 38.5; m.net: 38 -> 41.1; m.roe: 15 -> 21.5; m.revCagrHist: 45 -> 15.1; d.revPS: 4 -> 5.17
- `FUTU` Futu Holdings: price: 120 -> 92.93; mcap: 16 -> 13.03; m.peTTM: 18 -> 10.1; m.peFwd: 15 -> 7.6; m.evSales: 8 -> -4.3; m.gross: 85 -> 94.4; m.op: 48 -> 64.9; m.net: 42 -> 45.0; m.roe: 22 -> 27.8; m.revCagrHist: 30 -> 28.8; d.revPS: 12 -> 159.83
- `BLK` BlackRock: price: 1050 -> 1010.68; mcap: 160 -> 164.59; m.peTTM: 24 -> 25.4; m.peFwd: 21 -> 16.6; m.evSales: 7 -> 6.4; m.gross: 50 -> 46.9; m.op: 38 -> 35.6; m.net: 30 -> 24.4; m.roe: 15 -> 11.9; m.revCagrHist: 9 -> 27.0; d.revPS: 67 -> 165.35
- `BX` Blackstone: price: 165 -> 118.48; mcap: 200 -> 144.81; m.peTTM: 35 -> 30.4; m.peFwd: 28 -> 15.7; m.evSales: 18 -> 8.3; m.gross: 90 -> 100.0; m.op: 55 -> 38.0; m.net: 40 -> 21.2; m.roe: 20 -> 29.5; m.revCagrHist: 15 -> 5.7; d.revPS: 13 -> 18.38
- `BRK.B` Berkshire Hathaway (via `BRK-B`): price: 520 -> 483.68; mcap: 1000 -> 1043.23; m.peTTM: 22 -> 14.4; m.peFwd: 20 -> 22.5; m.evEbitda: 14 -> -2.2; m.evSales: 2.5 -> -0.7; m.gross: 30 -> 27.8; m.op: 18 -> 14.4; m.net: 18 -> 19.3; m.roe: 10 -> 10.5; m.revCagrHist: 7 -> 4.4; d.revPS: 280 -> 261016.9
- `PGR` Progressive: price: 250 -> 204.2; mcap: 145 -> 119.15; m.peTTM: 16 -> 10.4; m.peFwd: 15 -> 12.6; m.evEbitda: 12 -> 8.3; m.evSales: 2.2 -> 1.4; m.gross: 30 -> 18.6; m.op: 14 -> 16.4; m.net: 12 -> 12.9; m.roe: 30 -> 37.9; m.revCagrHist: 18 -> 8.7; d.revPS: 150 -> 152.53
- `ALV` Allianz (via `ALV.DE`): price: 360 -> 381.5; m.peTTM: 13 -> 12.3; m.peFwd: 12 -> 11.5; m.evEbitda: 9 -> 6.1; m.evSales: 1.5 -> 1.0; m.gross: 28 -> 24.3; m.op: 14 -> 19.3; m.net: 10 -> 10.4; m.roe: 16 -> 18.7; m.revCagrHist: 6 -> 8.8; d.revPS: 110 -> 302.79
- `BK` BNY: price: 95 -> 137.16; mcap: 68 -> 94.14; m.peTTM: 15 -> 17.0; m.peFwd: 13 -> 14.2; m.evSales: 3 -> -3.2; m.gross: 68 -> 0.0; m.op: 32 -> 37.6; m.net: 25 -> 28.7; m.roe: 13 -> 13.5; m.revCagrHist: 6 -> 13.4; d.revPS: 50 -> 29.53
- `AXP` American Express: price: 320 -> 313.34; mcap: 225 -> 213.8; m.peTTM: 21 -> 19.9; m.peFwd: 18 -> 15.6; m.evSales: 3.5 -> 3.2; m.gross: 55 -> 62.8; m.op: 24 -> 21.2; m.net: 16 -> 16.3; m.roe: 33 -> 34.4; m.revCagrHist: 9 -> 11.6; d.revPS: 75 -> 99.58
- `INTU` Intuit: price: 680 -> 284.22; mcap: 190 -> 77.74; m.peTTM: 38 -> 17.3; m.peFwd: 32 -> 10.4; m.evEbitda: 28 -> 12.1; m.evSales: 9 -> 3.7; m.gross: 80 -> 80.8; m.op: 35 -> 47.0; m.net: 22 -> 21.9; m.roe: 18 -> 22.5; m.revCagrHist: 13 -> 10.4; d.revPS: 45 -> 75.14

**Needs review**
- `LSEG` London Stock Exchange Group — currency **GBp** (mcap skipped; verify price/currency)
- `HSBC` HSBC Holdings — currency **GBp** (mcap skipped; verify price/currency)
- `ALV` Allianz — currency **EUR** (mcap skipped; verify price/currency)

**Skipped (preserved)**
- `FI` Fiserv — no market data (private/pre-IPO or unresolved symbol); left unchanged

## power.js

- changed: 14 · skipped: 0 · review: 0

**Changed**
- `CCJ` Cameco: price: 122.15 -> 95.03; mcap: 53.6 -> 41.39; m.peTTM: 125 -> 96.0; m.evEbitda: 30 -> 46.2; m.evSales: 20 -> 11.7; m.gross: 30 -> 36.8; m.op: 22 -> 18.2; m.net: 15 -> 18.4; m.roe: 10 -> 9.6; m.revCagrHist: 20 -> 7.1; d.revPS: 5.8 -> 8.12
- `UEC` Uranium Energy: price: 10.68 -> 9.42; mcap: 6.18 -> 4.66; m.evEbitda: 99 -> -34.6; m.evSales: 250 -> 206.7; m.gross: 30 -> 0.0; m.net: -25 -> 0.0; m.roe: -4 -> -9.0; d.revPS: 0.03 -> 0.04
- `NXE` NexGen Energy: price: 12.66 -> 9.27; mcap: 7.6 -> 6.14; m.op: -99 -> 0.0; m.net: -99 -> 0.0; m.roe: -25 -> -29.6
- `SMR` NuScale Power: price: 9.23 -> 9.29; mcap: 3.39 -> 3.22; m.evEbitda: 99 -> -11.2; m.evSales: 99 -> 121.8; m.gross: 30 -> 23.8; m.net: -99 -> 0.0; m.roe: -40 -> -83.0; m.revCagrHist: 50 -> -95.8; d.revPS: 0.1 -> 0.09
- `OKLO` Oklo: price: 58.94 -> 54.02; mcap: 9.83 -> 9.4; m.evEbitda: 99 -> -41.8; m.op: -99 -> 0.0; m.net: -99 -> 0.0; m.roe: -30 -> -8.9
- `BWXT` BWX Technologies: price: 185.31 -> 183.0; mcap: 17.3 -> 16.77; m.peTTM: 54 -> 48.9; m.peFwd: 43 -> 35.2; m.evEbitda: 22 -> 39.3; m.evSales: 5 -> 5.4; m.gross: 22 -> 22.7; m.op: 16 -> 10.4; m.net: 11 -> 10.2; m.roe: 40 -> 29.0; m.revCagrHist: 8 -> 26.1; d.revPS: 37 -> 36.87
- `LEU` Centrus Energy: price: 149.66 -> 146.61; mcap: 2.95 -> 2.88; m.peTTM: 50 -> 53.1; m.peFwd: 30 -> 36.9; m.evEbitda: 18 -> 64.2; m.evSales: 6 -> 4.9; m.gross: 25 -> 25.7; m.op: 18 -> -0.3; m.net: 15 -> 13.4; m.roe: 30 -> 12.3; m.revCagrHist: 30 -> 4.9; d.revPS: 24 -> 24.23
- `CEG` Constellation Energy: price: 302 -> 242.3; mcap: 89.76 -> 86.53; m.peTTM: 30 -> 21.9; m.peFwd: 25 -> 17.8; m.evEbitda: 14 -> 13.8; m.evSales: 3.5 -> 3.7; m.gross: 35 -> 23.3; m.op: 22 -> 21.9; m.net: 16 -> 12.7; m.roe: 22 -> 16.1; m.revCagrHist: 10 -> 63.8; d.revPS: 82 -> 92.4
- `VST` Vistra: price: 153 -> 138.54; mcap: 52.38 -> 46.71; m.peTTM: 27 -> 23.2; m.peFwd: 16 -> 12.6; m.evEbitda: 10 -> 10.1; m.evSales: 2.5 -> 3.5; m.gross: 25 -> 38.6; m.op: 20 -> 26.6; m.net: 12 -> 11.5; m.roe: 40 -> 42.9; m.revCagrHist: 15 -> 43.4; d.revPS: 68 -> 57.42
- `GEV` GE Vernova: price: 970 -> 867.09; mcap: 266.5 -> 233.0; m.peTTM: 45 -> 25.3; m.peFwd: 38 -> 35.4; m.evEbitda: 28 -> 66.8; m.evSales: 6 -> 5.8; m.gross: 25 -> 20.3; m.op: 12 -> 5.5; m.net: 10 -> 23.8; m.roe: 18 -> 75.7; m.revCagrHist: 9 -> 16.3; d.revPS: 168 -> 145.56
- `ETN` Eaton: price: 399 -> 375.46; mcap: 155.55 -> 145.79; m.peTTM: 39 -> 36.8; m.peFwd: 28 -> 23.9; m.evEbitda: 22 -> 26.3; m.evSales: 5.5 -> 5.9; m.gross: 38 -> 37.1; m.op: 19 -> 16.1; m.net: 15 -> 14.0; m.roe: 20 -> 20.8; m.revCagrHist: 9 -> 16.8; d.revPS: 73 -> 73.34
- `PWR` Quanta Services: price: 601.88 -> 650.92; mcap: 93.98 -> 97.68; m.peTTM: 55 -> 89.5; m.peFwd: 48 -> 39.5; m.evEbitda: 28 -> 39.0; m.evSales: 3 -> 3.4; m.gross: 16 -> 15.1; m.op: 8 -> 4.2; m.net: 6 -> 3.7; m.roe: 16 -> 13.5; m.revCagrHist: 12 -> 26.3; d.revPS: 240 -> 201.93
- `NEE` NextEra Energy: price: 84.7 -> 85.12; mcap: 177 -> 177.53; m.peTTM: 24 -> 21.6; m.peFwd: 22 -> 19.4; m.evEbitda: 14 -> 20.6; m.evSales: 6 -> 10.5; m.gross: 60 -> 61.4; m.op: 28 -> 30.2; m.net: 22 -> 29.4; m.roe: 12 -> 10.3; m.revCagrHist: 8 -> 7.3; d.revPS: 12.6 -> 13.45
- `FSLR` First Solar: price: 248.5 -> 249.27; m.peTTM: 14 -> 16.1; m.peFwd: 11 -> 10.6; m.evEbitda: 8 -> 11.0; m.evSales: 3.5 -> 4.6; m.gross: 45 -> 41.7; m.op: 33 -> 33.1; m.net: 30 -> 30.7; m.roe: 18 -> 18.4; m.revCagrHist: 24 -> 23.6; d.revPS: 49 -> 50.51

## quantum.js

- changed: 10 · skipped: 0 · review: 0

**Changed**
- `IONQ` IonQ: price: 59.5 -> 56.63; mcap: 21.16 -> 21.14; m.peTTM: 999 -> 145.2; m.evEbitda: 99 -> -28.9; m.evSales: 150 -> 102.3; m.gross: 60 -> 36.1; m.net: -99 -> 174.9; m.roe: -25 -> 11.3; d.revPS: 0.37 -> 0.6
- `RGTI` Rigetti Computing: price: 19.67 -> 19.45; mcap: 8 -> 6.46; m.net: -99 -> 0.0; m.roe: -30 -> -57.1; m.revCagrHist: 193 -> 198.9; d.revPS: 0.02 -> 0.03
- `QBTS` D-Wave Quantum: price: 23.52 -> 23.25; mcap: 5.27 -> 8.61; m.gross: 60 -> 66.3; m.net: -99 -> 0.0; m.roe: -25 -> -55.3; m.revCagrHist: 60 -> -80.9; d.revPS: 0.08 -> 0.04
- `QUBT` Quantum Computing Inc: price: 9.5 -> 9.53; mcap: 2.78 -> 2.15; m.evEbitda: 99 -> -20.2; m.evSales: 200 -> 269.7; m.gross: 30 -> -15.4; m.net: -99 -> 0.0; m.roe: -30 -> -4.4; d.revPS: 0.09 -> 0.02
- `IBM` IBM: price: 277.3 -> 272.36; mcap: 258 -> 255.99; m.peTTM: 26 -> 24.1; m.peFwd: 22 -> 20.3; m.evEbitda: 15 -> 18.9; m.evSales: 4 -> 4.6; m.gross: 56 -> 58.4; m.op: 18 -> 13.8; m.net: 14 -> 15.6; m.roe: 40 -> 35.8; m.revCagrHist: 4 -> 9.5; d.revPS: 72.6 -> 73.71
- `GOOGL` Alphabet: price: 361.85 -> 356.38; mcap: 4400 -> 4346.03; m.peTTM: 26 -> 27.8; m.peFwd: 22 -> 24.6; m.evEbitda: 15 -> 26.6; m.evSales: 7 -> 10.1; m.gross: 58 -> 60.4; m.op: 32 -> 36.1; m.net: 28 -> 37.9; m.roe: 32 -> 38.9; m.revCagrHist: 16 -> 21.8; d.revPS: 35.5 -> 34.93
- `MSFT` Microsoft: price: 403.41 -> 397.36; mcap: 3100 -> 2951.76; m.peTTM: 24 -> 23.7; m.peFwd: 22 -> 20.5; m.evEbitda: 22 -> 16.3; m.evSales: 12 -> 9.4; m.gross: 69 -> 68.3; m.op: 47 -> 46.3; m.net: 36 -> 39.3; m.roe: 33 -> 34.0; m.revCagrHist: 18 -> 18.3; d.revPS: 43 -> 42.84
- `HON` Honeywell: price: 236.54 -> 205.88; mcap: 149.41 -> 130.46; m.peTTM: 27 -> 32.9; m.peFwd: 25 -> 18.0; m.evEbitda: 15 -> 18.4; m.evSales: 3.5 -> 4.2; m.gross: 38 -> 36.9; m.net: 16 -> 10.9; m.roe: 30 -> 24.3; m.revCagrHist: 4 -> 2.4; d.revPS: 61 -> 59.25
- `FORM` FormFactor: price: 142.69 -> 115.81; mcap: 9.73 -> 9.03; m.peTTM: 134 -> 139.5; m.peFwd: 40 -> 41.5; m.evEbitda: 22 -> 63.7; m.evSales: 12 -> 10.4; m.gross: 42 -> 42.2; m.op: 16 -> 17.7; m.net: 13 -> 8.1; m.roe: 12 -> 6.8; m.revCagrHist: 8 -> 32.0; d.revPS: 10.5 -> 10.84
- `NVDA` NVIDIA: price: 208.19 -> 200.42; mcap: 5040 -> 4854.37; m.peTTM: 32 -> 30.7; m.peFwd: 24 -> 15.7; m.evEbitda: 22 -> 29.1; m.gross: 74 -> 74.1; m.op: 62 -> 65.6; m.net: 52 -> 63.0; m.roe: 90 -> 114.3; m.revCagrHist: 60 -> 85.2; d.revPS: 10.4 -> 10.42

## robotics.js

- changed: 10 · skipped: 3 · review: 0

**Changed**
- `TSLA` Tesla: price: 384.83 -> 381.59; mcap: 1490 -> 1433.15; m.peTTM: 317 -> 370.5; m.peFwd: 120 -> 152.6; m.evEbitda: 55 -> 126.6; m.evSales: 15 -> 14.4; m.gross: 18 -> 19.1; m.op: 8 -> 4.2; m.net: 7 -> 3.9; m.roe: 9 -> 4.9; m.revCagrHist: 1 -> 15.8; d.revPS: 30 -> 30.31
- `SERV` Serve Robotics: price: 7.66 -> 6.98; mcap: 0.62 -> 0.59; m.evEbitda: 99 -> -2.6; m.evSales: 99 -> 68.7; m.gross: 30 -> 0.0; m.net: -99 -> 0.0; m.roe: -30 -> -52.0; d.revPS: 0.33 -> 0.08
- `ROK` Rockwell Automation: price: 459.35 -> 440.07; mcap: 49.93 -> 48.97; m.peTTM: 33 -> 45.7; m.peFwd: 30 -> 30.3; m.evEbitda: 18 -> 26.7; m.evSales: 4 -> 6.0; m.gross: 40 -> 48.9; m.op: 20 -> 20.7; m.net: 15 -> 12.4; m.roe: 30 -> 27.2; m.revCagrHist: 4 -> 11.9; d.revPS: 79 -> 78.4
- `EMR` Emerson Electric: price: 140.68 -> 137.11; mcap: 78.79 -> 76.8; m.peTTM: 33 -> 31.7; m.peFwd: 22 -> 19.1; m.evEbitda: 14 -> 15.2; m.evSales: 4 -> 4.9; m.gross: 50 -> 52.7; m.op: 22 -> 24.2; m.net: 18 -> 13.4; m.roe: 14 -> 12.3; m.revCagrHist: 6 -> 2.9; d.revPS: 32 -> 32.6
- `SIEGY` Siemens: price: 148.74 -> 153.07; mcap: 210 -> 235.46; m.peTTM: 20 -> 27.5; m.peFwd: 17 -> 20.8; m.evEbitda: 13 -> 23.9; m.evSales: 2.5 -> 3.6; m.gross: 40 -> 38.8; m.op: 15 -> 12.7; m.net: 12 -> 9.7; m.roe: 16 -> 12.6; m.revCagrHist: 5 -> -0.0; d.revPS: 57 -> 51.02
- `PH` Parker Hannifin: price: 866 -> 875.6; mcap: 111.25 -> 110.4; m.peTTM: 32 -> 32.3; m.peFwd: 27 -> 25.7; m.evEbitda: 16 -> 21.8; m.evSales: 5.5 -> 5.7; m.gross: 36 -> 37.4; m.op: 25 -> 21.5; m.net: 18 -> 16.6; m.roe: 22 -> 24.8; m.revCagrHist: 5 -> 10.6; d.revPS: 160 -> 165.81
- `NOVT` Novanta: price: 151.34 -> 154.58; mcap: 5.45 -> 5.51; m.peTTM: 50 -> 110.4; m.peFwd: 40 -> 37.3; m.evEbitda: 22 -> 30.2; m.evSales: 5 -> 5.4; m.gross: 45 -> 44.2; m.op: 18 -> 11.7; m.net: 13 -> 5.3; m.roe: 12 -> 5.2; m.revCagrHist: 8 -> 10.4; d.revPS: 29 -> 26.66
- `CGNX` Cognex: price: 62.55 -> 58.69; mcap: 8.92 -> 9.77; m.peTTM: 73 -> 69.0; m.peFwd: 45 -> 33.3; m.evEbitda: 35 -> 42.1; m.evSales: 8 -> 9.1; m.op: 18 -> 22.3; m.net: 16 -> 13.6; m.roe: 16 -> 9.7; m.revCagrHist: 12 -> 24.3; d.revPS: 5.9 -> 6.25
- `SYM` Symbotic: price: 49 -> 41.24; mcap: 29 -> 24.89; m.peTTM: 80 -> 999; m.peFwd: 40 -> 57.4; m.evEbitda: 40 -> 159.3; m.evSales: 2 -> 1.4; m.gross: 18 -> 20.4; m.op: 3 -> 1.1; m.net: 2 -> -0.3; m.roe: 15 -> -5.7; m.revCagrHist: 26 -> 23.1; d.revPS: 3.9 -> 21.8
- `ZBRA` Zebra Technologies: price: 235.76 -> 216.79; mcap: 11.5 -> 10.33; m.peTTM: 18 -> 26.2; m.peFwd: 12.56 -> 10.5; m.evEbitda: 11 -> 12.7; m.evSales: 2 -> 2.3; m.gross: 46 -> 48.2; m.op: 18 -> 15.0; m.net: 14 -> 7.5; m.roe: 22 -> 11.8; m.revCagrHist: 10 -> 14.3; d.revPS: 102 -> 111.14

**Skipped (preserved)**
- `ABB` ABB Ltd — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6954` Fanuc — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6506` Yaskawa Electric — no market data (private/pre-IPO or unresolved symbol); left unchanged

## semiconductors.js

- changed: 93 · skipped: 2 · review: 47

**Changed**
- `6857` Advantest (via `6857.T`): price: 25500 -> 24635.0; m.peTTM: 45 -> 48.1; m.peFwd: 33 -> 103.6; m.evEbitda: 30 -> 34.3; m.evSales: 8.5 -> 15.9; m.gross: 67 -> 64.3; m.op: 35 -> 46.7; m.net: 28 -> 33.3; m.roe: 38 -> 57.6; m.revCagrHist: 25 -> 41.2; d.revPS: 1073 -> 1548.94
- `4063` Shin-Etsu Chemical (via `4063.T`): price: 6836 -> 6648.0; m.peTTM: 27 -> 26.3; m.peFwd: 22 -> 20.2; m.evEbitda: 12 -> 12.7; m.evSales: 4 -> 4.3; m.gross: 37 -> 34.2; m.op: 25 -> 21.4; m.net: 18.5 -> 18.4; m.roe: 13 -> 10.7; m.revCagrHist: 6 -> 1.3; d.revPS: 1383 -> 1370.83
- `6146` Disco (via `6146.T`): price: 78000 -> 68040.0; m.peTTM: 47 -> 54.6; m.peFwd: 38 -> 50.0; m.evEbitda: 32 -> 36.8; m.evSales: 11 -> 16.7; m.gross: 62 -> 70.2; m.op: 39 -> 44.0; m.net: 28 -> 31.0; d.revPS: 3670 -> 4029.18
- `6963` Rohm (via `6963.T`): price: 4000 -> 4634.0; m.peTTM: 90 -> 999; m.peFwd: 55 -> 53.3; m.evEbitda: 12 -> 26.4; m.evSales: 2.8 -> 3.7; m.gross: 30 -> 23.9; m.op: 3 -> 1.0; m.net: 1.5 -> -32.9; d.revPS: 1200 -> 1246.44
- `4004` Resonac (via `4004.T`): price: 16500 -> 15455.0; m.peTTM: 38 -> 96.0; m.peFwd: 30 -> 62.0; m.evEbitda: 9 -> 24.1; m.evSales: 2.8 -> 2.6; m.gross: 26 -> 25.6; m.op: 5 -> 7.2; m.net: 2.9 -> 2.7; m.roe: 5.3 -> 5.5; m.revCagrHist: 2 -> -4.1; d.revPS: 7300 -> 7371.28
- `6861` Keyence (via `6861.T`): price: 77000 -> 70620.0; m.peTTM: 37 -> 38.4; m.peFwd: 36 -> 37.8; m.evEbitda: 24 -> 26.4; m.evSales: 17 -> 13.8; m.gross: 84 -> 83.0; m.op: 51 -> 53.6; m.net: 38 -> 38.1; m.revCagrHist: 9 -> 17.9; d.revPS: 4190 -> 4821.31
- `6723` Renesas (via `6723.T`): price: 4044 -> 4196.0; m.peTTM: 28 -> 999; m.peFwd: 19 -> 16.3; m.evEbitda: 11 -> 23.5; m.evSales: 5 -> 6.3; m.gross: 55 -> 58.1; m.op: 22 -> 24.3; m.net: 17 -> -0.7; m.roe: 11 -> -0.4; m.revCagrHist: 8 -> 23.2; d.revPS: 733 -> 768.92
- `8035` Tokyo Electron (via `8035.T`): price: 60000 -> 61930.0; m.peTTM: 26 -> 49.6; m.peFwd: 22 -> 48.4; m.evEbitda: 18 -> 39.1; m.evSales: 9.5 -> 11.3; m.gross: 47 -> 45.3; m.op: 29 -> 28.9; m.net: 24 -> 23.5; m.roe: 28 -> 29.3; m.revCagrHist: 12 -> 8.6; d.revPS: 5420 -> 5336.52
- `7735` SCREEN Holdings (via `7735.T`): price: 13000 -> 12665.0; m.peTTM: 25 -> 26.0; m.peFwd: 20 -> 14.5; m.evEbitda: 13 -> 16.3; m.evSales: 3.8 -> 3.7; m.gross: 38 -> 38.5; m.op: 19 -> 25.0; m.net: 15 -> 15.2; m.roe: 20 -> 20.3; m.revCagrHist: 14 -> 9.1; d.revPS: 3275 -> 3203.91
- `ASML` ASML Holding: price: 1778 -> 1734.19; mcap: 671 -> 668.39; m.peTTM: 58 -> 59.5; m.peFwd: 45 -> 36.2; m.gross: 51 -> 52.6; m.op: 33 -> 36.0; m.net: 28 -> 29.7; m.roe: 55 -> 52.2; m.revCagrHist: 18 -> 13.2; d.revPS: 101 -> 1.57
- `LRCX` Lam Research: price: 327 -> 321.8; mcap: 409 -> 402.43; m.peTTM: 62 -> 60.7; m.peFwd: 44 -> 40.4; m.evEbitda: 42 -> 51.2; m.gross: 48 -> 50.0; m.op: 31 -> 35.0; m.net: 26 -> 30.9; m.roe: 55 -> 66.8; m.revCagrHist: 10 -> 23.8; d.revPS: 17 -> 17.2
- `KLAC` KLA Corp: price: 2139 -> 2135.64; mcap: 279 -> 278.97; m.peTTM: 61 -> 60.6; m.peFwd: 45 -> 42.4; m.evEbitda: 40 -> 47.9; m.evSales: 22 -> 21.4; m.gross: 62 -> 61.4; m.op: 40 -> 41.2; m.net: 36 -> 35.7; m.roe: 90 -> 95.0; m.revCagrHist: 13 -> 11.5; d.revPS: 100 -> 99.6
- `TSM` TSMC: price: 428 -> 408.75; mcap: 1890 -> 2119.97; m.peTTM: 32 -> 35.1; m.peFwd: 22 -> 20.9; m.evEbitda: 16 -> 5.2; m.evSales: 12 -> 3.6; m.gross: 59 -> 61.9; m.op: 49 -> 58.1; m.net: 43 -> 46.5; m.roe: 31 -> 36.2; m.revCagrHist: 25 -> 35.1; d.revPS: 25 -> 98.92
- `AMAT` Applied Materials: price: 499 -> 497.01; mcap: 396 -> 394.61; m.peTTM: 47 -> 46.9; m.peFwd: 34 -> 30.6; m.evEbitda: 32 -> 42.4; m.evSales: 13 -> 13.6; m.gross: 48 -> 49.0; m.op: 29 -> 31.9; m.net: 25 -> 29.3; m.roe: 48 -> 39.7; m.revCagrHist: 11 -> 11.4; d.revPS: 37 -> 36.48
- `NVDA` NVIDIA: price: 208 -> 200.42; mcap: 5040 -> 4854.37; m.peTTM: 32 -> 30.7; m.peFwd: 21 -> 15.7; m.evEbitda: 19 -> 29.1; m.evSales: 20 -> 19.0; m.gross: 75 -> 74.1; m.op: 62 -> 65.6; m.net: 55 -> 63.0; m.roe: 90 -> 114.3; m.revCagrHist: 70 -> 85.2; d.revPS: 10.5 -> 10.42
- `AVGO` Broadcom: price: 392 -> 372.1; mcap: 1870 -> 1770.3; m.peTTM: 65 -> 61.7; m.peFwd: 25 -> 19.2; m.evEbitda: 28 -> 43.3; m.evSales: 26 -> 24.1; m.gross: 67 -> 76.3; m.op: 45 -> 49.0; m.net: 38 -> 38.8; m.roe: 35 -> 37.3; m.revCagrHist: 32 -> 47.9; d.revPS: 16 -> 15.94
- `AMD` AMD: price: 476 -> 452.4; mcap: 775 -> 737.68; m.peTTM: 159 -> 150.8; m.peFwd: 55 -> 34.6; m.evEbitda: 60 -> 98.1; m.evSales: 21 -> 19.5; m.gross: 53 -> 53.1; m.op: 25 -> 14.4; m.net: 13 -> 13.4; m.roe: 11 -> 8.1; m.revCagrHist: 25 -> 37.8; d.revPS: 23 -> 23.02
- `INTC` Intel: price: 108 -> 107.04; mcap: 542 -> 537.98; m.peFwd: 102 -> 69.6; m.evEbitda: 14 -> 39.8; m.evSales: 4.5 -> 10.5; m.gross: 32 -> 37.2; m.op: -2 -> 6.9; m.net: -6 -> -5.9; m.roe: -3 -> -2.9; m.revCagrHist: -2 -> 7.2; d.revPS: 11 -> 11.4
- `ARM` Arm Holdings: price: 325 -> 307.43; mcap: 347 -> 328.36; m.peTTM: 384 -> 384.3; m.peFwd: 150 -> 100.2; m.evSales: 70 -> 66.1; m.gross: 95 -> 97.5; m.op: 35 -> 29.5; m.net: 25 -> 18.4; m.roe: 14 -> 12.0; m.revCagrHist: 25 -> 20.1; d.revPS: 4.6 -> 4.64
- `005930` Samsung Electronics (via `005930.KS`): price: 302500 -> 296750.0; m.peTTM: 26 -> 999; m.peFwd: 6 -> 5.2; m.evEbitda: 5 -> 13.4; m.evSales: 1.6 -> 4.9; m.gross: 38 -> 47.7; m.op: 18 -> 42.8; m.net: 14 -> 21.5; m.roe: 10 -> 18.9; m.revCagrHist: 8 -> 69.2; d.revPS: 58400 -> 58221.74
- `000660` SK Hynix (via `000660.KS`): price: 2048000 -> 2067000.0; m.peTTM: 21 -> 999; m.peFwd: 6 -> 5.1; m.evEbitda: 5 -> 15.5; m.evSales: 2.5 -> 10.7; m.gross: 50 -> 68.3; m.op: 38 -> 71.5; m.net: 30 -> 56.9; m.roe: 32 -> 61.2; m.revCagrHist: 30 -> 198.1; d.revPS: 186500 -> 189858.12
- `MU` Micron: price: 936 -> 891.88; mcap: 1060 -> 1005.8; m.peTTM: 44 -> 42.2; m.peFwd: 10 -> 8.0; m.evEbitda: 6 -> 27.2; m.evSales: 4.5 -> 17.2; m.gross: 50 -> 58.4; m.op: 38 -> 67.6; m.net: 30 -> 41.5; m.roe: 28 -> 39.8; m.revCagrHist: 85 -> 196.3; d.revPS: 51 -> 51.8
- `SNPS` Synopsys: price: 465 -> 460.54; mcap: 89 -> 88.18; m.peTTM: 110 -> 105.4; m.peFwd: 29 -> 26.7; m.evEbitda: 35 -> 56.9; m.evSales: 11 -> 11.1; m.gross: 81 -> 82.6; m.op: 34 -> 10.4; m.net: 25 -> 8.9; m.roe: 16 -> 3.8; m.revCagrHist: 14 -> 41.9; d.revPS: 45 -> 47.72
- `CDNS` Cadence: price: 391 -> 385.13; mcap: 108 -> 106.23; m.peTTM: 91 -> 90.2; m.peFwd: 48 -> 41.0; m.evEbitda: 50 -> 53.5; m.evSales: 19 -> 19.5; m.gross: 86 -> 86.1; m.op: 35 -> 29.7; m.net: 28 -> 21.2; m.roe: 30 -> 20.7; m.revCagrHist: 14 -> 18.7; d.revPS: 20 -> 20.37
- `QCOM` Qualcomm: price: 205 -> 191.2; mcap: 217 -> 201.52; m.peTTM: 22 -> 22.1; m.peFwd: 21 -> 17.9; m.evEbitda: 13 -> 15.9; m.evSales: 4.9 -> 4.7; m.gross: 56 -> 54.8; m.op: 32 -> 22.1; m.net: 27 -> 22.3; m.roe: 40 -> 36.1; m.revCagrHist: 8 -> -3.5; d.revPS: 42 -> 41.33
- `GFS` GlobalFoundries: price: 75 -> 74.82; mcap: 41 -> 41.03; m.peTTM: 54 -> 50.6; m.peFwd: 38 -> 29.7; m.evEbitda: 9 -> 19.6; m.evSales: 5.5 -> 5.8; m.gross: 25 -> 26.1; m.op: 14 -> 11.0; m.net: 11 -> 11.4; m.roe: 8 -> 6.8; m.revCagrHist: 3 -> 3.1; d.revPS: 12.5 -> 12.32
- `LIN` Linde: price: 516 -> 509.16; mcap: 238 -> 235.41; m.peTTM: 34 -> 33.8; m.peFwd: 28 -> 25.8; m.evEbitda: 18 -> 19.1; m.evSales: 7 -> 7.5; m.gross: 48 -> 48.8; m.op: 29 -> 28.5; m.net: 21 -> 20.4; m.roe: 18 -> 18.2; m.revCagrHist: 6 -> 8.2; d.revPS: 75 -> 74.18
- `AI` Air Liquide (via `AI.PA`): price: 170 -> 167.72; m.peTTM: 30 -> 30.3; m.peFwd: 26 -> 23.7; m.evEbitda: 13 -> 15.6; m.evSales: 3.5 -> 4.3; m.gross: 42 -> 64.2; m.op: 21 -> 19.5; m.net: 13 -> 13.1; m.roe: 13 -> 13.4; m.revCagrHist: 5 -> -3.4; d.revPS: 46 -> 42.46
- `ENTG` Entegris: price: 134 -> 128.88; mcap: 20 -> 19.63; m.peTTM: 77 -> 74.5; m.peFwd: 35 -> 27.9; m.evEbitda: 22 -> 26.1; m.evSales: 6 -> 7.1; m.gross: 45 -> 44.8; m.op: 22 -> 17.9; m.net: 11 -> 8.2; m.roe: 14 -> 6.8; m.revCagrHist: 8 -> 5.0; d.revPS: 21 -> 21.3
- `4186` Tokyo Ohka Kogyo (via `4186.T`): price: 9387 -> 9218.0; m.peTTM: 32 -> 33.2; m.peFwd: 29 -> 47.2; m.evEbitda: 13 -> 19.2; m.evSales: 3 -> 3.1; m.gross: 35 -> 31.5; m.op: 16 -> 8.3; m.net: 13 -> 6.1; m.roe: 11 -> 5.5; m.revCagrHist: 7 -> 92.9; d.revPS: 2085 -> 2664.08
- `4182` Mitsubishi Gas Chemical (via `4182.T`): price: 4426 -> 4386.0; m.peFwd: 18 -> 15.9; m.evEbitda: 9 -> 12.6; m.evSales: 1.2 -> 1.4; m.gross: 20 -> 21.9; m.op: 4 -> 3.7; m.net: -1 -> -5.5; m.roe: -1 -> -5.0; m.revCagrHist: 1 -> -0.9; d.revPS: 3790 -> 3791.06
- `3436` Sumco (via `3436.T`): price: 3200 -> 3211.0; m.peFwd: 999 -> 65.2; m.evEbitda: 8 -> 13.4; m.evSales: 1.8 -> 3.6; m.gross: 18 -> 10.8; m.op: 2 -> -7.3; m.net: -6 -> -5.7; m.roe: -5 -> -3.5; m.revCagrHist: -5 -> -1.0; d.revPS: 1170 -> 1168.39
- `SOI` Soitec (via `SOI.PA`): price: 125 -> 125.35; m.peFwd: 999 -> 63.0; m.evEbitda: 10 -> 40.4; m.evSales: 5 -> 7.6; m.gross: 30 -> 16.2; m.op: 5 -> -12.5; m.net: -30 -> -37.2; m.roe: -25 -> -15.2; m.revCagrHist: -3 -> -34.7; d.revPS: 18 -> 16.59
- `4062` Ibiden (via `4062.T`): price: 17400 -> 17565.0; m.peTTM: 87 -> 81.4; m.peFwd: 81 -> 56.9; m.evEbitda: 22 -> 38.3; m.evSales: 11 -> 11.4; m.gross: 30 -> 31.6; m.op: 18 -> 14.1; m.net: 15 -> 15.3; m.roe: 12 -> 12.2; m.revCagrHist: 8 -> 18.6; d.revPS: 1490 -> 1490.46
- `ASX` ASE Technology: price: 35 -> 34.3; mcap: 79 -> 75.25; m.peTTM: 53 -> 53.6; m.peFwd: 30 -> 21.6; m.evEbitda: 11 -> 2.0; m.evSales: 2.5 -> 0.4; m.gross: 18 -> 18.5; m.op: 10 -> 10.1; m.roe: 13 -> 13.6; m.revCagrHist: 9 -> 17.2; d.revPS: 5 -> 308.29
- `AMKR` Amkor Technology: price: 71 -> 69.61; mcap: 18 -> 17.25; m.peTTM: 41 -> 40.0; m.peFwd: 33 -> 28.4; m.evEbitda: 9 -> 14.3; m.evSales: 2.5 -> 2.4; m.gross: 15 -> 14.4; m.op: 8 -> 6.0; m.net: 6 -> 6.2; m.revCagrHist: 7 -> 27.5; d.revPS: 29 -> 28.6
- `600584` JCET Group (via `600584.SS`): price: 74 -> 72.76; m.peTTM: 82 -> 79.1; m.peFwd: 49 -> 51.0; m.evEbitda: 10 -> 22.6; m.evSales: 1.5 -> 3.6; m.gross: 14 -> 14.4; m.op: 7 -> 5.2; m.net: 4 -> 4.3; m.roe: 8 -> 5.4; m.revCagrHist: 10 -> -1.8; d.revPS: 22 -> 21.62
- `TXN` Texas Instruments: price: 289 -> 282.01; mcap: 263 -> 256.66; m.peTTM: 49 -> 48.3; m.peFwd: 35 -> 30.0; m.evEbitda: 22 -> 30.7; m.evSales: 14 -> 14.4; m.gross: 58 -> 57.3; m.op: 35 -> 37.8; m.net: 30 -> 29.1; m.roe: 35 -> 32.3; m.revCagrHist: 3 -> 18.6; d.revPS: 20 -> 20.29
- `ADI` Analog Devices: price: 405 -> 392.67; mcap: 197 -> 191.26; m.peTTM: 60 -> 58.5; m.peFwd: 29 -> 26.6; m.evEbitda: 24 -> 32.0; m.evSales: 15 -> 15.4; m.gross: 68 -> 64.5; m.op: 32 -> 38.1; m.net: 25 -> 26.0; m.roe: 13 -> 9.6; m.revCagrHist: 3 -> 37.2; d.revPS: 26 -> 25.98
- `IFX` Infineon (via `IFX.DE`): price: 77 -> 75.1; m.peTTM: 92 -> 91.6; m.peFwd: 34 -> 29.1; m.evEbitda: 13 -> 25.8; m.evSales: 3 -> 6.9; m.gross: 38 -> 41.2; m.op: 18 -> 46.7; m.net: 8 -> 7.2; m.roe: 9 -> 6.3; d.revPS: 11 -> 11.58
- `NXPI` NXP Semiconductors: price: 297 -> 285.56; mcap: 75 -> 72.1; m.peTTM: 28 -> 28.4; m.peFwd: 19 -> 16.2; m.evEbitda: 13 -> 19.3; m.evSales: 5 -> 6.4; m.gross: 57 -> 55.6; m.op: 30 -> 27.7; m.net: 22 -> 21.0; m.roe: 35 -> 25.8; m.revCagrHist: 5 -> 12.2; d.revPS: 50 -> 49.97
- `STM` STMicroelectronics: price: 73 -> 70.74; mcap: 63 -> 62.87; m.peTTM: 430 -> 442.1; m.peFwd: 44 -> 28.8; m.evEbitda: 10 -> 24.7; m.evSales: 2.5 -> 5.0; m.gross: 33 -> 34.0; m.op: 8 -> 3.7; m.net: 3 -> 1.2; m.roe: 4 -> 0.9; m.revCagrHist: -2 -> 23.0; d.revPS: 14 -> 13.88
- `ON` ON Semiconductor: price: 117 -> 110.17; mcap: 46 -> 42.83; m.peTTM: 83 -> 81.0; m.peFwd: 35 -> 25.8; m.evEbitda: 14 -> 21.5; m.evSales: 5 -> 7.3; m.gross: 40 -> 42.7; m.op: 20 -> 18.2; m.net: 10 -> 9.5; m.roe: 12 -> 7.5; m.revCagrHist: -1 -> 4.7
- `MCHP` Microchip: price: 91 -> 87.91; mcap: 50 -> 47.65; m.peTTM: 417 -> 399.6; m.peFwd: 29 -> 21.5; m.evEbitda: 18 -> 43.5; m.evSales: 9 -> 11.3; m.gross: 55 -> 57.7; m.op: 18 -> 17.1; m.net: 3 -> 4.9; m.roe: 8 -> 3.4; m.revCagrHist: -5 -> 35.1; d.revPS: 9 -> 8.72
- `MRVL` Marvell: price: 267 -> 252.59; mcap: 233 -> 220.97; m.peTTM: 92 -> 86.8; m.peFwd: 59 -> 40.9; m.evEbitda: 45 -> 82.0; m.evSales: 27 -> 25.5; m.gross: 62 -> 51.5; m.op: 30 -> 14.5; m.net: 20 -> 29.0; m.roe: 12 -> 16.0; m.revCagrHist: 20 -> 27.6; d.revPS: 10 -> 10.07
- `AVT` Avnet: price: 87 -> 85.39; m.peTTM: 34 -> 33.0; m.peFwd: 11 -> 10.8; m.evEbitda: 9 -> 13.0; m.gross: 11 -> 10.5; m.op: 3 -> 3.1; m.net: 1 -> 0.9; m.roe: 7 -> 4.3; m.revCagrHist: 0 -> 33.9; d.revPS: 304 -> 301.97
- `ARW` Arrow Electronics: price: 219 -> 215.49; mcap: 11 -> 11.02; m.peTTM: 16 -> 15.4; m.peFwd: 11 -> 10.1; m.evEbitda: 8 -> 10.4; m.gross: 12 -> 11.3; m.op: 3 -> 4.2; m.net: 1.5 -> 2.2; m.roe: 9 -> 11.3; m.revCagrHist: -2 -> 39.0; d.revPS: 655 -> 649.87
- `AAPL` Apple: price: 291 -> 291.58; mcap: 4270 -> 4282.54; m.peTTM: 35 -> 35.2; m.peFwd: 32 -> 30.4; m.evEbitda: 25 -> 26.9; m.evSales: 9 -> 9.5; m.gross: 47 -> 47.9; m.op: 32 -> 32.3; m.net: 26 -> 27.2; m.roe: 150 -> 141.5; m.revCagrHist: 5 -> 16.6; d.revPS: 31 -> 30.53
- `MSFT` Microsoft: price: 403 -> 397.36; mcap: 3000 -> 2951.76; m.peTTM: 24 -> 23.7; m.peFwd: 22 -> 20.5; m.evEbitda: 17 -> 16.3; m.evSales: 11 -> 9.4; m.gross: 69 -> 68.3; m.op: 45 -> 46.3; m.net: 36 -> 39.3; m.roe: 35 -> 34.0; m.revCagrHist: 14 -> 18.3; d.revPS: 43 -> 42.84
- `GOOGL` Alphabet: price: 364 -> 356.38; mcap: 4450 -> 4346.03; m.peTTM: 28 -> 27.8; m.peFwd: 29 -> 24.6; m.evEbitda: 18 -> 26.6; m.evSales: 7 -> 10.1; m.gross: 58 -> 60.4; m.op: 32 -> 36.1; m.net: 28 -> 37.9; m.roe: 32 -> 38.9; m.revCagrHist: 13 -> 21.8; d.revPS: 35 -> 34.93
- `AMZN` Amazon: price: 244 -> 238.0; mcap: 2630 -> 2560.19; m.peTTM: 29 -> 30.8; m.peFwd: 29 -> 24.1; m.evEbitda: 16 -> 17.0; m.evSales: 3.5 -> 3.6; m.gross: 48 -> 50.6; m.op: 11 -> 13.1; m.net: 8 -> 12.2; m.roe: 20 -> 24.3; m.revCagrHist: 12 -> 16.6; d.revPS: 69 -> 69.48
- `META` Meta Platforms: price: 585 -> 570.98; mcap: 1480 -> 1449.39; m.peTTM: 21 -> 21.3; m.peFwd: 18 -> 15.8; m.evEbitda: 13 -> 13.3; m.evSales: 7 -> 6.8; m.gross: 81 -> 81.9; m.op: 42 -> 40.6; m.net: 34 -> 32.8; m.roe: 34 -> 32.9; m.revCagrHist: 18 -> 33.1; d.revPS: 85 -> 85.21
- `TSLA` Tesla: price: 397 -> 381.59; mcap: 1490 -> 1433.15; m.peTTM: 386 -> 370.5; m.peFwd: 184 -> 152.6; m.evEbitda: 80 -> 126.6; m.evSales: 14 -> 14.4; m.gross: 18 -> 19.1; m.op: 8 -> 4.2; m.net: 8 -> 3.9; m.roe: 10 -> 4.9; m.revCagrHist: 10 -> 15.8; d.revPS: 26 -> 30.31
- `SONY` Sony Group: price: 21 -> 20.76; mcap: 127 -> 122.26; m.peTTM: 999 -> 19.4; m.peFwd: 17 -> 17.4; m.evEbitda: 10 -> -0.0; m.evSales: 1.5 -> -0.0; m.gross: 30 -> 30.8; m.op: 10 -> 7.6; m.net: -1 -> -2.6; m.roe: -1 -> 12.4; m.revCagrHist: 5 -> 15.4; d.revPS: 13 -> 2088.3
- `CSCO` Cisco Systems: price: 120 -> 118.8; mcap: 474 -> 468.24; m.peTTM: 40 -> 40.1; m.peFwd: 26 -> 24.9; m.evEbitda: 15 -> 28.5; m.evSales: 5 -> 8.0; m.gross: 65 -> 64.3; m.op: 28 -> 25.0; m.net: 20 -> 19.7; m.roe: 28 -> 25.2; m.revCagrHist: 3 -> 12.0; d.revPS: 15 -> 15.36
- `DELL` Dell Technologies: price: 382 -> 369.83; mcap: 248 -> 239.69; m.peTTM: 31 -> 30.4; m.peFwd: 21 -> 17.5; m.evEbitda: 14 -> 18.7; m.evSales: 1.8 -> 1.9; m.gross: 22 -> 19.2; m.op: 6 -> 8.3; m.net: 4 -> 6.3; m.revCagrHist: 6 -> 87.5; d.revPS: 206 -> 201.73
- `002594` BYD (via `002594.SZ`): price: 90 -> 88.97; m.peTTM: 29 -> 45.6; m.peFwd: 19 -> 15.9; m.evEbitda: 8 -> 7.6; m.evSales: 0.9 -> 1.1; m.gross: 20 -> 17.2; m.op: 7 -> 4.8; m.net: 5 -> 3.5; m.roe: 22 -> 11.1; m.revCagrHist: 30 -> -11.8; d.revPS: 94 -> 86.11
- `APD` Air Products: price: 283 -> 276.51; mcap: 63 -> 61.57; m.peTTM: 30 -> 29.2; m.peFwd: 21 -> 19.4; m.evEbitda: 17 -> 21.0; m.evSales: 3.6 -> 6.5; m.op: 18 -> 23.6; m.net: 13 -> 16.9; m.roe: 35 -> 12.4; m.revCagrHist: 8 -> 8.8; d.revPS: 56 -> 55.95
- `4091` Nippon Sanso (via `4091.T`): price: 5275 -> 5239.0; m.peTTM: 18 -> 18.3; m.peFwd: 17 -> 18.9; m.evEbitda: 10 -> 9.5; m.gross: 43 -> 42.8; m.net: 10 -> 9.1; m.roe: 30 -> 11.2; m.revCagrHist: 8 -> 7.5; d.revPS: 90 -> 3141.03
- `4901` Fujifilm (via `4901.T`): price: 3521 -> 3466.0; m.peTTM: 15 -> 15.4; m.peFwd: 15 -> 14.9; m.evEbitda: 8 -> 9.8; m.evSales: 1.8 -> 1.5; m.gross: 41 -> 40.8; m.op: 10 -> 11.0; m.net: 7 -> 8.2; m.roe: 30 -> 7.7; m.revCagrHist: 10 -> 6.8; d.revPS: 175 -> 2789.0
- `MRK.DE` Merck KGaA: price: 136 -> 136.45; m.peTTM: 24 -> 23.4; m.peFwd: 17 -> 15.7; m.evEbitda: 13 -> 11.9; m.evSales: 2.9 -> 3.2; m.gross: 59 -> 58.9; m.op: 18 -> 18.2; m.net: 13 -> 12.1; m.roe: 35 -> 8.5; m.revCagrHist: 12 -> -2.8; d.revPS: 36 -> 48.23
- `4005` Sumitomo Chemical (via `4005.T`): price: 549 -> 534.4; m.peTTM: 15 -> 14.4; m.peFwd: 11 -> 13.7; m.evEbitda: 8 -> 6.4; m.evSales: 1.8 -> 0.9; m.gross: 29 -> 28.7; m.op: 8 -> -4.6; m.net: 6 -> 2.6; m.roe: 15 -> 10.0; m.revCagrHist: 8 -> -11.3; d.revPS: 1200 -> 1419.67
- `WAF` Siltronic (via `WAF.DE`): price: 86 -> 85.5; m.evEbitda: 12 -> 12.3; m.evSales: 3 -> 2.8; m.gross: 18 -> 8.3; m.op: 3 -> -9.7; m.net: 2 -> -5.1; m.roe: 10 -> -3.7; m.revCagrHist: 6 -> 3.1; d.revPS: 11 -> 44.89
- `CEVA` CEVA: price: 43 -> 41.08; mcap: 1.2 -> 1.14; m.peFwd: 70 -> 49.9; m.evSales: 3 -> 8.4; m.gross: 90 -> 87.2; m.op: 5 -> -18.8; m.net: 4 -> -10.5; m.roe: 25 -> -3.9; m.revCagrHist: 16 -> 11.5; d.revPS: 4.5 -> 4.45
- `2454` MediaTek (via `2454.TW`): price: 4155 -> 3985.0; m.peTTM: 66 -> 60.3; m.peFwd: 54 -> 33.2; m.evEbitda: 36 -> 54.8; m.evSales: 7.9 -> 10.9; m.gross: 48 -> 47.0; m.op: 17 -> 15.3; m.net: 12 -> 16.9; m.roe: 40 -> 25.4; m.revCagrHist: 16 -> -2.7; d.revPS: 360 -> 371.68
- `0981` SMIC (via `0981.HK`): price: 72 -> 71.75; m.peTTM: 999 -> 102.4; m.peFwd: 65 -> 53.0; m.evEbitda: 12 -> 94.5; m.evSales: 3 -> 45.2; m.gross: 20 -> 20.4; m.op: 5 -> 9.9; m.net: 4 -> 7.2; m.roe: 20 -> 2.6; m.revCagrHist: 16 -> 11.5; d.revPS: 1.3 -> 1.2
- `UMC` UMC: price: 20 -> 18.9; mcap: 50.7 -> 47.43; m.peTTM: 32 -> 30.5; m.peFwd: 29 -> 23.5; m.evEbitda: 18 -> -0.1; m.evSales: 3.8 -> -0.0; m.gross: 33 -> 29.6; m.op: 22 -> 18.5; m.net: 16 -> 20.8; m.roe: 35 -> 12.5; m.revCagrHist: 10 -> 5.5; d.revPS: 3 -> 96.39
- `1347` Hua Hong (via `1347.HK`): price: 137 -> 136.5; m.peTTM: 999 -> 546.0; m.peFwd: 135 -> 114.3; m.evSales: 3 -> 95.5; m.gross: 20 -> 12.6; m.op: 5 -> -3.0; m.net: 4 -> 2.9; m.roe: 10 -> -0.8; m.revCagrHist: 14 -> 22.2; d.revPS: 1.3 -> 1.46
- `285A` Kioxia (via `285A.T`): price: 70500 -> 72610.0; m.peTTM: 76 -> 72.0; m.peFwd: 8 -> 999; m.evEbitda: 42 -> 33.2; m.evSales: 9.1 -> 16.8; m.gross: 30 -> 43.3; m.op: 20 -> 59.5; m.net: 14 -> 23.7; m.roe: 30 -> 51.9; m.revCagrHist: 18 -> 188.9; d.revPS: 14000 -> 4317.31
- `SNDK` SanDisk: price: 1647 -> 1643.23; mcap: 244 -> 243.35; m.peTTM: 55 -> 56.2; m.peFwd: 10 -> 9.0; m.evEbitda: 30 -> 42.6; m.evSales: 6.6 -> 18.2; m.gross: 30 -> 56.0; m.op: 20 -> 70.0; m.net: 14 -> 34.2; m.roe: 30 -> 39.3; m.revCagrHist: 18 -> 251.0; d.revPS: 82 -> 89.99
- `6503` Mitsubishi Elec (via `6503.T`): price: 5572 -> 5324.0; m.peTTM: 29 -> 26.8; m.peFwd: 24 -> 32.2; m.evEbitda: 16 -> 16.8; m.evSales: 3.5 -> 1.9; m.gross: 32 -> 32.1; m.op: 7 -> 8.0; m.net: 5 -> 6.9; m.roe: 30 -> 10.0; d.revPS: 280 -> 2866.86
- `WOLF` Wolfspeed: price: 49 -> 43.42; mcap: 2.36 -> 2.26; m.evEbitda: 12 -> -10.1; m.evSales: 3 -> 3.9; m.gross: 35 -> -17.4; m.op: -143 -> -72.0; m.net: -30 -> -72.9; m.roe: 5 -> -84.2; m.revCagrHist: 12 -> -19.0; d.revPS: 5 -> 12.96
- `6504` Fuji Electric (via `6504.T`): price: 13270 -> 13025.0; m.peTTM: 21 -> 19.6; m.peFwd: 20 -> 21.4; m.evEbitda: 12 -> 10.2; m.evSales: 2.5 -> 1.6; m.gross: 30 -> 28.0; m.op: 10 -> 16.5; m.net: 7 -> 8.0; m.roe: 25 -> 12.9; d.revPS: 1200 -> 8329.74
- `002371` Naura (via `002371.SZ`): price: 619 -> 636.36; m.peTTM: 80 -> 82.9; m.peFwd: 48 -> 43.9; m.evEbitda: 44 -> 61.5; m.evSales: 9.6 -> 10.9; m.gross: 39 -> 39.1; m.op: 14 -> 18.1; m.net: 10 -> 13.4; m.roe: 35 -> 13.6; m.revCagrHist: 18 -> 25.8; d.revPS: 32 -> 57.33
- `ASM` ASM Intl (via `ASM.AS`): price: 881 -> 906.6; m.peTTM: 44 -> 45.0; m.peFwd: 39 -> 33.6; m.evEbitda: 24 -> 39.8; m.evSales: 5.3 -> 13.6; m.gross: 52 -> 51.8; m.op: 30 -> 32.2; m.net: 22 -> 31.0; m.roe: 45 -> 24.9; m.revCagrHist: 16 -> 2.8; d.revPS: 100 -> 65.31
- `TER` Teradyne: price: 369 -> 347.59; mcap: 57.8 -> 54.41; m.peTTM: 69 -> 64.5; m.peFwd: 54 -> 36.6; m.evEbitda: 38 -> 46.7; m.evSales: 8.3 -> 14.3; m.gross: 59 -> 58.7; m.op: 21 -> 37.6; m.net: 15 -> 22.6; m.roe: 45 -> 28.7; m.revCagrHist: 16 -> 87.0; d.revPS: 23 -> 23.99
- `COHU` Cohu: price: 55 -> 54.47; mcap: 2.59 -> 2.57; m.peFwd: 67 -> 37.4; m.evSales: 3 -> 5.0; m.gross: 46 -> 43.5; m.op: -10 -> -8.3; m.net: -7 -> -11.5; m.roe: 20 -> -7.0; m.revCagrHist: 14 -> 29.3; d.revPS: 10 -> 10.28
- `2360` Chroma ATE (via `2360.TW`): price: 2210 -> 2090.0; m.peTTM: 76 -> 76.3; m.peFwd: 53 -> 35.7; m.evEbitda: 42 -> 74.6; m.evSales: 9.1 -> 28.0; m.gross: 63 -> 62.2; m.op: 20 -> 40.5; m.net: 14 -> 40.3; m.roe: 40 -> 52.1; m.revCagrHist: 16 -> 72.8; d.revPS: 33 -> 78.82
- `0522` ASMPT (via `0522.HK`): price: 176 -> 174.7; m.peTTM: 60 -> 67.2; m.peFwd: 51 -> 33.7; m.evEbitda: 33 -> 53.5; m.evSales: 7.2 -> 4.9; m.gross: 38 -> 38.1; m.op: 12 -> 9.7; m.net: 9 -> 7.3; m.revCagrHist: 16 -> 27.0; d.revPS: 45 -> 35.28
- `BESI` BE Semiconductor (via `BESI.AS`): price: 281 -> 288.8; m.peTTM: 144 -> 151.2; m.peFwd: 80 -> 47.6; m.evEbitda: 79 -> 109.2; m.evSales: 17.3 -> 36.1; m.gross: 63 -> 63.3; m.op: 29 -> 34.6; m.net: 21 -> 24.0; m.roe: 40 -> 31.3; m.revCagrHist: 18 -> 28.3; d.revPS: 8 -> 7.99
- `KLIC` Kulicke & Soffa: price: 103 -> 102.03; mcap: 5.37 -> 5.34; m.peTTM: 999 -> 99.1; m.peFwd: 25 -> 24.1; m.evEbitda: 12 -> 41.8; m.evSales: 3 -> 6.4; m.gross: 48 -> 53.6; m.op: 7 -> 15.9; m.net: 5 -> 7.2; m.roe: 25 -> 6.4; m.revCagrHist: 14 -> 49.8; d.revPS: 14 -> 14.68
- `7729` Tokyo Seimitsu (via `7729.T`): price: 16925 -> 16970.0; m.peTTM: 29 -> 28.0; m.peFwd: 24 -> 27.8; m.evEbitda: 16 -> 16.5; m.evSales: 3.5 -> 3.9; m.gross: 41 -> 41.3; m.op: 20 -> 23.8; m.net: 14 -> 14.8; m.roe: 35 -> 13.5; m.revCagrHist: 12 -> 13.7; d.revPS: 3700 -> 4113.96
- `SMHN` SUSS MicroTec (via `SMHN.DE`): price: 89 -> 89.45; m.peTTM: 50 -> 30.3; m.peFwd: 35 -> 26.1; m.evEbitda: 28 -> 32.0; m.evSales: 6 -> 3.5; m.gross: 36 -> 34.8; m.op: 13 -> 4.3; m.net: 9 -> 6.9; m.roe: 30 -> 11.6; m.revCagrHist: 14 -> -30.7; d.revPS: 26 -> 24.32
- `002156` Tongfu (via `002156.SZ`): price: 61 -> 60.09; m.peTTM: 68 -> 63.3; m.peFwd: 54 -> 76.1; m.evEbitda: 37 -> 20.6; m.evSales: 8.2 -> 3.8; m.gross: 14 -> 14.1; m.op: 6 -> 5.8; m.net: 4 -> 4.9; m.roe: 20 -> 9.7; m.revCagrHist: 16 -> 22.8; d.revPS: 22 -> 19.24
- `ATS` AT&S (via `ATS.VI`): price: 135 -> 136.8; m.peTTM: 42 -> 41.5; m.peFwd: 52 -> 26.5; m.evEbitda: 23 -> 9.9; m.evSales: 5 -> 3.9; m.gross: 20 -> 9.5; m.op: 8 -> 7.3; m.net: 6 -> 8.5; m.roe: 25 -> 14.8; m.revCagrHist: 14 -> 17.9; d.revPS: 40 -> 43.94
- `6239` Powertech (via `6239.TW`): price: 303 -> 303.5; m.peTTM: 38 -> 40.7; m.peFwd: 24 -> 16.1; m.evEbitda: 21 -> 11.7; m.evSales: 4.6 -> 3.2; m.gross: 18 -> 17.6; m.op: 12 -> 13.0; m.net: 9 -> 7.7; m.roe: 30 -> 11.0; m.revCagrHist: 12 -> 37.6; d.revPS: 80 -> 109.3
- `8046` Nan Ya PCB (via `8046.TW`): price: 847 -> 801.0; m.peTTM: 194 -> 262.6; m.peFwd: 54 -> 28.6; m.evEbitda: 107 -> 53.6; m.evSales: 20 -> 12.6; m.gross: 12 -> 11.6; m.op: 8 -> 12.1; m.net: 6 -> 7.1; m.roe: 25 -> 6.6; m.revCagrHist: 14 -> 32.1; d.revPS: 60 -> 66.38
- `3036` WT Micro (via `3036.TW`): price: 240 -> 224.5; m.peTTM: 17 -> 21.8; m.peFwd: 10 -> 7.6; m.evEbitda: 9 -> 13.3; m.evSales: 2 -> 0.3; m.gross: 4 -> 3.7; m.net: 1 -> 1.3; m.roe: 25 -> 16.2; m.revCagrHist: 10 -> 99.8; d.revPS: 1075 -> 1207.73
- `3702` WPG Holdings (via `3702.TW`): price: 109 -> 106.5; m.peTTM: 14 -> 19.1; m.peFwd: 9 -> 6.9; m.evEbitda: 8 -> 13.7; m.evSales: 1.7 -> 0.3; m.gross: 4 -> 4.2; m.op: 2 -> 2.7; m.net: 1 -> 1.3; m.roe: 25 -> 15.9; m.revCagrHist: 8 -> 27.2; d.revPS: 850 -> 638.98
- `3132` Macnica (via `3132.T`): price: 3227 -> 3143.0; m.peTTM: 21 -> 20.2; m.peFwd: 17 -> 11.5; m.evEbitda: 12 -> 13.1; m.evSales: 2.5 -> 0.5; m.gross: 11 -> 10.7; m.op: 2 -> 4.2; m.net: 1 -> 2.3; m.roe: 25 -> 10.4; m.revCagrHist: 10 -> 29.2; d.revPS: 6300 -> 6801.56
- `0992` Lenovo (via `0992.HK`): price: 23 -> 22.54; m.peTTM: 23 -> 20.7; m.peFwd: 17 -> 13.4; m.evEbitda: 13 -> 65.9; m.evSales: 2.8 -> 3.5; m.gross: 15 -> 15.4; m.op: 4 -> 4.1; m.net: 3 -> 2.3; m.roe: 30 -> 28.6; m.revCagrHist: 10 -> 27.1; d.revPS: 57 -> 6.79
- `1810` Xiaomi (via `1810.HK`): price: 27 -> 25.64; m.peTTM: 18 -> 14.2; m.peFwd: 22 -> 14.5; m.evEbitda: 10 -> 18.3; m.evSales: 2.2 -> 1.4; m.gross: 21 -> 22.1; m.op: 5 -> 4.5; m.net: 4 -> 8.0; m.roe: 35 -> 14.0; m.revCagrHist: 14 -> -10.9; d.revPS: 50 -> 17.21
- `HPQ` HP Inc.: price: 25 -> 24.69; mcap: 22.8 -> 22.58; m.peTTM: 9 -> 9.2; m.peFwd: 9 -> 8.2; m.evEbitda: 5 -> 6.3; m.evSales: 1.1 -> 0.5; m.gross: 20 -> 20.3; m.op: 5 -> 7.1; m.net: 4 -> 4.4; m.revCagrHist: 6 -> 9.0; d.revPS: 88 -> 61.51

**Needs review**
- `6857` Advantest — currency **JPY** (mcap skipped; verify price/currency)
- `4063` Shin-Etsu Chemical — currency **JPY** (mcap skipped; verify price/currency)
- `6146` Disco — currency **JPY** (mcap skipped; verify price/currency)
- `6963` Rohm — currency **JPY** (mcap skipped; verify price/currency)
- `4004` Resonac — currency **JPY** (mcap skipped; verify price/currency)
- `6861` Keyence — currency **JPY** (mcap skipped; verify price/currency)
- `6723` Renesas — currency **JPY** (mcap skipped; verify price/currency)
- `8035` Tokyo Electron — currency **JPY** (mcap skipped; verify price/currency)
- `7735` SCREEN Holdings — currency **JPY** (mcap skipped; verify price/currency)
- `005930` Samsung Electronics — currency **KRW** (mcap skipped; verify price/currency)
- `000660` SK Hynix — currency **KRW** (mcap skipped; verify price/currency)
- `AI` Air Liquide — currency **EUR** (mcap skipped; verify price/currency)
- `4186` Tokyo Ohka Kogyo — currency **JPY** (mcap skipped; verify price/currency)
- `4182` Mitsubishi Gas Chemical — currency **JPY** (mcap skipped; verify price/currency)
- `3436` Sumco — currency **JPY** (mcap skipped; verify price/currency)
- `SOI` Soitec — currency **EUR** (mcap skipped; verify price/currency)
- `4062` Ibiden — currency **JPY** (mcap skipped; verify price/currency)
- `600584` JCET Group — currency **CNY** (mcap skipped; verify price/currency)
- `IFX` Infineon — currency **EUR** (mcap skipped; verify price/currency)
- `002594` BYD — currency **CNY** (mcap skipped; verify price/currency)
- `4091` Nippon Sanso — currency **JPY** (mcap skipped; verify price/currency)
- `4901` Fujifilm — currency **JPY** (mcap skipped; verify price/currency)
- `MRK.DE` Merck KGaA — currency **EUR** (mcap skipped; verify price/currency)
- `4005` Sumitomo Chemical — currency **JPY** (mcap skipped; verify price/currency)
- `WAF` Siltronic — currency **EUR** (mcap skipped; verify price/currency)
- `2454` MediaTek — currency **TWD** (mcap skipped; verify price/currency)
- `0981` SMIC — currency **HKD** (mcap skipped; verify price/currency)
- `1347` Hua Hong — currency **HKD** (mcap skipped; verify price/currency)
- `285A` Kioxia — currency **JPY** (mcap skipped; verify price/currency)
- `6503` Mitsubishi Elec — currency **JPY** (mcap skipped; verify price/currency)
- `6504` Fuji Electric — currency **JPY** (mcap skipped; verify price/currency)
- `002371` Naura — currency **CNY** (mcap skipped; verify price/currency)
- `ASM` ASM Intl — currency **EUR** (mcap skipped; verify price/currency)
- `2360` Chroma ATE — currency **TWD** (mcap skipped; verify price/currency)
- `0522` ASMPT — currency **HKD** (mcap skipped; verify price/currency)
- `BESI` BE Semiconductor — currency **EUR** (mcap skipped; verify price/currency)
- `7729` Tokyo Seimitsu — currency **JPY** (mcap skipped; verify price/currency)
- `SMHN` SUSS MicroTec — currency **EUR** (mcap skipped; verify price/currency)
- `002156` Tongfu — currency **CNY** (mcap skipped; verify price/currency)
- `ATS` AT&S — currency **EUR** (mcap skipped; verify price/currency)
- `6239` Powertech — currency **TWD** (mcap skipped; verify price/currency)
- `8046` Nan Ya PCB — currency **TWD** (mcap skipped; verify price/currency)
- `3036` WT Micro — currency **TWD** (mcap skipped; verify price/currency)
- `3702` WPG Holdings — currency **TWD** (mcap skipped; verify price/currency)
- `3132` Macnica — currency **JPY** (mcap skipped; verify price/currency)
- `0992` Lenovo — currency **HKD** (mcap skipped; verify price/currency)
- `1810` Xiaomi — currency **HKD** (mcap skipped; verify price/currency)

**Skipped (preserved)**
- `6967` Shinko Electric (via `6967.T`) — no market data (private/pre-IPO or unresolved symbol); left unchanged
- `6488` GlobalWafers (via `6488.TW`) — no market data (private/pre-IPO or unresolved symbol); left unchanged

## space.js

- changed: 24 · skipped: 0 · review: 2

**Changed**
- `KRMN` Karman Holdings: price: 45 -> 45.87; mcap: 6 -> 6.08; m.peTTM: 55 -> 208.5; m.peFwd: 40 -> 49.8; m.evEbitda: 28 -> 50.4; m.evSales: 7 -> 13.2; m.gross: 30 -> 41.0; m.op: 18 -> 15.5; m.net: 8 -> 5.7; m.roe: 9 -> 7.9; m.revCagrHist: 20 -> 51.0; d.revPS: 8 -> 3.95
- `RKLB` Rocket Lab: price: 25 -> 105.05; mcap: 12 -> 65.64; m.peFwd: 120 -> 999; m.evSales: 15 -> 87.6; m.gross: 30 -> 36.6; m.op: -12 -> -22.4; m.net: -15 -> -26.9; m.roe: -15 -> -13.5; m.revCagrHist: 30 -> 63.5; d.revPS: 2.6 -> 1.22
- `LMT` Lockheed Martin: price: 470 -> 525.02; mcap: 110 -> 121.05; m.peTTM: 17 -> 25.4; m.peFwd: 16 -> 16.4; m.evEbitda: 12 -> 17.5; m.evSales: 1.7 -> 1.9; m.gross: 12 -> 9.9; m.op: 12 -> 11.0; m.net: 9 -> 6.4; m.roe: 60 -> 67.6; m.revCagrHist: 3 -> 0.3; d.revPS: 290 -> 324.33
- `NOC` Northrop Grumman: price: 520 -> 542.14; mcap: 75 -> 77.0; m.peTTM: 19 -> 17.2; m.peFwd: 17 -> 18.0; m.evEbitda: 13 -> 12.7; m.evSales: 1.9 -> 2.2; m.gross: 20 -> 20.5; m.op: 11 -> 11.7; m.net: 9 -> 10.8; m.roe: 30 -> 28.5; m.revCagrHist: 4 -> 4.4; d.revPS: 330 -> 296.53
- `BA` Boeing: price: 210 -> 209.0; mcap: 160 -> 164.76; m.peTTM: 999 -> 82.6; m.peFwd: 40 -> 50.0; m.evSales: 1.5 -> 2.1; m.gross: 8 -> 4.8; m.op: -3 -> 1.7; m.net: -6 -> 2.5; m.roe: -15 -> 169.9; m.revCagrHist: 8 -> 14.0; d.revPS: 290 -> 119.96
- `RTX` RTX Corp: price: 130 -> 177.41; mcap: 175 -> 238.92; m.peTTM: 22 -> 34.0; m.peFwd: 19 -> 23.4; m.evEbitda: 14 -> 17.9; m.evSales: 2.4 -> 3.0; m.gross: 20 -> 20.2; m.op: 12 -> 13.2; m.net: 9 -> 8.0; m.roe: 12 -> 11.6; m.revCagrHist: 6 -> 8.7; d.revPS: 95 -> 67.24
- `AIR` Airbus (via `AIR.PA`): price: 190 -> 174.96; m.peTTM: 28 -> 27.6; m.peFwd: 24 -> 20.4; m.evEbitda: 14 -> 17.8; m.evSales: 1.6 -> 1.9; m.gross: 17 -> 15.4; m.op: 9 -> 1.5; m.net: 7 -> 6.9; m.roe: 30 -> 19.7; m.revCagrHist: 8 -> -6.6; d.revPS: 75 -> 91.86
- `HEI` Heico: price: 280 -> 320.88; mcap: 38 -> 44.81; m.peTTM: 58 -> 57.1; m.peFwd: 50 -> 46.9; m.evEbitda: 32 -> 34.8; m.evSales: 7 -> 9.7; m.gross: 38 -> 40.1; m.op: 22 -> 25.5; m.net: 16 -> 16.1; m.roe: 16 -> 17.2; m.revCagrHist: 15 -> 25.3; d.revPS: 20 -> 35.25
- `TDG` TransDigm: price: 1450 -> 1212.36; mcap: 82 -> 67.81; m.peTTM: 38 -> 39.2; m.peFwd: 33 -> 25.8; m.evEbitda: 22 -> 19.8; m.evSales: 10 -> 10.1; m.gross: 60 -> 59.7; m.op: 45 -> 46.7; m.net: 25 -> 21.9; m.revCagrHist: 12 -> 18.3; d.revPS: 85 -> 163.28
- `MRCY` Mercury Systems: price: 55 -> 106.81; mcap: 3.3 -> 6.41; m.peTTM: 80 -> 999; m.peFwd: 40 -> 69.7; m.evEbitda: 18 -> 70.3; m.evSales: 2.2 -> 7.0; m.gross: 25 -> 28.7; m.op: 5 -> 3.2; m.net: 3 -> -1.5; m.roe: 4 -> -1.0; m.revCagrHist: 8 -> 11.5; d.revPS: 55 -> 16.3
- `RDW` Redwire: price: 18 -> 14.87; mcap: 1.5 -> 2.96; m.peFwd: 60 -> 999; m.evEbitda: 40 -> -16.9; m.evSales: 4 -> 8.1; m.gross: 28 -> 12.9; m.op: -5 -> -71.8; m.net: -8 -> -80.9; m.roe: -12 -> -48.7; m.revCagrHist: 25 -> 57.9; d.revPS: 6 -> 2.47
- `ASTS` AST SpaceMobile: price: 40 -> 87.32; mcap: 12 -> 33.89; m.gross: 40 -> 44.8; m.net: -99 -> 0.0; m.roe: -40 -> -37.8; d.revPS: 0.2 -> 0.31
- `IRDM` Iridium: price: 28 -> 45.61; mcap: 3.2 -> 4.82; m.peTTM: 22 -> 46.1; m.peFwd: 18 -> 33.0; m.evEbitda: 11 -> 14.8; m.evSales: 5 -> 7.4; m.gross: 72 -> 71.6; m.op: 25 -> 23.2; m.net: 10 -> 12.1; m.roe: 40 -> 21.4; m.revCagrHist: 6 -> 1.9; d.revPS: 28 -> 8.24
- `SATS` EchoStar: price: 28 -> 115.24; mcap: 7 -> 33.4; m.evEbitda: 12 -> 38.5; m.evSales: 1.5 -> 4.1; m.gross: 40 -> 27.1; m.op: -2 -> 8.9; m.net: -8 -> -97.6; m.roe: -6 -> -112.3; m.revCagrHist: 2 -> -5.2; d.revPS: 28 -> 51.36
- `VSAT` Viasat: price: 12 -> 61.5; mcap: 1.6 -> 8.4; m.peFwd: 30 -> 152.5; m.evEbitda: 9 -> 9.6; m.evSales: 1.4 -> 2.9; m.gross: 55 -> 33.0; m.op: 8 -> -1.8; m.net: -2 -> -0.7; m.roe: -3 -> 0.1; m.revCagrHist: 5 -> 2.1; d.revPS: 28 -> 34.44
- `SES` SES S.A. (via `SESG.PA`): price: 7 -> 7.91; m.peTTM: 10 -> 999; m.peFwd: 9 -> 999; m.evEbitda: 5 -> 7.9; m.evSales: 2 -> 3.1; m.gross: 80 -> 60.1; m.op: 30 -> 11.7; m.net: 12 -> -4.7; m.revCagrHist: 2 -> 66.4; d.revPS: 6 -> 7.07
- `PL` Planet Labs: price: 6 -> 30.72; mcap: 1.8 -> 10.95; m.peFwd: 90 -> 999; m.evSales: 4 -> 31.9; m.gross: 55 -> 55.6; m.op: -8 -> -30.5; m.net: -12 -> -111.2; m.roe: -10 -> -84.0; m.revCagrHist: 12 -> 42.1; d.revPS: 0.8 -> 1.05
- `BKSY` BlackSky: price: 14 -> 31.79; mcap: 0.5 -> 1.18; m.peFwd: 70 -> 999; m.evSales: 3 -> 13.0; m.gross: 60 -> 69.3; m.op: -10 -> -89.2; m.net: -18 -> -89.1; m.roe: -15 -> -102.7; m.revCagrHist: 20 -> -29.7; d.revPS: 2 -> 2.8
- `SPIR` Spire Global: price: 10 -> 16.37; mcap: 0.3 -> 0.63; m.peTTM: 999 -> 10.2; m.peFwd: 80 -> 999; m.evEbitda: 25 -> -8.0; m.evSales: 3 -> 9.4; m.gross: 65 -> 42.3; m.op: -8 -> -149.5; m.net: -12 -> 77.1; m.roe: -12 -> 101.2; m.revCagrHist: 10 -> -33.7; d.revPS: 4 -> 1.95
- `LHX` L3Harris: price: 250 -> 303.0; mcap: 47 -> 56.45; m.peTTM: 20 -> 32.9; m.peFwd: 17 -> 22.2; m.evEbitda: 14 -> 34.5; m.evSales: 2.6 -> 5.8; m.gross: 30 -> 30.4; m.op: 15 -> 9.7; m.net: 10 -> 10.4; m.revCagrHist: 5 -> 190.0; d.revPS: 120 -> 75.76
- `KTOS` Kratos Defense: price: 40 -> 54.82; mcap: 6 -> 10.28; m.peTTM: 70 -> 322.5; m.peFwd: 55 -> 51.1; m.evEbitda: 30 -> 110.8; m.evSales: 3.5 -> 6.4; m.gross: 25 -> 22.9; m.op: 8 -> 1.8; m.net: 5 -> 2.1; m.roe: 6 -> 1.2; m.revCagrHist: 15 -> 22.6; d.revPS: 40 -> 8.41
- `GRMN` Garmin: price: 210 -> 231.72; mcap: 40 -> 44.69; m.peTTM: 28 -> 26.5; m.peFwd: 26 -> 22.4; m.evEbitda: 18 -> 19.5; m.evSales: 5 -> 5.7; m.gross: 58 -> 59.1; m.op: 25 -> 24.6; m.net: 22 -> 23.3; m.roe: 20 -> 19.9; m.revCagrHist: 10 -> 14.2; d.revPS: 40 -> 38.77
- `LUNR` Intuitive Machines: price: 12 -> 26.54; mcap: 1.5 -> 4.26; m.peFwd: 90 -> 999; m.evSales: 5 -> 16.6; m.gross: 20 -> 9.7; m.op: -15 -> -10.3; m.net: -20 -> -32.7; m.roe: -20 -> -30.3; m.revCagrHist: 40 -> 198.7; d.revPS: 2.5 -> 2.66
- `LDOS` Leidos: price: 160 -> 121.69; mcap: 21 -> 15.31; m.peTTM: 18 -> 11.3; m.peFwd: 15 -> 9.3; m.evEbitda: 12 -> 9.1; m.gross: 18 -> 17.9; m.op: 11 -> 12.2; m.net: 7 -> 8.2; m.roe: 30 -> 30.6; m.revCagrHist: 6 -> 3.7; d.revPS: 160 -> 136.45

**Needs review**
- `AIR` Airbus — currency **EUR** (mcap skipped; verify price/currency)
- `SES` SES S.A. — currency **EUR** (mcap skipped; verify price/currency)
