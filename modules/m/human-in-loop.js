(function(){
/* shared SVG helpers, scoped to this module */
const ID='human-in-loop', P='.m-'+ID;
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
const IT=[['s','Read','feedback'],['s','Summarise','themes'],['s','Draft the','release note'],['g','before sending'],['r','Email','5,000 users'],['s','Update','the tracker'],['g','before deleting'],['r','Delete','old drafts'],['g','before spending'],['r','Boost post','with ads'],['d','Done','']];
const Y=170, xs=IT.map((_,k)=>40+k*104);
const tl=IT.map(([t,a,b],k)=>{const x=xs[k];
  if(t==='g') return `<g class="hl-gate a-pop" style="--i:${k}"><rect x="${x-7}" y="${Y-56}" width="14" height="112" rx="7" fill="var(--green)"/>${TC(x,Y-96,'You','bt g')}${TC(x,Y-74,a,'bs g')}</g>`;
  const c=t==='r'?'hl-r':t==='d'?'hl-d':'hl-s';
  return `<g class="a-fade" style="--i:${k}"><circle cx="${x}" cy="${Y}" r="${t==='s'?9:13}" class="${c}"/>${TC(x,Y+44,a,t==='r'?'bs w':'bs l')}${TC(x,Y+64,b,t==='r'?'bs w':'bs')}</g>`;}).join('');
const s0=`<svg class="dg" viewBox="0 0 1120 260" role="img" aria-label="An agent run timeline. Safe steps run alone. Green human checkpoints sit before sending, before deleting and before spending.">
<line x1="${xs[0]}" y1="${Y}" x2="${xs[10]}" y2="${Y}" stroke="var(--line)" stroke-width="3"/>
<line x1="${xs[0]}" y1="${Y}" x2="${xs[10]}" y2="${Y}" stroke="var(--green)" stroke-opacity=".35" stroke-width="3" class="hl-prog"/>
${tl}<circle cx="${xs[10]}" cy="${Y}" r="7" fill="var(--fg)" class="hl-dot"/></svg>`;
const MX=[50,10,640,320]; // x,y,w,h
const q=(x,y,t,c)=>T(x,y,t,c);
const ex=[[.08,.76,'Summarise notes',''],[.06,.3,'Rewrite the roadmap doc',''],[.56,.76,'Post in team Slack',''],[.56,.32,'Email all customers','w'],[.56,.18,'Spend ad budget','w']];
const s1=`<svg class="dg" viewBox="0 0 700 372" role="img" aria-label="2 by 2 matrix: how easy it is to undo, against impact. Low impact and easy to undo: let it run. High impact and hard to undo: approve before.">
<rect x="${MX[0]}" y="${MX[1]}" width="${MX[2]/2}" height="${MX[3]/2}" class="bx"/><rect x="${MX[0]+MX[2]/2}" y="${MX[1]}" width="${MX[2]/2}" height="${MX[3]/2}" class="bx w"/>
<rect x="${MX[0]}" y="${MX[1]+MX[3]/2}" width="${MX[2]/2}" height="${MX[3]/2}" class="bx g"/><rect x="${MX[0]+MX[2]/2}" y="${MX[1]+MX[3]/2}" width="${MX[2]/2}" height="${MX[3]/2}" class="bx"/>
${q(66,40,'Review after','bt')}${q(386,40,'Approve before','bt w')}${q(66,200,'Let it run','bt g')}${q(386,200,'Confirm before','bt')}
${ex.map(([fx,fy,t,c],k)=>{const x=MX[0]+fx*MX[2], y=MX[1]+fy*MX[3];return `<g class="a-pop" style="--i:${k}"><circle cx="${x}" cy="${y}" r="8" fill="${c?'var(--warn)':'var(--fg)'}"/></g>${T(x+14,y+5,t,'bs l big')}`;}).join('')}
${TC(MX[0]+MX[2]/2,360,'Easy to undo  →  hard to undo','bs big')}
<text x="24" y="${MX[1]+MX[3]/2}" class="bs big" text-anchor="middle" transform="rotate(-90 24 ${MX[1]+MX[3]/2})">Low impact  →  high impact</text></svg>`;
MOD({
  id:ID, title:'Human checkpoints in an agent run', cluster:'agents', fits:[6,7], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .hl-s{fill:var(--subtle)} ${P} .hl-r{fill:var(--bg);stroke:var(--warn);stroke-width:3} ${P} .hl-d{fill:var(--green)}
  ${P} .hl-dot{transition:transform .5s cubic-bezier(.3,.9,.4,1)}
  ${P} .hl-gate.on rect{filter:drop-shadow(0 0 10px var(--green))}
  ${P} .hl-m{display:grid;grid-template-columns:1.5fr 1fr;gap:3vw;align-items:center}
  ${P} .hl-m svg{max-height:56vh} ${P} .bs.big{font-size:16px}`,
  slides:[
  {sec:'AGENT SAFETY', cls:'viz', title:`WHERE TO PUT <span class="g">THE HUMAN</span>`,
   body:`<div class="note-s" style="margin-bottom:6px;font-family:var(--m)">Agent run: launch week release notes</div>${s0}
     <div class="legend"><span><i></i>safe step, runs alone</span><span><i style="background:none;border:2px solid var(--warn)"></i>hard to undo</span><span><i class="g" style="border-radius:3px"></i>human checkpoint</span></div>
     <div class="lead a-fade" style="--i:12;margin-top:20px;max-width:none">Do not approve every step. <span class="g">Gate only the steps you cannot take back.</span></div>`,
   init(el){
     const dot=el.querySelector('.hl-dot'), gates=[...el.querySelectorAll('.hl-gate')], end=xs[10];
     let tms=[]; const at=(k)=>dot.style.transform=`translateX(${xs[k]-end}px)`;
     VIZ.onShow(el,()=>{ tms.forEach(clearTimeout); tms=[]; gates.forEach(g=>g.classList.remove('on'));
       if(VIZ.reduced){ dot.style.transform=''; return; }
       dot.style.transition='none'; at(0); dot.getBoundingClientRect(); dot.style.transition='';
       let t=600; IT.forEach((it,k)=>{ tms.push(setTimeout(()=>{ at(k); if(it[0]==='g') gates[[3,6,8].indexOf(k)].classList.add('on'); },t)); t+=it[0]==='g'?1300:550; });
     });
   }},
  {sec:'AGENT SAFETY', cls:'viz', title:`IMPACT <span class="g">VS UNDO</span>`,
   body:`<div class="hl-m"><div>${s1}</div><div>
     <div class="lead">Two questions for every step: <span class="g">how bad if wrong?</span> And <span class="g">can I undo it?</span></div>
     <div class="stat-cap a-fade" style="--i:6;margin-top:18px;max-width:440px">Easy to undo: let it run, or review after. <b>Hard to undo: a human says yes first.</b></div></div></div>`}
  ]
});
})();
