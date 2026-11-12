(function(){
/* shared SVG helpers, scoped to this module */
const ID='rag-pipeline', P='.m-'+ID;
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
const hot=new Set([3,10,17]);
const grid=[...Array(18)].map((_,k)=>{const x=288+(k%6)*42, y=78+Math.floor(k/6)*24, h=hot.has(k);
  return `<rect x="${x}" y="${y}" width="36" height="14" rx="3" fill="${h?'var(--green)':'var(--c-2a2a2e)'}" ${h?`class="a-pop" style="--i:${4+[...hot].indexOf(k)}"`:''}/>`;}).join('');
const pass=[0,1,2].map(k=>`<g class="a-fade" style="--i:${7+k}"><rect x="616" y="${66+k*30}" width="168" height="20" rx="4" fill="color-mix(in srgb,var(--green) 18%,transparent)" stroke="var(--green)"/>${T(624,81+k*30,'['+(k+1)+'] interview_'+['04','11','17'][k],'bm sm')}</g>`).join('');
const s0=`<svg class="dg" viewBox="0 0 1120 340" role="img" aria-label="Top lane: question, search your docs, top passages, answer with citations. Bottom lane: question straight to model memory, answer with no source.">${DEFS()}
<g class="a-fade" style="--i:0">${T(0,16,'With RAG: look it up, then answer','bt g sm')}</g>
<g class="a-fade" style="--i:1">${R(0,40,220,130)}${T(18,72,'Question','bt sm')}${T(18,100,'What did users say','bs l')}${T(18,120,'about onboarding?','bs l')}</g>
${AR('M222 105 L266 105','g',2,50)}
<g class="a-fade" style="--i:2">${R(270,40,290,130)}${T(288,64,'Search your docs','bt sm')}${grid}${T(288,164,'chunks, ranked by meaning')}</g>
${AR('M562 105 L596 105','g',6,40)}
<g class="a-fade" style="--i:6">${R(600,40,200,130)}${T(616,60,'Top passages','bt sm')}</g>${pass}
${AR('M802 105 L846 105','g',9,50)}
<g class="a-pop" style="--i:10">${R(850,40,270,130,'g')}${T(868,72,'Answer + sources','bt g sm')}${T(868,100,'People get lost at step 3','bs l')}${T(868,120,'[1][2]. Setup feels long [3].','bs l')}${T(868,152,'You can click and check.','bs g')}</g>
<line x1="0" y1="206" x2="1120" y2="206" stroke="var(--line)" stroke-dasharray="4 6"/>
<g class="a-fade" style="--i:11">${T(0,240,'From memory: answer straight away','bt m sm')}
${R(0,262,220,70)}${T(18,302,'Same question','bs l')}
${R(270,262,290,70)}${T(288,292,'Model memory only','bt sm')}${T(288,316,'never saw your interviews')}
${R(850,262,270,70,'w')}${T(868,292,'Confident answer','bt w sm')}${T(868,316,'No source. May be made up.','bs w')}</g>
${AR('M222 297 L266 297','',12,50)}${AR('M562 297 L846 297','w',12,290)}</svg>`;
let sd=11; const rnd=()=>(sd=(sd*16807)%2147483647)/2147483647;
const CL=[['onboarding',210,150],['pricing',500,110],['bugs',430,300]];
const pts=CL.map(([n,cx,cy])=>[...Array(11)].map(()=>[cx+(rnd()-.5)*150, cy+(rnd()-.5)*110]));
const Q=[250,178];
const near=pts[0].map(p=>[p,Math.hypot(p[0]-Q[0],p[1]-Q[1])]).sort((a,b)=>a[1]-b[1]).slice(0,3).map(a=>a[0]);
const s1=`<svg class="dg" viewBox="0 0 640 380" role="img" aria-label="A map of document chunks. Similar meaning sits close together in three clusters. The question lands in the onboarding cluster and picks its 3 nearest chunks.">
${CL.map(([n,cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="98" fill="none" stroke="var(--line)" stroke-dasharray="4 6"/>${TC(cx,cy-104,n,'bt m sm')}`).join('')}
${pts.flat().map((p,k)=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="6" fill="var(--subtle)" class="a-pop" style="--i:${(k%11)*.4}"/>`).join('')}
${near.map((p,k)=>`<line x1="${Q[0]}" y1="${Q[1]}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="var(--green)" stroke-width="2" class="a-fade" style="--i:${8+k}"/><circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="8" fill="var(--green)" class="a-pop" style="--i:${8+k}"/>`).join('')}
<g class="a-pop" style="--i:7"><path d="M${Q[0]} ${Q[1]-14} L${Q[0]+4} ${Q[1]-4} L${Q[0]+14} ${Q[1]} L${Q[0]+4} ${Q[1]+4} L${Q[0]} ${Q[1]+14} L${Q[0]-4} ${Q[1]+4} L${Q[0]-14} ${Q[1]} L${Q[0]-4} ${Q[1]-4}Z" fill="var(--fg)"/></g>
${T(Q[0]-10,Q[1]+36,'your question','bs l')}</svg>`;
MOD({
  id:ID, title:'RAG: look it up, then answer', cluster:'agents', fits:[4,6], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .bt.sm{font-size:16px} ${P} .bm.sm{font-size:13px;fill:var(--fg-2)}
  ${P} .rg{display:grid;grid-template-columns:1.1fr 1fr;gap:3.5vw;align-items:center}
  ${P} .rg svg{max-height:56vh}
  ${P} .rg ol{list-style:none;counter-reset:s;display:flex;flex-direction:column;gap:12px}
  ${P} .rg li{counter-increment:s;display:grid;grid-template-columns:34px 1fr;gap:12px;font-size:18px;line-height:1.35;align-items:baseline}
  ${P} .rg li:before{content:counter(s);font-family:var(--m);color:var(--green);font-size:15px}`,
  slides:[
  {sec:'AI AGENTS', cls:'viz', title:`RAG: LOOK IT UP, <span class="g">THEN ANSWER</span>`,
   body:`${s0}<div class="lead a-fade" style="--i:13;margin-top:12px;max-width:none">RAG = retrieval-augmented generation. <span class="g">Search your docs first, then answer with sources.</span></div>`},
  {sec:'AI AGENTS', cls:'viz', title:`SEARCH BY <span class="g">MEANING</span>`,
   body:`<div class="rg"><div>${s1}</div><ol>
     <li class="a-fade" style="--i:1"><span>Cut your docs into small chunks.</span></li>
     <li class="a-fade" style="--i:2"><span>Turn each chunk into a list of numbers: an <b>embedding</b>.</span></li>
     <li class="a-fade" style="--i:3"><span>Similar meaning lands <span class="g">close together</span>, even with different words.</span></li>
     <li class="a-fade" style="--i:4"><span>Take the chunks nearest to the question. Give them to the model.</span></li></ol></div>
     <div class="note-s" style="margin-top:10px">Simplified 2D picture. Illustrative.</div>`}
  ]
});
})();
