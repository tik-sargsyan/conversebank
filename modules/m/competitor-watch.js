(function(){
/* shared SVG helpers, scoped to this module (same pattern as multi-agent-team) */
const ID='competitor-watch', P='.m-'+ID;
const T=(x,y,t,c,a)=>`<text x="${x}" y="${y}" class="${c||'bs'}" ${a||''}>${t}</text>`;
const TC=(x,y,t,c)=>T(x,y,t,c,'text-anchor="middle"');
const R=(x,y,w,h,c,a)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx ${c||''}" ${a||''}/>`;
let SV=0; /* one marker set per svg */
const AR=(d,c,i,len)=>`<path d="${d}" class="ar ${c||''} a-draw" style="--i:${i||0};--len:${len||600}" marker-end="url(#${ID}-${SV}-${c||'n'})"/>`;
const DEFS=()=>(SV++,`<defs>${['n','g','w'].map(c=>`<marker id="${ID}-${SV}-${c}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="mk ${c}"/></marker>`).join('')}</defs>`);
const BASE=`${P} svg.dg{width:100%;height:auto;display:block;overflow:visible}
${P} .bx{fill:var(--surface);stroke:var(--line);stroke-width:1.5}
${P} .bx.g{stroke:var(--green);fill:color-mix(in srgb,var(--green) 8%,transparent)} ${P} .bx.w{stroke:var(--warn);fill:color-mix(in srgb,var(--warn) 8%,transparent)}
${P} .ar{fill:none;stroke:var(--subtle);stroke-width:2} ${P} .ar.g{stroke:var(--green)} ${P} .ar.w{stroke:var(--warn)}
${P} .mk{fill:var(--subtle)} ${P} .mk.g{fill:var(--green)} ${P} .mk.w{fill:var(--warn)}
${P} .bt{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:18px;fill:var(--fg)}
${P} .bt.g{fill:var(--green)}
${P} .bs{font-family:var(--b);font-size:14px;fill:var(--muted)} ${P} .bs.g{fill:var(--green)} ${P} .bs.w{fill:var(--warn)}
${P} .a-pop{transform-box:fill-box;transform-origin:center}
${P} .lead{font-size:clamp(18px,1.7vw,24px)}`;
const node=(x,y,w,h,k,s,c,i)=>`<g class="a-pop" style="--i:${i}">${R(x,y,w,h,c)}${TC(x+w/2,y+h/2-3,k,'bt'+(c==='g'?' g':''))}${TC(x+w/2,y+h/2+18,s)}</g>`;
const lab=(x,y,t,c,i)=>`<g class="a-fade" style="--i:${i}">${TC(x,y,t,c||'bs')}</g>`;
const s0=`<svg class="dg" viewBox="0 0 1120 408" role="img" aria-label="Agent team: every Friday a watch skill reads the competitor list, runs three scouts in parallel, sends their claims to a judge, and writes a digest of passed claims only.">${DEFS()}
${node(10,0,240,72,'Every Friday','10:00, on your Mac','',0)}
${node(400,0,320,72,'Watch skill','runs the team, writes the digest','g',1)}
${node(870,0,240,72,'competitors.md','3 names: who to watch','',0)}
${AR('M252 36 L396 36','',2,150)}${lab(324,26,'starts','bs',2)}
${AR('M868 36 L724 36','',2,150)}${lab(796,26,'reads','bs',2)}
${AR('M470 74 L165 136','',3,320)}${AR('M560 74 L560 136','',3,70)}${AR('M650 74 L955 136','',3,320)}
${lab(625,110,'in parallel','bs',3)}
${node(30,140,270,72,'Scout: Productboard','pricing + releases, web only','',4)}
${node(425,140,270,72,'Scout: Canny','pricing + releases, web only','',4)}
${node(820,140,270,72,'Scout: Aha!','pricing + releases, web only','',4)}
${AR('M165 214 L165 316 L406 316','',5,350)}${AR('M560 214 L560 276','',5,70)}${AR('M955 214 L955 244 L660 244 L660 276','',5,380)}
${node(410,280,300,72,'Judge','5 gates, opens every link','',6)}
${AR('M714 316 L816 316','g',7,110)}${lab(765,306,'pass','bs g',7)}
${node(820,280,270,72,'Digest','only claims that passed','g',8)}
${AR('M560 354 L560 380','w',7,30)}${lab(560,400,'fail: dropped','bs w',7)}</svg>`;
MOD({
  id:ID, title:'The weekly competitor watch', cluster:'agents', fits:[6], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:BASE,
  slides:[
  {sec:'AI AGENTS', cls:'viz', title:`THE WEEKLY <span class="g">COMPETITOR WATCH</span>`,
   body:`${s0}<div class="lead a-fade" style="--i:9;margin-top:14px;max-width:none">Scouts can only read the web. <span class="g">Only claims the judge passes reach you.</span></div>
     <div class="src a-fade" style="--i:10"><b>First run, 12 Nov 2026:</b> 21 claims found, 17 passed the judge.</div>`}
  ]
});
})();
