MOD({
  id:'accountability-chain', title:'Who is accountable when AI is wrong', cluster:'pm', fits:[1,6], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .m-accountability-chain .ac svg{width:100%;height:auto;max-height:56vh;overflow:visible}
  .m-accountability-chain .ac-l{fill:var(--surface);stroke:var(--c-55555b);stroke-width:5}
  .m-accountability-chain .ac-l.you{stroke:var(--green);fill:color-mix(in srgb,var(--green) 12%,transparent);filter:drop-shadow(0 0 12px color-mix(in srgb,var(--green) 45%,transparent))}
  .m-accountability-chain .ac-n{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:21px;fill:var(--fg)}
  .m-accountability-chain .ac-n.you{fill:var(--green);font-size:26px}
  .m-accountability-chain .ac-o{font-family:var(--b);font-size:15px;fill:var(--muted)}
  .m-accountability-chain .ac-o.you{fill:var(--fg)}
  .m-accountability-chain .ac-ok{font-family:var(--m);font-size:13px;fill:var(--c-55555b);text-transform:uppercase;letter-spacing:.1em}
  .m-accountability-chain .ac-w{font-family:var(--b);font-size:16px;fill:var(--warn)}
  .m-accountability-chain .ac-big{font-family:var(--h);font-weight:900;text-transform:uppercase;font-size:clamp(30px,3.6vw,50px);line-height:1;margin-top:8px}
  `,
  slides:[
  {sec:'RESPONSIBLE AI', cls:'viz', title:`WHO OWNS IT <span class="g">WHEN AI IS WRONG?</span>`,
   body:`<div class="ac"><svg viewBox="0 0 1120 340" role="img" aria-label="A chain of five links: model maker, tool vendor, your company, you who pressed send, customer. The you link is green and larger. An orange arrow from the customer points back to you."></svg></div>
     <div class="ac-big a-fade" style="--i:9">AI drafted it. <span class="g">You own it.</span></div>`,
   init(el){
     const svg=el.querySelector('svg');
     VIZ.s('defs',{},svg).innerHTML='<marker id="ac-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--warn)"/></marker>';
     const L=[['Model maker','how the model','behaves'],['Tool vendor','the product and','its data terms'],['Your company','the rules: which','tools, which data'],
              ['You','every word','you sent','you'],['Customer','lives with','the result']];
     const W=228, H=96, step=218, x0=20, cy=180;
     L.forEach((l,k)=>{
       const you=!!l[3], s=you?1.14:1, w=you?W+16:W, h=H*s, cx=x0+W/2+k*step;
       const g=VIZ.s('g',{class:'a-pop',style:`--i:${k};transform-box:fill-box;transform-origin:center`},svg);
       VIZ.s('rect',{x:cx-w/2,y:cy-h/2,width:w,height:h,rx:h/2,class:'ac-l'+(you?' you':'')},g);
       const n=VIZ.s('text',{x:cx,y:cy+(you?9:7),'text-anchor':'middle',class:'ac-n'+(you?' you':'')},g); n.textContent=l[0];
       const ok=VIZ.s('text',{x:cx,y:cy+h/2+30,'text-anchor':'middle',class:'ac-ok'},g); ok.textContent='owns';
       const o1=VIZ.s('text',{x:cx,y:cy+h/2+52,'text-anchor':'middle',class:'ac-o'+(you?' you':'')},g); o1.textContent=l[1];
       const o2=VIZ.s('text',{x:cx,y:cy+h/2+72,'text-anchor':'middle',class:'ac-o'+(you?' you':'')},g); o2.textContent=l[2];
       if(you){ const p=VIZ.s('text',{x:cx,y:cy-h/2-14,'text-anchor':'middle',class:'ac-ok'},g); p.textContent='pressed send'; p.setAttribute('fill','var(--green)'); p.style.fill='var(--green)'; }
     });
     const xc=x0+W/2+4*step, xy=x0+W/2+3*step;
     VIZ.s('path',{d:`M${xc} ${cy-H/2-6} C ${xc} 66, ${xy+30} 56, ${xy+30} ${cy-H*1.14/2-32}`,fill:'none',stroke:'var(--warn)','stroke-width':2.5,'stroke-dasharray':'6 6','marker-end':'url(#ac-ar)',class:'a-fade',style:'--i:7'},svg);
     const w=VIZ.s('text',{x:(xc+xy)/2+15,y:40,'text-anchor':'middle',class:'ac-w a-fade',style:'--i:8'},svg); w.textContent='if it is wrong, they look here';
   }}
  ]
});
