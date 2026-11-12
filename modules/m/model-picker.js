MOD({
  id:'model-picker', title:'Which model for which job', cluster:'claude', fits:[2,6], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-model-picker .mp{height:min(54vh,400px)}
  .m-model-picker .mp svg{width:100%;height:100%;overflow:visible}
  .m-model-picker .ed{fill:none;stroke:var(--c-2c2c30);stroke-width:3;transition:stroke .35s ease}
  .m-model-picker .ed.on{stroke:var(--green)}
  .m-model-picker .el{font-family:var(--m);font-size:15px;fill:var(--muted)}
  .m-model-picker .el.on{fill:var(--green)}
  .m-model-picker .nd rect{fill:var(--surface);stroke:var(--dim);stroke-width:2;transition:stroke .35s ease,fill .35s ease}
  .m-model-picker .nd.on rect{stroke:var(--green)}
  .m-model-picker .nd.end.on rect{fill:var(--green)}
  .m-model-picker .nd.end.on text{fill:var(--bg)}
  .m-model-picker .nq{font-family:var(--b);font-size:17px;fill:var(--fg)}
  .m-model-picker .nk{font-family:var(--h);font-weight:800;font-size:26px;text-transform:uppercase;letter-spacing:.03em;fill:var(--fg)}
  .m-model-picker .ns{font-family:var(--b);font-size:14px;fill:var(--muted)}
  .m-model-picker .dot{fill:var(--green);filter:drop-shadow(0 0 6px color-mix(in srgb,var(--green) 90%,transparent))}
  .m-model-picker .ctl{flex-wrap:wrap;margin-top:6px}
  .m-model-picker .ctl button.on{border-color:var(--green);color:var(--green)}
  `,
  slides:[
  {sec:'CLAUDE TODAY', cls:'viz', title:`WHICH MODEL FOR <span class="g">WHICH JOB?</span>`,
   body:`<div class="mp"><svg viewBox="0 0 1100 400" role="img" aria-label="Decision tree. High volume and simple goes to Haiku. Otherwise, hard reasoning or long agent work goes to Opus. Everything else goes to Sonnet."></svg></div>
     <div class="ctl" aria-label="Example tasks"></div>`,
   init(el){
     const svg=el.querySelector('svg'), ctl=el.querySelector('.ctl');
     const node=(id,x,y,w,h,lines,end)=>{
       const g=VIZ.s('g',{class:'nd'+(end?' end':'')},svg);
       VIZ.s('rect',{x,y,width:w,height:h,rx:12},g);
       lines.forEach((l,k)=>{ const t=VIZ.s('text',{x:x+20,y:y+(end?38:32)+k*(end?24:22),class:l.c},g); t.textContent=l.t; });
       return g;
     };
     const E={}, L={};
     const edge=(id,d,lbl,lx,ly)=>{ E[id]=VIZ.s('path',{d,class:'ed'},svg); if(lbl){ L[id]=VIZ.s('text',{x:lx,y:ly,class:'el'},svg); L[id].textContent=lbl; } };
     edge('s1','M165 200 H220');
     edge('h','M490 170 C560 170 580 70 680 70','yes',575,92);
     edge('q2','M490 230 C540 230 520 260 580 260','no',500,268);
     edge('so2','M860 240 C895 240 885 215 920 215','no',872,212);
     edge('op','M860 290 C895 290 885 345 920 345','yes',866,340);
     const N={
       start:node('start',0,170,165,60,[{t:'New task',c:'nk'}]),
       q1:node('q1',220,140,270,120,[{t:'High volume,',c:'nq'},{t:'simple, repeatable?',c:'nq'},{t:'e.g. tag 5,000 tickets',c:'ns'}]),
       q2:node('q2',580,200,280,120,[{t:'Hard reasoning or',c:'nq'},{t:'long agent work?',c:'nq'},{t:'e.g. multi-step migration',c:'ns'}]),
       h:node('h',680,25,240,90,[{t:'Haiku',c:'nk'},{t:'fast, cheap, at scale',c:'ns'}],1),
       s:node('s',920,170,170,90,[{t:'Sonnet',c:'nk'},{t:'everyday work',c:'ns'}],1),
       o:node('o',920,300,170,90,[{t:'Opus',c:'nk'},{t:'or Fable: check',c:'ns'}],1)
     };
     // node rects are drawn after edges, so edges sit underneath
     const dot=VIZ.s('circle',{r:9,class:'dot',cx:0,cy:0,opacity:0},svg);
     const PATHS={h:['s1','h'],s:['s1','q2','so2'],o:['s1','q2','op']};
     const NODES={h:['start','q1','h'],s:['start','q1','q2','s'],o:['start','q1','q2','o']};
     const T=[
       {t:'Tag 5,000 support tickets',p:'h'},
       {t:'Draft a PRD from notes',p:'s'},
       {t:'Summarise 10 interviews',p:'s'},
       {t:'Plan a pricing migration across 12 docs',p:'o'}];
     const btns=T.map((x,k)=>{ const b=document.createElement('button'); b.type='button'; b.textContent=x.t; b.onclick=()=>{stop();go(k);}; ctl.appendChild(b); return b; });
     let raf, timer;
     function paint(k){
       const p=T[k].p;
       Object.keys(E).forEach(id=>{ E[id].classList.toggle('on',PATHS[p].includes(id)); if(L[id]) L[id].classList.toggle('on',PATHS[p].includes(id)); });
       Object.keys(N).forEach(id=>N[id].classList.toggle('on',NODES[p].includes(id)));
       btns.forEach((b,j)=>b.classList.toggle('on',j===k));
     }
     function go(k){
       paint(k); cancelAnimationFrame(raf);
       if(VIZ.reduced){ dot.setAttribute('opacity',0); return; }
       dot.setAttribute('opacity',1);
       const segs=PATHS[T[k].p].map(id=>E[id]), lens=segs.map(s=>s.getTotalLength()), tot=lens.reduce((a,b)=>a+b,0), t0=performance.now(), D=1400;
       const step=now=>{ let d=Math.min(1,(now-t0)/D)*tot, i=0; while(i<segs.length-1&&d>lens[i]){ d-=lens[i]; i++; }
         const pt=segs[i].getPointAtLength(Math.min(d,lens[i])); dot.setAttribute('cx',pt.x); dot.setAttribute('cy',pt.y);
         if(now-t0<D) raf=requestAnimationFrame(step); };
       raf=requestAnimationFrame(step);
     }
     function stop(){ clearInterval(timer); }
     el.addEventListener('keydown',e=>e.stopPropagation());
     paint(1);
     VIZ.onShow(el,()=>{ stop(); if(VIZ.reduced){ paint(1); return; } let k=0; go(0); timer=setInterval(()=>{ k++; if(k>=T.length){ stop(); return; } go(k); },2200); });
   }}
  ]
});
