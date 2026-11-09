(function(){
/* shared SVG helpers, scoped to this module */
const ID='chatbot-vs-agent', P='.m-'+ID;
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
const steps=[['GOAL','Weekly metrics update, ready by Monday'],['PLAN','Pick 4 metrics, compare to last week, draft'],['TOOL','query_dashboard(last 7 days)'],['TOOL','read_doc(last week\'s update)'],['CHECK','Totals match the dashboard? Yes'],['DONE','Draft is in your doc. You review it.']];
const right=steps.map(([k,t],j)=>{const y=48+j*52, last=j===5||j===0;
  return `<g class="a-fade" style="--i:${j+3}">${R(616,y,504,42,last?'g':'')}<circle cx="592" cy="${y+21}" r="7" class="${last?'dotg':'doto'}"/>${T(634,y+27,k,'bm k')}${T(712,y+27,t,'bs l')}</g>`;}).join('');
const s0=`<svg class="dg" viewBox="0 0 1120 368" role="img" aria-label="Left: one question, one answer. Right: goal, plan, two tool calls, a check, finished work.">${DEFS()}
<g class="a-fade" style="--i:0">${T(0,22,'Chatbot','bt m')}${T(110,22,'one turn','bs')}</g>
<g class="a-fade" style="--i:1">${R(0,52,470,56)}${T(18,86,'You: How do I prepare the weekly metrics update?','bs l')}</g>
${AR('M235 110 L235 140','',1,30)}
<g class="a-fade" style="--i:2">${R(0,146,470,128)}${T(18,174,'AI: Here are 5 steps.','bs l')}${T(18,200,'1. Pull the numbers from your dashboard.')}${T(18,224,'2. Compare them with last week.')}${T(18,248,'3. Write three highlights and one risk...')}</g>
${AR('M235 276 L235 306','',2,30)}
<g class="a-fade" style="--i:3">${R(0,312,470,52,'d')}${TC(235,344,'You still do the work','bt m')}</g>
<line x1="530" y1="0" x2="530" y2="364" stroke="var(--line)" stroke-width="1.5"/>
<g class="a-fade" style="--i:2">${T(570,22,'Agent','bt g')}${T(660,22,'many steps, one goal','bs')}</g>
<line x1="592" y1="74" x2="592" y2="320" stroke="var(--green)" stroke-opacity=".4" stroke-width="2"/>
${right}</svg>`;
const nodes=[[300,64,'Plan','what next?'],[480,210,'Act','call a tool'],[300,356,'Observe','read the result'],[120,210,'Check','goal met?']];
const s1=`<svg class="dg" viewBox="0 0 600 420" role="img" aria-label="Agent loop: plan, act, observe, check, around a goal.">${DEFS()}
<circle cx="300" cy="210" r="146" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 8"/>
<g class="cv-orbit"><circle cx="403" cy="107" r="9" fill="var(--green)" style="filter:drop-shadow(0 0 8px var(--green))"/></g>
<circle cx="300" cy="210" r="62" class="bx g"/>${TC(300,206,'Goal','bt g')}${TC(300,228,'finished work','bs')}
${nodes.map(([x,y,k,s],j)=>`<g class="a-pop" style="--i:${j}">${R(x-74,y-30,148,60)}${TC(x,y-4,k,'bt')}${TC(x,y+17,s)}</g>`).join('')}</svg>`;
MOD({
  id:ID, title:'Answering vs doing', cluster:'agents', fits:[1,6], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .bm.k{fill:var(--green);font-weight:600}
  ${P} .dotg{fill:var(--green)} ${P} .doto{fill:var(--bg);stroke:var(--green);stroke-width:2}
  ${P} .cv-loop{display:grid;grid-template-columns:1.1fr 1fr;gap:4vw;align-items:center}
  ${P} .cv-loop svg{max-height:56vh}
  ${P} .cv-orbit{transform-origin:300px 210px}
  .slide.active${P} .cv-orbit{animation:cv-spin 5s linear infinite}
  @keyframes cv-spin{to{transform:rotate(360deg)}}
  @media (prefers-reduced-motion:reduce){.slide.active${P} .cv-orbit{animation:none}}
  ${P} .cv-stop{border-left:4px solid var(--green);background:var(--surface);border-radius:8px;padding:12px 16px;margin-top:14px;font-size:17px;line-height:1.4}
  ${P} .cv-stop b{font-family:var(--h);text-transform:uppercase;letter-spacing:.04em;color:var(--green)}
  ${P} .cv-stop.n{border-left-color:var(--fg)} ${P} .cv-stop.n b{color:var(--fg)}`,
  slides:[
  {sec:'AI AGENTS', cls:'viz', title:`ANSWERING VS <span class="g">DOING</span>`,
   body:`${s0}<div class="lead a-fade" style="--i:9;margin-top:16px;max-width:none">Same task. A chatbot gives you <b>instructions</b>. An agent gives you <span class="g">the finished work, checked.</span></div>`},
  {sec:'AI AGENTS', cls:'viz', title:`AN AGENT IS <span class="g">A LOOP</span>`,
   body:`<div class="cv-loop"><div>${s1}</div><div>
     <div class="lead">It repeats <span class="g">plan, act, observe, check</span> until one of two things happens.</div>
     <div class="cv-stop a-fade" style="--i:5"><b>Goal met</b><br>It stops and shows you the result.</div>
     <div class="cv-stop n a-fade" style="--i:6"><b>Limit hit</b><br>Max steps, time or budget. It stops and asks you.</div>
     <div class="note-s a-fade" style="--i:7;margin-top:16px">A chatbot answers once and stops. The loop is the difference.</div></div></div>`}
  ]
});
})();
