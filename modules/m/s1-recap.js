MOD({
  id:'s1-recap', title:'Session 1 recap: the three that matter, with mini visuals', cluster:'course', fits:[1,2], minutes:2,
  scopes:{lite:[0], full:[0,1], open:[1]},
  css:`
  .m-s1-recap .rc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:10px;max-width:1040px;margin-left:auto;margin-right:auto}
  .m-s1-recap .rc-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-s1-recap .rc-n{font:900 30px/1 var(--h);color:var(--green)}
  .m-s1-recap .rc-c svg{width:100%;height:96px;display:block}
  .m-s1-recap .rc-t{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);color:var(--fg)}
  .m-s1-recap .rc-s{font-size:14px;color:var(--fg-2);line-height:1.35;padding-top:8px;border-top:1px solid var(--line)}
  .m-s1-recap .rc-s b{color:var(--green)}
  .m-s1-recap .mv-b{fill:var(--line-2)} .m-s1-recap .mv-b.g{fill:var(--green)}
  .m-s1-recap .mv-l{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .m-s1-recap .mv-d{stroke:var(--fg-2);stroke-width:2;stroke-dasharray:5 5}
  .m-s1-recap .mv-r{stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-s1-recap .mv-y{fill:var(--green)} .m-s1-recap .mv-yt{font:900 12px var(--h);fill:var(--on-accent);text-anchor:middle}
  .m-s1-recap .mv-k{fill:none;stroke:var(--green);stroke-width:2} .m-s1-recap .mv-kt{font:900 24px var(--h);fill:var(--green);text-anchor:middle}
  .m-s1-recap .mv-t{font:500 10px var(--m);fill:var(--muted);text-anchor:middle}
  .slide.active.m-s1-recap .rc-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-s1-recap .rc-c{animation:none}}
  @media (max-width:900px){.m-s1-recap .rc{grid-template-columns:repeat(2,1fr)}}
  `,
  slides:[
  {sec:'RECAP', cls:'viz', title:`THE THREE THAT <span class="g">MATTER</span>`,
   body:`<div class="rc"></div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S1RECAP; }},
  {sec:'RECAP · SESSION 1', cls:'viz', title:`LAST TIME, THE THREE THAT <span class="g">STUCK</span>`,
   body:`<div class="rc"></div><div class="cap" style="max-width:760px;margin:16px auto 0">Session 1 gave you the instincts. Tonight you build the workspace those instincts run in.</div>`,
   init(el){ el.querySelector('.rc').innerHTML=window.S1RECAP; }}
  ]
});
window.S1RECAP=[
 {art:`<svg viewBox="0 0 160 96"><rect x="14" y="16" width="30" height="64" rx="4" class="mv-b g"/><rect x="58" y="48" width="30" height="32" rx="4" class="mv-b"/><rect x="102" y="66" width="30" height="14" rx="4" class="mv-b"/><text x="29" y="94" class="mv-t">cat</text><text x="73" y="94" class="mv-t">dog</text><text x="117" y="94" class="mv-t">car</text></svg>`,
  t:'It predicts plausible text.', s:'So you <b>check facts.</b>'},
 {art:`<svg viewBox="0 0 160 96"><line x1="6" y1="50" x2="154" y2="50" class="mv-d"/><polyline points="8,30 34,14 52,62 76,20 96,76 120,26 150,40" class="mv-l"/></svg>`,
  t:'Its skill is uneven.', s:'So you <b>learn where the edge is.</b>'},
 {art:`<svg viewBox="0 0 160 96">${[-90,-145,-35,180,0].map(a=>{const r=a*Math.PI/180;return `<line x1="${80+Math.cos(r)*18}" y1="${48+Math.sin(r)*18}" x2="${80+Math.cos(r)*44}" y2="${48+Math.sin(r)*40}" class="mv-r"/>`;}).join('')}<circle cx="80" cy="48" r="17" class="mv-y"/><text x="80" y="52" class="mv-yt">YOU</text><line x1="50" y1="88" x2="110" y2="88" class="mv-d"/></svg>`,
  t:'AI amplifies who you are.', s:'So you <b>bring judgment.</b>'}
].map((c,i)=>`<div class="rc-c" style="--i:${i}"><div class="rc-n">${i+1}</div>${c.art}<div class="rc-t">${c.t}</div><div class="rc-s">${c.s}</div></div>`).join('');
