MOD({
  id:'utopia-dystopia', title:'Utopia or dystopia: the spectrum', cluster:'society', fits:[1,8], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-utopia-dystopia .ud-stage{height:54vh}
  .m-utopia-dystopia .ud-svg{cursor:crosshair}
  .m-utopia-dystopia .ud-lbl{font-family:var(--b);font-size:20px;fill:var(--fg-2)}
  .m-utopia-dystopia .ud-end{font-family:var(--h);font-weight:800;font-size:26px;letter-spacing:.08em;text-transform:uppercase}
  .m-utopia-dystopia .ud-lane{font-family:var(--m);font-size:16px;fill:var(--muted)}
  .m-utopia-dystopia .ud-vote{fill:var(--fg)}
  .slide.active.m-utopia-dystopia .ud-vote.new{animation:m-pop .4s cubic-bezier(.3,1.6,.4,1) both;transform-box:fill-box;transform-origin:center}
  .m-utopia-dystopia .ud-avg{transition:transform .5s cubic-bezier(.2,.8,.2,1)}
  .m-utopia-dystopia .lv{display:grid;grid-template-columns:1fr 1.05fr;gap:4vw;align-items:center}
  .m-utopia-dystopia .lv-rows{display:flex;flex-direction:column;gap:14px}
  .m-utopia-dystopia .lv-row{border:1px solid var(--line);border-radius:10px;padding:12px 16px;background:var(--surface)}
  .m-utopia-dystopia .lv-row .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:19px;letter-spacing:.04em}
  .m-utopia-dystopia .lv-row .ends{display:flex;justify-content:space-between;font-size:14px;color:var(--muted);margin-top:2px}
  .m-utopia-dystopia .lv-row .ends .w{color:var(--warn)} .m-utopia-dystopia .lv-row .ends .g{color:var(--green)}
  .m-utopia-dystopia .lv-row input{width:100%;accent-color:var(--green);margin-top:6px}
  .m-utopia-dystopia .lv-dot{transition:transform .5s cubic-bezier(.2,.8,.2,1)}
  `,
  slides:[
  {sec:'AI AND SOCIETY', cls:'viz', title:`DYSTOPIA OR UTOPIA? <span class="g">WHERE DO YOU STAND?</span>`,
   body:`<div class="stage ud-stage"><svg class="ud-svg" viewBox="0 0 1160 430" role="img" aria-label="A spectrum from dystopia on the left to utopia on the right, with real hopes and fears placed along it. Click to add a vote."></svg></div>
     <div class="ctl"><span>click the line to drop a vote</span><button type="button" data-a="undo">undo</button><button type="button" data-a="clear">clear</button><span>votes</span><output>0</output></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=60, X1=1100, Y=185, LANE=395;
     const mid=(X0+X1)/2;
     VIZ.s('line',{x1:X0,y1:Y,x2:mid,y2:Y,stroke:'var(--warn)','stroke-width':6,'stroke-linecap':'round',class:'a-draw',style:'--len:520'},svg);
     VIZ.s('line',{x1:mid,y1:Y,x2:X1,y2:Y,stroke:'var(--green)','stroke-width':6,'stroke-linecap':'round',class:'a-draw',style:'--len:520;--i:2'},svg);
     const e1=VIZ.s('text',{x:X0,y:30,class:'ud-end',fill:'var(--warn)'},svg); e1.textContent='Dystopia';
     const e2=VIZ.s('text',{x:X1,y:30,class:'ud-end','text-anchor':'end',fill:'var(--green)'},svg); e2.textContent='Utopia';
     const P=[
       [0.05,'Loss of control',1],[0.17,'Mass surveillance',0],[0.29,'Misinformation','at scale',1],[0.41,'Job loss without','a safety net',0],
       [0.59,'Drudge work','automated',1],[0.71,'Cheaper goods','and services',0],[0.83,'A tutor for','every child',1],[0.95,'Faster cures',0]];
     P.forEach((p,k)=>{
       const x=X0+p[0]*(X1-X0), up=p[p.length-1]===1, ty=up?85:270, risk=p[0]<.5;
       const g=VIZ.s('g',{class:'a-fade',style:'--i:'+(k+3)},svg);
       VIZ.s('line',{x1:x,y1:Y,x2:x,y2:up?ty+(p.length===4?34:10):ty-26,stroke:'var(--line)','stroke-width':1.5},g);
       VIZ.s('circle',{cx:x,cy:Y,r:9,fill:risk?'var(--warn)':'var(--green)'},g);
       const lines=p.length===4?[p[1],p[2]]:[p[1]];
       lines.forEach((t,j)=>{ const tx=VIZ.s('text',{x,y:ty+j*25,'text-anchor':'middle',class:'ud-lbl'},g); tx.textContent=t; });
     });
     VIZ.s('line',{x1:X0,y1:LANE,x2:X1,y2:LANE,stroke:'var(--line)','stroke-width':1.5},svg);
     const ln=VIZ.s('text',{x:X0,y:LANE+24,class:'ud-lane'},svg); ln.textContent='ROOM VOTES';
     const votesG=VIZ.s('g',{},svg);
     const avg=VIZ.s('g',{class:'ud-avg',style:'opacity:0'},svg);
     VIZ.s('line',{x1:0,y1:LANE-80,x2:0,y2:LANE+6,stroke:'var(--green)','stroke-width':2,'stroke-dasharray':'4 4'},avg);
     const at=VIZ.s('text',{x:0,y:LANE+24,'text-anchor':'middle',class:'ud-lane',fill:'var(--green)',style:'fill:var(--green)'},avg); at.textContent='room average';
     const votes=[], out=el.querySelector('output'), BW=18;
     function draw(){
       votesG.innerHTML=''; const bins={};
       votes.forEach((x,k)=>{ const b=Math.round(x/BW); bins[b]=(bins[b]||0)+1; const h=bins[b];
         VIZ.s('circle',{cx:b*BW,cy:LANE-9-(h-1)*16,r:7,class:'ud-vote'+(k===votes.length-1?' new':'')},votesG); });
       out.textContent=votes.length;
       if(votes.length){ const m=votes.reduce((a,b)=>a+b,0)/votes.length; avg.style.opacity=1; avg.style.transform=`translateX(${m}px)`; }
       else avg.style.opacity=0;
     }
     svg.addEventListener('click',e=>{
       const pt=svg.createSVGPoint(); pt.x=e.clientX; pt.y=e.clientY;
       const p=pt.matrixTransform(svg.getScreenCTM().inverse());
       votes.push(Math.max(X0,Math.min(X1,p.x))); draw();
     });
     el.querySelector('[data-a=undo]').addEventListener('click',()=>{ votes.pop(); draw(); });
     el.querySelector('[data-a=clear]').addEventListener('click',()=>{ votes.length=0; draw(); });
     el.addEventListener('keydown',e=>e.stopPropagation());
   }},
  {sec:'AI AND SOCIETY', cls:'viz', title:`THE FUTURE IS <span class="g">A SET OF CHOICES</span>`,
   body:`<div class="lv"><div class="lv-rows">
       <div class="lv-row"><div class="k">Policy</div><div class="ends"><span class="w">no rules</span><span class="g">clear rules, enforced</span></div><input type="range" min="0" max="100" value="50" aria-label="Policy"></div>
       <div class="lv-row"><div class="k">Safety research</div><div class="ends"><span class="w">an afterthought</span><span class="g">funded and shared</span></div><input type="range" min="0" max="100" value="50" aria-label="Safety research"></div>
       <div class="lv-row"><div class="k">Who builds it</div><div class="ends"><span class="w">a few, unchecked</span><span class="g">many, accountable</span></div><input type="range" min="0" max="100" value="50" aria-label="Who builds it"></div>
       <div class="lv-row"><div class="k">How we use it</div><div class="ends"><span class="w">replace and forget</span><span class="g">assist and review</span></div><input type="range" min="0" max="100" value="50" aria-label="How we use it"></div></div>
     <div><svg viewBox="0 0 520 200" style="width:100%" role="img" aria-label="A spectrum dot that moves toward utopia as the levers move right">
       <line x1="20" y1="100" x2="260" y2="100" stroke="var(--warn)" stroke-width="6" stroke-linecap="round"/>
       <line x1="260" y1="100" x2="500" y2="100" stroke="var(--green)" stroke-width="6" stroke-linecap="round"/>
       <text x="20" y="60" class="svg-h" fill="var(--warn)" style="fill:var(--warn);font-size:18px">Dystopia</text>
       <text x="500" y="60" class="svg-h" text-anchor="end" style="fill:var(--green);font-size:18px">Utopia</text>
       <g class="lv-dot"><circle cx="0" cy="100" r="18" fill="var(--fg)"/><circle cx="0" cy="100" r="30" fill="none" stroke="var(--fg)" stroke-opacity=".3" stroke-width="2"/></g>
       <text x="260" y="160" text-anchor="middle" class="svg-t">illustrative</text></svg>
       <div class="lead" style="margin-top:18px">No lever is set by the technology. <span class="g">People set every one.</span> PMs set the last one every day.</div></div></div>`,
   init(el){
     const ins=[...el.querySelectorAll('input')], dot=el.querySelector('.lv-dot');
     const set=()=>{ const m=ins.reduce((a,i)=>a+ +i.value,0)/ins.length; dot.style.transform=`translateX(${20+m*4.8}px)`; };
     ins.forEach(i=>i.addEventListener('input',set));
     el.addEventListener('keydown',e=>e.stopPropagation());
     set();
     VIZ.onShow(el,()=>{ if(VIZ.reduced) return; const v=[20,30,25,35]; ins.forEach((i,k)=>i.value=v[k]); set();
       setTimeout(()=>{ ins.forEach(i=>i.value=50); set(); },700); });
   }}
  ]
});
