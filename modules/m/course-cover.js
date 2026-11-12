MOD({
  id:'course-cover', title:'Course cover: AI for Managers', cluster:'course', fits:[1], minutes:1,
  scopes:{lite:[0], full:[0]},
  css:`  .m-course-cover .cv-promise{font:800 clamp(22px,2.8vw,36px)/1.2 var(--h);color:var(--fg);margin-top:4px}
  .m-course-cover .cv-svg{width:100%;max-width:980px;height:min(30vh,250px);display:block;margin:14px auto 4px;overflow:visible}
  .m-course-cover .cv-path{fill:none;stroke:var(--line-2);stroke-width:3;stroke-dasharray:4 8}
  .m-course-cover .cv-glow{fill:none;stroke:var(--accent);stroke-width:4;stroke-linecap:round;stroke-dasharray:1200;stroke-dashoffset:1200;filter:drop-shadow(0 0 6px color-mix(in srgb,var(--accent) 70%,transparent))}
  .m-course-cover .cv-n circle{fill:var(--surface);stroke:var(--line-2);stroke-width:2}
  .m-course-cover .cv-n text{font:600 12px var(--m);fill:var(--muted);text-anchor:middle}
  .m-course-cover .cv-br{fill:none;stroke:var(--accent);stroke-width:4;stroke-linecap:round;opacity:0}
  .slide.active.m-course-cover .cv-br{animation:cv-show .5s ease forwards 2.7s}
  @keyframes cv-show{to{opacity:1}}
  .m-course-cover .cv-live rect{fill:var(--accent)} .m-course-cover .cv-live text{font:900 16px var(--h);fill:var(--on-accent);text-anchor:middle;letter-spacing:.1em}
  .m-course-cover .cv-dot{fill:var(--on-accent)}
  .m-course-cover .cv-run{fill:var(--accent);filter:drop-shadow(0 0 8px var(--accent))}
  .m-course-cover .cv-cap{font:500 13px var(--m);fill:var(--muted)} .m-course-cover .cv-cap.g{fill:var(--accent)}
  .slide.active.m-course-cover .cv-glow{animation:cv-draw 2.6s cubic-bezier(.4,0,.2,1) forwards .3s}
  @keyframes cv-draw{to{stroke-dashoffset:0}}
  .slide.active.m-course-cover .cv-n circle{animation:cv-on .4s ease forwards;animation-delay:calc(var(--i)*300ms + 400ms)}
  @keyframes cv-on{to{fill:var(--accent);stroke:var(--accent)}}
  .slide.active.m-course-cover .cv-live{animation:cv-pulse 1.6s ease-in-out infinite alternate 2.8s}
  .slide.active.m-course-cover .cv-live.b{animation-delay:3.6s}
  @keyframes cv-pulse{to{filter:drop-shadow(0 0 14px var(--accent))}}
  @media (prefers-reduced-motion:reduce){.slide.active.m-course-cover *{animation:none!important}.m-course-cover .cv-glow{stroke-dashoffset:0}.m-course-cover .cv-run{display:none}}
  `,
  slides:[
  {sec:'CONVERSE BANK × ACA X', center:true, title:`AI FOR <span class="g">MANAGERS</span>`,
   body:`<img src="../assets/conversebank-logo.svg" alt="Converse Bank" class="cb-cover-logo"><div class="sub cv-promise">Walk in using AI. <span class="g">Walk out building agents and products.</span></div>
     <svg class="cv-svg" viewBox="0 0 990 262" role="img" aria-label="A rising path of eight session dots, lighting up one by one, that forks at the end into two goals: agents and products.">
       <path id="cv-p" d="M70,200 L170,193 L270,180 L370,161 L470,139 L570,112 L670,83 L770,50" class="cv-path"/>
       <path d="M70,200 L170,193 L270,180 L370,161 L470,139 L570,112 L670,83 L770,50" class="cv-glow"/>
       <g class="cv-n" style="--i:0"><circle cx="70" cy="200" r="9.0"/><text x="70" y="230">S1</text></g><g class="cv-n" style="--i:1"><circle cx="170" cy="193" r="10.2"/><text x="170" y="224">S2</text></g><g class="cv-n" style="--i:2"><circle cx="270" cy="180" r="11.4"/><text x="270" y="212">S3</text></g><g class="cv-n" style="--i:3"><circle cx="370" cy="161" r="12.6"/><text x="370" y="195">S4</text></g><g class="cv-n" style="--i:4"><circle cx="470" cy="139" r="13.8"/><text x="470" y="174">S5</text></g><g class="cv-n" style="--i:5"><circle cx="570" cy="112" r="15.0"/><text x="570" y="148">S6</text></g><g class="cv-n" style="--i:6"><circle cx="670" cy="83" r="16.2"/><text x="670" y="120">S7</text></g><g class="cv-n" style="--i:7"><circle cx="770" cy="50" r="17.4"/><text x="770" y="88">S8</text></g>
       <path d="M770,50 C800,50 800,22 830,22" class="cv-br"/><path d="M770,50 C800,50 800,84 830,84" class="cv-br"/><g class="cv-live"><rect x="830" y="3" width="150" height="38" rx="19"/><circle cx="852" cy="22" r="6" class="cv-dot"/><text x="914" y="29">AGENTS</text></g><g class="cv-live b"><rect x="830" y="65" width="150" height="38" rx="19"/><circle cx="852" cy="84" r="6" class="cv-dot"/><text x="914" y="91">PRODUCTS</text></g>
       <circle r="7" class="cv-run"><animateMotion dur="5s" repeatCount="indefinite" rotate="auto"><mpath href="#cv-p"/></animateMotion></circle>
       <text x="70" y="252" class="cv-cap" text-anchor="middle">today: using AI</text>
       <text x="905" y="124" class="cv-cap g" text-anchor="middle">personal · work · live</text>
     </svg>
     <div class="tbar" style="margin-left:auto;margin-right:auto"></div>
     <div class="sub" style="font-size:16px">Tigran Sargsyan · ACA X</div>`}
  ]
});
