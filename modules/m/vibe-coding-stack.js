MOD({
  id:'vibe-coding-stack', title:'The vibe-coding stack', cluster:'pm', fits:[7], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-vibe-coding-stack .vs{display:grid;grid-template-columns:1fr 250px 1fr;column-gap:22px;row-gap:12px;align-items:center}
  .m-vibe-coding-stack .vs-h{font-family:var(--m);font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.1em}
  .m-vibe-coding-stack .vs-h.pm{text-align:right;color:var(--green)}
  .m-vibe-coding-stack .vs-h.c{text-align:center}
  .m-vibe-coding-stack .vs-pm{text-align:right;font-size:clamp(15px,1.4vw,18px);line-height:1.35;color:var(--fg)}
  .m-vibe-coding-stack .vs-ai{font-size:clamp(15px,1.4vw,18px);line-height:1.35;color:var(--muted)}
  .m-vibe-coding-stack .vs-l{position:relative;height:62px;border:1px solid var(--dim);border-radius:12px;background:var(--surface);display:flex;align-items:center;gap:12px;padding:0 18px;font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:22px}
  .m-vibe-coding-stack .vs-l b{font-family:var(--m);font-weight:400;font-size:13px;color:var(--muted)}
  .m-vibe-coding-stack .vs-l.key{background:var(--green);color:var(--on-accent);border-color:var(--green);box-shadow:0 0 24px color-mix(in srgb,var(--green) 35%,transparent)}
  .m-vibe-coding-stack .vs-l.key b{color:var(--on-accent)}
  .m-vibe-coding-stack .vs-l.end{border-color:var(--green);color:var(--green)}
  .m-vibe-coding-stack .vs-l:not(.end):after{content:'';position:absolute;left:50%;bottom:-13px;width:2px;height:12px;background:var(--c-55555b)}
  .m-vibe-coding-stack .vs-pm,.m-vibe-coding-stack .vs-ai{position:relative}
  .m-vibe-coding-stack .vs-pm:after,.m-vibe-coding-stack .vs-ai:before{content:'';position:absolute;top:50%;width:12px;height:1px;background:var(--dim)}
  .m-vibe-coding-stack .vs-pm:after{right:-17px} .m-vibe-coding-stack .vs-ai:before{left:-17px}
  `,
  slides:[
  {sec:'CAPSTONE · BUILD', cls:'viz', title:`FROM IDEA TO <span class="g">LIVE URL</span>`,
   body:`<div class="vs"></div>
     <div class="lead a-fade" style="--i:18;margin-top:18px;max-width:none">AI writes the code. <span class="g">You own the idea, the calls and the test with real users.</span></div>`,
   init(el){
     const L=[
       ['Idea','Name the user, the problem and the one magic moment.','Pressure-tests the idea. Drafts a one-page spec.'],
       ['Claude Code','Describe the feature. Approve the plan. Click through it.','Writes the files, runs commands, fixes errors.','key'],
       ['GitHub','Save each working version. Roll back when needed.','Labels each version and uploads the code.'],
       ['Vercel','Link your code folder once. Add the secret keys.','Puts each new version live, on its own.'],
       ['Live URL','Put it in front of real users. Decide what to fix.','Reads the feedback, ships the next fix.','end']];
     let h=`<div class="vs-h pm a-fade" style="--i:0">You, the PM</div><div class="vs-h c a-fade" style="--i:0">Layer</div><div class="vs-h a-fade" style="--i:0">AI and tools</div>`;
     L.forEach((l,k)=>{ const i=1+k*3;
       h+=`<div class="vs-pm a-fade" style="--i:${i+1}">${l[1]}</div><div class="vs-l a-pop ${l[3]||''}" style="--i:${i}"><b>${k+1}</b>${l[0]}</div><div class="vs-ai a-fade" style="--i:${i+2}">${l[2]}</div>`; });
     el.querySelector('.vs').innerHTML=h;
   }}
  ]
});
