MOD({
  id:'multimodal', title:'In and out: text, image, audio, code', cluster:'foundations', fits:[1,5], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-multimodal .hub svg{width:100%;height:54vh;display:block;overflow:visible}
  .m-multimodal .ln{fill:none;stroke:var(--fg);stroke-width:2.5}
  .m-multimodal .ln.g{stroke:var(--green);stroke-width:3.5}
  .m-multimodal .ln.d{stroke:var(--muted);stroke-dasharray:7 6}
  .m-multimodal .nd{fill:var(--surface);stroke:var(--fg);stroke-width:2}
  .m-multimodal .nd.g{stroke:var(--green);fill:color-mix(in srgb,var(--green) 10%,transparent)}
  .m-multimodal .nd.d{stroke:var(--muted);stroke-dasharray:6 5}
  .m-multimodal .nk{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:19px;fill:var(--fg)}
  .m-multimodal .nk.g{fill:var(--green)}
  .m-multimodal .nk.d{fill:var(--c-b9b9be)}
  .m-multimodal .ns{font-family:var(--b);font-size:14px;fill:var(--muted)}
  .m-multimodal .core{fill:var(--green)}
  .m-multimodal .core-t{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:30px;fill:var(--bg);letter-spacing:.02em}
  .m-multimodal .col{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.16em;font-size:14px;fill:var(--muted)}
  .m-multimodal .lg2{display:flex;gap:26px;font-size:14px;color:var(--muted);justify-content:center;margin-top:6px}
  .m-multimodal .lg2 i{display:inline-block;width:34px;height:0;border-top:3.5px solid var(--green);vertical-align:middle;margin-right:8px}
  .m-multimodal .lg2 i.d{border-top:2.5px dashed var(--muted)}
  .m-multimodal .tx{display:flex;flex-direction:column;gap:12px}
  .m-multimodal .tx-r{display:grid;grid-template-columns:70px 1fr 50px 1fr 150px;gap:16px;align-items:center;border:1px solid var(--line);border-radius:12px;padding:12px 18px;background:var(--surface)}
  .m-multimodal .badge{font-family:var(--m);font-size:13px;font-weight:600;border:1.5px solid var(--fg);border-radius:6px;padding:8px 0;text-align:center}
  .m-multimodal .tx-r .i{font-size:17px;color:var(--fg)}
  .m-multimodal .tx-r .a{font-family:var(--h);font-weight:800;color:var(--green);font-size:30px;text-align:center}
  .m-multimodal .tx-r .o{font-size:17px;color:var(--green)}
  .m-multimodal .tx-r .h{font-family:var(--m);font-size:13px;color:var(--muted);text-align:right}
  .m-multimodal .tx-r .h.d{color:var(--c-b9b9be)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`MANY THINGS IN, <span class="g">A FEW THINGS OUT</span>`,
   body:`<div class="hub"><svg viewBox="0 0 1100 400" role="img" aria-label="Hub diagram. Inputs on the left: text, images, PDFs, audio, screen. Outputs on the right: text and code from Claude itself, images and actions through tools."></svg></div>
     <div class="lg2"><span><i></i>Claude does it itself</span><span><i class="d"></i>through a tool or app feature</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), C=[550,200], R=78;
     VIZ.s('text',{x:150,y:18,'text-anchor':'middle',class:'col'},svg).textContent='in';
     VIZ.s('text',{x:950,y:18,'text-anchor':'middle',class:'col'},svg).textContent='out';
     const IN=[['Text','prompts, docs',''],['Images','screenshots, photos',''],['PDFs','reports, contracts',''],['Audio','via voice mode','d'],['Screen','screenshots, computer use','']];
     const OUT=[['Text','answers, drafts','g'],['Code','scripts, SQL, HTML','g'],['Images','via code or image tools','d'],['Actions','edit files, call apps','d']];
     const node=(x,y,n,side,i)=>{
       const w=210, h=56, g=VIZ.s('g',{class:'a-pop',style:`--i:${i};transform-box:fill-box;transform-origin:center`},svg);
       VIZ.s('rect',{x:x-w/2,y:y-h/2,width:w,height:h,rx:12,class:'nd '+n[2]},g);
       VIZ.s('text',{x:x-w/2+16,y:y-3,class:'nk '+n[2]},g).textContent=n[0];
       VIZ.s('text',{x:x-w/2+16,y:y+17,class:'ns'},g).textContent=n[1];
     };
     IN.forEach((n,i)=>{ const y=50+i*76, x=150;
       VIZ.s('path',{d:`M${x+105} ${y} C ${x+250} ${y}, ${C[0]-200} ${C[1]}, ${C[0]-R} ${C[1]}`,class:'ln a-draw'+(n[2]?' d':''),pathLength:1000,style:`--i:${i}`},svg); });
     OUT.forEach((n,i)=>{ const y=80+i*82, x=950;
       VIZ.s('path',{d:`M${C[0]+R} ${C[1]} C ${C[0]+200} ${C[1]}, ${x-250} ${y}, ${x-105} ${y}`,class:'ln a-draw'+(n[2]==='g'?' g':' d'),pathLength:1000,style:`--i:${i+6}`},svg); });
     IN.forEach((n,i)=>node(150,50+i*76,n,'in',i));
     OUT.forEach((n,i)=>node(950,80+i*82,n,'out',i+8));
     VIZ.s('circle',{cx:C[0],cy:C[1],r:R+18,fill:'color-mix(in srgb,var(--green) 10%,transparent)'},svg);
     VIZ.s('circle',{cx:C[0],cy:C[1],r:R,class:'core a-pop',style:'--i:5;transform-box:fill-box;transform-origin:center'},svg);
     VIZ.s('text',{x:C[0],y:C[1]+11,'text-anchor':'middle',class:'core-t'},svg).textContent='Claude';
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`PM WORK, <span class="g">ANY FORMAT IN</span>`,
   body:`<div class="tx">
     <div class="tx-r a-fade" style="--i:0"><div class="badge">IMG</div><div class="i">Screenshot of a competitor's pricing page</div><div class="a">›</div><div class="o">Comparison table</div><div class="h">text out</div></div>
     <div class="tx-r a-fade" style="--i:1"><div class="badge">IMG</div><div class="i">Photo of the workshop whiteboard</div><div class="a">›</div><div class="o">User stories, ready for Jira</div><div class="h">text out</div></div>
     <div class="tx-r a-fade" style="--i:2"><div class="badge">PDF</div><div class="i">A 40-page vendor contract</div><div class="a">›</div><div class="o">Risk list with clause numbers</div><div class="h">text out</div></div>
     <div class="tx-r a-fade" style="--i:3"><div class="badge">CSV</div><div class="i">Export of last quarter's signups</div><div class="a">›</div><div class="o">A chart for the exec update</div><div class="h d">code draws it</div></div>
     <div class="tx-r a-fade" style="--i:4"><div class="badge">TXT</div><div class="i">Notes from 12 user interviews</div><div class="a">›</div><div class="o">Insights posted to Slack</div><div class="h d">via a tool</div></div></div>`}
  ]
});
