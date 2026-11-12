MOD({
  id:'jobs-augment-automate', title:'Augment or automate: jobs as tasks', cluster:'pm', fits:[1,8], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-jobs-augment-automate .ja-k{font-family:var(--m);font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
  .m-jobs-augment-automate .ja-row{position:relative;height:clamp(84px,14vh,104px)}
  .m-jobs-augment-automate .ja-b{position:absolute;top:0;bottom:0;width:calc(100%/12 - 6px);border-radius:8px;display:flex;align-items:center;justify-content:center;text-align:center;padding:6px;font-size:14px;line-height:1.25;font-weight:500;background:var(--c-1d1d20);color:var(--fg-2);border:1px solid var(--c-2a2a2e);transition:left .9s cubic-bezier(.2,.8,.2,1),background .4s ease,color .4s ease,border-color .4s ease}
  .m-jobs-augment-automate .ja-b.au{background:var(--dim);color:var(--fg);border-color:var(--c-55555b)}
  .m-jobs-augment-automate .ja-b.ag{background:var(--green);color:var(--on-accent);border-color:var(--green)}
  .m-jobs-augment-automate .ja-b.kh{background:var(--fg);color:var(--bg);border-color:var(--fg)}
  .m-jobs-augment-automate .ja-b.raw{background:var(--c-1d1d20);color:var(--fg-2);border-color:var(--c-2a2a2e)}
  .m-jobs-augment-automate .ja-gl{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:30px 0 8px}
  .m-jobs-augment-automate .ja-gl div{border-top:2px solid var(--dim);padding-top:8px;font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:20px;margin-right:6px}
  .m-jobs-augment-automate .ja-gl div small{font-family:var(--b);font-weight:400;text-transform:none;letter-spacing:0;font-size:14px;color:var(--muted);margin-left:10px}
  .m-jobs-augment-automate .ja-gl .ag{border-color:var(--green);color:var(--green)}
  .m-jobs-augment-automate .ja-gl .kh{border-color:var(--fg)}
  .m-jobs-augment-automate .ctl{margin-top:16px}
  `,
  slides:[
  {sec:'THE FUTURE OF THE PM JOB', cls:'viz', title:`AI CHANGES <span class="g">TASKS</span>, NOT WHOLE JOBS`,
   body:`<div class="ja-k a-fade" style="--i:0">One PM job, as twelve tasks</div><div class="ja-row ja-1"></div>
     <div class="ja-gl a-fade" style="--i:4"><div>Automate<small>AI does it end to end</small></div><div class="ag">Augment<small>AI drafts, you steer</small></div><div class="kh">Keep human<small>you own it</small></div></div>
     <div class="ja-row ja-2"></div>
     <div class="ctl"><button type="button">sort again</button><span>Equal blocks: a count of tasks, not a share of time.</span></div>`,
   init(el){
     const T=[['Standup notes','au'],['User interviews','kh'],['Weekly status report','au'],['PRD first draft','ag'],['Roadmap trade-offs','kh'],['Pull weekly metrics','au'],
              ['Competitor scan','ag'],['Stakeholder alignment','kh'],['Interview synthesis','ag'],['Tidy the backlog','au'],['Launch comms','ag'],['Final call: ship or not','kh']];
     const ord={au:0,ag:1,kh:2}, slot=[];
     const sorted=T.map((t,i)=>[i,t]).sort((a,b)=>ord[a[1][1]]-ord[b[1][1]]||a[0]-b[0]);
     sorted.forEach(([i],g)=>slot[i]=g);
     const pos=n=>`calc(${n} * 100% / 12)`;
     el.querySelector('.ja-1').innerHTML=T.map((t,i)=>`<div class="ja-b a-pop" style="left:${pos(i)};--i:${i}">${t[0]}</div>`).join('');
     const r2=el.querySelector('.ja-2');
     r2.innerHTML=T.map((t,i)=>`<div class="ja-b ${t[1]}" data-i="${i}" style="left:${pos(slot[i])};transition-delay:${slot[i]*60}ms">${t[0]}</div>`).join('');
     const bs=[...r2.children];
     function play(){
       if(VIZ.reduced) return;
       bs.forEach(b=>{ b.style.transition='none'; b.classList.add('raw'); b.style.left=pos(+b.dataset.i); });
       r2.getBoundingClientRect();
       setTimeout(()=>bs.forEach(b=>{ b.style.transition=''; b.classList.remove('raw'); }),900);
       setTimeout(()=>bs.forEach(b=>{ b.style.left=pos(slot[+b.dataset.i]); }),1700);
     }
     el.querySelector('.ctl button').addEventListener('click',play);
     VIZ.onShow(el,play);
   }}
  ]
});
