MOD({
  id:'claude-models', title:'Claude and ChatGPT model tiers', cluster:'claude', fits:[1,2], minutes:4,
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
  .m-claude-models .ld{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;align-items:end;height:min(46vh,350px);margin-top:6px}
  .m-claude-models .ld-st{height:calc(52% + var(--i)*16%);border:1px solid var(--line-2);border-top:4px solid var(--fg-2);border-radius:14px 14px 6px 6px;background:var(--surface);padding:14px 16px;display:flex;flex-direction:column;gap:8px}
  .m-claude-models .ld-st.top{border-color:var(--green);border-top-color:var(--green)}
  .m-claude-models .ld-t{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:clamp(16px,1.7vw,21px);color:var(--fg);letter-spacing:.03em}
  .m-claude-models .ld-st.top .ld-t{color:var(--green)}
  .m-claude-models .ld-d{font-size:13px;color:var(--muted);line-height:1.3;margin-bottom:auto}
  .m-claude-models .ld-m{display:flex;align-items:center;gap:9px;font-family:var(--h);font-weight:700;font-size:clamp(14px,1.4vw,17px);color:var(--fg);border:1px solid var(--line);border-radius:8px;padding:7px 10px;background:var(--bg)}
  .m-claude-models .ld-m i{width:12px;height:12px;flex:none}
  .m-claude-models .ld-m.c i{border-radius:50%;background:var(--green)}
  .m-claude-models .ld-m.o i{border:2px solid var(--fg);border-radius:2px}
  .m-claude-models .ld-m b{font:600 11px var(--m);color:var(--on-accent);background:var(--green);border-radius:4px;padding:1px 6px;margin-left:auto;text-transform:uppercase}
  .m-claude-models .ld-m.none{color:var(--muted);font-weight:500;font-family:var(--b);font-size:13px;border-style:dashed}
  .m-claude-models .ld-ax{display:flex;justify-content:space-between;font:14px var(--m);color:var(--muted);margin-top:10px;border-top:2px solid var(--line-2);padding-top:6px}
  .m-claude-models .ld-key{display:flex;gap:22px;font-size:14px;color:var(--fg-2);margin-top:8px}
  .m-claude-models .ld-key i{display:inline-block;width:12px;height:12px;margin-right:8px;vertical-align:-1px}
  .m-claude-models .ld-key i.c{border-radius:50%;background:var(--green)} .m-claude-models .ld-key i.o{border:2px solid var(--fg);border-radius:2px}
  .slide.active.m-claude-models .ld-st{animation:m-fade .6s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*170ms + 150ms)}
  @media (max-width:900px){.m-claude-models .ld{grid-template-columns:repeat(2,1fr);height:auto}.m-claude-models .ld-st{height:auto}}
  @media (prefers-reduced-motion:reduce){.slide.active.m-claude-models .ld-st{animation:none}}
  .m-claude-models .mm svg{width:100%;height:min(54vh,430px);display:block;overflow:visible}
  .m-claude-models .cm-name{font-size:19px}
  .m-claude-models .cm-name.g{fill:var(--green)}
  .m-claude-models .cm-sq{fill:var(--bg);stroke:var(--fg);stroke-width:2.5}
  .m-claude-models .cm-new{fill:var(--green)}
  .m-claude-models .cm-new-t{font:600 12px var(--m);fill:var(--on-accent)}
  .m-claude-models .mm-key{display:flex;gap:22px;font-size:14px;color:var(--fg-2);margin-top:6px}
  .m-claude-models .mm-key i{display:inline-block;width:12px;height:12px;margin-right:8px;vertical-align:-1px}
  .m-claude-models .mm-key i.c{border-radius:50%;background:var(--green)} .m-claude-models .mm-key i.o{border:2px solid var(--fg);border-radius:2px}
  `,
  slides:[
  {sec:'AI MODELS TODAY', cls:'viz', title:`CLAUDE VS CHATGPT, <span class="g">ON ONE MAP</span>`,
   body:`<div class="mm"><svg viewBox="0 0 900 430" role="img" aria-label="Map: up is more capable, right is faster and cheaper. Fable 5.2 sits highest. Opus 5.5 and GPT-6 Astra sit close together below it. Sonnet 5.5 and GPT-6 Sol sit in the middle. Haiku 5.5 and GPT-6 Luna sit bottom right."></svg></div>
     <div class="mm-key"><span><i class="c"></i>Claude (Anthropic)</span><span><i class="o"></i>ChatGPT (OpenAI)</span></div>
     <div class="src" style="margin-top:8px"><b>Positions:</b> approximate, from Artificial Analysis Intelligence Index (Fable 5.2: 65, Opus 5.5: 59, GPT-6 Astra: 57) and list prices · Fable 5.2 released 9 Nov 2026</div>`,
   init(el){
     const svg=el.querySelector('svg');
     VIZ.s('line',{x1:70,y1:390,x2:870,y2:390,class:'cm-ax'},svg);
     VIZ.s('line',{x1:70,y1:390,x2:70,y2:20,class:'cm-ax'},svg);
     VIZ.s('path',{d:'M870 390 l-10 -6 v12 z',fill:'var(--dim)'},svg);
     VIZ.s('path',{d:'M70 20 l-6 10 h12 z',fill:'var(--dim)'},svg);
     VIZ.s('text',{x:870,y:418,'text-anchor':'end',class:'svg-t'},svg).textContent='faster + cheaper →';
     VIZ.s('text',{x:46,y:24,'text-anchor':'end',class:'svg-t',transform:'rotate(-90 46 24)'},svg).textContent='more capable →';
     // tier bands
     VIZ.s('path',{d:'M760 345 Q520 250 240 120',class:'cm-trend a-draw',style:'--len:700'},svg);
     const C=[{n:'Haiku 5.5',x:740,y:340,r:13},{n:'Sonnet 5.5',x:500,y:250,r:17},{n:'Opus 5.5',x:250,y:135,r:21},{n:'Fable 5.2',x:150,y:55,r:24,top:1}];
     const G=[{n:'GPT-6 Luna',x:800,y:322,s:22},{n:'GPT-6 Sol',x:560,y:238,s:28},{n:'GPT-6 Astra',x:300,y:150,s:32}];
     let i=0;
     C.forEach(p=>{
       VIZ.s('circle',{cx:p.x,cy:p.y,r:p.r,class:'cm-dot g a-pop',style:`--i:${i++};transform-box:fill-box;transform-origin:center`},svg);
       const t=VIZ.s('text',{x:p.top?p.x+p.r+14:p.x-p.r-12,y:p.y+8,'text-anchor':p.top?'start':'end',class:'cm-name g a-fade',style:`--i:${i}`},svg); t.textContent=p.n;
     });
     G.forEach(p=>{
       VIZ.s('rect',{x:p.x-p.s/2,y:p.y-p.s/2,width:p.s,height:p.s,rx:3,class:'cm-sq a-pop',style:`--i:${i++};transform-box:fill-box;transform-origin:center`},svg);
       const t=VIZ.s('text',{x:p.x+p.s/2+12,y:p.y+7,class:'cm-name a-fade',style:`--i:${i}`},svg); t.textContent=p.n;
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
