MOD({
  id:'five-fifty', title:'The 5-50 rule, charted', cluster:'pm', fits:[1,3], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-five-fifty .ff svg{width:100%;height:auto;max-height:54vh;overflow:visible}
  .m-five-fifty .ff-ax{stroke:var(--dim);stroke-width:1}
  .m-five-fifty .ff-grid{stroke:var(--faint);stroke-width:1}
  .m-five-fifty .ff-lz{fill:none;stroke:var(--fg-2);stroke-width:3;stroke-linejoin:round}
  .m-five-fifty .ff-rc{fill:none;stroke:var(--green);stroke-width:5;stroke-linejoin:round;filter:drop-shadow(0 0 6px color-mix(in srgb,var(--green) 50%,transparent))}
  .m-five-fifty .ff-lb{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.05em;font-size:20px}
  .m-five-fifty .ff-an{font-family:var(--b);font-size:15px;fill:var(--fg)}
  .m-five-fifty .ff-row{display:flex;gap:4vw;align-items:baseline;margin-top:6px}
  .m-five-fifty .ff-row .stat{font-size:clamp(40px,5vw,64px)}
  .m-five-fifty .ff-row .stat.l{color:var(--fg-2)}
  `,
  slides:[
  {sec:'PROMPTING · G·C·O·C', cls:'viz', title:`5 MINUTES IN, <span class="g">50 MINUTES OUT</span>`,
   body:`<div class="ff"><svg viewBox="0 0 1100 400" role="img" aria-label="Total minutes per round. A lazy prompt starts at 1 minute and climbs to 55 over six rework loops. An G·C·O·C prompt starts at 5 minutes and is done at 12. The lines cross right after the first draft."></svg></div>
     <div class="ff-row a-fade" style="--i:12"><div><span class="stat l">55</span> <span class="note-s">min, lazy</span></div><div><span class="stat">12</span> <span class="note-s">min, G·C·O·C</span></div><div class="note-s" style="margin-left:auto">Illustrative minutes. The shape is the lesson.</div></div>`,
   init(el){
     const svg=el.querySelector('svg'), X0=90, X1=960, Y0=350, Y1=20, R=7, M=60;
     const x=r=>X0+r*(X1-X0)/R, y=m=>Y0-m*(Y0-Y1)/M;
     [0,15,30,45,60].forEach(m=>{
       VIZ.s('line',{x1:X0,x2:X1,y1:y(m),y2:y(m),class:m?'ff-grid':'ff-ax'},svg);
       const t=VIZ.s('text',{x:X0-14,y:y(m)+5,'text-anchor':'end',class:'svg-t'},svg); t.textContent=m;
     });
     
     const yt=VIZ.s('text',{transform:`translate(22 ${(Y0+Y1)/2}) rotate(-90)`,'text-anchor':'middle',class:'svg-t'},svg); yt.textContent='total minutes spent';
     ['prompt','1st draft','fix 1','fix 2','fix 3','fix 4','fix 5','fix 6'].forEach((s,r)=>{ const t=VIZ.s('text',{x:x(r),y:Y0+26,'text-anchor':'middle',class:'svg-t'},svg); t.textContent=s; });
     const LZ=[1,8,16,24,32,40,48,55], RC=[5,9,12];
     const path=a=>a.map((m,r)=>(r?'L':'M')+x(r)+' '+y(m)).join('');
     // gap after G·C·O·C is done
     VIZ.s('line',{x1:x(2),x2:x(7),y1:y(12),y2:y(12),stroke:'var(--green)','stroke-width':2,'stroke-dasharray':'2 7',opacity:.6,class:'a-fade',style:'--i:9'},svg);
     VIZ.s('path',{d:path(LZ),class:'ff-lz a-draw',pathLength:1000,style:'--len:1000;--i:1'},svg);
     VIZ.s('path',{d:path(RC),class:'ff-rc a-draw',pathLength:1000,style:'--len:1000;--i:0'},svg);
     LZ.forEach((m,r)=>VIZ.s('circle',{cx:x(r),cy:y(m),r:5,fill:'var(--fg-2)',class:'a-pop',style:`--i:${r+3};transform-box:fill-box;transform-origin:center`},svg));
     RC.forEach((m,r)=>VIZ.s('circle',{cx:x(r),cy:y(m),r:7,fill:'var(--green)',class:'a-pop',style:`--i:${r+1};transform-box:fill-box;transform-origin:center`},svg));
     const lab=(tx,ty,s,cls,anc)=>{ const t=VIZ.s('text',{x:tx,y:ty,'text-anchor':anc||'start',class:cls},svg); t.innerHTML=s; return t; };
     lab(x(7)-12,y(55)-16,'Lazy prompt','ff-lb a-fade','end').setAttribute('fill','var(--fg-2)');
     lab(x(2)+14,y(12)-14,'G·C·O·C: done','ff-lb a-fade').setAttribute('fill','var(--green)');
     // setup cost at round 0
     lab(x(0)+18,y(5)-30,'+4 min setup','ff-an a-fade');
     // crossover: lazy 8 to 16, rctc 9 to 12 between rounds 1 and 2: t=0.2
     const cx=x(1.2), cy=y(9.6);
     VIZ.s('circle',{cx,cy,r:20,fill:'none',stroke:'var(--fg)','stroke-width':2,'stroke-dasharray':'4 4',class:'a-pop',style:'--i:10;transform-box:fill-box;transform-origin:center'},svg);
     lab(cx+8,cy+48,'lines cross right after the 1st draft','ff-an a-fade');
     // the saved gap
     const gx=x(7)+34;
     VIZ.s('path',{d:`M${gx-8} ${y(55)}H${gx}V${y(12)}H${gx-8}`,fill:'none',stroke:'var(--green)','stroke-width':2,class:'a-fade',style:'--i:11'},svg);
     const g1=lab(gx+12,(y(55)+y(12))/2-6,'43 min','ff-lb a-fade'); g1.setAttribute('fill','var(--green)');
     lab(gx+12,(y(55)+y(12))/2+16,'of rework','ff-an a-fade');
   }}
  ]
});
