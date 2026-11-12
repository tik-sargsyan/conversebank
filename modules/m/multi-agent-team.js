(function(){
/* shared SVG helpers, scoped to this module */
const ID='multi-agent-team', P='.m-'+ID;
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
const node=(x,y,w,h,k,s,c,i)=>`<g class="a-pop" style="--i:${i}">${R(x,y,w,h,c)}${TC(x+w/2,y+h/2-3,k,'bt'+(c==='g'?' g':''))}${TC(x+w/2,y+h/2+18,s)}</g>`;
const lab=(x,y,t,c,i)=>`<g class="a-fade" style="--i:${i}">${TC(x,y,t,c||'bs')}</g>`;
const s0=`<svg class="dg" viewBox="0 0 1120 372" role="img" aria-label="Org chart: you give a goal to a lead agent, which hands work to a researcher, a writer and a reviewer.">${DEFS()}
<g class="a-pop" style="--i:0">${R(470,0,180,46)}${TC(560,30,'You','bt')}</g>
${node(400,96,320,70,'Lead agent','plans, splits the work, merges','g',1)}
${node(30,236,270,72,'Researcher','finds 10 competitor facts','',2)}
${node(425,236,270,72,'Writer','drafts the 2-page brief','',3)}
${node(820,236,270,72,'Reviewer','judges it against a rubric','',4)}
${AR('M535 48 L535 92','',2,50)}${AR('M585 94 L585 50','g',9,50)}
${lab(470,76,'goal','bs',2)}${lab(650,76,'brief + sources','bs g',9)}
${AR('M440 168 L210 232','',3,260)}${lab(270,190,'1. research','bs',3)}
${AR('M302 272 L421 272','',4,130)}${lab(362,262,'notes','bs',4)}
${AR('M697 272 L816 272','',5,130)}${lab(757,262,'draft','bs',5)}
${AR('M955 310 L955 350 L560 350 L560 312','',6,600)}${lab(757,342,'fix 2 gaps, then resend','bs l',6)}
${AR('M955 234 L955 131 L724 131','g',8,360)}${lab(1010,190,'pass','bs g',8)}</svg>`;
const mini1=`<svg viewBox="0 0 220 70" class="mt-mini"><circle cx="110" cy="35" r="20" fill="var(--green)"/></svg>`;
const mini2=`<svg viewBox="0 0 220 70" class="mt-mini"><line x1="110" y1="14" x2="40" y2="56" stroke="var(--subtle)" stroke-width="2"/><line x1="110" y1="14" x2="110" y2="56" stroke="var(--subtle)" stroke-width="2"/><line x1="110" y1="14" x2="180" y2="56" stroke="var(--subtle)" stroke-width="2"/><circle cx="110" cy="14" r="12" fill="var(--green)"/><circle cx="40" cy="56" r="10" fill="var(--fg)"/><circle cx="110" cy="56" r="10" fill="var(--fg)"/><circle cx="180" cy="56" r="10" fill="var(--fg)"/></svg>`;
const li=a=>a.map(t=>`<li>${t}</li>`).join('');
MOD({
  id:ID, title:'A team of agents', cluster:'agents', fits:[6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .mt-cards{display:grid;grid-template-columns:1fr 1fr;gap:22px}
  ${P} .mt-card{border:1px solid var(--line);border-radius:12px;padding:20px 24px;background:var(--surface)}
  ${P} .mt-card.on{border-color:var(--green)}
  ${P} .mt-mini{width:100%;height:70px;display:block;margin-bottom:10px}
  ${P} .mt-card h3{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:22px;margin-bottom:10px}
  ${P} .mt-card.on h3{color:var(--green)}
  ${P} .mt-card ul{list-style:none;display:flex;flex-direction:column;gap:9px}
  ${P} .mt-card li{font-size:17px;line-height:1.35;padding-left:22px;position:relative;color:var(--fg-2)}
  ${P} .mt-card li:before{content:'';position:absolute;left:0;top:8px;width:9px;height:9px;border-radius:50%;background:var(--muted)}
  ${P} .mt-card.on li:before{background:var(--green)}`,
  slides:[
  {sec:'AI AGENTS', cls:'viz', title:`A <span class="g">TEAM</span> OF AGENTS`,
   body:`${s0}<div class="lead a-fade" style="--i:10;margin-top:14px;max-width:none">Each agent has <span class="g">one job and a clean slate.</span> The lead agent is the PM.</div>`},
  {sec:'AI AGENTS', cls:'viz', title:`ONE AGENT <span class="g">OR A TEAM?</span>`,
   body:`<div class="mt-cards"><div class="mt-card on a-fade" style="--i:0">${mini1}<h3>One agent is enough</h3><ul>${li(['Steps run one after another.','The work fits in one agent\'s memory.','You can check the result in minutes.'])}</ul></div>
     <div class="mt-card a-fade" style="--i:1">${mini2}<h3>Use a team when</h3><ul>${li(['Parts can run in parallel, like 5 market scans.','You want an independent reviewer.','The work is too big for one agent.'])}</ul></div></div>
     <div class="lead a-fade" style="--i:3;margin-top:22px;max-width:none">Start with one. <span class="g">Add agents only when one is not enough.</span></div>
     <div class="note-s a-fade" style="--i:4;margin-top:6px">A team costs more: more tokens, more handoffs, more places to fail.</div>`}
  ]
});
})();
