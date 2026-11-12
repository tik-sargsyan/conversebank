MOD({
  id:'effort-levels', title:'Effort levels: low to max', cluster:'claude', fits:[2], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-effort-levels .ef{display:grid;grid-template-columns:auto 1fr;gap:5vw;align-items:center}
  .m-effort-levels .ef-dial{position:relative;width:min(40vh,340px);aspect-ratio:1}
  .m-effort-levels .ef-dial svg{width:100%;height:100%}
  .m-effort-levels .ef-needle{transition:transform .7s cubic-bezier(.3,1.4,.4,1);transform-origin:170px 170px}
  .m-effort-levels .ef-lbl{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:17px;fill:var(--muted);letter-spacing:.06em;cursor:pointer}
  .m-effort-levels .ef-lbl.on{fill:var(--green)}
  .m-effort-levels .ef-bars{display:flex;flex-direction:column;gap:20px}
  .m-effort-levels .ef-row .k{display:flex;justify-content:space-between;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:18px;letter-spacing:.04em;margin-bottom:8px}
  .m-effort-levels .ef-row .k span{color:var(--muted);font-family:var(--m);font-weight:400;font-size:13px;text-transform:none}
  .m-effort-levels .meter{height:14px;border-radius:7px}
  .m-effort-levels .meter b{transition:width .7s cubic-bezier(.2,.8,.2,1)}
  .m-effort-levels .ef-when{margin-top:8px;border-left:4px solid var(--green);padding:10px 16px;background:var(--surface);border-radius:8px;font-size:17px;min-height:56px}
  .m-effort-levels .ef-when b{color:var(--green);font-family:var(--h);text-transform:uppercase;letter-spacing:.04em}
  .m-effort-levels .ef-tasks .tile .k{color:var(--green)}
  `,
  slides:[
  {sec:'CLAUDE TODAY', cls:'viz', title:`EFFORT IS A <span class="g">DIAL</span>`,
   body:`<div class="ef"><div class="ef-dial"><svg viewBox="-40 0 420 300" aria-label="Effort dial from low to max"></svg></div>
     <div><div class="ef-bars">
       <div class="ef-row"><div class="k">Thinking depth <span>how long it reasons first</span></div><div class="meter"><b data-m="0"></b></div></div>
       <div class="ef-row"><div class="k">Time to answer <span>you wait longer</span></div><div class="meter"><b data-m="1"></b></div></div>
       <div class="ef-row"><div class="k">Tokens used <span>you pay more</span></div><div class="meter w"><b data-m="2"></b></div></div></div>
       <div class="ef-when"></div>
       <div class="ctl"><input type="range" min="0" max="4" step="1" value="2" aria-label="Effort level"><output></output></div></div></div>`,
   init(el){
     const L=[
       {k:'low',    v:[14,12,10], w:'Quick lookups, renames, one-line fixes.'},
       {k:'medium', v:[34,30,28], w:'Everyday edits and short drafts.'},
       {k:'high',   v:[58,52,50], w:'A multi-file change or a real spec.'},
       {k:'xhigh',  v:[80,74,74], w:'Tricky bugs, messy data, careful reviews.'},
       {k:'max',    v:[100,100,100], w:'Hard design calls. Use it on purpose.'}];
     const svg=el.querySelector('svg'), cx=170, cy=170, R=130;
     VIZ.s('path',{d:`M${cx-R} ${cy} A${R} ${R} 0 0 1 ${cx+R} ${cy}`,fill:'none',stroke:'var(--line)','stroke-width':18,'stroke-linecap':'round'},svg);
     const arc=VIZ.s('path',{d:`M${cx-R} ${cy} A${R} ${R} 0 0 1 ${cx+R} ${cy}`,fill:'none',stroke:'var(--green)','stroke-width':18,'stroke-linecap':'round',pathLength:100},svg);
     const lbls=L.map((l,k)=>{
       const a=Math.PI*(1-k/4), x=cx+(R+38)*Math.cos(a), y=cy-(R+38)*Math.sin(a);
       const t=VIZ.s('text',{x,y:y+6,'text-anchor':'middle',class:'ef-lbl'},svg); t.textContent=l.k;
       t.addEventListener('click',()=>set(k)); return t; });
     const nd=VIZ.s('g',{class:'ef-needle'},svg);
     VIZ.s('line',{x1:cx,y1:cy,x2:cx,y2:cy-R+22,stroke:'var(--fg)','stroke-width':5,'stroke-linecap':'round'},nd);
     VIZ.s('circle',{cx,cy,r:12,fill:'var(--green)'},nd);
     const bars=el.querySelectorAll('[data-m]'), when=el.querySelector('.ef-when'), rng=el.querySelector('input'), out=el.querySelector('output');
     function set(k){
       rng.value=k; out.textContent=L[k].k;
       nd.style.transform=`rotate(${-90+k*45}deg)`;
       arc.setAttribute('stroke-dasharray',`${k*25} 100`);
       bars.forEach(b=>b.style.width=L[k].v[+b.dataset.m]+'%');
       lbls.forEach((t,j)=>t.classList.toggle('on',j===k));
       when.innerHTML=`<b>${L[k].k}</b> &nbsp;${L[k].w}`;
     }
     rng.addEventListener('input',()=>set(+rng.value));
     el.addEventListener('keydown',e=>e.stopPropagation());
     set(2);
     VIZ.onShow(el,()=>{ if(VIZ.reduced) return; set(0); let k=0; const t=setInterval(()=>{ k++; set(k); if(k>=2) clearInterval(t); },550); });
   }},
  {sec:'CLAUDE TODAY', cls:'viz', title:`MATCH EFFORT <span class="g">TO THE TASK</span>`,
   body:`<div class="tiles ef-tasks" style="grid-template-columns:repeat(5,1fr)">
     <div class="tile a-fade" style="--i:0"><div class="k">Low</div><p>Rename files. Find a setting. Fix a typo.</p></div>
     <div class="tile a-fade" style="--i:1"><div class="k">Medium</div><p>Summarise a doc. Draft a short update.</p></div>
     <div class="tile a-fade on" style="--i:2"><div class="k">High</div><p>Write a PRD. Change several files. Your default for real work.</p></div>
     <div class="tile a-fade" style="--i:3"><div class="k">Xhigh</div><p>Debug a hard bug. Reconcile messy data.</p></div>
     <div class="tile a-fade" style="--i:4"><div class="k">Max</div><p>Big design calls. Hard research. Rare and on purpose.</p></div></div>
     <div class="lead a-fade" style="--i:6;margin-top:30px">Higher effort is <span class="g">not smarter by default.</span> It is slower and costs more. <span class="w">Pick, do not max.</span></div>`}
  ]
});
