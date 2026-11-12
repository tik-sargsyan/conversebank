MOD({
  id:'rctc-anatomy', title:'G·C·O·C, taken apart: the 2026 prompt', cluster:'pm', fits:[1,3], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-rctc-anatomy .ra{display:grid;grid-template-columns:1.55fr 1fr;gap:3.5vw;align-items:start}
  .m-rctc-anatomy .ra-p{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:10px 14px}
  .m-rctc-anatomy .ra-row{display:grid;grid-template-columns:1fr 150px;gap:16px;align-items:center;padding:9px 0;cursor:pointer}
  .m-rctc-anatomy .ra-row+.ra-row{border-top:1px dashed var(--line)}
  .m-rctc-anatomy .ra-tx{font-family:var(--m);font-size:clamp(14px,1.35vw,17px);line-height:1.5;color:var(--fg);padding:6px 10px;border-radius:8px;background:color-mix(in srgb,var(--green) 8%,transparent);box-shadow:inset 3px 0 0 var(--green);transition:all .35s ease}
  .m-rctc-anatomy .ra-cl{position:relative;padding-left:22px;font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:19px;color:var(--green);transition:color .35s ease}
  .m-rctc-anatomy .ra-cl:before{content:'';position:absolute;left:0;top:50%;width:14px;height:2px;background:var(--green)}
  .m-rctc-anatomy .ra-cl small{display:block;font-family:var(--b);font-weight:400;text-transform:none;letter-spacing:0;font-size:14px;color:var(--muted);margin-top:2px}
  .m-rctc-anatomy .ra-row.off .ra-tx{color:var(--c-4a4a50);background:transparent;box-shadow:inset 3px 0 0 var(--c-2a2a2e);text-decoration:line-through}
  .m-rctc-anatomy .ra-row.off .ra-cl{color:var(--c-4a4a50)}
  .m-rctc-anatomy .ra-row.off .ra-cl:before{background:var(--c-2a2a2e)}
  .m-rctc-anatomy .ra-q{font-family:var(--h);font-weight:900;font-size:clamp(56px,7vw,96px);line-height:.9;color:var(--green);transition:color .3s}
  .m-rctc-anatomy .ra-q.w{color:var(--warn)}
  .m-rctc-anatomy .ra-bar{height:16px;border-radius:8px;background:var(--faint);overflow:hidden;margin:12px 0 18px}
  .m-rctc-anatomy .ra-bar b{display:block;height:100%;background:var(--green);border-radius:8px;transition:width .6s cubic-bezier(.2,.8,.2,1),background .3s}
  .m-rctc-anatomy .ra-bar.w b{background:var(--warn)}
  .m-rctc-anatomy .ra-out{display:flex;flex-direction:column;gap:7px}
  .m-rctc-anatomy .ra-out div{font-size:15px;color:var(--fg);display:flex;gap:10px;align-items:center;transition:color .3s}
  .m-rctc-anatomy .ra-out i{width:12px;height:12px;border-radius:50%;background:var(--green);flex:none;transition:background .3s}
  .m-rctc-anatomy .ra-out div.x{color:var(--c-55555b)} .m-rctc-anatomy .ra-out div.x i{background:var(--c-2a2a2e)}
  .m-rctc-anatomy .ctl .chip{cursor:pointer}
  `,
  slides:[
  {sec:'PROMPTING · G·C·O·C', cls:'viz', title:`ONE PROMPT, <span class="g">FOUR PARTS</span>`,
   body:`<div class="ra"><div><div class="ra-p">
       <div class="ra-row a-fade" style="--i:0" data-k="0"><div class="ra-tx">Write the launch update for the exec team, so they can decide on the EU rollout.</div><div class="ra-cl">Goal<small>what done looks like</small></div></div>
       <div class="ra-row a-fade" style="--i:1" data-k="1"><div class="ra-tx">We shipped single sign-on to enterprise users last week. 18% adopted it in 7 days. Execs worry about churn, so lead with that.</div><div class="ra-cl">Context + why<small>what it cannot know</small></div></div>
       <div class="ra-row a-fade" style="--i:2" data-k="2"><div class="ra-tx">5 bullets, under 120 words. Flag one risk.</div><div class="ra-cl">Output<small>the exact shape</small></div></div>
       <div class="ra-row a-fade" style="--i:3" data-k="3"><div class="ra-tx">If a number is missing or you are not sure, say so. Do not guess.</div><div class="ra-cl">Check<small>it flags what it doubts</small></div></div></div>
       <div class="ctl"><span>toggle a part:</span><span class="chip on" data-t="0">G</span><span class="chip on" data-t="1">C</span><span class="chip on" data-t="2">O</span><span class="chip on" data-t="3">C</span><button type="button" class="ra-all">all on</button></div></div>
     <div><div class="note-s">Output quality (illustrative)</div><div class="ra-q">100%</div><div class="ra-bar"><b style="width:100%"></b></div>
       <div class="ra-out"></div></div></div>`,
   init(el){
     const W=[25,40,20,15];
     const T=[['Aimed at a real decision',0],['Facts about this launch',1],['Leads with what execs care about',1],['5 bullets, under 120 words',2],['One risk flagged',2],['Says what it is unsure of',3]];
     const rows=[...el.querySelectorAll('.ra-row')], chips=[...el.querySelectorAll('[data-t]')];
     const q=el.querySelector('.ra-q'), bar=el.querySelector('.ra-bar'), out=el.querySelector('.ra-out');
     out.innerHTML=T.map(t=>`<div data-p="${t[1]}"><i></i>${t[0]}</div>`).join('');
     const on=[1,1,1,1];
     function paint(){
       const v=W.reduce((a,w,k)=>a+(on[k]?w:0),0);
       q.textContent=v+'%'; q.classList.toggle('w',v<60); bar.classList.toggle('w',v<60); bar.querySelector('b').style.width=v+'%';
       rows.forEach((r,k)=>r.classList.toggle('off',!on[k])); chips.forEach((c,k)=>c.classList.toggle('on',!!on[k]));
       out.querySelectorAll('div').forEach(d=>d.classList.toggle('x',!on[+d.dataset.p]));
     }
     const flip=k=>{ on[k]=on[k]?0:1; paint(); };
     rows.forEach((r,k)=>r.addEventListener('click',()=>flip(k)));
     chips.forEach((c,k)=>c.addEventListener('click',()=>flip(k)));
     el.querySelector('.ra-all').addEventListener('click',()=>{ on.fill(1); paint(); });
     el.addEventListener('keydown',e=>e.stopPropagation());
     paint();
     VIZ.onShow(el,()=>{ on.fill(1); paint(); });
   }}
  ]
});
