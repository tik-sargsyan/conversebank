MOD({
  id:'claude-models', title:'The Claude model family', cluster:'claude', fits:[1,2], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-claude-models .cm{display:grid;grid-template-columns:1.25fr 1fr;gap:3.5vw;align-items:center}
  .m-claude-models .cm-map{height:min(56vh,420px)}
  .m-claude-models .cm-map svg{width:100%;height:100%;overflow:visible}
  .m-claude-models .cm-ax{stroke:var(--dim);stroke-width:2}
  .m-claude-models .cm-dot{fill:var(--surface);stroke:var(--fg);stroke-width:2}
  .m-claude-models .cm-dot.g{fill:var(--green);stroke:var(--green)}
  .m-claude-models .cm-name{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:22px;fill:var(--fg);letter-spacing:.03em}
  .m-claude-models .cm-trend{stroke:var(--green);stroke-width:2;stroke-dasharray:6 8;fill:none;opacity:.6}
  .m-claude-models .cm-cards{display:flex;flex-direction:column;gap:10px}
  .m-claude-models .cm-card{display:grid;grid-template-columns:120px 1fr;gap:14px;align-items:center;border:1px solid var(--line);border-radius:10px;padding:12px 16px;background:var(--surface)}
  .m-claude-models .cm-card .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.03em}
  .m-claude-models .cm-card .d{color:var(--muted);font-size:14px;line-height:1.35}
  .m-claude-models .cm-card code{display:block;font-family:var(--m);font-size:13px;color:var(--fg-2);margin-top:3px}
  .m-claude-models .cm-card.q{border-style:dashed;border-color:var(--green)}
  .m-claude-models .cm-card.q .k{color:var(--green)}
  .m-claude-models .sp{border:1px solid var(--line);border-radius:10px;background:var(--surface);padding:12px 18px;font-family:var(--m);font-size:15px;color:var(--fg-2);display:flex;gap:12px;align-items:center}
  .m-claude-models .sp b{color:var(--green);font-weight:600}
  .m-claude-models .sp-lanes{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
  .m-claude-models .lane{border:1px solid var(--line);border-radius:12px;padding:14px 18px;background:var(--surface)}
  .m-claude-models .lane.on{border-color:var(--green)}
  .m-claude-models .lane .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:22px;letter-spacing:.03em}
  .m-claude-models .lane.on .k{color:var(--green)}
  .m-claude-models .lane .r{display:grid;grid-template-columns:70px 1fr;gap:10px;align-items:center;font-size:14px;color:var(--muted);margin-top:10px}
  .m-claude-models .lane .meter{height:10px;border-radius:5px}
  .m-claude-models .lane .ans{margin-top:12px;display:flex;flex-direction:column;gap:6px}
  .m-claude-models .lane .ans i{display:block;height:7px;border-radius:4px;background:var(--c-2f2f33)}
  .m-claude-models .lane .fit{margin-top:12px;font-size:15px;color:var(--fg);line-height:1.35;min-height:42px}
  `,
  slides:[
  {sec:'CLAUDE TODAY', cls:'viz', title:`ONE FAMILY, <span class="g">FOUR MODELS</span>`,
   body:`<div class="cm"><div class="cm-map"><svg viewBox="0 0 560 400" role="img" aria-label="Map: capability up, speed and low cost right. Haiku bottom right, Sonnet middle, Opus top left."></svg></div>
     <div><div class="cm-cards">
       <div class="cm-card a-fade" style="--i:0"><div class="k">Haiku 5.5</div><div class="d">Fastest and cheapest tier. High volume, simple jobs.<code>claude-haiku-5-5</code></div></div>
       <div class="cm-card a-fade" style="--i:1"><div class="k">Sonnet 5.5</div><div class="d">The everyday workhorse. Balanced.<code>claude-sonnet-5-5</code></div></div>
       <div class="cm-card a-fade" style="--i:2"><div class="k">Opus 5.5</div><div class="d">Most capable of the three tiers. Slower, pricier.<code>claude-opus-5-5</code></div></div>
       <div class="cm-card q a-fade" style="--i:3"><div class="k">Fable 5.1</div><div class="d">Newest name in the family. We place it together.<code>claude-fable-5-1</code></div></div></div>
       <div class="src" style="margin-top:12px"><b>Positions:</b> general tier pattern, illustrative</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg');
     VIZ.s('line',{x1:60,y1:360,x2:540,y2:360,class:'cm-ax'},svg);
     VIZ.s('line',{x1:60,y1:360,x2:60,y2:20,class:'cm-ax'},svg);
     VIZ.s('path',{d:'M540 360 l-10 -6 v12 z',fill:'var(--dim)'},svg);
     VIZ.s('path',{d:'M60 20 l-6 10 h12 z',fill:'var(--dim)'},svg);
     const t1=VIZ.s('text',{x:540,y:388,'text-anchor':'end',class:'svg-t'},svg); t1.textContent='faster + cheaper';
     const t2=VIZ.s('text',{x:40,y:24,'text-anchor':'end',class:'svg-t',transform:'rotate(-90 40 24)'},svg); t2.textContent='more capable';
     VIZ.s('path',{d:'M470 310 Q300 210 140 90',class:'cm-trend a-draw',style:'--len:420'},svg);
     const P=[{n:'Haiku',x:470,y:310,r:14},{n:'Sonnet',x:310,y:215,r:20},{n:'Opus',x:140,y:90,r:26}];
     P.forEach((p,k)=>{
       VIZ.s('circle',{cx:p.x,cy:p.y,r:p.r,class:'cm-dot a-pop'+(k===1?' g':''),style:`--i:${k*2};transform-box:fill-box;transform-origin:center`},svg);
       const t=VIZ.s('text',{x:p.x+p.r+12,y:p.y+8,class:'cm-name a-fade',style:`--i:${k*2+1}`},svg); t.textContent=p.n;
     });
   }},
  {sec:'CLAUDE TODAY', cls:'viz', title:`SAME PROMPT, <span class="g">DIFFERENT MODEL</span>`,
   body:`<div class="sp a-fade" style="--i:0"><b>prompt</b> Summarise these 40 user interviews into 5 themes with quotes.</div>
     <div class="sp-lanes">
       <div class="lane a-fade" style="--i:1"><div class="k">Haiku</div>
         <div class="r">wait<div class="meter"><b class="a-grow" style="width:18%;--i:3"></b></div></div>
         <div class="r">cost<div class="meter w"><b class="a-grow" style="width:12%;--i:3"></b></div></div>
         <div class="ans"><i style="width:90%"></i><i style="width:60%"></i></div>
         <div class="fit">Good for: tagging 5,000 tickets.</div></div>
       <div class="lane on a-fade" style="--i:2"><div class="k">Sonnet</div>
         <div class="r">wait<div class="meter"><b class="a-grow" style="width:45%;--i:4"></b></div></div>
         <div class="r">cost<div class="meter w"><b class="a-grow" style="width:40%;--i:4"></b></div></div>
         <div class="ans"><i style="width:95%"></i><i style="width:85%"></i><i style="width:70%"></i><i style="width:50%"></i></div>
         <div class="fit">Good for: this prompt. Solid themes, fair cost.</div></div>
       <div class="lane a-fade" style="--i:3"><div class="k">Opus</div>
         <div class="r">wait<div class="meter"><b class="a-grow" style="width:80%;--i:5"></b></div></div>
         <div class="r">cost<div class="meter w"><b class="a-grow" style="width:85%;--i:5"></b></div></div>
         <div class="ans"><i style="width:95%"></i><i style="width:90%"></i><i style="width:85%"></i><i style="width:80%"></i><i style="width:60%"></i></div>
         <div class="fit">Good for: the strategy memo that follows.</div></div></div>
     <div class="src" style="margin-top:14px"><b>Bars:</b> illustrative, relative only</div>`}
  ]
});
