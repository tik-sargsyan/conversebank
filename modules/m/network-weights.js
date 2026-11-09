MOD({
  id:'network-weights', title:'A network is just weights', cluster:'foundations', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-network-weights .nw{display:grid;grid-template-columns:1.5fr 1fr;gap:3.5vw;align-items:center}
  .m-network-weights .nw-svg{width:100%;height:56vh;display:block}
  .m-network-weights .nw-e{stroke:var(--fg)}
  .m-network-weights .nw-e.big{stroke:var(--green)}
  .m-network-weights .nw-n{fill:var(--surface);stroke:var(--fg);stroke-width:2}
  .m-network-weights .nw-l{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:16px;fill:var(--muted)}
  .m-network-weights .nw-num{font-family:var(--m);font-size:14px;fill:var(--green);opacity:0;transition:opacity .3s}
  .m-network-weights.nums .nw-num{opacity:1}
  .m-network-weights.nums .nw-e{opacity:.12!important}
  @keyframes nw-pulse{0%,100%{stroke:var(--fg)}35%{stroke:var(--green);stroke-opacity:1}}
  @keyframes nw-node{0%,100%{fill:var(--surface)}35%{fill:var(--green)}}
  .slide.active.m-network-weights:not(.nums) .nw-e{animation:nw-pulse 3s ease-in-out infinite;animation-delay:calc(var(--l)*.55s + 1s)}
  .slide.active.m-network-weights:not(.nums) .nw-n{animation:nw-node 3s ease-in-out infinite;animation-delay:calc(var(--l)*.55s + .8s)}
  .m-network-weights .nw-side .stat{font-size:clamp(64px,8vw,112px)}
  .m-network-weights .nw-vs{margin-top:22px;border-top:1px solid var(--line);padding-top:18px}
  .m-network-weights .nw-vs .stat{font-size:clamp(28px,3.4vw,46px);color:var(--fg)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-network-weights .nw-e,.slide.active.m-network-weights .nw-n{animation:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`A MODEL IS <span class="g">JUST NUMBERS</span>`,
   body:`<div class="nw"><svg class="nw-svg" viewBox="0 0 760 450" role="img" aria-label="A 4-6-6-2 neural network. Every line is one weight; thicker, brighter lines are larger weights."></svg>
     <div class="nw-side"><div class="stat">72</div>
       <div class="stat-cap">lines in this drawing. <b>Each line is one number, a weight.</b> Thick and bright = big number.</div>
       <div class="nw-vs"><div class="stat">175,000,000,000</div><div class="stat-cap">parameters in GPT-3 (2020). Same idea, more lines.</div></div>
       <div class="lead" style="margin-top:22px">A model is <span class="g">billions of these numbers.</span> What it knows lives in them.</div>
       <div class="ctl"><button type="button">show the numbers</button></div>
       <div class="src" style="margin-top:10px"><b>Source:</b> Brown et al. 2020 (GPT-3)</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), L=[4,6,6,2], xs=[70,290,510,700], gap=70;
     let seed=11; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
     const pos=L.map((n,l)=>Array.from({length:n},(_,k)=>({x:xs[l], y:225+(k-(n-1)/2)*gap})));
     const eg=VIZ.s('g',{},svg), ng=VIZ.s('g',{},svg), tg=VIZ.s('g',{},svg);
     for(let l=0;l<L.length-1;l++) pos[l].forEach(a=>pos[l+1].forEach(b=>{
       const w=rnd()*2-1, m=Math.abs(w);
       const e=VIZ.s('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:'nw-e'+(m>0.8?' big':''),'stroke-width':(0.6+m*5).toFixed(2),opacity:(0.12+m*0.8).toFixed(2),style:'--l:'+l},eg);
       const t=VIZ.s('title',{},e); t.textContent='weight '+w.toFixed(2);
       if(l===2||(l===0&&m>0.75)){ const n=VIZ.s('text',{x:a.x+(b.x-a.x)*0.62,y:a.y+(b.y-a.y)*0.62-4,'text-anchor':'middle',class:'nw-num'},tg); n.textContent=w.toFixed(2); }
     }));
     pos.forEach((col,l)=>col.forEach(p=>VIZ.s('circle',{cx:p.x,cy:p.y,r:15,class:'nw-n',style:'--l:'+(l-0.5)},ng)));
     [['input',0],['hidden',1],['hidden',2],['output',3]].forEach(([s,l])=>{ const t=VIZ.s('text',{x:xs[l],y:445,'text-anchor':'middle',class:'nw-l'},svg); t.textContent=s; });
     const btn=el.querySelector('button');
     btn.addEventListener('click',()=>{ const on=el.classList.toggle('nums'); btn.textContent=on?'hide the numbers':'show the numbers'; });
     el.addEventListener('keydown',e=>e.stopPropagation());
   }}
  ]
});
