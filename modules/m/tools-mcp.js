MOD({
  id:'tools-mcp', title:'MCP: one plug, many tools', cluster:'claude', fits:[2,4,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-tools-mcp .hub{height:min(56vh,420px)}
  .m-tools-mcp .hub svg,.m-tools-mcp .nm svg{width:100%;height:100%;overflow:visible}
  .m-tools-mcp .wire{stroke:var(--c-2c2c30);stroke-width:3;fill:none}
  .m-tools-mcp .pulse{stroke:var(--green);stroke-width:3;fill:none;stroke-dasharray:10 200;stroke-dashoffset:10;opacity:0}
  .slide.active.m-tools-mcp .pulse{opacity:1;animation:mcp-run 2.4s linear infinite;animation-delay:calc(var(--i)*.4s)}
  @keyframes mcp-run{from{stroke-dashoffset:10}to{stroke-dashoffset:-100}}
  .m-tools-mcp .tl rect{fill:var(--surface);stroke:var(--dim);stroke-width:2}
  .m-tools-mcp .tk{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.03em;fill:var(--fg)}
  .m-tools-mcp .td{font-family:var(--b);font-size:15px;fill:var(--muted)}
  .m-tools-mcp .plug{fill:none;stroke:var(--green);stroke-width:3;stroke-dasharray:4 7}
  .m-tools-mcp .core{fill:var(--bg);stroke:var(--green);stroke-width:3}
  .m-tools-mcp .ck{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:26px;fill:var(--fg);letter-spacing:.04em}
  .m-tools-mcp .cm{font-family:var(--m);font-size:15px;fill:var(--green)}
  .m-tools-mcp .nm-w{display:grid;grid-template-columns:1fr 1fr;gap:4vw;margin-top:10px}
  .m-tools-mcp .nm{height:min(40vh,300px)}
  .m-tools-mcp .nm-h{display:flex;align-items:baseline;gap:14px;margin-bottom:6px}
  .m-tools-mcp .nm-h .stat{font-size:clamp(48px,6vw,84px)}
  .m-tools-mcp .nm-h .stat.w{color:var(--warn)}
  .m-tools-mcp .nm-h .cap{margin:0;font-size:18px}
  .m-tools-mcp .ln{stroke:var(--subtle);stroke-width:1.5}
  .m-tools-mcp .ln.w{stroke:var(--warn);opacity:.55}
  .m-tools-mcp .ln.g{stroke:var(--green);stroke-width:2}
  .m-tools-mcp .bx{fill:var(--surface);stroke:var(--dim);stroke-width:2}
  .m-tools-mcp .bt{font-family:var(--b);font-size:15px;fill:var(--fg)}
  .m-tools-mcp .mbar{fill:var(--green-a);stroke:var(--green);stroke-width:2}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`MCP: <span class="g">ONE PLUG</span>, MANY TOOLS`,
   body:`<div class="hub"><svg viewBox="0 0 1100 420" role="img" aria-label="Claude in the middle with an MCP ring. Six connectors: Google Drive, Slack, Jira, Figma, a database, GitHub."></svg></div>
     <div class="src" style="margin-top:8px"><b>MCP:</b> one shared plug that lets AI read and act in your tools</div>`,
   init(el){
     const svg=el.querySelector('svg'), cx=550, cy=210;
     const T=[
       {k:'Google Drive',d:'read the PRD',x:40,y:30},
       {k:'Slack',d:'post the update',x:40,y:170},
       {k:'Jira',d:'check the board',x:40,y:310},
       {k:'Figma',d:'read the design',x:810,y:30},
       {k:'Database',d:'pull usage numbers',x:810,y:170},
       {k:'GitHub',d:'see what shipped',x:810,y:310}];
     T.forEach((t,k)=>{
       const left=t.x<500, x1=left?t.x+250:t.x, y1=t.y+40;
       const d=`M${cx+(left?-92:92)} ${cy} C${cx+(left?-180:180)} ${cy} ${x1+(left?80:-80)} ${y1} ${x1} ${y1}`;
       VIZ.s('path',{d,class:'wire'},svg);
       VIZ.s('path',{d,pathLength:100,class:'pulse',style:`--i:${k}`},svg);
       const g=VIZ.s('g',{class:'tl a-fade',style:`--i:${k+1}`},svg);
       VIZ.s('rect',{x:t.x,y:t.y,width:250,height:80,rx:12},g);
       const a=VIZ.s('text',{x:t.x+20,y:t.y+34,class:'tk'},g); a.textContent=t.k;
       const b=VIZ.s('text',{x:t.x+20,y:t.y+60,class:'td'},g); b.textContent=t.d;
     });
     VIZ.s('circle',{cx,cy,r:92,class:'plug'},svg);
     VIZ.s('circle',{cx,cy,r:70,class:'core a-pop',style:'transform-box:fill-box;transform-origin:center'},svg);
     const c=VIZ.s('text',{x:cx,y:cy+4,'text-anchor':'middle',class:'ck'},svg); c.textContent='Claude';
     const m=VIZ.s('text',{x:cx,y:cy+30,'text-anchor':'middle',class:'cm'},svg); m.textContent='MCP';
     if(VIZ.reduced) svg.querySelectorAll('.pulse').forEach(p=>p.remove());
   }},
  {sec:'CLAUDE CODE', cls:'viz', title:`WHY A STANDARD <span class="g">MATTERS</span>`,
   body:`<div class="nm-w">
     <div><div class="nm-h"><div class="stat w">18</div><div class="cap"><b>custom integrations</b><br>3 AI apps x 6 tools</div></div><div class="nm"><svg data-k="before" viewBox="0 0 500 300" role="img" aria-label="Before: every app wired to every tool, 18 lines."></svg></div></div>
     <div><div class="nm-h"><div class="stat">9</div><div class="cap"><b>connections</b><br>3 apps + 6 tools, one standard</div></div><div class="nm"><svg data-k="after" viewBox="0 0 500 300" role="img" aria-label="After: each app and each tool connects once to an MCP bar, 9 lines."></svg></div></div></div>`,
   init(el){
     const A=['Claude','App B','App C'], T=['Drive','Slack','Jira','Figma','DB','GitHub'];
     const draw=(svg,after)=>{
       const ay=k=>40+k*100, ty=k=>12+k*48;
       if(after){
         VIZ.s('rect',{x:228,y:10,width:44,height:280,rx:10,class:'mbar a-fade',style:'--i:2'},svg);
         const t=VIZ.s('text',{x:250,y:156,'text-anchor':'middle',class:'cm',transform:'rotate(-90 250 156)'},svg); t.textContent='MCP';
         A.forEach((_,k)=>VIZ.s('line',{x1:120,y1:ay(k)+16,x2:228,y2:ay(k)+16,class:'ln g a-fade',style:`--i:${3+k}`},svg));
         T.forEach((_,k)=>VIZ.s('line',{x1:272,y1:ty(k)+18,x2:380,y2:ty(k)+18,class:'ln g a-fade',style:`--i:${3+k}`},svg));
       } else {
         let i=0; A.forEach((_,a)=>T.forEach((_,t)=>VIZ.s('line',{x1:120,y1:ay(a)+16,x2:380,y2:ty(t)+18,class:'ln w a-fade',style:`--i:${2+(i++)/3}`},svg)));
       }
       A.forEach((a,k)=>{ VIZ.s('rect',{x:0,y:ay(k),width:120,height:32,rx:8,class:'bx'},svg); const t=VIZ.s('text',{x:14,y:ay(k)+21,class:'bt'},svg); t.textContent=a; });
       T.forEach((n,k)=>{ VIZ.s('rect',{x:380,y:ty(k),width:120,height:36,rx:8,class:'bx'},svg); const t=VIZ.s('text',{x:394,y:ty(k)+23,class:'bt'},svg); t.textContent=n; });
     };
     draw(el.querySelector('[data-k=before]'),false);
     draw(el.querySelector('[data-k=after]'),true);
   }}
  ]
});
