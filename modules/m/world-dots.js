MOD({
  id:'world-dots', title:'Who builds with AI', cluster:'foundations', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-world-dots .wd-grid circle{fill:var(--c-2a2a2e)}
  .m-world-dots .wd-grid circle.on{fill:var(--green);filter:drop-shadow(0 0 6px color-mix(in srgb,var(--green) 90%,transparent))}
  .slide.active.m-world-dots .wd-grid{animation:m-fade 1s ease both .1s}
  .slide.active.m-world-dots .wd-grid circle.on{animation:m-pop .6s cubic-bezier(.3,1.6,.4,1) both;animation-delay:calc(1.3s + var(--i)*110ms)}
  .slide.active.m-world-dots .wd-side>*{animation:m-fade .7s ease both;animation-delay:calc(2.4s + var(--i,0)*200ms)}
  .m-world-dots .wd-zoom{display:grid;grid-template-columns:auto auto 1fr;gap:4vw;align-items:center}
  .m-world-dots .wd-one{width:22px;height:22px;border-radius:50%;background:var(--green);box-shadow:0 0 14px var(--green)}
  .m-world-dots .wd-big{width:min(34vh,300px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--green) 28%,transparent),color-mix(in srgb,var(--green) 6%,transparent) 70%);border:2px solid var(--green);display:flex;align-items:center;justify-content:center;text-align:center}
  .slide.active.m-world-dots .wd-big{animation:m-pop .9s cubic-bezier(.3,1.3,.4,1) both .3s}
  .m-world-dots .wd-big .stat{font-size:clamp(44px,6vw,84px)}
  `,
  slides:[
  {sec:'WHO BUILDS WITH AI', cls:'viz', title:`8.2 BILLION PEOPLE. <span class="g">1 DOT = 3.3 MILLION.</span>`,
   body:`<div class="split"><div class="stage" style="height:56vh"><svg class="wd-grid" viewBox="0 0 710 350" role="img" aria-label="2,485 dots, one per 3.3 million people. 10 are green: the people who build AI agents."></svg></div>
     <div class="wd-side"><div class="stat" style="--i:0">0.4%</div>
       <div class="stat-cap" style="--i:1">build <b>AI agents</b>. That is 10 dots out of 2,485.</div>
       <div class="legend" style="--i:2"><span><i></i>everyone else</span><span><i class="g"></i>agent builders</span></div>
       <div class="lead" style="--i:3;margin-top:28px">By Session 8, <span class="g">you are one of the green dots.</span></div></div></div>`,
   init(el){
     const svg=el.querySelector('.wd-grid'), cols=71, rows=35, g=10;
     // deterministic scatter for the 10 green dots
     let seed=7; const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
     rnd(); rnd(); // the first draws from a small seed sit near 0
     const on=new Set(); while(on.size<10) on.add(Math.floor(rnd()*cols*rows));
     let k=0;
     for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){
       const idx=r*cols+c, a={cx:5+c*g, cy:5+r*g, r:3.4};
       if(on.has(idx)){ a.class='on'; a.style='--i:'+(k++)+';transform-box:fill-box;transform-origin:center'; a.r=4.2; }
       VIZ.s('circle', a, svg);
     }
   }},
  {sec:'WHO BUILDS WITH AI', cls:'viz', title:`ONE DOT, <span class="g">UP CLOSE</span>`,
   body:`<div class="wd-zoom"><div class="wd-one" aria-hidden="true"></div><div class="wd-big"><div><div class="stat">3.3M</div><div class="stat-cap" style="margin:6px auto 0">people</div></div></div>
     <div><div class="lead">One dot is about <span class="g">everyone in Armenia.</span></div>
     <div class="stat-cap" style="max-width:520px;margin-top:16px">Ten of those dots build agents. The rest of the planet is still asking chatbots for recipes. <b>Early is still open.</b></div></div></div>`}
  ]
});
