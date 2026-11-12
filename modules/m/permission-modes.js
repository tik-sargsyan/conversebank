MOD({
  id:'permission-modes', title:'Permission modes: how much it may do alone', cluster:'claude', fits:[2,6], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-permission-modes .pm{display:grid;grid-template-columns:1.1fr 1fr;gap:4vw;align-items:center}
  .m-permission-modes .pm-st{height:min(50vh,380px)}
  .m-permission-modes .pm-st svg{width:100%;height:100%;overflow:visible}
  .m-permission-modes .stp{fill:var(--surface);stroke:var(--dim);stroke-width:2;cursor:pointer;transition:fill .3s ease,stroke .3s ease}
  .m-permission-modes .stp.on{fill:var(--green-a);stroke:var(--green)}
  .m-permission-modes .stp.w.on{fill:color-mix(in srgb,var(--warn) 12%,transparent);stroke:var(--warn)}
  .m-permission-modes .sl{font-family:var(--m);font-size:15px;fill:var(--muted);pointer-events:none}
  .m-permission-modes .sl.on{fill:var(--fg)}
  .m-permission-modes .pin{fill:var(--green);transition:transform .5s cubic-bezier(.3,1.4,.4,1)}
  .m-permission-modes .pin.w{fill:var(--warn)}
  .m-permission-modes .pm-k{font-family:var(--m);font-size:clamp(24px,2.6vw,34px);color:var(--green)}
  .m-permission-modes .pm-k.w{color:var(--warn)}
  .m-permission-modes .pm-row{margin-top:18px}
  .m-permission-modes .pm-row .h{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:14px;color:var(--muted);margin-bottom:6px}
  .m-permission-modes .pm-row .v{font-size:19px;line-height:1.35;color:var(--fg);min-height:52px}
  .m-permission-modes .meter{height:14px;border-radius:7px}
  .m-permission-modes .meter b{transition:width .6s cubic-bezier(.2,.8,.2,1)}
  .m-permission-modes .lanes{position:relative;height:min(46vh,340px)}
  .m-permission-modes .lanes svg{width:100%;height:100%;overflow:visible}
  .m-permission-modes .ln{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:18px;letter-spacing:.1em;fill:var(--muted)}
  .m-permission-modes .bx{fill:var(--surface);stroke:var(--dim);stroke-width:2}
  .m-permission-modes .bx.g{stroke:var(--green)}
  .m-permission-modes .bm{font-family:var(--m);font-size:15px;fill:var(--green)}
  .m-permission-modes .bt{font-family:var(--b);font-size:16px;fill:var(--fg)}
  .m-permission-modes .ar{fill:none;stroke:var(--subtle);stroke-width:2}
  .m-permission-modes .warnline{margin-top:10px;border-left:4px solid var(--warn);padding:10px 16px;background:var(--surface);border-radius:8px;font-size:17px}
  .m-permission-modes .warnline b{color:var(--warn);font-family:var(--m);font-weight:400}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`HOW MUCH MAY IT <span class="g">DO ALONE?</span>`,
   body:`<div class="pm"><div class="pm-st"><svg viewBox="0 0 560 380" role="img" aria-label="A staircase of five permission modes from plan at the bottom to bypassPermissions at the top."></svg></div>
     <div><div class="pm-k"></div>
       <div class="pm-row"><div class="h">Who decides</div><div class="v" data-k="who"></div></div>
       <div class="pm-row"><div class="h">Risk if it goes wrong</div><div class="meter w"><b></b></div></div>
       <div class="pm-row"><div class="h">Use it when</div><div class="v" data-k="use"></div></div>
       <div class="ctl"><input type="range" min="0" max="4" step="1" value="1" aria-label="Permission mode"><output></output></div></div></div>`,
   init(el){
     const M=[
       {k:'plan', who:'You. Claude only reads and proposes a plan.', r:8, use:'You start a feature or open an unknown project.'},
       {k:'default', who:'You approve each edit and each command.', r:25, use:'Your first weeks. Any task you have not done before.'},
       {k:'acceptEdits', who:'Claude edits files. Commands still ask you.', r:50, use:'You approved the plan and the files are in git.'},
       {k:'auto', who:'Claude, inside safety rules and classifiers.', r:72, use:'A long, well-scoped job you trust. Check the result.'},
       {k:'bypassPermissions', who:'Nobody. There are no prompts.', r:100, use:'Only in a throwaway test space. Never on real files.', w:1}];
     const svg=el.querySelector('svg'), sw=104, sh=62;
     const steps=M.map((m,k)=>{
       const x=k*sw, y=380-(k+1)*sh, r=VIZ.s('rect',{x,y,width:sw-6,height:(k+1)*sh,rx:8,class:'stp'+(m.w?' w':'')},svg);
       r.addEventListener('click',()=>set(k));
       const t=VIZ.s('text',{x:x+8,y:y+24,class:'sl'},svg);
       (m.k==='acceptEdits'?['accept','Edits']:m.k==='bypassPermissions'?['bypass']:[m.k]).forEach((w,j)=>{ const ts=VIZ.s('tspan',{x:x+8,dy:j?18:0},t); ts.textContent=w; });
       return [r,t];
     });
     const pin=VIZ.s('circle',{cx:0,cy:0,r:11,class:'pin'},svg);
     const ax=VIZ.s('text',{x:0,y:16,class:'svg-t'},svg); ax.textContent='more autonomy';
     VIZ.s('path',{d:'M130 11 H190',stroke:'var(--dim)','stroke-width':2},svg);
     VIZ.s('path',{d:'M190 11 l-8 -5 v10 z',fill:'var(--dim)'},svg);
     ax.setAttribute('x',0); ax.setAttribute('y',16);
     const key=el.querySelector('.pm-k'), who=el.querySelector('[data-k=who]'), use=el.querySelector('[data-k=use]'), bar=el.querySelector('.meter b'), rng=el.querySelector('input'), out=el.querySelector('output');
     function set(k){
       const m=M[k]; rng.value=k; out.textContent=k+1+'/5';
       key.textContent=m.k; key.classList.toggle('w',!!m.w);
       who.textContent=m.who; use.textContent=m.use; bar.style.width=m.r+'%';
       steps.forEach(([r,t],j)=>{ r.classList.toggle('on',j===k); t.classList.toggle('on',j<=k); });
       pin.classList.toggle('w',!!m.w);
       pin.style.transform=`translate(${k*sw+(sw-6)/2}px,${380-(k+1)*sh+44}px)`;
     }
     rng.addEventListener('input',()=>set(+rng.value));
     el.addEventListener('keydown',e=>e.stopPropagation());
     set(1);
     VIZ.onShow(el,()=>{ if(VIZ.reduced) return; set(0); let k=0; const t=setInterval(()=>{ k++; set(k); if(k>=4){ clearInterval(t); setTimeout(()=>set(1),900); } },700); });
   }},
  {sec:'CLAUDE CODE', cls:'viz', title:`PLAN FIRST, <span class="g">THEN LET GO</span>`,
   body:`<div class="lanes"><svg viewBox="0 0 1100 330" role="img" aria-label="Two swim lanes, Claude and You. Plan mode, you approve, accept edits, you review."></svg></div>
     <div class="warnline a-fade" style="--i:8"><b>bypassPermissions</b> &nbsp;belongs in a sandbox (a throwaway test space) only. Not on your laptop, not on shared drives.</div>`,
   init(el){
     const svg=el.querySelector('svg');
     [['CLAUDE',75],['YOU',235]].forEach(([t,y])=>{ VIZ.s('line',{x1:0,y1:y+70,x2:1100,y2:y+70,stroke:'var(--c-1f1f22)','stroke-width':2},svg); const l=VIZ.s('text',{x:0,y:y+8,class:'ln'},svg); l.textContent=t; });
     const B=[
       {x:110,y:20,m:'plan',t:['Reads PRD and files.','Writes a plan.'],g:1},
       {x:370,y:180,m:'you',t:['Read, fix and','approve the plan.']},
       {x:630,y:20,m:'acceptEdits',t:['Makes the changes','without asking.'],g:1},
       {x:880,y:180,m:'you',t:['Review the result.','Ship or redo.']}];
     B.forEach((b,k)=>{
       if(k){ const p=B[k-1], x1=p.x+220, y1=p.y+55, x2=b.x, y2=b.y+55;
         VIZ.s('path',{d:`M${x1} ${y1} C${x1+30} ${y1} ${x2-30} ${y2} ${x2-8} ${y2}`,class:'ar a-draw',style:`--len:300;--i:${k*2}`},svg);
         VIZ.s('path',{d:`M${x2} ${y2} l-10 -6 v12 z`,fill:'var(--subtle)',class:'a-fade',style:`--i:${k*2}`},svg); }
       const g=VIZ.s('g',{class:'a-fade',style:`--i:${k*2}`},svg);
       VIZ.s('rect',{x:b.x,y:b.y,width:215,height:110,rx:12,class:'bx'+(b.g?' g':'')},g);
       const m=VIZ.s('text',{x:b.x+18,y:b.y+32,class:'bm'},g); m.textContent=b.m==='you'?'':b.m;
       if(b.m==='you') m.remove();
       b.t.forEach((s,j)=>{ const t=VIZ.s('text',{x:b.x+18,y:b.y+(b.m==='you'?45:62)+j*22,class:'bt'},g); t.textContent=s; });
     });
   }}
  ]
});
