MOD({
  id:'hooks', title:'Hooks: when X happens, always do Y', cluster:'claude', fits:[2,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-hooks .tl{height:min(52vh,390px)}
  .m-hooks .tl svg{width:100%;height:100%;overflow:visible}
  .m-hooks .rail{stroke:var(--c-2c2c30);stroke-width:4}
  .m-hooks .prog{stroke:var(--green);stroke-width:4}
  .m-hooks .ev{fill:var(--bg);stroke:var(--fg);stroke-width:3}
  .m-hooks .ev.on{fill:var(--green);stroke:var(--green)}
  .m-hooks .ek{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:19px;letter-spacing:.03em;fill:var(--fg)}
  .m-hooks .em{font-family:var(--m);font-size:14px;fill:var(--green)}
  .m-hooks .card rect{fill:var(--surface);stroke:var(--dim);stroke-width:2}
  .m-hooks .card.on rect{stroke:var(--green)}
  .m-hooks .ct{font-family:var(--b);font-size:16px;fill:var(--fg)}
  .m-hooks .cc{font-family:var(--m);font-size:14px;fill:var(--muted)}
  .m-hooks .cw{font-family:var(--m);font-size:14px;fill:var(--warn)}
  .m-hooks .stem{stroke:var(--dim);stroke-width:2;stroke-dasharray:4 5}
  .m-hooks .vs{display:flex;flex-direction:column;gap:22px}
  .m-hooks .vr{display:grid;grid-template-columns:340px 1fr 110px;gap:24px;align-items:center;border:1px solid var(--line);border-radius:14px;padding:18px 22px;background:var(--surface)}
  .m-hooks .vr.g{border-color:var(--green)}
  .m-hooks .vr .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:22px;letter-spacing:.03em}
  .m-hooks .vr .k span{display:block;font-family:var(--m);font-weight:400;text-transform:none;letter-spacing:0;font-size:14px;color:var(--muted);margin-top:4px}
  .m-hooks .runs{display:flex;gap:12px}
  .m-hooks .runs i{width:30px;height:30px;border-radius:50%;background:var(--green)}
  .m-hooks .runs i.x{background:transparent;border:2px dashed var(--warn)}
  .m-hooks .vr .n{font-family:var(--h);font-weight:900;font-size:40px;color:var(--green);text-align:right}
  .m-hooks .vr .n.w{color:var(--warn)}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`WHEN X HAPPENS, <span class="g">ALWAYS DO Y</span>`,
   body:`<div class="tl"><svg viewBox="0 0 1100 390" role="img" aria-label="A session timeline with four events: session start, before a tool runs, after an edit, when Claude stops. Each has a hook example."></svg></div>`,
   init(el){
     const svg=el.querySelector('svg'), y=70, xs=[90,380,670,960];
     const E=[
       {k:'Session starts',m:'SessionStart',t:['Load this week\'s','sprint notes.'],c:'cat sprint.md'},
       {k:'Before a tool runs',m:'PreToolUse',t:['Block a risky','command.'],c:'rm -rf, push to main',w:1},
       {k:'After an edit',m:'PostToolUse',t:['Run the formatter','on that file.'],c:'prettier --write'},
       {k:'Claude stops',m:'Stop',t:['Send me a','notification.'],c:'"PRD draft ready"'}];
     VIZ.s('line',{x1:20,y1:y,x2:1080,y2:y,class:'rail'},svg);
     const prog=VIZ.s('line',{x1:20,y1:y,x2:1080,y2:y,class:'prog'},svg);
     const dots=[], cards=[];
     E.forEach((e,k)=>{ const x=xs[k];
       const a=VIZ.s('text',{x,y:y-42,'text-anchor':'middle',class:'ek'},svg); a.textContent=e.k;
       const b=VIZ.s('text',{x,y:y-20,'text-anchor':'middle',class:'em'},svg); b.textContent=e.m;
       VIZ.s('line',{x1:x,y1:y+16,x2:x,y2:y+70,class:'stem'},svg);
       dots.push(VIZ.s('circle',{cx:x,cy:y,r:14,class:'ev on'},svg));
       const g=VIZ.s('g',{class:'card on'},svg); cards.push(g);
       VIZ.s('rect',{x:x-125,y:y+70,width:250,height:150,rx:12},g);
       const h=VIZ.s('text',{x:x-105,y:y+102,class:'cc'},g); h.textContent='hook';
       e.t.forEach((s,j)=>{ const t=VIZ.s('text',{x:x-105,y:y+132+j*24,class:'ct'},g); t.textContent=s; });
       const c=VIZ.s('text',{x:x-105,y:y+196,class:e.w?'cw':'cc'},g); c.textContent=e.c;
     });
     const r=VIZ.s('text',{x:550,y:y+290,'text-anchor':'middle',class:'svg-t',style:'font-size:17px'},svg);
     r.textContent='A hook is code. It runs every time, no exceptions.';
     let raf;
     VIZ.onShow(el,()=>{
       cancelAnimationFrame(raf); if(VIZ.reduced) return;
       const t0=performance.now(), D=3600;
       const step=now=>{ const p=Math.min(1,(now-t0)/D), x=20+p*1060;
         prog.setAttribute('x2',x);
         xs.forEach((X,k)=>{ const on=x>=X; dots[k].classList.toggle('on',on); cards[k].classList.toggle('on',on); cards[k].style.opacity=on?1:.35; });
         if(p<1) raf=requestAnimationFrame(step); };
       raf=requestAnimationFrame(step);
     });
   }},
  {sec:'CLAUDE CODE', cls:'viz', title:`PROMPTS ASK. <span class="g">HOOKS ENFORCE.</span>`,
   body:`<div class="vs">
     <div class="vr a-fade" style="--i:0"><div class="k">A line in CLAUDE.md<span>"Always run the formatter."</span></div>
       <div class="runs"><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i></div><div class="n w">8/10</div></div>
     <div class="vr g a-fade" style="--i:2"><div class="k">A PostToolUse hook<span>prettier --write after every edit</span></div>
       <div class="runs"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="n">10/10</div></div></div>
     <div class="lead a-fade" style="--i:4;margin-top:28px">A prompt is a <span class="w">suggestion</span> the model weighs. A hook is <span class="g">code that always runs.</span> Use hooks for rules that must never slip.</div>
     <div class="src"><b>Runs:</b> illustrative</div>`}
  ]
});
