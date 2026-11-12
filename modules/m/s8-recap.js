MOD({
  id:'s8-recap', title:'Session 8 recap: the three that matter, with mini visuals', cluster:'course', fits:[8,8], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`


  .m-s8-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s8-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s8-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s8-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s8-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s8-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s8-recap .rc-s b{color:var(--green)}
  .m-s8-recap .mv-b{fill:var(--line-2)} .m-s8-recap .mv-b.g{fill:var(--green)}
  .m-s8-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s8-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s8-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s8-recap .mv-y{fill:var(--green)} .m-s8-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s8-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s8-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s8-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s8-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s8-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s8-recap .rc{grid-template-columns:repeat(2,1fr)}}
  .m-s8-recap .mv-ar{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:4 4}
  .m-s8-recap .mv-sh{fill:none;stroke:var(--risk);stroke-width:4} .m-s8-recap .mv-x{stroke:var(--risk);stroke-width:4;stroke-linecap:round}
  .m-s8-recap .mv-doc{fill:var(--surface);stroke:var(--fg-2);stroke-width:2} .m-s8-recap .mv-dl{stroke:var(--fg-2);stroke-width:2}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S8RECAP; }},
  {sec:'RECAP · SESSION 8', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:820px;margin:16px auto 0">You built agents and a live product.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S8RECAP; }}
  ]
});
window.S8RECAP=[
 {art:`<svg viewBox="0 0 160 96"><rect x="10" y="30" width="56" height="36" rx="10" class="mv-k"/><text x="38" y="53" class="mv-kt" style="font-size:13px">app</text><line x1="68" y1="48" x2="92" y2="48" class="mv-r"/><rect x="94" y="30" width="56" height="36" rx="10" class="mv-y"/><text x="122" y="53" class="mv-yt">API</text><text x="80" y="88" class="mv-t">free live data</text></svg>`,
  t:'Add live data from a free open API.', s:'So <b>your app shows the real world.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="22" y="48" width="30" height="40" rx="4" class="mv-y"/><rect x="65" y="26" width="30" height="62" rx="4" class="mv-y"/><rect x="108" y="10" width="30" height="78" rx="4" class="mv-y"/></svg>`,
  t:'Track only three numbers.', s:'So you <b>learn what users really do.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="30" y="30" width="100" height="36" rx="18" class="mv-y"/><circle cx="52" cy="48" r="7" fill="var(--on-accent)"/><text x="88" y="53" class="mv-yt" style="font-size:15px">LIVE</text></svg>`,
  t:'Live beats perfect.', s:'So you <b>ship, show it, and keep going.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
