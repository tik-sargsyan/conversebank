MOD({
  id:'embeddings', title:'Meaning as geometry: embeddings', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-embeddings .em{display:grid;grid-template-columns:1.45fr 1fr;gap:3.5vw;align-items:center}
  .m-embeddings svg{width:100%;height:56vh;display:block}
  .m-embeddings .em-dot{fill:var(--fg-2);transition:fill .2s}
  .m-embeddings .em-w{font-family:var(--b);font-size:18px;fill:var(--fg-2);cursor:pointer;transition:fill .2s}
  .m-embeddings .em-pt{cursor:pointer}
  .m-embeddings .em-pt.on .em-dot,.m-embeddings .em-pt.on .em-w{fill:var(--green)}
  .m-embeddings .em-pt.on .em-w{font-weight:600}
  .m-embeddings .em-pt.nb .em-w{fill:var(--fg);font-weight:600}
  .m-embeddings .em-cl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.1em;font-size:15px;fill:var(--c-6a6a70)}
  .m-embeddings .em-link{stroke:var(--green);stroke-width:2;stroke-dasharray:5 5}
  .m-embeddings .em-ax{font-family:var(--m);font-size:14px;fill:var(--subtle)}
  .m-embeddings .em-eq{font-family:var(--m);font-size:clamp(22px,2.4vw,32px);color:var(--fg);background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--green);border-radius:10px;padding:16px 20px}
  .m-embeddings .em-eq b{color:var(--green);font-weight:600}
  .m-embeddings .an-w{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:26px;letter-spacing:.04em;fill:var(--fg)}
  .m-embeddings .an-w.g{fill:var(--green)}
  .m-embeddings .an-v{stroke-width:4;fill:none}
  .m-embeddings .an-l{font-family:var(--m);font-size:16px;fill:var(--muted)}
  .slide.active.m-embeddings .em-pt{animation:m-pop .5s cubic-bezier(.3,1.4,.4,1) both;animation-delay:calc(var(--i)*50ms + 200ms);transform-box:fill-box;transform-origin:center}
  .slide.active.m-embeddings .an-v{stroke-dasharray:400;--len:400;animation:m-draw 1s ease both;animation-delay:calc(var(--i)*700ms + 400ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-embeddings .em-pt,.slide.active.m-embeddings .an-v{animation:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`MEANING HAS <span class="g">AN ADDRESS</span>`,
   body:`<div class="em"><svg class="em-map" viewBox="0 0 780 470" role="img" aria-label="A 2D map of words. Similar words cluster: work words, fruit, animals, people."></svg>
     <div><div class="lead">Every word becomes a list of numbers: <span class="g">a point in space.</span> Similar meanings land close together.</div>
       <div class="stat-cap" style="margin-top:18px;max-width:none">Click a word to see its nearest neighbours.</div>
       <div class="tile" style="margin-top:22px"><div class="k" style="color:var(--green)">Real use</div><p>Search that finds <b style="color:var(--fg)">"cancel my plan"</b> when the help article says <b style="color:var(--fg)">"end subscription"</b>. No shared words, close meaning.</p></div>
       <div class="src"><b>2D sketch.</b> An embedding is this number list. Real ones hold hundreds.</div></div></div>`,
   init(el){
     const P=[
       ['roadmap',120,90,0],['backlog',205,128,0],['sprint',95,165,0],['PRD',190,60,0],['OKR',245,190,0],
       ['apple',560,80,1],['banana',650,120,1],['mango',590,165,1],['cherry',690,60,1],
       ['dog',545,330,2],['puppy',610,375,2],['cat',650,300,2],['kitten',700,360,2],
       ['king',110,320,3],['queen',230,320,3],['man',110,420,3],['woman',230,420,3],['prince',165,365,3]];
     const C=[['work',165,30],['fruit',625,30],['animals',625,440],['people',170,460]];
     const svg=el.querySelector('svg');
     VIZ.s('line',{x1:20,x2:760,y1:245,y2:245,stroke:'var(--c-1f1f22)','stroke-width':1.5},svg);
     VIZ.s('line',{x1:390,x2:390,y1:10,y2:460,stroke:'var(--c-1f1f22)','stroke-width':1.5},svg);
     C.forEach(c=>{ const t=VIZ.s('text',{x:c[1],y:c[2],'text-anchor':'middle',class:'em-cl'},svg); t.textContent=c[0]; });
     const lg=VIZ.s('g',{},svg);
     const pts=P.map((p,i)=>{
       const g=VIZ.s('g',{class:'em-pt',style:'--i:'+i},svg);
       VIZ.s('circle',{cx:p[1],cy:p[2],r:7,class:'em-dot'},g);
       const t=VIZ.s('text',{x:p[1]+13,y:p[2]+6,class:'em-w'},g); t.textContent=p[0];
       g.addEventListener('click',()=>pick(i)); return g; });
     function pick(i){
       const near=P.map((q,j)=>[j,Math.hypot(q[1]-P[i][1],q[2]-P[i][2])]).filter(x=>x[0]!==i).sort((a,b)=>a[1]-b[1]).slice(0,3).map(x=>x[0]);
       lg.innerHTML='';
       near.forEach(j=>VIZ.s('line',{x1:P[i][1],y1:P[i][2],x2:P[j][1],y2:P[j][2],class:'em-link'},lg));
       pts.forEach((g,j)=>{ g.classList.toggle('on',j===i); g.classList.toggle('nb',near.includes(j)); });
     }
     pick(10);
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`KING - MAN + WOMAN <span class="g">≈ QUEEN</span>`,
   body:`<div class="em"><svg class="em-an" viewBox="0 0 640 420" role="img" aria-label="Parallel arrows: man to woman and king to queen point the same direction."></svg>
     <div><div class="em-eq">king <b>-</b> man <b>+</b> woman <b>≈</b> queen</div>
       <div class="lead" style="margin-top:22px">The step from <b>man</b> to <b>woman</b> is the same direction as <b>king</b> to <span class="g">queen</span>.</div>
       <div class="stat-cap" style="margin-top:16px;max-width:none">Directions in this space carry meaning. Do the arithmetic and you land near the answer.</div>
       <div class="src"><b>Classic word2vec illustration:</b> Mikolov et al. 2013</div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), defs=VIZ.s('defs',{},svg);
     [['emg','var(--green)'],['emw','var(--muted)']].forEach(([id,c])=>{ const m=VIZ.s('marker',{id,viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:7,markerHeight:7,orient:'auto-start-reverse'},defs); VIZ.s('path',{d:'M0 0 L10 5 L0 10 z',fill:c},m); });
     const p={man:[110,340],woman:[400,300],king:[200,110],queen:[490,70]};
     const arrow=(a,b,c,mk,i)=>{ const [x1,y1]=p[a],[x2,y2]=p[b], d=Math.hypot(x2-x1,y2-y1), k=(d-24)/d, k0=18/d;
       VIZ.s('path',{d:`M${x1+(x2-x1)*k0} ${y1+(y2-y1)*k0} L${x1+(x2-x1)*k} ${y1+(y2-y1)*k}`,class:'an-v',stroke:c,'marker-end':`url(#${mk})`,style:'--i:'+i},svg); };
     arrow('man','king','var(--muted)','emw',0); arrow('woman','queen','var(--muted)','emw',0);
     arrow('man','woman','var(--green)','emg',1); arrow('king','queen','var(--green)','emg',2);
     Object.entries(p).forEach(([w,[x,y]])=>{
       VIZ.s('circle',{cx:x,cy:y,r:10,fill:w==='queen'?'var(--green)':'var(--fg)'},svg);
       const t=VIZ.s('text',{x:x+(w==='man'||w==='king'?-18:18),y:y+(w==='man'||w==='woman'?40:-20),'text-anchor':w==='man'||w==='king'?'end':'start',class:'an-w'+(w==='queen'?' g':'')},svg); t.textContent=w; });
     const l1=VIZ.s('text',{x:255,y:352,'text-anchor':'middle',class:'an-l',transform:'rotate(-8 255 352)'},svg); l1.textContent='+ "female" direction';
     const l2=VIZ.s('text',{x:345,y:122,'text-anchor':'middle',class:'an-l',transform:'rotate(-8 345 122)'},svg); l2.textContent='same direction';
   }}
  ]
});
