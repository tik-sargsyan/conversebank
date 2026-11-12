MOD({
  id:'agent-ideas', title:'An agent for every part of the job: work and personal agents', cluster:'agents', fits:[5,6], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-agent-ideas .ai3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:4px}
  .m-agent-ideas .ai-c{border:1px solid var(--line-2);border-radius:12px;padding:10px 14px;background:var(--surface)}
  .m-agent-ideas .ai-k{font:800 12px var(--h);letter-spacing:.1em;text-transform:uppercase;color:var(--green)}
  .m-agent-ideas .ai-n{font:800 16px var(--h);color:var(--fg);margin-top:4px}
  .m-agent-ideas .ai-w{font-size:13.5px;color:var(--fg-2);line-height:1.35;margin-top:2px}
  .m-agent-ideas .ai-p{margin-top:12px;border:1px dashed var(--green);border-radius:12px;padding:10px 16px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;font-size:15px;color:var(--fg)}
  .m-agent-ideas .ai-p b{font:600 12px var(--m);letter-spacing:.14em;color:var(--green)}
  .m-agent-ideas .ai-p span{border:1px solid var(--line-2);border-radius:999px;padding:3px 11px;font-size:13.5px}
  .slide.active.m-agent-ideas .ai-c{animation:m-fade .45s ease both;animation-delay:calc(var(--i)*60ms + 120ms)}
  .slide.active.m-agent-ideas .ai-p{animation:m-fade .5s ease both .8s}
  @media (prefers-reduced-motion:reduce){.slide.active.m-agent-ideas *{animation:none!important}}
  @media (max-width:900px){.m-agent-ideas .ai3{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'AGENTS', cls:'viz', title:`AN AGENT FOR <span class="g">EVERY PART OF THE JOB</span>`,
   body:`<div class="ai3"></div><div class="ai-p"><b>PERSONAL AGENTS TOO</b><span>inbox triage</span><span>meeting prep</span><span>daily brief</span><span>learning coach</span><span>travel planner</span></div>`,
   init(el){
     const A=[['Discovery','Research scout','Reads new interviews and reviews, returns themes with quotes.'],
              ['Strategy','Competitor watch','Checks rival sites and news every week, flags what changed.'],
              ['Execution','PRD reviewer','Reads a PRD, lists gaps, risks and untestable stories.'],
              ['Data','Metrics analyst','Pulls the numbers, checks them, writes the decision memo.'],
              ['Reporting','Weekly reporter','Collects wins, numbers and risks into the Monday update.'],
              ['Comms','Stakeholder writer','Turns one update into versions for each audience.'],
              ['Visuals','Deck builder','Turns a brief into slides in your brand.'],
              ['Video','Demo maker','Turns a feature into a script, storyboard and short clip.'],
              ['Build','Prototype builder','Turns a PRD into a working page you can click.']];
     el.querySelector('.ai3').innerHTML=A.map((a,i)=>`<div class="ai-c" style="--i:${i}"><div class="ai-k">${a[0]}</div><div class="ai-n">${a[1]}</div><div class="ai-w">${a[2]}</div></div>`).join('');
   }}
  ]
});
