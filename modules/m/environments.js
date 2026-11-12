MOD({
  id:'environments', title:'Where Claude runs', cluster:'claude', fits:[2], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-environments .ev{display:grid;grid-template-columns:1fr 150px 1.45fr;align-items:center;gap:0}
  .m-environments .col{border:1px solid var(--line);border-radius:14px;padding:16px 18px;background:var(--surface)}
  .m-environments .col.work{border-color:color-mix(in srgb,var(--green) 45%,transparent)}
  .m-environments .ch{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:24px;letter-spacing:.04em}
  .m-environments .col.work .ch{color:var(--green)}
  .m-environments .cs{color:var(--muted);font-size:15px;margin:2px 0 12px}
  .m-environments .grp{border-top:1px solid var(--line);padding:10px 0 4px}
  .m-environments .grp .gk{display:flex;align-items:center;gap:10px;font-family:var(--h);font-weight:700;text-transform:uppercase;font-size:17px;letter-spacing:.05em;margin-bottom:8px}
  .m-environments .chips{display:flex;flex-wrap:wrap;gap:8px}
  .m-environments .chip{padding:5px 12px}
  .m-environments .chip.us{border-color:var(--green);color:var(--green)}
  .m-environments .badge{font-family:var(--m);font-size:13px;font-weight:400;letter-spacing:0;text-transform:none;color:var(--on-accent);background:var(--green);border-radius:999px;padding:2px 9px}
  .m-environments .core{position:relative;height:100%;display:flex;align-items:center;justify-content:center}
  .m-environments .core:before{content:'';position:absolute;left:0;right:0;top:50%;height:2px;background:var(--green);opacity:.5}
  .m-environments .orb{position:relative;width:112px;height:112px;border-radius:50%;border:2px solid var(--green);background:var(--bg);box-shadow:0 0 40px color-mix(in srgb,var(--green) 25%,transparent);display:flex;align-items:center;justify-content:center;font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:20px;letter-spacing:.04em}
  .slide.active.m-environments .orb{animation:m-pop .7s cubic-bezier(.3,1.4,.4,1) both .1s}
  .m-environments .foot{display:flex;justify-content:space-between;margin-top:14px;font-size:15px;color:var(--muted)}
  .m-environments .foot b{color:var(--fg);font-weight:600}
  `,
  slides:[
  {sec:'CLAUDE TODAY', cls:'viz', title:`ONE BRAIN, <span class="g">MANY DOORS</span>`,
   body:`<div class="ev">
     <div class="col a-fade" style="--i:1"><div class="ch">Talk to it</div><div class="cs">You ask. It answers. You copy the result.</div>
       <div class="grp"><div class="gk">claude.ai chat <span class="badge">this course</span></div><div class="chips"><span class="chip us">web</span><span class="chip us">desktop app</span><span class="chip">mobile</span><span class="chip">Projects</span></div></div>
       <div class="grp"><div class="gk">Slack</div><div class="chips"><span class="chip">mention Claude in a thread</span></div></div></div>
     <div class="core"><div class="orb">Claude</div></div>
     <div class="col work a-fade" style="--i:3"><div class="ch">Let it work</div><div class="cs">It reads files, edits them, runs tools. You review.</div>
       <div class="grp"><div class="gk">Claude Code <span class="badge">this course</span></div><div class="chips"><span class="chip us">terminal (CLI)</span><span class="chip">desktop app: Code tab</span><span class="chip">web: claude.ai/code</span><span class="chip">VS Code</span><span class="chip">JetBrains</span></div></div>
       <div class="grp"><div class="gk">Cloud sessions</div><div class="chips"><span class="chip">runs in the cloud, not on your laptop</span></div></div>
       <div class="grp"><div class="gk">API and Agent SDK</div><div class="chips"><span class="chip">build Claude into your own product</span></div></div></div>
     </div>
     <div class="foot a-fade" style="--i:5"><span><b>Cheap and fast.</b> Most of your daily work.</span><span><b>Powerful, but costs more.</b> Use it on purpose.</span></div>`}
  ]
});
