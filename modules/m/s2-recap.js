MOD({
  id:'s2-recap', title:'Session 2 recap: the three that matter, with mini visuals', cluster:'course', fits:[2,3], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`

  .m-s2-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s2-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s2-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s2-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s2-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s2-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s2-recap .rc-s b{color:var(--green)}
  .m-s2-recap .mv-b{fill:var(--line-2)} .m-s2-recap .mv-b.g{fill:var(--green)}
  .m-s2-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s2-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s2-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s2-recap .mv-y{fill:var(--green)} .m-s2-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s2-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s2-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s2-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s2-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s2-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s2-recap .rc{grid-template-columns:repeat(2,1fr)}}
  .m-s2-recap .mv-ar{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:4 4}
  .m-s2-recap .mv-sh{fill:none;stroke:var(--risk);stroke-width:4} .m-s2-recap .mv-x{stroke:var(--risk);stroke-width:4;stroke-linecap:round}
  .m-s2-recap .mv-doc{fill:var(--surface);stroke:var(--fg-2);stroke-width:2} .m-s2-recap .mv-dl{stroke:var(--fg-2);stroke-width:2}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S2RECAP; }},
  {sec:'RECAP · SESSION 2', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:820px;margin:16px auto 0">The gap: Claude Code only sees files in your folder. Your research lives in other tools. Tonight you connect them.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S2RECAP; }}
  ]
});
window.S2RECAP=[
 {art:`<svg viewBox="0 0 160 96">${['G','C','O','C'].map((l,k)=>`<rect x="${6+k*38}" y="24" width="32" height="44" rx="6" class="mv-k"/><text x="${22+k*38}" y="55" class="mv-kt">${l}</text>`).join('')}</svg>`,
  t:'Context does most of the work.', s:'So you <b>write G·C·O·C.</b>'},
 {art:`<svg viewBox="0 0 160 96"><path d="M96 20 Q132 26 130 58" class="mv-ar"/><path d="M110 82 Q80 92 50 82" class="mv-ar"/><path d="M30 58 Q28 26 64 20" class="mv-ar"/>${[['plan',80,18],['act',134,74],['check',26,74]].map(([t,x,y])=>`<rect x="${x-24}" y="${y-11}" width="48" height="22" rx="11" class="mv-y"/><text x="${x}" y="${y+4}" class="mv-yt">${t}</text>`).join('')}</svg>`,
  t:'Claude Code reads, acts and checks.', s:'So you <b>read the ask, then approve.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="20" y="10" width="56" height="74" rx="6" class="mv-doc"/><line x1="30" y1="30" x2="66" y2="30" class="mv-dl"/><line x1="30" y1="44" x2="66" y2="44" class="mv-dl"/><line x1="30" y1="58" x2="56" y2="58" class="mv-dl"/><circle cx="116" cy="47" r="20" class="mv-y"/><text x="116" y="51" class="mv-yt">YOU</text></svg>`,
  t:'CLAUDE.md holds your rules.', s:'So Claude <b>knows you every time.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
