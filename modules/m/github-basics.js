MOD({
  id:'github-basics', title:'GitHub basics: what it is, public vs private, account and repo', cluster:'pm', fits:[7], minutes:5,
  scopes:{lite:[0,1,2], full:[0,1,2]},
  css:`
  .gh-flow{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1.25fr);gap:26px;align-items:center;max-width:1080px;margin:18px auto 0}
  .gh-box{border:1px solid var(--line-2);border-radius:16px;padding:20px 22px;background:var(--surface);text-align:center}
  .gh-box>b{display:block;font:800 clamp(18px,1.9vw,24px) var(--h);text-transform:uppercase;color:var(--fg);margin-bottom:6px}
  .gh-box>span:not(.gh-ico){font-size:clamp(14px,1.4vw,17px);color:var(--fg-2);line-height:1.4}
  .gh-box.cloud{border-color:var(--accent)}
  .gh-box.cloud>b{color:var(--accent)}
  .gh-box .gh-ico{font-size:44px;line-height:1;margin-bottom:10px;display:block}
  .gh-arrow{display:flex;flex-direction:column;align-items:center;gap:6px;font:600 13px var(--m);color:var(--accent);letter-spacing:.1em}
  .gh-arrow i{display:block;width:90px;height:2px;background:var(--accent);position:relative}
  .gh-arrow i:after{content:'';position:absolute;right:-2px;top:-5px;border:6px solid transparent;border-left:9px solid var(--accent);border-right:0}
  .gh-dots{display:flex;align-items:center;justify-content:center;gap:0;margin:14px 0 4px}
  .gh-dots em{width:14px;height:14px;border-radius:50%;background:var(--accent);display:block}
  .gh-dots u{width:26px;height:2px;background:var(--line-2);display:block}
  .gh-words{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;max-width:1080px;margin:26px auto 0}
  .gh-words div{border-left:3px solid var(--accent);padding:4px 0 4px 14px;font-size:clamp(14px,1.4vw,17px);color:var(--fg-2);line-height:1.4}
  .gh-words b{display:block;font:700 clamp(15px,1.5vw,18px) var(--m);color:var(--fg);margin-bottom:2px}
  .gh-two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;max-width:1080px;margin:18px auto 0}
  .gh-card{border:1px solid var(--line-2);border-radius:16px;padding:22px 24px;background:var(--surface)}
  .gh-card.pick{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent) inset}
  .gh-card .hd{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:12px}
  .gh-card .hd span:not(.tag){font-size:30px;line-height:1}
  .gh-card .hd b{font:800 clamp(20px,2.2vw,28px) var(--h);text-transform:uppercase;color:var(--fg)}
  .gh-card .tag{margin-left:auto;font:600 11px var(--m);letter-spacing:.12em;color:var(--on-accent);background:var(--accent);border-radius:999px;padding:4px 10px}
  .gh-card ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px}
  .gh-card li{font-size:clamp(14px,1.45vw,18px);color:var(--fg-2);line-height:1.4;padding-left:20px;position:relative}
  .gh-card li:before{content:'·';position:absolute;left:4px;color:var(--accent);font-weight:800}
  .gh-card li b{color:var(--fg)}
  .gh-rule{max-width:1080px;margin:20px auto 0;text-align:center;font-size:clamp(15px,1.5vw,19px);color:var(--fg-2)}
  .gh-rule b{color:var(--warn)}
  .gh-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;max-width:1120px;margin:18px auto 0;counter-reset:gh}
  .gh-step{border:1px solid var(--line-2);border-radius:16px;padding:20px 22px;background:var(--surface);position:relative}
  .gh-step:before{counter-increment:gh;content:counter(gh);position:absolute;top:-16px;left:20px;width:32px;height:32px;border-radius:50%;background:var(--accent);color:var(--on-accent);font:800 17px/32px var(--h);text-align:center}
  .gh-step>b{display:block;font:800 clamp(17px,1.8vw,22px) var(--h);text-transform:uppercase;color:var(--fg);margin:6px 0 10px}
  .gh-step ol{margin:0;padding-left:18px;display:flex;flex-direction:column;gap:7px}
  .gh-step li b{color:var(--fg)}
  .gh-step li{font-size:clamp(14px,1.35vw,17px);color:var(--fg-2);line-height:1.4}
  .gh-step .c{font-family:var(--m);color:var(--accent)}
  .gh-note{max-width:1120px;margin:20px auto 0;text-align:center;font-size:clamp(14px,1.4vw,17px);color:var(--muted)}
  .gh-note b{color:var(--fg)}
  .slide.active .gh-dots em{animation:gh-pop .4s cubic-bezier(.2,.8,.2,1) both}
  .slide.active .gh-dots em:nth-of-type(2){animation-delay:.15s}.slide.active .gh-dots em:nth-of-type(3){animation-delay:.3s}.slide.active .gh-dots em:nth-of-type(4){animation-delay:.45s}
  @keyframes gh-pop{from{transform:scale(0)}}
  @media (prefers-reduced-motion:reduce){.slide.active .gh-dots em{animation:none}}
  @media (max-width:900px){.gh-flow{grid-template-columns:1fr}.gh-arrow i{width:2px;height:40px}.gh-arrow i:after{display:none}.gh-words,.gh-two,.gh-steps{grid-template-columns:1fr}.gh-steps{gap:26px}}
  `,
  slides:[
  {sec:'GITHUB BASICS', cls:'viz', title:`WHAT IS <span class="g">GITHUB</span>?`,
   body:`<div class="gh-flow">
     <div class="gh-box"><span class="gh-ico">💻</span><b>Your laptop</b><span>The app folder Claude Code builds in. Only you can see it.</span></div>
     <div class="gh-arrow"><i></i>PUSH</div>
     <div class="gh-box cloud"><span class="gh-ico">☁️</span><b>GitHub</b><span>A safe copy of your project online. It keeps every saved version, so you can always go back.</span>
       <div class="gh-dots"><em></em><u></u><em></em><u></u><em></em><u></u><em></em></div></div>
   </div>
   <div class="gh-words">
     <div><b>repo</b>Your project folder on GitHub. One app, one repo.</div>
     <div><b>commit</b>A saved version with a short note, like "skeleton".</div>
     <div><b>push</b>Send your new commits from the laptop to GitHub.</div>
   </div>`},

  {sec:'GITHUB BASICS', cls:'viz', title:`PUBLIC OR <span class="g">PRIVATE</span>?`,
   body:`<div class="gh-two">
     <div class="gh-card"><div class="hd"><span>🌍</span><b>Public</b></div><ul>
       <li><b>Anyone</b> on the internet can see the code.</li>
       <li>Good for open source and a portfolio.</li>
       <li>Others can copy it and learn from it.</li></ul></div>
     <div class="gh-card pick"><div class="hd"><span>🔒</span><b>Private</b><span class="tag">USE THIS</span></div><ul>
       <li><b>Only you</b> and the people you invite can see it.</li>
       <li>Good for the capstone and any work project.</li>
       <li>Your live app can still be public. Only the code stays hidden.</li></ul></div>
   </div>
   <div class="gh-rule">Both are free. In both: <b>never put passwords, API keys or customer data in a repo.</b></div>`},

  {sec:'GITHUB BASICS', cls:'viz', title:`ACCOUNT AND REPO IN <span class="g">3 STEPS</span>`,
   body:`<div class="gh-steps">
     <div class="gh-step"><b>Sign up</b><ol>
       <li>Go to <span class="c">github.com/signup</span>.</li>
       <li>Enter your email, a password and a username.</li>
       <li>Use a personal email. The account stays yours after this job.</li></ol></div>
     <div class="gh-step"><b>Verify</b><ol>
       <li>Enter the code GitHub sends to your email.</li>
       <li>Choose the <b>Free</b> plan.</li>
       <li>Turn on two-factor login in Settings.</li></ol></div>
     <div class="gh-step"><b>New repo</b><ol>
       <li>Click <span class="c">+</span> top right, then <b>New repository</b>.</li>
       <li>Name it <span class="c">capstone</span>. Pick <b>Private</b>.</li>
       <li>Click <b>Create repository</b>.</li></ol></div>
   </div>
   <div class="gh-note">In Task 3A, <b>Claude creates the repo for you</b>. Step 3 shows where it lives and how to make one by hand.</div>`}
  ]
});
