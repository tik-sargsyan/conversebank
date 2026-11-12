MOD({
  id:'automation-roi', title:'Which tasks to automate first', cluster:'pm', fits:[2], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-automation-roi .ar{display:grid;grid-template-columns:1fr 330px;gap:3.5vw;align-items:center}
  .m-automation-roi .ar-g{display:grid;grid-template-columns:120px repeat(5,1fr);gap:6px}
  .m-automation-roi .ar-h{font-family:var(--m);font-size:14px;color:var(--muted);text-align:center;padding:4px 0 8px}
  .m-automation-roi .ar-r{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:19px;display:flex;flex-direction:column;justify-content:center}
  .m-automation-roi .ar-r small{font-family:var(--m);font-weight:400;font-size:13px;color:var(--muted);text-transform:none;letter-spacing:0}
  .m-automation-roi .ar-c{height:clamp(80px,13vh,104px);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--h);font-weight:800;font-size:clamp(22px,2.4vw,32px);color:var(--fg);cursor:default;border:2px solid transparent;transition:border-color .2s}
  .m-automation-roi .ar-c small{font-family:var(--m);font-weight:400;font-size:13px;opacity:.75}
  .m-automation-roi .ar-c.dk{color:var(--on-accent)}
  .m-automation-roi .ar-c.sw{border-color:var(--fg)}
  .m-automation-roi .ar-c:hover,.m-automation-roi .ar-c.sel{border-color:var(--green);outline:2px solid var(--green);outline-offset:2px}
  .m-automation-roi .ar-x{font-family:var(--m);font-size:13px;color:var(--muted);text-align:center;margin-top:8px;grid-column:2/-1}
  .m-automation-roi .ar-f{border:1px solid var(--line);border-left:4px solid var(--green);border-radius:10px;background:var(--surface);padding:16px 18px}
  .m-automation-roi .ar-f .t{font-family:var(--m);font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
  .m-automation-roi .ar-f .eq{font-family:var(--m);font-size:16px;color:var(--fg);margin-top:8px;line-height:1.5}
  .m-automation-roi .ar-f .eq b{color:var(--green);font-weight:600}
  .m-automation-roi .ar-sw{display:flex;gap:10px;align-items:center;font-size:14px;color:var(--muted);margin-top:14px}
  .m-automation-roi .ar-sw i{width:18px;height:18px;border:2px solid var(--fg);border-radius:4px}
  `,
  slides:[
  {sec:'YOUR AI WORKSPACE', cls:'viz', title:`AUTOMATE THE <span class="g">TOP RIGHT</span> FIRST`,
   body:`<div class="ar"><div><div class="ar-g" role="img" aria-label="Hours saved per year by how often a task runs and how many minutes each run takes."></div></div>
     <div><div class="ar-f a-fade" style="--i:16"><div class="t">The formula</div><div class="eq">hours a year =<br>runs a year × minutes ÷ 60</div></div>
       <div class="ar-f a-fade" style="--i:17;margin-top:12px"><div class="t">This cell</div><div class="eq ar-now"></div></div>
       <div class="ar-sw a-fade" style="--i:18"><i></i>sweet spot: 50+ hours a year</div>
       <div class="lead a-fade" style="--i:19;font-size:19px;margin-top:16px">Then subtract the time to <span class="w">build and fix</span> it.</div></div></div>`,
   init(el){
     const F=[['Daily',250,'250 runs'],['Weekly',52,'52 runs'],['Monthly',12,'12 runs']], Mn=[1,5,15,30,60];
     const g=el.querySelector('.ar-g'), now=el.querySelector('.ar-now'), max=Math.log10(250*60/60+1);
     const fmt=h=>h>=10?Math.round(h):(Math.round(h*10)/10);
     let html='<div></div>'+Mn.map(m=>`<div class="ar-h">${m} min</div>`).join('');
     let i=0;
     F.forEach(f=>{
       html+=`<div class="ar-r">${f[0]}<small>${f[2]} a year</small></div>`;
       Mn.forEach(m=>{
         const h=f[1]*m/60, a=Math.log10(h+1)/max, al=(0.06+a*0.94).toFixed(2);
         html+=`<div class="ar-c a-pop${a>.7?' dk':''}${h>=50?' sw':''}" style="--i:${i++};background:color-mix(in srgb,var(--green) ${(al)*100}%,transparent)" data-f="${f[0]}" data-r="${f[1]}" data-m="${m}">${fmt(h)}<small>h / yr</small></div>`;
       });
     });
     html+='<div class="ar-x">minutes per run</div>';
     g.innerHTML=html;
     const cells=[...g.querySelectorAll('.ar-c')];
     function show(c){
       cells.forEach(x=>x.classList.toggle('sel',x===c));
       const r=+c.dataset.r, m=+c.dataset.m, h=r*m/60;
       now.innerHTML=`${c.dataset.f}, ${m} min:<br>${r} × ${m} ÷ 60 = <b>${fmt(h)} h</b>`;
     }
     cells.forEach(c=>{ c.addEventListener('mouseenter',()=>show(c)); c.addEventListener('click',()=>show(c)); });
     show(cells[3]);
   }}
  ]
});
