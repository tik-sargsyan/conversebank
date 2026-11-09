MOD({
  id:'ai-nesting', title:'AI, ML, deep learning, GenAI, LLM: nested', cluster:'foundations', fits:[1], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-ai-nesting .an{display:grid;grid-template-columns:1fr 1.05fr;gap:3.5vw;align-items:center}
  .m-ai-nesting .an-svg{width:100%;height:56vh;display:block}
  .m-ai-nesting .an-ring{stroke:var(--dim);stroke-width:1.5}
  .m-ai-nesting .an-ring.core{stroke:var(--green);stroke-width:2.5}
  .m-ai-nesting .an-lbl{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:19px;fill:var(--fg)}
  .m-ai-nesting .an-lbl.core{fill:var(--green);text-transform:none}
  .m-ai-nesting .an-rows{display:flex;flex-direction:column;gap:10px}
  .m-ai-nesting .an-row{display:grid;grid-template-columns:150px 1fr;gap:16px;align-items:start;border:1px solid var(--line);border-radius:10px;padding:10px 14px;background:var(--surface)}
  .m-ai-nesting .an-row.core{border-color:var(--green);box-shadow:0 0 0 1px color-mix(in srgb,var(--green) 25%,transparent)}
  .m-ai-nesting .an-row .k{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:17px;line-height:1.15}
  .m-ai-nesting .an-row.core .k{color:var(--green);text-transform:none}
  .m-ai-nesting .an-row .d{font-size:14px;color:var(--muted);line-height:1.35}
  .m-ai-nesting .an-row .d b{color:var(--fg);font-weight:500}
  .m-ai-nesting .an-lead{font-size:clamp(17px,1.6vw,22px);margin-top:14px}
  .m-ai-nesting .an-r{transform-box:fill-box;transform-origin:50% 100%}
  @keyframes an-in{from{opacity:0;transform:scale(.4)}}
  @keyframes an-row{from{opacity:0;transform:translateX(16px)}}
  .slide.active.m-ai-nesting .an-r{animation:an-in .8s cubic-bezier(.3,1.25,.4,1) both;animation-delay:calc(var(--i)*520ms + 200ms)}
  .slide.active.m-ai-nesting .an-row{animation:an-row .6s cubic-bezier(.2,.8,.2,1) both;animation-delay:calc(var(--i)*520ms + 350ms)}
  .slide.active.m-ai-nesting .an-lead{animation:m-fade .6s ease both 3s}
  @media (prefers-reduced-motion:reduce){.slide.active.m-ai-nesting .an-r,.slide.active.m-ai-nesting .an-row,.slide.active.m-ai-nesting .an-lead{animation:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`FIVE WORDS, <span class="g">ONE INSIDE THE NEXT</span>`,
   body:`<div class="an"><svg class="an-svg" viewBox="0 0 520 470" role="img" aria-label="Nested rings: AI contains machine learning, which contains deep learning, which contains generative AI, which contains LLMs."></svg>
     <div><div class="an-rows"></div>
     <div class="an-lead">Every LLM is AI. <span class="g">Not every AI is an LLM.</span></div></div></div>`,
   init(el){
     const R=[
       {k:'AI', d:'Machines doing tasks that look smart.', ex:'A hand-written rule flags risky refunds.'},
       {k:'Machine learning', d:'Learns patterns from data, not from rules.', ex:'Predict which users will churn next month.'},
       {k:'Deep learning', d:'Machine learning with many-layer neural networks.', ex:'Speech-to-text for user interview recordings.'},
       {k:'Generative AI', d:'Creates new text, images, audio or video.', ex:'Generate product images for a store page.'},
       {k:'LLMs', d:'Generative AI for language, trained on huge amounts of text.', ex:'Draft a PRD from your interview notes.'}];
     const svg=el.querySelector('svg'), cx=260, base=462, rad=[230,186,142,100,58];
     R.forEach((r,j)=>{
       const core=j===4, i=4-j, g=VIZ.s('g',{class:'an-r',style:'--i:'+i},svg);
       VIZ.s('circle',{cx, cy:base-rad[j], r:rad[j], class:'an-ring'+(core?' core':''), fill:`color-mix(in srgb,var(--green) ${((0.03+j*0.035).toFixed(3))*100}%,transparent)`},g);
       const t=VIZ.s('text',{x:cx, y:core?base-rad[j]+7:base-2*rad[j]+30, 'text-anchor':'middle', class:'an-lbl'+(core?' core':'')},g);
       t.textContent=r.k;
     });
     el.querySelector('.an-rows').innerHTML=R.map((r,j)=>`<div class="an-row${j===4?' core':''}" style="--i:${4-j}"><div class="k">${r.k}</div><div class="d">${r.d}<br><b>PM example:</b> ${r.ex}</div></div>`).join('');
   }}
  ]
});
