MOD({
  id:'ai-evidence', title:'What 2026 studies say: the jump, PMs design, the floor, borrowed skill', cluster:'foundations', fits:[1], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-ai-evidence .ev4{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:4px}
  .m-ai-evidence .ev4 .ev-c{display:grid;grid-template-columns:150px 1fr;grid-template-rows:auto 1fr auto;column-gap:16px;row-gap:4px;padding:12px 16px}
  .m-ai-evidence .ev4 .ev-k{grid-column:2} .m-ai-evidence .ev4 .ev-art{grid-column:1;grid-row:1/4;height:auto} .m-ai-evidence .ev4 .ev-h{grid-column:2;font-size:clamp(15px,1.4vw,18px)} .m-ai-evidence .ev4 .ev-s{grid-column:2}
  .m-ai-evidence .ev4 .bars{height:104px;padding-top:4px;gap:10px} .m-ai-evidence .ev4 .bars i{width:44px} .m-ai-evidence .ev4 .bars div{font-size:10px}
  .m-ai-evidence .ds{display:inline-grid;grid-template-columns:repeat(2,18px);gap:5px}
  .m-ai-evidence .ds i{display:block;width:18px;height:18px;border:2px solid var(--fg-2);border-radius:4px}
  .m-ai-evidence .ev-c{border:1px solid var(--line-2);border-top:4px solid var(--green);border-radius:14px;padding:16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:8px}
  .m-ai-evidence .ev-c.w{border-top-color:var(--risk)}
  .m-ai-evidence .ev-k{font:800 13px var(--h);letter-spacing:.12em;text-transform:uppercase;color:var(--green)}
  .m-ai-evidence .ev-c.w .ev-k{color:var(--risk)}
  .m-ai-evidence .ev-art{height:120px;display:flex;align-items:center;justify-content:center;gap:10px}
  .m-ai-evidence .ev-h{font:800 clamp(17px,1.7vw,21px)/1.2 var(--h);color:var(--fg)}
  .m-ai-evidence .ev-p{font-size:14px;color:var(--fg-2);line-height:1.35}
  .m-ai-evidence .ev-s{font:12px var(--m);color:var(--muted);margin-top:auto;padding-top:8px;border-top:1px solid var(--line)}
  .m-ai-evidence .pp{width:34px;height:52px;position:relative}
  .m-ai-evidence .pp::before{content:'';position:absolute;left:8px;top:0;width:18px;height:18px;border-radius:50%;background:var(--fg-2)}
  .m-ai-evidence .pp::after{content:'';position:absolute;left:0;top:22px;width:34px;height:30px;border-radius:17px 17px 6px 6px;background:var(--fg-2)}
  .m-ai-evidence .pp.g::before,.m-ai-evidence .pp.g::after{background:var(--green)}
  .m-ai-evidence .ai{font:800 14px var(--m);color:var(--on-accent);background:var(--green);border-radius:6px;padding:4px 7px}
  .m-ai-evidence .op{font:900 28px var(--h);color:var(--muted)}
  .m-ai-evidence .bars{display:flex;align-items:flex-end;gap:16px;height:110px}
  .m-ai-evidence .bars div{display:flex;flex-direction:column;align-items:center;gap:6px;font:500 11px var(--m);color:var(--muted);text-align:center}
  .m-ai-evidence .bars i{display:block;width:54px;border-radius:6px 6px 2px 2px;background:var(--line-2);transform-origin:bottom}
  .m-ai-evidence .bars i.g{background:var(--green)} .m-ai-evidence .bars i.o{background:none;border:2px dashed var(--fg-2)} .m-ai-evidence .bars i.r{background:var(--risk)}
  .m-ai-evidence .bars b{font:900 20px var(--h);color:var(--fg)}
  .m-ai-evidence .bars b.r{color:var(--risk)}
  .slide.active.m-ai-evidence .ev-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*200ms + 150ms)}
  .slide.active.m-ai-evidence .bars i{animation:ev-up .8s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*200ms + 500ms)}
  @keyframes ev-up{from{transform:scaleY(0)}}
  @media (prefers-reduced-motion:reduce){.slide.active.m-ai-evidence .ev-c,.slide.active.m-ai-evidence .bars i{animation:none}}
  @media (max-width:900px){.m-ai-evidence .ev4{grid-template-columns:1fr}}
  .m-ai-evidence .bcg{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:14px;margin-top:16px}
  .m-ai-evidence .bcg .pan{border:1px solid var(--line);border-top:4px solid var(--accent);border-radius:12px;padding:16px 18px;background:var(--surface);display:flex;flex-direction:column;gap:10px}
  .m-ai-evidence .bcg .bph{font:800 13px var(--h);letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}
  .m-ai-evidence .bcg .kp{display:flex;align-items:baseline;gap:12px}
  .m-ai-evidence .bcg .kp b{font:900 40px/1 var(--h);color:var(--accent);min-width:110px}
  .m-ai-evidence .bcg .kp span{color:var(--fg-2);font-size:15px;line-height:1.3}
  .m-ai-evidence .bcg .kp.big b{font-size:58px}
  .m-ai-evidence .bcg .out{border-top-color:var(--risk)} .bcg .out .bph,.bcg .out .kp b{color:var(--risk)}
  .m-ai-evidence .bcg .out .kp{flex-direction:column;gap:6px}
  .m-ai-evidence .bcg .lift{border-top-color:var(--fg-2)} .bcg .lift .bph{color:var(--fg)}
  .m-ai-evidence .bcg .pc{color:var(--muted);font-size:14px;line-height:1.4;margin-top:auto}
  .m-ai-evidence .bcg .hb{display:grid;grid-template-columns:1fr auto;gap:4px 10px;align-items:center}
  .m-ai-evidence .bcg .hb span{grid-column:1/-1;color:var(--fg-2);font-size:14px}
  .m-ai-evidence .bcg .hb i{display:block;height:14px;border-radius:4px;background:var(--accent)}
  .m-ai-evidence .bcg .hb b{font:900 22px var(--h);color:var(--fg)}
  @media (max-width:900px){.m-ai-evidence .bcg{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'WHY NOW', cls:'viz', title:`WHAT 2026 <span class="g">STUDIES SAY</span>`,
   body:`<div class="ev4">
     <div class="ev-c" style="--i:0"><div class="ev-k">The jump in one year</div>
       <div class="ev-art"><div class="bars"><div><b class="r">−19%</b><i class="r" style="height:36px;--i:0"></i>2025 tools</div><div><b>+18%</b><i class="g" style="height:36px;--i:0"></i>2026 tools</div></div></div>
       <div class="ev-h">Same expert developers: slower with AI in 2025, faster in 2026.</div>
       <div class="ev-s">METR · Feb 2026 · many now refuse to work without AI</div></div>
     <div class="ev-c" style="--i:1"><div class="ev-k">PMs now design</div>
       <div class="ev-art"><div class="pp g"></div><span class="ai">AI</span><span class="op">→</span><span class="ds"><i></i><i></i><i></i><i></i></span></div>
       <div class="ev-h">With Figma Make, PMs finished simple design tasks faster than before.</div>
       <div class="ev-s">Randomized trial · 50 PMs, 50 designers · Sept 2026</div></div>
     <div class="ev-c" style="--i:2"><div class="ev-k">It lifts the floor</div>
       <div class="ev-art"><div class="bars"><div><b>0.55</b><i style="height:52px;--i:2"></i>gap without AI</div><div><b>0.14</b><i class="g" style="height:13px;--i:2"></i>gap with AI</div></div></div>
       <div class="ev-h">AI cut the gap between more and less educated workers by three quarters.</div>
       <div class="ev-s">NBER randomized trial · 1,174 adults · Feb 2026</div></div>
     <div class="ev-c w" style="--i:3"><div class="ev-k">But it is borrowed skill</div>
       <div class="ev-art"><div class="bars"><div><b>↑</b><i class="g" style="height:60px;--i:3"></i>with AI</div><div><b class="r">↓</b><i class="r" style="height:20px;--i:3"></i>AI removed</div></div></div>
       <div class="ev-h">Consultants did data science beyond their skills. Without AI, the gain was gone.</div>
       <div class="ev-s">Nature Human Behaviour · 487 consultants · Oct 2026</div></div></div>`},
  {sec:'WHY NOW', cls:'viz', title:`AND IT ALREADY <span class="g">WORKS</span>`,
   body:`<div class="sub" style="margin-top:0">758 BCG consultants. Real consulting tasks. Half got AI, half did not.</div>
   <div class="bcg">
     <div class="pan in"><div class="bph">Task AI is good at</div>
       <div class="kp"><b>+12%</b><span>more tasks done</span></div>
       <div class="kp"><b>+25%</b><span>faster</span></div>
       <div class="kp big"><b>+40%</b><span>higher quality</span></div></div>
     <div class="pan out"><div class="bph">Task just outside its skill</div>
       <div class="kp big"><b>−19</b><span>points less likely to get the right answer</span></div>
       <div class="pc">The AI sounded sure. People trusted it, and got it wrong.</div></div>
     <div class="pan lift"><div class="bph">Who gains most</div>
       <div class="hb"><span>Weaker performers</span><i style="width:100%"></i><b>+43%</b></div>
       <div class="hb"><span>Stronger performers</span><i style="width:40%"></i><b>+17%</b></div>
       <div class="pc">AI lifts the floor more than the ceiling.</div></div></div>
   <div class="cap" style="max-width:900px;margin:12px auto 0">Same people, same AI. The result depends on <b style="color:var(--fg)">which side of the edge</b> the task sits.</div>
   <div class="src"><b>Source:</b> Dell'Acqua et al., "Navigating the Jagged Technological Frontier", Harvard Business School and BCG, 2023</div>`}
  ]
});
