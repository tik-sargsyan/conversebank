MOD({
  id:'moravec', title:'Hard is easy, easy is hard', cluster:'foundations', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-moravec .mv{display:grid;grid-template-columns:1.45fr 1fr;gap:3vw;align-items:center}
  .m-moravec svg{width:100%;display:block;overflow:visible}
  .m-moravec .mv svg{height:54vh}
  .m-moravec .ax{stroke:var(--c-55555b);stroke-width:2}
  .m-moravec .axl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:15px;fill:var(--fg)}
  .m-moravec .zone{stroke-width:2;stroke-dasharray:6 5}
  .m-moravec .zA{fill:color-mix(in srgb,var(--warn) 7%,transparent);stroke:var(--warn)}
  .m-moravec .zB{fill:color-mix(in srgb,var(--green) 7%,transparent);stroke:var(--green)}
  .m-moravec .zt{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:16px}
  .m-moravec .zt.w{fill:var(--warn)} .m-moravec .zt.g{fill:var(--green)}
  .m-moravec .it{font-family:var(--b);font-size:15px;fill:var(--fg)}
  .m-moravec .dt{fill:var(--fg)}
  .m-moravec .dt.w{fill:var(--warn)} .m-moravec .dt.g{fill:var(--green)}
  .m-moravec .src{font-size:14px;color:var(--muted);text-transform:none;letter-spacing:0;margin-top:22px}
  .m-moravec .src b{color:var(--fg)}
  .m-moravec .ev svg{height:44vh}
  .m-moravec .evl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:19px;fill:var(--fg)}
  .m-moravec .evv{font-family:var(--m);font-size:15px;fill:var(--muted)}
  .m-moravec .evv.w{fill:var(--warn)} .m-moravec .evv.g{fill:var(--green)}
  .m-moravec .tk{font-family:var(--m);font-size:13px;fill:var(--muted)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`HARD IS EASY, <span class="w">EASY IS HARD</span>`,
   body:`<div class="mv"><div><svg viewBox="0 0 660 430" role="img" aria-label="Map: tasks easy for humans but hard for AI (fold laundry, walk over rubble) sit top left. Tasks hard for humans but easy for AI (chess, summarise 300 pages) sit bottom right."></svg></div>
     <div><div class="lead">What a 4-year-old does without thinking is <span class="w">hard for machines</span>. What experts train for years to do is often <span class="g">easy for them</span>.</div>
       <div class="stat-cap" style="margin-top:18px;max-width:440px">So do not judge AI by "how hard is this <b>for me</b>". Judge it by the task.</div>
       <div class="src"><b>Source:</b> Moravec, "Mind Children", 1988. Positions illustrative.</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=60, X1=640, Y0=20, Y1=370;
     VIZ.s('rect',{x:X0+14,y:Y0+10,width:270,height:180,rx:14,class:'zone zA a-fade',style:'--i:0'},svg);
     VIZ.s('rect',{x:X1-290,y:Y1-190,width:282,height:178,rx:14,class:'zone zB a-fade',style:'--i:4'},svg);
     VIZ.s('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,class:'ax'},svg); VIZ.s('line',{x1:X0,x2:X0,y1:Y0,y2:Y1,class:'ax'},svg);
     VIZ.s('path',{d:`M${X1-10} ${Y1-6} L${X1} ${Y1} L${X1-10} ${Y1+6}`,fill:'none',class:'ax'},svg);
     VIZ.s('path',{d:`M${X0-6} ${Y0+10} L${X0} ${Y0} L${X0+6} ${Y0+10}`,fill:'none',class:'ax'},svg);
     VIZ.s('text',{x:(X0+X1)/2,y:Y1+34,'text-anchor':'middle',class:'axl'},svg).textContent='hard for humans';
     VIZ.s('text',{x:X0-16,y:(Y0+Y1)/2,'text-anchor':'middle',class:'axl',transform:`rotate(-90 ${X0-16} ${(Y0+Y1)/2})`},svg).textContent='hard for AI';
     VIZ.s('text',{x:X0+32,y:Y0+40,class:'zt w'},svg).textContent='easy for us, hard for AI';
     VIZ.s('text',{x:X1-272,y:Y1-160,class:'zt g'},svg).textContent='hard for us, easy for AI';
     const A=[['Fold laundry',96,90],['Walk over rubble',112,122],['Tidy a messy room',100,154],['Load a dishwasher',126,186]];
     const B=[['Win at chess',372,240],['Summarise 300 pages',386,272],['Multiply 12-digit numbers',372,304],['Translate 20 languages',388,336]];
     A.forEach((a,i)=>{ const g=VIZ.s('g',{class:'a-fade',style:`--i:${i+1}`},svg); VIZ.s('circle',{cx:a[1],cy:a[2]-5,r:6,class:'dt w'},g); VIZ.s('text',{x:a[1]+14,y:a[2],class:'it'},g).textContent=a[0]; });
     B.forEach((b,i)=>{ const g=VIZ.s('g',{class:'a-fade',style:`--i:${i+5}`},svg); VIZ.s('circle',{cx:b[1],cy:b[2]-5,r:6,class:'dt g'},g); VIZ.s('text',{x:b[1]+14,y:b[2],class:'it'},g).textContent=b[0]; });
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`WHY: EVOLUTION HAD <span class="g">A HEAD START</span>`,
   body:`<div class="ev"><svg viewBox="0 0 1100 330" role="img" aria-label="Log-scale bars: how long evolution or culture has tuned each skill. Seeing and moving: hundreds of millions of years. Chess: about 1,500 years."></svg></div>
     <div class="lead a-fade" style="--i:8;margin-top:14px;max-width:none">Skills we find effortless had <span class="w">hundreds of millions of years</span> of tuning. Chess had about 1,500. <span class="g">Short history = easier to copy.</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=290, X1=1080, lg=v=>X0+(Math.log10(v)-2)/(9-2)*(X1-X0);
     const R=[['Seeing and moving','~500 million years',5e8,'w'],['Grasping with hands','~50 million years',5e7,'w'],['Spoken language','~100,000 years',1e5,''],['Writing','~5,000 years',5e3,'g'],['Chess','~1,500 years',1.5e3,'g']];
     [2,3,4,5,6,7,8,9].forEach(p=>{ const x=lg(Math.pow(10,p)); VIZ.s('line',{x1:x,x2:x,y1:0,y2:290,stroke:'var(--c-1d1d20)','stroke-width':1},svg);
       VIZ.s('text',{x,y:312,'text-anchor':'middle',class:'tk'},svg).textContent=['100','1k','10k','100k','1M','10M','100M','1B'][p-2]; });
     R.forEach((r,i)=>{ const y=14+i*56, w=lg(r[2])-X0;
       VIZ.s('text',{x:X0-16,y:y+27,'text-anchor':'end',class:'evl'},svg).textContent=r[0];
       VIZ.s('rect',{x:X0,y,width:w,height:40,rx:6,fill:r[3]==='w'?'var(--warn)':r[3]==='g'?'var(--green)':'var(--muted)',class:'a-grow',style:`--i:${i};transform-box:fill-box`},svg);
       const inside=X0+w+190>X1; const tv=VIZ.s('text',{x:inside?X0+w-12:X0+w+12,y:y+26,'text-anchor':inside?'end':'start',class:'evv '+r[3],style:inside?'fill:var(--bg);font-weight:600':''},svg); tv.textContent=r[1];
     });
     VIZ.s('text',{x:X1,y:330,'text-anchor':'end',class:'tk'},svg).textContent='years of tuning, log scale, approximate';
   }}
  ]
});
