MOD({
  id:'chinese-room', title:'The Chinese Room', cluster:'society', fits:[1], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-chinese-room .cr-stage{height:50vh}
  .m-chinese-room .cr-wall{fill:none;stroke:var(--fg);stroke-width:3}
  .m-chinese-room .cr-zh{font-size:34px;fill:var(--fg);font-family:"PingFang SC","Noto Sans SC","Microsoft YaHei",sans-serif}
  .m-chinese-room .cr-en{font-family:var(--b);font-size:19px;fill:var(--muted)}
  .m-chinese-room .cr-h{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:20px;fill:var(--fg)}
  .m-chinese-room .cr-book{fill:var(--surface);stroke:var(--green);stroke-width:2}
  .m-chinese-room .cr-rule{font-family:var(--m);font-size:19px;fill:var(--green)}
  .m-chinese-room .cr-rule .zh{font-family:"PingFang SC","Noto Sans SC",sans-serif;fill:var(--fg)}
  .slide.active.m-chinese-room .cr-pulse{animation:cr-p 1.6s ease-in-out 1.6s 2}
  @keyframes cr-p{50%{fill:var(--green-a)}}
  .m-chinese-room .db{display:grid;grid-template-columns:1fr 300px 1fr;gap:28px;align-items:stretch}
  .m-chinese-room .db-c{border:1px solid var(--line);border-radius:12px;padding:20px 22px;background:var(--surface)}
  .m-chinese-room .db-c.y{border-color:var(--green)}
  .m-chinese-room .db-c .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:24px;letter-spacing:.03em}
  .m-chinese-room .db-c.y .k{color:var(--green)}
  .m-chinese-room .db-c ul{list-style:none;margin-top:12px}
  .m-chinese-room .db-c li{color:var(--fg-2);font-size:17px;line-height:1.4;padding:9px 0;border-top:1px solid var(--line)}
  .m-chinese-room .db-mid{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
  .m-chinese-room .db-q{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:30px;line-height:1.05}
  .m-chinese-room .db-bar{display:flex;width:100%;height:22px;border-radius:11px;overflow:hidden;margin-top:22px;background:var(--faint)}
  .m-chinese-room .db-bar b{display:block;height:100%;transition:width .4s cubic-bezier(.2,.8,.2,1)}
  .m-chinese-room .db-bar .n{background:var(--fg)} .m-chinese-room .db-bar .y{background:var(--green)}
  .m-chinese-room .db-ct{display:flex;justify-content:space-between;width:100%;font-family:var(--m);font-size:15px;margin-top:8px;color:var(--muted)}
  .m-chinese-room .db-mid .ctl{justify-content:center;flex-wrap:wrap}
  `,
  slides:[
  {sec:'PHILOSOPHY', cls:'viz', title:`THE <span class="g">CHINESE ROOM</span>`,
   body:`<div class="stage cr-stage"><svg viewBox="0 0 1120 400" role="img" aria-label="A closed room. A note in Chinese goes in through a slot. A man who reads no Chinese looks up the shapes in a rulebook and passes a correct reply out. Outside it looks fluent. Inside nothing is understood."></svg></div>
     <div class="src"><b>Source:</b> John Searle, 1980, "Minds, Brains, and Programs"</div>`,
   init(el){
     const svg=el.querySelector('svg'), s=(t,a,p)=>VIZ.s(t,a,p||svg), tx=(a,txt,p)=>{ const e=s('text',a,p); e.textContent=txt; return e; };
     const g=(i)=>s('g',{class:'a-fade',style:'--i:'+i});
     // room
     const room=g(0);
     s('path',{d:'M330 40 H790 V170 M790 230 V360 H330 V230 M330 170 V40',class:'cr-wall'},room);
     tx({x:560,y:28,'text-anchor':'middle',class:'cr-h',style:'fill:var(--muted);font-size:16px'},'closed room',room);
     // note in
     const nin=g(1);
     s('rect',{x:110,y:160,width:150,height:80,rx:8,fill:'var(--fg)'},nin);
     tx({x:185,y:212,'text-anchor':'middle',class:'cr-zh',style:'fill:var(--bg)'},'你好吗?',nin);
     tx({x:185,y:270,'text-anchor':'middle',class:'cr-en'},'"How are you?"',nin);
     tx({x:185,y:120,'text-anchor':'middle',class:'cr-h'},'Note in',nin);
     const a1=g(2); s('path',{d:'M268 200 H360',stroke:'var(--fg)','stroke-width':3,'marker-end':'url(#cr-ar)'},a1);
     const defs=s('defs',{}); const m=s('marker',{id:'cr-ar',viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:7,markerHeight:7,orient:'auto'},defs); s('path',{d:'M0 0 L10 5 L0 10 z',fill:'var(--fg)'},m);
     // man
     const man=g(3);
     s('circle',{cx:430,cy:175,r:24,fill:'none',stroke:'var(--fg)','stroke-width':3},man);
     s('path',{d:'M392 280 Q392 215 430 210 Q468 215 468 280',fill:'none',stroke:'var(--fg)','stroke-width':3},man);
     tx({x:430,y:315,'text-anchor':'middle',class:'cr-en',style:'fill:var(--fg)'},'reads no Chinese',man);
     // rulebook
     const bk=g(4);
     s('rect',{x:520,y:110,width:240,height:170,rx:10,class:'cr-book cr-pulse'},bk);
     tx({x:640,y:98,'text-anchor':'middle',class:'cr-h',style:'font-size:17px;fill:var(--green)'},'Rulebook',bk);
     const r1=tx({x:540,y:160,class:'cr-rule'},'IF  ',bk); const z1=s('tspan',{class:'zh'},r1); z1.textContent='你好吗?';
     const r2=tx({x:540,y:195,class:'cr-rule'},'THEN ',bk); const z2=s('tspan',{class:'zh'},r2); z2.textContent='我很好';
     tx({x:540,y:250,class:'cr-rule',style:'fill:var(--muted)'},'... a million more',bk);
     // note out
     const a2=g(5); s('path',{d:'M760 200 H870',stroke:'var(--fg)','stroke-width':3,'marker-end':'url(#cr-ar)'},a2);
     const nout=g(6);
     s('rect',{x:880,y:160,width:150,height:80,rx:8,fill:'var(--fg)'},nout);
     tx({x:955,y:212,'text-anchor':'middle',class:'cr-zh',style:'fill:var(--bg)'},'我很好',nout);
     tx({x:955,y:270,'text-anchor':'middle',class:'cr-en'},'"I am fine."',nout);
     tx({x:955,y:120,'text-anchor':'middle',class:'cr-h'},'Note out',nout);
     // captions
     const c=g(8);
     tx({x:955,y:330,'text-anchor':'middle',class:'cr-h',style:'fill:var(--green)'},'Outside: fluent',c);
     tx({x:560,y:395,'text-anchor':'middle',class:'cr-h',style:'fill:var(--warn)'},'Inside: understands nothing',c);
   }},
  {sec:'PHILOSOPHY', cls:'viz', title:`IS AN LLM <span class="g">THE ROOM?</span>`,
   body:`<div class="db">
     <div class="db-c a-fade" style="--i:0"><div class="k">No, it is the room</div><ul>
       <li>It predicts the next word from patterns in text.</li>
       <li>Symbols in, symbols out. No body, no world.</li>
       <li>It can sound sure and still be wrong.</li></ul></div>
     <div class="db-mid a-fade" style="--i:2"><div class="db-q">Does it <span class="g">understand</span>?</div>
       <div class="db-bar"><b class="n" style="width:50%"></b><b class="y" style="width:50%"></b></div>
       <div class="db-ct"><span>no <output data-c="n">0</output></span><span><output data-c="y">0</output> maybe</span></div>
       <div class="ctl"><button type="button" data-a="n">+ no</button><button type="button" data-a="y">+ maybe</button><button type="button" data-a="r">reset</button></div>
       <div class="note-s" style="margin-top:14px">Hands up. The presenter counts.</div></div>
     <div class="db-c y a-fade" style="--i:1"><div class="k">Maybe, as a system</div><ul>
       <li>The man does not understand. The whole system might. Searle called this the "systems reply".</li>
       <li>Models learn inner maps of concepts that carry over to new tasks.</li>
       <li>Understanding may come in degrees.</li></ul></div></div>
     <div class="lead a-fade" style="--i:4;margin-top:22px;max-width:none">For a PM, the debate can stay open. <span class="g">Test what it reliably does.</span> Do not assume it gets your intent.</div>`,
   init(el){
     const c={n:0,y:0}, bars=el.querySelectorAll('.db-bar b'), o=k=>el.querySelector(`[data-c=${k}]`);
     function draw(){ const t=c.n+c.y; const pn=t?c.n/t*100:50; bars[0].style.width=pn+'%'; bars[1].style.width=(100-pn)+'%'; o('n').textContent=c.n; o('y').textContent=c.y; }
     el.querySelectorAll('[data-a]').forEach(b=>b.addEventListener('click',()=>{ const a=b.dataset.a; if(a==='r'){c.n=0;c.y=0;} else c[a]++; draw(); }));
     el.addEventListener('keydown',e=>e.stopPropagation());
     draw();
   }}
  ]
});
