MOD({
  id:'context-compaction', title:'When the desk fills up: compaction', cluster:'claude', fits:[2], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-context-compaction svg{width:100%;display:block;overflow:visible}
  .m-context-compaction .cc svg{height:54vh}
  .m-context-compaction .win{fill:none;stroke:var(--fg);stroke-width:2.5}
  .m-context-compaction .win.w{stroke:var(--warn)}
  .m-context-compaction .msg{fill:var(--c-2a2a2e);stroke:var(--c-55555b);stroke-width:1.2}
  .m-context-compaction .msg.u{fill:var(--c-4a4a50)}
  .m-context-compaction .note{fill:var(--green)}
  .m-context-compaction .note-t{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:15px;fill:var(--bg);letter-spacing:.04em}
  .m-context-compaction .rk{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:19px;fill:var(--fg)}
  .m-context-compaction .rk.w{fill:var(--warn)} .m-context-compaction .rk.g{fill:var(--green)}
  .m-context-compaction .rs{font-family:var(--b);font-size:14px;fill:var(--muted)}
  .m-context-compaction .pct{font-family:var(--m);font-size:14px;fill:var(--muted)}
  .m-context-compaction .pct.w{fill:var(--warn)} .m-context-compaction .pct.g{fill:var(--green)}
  .m-context-compaction .sq{transition:transform .9s cubic-bezier(.6,0,.3,1),opacity .5s ease .5s}
  .m-context-compaction .ctl{margin-top:2px}
  .m-context-compaction .sv svg{height:52vh}
  .m-context-compaction .chip-s rect{fill:var(--surface);stroke:var(--c-55555b);stroke-width:1.5}
  .m-context-compaction .chip-s text{font-family:var(--b);font-size:14.5px;fill:var(--fg-2)}
  .m-context-compaction .chip-s.g rect{fill:color-mix(in srgb,var(--green) 12%,transparent);stroke:var(--green)}
  .m-context-compaction .chip-s.g text{fill:var(--green)}
  .m-context-compaction .chip-s.x rect{stroke-dasharray:5 4;fill:transparent;stroke:var(--c-6a6a70)}
  .m-context-compaction .chip-s.x text{fill:var(--muted);text-decoration:line-through}
  .m-context-compaction .bx{fill:none;stroke:var(--fg);stroke-width:2}
  .m-context-compaction .bx.g{stroke:var(--green);fill:color-mix(in srgb,var(--green) 5%,transparent)}
  .m-context-compaction .hd{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.1em;font-size:15px;fill:var(--fg)}
  .m-context-compaction .hd.g{fill:var(--green)} .m-context-compaction .hd.m{fill:var(--muted)}
  .m-context-compaction .fn{fill:color-mix(in srgb,var(--green) 8%,transparent);stroke:var(--green);stroke-width:2}
  `,
  slides:[
  {sec:'CLAUDE TODAY', cls:'viz', title:`FULL DESK? <span class="g">SQUEEZE IT INTO A NOTE</span>`,
   body:`<div class="cc"><svg viewBox="0 0 1100 400" role="img" aria-label="Three stages. 1: messages fill the context window. 2: the window is full. 3: the conversation is squeezed into one summary note and work continues."></svg></div>
     <div class="ctl"><button type="button">replay squeeze</button><span>Claude Code does this on its own near the limit, or when you type /compact.</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), X=300, W=780, H=74, rows=[24,154,284], n=22, bw=(W-16)/n;
     const lab=[['1 Work piles up','messages, file reads, tool output',''],['2 The window is full','no room for the next step','w'],['3 Compacted','one summary note, room to continue','g']];
     const pct=[['used 70%',''],['used 100%','w'],['used 15%','g']];
     const widths=[.7,1,0];
     rows.forEach((y,r)=>{
       VIZ.s('text',{x:0,y:y+32,class:'rk '+lab[r][2]},svg).textContent=lab[r][0];
       VIZ.s('text',{x:0,y:y+54,class:'rs'},svg).textContent=lab[r][1];
       VIZ.s('rect',{x:X,y,width:W,height:H,rx:10,class:'win'+(r===1?' w':'')},svg);
       VIZ.s('text',{x:X+W,y:y-6,'text-anchor':'end',class:'pct '+pct[r][1]},svg).textContent=pct[r][0];
       const k=Math.round(n*widths[r]);
       for(let i=0;i<k;i++) VIZ.s('rect',{x:X+8+i*bw,y:y+10,width:bw-4,height:H-20,rx:4,class:'msg'+(i%3===0?' u':'')+' a-fade',style:`--i:${r*3+Math.floor(i/6)}`},svg);
     });
     // row 3: ghosts that squeeze into the note
     const y3=rows[2], ghosts=VIZ.s('g',{},svg), ghostEls=[];
     for(let i=0;i<n;i++) ghostEls.push(VIZ.s('rect',{x:X+8+i*bw,y:y3+10,width:bw-4,height:H-20,rx:4,class:'msg sq'+(i%3===0?' u':''),style:'opacity:0'},ghosts));
     const nw=110;
     const note=VIZ.s('g',{},svg);
     VIZ.s('rect',{x:X+8,y:y3+10,width:nw,height:H-20,rx:6,class:'note'},note);
     VIZ.s('text',{x:X+8+nw/2,y:y3+H/2+5,'text-anchor':'middle',class:'note-t'},note).textContent='Summary';
     const fresh=[];
     for(let i=0;i<3;i++) fresh.push(VIZ.s('rect',{x:X+16+nw+i*bw,y:y3+10,width:bw-4,height:H-20,rx:4,class:'msg'+(i===1?' u':'')},svg));
     function play(){
       note.style.opacity=0; fresh.forEach(f=>f.style.opacity=0);
       ghostEls.forEach((g,i)=>{ g.style.transition='none'; g.style.opacity=1; g.style.transformBox='fill-box'; g.style.transformOrigin='left center'; g.style.transform='none'; });
       requestAnimationFrame(()=>requestAnimationFrame(()=>{
         ghostEls.forEach((g,i)=>{ g.style.transition=''; const dx=(X+8+nw/2)-(X+8+i*bw); g.style.transform=`translateX(${dx}px) scaleX(.2)`; g.style.opacity=0; });
         setTimeout(()=>{ note.style.transition='opacity .4s'; note.style.opacity=1; },700);
         fresh.forEach((f,i)=>setTimeout(()=>{ f.style.transition='opacity .4s'; f.style.opacity=1; },1300+i*300));
       }));
     }
     el.querySelector('button').addEventListener('click',play);
     VIZ.onShow(el,()=>{ if(!VIZ.reduced) setTimeout(play,1200); });
   }},
  {sec:'CLAUDE TODAY', cls:'viz', title:`WHAT SURVIVES, <span class="w">WHAT IS LOST</span>`,
   body:`<div class="sv"><svg viewBox="0 0 1100 390" role="img" aria-label="A long conversation passes through a funnel into a short summary. Goals, decisions, changed files, open to-dos and constraints survive. Exact wording, long tool output, side tangents and one-off details are often lost."></svg></div>
     <div class="lead a-fade" style="--i:12;margin-top:6px;max-width:none">Anything that must survive goes in a file: <span class="g">CLAUDE.md or a notes.md</span>, not only in the chat.</div>`,
   init(el){
     const svg=el.querySelector('svg');
     const keep=['The goal of the task','Decisions you made','Files that changed','Open to-dos','Hard constraints'];
     const lose=['Exact wording of early asks','Long tool output','Side tangents','A detail you said once','Tone notes'];
     const all=[keep[0],lose[0],keep[1],lose[1],keep[2],lose[2],keep[3],lose[3],keep[4],lose[4]];
     const chip=(x,y,t,c,i,w)=>{ const g=VIZ.s('g',{class:'chip-s '+c+' a-fade',style:`--i:${i}`},svg); VIZ.s('rect',{x,y,width:w||250,height:28,rx:14},g); VIZ.s('text',{x:x+14,y:y+19},g).textContent=t; };
     VIZ.s('text',{x:0,y:16,class:'hd'},svg).textContent='Long conversation';
     VIZ.s('rect',{x:0,y:28,width:290,height:356,rx:12,class:'bx'},svg);
     all.forEach((t,i)=>chip(20,44+i*33.5,t,'',i));
     VIZ.s('path',{d:'M320 40 L560 120 L560 210 L320 290 Z',class:'fn a-fade',style:'--i:4'},svg);
     VIZ.s('text',{x:440,y:172,'text-anchor':'middle',class:'hd g'},svg).textContent='compaction';
     VIZ.s('text',{x:600,y:16,class:'hd g'},svg).textContent='Summary note: survives';
     VIZ.s('rect',{x:590,y:28,width:300,height:200,rx:12,class:'bx g'},svg);
     keep.forEach((t,i)=>chip(612,44+i*36,t,'g',6+i));
     VIZ.s('text',{x:600,y:262,class:'hd m'},svg).textContent='Often lost';
     lose.forEach((t,i)=>chip(590+(i%2)*258,274+Math.floor(i/2)*38,t,'x',8+i,i%2?230:250));
   }}
  ]
});
