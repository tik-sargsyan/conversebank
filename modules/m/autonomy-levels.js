(function(){
/* shared SVG helpers, scoped to this module */
const ID='autonomy-levels', P='.m-'+ID;
const T=(x,y,t,c,a)=>`<text x="${x}" y="${y}" class="${c||'bs'}" ${a||''}>${t}</text>`;
const TC=(x,y,t,c)=>T(x,y,t,c,'text-anchor="middle"');
const R=(x,y,w,h,c,a)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx ${c||''}" ${a||''}/>`;
const AR=(d,c,i,len)=>`<path d="${d}" class="ar ${c||''} a-draw" style="--i:${i||0};--len:${len||600}" marker-end="url(#${ID}-${c||'n'})"/>`;
const DEFS=`<defs>${['n','g','w'].map(c=>`<marker id="${ID}-${c}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="mk ${c}"/></marker>`).join('')}</defs>`;
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
const L=[['Suggests','Ideas in chat.','You do the work.','do it all',100],
 ['Drafts for you','Writes the PRD draft.','You edit and send.','edit',78],
 ['Acts with approval','Prepares the email.','Asks before it sends.','approve',52],
 ['Acts and reports','Sends the weekly update.','Tells you after.','review after',28],
 ['Fully autonomous','Runs the workflow alone.','No one checks each step.','set the goal',8]];
const steps=L.map(([n,d1,d2,h,hw],j)=>{const x=j*224, y=150-j*36, w=208, on=j===2;
  return `<g class="a-fade" style="--i:${j}">${R(x,y,w,346-y,on?'g':'')}
  ${T(x+16,y+28,'L'+(j+1),'bm lv')}${T(x+16,y+56,n,'bt nm')}${T(x+16,y+82,d1,'bs l')}${T(x+16,y+102,d2)}
  ${T(x+16,282,'You: '+h,'bs l')}
  <rect x="${x+16}" y="296" width="${(w-32)*hw/100}" height="10" rx="5" fill="var(--fg)"/>
  <rect x="${x+16}" y="314" width="${(w-32)*(100-hw)/100+ (hw===100?6:0)}" height="10" rx="5" fill="var(--green)"/></g>`;}).join('');
const s0=`<svg class="dg" viewBox="0 0 1120 350" role="img" aria-label="Staircase of five autonomy levels. The human share of work shrinks as the agent share grows.">${steps}</svg>`;
const rows=[['Summarise 20 user interviews',4,'Read only. Easy to check.',''],['Draft the Q3 roadmap doc',2,'Your judgement is the product.',''],['Reply to an angry customer',3,'You cannot unsend an email.',''],['Post the weekly Slack update',4,'Same format, low stakes.',''],['Change live prices',1,'Money and trust at stake.','w']];
const X=k=>380+(k-1)*100;
const s1=`<svg class="dg" viewBox="0 0 1120 330" role="img" aria-label="Five PM tasks, each with a suggested autonomy level from 1 to 5.">
${[1,2,3,4,5].map(k=>TC(X(k),18,'L'+k,'bm lv'))}
${rows.map(([t,k,why,c],j)=>{const y=62+j*58;return `<g class="a-fade" style="--i:${j+1}">${T(0,y+5,t,'bs l big')}
 <line x1="${X(1)}" y1="${y}" x2="${X(5)}" y2="${y}" stroke="var(--line)" stroke-width="2"/>
 ${[1,2,3,4,5].map(q=>`<circle cx="${X(q)}" cy="${y}" r="5" fill="var(--c-2a2a2e)"/>`).join('')}
 <line x1="${X(1)}" y1="${y}" x2="${X(k)}" y2="${y}" stroke="${c?'var(--warn)':'var(--green)'}" stroke-width="3"/>
 <circle cx="${X(k)}" cy="${y}" r="11" fill="${c?'var(--warn)':'var(--green)'}" class="a-pop" style="--i:${j+3}"/>
 ${T(830,y+5,why,c?'bs w':'bs')}</g>`;}).join('')}</svg>`;
MOD({
  id:ID, title:'Five levels of autonomy', cluster:'agents', fits:[1,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .bm.lv{fill:var(--green);font-weight:600;font-size:15px}
  ${P} .bt.nm{font-size:17px}
  ${P} .bs.big{font-size:16px}`,
  slides:[
  {sec:'AI AGENTS', cls:'viz', title:`FIVE LEVELS OF <span class="g">AUTONOMY</span>`,
   body:`${s0}<div class="legend" style="margin-top:14px"><span><i class="l"></i>your share of the work</span><span><i class="g"></i>the agent's share</span><span style="margin-left:auto">A teaching framework, inspired by self-driving car levels. Not an industry standard.</span></div>`},
  {sec:'AI AGENTS', cls:'viz', title:`MATCH THE LEVEL <span class="g">TO THE RISK</span>`,
   body:`${s1}<div class="lead a-fade" style="--i:8;margin-top:10px;max-width:none">Higher is not better. Pick <span class="g">the highest level you can still check.</span></div>
   <div class="note-s" style="margin-top:6px">Illustrative. Your team sets its own levels.</div>`}
  ]
});
})();
