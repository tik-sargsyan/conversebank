MOD({
  id:'ai-amplifier', title:'AI amplifies who you are: you at the center, your base below', cluster:'pm', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-ai-amplifier .ap svg{width:100%;height:min(50vh,420px);display:block;overflow:visible}
  .m-ai-amplifier .ap-ring{fill:none;stroke:var(--green);transition:r .8s cubic-bezier(.2,.8,.2,1),opacity .8s}
  .m-ai-amplifier .ap-ray{stroke:var(--green);stroke-width:6;stroke-linecap:round;transition:all .8s cubic-bezier(.2,.8,.2,1);filter:drop-shadow(0 0 6px color-mix(in srgb,var(--green) 70%,transparent))}
  .m-ai-amplifier .ap-tip{fill:var(--green);transition:all .8s cubic-bezier(.2,.8,.2,1)}
  .m-ai-amplifier .ap-lab{font:800 16px var(--h);text-transform:uppercase;letter-spacing:.04em;fill:var(--fg);transition:all .8s cubic-bezier(.2,.8,.2,1)}
  .m-ai-amplifier .ap-you{fill:var(--green);transition:fill .5s}
  .m-ai-amplifier .ap-you-t{font:900 26px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-ai-amplifier .ap-ai{font:700 13px var(--m);fill:var(--on-accent);text-anchor:middle;letter-spacing:.08em}
  .m-ai-amplifier .ap-base rect{fill:var(--surface);stroke:var(--fg-2);stroke-width:1.5}
  .m-ai-amplifier .ap-base text{font:800 14px var(--h);text-transform:uppercase;fill:var(--fg);text-anchor:middle;letter-spacing:.03em}
  .m-ai-amplifier .ap-stem{stroke:var(--fg-2);stroke-width:2}
  .m-ai-amplifier .ap-bl{font:500 12px var(--m);fill:var(--muted);text-anchor:middle;letter-spacing:.08em}
  .m-ai-amplifier .ap.zero .ap-you{fill:var(--line-2)} .m-ai-amplifier .ap.zero .ap-you-t,.m-ai-amplifier .ap.zero .ap-ai{fill:var(--muted)}
  .m-ai-amplifier .ap.zero .ap-base rect{stroke:var(--risk);stroke-dasharray:5 5}
  .m-ai-amplifier .ap-ctl{display:flex;align-items:center;gap:14px;font-size:14px;color:var(--fg-2);margin-top:4px}
  .m-ai-amplifier .ap-ctl input{flex:1;max-width:280px;accent-color:var(--green)}
  .m-ai-amplifier .ap-ctl b{font:800 16px var(--h);color:var(--green);min-width:200px}
  .m-ai-amplifier .ap.zero .ap-ctl b{color:var(--risk)}
  .slide.active.m-ai-amplifier .ap-ring{animation:ap-pulse 2.6s ease-out infinite;animation-delay:calc(var(--i)*.85s)}
  @keyframes ap-pulse{from{opacity:.55;transform:scale(.6)}to{opacity:0;transform:scale(1.25)}}
  .m-ai-amplifier .ap-ring{transform-origin:500px 230px;transform-box:view-box}
  @media (prefers-reduced-motion:reduce){.slide.active.m-ai-amplifier .ap-ring{animation:none;opacity:.2}}
  `,
  slides:[
  {sec:'WHY NOW', cls:'viz', title:`AI AMPLIFIES <span class="g">WHO YOU ARE</span>`,
   body:`<div class="ap"><svg viewBox="0 0 1000 440" role="img" aria-label="You sit at the center. AI sends rays up, left and right toward what you can do. Below you, your base: thinking, judgment, fundamentals, domain knowledge. With no base, the rays shrink to zero."></svg>
     <div class="ap-ctl"><span>your fundamentals</span><input type="range" min="0" max="10" value="8"><b class="ap-v"></b></div></div>
     <div class="lead" style="margin-top:10px">A sharp thinker gets sharper. A sloppy one just gets louder. <span class="g">Zero times a hundred is still zero.</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), wrap=el.querySelector('.ap'), cx=500, cy=230;
     [0,1,2].forEach(i=>VIZ.s('circle',{cx,cy,r:120,class:'ap-ring',style:'--i:'+i,'stroke-width':2},svg));
     const D=[[-90,'Build products'],[-145,'Research faster'],[-35,'Ship more'],[180,'Decide better'],[0,'Lead teams of agents']];
     const rays=D.map(([a,t])=>{ const r=a*Math.PI/180, ln=VIZ.s('line',{x1:cx,y1:cy,x2:cx,y2:cy,class:'ap-ray'},svg), tip=VIZ.s('circle',{cx,cy,r:7,class:'ap-tip'},svg), lab=VIZ.s('text',{x:cx,y:cy,class:'ap-lab'},svg); lab.textContent=t; return {r,ln,tip,lab}; });
     // base
     const B=['Thinking','Judgment','Fundamentals','Domain knowledge'], bw=176, gap=14, x0=cx-(B.length*bw+(B.length-1)*gap)/2, by=362;
     const base=VIZ.s('g',{class:'ap-base'},svg);
     VIZ.s('line',{x1:cx,y1:cy+52,x2:cx,y2:by-26,class:'ap-stem'},svg);
     VIZ.s('line',{x1:x0+bw/2,y1:by-26,x2:x0+3*(bw+gap)+bw/2,y2:by-26,class:'ap-stem'},svg);
     B.forEach((t,k)=>{ const x=x0+k*(bw+gap); VIZ.s('line',{x1:x+bw/2,y1:by-26,x2:x+bw/2,y2:by,class:'ap-stem'},svg); VIZ.s('rect',{x,y:by,width:bw,height:46,rx:10},base); VIZ.s('text',{x:x+bw/2,y:by+29},base).textContent=t; });
     VIZ.s('text',{x:cx,y:by+70,class:'ap-bl'},svg).textContent='YOUR BASE: AI CANNOT ADD THIS FOR YOU';
     VIZ.s('circle',{cx,cy,r:52,class:'ap-you'},svg);
     VIZ.s('text',{x:cx,y:cy+4,class:'ap-you-t'},svg).textContent='YOU';
     VIZ.s('text',{x:cx,y:cy+26,class:'ap-ai'},svg).textContent='× AI';
     const inp=el.querySelector('input'), vv=el.querySelector('.ap-v');
     const set=v=>{ const L=40+v*11;
       rays.forEach(({r,ln,tip,lab})=>{ const len=v===0?0:L, x=cx+Math.cos(r)*(52+len), y=cy+Math.sin(r)*(52+len)*0.92, sx=cx+Math.cos(r)*52, sy=cy+Math.sin(r)*52*0.92;
         ln.setAttribute('x1',sx); ln.setAttribute('y1',sy); ln.setAttribute('x2',x); ln.setAttribute('y2',y); ln.style.opacity=v?1:0;
         tip.setAttribute('cx',x); tip.setAttribute('cy',y); tip.style.opacity=v?1:0;
         const c=Math.cos(r); lab.setAttribute('x',x+(c>0.3?14:c<-0.3?-14:0)); lab.setAttribute('y',y+(Math.sin(r)<-0.5?-16:6)); lab.setAttribute('text-anchor',c>0.3?'start':c<-0.3?'end':'middle'); lab.style.opacity=v?Math.min(1,.35+v/10):0; });
       svg.querySelectorAll('.ap-ring').forEach(c=>c.setAttribute('r',v===0?0:52+L*0.9));
       wrap.classList.toggle('zero',v===0); vv.textContent=v===0?'0 × AI = 0':v+' / 10 × AI = '+v*100; };
     inp.addEventListener('input',()=>set(+inp.value)); set(8);
   }}
  ]
});
