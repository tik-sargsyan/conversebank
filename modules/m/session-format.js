MOD({
  id:'session-format', title:'How we run the sessions: concepts and hands-on', cluster:'course', fits:[1], minutes:2,
  scopes:{lite:[0], full:[0]},
  css:`
  .hr{display:grid;grid-template-columns:minmax(280px,1fr) 1.3fr;grid-template-areas:"chart list" "key list";gap:10px 44px;align-items:center;margin-top:8px}
  .hr-chart{grid-area:chart;display:flex;gap:12px;align-items:flex-end;height:min(34vh,260px)}
  .hr-s{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;height:100%}
  .hr-s span{font:800 15px var(--h);color:var(--fg-2);letter-spacing:.04em}
  .hr-bar{flex:1;width:100%;display:flex;flex-direction:column;border-radius:8px;overflow:hidden;border:1px solid var(--line-2)}
  .hr-bar i{display:block}.hr-bar .c{flex:1;background:var(--line-2)}.hr-bar .p{flex:1;background:var(--accent)}
  .hr-bar.all .p{display:none}
  .hr-key{grid-area:key;display:flex;gap:20px;font-size:15px;color:var(--fg-2)}
  .hr-key i{display:inline-block;width:14px;height:14px;border-radius:3px;margin-right:8px;vertical-align:-2px}
  .hr-key .c{background:var(--line-2)}.hr-key .p{background:var(--accent)}
  .hr-list{grid-area:list;margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:14px}
  .hr-list li{font-size:clamp(16px,1.6vw,20px);color:var(--fg-2);line-height:1.4;padding-left:18px;border-left:3px solid var(--line-2)}
  .hr-list li b{color:var(--fg)}
  .slide.active .hr-bar{animation:hr-up .7s cubic-bezier(.2,.8,.2,1) both;transform-origin:bottom}
  .slide.active .hr-s:nth-child(n){animation-delay:0s}
  @keyframes hr-up{from{transform:scaleY(0)}}
  @media (prefers-reduced-motion:reduce){.slide.active .hr-bar{animation:none}}
  @media (max-width:900px){.hr{grid-template-columns:1fr;grid-template-areas:"chart" "key" "list"}}
  `,
  slides:[
  {sec:'THE COURSE', cls:'viz', title:`HOW WE RUN <span class="g">THE SESSIONS</span>`,
   body:`<div class="hr">
   <div class="hr-chart"><div class="hr-s"><div class="hr-bar all"><i class="c"></i><i class="p"></i></div><span>S1</span></div><div class="hr-s"><div class="hr-bar"><i class="c"></i><i class="p"></i></div><span>S2</span></div><div class="hr-s"><div class="hr-bar"><i class="c"></i><i class="p"></i></div><span>S3</span></div><div class="hr-s"><div class="hr-bar"><i class="c"></i><i class="p"></i></div><span>S4</span></div><div class="hr-s"><div class="hr-bar"><i class="c"></i><i class="p"></i></div><span>S5</span></div><div class="hr-s"><div class="hr-bar"><i class="c"></i><i class="p"></i></div><span>S6</span></div><div class="hr-s"><div class="hr-bar"><i class="c"></i><i class="p"></i></div><span>S7</span></div><div class="hr-s"><div class="hr-bar"><i class="c"></i><i class="p"></i></div><span>S8</span></div></div>
   <div class="hr-key"><span><i class="c"></i>Concepts</span><span><i class="p"></i>Hands-on</span></div>
   <ul class="hr-list">
     <li><b>Session 1</b> is the only theory night: AI history, principles and philosophy.</li>
     <li><b>Sessions 2 to 8</b> are half concepts, half hands-on. Most of the course is practical.</li>
     <li><b>The goal:</b> you join the <span class="g">0.4%</span> who build with AI: agents, product prototypes and more advanced AI.</li>
     <li><b>Every session is interactive.</b> We ask, share and learn together.</li>
     <li><b>Every session has a 10-minute break.</b></li></ul></div>`}
  ]
});
