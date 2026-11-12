MOD({
  id:'artifacts', title:'From chat to a shareable page', cluster:'claude', fits:[5], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-artifacts .af{display:grid;grid-template-columns:1fr 56px 1.15fr 56px 1fr;align-items:center}
  .m-artifacts .ar{display:flex;align-items:center;justify-content:center}
  .m-artifacts .ar:after{content:'';border:10px solid transparent;border-left:16px solid var(--green);margin-left:12px}
  .m-artifacts .step .n{font-family:var(--h);font-weight:900;color:var(--green);font-size:15px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
  .m-artifacts .step .n b{color:var(--fg);font-weight:800;margin-left:6px}
  .m-artifacts .bub{border:1px solid var(--line);border-radius:16px 16px 16px 4px;padding:14px 16px;background:var(--surface);font-size:16px;line-height:1.4;color:var(--fg)}
  .m-artifacts .bub.me{border-radius:16px 16px 4px 16px;margin-left:30px;margin-bottom:10px;color:var(--fg-2)}
  .m-artifacts .bub.cl{color:var(--muted);font-size:15px}
  .m-artifacts .bub.cl b{color:var(--green);font-weight:600}
  .m-artifacts .page{border:2px solid var(--green);border-radius:14px;background:var(--bg);overflow:hidden;box-shadow:0 0 50px color-mix(in srgb,var(--green) 12%,transparent)}
  .m-artifacts .bar0{display:flex;gap:6px;padding:9px 12px;border-bottom:1px solid var(--line)}
  .m-artifacts .bar0 i{width:9px;height:9px;border-radius:50%;background:var(--c-2c2c30)}
  .m-artifacts .pg{padding:16px 18px}
  .m-artifacts .pg .t{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.03em}
  .m-artifacts .pg .s{font-size:14px;color:var(--muted);margin-top:2px}
  .m-artifacts .ch{display:flex;align-items:flex-end;gap:10px;height:90px;margin:14px 0 6px;border-bottom:1px solid var(--line)}
  .m-artifacts .ch b{flex:1;background:var(--dim);border-radius:4px 4px 0 0}
  .m-artifacts .ch b.g{background:var(--green)}
  .m-artifacts .ql{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
  .m-artifacts .ql div{border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:14px;color:var(--muted);line-height:1.35}
  .m-artifacts .link{display:flex;align-items:center;gap:10px;border:1px solid var(--green);border-radius:999px;padding:10px 16px;font-family:var(--m);font-size:14px;color:var(--green);background:var(--surface)}
  .m-artifacts .lock{width:14px;height:12px;border:2px solid var(--green);border-radius:3px;position:relative;margin-top:5px;flex:none}
  .m-artifacts .lock:before{content:'';position:absolute;left:1px;top:-9px;width:8px;height:8px;border:2px solid var(--green);border-bottom:none;border-radius:6px 6px 0 0}
  .m-artifacts .priv{font-size:14px;color:var(--muted);margin:8px 0 18px 4px}
  .m-artifacts .team{display:flex;align-items:center}
  .m-artifacts .team i{width:54px;height:54px;border-radius:50%;border:2px solid var(--bg);background:var(--c-2c2c30);margin-left:-10px;display:flex;align-items:center;justify-content:center;font-style:normal;font-family:var(--h);font-weight:800;font-size:14px;color:var(--fg)}
  .m-artifacts .team i:first-child{margin-left:0;background:var(--green);color:var(--on-accent)}
  .m-artifacts .tc{font-size:16px;color:var(--fg);margin-top:12px;line-height:1.4}
  .m-artifacts .tc span{color:var(--muted)}
  .m-artifacts .foot{margin-top:26px}
  `,
  slides:[
  {sec:'CLAUDE TODAY', cls:'viz', title:`FROM CHAT TO <span class="g">A PAGE YOUR TEAM OPENS</span>`,
   body:`<div class="af">
     <div class="step a-fade" style="--i:0"><div class="n">1<b>Ask in chat</b></div>
       <div class="bub me">Turn my 12 interview notes into a one-page summary for the team.</div>
       <div class="bub cl">Building it as a page... <b>published.</b></div></div>
     <div class="ar a-fade" style="--i:1"></div>
     <div class="step a-fade" style="--i:2"><div class="n">2<b>It becomes a page</b></div>
       <div class="page a-pop" style="--i:3"><div class="bar0"><i></i><i></i><i></i></div><div class="pg">
         <div class="t">Savings feature: what users said</div><div class="s">12 interviews · 5 themes</div>
         <div class="ch"><b class="g a-rise" style="height:92%;--i:4"></b><b class="a-rise" style="height:70%;--i:5"></b><b class="a-rise" style="height:55%;--i:6"></b><b class="a-rise" style="height:40%;--i:7"></b><b class="a-rise" style="height:25%;--i:8"></b></div>
         <div class="ql"><div>"I forget to save until month end."</div><div>"Show me progress, not rules."</div></div></div></div></div>
     <div class="ar a-fade" style="--i:5"></div>
     <div class="step a-fade" style="--i:6"><div class="n">3<b>Share the link</b></div>
       <div class="link"><span class="lock"></span>claude.ai/artifact/...</div>
       <div class="priv">Private until you share it.</div>
       <div class="team"><i>You</i><i>PM</i><i>UX</i><i>Eng</i><i>VP</i></div>
       <div class="tc">Your team opens it in a browser. <span>No file, no attachment.</span></div></div></div>
     <div class="lead foot a-fade" style="--i:9">Stop pasting walls of text into Slack. <span class="g">Send a page.</span></div>`}
  ]
});
