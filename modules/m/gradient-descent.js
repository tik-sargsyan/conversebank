MOD({
  id:'gradient-descent', title:'Learning is rolling downhill', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-gradient-descent .gd{display:grid;grid-template-columns:1.4fr 1fr;gap:3.5vw;align-items:center}
  .m-gradient-descent .gd-svg{width:100%;height:52vh;display:block}
  .m-gradient-descent .gd-mini{width:100%;height:24vh;display:block}
  .m-gradient-descent .gd-t{font-family:var(--m);font-size:16px;fill:var(--muted)}
  .m-gradient-descent .gd-k{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:18px;fill:var(--fg)}
  .m-gradient-descent .gd-ctl{flex-wrap:wrap}
  .m-gradient-descent .gd-ctl input{width:180px}
  .m-gradient-descent .gd-msg{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:22px;margin-top:12px;min-height:28px}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`TRAINING = <span class="g">TINY DOWNHILL STEPS</span>`,
   body:`<div class="gd"><svg class="gd-svg" viewBox="0 0 660 420" role="img" aria-label="A ball steps down a loss curve to the lowest point. Each step follows the slope."></svg>
     <div><div class="lead">Loss = how wrong the model is. Each step, find the slope and <span class="g">step downhill.</span></div>
       <svg class="gd-mini" viewBox="0 0 420 200" role="img" aria-label="Loss over steps falls toward zero." style="margin-top:14px"></svg>
       <div class="ctl gd-ctl"><span>step size</span><input type="range" min="0" max="5" step="1" value="2" aria-label="Step size"><output></output><button type="button">replay</button></div>
       <div class="gd-msg"></div>
       <div class="stat-cap" style="max-width:none;margin-top:4px">Real training: <b>millions of steps</b>, billions of settings at once.</div></div></div>`,
   init(el){
     const svg=el.querySelector('.gd-svg'), mini=el.querySelector('.gd-mini');
     const f=x=>0.15*(x-1)*(x-1)+0.3, df=x=>0.3*(x-1);
     const X0=-4.6, X1=6.6, sx=x=>30+(x-X0)/(X1-X0)*600, sy=y=>380-y/5.2*340;
     const LR=[[0.3,'tiny'],[0.8,'small'],[1.6,'good'],[4.2,'big'],[6,'too big'],[6.9,'way too big']];
     const MSG=['Crawls. Many more steps needed.','Steady, a bit slow.','<span class="g">Fast and steady.</span>','Overshoots, then settles.','<span class="w">Bounces across the valley.</span>','<span class="w">Overshoots. Loss goes up.</span>'];
     // curve
     let d=''; for(let x=X0;x<=X1+1e-9;x+=0.1) d+=(d?'L':'M')+sx(x).toFixed(1)+' '+sy(f(x)).toFixed(1);
     VIZ.s('path',{d,fill:'none',stroke:'var(--fg-2)','stroke-width':3},svg);
     VIZ.s('line',{x1:sx(1),x2:sx(1),y1:sy(0.3)+12,y2:398,stroke:'var(--dim)','stroke-width':2,'stroke-dasharray':'4 5'},svg);
     const lm=VIZ.s('text',{x:sx(1),y:416,'text-anchor':'middle',class:'gd-t'},svg); lm.textContent='lowest loss';
     const la=VIZ.s('text',{x:4,y:22,class:'gd-k'},svg); la.textContent='loss';
     const lw=VIZ.s('text',{x:630,y:416,'text-anchor':'end',class:'gd-t'},svg); lw.textContent='one setting →';
     const trail=VIZ.s('g',{},svg), tan=VIZ.s('line',{stroke:'var(--green)','stroke-width':2,opacity:.6},svg);
     const ball=VIZ.s('circle',{r:13,fill:'var(--green)',style:'filter:drop-shadow(0 0 8px color-mix(in srgb,var(--green) 70%,transparent))'},svg);
     // mini chart
     VIZ.s('line',{x1:40,x2:410,y1:170,y2:170,stroke:'var(--dim)','stroke-width':2},mini);
     VIZ.s('line',{x1:40,x2:40,y1:10,y2:170,stroke:'var(--dim)','stroke-width':2},mini);
     const ml=VIZ.s('text',{x:46,y:20,class:'gd-k',style:'font-size:16px'},mini); ml.textContent='loss';
     const ms=VIZ.s('text',{x:410,y:194,'text-anchor':'end',class:'gd-t'},mini); ms.textContent='steps';
     const pl=VIZ.s('polyline',{fill:'none',stroke:'var(--green)','stroke-width':3.5,'stroke-linejoin':'round'},mini);
     const N=22, rng=el.querySelector('input'), out=el.querySelector('output'), msg=el.querySelector('.gd-msg');
     function path(lr){ const xs=[-4]; for(let i=0;i<N;i++){ const n=xs[xs.length-1]-lr*df(xs[xs.length-1]); if(n<X0-0.2||n>X1+0.2){ xs.push(Math.max(X0,Math.min(X1,n))); break; } xs.push(n); } return xs; }
     function paint(xs,k){
       trail.innerHTML='';
       for(let i=0;i<k;i++){ VIZ.s('line',{x1:sx(xs[i]),y1:sy(f(xs[i])),x2:sx(xs[i+1]),y2:sy(f(xs[i+1])),stroke:'var(--fg)','stroke-width':1.5,opacity:.25,'stroke-dasharray':'3 4'},trail); VIZ.s('circle',{cx:sx(xs[i]),cy:sy(f(xs[i])),r:5,fill:'var(--fg)',opacity:.35},trail); }
       const x=xs[k], y=f(x), s=df(x), dx=0.9;
       ball.setAttribute('cx',sx(x)); ball.setAttribute('cy',sy(y)-13);
       tan.setAttribute('x1',sx(x-dx)); tan.setAttribute('y1',sy(y-s*dx)); tan.setAttribute('x2',sx(x+dx)); tan.setAttribute('y2',sy(y+s*dx));
       const L0=f(xs[0]), lmax=Math.max(...xs.map(f));
       pl.setAttribute('points',xs.slice(0,k+1).map((v,i)=>(40+i/N*370).toFixed(1)+','+(170-Math.min(1,f(v)/Math.max(L0,lmax))*150).toFixed(1)).join(' '));
     }
     let tm;
     function run(animate){
       clearInterval(tm); const i=+rng.value, xs=path(LR[i][0]);
       out.textContent=LR[i][1]; msg.innerHTML=MSG[i];
       if(!animate||VIZ.reduced){ paint(xs,xs.length-1); return; }
       let k=0; paint(xs,0); tm=setInterval(()=>{ k++; paint(xs,k); if(k>=xs.length-1) clearInterval(tm); },260);
     }
     rng.addEventListener('input',()=>run(true));
     el.querySelector('button').addEventListener('click',()=>run(true));
     el.addEventListener('keydown',e=>e.stopPropagation());
     run(false);
     VIZ.onShow(el,()=>run(true));
   }}
  ]
});
