MOD({
  id:'agent-team', title:'What you can build: a team of agents led by you', cluster:'agents', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .tm-svg{width:100%;max-height:50vh;display:block;margin:10px auto 0}
  .tm-l{fill:none;stroke:var(--line-2);stroke-width:2}
  .tm-n rect{fill:var(--surface);stroke:var(--line-2);stroke-width:1.5}
  .tm-n text{text-anchor:middle}
  .tm-k{font:800 17px var(--h);letter-spacing:.05em;fill:var(--fg)}
  .tm-d{font:14px var(--b);fill:var(--muted)}
  .tm-s{font:500 14px var(--m);fill:var(--fg-2)}
  .tm-n.you rect{fill:var(--accent);stroke:var(--accent)} .tm-n.you .tm-k{fill:var(--on-accent);font-size:20px} .tm-n.you .tm-d{fill:var(--on-accent);opacity:.85}
  .tm-n.lead rect{stroke:var(--accent);stroke-width:2} .tm-n.lead .tm-k{fill:var(--accent)}
  .slide.active .tm-n{animation:m-fade .5s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*160ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active .tm-n{animation:none}}
  `,
  slides:[
  {sec:'WHAT AI REALLY IS', cls:'viz', title:`WHAT <span class="g">YOU</span> CAN BUILD`,
   body:`<div class="sub" style="margin-top:0">You direct a team of agents. You set the goal and make the final call. The agents do the work. No code written by hand.</div>
   <svg class="tm-svg" viewBox="0 0 1000 350" role="img" aria-label="Org chart of an AI team. You sit at the top as the director. A lead agent plans the work and hands it to a research agent, a build agent and a review agent. Each has two helper agents."><path class="tm-l" d="M500 82 V118"/><path class="tm-l" d="M500 174 V196 H200 V218"/><path class="tm-l" d="M500 174 V196 H500 V218"/><path class="tm-l" d="M500 174 V196 H800 V218"/><path class="tm-l" d="M200 274 V292 H145 V306 M200 292 H255 V306"/><path class="tm-l" d="M500 274 V292 H445 V306 M500 292 H555 V306"/><path class="tm-l" d="M800 274 V292 H745 V306 M800 292 H855 V306"/><g class="tm-n you" style="--i:0"><rect x="380.0" y="20" width="240" height="62" rx="12"/><text x="500" y="46" class="tm-k">YOU</text><text x="500" y="66" class="tm-d">the director: goal and final call</text></g><g class="tm-n lead" style="--i:1"><rect x="370.0" y="118" width="260" height="56" rx="12"/><text x="500" y="144" class="tm-k">LEAD AGENT</text><text x="500" y="164" class="tm-d">plans and hands out the work</text></g><g class="tm-n team" style="--i:2"><rect x="85.0" y="218" width="230" height="56" rx="12"/><text x="200" y="244" class="tm-k">RESEARCH AGENT</text><text x="200" y="264" class="tm-d">finds and sums up</text></g><g class="tm-n team" style="--i:3"><rect x="385.0" y="218" width="230" height="56" rx="12"/><text x="500" y="244" class="tm-k">BUILD AGENT</text><text x="500" y="264" class="tm-d">writes code and docs</text></g><g class="tm-n team" style="--i:4"><rect x="685.0" y="218" width="230" height="56" rx="12"/><text x="800" y="244" class="tm-k">REVIEW AGENT</text><text x="800" y="264" class="tm-d">checks every output</text></g><g class="tm-n sub" style="--i:5"><rect x="97" y="306" width="96" height="34" rx="17"/><text x="145" y="328" class="tm-s">web</text></g><g class="tm-n sub" style="--i:5"><rect x="207" y="306" width="96" height="34" rx="17"/><text x="255" y="328" class="tm-s">data</text></g><g class="tm-n sub" style="--i:6"><rect x="397" y="306" width="96" height="34" rx="17"/><text x="445" y="328" class="tm-s">code</text></g><g class="tm-n sub" style="--i:6"><rect x="507" y="306" width="96" height="34" rx="17"/><text x="555" y="328" class="tm-s">design</text></g><g class="tm-n sub" style="--i:7"><rect x="697" y="306" width="96" height="34" rx="17"/><text x="745" y="328" class="tm-s">tests</text></g><g class="tm-n sub" style="--i:7"><rect x="807" y="306" width="96" height="34" rx="17"/><text x="855" y="328" class="tm-s">judge</text></g></svg>
   <div class="cap" style="max-width:860px;margin:6px auto 0">By Session 8 you build a team like this: a command center, a trend-to-video engine, a working product.</div>`}
  ]
});
