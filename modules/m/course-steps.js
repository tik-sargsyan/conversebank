MOD({
  id:'course-steps', title:'The course in four steps', cluster:'course', fits:[1], minutes:2,
  scopes:{lite:[0], full:[0]},
  css:`
  .cs{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;align-items:end;height:min(42vh,330px);margin-top:10px}
  .cs-st{height:calc(46% + var(--i)*18%);border:1px solid var(--line-2);border-top:4px solid var(--fg-2);border-radius:14px 14px 6px 6px;background:var(--surface);padding:16px 18px;display:flex;flex-direction:column;gap:6px;position:relative}
  .cs-st.fin{border-color:var(--accent);border-top-color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,var(--surface))}
  .cs-ic svg{width:40px;height:40px;fill:none;stroke:var(--fg-2);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
  .cs-st.fin .cs-ic svg{stroke:var(--accent)}
  .cs-n{font:500 14px var(--m);color:var(--muted);letter-spacing:.04em}
  .cs-t{font:800 clamp(17px,1.8vw,23px)/1.15 var(--h);text-transform:uppercase;color:var(--fg)}
  .cs-st.fin .cs-t{color:var(--accent)}
  .cs-st:not(.fin)::after{content:'→';position:absolute;right:-13px;top:18px;font:800 20px var(--h);color:var(--muted)}
  .slide.active .cs-st{animation:cs-up .6s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*180ms + 150ms);transform-origin:bottom}
  @keyframes cs-up{from{opacity:0;transform:translateY(24px)}}
  @media (prefers-reduced-motion:reduce){.slide.active .cs-st{animation:none}}
  @media (max-width:900px){.cs{grid-template-columns:repeat(2,1fr);height:auto}.cs-st{height:auto;min-height:150px}.cs-st::after{display:none}}
  `,
  slides:[
  {sec:'THE COURSE', cls:'viz', title:`THE COURSE IN <span class="g">FOUR STEPS</span>`,
   body:`<div class="cs"><div class="cs-st" style="--i:0"><div class="cs-ic"><svg viewBox="0 0 48 48"><path d="M18 8a7 7 0 0 0-7 7 7 7 0 0 0-4 12 7 7 0 0 0 5 11 6 6 0 0 0 12 2V10a6 6 0 0 0-6-2zM30 8a7 7 0 0 1 7 7 7 7 0 0 1 4 12 7 7 0 0 1-5 11 6 6 0 0 1-12 2V10a6 6 0 0 1 6-2z"/></svg></div><div class="cs-n">S1 · S2</div><div class="cs-t">How AI works and setup</div></div><div class="cs-st" style="--i:1"><div class="cs-ic"><svg viewBox="0 0 48 48"><path d="M18 6v10M30 6v10M12 16h24v8a12 12 0 0 1-24 0zM24 36v8"/></svg></div><div class="cs-n">S3 · S4</div><div class="cs-t">Skills, connectors and tools</div></div><div class="cs-st" style="--i:2"><div class="cs-ic"><svg viewBox="0 0 48 48"><path d="M38 20a14 14 0 0 0-26-4M10 28a14 14 0 0 0 26 4"/><path d="M12 8v8h8M36 40v-8h-8"/></svg></div><div class="cs-n">S5 · S6</div><div class="cs-t">Agents and automations</div></div><div class="cs-st fin" style="--i:3"><div class="cs-ic"><svg viewBox="0 0 48 48"><path d="M24 4c8 6 11 15 9 26H15C13 19 16 10 24 4z"/><circle cx="24" cy="18" r="4"/><path d="M15 30l-6 8h8M33 30l6 8h-8M20 38l4 6 4-6"/></svg></div><div class="cs-n">S7 · S8</div><div class="cs-t">Live products and prototypes</div></div></div>
   <div class="cap" style="text-align:center;max-width:820px;margin:18px auto 0">8 sessions. Each one ends with a thing you made. You finish with <b style="color:var(--accent)">your own skills and agents</b> and <b style="color:var(--accent)">a live product</b> at a public link.</div>`}
  ]
});
