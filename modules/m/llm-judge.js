(function(){
/* shared SVG helpers, scoped to this module */
const ID='llm-judge', P='.m-'+ID;
const T=(x,y,t,c,a)=>`<text x="${x}" y="${y}" class="${c||'bs'}" ${a||''}>${t}</text>`;
const TC=(x,y,t,c)=>T(x,y,t,c,'text-anchor="middle"');
const R=(x,y,w,h,c,a)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx ${c||''}" ${a||''}/>`;
let SV=0; /* one marker set per svg: a hidden slide must not own the markers */
const AR=(d,c,i,len)=>`<path d="${d}" class="ar ${c||''} a-draw" style="--i:${i||0};--len:${len||600}" marker-end="url(#${ID}-${SV}-${c||'n'})"/>`;
const DEFS=()=>(SV++,`<defs>${['n','g','w'].map(c=>`<marker id="${ID}-${SV}-${c}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="mk ${c}"/></marker>`).join('')}</defs>`);
const BASE=`${P} svg.dg{width:100%;height:auto;display:block;overflow:visible}
${P} .bx{fill:var(--surface);stroke:var(--line);stroke-width:1.5}
${P} .bx.g{stroke:var(--green);fill:color-mix(in srgb,var(--green) 8%,transparent)} ${P} .bx.w{stroke:var(--warn);fill:color-mix(in srgb,var(--warn) 8%,transparent)} ${P} .bx.d{stroke-dasharray:5 5}
${P} .ar{fill:none;stroke:var(--subtle);stroke-width:2} ${P} .ar.g{stroke:var(--green)} ${P} .ar.w{stroke:var(--warn)}
${P} .mk{fill:var(--subtle)} ${P} .mk.g{fill:var(--green)} ${P} .mk.w{fill:var(--warn)}
${P} .bt{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:18px;fill:var(--fg)}
${P} .bt.g{fill:var(--green)} ${P} .bt.w{fill:var(--warn)} ${P} .bt.m{fill:var(--muted)}
${P} .bs{font-family:var(--b);font-size:14px;fill:var(--muted)} ${P} .bs.l{fill:var(--fg-2)} ${P} .bs.g{fill:var(--green)} ${P} .bs.w{fill:var(--warn)}
${P} .bm{font-family:var(--m);font-size:14px;fill:var(--fg-2)}
${P} .a-pop{transform-box:fill-box;transform-origin:center}
${P} .lead{font-size:clamp(18px,1.7vw,24px)}`;
const chk=(y,t,ok,i)=>`<g class="a-fade" style="--i:${i}"><rect x="238" y="${y-13}" width="16" height="16" rx="3" fill="none" stroke="${ok?'var(--green)':'var(--warn)'}" stroke-width="2"/>
 <path d="${ok?`M241 ${y-5} l4 4 l7 -8`:`M242 ${y-9} l8 8 M250 ${y-9} l-8 8`}" stroke="${ok?'var(--green)':'var(--warn)'}" stroke-width="2.4" fill="none"/>${T(264,y,t,'bs l')}</g>`;
const s0=`<svg class="dg" viewBox="0 0 1120 330" role="img" aria-label="Flow: output goes to a judge prompt with a checklist, gets a score and a reason, then a gate ships it or sends it back to retry.">${DEFS()}
<g class="a-fade" style="--i:0">${T(0,40,'1. Output','bt m sm')}${R(0,60,170,170)}${T(16,92,'Release note','bt sm')}
 ${[0,1,2,3,4].map(k=>`<rect x="16" y="${110+k*18}" width="${[136,120,138,100,124][k]}" height="7" rx="3.5" fill="var(--c-2a2a2e)"/>`).join('')}${T(16,212,'draft v1')}</g>
${AR('M172 145 L216 145','',1,50)}
<g class="a-fade" style="--i:1">${T(220,40,'2. Judge prompt','bt m sm')}${R(220,60,260,170,'g')}${T(238,92,'Checklist','bt g sm')}</g>
${chk(128,'Correct launch date',false,2)}${chk(160,'Names the feature',true,3)}${chk(192,'Under 120 words',true,4)}
${AR('M482 145 L526 145','',5,50)}
<g class="a-fade" style="--i:5">${T(530,40,'3. Score + reason','bt m sm')}${R(530,60,210,170)}<text x="548" y="124" class="jd-score">2/3</text>${T(548,160,'Reason:','bs l')}${T(548,182,'"Date says May.')}${T(548,202,'The plan says June."')}</g>
${AR('M742 145 L786 145','',6,50)}
<g class="a-pop" style="--i:6"><path d="M840 95 L890 145 L840 195 L790 145 Z" class="bx g"/>${TC(840,141,'3/3?','bt g sm')}${TC(840,161,'gate','bs')}</g>
${AR('M872 115 L930 80','g',7,80)}<g class="a-fade" style="--i:7">${R(934,50,186,64,'g')}${TC(1027,88,'Ship','bt g')}${T(892,78,'pass','bs g')}</g>
${AR('M840 197 L840 290 L85 290 L85 236','w',8,1000)}<g class="a-fade" style="--i:8">${TC(462,316,'fail: retry with the reason as feedback, max 3 times','bs w')}</g>
</svg>`;
const H=[1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1], flip=new Set([4,11,17]);
const cols=H.map((h,j)=>{const x=150+j*46, jd=flip.has(j)?1-h:h, bad=flip.has(j);
  const dot=(y,v,i)=>`<circle cx="${x}" cy="${y}" r="13" class="${v?'jd-p':'jd-f'} a-pop" style="--i:${i}"/>`;
  return `${bad?`<rect x="${x-21}" y="22" width="42" height="132" rx="21" fill="none" stroke="var(--warn)" stroke-width="2" class="a-fade" style="--i:${22}"/>`:''}${dot(56,h,j*.5)}${dot(120,jd,j*.5+10)}`;}).join('');
const s1=`<svg class="dg" viewBox="0 0 1120 190" role="img" aria-label="20 sample outputs. Top row: human pass or fail. Bottom row: judge pass or fail. 3 disagreements circled in orange.">
${T(0,61,'Human','bt')}${T(0,125,'Judge','bt')}${cols}${T(150,184,'20 sample outputs, illustrative','bs')}</svg>`;
MOD({
  id:ID, title:'AI as a judge', cluster:'agents', fits:[6], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .bt.sm{font-size:16px}
  ${P} .jd-score{font-family:var(--h);font-weight:900;font-size:52px;fill:var(--warn)}
  ${P} .jd-p{fill:var(--green)} ${P} .jd-f{fill:none;stroke:var(--fg);stroke-width:2}
  ${P} .jd-row{display:grid;grid-template-columns:auto 1fr;gap:4vw;align-items:center;margin-top:26px}
  ${P} .jd-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  ${P} .jd-steps .tile .k{color:var(--green)}`,
  slides:[
  {sec:'EVALS', cls:'viz', title:`AN AI THAT <span class="g">GRADES THE AI</span>`,
   body:`${s0}<div class="lead a-fade" style="--i:10;margin-top:12px;max-width:none">A judge is <span class="g">a second prompt with a checklist.</span> It turns "looks fine" into a score and a reason.</div>`},
  {sec:'EVALS', cls:'viz', title:`CHECK <span class="g">THE JUDGE</span>`,
   body:`${s1}<div class="legend"><span><i class="g"></i>pass</span><span><i style="background:none;border:2px solid var(--fg)"></i>fail</span><span><i class="w"></i>disagreement</span></div>
   <div class="jd-row"><div><div class="stat a-pop" style="--i:12;font-size:clamp(56px,6.5vw,88px)">17/20</div><div class="stat-cap">judge agrees with you. <b>Fix the checklist for the 3 misses.</b></div></div>
   <div class="jd-steps"><div class="tile a-fade" style="--i:13"><div class="k">1. Label</div><p>Grade 20 to 50 real outputs yourself.</p></div>
   <div class="tile a-fade" style="--i:14"><div class="k">2. Compare</div><p>Run the judge on the same set.</p></div>
   <div class="tile a-fade" style="--i:15"><div class="k">3. Tune</div><p>Fix the checklist where you disagree. Repeat.</p></div></div></div>`}
  ]
});
})();
