MOD({
  id:'homogenization', title:'Better alone, more alike together', cluster:'society', fits:[5,8], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-homogenization .hg-stage{height:52vh}
  .m-homogenization .hg-h{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:22px;fill:var(--fg)}
  .m-homogenization .hg-t{font-family:var(--b);font-size:17px;fill:var(--muted)}
  .m-homogenization .hg-m{font-family:var(--m);font-size:15px;fill:var(--muted)}
  .m-homogenization .hg-d{transition:transform 1.6s cubic-bezier(.3,.8,.2,1)}
  .m-homogenization .hg-bar{transition:width 1.2s cubic-bezier(.2,.8,.2,1)}
  .m-homogenization .pf-stage{height:50vh}
  `,
  slides:[
  {sec:'CREATIVITY', cls:'viz', title:`BETTER ALONE, <span class="g">MORE ALIKE</span> TOGETHER`,
   body:`<div class="stage hg-stage"><svg viewBox="0 0 1120 430" role="img" aria-label="Illustrative. Two idea maps. Writers alone: stories spread across the map, lower average score. Writers with AI ideas: each story scores higher, but the stories bunch together."></svg></div>
     <div class="ctl"><button type="button">replay</button><span>Source: Doshi and Hauser 2024, Science Advances. Dots illustrative.</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), s=(t,a,p)=>VIZ.s(t,a,p||svg), tx=(a,txt,p)=>{ const e=s('text',a,p); e.textContent=txt; return e; };
     let seed=11; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647; rnd();
     const PW=460, PH=250, P=[[40,'Writers alone'],[620,'Writers with AI ideas']];
     P.forEach(([x,t])=>{ s('rect',{x,y:50,width:PW,height:PH,rx:14,fill:'var(--surface)',stroke:'var(--line)','stroke-width':1.5}); tx({x,y:34,class:'hg-h'},t); });
     tx({x:1080,y:34,'text-anchor':'end',class:'hg-m'},'1 dot = 1 story');
     const spread=[...Array(30)].map(()=>[30+rnd()*(PW-60),80+rnd()*(PH-60)]);
     const cluster=spread.map(()=>{ const a=rnd()*Math.PI*2, r=Math.sqrt(rnd())*58; return [PW*0.58+Math.cos(a)*r*1.3, 50+PH*0.45+Math.sin(a)*r]; });
     spread.forEach(([x,y])=>s('circle',{cx:40+x,cy:y,r:8,fill:'var(--fg)','fill-opacity':.85}));
     const dots=cluster.map(([x,y],k)=>{ const c=s('circle',{cx:620+x,cy:y,r:9,fill:'var(--green)',class:'hg-d',style:'transform-box:fill-box'}); c._dx=spread[k][0]-x; c._dy=spread[k][1]-y; return c; });
     // bars
     const B=[[40,.55,.85],[620,.75,.35]], bars=[];
     B.forEach(([x,sc,dv],i)=>{
       [['score per story',sc,'var(--green)'],['variety across stories',dv,i?'var(--warn)':'var(--fg)']].forEach(([lab,v,col],j)=>{
         const y=338+j*48; tx({x,y,class:'hg-t'},lab);
         s('rect',{x,y:y+10,width:PW,height:14,rx:7,fill:'var(--faint)'});
         const b=s('rect',{x,y:y+10,width:PW*v,height:14,rx:7,fill:col,class:'hg-bar'}); b._w=PW*v; bars.push([b,i]);
       });
     });
     let tm;
     function play(){
       clearTimeout(tm); if(VIZ.reduced) return;
       dots.forEach(c=>{ c.style.transition='none'; c.style.transform=`translate(${c._dx}px,${c._dy}px)`; });
       // start the right bars at the left panel values, then animate to their own
       const left=bars.filter(x=>x[1]===0).map(x=>x[0]._w);
       bars.filter(x=>x[1]===1).forEach(([b],j)=>{ b.style.transition='none'; b.setAttribute('width',left[j]); });
       svg.getBoundingClientRect();
       tm=setTimeout(()=>{
         dots.forEach((c,k)=>{ c.style.transition=''; c.style.transitionDelay=(k*25)+'ms'; c.style.transform=''; });
         bars.filter(x=>x[1]===1).forEach(([b])=>{ b.style.transition=''; b.setAttribute('width',b._w); });
       },700);
     }
     el.querySelector('button').addEventListener('click',play);
     el.addEventListener('keydown',e=>e.stopPropagation());
     VIZ.onShow(el,play);
   }},
  {sec:'CREATIVITY', cls:'viz', title:`BRAINSTORM <span class="g">ALONE FIRST</span>, THEN AI`,
   body:`<div class="stage pf-stage"><svg viewBox="0 0 1120 400" role="img" aria-label="Two brainstorm flows. AI first: everyone starts from the same AI list and ends with one tight cluster of ideas. Alone first: everyone writes ideas alone, the team pools them, then AI expands and fills gaps, ending with a wide spread."></svg></div>
     <div class="lead a-fade" style="--i:8;margin-top:6px;max-width:none">Use AI to <span class="g">widen and sharpen</span> your ideas. Not to <span class="w">start</span> them.</div>`,
   init(el){
     const svg=el.querySelector('svg'), s=(t,a,p)=>VIZ.s(t,a,p||svg), tx=(a,txt,p)=>{ const e=s('text',a,p); e.textContent=txt; return e; };
     let seed=5; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647; rnd();
     const cloud=(cx,cy,rx,ry,n,col,i,r)=>{ const g=s('g',{class:'a-fade',style:'--i:'+i}); for(let k=0;k<n;k++){ const a=rnd()*Math.PI*2, d=Math.sqrt(rnd()); s('circle',{cx:cx+Math.cos(a)*d*rx,cy:cy+Math.sin(a)*d*ry,r:r||6,fill:col},g); } return g; };
     const arrow=(x1,x2,y,i)=>{ const g=s('g',{class:'a-fade',style:'--i:'+i}); s('line',{x1,y1:y,x2:x2-10,y2:y,stroke:'var(--line)','stroke-width':3},g); s('path',{d:`M${x2-12} ${y-8} L${x2} ${y} L${x2-12} ${y+8} Z`,fill:'var(--dim)'},g); };
     const X=[330,620,910], R1=95, R2=290;
     tx({x:20,y:R1-6,class:'hg-h',style:'fill:var(--warn)'},'AI first');
     tx({x:20,y:R1+20,class:'hg-t'},'everyone sticks',null);
     tx({x:20,y:R1+42,class:'hg-t'},'on the same list');
     tx({x:20,y:R2-6,class:'hg-h svg-g'},'Alone first');
     tx({x:20,y:R2+20,class:'hg-t'},'then AI widens',null);
     tx({x:20,y:R2+42,class:'hg-t'},'and sharpens');
     // row 1
     cloud(X[0],R1,40,26,14,'var(--fg)',0); tx({x:X[0],y:R1+66,'text-anchor':'middle',class:'hg-m'},'same AI list');
     arrow(X[0]+80,X[1]-80,R1,1);
     cloud(X[1],R1,36,24,22,'var(--fg)',2); tx({x:X[1],y:R1+66,'text-anchor':'middle',class:'hg-m'},'small edits');
     arrow(X[1]+80,X[2]-80,R1,3);
     cloud(X[2],R1,30,20,26,'var(--warn)',4); tx({x:X[2],y:R1+66,'text-anchor':'middle',class:'hg-m',style:'fill:var(--warn)'},'one tight cluster');
     // row 2
     s('line',{x1:20,y1:(R1+R2)/2+10,x2:1100,y2:(R1+R2)/2+10,stroke:'var(--line)','stroke-dasharray':'4 6'});
     cloud(X[0]-40,R2-30,30,22,6,'var(--fg)',5); cloud(X[0]+40,R2-10,30,22,6,'var(--fg)',5); cloud(X[0]-20,R2+40,30,22,6,'var(--fg)',5);
     tx({x:X[0],y:R2+90,'text-anchor':'middle',class:'hg-m'},'10 quiet minutes, alone');
     arrow(X[0]+110,X[1]-120,R2,6);
     cloud(X[1],R2,105,62,20,'var(--fg)',6); tx({x:X[1],y:R2+90,'text-anchor':'middle',class:'hg-m'},'pool on the board');
     arrow(X[1]+120,X[2]-120,R2,7);
     const g3=cloud(X[2],R2,105,62,20,'var(--fg)',7); cloud(X[2],R2,125,74,12,'var(--green)',8,7);
     tx({x:X[2],y:R2+90,'text-anchor':'middle',class:'hg-m',style:'fill:var(--green)'},'AI expands, fills gaps');
   }}
  ]
});
