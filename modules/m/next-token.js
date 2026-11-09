MOD({
  id:'next-token', title:'Next-token odds and temperature', cluster:'foundations', fits:[1,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-next-token .nt{display:grid;grid-template-columns:1.35fr 1fr;gap:4vw;align-items:center}
  .m-next-token .nt-prompt{font-family:var(--m);font-size:clamp(22px,2.4vw,32px);color:var(--fg);margin-bottom:22px}
  .m-next-token .nt-prompt i{display:inline-block;width:.6em;height:1.05em;vertical-align:-.15em;background:var(--green);margin-left:6px;animation:nt-blink 1s steps(1) infinite}
  @keyframes nt-blink{50%{opacity:0}}
  .m-next-token .nt-bars{display:flex;flex-direction:column;gap:12px}
  .m-next-token .nt-r{display:grid;grid-template-columns:130px 1fr 72px;gap:14px;align-items:center}
  .m-next-token .nt-r .k{font-family:var(--m);font-size:20px;color:var(--fg-2);white-space:pre}
  .m-next-token .nt-r .nt-bar{height:30px;background:var(--faint);border-radius:6px;overflow:hidden}
  .m-next-token .nt-r .nt-bar b{display:block;height:100%;background:var(--fg-2);border-radius:6px;transition:width .35s cubic-bezier(.2,.8,.2,1)}
  .m-next-token .nt-r:first-child .nt-bar b{background:var(--green)}
  .m-next-token .nt-r:first-child .k{color:var(--green)}
  .m-next-token .nt-r .p{font-family:var(--m);font-size:18px;color:var(--fg);text-align:right}
  .m-next-token .nt-t .stat{font-size:clamp(64px,7.5vw,104px)}
  .m-next-token .nt-t input{width:100%}
  .m-next-token .nt-mode{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:22px;margin-top:10px}
  .m-next-token .nt-cols{display:grid;grid-template-columns:1fr 1fr;gap:28px}
  .m-next-token .nt-col{border:1px solid var(--line);border-radius:14px;padding:16px 18px;background:var(--surface)}
  .m-next-token .nt-col .h{display:flex;justify-content:space-between;align-items:baseline}
  .m-next-token .nt-col .h b{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:22px;letter-spacing:.03em}
  .m-next-token .nt-col .h span{font-family:var(--m);font-size:14px;color:var(--muted)}
  .m-next-token .nt-chips{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:14px}
  .m-next-token .nt-chip{font-family:var(--m);font-size:16px;text-align:center;padding:8px 4px;border-radius:8px;background:var(--c-1d1d20);color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .m-next-token .nt-chip.top{background:color-mix(in srgb,var(--green) 18%,transparent);color:var(--green);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--green) 50%,transparent)}
  .m-next-token .nt-use{font-size:15px;color:var(--muted);margin-top:14px;line-height:1.4}
  .m-next-token .nt-use b{color:var(--fg);font-weight:500}
  .slide.active.m-next-token .nt-chip{animation:m-pop .35s cubic-bezier(.3,1.4,.4,1) both;animation-delay:calc(var(--i)*45ms + 200ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-next-token .nt-chip,.m-next-token .nt-prompt i{animation:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`ONE TOKEN AT A TIME, <span class="g">BY ODDS</span>`,
   body:`<div class="nt"><div><div class="nt-prompt">The capital of France is<i></i></div><div class="nt-bars"></div>
       <div class="src" style="margin-top:14px"><b>Illustrative odds,</b> not from a real model</div></div>
     <div class="nt-t"><div class="stat-cap" style="margin:0 0 4px">temperature</div><div class="stat nt-tv">0.7</div>
       <div class="ctl"><span>sharp</span><input type="range" min="0.1" max="2" step="0.05" value="0.7" aria-label="Temperature"><span>flat</span></div>
       <div class="nt-mode"></div>
       <div class="stat-cap nt-modec" style="max-width:none"></div></div></div>`,
   init(el){
     const C=[[' Paris',4.0],[' a',2.2],[' the',2.0],[' located',1.6],[' known',1.3],[' home',1.0]];
     el.querySelector('.nt-bars').innerHTML=C.map(c=>`<div class="nt-r"><div class="k">${c[0].replace(' ','·')}</div><div class="nt-bar"><b></b></div><div class="p"></div></div>`).join('');
     const bs=[...el.querySelectorAll('.nt-r .nt-bar b')], ps=[...el.querySelectorAll('.nt-r .p')], rng=el.querySelector('input'), tv=el.querySelector('.nt-tv'), md=el.querySelector('.nt-mode'), mc=el.querySelector('.nt-modec');
     function set(T){
       const e=C.map(c=>Math.exp(c[1]/T)), s=e.reduce((a,b)=>a+b,0), p=e.map(x=>x/s);
       bs.forEach((b,i)=>b.style.width=(p[i]*100).toFixed(1)+'%');
       ps.forEach((x,i)=>x.textContent=(p[i]*100<1&&p[i]>0?'<1':Math.round(p[i]*100))+'%');
       tv.textContent=T.toFixed(2).replace(/0$/,'');
       if(T<0.5){ md.innerHTML='<span class="g">Predictable</span>'; mc.textContent='Same answer almost every time. Good for facts, extraction, formatting.'; }
       else if(T<=1.1){ md.innerHTML='Balanced'; mc.textContent='Mostly the top choice, with some variety.'; }
       else { md.innerHTML='<span class="w">Creative, riskier</span>'; mc.textContent='Odds flatten. More variety, more chance of a wrong or odd word.'; }
     }
     rng.addEventListener('input',()=>set(+rng.value));
     el.addEventListener('keydown',e=>e.stopPropagation());
     set(0.7);
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`ASK 16 TIMES, <span class="g">GET WHAT?</span>`,
   body:`<div class="nt-prompt" style="font-size:clamp(20px,2vw,26px)">The capital of France is ___</div>
     <div class="nt-cols">
       <div class="nt-col"><div class="h"><b>Temperature 0.2</b><span class="nt-c0"></span></div><div class="nt-chips nt-s0"></div>
         <div class="nt-use"><b>Use for:</b> data extraction, release notes, anything with one right answer.</div></div>
       <div class="nt-col"><div class="h"><b>Temperature 1.5</b><span class="nt-c1"></span></div><div class="nt-chips nt-s1"></div>
         <div class="nt-use"><b>Use for:</b> brainstorming feature names, taglines, many first drafts.</div></div></div>
     <div class="ctl"><button type="button">sample again</button><span>16 draws each · illustrative odds</span></div>`,
   init(el){
     const C=[['Paris',4.0],['a',2.2],['the',2.0],['located',1.6],['known',1.3],['home',1.0]];
     let seed=5; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
     const probs=T=>{ const e=C.map(c=>Math.exp(c[1]/T)), s=e.reduce((a,b)=>a+b,0); return e.map(x=>x/s); };
     const draw=p=>{ const r=rnd(); let a=0; for(let i=0;i<p.length;i++){ a+=p[i]; if(r<a) return i; } return 0; };
     function sample(){
       [[0.2,'.nt-s0','.nt-c0'],[1.5,'.nt-s1','.nt-c1']].forEach(([T,s,c])=>{
         const p=probs(T), out=Array.from({length:16},()=>draw(p));
         el.querySelector(s).innerHTML=out.map((k,i)=>`<div class="nt-chip${k===0?' top':''}" style="--i:${i}">${C[k][0]}</div>`).join('');
         el.querySelector(c).textContent=out.filter(k=>k===0).length+' of 16 Paris';
       });
     }
     sample();
     el.querySelector('button').addEventListener('click',()=>{ sample(); el.querySelectorAll('.nt-chip').forEach(x=>{ x.style.animation='none'; x.getBoundingClientRect(); x.style.animation=''; }); });
     el.addEventListener('keydown',e=>e.stopPropagation());
   }}
  ]
});
