MOD({
  id:'turing-test', title:'The Turing test, then and now', cluster:'society', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-turing-test .tt-stage{height:52vh}
  .m-turing-test .tt-h{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:22px;fill:var(--fg)}
  .m-turing-test .tt-t{font-family:var(--b);font-size:19px;fill:var(--muted)}
  .m-turing-test .tt-q{font-family:var(--m);font-size:17px;fill:var(--fg)}
  .m-turing-test .tt-id{transition:opacity .4s}
  .m-turing-test .tt-hidden .tt-id{opacity:0}
  .m-turing-test .tt-hidden .tt-qm{opacity:1}
  .m-turing-test .tt-qm{opacity:0;transition:opacity .4s;font-family:var(--h);font-weight:900;font-size:56px;fill:var(--green)}
  .m-turing-test .mv{display:grid;grid-template-columns:1fr 70px 1.6fr;gap:2vw;align-items:center}
  .m-turing-test .mv-old{border:1px solid var(--line);border-radius:12px;padding:22px;background:var(--surface)}
  .m-turing-test .mv-old .y{font-family:var(--h);font-weight:900;font-size:56px;color:var(--muted);line-height:1}
  .m-turing-test .mv-old .q{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:24px;margin-top:10px;line-height:1.1}
  .m-turing-test .mv-old .a{margin-top:14px;font-size:16px;color:var(--muted);line-height:1.4}
  .m-turing-test .mv-old .a b{color:var(--fg)}
  .m-turing-test .mv-new{border:1px solid var(--green);border-radius:12px;padding:22px;background:var(--surface)}
  .m-turing-test .mv-new .y{font-family:var(--h);font-weight:900;font-size:56px;color:var(--green);line-height:1}
  .m-turing-test .mv-new .q{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:24px;margin-top:10px}
  .m-turing-test .runs{display:grid;grid-template-columns:200px repeat(10,1fr);gap:8px 6px;align-items:center;margin-top:16px}
  .m-turing-test .runs .lb{font-size:15px;color:var(--fg-2)}
  .m-turing-test .runs i{display:block;width:22px;height:22px;border-radius:50%;background:var(--green);margin:auto;transition:background .3s}
  .m-turing-test .runs i.x{background:var(--warn)}
  .m-turing-test .runs .hd{font-family:var(--m);font-size:13px;color:var(--muted);text-align:center}
  .m-turing-test .arw{font-family:var(--h);font-weight:900;font-size:56px;color:var(--green);text-align:center}
  `,
  slides:[
  {sec:'PHILOSOPHY', cls:'viz', title:`THE <span class="g">IMITATION GAME</span>, 1950`,
   body:`<div class="stage tt-stage"><svg viewBox="0 0 1120 420" role="img" aria-label="A judge types questions to A and B, who sit behind a screen. One is a human and one is a machine. If the judge cannot tell which is which, the machine passes."></svg></div>
     <div class="ctl"><button type="button">hide / reveal</button><span>Source: Turing 1950, "Computing Machinery and Intelligence"</span></div>`,
   init(el){
     const svg=el.querySelector('svg'), s=(t,a,p)=>VIZ.s(t,a,p||svg), tx=(a,txt,p)=>{ const e=s('text',a,p); e.textContent=txt; return e; };
     const g=i=>s('g',{class:'a-fade',style:'--i:'+i});
     const person=(x,y,p,col)=>{ s('circle',{cx:x,cy:y-40,r:22,fill:'none',stroke:col,'stroke-width':3},p); s('path',{d:`M${x-34} ${y+40} Q${x-34} ${y-8} ${x} ${y-12} Q${x+34} ${y-8} ${x+34} ${y+40}`,fill:'none',stroke:col,'stroke-width':3},p); };
     // judge
     const j=g(0); person(150,220,j,'var(--fg)');
     tx({x:150,y:300,'text-anchor':'middle',class:'tt-h'},'Judge',j);
     tx({x:150,y:328,'text-anchor':'middle',class:'tt-t'},'text only',j);
     // screen
     const sc=g(1); s('rect',{x:560,y:30,width:14,height:370,rx:4,fill:'var(--c-2a2a2e)'},sc);
     tx({x:567,y:22,'text-anchor':'middle',class:'tt-t',style:'font-size:16px'},'screen',sc);
     // lines
     const ln=g(2);
     s('path',{d:'M210 200 C400 200 420 110 760 110',fill:'none',stroke:'var(--line)','stroke-width':3,'stroke-dasharray':'8 8'},ln);
     s('path',{d:'M210 230 C400 230 420 320 760 320',fill:'none',stroke:'var(--line)','stroke-width':3,'stroke-dasharray':'8 8'},ln);
     const q=g(3);
     s('rect',{x:240,y:128,width:290,height:90,rx:10,fill:'var(--surface)',stroke:'var(--line)'},q);
     tx({x:256,y:154,class:'tt-q'},'"Please write me a sonnet',q);
     tx({x:256,y:178,class:'tt-q'},'on the subject of the',q);
     tx({x:256,y:202,class:'tt-q'},'Forth Bridge."',q);
     // players
     const box=(y,lab,id,col,i)=>{ const p=g(i);
       s('rect',{x:770,y:y-70,width:300,height:140,rx:14,fill:'var(--surface)',stroke:col,'stroke-width':2},p);
       tx({x:800,y:y+12,class:'tt-h',style:'font-size:44px'},lab,p);
       const t=tx({x:860,y:y+10,class:'tt-h tt-id',style:'font-size:24px;fill:'+col},id,p);
       const m=tx({x:900,y:y+20,class:'tt-qm'},'?',p);
       return p; };
     box(110,'A','human','var(--fg)',4); box(320,'B','machine','var(--green)',5);
     const v=g(7); tx({x:920,y:415,'text-anchor':'middle',class:'tt-t',style:'fill:var(--fg)'},'Judge cannot tell? The machine passes.',v);
     el.querySelector('button').addEventListener('click',()=>svg.classList.toggle('tt-hidden'));
     el.addEventListener('keydown',e=>e.stopPropagation());
     VIZ.onShow(el,()=>{ if(VIZ.reduced) return; svg.classList.add('tt-hidden'); setTimeout(()=>svg.classList.remove('tt-hidden'),2600); });
   }},
  {sec:'PHILOSOPHY', cls:'viz', title:`THE QUESTION <span class="g">MOVED</span>`,
   body:`<div class="mv"><div class="mv-old a-fade" style="--i:0"><div class="y">1950</div><div class="q">Can it chat like a human?</div>
       <div class="a">Today's chat models often hold a <b>casual conversation</b> that people cannot tell apart from a human.</div></div>
     <div class="arw a-fade" style="--i:1">→</div>
     <div class="mv-new a-fade" style="--i:2"><div class="y">Now</div><div class="q">Can it do <span class="g">the work</span>, reliably?</div>
       <div class="runs"><span></span>${[1,2,3,4,5,6,7,8,9,10].map(n=>`<span class="hd">${n}</span>`).join('')}
         <span class="lb">Summarise an interview</span>${'<i></i>'.repeat(10)}
         <span class="lb">Update the roadmap doc</span>${'<i></i>'.repeat(10)}
         <span class="lb">Answer a refund ticket</span>${'<i></i>'.repeat(10)}</div>
       <div class="legend"><span><i class="g"></i>done right</span><span><i class="w"></i>wrong or unsafe</span><span>10 runs per task, illustrative</span></div>
       <div class="ctl"><button type="button">run 10 more</button></div></div></div>
     <div class="lead a-fade" style="--i:4;margin-top:22px;max-width:none">A great demo is <b>one dot</b>. <span class="g">Ship on the whole row.</span></div>`,
   init(el){
     const rows=[...el.querySelectorAll('.runs')][0].querySelectorAll('i'), P=[.9,.8,.7];
     const fixed=[[0,0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,0,1,0],[0,1,0,0,0,1,0,0,0,1]];
     const paint=f=>rows.forEach((d,k)=>d.classList.toggle('x',!!f(Math.floor(k/10),k%10)));
     paint((r,c)=>fixed[r][c]);
     el.querySelector('button').addEventListener('click',()=>paint((r)=>Math.random()>P[r]));
     el.addEventListener('keydown',e=>e.stopPropagation());
   }}
  ]
});
