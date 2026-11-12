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
   body:`<div class="hw1">Turn one real source from work into a PRD with your discovery skill.</div>
     <div class="hw1-r"><b>READY WHEN</b>prd.md is in your folder, with names and numbers removed.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 5</span>`,
   body:`<div class="hw1">Write the 4-line decision memo for one real metric from your PRD.</div>
     <div class="hw1-r"><b>READY WHEN</b>one person who owns that metric has read it.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 6</span>`,
   body:`<div class="hw1">Use your judge on real work this week, and fix the skill once.</div>
     <div class="hw1-r"><b>READY WHEN</b>you bring one judge verdict to Session 6.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 7</span>`,
   body:`<div class="hw1">Let your agent team run once on its own, then fix one thing.</div>
     <div class="hw1-r"><b>READY WHEN</b>you have read the Monday digest and know what to change.</div>`},
  {sec:'HOMEWORK', cls:'viz', center:true, title:`BEFORE <span class="g">SESSION 8</span>`,
   body:`<div class="hw1">Get v1 ready to ship: fix the one thing your tester got stuck on.</div>
     <div class="hw1-r"><b>READY WHEN</b>v1 is pushed and you have a Claude API account with about 5 USD credit.</div>`}
  ]
});
