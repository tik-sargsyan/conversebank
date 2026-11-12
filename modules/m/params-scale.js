MOD({
  id:'params-scale', title:'How big is a model: parameters to scale', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-params-scale .ps-svg{width:100%;height:46vh;display:block}
  .m-params-scale .ps-k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:21px;letter-spacing:.04em;fill:var(--fg)}
  .m-params-scale .ps-y{font-family:var(--m);font-size:15px;fill:var(--muted)}
  .m-params-scale .ps-v{font-family:var(--h);font-weight:900;font-size:26px;fill:var(--green)}
  .m-params-scale .ps-v.q{fill:var(--muted)}
  .m-params-scale .ps-g{font-family:var(--m);font-size:15px;fill:var(--c-6a6a70)}
  .m-params-scale .ps-bar{transition:width .9s cubic-bezier(.2,.8,.2,1)}
  .m-params-scale .ps-row{transition:transform .9s cubic-bezier(.2,.8,.2,1)}
  .m-params-scale .ps-gl{transition:opacity .4s}
  .m-params-scale .ps-cap{display:flex;align-items:center;gap:24px;margin-top:10px}
  .m-params-scale .ps-cap .lead{max-width:none}
  .m-params-scale .ct-svg{width:100%;height:44vh;display:block}
  .m-params-scale .ct-k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:21px;letter-spacing:.04em;fill:var(--fg)}
  .m-params-scale .ct-v{font-family:var(--h);font-weight:900;font-size:28px;fill:var(--green)}
  .m-params-scale .ct-t{font-family:var(--m);font-size:15px;fill:var(--muted)}
  @keyframes ps-grow{from{transform:scaleX(0)}}
  .slide.active.m-params-scale .ct-bar{transform-box:fill-box;transform-origin:left;animation:ps-grow 1.6s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*400ms + 300ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-params-scale .ct-bar{animation:none}.m-params-scale .ps-bar,.m-params-scale .ps-row{transition:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`HOW BIG IS <span class="g">A MODEL?</span>`,
   body:`<svg class="ps-svg" viewBox="0 0 1120 360" role="img" aria-label="Parameter counts at true scale: GPT-2 1.5 billion, GPT-3 175 billion, Llama 3.1 405 billion, top models not disclosed."></svg>
     <div class="ps-cap"><div class="ctl" style="margin-top:0"><button type="button" data-s="lin">true scale</button><button type="button" data-s="log">log scale</button></div>
       <div class="lead ps-lead"></div></div>
     <div class="src" style="margin-top:10px"><b>Parameter:</b> one number inside the model · <b>Sources:</b> Radford et al. 2019 · Brown et al. 2020 · Meta 2024</div>`,
   init(el){
     const svg=el.querySelector('svg'), x0=330, x1=1050, lmin=8, lmax=12.3;
     const M=[{k:'GPT-2',y:'2019',v:1.5e9,l:'1.5 B'},{k:'GPT-3',y:'2020',v:175e9,l:'175 B'},{k:'Llama 3.1',y:'2024',v:405e9,l:'405 B'},{k:'Top models',y:'2025 to 2026',v:null,l:'not disclosed'}];
     const XL=v=>x0+(Math.log10(v)-lmin)/(lmax-lmin)*(x1-x0), XN=v=>x0+v/450e9*(x1-x0);
     const gl=VIZ.s('g',{class:'ps-gl'},svg);
     [[1e9,'1 B'],[1e10,'10 B'],[1e11,'100 B'],[1e12,'1 T']].forEach(([v,t])=>{
       VIZ.s('line',{x1:XL(v),x2:XL(v),y1:10,y2:322,stroke:'var(--c-2a2a2e)','stroke-width':2},gl);
       const tx=VIZ.s('text',{x:XL(v),y:350,'text-anchor':'middle',class:'ps-g'},gl); tx.textContent=t; });
     const gn=VIZ.s('g',{class:'ps-gl'},svg);
     [[0,'0'],[100e9,'100 B'],[200e9,'200 B'],[300e9,'300 B'],[400e9,'400 B']].forEach(([v,t])=>{
       VIZ.s('line',{x1:XN(v),x2:XN(v),y1:10,y2:322,stroke:'var(--c-2a2a2e)','stroke-width':2},gn);
       const tx=VIZ.s('text',{x:XN(v),y:350,'text-anchor':'middle',class:'ps-g'},gn); tx.textContent=t; });
     const bars=[], vals=[];
     M.forEach((m,i)=>{
       const y=20+i*78, g=VIZ.s('g',{},svg);
       const k=VIZ.s('text',{x:0,y:y+24,class:'ps-k'},g); k.textContent=m.k;
       const yr=VIZ.s('text',{x:0,y:y+46,class:'ps-y'},g); yr.textContent=m.y;
       if(m.v){
         bars.push([VIZ.s('rect',{x:x0,y:y+6,height:40,rx:6,fill:i===2?'var(--green)':'var(--fg-2)',class:'ps-bar'},g),m.v]);
         vals.push([VIZ.s('text',{y:y+36,class:'ps-v'},g),m.v,m.l]);
       } else {
         VIZ.s('rect',{x:x0,y:y+6,width:x1-x0+50,height:40,rx:6,fill:'none',stroke:'var(--c-6a6a70)','stroke-width':2,'stroke-dasharray':'8 7'},g);
         const q=VIZ.s('text',{x:(x0+x1+50)/2,y:y+36,'text-anchor':'middle',class:'ps-v q'},g); q.textContent='?  size not disclosed';
       }
     });
     const lead=el.querySelector('.ps-lead');
     const btns=[...el.querySelectorAll('button')];
     function set(mode){
       const X=mode==='log'?XL:XN;
       gl.style.opacity=mode==='log'?1:0; gn.style.opacity=mode==='log'?0:1;
       bars.forEach(([r,v])=>r.setAttribute('width',Math.max(2,X(v)-x0)));
       vals.forEach(([t,v,l])=>{ t.setAttribute('x',X(v)+14); t.textContent=l; });
              btns.forEach(b=>{ const on=b.dataset.s===mode; b.style.borderColor=on?'var(--green)':''; b.style.color=on?'var(--green)':''; });
       lead.innerHTML=mode==='log'?'Each gridline is <span class="g">10 times bigger</span> than the last.':'At true scale, GPT-2 is <span class="g">a sliver</span>. GPT-3 is about 117 times bigger.';
     }
     btns.forEach(b=>b.addEventListener('click',()=>set(b.dataset.s)));
     el.addEventListener('keydown',e=>e.stopPropagation());
     set('lin');
     VIZ.onShow(el,()=>{ if(VIZ.reduced) return; bars.forEach(([r])=>{ r.style.transition='none'; r.setAttribute('width',2); }); svg.getBoundingClientRect(); bars.forEach(([r])=>r.style.transition=''); setTimeout(()=>set('lin'),250); });
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`COUNT <span class="g">ONE NUMBER PER SECOND</span>`,
   body:`<svg class="ct-svg" viewBox="0 0 1120 330" role="img" aria-label="Years needed to count every parameter at one per second: GPT-2 about 48 years, GPT-3 about 5,500 years, Llama 3.1 about 12,800 years."></svg>
     <div class="lead" style="margin-top:6px;max-width:none">No sleep, no breaks. <span class="g">Training touches every one of these numbers, again and again.</span></div>
     <div class="src" style="margin-top:10px"><b>Math:</b> parameters ÷ 31,557,600 seconds in a year</div>`,
   init(el){
     const svg=el.querySelector('svg'), x0=260, x1=880, Y=31557600;
     const M=[{k:'GPT-2',v:1.5e9},{k:'GPT-3',v:175e9},{k:'Llama 3.1',v:405e9}];
     const max=405e9/Y;
     M.forEach((m,i)=>{
       const yrs=m.v/Y, y=20+i*100, w=Math.max(4,yrs/max*(x1-x0));
       const k=VIZ.s('text',{x:0,y:y+34,class:'ct-k'},svg); k.textContent=m.k;
       const t=VIZ.s('text',{x:0,y:y+58,class:'ct-t'},svg); t.textContent=VIZ.fmt(m.v)+' params';
       VIZ.s('rect',{x:x0,y:y+8,width:w,height:46,rx:6,fill:i===2?'var(--green)':'var(--fg-2)',class:'ct-bar',style:'--i:'+i},svg);
       const v=VIZ.s('text',{x:x0+w+14,y:y+42,class:'ct-v'},svg); v.textContent=VIZ.fmt(Math.round(yrs))+' years';
     });
   }}
  ]
});
