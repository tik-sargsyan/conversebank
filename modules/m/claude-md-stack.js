MOD({
  id:'claude-md-stack', title:'Layers: CLAUDE.md memory (S2) and skills (S3)', cluster:'claude', fits:[2,3], minutes:3,
  scopes:{lite:[0], full:[0,1], skills:[1]},
  css:`
  .m-claude-md-stack .ms{display:grid;grid-template-columns:1.6fr 1fr;gap:3vw;align-items:center}
  .m-claude-md-stack .stk{display:flex;flex-direction:column;gap:10px;position:relative}
  .m-claude-md-stack .ly{display:grid;grid-template-columns:200px 1fr;gap:16px;align-items:center;border:1px solid var(--line);border-radius:12px;padding:12px 18px;background:var(--surface);margin-left:calc(var(--i)*34px)}
  .m-claude-md-stack .ly .p{font-family:var(--m);font-size:14px;color:var(--fg-2);word-break:break-all}
  .m-claude-md-stack .ly .p span{display:block;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:18px;letter-spacing:.04em;color:var(--fg);margin-bottom:2px;word-break:normal}
  .m-claude-md-stack .ly .ex{font-family:var(--m);font-size:14px;color:var(--muted);line-height:1.5}
  .m-claude-md-stack .ly .ex s{color:var(--muted);text-decoration-color:var(--warn);text-decoration-thickness:2px}
  .m-claude-md-stack .ly .ex b{color:var(--green);font-weight:400}
  .m-claude-md-stack .ly.msg{border-color:var(--green);background:var(--green-a)}
  .m-claude-md-stack .ax{position:absolute;left:-34px;top:8px;bottom:8px;width:2px;background:var(--line)}
  .m-claude-md-stack .ax:after{content:'';position:absolute;bottom:-2px;left:-6px;border:7px solid transparent;border-top:10px solid var(--green)}
  .m-claude-md-stack .axl{position:absolute;left:-58px;top:50%;transform:rotate(-90deg) translateX(50%);transform-origin:left top;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:14px;letter-spacing:.14em;color:var(--muted);white-space:nowrap}
  .m-claude-md-stack .res{border:2px solid var(--green);border-radius:14px;padding:20px 22px;background:var(--bg)}
  .m-claude-md-stack .res .h{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:15px;letter-spacing:.12em;color:var(--muted)}
  .m-claude-md-stack .res .big{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:clamp(28px,3vw,40px);color:var(--green);line-height:1.05;margin:8px 0 12px}
  .m-claude-md-stack .res p{color:var(--fg);font-size:17px;line-height:1.4}
  .m-claude-md-stack .res p+p{color:var(--muted);font-size:15px;margin-top:10px}
  .m-claude-md-stack .sk{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:6px}
  .m-claude-md-stack .sk-c{border:1px solid var(--line-2);border-top:4px solid var(--fg-2);border-radius:14px;padding:14px 16px;background:var(--surface);display:flex;flex-direction:column;gap:8px}
  .m-claude-md-stack .sk-c.g{border-top-color:var(--green)}
  .m-claude-md-stack .sk-k{font:800 clamp(17px,1.7vw,21px) var(--h);text-transform:uppercase;color:var(--fg)}
  .m-claude-md-stack .sk-c.g .sk-k{color:var(--green)}
  .m-claude-md-stack .sk-p{font:13px var(--m);color:var(--fg-2)}
  .m-claude-md-stack .sk-w{font-size:14px;color:var(--muted);line-height:1.35}
  .m-claude-md-stack .sk-s{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}
  .m-claude-md-stack .sk-s span{font:500 13px var(--m);border:1px solid var(--line-2);border-radius:999px;padding:3px 10px;color:var(--fg)}
  .m-claude-md-stack .sk-rule{margin-top:16px;border:1px solid var(--warn);border-radius:12px;padding:12px 18px;display:flex;gap:16px;align-items:center;font-size:clamp(15px,1.5vw,19px);color:var(--fg)}
  .m-claude-md-stack .sk-rule b{font:600 12px var(--m);letter-spacing:.14em;color:var(--warn);white-space:nowrap}
  .slide.active.m-claude-md-stack .sk-c{animation:m-fade .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  .slide.active.m-claude-md-stack .sk-rule{animation:m-fade .6s ease both .8s}
  @media (max-width:900px){.m-claude-md-stack .sk{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`MEMORY COMES <span class="g">IN LAYERS</span>`,
   body:`<div class="ms"><div class="stk" style="margin-left:40px"><div class="ax"></div><div class="axl">closer wins</div>
       <div class="ly a-fade" style="--i:0"><div class="p"><span>Global</span>~/.claude/CLAUDE.md</div><div class="ex">I am a manager at a bank.<br><s>Write in British English.</s><br>Keep answers short.</div></div>
       <div class="ly a-fade" style="--i:1"><div class="p"><span>Project</span>CLAUDE.md</div><div class="ex">Client: Acme Bank.<br><b>Use US English for this client.</b><br>Specs live in /docs.</div></div>
       <div class="ly a-fade" style="--i:2"><div class="p"><span>Folder</span>docs/legal/CLAUDE.md</div><div class="ex">Never change approved legal text.<br>Flag edits for review.</div></div>
       <div class="ly msg a-fade" style="--i:3"><div class="p"><span>Your message</span>this chat</div><div class="ex" style="color:var(--fg)">Draft the onboarding PRD.</div></div></div>
     <div class="res a-pop" style="--i:6"><div class="h">Claude writes</div><div class="big">In US English</div>
       <p>Global says British. Project says US. The project layer is closer, so it wins.</p>
       <p>Everything that does not conflict still applies: short answers, specs in /docs.</p></div></div>`},
  {sec:'SKILLS', cls:'viz', title:`SKILLS LIVE <span class="g">IN LAYERS</span> TOO`,
   body:`<div class="sk">
     <div class="sk-c g" style="--i:0"><div class="sk-k">Personal</div><div class="sk-p">~/.claude/skills/</div><div class="sk-w">Follows you into every project on your laptop.</div><div class="sk-s"><span>/weekly-update</span><span>/my-voice</span></div></div>
     <div class="sk-c" style="--i:1"><div class="sk-k">Project</div><div class="sk-p">.claude/skills/</div><div class="sk-w">Lives in one project folder. Share the folder, share the skill.</div><div class="sk-s"><span>/discovery-synth</span><span>/release-check</span></div></div>
     <div class="sk-c" style="--i:2"><div class="sk-k">Plugin</div><div class="sk-p">installed from a marketplace</div><div class="sk-w">A pack of skills from your team or others. Named with the plugin in front.</div><div class="sk-s"><span>/acme:compliance</span></div></div></div>
     <div class="sk-rule"><b>SAME NAME?</b><span>Personal beats project. <b style="color:var(--fg);letter-spacing:0;font:inherit">The opposite of CLAUDE.md,</b> where the closer layer wins. Plugin skills never clash: their name has the plugin in front.</span></div>
     <div class="src" style="margin-top:10px"><b>Source:</b> Claude Code docs, Skills</div>`}
  ]
});
