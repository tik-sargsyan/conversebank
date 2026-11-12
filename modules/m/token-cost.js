MOD({
  id:'token-cost', title:'What one task costs in tokens', cluster:'foundations', fits:[1,6], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-token-cost .one{display:grid;grid-template-columns:200px 1fr;gap:20px;align-items:center}
  .m-token-cost .k{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:19px}
  .m-token-cost .k small{display:block;font-family:var(--b);font-weight:400;text-transform:none;letter-spacing:0;font-size:14px;color:var(--muted);margin-top:3px}
  .m-token-cost .stk{display:flex;height:58px;gap:3px}
  .m-token-cost .sg{height:100%;border-radius:6px;display:flex;flex-direction:column;justify-content:center;padding:0 12px;font-family:var(--m);font-size:13px;line-height:1.3;overflow:hidden;white-space:nowrap;transform-origin:left;transition:flex-basis .6s cubic-bezier(.2,.8,.2,1)}
  .m-token-cost .sg b{font-family:var(--h);font-size:16px;text-transform:uppercase;letter-spacing:.04em}
  .m-token-cost .sg.i{background:var(--fg);color:var(--bg)}
  .m-token-cost .sg.t{background:var(--c-2a2a2e);color:var(--c-cfcfd4);border:1.5px dashed var(--muted)}
  .m-token-cost .sg.o{background:var(--green);color:var(--on-accent)}
  .m-token-cost .runs{display:flex;flex-direction:column;gap:12px;margin-top:22px}
  .m-token-cost .run{display:grid;grid-template-columns:200px 1fr 230px;gap:20px;align-items:center}
  .m-token-cost .run .bar2{height:30px;border-radius:5px;background:var(--fg);transform-origin:left}
  .m-token-cost .run.big .bar2{background:var(--warn)}
  .m-token-cost .run .v{font-family:var(--m);font-size:15px;color:var(--fg)}
  .m-token-cost .run .v b{color:var(--green);font-weight:600}
  .m-token-cost .run.big .v b{color:var(--warn)}
  .m-token-cost .ctl{margin-top:18px;justify-content:space-between}
  .m-token-cost .ctl output{min-width:300px;text-align:right;font-size:15px}
  .m-token-cost .fx{font-family:var(--m);font-size:14px;color:var(--muted);border:1px solid var(--line);border-radius:8px;padding:6px 12px}
  .m-token-cost .fx b{color:var(--fg)}
  .m-token-cost .lv{display:flex;flex-direction:column;gap:12px}
  .m-token-cost .lv .one{grid-template-columns:260px 1fr 120px}
  .m-token-cost .lv .stk{height:50px}
  .m-token-cost .lv .tot{font-family:var(--h);font-weight:900;font-size:26px;text-align:right}
  .m-token-cost .lv .on .tot{color:var(--green)}
  .m-token-cost .lv .on .k{color:var(--green)}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`ONE TASK, <span class="g">THEN 10,000 OF THEM</span>`,
   body:`<div class="one"><div class="k">One task<small>PRD from interview notes</small></div>
       <div class="stk"><div class="sg i a-grow" style="--i:0;flex:0 0 60%"><b>Input 12K</b>notes, PRD template, instructions</div><div class="sg t a-grow" style="--i:2;flex:0 0 30%"><b>Thinking 6K</b>often hidden</div><div class="sg o a-grow" style="--i:4;flex:1"><b>Out 2K</b>draft</div></div></div>
     <div class="runs">
       <div class="run"><div class="k">&times; 1 run</div><div><div class="bar2 a-grow" style="--i:5;width:7%"></div></div><div class="v">20K tokens = <b>0.02 P</b></div></div>
       <div class="run"><div class="k">&times; 100 runs</div><div><div class="bar2 a-grow" style="--i:6;width:53%"></div></div><div class="v">2M tokens = <b>2 P</b></div></div>
       <div class="run big"><div class="k">&times; 10,000 runs<small>a month, in a product</small></div><div><div class="bar2 a-grow" style="--i:7;width:100%"></div></div><div class="v">200M tokens = <b>200 P</b></div></div></div>
     <div class="ctl"><span class="fx"><b>P</b> = price per 1M tokens &nbsp;|&nbsp; log scale &nbsp;|&nbsp; illustrative</span><input type="range" min="0" max="5" step="1" value="4" aria-label="Runs per month"><output></output></div>`,
   init(el){
     const rng=el.querySelector('input'), out=el.querySelector('output'), R=[1,10,100,1000,10000,100000];
     const fmt=n=>n>=1e9?(n/1e9)+'B':n>=1e6?(n/1e6)+'M':n>=1e3?(n/1e3)+'K':String(n);
     const set=()=>{ const r=R[+rng.value], t=r*20000; out.textContent=VIZ.fmt(r)+' runs = '+fmt(t)+' tokens = '+(t/1e6)+' P'; };
     rng.addEventListener('input',set); el.addEventListener('keydown',e=>e.stopPropagation()); set();
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`FOUR LEVERS <span class="g">TO CUT THE BILL</span>`,
   body:`<div class="lv">
     <div class="one"><div class="k">Baseline<small>as above</small></div><div class="stk"><div class="sg i" style="flex:0 0 60%"><b>12K</b></div><div class="sg t" style="flex:0 0 30%"><b>6K</b></div><div class="sg o" style="flex:0 0 10%"><b>2K</b></div></div><div class="tot">20K</div></div>
     <div class="one a-fade" style="--i:1"><div class="k">1 Trim the input<small>3 files that matter, not 30</small></div><div class="stk"><div class="sg i" style="flex:0 0 20%"><b>4K</b></div><div class="sg t" style="flex:0 0 30%"><b>6K</b></div><div class="sg o" style="flex:0 0 10%"><b>2K</b></div></div><div class="tot">12K</div></div>
     <div class="one a-fade" style="--i:2"><div class="k">2 Lower the effort<small>match effort to the task</small></div><div class="stk"><div class="sg i" style="flex:0 0 20%"><b>4K</b></div><div class="sg t" style="flex:0 0 10%"><b>2K</b></div><div class="sg o" style="flex:0 0 10%"><b>2K</b></div></div><div class="tot">8K</div></div>
     <div class="one a-fade on" style="--i:3"><div class="k">3 Ask for less<small>"one page, bullets"</small></div><div class="stk"><div class="sg i" style="flex:0 0 20%"><b>4K</b></div><div class="sg t" style="flex:0 0 10%"><b>2K</b></div><div class="sg o" style="flex:0 0 5%"><b>1K</b></div></div><div class="tot">7K</div></div></div>
     <div class="lead a-fade" style="--i:5;margin-top:20px;max-width:none">Then lever 4: a <span class="g">smaller model</span> keeps the tokens but lowers <b>P</b>. Test quality first.</div>`}
  ]
});
