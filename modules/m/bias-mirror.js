MOD({
  id:'bias-mirror', title:'AI is a mirror: bias in, bias out', cluster:'society', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-bias-mirror .bm-stage{height:52vh}
  .m-bias-mirror .bm-h{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:22px;fill:var(--fg)}
  .m-bias-mirror .bm-t{font-family:var(--b);font-size:19px;fill:var(--muted)}
  .m-bias-mirror .bm-p{font-family:var(--m);font-size:19px;fill:var(--green)}
  .m-bias-mirror .ev{display:grid;grid-template-columns:1.6fr 1fr;gap:3.5vw;align-items:center}
  .m-bias-mirror .ev-g{display:grid;grid-template-columns:250px repeat(4,1fr);gap:6px}
  .m-bias-mirror .ev-g .hd{font-family:var(--m);font-size:14px;color:var(--muted);text-align:center;padding-bottom:4px}
  .m-bias-mirror .ev-g .in{font-family:var(--m);font-size:15px;color:var(--fg);background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:10px 12px}
  .m-bias-mirror .ev-g .c{border-radius:8px;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-family:var(--h);font-weight:800;font-size:15px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);transition:all .3s}
  .m-bias-mirror .ev-g .c.ok{border-color:var(--green);color:var(--green);background:var(--green-a)}
  .m-bias-mirror .ev-g .c.bad{border-color:var(--warn);color:var(--warn);background:color-mix(in srgb,var(--warn) 10%,transparent)}
  .m-bias-mirror .ev-side .rung{grid-template-columns:44px 1fr;padding:12px 16px}
  .m-bias-mirror .ev-side .rung .k{color:var(--green);font-size:24px}
  .m-bias-mirror .ev-side .rung .d{color:var(--fg-2);font-size:16px}
  `,
  slides:[
  {sec:'AI AND SOCIETY', cls:'viz', title:`AI IS A <span class="g">MIRROR</span>`,
   body:`<div class="stage bm-stage"><svg viewBox="0 0 1120 420" role="img" aria-label="Illustrative. Training data where 28 of 40 dots are one group goes through the model. The output for the prompt a picture of a CEO shows 37 of 40 dots from that group. The skew grows."></svg></div>`,
   init(el){
     const svg=el.querySelector('svg'), s=(t,a,p)=>VIZ.s(t,a,p||svg), tx=(a,txt,p)=>{ const e=s('text',a,p); e.textContent=txt; return e; };
     const grid=(x0,nOn,i,col)=>{ const g=s('g',{});
       let seed=nOn*13+5; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647; rnd();
       const off=new Set(); while(off.size<40-nOn) off.add(Math.floor(rnd()*40));
       for(let k=0;k<40;k++){ const c=k%8, r=Math.floor(k/8), cx=x0+c*40, cy=150+r*40;
         s('circle',off.has(k)?{cx,cy,r:13,fill:'none',stroke:'var(--muted)','stroke-width':2.5,class:'a-pop',style:`--i:${i+k*.15};transform-box:fill-box;transform-origin:center`}
                              :{cx,cy,r:14,fill:col,class:'a-pop',style:`--i:${i+k*.15};transform-box:fill-box;transform-origin:center`},g); }
       return g; };
     tx({x:40,y:60,class:'bm-h'},'Training data',s('g',{class:'a-fade',style:'--i:0'}));
     tx({x:40,y:88,class:'bm-t'},'28 of 40 from one group',svg);
     grid(54,28,1,'var(--fg)');
     // mirror
     const m=s('g',{class:'a-fade',style:'--i:6'});
     tx({x:560,y:60,'text-anchor':'middle',class:'bm-p'},'"a picture of a CEO"',m);
     s('path',{d:'M535 110 Q575 250 535 390',fill:'none',stroke:'var(--green)','stroke-width':6,'stroke-linecap':'round'},m);
     s('path',{d:'M548 110 Q588 250 548 390',fill:'none',stroke:'var(--green)','stroke-opacity':.3,'stroke-width':3},m);
     tx({x:560,y:415,'text-anchor':'middle',class:'bm-h svg-g',style:'font-size:18px'},'Model',m);
     s('path',{d:'M400 250 H510',stroke:'var(--fg)','stroke-width':3,'marker-end':'url(#bm-ar)'},m);
     s('path',{d:'M600 250 H710',stroke:'var(--fg)','stroke-width':3,'marker-end':'url(#bm-ar)'},m);
     const mk=s('marker',{id:'bm-ar',viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:7,markerHeight:7,orient:'auto'},s('defs',{})); s('path',{d:'M0 0 L10 5 L0 10 z',fill:'var(--fg)'},mk);
     const o=s('g',{class:'a-fade',style:'--i:9'});
     tx({x:1080,y:60,'text-anchor':'end',class:'bm-h',style:'fill:var(--warn)'},'Output: skew grows',o);
     tx({x:1080,y:88,'text-anchor':'end',class:'bm-t'},'37 of 40 from one group',o);
     grid(786,37,10,'var(--fg)');
     const lg=s('g',{class:'a-fade',style:'--i:16'});
     s('circle',{cx:50,cy:400,r:9,fill:'var(--fg)'},lg); tx({x:66,y:406,class:'bm-t'},'one group',lg);
     s('circle',{cx:200,cy:400,r:8,fill:'none',stroke:'var(--muted)','stroke-width':2.5},lg); tx({x:216,y:406,class:'bm-t'},'everyone else',lg);
     tx({x:1080,y:406,'text-anchor':'end',class:'bm-t'},'illustrative',lg);
   }},
  {sec:'AI AND SOCIETY', cls:'viz', title:`PM GUARD: <span class="g">TEST WITH DIVERSE INPUTS</span>`,
   body:`<div class="ev"><div><div class="ev-g">
       <span class="hd" style="text-align:left">same CV, change one thing</span><span class="hd">score</span><span class="hd">tone</span><span class="hd">summary</span><span class="hd">advice</span>
       ${['CV: Anna, Yerevan','CV: Aram, Gyumri','CV: age 52','CV in Armenian','CV with a career gap'].map((t,r)=>`<span class="in">${t}</span>`+[0,1,2,3].map(c=>`<span class="c" data-r="${r}" data-c="${c}">ok</span>`).join('')).join('')}</div>
       <div class="ctl"><button type="button">run the test</button><span>example grid, not real results</span></div></div>
     <div class="ev-side ladder">
       <div class="rung a-fade" style="--i:1"><div class="k">1</div><div class="d">Keep the task fixed. <b>Vary one trait</b> at a time.</div></div>
       <div class="rung a-fade" style="--i:2"><div class="k">2</div><div class="d">Compare outputs <b>side by side</b>. Look for gaps.</div></div>
       <div class="rung a-fade" style="--i:3"><div class="k">3</div><div class="d">Fix the prompt or data. <b>Rerun before launch</b> and after every model change.</div></div></div></div>`,
   init(el){
     const cells=[...el.querySelectorAll('.c')], bad=new Set(['2-0','4-3']);
     const fill=()=>cells.forEach(c=>{ const b=bad.has(c.dataset.r+'-'+c.dataset.c); c.className='c '+(b?'bad':'ok'); c.textContent=b?'gap':'ok'; });
     const play=()=>{ if(VIZ.reduced){ fill(); return; } cells.forEach(c=>{ c.className='c'; c.textContent='...'; });
       cells.forEach((c,k)=>setTimeout(()=>{ const b=bad.has(c.dataset.r+'-'+c.dataset.c); c.className='c '+(b?'bad':'ok'); c.textContent=b?'gap':'ok'; },200+k*70)); };
     fill();
     el.querySelector('button').addEventListener('click',play);
     el.addEventListener('keydown',e=>e.stopPropagation());
   }}
  ]
});
