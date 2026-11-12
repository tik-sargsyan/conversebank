MOD({
  id:'get-to-know', title:'Get to know each other: who is in the room', cluster:'course', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .gtk{display:grid;grid-template-columns:minmax(240px,1fr) 1.35fr;gap:40px;align-items:center;margin-top:10px}
  .gtk-art{width:100%;max-height:46vh;display:block}
  .gtk-q{margin:0;padding:0;list-style:none;counter-reset:q;display:flex;flex-direction:column;gap:12px}
  .gtk-q li{counter-increment:q;position:relative;padding-left:34px;font-size:clamp(16px,1.6vw,20px);color:var(--fg-2);line-height:1.4}
  .gtk-q li::before{content:counter(q);position:absolute;left:0;top:-2px;font:900 22px var(--h);color:var(--accent)}
  .gtk-q b{color:var(--fg)}
  .slide.active .gtk-me{animation:gtk-pop 1.6s ease-in-out infinite alternate;transform-origin:200px 130px}
  @keyframes gtk-pop{from{transform:scale(1)}to{transform:scale(1.08)}}
  @media (prefers-reduced-motion:reduce){.slide.active .gtk-me{animation:none}}
  @media (max-width:900px){.gtk{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'WELCOME', cls:'viz', title:`GET TO <span class="g">KNOW</span> EACH OTHER`,
   body:`<div class="gtk">
   <svg class="gtk-art" viewBox="0 0 400 320" role="img" aria-label="A group of people around a table, each with a speech bubble">
     <ellipse cx="200" cy="200" rx="120" ry="52" fill="var(--surface)" stroke="var(--line-2)" stroke-width="2"/>
     <g fill="var(--line-2)">
       <circle cx="200" cy="112" r="17"/><path d="M172 150a28 24 0 0 1 56 0z"/>
       <circle cx="96" cy="160" r="17"/><path d="M68 198a28 24 0 0 1 56 0z"/>
       <circle cx="304" cy="160" r="17"/><path d="M276 198a28 24 0 0 1 56 0z"/>
       <circle cx="130" cy="262" r="17"/><path d="M102 300a28 24 0 0 1 56 0z"/>
       <circle cx="270" cy="262" r="17"/><path d="M242 300a28 24 0 0 1 56 0z"/></g>
     <g class="gtk-me"><circle cx="200" cy="112" r="17" fill="var(--accent)"/><path d="M172 150a28 24 0 0 1 56 0z" fill="var(--accent)"/></g>
     <g font-family="var(--h)" font-weight="800" font-size="15" text-anchor="middle">
       <rect x="150" y="34" width="100" height="40" rx="12" fill="var(--accent)"/><path d="M192 74l8 12 8-12z" fill="var(--accent)"/>
       <text x="200" y="59" fill="var(--on-accent)">HI, I'M…</text>
       <rect x="10" y="88" width="96" height="36" rx="12" fill="none" stroke="var(--line-2)" stroke-width="2"/>
       <text x="58" y="111" fill="var(--fg-2)">MY ROLE</text>
       <rect x="294" y="88" width="96" height="36" rx="12" fill="none" stroke="var(--line-2)" stroke-width="2"/>
       <text x="342" y="111" fill="var(--fg-2)">AI LEVEL</text></g>
   </svg>
   <ol class="gtk-q">
     <li><b>Name</b> and where you work</li>
     <li><b>Role:</b> your team and what you manage</li>
     <li><b>AI level:</b> 1 chat with it sometimes · 2 use it daily for work · 3 build with it</li>
     <li><b>Claude plan:</b> Pro or Max · free plan · no account yet</li>
     <li><b>One thing</b> you want from this course</li></ol></div>
   <div class="cap" style="max-width:820px;margin:14px auto 0">30 seconds each. Your answers set the pace for the whole course.</div>`}
  ]
});
