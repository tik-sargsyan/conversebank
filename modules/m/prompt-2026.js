MOD({
  id:'prompt-2026', title:'The 2026 prompt: Goal, Context, Output, Check', cluster:'pm', fits:[1,3], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-prompt-2026 .pg{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:6px}
  .m-prompt-2026 .pg-b{border:1px solid var(--line-2);border-top:4px solid var(--green);border-radius:14px;padding:14px 16px;background:var(--surface);display:flex;flex-direction:column;gap:6px}
  .m-prompt-2026 .pg-l{font:900 46px/1 var(--h);color:var(--green)}
  .m-prompt-2026 .pg-k{font:800 clamp(16px,1.6vw,20px) var(--h);text-transform:uppercase;color:var(--fg);letter-spacing:.03em}
  .m-prompt-2026 .pg-d{font-size:14px;color:var(--fg-2);line-height:1.35}
  .m-prompt-2026 .pg-e{font:13px/1.35 var(--m);color:var(--muted);margin-top:auto;padding-top:8px;border-top:1px solid var(--line)}
  .m-prompt-2026 .pg-out{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:16px;font-size:14px;color:var(--muted)}
  .m-prompt-2026 .pg-out b{font:800 12px var(--m);letter-spacing:.12em;color:var(--fg-2);margin-right:4px}
  .m-prompt-2026 .pg-out s{border:1px dashed var(--line-2);border-radius:8px;padding:5px 10px;color:var(--muted);text-decoration-color:var(--risk)}
  .slide.active.m-prompt-2026 .pg-b{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*160ms + 150ms)}
  .slide.active.m-prompt-2026 .pg-out{animation:m-fade .6s ease both 1s}
  @media (prefers-reduced-motion:reduce){.slide.active.m-prompt-2026 *{animation:none!important}}
  @media (max-width:900px){.m-prompt-2026 .pg{grid-template-columns:repeat(2,1fr)}}
  `,
  slides:[
  {sec:'PROMPTING · G·C·O·C', cls:'viz', title:`THE 2026 PROMPT: <span class="g">G·C·O·C</span>`,
   body:`<div class="pg">
     <div class="pg-b" style="--i:0"><div class="pg-l">G</div><div class="pg-k">Goal</div><div class="pg-d">What you want and what done looks like.</div><div class="pg-e">"An exec update, so they can decide on the EU rollout."</div></div>
     <div class="pg-b" style="--i:1"><div class="pg-l">C</div><div class="pg-k">Context + why</div><div class="pg-d">What it cannot know, and why it matters. This does most of the work.</div><div class="pg-e">"18% adopted in 7 days. Execs worry about churn."</div></div>
     <div class="pg-b" style="--i:2"><div class="pg-l">O</div><div class="pg-k">Output</div><div class="pg-d">The exact shape: format, length, audience.</div><div class="pg-e">"5 bullets, under 120 words, one risk."</div></div>
     <div class="pg-b" style="--i:3"><div class="pg-l">C</div><div class="pg-k">Check</div><div class="pg-d">Let it say when it is unsure, instead of guessing.</div><div class="pg-e">"If a number is missing, say so."</div></div></div>
     <div class="pg-out"><b>LESS NEEDED IN 2026</b><s>"You are a world-class expert…"</s><s>XML tags everywhere</s><s>"Think step by step"</s><span>· modern models handle these, or use extended thinking</span></div>`}
  ]
});
