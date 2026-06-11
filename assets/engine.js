/* ============================================================
   Shared dashboard engine. Reads window.CONFIG = {meta, layers, data},
   builds the page body from CONFIG.meta, then renders every section.
   Industry pages are thin shells: load a data/<name>.js (sets CONFIG)
   then this file. Edit the engine ONCE; all dashboards inherit it.
   ============================================================ */
const CONFIG = window.CONFIG || {};
if(!CONFIG.meta){
  document.title = 'Dashboard — missing config';
  document.body.innerHTML = '<pre style="font:14px ui-monospace,monospace;padding:40px;color:#b23a48">Missing window.CONFIG.\nLoad a data/&lt;industry&gt;.js BEFORE assets/engine.js.</pre>';
  throw new Error('CONFIG missing');
}
document.title = CONFIG.meta.title;
/* shared cross-page nav — add an industry here and every page links to it */
const SITE=[
  {href:"index.html",       label:"Semiconductors"},
  {href:"finance.html",     label:"Finance"},
  {href:"space.html",       label:"Space"},
  {href:"ai-infra.html",    label:"AI Infrastructure"},
  {href:"power.html",       label:"Nuclear & Power"},
  {href:"cyber.html",       label:"Cybersecurity"},
  {href:"biopharma.html",   label:"Obesity & Biopharma"}
];
function siteNav(){
  const cur = (location.pathname.split("/").pop() || "index.html") || "index.html";
  const links = SITE.map(s=>{
    const on = (s.href===cur) || (cur==="index.html" && s.href==="index.html");
    return `<a href="${s.href}"${on?' class="on"':''}>${s.label}</a>`;
  }).join("");
  return `<nav class="sitenav"><div class="wrap">${links}</div></nav>`;
}
function buildBody(meta){ return `${siteNav()}<header>
  <svg class="heroflow" id="heroflow" viewBox="0 0 1200 460" preserveAspectRatio="none" aria-hidden="true"></svg>
  <div class="wrap">${meta.hero}</div>
</header>

<!-- GLOBAL CONTROL BAR -->
<div class="gbar" id="gbar">
  <!-- phone-only compact header: tap to reveal the filter controls -->
  <div class="wrap gbarhead">
    <button class="filterstoggle" id="filtersToggle" aria-expanded="false">
      <span class="caret">▸</span><span class="glabel">Filters</span>
      <span class="tksum" id="filterSummary"></span>
    </button>
  </div>
  <div class="wrap gbarctrl" id="gbarCtrl">
    <span class="glabel">Chain layer</span>
    <div class="layers" id="layers"></div>
    <span class="spacer"></span>
    <span class="glabel">Color</span>
    <div class="seg" id="colorSeg">
      <button data-color="ticker" class="active">By name</button>
      <button data-color="layer">By layer</button>
    </div>
    <span class="glabel">Scoring lens</span>
    <div class="seg" id="lensSeg">
      <button data-lens="value">Value</button>
      <button data-lens="quality" class="active">Quality-Growth</button>
    </div>
  </div>
  <div class="wrap tickerbar">
    <button class="tktoggle" id="tkToggle" aria-expanded="false">
      <span class="caret">▸</span><span class="glabel">Tickers</span>
      <span class="tksum" id="tkSummary"></span>
    </button>
    <input type="search" class="tksearch" id="tkSearch" placeholder="search…" autocomplete="off" spellcheck="false" aria-label="Filter tickers">
    <span class="spacer"></span>
    <button class="tklink" id="tkAll">All</button>
    <button class="tklink" id="tkClear">Clear</button>
  </div>
  <div class="wrap tkpanel" id="tkPanel" hidden>
    <div class="chips" id="chips"></div>
    <div class="chipsempty muted" id="chipsEmpty" hidden>No tickers match.</div>
  </div>
</div>

<div class="wrap">

  <!-- 0. SUPPLY-CHAIN MAP -->
  <section>
    <div class="sechead"><span class="secnum">00</span><h2>Supply-chain map</h2></div>
    <p class="caption"><span class="dec">Decision it helps make:</span> where in the chain the quality and value
      actually sit. Each tile is one layer, upstream → downstream, showing how many names it holds, the average
      composite under your lens, and the layer's median forward P/E and gross margin. Click tiles to add or remove
      whole layers — they <b>stack</b>, so you can compare several at once; “All” resets.</p>
    <div class="laytiles" id="layerMap"></div>
  </section>

  <!-- 1. THESIS STRIP -->
  <section>
    <div class="sechead"><span class="secnum">01</span><h2>Thesis strip</h2></div>
    <p class="caption"><span class="dec">Decision it helps make:</span> a 20-second read on each name — what it is,
      where it trades, and one composite score under the lens you've selected. Click any card to expand the thesis.</p>
    <div class="cards" id="cards"></div>
  </section>

  <!-- 2. RADAR -->
  <section>
    <div class="sechead"><span class="secnum">02</span><h2>Quality radar</h2></div>
    <p class="caption"><span class="dec">Decision it helps make:</span> see each business's <em>shape</em> — where a high
      composite comes from. ${meta.captions.radar} Axes are
      normalized 0–10 (10 = best in cohort); the legend value is the lens-weighted composite. With many names shown the
      chart plots only the <b>top scorers</b> to stay legible — raise the limit or click a legend row to spotlight one shape.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span class="glabel">Show on radar</span>
      <div class="seg" id="radarNSeg" style="margin-left:4px">
        <button data-n="8" class="active">Top 8</button>
        <button data-n="16">Top 16</button>
        <button data-n="999">All visible</button>
      </div>
      <span class="muted" id="radarCountNote" style="font-family:var(--mono);font-size:11px"></span>
    </div>
    <div class="grid2">
      <figure class="panel"><svg id="radar" viewBox="0 0 460 460" role="img" aria-label="Radar chart"></svg></figure>
      <div>
        <div class="rlegend" id="radarLegend"></div>
        <p class="wexpl" style="margin-top:14px" id="lensNote"></p>
      </div>
    </div>
  </section>

  <!-- 3. SCATTER -->
  <section>
    <div class="sechead"><span class="secnum">03</span><h2>Valuation vs. fundamentals</h2></div>
    <p class="caption"><span class="dec">Decision it helps make:</span> spot who is cheap or dear <em>for what you get</em>.
      Dashed lines are cohort medians — bottom-right of the crosshair is the sweet spot (lower multiple, higher growth/returns).
      Bubble size = market cap. Hover for the underlying numbers.</p>
    <div class="panel">
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px">
        <div><span class="glabel">X axis</span>
          <div class="seg" id="xSeg" style="margin-left:8px">
            <button data-x="peFwd" class="active">Fwd P/E</button>
            <button data-x="evEbitda">EV/EBITDA</button>
          </div></div>
        <div><span class="glabel">Y axis</span>
          <div class="seg" id="ySeg" style="margin-left:8px">
            <button data-y="epsCagrFwd" class="active">Fwd growth</button>
            <button data-y="roic">ROIC</button>
          </div></div>
        <div><span class="glabel">X scale</span>
          <div class="seg" id="xScaleSeg" style="margin-left:8px">
            <button data-xs="log" class="active">Log</button>
            <button data-xs="linear">Linear</button>
          </div></div>
      </div>
      <svg id="scatter" viewBox="0 0 880 470" role="img" aria-label="Valuation scatter"></svg>
      <div id="scatterTip" class="num" style="font-family:var(--mono);font-size:12px;color:var(--ink2);min-height:20px;margin-top:6px"></div>
    </div>
  </section>

  <!-- 4. HEATMAP -->
  <section>
    <div class="sechead"><span class="secnum">04</span><h2>Metric heatmap</h2></div>
    <p class="caption">${meta.captions.heatmap}</p>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px">
      <div><span class="glabel">Period</span>
        <div class="seg" id="periodSeg" style="margin-left:8px">
          <button data-period="ttm" class="active">TTM</button>
          <button data-period="fwd">Forward</button>
        </div></div>
      <div><span class="glabel">Earnings basis</span>
        <div class="seg" id="basisSeg" style="margin-left:8px">
          <button data-basis="gaap" class="active">GAAP</button>
          <button data-basis="sbc">SBC-adj</button>
        </div></div>
    </div>
    <div class="tablewrap"><table id="heat"><thead></thead><tbody></tbody></table></div>
  </section>

  <!-- 5. REVERSE DCF -->
  <section>
    <div class="sechead"><span class="secnum">05</span><h2>Reverse-DCF workbench</h2></div>
    <p class="caption"><span class="dec">Decision it helps make:</span> stop arguing about “expensive.” Set your own
      assumptions and read two things: the intrinsic value they imply, and — holding everything else fixed — the
      <em>revenue growth the current price already bakes in</em>. If that implied growth looks heroic, the market is doing
      the dreaming for you. Simple 10-year FCF-to-equity model; all inputs shown.</p>
    <div class="panel">
      <div style="margin-bottom:16px"><span class="glabel">Company</span>
        <div class="seg" id="dcfSeg" style="margin-left:8px;flex-wrap:wrap"></div></div>
      <div class="dcf">
        <div class="sliders" id="dcfSliders"></div>
        <div>
          <div class="dcfout" id="dcfOut"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. VERDICT -->
  <section>
    <div class="sechead"><span class="secnum">06</span><h2>Verdict</h2></div>
    <p class="caption"><span class="dec">Decision it helps make:</span> the weighted ranking under your selected lens.
      Hover any bar for its single biggest bull and bear point. Weights re-sort the field live.</p>
    <p class="wexpl" id="weightExpl"></p>
    <div class="vbars" id="verdict"></div>
    <button class="morebtn" id="verdictMore"></button>
  </section>

  <!-- 7. MARKET SHARE -->
  <section>
    <div class="sechead"><span class="secnum">07</span><h2>Market position</h2></div>
    <p class="caption">${meta.captions.market}</p>
    <div class="shareview" id="shareView"></div>
  </section>

</div>

<footer>
  <div class="wrap">${meta.footer}</div>
</footer>`; }
document.body.innerHTML = buildBody(CONFIG.meta);

/* ============================ DATA ============================ */
/* All figures illustrative, ~Jun 2026, JPY. Radar axes 0-10 (10=best). */
const DATA = CONFIG.data;

const AXES=[
 {k:"val",label:"Valuation"},{k:"growth",label:"Growth"},{k:"roic",label:"ROIC vs WACC"},
 {k:"moat",label:"Moat"},{k:"fcf",label:"FCF quality"},{k:"bs",label:"Balance sheet"},{k:"scal",label:"Scalability"}
];

/* Supply-chain layers, ordered upstream → downstream. Each DATA row carries a `layer` key. */
const LAYERS = CONFIG.layers;
const LAYER_LABEL=Object.fromEntries(LAYERS.map(l=>[l.k,l.label]));
const LAYER_COLOR=Object.fromEntries(LAYERS.map(l=>[l.k,l.c]));
const LAYER_ORDER=Object.fromEntries(LAYERS.map((l,i)=>[l.k,i]));
/* effective plotting color for a name: per-ticker by default, or by chain layer when colorMode='layer' */
function colorOf(d){ return state.colorMode==="layer" ? (LAYER_COLOR[d.layer]||d.color) : d.color; }

const LENSES={
 value:{label:"Value",w:{val:.30,fcf:.15,bs:.15,roic:.12,moat:.10,growth:.10,scal:.08},
   note:"Value lens overweights what you pay and what protects it — valuation (30%), FCF quality and balance sheet (15% each), with returns and moat behind them. It rewards cheap, cash-generative, lowly-levered names and penalizes paying up for growth."},
 quality:{label:"Quality-Growth",w:{growth:.22,roic:.20,moat:.18,scal:.12,fcf:.12,bs:.08,val:.08},
   note:"Quality-Growth lens overweights the compounding engine — growth (22%), ROIC vs WACC (20%) and moat (18%), with valuation a light 8%. It rewards durable, high-return franchises with room to reinvest and tolerates a fuller multiple."}
};

/* Heatmap metric rows: key, label, hint, fmt, higherBetter, fwdKey(optional alt), notForward */
const METRICS=[
 {k:"peTTM",fwd:"peFwd",label:"P/E",hint:"price / earnings",fmt:v=>v>=900?"n/m":v.toFixed(0)+"x",hi:false},
 {k:"pegFwd",label:"PEG (fwd)",hint:"fwd P/E / growth",fmt:v=>v.toFixed(1),hi:false},
 {k:"evEbitda",label:"EV / EBITDA",hint:"enterprise value",fmt:v=>v.toFixed(0)+"x",hi:false},
 {k:"evSales",label:"EV / Sales",hint:"enterprise value",fmt:v=>v.toFixed(1)+"x",hi:false},
 {k:"pfcf",label:"P / FCF",hint:"price / free cash flow",fmt:v=>v.toFixed(0)+"x",hi:false},
 {k:"fcfYield",label:"FCF yield",hint:"FCF / market cap",fmt:v=>v.toFixed(1)+"%",hi:true},
 {k:"revCagrHist",fwd:"epsCagrFwd",label:"Growth",hint:"rev CAGR (TTM) / EPS CAGR (fwd)",fmt:v=>v.toFixed(0)+"%",hi:true},
 {k:"gross",label:"Gross margin",hint:"% of revenue",fmt:v=>v.toFixed(0)+"%",hi:true},
 {k:"op",label:"Operating margin",hint:"% of revenue",fmt:v=>v.toFixed(0)+"%",hi:true},
 {k:"net",label:"Net margin",hint:"% of revenue",fmt:v=>v.toFixed(1)+"%",hi:true},
 {k:"roic",label:"ROIC",hint:"return on invested capital",fmt:v=>v.toFixed(0)+"%",hi:true},
 {k:"roe",label:"ROE",hint:"return on equity",fmt:v=>v.toFixed(0)+"%",hi:true},
 {k:"fcfMargin",label:"FCF margin",hint:"FCF / revenue",fmt:v=>v.toFixed(0)+"%",hi:true},
 {k:"fcfConv",label:"FCF conversion",hint:"FCF / net income",fmt:v=>v.toFixed(0)+"%",hi:true},
 {k:"sbc",label:"SBC % of revenue",hint:"stock-based comp",fmt:v=>v.toFixed(1)+"%",hi:false},
 {k:"netDebtEbitda",label:"Net debt / EBITDA",hint:"negative = net cash",fmt:v=>(v<0?"":"+")+v.toFixed(1)+"x",hi:false},
 {k:"intCov",label:"Interest coverage",hint:"EBIT / interest",fmt:v=>v>=999?"net cash":v.toFixed(0)+"x",hi:true}
];

/* ============================ STATE ============================ */
const state={
  visible:new Set(DATA.map(d=>d.tk)),
  lens:"quality",
  xKey:"peFwd", yKey:"epsCagrFwd", xScale:"log",
  period:"ttm", basis:"gaap",
  sortKey:null, sortDir:-1,
  dcf:DATA[0].tk, dcfV:{},
  colorMode:"ticker",   // "ticker" | "layer"
  radarTopN:8,          // when many names visible, radar draws only the top-N by composite
  verdictExpanded:false,
  hl:null               // highlighted ticker (legend/scatter hover spotlight)
};
DATA.forEach(d=>{ state.dcfV[d.tk]={g:d.m.epsCagrFwd, m:Math.round(d.d.fcfM*100), r:9, tg:2.5}; });

const byTk=Object.fromEntries(DATA.map(d=>[d.tk,d]));
/* currency-aware formatter. cur governs only the PRICE display symbol:
   ¥ (JPY, default), $ (USD), ₩ (KRW), € (EUR), CN¥ (Chinese yuan). */
const curOf=d=>(d&&d.cur)?d.cur:"¥";
function fmtMoney(v,d){
  return curOf(d)+Math.round(v).toLocaleString();
}
/* legacy alias kept for any old call sites */
const fmtYen=v=>"¥"+Math.round(v).toLocaleString();
/* Market-cap storage:
   - legacy Tokyo/Korea names store mcap in native TRILLIONS (¥T / ₩T) with no mcapUSD flag.
   - all newer names store mcap already in USD BILLIONS and set mcapUSD:true.
   Display: USD-billion names show "$xxxB"; native-trillion names show ¥xxT / ₩xxxxT. */
function fmtMcap(d){
  if(d.mcapUSD||curOf(d)==="$") return `$${d.mcap.toFixed(0)}B`;  // already USD billions
  if(curOf(d)==="₩") return `₩${d.mcap.toFixed(0)}T`;
  return `¥${d.mcap.toFixed(1)}T`;
}
/* normalize market cap to a common unit (USD billions) for bubble sizing.
   USD-billion names pass through; legacy native-trillion names convert.
   ~150 JPY/USD → ¥1T ≈ $6.7B; ~1360 KRW/USD → ₩1T ≈ $0.735B. */
function mcapUSD(d){
  if(d.mcapUSD) return d.mcap;                // already USD billions
  const c=curOf(d);
  if(c==="$") return d.mcap;                 // already USD billions
  if(c==="₩") return d.mcap*0.735;           // KRW trillions → USD billions
  return d.mcap*6.7;                          // JPY trillions → USD billions
}

function composite(d,lens){
  const w=LENSES[lens].w; let s=0;
  for(const a of AXES) s+=d.r[a.k]*w[a.k];
  return s;
}
/* shared median helper (used by layer map and scatter) */
function median(arr){ const s=[...arr].filter(v=>v!=null&&!isNaN(v)).sort((a,b)=>a-b); const n=s.length;
  return n? (n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2) : 0; }
function basisAdj(d,key){
  // SBC-adjusted basis: nudge margins down slightly by SBC; trivially small for these names
  if(state.basis!=="sbc") return d.m[key];
  const v=d.m[key];
  if(["net","op","fcfMargin","roe","roic"].includes(key)) return v - d.m.sbc*0.6;
  return v;
}
function metricVal(d,met){
  let key=met.k;
  if(state.period==="fwd" && met.fwd) key=met.fwd;
  return basisAdj(d,key);
}

/* ============================ LAYER FILTER ============================ */
// which layers actually appear in DATA, kept in canonical order
const presentLayers=LAYERS.filter(l=>DATA.some(d=>d.layer===l.k));
const layersEl=document.getElementById("layers");
function tksInLayer(k){ return DATA.filter(d=>d.layer===k).map(d=>d.tk); }
// how much of a layer is currently visible: "full" | "partial" | "none"
function layerState(k){
  const tks=tksInLayer(k); const on=tks.filter(t=>state.visible.has(t)).length;
  return on===0?"none":(on===tks.length?"full":"partial");
}
// MULTISELECT toggle: if the whole layer is in, remove it; otherwise add it.
// Edits the shared visible set so layer toggles and ticker chips compose freely.
function toggleLayer(k){
  const tks=tksInLayer(k), st=layerState(k);
  if(st==="full"){ tks.forEach(t=>state.visible.delete(t)); }      // remove the layer
  else { tks.forEach(t=>state.visible.add(t)); }                   // add the whole layer
  if(state.visible.size===0) state.visible=new Set(DATA.map(d=>d.tk)); // never empty → reset to All
  renderAll();
}
function renderLayerChips(){
  layersEl.innerHTML="";
  // "All" resets to every ticker visible
  const all=document.createElement("div");
  all.className="lchip allchip"+(state.visible.size===DATA.length?" active":"");
  all.textContent="All";
  all.title="Show every name";
  all.onclick=()=>{ state.visible=new Set(DATA.map(d=>d.tk)); renderAll(); };
  layersEl.appendChild(all);
  presentLayers.forEach(l=>{
    const tks=tksInLayer(l.k), st=layerState(l.k);
    const chip=document.createElement("div");
    chip.className="lchip"+(st==="full"?" active":st==="partial"?" partial":"");
    chip.textContent=l.label;
    chip.title=`${st==="full"?"Remove":"Add"} ${l.label} (${tks.length}) — layers stack`;
    chip.onclick=()=>toggleLayer(l.k);
    layersEl.appendChild(chip);
  });
}

/* ============================ CHIPS (collapsible + searchable) ============================ */
const chipsEl=document.getElementById("chips");
const tkPanel=document.getElementById("tkPanel");
const tkToggle=document.getElementById("tkToggle");
const tkSearch=document.getElementById("tkSearch");
const tkSummary=document.getElementById("tkSummary");
const chipsEmpty=document.getElementById("chipsEmpty");
let tkOpen=false, tkQuery="";

// render ticker chips grouped by layer order; each carries its searchable text
function buildChips(){
  chipsEl.innerHTML="";
  presentLayers.forEach(l=>{
    DATA.filter(d=>d.layer===l.k).forEach(d=>{
      const c=document.createElement("div");
      c.className="chip"; c.dataset.tk=d.tk;
      c.dataset.search=(d.tk+" "+d.nm+" "+LAYER_LABEL[d.layer]).toLowerCase();
      c.title=LAYER_LABEL[d.layer]||"";
      c.innerHTML=`<span class="dot" style="background:${d.color}"></span>${d.tk} ${d.nm.split(" ")[0]}`;
      c.onclick=()=>{ toggle(d.tk); };
      chipsEl.appendChild(c);
    });
  });
}
buildChips();
function toggle(tk){
  if(state.visible.has(tk)){ if(state.visible.size>1) state.visible.delete(tk); }
  else state.visible.add(tk);
  renderAll();
}
// apply the search filter to which chips are shown (display only — not the same as visible/plotted)
function applyChipSearch(){
  const q=tkQuery.trim().toLowerCase();
  let shown=0;
  [...chipsEl.children].forEach(c=>{
    const match = !q || c.dataset.search.includes(q);
    c.classList.toggle("hide",!match);
    if(match) shown++;
  });
  chipsEmpty.hidden = shown>0;
}
function setTkOpen(open){
  tkOpen=open;
  tkPanel.hidden=false;                 // keep in DOM so transition runs
  tkPanel.classList.toggle("open",open);
  tkToggle.setAttribute("aria-expanded",open?"true":"false");
  if(open){ applyChipSearch(); setTimeout(()=>tkSearch.focus(),120); }
}
tkToggle.onclick=()=>setTkOpen(!tkOpen);
tkSearch.oninput=()=>{ tkQuery=tkSearch.value; if(!tkOpen) setTkOpen(true); applyChipSearch(); };
tkSearch.onfocus=()=>{ if(!tkOpen) setTkOpen(true); };
document.getElementById("tkAll").onclick=()=>{ state.visible=new Set(DATA.map(d=>d.tk)); renderAll(); };
document.getElementById("tkClear").onclick=()=>{ // keep one so charts never go empty
  const first=DATA[0].tk; state.visible=new Set([first]); renderAll(); };

/* phone-only "Filters" disclosure for the sticky bar */
const gbar=document.getElementById("gbar");
const filtersToggle=document.getElementById("filtersToggle");
const filterSummary=document.getElementById("filterSummary");
filtersToggle.onclick=()=>{
  const open=gbar.classList.toggle("filters-open");
  filtersToggle.setAttribute("aria-expanded",open?"true":"false");
};

function syncChips(){
  [...chipsEl.children].forEach(c=>c.classList.toggle("off",!state.visible.has(c.dataset.tk)));
  // summary line reflects current selection vs full cohort
  const n=state.visible.size, total=DATA.length;
  const sum = n===total ? `all <b>${total}</b> shown` : `<b>${n}</b> of ${total} shown`;
  tkSummary.innerHTML=sum;
  filterSummary.innerHTML=sum;   // mirror on the phone Filters header
  renderLayerChips();
}

/* lens segmented */
document.getElementById("lensSeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.lens=b.dataset.lens;
    document.querySelectorAll("#lensSeg button").forEach(x=>x.classList.toggle("active",x===b));
    renderAll(); };
});
/* scatter axes */
document.getElementById("xSeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.xKey=b.dataset.x;
    document.querySelectorAll("#xSeg button").forEach(x=>x.classList.toggle("active",x===b)); renderScatter(); };
});
document.getElementById("ySeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.yKey=b.dataset.y;
    document.querySelectorAll("#ySeg button").forEach(x=>x.classList.toggle("active",x===b)); renderScatter(); };
});
document.getElementById("xScaleSeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.xScale=b.dataset.xs;
    document.querySelectorAll("#xScaleSeg button").forEach(x=>x.classList.toggle("active",x===b)); renderScatter(); };
});
/* heatmap toggles */
document.getElementById("periodSeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.period=b.dataset.period;
    document.querySelectorAll("#periodSeg button").forEach(x=>x.classList.toggle("active",x===b)); renderHeat(); };
});
document.getElementById("basisSeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.basis=b.dataset.basis;
    document.querySelectorAll("#basisSeg button").forEach(x=>x.classList.toggle("active",x===b)); renderHeat(); };
});
/* color mode (by name / by layer) — affects radar, scatter, heatmap, verdict */
document.getElementById("colorSeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.colorMode=b.dataset.color;
    document.querySelectorAll("#colorSeg button").forEach(x=>x.classList.toggle("active",x===b)); renderAll(); };
});
/* radar top-N */
document.getElementById("radarNSeg").querySelectorAll("button").forEach(b=>{
  b.onclick=()=>{ state.radarTopN=parseInt(b.dataset.n,10);
    document.querySelectorAll("#radarNSeg button").forEach(x=>x.classList.toggle("active",x===b)); renderRadar(); };
});

/* ============================ SUPPLY-CHAIN MAP ============================ */
const layerMapEl=document.getElementById("layerMap");
function renderLayerMap(){
  layerMapEl.innerHTML="";
  // map stays a full navigator (all layers shown so you can switch), but stats reflect the
  // CURRENT selection: empty layers dim, counts/score/P/E/GM are computed from visible members.
  presentLayers.forEach(l=>{
    const all=DATA.filter(d=>d.layer===l.k);
    const allTks=all.map(d=>d.tk);
    const names=all.filter(d=>state.visible.has(d.tk));   // visible members of this layer
    const nVis=names.length, nAll=all.length;
    const st=layerState(l.k);                             // "full" | "partial" | "none"
    const stat=names.length?names:all;                    // fall back to full layer if none visible
    const scores=stat.map(d=>composite(d,state.lens));
    const avg=scores.reduce((a,b)=>a+b,0)/stat.length;
    const top=[...stat].sort((a,b)=>composite(b,state.lens)-composite(a,state.lens))[0];
    const medPE=median(stat.map(d=>d.m.peFwd).filter(v=>v<900));
    const medGM=median(stat.map(d=>d.m.gross));
    const tile=document.createElement("div");
    tile.className="laytile"+(st==="full"?" active":st==="partial"?" partial":"")+(nVis===0?" empty":"");
    const countLbl = nVis===nAll ? `${nAll}` : `${nVis}/${nAll}`;
    tile.innerHTML=`
      <div class="lh"><span class="sw" style="background:${l.c}"></span>
        <span class="nm">${l.label}</span><span class="ct">${countLbl}</span></div>
      <div class="scwrap"><span class="v" style="color:${l.c}">${avg.toFixed(1)}</span>
        <span class="l">avg ${state.lens==="value"?"value":"quality"}</span></div>
      <div class="track"><div class="fill" style="width:${(avg/10*100).toFixed(0)}%;background:${l.c}"></div></div>
      <div class="stats">
        <span><span class="k">P/E</span> <b>${medPE?medPE.toFixed(0)+"x":"n/m"}</b></span>
        <span><span class="k">GM</span> <b>${medGM.toFixed(0)}%</b></span>
        <span><span class="k">top</span> <b>${top.tk}</b></span>
      </div>`;
    tile.title=`${st==="full"?"Remove":"Add"} ${l.label} — ${nAll} names: ${allTks.join(", ")} (layers stack)`;
    // multiselect: toggle this layer in/out of the shared selection
    tile.onclick=()=>toggleLayer(l.k);
    layerMapEl.appendChild(tile);
  });
}

/* ============================ THESIS CARDS ============================ */
const cardsEl=document.getElementById("cards");
function renderCards(){
  cardsEl.innerHTML="";
  // only the selected names — filtered-out cards are removed so the grid reflows (no greyed dead space)
  const vis=DATA.filter(d=>state.visible.has(d.tk))
    .sort((a,b)=>(LAYER_ORDER[a.layer]-LAYER_ORDER[b.layer]) || (composite(b,state.lens)-composite(a,state.lens)));
  vis.forEach(d=>{
    const sc=composite(d,state.lens), col=colorOf(d);
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
      <div class="top">
        <span class="bar" style="background:${col}"></span>
        <div>
          <div class="tk">${d.tk} <span class="muted" style="font-size:9.5px">${LAYER_LABEL[d.layer]}</span></div>
          <div class="nm">${d.nm}</div>
          <div class="bz">${d.bz}</div>
        </div>
        <div class="sc"><div class="v" style="color:${col}">${sc.toFixed(1)}</div><div class="l">score</div></div>
      </div>
      <div class="body">
        <div class="price">Price <b>${fmtMoney(d.price,d)}</b> · Mkt cap <b>${fmtMcap(d)}</b> · <span class="caret">▸</span></div>
        <p class="th">${d.thesis}</p>
      </div>`;
    card.querySelector(".top").onclick=()=>card.classList.toggle("open");
    cardsEl.appendChild(card);
  });
}

/* ============================ RADAR ============================ */
const radar=document.getElementById("radar");
function renderRadar(){
  const cx=230,cy=222,R=150,N=AXES.length;
  let svg="";
  // rings
  for(let ring=1;ring<=5;ring++){
    const r=R*ring/5; let pts=[];
    for(let i=0;i<N;i++){const a=-Math.PI/2+i*2*Math.PI/N; pts.push((cx+r*Math.cos(a)).toFixed(1)+","+(cy+r*Math.sin(a)).toFixed(1));}
    svg+=`<polygon points="${pts.join(" ")}" fill="none" class="${ring===5?'gridln2':'gridln'}"/>`;
  }
  // spokes + labels
  for(let i=0;i<N;i++){
    const a=-Math.PI/2+i*2*Math.PI/N;
    const x=cx+R*Math.cos(a), y=cy+R*Math.sin(a);
    svg+=`<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="gridln"/>`;
    const lx=cx+(R+24)*Math.cos(a), ly=cy+(R+24)*Math.sin(a);
    let anchor=Math.abs(Math.cos(a))<0.3?"middle":(Math.cos(a)>0?"start":"end");
    svg+=`<text x="${lx.toFixed(1)}" y="${(ly+3).toFixed(1)}" text-anchor="${anchor}" class="axislbl">${AXES[i].label}</text>`;
  }
  // which visible names to plot: top-N by composite (keeps the chart legible at scale)
  const visRanked=DATA.filter(d=>state.visible.has(d.tk))
    .sort((a,b)=>composite(b,state.lens)-composite(a,state.lens));
  const plotted=visRanked.slice(0, state.radarTopN);
  const plottedSet=new Set(plotted.map(d=>d.tk));
  const spot=state.hl;  // highlighted ticker, if any

  // polygons (draw spotlighted one last so it sits on top)
  const order=[...plotted].sort((a,b)=> (a.tk===spot?1:0)-(b.tk===spot?1:0));
  order.forEach(d=>{
    const col=colorOf(d);
    const dim = spot && d.tk!==spot;
    const fillOp = dim?0.02 : (spot? 0.14 : 0.07);
    const strokeOp = dim?0.18 : 1;
    const sw = d.tk===spot?2.6:2;
    let pts=[];
    for(let i=0;i<N;i++){
      const a=-Math.PI/2+i*2*Math.PI/N; const v=d.r[AXES[i].k]/10*R;
      pts.push((cx+v*Math.cos(a)).toFixed(1)+","+(cy+v*Math.sin(a)).toFixed(1));
    }
    svg+=`<polygon points="${pts.join(" ")}" fill="${col}" fill-opacity="${fillOp}" stroke="${col}" stroke-opacity="${strokeOp}" stroke-width="${sw}" stroke-linejoin="round"/>`;
    if(!dim) for(let i=0;i<N;i++){
      const a=-Math.PI/2+i*2*Math.PI/N; const v=d.r[AXES[i].k]/10*R;
      svg+=`<circle cx="${(cx+v*Math.cos(a)).toFixed(1)}" cy="${(cy+v*Math.sin(a)).toFixed(1)}" r="${d.tk===spot?3:2.4}" fill="${col}"/>`;
    }
  });
  radar.innerHTML=svg;

  // count note
  const visN=visRanked.length;
  const cn=document.getElementById("radarCountNote");
  if(cn) cn.textContent = plotted.length<visN ? `plotting top ${plotted.length} of ${visN} shown` : `plotting all ${visN} shown`;

  // legend — full ranked list of visible names; rows not on the radar are marked
  const leg=document.getElementById("radarLegend");
  leg.innerHTML="";
  visRanked.forEach(d=>{
    const col=colorOf(d);
    const onRadar=plottedSet.has(d.tk);
    const row=document.createElement("div");
    row.className="rrow"+(onRadar?"":" off");
    row.innerHTML=`<span class="dot" style="background:${col}"></span>
      <span class="nm">${d.tk} ${d.nm}${onRadar?"":' <span class="muted" style="font-size:10px">·hidden</span>'}</span>
      <span class="v" style="color:${col}">${composite(d,state.lens).toFixed(1)}</span>`;
    row.onclick=()=>toggle(d.tk);
    row.onmouseenter=()=>{ state.hl=d.tk; renderRadar(); };
    row.onmouseleave=()=>{ state.hl=null; renderRadar(); };
    leg.appendChild(row);
  });
  document.getElementById("lensNote").textContent=LENSES[state.lens].note;
}

/* ============================ SCATTER ============================ */
const scatter=document.getElementById("scatter");
const scatterTip=document.getElementById("scatterTip");
function axisMeta(k){
  const map={peFwd:{l:"Forward P/E",fmt:v=>v.toFixed(0)+"x"},
    evEbitda:{l:"EV / EBITDA",fmt:v=>v.toFixed(0)+"x"},
    epsCagrFwd:{l:"Fwd EPS growth",fmt:v=>v.toFixed(0)+"%"},
    roic:{l:"ROIC",fmt:v=>v.toFixed(0)+"%"}};
  return map[k];
}
function renderScatter(){
  const W=880,H=470,pad={l:64,r:30,t:24,b:52};
  const vis=DATA.filter(d=>state.visible.has(d.tk));
  const xs=vis.map(d=>d.m[state.xKey]), ys=vis.map(d=>d.m[state.yKey]);
  const all=DATA; // scale to full cohort for stable axes
  const xAll=all.map(d=>d.m[state.xKey]), yAll=all.map(d=>d.m[state.yKey]);
  let xMin=Math.min(...xAll), xMax=Math.max(...xAll), yMin=Math.min(...yAll), yMax=Math.max(...yAll);
  const yPadr=(yMax-yMin)*0.12||1;
  yMin-=yPadr; yMax+=yPadr;
  if(state.yKey==="epsCagrFwd"||state.yKey==="roic") yMin=Math.min(yMin,0);
  // x can use a log scale to keep extreme-multiple outliers (e.g. 380x P/E) from
  // crushing the rest of the cloud. Log only applies to strictly-positive x metrics.
  const logX = state.xScale==="log";
  const tx=v=>logX?Math.log10(Math.max(v,0.1)):v;     // value → axis space
  if(logX){ xMin=Math.max(1,xMin); }                  // floor at 1x for a clean decade base
  else { const xPadr=(xMax-xMin)*0.12||1; xMin-=xPadr; xMax+=xPadr; }
  let txMin=tx(xMin), txMax=tx(xMax);
  if(logX){ const m=(txMax-txMin)*0.06||.1; txMin-=m; txMax+=m; }
  const X=v=>pad.l+(tx(v)-txMin)/(txMax-txMin)*(W-pad.l-pad.r);
  const Y=v=>H-pad.b-(v-yMin)/(yMax-yMin)*(H-pad.t-pad.b);
  const xm=axisMeta(state.xKey), ym=axisMeta(state.yKey);
  // x gridline tick values: log → "nice" 1-2-5×decade ladder within range; linear → 4 even steps
  function xTicks(){
    if(!logX){ return [0,1,2,3,4].map(i=>xMin+i/4*(xMax-xMin)); }
    const out=[]; const lo=Math.pow(10,Math.floor(Math.log10(Math.max(xMin,1)))), hi=xMax;
    for(let dec=lo; dec<=hi*1.0001; dec*=10){ for(const m of [1,2,5]){ const v=dec*m; if(v>=xMin*0.999 && v<=hi*1.0001) out.push(v); } }
    return out.length?out:[xMin,xMax];
  }
  // medians of visible
  const xMed=median(xs), yMed=median(ys);

  let svg="";
  // quadrant shading — only meaningful when "cheaper-left, better-up" holds (both current axes do)
  const qx=X(xMed), qy=Y(yMed);
  // bottom-left of crosshair = cheap + high (the sweet spot): faint green; top-right = dear + low: faint red
  svg+=`<rect x="${pad.l}" y="${qy}" width="${qx-pad.l}" height="${H-pad.b-qy}" fill="#2E7D5B" fill-opacity="0.05"/>`;
  svg+=`<rect x="${qx}" y="${pad.t}" width="${W-pad.r-qx}" height="${qy-pad.t}" fill="#B23A48" fill-opacity="0.05"/>`;
  svg+=`<text x="${pad.l+6}" y="${H-pad.b-6}" class="medlbl" style="fill:#2E7D5B;font-weight:600">cheap · strong</text>`;
  svg+=`<text x="${W-pad.r-6}" y="${pad.t+12}" text-anchor="end" class="medlbl" style="fill:#B23A48;font-weight:600">dear · weak</text>`;
  // y gridlines (4 even steps)
  for(let i=0;i<=4;i++){
    const gy=pad.t+i/4*(H-pad.t-pad.b);
    svg+=`<line x1="${pad.l}" y1="${gy}" x2="${W-pad.r}" y2="${gy}" class="gridln"/>`;
    const yv=yMax-i/4*(yMax-yMin);
    svg+=`<text x="${pad.l-10}" y="${gy+3}" text-anchor="end" class="axislbl">${ym.fmt(yv)}</text>`;
  }
  // x gridlines (log ladder or even linear steps)
  xTicks().forEach(xv=>{
    const gx=X(xv); if(gx<pad.l-1||gx>W-pad.r+1) return;
    svg+=`<line x1="${gx.toFixed(1)}" y1="${pad.t}" x2="${gx.toFixed(1)}" y2="${H-pad.b}" class="gridln"/>`;
    svg+=`<text x="${gx.toFixed(1)}" y="${H-pad.b+18}" text-anchor="middle" class="axislbl">${xm.fmt(xv)}</text>`;
  });
  // median lines
  svg+=`<line x1="${qx}" y1="${pad.t}" x2="${qx}" y2="${H-pad.b}" class="medln"/>`;
  svg+=`<line x1="${pad.l}" y1="${qy}" x2="${W-pad.r}" y2="${qy}" class="medln"/>`;
  svg+=`<text x="${qx+5}" y="${pad.t+11}" class="medlbl">median ${xm.fmt(xMed)}</text>`;
  svg+=`<text x="${W-pad.r}" y="${qy-5}" text-anchor="end" class="medlbl">median ${ym.fmt(yMed)}</text>`;
  // axis titles
  svg+=`<text x="${(pad.l+W-pad.r)/2}" y="${H-6}" text-anchor="middle" class="axislbl" style="font-size:11.5px">${xm.l} →  (cheaper is left${logX?" · log scale":""})</text>`;
  svg+=`<text x="14" y="${(pad.t+H-pad.b)/2}" text-anchor="middle" class="axislbl" style="font-size:11.5px" transform="rotate(-90 14 ${(pad.t+H-pad.b)/2})">${ym.l} →</text>`;
  // bubbles — size by mcap; draw largest first so small ones land on top and stay clickable
  const rmin=7,rmax=32, mc=DATA.map(d=>mcapUSD(d)), mcMin=Math.min(...mc), mcMax=Math.max(...mc);
  const rad=mc=>rmin+Math.sqrt((mc-mcMin)/(mcMax-mcMin||1))*(rmax-rmin);
  const spot=state.hl;
  const drawn=[...vis].map(d=>({d,x:X(d.m[state.xKey]),y:Y(d.m[state.yKey]),r:rad(mcapUSD(d))}))
    .sort((a,b)=>b.r-a.r);
  // label only when uncrowded (≤18 visible) or for the spotlighted bubble — avoids label soup at scale
  const labelAll = vis.length<=18;
  drawn.forEach(({d,x,y,r})=>{
    const col=colorOf(d);
    const dim = spot && d.tk!==spot;
    const fo = dim?0.04 : 0.16, so = dim?0.25:1, sw = d.tk===spot?3:2;
    svg+=`<circle class="bub" data-tk="${d.tk}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}"
       fill="${col}" fill-opacity="${fo}" stroke="${col}" stroke-opacity="${so}" stroke-width="${sw}" style="cursor:pointer"/>`;
    if((labelAll||d.tk===spot)&&!dim)
      svg+=`<text x="${x.toFixed(1)}" y="${(y+3.5).toFixed(1)}" text-anchor="middle" style="font-family:var(--mono);font-size:10px;font-weight:600;fill:${col};pointer-events:none">${d.tk}</text>`;
  });
  // size legend (bottom-right): two reference bubbles
  const lx=W-pad.r-96, ly=H-pad.b-46;
  const big=rad(mcMax), small=rad(median(mc));
  svg+=`<text x="${W-pad.r}" y="${ly-big-6}" text-anchor="end" class="medlbl">bubble = market cap</text>`;
  svg+=`<circle cx="${lx}" cy="${ly-big+big}" r="${big}" fill="none" stroke="var(--ink3)" stroke-width="1"/>`;
  svg+=`<circle cx="${lx}" cy="${ly-big+2*big-small}" r="${small}" fill="none" stroke="var(--ink3)" stroke-width="1"/>`;
  svg+=`<text x="${lx+big+6}" y="${ly-big+big+3}" class="medlbl">$${(mcMax).toFixed(0)}B</text>`;
  svg+=`<text x="${lx+big+6}" y="${ly-big+2*big-small+3}" class="medlbl">$${median(mc).toFixed(0)}B</text>`;
  scatter.innerHTML=svg;
  scatter.querySelectorAll(".bub").forEach(b=>{
    b.onmouseenter=()=>{const d=byTk[b.dataset.tk];
      state.hl=d.tk; renderScatter();
      scatterTip.innerHTML=`<b style="color:${colorOf(d)}">${d.tk} ${d.nm}</b> <span class="muted">(${LAYER_LABEL[d.layer]})</span> &nbsp; ${xm.l} ${xm.fmt(d.m[state.xKey])} · ${ym.l} ${ym.fmt(d.m[state.yKey])} · Mkt cap ${fmtMcap(d)} · Fwd P/E ${d.m.peFwd>=900?"n/m":d.m.peFwd+"x"} · ROIC ${d.m.roic}% · Net debt/EBITDA ${d.m.netDebtEbitda<0?"net cash":d.m.netDebtEbitda+"x"}`;};
    b.onmouseleave=()=>{ state.hl=null; renderScatter(); scatterTip.textContent=""; };
  });
}

/* ============================ HEATMAP ============================ */
const heat=document.getElementById("heat");
function lerp(a,b,t){return a+(b-a)*t;}
function gradeColor(t){ // t: 0(worst)..1(best)
  // worst -> warm/red wash, best -> green wash, mid -> paper
  let r,g,b;
  if(t<0.5){const k=t/0.5; r=lerp(244,250,k); g=lerp(225,249,k); b=lerp(223,246,k);}
  else{const k=(t-0.5)/0.5; r=lerp(250,214,k); g=lerp(249,238,k); b=lerp(246,224,k);}
  return `rgb(${r|0},${g|0},${b|0})`;
}
function renderHeat(){
  const vis=DATA.filter(d=>state.visible.has(d.tk));
  // default column order groups by chain layer (upstream→downstream), then composite within layer;
  // a ticker-sort overrides nothing here (it reorders ROWS, not columns)
  const cols=(vis.length?vis:DATA).slice().sort((a,b)=>
    (LAYER_ORDER[a.layer]-LAYER_ORDER[b.layer]) || (composite(b,state.lens)-composite(a,state.lens)));
  // header — thin layer-colored top border marks where each layer group begins
  let thead=`<tr><th class="metric" onclick="setSort(null)">Metric<span class="hint">columns grouped by layer · click a ticker to sort rows ↓</span></th>`;
  cols.forEach((d,i)=>{
    const cue=state.sortKey&&state.sortKey.tk===d.tk?`<span class="sortcue"> ${state.sortDir<0?"▼":"▲"}</span>`:"";
    const newGroup = i===0 || cols[i-1].layer!==d.layer;
    const lc=LAYER_COLOR[d.layer]||d.color;
    thead+=`<th data-tk="${d.tk}" title="${LAYER_LABEL[d.layer]}" style="box-shadow:inset 0 3px 0 ${newGroup?lc:"transparent"}">`+
      `<span class="tkdot" style="background:${colorOf(d)}"></span>${d.tk}${cue}</th>`;
  });
  thead+=`</tr>`;
  heat.querySelector("thead").innerHTML=thead;

  // rows, optionally sorted by selected ticker's value within each row order? sorting columns means reorder rows by that ticker's metric.
  let metrics=[...METRICS];
  // build body
  let body="";
  metrics.forEach(met=>{
    const vals=cols.map(d=>metricVal(d,met));
    let lo=Math.min(...vals), hi=Math.max(...vals);
    body+=`<tr><td class="metric">${met.label}<span class="hint">${met.hint}</span></td>`;
    cols.forEach(d=>{
      const v=metricVal(d,met);
      let t = hi===lo?0.5 : (v-lo)/(hi-lo);
      if(!met.hi) t=1-t;
      // clamp specials: intCov 999 -> best
      const disp=met.fmt(v);
      body+=`<td class="cell" style="background:${gradeColor(t)}">${disp}</td>`;
    });
    body+=`</tr>`;
  });
  heat.querySelector("tbody").innerHTML=body;

  heat.querySelectorAll("thead th[data-tk]").forEach(th=>{
    th.onclick=()=>{
      const tk=th.dataset.tk;
      if(state.sortKey&&state.sortKey.tk===tk) state.sortDir*=-1;
      else { state.sortKey={tk}; state.sortDir=-1; }
      sortHeatRows();
    };
  });
  if(state.sortKey) sortHeatRows();
}
function sortHeatRows(){
  // reorder visible tbody rows by the chosen ticker's normalized rank (best metrics top when desc)
  const tb=heat.querySelector("tbody");
  const rows=[...tb.children];
  const cols=DATA.filter(d=>state.visible.has(d.tk)); const colsArr=cols.length?cols:DATA;
  const idx=colsArr.findIndex(d=>d.tk===state.sortKey.tk);
  if(idx<0) return;
  // compute normalized score for the selected ticker per metric (higher=better after orientation)
  const scored=rows.map((row,i)=>{
    const met=METRICS[i];
    const vals=colsArr.map(d=>metricVal(d,met));
    let lo=Math.min(...vals),hi=Math.max(...vals);
    const v=metricVal(colsArr[idx],met);
    let t=hi===lo?0.5:(v-lo)/(hi-lo); if(!met.hi)t=1-t;
    return {row,t};
  });
  scored.sort((a,b)=>(b.t-a.t)*(state.sortDir<0?1:-1));
  scored.forEach(s=>tb.appendChild(s.row));
  // refresh header cue
  heat.querySelectorAll("thead th[data-tk]").forEach(th=>{
    const old=th.querySelector(".sortcue"); if(old) old.remove();
    if(th.dataset.tk===state.sortKey.tk){
      const s=document.createElement("span"); s.className="sortcue"; s.textContent=" "+(state.sortDir<0?"▼":"▲"); th.appendChild(s);
    }
  });
}
function setSort(x){ state.sortKey=null; renderHeat(); }
window.setSort=setSort;

/* ============================ REVERSE DCF ============================ */
const dcfSeg=document.getElementById("dcfSeg");
DATA.forEach(d=>{
  const b=document.createElement("button"); b.textContent=d.tk; b.dataset.tk=d.tk;
  b.onclick=()=>{ state.dcf=d.tk; renderDCF(); };
  dcfSeg.appendChild(b);
});
function dcfValue(d,g,m,r,tg){ // g,m,r,tg in % (m absolute %, others %); returns ¥/share
  const R0=d.d.revPS, nc=d.d.netCashPS, years=10;
  const gr=g/100, mar=m/100, dr=r/100, tgr=tg/100;
  let pv=0, rev=R0;
  for(let t=1;t<=years;t++){ rev*=(1+gr); const fcf=rev*mar; pv+=fcf/Math.pow(1+dr,t); }
  const fcfT=rev*mar; const tv=fcfT*(1+tgr)/(dr-tgr); pv+=tv/Math.pow(1+dr,years);
  return pv+nc;
}
function impliedGrowth(d,m,r,tg,price){ // solve g s.t. dcfValue==price
  let lo=-20, hi=80;
  for(let i=0;i<60;i++){ const mid=(lo+hi)/2; const v=dcfValue(d,mid,m,r,tg);
    if(v>price) hi=mid; else lo=mid; }
  return (lo+hi)/2;
}
function renderDCF(){
  dcfSeg.querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.tk===state.dcf));
  const d=byTk[state.dcf], v=state.dcfV[state.dcf];
  const slEl=document.getElementById("dcfSliders");
  const defs=[
    {k:"g",label:"Revenue growth (10y)",min:-10,max:45,step:0.5,unit:"%/yr"},
    {k:"m",label:"Terminal FCF margin",min:1,max:45,step:0.5,unit:"%"},
    {k:"r",label:"Discount rate (WACC)",min:5,max:15,step:0.25,unit:"%"},
    {k:"tg",label:"Terminal growth",min:0,max:5,step:0.25,unit:"%"}
  ];
  slEl.innerHTML="";
  defs.forEach(def=>{
    const wrap=document.createElement("div"); wrap.className="sld";
    wrap.innerHTML=`<label>${def.label}<span class="val">${v[def.k]}${def.unit}</span></label>
      <input type="range" min="${def.min}" max="${def.max}" step="${def.step}" value="${v[def.k]}">`;
    const inp=wrap.querySelector("input");
    inp.oninput=()=>{ v[def.k]=parseFloat(inp.value); wrap.querySelector(".val").textContent=v[def.k]+def.unit; renderDCFout(); };
    slEl.appendChild(wrap);
  });
  renderDCFout();
}
function renderDCFout(){
  const d=byTk[state.dcf], v=state.dcfV[state.dcf];
  const fv=dcfValue(d,v.g,v.m,v.r,v.tg);
  const upside=(fv/d.price-1)*100;
  const impl=impliedGrowth(d,v.m,v.r,v.tg,d.price);
  const ncTxt=d.d.netCashPS>=0?`+${fmtMoney(d.d.netCashPS,d)} net cash/sh`:`${fmtMoney(d.d.netCashPS,d)} net debt/sh`;
  const out=document.getElementById("dcfOut");
  out.innerHTML=`
    <div class="dcfrow"><span class="k">Current price</span><span class="v">${fmtMoney(d.price,d)}</span></div>
    <div class="dcfrow big"><span class="k">Intrinsic value / share</span>
      <span class="v" style="color:${upside>=0?'var(--good)':'var(--bad)'}">${fmtMoney(fv,d)}</span></div>
    <div class="dcfrow"><span class="k">Upside / (downside)</span>
      <span class="v ${upside>=0?'up':'down'}">${upside>=0?'+':''}${upside.toFixed(0)}%</span></div>
    <div class="impl">At today's price, the model implies ~<b>${impl.toFixed(1)}% revenue growth</b> for 10 years
      (holding margin ${v.m}%, WACC ${v.r}%, terminal ${v.tg}%). Your assumption is <b>${v.g}%</b> —
      ${v.g>impl?`above the implied bar, so the DCF says <span class="up">undervalued</span>.`:
        v.g<impl?`below the implied bar, so the DCF says <span class="down">overvalued</span>.`:`right at the implied bar — fairly valued.`}
      <br><span class="muted">Base inputs: rev/sh ${fmtMoney(d.d.revPS,d)}, ${ncTxt}, starting FCF margin ~${Math.round(d.d.fcfM*100)}%.</span></div>`;
}

/* ============================ VERDICT ============================ */
function renderVerdict(){
  const w=LENSES[state.lens].w;
  document.getElementById("weightExpl").innerHTML="Weights ("+LENSES[state.lens].label+"): "+
    AXES.map(a=>`<b>${a.label}</b> ${(w[a.k]*100)|0}%`).join(" · ");
  const vis=DATA.filter(d=>state.visible.has(d.tk));
  const ranked=[...vis].sort((a,b)=>composite(b,state.lens)-composite(a,state.lens));
  const max=Math.max(...DATA.map(d=>composite(d,state.lens)));
  const CAP=12; // collapse long lists
  const showAll = state.verdictExpanded || ranked.length<=CAP;
  const shown = showAll ? ranked : ranked.slice(0, CAP);
  const el=document.getElementById("verdict"); el.innerHTML="";
  shown.forEach((d,i)=>{
    const sc=composite(d,state.lens), col=colorOf(d);
    const row=document.createElement("div"); row.className="vbar";
    row.innerHTML=`
      <div class="lab"><span class="rk">${i+1}</span><span class="dot" style="background:${col}"></span>
        <span>${d.tk} ${d.nm.split(" ")[0]}</span></div>
      <div class="track"><div class="fill" style="width:${(sc/max*100).toFixed(1)}%;background:${col}"></div></div>
      <div class="sc" style="color:${col}">${sc.toFixed(1)}</div>
      <div class="pop"><span class="bp bull">▲ Bull — ${d.bull}</span><span class="bp bear">▼ Bear — ${d.bear}</span></div>`;
    // tap to reveal bull/bear on touch devices (hover handles desktop via CSS)
    row.addEventListener("click",()=>{
      const wasOpen=row.classList.contains("show");
      [...el.children].forEach(r=>r.classList.remove("show"));
      if(!wasOpen) row.classList.add("show");
    });
    el.appendChild(row);
  });
  const more=document.getElementById("verdictMore");
  if(ranked.length<=CAP){ more.hidden=true; }
  else { more.hidden=false; more.textContent = showAll ? `▴ Show top ${CAP} only` : `▾ Show all ${ranked.length} ranked names`;
    more.onclick=()=>{ state.verdictExpanded=!state.verdictExpanded; renderVerdict(); }; }
}

/* ============================ MARKET SHARE ============================ */
const shareEl=document.getElementById("shareView");
function renderShareView(){
  shareEl.innerHTML="";
  const vis=new Set([...state.visible]);
  presentLayers.forEach(l=>{
    const names=DATA.filter(d=>d.layer===l.k && vis.has(d.tk) && d.share);
    if(!names.length) return;
    // within a layer, sort by share desc (n/a, pct<0, sinks to the bottom)
    names.sort((a,b)=>(b.share.pct<0?-1:b.share.pct)-(a.share.pct<0?-1:a.share.pct));
    const grp=document.createElement("div"); grp.className="sharegrp";
    let rows=`<div class="gh"><span class="sw" style="background:${l.c}"></span>
      <span class="nm">${l.label}</span><span class="ct">${names.length}</span></div>`;
    names.forEach(d=>{
      const sh=d.share, na=!(sh.pct>=0), col=colorOf(d);
      const w=na?100:Math.max(2,Math.min(100,sh.pct));
      rows+=`<div class="srow" title="${(sh.market||"").replace(/"/g,'&quot;')}">
        <div class="lab"><span class="tk">${d.tk}</span><span class="nm">${d.nm}</span></div>
        <div class="strack"><div class="sfill${na?(CONFIG.meta.naText||"n/a"):""}" style="width:${w}%;background:${na?"":col}"></div></div>
        <div class="sright">${na?'<span class="pv" style="color:var(--ink3)">n/a</span>':
          `<span class="pv" style="color:${col}">~${sh.pct}%</span><span class="rk">${sh.rank||""}</span>`}
          <span class="conf ${sh.conf||"low"}" title="${sh.conf||"low"} confidence"></span></div>
        <div class="mkt">${na?"chip buyer — not a semiconductor market":"share of "+ (sh.market||"served market")}</div>
      </div>`;
    });
    grp.innerHTML=rows;
    shareEl.appendChild(grp);
  });
  if(!shareEl.children.length) shareEl.innerHTML=`<div class="chipsempty muted" style="padding:14px">No market-share data for the current selection.</div>`;
}

/* ============================ RENDER ALL ============================ */
function renderAll(){
  syncChips(); renderLayerMap(); renderCards(); renderRadar(); renderScatter(); renderHeat(); renderDCF(); renderVerdict(); renderShareView();
}
renderAll();

/* ============================ HERO & MOTION ============================ */
const RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* hero flow lines — gentle left→right currents echoing upstream→downstream */
(function heroFlow(){
  const el=document.getElementById("heroflow"); if(!el) return;
  const cols=["#A8431F","#C9742B","#B8893B","#2E86AB","#1E8E6B"];
  let s="";
  const rows=7;
  for(let i=0;i<rows;i++){
    const y=40+i*62 + (i%2?10:0);
    const c=cols[i%cols.length];
    // a smooth wave across the width
    const amp=16+ (i%3)*10;
    let d=`M -20 ${y}`;
    for(let x=0;x<=1240;x+=120){ const yy=y+(Math.sin(x/120+i)*amp); d+=` Q ${x+60} ${yy+amp} ${x+120} ${y}`; }
    s+=`<path d="${d}" stroke="${c}" style="animation-delay:${(i*0.7).toFixed(2)}s;animation-duration:${(8+i).toFixed(0)}s"/>`;
  }
  el.innerHTML=s;
})();

/* count-up hero stats */
function countUp(elm){
  const target=+elm.dataset.count, sfx=elm.dataset.suffix||"";
  if(RM){ elm.textContent=target+sfx; return; }
  const dur=1100, t0=performance.now();
  function step(now){
    const p=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-p,3);
    elm.textContent=Math.round(target*e)+sfx;
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* scroll reveals + trigger count-ups when hero stats enter */
(function motion(){
  // tag each analysis section for reveal
  document.querySelectorAll("section").forEach((s,i)=>{ s.classList.add("reveal"); s.style.setProperty("--d","0s"); });
  const els=document.querySelectorAll(".reveal");
  if(RM || !("IntersectionObserver" in window)){ els.forEach(e=>e.classList.add("in")); document.querySelectorAll(".sv[data-count]").forEach(countUp); return; }
  let counted=false;
  const io=new IntersectionObserver((ents)=>{
    ents.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add("in");
        if(!counted && en.target.querySelector && en.target.querySelector(".sv[data-count]")){
          counted=true; en.target.querySelectorAll(".sv[data-count]").forEach(countUp);
        }
        io.unobserve(en.target);
      }
    });
  },{threshold:.12, rootMargin:"0px 0px -8% 0px"});
  els.forEach(e=>io.observe(e));
  // hero stats may already be in view on load → observe the statrow explicitly
  const sr=document.querySelector(".statrow");
  if(sr){ const io2=new IntersectionObserver((e)=>{ if(e[0].isIntersecting && !counted){ counted=true; sr.querySelectorAll(".sv[data-count]").forEach(countUp); io2.disconnect(); } },{threshold:.3}); io2.observe(sr); }
})();
