MOD({
  id:'s6-recap', title:'Session 6 recap: the three that matter, with mini visuals', cluster:'course', fits:[6,7], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`


  .m-s6-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s6-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s6-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s6-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s6-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s6-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s6-recap .rc-s b{color:var(--green)}
  .m-s6-recap .mv-b{fill:var(--line-2)} .m-s6-recap .mv-b.g{fill:var(--green)}
  .m-s6-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s6-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s6-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s6-recap .mv-y{fill:var(--green)} .m-s6-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s6-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s6-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s6-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s6-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s6-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s6-recap .rc{grid-template-columns:repeat(2,1fr)}}
  .m-s6-recap .mv-ar{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:4 4}
  .m-s6-recap .mv-sh{fill:none;stroke:var(--risk);stroke-width:4} .m-s6-recap .mv-x{stroke:var(--risk);stroke-width:4;stroke-linecap:round}
  .m-s6-recap .mv-doc{fill:var(--surface);stroke:var(--fg-2);stroke-width:2} .m-s6-recap .mv-dl{stroke:var(--fg-2);stroke-width:2}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S6RECAP; }},
  {sec:'RECAP · SESSION 6', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:820px;margin:16px auto 0">Your team of agents is ready. Tonight you build a product.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S6RECAP; }}
  ]
});
window.S6RECAP=[
 {art:`<svg viewBox="0 0 160 96"><rect x="56" y="6" width="48" height="24" rx="12" class="mv-y"/><text x="80" y="22" class="mv-yt">lead</text><line x1="80" y1="30" x2="30" y2="58" class="mv-r"/><circle cx="30" cy="70" r="12" class="mv-k"/><line x1="80" y1="30" x2="80" y2="58" class="mv-r"/><circle cx="80" cy="70" r="12" class="mv-k"/><line x1="80" y1="30" x2="130" y2="58" class="mv-r"/><circle cx="130" cy="70" r="12" class="mv-k"/></svg>`,
  t:'One lead, many helpers, one judge.', s:'So <b>only the lead writes.</b>'},
 {art:`<svg viewBox="0 0 160 96"><circle cx="80" cy="48" r="34" class="mv-k"/><line x1="80" y1="48" x2="80" y2="26" class="mv-r"/><line x1="80" y1="48" x2="98" y2="58" class="mv-r"/><circle cx="80" cy="48" r="5" class="mv-y"/></svg>`,
  t:'A schedule runs it without you.', s:'So <b>hooks and logs keep it honest.</b>'},
 {art:`<svg viewBox="0 0 160 96"><path d="M80 8l34 12v22c0 22-16 38-34 46-18-8-34-24-34-46V20z" class="mv-k"/><path d="M66 48l10 10 20-22" fill="none" stroke="var(--green)" stroke-width="4" stroke-linecap="round"/></svg>`,
  t:'Least access, untrusted input, a human check.', s:'So it is <b>safe to pack and share.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
