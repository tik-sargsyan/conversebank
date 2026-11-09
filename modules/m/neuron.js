MOD({
  id:'neuron', title:'One artificial neuron: inputs, weights, bias', cluster:'foundations', fits:[1], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-neuron .nr{display:grid;grid-template-columns:1.25fr 1fr;gap:3vw;align-items:center}
  .m-neuron .nr-svg{width:100%;height:52vh;display:block}
  .m-neuron .nr-in{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:17px;letter-spacing:.05em;fill:var(--fg)}
  .m-neuron .nr-v{font-family:var(--m);font-size:18px;fill:var(--bg);font-weight:600}
  .m-neuron .nr-wl{font-family:var(--m);font-size:16px;fill:var(--fg-2)}
  .m-neuron .nr-big{font-family:var(--h);font-weight:900;font-size:30px;fill:var(--fg)}
  .m-neuron .nr-cap{font-family:var(--b);font-size:15px;fill:var(--muted)}
  .m-neuron .nr-e{transition:stroke-width .25s ease, stroke .25s ease}
  .m-neuron .nr-ctl{display:flex;flex-direction:column;gap:2px}
  .m-neuron .nr-ctl .ctl{margin-top:6px}
  .m-neuron .nr-ctl .ctl span{width:150px;color:var(--fg-2)}
  .m-neuron .nr-ctl output{min-width:52px;text-align:right}
  .m-neuron .nr-sum{font-family:var(--m);font-size:15px;color:var(--fg-2);background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--green);border-radius:10px;padding:12px 14px;margin-top:16px;line-height:1.6}
  .m-neuron .nr-sum b{color:var(--green);font-weight:600}
  .m-neuron .nr-out{display:flex;align-items:baseline;gap:14px;margin-top:14px}
  .m-neuron .nr-out .stat{font-size:clamp(48px,5.4vw,76px)}
  .m-neuron .lg-svg{width:100%;height:50vh;display:block}
  .m-neuron .lg-k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:17px;letter-spacing:.05em;fill:var(--fg)}
  .m-neuron .lg-m{font-family:var(--m);font-size:16px;fill:var(--green)}
  .m-neuron .lg-t{font-family:var(--b);font-size:15px;fill:var(--muted)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`ONE <span class="g">ARTIFICIAL NEURON</span>`,
   body:`<div class="nr"><svg class="nr-svg" viewBox="0 0 600 400" role="img" aria-label="Three inputs, each multiplied by a weight, summed with a bias, passed through an activation, giving one output."></svg>
     <div><div class="nr-ctl">
       <div class="ctl"><span>w1 users asking</span><input type="range" min="-2" max="2" step="0.1" data-w="0" aria-label="Weight 1"><output></output></div>
       <div class="ctl"><span>w2 roadmap fit</span><input type="range" min="-2" max="2" step="0.1" data-w="1" aria-label="Weight 2"><output></output></div>
       <div class="ctl"><span>w3 build effort</span><input type="range" min="-2" max="2" step="0.1" data-w="2" aria-label="Weight 3"><output></output></div>
       <div class="ctl"><span>bias</span><input type="range" min="-2" max="2" step="0.1" data-w="3" aria-label="Bias"><output></output></div></div>
       <div class="nr-sum"></div>
       <div class="nr-out"><div class="stat">0.00</div><div class="stat-cap"><b>ship it?</b> above 0.5 means yes</div></div></div></div>`,
   init(el){
     const X=[0.9,0.6,0.8], N=['users asking','roadmap fit','build effort'], W=[1.5,1.0,-1.2,-0.3];
     const svg=el.querySelector('svg'), ys=[80,200,320], sx=360, sy=200, ox=530;
     const edges=[], wl=[];
     ys.forEach((y,i)=>{
       edges.push(VIZ.s('line',{x1:110,y1:y,x2:sx-46,y2:sy,class:'nr-e','stroke-linecap':'round'},svg));
     });
     const be=VIZ.s('line',{x1:sx,y1:58,x2:sx,y2:sy-46,class:'nr-e','stroke-linecap':'round'},svg);
     VIZ.s('line',{x1:sx+46,y1:sy,x2:ox-38,y2:sy,stroke:'var(--fg)','stroke-width':3},svg);
     VIZ.s('path',{d:`M${ox-48} ${sy-8} L${ox-38} ${sy} L${ox-48} ${sy+8}`,fill:'none',stroke:'var(--fg)','stroke-width':3},svg);
     ys.forEach((y,i)=>{
       VIZ.s('circle',{cx:80,cy:y,r:30,fill:'var(--fg)'},svg);
       const v=VIZ.s('text',{x:80,y:y+6,'text-anchor':'middle',class:'nr-v'},svg); v.textContent=X[i].toFixed(1);
       const t=VIZ.s('text',{x:50,y:y-42,class:'nr-in'},svg); t.textContent=N[i];
       const mx=110+(sx-46-110)*0.5, my=y+(sy-y)*0.5;
       wl.push(VIZ.s('text',{x:mx+6,y:my-10,class:'nr-wl'},svg));
     });
     VIZ.s('circle',{cx:sx,cy:58-14,r:14,fill:'none',stroke:'var(--fg)','stroke-width':2},svg);
     const bt=VIZ.s('text',{x:sx+24,y:50,class:'nr-wl'},svg);
     VIZ.s('circle',{cx:sx,cy:sy,r:46,fill:'var(--surface)',stroke:'var(--fg)','stroke-width':2},svg);
     const st=VIZ.s('text',{x:sx,y:sy+11,'text-anchor':'middle',class:'nr-big'},svg); st.textContent='Σ';
     const sc=VIZ.s('text',{x:sx,y:sy+72,'text-anchor':'middle',class:'nr-cap'},svg); sc.textContent='add up, then squash';
     const oc=VIZ.s('circle',{cx:ox,cy:sy,r:38,stroke:'var(--green)','stroke-width':2.5},svg);
     const ov=VIZ.s('text',{x:ox,y:sy+8,'text-anchor':'middle',class:'nr-v'},svg);
     const ol=VIZ.s('text',{x:ox,y:sy+64,'text-anchor':'middle',class:'nr-cap'},svg); ol.textContent='output';
     const rng=[...el.querySelectorAll('input')], outs=[...el.querySelectorAll('.nr-ctl output')];
     const sum=el.querySelector('.nr-sum'), stat=el.querySelector('.nr-out .stat');
     const sty=(e,w)=>{ e.setAttribute('stroke',w>=0?'var(--green)':'var(--muted)'); e.setAttribute('stroke-width',(1+Math.abs(w)*5).toFixed(1)); e.setAttribute('stroke-dasharray',w<0?'7 6':'none'); e.setAttribute('opacity',(0.35+Math.min(1,Math.abs(w)/2)*0.65).toFixed(2)); };
     function draw(){
       const z=X.reduce((a,x,i)=>a+x*W[i],0)+W[3], y=1/(1+Math.exp(-z));
       edges.forEach((e,i)=>{ sty(e,W[i]); wl[i].textContent='× '+W[i].toFixed(1); });
       sty(be,W[3]); bt.textContent='bias '+W[3].toFixed(1);
       rng.forEach((r,i)=>{ r.value=W[i]; outs[i].textContent=W[i].toFixed(1); });
       sum.innerHTML=X.map((x,i)=>`${x}×${W[i].toFixed(1)}`).join(' + ')+` + (${W[3].toFixed(1)}) = <b>${z.toFixed(2)}</b><br>squash(${z.toFixed(2)}) = <b>${y.toFixed(2)}</b>`;
       stat.textContent=y.toFixed(2);
       oc.setAttribute('fill',`color-mix(in srgb,var(--green) ${((0.08+y*0.85).toFixed(2))*100}%,transparent)`);
       ov.textContent=y.toFixed(2); ov.setAttribute('fill',y>0.55?'var(--bg)':'var(--fg)');
     }
     rng.forEach((r,i)=>r.addEventListener('input',()=>{ W[i]=+r.value; draw(); }));
     el.addEventListener('keydown',e=>e.stopPropagation());
     draw();
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`LEARNING = <span class="g">NUDGING WEIGHTS</span>`,
   body:`<svg class="lg-svg" viewBox="0 0 1120 420" role="img" aria-label="Three weight markers move in small steps while the error line falls toward zero."></svg>
     <div class="ctl"><button type="button">replay training</button><span>40 small steps · illustrative values</span></div>`,
   init(el){
     const X=[0.9,0.6,0.8], T=0.1, LR=0.8, STEPS=40, N=['w1 users asking','w2 roadmap fit','w3 build effort'];
     // run training once: record weights and error at each step
     let w=[1.5,1.0,-1.2], b=-0.3; const hist=[];
     for(let s=0;s<=STEPS;s++){
       const z=X.reduce((a,x,i)=>a+x*w[i],0)+b, y=1/(1+Math.exp(-z)), err=Math.abs(y-T);
       hist.push({w:w.slice(),y,err});
       const dz=2*(y-T)*y*(1-y); w=w.map((v,i)=>v-LR*dz*X[i]); b-=LR*dz;
     }
     const svg=el.querySelector('svg'), sx=v=>210+(v+2)/4*400, ys=[90,200,310];
     const marks=[], trails=[], vals=[];
     ys.forEach((y,i)=>{
       const t=VIZ.s('text',{x:0,y:y+6,class:'lg-k'},svg); t.textContent=N[i];
       VIZ.s('line',{x1:sx(-2),x2:sx(2),y1:y,y2:y,stroke:'var(--dim)','stroke-width':6,'stroke-linecap':'round'},svg);
       VIZ.s('line',{x1:sx(0),x2:sx(0),y1:y-16,y2:y+16,stroke:'var(--subtle)','stroke-width':2},svg);
       [-2,0,2].forEach(v=>{ const k=VIZ.s('text',{x:sx(v),y:y+38,'text-anchor':'middle',class:'lg-t'},svg); k.textContent=v; });
       trails.push(VIZ.s('g',{},svg));
       marks.push(VIZ.s('circle',{cy:y,r:12,fill:'var(--green)'},svg));
       vals.push(VIZ.s('text',{x:sx(2)+30,y:y+6,class:'lg-m'},svg));
     });
     // error chart
     const cx0=740, cx1=1110, cy0=340, cy1=60, emax=hist[0].err;
     const ex=s=>cx0+s/STEPS*(cx1-cx0), ey=e=>cy0-(e/emax)*(cy0-cy1);
     VIZ.s('line',{x1:cx0,x2:cx1,y1:cy0,y2:cy0,stroke:'var(--dim)','stroke-width':2},svg);
     VIZ.s('line',{x1:cx0,x2:cx0,y1:cy1-10,y2:cy0,stroke:'var(--dim)','stroke-width':2},svg);
     const et=VIZ.s('text',{x:cx0,y:cy1-24,class:'lg-k'},svg); et.textContent='error';
     const st=VIZ.s('text',{x:cx1,y:cy0+30,'text-anchor':'end',class:'lg-t'},svg); st.textContent='training steps';
     const pl=VIZ.s('polyline',{fill:'none',stroke:'var(--green)','stroke-width':4,'stroke-linejoin':'round','stroke-linecap':'round'},svg);
     const dot=VIZ.s('circle',{r:7,fill:'var(--green)'},svg);
     const yo=VIZ.s('text',{x:cx0,y:cy0+62,class:'lg-m'},svg);
     const yt=VIZ.s('text',{x:cx0,y:cy0+62,class:'lg-t'},svg);
     function paint(s){
       const h=hist[s];
       marks.forEach((m,i)=>m.setAttribute('cx',sx(h.w[i])));
       vals.forEach((v,i)=>v.textContent=h.w[i].toFixed(2));
       trails.forEach((g,i)=>{ g.innerHTML=''; for(let k=0;k<s;k+=2) VIZ.s('circle',{cx:sx(hist[k].w[i]),cy:ys[i],r:4,fill:'var(--fg)',opacity:.18},g); });
       pl.setAttribute('points',hist.slice(0,s+1).map((p,k)=>ex(k).toFixed(1)+','+ey(p.err).toFixed(1)).join(' '));
       dot.setAttribute('cx',ex(s)); dot.setAttribute('cy',ey(h.err));
       yo.textContent=`output ${h.y.toFixed(2)}`;
       yt.setAttribute('x',cx0+150); yt.textContent=`target ${T.toFixed(2)} (users did not adopt)`;
     }
     let tm;
     function play(){ clearInterval(tm); if(VIZ.reduced){ paint(STEPS); return; } let s=0; paint(0); tm=setInterval(()=>{ s++; paint(s); if(s>=STEPS) clearInterval(tm); },110); }
     paint(STEPS);
     el.querySelector('button').addEventListener('click',play);
     el.addEventListener('keydown',e=>e.stopPropagation());
     VIZ.onShow(el,play);
   }}
  ]
});
