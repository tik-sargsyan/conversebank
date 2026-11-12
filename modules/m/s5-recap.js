MOD({
  id:'s5-recap', title:'Session 5 recap: the three that matter, with mini visuals', cluster:'course', fits:[5,6], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`


  .m-s5-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s5-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s5-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s5-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s5-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s5-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s5-recap .rc-s b{color:var(--green)}
  .m-s5-recap .mv-b{fill:var(--line-2)} .m-s5-recap .mv-b.g{fill:var(--green)}
  .m-s5-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s5-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s5-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s5-recap .mv-y{fill:var(--green)} .m-s5-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s5-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s5-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s5-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s5-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s5-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s5-recap .rc{grid-template-columns:repeat(2,1fr)}}
  .m-s5-recap .mv-ar{fill:none;stroke:var(--green);stroke-width:2.5;stroke-dasharray:4 4}
  .m-s5-recap .mv-sh{fill:none;stroke:var(--risk);stroke-width:4} .m-s5-recap .mv-x{stroke:var(--risk);stroke-width:4;stroke-linecap:round}
  .m-s5-recap .mv-doc{fill:var(--surface);stroke:var(--fg-2);stroke-width:2} .m-s5-recap .mv-dl{stroke:var(--fg-2);stroke-width:2}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S5RECAP; }},
  {sec:'RECAP · SESSION 5', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:820px;margin:16px auto 0">Tonight your agents become a team that runs on its own.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S5RECAP; }}
  ]
});
window.S5RECAP=[
 {art:`<svg viewBox="0 0 160 96"><circle cx="80" cy="48" r="34" fill="none" stroke="var(--green)" stroke-width="3" stroke-dasharray="30 8"/><rect x="50" y="36" width="60" height="24" rx="12" class="mv-y"/><text x="80" y="52" class="mv-yt">goal</text></svg>`,
  t:'An agent is a model, tools, a loop and a goal.', s:'So you <b>give it a clear goal.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="8" y="24" width="56" height="48" rx="8" class="mv-k"/><text x="36" y="52" class="mv-kt" style="font-size:12px">main</text><line x1="66" y1="48" x2="86" y2="48" class="mv-r"/><rect x="88" y="16" width="64" height="64" rx="8" class="mv-y"/><text x="120" y="44" class="mv-yt">agent</text><text x="120" y="60" class="mv-yt" style="font-size:10px">own desk</text></svg>`,
  t:'An agent is a helper with its own desk.', s:'So you <b>describe the job once, in a file.</b>'},
 {art:`<svg viewBox="0 0 160 96"><rect x="16" y="20" width="80" height="10" rx="5" class="mv-y"/><rect x="16" y="40" width="58" height="10" rx="5" class="mv-y"/><rect x="16" y="60" width="34" height="10" rx="5" class="mv-k"/><circle cx="126" cy="46" r="22" class="mv-y"/><path d="M115 46l8 8 14-15" fill="none" stroke="var(--on-accent)" stroke-width="4" stroke-linecap="round"/></svg>`,
  t:'A judge scores output against your rubric.', s:'So you <b>test it with planted mistakes.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
