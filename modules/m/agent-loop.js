MOD({
  id:'agent-loop', title:'The Claude Code loop', cluster:'claude', fits:[2,7], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-agent-loop .al{display:grid;grid-template-columns:1.2fr 1fr;gap:3vw;align-items:center}
  .m-agent-loop .al-c{height:min(56vh,420px)}
  .m-agent-loop .al-c svg{width:100%;height:100%;overflow:visible}
  .m-agent-loop .ring{fill:none;stroke:var(--c-2c2c30);stroke-width:3}
  .m-agent-loop .nd{fill:var(--surface);stroke:var(--fg);stroke-width:2}
  .m-agent-loop .nd.g{stroke:var(--green)}
  .m-agent-loop .nk{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.03em;fill:var(--fg)}
  .m-agent-loop .nn{font-family:var(--m);font-size:15px;fill:var(--green)}
  .m-agent-loop .orbit{transform-origin:260px 210px}
  .slide.active.m-agent-loop .orbit{animation:al-spin 6s linear infinite}
  @keyframes al-spin{to{transform:rotate(360deg)}}
  .m-agent-loop .dot{fill:var(--green);filter:drop-shadow(0 0 8px color-mix(in srgb,var(--green) 90%,transparent))}
  .m-agent-loop .human{fill:var(--bg);stroke:var(--fg);stroke-width:2;stroke-dasharray:5 5}
  .m-agent-loop .side .rung{grid-template-columns:120px 1fr;padding:12px 16px}
  .m-agent-loop .side .rung .k{font-size:17px}
  .m-agent-loop .side .rung .k.g{color:var(--green)}
  .m-agent-loop .tr{display:grid;grid-template-columns:90px repeat(4,1fr);gap:12px;align-items:stretch}
  .m-agent-loop .tr .h{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:15px;letter-spacing:.08em;color:var(--muted);padding:0 4px}
  .m-agent-loop .tr .lap{font-family:var(--h);font-weight:900;font-size:32px;color:var(--green);display:flex;align-items:center}
  .m-agent-loop .tr .c{border:1px solid var(--line);border-radius:10px;background:var(--surface);padding:14px 14px;font-size:17px;line-height:1.35;color:var(--fg)}
  .m-agent-loop .tr .c small{display:block;font-family:var(--m);font-size:13px;color:var(--muted);margin-top:4px}
  .m-agent-loop .tr .c.x{border-color:var(--dim);color:var(--muted);border-style:dashed}
  .m-agent-loop .tr .c.ok{border-color:var(--green)}
  .m-agent-loop .tr .c.you{border-color:var(--fg)}
  .m-agent-loop .task{font-family:var(--m);font-size:15px;color:var(--fg-2);border:1px solid var(--line);border-radius:10px;padding:10px 16px;background:var(--surface);margin-bottom:14px}
  .m-agent-loop .task b{color:var(--green);font-weight:600}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`IT WORKS IN <span class="g">A LOOP</span>`,
   body:`<div class="al"><div class="al-c"><svg viewBox="0 0 560 420" role="img" aria-label="A loop of four steps: gather context, plan, act with tools, check the result. A human checkpoint sits between plan and act."></svg></div>
     <div class="side ladder">
       <div class="rung a-fade" style="--i:1"><div class="k">1 Gather</div><div class="d">Reads files, docs, tickets. Builds context.</div></div>
       <div class="rung a-fade" style="--i:2"><div class="k">2 Plan</div><div class="d">Decides the next small step.</div></div>
       <div class="rung a-fade" style="--i:3"><div class="k">3 Act</div><div class="d">Uses a tool: edit a file, run a search, call Jira.</div></div>
       <div class="rung a-fade" style="--i:4"><div class="k">4 Check</div><div class="d">Looks at the result. Done? If not, go again.</div></div>
       <div class="rung a-fade" style="--i:5;border-color:var(--fg)"><div class="k g">You</div><div class="d">Approve the plan or a risky step. Stop it anytime.</div></div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), cx=260, cy=210, R=150;
     VIZ.s('circle',{cx,cy,r:R,class:'ring'},svg);
     const ct=VIZ.s('text',{x:cx,y:cy-6,'text-anchor':'middle',class:'nk'},svg); ct.textContent='your goal';
     const cs=VIZ.s('text',{x:cx,y:cy+20,'text-anchor':'middle',class:'svg-t'},svg); cs.textContent='repeat until done';
     const N=[['Gather',-90],['Plan',0],['Act',90],['Check',180]];
     // arrow heads along the ring, between nodes
     [-45,45,135,225].forEach(a=>{ const r=a*Math.PI/180, x=cx+R*Math.cos(r), y=cy+R*Math.sin(r);
       VIZ.s('path',{d:'M-7 -7 L5 0 L-7 7',fill:'none',stroke:'var(--subtle)','stroke-width':3,transform:`translate(${x} ${y}) rotate(${a+90})`},svg); });
     const orbit=VIZ.s('g',{class:'orbit'},svg);
     VIZ.s('circle',{cx:cx+R,cy,r:9,class:'dot'},orbit);
     N.forEach(([n,a],k)=>{ const r=a*Math.PI/180, x=cx+R*Math.cos(r), y=cy+R*Math.sin(r);
       const g=VIZ.s('g',{class:'a-pop',style:`--i:${k};transform-box:fill-box;transform-origin:center`},svg);
       VIZ.s('circle',{cx:x,cy:y,r:50,class:'nd'+(k===2?' g':'')},g);
       const t=VIZ.s('text',{x,y:y-2,'text-anchor':'middle',class:'nk'},g); t.textContent=n;
       const m=VIZ.s('text',{x,y:y+20,'text-anchor':'middle',class:'nn'},g); m.textContent=k+1; });
     // human checkpoint between plan (right) and act (bottom)
     const hx=cx+R*0.71+70, hy=cy+R*0.71+40;
     VIZ.s('line',{x1:cx+R*0.71,y1:cy+R*0.71,x2:hx-30,y2:hy-20,stroke:'var(--fg)','stroke-width':2,'stroke-dasharray':'4 5'},svg);
     VIZ.s('circle',{cx:hx,cy:hy,r:34,class:'human'},svg);
     const ht=VIZ.s('text',{x:hx,y:hy+7,'text-anchor':'middle',class:'nk'},svg); ht.textContent='You';
     // exit to done from check (left)
     VIZ.s('path',{d:`M${cx-R-50} ${cy} H${cx-R-100}`,stroke:'var(--green)','stroke-width':3},svg);
     VIZ.s('path',{d:`M${cx-R-108} ${cy} l12 -7 v14 z`,fill:'var(--green)'},svg);
     const dn=VIZ.s('text',{x:cx-R-112,y:cy-14,'text-anchor':'end',class:'nk svg-g'},svg); dn.textContent='done';
     if(VIZ.reduced) orbit.style.animation='none';
   }},
  {sec:'CLAUDE CODE', cls:'viz', title:`ONE TASK, <span class="g">TWO LAPS</span>`,
   body:`<div class="task a-fade" style="--i:0"><b>goal</b> Update the Q3 roadmap doc from this week's Jira tickets. Done = every shipped ticket is reflected.</div>
     <div class="tr">
       <div></div><div class="h">Gather</div><div class="h">Plan</div><div class="h">Act</div><div class="h">Check</div>
       <div class="lap a-fade" style="--i:1">LAP 1</div>
       <div class="c a-fade" style="--i:2">Reads roadmap.md. Pulls 14 tickets.<small>read file, Jira</small></div>
       <div class="c you a-fade" style="--i:3">3 changes proposed. You approve.<small>plan mode</small></div>
       <div class="c a-fade" style="--i:4">Edits 3 rows in the doc.<small>edit file</small></div>
       <div class="c x a-fade" style="--i:5">One shipped ticket is missing. Not done.<small>compare</small></div>
       <div class="lap a-fade" style="--i:6">LAP 2</div>
       <div class="c a-fade" style="--i:7">Finds the missing ticket.<small>Jira search</small></div>
       <div class="c a-fade" style="--i:8">Add one row.<small>small step</small></div>
       <div class="c a-fade" style="--i:9">Edits 1 row.<small>edit file</small></div>
       <div class="c ok a-fade" style="--i:10">All tickets match. Done.<small>stop</small></div></div>
     <div class="src" style="margin-top:12px"><b>Example:</b> illustrative trace</div>`}
  ]
});
