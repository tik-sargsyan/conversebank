MOD({
  id:'adoption-curves', title:'Why now: AI adoption vs internet and PC', cluster:'foundations', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .adopt{display:grid;grid-template-columns:minmax(200px,.8fr) 2fr;gap:36px;align-items:center;margin-top:6px}
  .adopt .num{font-size:clamp(90px,14vw,190px);line-height:.9}
  .adopt .cap{text-align:left;margin-top:8px}
  .ad-svg{width:100%;max-height:52vh;display:block}
  .ad-ax{stroke:var(--line-2);stroke-width:2}
  .ad-t{font:14px var(--m);fill:var(--muted)}
  .ad-half{stroke:var(--line-2);stroke-width:1.5;stroke-dasharray:6 6}
  .ad-c{fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
  .ad-pc{stroke:var(--muted)} .ad-net{stroke:var(--fg-2)} .ad-ai{stroke:var(--accent);stroke-width:6}
  .ad-dot{fill:var(--bg);stroke:var(--fg-2);stroke-width:3} .ad-dot.ai{stroke:var(--accent)}
  .ad-l{font:800 15px var(--h);letter-spacing:.06em;fill:var(--fg-2)} .ad-l.ai{fill:var(--accent);font-size:17px}
  .slide.active .ad-c{stroke-dasharray:1400;stroke-dashoffset:1400;animation:ad-draw 1.6s cubic-bezier(.4,0,.2,1) forwards;animation-delay:calc(var(--i)*350ms + 200ms)}
  @keyframes ad-draw{to{stroke-dashoffset:0}}
  @media (prefers-reduced-motion:reduce){.slide.active .ad-c{animation:none;stroke-dashoffset:0}}
  @media (max-width:900px){.adopt{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'WHY NOW', cls:'viz', title:`WHY <span class="g">NOW</span>`,
   body:`<div class="adopt"><div class="adopt-k"><div class="num">3</div><div class="cap">Years for AI to reach about half of people. The internet took about 7. The PC took about 15.</div></div>
   <svg class="ad-svg" viewBox="0 0 700 334" role="img" aria-label="Adoption S-curves. AI reaches half of people in about 3 years, the internet in about 7, the PC in about 15.">
     <line x1="70" y1="276" x2="680" y2="276" class="ad-ax"/><line x1="70" y1="24" x2="70" y2="276" class="ad-ax"/><line x1="70" y1="276" x2="70" y2="282" class="ad-ax"/><text x="70" y="300" class="ad-t" text-anchor="middle">0</text><line x1="222" y1="276" x2="222" y2="282" class="ad-ax"/><text x="222" y="300" class="ad-t" text-anchor="middle">5</text><line x1="375" y1="276" x2="375" y2="282" class="ad-ax"/><text x="375" y="300" class="ad-t" text-anchor="middle">10</text><line x1="528" y1="276" x2="528" y2="282" class="ad-ax"/><text x="528" y="300" class="ad-t" text-anchor="middle">15</text><line x1="680" y1="276" x2="680" y2="282" class="ad-ax"/><text x="680" y="300" class="ad-t" text-anchor="middle">20</text>
     <text x="60" y="29" class="ad-t" text-anchor="end">100%</text><text x="60" y="155" class="ad-t" text-anchor="end">50%</text><text x="60" y="281" class="ad-t" text-anchor="end">0</text>
     <line x1="70" y1="150" x2="680" y2="150" class="ad-half"/>
     <text x="680" y="326" class="ad-t" text-anchor="end">years after launch →</text>
     <path d="M70.0,273.9 L82.2,273.7 L94.4,273.3 L106.6,273.0 L118.8,272.6 L131.0,272.1 L143.2,271.6 L155.4,271.0 L167.6,270.4 L179.8,269.6 L192.0,268.8 L204.2,267.8 L216.4,266.7 L228.6,265.5 L240.8,264.1 L253.0,262.6 L265.2,260.9 L277.4,259.0 L289.6,256.8 L301.8,254.4 L314.0,251.8 L326.2,248.8 L338.4,245.5 L350.6,241.9 L362.8,238.0 L375.0,233.7 L387.2,229.0 L399.4,223.9 L411.6,218.4 L423.8,212.5 L436.0,206.2 L448.2,199.6 L460.4,192.6 L472.6,185.3 L484.8,177.8 L497.0,170.0 L509.2,162.1 L521.4,154.0 L533.6,146.0 L545.8,137.9 L558.0,130.0 L570.2,122.2 L582.4,114.7 L594.6,107.4 L606.8,100.4 L619.0,93.8 L631.2,87.5 L643.4,81.6 L655.6,76.1 L667.8,71.0 L680.0,66.3" class="ad-c ad-pc" style="--i:0"/>
     <path d="M70.0,270.7 L82.2,269.5 L94.4,267.9 L106.6,266.0 L118.8,263.7 L131.0,260.9 L143.2,257.4 L155.4,253.2 L167.6,248.3 L179.8,242.3 L192.0,235.4 L204.2,227.3 L216.4,218.1 L228.6,207.7 L240.8,196.2 L253.0,183.8 L265.2,170.6 L277.4,156.9 L289.6,143.1 L301.8,129.4 L314.0,116.2 L326.2,103.8 L338.4,92.3 L350.6,81.9 L362.8,72.7 L375.0,64.6 L387.2,57.7 L399.4,51.7 L411.6,46.8 L423.8,42.6 L436.0,39.1 L448.2,36.3 L460.4,34.0 L472.6,32.1 L484.8,30.5 L497.0,29.3 L509.2,28.2 L521.4,27.4 L533.6,26.7 L545.8,26.2 L558.0,25.8 L570.2,25.4 L582.4,25.1 L594.6,24.9 L606.8,24.7 L619.0,24.6 L631.2,24.5 L643.4,24.4 L655.6,24.3 L667.8,24.2 L680.0,24.2" class="ad-c ad-net" style="--i:1"/>
     <path d="M70.0,264.0 L82.2,258.6 L94.4,250.9 L106.6,240.3 L118.8,226.2 L131.0,208.2 L143.2,186.7 L155.4,162.6 L167.6,137.4 L179.8,113.3 L192.0,91.8 L204.2,73.8 L216.4,59.7 L228.6,49.1 L240.8,41.4 L253.0,36.0 L265.2,32.1 L277.4,29.5 L289.6,27.7 L301.8,26.5 L314.0,25.7 L326.2,25.1 L338.4,24.8 L350.6,24.5 L362.8,24.3 L375.0,24.2 L387.2,24.2 L399.4,24.1 L411.6,24.1 L423.8,24.0 L436.0,24.0 L448.2,24.0 L460.4,24.0 L472.6,24.0 L484.8,24.0 L497.0,24.0 L509.2,24.0 L521.4,24.0 L533.6,24.0 L545.8,24.0 L558.0,24.0 L570.2,24.0 L582.4,24.0 L594.6,24.0 L606.8,24.0 L619.0,24.0 L631.2,24.0 L643.4,24.0 L655.6,24.0 L667.8,24.0 L680.0,24.0" class="ad-c ad-ai" style="--i:2"/>
     <circle cx="527.5" cy="150" r="7" class="ad-dot"/><circle cx="283.5" cy="150" r="7" class="ad-dot"/><circle cx="161.5" cy="150" r="8" class="ad-dot ai"/>
     <text x="150" y="138" class="ad-l ai" text-anchor="end">AI · 3 YRS</text>
     <text x="296" y="174" class="ad-l">INTERNET · 7 YRS</text>
     <text x="540" y="174" class="ad-l">PC · 15 YRS</text>
   </svg></div>
   <div class="src"><b>Source:</b> CCIA / Stanford AI Index 2026 · the 50% points are from the source, the curve shapes are illustrative</div>`}
  ]
});
