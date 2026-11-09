MOD({
  id:'hallucination-map', title:'Plausible vs true', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-hallucination-map .hm{display:grid;grid-template-columns:1.5fr 1fr;gap:3vw;align-items:center}
  .m-hallucination-map svg{width:100%;height:54vh;display:block;overflow:visible}
  .m-hallucination-map .q{fill:var(--surface);stroke:var(--line);stroke-width:1.5}
  .m-hallucination-map .q.d{fill:color-mix(in srgb,var(--warn) 10%,transparent);stroke:var(--warn);stroke-width:2.5}
  .m-hallucination-map .ch{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:17px;fill:var(--fg)}
  .m-hallucination-map .ch.g{fill:var(--green)}
  .m-hallucination-map .ql{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:15px;fill:var(--muted)}
  .m-hallucination-map .ql.w{fill:var(--warn);font-size:17px}
  .m-hallucination-map .ex{font-family:var(--b);font-size:14px;fill:var(--fg-2)}
  .m-hallucination-map .ex.w{fill:var(--c-ffb79f)}
  .m-hallucination-map .dt{fill:var(--fg)}
  .m-hallucination-map .dt.w{fill:var(--warn)}
  .m-hallucination-map .dt.m{fill:var(--c-77777d)}
  .slide.active.m-hallucination-map .hm .dt{animation:hm-drop .7s cubic-bezier(.3,1.25,.5,1) both;animation-delay:calc(var(--d)*1ms + 400ms)}
  @keyframes hm-drop{from{opacity:0;transform:translateY(-140px)}}
  @media (prefers-reduced-motion:reduce){.slide.active.m-hallucination-map .hm .dt{animation:none}}
  .m-hallucination-map .br{fill:none;stroke:var(--green);stroke-width:3}
  .m-hallucination-map .gt{fill:var(--surface);stroke:var(--fg);stroke-width:2}
  .m-hallucination-map .gt-t{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:16px;fill:var(--fg)}
  .m-hallucination-map .gt-s{font-family:var(--b);font-size:14px;fill:var(--muted)}
  .m-hallucination-map .cnt{font-family:var(--h);font-weight:900;font-size:26px;fill:var(--warn)}
  .m-hallucination-map .cnt.g{fill:var(--green)}
  .m-hallucination-map .f svg{height:50vh}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`PLAUSIBLE <span class="w">IS NOT</span> TRUE`,
   body:`<div class="hm"><div><svg viewBox="0 0 700 440" role="img" aria-label="2 by 2 grid: plausible or implausible, true or false. Most answers land in the plausible column. Plausible and false is the danger quadrant."></svg></div>
     <div><div class="lead">An LLM is trained to sound <span class="g">plausible</span>. Truth is a side effect, usually a common one.</div>
       <div class="stat-cap" style="margin-top:18px;max-width:440px">The danger is the <b style="color:var(--warn)">plausible + false</b> box. It reads exactly like a right answer. <b>Sounding right is not proof.</b></div>
       <div class="legend" style="margin-top:18px"><span><i class="l"></i>true answer</span><span><i class="w"></i>false answer</span></div></div></div>`,
   init(el){
     const svg=el.querySelector('svg'), L=110, T=70, W=290, H=170, G=10;
     VIZ.s('path',{d:`M${L} ${T-18} V${T-30} H${L+W} V${T-18}`,class:'br a-fade',style:'--i:1'},svg);
     VIZ.s('text',{x:L+W/2,y:T-40,'text-anchor':'middle',class:'ch g a-fade',style:'--i:1'},svg).textContent='LLMs aim here';
     const rows=['true','false'];
     VIZ.s('text',{x:L+W/2,y:T+2*H+G+30,'text-anchor':'middle',class:'ql'},svg).textContent='plausible';
     VIZ.s('text',{x:L+W+G+W/2,y:T+2*H+G+30,'text-anchor':'middle',class:'ql'},svg).textContent='implausible';
     rows.forEach((r,j)=>VIZ.s('text',{x:L-16,y:T+j*(H+G)+H/2+6,'text-anchor':'end',class:'ql'},svg).textContent=r);
     const Q=[[0,0,'',['Paris is the capital','of France.']],[1,0,'',['A Venus day is longer','than its year.']],
              [0,1,'d',['"Smith et al. 2019 found..."','(the paper does not exist)']],[1,1,'',['The Moon is made','of cheese.']]];
     Q.forEach(([c,r,d,ex])=>{
       const x=L+c*(W+G), y=T+r*(H+G);
       VIZ.s('rect',{x,y,width:W,height:H,rx:12,class:'q '+d},svg);
       ex.forEach((t,k)=>VIZ.s('text',{x:x+16,y:y+H-34+k*18,class:'ex'+(d?' w':'')},svg).textContent=t);
     });
     VIZ.s('text',{x:L+16,y:T+H+G+26,class:'ql w'},svg).textContent='Danger zone';
     // illustrative dot counts: [col,row,count]
     let seed=11; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647; rnd();
     const N=[[0,0,26],[0,1,7],[1,0,2],[1,1,2]]; let k=0;
     N.forEach(([c,r,n])=>{ for(let i=0;i<n;i++){
       const x=L+c*(W+G)+24+rnd()*(W-48), y=T+r*(H+G)+(r?48:22)+rnd()*(H-(r?100:76));
       VIZ.s('circle',{cx:x,cy:y,r:7,class:'dt'+(r?' w':''),style:'--d:'+(k++*60)},svg);
     }});
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`FILTER OUT <span class="w">THE ORANGE BOX</span>`,
   body:`<div class="f"><svg viewBox="0 0 1100 380" role="img" aria-label="Answers pass through three filters. Each filter removes more of the plausible but false answers."></svg></div>
     <div style="display:flex;justify-content:space-between;align-items:center;gap:20px;margin-top:6px"><div class="lead a-fade" style="--i:10;max-width:none">You cannot switch hallucination off. <span class="g">You can build filters into how you work.</span></div><span class="chip">counts illustrative</span></div>`,
   init(el){
     const svg=el.querySelector('svg');
     const gates=[['Ground it','give it the source'],['Ask for quotes','then open the links'],['Check it yourself','numbers, names, dates']];
     const orange=[8,4,2,1], cx=[90,370,650,930], top=70, Hh=230;
     let seed=5; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647; rnd();
     orange.forEach((o,s)=>{
       const tot=26, g=VIZ.s('g',{class:'a-fade',style:`--i:${s*3}`},svg);
       for(let i=0;i<tot;i++){ const col=i%5, row=Math.floor(i/5); VIZ.s('circle',{cx:cx[s]-44+col*22,cy:top+40+row*26,r:7,class:'dt'+(i<o?' w':'')},g); }
       VIZ.s('text',{x:cx[s],y:top+Hh-20,'text-anchor':'middle',class:'cnt'+(o?'':' g')},g).textContent=o+' false';
       VIZ.s('text',{x:cx[s],y:top+Hh+6,'text-anchor':'middle',class:'gt-s'},g).textContent=s===0?'raw answers':(s===3?'what you ship: fewer, not zero':'left after filter '+s);
     });
     gates.forEach((gt,i)=>{
       const x=cx[i]+140, g=VIZ.s('g',{class:'a-pop',style:`--i:${i*3+1};transform-box:fill-box;transform-origin:center`},svg);
       VIZ.s('rect',{x:x-14,y:top-10,width:28,height:Hh-60,rx:6,class:'gt'},g);
       VIZ.s('text',{x,y:top-40,'text-anchor':'middle',class:'gt-t'},g).textContent=(i+1)+' '+gt[0];
       VIZ.s('text',{x,y:top-20,'text-anchor':'middle',class:'gt-s'},g).textContent=gt[1];
       for(let y=top+10;y<top+Hh-80;y+=18) VIZ.s('line',{x1:x-14,x2:x+14,y1:y,y2:y,stroke:'var(--c-55555b)','stroke-width':1.5},g);
     });
   }}
  ]
});
