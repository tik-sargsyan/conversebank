MOD({
  id:'ai-myths', title:'Four AI myths, checked against 2026 data', cluster:'society', fits:[1], minutes:5,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-ai-myths .my{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:6px}
  .m-ai-myths .my-c{display:grid;grid-template-columns:118px 1fr;gap:18px;align-items:center;border:1px solid var(--line-2);border-radius:14px;padding:14px 18px;background:var(--surface)}
  .m-ai-myths .my-q{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);text-transform:uppercase;color:var(--risk);letter-spacing:.02em}
  .m-ai-myths .my-q::before{content:'MYTH';display:block;font:600 11px var(--m);letter-spacing:.14em;color:var(--muted);margin-bottom:4px}
  .m-ai-myths .my-s{font-size:14px;color:var(--fg-2);line-height:1.35;margin-top:6px}
  .m-ai-myths .my-s b{color:var(--fg)}
  .m-ai-myths .my-r{font-size:15px;color:var(--fg);line-height:1.35;margin-top:8px;padding-top:8px;border-top:1px solid var(--line)}
  .m-ai-myths .my-r::before{content:'REALITY  ';font:600 11px var(--m);letter-spacing:.14em;color:var(--green)}
  .m-ai-myths svg{width:118px;height:118px;display:block;overflow:visible}
  .m-ai-myths .rg-b{fill:none;stroke:var(--line-2);stroke-width:12}
  .m-ai-myths .rg-v{fill:none;stroke:var(--risk);stroke-width:12;stroke-linecap:round;transform:rotate(-90deg);transform-origin:59px 59px}
  .m-ai-myths .rg-v.g{stroke:var(--green)}
  .m-ai-myths .rg-t{font:900 28px var(--h);fill:var(--fg);text-anchor:middle}
  .m-ai-myths .rg-l{font:500 9px var(--m);fill:var(--muted);text-anchor:middle;letter-spacing:.06em}
  .m-ai-myths .br{fill:var(--line-2)} .m-ai-myths .br.v{fill:var(--risk)} .m-ai-myths .br.g{fill:var(--green)}
  .m-ai-myths .bt{font:800 20px var(--h);fill:var(--fg)} .m-ai-myths .bl{font:500 10px var(--m);fill:var(--muted);letter-spacing:.04em}
  .slide.active.m-ai-myths .my-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*180ms + 150ms)}
  .slide.active.m-ai-myths .rg-v{animation:my-ring 1.2s cubic-bezier(.4,0,.2,1) both;animation-delay:calc(var(--i)*180ms + 400ms)}
  @keyframes my-ring{from{stroke-dashoffset:302}}
  @media (prefers-reduced-motion:reduce){.slide.active.m-ai-myths .my-c,.slide.active.m-ai-myths .rg-v{animation:none}}
  @media (max-width:900px){.m-ai-myths .my{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'AI AND SOCIETY', cls:'viz', title:`FOUR MYTHS, <span class="g">CHECKED</span>`,
   body:`<div class="my"></div>
     <div class="src" style="margin-top:10px"><b>Sources:</b> Pew Research 2026 · Gallup 2026 · KPMG and University of Melbourne 2025 · public belief survey, Jan 2026 · Harvard Business School and BCG 2023</div>`,
   init(el){
     const C=2*Math.PI*48;
     const ring=(p,lab,g)=>`<svg viewBox="0 0 118 118"><circle cx="59" cy="59" r="48" class="rg-b"/><circle cx="59" cy="59" r="48" class="rg-v${g?' g':''}" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-p/100)}"/><text x="59" y="64" class="rg-t">${g?'+':''}${p}%</text><text x="59" y="82" class="rg-l">${lab}</text></svg>`;
     const bars=`<svg viewBox="0 0 118 118"><rect x="14" y="${104-71}" width="36" height="71" rx="4" class="br v"/><rect x="68" y="${104-27}" width="36" height="27" rx="4" class="br"/><text x="32" y="${104-77}" class="bt" text-anchor="middle">71%</text><text x="86" y="${104-33}" class="bt" text-anchor="middle">27%</text><text x="32" y="116" class="bl" text-anchor="middle">JOBS</text><text x="86" y="116" class="bl" text-anchor="middle">MY JOB</text></svg>`;
     const M=[
       {q:'"AI will take my job"', art:bars, s:'<b>71%</b> expect fewer jobs overall. Only <b>27%</b> fear for their own job.', r:'AI takes over tasks first. People who use AI well take the jobs of people who don\'t.'},
       {q:'"AI is always right"', art:ring(66,'UNCHECKED'), s:'<b>66%</b> of users rely on AI output without checking it. <b>56%</b> made work mistakes because of it.', r:'It sounds sure, and it is often wrong. Check every fact, number and quote.'},
       {q:'"AI looks answers up"', art:ring(44,'DATABASE'), s:'<b>44%</b> of regular AI users think it searches a database. Only <b>27%</b> know how it learns.', r:'It predicts the most likely next words. Plausible is not the same as true.'},
       {q:'"AI is only for engineers"', art:ring(40,'BETTER',1), s:'Consultants, not engineers, did <b>40%</b> better work with AI on tasks it handles well.', r:'It rewards clear thinking and clear writing. That is a core manager skill.'}];
     el.querySelector('.my').innerHTML=M.map((m,i)=>`<div class="my-c" style="--i:${i}">${m.art.replace('class="rg-v','style="--i:'+i+'" class="rg-v')}<div><div class="my-q">${m.q}</div><div class="my-s">${m.s}</div><div class="my-r">${m.r}</div></div></div>`).join('');
   }}
  ]
});
