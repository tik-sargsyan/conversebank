MOD({
  id:'attention', title:'Attention: which words look at which', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-attention svg{width:100%;display:block}
  .m-attention .at-main{height:46vh}
  .m-attention .at-pair{height:24vh}
  .m-attention .at-w{font-family:var(--m);font-size:30px;fill:var(--fg)}
  .m-attention .at-w.it{fill:var(--green);font-weight:600}
  .m-attention .at-w.sw{fill:var(--green)}
  .m-attention .at-p{font-family:var(--m);font-size:17px;fill:var(--muted)}
  .m-attention .at-p.top{fill:var(--green);font-weight:600}
  .m-attention .at-arc{fill:none;stroke:var(--fg);stroke-linecap:round}
  .m-attention .at-arc.top{stroke:var(--green)}
  .m-attention .at-lbl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:18px;fill:var(--muted)}
  .slide.active.m-attention .at-arc{stroke-dasharray:1200;--len:1200;animation:m-draw 1.2s cubic-bezier(.4,0,.2,1) both;animation-delay:calc(var(--i,0)*40ms + 300ms)}
  .m-attention .at-foot{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:4px}
  @media (prefers-reduced-motion:reduce){.slide.active.m-attention .at-arc{animation:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`WHO DOES <span class="g">"IT"</span> POINT TO?`,
   body:`<svg class="at-main" viewBox="0 0 1200 330" role="img" aria-label="Attention from the word it: the strongest link goes to animal."></svg>
     <div class="at-foot"><div class="lead at-lead"></div>
       <div class="ctl" style="margin-top:0"><span>last word:</span><button type="button" data-v="tired">tired</button><button type="button" data-v="wide">wide</button></div></div>
     <div class="src" style="margin-top:10px"><b>Example:</b> Google Research blog, 2017 · scores illustrative</div>`,
   init(el){ this._draw(el, el.querySelector('svg'), 'tired', true); },
   _draw(el, svg, start, interactive, compact){
     const ATT={
       tired:{The:.02,animal:.55,"didn't":.03,cross:.04,the:.02,street:.07,because:.04,it:.08,was:.04,too:.03,tired:.08},
       wide:{The:.02,animal:.08,"didn't":.03,cross:.05,the:.03,street:.52,because:.04,it:.08,was:.04,too:.03,wide:.08}};
     const CW=18, Y=compact?200:270;
     function draw(v){
       svg.innerHTML='';
       const words=['The','animal',"didn't",'cross','the','street','because','it','was','too',v];
       const len=words.reduce((a,w)=>a+w.length,0)+words.length;
       let x=(1200-len*CW)/2; const pos=words.map(w=>{ const p={w,x,c:x+w.length*CW/2}; x+=(w.length+1)*CW; return p; });
       const it=pos[7], a=ATT[v], top=Object.keys(a).reduce((m,k)=>a[k]>a[m]?k:m,'The');
       pos.forEach((p,i)=>{
         if(i===7) return;
         const w=a[p.w], d=Math.abs(p.c-it.c), h=compact?Math.min(120,30+d*0.2):Math.min(230,50+d*0.42), isTop=p.w===top;
         VIZ.s('path',{d:`M${it.c} ${Y-34} Q${(it.c+p.c)/2} ${Y-34-h*2} ${p.c} ${Y-34}`,class:'at-arc'+(isTop?' top':''),'stroke-width':(1+w*22).toFixed(1),opacity:isTop?1:(0.25+w*4).toFixed(2),style:'--i:'+i},svg);
       });
       pos.forEach((p,i)=>{
         const w=a[p.w], isTop=p.w===top;
         if(isTop) VIZ.s('rect',{x:p.x-8,y:Y-30,width:p.w.length*CW+16,height:42,rx:8,fill:'color-mix(in srgb,var(--green) 16%,transparent)'},svg);
         const t=VIZ.s('text',{x:p.x,y:Y,class:'at-w'+(i===7?' it':'')+(i===10?' sw':'')},svg); t.textContent=p.w;
         if(i!==7&&(compact?isTop:w>=0.04)){ const pt=VIZ.s('text',{x:p.c,y:Y+36,'text-anchor':'middle',class:'at-p'+(isTop?' top':''),style:compact?'font-size:22px':''},svg); pt.textContent=Math.round(w*100)+'%'; }
       });
       if(interactive){
         const lead=el.querySelector('.at-lead');
         lead.innerHTML=v==='tired'?'Too <b>tired</b>: "it" looks hardest at <span class="g">animal</span>.':'Too <b>wide</b>: "it" now looks at <span class="g">street</span>.';
         el.querySelectorAll('button[data-v]').forEach(b=>{ const on=b.dataset.v===v; b.style.borderColor=on?'var(--green)':''; b.style.color=on?'var(--green)':''; });
       }
     }
     draw(start);
     if(interactive){ el.querySelectorAll('button[data-v]').forEach(b=>b.addEventListener('click',()=>draw(b.dataset.v))); el.addEventListener('keydown',e=>e.stopPropagation()); }
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`ONE WORD CHANGES <span class="g">THE LINK</span>`,
   body:`<div class="at-lbl" style="font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)">too tired</div>
     <svg class="at-pair at-a" viewBox="0 0 1200 250" role="img" aria-label="With tired, it links to animal."></svg>
     <div class="at-lbl" style="font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-top:6px">too wide</div>
     <svg class="at-pair at-b" viewBox="0 0 1200 250" role="img" aria-label="With wide, it links to street."></svg>
     <div class="lead" style="margin-top:8px;max-width:none">Attention reads <span class="g">meaning from context</span>, not from word order.</div>`,
   init(el){
     const d=MODULES.attention.slides[0]._draw;
     d(el, el.querySelector('.at-a'), 'tired', false, true);
     d(el, el.querySelector('.at-b'), 'wide', false, true);
   }}
  ]
});
