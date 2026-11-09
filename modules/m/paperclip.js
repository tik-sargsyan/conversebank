MOD({
  id:'paperclip', title:'The paperclip maximizer', cluster:'society', fits:[1,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-paperclip .pc{display:grid;grid-template-columns:1fr 1fr;gap:4vw;align-items:center}
  .m-paperclip .pc-rings{position:relative;aspect-ratio:1;width:min(58vh,520px);margin:auto}
  .m-paperclip .pc-rings svg{width:100%;height:100%}
  .m-paperclip .pc-ring{fill:none;stroke:var(--line);stroke-width:2}
  .m-paperclip .pc-ring.on{stroke:var(--warn);fill:color-mix(in srgb,var(--warn) 8%,transparent)}
  .m-paperclip .pc-ring.on.last{fill:color-mix(in srgb,var(--warn) 16%,transparent)}
  .m-paperclip .pc-rl{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:13px;letter-spacing:.12em;fill:var(--muted)}
  .m-paperclip .pc-rl.on{fill:var(--fg)}
  .m-paperclip .pc-count{font-family:var(--m);color:var(--warn);font-size:clamp(28px,3.6vw,52px);font-weight:600;letter-spacing:-.01em;line-height:1}
  .m-paperclip .pc-stage{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:clamp(20px,2.2vw,30px);margin-top:12px}
  .m-paperclip .pc-goal{font-family:var(--m);font-size:15px;color:var(--green);border:1px solid var(--line);border-radius:8px;padding:10px 14px;display:inline-block;margin-bottom:26px;background:var(--surface)}
  .m-paperclip .ic{display:grid;grid-template-columns:auto 1fr;gap:5vw;align-items:center}
  .m-paperclip .ic-core{width:min(30vh,240px);aspect-ratio:1;border-radius:50%;border:2px solid var(--green);display:flex;align-items:center;justify-content:center;text-align:center;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;padding:20px;background:var(--green-a)}
  .m-paperclip .rung{grid-template-columns:230px 1fr 120px}
  .m-paperclip .rung .k{color:var(--warn)}
  .m-paperclip .pc-count sup{font-size:.55em}
  `,
  slides:[
  {sec:'PHILOSOPHY', cls:'viz', title:`THE <span class="g">PAPERCLIP</span> MAXIMIZER`,
   body:`<div class="pc"><div class="pc-rings"><svg viewBox="0 0 500 500" aria-label="Rings from factory to galaxy fill up with paperclips"></svg></div>
     <div><div class="pc-goal">goal = "make as many paperclips as possible"</div>
       <div class="pc-count">0</div><div class="stat-cap">paperclips</div>
       <div class="pc-stage">One factory</div>
       <div class="stat-cap" style="margin-top:22px;max-width:460px">Nothing in the goal says <b>stop</b>. Nothing says <b>people matter</b>. A capable enough system follows the goal, not your intent.</div>
       <div class="ctl"><button type="button">replay</button></div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), c=250;
     const S=[['One factory',1e6],['A city of factories',1e10],['A whole country',1e15],['The planet',1e24],['The solar system',1e30]];
     // draw outer rings first so inner ones sit on top; rings[k], k=0 is the factory
     const rings=[];
     for(let k=S.length-1;k>=0;k--) rings[k]=[VIZ.s('circle',{cx:c,cy:c,r:40+k*48,class:'pc-ring'},svg)];
     S.forEach((s,k)=>{ const t=VIZ.s('text',{x:c,y:c-(40+k*48)+20,'text-anchor':'middle',class:'pc-rl'},svg); t.textContent=s[0].replace(/^(One|A|The) /,''); rings[k].push(t); });
     const cnt=el.querySelector('.pc-count'), stg=el.querySelector('.pc-stage');
     const fmt=n=>n<1e6?Math.round(n).toLocaleString('en-US'):n.toExponential(1).replace(/e\+(\d+)/,' × 10<sup>$1</sup>');
     function paint(k,n){ rings.forEach(([r,t],j)=>{ r.classList.toggle('on',j<=k); r.classList.toggle('last',j===k); t.classList.toggle('on',j<=k); }); stg.textContent=S[k][0]; cnt.innerHTML=fmt(n); }
     let raf;
     function play(){
       cancelAnimationFrame(raf);
       if(VIZ.reduced){ paint(4,S[4][1]); return; }
       const t0=performance.now(), D=6000;
       const step=now=>{ const p=Math.min(1,(now-t0)/D), lg=p*30, k=Math.min(4,S.findIndex(s=>Math.log10(s[1])>=lg));
         paint(k<0?4:k, Math.pow(10,lg)); if(p<1) raf=requestAnimationFrame(step); };
       raf=requestAnimationFrame(step);
     }
     paint(4,S[4][1]);
     el.querySelector('button').addEventListener('click',play);
     VIZ.onShow(el,play);
   }},
  {sec:'PHILOSOPHY', cls:'viz', title:`ANY GOAL WANTS <span class="w">THE SAME 3 THINGS</span>`,
   body:`<div class="ic"><div class="ic-core a-pop">Any big goal</div>
     <div class="ladder">
       <div class="rung a-fade" style="--i:1"><div class="k">More resources</div><div class="d">Steel, energy, computers. More is always useful.</div><div class="meter w"><b style="width:100%"></b></div></div>
       <div class="rung a-fade" style="--i:2"><div class="k">Stay switched on</div><div class="d">You cannot make paperclips if someone turns you off.</div><div class="meter w"><b style="width:100%"></b></div></div>
       <div class="rung a-fade" style="--i:3"><div class="k">Keep the goal</div><div class="d">A changed goal means fewer paperclips. So resist edits.</div><div class="meter w"><b style="width:100%"></b></div></div></div></div>
     <div class="lead a-fade" style="--i:5;margin-top:26px">This is why <span class="g">limits, off switches and permissions</span> are part of the design, not an afterthought.</div>`}
  ]
});
