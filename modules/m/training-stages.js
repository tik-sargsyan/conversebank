MOD({
  id:'training-stages', title:'Pretrain, fine-tune, learn from feedback', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-training-stages .ts{display:grid;grid-template-columns:1.25fr 44px 1fr 44px 1fr 44px .9fr;align-items:end}
  .m-training-stages .ts-bar{border:1.5px solid var(--c-55555b);border-radius:10px;background-color:var(--surface);background-image:radial-gradient(circle,var(--c-55555b) 1.4px,transparent 1.6px);background-size:12px 12px;transform-origin:bottom}
  .m-training-stages .ts-col.on .ts-bar{border-color:var(--green);background-image:radial-gradient(circle,var(--green) 1.6px,transparent 1.8px);box-shadow:0 0 24px color-mix(in srgb,var(--green) 25%,transparent)}
  .m-training-stages .ts-k{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:22px;margin-top:14px}
  .m-training-stages .ts-n{font-family:var(--m);font-size:13px;color:var(--green);margin-top:2px}
  .m-training-stages .ts-d{color:var(--muted);font-size:15px;line-height:1.4;margin-top:6px;min-height:64px}
  .m-training-stages .ts-d b{color:var(--fg);font-weight:500}
  .m-training-stages .ts-arw{align-self:center;text-align:center;font-family:var(--h);font-weight:800;color:var(--green);font-size:44px;margin-top:-110px}
  .m-training-stages .ts-out{width:100%;aspect-ratio:1;max-width:170px;border-radius:50%;border:2px solid var(--green);background:var(--green-a);display:flex;align-items:center;justify-content:center;text-align:center;font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:18px;line-height:1.1;padding:10px;margin-bottom:0}
  .m-training-stages .ts-foot .lead{max-width:none;font-size:22px}
  .m-training-stages .ts-foot{display:flex;justify-content:space-between;align-items:center;margin-top:16px;gap:20px}
  .m-training-stages .tr svg{width:100%;height:50vh;display:block}
  .m-training-stages .tr-b{font-family:var(--b);font-size:17px;fill:var(--fg)}
  .m-training-stages .tr-b.w{fill:var(--warn)}
  .m-training-stages .tr-s{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:20px;fill:var(--bg)}
  .m-training-stages .tr-l{fill:none;stroke:var(--c-55555b);stroke-width:2}
  .m-training-stages .tr-l.w{stroke:var(--warn)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`HOW A MODEL <span class="g">GETS MADE</span>`,
   body:`<div class="ts">
     <div class="ts-col"><div class="ts-bar a-rise" style="--i:0;height:250px"></div><div class="ts-k">1 Pretraining</div><div class="ts-n">predict the next token</div><div class="ts-d">Reads a <b>huge</b> slice of web text, books and code. Becomes a base model: knows a lot, rambles.</div></div>
     <div class="ts-arw a-fade" style="--i:2">›</div>
     <div class="ts-col"><div class="ts-bar a-rise" style="--i:3;height:64px"></div><div class="ts-k">2 Fine-tuning</div><div class="ts-n">learn from examples</div><div class="ts-d">Studies example chats written by people. Learns to <b>follow instructions</b>.</div></div>
     <div class="ts-arw a-fade" style="--i:5">›</div>
     <div class="ts-col"><div class="ts-bar a-rise" style="--i:6;height:40px"></div><div class="ts-k">3 Feedback</div><div class="ts-n">RLHF, constitutional AI</div><div class="ts-d">People or an AI rate answers. Learns to <b>prefer helpful, honest</b> ones.</div></div>
     <div class="ts-arw a-fade" style="--i:8">›</div>
     <div class="ts-col on"><div class="ts-out a-pop" style="--i:12">Deployed model</div><div class="ts-k">4 You use it</div><div class="ts-n">chat, API, Claude Code</div><div class="ts-d">Its numbers (weights) are <b>frozen</b>. It learns nothing new from your chat.</div></div></div>
     <div class="ts-foot"><div class="lead">Most knowledge comes from step 1. <span class="g">Most manners come from steps 2 and 3.</span></div><span class="chip">data size: illustrative, not to scale</span></div>`},
  {sec:'HOW AI WORKS', cls:'viz', title:`TRACE THE BEHAVIOUR <span class="g">TO THE STAGE</span>`,
   body:`<div class="tr"><svg viewBox="0 0 1100 380" role="img" aria-label="Six model behaviours linked to the training stage that causes them"></svg></div>
     <div class="legend"><span><i class="l"></i>useful behaviour</span><span><i class="w"></i>a side effect you must manage</span></div>`,
   init(el){
     const svg=el.querySelector('svg');
     const S=[{k:'Pretraining',y:70},{k:'Fine-tuning',y:190},{k:'Feedback',y:310}];
     const B=[['Knows facts, writes in many styles',0,0],['Does not know last week\'s news',0,1],['Answers as a helpful assistant',1,0],['Sticks to the format you ask for',1,0],['Declines harmful requests',2,0],['Agrees with you too easily',2,1]];
     B.forEach((b,i)=>{
       const y=30+i*64, s=S[b[1]], w=b[2]?' w':'';
       VIZ.s('path',{d:`M470 ${y} C 640 ${y}, 640 ${s.y}, 800 ${s.y}`,class:'tr-l a-draw'+w,pathLength:1000,style:`--i:${i}`},svg);
       VIZ.s('circle',{cx:470,cy:y,r:5,fill:b[2]?'var(--warn)':'var(--fg)'},svg);
       const t=VIZ.s('text',{x:450,y:y+6,'text-anchor':'end',class:'tr-b a-fade'+w,style:`--i:${i}`},svg); t.textContent=b[0];
     });
     S.forEach((s,i)=>{
       VIZ.s('rect',{x:800,y:s.y-26,width:240,height:52,rx:26,fill:'var(--green)',class:'a-pop',style:`--i:${i+6};transform-box:fill-box;transform-origin:center`},svg);
       const t=VIZ.s('text',{x:920,y:s.y+7,'text-anchor':'middle',class:'tr-s'},svg); t.textContent=(i+1)+' '+s.k;
     });
   }}
  ]
});
