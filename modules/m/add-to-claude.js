MOD({
  id:'add-to-claude', title:'Five ways to teach Claude: prompt, CLAUDE.md, skill, connector, plugin', cluster:'claude', fits:[2,3,4], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-add-to-claude .ac{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:6px}
  .m-add-to-claude .ac-c{border:1px solid var(--line-2);border-top:4px solid var(--fg-2);border-radius:14px;padding:14px 14px 12px;background:var(--surface);display:flex;flex-direction:column;gap:7px}
  .m-add-to-claude .ac-c.now{border-top-color:var(--green);background:color-mix(in srgb,var(--green) 7%,var(--surface))}
  .m-add-to-claude .ac-ic svg{width:34px;height:34px;fill:none;stroke:var(--fg-2);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
  .m-add-to-claude .ac-c.now .ac-ic svg{stroke:var(--green)}
  .m-add-to-claude .ac-k{font:800 clamp(15px,1.5vw,19px) var(--h);text-transform:uppercase;color:var(--fg)}
  .m-add-to-claude .ac-c.now .ac-k{color:var(--green)}
  .m-add-to-claude .ac-w{font-size:13px;color:var(--fg-2);line-height:1.35}
  .m-add-to-claude .ac-e{font:12px/1.35 var(--m);color:var(--muted);margin-top:auto;padding-top:8px;border-top:1px solid var(--line)}
  .m-add-to-claude .ac-s{font:600 11px var(--m);letter-spacing:.1em;color:var(--muted)}
  .m-add-to-claude .ac-ax{display:flex;justify-content:space-between;font:13px var(--m);color:var(--muted);margin-top:10px;border-top:2px solid var(--line-2);padding-top:6px}
  .slide.active.m-add-to-claude .ac-c{animation:m-fade .5s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*130ms + 150ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-add-to-claude .ac-c{animation:none}}
  @media (max-width:900px){.m-add-to-claude .ac{grid-template-columns:1fr 1fr}}
  `,
  slides:[
  {sec:'SKILLS AND TOOLS', cls:'viz', title:`FIVE WAYS TO <span class="g">TEACH CLAUDE</span>`,
   body:`<div class="ac"></div><div class="ac-ax"><span>one task, typed by you</span><span>works for your whole team, every time →</span></div>`,
   init(el){
     const I={
       p:'<svg viewBox="0 0 40 40"><path d="M8 10h24v16H18l-6 6v-6H8z"/></svg>',
       r:'<svg viewBox="0 0 40 40"><path d="M11 5h13l7 7v23H11z"/><path d="M24 5v7h7M16 20h10M16 26h8"/></svg>',
       s:'<svg viewBox="0 0 40 40"><path d="M5 12h11l3 4h16v18H5z"/><path d="M14 25l4 4 8-8"/></svg>',
       c:'<svg viewBox="0 0 40 40"><path d="M15 6v8M25 6v8M10 14h20v6a10 10 0 0 1-20 0zM20 30v6"/></svg>',
       g:'<svg viewBox="0 0 40 40"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="22" y="6" width="12" height="12" rx="2"/><rect x="6" y="22" width="12" height="12" rx="2"/><rect x="22" y="22" width="12" height="12" rx="2"/></svg>'};
     const C=[['p','Prompt','What you type for one task.','"Summarise these notes in 5 bullets."','S2',0],
              ['r','CLAUDE.md','Rules Claude reads every time.','"Write in US English. Specs live in /docs."','S2',0],
              ['s','Skill','A saved recipe Claude runs when the task matches.','/discovery-synth on new interviews','S3',1],
              ['c','Connector','A plug into a tool you use, through MCP.','Read Drive, create Jira tickets','S4',1],
              ['g','Plugin','A pack of skills, connectors and hooks to share.','Your team toolkit, one install','S4',1]];
     el.querySelector('.ac').innerHTML=C.map((c,i)=>`<div class="ac-c${c[5]?' now':''}" style="--i:${i}"><div class="ac-ic">${I[c[0]]}</div><div class="ac-k">${c[1]}</div><div class="ac-w">${c[2]}</div><div class="ac-e">${c[3]}</div><div class="ac-s">${c[4]}</div></div>`).join('');
   }}
  ]
});
