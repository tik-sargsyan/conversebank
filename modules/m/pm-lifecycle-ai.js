MOD({
  id:'pm-lifecycle-ai', title:'AI across the PM lifecycle', cluster:'pm', fits:[1,8], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-pm-lifecycle-ai .lc{display:grid;grid-template-columns:auto 1fr;gap:4vw;align-items:center}
  .m-pm-lifecycle-ai .lc-wheel{width:min(58vh,440px);aspect-ratio:1}
  .m-pm-lifecycle-ai .lc-wheel svg{width:100%;height:100%;overflow:visible}
  .m-pm-lifecycle-ai .lc-seg{fill:var(--c-151517);stroke:var(--bg);stroke-width:4;cursor:pointer;transition:fill .35s ease}
  .m-pm-lifecycle-ai .lc-seg.on{fill:var(--green)}
  .m-pm-lifecycle-ai .lc-sl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:17px;fill:var(--fg);pointer-events:none;transition:fill .35s ease}
  .m-pm-lifecycle-ai .lc-sl.on{fill:var(--bg)}
  .m-pm-lifecycle-ai .lc-gate{fill:var(--bg);stroke:var(--green);stroke-width:3}
  .m-pm-lifecycle-ai .lc-pn .k{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:clamp(40px,5vw,68px);color:var(--green);line-height:.9;letter-spacing:-.01em}
  .m-pm-lifecycle-ai .lc-row{display:grid;grid-template-columns:130px 1fr;gap:14px;align-items:baseline;border-top:1px solid var(--line);padding:14px 0;font-size:clamp(16px,1.6vw,21px);line-height:1.35}
  .m-pm-lifecycle-ai .lc-row .t{font-family:var(--m);font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
  .m-pm-lifecycle-ai .lc-row.you{color:var(--green)}
  .m-pm-lifecycle-ai .lc-ss{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}
  .m-pm-lifecycle-ai .lc-flow svg{width:100%;height:auto;overflow:visible}
  .m-pm-lifecycle-ai .lf-st{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:18px;fill:var(--fg)}
  .m-pm-lifecycle-ai .lf-q{font-family:var(--b);font-size:16px;fill:var(--green)}
  .m-pm-lifecycle-ai .lf-ai{font-family:var(--b);font-size:14px;fill:var(--muted)}
  `,
  slides:[
  {sec:'PM CRAFT WITH AI', cls:'viz', title:`AI IN EVERY STAGE. <span class="g">YOU AT EVERY GATE.</span>`,
   body:`<div class="lc"><div class="lc-wheel"><svg viewBox="-220 -220 440 440" role="img" aria-label="A wheel of six PM stages: discover, define, design, build, launch, learn. A green gate marks the human decision after each stage."></svg></div>
     <div class="lc-pn" aria-live="polite"><div class="k"></div>
       <div class="lc-row" style="margin-top:18px"><span class="t">AI does</span><span class="ai"></span></div>
       <div class="lc-row you"><span class="t">You decide</span><span class="yd"></span></div>
       <div class="lc-row"><span class="t">Course</span><span class="lc-ss"></span></div>
       <div class="ctl"><button type="button" data-d="-1">prev stage</button><button type="button" data-d="1">next stage</button></div></div></div>`,
   init(el){
     const S=[
       {k:'Discover', ai:'Summarises interviews, clusters feedback, scans competitors.', you:'Which problem is worth solving.', s:['S3']},
       {k:'Define',   ai:'Drafts the PRD, user stories and edge cases.', you:'What is in scope, and what is out.', s:['S3','S4']},
       {k:'Design',   ai:'Makes mockups, flows and copy variants.', you:'What the user actually sees.', s:['S5']},
       {k:'Build',    ai:'Writes code, tests and a working prototype.', you:'What good looks like: the judge.', s:['S6','S7']},
       {k:'Launch',   ai:'Writes release notes, the exec update, launch comms.', you:'Go or no-go.', s:['S5','S8']},
       {k:'Learn',    ai:'Pulls the data, finds patterns, drafts the read-out.', you:'Double down, change or stop.', s:['S4','S8']}];
     const svg=el.querySelector('svg'), R1=96, R2=200, n=S.length, segs=[], lbls=[];
     const P=(r,a)=>[r*Math.cos(a), r*Math.sin(a)];
     S.forEach((st,k)=>{
       const a0=-Math.PI/2+k*2*Math.PI/n, a1=a0+2*Math.PI/n, am=(a0+a1)/2;
       const [x0,y0]=P(R2,a0),[x1,y1]=P(R2,a1),[x2,y2]=P(R1,a1),[x3,y3]=P(R1,a0);
       const p=VIZ.s('path',{d:`M${x0} ${y0}A${R2} ${R2} 0 0 1 ${x1} ${y1}L${x2} ${y2}A${R1} ${R1} 0 0 0 ${x3} ${y3}Z`,class:'lc-seg a-fade',style:`--i:${k}`},svg);
       p.addEventListener('click',()=>{ stop(); set(k); });
       segs.push(p);
       const [lx,ly]=P((R1+R2)/2,am);
       const t=VIZ.s('text',{x:lx,y:ly+6,'text-anchor':'middle',class:'lc-sl'},svg); t.textContent=st.k; lbls.push(t);
     });
     // decision gates on the boundaries (after each stage)
     S.forEach((st,k)=>{
       const a=-Math.PI/2+(k+1)*2*Math.PI/n, [gx,gy]=P(R2+4,a);
       const gg=VIZ.s('g',{class:'a-pop',style:`--i:${k+6};transform-box:fill-box;transform-origin:center`},svg);
       VIZ.s('rect',{x:gx-9,y:gy-9,width:18,height:18,class:'lc-gate',transform:`rotate(45 ${gx} ${gy})`},gg);
     });
     VIZ.s('circle',{r:R1-14,fill:'var(--c-0b0b0c)',stroke:'var(--line)'},svg);
     const c1=VIZ.s('text',{y:-8,'text-anchor':'middle',class:'lc-sl'},svg); c1.textContent='S1 + S2';
     const c2=VIZ.s('text',{y:16,'text-anchor':'middle',class:'svg-t'},svg); c2.textContent='the base';
     const pn=el.querySelector('.lc-pn');
     let cur=0, timer;
     function set(k){
       cur=(k+n)%n; const st=S[cur];
       segs.forEach((s,j)=>s.classList.toggle('on',j===cur)); lbls.forEach((t,j)=>t.classList.toggle('on',j===cur));
       pn.querySelector('.k').textContent=st.k; pn.querySelector('.ai').textContent=st.ai; pn.querySelector('.yd').textContent=st.you;
       pn.querySelector('.lc-ss').innerHTML=st.s.map(x=>`<span class="chip on">${x}</span>`).join('');
     }
     function stop(){ clearInterval(timer); }
     el.querySelectorAll('[data-d]').forEach(b=>b.addEventListener('click',()=>{ stop(); set(cur+ +b.dataset.d); }));
     set(0);
     VIZ.onShow(el,()=>{ stop(); set(0); if(VIZ.reduced) return; let k=0; timer=setInterval(()=>{ k++; set(k); if(k>=n) stop(); },1800); });
   }},
  {sec:'PM CRAFT WITH AI', cls:'viz', title:`SIX GATES <span class="g">ONLY YOU CAN PASS</span>`,
   body:`<div class="lc-flow"><svg viewBox="0 0 1120 340" role="img" aria-label="Six stages in a row with a decision gate after each one, and a loop arrow from learn back to discover."></svg></div>
     <div class="lead a-fade" style="--i:14;margin-top:18px;max-width:none">AI makes each stage <span class="g">faster.</span> It does not decide <span class="g">which way to go next.</span></div>`,
   init(el){
     const svg=el.querySelector('svg');
     const S=[['Discover','interview notes','Worth solving?'],['Define','PRD draft','What is out?'],['Design','mockups','Will users get it?'],
              ['Build','prototype','Good enough?'],['Launch','release notes','Go or no-go?'],['Learn','data read-out','Double down or stop?']];
     const w=150, gap=(1120-6*w)/5;
     VIZ.s('defs',{},svg).innerHTML='<marker id="lf-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>';
     S.forEach((s,k)=>{
       const x=k*(w+gap), g=VIZ.s('g',{class:'a-fade',style:`--i:${k*2}`},svg);
       VIZ.s('rect',{x,y:120,width:w,height:64,rx:12,fill:'var(--surface)',stroke:'var(--dim)'},g);
       const t=VIZ.s('text',{x:x+w/2,y:158,'text-anchor':'middle',class:'lf-st'},g); t.textContent=s[0];
       const a=VIZ.s('text',{x:x+w/2,y:212,'text-anchor':'middle',class:'lf-ai'},g); a.textContent='AI: '+s[1];
       if(k<5){
         const gx=x+w+gap/2, gg=VIZ.s('g',{class:'a-pop',style:`--i:${k*2+1};transform-box:fill-box;transform-origin:center`},svg);
         VIZ.s('rect',{x:gx-13,y:139,width:26,height:26,fill:'var(--bg)',stroke:'var(--green)','stroke-width':3,transform:`rotate(45 ${gx} 152)`},gg);
         const q=VIZ.s('text',{x:gx,y:k%2?250:70,'text-anchor':'middle',class:'lf-q'},gg); q.textContent=s[2];
         VIZ.s('line',{x1:gx,y1:k%2?172:82,x2:gx,y2:k%2?232:132,stroke:'var(--green)','stroke-width':1.5,'stroke-dasharray':'3 4'},gg);
       } else {
         const q=VIZ.s('text',{x:x+w/2,y:250,'text-anchor':'middle',class:'lf-q a-fade',style:'--i:11'},svg); q.textContent=s[2];
         VIZ.s('line',{x1:x+w/2,y1:220,x2:x+w/2,y2:232,stroke:'var(--green)','stroke-width':1.5,'stroke-dasharray':'3 4',class:'a-fade',style:'--i:11'},svg);
       }
     });
     VIZ.s('path',{d:`M${5*(w+gap)+w/2} 262 C ${5*(w+gap)+w/2} 330, ${w/2} 330, ${w/2} 230`,fill:'none',stroke:'var(--muted)','stroke-width':2,'marker-end':'url(#lf-ar)',pathLength:1000,class:'a-draw',style:'--len:1000;--i:10'},svg);
     const lp=VIZ.s('text',{x:560,y:334,'text-anchor':'middle',class:'lf-ai'},svg); lp.textContent='learn feeds the next discover';
   }}
  ]
});
