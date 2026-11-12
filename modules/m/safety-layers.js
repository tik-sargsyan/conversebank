MOD({
  id:'safety-layers', title:'How labs make models safer', cluster:'society', fits:[1,6], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-safety-layers .sl-stage{height:54vh}
  .m-safety-layers .sl-k{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:20px;fill:var(--fg)}
  .m-safety-layers .sl-d{font-family:var(--b);font-size:16px;fill:var(--muted)}
  .m-safety-layers .sl-slice{fill:var(--c-1b1b1e);stroke:var(--dim);stroke-width:2}
  .m-safety-layers .sl-hole{fill:var(--bg);stroke:var(--dim);stroke-width:1.5}
  .m-safety-layers .rows2{display:flex;flex-direction:column;gap:10px}
  .m-safety-layers .r2{display:grid;grid-template-columns:34px 250px 1fr 190px;gap:18px;align-items:center;border:1px solid var(--line);border-radius:10px;padding:12px 18px;background:var(--surface)}
  .m-safety-layers .r2 .n{font-family:var(--h);font-weight:900;font-size:24px;color:var(--muted)}
  .m-safety-layers .r2 .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:19px;letter-spacing:.03em}
  .m-safety-layers .r2 .d{color:var(--muted);font-size:16px;line-height:1.35}
  .m-safety-layers .r2 .chip{justify-content:center}
  .m-safety-layers .r2.you{border-color:color-mix(in srgb,var(--green) 45%,transparent)}
  `,
  slides:[
  {sec:'AI SAFETY', cls:'viz', title:`SAFETY IS <span class="g">LAYERS</span>, NOT A WALL`,
   body:`<div class="stage sl-stage"><svg viewBox="0 0 1120 450" role="img" aria-label="Illustrative Swiss cheese model. Six risky requests fly at five layers: training, system prompt and policies, classifiers and monitoring, permissions and sandboxes, human review. Each layer has holes. Five requests are caught at different layers. One passes through holes that line up."></svg></div>
     <div class="ctl"><button type="button">replay</button><span>illustrative</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), s=(t,a,p)=>VIZ.s(t,a,p||svg), tx=(a,txt,p)=>{ const e=s('text',a,p); e.textContent=txt; return e; };
     const LN=[70,120,170,220,270,320], XS=[250,430,610,790,970], SW=54;
     const H=[[1,2,4,5],[0,2,4,5],[2,3,5],[1,2],[0,2,4]];
     const N=[['Training','RLHF,','Constitutional AI'],['System prompt','and policies'],['Classifiers','and monitoring'],['Permissions','and sandboxes'],['Human','review']];
     XS.forEach((x,i)=>{ const g=s('g',{class:'a-fade',style:'--i:'+i});
       s('path',{d:`M${x} 50 L${x+SW} 30 L${x+SW} 330 L${x} 350 Z`,class:'sl-slice'},g);
       H[i].forEach(l=>s('ellipse',{cx:x+SW/2,cy:LN[l],rx:16,ry:18,class:'sl-hole'},g));
       N[i].forEach((t,j)=>tx({x:x+SW/2,y:385+j*22,'text-anchor':'middle',class:j?'sl-d':'sl-k'},t,g));
     });
     const lab=tx({x:20,y:30,class:'sl-d'},'risky requests',svg);
     // where each hazard stops
     const stop=LN.map((_,l)=>{ for(let i=0;i<XS.length;i++) if(!H[i].includes(l)) return i; return -1; });
     const dots=LN.map((y,l)=>{ const end=stop[l]<0?1090:XS[stop[l]]-14, pass=stop[l]<0;
       const g=s('g',{}); const tr=s('line',{x1:40,y1:y,x2:40,y2:y,stroke:pass?'var(--warn)':'var(--fg)','stroke-opacity':pass?.6:.18,'stroke-width':2,'stroke-dasharray':'4 6'},g); const c=s('circle',{cx:0,cy:y,r:11,fill:pass?'var(--warn)':'var(--fg)'},g);
       const ring=s('circle',{cx:0,cy:y,r:18,fill:'none',stroke:'var(--green)','stroke-width':2.5},g);
       return {g,c,ring,tr,end,pass,y}; });
     const pl=tx({x:1090,y:LN[2]-26,'text-anchor':'end',class:'sl-k',style:'fill:var(--warn);font-size:17px'},'gets through',svg);
     const put=(d,x,done)=>{ d.tr.setAttribute('x2',x); d.c.setAttribute('cx',x); d.ring.setAttribute('cx',x); d.ring.style.opacity=(done&&!d.pass)?1:0; };
     const final=()=>{ dots.forEach(d=>put(d,d.end,true)); pl.style.opacity=1; };
     let raf;
     function play(){
       cancelAnimationFrame(raf); if(VIZ.reduced){ final(); return; }
       pl.style.opacity=0; const t0=performance.now();
       const step=now=>{ let all=true;
         dots.forEach((d,k)=>{ const t=Math.max(0,(now-t0-300-k*250)/2200), p=Math.min(1,t), x=40+(d.end-40)*(1-Math.pow(1-p,2));
           put(d,x,p>=1); if(p<1) all=false; });
         if(all){ pl.style.opacity=1; return; } raf=requestAnimationFrame(step); };
       raf=requestAnimationFrame(step);
     }
     final();
     el.querySelector('button').addEventListener('click',play);
     el.addEventListener('keydown',e=>e.stopPropagation());
     VIZ.onShow(el,play);
   }},
  {sec:'AI SAFETY', cls:'viz', title:`WHICH LAYERS <span class="g">YOU</span> CONTROL`,
   body:`<div class="rows2">
     <div class="r2 a-fade" style="--i:0"><span class="n">1</span><span class="k">Training</span><span class="d">The model learns to refuse harm. Human feedback (RLHF) or a written constitution.</span><span class="chip">the lab</span></div>
     <div class="r2 you a-fade" style="--i:1"><span class="n">2</span><span class="k">System prompt, policy</span><span class="d">Rules for your feature: scope, tone, what to never do.</span><span class="chip on">you</span></div>
     <div class="r2 a-fade" style="--i:2"><span class="n">3</span><span class="k">Classifiers, monitoring</span><span class="d">Filters on inputs and outputs. Logs you actually read.</span><span class="chip">lab and you</span></div>
     <div class="r2 you a-fade" style="--i:3"><span class="n">4</span><span class="k">Permissions, sandbox</span><span class="d">What the agent may touch: read only, no payments, test data.</span><span class="chip on">you</span></div>
     <div class="r2 you a-fade" style="--i:4"><span class="n">5</span><span class="k">Human review</span><span class="d">A person approves the risky step: send, pay, delete, publish.</span><span class="chip on">you</span></div></div>
     <div class="lead a-fade" style="--i:6;margin-top:20px;max-width:none">The lab ships layer 1. <span class="g">Your product design adds the rest.</span></div>`}
  ]
});
