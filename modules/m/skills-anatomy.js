MOD({
  id:'skills-anatomy', title:'Anatomy of a skill', cluster:'claude', fits:[2,3], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-skills-anatomy .sk{display:grid;grid-template-columns:1fr 1.25fr;gap:3vw;align-items:center}
  .m-skills-anatomy .tree{font-family:var(--m);font-size:18px;line-height:2;color:var(--fg-2);border:1px solid var(--line);border-radius:14px;padding:18px 22px;background:var(--surface)}
  .m-skills-anatomy .tree .d{color:var(--fg);font-weight:600}
  .m-skills-anatomy .tree .t{color:var(--subtle)}
  .m-skills-anatomy .tree .g{color:var(--green)}
  .m-skills-anatomy .tree em{font-style:normal;font-family:var(--b);font-size:14px;color:var(--muted);margin-left:10px}
  .m-skills-anatomy .md{position:relative;font-family:var(--m);font-size:15px;line-height:1.6;color:var(--fg-2);border:2px solid var(--green);border-radius:14px;padding:16px 20px;background:var(--bg)}
  .m-skills-anatomy .md .fm{color:var(--muted)}
  .m-skills-anatomy .md .key{color:var(--green)}
  .m-skills-anatomy .md .hl{background:var(--green-a);border-radius:4px;padding:1px 2px}
  .m-skills-anatomy .md .h{color:var(--fg);font-weight:600}
  .m-skills-anatomy .tag{position:absolute;right:-12px;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:14px;letter-spacing:.08em;color:var(--on-accent);background:var(--green);border-radius:999px;padding:4px 12px;transform:translateX(30%)}
  .m-skills-anatomy .tag.l{background:var(--fg)}
  .m-skills-anatomy .fl{display:grid;grid-template-columns:1fr 40px 1fr 40px 1fr;align-items:stretch;margin-top:16px}
  .m-skills-anatomy .fl .ar{display:flex;align-items:center;justify-content:center}
  .m-skills-anatomy .fl .ar:after{content:'';border:9px solid transparent;border-left:14px solid var(--green);margin-left:10px}
  .m-skills-anatomy .st{border:1px solid var(--line);border-radius:14px;padding:14px 16px;background:var(--surface)}
  .m-skills-anatomy .st .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.04em}
  .m-skills-anatomy .st .k b{color:var(--green);margin-right:8px}
  .m-skills-anatomy .st .s{color:var(--muted);font-size:14px;margin:2px 0 10px}
  .m-skills-anatomy .sl{display:flex;flex-direction:column;gap:6px}
  .m-skills-anatomy .sl div{font-family:var(--m);font-size:14px;color:var(--muted);border:1px solid var(--line);border-radius:8px;padding:6px 10px}
  .m-skills-anatomy .sl div.on{color:var(--on-accent);background:var(--green);border-color:var(--green)}
  .m-skills-anatomy .doc{font-family:var(--m);font-size:14px;line-height:1.55;color:var(--fg-2);border:1px solid var(--green);border-radius:8px;padding:10px 12px;background:var(--bg)}
  .m-skills-anatomy .doc .key{color:var(--green)}
  .m-skills-anatomy .run{display:flex;flex-direction:column;gap:8px}
  .m-skills-anatomy .run div{font-size:15px;color:var(--fg);display:flex;gap:10px;align-items:center}
  .m-skills-anatomy .run i{font-style:normal;font-family:var(--m);color:var(--green);font-size:14px;width:18px}
  .m-skills-anatomy .out{margin-top:6px;font-family:var(--m);font-size:15px;color:var(--on-accent);background:var(--green);border-radius:8px;padding:8px 12px;display:inline-block}
  .m-skills-anatomy .ask{font-family:var(--m);font-size:15px;color:var(--fg-2);border:1px solid var(--line);border-radius:10px;padding:10px 16px;background:var(--surface)}
  .m-skills-anatomy .ask b{color:var(--green);font-weight:600}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`A SKILL IS <span class="g">A FOLDER</span>`,
   body:`<div class="sk">
     <div class="tree a-fade" style="--i:0">
       <div class="d">prd-writer/</div>
       <div><span class="t">├─ </span><span class="g">SKILL.md</span><em>required</em></div>
       <div><span class="t">├─ </span>templates/<em>optional</em></div>
       <div><span class="t">│&nbsp;&nbsp;└─ </span>prd-template.md</div>
       <div><span class="t">└─ </span>scripts/<em>optional</em></div>
       <div><span class="t">&nbsp;&nbsp;&nbsp;└─ </span>check-sections.py</div></div>
     <div class="md a-fade" style="--i:2">
       <span class="tag" style="top:30px">the trigger</span><span class="tag l" style="top:170px">the recipe</span>
       <div class="fm">---</div>
       <div><span class="key">name:</span> prd-writer</div>
       <div class="hl"><span class="key">description:</span> Write a PRD from notes. Use when the user asks for a PRD, spec or one-pager.</div>
       <div class="fm">---</div>
       <div class="h"># Steps</div>
       <div>1. Read the notes. Ask 3 clarifying questions.</div>
       <div>2. Fill templates/prd-template.md.</div>
       <div>3. Run scripts/check-sections.py.</div>
       <div>4. Return PRD.md with open risks.</div></div></div>`},
  {sec:'CLAUDE CODE', cls:'viz', title:`TRIGGER, <span class="g">LOAD, RUN</span>`,
   body:`<div class="ask a-fade" style="--i:0"><b>you</b> Turn these 12 interview notes into a PRD for the savings feature.</div>
     <div class="fl">
       <div class="st a-fade" style="--i:1"><div class="k"><b>1</b>Trigger</div><div class="s">Only names and descriptions sit in its memory. Cheap.</div>
         <div class="sl"><div>exec-update</div><div class="on">prd-writer</div><div>interview-synth</div><div>roadmap-review</div><div>release-notes</div></div></div>
       <div class="ar a-fade" style="--i:2"></div>
       <div class="st a-fade" style="--i:3"><div class="k"><b>2</b>Load</div><div class="s">The match pulls in the full SKILL.md.</div>
         <div class="doc"><div><span class="key">name:</span> prd-writer</div><div># Steps</div><div>1. Read notes, ask 3 questions</div><div>2. Fill the template</div><div>3. Run the check</div><div>4. Return PRD.md</div></div></div>
       <div class="ar a-fade" style="--i:4"></div>
       <div class="st a-fade" style="--i:5"><div class="k"><b>3</b>Run</div><div class="s">Claude follows the recipe, same way every time.</div>
         <div class="run"><div><i>1</i>Asks 3 questions</div><div><i>2</i>Fills the template</div><div><i>3</i>Checks all sections</div><div><i>4</i>Writes the file</div></div>
         <div class="out">PRD.md</div></div></div>`}
  ]
});
