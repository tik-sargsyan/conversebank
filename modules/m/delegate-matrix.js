MOD({
  id:'delegate-matrix', title:'What to delegate: risk vs ease of checking', cluster:'pm', fits:[1,6], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-delegate-matrix .dm{display:grid;grid-template-columns:1fr 300px;gap:3vw;align-items:center}
  .m-delegate-matrix .dm svg{width:100%;height:auto;max-height:57vh;overflow:visible}
  .m-delegate-matrix .dm-q{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:22px}
  .m-delegate-matrix .dm-qs{font-family:var(--b);font-size:14px;fill:var(--muted)}
  .m-delegate-matrix .dm-ax{font-family:var(--m);font-size:14px;fill:var(--fg-2);text-transform:uppercase;letter-spacing:.08em}
  .m-delegate-matrix .dm-dot{transition:transform 1s cubic-bezier(.2,.8,.2,1)}
  .m-delegate-matrix .dm-dot text{font-family:var(--b);font-size:15px;fill:var(--fg)}
  .m-delegate-matrix .dm-side .rung{grid-template-columns:1fr;padding:12px 16px;gap:4px}
  .m-delegate-matrix .dm-side .rung .k{font-size:17px}
  .m-delegate-matrix .dm-side .rung .d{font-size:14px}
  `,
  slides:[
  {sec:'WORKING WITH AI', cls:'viz', title:`WHAT TO <span class="g">HAND TO AI</span>`,
   body:`<div class="dm"><svg viewBox="0 0 860 470" role="img" aria-label="Two by two matrix. Horizontal: easy to check, yes or no. Vertical: risk if wrong, low or high. Low risk and easy to check: delegate fully. Low risk and hard to check: delegate with a spot check. High risk and easy to check: AI drafts only. High risk and hard to check: keep it human."></svg>
     <div class="dm-side ladder">
       <div class="rung a-fade" style="--i:8"><div class="k" style="color:var(--green)">Ask 1: risk if wrong?</div><div class="d">Who gets hurt, and how badly, if the output is wrong?</div></div>
       <div class="rung a-fade" style="--i:9"><div class="k">Ask 2: easy to check?</div><div class="d">Can you spot a mistake in two minutes?</div></div>
       <div class="lead a-fade" style="--i:10;font-size:20px;margin-top:8px">Two questions place <span class="g">any task.</span></div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), L=90, T=20, W=740, H=400, mx=L+W/2, my=T+H/2;
     const Q=[
       {x:L,y:my,t:'Delegate fully',s:'AI does it. You glance.',f:'color-mix(in srgb,var(--green) 16%,transparent)',c:'var(--green)'},
       {x:mx,y:my,t:'Delegate + spot check',s:'Check a sample, not every line.',f:'color-mix(in srgb,var(--green) 6%,transparent)',c:'var(--green)'},
       {x:L,y:T,t:'Draft only',s:'AI drafts. You check every line.',f:'var(--c-121214)',c:'var(--fg)'},
       {x:mx,y:T,t:'Keep human',s:'AI can debate. You decide.',f:'color-mix(in srgb,var(--warn) 10%,transparent)',c:'var(--warn)'}];
     Q.forEach((q,k)=>{
       VIZ.s('rect',{x:q.x+3,y:q.y+3,width:W/2-6,height:H/2-6,rx:12,fill:q.f,class:'a-fade',style:`--i:${k}`},svg);
       const t=VIZ.s('text',{x:q.x+20,y:q.y+36,class:'dm-q a-fade',fill:q.c,style:`--i:${k}`},svg); t.textContent=q.t;
       const s=VIZ.s('text',{x:q.x+20,y:q.y+58,class:'dm-qs a-fade',style:`--i:${k}`},svg); s.textContent=q.s;
     });
     VIZ.s('line',{x1:L,x2:L+W,y1:T+H+14,y2:T+H+14,stroke:'var(--dim)'},svg);
     VIZ.s('line',{x1:L-14,x2:L-14,y1:T,y2:T+H,stroke:'var(--dim)'},svg);
     const ax=(x,y,s,a,r)=>{ const t=VIZ.s('text',{x,y,'text-anchor':a,class:'dm-ax',transform:r||''},svg); t.textContent=s; };
     ax(L,T+H+40,'easy to check','start'); ax(L+W,T+H+40,'hard to check','end'); ax(mx,T+H+40,'ease of checking','middle');
     ax(0,0,'low risk','start',`translate(${L-24} ${T+H}) rotate(-90)`); ax(0,0,'high risk','end',`translate(${L-24} ${T}) rotate(-90)`);
     ax(0,0,'risk if wrong','middle',`translate(${L-24} ${my}) rotate(-90)`);
     // x: 0 easy .. 1 hard to check ; y: 0 low .. 1 high risk
     const D=[['Meeting notes',.12,.12],['Rename tickets',.3,.3],['Interview themes',.62,.3],['Competitor scan',.7,.12],
              ['Exec update',.1,.76],['Release notes',.28,.64],['Pricing change',.62,.78],['Cut a feature',.68,.65]];
     const dots=D.map((d,k)=>{
       const px=L+d[1]*W, py=T+H-d[2]*H, g=VIZ.s('g',{class:'dm-dot','data-dx':mx-px,'data-dy':my-py,style:`transition-delay:${k*90}ms`},svg);
       const hi=d[2]>.5&&d[1]>.5;
       VIZ.s('circle',{cx:px,cy:py,r:9,fill:hi?'var(--warn)':(d[2]<.5&&d[1]<.5?'var(--green)':'var(--fg)')},g);
       const t=VIZ.s('text',{x:px+16,y:py+5},g); t.textContent=d[0];
       return g; });
     VIZ.onShow(el,()=>{
       if(VIZ.reduced) return;
       dots.forEach(g=>{ g.style.transition='none'; g.style.transform=`translate(${g.dataset.dx}px,${g.dataset.dy}px)`; });
       svg.getBoundingClientRect();
       setTimeout(()=>dots.forEach(g=>{ g.style.transition=''; g.style.transform=''; }),700);
     });
   }}
  ]
});
