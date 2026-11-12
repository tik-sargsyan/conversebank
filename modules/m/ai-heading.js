MOD({
  id:'ai-heading', title:'Where it is heading: three trends and where winners stand', cluster:'society', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-ai-heading .hd{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:4px}
  .m-ai-heading .hd-c{border:1px solid var(--line-2);border-radius:14px;padding:14px 16px 12px;background:var(--surface)}
  .m-ai-heading .hd-c svg{width:100%;height:120px;display:block}
  .m-ai-heading .hd-k{font:800 clamp(17px,1.8vw,22px) var(--h);text-transform:uppercase;color:var(--fg);margin-top:8px;letter-spacing:.02em}
  .m-ai-heading .hd-d{font-size:14px;color:var(--muted);line-height:1.35;margin-top:2px}
  .m-ai-heading .ln{fill:none;stroke:var(--green);stroke-width:4;stroke-linecap:round}
  .m-ai-heading .gd{stroke:var(--line);stroke-width:1.5}
  .m-ai-heading .ag{fill:var(--green)} .m-ai-heading .ag.o{fill:none;stroke:var(--line-2);stroke-width:2}
  .m-ai-heading .tl{fill:var(--bg);stroke:var(--line-2);stroke-width:1.5} .m-ai-heading .tl-d{fill:var(--green)}
  .m-ai-heading .tt{font:500 11px var(--m);fill:var(--muted);text-anchor:middle}
  .m-ai-heading .sp{margin-top:18px}
  .m-ai-heading .sp-bar{position:relative;height:14px;border-radius:7px;background:linear-gradient(90deg,var(--risk),var(--line-2) 30%,var(--line-2) 70%,var(--risk))}
  .m-ai-heading .sp-win{position:absolute;left:50%;top:50%;width:30%;height:30px;transform:translate(-50%,-50%);border-radius:15px;background:var(--green);box-shadow:0 0 18px color-mix(in srgb,var(--green) 60%,transparent)}
  .m-ai-heading .sp-l{display:grid;grid-template-columns:1fr 1.4fr 1fr;margin-top:12px;font:800 clamp(14px,1.5vw,18px) var(--h);text-transform:uppercase;letter-spacing:.03em}
  .m-ai-heading .sp-l span:first-child{color:var(--risk)} .m-ai-heading .sp-l span:nth-child(2){text-align:center;color:var(--green)} .m-ai-heading .sp-l span:last-child{text-align:right;color:var(--risk)}
  .m-ai-heading .sp-l small{display:block;font:400 13px var(--b);text-transform:none;letter-spacing:0;color:var(--muted);margin-top:2px}
  .slide.active.m-ai-heading .hd-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  .slide.active.m-ai-heading .ln{stroke-dasharray:400;animation:m-draw 1.4s cubic-bezier(.4,0,.2,1) both .4s;--len:400}
  .slide.active.m-ai-heading .sp{animation:m-fade .6s ease both 1.1s}
  .slide.active.m-ai-heading .sp-win{animation:hd-pulse 2s ease-in-out infinite alternate 1.6s}
  @keyframes hd-pulse{to{box-shadow:0 0 30px var(--green)}}
  @media (prefers-reduced-motion:reduce){.slide.active.m-ai-heading *{animation:none!important}}
  @media (max-width:900px){.m-ai-heading .hd{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'WHERE IT IS HEADING', cls:'viz', title:`WHERE IT IS <span class="g">HEADING</span>`,
   body:`<div class="hd">
     <div class="hd-c" style="--i:0"><svg viewBox="0 0 240 120"><line x1="10" y1="110" x2="230" y2="110" class="gd"/><line x1="10" y1="10" x2="10" y2="110" class="gd"/><path d="M14 104 C 90 100, 140 80, 180 46 S 220 14, 230 10" class="ln"/></svg>
       <div class="hd-k">More capable</div><div class="hd-d">Each model generation does harder work.</div></div>
     <div class="hd-c" style="--i:1"><svg viewBox="0 0 240 120">${[0,1,2,3,4,5,6,7,8,9,10,11].map(k=>`<circle cx="${30+(k%6)*36}" cy="${36+Math.floor(k/6)*44}" r="13" class="ag${k<9?'':' o'}"/>`).join('')}</svg>
       <div class="hd-k">More agents</div><div class="hd-d">From one chat to teams of agents doing the work.</div></div>
     <div class="hd-c" style="--i:2"><svg viewBox="0 0 240 120">${['Docs','Sheets','Jira','Figma','Mail','CRM'].map((t,k)=>{const x=10+(k%3)*78,y=8+Math.floor(k/3)*58;return `<rect x="${x}" y="${y}" width="66" height="48" rx="8" class="tl"/><circle cx="${x+56}" cy="${y+10}" r="5" class="tl-d"/><text x="${x+33}" y="${y+31}" class="tt">${t}</text>`;}).join('')}</svg>
       <div class="hd-k">Inside every tool</div><div class="hd-d">AI built into the apps you already use.</div></div></div>
     <div class="sp"><div class="sp-bar"><div class="sp-win"></div></div>
       <div class="sp-l"><span>Resist it<small>fall behind</small></span><span>Judgment + a system<small>where the winners stand</small></span><span>Trust it blindly<small>ship its mistakes</small></span></div></div>`}
  ]
});
