MOD({
  id:'skill-connector', title:'Skill plus connector: the recipe and the plug, working together', cluster:'claude', fits:[3,4], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-skill-connector .sc{display:grid;grid-template-columns:1fr 40px 1.2fr 40px 1fr;align-items:center;gap:6px;margin-top:8px}
  .m-skill-connector .sc-b{border:1px solid var(--line-2);border-radius:14px;padding:14px 16px;background:var(--surface)}
  .m-skill-connector .sc-k{font:600 11px var(--m);letter-spacing:.14em;color:var(--muted);margin-bottom:6px}
  .m-skill-connector .sc-t{font:800 clamp(16px,1.6vw,20px)/1.25 var(--h);color:var(--fg)}
  .m-skill-connector .sc-ar{font:900 26px var(--h);color:var(--green);text-align:center}
  .m-skill-connector .sc-mid{display:flex;flex-direction:column;gap:10px}
  .m-skill-connector .sc-mid .sc-b{border-color:var(--green)}
  .m-skill-connector .sc-mid .sc-b.cn{border-color:var(--fg-2)}
  .m-skill-connector .sc-l{font-size:14px;color:var(--fg-2);line-height:1.45;margin-top:4px}
  .m-skill-connector .sc-l b{color:var(--green)}
  .m-skill-connector .sc-out li{font-size:14px;color:var(--fg-2);margin:4px 0 0 16px}
  .m-skill-connector .sc-cap{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}
  .m-skill-connector .sc-cap div{font-size:15px;color:var(--fg-2);border-left:3px solid var(--green);padding-left:12px}
  .m-skill-connector .sc-cap div.cn{border-left-color:var(--fg-2)}
  .m-skill-connector .sc-cap b{color:var(--fg)}
  .slide.active.m-skill-connector .sc>*{animation:m-fade .5s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*180ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-skill-connector .sc>*{animation:none}}
  @media (max-width:900px){.m-skill-connector .sc{grid-template-columns:1fr}.m-skill-connector .sc-ar{transform:rotate(90deg)}}
  `,
  slides:[
  {sec:'SKILLS AND TOOLS', cls:'viz', title:`THE RECIPE <span class="g">+</span> THE PLUG`,
   body:`<div class="sc">
     <div class="sc-b" style="--i:0"><div class="sc-k">YOU ASK</div><div class="sc-t">"Run discovery on this week's interviews."</div></div>
     <div class="sc-ar" style="--i:1">→</div>
     <div class="sc-mid" style="--i:2">
       <div class="sc-b"><div class="sc-k">SKILL · THE RECIPE</div><div class="sc-l"><b>/discovery-synth</b>: find themes, one quote per claim, rank by how often</div></div>
       <div class="sc-b cn"><div class="sc-k">CONNECTORS · THE PLUGS</div><div class="sc-l"><b>Drive</b> reads the notes · <b>Jira</b> creates the tickets</div></div></div>
     <div class="sc-ar" style="--i:3">→</div>
     <div class="sc-b sc-out" style="--i:4"><div class="sc-k">YOU GET</div><div class="sc-t">Themes with quotes</div><ul><li>a PRD draft</li><li>5 stories in Jira</li><li>for you to approve</li></ul></div></div>
     <div class="sc-cap"><div><b>A skill knows how.</b> Your steps, your standard, every time.</div><div class="cn"><b>A connector knows where.</b> It reads from and writes to your real tools.</div></div>`}
  ]
});
