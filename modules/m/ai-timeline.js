MOD({
  id:'ai-timeline', title:'75 years of AI: booms and winters', cluster:'foundations', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-ai-timeline .tl-svg{width:100%;height:56vh;display:block}
  .m-ai-timeline .tl-yr{font-family:var(--h);font-weight:800;font-size:24px;fill:var(--fg);letter-spacing:.02em}
  .m-ai-timeline .tl-yr.g{fill:var(--green)}
  .m-ai-timeline .tl-d{font-family:var(--b);font-size:16px;fill:var(--muted)}
  .m-ai-timeline .tl-w{font-family:var(--h);font-weight:800;font-size:15px;fill:var(--risk);letter-spacing:.1em}
  .m-ai-timeline .tl-tick{font-family:var(--m);font-size:15px;fill:var(--subtle)}
  .m-ai-timeline .tl-curve{fill:none;stroke:var(--green);stroke-width:5;stroke-linecap:round;stroke-linejoin:round}
  .m-ai-timeline .tl-ev{transform-box:fill-box;transform-origin:50% 50%}
  .slide.active.m-ai-timeline .tl-curve{animation:m-draw 2.2s cubic-bezier(.4,0,.2,1) both .3s}
  .slide.active.m-ai-timeline .tl-ev{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*230ms + 600ms)}
  .slide.active.m-ai-timeline .tl-win{animation:m-fade .8s ease both .5s}
  .m-ai-timeline .tl-lead{font-size:clamp(17px,1.7vw,23px);margin-top:6px}
  .slide.active.m-ai-timeline .tl-lead{animation:m-fade .6s ease both 3s}
  @media (prefers-reduced-motion:reduce){.slide.active.m-ai-timeline *{animation:none!important}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`75 YEARS OF AI: <span class="g">BOOMS AND WINTERS</span>`,
   body:`<svg class="tl-svg" viewBox="0 0 1200 560" role="img" aria-label="AI interest from 1950 to 2026 as an up and down line. Two booms end in AI winters in the 1970s and late 1980s. After 2012 the line climbs to its highest point with ChatGPT and agents."></svg>
     <div class="tl-lead">Two booms, two winters, then the biggest boom yet. <span class="g">5 years from the Transformer to ChatGPT.</span></div>
     <div class="src" style="margin-top:8px"><b>Sources:</b> Turing 1950 · Vaswani et al. 2017 · OpenAI 2022 · winter dates approximate · line height shows interest and funding, illustrative</div>`,
   init(el){
     const svg=el.querySelector('svg'), X=y=>60+(y-1950)*14.2, Y=l=>400-l*1.7, AX=412;
     // winters
     [[1974,1980],[1987,1993]].forEach(([a,b])=>{
       const g=VIZ.s('g',{class:'tl-win'},svg);
       VIZ.s('rect',{x:X(a),y:214,width:X(b)-X(a),height:AX-214,fill:'color-mix(in srgb,var(--risk) 9%,transparent)',rx:4},g);
       const m=(X(a)+X(b))/2;
       [['AI',236],['WINTER',254]].forEach(([s,y])=>{ const t=VIZ.s('text',{x:m,y,'text-anchor':'middle',class:'tl-w'},g); t.textContent=s; });
     });
     // axis and decade ticks
     VIZ.s('line',{x1:X(1950),x2:X(2026),y1:AX,y2:AX,stroke:'var(--line-2)','stroke-width':2},svg);
     for(let y=1950;y<=2020;y+=10){
       VIZ.s('line',{x1:X(y),x2:X(y),y1:AX-5,y2:AX+5,stroke:'var(--dim)','stroke-width':2},svg);
       const t=VIZ.s('text',{x:X(y),y:AX+24,'text-anchor':'middle',class:'tl-tick'},svg); t.textContent=y;
     }
     // the up and down line (interest and funding, illustrative)
     const P=[[1950,15],[1956,40],[1965,60],[1970,52],[1974,22],[1978,10],[1981,28],[1986,50],[1988,38],[1990,12],[1993,12],[1997,30],[2003,27],[2008,32],[2012,45],[2016,60],[2017,64],[2020,70],[2022,88],[2025,97],[2026,100]];
     const lv=y=>P.find(p=>p[0]===y)[1];
     let d;
     if(window.d3){ d=d3.line().x(p=>X(p[0])).y(p=>Y(p[1])).curve(d3.curveMonotoneX)(P); }
     else { d='M'+P.map(p=>X(p[0])+','+Y(p[1])).join(' L'); }
     const path=VIZ.s('path',{d,class:'tl-curve'},svg);
     const len=Math.ceil(path.getTotalLength?path.getTotalLength():2200)||2200;
     path.style.strokeDasharray=len; path.style.setProperty('--len',len);
     // milestones: side t=top, b=bottom; lane 1 is nearest the line
     const LANE={t1:176,t2:116,t3:56,b1:470,b2:528};
     const E=[
       {y:1950, l:'1950', d:'Turing asks: can machines think?', p:'b1', a:'start'},
       {y:1956, l:'1956', d:'Dartmouth workshop: AI becomes a field', p:'t1', a:'start'},
       {y:1997, l:'1997', d:'Deep Blue beats Kasparov at chess', p:'b1', a:'end'},
       {y:2012, l:'2012', d:'AlexNet: deep learning wins at images', p:'t1', a:'end'},
       {y:2016, l:'2016', d:'AlphaGo beats Lee Sedol at Go', p:'b1', a:'end'},
       {y:2017, l:'2017', d:'Transformer paper: the base of every LLM', p:'t2', a:'end'},
       {y:2022, l:'2022', d:'ChatGPT: AI goes mainstream', p:'t3', a:'end', g:1},
       {y:2025, l:'2024 to 2026', d:'Agents: models that act, not just answer', p:'b2', a:'end', g:1}];
     E.forEach((e,i)=>{
       const g=VIZ.s('g',{class:'tl-ev',style:'--i:'+i},svg), x=X(e.y), cy=Y(lv(e.y)), top=e.p[0]==='t', ly=LANE[e.p];
       const lineEnd= top? ly+30 : ly-30;
       if(e.y===2025) VIZ.s('line',{x1:X(2024),x2:X(2026),y1:AX,y2:AX,stroke:'var(--green)','stroke-width':8,'stroke-linecap':'round'},g);
       VIZ.s('line',{x1:x,x2:x,y1:cy,y2:lineEnd,stroke:e.g?'var(--green)':'var(--subtle)','stroke-width':1.5,'stroke-dasharray':top?'0':'0'},g);
       VIZ.s('circle',{cx:x,cy,r:e.g?8:6,fill:e.g?'var(--green)':'var(--fg)',stroke:'var(--bg)','stroke-width':2},g);
       const tx=e.a==='start'?x-4:x+4;
       const yr=VIZ.s('text',{x:tx,y:top?ly:ly,'text-anchor':e.a,class:'tl-yr'+(e.g?' g':'')},g), dd=VIZ.s('text',{x:tx,y:ly+22,'text-anchor':e.a,class:'tl-d'},g);
       yr.textContent=e.l; dd.textContent=e.d;
     });
   }}
  ]
});
