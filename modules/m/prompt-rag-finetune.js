(function(){
/* shared SVG helpers, scoped to this module */
const ID='prompt-rag-finetune', P='.m-'+ID;
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
const B=[['Behaviour or format?','Prompt','instructions, examples, a template','g',10,8],
 ['Your facts or fresh data?','RAG or tools','look up docs, call your systems','g',45,50],
 ['A new skill, at huge scale?','Fine-tune','train on thousands of examples','d',90,95]];
const bar=(x,y,v,lab,i)=>`${T(x,y+11,lab,'bs')}<rect x="${x+56}" y="${y}" width="190" height="12" rx="6" fill="var(--faint)"/><rect x="${x+56}" y="${y}" width="${1.9*v}" height="12" rx="6" fill="${v>80?'var(--fg)':'var(--green)'}" class="a-grow" style="--i:${i}"/>`;
const s0=`<svg class="dg" viewBox="0 0 1120 350" role="img" aria-label="Decision tree: behaviour or format leads to prompt; your facts lead to RAG or tools; a new skill at scale leads to fine-tune. Bars show relative cost and effort.">${DEFS()}
<g class="a-pop" style="--i:0">${R(0,138,200,74,'g')}${T(18,170,'What is','bt g')}${T(18,194,'missing?','bt g')}</g>
${T(874,18,'Relative cost and effort, illustrative','bs')}
${B.map(([q,k,s,c,cost,eff],j)=>{const y=34+j*112, cy=y+38;return `${AR(`M202 175 L236 175 L236 ${cy} L516 ${cy}`,j<2?'g':'',j+1,400)}
<g class="a-fade" style="--i:${j+1}">${T(256,cy-10,q,'bs l')}</g>
<g class="a-fade" style="--i:${j+2}">${R(520,y,320,76,c)}${T(540,y+32,k,j<2?'bt g':'bt m')}${T(540,y+56,s)}
${bar(874,y+14,cost,'cost',j+3)}${bar(874,y+44,eff,'effort',j+3)}</g>`;}).join('')}</svg>`;
const S=[['Prompt','minutes to try',['Write in our tone.','Use this PRD template.'],150],['RAG or tools','days to set up',['Answer from our help centre.','Pull this week\'s metrics.'],220],['Fine-tune','weeks, plus clean data',['Tag a million tickets in','our own categories, cheaply.'],290]];
const s1=`<svg class="dg" viewBox="0 0 1120 330" role="img" aria-label="Three rising steps: prompt, then RAG or tools, then fine-tune.">${DEFS()}
${S.map(([k,t,ex,h],j)=>{const x=j*400, y=320-h;return `<g class="a-fade" style="--i:${j*2}">${R(x,y,320,h,j===0?'g':(j===2?'d':''))}
${T(x+20,y+36,(j+1)+'. '+k,j===2?'bt m':'bt g')}${T(x+20,y+62,t,'bm')}${T(x+20,y+96,ex[0],'bs l')}${T(x+20,y+118,ex[1],'bs l')}</g>`;}).join('')}
${S.slice(0,2).map((st,j)=>{const x=j*400+326, y1=320-st[3]+40, y2=320-S[j+1][3]+40;return `${AR(`M${x} ${y1} C ${x+30} ${y1}, ${x+40} ${y2}, ${x+68} ${y2}`,j?'':'g',j*2+1,120)}${TC(x+36,y2-40,'not','bs '+(j?'':'g'))}${TC(x+36,y2-22,'enough?','bs '+(j?'':'g'))}`;}).join('')}</svg>`;
MOD({
  id:ID, title:'Prompt, RAG or fine-tune?', cluster:'agents', fits:[6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`${P} .bm{font-size:14px;fill:var(--muted)}`,
  slides:[
  {sec:'AI AGENTS', cls:'viz', title:`PROMPT, RAG <span class="g">OR FINE-TUNE?</span>`,
   body:`${s0}<div class="lead a-fade" style="--i:7;margin-top:10px;max-width:none">Most PM problems end at the <span class="g">first two boxes.</span> Fine-tuning is rare.</div>`},
  {sec:'AI AGENTS', cls:'viz', title:`TRY THEM <span class="g">IN THIS ORDER</span>`,
   body:`${s1}<div class="lead a-fade" style="--i:6;margin-top:12px;max-width:none">Climb a step only when <span class="g">your tests (evals) show</span> the step below is not enough.</div>`}
  ]
});
})();
