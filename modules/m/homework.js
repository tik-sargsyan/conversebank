MOD({
  id:'homework', title:'Homework: one task per session', cluster:'course', fits:[1,2,3,4,5,6,7], minutes:1,
  scopes:{s1:[0],s2:[1],s3:[2],s4:[3],s5:[4],s6:[5],s7:[6],lite:[0],full:[0,1,2,3,4,5,6]},
  css:`
  .m-homework .hw1{font:800 clamp(26px,3.4vw,46px)/1.2 var(--h);color:var(--fg);max-width:980px;margin:6px auto 0}
  .m-homework .hw1-r{display:inline-flex;gap:14px;align-items:center;margin-top:26px;border:1px solid var(--green);border-radius:999px;padding:10px 22px;font-size:clamp(15px,1.5vw,19px);color:var(--fg-2)}
  .m-homework .hw1-r b{font:600 12px var(--m);letter-spacing:.14em;color:var(--green)}
  .slide.active.m-homework .hw1{animation:m-fade .6s ease both .15s} .slide.active.m-homework .hw1-r{animation:m-fade .6s ease both .5s}
  @media (prefers-reduced-motion:reduce){.slide.active.m-homework *{animation:none!important}}
  `,
  slides:[
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 2</span>`,
   body:`<div class="hw1">Get Claude Pro or Max, then open the Code tab in the desktop app.</div>
     <div class="hw1-r"><b>READY WHEN</b>the Code tab opens with no upgrade prompt.</div>
     <div class="cap" style="max-width:760px;margin:12px auto 0">Subscribe yourself, or ask your company for a seat. The free plan has no Claude Code.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 3</span>`,
   body:`<div class="hw1">Have Claude Code set up in the app and your CLAUDE.md ready.</div>
     <div class="hw1-r"><b>READY WHEN</b>a new Code tab session already follows your CLAUDE.md rules.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 4</span>`,
   body:`<div class="hw1">Build two skills for your own work.</div>
     <div class="cap" style="max-width:820px;margin:12px auto 0">For example: a weekly report, a dashboard, a user journey, discovery notes, a PRD.</div>
     <div class="hw1-r"><b>READY WHEN</b>both run on real input in your workspace.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 5</span>`,
   body:`<div class="hw1">Connect one tool you use, and run one of your skills on it.</div>
     <div class="hw1-r"><b>READY WHEN</b>your skill read from or wrote to a real tool, with your approval.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 6</span>`,
   body:`<div class="hw1">Create your first agent, and a judge agent that checks its work.</div>
     <div class="cap" style="max-width:820px;margin:12px auto 0">For example: a research agent with a judge for sources, or a PRD agent with a judge for missing parts.</div>
     <div class="hw1-r"><b>READY WHEN</b>your agent ran one real task and the judge scored it.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 7</span>`,
   body:`<div class="hw1">Let your agent team run once on its own, then fix one thing.</div>
     <div class="hw1-r"><b>READY WHEN</b>you have read the Monday digest and know what to change.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 8</span>`,
   body:`<div class="hw1">Get v1 ready to ship: fix the one thing your tester got stuck on.</div>
     <div class="hw1-r"><b>READY WHEN</b>v1 is pushed and you have a Claude API account with about 5 USD credit.</div>`}
  ]
});
