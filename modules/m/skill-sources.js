MOD({
  id:'skill-sources', title:'Where skills come from: you, GitHub, plugin marketplaces, other tools', cluster:'claude', fits:[3], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-skill-sources .ss{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:6px}
  .m-skill-sources .ss-c{border:1px solid var(--line-2);border-radius:14px;padding:16px 16px 14px;background:var(--surface);display:flex;flex-direction:column;gap:8px}
  .m-skill-sources .ss-tag{align-self:flex-start;font:600 12px var(--m);border-radius:999px;padding:3px 11px}
  .m-skill-sources .t-you{background:var(--green);color:var(--on-accent)}
  .m-skill-sources .t-gh{border:1.5px solid var(--green);color:var(--green)}
  .m-skill-sources .t-mk{border:1.5px dashed var(--fg-2);color:var(--fg)}
  .m-skill-sources .t-ot{border:1.5px dotted var(--muted);color:var(--fg-2)}
  .m-skill-sources .ss-k{font:800 clamp(16px,1.6vw,20px)/1.2 var(--h);text-transform:uppercase;color:var(--fg)}
  .m-skill-sources .ss-w{font-size:14.5px;color:var(--fg-2);line-height:1.4}
  .m-skill-sources .ss-e{font:12.5px/1.45 var(--m);color:var(--muted);margin-top:auto;padding-top:8px;border-top:1px solid var(--line)}
  .m-skill-sources .ss-std{margin-top:16px;border:1px solid var(--line-2);border-radius:12px;padding:12px 18px;display:flex;gap:16px;align-items:center;font-size:clamp(15px,1.5vw,18px);color:var(--fg)}
  .m-skill-sources .ss-std b{font:600 12px var(--m);letter-spacing:.14em;color:var(--green);white-space:nowrap}
  .slide.active.m-skill-sources .ss-c{animation:m-fade .5s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*150ms + 150ms)}
  .slide.active.m-skill-sources .ss-std{animation:m-fade .6s ease both .9s}
  @media (prefers-reduced-motion:reduce){.slide.active.m-skill-sources *{animation:none!important}}
  @media (max-width:900px){.m-skill-sources .ss{grid-template-columns:1fr 1fr}}
  `,
  slides:[
  {sec:'SKILLS', cls:'viz', title:`WHERE SKILLS <span class="g">COME FROM</span>`,
   body:`<div class="ss">
     <div class="ss-c" style="--i:0"><span class="ss-tag t-you">built by you</span><div class="ss-k">Your own</div><div class="ss-w">Made from your best prompt, so it fits your work exactly.</div><div class="ss-e">/prd-writer · /weekly-report</div></div>
     <div class="ss-c" style="--i:1"><span class="ss-tag t-gh">open source</span><div class="ss-k">GitHub</div><div class="ss-w">Free to copy and change, but read the SKILL.md before you trust it.</div><div class="ss-e">anthropics/skills · remotion-dev/skills</div></div>
     <div class="ss-c" style="--i:2"><span class="ss-tag t-mk">marketplace</span><div class="ss-k">Claude plugins</div><div class="ss-w">One install brings a checked bundle, and updates come with it.</div><div class="ss-e">/plugin · product-management · brand-voice</div></div>
     <div class="ss-c" style="--i:3"><span class="ss-tag t-ot">other tools</span><div class="ss-k">Codex and more</div><div class="ss-w">Same skill format, so most skills move between tools with no change.</div><div class="ss-e">openai/skills · skills.sh</div></div></div>
     <div class="ss-std"><b>ONE FORMAT</b><span>Every skill is a folder with a SKILL.md. It is an open standard, so a skill you write for Claude also works in Codex and other agents.</span></div>`}
  ]
});
