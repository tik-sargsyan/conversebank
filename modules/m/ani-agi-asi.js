MOD({
  id:'ani-agi-asi', title:'Narrow, general, super', cluster:'society', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-ani-agi-asi .st-stage{height:54vh}
  .m-ani-agi-asi .st-k{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:34px;letter-spacing:.02em}
  .m-ani-agi-asi .st-a{font-family:var(--m);font-size:17px;fill:var(--muted)}
  .m-ani-agi-asi .st-t{font-family:var(--b);font-size:19px;fill:var(--fg-2)}
  .m-ani-agi-asi .st-tag{font-family:var(--m);font-size:15px}
  .m-ani-agi-asi .ln-stage{height:44vh}
  .m-ani-agi-asi .ln-it{font-family:var(--b);font-size:18px;transition:fill .3s}
  .m-ani-agi-asi .ln-dot{transition:fill .3s}
  .m-ani-agi-asi .ln-line{transition:transform .5s cubic-bezier(.2,.8,.2,1)}
  .m-ani-agi-asi .ln-def{font-size:clamp(17px,1.7vw,22px);color:var(--fg);min-height:32px}
  .m-ani-agi-asi .ln-def b{color:var(--green);font-family:var(--h);text-transform:uppercase;letter-spacing:.04em}
  .m-ani-agi-asi .ctl button.on{border-color:var(--green);color:var(--green)}
  `,
  slides:[
  {sec:'TYPES OF AI', cls:'viz', title:`NARROW, GENERAL, <span class="g">SUPER</span>`,
   body:`<div class="stage st-stage"><svg viewBox="0 0 1120 440" role="img" aria-label="Three steps. Narrow AI exists today. General AI is debated and nobody agrees where its line is. Super AI is hypothetical."></svg></div>`,
   init(el){
     const svg=el.querySelector('svg'), s=(t,a,p)=>VIZ.s(t,a,p||svg), tx=(a,txt,p)=>{ const e=s('text',a,p); e.textContent=txt; return e; };
     const g=i=>s('g',{class:'a-fade',style:'--i:'+i});
     const W=340, H=130, B=430;
     // step blocks: x, top
     const S=[[20,B-H,'Narrow','ANI','exists today','var(--green)',0],[20+W+30,B-2*H,'General','AGI','debated','var(--fg)',1],[20+2*(W+30),B-3*H,'Super','ASI','hypothetical','var(--fg)',1]];
     S.forEach(([x,y,k,ab,tag,col,dash],i)=>{
       const p=g(i*2);
       s('rect',{x,y,width:W,height:B-y,rx:10,fill:i?'none':'var(--green-a)',stroke:col,'stroke-width':2.5,'stroke-dasharray':dash?'10 8':'none'},p);
       tx({x:x+20,y:y+44,class:'st-k',fill:col,style:'fill:'+col},k,p);
       tx({x:x+W-20,y:y+42,'text-anchor':'end',class:'st-a'},ab,p);
       tx({x:x+20,y:y+74,class:'st-tag',style:'fill:'+(i?'var(--muted)':'var(--green)')},tag,p);
     });
     // examples on narrow
     const ex=g(1);
     const exs=['AlphaFold: protein shapes','Self-driving taxis','Spam filter','Face unlock'];
     exs.forEach((t,k)=>{ s('circle',{cx:44,cy:114+k*32,r:5,fill:'var(--green)'},ex); tx({x:58,y:120+k*32,class:'st-t'},t,ex); });
     tx({x:20,y:80,class:'st-a',style:'fill:var(--green)'},'one job each:',ex);
     // general examples
     const ge=g(3);
     tx({x:410,y:B-2*H+108,class:'st-t'},'Most thinking tasks',ge);
     tx({x:410,y:B-2*H+136,class:'st-t'},'a person can do',ge);
     const su=g(5);
     tx({x:780,y:B-3*H+108,class:'st-t'},'Beats humans at',su);
     tx({x:780,y:B-3*H+136,class:'st-t'},'nearly everything',su);
     tx({x:780,y:B-3*H+190,class:'st-a'},'predictions: contested',su);
     // fuzzy AGI line
     const fz=g(6);
     s('rect',{x:355,y:24,width:50,height:B-24,fill:'var(--green-a)',opacity:.6},fz);
     s('line',{x1:380,y1:20,x2:380,y2:B,stroke:'var(--green)','stroke-width':2,'stroke-dasharray':'3 6'},fz);
     tx({x:380,y:14,'text-anchor':'middle',class:'st-tag',style:'fill:var(--green)'},'nobody agrees where this line is',fz);
     // LLM marker on the edge
     const lm=g(8);
     s('circle',{cx:380,cy:B-H,r:13,fill:'var(--fg)'},lm);
     tx({x:350,y:B-H-44,'text-anchor':'end',class:'st-t',style:'fill:var(--fg);font-weight:600'},"Today's LLMs:",lm);
     tx({x:350,y:B-H-18,'text-anchor':'end',class:'st-t'},'broad, still debated',lm);
   }},
  {sec:'TYPES OF AI', cls:'viz', title:`WHERE IS <span class="g">THE AGI LINE?</span>`,
   body:`<div class="stage ln-stage"><svg viewBox="0 0 1120 300" role="img" aria-label="Examples placed on a skill axis from one task to any task. A dashed line marks where AGI starts; moving it changes which examples count as general."></svg></div>
     <div class="ln-def"></div>
     <div class="ctl"><span>draw the line</span><button type="button" data-k="0">loose</button><button type="button" data-k="1">middle</button><button type="button" data-k="2">strict</button><input type="range" min="0" max="100" value="62" aria-label="AGI line position"></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=40, X1=1080, Y=170;
     const I=[[.03,'Calculator',0],[.13,'Spam filter',1],[.23,'Chess engine',0],[.36,'Image generator',1],[.52,'Chat assistants',0],[.66,'Multi-hour agents',1],[.82,'Any computer job',0],[.95,'Any job at all',1]];
     VIZ.s('line',{x1:X0,y1:Y,x2:X1,y2:Y,class:'stroke-l','stroke-width':3},svg);
     const a1=VIZ.s('text',{x:X0,y:Y+110,class:'st-a'},svg); a1.textContent='one task';
     const a2=VIZ.s('text',{x:X1,y:Y+110,'text-anchor':'end',class:'st-a'},svg); a2.textContent='any task →';
     const a3=VIZ.s('text',{x:(X0+X1)/2,y:Y+110,'text-anchor':'middle',class:'st-a'},svg); a3.textContent='positions illustrative';
     const items=I.map(([p,t,up])=>{ const x=X0+p*(X1-X0);
       VIZ.s('line',{x1:x,y1:Y,x2:x,y2:up?Y-40:Y+40,stroke:'var(--line)','stroke-width':1.5},svg);
       const d=VIZ.s('circle',{cx:x,cy:Y,r:9,class:'ln-dot',fill:'var(--fg)'},svg);
       const l=VIZ.s('text',{x,y:up?Y-50:Y+62,'text-anchor':'middle',class:'ln-it',fill:'var(--fg)'},svg); l.textContent=t;
       return {p,d,l}; });
     const ln=VIZ.s('g',{class:'ln-line'},svg);
     VIZ.s('line',{x1:0,y1:44,x2:0,y2:Y-30,stroke:'var(--green)','stroke-width':2,'stroke-dasharray':'3 6'},ln);
     VIZ.s('rect',{x:-3,y:Y-30,width:6,height:60,fill:'var(--green)',rx:3},ln);
     const lt=VIZ.s('text',{x:0,y:32,'text-anchor':'middle',class:'st-tag',style:'fill:var(--green)'},ln); lt.textContent='AGI starts here';
     const D=[[30,'Loose','Can do many tasks it was never trained for.'],[62,'Middle','Can do most work a person does at a computer.'],[88,'Strict','Learns any new skill as fast as a person, in any domain.']];
     const def=el.querySelector('.ln-def'), rng=el.querySelector('input'), bs=el.querySelectorAll('[data-k]');
     function set(v,k){
       const t=v/100; ln.style.transform=`translateX(${X0+t*(X1-X0)}px)`; rng.value=v;
       items.forEach(({p,d,l})=>{ const on=p>t; d.setAttribute('fill',on?'var(--green)':'var(--dim)'); l.setAttribute('fill',on?'var(--green)':'var(--muted)'); });
       bs.forEach((b,j)=>b.classList.toggle('on',j===k));
       def.innerHTML=k!=null?`<b>${D[k][1]}</b> &nbsp;${D[k][2]}`:'<b>Your line</b> &nbsp;Everything to the right counts as general.';
     }
     bs.forEach((b,k)=>b.addEventListener('click',()=>set(D[k][0],k)));
     rng.addEventListener('input',()=>set(+rng.value,null));
     el.addEventListener('keydown',e=>e.stopPropagation());
     set(62,1);
     VIZ.onShow(el,()=>{ if(VIZ.reduced) return; set(30,0); setTimeout(()=>set(88,2),1300); setTimeout(()=>set(62,1),2600); });
   }}
  ]
});
