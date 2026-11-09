MOD({
  id:'reasoning-tokens', title:'Thinking before answering', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-reasoning-tokens .q{font-family:var(--m);font-size:17px;color:var(--fg-2);background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--green);border-radius:10px;padding:12px 18px;line-height:1.5}
  .m-reasoning-tokens .tl{display:grid;grid-template-columns:170px 1fr 190px;gap:18px;align-items:center;margin-top:22px}
  .m-reasoning-tokens .tl .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:21px;letter-spacing:.03em}
  .m-reasoning-tokens .tl .k small{display:block;font-family:var(--b);font-weight:400;text-transform:none;letter-spacing:0;font-size:14px;color:var(--muted);margin-top:2px}
  .m-reasoning-tokens .rt-bar{display:flex;height:64px;gap:4px}
  .m-reasoning-tokens .seg{border-radius:8px;height:100%;display:flex;align-items:center;padding:0 14px;font-family:var(--m);font-size:14px;overflow:hidden;white-space:nowrap;transform-origin:left}
  .m-reasoning-tokens .seg.th{background:repeating-linear-gradient(135deg,var(--c-1c1c1f) 0 10px,var(--c-151517) 10px 20px);border:1.5px dashed var(--c-6a6a70);color:var(--c-9a9aa0);gap:22px}
  .m-reasoning-tokens .seg.an{background:var(--fg);color:var(--bg);font-weight:600}
  .m-reasoning-tokens .seg.an.g{background:var(--green)}
  .m-reasoning-tokens .res{font-family:var(--h);font-weight:900;font-size:30px;text-transform:uppercase;line-height:1}
  .m-reasoning-tokens .res small{display:block;font-family:var(--b);font-weight:400;font-size:14px;text-transform:none;color:var(--muted);margin-top:6px}
  .m-reasoning-tokens .res.w{color:var(--warn)} .m-reasoning-tokens .res.g{color:var(--green)}
  .m-reasoning-tokens .axis{display:grid;grid-template-columns:170px 1fr 190px;gap:18px;margin-top:12px}
  .m-reasoning-tokens .axis div{border-top:2px solid var(--c-55555b);padding-top:8px;font-family:var(--m);font-size:14px;color:var(--muted)}
  .m-reasoning-tokens .lg{display:flex;gap:22px;font-size:14px;color:var(--muted);margin-top:16px;align-items:center}
  .m-reasoning-tokens .lg i{display:inline-block;width:26px;height:14px;border-radius:4px;vertical-align:-2px;margin-right:8px}
  .m-reasoning-tokens .ef{display:flex;flex-direction:column;gap:12px}
  .m-reasoning-tokens .ef .tl{grid-template-columns:110px 1fr 150px;margin-top:0}
  .m-reasoning-tokens .ef .rt-bar{height:46px}
  .m-reasoning-tokens .ef .tl .k{font-size:20px}
  .m-reasoning-tokens .ef .on .k{color:var(--green)}
  .m-reasoning-tokens .ef .n{font-family:var(--m);font-size:14px;color:var(--muted);line-height:1.35}
  .m-reasoning-tokens .ef .on .seg.th{border-color:var(--green);color:var(--c-cfd6a8)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`THINK FIRST, <span class="g">THEN ANSWER</span>`,
   body:`<div class="q">A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much is the ball?</div>
     <div class="tl"><div class="k">Fast answer<small>answers at once</small></div><div class="rt-bar"><div class="seg an a-grow" style="--i:1;width:14%">10 cents</div></div><div class="res w a-fade" style="--i:3">Wrong<small>the "obvious" answer</small></div></div>
     <div class="tl"><div class="k">Think first<small>reasons, then answers</small></div><div class="rt-bar"><div class="seg th a-grow" style="--i:4;width:72%"><span>ball = x</span><span>bat = x + 1.00</span><span>2x + 1.00 = 1.10</span><span>x = 0.05</span></div><div class="seg an g a-grow" style="--i:9;width:14%">5 cents</div></div><div class="res g a-fade" style="--i:11">Right<small>more time, more tokens</small></div></div>
     <div class="axis"><div style="border:0"></div><div>time and tokens &rarr;</div><div style="border:0"></div></div>
     <div class="lg"><span><i style="background:repeating-linear-gradient(135deg,var(--c-2a2a2e) 0 5px,var(--c-151517) 5px 10px);border:1.5px dashed var(--c-6a6a70)"></i>thinking tokens: often hidden or summarised</span><span><i style="background:var(--fg)"></i>answer tokens: what you read</span><span class="src" style="margin:0 0 0 auto;font-size:14px;color:var(--muted);text-transform:none;letter-spacing:0">Puzzle: Frederick 2005</span></div>`},
  {sec:'HOW AI WORKS', cls:'viz', title:`EFFORT SETS <span class="g">HOW LONG IT THINKS</span>`,
   body:`<div class="ef">
     <div class="tl"><div class="k">low</div><div class="rt-bar"><div class="seg th a-grow" style="--i:0;width:6%"></div><div class="seg an a-grow" style="--i:1;width:12%"></div></div><div class="n">quick lookups</div></div>
     <div class="tl"><div class="k">medium</div><div class="rt-bar"><div class="seg th a-grow" style="--i:1;width:20%"></div><div class="seg an a-grow" style="--i:2;width:12%"></div></div><div class="n">short drafts</div></div>
     <div class="tl on"><div class="k">high</div><div class="rt-bar"><div class="seg th a-grow" style="--i:2;width:40%"></div><div class="seg an g a-grow" style="--i:3;width:12%"></div></div><div class="n">a real PRD</div></div>
     <div class="tl"><div class="k">xhigh</div><div class="rt-bar"><div class="seg th a-grow" style="--i:3;width:62%"></div><div class="seg an a-grow" style="--i:4;width:12%"></div></div><div class="n">tricky bugs, reviews</div></div>
     <div class="tl"><div class="k">max</div><div class="rt-bar"><div class="seg th a-grow" style="--i:4;width:86%"></div><div class="seg an a-grow" style="--i:5;width:12%"></div></div><div class="n">hard calls, on purpose</div></div></div>
     <div class="lead a-fade" style="--i:8;margin-top:20px;max-width:none">The answer stays short. <span class="g">The thinking grows.</span> So do <span class="w">wait time and cost.</span></div>`}
  ]
});
