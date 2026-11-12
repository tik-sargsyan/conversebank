MOD({
  id:'s3-recap', title:'Session 3 recap: the three that matter, with mini visuals', cluster:'course', fits:[3,4], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`


  .m-s3-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s3-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s3-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s3-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s3-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s3-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s3-recap .rc-s b{color:var(--green)}
  .m-s3-recap .mv-b{fill:var(--line-2)} .m-s3-recap .mv-b.g{fill:var(--green)}
  .m-s3-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s3-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s3-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s3-recap .mv-y{fill:var(--green)} .m-s3-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s3-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s3-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s3-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s3-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s3-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s3-recap .rc{grid-template-columns:repeat(2,1fr)}}
  .m-s3-recap .mv-ar{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:4 4}
  .m-s3-recap .mv-sh{fill:none;stroke:var(--risk);stroke-width:4} .m-s3-recap .mv-x{stroke:var(--risk);stroke-width:4;stroke-linecap:round}
  .m-s3-recap .mv-doc{fill:var(--surface);stroke:var(--fg-2);stroke-width:2} .m-s3-recap .mv-dl{stroke:var(--fg-2);stroke-width:2}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S3RECAP; }},
  {sec:'RECAP · SESSION 3', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:820px;margin:16px auto 0">The gap: your skills only see your folder. Your real work lives in other tools. Tonight you plug them in.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S3RECAP; }}
  ]
});
window.S3RECAP=[
 {art:`<svg viewBox="0 0 160 96"><path d="M22 18h36l8 10h72v58H22z" class="mv-k"/><rect x="40" y="46" width="80" height="24" rx="12" class="mv-y"/><text x="80" y="62" class="mv-yt">SKILL.md</text></svg>`,
  t:'A skill is a saved recipe in a folder.', s:'So you <b>build once, run forever.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="4" y="10" width="92" height="20" rx="10" class="mv-k"/><rect x="4" y="38" width="92" height="20" rx="10" class="mv-y"/><rect x="4" y="66" width="92" height="20" rx="10" class="mv-k"/><text x="50" y="52" class="mv-yt">description</text><line x1="100" y1="48" x2="116" y2="48" class="mv-r"/><circle cx="136" cy="48" r="18" class="mv-y"/><text x="136" y="52" class="mv-yt">run</text></svg>`,
  t:'Claude picks a skill by its description.', s:'So you <b>write the trigger clearly.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="20" y="12" width="120" height="22" rx="8" class="mv-y"/><text x="80" y="27" class="mv-yt">global</text><rect x="30" y="40" width="100" height="22" rx="8" class="mv-k"/><text x="80" y="55" class="mv-kt" style="font-size:12px">project</text><rect x="40" y="68" width="80" height="22" rx="8" class="mv-k"/><text x="80" y="83" class="mv-kt" style="font-size:12px">plugin</text></svg>`,
  t:'Skills live in layers.', s:'So global ones <b>follow you everywhere.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
