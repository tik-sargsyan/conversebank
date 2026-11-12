MOD({
  id:'verification-ladder', title:'The verification ladder', cluster:'pm', fits:[1,4], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-verification-ladder .vl{display:grid;grid-template-columns:1.25fr 1fr;gap:3vw;align-items:center}
  .m-verification-ladder .vl svg{width:100%;height:auto;max-height:58vh;overflow:visible}
  .m-verification-ladder .vl-rail{stroke:var(--dim);stroke-width:6;stroke-linecap:round}
  .m-verification-ladder .vl-rung{transform-box:fill-box;stroke:var(--c-2a2a2e);stroke-width:6;stroke-linecap:round;transition:stroke .35s ease}
  .m-verification-ladder .vl-rung.on{stroke:var(--green)}
  .m-verification-ladder .vl-k{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:22px;fill:var(--c-55555b);transition:fill .35s ease}
  .m-verification-ladder .vl-k.on{fill:var(--fg)}
  .m-verification-ladder .vl-k.top{fill:var(--green)}
  .m-verification-ladder .vl-d{font-family:var(--b);font-size:15px;fill:var(--c-55555b);transition:fill .35s ease}
  .m-verification-ladder .vl-d.on{fill:var(--muted)}
  .m-verification-ladder .vl-me{transition:transform .5s cubic-bezier(.3,1.3,.4,1)}
  .m-verification-ladder .vl-st{display:flex;flex-direction:column;gap:8px}
  .m-verification-ladder .vl-st button{display:flex;justify-content:space-between;align-items:center;text-align:left;background:var(--surface);border:1px solid var(--line);border-radius:10px;color:var(--fg);font-family:var(--b);font-size:16px;padding:11px 16px;cursor:pointer;transition:border-color .2s,color .2s}
  .m-verification-ladder .vl-st button span{font-family:var(--m);font-size:13px;color:var(--muted)}
  .m-verification-ladder .vl-st button.on{border-color:var(--green);color:var(--green)}
  .m-verification-ladder .vl-st button.on span{color:var(--green)}
  .m-verification-ladder .vl-h{font-family:var(--m);font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px}
  `,
  slides:[
  {sec:'TRUST, BUT CHECK', cls:'viz', title:`HOW FAR <span class="g">TO CLIMB?</span>`,
   body:`<div class="vl"><svg viewBox="0 0 600 440" role="img" aria-label="A five-rung ladder. From the bottom: sounds right, cites a source, I checked the source, recomputed the number, tested with real users."></svg>
     <div><div class="vl-h">Stakes: pick the task</div><div class="vl-st"></div>
       <div class="lead a-fade" style="--i:8;font-size:20px;margin-top:20px">Higher stakes, <span class="g">higher rung.</span> A citation is not a check until <span class="g">you open it.</span></div></div></div>`,
   init(el){
     const R=[['Sounds right','fluent text, nothing checked'],['Cites a source','a link or a name: it may be invented'],['I checked the source','I opened it. It says that.'],
              ['Recomputed the number','redid the math from raw data'],['Tested with real users','watched people use it']];
     const T=[['Brainstorm feature names',0],['Note in the team chat',1],['Research summary',2],['A number in the exec deck',3],['Launch or pricing call',4]];
     const svg=el.querySelector('svg'), y=i=>396-i*84, L=40, Rr=140;
     VIZ.s('line',{x1:L,x2:L,y1:20,y2:420,class:'vl-rail'},svg); VIZ.s('line',{x1:Rr,x2:Rr,y1:20,y2:420,class:'vl-rail'},svg);
     const rungs=[], ks=[], ds=[];
     R.forEach((r,i)=>{
       rungs.push(VIZ.s('line',{x1:L,x2:Rr,y1:y(i),y2:y(i),class:'vl-rung a-grow',style:`--i:${i}`},svg));
       const k=VIZ.s('text',{x:Rr+34,y:y(i)-2,class:'vl-k a-fade',style:`--i:${i}`},svg); k.textContent=(i+1)+'. '+r[0]; ks.push(k);
       const d=VIZ.s('text',{x:Rr+34,y:y(i)+20,class:'vl-d a-fade',style:`--i:${i}`},svg); d.textContent=r[1]; ds.push(d);
     });
     const me=VIZ.s('g',{class:'vl-me'},svg);
     VIZ.s('circle',{cx:(L+Rr)/2,cy:0,r:15,fill:'var(--green)',style:'filter:drop-shadow(0 0 8px color-mix(in srgb,var(--green) 80%,transparent))'},me);
     const st=el.querySelector('.vl-st');
     st.innerHTML=T.map((t,k)=>`<button type="button" class="a-fade" style="--i:${k+2}" data-k="${k}">${t[0]}<span>rung ${t[1]+1}</span></button>`).join('');
     const btns=[...st.querySelectorAll('button')];
     function climb(n){
       rungs.forEach((r,i)=>r.classList.toggle('on',i<=n));
       ks.forEach((k,i)=>{ k.classList.toggle('on',i<=n); k.classList.toggle('top',i===n); });
       ds.forEach((d,i)=>d.classList.toggle('on',i<=n||i===1));
       me.style.transform=`translateY(${y(n)}px)`;
     }
     function pick(k){ btns.forEach((b,j)=>b.classList.toggle('on',j===k)); climb(T[k][1]); }
     let timer;
     btns.forEach((b,k)=>b.addEventListener('click',()=>{ clearInterval(timer); pick(k); }));
     el.addEventListener('keydown',e=>e.stopPropagation());
     pick(3);
     VIZ.onShow(el,()=>{ clearInterval(timer); if(VIZ.reduced){ pick(3); return; }
       btns.forEach(b=>b.classList.remove('on')); btns[3].classList.add('on'); climb(0); let n=0;
       timer=setInterval(()=>{ n++; climb(n); if(n>=3) clearInterval(timer); },500); });
   }}
  ]
});
