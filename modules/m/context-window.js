MOD({
  id:'context-window', title:'The context window, sized', cluster:'foundations', fits:[1,2], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-context-window svg{width:100%;display:block;overflow:visible}
  .m-context-window .cw svg{height:50vh}
  .m-context-window .win{fill:none;stroke:var(--fg);stroke-width:2.5}
  .m-context-window .win.full{stroke:var(--warn)}
  .m-context-window .it{transition:transform .6s cubic-bezier(.3,1.1,.4,1),opacity .4s}
  .m-context-window .it rect{fill:var(--surface);stroke:var(--c-55555b);stroke-width:1.5}
  .m-context-window .it text{font-family:var(--b);font-size:15px;fill:var(--fg)}
  .m-context-window .it .sm{font-family:var(--m);font-size:12.5px;fill:var(--muted)}
  .m-context-window .it.pin rect{stroke:var(--fg)}
  .m-context-window .it.q rect{fill:var(--green);stroke:var(--green)}
  .m-context-window .it.q text{fill:var(--bg);font-weight:600}
  .m-context-window .it.q .sm{fill:var(--c-333333)}
  .m-context-window .it.out rect{stroke:var(--warn);stroke-dasharray:5 4;fill:transparent}
  .m-context-window .it.out text{fill:var(--warn)}
  .m-context-window .cap{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:16px;fill:var(--fg)}
  .m-context-window .cap.w{fill:var(--warn)}
  .m-context-window .cap.m{fill:var(--muted)}
  .m-context-window .meter-t{font-family:var(--m);font-size:14px;fill:var(--muted)}
  .m-context-window .ctl{margin-top:4px}
  .m-context-window .lm{display:grid;grid-template-columns:1.5fr 1fr;gap:3.5vw;align-items:center}
  .m-context-window .lm svg{height:50vh}
  .m-context-window .ax{stroke:var(--c-55555b);stroke-width:2}
  .m-context-window .crv{fill:none;stroke:var(--green);stroke-width:5;stroke-linecap:round}
  .m-context-window .lab{font-family:var(--m);font-size:14px;fill:var(--muted)}
  .m-context-window .axl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:15px;fill:var(--fg)}
  .m-context-window .src{font-size:14px;color:var(--muted);text-transform:none;letter-spacing:0}
  .m-context-window .src b{color:var(--fg)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`THE MODEL'S <span class="g">DESK</span> HAS A FIXED SIZE`,
   body:`<div class="cw"><svg viewBox="0 0 1100 360" role="img" aria-label="A strip fills with system prompt, files, chat turns and your question. When full, the oldest chat turns fall out."></svg></div>
     <div class="ctl"><button type="button">replay</button><span>Everything the model "sees" must fit on the desk. Size is counted in tokens: word pieces.</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), X=40, Y=110, W=1020, H=96, G=8, cap=W-2*G;
     VIZ.s('text',{x:X,y:Y-22,class:'cap'},svg).textContent='Context window';
     const fill=VIZ.s('text',{x:X+W,y:Y-22,'text-anchor':'end',class:'meter-t'},svg);
     const win=VIZ.s('rect',{x:X,y:Y,width:W,height:H,rx:12,class:'win'},svg);
     const outT=VIZ.s('text',{x:X,y:Y+H+56,class:'cap w'},svg); outT.textContent='Fell out: the model no longer sees these';
     const D=[
       ['sys','System prompt','set by the app',134,'pin'],['md','Your instructions','CLAUDE.md, project',150,'pin'],
       ['f1','PRD.pdf','attached file',118,'pin'],['f2','Interviews.docx','attached file',150,'pin'],
       ['t1','Turn 1','chat',80,'chat'],['t2','Turn 2','chat',80,'chat'],['t3','Turn 3','chat',80,'chat'],['t4','Turn 4','chat',80,'chat'],
       ['t5','Turn 5','chat',80,'chat'],['t6','Turn 6','chat',80,'chat'],['q','Your question','newest',136,'q']];
     const G2={};
     D.forEach(d=>{
       const g=VIZ.s('g',{class:'it '+(d[4]==='pin'?'pin':d[4]==='q'?'q':'')},svg);
       VIZ.s('rect',{x:0,y:0,width:d[3],height:H-2*G,rx:8},g);
       VIZ.s('text',{x:12,y:34},g).textContent=d[1];
       VIZ.s('text',{x:12,y:56,class:'sm'},g).textContent=d[2];
       G2[d[0]]={g,d};
     });
     function run(steps){
       const vis=[], out=[];
       const lay=()=>{
         let x=X+G, used=0; vis.forEach(k=>{ const it=G2[k]; it.g.style.transform=`translate(${x}px,${Y+G}px)`; it.g.style.opacity=1; it.g.classList.remove('out'); x+=it.d[3]+G; used+=it.d[3]+G; });
         let ox=X; out.forEach(k=>{ const it=G2[k]; it.g.style.transform=`translate(${ox}px,${Y+H+74}px)`; it.g.style.opacity=1; it.g.classList.add('out'); ox+=it.d[3]+G; });
         const pct=Math.min(100,Math.round(used/cap*100)); const full=out.length>0;
         fill.textContent=full?'full: oldest content drops':'used '+pct+'%';
         win.classList.toggle('full',full); outT.style.opacity=full?1:0;
       };
       const add=k=>{ vis.push(k); let w=vis.reduce((s,j)=>s+G2[j].d[3]+G,0);
         while(w>cap){ const i=vis.findIndex(j=>G2[j].d[4]==='chat'); const [r]=vis.splice(i,1); out.push(r); w-=G2[r].d[3]+G; } };
       D.forEach(d=>{ const it=G2[d[0]]; it.g.style.opacity=0; it.g.style.transform=`translate(${X+W-it.d[3]}px,${Y-70}px)`; });
       if(!steps){ D.forEach(d=>add(d[0])); lay(); return; }
       let i=0; fill.textContent='used 0%'; win.classList.remove('full'); outT.style.opacity=0;
       const tick=()=>{ if(i>=D.length) return; add(D[i++][0]); lay(); setTimeout(tick,i<4?420:620); };
       setTimeout(tick,300);
     }
     run(false);
     el.querySelector('button').addEventListener('click',()=>run(true));
     VIZ.onShow(el,()=>{ if(!VIZ.reduced) run(true); });
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`A FULL DESK IS <span class="w">A MESSY DESK</span>`,
   body:`<div class="lm"><div><svg viewBox="0 0 640 380" role="img" aria-label="U-shaped curve: facts at the start or end of a long context are used best, facts in the middle are missed more often"></svg></div>
     <div><div class="lead">Models use the <span class="g">start and end</span> of a long context best. The middle gets <span class="w">missed more often</span>.</div>
       <div class="stat-cap" style="margin-top:18px;max-width:440px"><b>Put the key ask at the end.</b> Attach the 3 files that matter, not all 30. Start a fresh chat for a new topic.</div>
       <div class="src" style="margin-top:22px"><b>Source:</b> Liu et al. 2023, "Lost in the Middle". Curve illustrative.</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=70, X1=620, Y0=30, Y1=320;
     VIZ.s('rect',{x:240,y:Y0,width:210,height:Y1-Y0,fill:'color-mix(in srgb,var(--warn) 10%,transparent)'},svg);
     VIZ.s('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,class:'ax'},svg); VIZ.s('line',{x1:X0,x2:X0,y1:Y0,y2:Y1,class:'ax'},svg);
     let d=''; for(let i=0;i<=50;i++){ const t=i/50, x=X0+10+t*(X1-X0-20), y=70+200*Math.pow(Math.sin(Math.PI*t),1.6)*(1-.15*t); d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1); }
     VIZ.s('path',{d,class:'crv a-draw',pathLength:1000},svg);
     [['start',X0+10,'start'],['middle',(X0+X1)/2,'middle'],['end',X1-10,'end']].forEach(a=>{ const t=VIZ.s('text',{x:a[1],y:Y1+24,'text-anchor':'middle',class:'lab'},svg); t.textContent=a[0]; });
     VIZ.s('text',{x:(X0+X1)/2,y:Y1+52,'text-anchor':'middle',class:'axl'},svg).textContent='where the key fact sits';
     const yl=VIZ.s('text',{x:X0-16,y:(Y0+Y1)/2,'text-anchor':'middle',class:'axl',transform:`rotate(-90 ${X0-16} ${(Y0+Y1)/2})`},svg); yl.textContent='chance it is used';
     VIZ.s('text',{x:(X0+X1)/2,y:Y0+22,'text-anchor':'middle',class:'lab',fill:'var(--warn)',style:'fill:var(--warn)'},svg).textContent='lost in the middle';
   }}
  ]
});
