MOD({
  id:'memory-types', title:'Four kinds of AI memory', cluster:'foundations', fits:[1,2], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-memory-types .mm{display:grid;grid-template-columns:1.55fr 1fr;gap:3vw;align-items:center}
  .m-memory-types svg{width:100%;height:54vh;display:block;overflow:visible}
  .m-memory-types .ax{stroke:var(--c-55555b);stroke-width:2}
  .m-memory-types .axl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:15px;fill:var(--fg)}
  .m-memory-types .tk{font-family:var(--m);font-size:13.5px;fill:var(--muted)}
  .m-memory-types .bub{fill:var(--surface);stroke:var(--muted);stroke-width:2}
  .m-memory-types .bub.on{fill:color-mix(in srgb,var(--green) 12%,transparent);stroke:var(--green);stroke-width:2.5}
  .m-memory-types .bk{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:19px;fill:var(--fg)}
  .m-memory-types .bk.on{fill:var(--green)}
  .m-memory-types .bd{font-family:var(--b);font-size:14px;fill:var(--muted)}
  .m-memory-types .ly{display:flex;flex-direction:column;gap:10px}
  .m-memory-types .ly-row{display:grid;grid-template-columns:330px 1fr;gap:26px;align-items:center}
  .m-memory-types .ly-b{border:1.5px solid var(--muted);border-radius:10px;padding:14px 18px;background:var(--surface);font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:20px;justify-self:center}
  .m-memory-types .ly-b small{display:block;font-family:var(--m);font-weight:400;text-transform:none;letter-spacing:0;font-size:13px;color:var(--muted);margin-top:3px}
  .m-memory-types .ly-row.on .ly-b{border-color:var(--green);color:var(--green);background:color-mix(in srgb,var(--green) 8%,transparent)}
  .m-memory-types .ly-s{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:center;border-left:3px solid var(--line);padding-left:20px}
  .m-memory-types .ly-s .sy{font-size:17px;color:var(--fg);line-height:1.35}
  .m-memory-types .ly-s .sy:before{content:"\\201C"} .m-memory-types .ly-s .sy:after{content:"\\201D"}
  .m-memory-types .ly-s .fx{font-size:15px;color:var(--muted);line-height:1.35}
  .m-memory-types .ly-s .fx b{color:var(--green);font-family:var(--h);text-transform:uppercase;letter-spacing:.06em;font-size:14px;display:block}
  .m-memory-types .ly-hd{display:grid;grid-template-columns:330px 1fr 1fr;gap:26px;font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.12em;font-size:14px;color:var(--muted);margin-bottom:4px}
  .m-memory-types .ly-hd span:nth-child(2){padding-left:23px}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`FOUR KINDS OF <span class="g">AI MEMORY</span>`,
   body:`<div class="mm"><div><svg viewBox="0 0 700 420" role="img" aria-label="Map of four memory kinds by how long they last and how easily you can change them"></svg></div>
     <div><div class="lead">The model's own memory is <b>frozen</b>. Everything else, <span class="g">you control</span>.</div>
       <div class="stat-cap" style="margin-top:18px;max-width:440px">Chat context is easy but short-lived. <b>Files like CLAUDE.md</b> are easy to edit <b>and</b> they last. That is your best lever.</div>
       <div class="legend" style="margin-top:20px"><span><i class="g"></i>your best lever</span><span><i class="l"></i>other memory</span></div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=70, X1=680, Y0=20, Y1=360;
     VIZ.s('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,class:'ax'},svg); VIZ.s('line',{x1:X0,x2:X0,y1:Y0,y2:Y1,class:'ax'},svg);
     VIZ.s('path',{d:`M${X1-10} ${Y1-6} L${X1} ${Y1} L${X1-10} ${Y1+6}`,fill:'none',class:'ax'},svg);
     VIZ.s('path',{d:`M${X0-6} ${Y0+10} L${X0} ${Y0} L${X0+6} ${Y0+10}`,fill:'none',class:'ax'},svg);
     VIZ.s('text',{x:(X0+X1)/2,y:Y1+52,'text-anchor':'middle',class:'axl'},svg).textContent='how long it lasts';
     [['this chat',X0+60],['many sessions',(X0+X1)/2],['until the next model',X1-60]].forEach(t=>VIZ.s('text',{x:t[1],y:Y1+24,'text-anchor':'middle',class:'tk'},svg).textContent=t[0]);
     const yl=VIZ.s('text',{x:X0-44,y:(Y0+Y1)/2,'text-anchor':'middle',class:'axl',transform:`rotate(-90 ${X0-44} ${(Y0+Y1)/2})`},svg); yl.textContent='easy for you to change';
     VIZ.s('text',{x:X0-14,y:Y0+14,'text-anchor':'end',class:'tk'},svg).textContent='easy';
     VIZ.s('text',{x:X0-14,y:Y1-4,'text-anchor':'end',class:'tk'},svg).textContent='hard';
     const B=[
       {x:185,y:95,r:62,k:'Context',d:['this chat:','you type it'],on:0},
       {x:520,y:100,r:82,k:'Files',d:['CLAUDE.md, project','memory: you edit'],on:1},
       {x:430,y:235,r:66,k:'Retrieved',d:['search, RAG:','update the docs'],on:0},
       {x:600,y:295,r:56,k:'Weights',d:['training:','only the lab'],on:0}];
     B.forEach((b,i)=>{
       const g=VIZ.s('g',{class:'a-pop',style:`--i:${i*2};transform-box:fill-box;transform-origin:center`},svg);
       VIZ.s('circle',{cx:b.x,cy:b.y,r:b.r,class:'bub'+(b.on?' on':'')},g);
       VIZ.s('text',{x:b.x,y:b.y-8,'text-anchor':'middle',class:'bk'+(b.on?' on':'')},g).textContent=b.k;
       b.d.forEach((l,j)=>VIZ.s('text',{x:b.x,y:b.y+14+j*17,'text-anchor':'middle',class:'bd'},g).textContent=l);
     });
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`WHICH MEMORY <span class="g">DO YOU FIX?</span>`,
   body:`<div class="ly-hd"><span style="text-align:center">memory</span><span>you hear</span><span>the fix</span></div>
     <div class="ly">
       <div class="ly-row a-fade" style="--i:0"><div class="ly-b" style="width:210px">Context<small>this chat</small></div><div class="ly-s"><div class="sy">It forgot what we agreed an hour ago.</div><div class="fx"><b>Restate or restart</b>Paste the decision again, or open a fresh chat.</div></div></div>
       <div class="ly-row on a-fade" style="--i:1"><div class="ly-b" style="width:250px">Files<small>CLAUDE.md, project memory</small></div><div class="ly-s"><div class="sy">It never uses our product names.</div><div class="fx"><b>Write it down once</b>Add a glossary to the project file.</div></div></div>
       <div class="ly-row a-fade" style="--i:2"><div class="ly-b" style="width:290px">Retrieved<small>search, RAG, connectors</small></div><div class="ly-s"><div class="sy">It quoted last year's pricing page.</div><div class="fx"><b>Fix the source</b>Update or remove the old doc.</div></div></div>
       <div class="ly-row a-fade" style="--i:3"><div class="ly-b" style="width:330px">Weights<small>training</small></div><div class="ly-s"><div class="sy">It does not know about last month's launch.</div><div class="fx"><b>Give it the facts</b>You cannot retrain it. Attach or search.</div></div></div></div>`}
  ]
});
