MOD({
  id:'subagents', title:'Fan out: agents and workflows', cluster:'claude', fits:[6], minutes:4,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-subagents .fan{height:min(44vh,330px)}
  .m-subagents .fan svg{width:100%;height:100%;overflow:visible}
  .m-subagents .wire{fill:none;stroke:var(--c-2c2c30);stroke-width:3}
  .m-subagents .bx{fill:var(--surface);stroke:var(--dim);stroke-width:2}
  .m-subagents .bx.g{stroke:var(--green)}
  .m-subagents .bk{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.03em;fill:var(--fg)}
  .m-subagents .bd{font-family:var(--b);font-size:15px;fill:var(--muted)}
  .m-subagents .cw{fill:var(--c-1d1d20)}
  .m-subagents .cf{fill:var(--green);opacity:.75}
  .m-subagents .cl{font-family:var(--m);font-size:13px;fill:var(--muted)}
  .m-subagents .pk{fill:var(--green);filter:drop-shadow(0 0 6px color-mix(in srgb,var(--green) 90%,transparent))}
  .m-subagents .cost{display:grid;grid-template-columns:1fr 1fr;gap:4vw;margin-top:14px}
  .m-subagents .cost .h{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:15px;letter-spacing:.1em;color:var(--muted);margin-bottom:8px}
  .m-subagents .cost .r{display:grid;grid-template-columns:170px 1fr;gap:12px;align-items:center;font-size:15px;color:var(--fg);margin-top:6px}
  .m-subagents .meter{height:12px;border-radius:6px}
  `,
  slides:[
  {sec:'CLAUDE CODE', cls:'viz', title:`ONE LEAD, <span class="g">MANY HANDS</span>`,
   body:`<div class="fan"><svg viewBox="0 0 1100 330" role="img" aria-label="A lead agent fans out to three agents: research, draft and review. Each has its own context. Their summaries merge back into one result."></svg></div>
     <div class="cost">
       <div><div class="h">Time to finish</div>
         <div class="r">one agent, in turn<div class="meter"><b class="a-grow" style="width:100%;--i:8"></b></div></div>
         <div class="r">lead + 3 in parallel<div class="meter"><b class="a-grow" style="width:42%;--i:9"></b></div></div></div>
       <div><div class="h">Tokens used</div>
         <div class="r">one agent, in turn<div class="meter w"><b class="a-grow" style="width:38%;--i:8"></b></div></div>
         <div class="r">lead + 3 in parallel<div class="meter w"><b class="a-grow" style="width:100%;--i:9"></b></div></div></div></div>
     <div class="src" style="margin-top:10px"><b>Agent:</b> a helper agent the lead starts · bars illustrative</div>`,
   init(el){
     const svg=el.querySelector('svg');
     const box=(x,y,w,h,k,d,g)=>{ const G=VIZ.s('g',{class:'a-fade',style:`--i:${g}`},svg);
       VIZ.s('rect',{x,y,width:w,height:h,rx:12,class:'bx'+(g===0||g===7?' g':'')},G);
       const a=VIZ.s('text',{x:x+18,y:y+32,class:'bk'},G); a.textContent=k;
       d.forEach((s,j)=>{ const t=VIZ.s('text',{x:x+18,y:y+56+j*20,class:'bd'},G); t.textContent=s; }); return G; };
     const S=[
       {k:'Research',d:'competitor pricing pages',f:.7,y:10},
       {k:'Draft',d:'release notes from changelog',f:.5,y:120},
       {k:'Review',d:'audit the PRD for gaps',f:.6,y:230}];
     const out=[], back=[];
     S.forEach((s,k)=>{
       out.push(VIZ.s('path',{d:`M250 165 C330 165 330 ${s.y+45} 410 ${s.y+45}`,class:'wire'},svg));
       back.push(VIZ.s('path',{d:`M700 ${s.y+45} C780 ${s.y+45} 780 165 860 165`,class:'wire'},svg));
     });
     box(0,105,250,120,'Lead agent',['Prep Monday\'s launch','review. Splits the job.'],0);
     S.forEach((s,k)=>{ const G=box(410,s.y,290,90,s.k,[s.d],k+2);
       VIZ.s('rect',{x:428,y:s.y+68,width:252,height:8,rx:4,class:'cw'},G);
       VIZ.s('rect',{x:428,y:s.y+68,width:252*s.f,height:8,rx:4,class:'cf'},G);
       const t=VIZ.s('text',{x:682,y:s.y+30,'text-anchor':'end',class:'cl'},G); t.textContent='own memory'; });
     box(860,105,240,120,'Result',['3 short summaries,','merged by the lead.'],7);
     const pk=S.map(()=>VIZ.s('circle',{r:8,class:'pk',opacity:0},svg));
     let raf;
     VIZ.onShow(el,()=>{
       cancelAnimationFrame(raf); if(VIZ.reduced) return;
       const t0=performance.now(), D=3600;
       const step=now=>{ const p=Math.min(1,(now-t0)/D);
         pk.forEach((c,k)=>{ const q=Math.max(0,Math.min(1,(p-k*0.06)/0.82));
           let path=out[k], u=q/0.4;
           if(q>0.4&&q<0.6){ path=null; } else if(q>=0.6){ path=back[k]; u=(q-0.6)/0.4; }
           if(!path||q<=0||q>=1){ c.setAttribute('opacity',0); return; }
           const L=path.getTotalLength(), pt=path.getPointAtLength(L*Math.min(1,u));
           c.setAttribute('cx',pt.x); c.setAttribute('cy',pt.y); c.setAttribute('opacity',1); });
         if(p<1) raf=requestAnimationFrame(step); };
       raf=requestAnimationFrame(step);
     });
   }}
  ]
});
