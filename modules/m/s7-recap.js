MOD({
  id:'s7-recap', title:'Session 7 recap: the three that matter, with mini visuals', cluster:'course', fits:[7,8], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`


  .m-s7-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s7-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s7-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s7-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s7-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s7-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s7-recap .rc-s b{color:var(--green)}
  .m-s7-recap .mv-b{fill:var(--line-2)} .m-s7-recap .mv-b.g{fill:var(--green)}
  .m-s7-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s7-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s7-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s7-recap .mv-y{fill:var(--green)} .m-s7-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s7-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s7-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s7-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s7-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s7-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s7-recap .rc{grid-template-columns:repeat(2,1fr)}}
  .m-s7-recap .mv-ar{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:4 4}
  .m-s7-recap .mv-sh{fill:none;stroke:var(--risk);stroke-width:4} .m-s7-recap .mv-x{stroke:var(--risk);stroke-width:4;stroke-linecap:round}
  .m-s7-recap .mv-doc{fill:var(--surface);stroke:var(--fg-2);stroke-width:2} .m-s7-recap .mv-dl{stroke:var(--fg-2);stroke-width:2}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S7RECAP; }},
  {sec:'RECAP · SESSION 7', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:820px;margin:16px auto 0">Your app runs on a preview link. Tonight it goes live.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S7RECAP; }}
  ]
});
window.S7RECAP=[
 {art:`<svg viewBox="0 0 160 96"><circle cx="80" cy="48" r="38" class="mv-k"/><circle cx="80" cy="48" r="14" class="mv-y"/><text x="80" y="88" class="mv-t">one magic moment</text></svg>`,
  t:'Scope is the whole game.', s:'So you <b>build one magic moment.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="6" y="34" width="44" height="26" rx="8" class="mv-y"/><text x="28" y="51" class="mv-yt">plan</text><line x1="52" y1="47" x2="66" y2="47" class="mv-r"/><circle cx="80" cy="47" r="10" class="mv-k"/><circle cx="106" cy="47" r="10" class="mv-k"/><circle cx="132" cy="47" r="10" class="mv-k"/></svg>`,
  t:'Plan first, then build in small loops.', s:'So you <b>are the PM of the build.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="20" y="22" width="120" height="52" rx="8" class="mv-k"/><rect x="20" y="22" width="120" height="12" rx="6" class="mv-y"/><text x="80" y="60" class="mv-kt" style="font-size:14px">preview URL</text></svg>`,
  t:'Ship the skeleton early.', s:'So <b>every push deploys by itself.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
