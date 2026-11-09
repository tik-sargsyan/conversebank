MOD({
  id:'rnn-vs-transformer', title:'RNN reads in order, transformer reads at once', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-rnn-vs-transformer .rt{display:grid;grid-template-columns:1fr 1fr;gap:28px}
  .m-rnn-vs-transformer .rt-p{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:16px 18px 10px}
  .m-rnn-vs-transformer .rt-p.on{border-color:var(--green);box-shadow:0 0 0 1px color-mix(in srgb,var(--green) 25%,transparent)}
  .m-rnn-vs-transformer .rt-h{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .m-rnn-vs-transformer .rt-h b{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:24px;letter-spacing:.03em}
  .m-rnn-vs-transformer .rt-p.on .rt-h b{color:var(--green)}
  .m-rnn-vs-transformer .rt-h span{font-family:var(--m);font-size:14px;color:var(--muted)}
  .m-rnn-vs-transformer .rt-sub{font-size:15px;color:var(--muted);margin-top:4px}
  .m-rnn-vs-transformer svg{width:100%;height:38vh;display:block;margin-top:6px}
  .m-rnn-vs-transformer .rt-w{font-family:var(--b);font-weight:600;font-size:19px;fill:var(--fg)}
  .m-rnn-vs-transformer .rt-w.dim{fill:var(--subtle)}
  .m-rnn-vs-transformer .rt-t{font-family:var(--m);font-size:15px;fill:var(--muted)}
  .m-rnn-vs-transformer .rt-box{fill:var(--c-141416);stroke:var(--dim);stroke-width:2;transition:fill .25s,stroke .25s}
  .m-rnn-vs-transformer .rt-box.on{stroke:var(--green);fill:color-mix(in srgb,var(--green) 18%,transparent)}
  .m-rnn-vs-transformer .rt-chip{transition:opacity .3s}
  .m-rnn-vs-transformer .rt-arc{fill:none;stroke:var(--fg)}
  .m-rnn-vs-transformer .rt-arc.g{stroke:var(--green)}
  .slide.active.m-rnn-vs-transformer .rt-arcs{animation:m-fade .7s ease both .4s}
  .m-rnn-vs-transformer .rt-foot{display:flex;justify-content:space-between;align-items:center;margin-top:16px}
  @media (prefers-reduced-motion:reduce){.slide.active.m-rnn-vs-transformer .rt-arcs{animation:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`ONE WORD AT A TIME VS <span class="g">ALL AT ONCE</span>`,
   body:`<div class="rt">
     <div class="rt-p"><div class="rt-h"><b>RNN / LSTM</b><span>older approach</span></div>
       <div class="rt-sub">Reads one word, updates a memory, moves on.</div>
       <svg class="rt-rnn" viewBox="0 0 560 300" role="img" aria-label="RNN: words feed one by one into a chain of memory boxes; early words fade from memory."></svg></div>
     <div class="rt-p on"><div class="rt-h"><b>Transformer</b><span>since 2017</span></div>
       <div class="rt-sub">Looks at every word at once, links any word to any word.</div>
       <svg class="rt-tf" viewBox="0 0 560 300" role="img" aria-label="Transformer: every word links to every other word in one step."></svg></div></div>
     <div class="rt-foot"><div class="lead">Every modern AI model is <span class="g">a transformer.</span></div>
       <div class="ctl" style="margin-top:0"><button type="button">replay</button></div></div>`,
   init(el){
     const W=['Users','who','joined','in','March','churned'], X=W.map((_,i)=>50+i*92);
     // RNN panel
     const r=el.querySelector('.rt-rnn'), boxes=[], wt=[];
     W.forEach((w,i)=>{
       const t=VIZ.s('text',{x:X[i],y:30,'text-anchor':'middle',class:'rt-w'},r); t.textContent=w; wt.push(t);
       VIZ.s('line',{x1:X[i],x2:X[i],y1:42,y2:92,stroke:'var(--dim)','stroke-width':2},r);
       if(i<W.length-1) VIZ.s('line',{x1:X[i]+26,x2:X[i+1]-26,y1:120,y2:120,stroke:'var(--subtle)','stroke-width':2},r);
       boxes.push(VIZ.s('rect',{x:X[i]-26,y:94,width:52,height:52,rx:8,class:'rt-box'},r));
     });
     const ml=VIZ.s('text',{x:20,y:192,class:'rt-t'},r); ml.textContent='what the memory still holds';
     const chips=W.map((w,i)=>{ const g=VIZ.s('g',{class:'rt-chip'},r);
       VIZ.s('rect',{x:X[i]-40,y:206,width:80,height:34,rx:17,fill:'var(--c-26262a)'},g);
       const t=VIZ.s('text',{x:X[i],y:229,'text-anchor':'middle',class:'rt-w',style:'font-size:16px'},g); t.textContent=w; return g; });
     const cap=VIZ.s('text',{x:20,y:280,class:'rt-t'},r);
     function rnn(k){ // k = index of the last word read
       boxes.forEach((b,i)=>b.classList.toggle('on',i===k));
       wt.forEach((t,i)=>t.classList.toggle('dim',i>k));
       chips.forEach((c,i)=>c.style.opacity=i>k?0:Math.max(0.08,Math.pow(0.55,k-i)).toFixed(2));
       cap.textContent=k===W.length-1?'by the end, "Users" has almost faded':'step '+(k+1)+' of '+W.length;
     }
     // Transformer panel
     const f=el.querySelector('.rt-tf'), by=200, ag=VIZ.s('g',{class:'rt-arcs'},f);
     for(let i=0;i<W.length;i++) for(let j=i+1;j<W.length;j++){
       const key=i===0&&j===5, d=j-i, h=18+d*24;
       VIZ.s('path',{d:`M${X[i]} ${by-26} Q${(X[i]+X[j])/2} ${by-26-h*1.6} ${X[j]} ${by-26}`,class:'rt-arc'+(key?' g':''),'stroke-width':key?4:1.5,opacity:key?1:(0.22+0.1*((i+j)%3)).toFixed(2)},ag);
     }
     W.forEach((w,i)=>{ const t=VIZ.s('text',{x:X[i],y:by,'text-anchor':'middle',class:'rt-w'},f); t.textContent=w;
       VIZ.s('circle',{cx:X[i],cy:by-26,r:4,fill:'var(--fg)'},f); });
     const tc=VIZ.s('text',{x:20,y:250,class:'rt-t'},f); tc.textContent='all 6 words in one step: 15 links';
     const tc2=VIZ.s('text',{x:20,y:280,class:'rt-t',fill:'var(--green)',style:'fill:var(--green)'},f); tc2.textContent='"Users" and "churned" stay directly linked';
     let tm;
     function play(){ clearInterval(tm); if(VIZ.reduced){ rnn(W.length-1); return; } let k=0; rnn(0); tm=setInterval(()=>{ k++; rnn(k); if(k>=W.length-1) clearInterval(tm); },650); }
     rnn(W.length-1);
     el.querySelector('button').addEventListener('click',()=>{ ag.style.animation='none'; ag.getBoundingClientRect(); ag.style.animation=''; play(); });
     el.addEventListener('keydown',e=>e.stopPropagation());
     VIZ.onShow(el,play);
   }}
  ]
});
