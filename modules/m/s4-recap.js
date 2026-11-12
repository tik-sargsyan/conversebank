MOD({
  id:'s4-recap', title:'Session 4 recap: the three that matter, with mini visuals', cluster:'course', fits:[4,5], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`


  .m-s4-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s4-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s4-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s4-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s4-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s4-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s4-recap .rc-s b{color:var(--green)}
  .m-s4-recap .mv-b{fill:var(--line-2)} .m-s4-recap .mv-b.g{fill:var(--green)}
  .m-s4-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s4-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s4-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s4-recap .mv-y{fill:var(--green)} .m-s4-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s4-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s4-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s4-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s4-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s4-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s4-recap .rc{grid-template-columns:repeat(2,1fr)}}
  .m-s4-recap .mv-ar{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:4 4}
  .m-s4-recap .mv-sh{fill:none;stroke:var(--risk);stroke-width:4} .m-s4-recap .mv-x{stroke:var(--risk);stroke-width:4;stroke-linecap:round}
  .m-s4-recap .mv-doc{fill:var(--surface);stroke:var(--fg-2);stroke-width:2} .m-s4-recap .mv-dl{stroke:var(--fg-2);stroke-width:2}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S4RECAP; }},
  {sec:'RECAP · SESSION 4', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:820px;margin:16px auto 0">Your skills now reach your real tools. Next: agents that run them for you.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S4RECAP; }}
  ]
});
window.S4RECAP=[
 {art:`<svg viewBox="0 0 160 96"><circle cx="80" cy="48" r="16" class="mv-y"/><text x="80" y="52" class="mv-yt">MCP</text><line x1="102" y1="48" x2="132" y2="48" class="mv-r"/><circle cx="138" cy="48" r="7" class="mv-k"/><line x1="58" y1="48" x2="28" y2="48" class="mv-r"/><circle cx="22" cy="48" r="7" class="mv-k"/><line x1="93.2" y1="30.4" x2="111.2" y2="17.599999999999998" class="mv-r"/><circle cx="114.8" cy="14.399999999999999" r="7" class="mv-k"/><line x1="66.8" y1="30.4" x2="48.8" y2="17.599999999999998" class="mv-r"/><circle cx="45.2" cy="14.399999999999999" r="7" class="mv-k"/><line x1="93.2" y1="65.6" x2="111.2" y2="78.4" class="mv-r"/><circle cx="114.8" cy="81.6" r="7" class="mv-k"/><line x1="66.8" y1="65.6" x2="48.8" y2="78.4" class="mv-r"/><circle cx="45.2" cy="81.6" r="7" class="mv-k"/></svg>`,
  t:'MCP is one plug for every tool.', s:'So <b>any tool can join.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="6" y="30" width="60" height="36" rx="10" class="mv-y"/><text x="36" y="52" class="mv-yt">how</text><text x="80" y="56" class="mv-kt">+</text><rect x="94" y="30" width="60" height="36" rx="10" class="mv-k"/><text x="124" y="52" class="mv-kt" style="font-size:14px">where</text></svg>`,
  t:'A skill knows how. A connector knows where.', s:'So you <b>combine them.</b>'},
 {art:`<svg viewBox="0 0 160 96"><circle cx="80" cy="48" r="40" fill="none" stroke="var(--risk)" stroke-width="2" stroke-dasharray="4 4"/><circle cx="80" cy="48" r="26" fill="none" stroke="var(--warn)" stroke-width="2" stroke-dasharray="4 4"/><circle cx="80" cy="48" r="11" class="mv-y"/></svg>`,
  t:'Every connector widens the blast radius.', s:'So you <b>read before you allow.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
