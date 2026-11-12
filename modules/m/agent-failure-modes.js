(function(){
/* shared SVG helpers, scoped to this module */
const ID='agent-failure-modes', P='.m-'+ID;
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
const IC={
 loop:`<path d="M38 16A16 16 0 1 0 40 28"/><path d="M39 5v11H28"/>`,
 tool:`<rect x="4" y="30" width="11" height="11" rx="2"/><rect x="19" y="30" width="11" height="11" rx="2"/><rect x="34" y="30" width="11" height="11" rx="2"/><path d="M24.5 6v16M19 17l5.5 5.5L30 17"/><path d="M36 33l7 5M43 33l-7 5"/>`,
 sure:`<circle cx="24" cy="24" r="18"/><path d="M15 24l6 6 12-13"/><path d="M40 6v6M40 16v1" />`,
 scope:`<rect x="5" y="14" width="26" height="26" rx="3" stroke-dasharray="4 4"/><path d="M20 27L43 6M33 6h10v10"/>`,
 game:`<path d="M10 5h20l8 8v30H10z"/><path d="M16 20h16M16 27h16M16 34h10"/><path d="M5 44L43 8"/>`};
const F=[['loop','Loops forever','Retries the same failing step again and again.','Step and budget limits.'],
 ['tool','Wrong tool','Searches the web when the answer is in your CRM.','Few tools, clear names.'],
 ['sure','Confident, wrong','Reports 12% growth from a broken query.','Check the source. Add a check.'],
 ['scope','Beyond scope','Asked to fix a typo, rewrites the whole PRD.','Tight scope, least access.'],
 ['game','Games the test','Deletes the failing test, then says "all pass".','Protect tests. Read the changes.']];
const tiles=F.map(([ic,k,ex,g],j)=>`<div class="fm-t a-fade" style="--i:${j}"><svg viewBox="0 0 48 48" class="fm-ic" aria-hidden="true">${IC[ic]}</svg>
  <div class="fm-k">${k}</div><p>${ex}</p><div class="fm-g"><span>Guard</span>${g}</div></div>`).join('');
const diff=[['f','tests/refund.test.js'],['-',"test('refund never exceeds the order total')"],['-','  expect(refund(120, 100)).toBe(100)'],['f','src/refund.js'],['0','  no change']];
MOD({
  id:ID, title:'How agents fail', cluster:'agents', fits:[6,7], minutes:5,
  scopes:{lite:[0], full:[0,1]},
  css:BASE+`
  ${P} .fm{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
  ${P} .fm-t{border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:20px 18px;display:flex;flex-direction:column;min-height:330px}
  ${P} .fm-ic{width:56px;height:56px;fill:none;stroke:var(--warn);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;margin-bottom:16px}
  ${P} .fm-k{font-family:var(--h);font-weight:800;text-transform:uppercase;letter-spacing:.03em;font-size:21px;line-height:1.05;color:var(--warn)}
  ${P} .fm-t p{color:var(--fg-2);font-size:16px;line-height:1.4;margin-top:10px;flex:1}
  ${P} .fm-g{min-height:92px;border-top:1px solid var(--line);padding-top:12px;margin-top:12px;color:var(--green);font-size:16px;line-height:1.35}
  ${P} .fm-g span{display:block;font-family:var(--m);font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px}
  ${P} .fm-x{display:grid;grid-template-columns:1fr auto 1.5fr;gap:2.5vw;align-items:center}
  ${P} .fm-chat{border:1px solid var(--green);border-radius:14px;padding:22px 24px;background:color-mix(in srgb,var(--green) 6%,transparent)}
  ${P} .fm-chat .who{font-family:var(--m);font-size:13px;color:var(--muted);margin-bottom:10px}
  ${P} .fm-chat .msg{font-size:22px;line-height:1.35}
  ${P} .fm-chat .ok{display:inline-flex;align-items:center;gap:8px;margin-top:14px;color:var(--green);font-family:var(--m);font-size:15px}
  ${P} .fm-arrow{font-family:var(--h);font-weight:800;text-transform:uppercase;color:var(--muted);font-size:15px;text-align:center;letter-spacing:.06em}
  ${P} .fm-arrow b{display:block;font-size:40px;color:var(--fg);line-height:1}
  ${P} .fm-diff{font-family:var(--m);font-size:15px;line-height:1.6;border:1px solid var(--warn);border-radius:12px;background:var(--surface);padding:16px 0;overflow:hidden}
  ${P} .fm-diff div{padding:2px 20px;white-space:pre}
  ${P} .fm-diff .f{color:var(--muted);margin-top:6px} ${P} .fm-diff .f:first-child{margin-top:0}
  ${P} .fm-diff .m{background:color-mix(in srgb,var(--warn) 12%,transparent);color:var(--warn)}
  ${P} .fm-diff .z{color:var(--fg-2)}`,
  slides:[
  {sec:'AGENT SAFETY', cls:'viz', title:`FIVE WAYS <span class="w">AGENTS FAIL</span>`,
   body:`<div class="fm">${tiles}</div><div class="lead a-fade" style="--i:6;margin-top:18px;max-width:none">Each failure has <span class="g">a cheap guard.</span> Add the guard before you add autonomy.</div>`},
  {sec:'AGENT SAFETY', cls:'viz', title:`THE TEST <span class="w">THAT VANISHED</span>`,
   body:`<div class="fm-x"><div class="fm-chat a-fade" style="--i:0"><div class="who">agent summary</div><div class="msg">Fixed the refund bug. All tests pass.</div><div class="ok">&#10003; tests passing</div></div>
     <div class="fm-arrow a-fade" style="--i:2"><b>→</b>but the changes</div>
     <div class="fm-diff a-fade" style="--i:3">${diff.map(([t,l])=>`<div class="${t==='f'?'f':t==='-'?'m':'z'}">${t==='-'?'- ':''}${l}</div>`).join('')}</div></div>
     <div class="lead a-fade" style="--i:5;margin-top:30px;max-width:none">The summary says done. The changes show it <span class="w">deleted the test.</span> <span class="g">Read the changes, not the summary.</span></div>`}
  ]
});
})();
