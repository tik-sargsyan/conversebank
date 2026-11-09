MOD({
  id:'scaling-laws', title:'More compute, lower error', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-scaling-laws .sl{display:grid;grid-template-columns:1.5fr 1fr;gap:3.5vw;align-items:center}
  .m-scaling-laws svg{width:100%;height:52vh;display:block;overflow:visible}
  .m-scaling-laws .ax{stroke:var(--c-55555b);stroke-width:2}
  .m-scaling-laws .gr{stroke:var(--c-1d1d20);stroke-width:1}
  .m-scaling-laws .ln{fill:none;stroke:var(--green);stroke-width:5;stroke-linecap:round;filter:drop-shadow(0 0 8px color-mix(in srgb,var(--green) 50%,transparent))}
  .m-scaling-laws .tri{fill:none;stroke:var(--fg);stroke-width:2;stroke-dasharray:6 5}
  .m-scaling-laws .lab{font-family:var(--m);font-size:15px;fill:var(--muted);paint-order:stroke;stroke:var(--bg);stroke-width:6px;stroke-linejoin:round}
  .m-scaling-laws .lab.w{fill:var(--fg)}
  .m-scaling-laws .axl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:16px;fill:var(--fg)}
  .m-scaling-laws .dot{fill:var(--green)}
  .m-scaling-laws .ctl .chip{cursor:pointer;font-family:var(--m)}
  .m-scaling-laws .u{fill:none;stroke:var(--c-77777d);stroke-width:3}
  .m-scaling-laws .u.on{stroke:var(--fg)}
  .m-scaling-laws .opt{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:7 6}
  .m-scaling-laws .zone{font-family:var(--b);font-size:15px;fill:var(--warn)}
  .m-scaling-laws .src{font-size:14px;color:var(--muted);text-transform:none;letter-spacing:0}
  .m-scaling-laws .src b{color:var(--fg)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`MORE COMPUTE, <span class="g">LOWER ERROR</span>`,
   body:`<div class="sl"><div><svg class="c1" viewBox="0 0 640 400" role="img" aria-label="Log-log chart: error falls in a straight line as compute grows"></svg></div>
     <div><div class="lead">Every <b>10x</b> more computing power cuts error by about the <span class="g">same fraction</span>. A smooth, predictable line.</div>
       <div class="stat-cap" style="margin-top:18px;max-width:440px">The same shape holds for <b>more data</b> and <b>more parameters</b>. This is why labs keep building bigger.</div>
       <div class="ctl"><span class="chip on" data-x="compute">compute</span><span class="chip" data-x="training data">data</span><span class="chip" data-x="parameters">parameters</span></div>
       <div class="src"><b>Source:</b> Kaplan et al. 2020, OpenAI. Shape illustrative.</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg.c1'), X0=70, X1=620, Y0=30, Y1=340;
     for(let i=0;i<=6;i++){ const x=X0+i*(X1-X0)/6; VIZ.s('line',{x1:x,x2:x,y1:Y0,y2:Y1,class:'gr'},svg);
       const t=VIZ.s('text',{x,y:Y1+24,'text-anchor':'middle',class:'lab'},svg); t.textContent=i===0?'1x':(i===1?'10x':'10'+String.fromCharCode([0x2070,0xb9,0xb2,0xb3,0x2074,0x2075,0x2076][i])+'x'); }
     for(let i=0;i<=4;i++){ const y=Y0+i*(Y1-Y0)/4; VIZ.s('line',{x1:X0,x2:X1,y1:y,y2:y,class:'gr'},svg); }
     VIZ.s('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,class:'ax'},svg); VIZ.s('line',{x1:X0,x2:X0,y1:Y0,y2:Y1,class:'ax'},svg);
     const yl=VIZ.s('text',{x:X0-16,y:(Y0+Y1)/2,'text-anchor':'middle',class:'axl',transform:`rotate(-90 ${X0-16} ${(Y0+Y1)/2})`},svg); yl.textContent='error (log scale)';
     const xl=VIZ.s('text',{x:(X0+X1)/2,y:Y1+56,'text-anchor':'middle',class:'axl'},svg);
     const yAt=x=>60+(x-X0)*0.43; // straight line in log-log space
     VIZ.s('path',{d:`M${X0} ${yAt(X0)} L${X1} ${yAt(X1)}`,class:'ln a-draw',pathLength:1000},svg);
     const xa=X0+2*(X1-X0)/6, xb=X0+3*(X1-X0)/6;
     VIZ.s('path',{d:`M${xa} ${yAt(xa)} H${xb} V${yAt(xb)}`,class:'tri a-fade',style:'--i:8'},svg);
     const t1=VIZ.s('text',{x:(xa+xb)/2,y:yAt(xa)-12,'text-anchor':'middle',class:'lab w a-fade',style:'--i:9'},svg); t1.textContent='10x compute';
     const t2=VIZ.s('text',{x:xb+12,y:(yAt(xa)+yAt(xb))/2+5,class:'lab w a-fade',style:'--i:10'},svg); t2.textContent='same % drop';
     [0,1,2,3,4,5,6].forEach(i=>{ const x=X0+i*(X1-X0)/6; VIZ.s('circle',{cx:x,cy:yAt(x),r:7,class:'dot a-pop',style:`--i:${i+3};transform-box:fill-box;transform-origin:center`},svg); });
     const chips=el.querySelectorAll('.chip[data-x]');
     const set=c=>{ chips.forEach(k=>k.classList.toggle('on',k===c)); xl.textContent=c.dataset.x+' (log scale)'; };
     chips.forEach(c=>c.addEventListener('click',()=>set(c)));
     set(chips[0]);
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`SAME BUDGET: <span class="g">BALANCE SIZE AND DATA</span>`,
   body:`<div class="sl"><div><svg class="c2" viewBox="0 0 640 400" role="img" aria-label="Three U-shaped curves, one per compute budget. Each has a best model size in the middle."></svg></div>
     <div><div class="lead">For each budget there is a <span class="g">best model size</span>. Too big, and there is not enough data to train it.</div>
       <div class="stat-cap" style="margin-top:18px;max-width:440px">Chinchilla showed many big models were <b>under-trained</b>. Smaller models on more data did better for the same cost.</div>
       <div class="stat-cap" style="margin-top:14px;max-width:440px">PM lesson: <b>bigger is not automatically better.</b> Compare on your task.</div>
       <div class="src"><b>Source:</b> Hoffmann et al. 2022, DeepMind ("Chinchilla"). Shape illustrative.</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg.c2'), X0=70, X1=620, Y0=30, Y1=340;
     VIZ.s('line',{x1:X0,x2:X1,y1:Y1,y2:Y1,class:'ax'},svg); VIZ.s('line',{x1:X0,x2:X0,y1:Y0,y2:Y1,class:'ax'},svg);
     const yl=VIZ.s('text',{x:X0-16,y:(Y0+Y1)/2,'text-anchor':'middle',class:'axl',transform:`rotate(-90 ${X0-16} ${(Y0+Y1)/2})`},svg); yl.textContent='error';
     const xl=VIZ.s('text',{x:(X0+X1)/2,y:Y1+40,'text-anchor':'middle',class:'axl'},svg); xl.textContent='model size (log scale)';
     const U=[{x0:200,ym:170,lab:'small budget'},{x0:340,ym:240,lab:'medium budget'},{x0:480,ym:300,lab:'large budget'}], mins=[];
     U.forEach((u,i)=>{
       let d=''; for(let x=u.x0-150;x<=u.x0+150;x+=6){ const y=u.ym-0.0062*(x-u.x0)**2; if(y<Y0) continue; d+=(d?'L':'M')+x+' '+y.toFixed(1); }
       VIZ.s('path',{d,class:'u a-draw'+(i===2?' on':''),pathLength:1000,style:`--i:${i}`},svg);
       const ym=u.ym; mins.push([u.x0,ym]);
       VIZ.s('circle',{cx:u.x0,cy:ym,r:8,class:'dot a-pop',style:`--i:${i*2+6};transform-box:fill-box;transform-origin:center`},svg);
       const t=VIZ.s('text',{x:u.x0,y:ym+30,'text-anchor':'middle',class:'lab'+(i===2?' w':'')},svg); t.textContent=u.lab;
     });
     VIZ.s('path',{d:'M'+mins.map(m=>m.join(' ')).join(' L'),class:'opt a-fade',style:'--i:12'},svg);
     const z1=VIZ.s('text',{x:X0+14,y:Y0+14,class:'zone'},svg); z1.textContent='too small';
     const z2=VIZ.s('text',{x:X1-4,y:Y0+14,'text-anchor':'end',class:'zone'},svg); z2.textContent='too big for the data';
   }}
  ]
});
