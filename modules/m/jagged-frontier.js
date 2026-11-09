MOD({
  id:'jagged-frontier', title:'The uneven edge', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-jagged-frontier svg{width:100%;display:block;overflow:visible}
  .m-jagged-frontier .jf svg{height:52vh}
  .m-jagged-frontier .hl{stroke:var(--fg);stroke-width:2.5;stroke-dasharray:10 7}
  .m-jagged-frontier .ai{fill:none;stroke:var(--green);stroke-width:4;stroke-linejoin:round;filter:drop-shadow(0 0 6px color-mix(in srgb,var(--green) 45%,transparent))}
  .m-jagged-frontier .zoneA{fill:color-mix(in srgb,var(--green) 7%,transparent)}
  .m-jagged-frontier .zoneB{fill:color-mix(in srgb,var(--warn) 8%,transparent)}
  .m-jagged-frontier .pt{fill:var(--green)}
  .m-jagged-frontier .pt.w{fill:var(--warn)}
  .m-jagged-frontier .tk{font-family:var(--b);font-size:14px;fill:var(--fg-2)}
  .m-jagged-frontier .tk.w{fill:var(--warn)}
  .m-jagged-frontier .lb{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:15px;fill:var(--fg);paint-order:stroke;stroke:var(--bg);stroke-width:6px}
  .m-jagged-frontier .lb.g{fill:var(--green)} .m-jagged-frontier .lb.w{fill:var(--warn)}
  .m-jagged-frontier .foot{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-top:8px}
  .m-jagged-frontier .foot .lead{max-width:none;font-size:22px}
  .m-jagged-frontier .db{display:grid;grid-template-columns:1fr 1fr;gap:3vw}
  .m-jagged-frontier .db .card{padding:20px 24px}
  .m-jagged-frontier .db .tag{font-size:15px}
  .m-jagged-frontier .db .card.w{border-color:var(--warn);box-shadow:0 0 0 1px color-mix(in srgb,var(--warn) 25%,transparent)}
  .m-jagged-frontier .db .card.w .tag{color:var(--warn)}
  .m-jagged-frontier .db svg{height:34vh}
  .m-jagged-frontier .bv{font-family:var(--h);font-weight:900;font-size:30px;fill:var(--green)}
  .m-jagged-frontier .bv.w{fill:var(--warn)}
  .m-jagged-frontier .bl{font-family:var(--b);font-size:15px;fill:var(--muted)}
  .m-jagged-frontier .src{font-size:14px;color:var(--muted);text-transform:none;letter-spacing:0;margin-top:14px}
  .m-jagged-frontier .src b{color:var(--fg)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`AI SKILL IS <span class="g">UNEVEN</span>`,
   body:`<div class="jf"><svg viewBox="0 0 1120 400" role="img" aria-label="An uneven green line across ten tasks, above a dashed human line on some tasks and below it on others"></svg></div>
     <div class="foot"><div class="lead">Superhuman on one task, <span class="w">weak on the next one</span>. You cannot guess which. <span class="g">Test it.</span></div><span class="chip">task scores illustrative</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=40, X1=1100, Y0=30, Y1=300, hY=170;
     const T=[['Draft a','press release',.88],['Summarise','40 interviews',.92],['Count letters','in a word',.25],['Brainstorm','50 names',.95],['Know this','week\'s news',.18],
              ['Translate','a help page',.86],['Write a','SQL query',.80],['Read a dense','chart image',.42],['Long math,','no tools',.48],['Guess what','your CEO wants',.28]];
     const step=(X1-X0)/T.length, yv=v=>Y1-v*(Y1-Y0-44);
     VIZ.s('rect',{x:X0,y:Y0,width:X1-X0,height:hY-Y0,class:'zoneA'},svg);
     VIZ.s('rect',{x:X0,y:hY,width:X1-X0,height:Y1-hY,class:'zoneB'},svg);
     VIZ.s('text',{x:X0+12,y:Y0+22,class:'lb g'},svg).textContent='better than a skilled person';
     VIZ.s('text',{x:X0+12,y:Y1-12,class:'lb w'},svg).textContent='worse than a skilled person';
     VIZ.s('line',{x1:X0,x2:X1,y1:hY,y2:hY,class:'hl'},svg);
     VIZ.s('text',{x:X1,y:hY-10,'text-anchor':'end',class:'lb'},svg).textContent='skilled human';
     const pts=T.map((t,i)=>[X0+step*(i+.5), yv(t[2])]);
     VIZ.s('path',{d:'M'+pts.map(p=>p.map(n=>n.toFixed(1)).join(' ')).join(' L'),class:'ai a-draw',pathLength:1000},svg);
     T.forEach((t,i)=>{
       const [x,y]=pts[i], low=y>hY;
       VIZ.s('circle',{cx:x,cy:y,r:8,class:'pt a-pop'+(low?' w':''),style:`--i:${i+4};transform-box:fill-box;transform-origin:center`},svg);
       VIZ.s('text',{x,y:Y1+26,'text-anchor':'middle',class:'tk'+(low?' w':'')},svg).textContent=t[0];
       VIZ.s('text',{x,y:Y1+44,'text-anchor':'middle',class:'tk'+(low?' w':'')},svg).textContent=t[1];
     });
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`INSIDE THE LINE IT HELPS. <span class="w">OUTSIDE, IT HURTS.</span>`,
   body:`<div class="db">
     <div class="card good a-fade" style="--i:0"><div class="tag">Task inside the edge</div><svg class="in" viewBox="0 0 520 250" role="img" aria-label="Consultants with AI: 12.2% more tasks, 25.1% faster, over 40% higher quality"></svg></div>
     <div class="card w a-fade" style="--i:2"><div class="tag">Task outside the edge</div><svg class="out" viewBox="0 0 520 250" role="img" aria-label="Consultants with AI were 19 percentage points less likely to be correct"></svg></div></div>
     <div class="src"><b>Source:</b> Dell'Acqua et al. 2023, Harvard Business School and BCG. 758 consultants, with and without GPT-4.</div>`,
   init(el){
     const a=el.querySelector('svg.in'), b=el.querySelector('svg.out');
     const bars=[['more tasks done','+12.2%',12.2],['faster','+25.1%',25.1],['higher quality','+40%',40]], sc=8.5;
     bars.forEach((r,i)=>{ const y=20+i*78;
       VIZ.s('rect',{x:0,y,width:r[2]*sc,height:40,rx:6,fill:'var(--green)',class:'a-grow',style:`--i:${i+1};transform-box:fill-box`},a);
       VIZ.s('text',{x:r[2]*sc+12,y:y+30,class:'bv'},a).textContent=r[1];
       VIZ.s('text',{x:0,y:y+62,class:'bl'},a).textContent=r[0]; });
     VIZ.s('line',{x1:0,x2:520,y1:60,y2:60,stroke:'var(--c-55555b)','stroke-width':2},b);
     VIZ.s('rect',{x:40,y:60,width:120,height:19*8.5,rx:6,fill:'var(--warn)',class:'a-grow',style:'--i:4;transform-box:fill-box;transform-origin:top;animation-name:m-rise'},b);
     VIZ.s('text',{x:180,y:150,class:'bv w'},b).textContent='-19 points';
     VIZ.s('text',{x:180,y:178,class:'bl'},b).textContent='less likely to be correct';
     VIZ.s('text',{x:180,y:200,class:'bl'},b).textContent='than people without AI';
     VIZ.s('text',{x:40,y:44,class:'bl'},b).textContent='people without AI';
   }}
  ]
});
