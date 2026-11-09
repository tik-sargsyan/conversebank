MOD({
  id:'random-number', title:'Pick a random number: humans vs AI', cluster:'foundations', fits:[1,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-random-number .rn{display:grid;grid-template-columns:1fr 1fr;gap:3vw}
  .m-random-number .rn-h{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:20px;display:flex;justify-content:space-between;align-items:baseline}
  .m-random-number .rn-h span{font-family:var(--m);font-weight:400;font-size:14px;color:var(--muted);text-transform:none;letter-spacing:0}
  .m-random-number .rn svg{width:100%;height:46vh;display:block;margin-top:10px;overflow:visible}
  .m-random-number .rn circle{fill:var(--c-55555b)}
  .m-random-number .rn circle.s{fill:var(--green)}
  .m-random-number .rn .ai circle.s{filter:drop-shadow(0 0 4px color-mix(in srgb,var(--green) 70%,transparent))}
  .slide.active.m-random-number .rn circle{animation:rn-drop .5s cubic-bezier(.3,1.3,.5,1) both;animation-delay:calc(var(--d)*1ms + 300ms)}
  @keyframes rn-drop{from{opacity:0;transform:translateY(-60px)}}
  @media (prefers-reduced-motion:reduce){.slide.active.m-random-number .rn circle{animation:none}}
  .m-random-number .rn-pct{font-family:var(--h);font-weight:900;font-size:22px;fill:var(--green)}
  .m-random-number .rn-ax{font-family:var(--h);font-weight:800;font-size:18px;fill:var(--muted)}
  .m-random-number .rn-ax.s{fill:var(--fg)}
  .m-random-number .rn-foot{display:flex;justify-content:space-between;align-items:center;margin-top:14px}
  .m-random-number .rn-foot .chip{font-size:14px}
  .m-random-number .uc{display:flex;flex-direction:column;gap:14px}
  .m-random-number .uc-row{display:grid;grid-template-columns:230px 1fr 1fr;gap:22px;align-items:center;border:1px solid var(--line);border-radius:12px;padding:12px 18px;background:var(--surface)}
  .m-random-number .uc-row .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.03em}
  .m-random-number .uc-row .k small{display:block;font-family:var(--b);font-weight:400;text-transform:none;letter-spacing:0;color:var(--muted);font-size:14px;margin-top:4px}
  .m-random-number .uc-cell{display:grid;grid-template-columns:150px 1fr;gap:12px;align-items:center;font-size:14px;color:var(--muted);line-height:1.35}
  .m-random-number .uc-cell svg{width:150px;height:54px}
  .m-random-number .uc-cell b{display:block;font-family:var(--h);text-transform:uppercase;letter-spacing:.06em;font-size:14px}
  .m-random-number .uc-cell.bad b{color:var(--warn)} .m-random-number .uc-cell.ok b{color:var(--green)}
  .m-random-number .uc-hd{display:grid;grid-template-columns:230px 1fr 1fr;gap:22px;padding:0 18px;font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.12em;font-size:14px;color:var(--muted)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`"PICK A RANDOM NUMBER, <span class="g">1 TO 10</span>"`,
   body:`<div class="rn">
     <div><div class="rn-h">100 people <span>1 dot = 1 answer</span></div><svg class="hu" viewBox="0 0 520 330" role="img" aria-label="Human answers: a spread with a peak at 7, few 1s and 10s"></svg></div>
     <div><div class="rn-h">An AI, asked 100 times <span>1 dot = 1 answer</span></div><svg class="ai" viewBox="0 0 520 330" role="img" aria-label="AI answers: most land on 7, a very narrow spike"></svg></div></div>
     <div class="rn-foot"><div class="lead">Humans lean on 7. <span class="g">The model leans on it even harder.</span></div><span class="chip w">illustrative, varies by model and settings</span></div>`,
   init(el){
     const H=[2,5,12,9,10,9,27,13,9,4], A=[0,0,5,3,4,3,78,6,1,0]; // illustrative, each sums to 100
     function draw(svg,data){
       const per=3, r=4.4, step=10.4, colW=per*step, gap=(520-10*colW)/10, base=296;
       let k=0;
       data.forEach((n,i)=>{
         const x0=gap/2+i*(colW+gap), s=i===6;
         for(let j=0;j<n;j++){
           const c=j%per, row=Math.floor(j/per);
           VIZ.s('circle',{cx:x0+step/2+c*step, cy:base-step/2-row*step, r, class:s?'s':'', style:'--d:'+(row*45+i*12+(k++%3)*6)},svg);
         }
         const t=VIZ.s('text',{x:x0+colW/2,y:base+26,'text-anchor':'middle',class:'rn-ax'+(s?' s':'')},svg); t.textContent=i+1;
         if(s){ const p=VIZ.s('text',{x:x0+colW/2,y:base-Math.ceil(n/per)*step-10,'text-anchor':'middle',class:'rn-pct'},svg); p.textContent=n+'%'; }
       });
       VIZ.s('line',{x1:0,x2:520,y1:base+2,y2:base+2,stroke:'var(--line)','stroke-width':2},svg);
     }
     draw(el.querySelector('svg.hu'),H); draw(el.querySelector('svg.ai'),A);
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`LOOKS RANDOM <span class="w">IS NOT</span> RANDOM`,
   body:`<div class="uc-hd"><span>PM task</span><span>Ask the AI to pick</span><span>Use a real randomizer</span></div>
     <div class="uc" style="margin-top:10px">
       <div class="uc-row a-fade" style="--i:0"><div class="k">Fair task split<small>Who takes on-call this week</small></div><div class="uc-cell bad"><svg data-k="0"></svg><div><b>Same person, again</b>Picks repeat the "typical" name.</div></div><div class="uc-cell ok"><svg data-k="1"></svg><div><b>Even over time</b>Each person gets a fair share.</div></div></div>
       <div class="uc-row a-fade" style="--i:1"><div class="k">Test data<small>Fake users for a demo</small></div><div class="uc-cell bad"><svg data-k="0"></svg><div><b>Clustered</b>Every user is 34, in Berlin.</div></div><div class="uc-cell ok"><svg data-k="1"></svg><div><b>Spread out</b>Edge cases show up.</div></div></div>
       <div class="uc-row a-fade" style="--i:2"><div class="k">A/B buckets<small>Who sees variant B</small></div><div class="uc-cell bad"><svg data-k="0"></svg><div><b>Biased test</b>Your result is wrong.</div></div><div class="uc-cell ok"><svg data-k="1"></svg><div><b>Clean test</b>Use the experiment tool.</div></div></div></div>
     <div class="lead a-fade" style="--i:4;margin-top:20px">An AI model predicts what <i>looks</i> random. <span class="g">Let it write the code that calls a real randomizer.</span></div>`,
   init(el){
     const skew=[1,1,3,2,3,2,10,3,1,1], flat=[6,5,6,6,5,6,6,5,6,6];
     el.querySelectorAll('svg[data-k]').forEach(svg=>{
       svg.setAttribute('viewBox','0 0 150 54');
       const d=svg.dataset.k==='0'?skew:flat, ok=svg.dataset.k==='1';
       d.forEach((v,i)=>VIZ.s('rect',{x:i*15+2,y:50-v*4.6,width:11,height:v*4.6,rx:2,fill:ok?'var(--green)':(i===6?'var(--warn)':'var(--c-55555b)'),class:'a-rise',style:'--i:'+i},svg));
       VIZ.s('line',{x1:0,x2:150,y1:51,y2:51,stroke:'var(--line)','stroke-width':2},svg);
     });
   }}
  ]
});
