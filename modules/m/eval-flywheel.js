(function(){
/* shared SVG helpers, scoped to this module */
const ID='eval-flywheel', P='.m-'+ID;
const T=(x,y,t,c,a)=>`<text x="${x}" y="${y}" class="${c||'bs'}" ${a||''}>${t}</text>`;
const TC=(x,y,t,c)=>T(x,y,t,c,'text-anchor="middle"');
const R=(x,y,w,h,c,a)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx ${c||''}" ${a||''}/>`;
let SV=0; /* one marker set per svg: a hidden slide must not own the markers */
const AR=(d,c,i,len)=>`<path d="${d}" class="ar ${c||''} a-draw" style="--i:${i||0};--len:${len||600}" marker-end="url(#${ID}-${SV}-${c||'n'})"/>`;
const DEFS=()=>(SV++,`<defs>${['n','g','w'].map(c=>`<marker id="${ID}-${SV}-${c}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="mk ${c}"/></marker>`).join('')}</defs>`);
const BASE=`${P} svg.dg{width:100%;height:auto;display:block;overflow:visible}
${P} .bx{fill:var(--surface);stroke:var(--line);stroke-width:1.5}
${P} .bx.g{stroke:var(--green);fill:color-mix(in srgb,var(--green) 8%,transparent)} ${P} .bx.w{stroke:var(--warn);fill:color-mix(in srgb,var(--warn) 8%,transparent)} ${P} .bx.d{stroke-dasharray:5 5}
${P} .ar{fill:none;stroke:var(--subtle);stroke-width:2} ${P} .ar.g{stroke:var(--green)} ${P} .ar.w{stroke:var(--warn)}
${P} .mk{fill:var(--subtle)} ${P} .mk.g{fill:var(--green)} ${P} .mk.w{fill:var(--warn)}
${P} .bt{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:18px;fill:var(--fg)}
${P} .bt.g{fill:var(--green)} ${P} .bt.w{fill:var(--warn)} ${P} .bt.m{fill:var(--muted)}
${P} .bs{font-family:var(--b);font-size:14px;fill:var(--muted)} ${P} .bs.l{fill:var(--fg-2)} ${P} .bs.g{fill:var(--green)} ${P} .bs.w{fill:var(--warn)}
${P} .bm{font-family:var(--m);font-size:14px;fill:var(--fg-2)}
${P} .a-pop{transform-box:fill-box;transform-origin:center}
${P} .lead{font-size:clamp(18px,1.7vw,24px)}`;
const ST=[['Collect failures','from real use','Save every bad output users or you spot. Real failures beat imagined ones.'],
 ['Add to test set','one failure, one case','Write the input and what a good answer must do. The set only grows.'],
 ['Change it','prompt, model, tools','Make one change at a time, so you know what helped.'],
 ['Run evals','old and new cases','Eval = a repeatable test. Run every case and score each one.'],
 ['Ship','if nothing got worse','Ship only when new cases pass and old ones still pass.'],
 ['Monitor','watch live outputs','Sample real outputs every week. New failures start the next lap.']];
const C=[320,215], RR=190, pt=a=>[C[0]+RR*Math.sin(a*Math.PI/180), C[1]-RR*Math.cos(a*Math.PI/180)];
const s0=()=>`<svg class="dg" viewBox="0 0 640 430" role="img" aria-label="A loop of six steps: collect failures, add to test set, change, run evals, ship, monitor, then back to collect.">
<circle cx="${C[0]}" cy="${C[1]}" r="${RR}" fill="none" stroke="var(--green)" stroke-opacity=".45" stroke-width="2"/>
<g class="ef-spin"><path d="M${pt(-30)[0].toFixed(1)} ${pt(-30)[1].toFixed(1)} A${RR} ${RR} 0 0 1 ${pt(30)[0].toFixed(1)} ${pt(30)[1].toFixed(1)}" fill="none" stroke="var(--green)" stroke-width="8" stroke-linecap="round" opacity=".5"/></g>
${ST.map((_,j)=>{const a=j*60, [x,y]=pt(a);return `<path d="M-7 -7 L8 0 L-7 7z" fill="var(--green)" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a})"/>`;}).join('')}
${TC(320,203,'Test set','bt g')}${TC(320,227,'grows every lap','bs l')}
${ST.map(([k,s],j)=>{const [x,y]=pt(30+j*60);return `<g class="ef-n a-pop" data-k="${j}" style="--i:${j}">${R(x-84,y-30,168,60)}${TC(x,y-4,k,'bt sm')}${TC(x,y+17,s)}</g>`;}).join('')}</svg>`;
const rows=[['Summarise a 40-min interview','Mentions the pricing complaint','support ticket'],['Weekly update, one metric missing','Says "data missing", never guesses','wrong exec update'],['PRD for a feature with no owner','Flags the missing owner','review comment']];
const V=[['v1',62],['v2',74],['v3',70],['v4',86]];
const s1=`<svg class="dg" viewBox="0 0 420 300" role="img" aria-label="Pass rate by version, illustrative: v1 62, v2 74, v3 70 which is a drop, v4 86.">
${[0,50,100].map(v=>`<line x1="40" x2="420" y1="${250-v*2.2}" y2="${250-v*2.2}" stroke="var(--line)"/>${T(0,255-v*2.2,v+'%','bs')}`).join('')}
${V.map(([k,v],j)=>{const x=70+j*90, w=v===70;return `<rect x="${x}" y="${250-v*2.2}" width="56" height="${v*2.2}" rx="4" fill="${w?'var(--warn)':'var(--green)'}" class="a-rise" style="--i:${j}"/>${TC(x+28,240-v*2.2,v+'%',w?'bm w':'bm')}${TC(x+28,276,k,'bm')}`;}).join('')}
${TC(278,298,'v3 broke an old case: the set caught it','bs w')}</svg>`;
MOD({
  id:ID, title:'The eval loop', cluster:'agents', fits:[6,8], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .bt.sm{font-size:16px}
  ${P} .bs.w,${P} .bm.w{fill:var(--warn)}
  ${P} .ef{display:grid;grid-template-columns:1.15fr 1fr;gap:3.5vw;align-items:center}
  ${P} .ef svg{max-height:58vh}
  ${P} .ef-spin{transform-origin:320px 215px}
  ${P} .ef-n.on .bx{stroke:var(--green);fill:var(--c-1a1e0c)}
  ${P} .ef-num{font-family:var(--m);color:var(--green);font-size:15px;letter-spacing:.08em}
  ${P} .ef-k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:clamp(28px,3vw,42px);line-height:1;margin-top:8px}
  ${P} .ef-d{font-size:19px;line-height:1.45;color:var(--fg-2);margin-top:14px;min-height:84px;max-width:440px}
  ${P} .ef-tc{display:grid;grid-template-columns:1.25fr 1fr;gap:3vw;align-items:center}
  ${P} table{width:100%;border-collapse:collapse;font-size:15px}
  ${P} th{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:14px;color:var(--muted);text-align:left;padding:0 10px 10px 0;border-bottom:1px solid var(--line)}
  ${P} td{padding:12px 10px 12px 0;border-bottom:1px solid var(--line);line-height:1.35;vertical-align:top}
  ${P} td:first-child{font-family:var(--m);font-size:14px;color:var(--fg-2)}
  ${P} td:nth-child(2){color:var(--green)} ${P} td:last-child{color:var(--muted)}`,
  slides:[
  {sec:'EVALS', cls:'viz', title:`THE EVAL <span class="g">LOOP</span>`,
   body:`<div class="ef"><div>${s0()}</div><div><div class="ef-num">STEP <span class="ef-i">1</span> OF 6</div><div class="ef-k"></div><div class="ef-d"></div>
     <div class="lead" style="margin-top:22px">Each lap turns <span class="g">a real failure into a test</span> that never breaks again unnoticed.</div></div></div>`,
   init(el){
     const nodes=[...el.querySelectorAll('.ef-n')], k=el.querySelector('.ef-k'), d=el.querySelector('.ef-d'), n=el.querySelector('.ef-i'), sp=el.querySelector('.ef-spin');
     let cur=0, lap=0, tm;
     const set=(j,adv)=>{cur=j; lap=adv?lap+1:j; nodes.forEach((g,q)=>g.classList.toggle('on',q===j)); k.textContent=ST[j][0]; d.textContent=ST[j][2]; n.textContent=j+1;
       sp.style.transition=VIZ.reduced?'none':'transform .8s cubic-bezier(.3,1.2,.4,1)'; sp.style.transform=`rotate(${30+lap*60}deg)`; };
     set(0);
     VIZ.onShow(el,()=>{ clearInterval(tm); set(0); if(VIZ.reduced) return; tm=setInterval(()=>{ if(!el.classList.contains('active')){clearInterval(tm);return;} set((cur+1)%6,true); },2400); });
   }},
  {sec:'EVALS', cls:'viz', title:`EVERY FAILURE <span class="g">BECOMES A TEST</span>`,
   body:`<div class="ef-tc"><table class="a-fade"><tr><th>Input</th><th>A good answer must</th><th>Came from</th></tr>
     ${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table>
     <div>${s1}<div class="note-s" style="margin-top:6px">Pass rate on the test set by version. Illustrative.</div></div></div>
     <div class="lead a-fade" style="--i:5;margin-top:22px;max-width:none">Without the test set, <span class="w">v3 ships</span> and nobody notices the drop.</div>`}
  ]
});
})();
