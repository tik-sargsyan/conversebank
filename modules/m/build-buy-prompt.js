MOD({
  id:'build-buy-prompt', title:'Prompt it, buy it or build it', cluster:'pm', fits:[6], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-build-buy-prompt .bb{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  .m-build-buy-prompt .bb-c{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:20px 22px}
  .m-build-buy-prompt .bb-c.on{border-color:var(--green);box-shadow:0 0 0 1px color-mix(in srgb,var(--green) 25%,transparent)}
  .m-build-buy-prompt .bb-n{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:clamp(28px,3vw,40px);line-height:1}
  .m-build-buy-prompt .bb-c.on .bb-n{color:var(--green)}
  .m-build-buy-prompt .bb-e{font-size:15px;color:var(--muted);margin:8px 0 18px;min-height:42px;line-height:1.4}
  .m-build-buy-prompt .bb-m{margin-top:14px}
  .m-build-buy-prompt .bb-m .k{display:flex;justify-content:space-between;font-family:var(--m);font-size:13px;color:var(--fg-2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px}
  .m-build-buy-prompt .bb-m .k span{color:var(--muted);text-transform:none;letter-spacing:0}
  .m-build-buy-prompt .bb-pips{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}
  .m-build-buy-prompt .bb-pips i{height:14px;border-radius:3px;background:var(--c-1d1d20)}
  .m-build-buy-prompt .bb-pips i.g{background:var(--green)}
  .m-build-buy-prompt .bb-pips i.w{background:var(--warn)}
  .m-build-buy-prompt .bb-f svg{width:100%;height:auto;max-height:56vh;overflow:visible}
  .m-build-buy-prompt .bf-q{font-family:var(--b);font-size:17px;fill:var(--fg)}
  .m-build-buy-prompt .bf-y{font-family:var(--m);font-size:14px;fill:var(--green);text-transform:uppercase;letter-spacing:.08em}
  .m-build-buy-prompt .bf-n{font-family:var(--m);font-size:14px;fill:var(--muted);text-transform:uppercase;letter-spacing:.08em}
  .m-build-buy-prompt .bf-o{font-family:var(--h);font-weight:900;font-size:24px;text-transform:uppercase;fill:var(--bg)}
  `,
  slides:[
  {sec:'BUILD THE JUDGE', cls:'viz', title:`PROMPT IT, BUY IT <span class="g">OR BUILD IT</span>`,
   body:`<div class="bb"></div>
     <div class="legend a-fade" style="--i:14"><span><i class="g"></i>more is good</span><span><i class="w"></i>more is a cost</span><span>Bars are relative and illustrative.</span></div>`,
   init(el){
     const C=[['Speed to value','g'],['Control','g'],['Cost','w'],['Upkeep','w']];
     const P=[
       {n:'Prompt it', e:'A weekly churn summary, asked in Claude each Monday.', v:[5,3,1,1], on:1},
       {n:'Buy a tool', e:'A feedback tool with AI tagging built in.', v:[4,2,3,2]},
       {n:'Build it', e:'Your own sorting agent on your own data.', v:[1,5,4,5]}];
     const lbl=['','very low','low','medium','high','very high'];
     el.querySelector('.bb').innerHTML=P.map((p,k)=>`<div class="bb-c a-fade${p.on?' on':''}" style="--i:${k*4}"><div class="bb-n">${p.n}</div><div class="bb-e">${p.e}</div>`+
       C.map((c,j)=>`<div class="bb-m"><div class="k">${c[0]}<span>${lbl[p.v[j]]}</span></div><div class="bb-pips a-grow" style="--i:${k*4+j+1}">`+
         [0,1,2,3,4].map(i=>`<i class="${i<p.v[j]?c[1]:''}"></i>`).join('')+`</div></div>`).join('')+`</div>`).join('');
   }},
  {sec:'BUILD THE JUDGE', cls:'viz', title:`START LEFT. <span class="g">MOVE RIGHT</span> ONLY WHEN IT BREAKS`,
   body:`<div class="bb-f"><svg viewBox="0 0 1120 380" role="img" aria-label="Decision flow. Is it a one-off or low volume? Yes: prompt it. No: does a tool already do most of it? Yes: buy it. No: is it core to your product or your data? Yes: build it. No: prompt it with a saved template."></svg></div>`,
   init(el){
     const svg=el.querySelector('svg');
     VIZ.s('defs',{},svg).innerHTML='<marker id="bf-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker><marker id="bf-ag" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--green)"/></marker>';
     const Q=[['One-off or','low volume?','Prompt it'],['Does a tool do','most of it?','Buy it'],['Core to your','product or data?','Build it']];
     const cx=k=>150+k*330, cy=120, r=95;
     const t=(x,y,s,c,a)=>{ const e=VIZ.s('text',{x,y,'text-anchor':a||'middle',class:c},svg); e.textContent=s; return e; };
     Q.forEach((q,k)=>{
       const g=VIZ.s('g',{class:'a-fade',style:`--i:${k*3}`},svg), x=cx(k);
       VIZ.s('path',{d:`M${x} ${cy-r}L${x+r*1.25} ${cy}L${x} ${cy+r}L${x-r*1.25} ${cy}Z`,fill:'var(--surface)',stroke:'var(--dim)','stroke-width':2},g);
       const a=VIZ.s('text',{x,y:cy-4,'text-anchor':'middle',class:'bf-q'},g); a.textContent=q[0];
       const b=VIZ.s('text',{x,y:cy+20,'text-anchor':'middle',class:'bf-q'},g); b.textContent=q[1];
       // yes branch down
       VIZ.s('line',{x1:x,y1:cy+r+4,x2:x,y2:282,stroke:'var(--green)','stroke-width':2.5,'marker-end':'url(#bf-ag)'},g);
       const yy=VIZ.s('text',{x:x+12,y:cy+r+30,'text-anchor':'start',class:'bf-y'},g); yy.textContent='yes';
       VIZ.s('rect',{x:x-100,y:290,width:200,height:56,rx:28,fill:'var(--green)'},g);
       const o=VIZ.s('text',{x,y:327,'text-anchor':'middle',class:'bf-o'},g); o.textContent=q[2];
       // no branch right
       if(k<2){
         VIZ.s('line',{x1:x+r*1.25+4,y1:cy,x2:cx(k+1)-r*1.25-6,y2:cy,stroke:'var(--muted)','stroke-width':2,'marker-end':'url(#bf-ar)'},g);
         const nn=VIZ.s('text',{x:(x+r*1.25+cx(k+1)-r*1.25)/2,y:cy-12,'text-anchor':'middle',class:'bf-n'},g); nn.textContent='no';
       }
     });
     const g=VIZ.s('g',{class:'a-fade',style:'--i:9'},svg), x=cx(2)+r*1.25;
     VIZ.s('line',{x1:x+4,y1:cy,x2:x+56,y2:cy,stroke:'var(--muted)','stroke-width':2,'marker-end':'url(#bf-ar)'},g);
     const nn=VIZ.s('text',{x:x+30,y:cy-12,'text-anchor':'middle',class:'bf-n'},g); nn.textContent='no';
     const e1=VIZ.s('text',{x:x+64,y:cy-4,class:'bf-q'},g); e1.textContent='Saved prompt';
     const e2=VIZ.s('text',{x:x+64,y:cy+20,class:'bf-n'},g); e2.textContent='or a skill';
   }}
  ]
});
