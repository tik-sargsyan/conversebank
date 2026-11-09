MOD({
  id:'ai-timeline', title:'75 years of AI on one line', cluster:'foundations', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-ai-timeline .tl-svg{width:100%;height:52vh;display:block}
  .m-ai-timeline .tl-yr{font-family:var(--h);font-weight:800;font-size:24px;fill:var(--fg);letter-spacing:.02em}
  .m-ai-timeline .tl-yr.g{fill:var(--green)}
  .m-ai-timeline .tl-d{font-family:var(--b);font-size:16px;fill:var(--muted)}
  .m-ai-timeline .tl-w{font-family:var(--m);font-size:15px;fill:var(--muted);letter-spacing:.08em}
  .m-ai-timeline .tl-tick{font-family:var(--m);font-size:15px;fill:var(--subtle)}
  .m-ai-timeline .tl-ev{transform-box:fill-box;transform-origin:50% 50%}
  .slide.active.m-ai-timeline .tl-axis{stroke-dasharray:1200;animation:m-draw 1.6s cubic-bezier(.4,0,.2,1) both .2s;--len:1200}
  .slide.active.m-ai-timeline .tl-ev{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*260ms + 700ms)}
  .slide.active.m-ai-timeline .tl-win{animation:m-fade .8s ease both .5s}
  .m-ai-timeline .tl-lead{font-size:clamp(17px,1.7vw,23px);margin-top:6px}
  .slide.active.m-ai-timeline .tl-lead{animation:m-fade .6s ease both 3.2s}
  @media (prefers-reduced-motion:reduce){.slide.active.m-ai-timeline *{animation:none!important}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`75 YEARS OF AI, <span class="g">ON ONE LINE</span>`,
   body:`<svg class="tl-svg" viewBox="0 0 1200 465" role="img" aria-label="Timeline from 1950 to 2026. Events crowd together after 2012."></svg>
     <div class="tl-lead">41 years from Dartmouth to Deep Blue. <span class="g">5 years from the Transformer to ChatGPT.</span></div>
     <div class="src" style="margin-top:8px"><b>Sources:</b> Turing 1950 · Vaswani et al. 2017 · OpenAI 2022 · winter dates approximate</div>`,
   init(el){
     const svg=el.querySelector('svg'), ax=232, X=y=>50+(y-1950)*14.5;
     // winters
     [[1974,1980],[1987,1993]].forEach(([a,b])=>{
       const g=VIZ.s('g',{class:'tl-win'},svg);
       VIZ.s('rect',{x:X(a),y:20,width:X(b)-X(a),height:430,fill:'color-mix(in srgb,var(--fg) 5%,transparent)',rx:4},g);
       const m=(X(a)+X(b))/2;
       [['AI',ax-36],['WINTER',ax-16]].forEach(([s,y])=>{ const t=VIZ.s('text',{x:m,y,'text-anchor':'middle',class:'tl-w'},g); t.textContent=s; });
     });
     // decade ticks
     for(let y=1950;y<=2020;y+=10){
       VIZ.s('line',{x1:X(y),x2:X(y),y1:ax-6,y2:ax+6,stroke:'var(--dim)','stroke-width':2},svg);
       if(y>1950&&y<2010){ const t=VIZ.s('text',{x:X(y),y:ax+30,'text-anchor':'middle',class:'tl-tick'},svg); t.textContent=y; }
     }
     VIZ.s('line',{x1:X(1950),x2:X(2026),y1:ax,y2:ax,stroke:'var(--subtle)','stroke-width':3,class:'tl-axis'},svg);
     const E=[
       {y:1950, l:'1950', d:'Turing asks: can machines think?', lane:-1, a:'start'},
       {y:1956, l:'1956', d:'Dartmouth workshop: AI becomes a field', lane:1, a:'start'},
       {y:1997, l:'1997', d:'Deep Blue beats Kasparov at chess', lane:-1, a:'middle'},
       {y:2012, l:'2012', d:'AlexNet: deep learning wins at images', lane:1, a:'end'},
       {y:2016, l:'2016', d:'AlphaGo beats Lee Sedol at Go', lane:-2, a:'end'},
       {y:2017, l:'2017', d:'Transformer paper: the base of every LLM', lane:2, a:'end'},
       {y:2022, l:'2022', d:'ChatGPT: AI goes mainstream', lane:-3, a:'end', g:1},
       {y:2025, l:'2024 to 2026', d:'Agents: models that act, not just answer', lane:3, a:'end', g:1}];
     E.forEach((e,i)=>{
       const g=VIZ.s('g',{class:'tl-ev',style:'--i:'+i},svg), x=X(e.y);
       const ly=e.lane<0? ax+e.lane*58-4 : ax+e.lane*58;
       if(e.y===2025){ VIZ.s('line',{x1:X(2024),x2:X(2026),y1:ax,y2:ax,stroke:'var(--green)','stroke-width':9,'stroke-linecap':'round'},g); }
       VIZ.s('line',{x1:x,x2:x,y1:ax,y2:ly,stroke:e.g?'var(--green)':'var(--subtle)','stroke-width':1.5},g);
       VIZ.s('circle',{cx:x,cy:ax,r:6,fill:e.g?'var(--green)':'var(--fg)'},g);
       const tx=e.a==='start'?x+2:e.a==='end'?x-2:x;
       const yr=VIZ.s('text',{x:tx,'text-anchor':e.a,class:'tl-yr'+(e.g?' g':'')},g), d=VIZ.s('text',{x:tx,'text-anchor':e.a,class:'tl-d'},g);
       if(e.lane<0){ yr.setAttribute('y',ly-26); d.setAttribute('y',ly-6); } else { yr.setAttribute('y',ly+22); d.setAttribute('y',ly+42); }
       yr.textContent=e.l; d.textContent=e.d;
     });
   }}
  ]
});
