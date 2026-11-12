(function(){
/* shared SVG helpers, scoped to this module */
const ID='blast-radius', P='.m-'+ID;
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
const LV=[['Read only','Read docs, dashboards, the inbox.','A wrong summary. Nothing changes.','Nothing to undo'],
 ['Write in one folder','Edit files in /launch-notes.','Messed-up files in one folder.','Yes, from version history'],
 ['Send messages','Email, Slack, comments.','A wrong email to a customer.','No. You cannot unsend.'],
 ['Spend money or delete','Pay, refund, delete records.','Money gone. Data gone.','No.']];
const rows=[['Summarise user interviews','Read the interview folder',16,''],['Update the PRD','Write one doc',38,''],['Send release notes','Send, after you confirm',66,'w']];
MOD({
  id:ID, title:'Least access and blast radius', cluster:'agents', fits:[4,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .br{display:grid;grid-template-columns:auto 1fr;gap:5vw;align-items:center}
  ${P} .br-rings{width:min(54vh,400px);aspect-ratio:1}
  ${P} .br-rings svg{width:100%;height:100%;overflow:visible}
  ${P} .br-ring{fill:none;stroke:var(--c-2a2a2e);stroke-width:2;transition:fill .5s,stroke .5s}
  ${P} .br-ring.on{stroke:var(--warn);fill:color-mix(in srgb,var(--warn) 7%,transparent)}
  ${P} .br-ring.on.safe{stroke:var(--green);fill:color-mix(in srgb,var(--green) 10%,transparent)}
  ${P} .br-rl{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:19px;letter-spacing:.06em;fill:var(--c-6a6a70);transition:fill .5s}
  ${P} .br-rl.on{fill:var(--fg)}
  ${P} .br-core{fill:var(--green)}
  ${P} .br-k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:clamp(26px,2.8vw,38px);line-height:1}
  ${P} .br-row{display:grid;grid-template-columns:130px 1fr;gap:14px;margin-top:16px;font-size:18px;line-height:1.35}
  ${P} .br-row span{font-family:var(--m);font-size:14px;color:var(--muted);padding-top:3px}
  ${P} .br-row.w b{color:var(--warn)}
  ${P} .br-row.g b{color:var(--green)}
  ${P} .rung{grid-template-columns:290px 1fr 220px}
  ${P} .rung .k{font-size:18px}
  ${P} .rung .d{font-size:17px;color:var(--fg-2)}
  ${P} .meter{height:12px}`,
  slides:[
  {sec:'AGENT SAFETY', cls:'viz', title:`EVERY PERMISSION <span class="w">WIDENS THE RADIUS</span>`,
   body:`<div class="br"><div class="br-rings"><svg viewBox="0 0 500 500" role="img" aria-label="Four rings: read only, write in one folder, send messages, spend money or delete. Each wider ring is a bigger radius of damage."></svg></div>
     <div><div class="stat-cap" style="margin:0 0 6px">Permission</div><div class="br-k"></div>
       <div class="br-row"><span>Agent can</span><b class="br-can"></b></div>
       <div class="br-row w"><span>Worst case</span><b class="br-worst"></b></div>
       <div class="br-row"><span>Undo?</span><b class="br-undo"></b></div>
       <div class="ctl" style="margin-top:22px"><input type="range" min="1" max="4" step="1" value="4" aria-label="Permission level"><output></output><button type="button">replay</button></div>
       <div class="lead" style="margin-top:20px">Give <span class="g">the smallest ring</span> that still gets the job done.</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), c=250, rr=[78,132,186,240], rings=[], lbl=[];
     for(let k=3;k>=0;k--) rings[k]=VIZ.s('circle',{cx:c,cy:c,r:rr[k],class:'br-ring'+(k===0?' safe':'')},svg);
     VIZ.s('circle',{cx:c,cy:c,r:20,class:'br-core'},svg);
     const tc=VIZ.s('text',{x:c,y:c+52,'text-anchor':'middle',class:'br-rl on'},svg); tc.textContent='agent';
     LV.forEach((l,k)=>{ const t=VIZ.s('text',{x:c,y:c-rr[k]+32,'text-anchor':'middle',class:'br-rl'},svg); t.textContent=['read','write','send','spend, delete'][k]; lbl[k]=t; });
     const $=s=>el.querySelector(s), rng=$('input'), out=$('output');
     function set(k){ rng.value=k; out.textContent=k+' / 4';
       rings.forEach((r,j)=>r.classList.toggle('on',j<k)); lbl.forEach((t,j)=>t.classList.toggle('on',j<k));
       const L=LV[k-1]; $('.br-k').textContent=L[0]; $('.br-k').style.color=k===1?'var(--green)':'var(--warn)';
       $('.br-can').textContent=L[1]; $('.br-worst').textContent=L[2]; $('.br-undo').textContent=L[3]; }
     rng.addEventListener('input',()=>set(+rng.value));
     el.addEventListener('keydown',e=>e.stopPropagation());
     let tm; function play(){ clearInterval(tm); if(VIZ.reduced){ set(4); return; } let k=1; set(1); tm=setInterval(()=>{ k++; set(k); if(k>=4) clearInterval(tm); },1100); }
     $('button').addEventListener('click',play);
     set(4); VIZ.onShow(el,play);
   }},
  {sec:'AGENT SAFETY', cls:'viz', title:`LEAST ACCESS <span class="g">IN PRACTICE</span>`,
   body:`<div class="ladder">${rows.map(([t,p,m,c],j)=>`<div class="rung a-fade" style="--i:${j}"><div class="k">${t}</div><div class="d">${p}</div><div class="meter ${c}"><b class="a-grow" style="--i:${j+1};width:${m}%"></b></div></div>`).join('')}
     <div class="rung a-fade" style="--i:3;border-color:var(--warn)"><div class="k">Refund a customer</div><div class="d">No agent access. A human does it.</div><div><span class="chip w">human only</span></div></div></div>
     <div class="legend" style="margin-top:14px"><span>Bar = blast radius of the permission you grant (illustrative)</span></div>
     <div class="lead a-fade" style="--i:5;margin-top:18px;max-width:none">Ask per task: <span class="g">what is the least this agent needs?</span></div>`}
  ]
});
})();
