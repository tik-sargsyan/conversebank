MOD({
  id:'king-midas', title:'What you say vs what you mean', cluster:'society', fits:[1,6], minutes:5,
  scopes:{lite:[0], full:[0,1,2]},
  css:`
  .m-king-midas .km{display:grid;grid-template-columns:1fr 1.25fr;gap:4vw;align-items:center}
  .m-king-midas .km-wish{font-family:var(--m);font-size:17px;color:var(--green);border:1px solid var(--line);border-left:4px solid var(--green);border-radius:10px;padding:16px 18px;background:var(--surface);line-height:1.5}
  .m-king-midas .km-wish span{display:block;color:var(--muted);font-size:13px;margin-bottom:4px}
  .m-king-midas .km-meant{font-family:var(--m);font-size:17px;color:var(--fg);border:1px dashed var(--line);border-radius:10px;padding:16px 18px;line-height:1.5;margin-top:14px}
  .m-king-midas .km-meant span{display:block;color:var(--muted);font-size:13px;margin-bottom:4px}
  .m-king-midas .km-t{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.05em;fill:var(--fg)}
  .m-king-midas .km-s{font-family:var(--b);font-size:18px;fill:var(--muted)}
  .m-king-midas .km-o circle.ring{fill:var(--surface);stroke:var(--line);stroke-width:2;transition:fill .4s,stroke .4s}
  .m-king-midas .km-o.gold circle.ring{fill:var(--green-a);stroke:var(--green)}
  .m-king-midas .km-o.bad circle.ring{stroke:var(--warn)}
  .m-king-midas .km-o .verdict{font-family:var(--h);font-weight:800;font-size:17px;text-transform:uppercase;letter-spacing:.06em;transition:opacity .4s}
  .m-king-midas .gh{display:grid;grid-template-columns:1.5fr 1fr;gap:3vw;align-items:center}
  .m-king-midas .gh-ax{font-family:var(--m);font-size:15px;fill:var(--muted)}
  .m-king-midas .gh-q{font-family:var(--h);font-weight:800;font-size:clamp(22px,2.4vw,32px);text-transform:uppercase;line-height:1.1}
  .m-king-midas .gh-r{display:flex;flex-direction:column;gap:16px}
  .m-king-midas .gh-r .k{display:flex;justify-content:space-between;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:18px;letter-spacing:.04em;margin-bottom:6px}
  .m-king-midas .meter{height:14px;border-radius:7px}
  .m-king-midas .meter b{transition:width .3s}
  .m-king-midas .meter.l b{background:var(--fg)}
  .m-king-midas .ex{display:flex;flex-direction:column;gap:12px}
  .m-king-midas .ex-row{display:grid;grid-template-columns:300px 60px 1fr;gap:12px;align-items:center}
  .m-king-midas .ex-out{display:flex;flex-direction:column;gap:6px}
  .m-king-midas .ex-say{font-family:var(--m);font-size:16px;color:var(--fg);border:1px solid var(--line);border-radius:8px;padding:12px 14px;background:var(--surface)}
  .m-king-midas .ex-fork{height:64px;width:60px}
  .m-king-midas .ex-got,.m-king-midas .ex-mean{border-radius:8px;padding:6px 14px;font-size:16px;line-height:1.35}
  .m-king-midas .ex-got{border:1px solid var(--warn);color:var(--fg)}
  .m-king-midas .ex-mean{border:1px solid var(--green);color:var(--fg)}
  .m-king-midas .ex-got b{color:var(--warn)} .m-king-midas .ex-mean b{color:var(--green)}
  .m-king-midas .ex-h{display:grid;grid-template-columns:300px 60px 1fr;gap:14px;font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.1em;font-size:14px;color:var(--muted)}
  `,
  slides:[
  {sec:'ALIGNMENT', cls:'viz', title:`THE <span class="g">KING MIDAS</span> PROBLEM`,
   body:`<div class="km"><div>
       <div class="km-wish"><span>what he said</span>"Everything I touch turns to gold."</div>
       <div class="km-meant"><span>what he meant</span>"Make me rich. Keep my life working."</div>
       <div class="lead" style="margin-top:22px">He got exactly <span class="g">what he said</span>. Not <span class="w">what he meant</span>.</div>
       <div class="ctl"><button type="button">replay</button></div></div>
     <svg viewBox="0 0 640 400" style="width:100%" role="img" aria-label="Four things Midas touches: a stone and a rose turn to gold, which is fine. His bread and his daughter turn to gold, which is a disaster."></svg></div>`,
   init(el){
     const svg=el.querySelector('svg');
     const O=[['Stone','fine',0],['Rose','fine',0],['Bread','cannot eat',1],['Daughter','disaster',1]];
     const groups=O.map((o,k)=>{
       const x=160+(k%2)*320, y=105+Math.floor(k/2)*195;
       const g=VIZ.s('g',{class:'km-o gold'+(o[2]?' bad':'')},svg);
       VIZ.s('circle',{cx:x,cy:y,r:62,class:'ring'},g);
       const t=VIZ.s('text',{x,y:y+7,'text-anchor':'middle',class:'km-t'},g); t.textContent=o[0];
       const s=VIZ.s('text',{x,y:y-24,'text-anchor':'middle',class:'km-s'},g); s.textContent='gold';
       const v=VIZ.s('text',{x,y:y+90,'text-anchor':'middle',class:'verdict',fill:o[2]?'var(--warn)':'var(--green)'},g); v.textContent=o[1];
       return [g,v,s];
     });
     let tm=[];
     function play(){
       tm.forEach(clearTimeout); tm=[];
       if(VIZ.reduced) return;
       groups.forEach(([g,v,s])=>{ g.classList.remove('gold','bad'); v.style.opacity=0; s.style.opacity=0; });
       groups.forEach(([g,v,s],k)=>{ tm.push(setTimeout(()=>{ g.classList.add('gold'); s.style.opacity=1; },500+k*900));
         tm.push(setTimeout(()=>{ if(O[k][2]) g.classList.add('bad'); v.style.opacity=1; },900+k*900)); });
     }
     el.querySelector('button').addEventListener('click',play);
     el.addEventListener('keydown',e=>e.stopPropagation());
     VIZ.onShow(el,play);
   }},
  {sec:'ALIGNMENT', cls:'viz', title:`<span class="g">GOODHART'S LAW</span>: PUSH THE NUMBER TOO HARD`,
   body:`<div class="gh"><svg viewBox="0 0 640 400" style="width:100%" role="img" aria-label="Illustrative chart. As pressure on the number grows, the measured number keeps rising, while the real goal rises, peaks, then falls."></svg>
     <div><div class="gh-q">"When a measure becomes a target, it ceases to be a good measure."</div>
       <div class="src" style="margin-top:10px"><b>Source:</b> Goodhart 1975, wording by Strathern 1997</div>
       <div class="gh-r" style="margin-top:22px">
         <div><div class="k">The number <span class="note-s" data-o="0"></span></div><div class="meter l"><b data-m="0"></b></div></div>
         <div><div class="k">The real goal <span class="note-s" data-o="1"></span></div><div class="meter"><b data-m="1"></b></div></div></div>
       <div class="ctl"><span>pressure</span><input type="range" min="0" max="100" value="100" aria-label="Pressure on the number"><output></output></div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=60, X1=610, Y0=340, Y1=30;
     const px=t=>X0+t*(X1-X0), py=v=>Y0-v*(Y0-Y1);
     const proxy=t=>.05+.9*t, real=t=>.05+1.6*t-1.45*t*t;
     VIZ.s('line',{x1:X0,y1:Y0,x2:X1,y2:Y0,class:'stroke-l','stroke-width':2},svg);
     VIZ.s('line',{x1:X0,y1:Y0,x2:X0,y2:Y1,class:'stroke-l','stroke-width':2},svg);
     const ax=VIZ.s('text',{x:X1,y:Y0+32,'text-anchor':'end',class:'gh-ax'},svg); ax.textContent='pressure on the number →';
          const il=VIZ.s('text',{x:X0+8,y:Y0+32,class:'gh-ax'},svg); il.textContent='illustrative';
     const path=(f,a,b)=>{ let d=''; for(let i=0;i<=60;i++){ const t=a+(b-a)*i/60; d+=(i?'L':'M')+px(t).toFixed(1)+' '+py(f(t)).toFixed(1); } return d; };
     const tp=Math.min(1,1.6/2.9);
     VIZ.s('path',{d:path(proxy,0,1),fill:'none',stroke:'var(--fg)','stroke-width':4,class:'a-draw',style:'--len:700'},svg);
     VIZ.s('path',{d:path(real,0,tp),fill:'none',stroke:'var(--green)','stroke-width':4,class:'a-draw',style:'--len:500;--i:1'},svg);
     VIZ.s('path',{d:path(real,tp,1),fill:'none',stroke:'var(--warn)','stroke-width':4,class:'a-draw',style:'--len:400;--i:4'},svg);
     const l1=VIZ.s('text',{x:px(1)-6,y:py(proxy(1))-14,'text-anchor':'end',class:'svg-h',style:'font-size:17px'},svg); l1.textContent='the number';
     const l2=VIZ.s('text',{x:px(tp),y:py(real(tp))-18,'text-anchor':'middle',class:'svg-h svg-g',style:'font-size:17px'},svg); l2.textContent='the real goal';
     const mk=VIZ.s('line',{y1:Y1,y2:Y0,stroke:'var(--fg)','stroke-opacity':.35,'stroke-width':2,'stroke-dasharray':'5 5'},svg);
     const d1=VIZ.s('circle',{r:8,fill:'var(--fg)'},svg), d2=VIZ.s('circle',{r:8,fill:'var(--green)'},svg);
     const rng=el.querySelector('input'), out=el.querySelector('output'), bars=el.querySelectorAll('[data-m]'), os=el.querySelectorAll('[data-o]');
     function set(v){
       const t=v/100, a=proxy(t), b=Math.max(0,real(t));
       mk.setAttribute('x1',px(t)); mk.setAttribute('x2',px(t));
       d1.setAttribute('cx',px(t)); d1.setAttribute('cy',py(a));
       d2.setAttribute('cx',px(t)); d2.setAttribute('cy',py(b)); d2.setAttribute('fill',t>tp?'var(--warn)':'var(--green)');
       bars[0].style.width=(a*100)+'%'; bars[1].style.width=(b*100)+'%';
       bars[1].parentNode.classList.toggle('w',t>tp);
       os[0].textContent='going up'; os[1].textContent=t>tp?'going down':'going up';
       out.textContent=v+'%';
     }
     rng.addEventListener('input',()=>set(+rng.value));
     el.addEventListener('keydown',e=>e.stopPropagation());
     set(100);
   }},
  {sec:'ALIGNMENT', cls:'viz', title:`MIDAS <span class="g">AT WORK</span>`,
   body:`<div class="ex"><div class="ex-h"><span>you say</span><span></span><span><span style="color:var(--warn)">what the system does</span> &nbsp;vs&nbsp; <span style="color:var(--green)">what you meant</span></span></div>
     <div class="ex-row a-fade" style="--i:0"><div class="ex-say">maximise time in app</div><svg class="ex-fork" viewBox="0 0 60 64"></svg><div class="ex-out"><div class="ex-got">An endless, <b>addictive feed</b>.</div><div class="ex-mean">Users get <b>value fast</b> and come back.</div></div></div>
     <div class="ex-row a-fade" style="--i:1"><div class="ex-say">close tickets fast</div><svg class="ex-fork" viewBox="0 0 60 64"></svg><div class="ex-out"><div class="ex-got">Tickets <b>closed, not fixed</b>.</div><div class="ex-mean">Customer <b>problems solved</b>.</div></div></div>
     <div class="ex-row a-fade" style="--i:2"><div class="ex-say">raise the survey score</div><svg class="ex-fork" viewBox="0 0 60 64"></svg><div class="ex-out"><div class="ex-got">Survey sent <b>only to happy users</b>.</div><div class="ex-mean">Users who are <b>actually happier</b>.</div></div></div>
     <div class="ex-row a-fade" style="--i:3"><div class="ex-say">make all tests pass</div><svg class="ex-fork" viewBox="0 0 60 64"></svg><div class="ex-out"><div class="ex-got">Agent <b>deletes the failing test</b>.</div><div class="ex-mean">Code that <b>works</b>.</div></div></div></div>
     <div class="lead a-fade" style="--i:5;margin-top:16px;max-width:none">Write the intent next to the metric. Add a <span class="g">second metric</span> that breaks if someone games it.</div>`,
   init(el){
     el.querySelectorAll('.ex-fork').forEach(s=>{
       VIZ.s('path',{d:'M2 32 C30 32 30 12 58 12',fill:'none',stroke:'var(--warn)','stroke-width':2.5},s);
       VIZ.s('path',{d:'M2 32 C30 32 30 52 58 52',fill:'none',stroke:'var(--green)','stroke-width':2.5},s);
     });
   }}
  ]
});
