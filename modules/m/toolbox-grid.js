/* Reads window.TOOLBOX (assets/toolbox.js). One list feeds these slides, the hub Toolbox page and the resource pack. */
MOD({
  id:'toolbox-grid', title:'Toolbox: skills, connectors, MCP and plugins by PM area (live data)', cluster:'claude', fits:[3,4], minutes:4,
  scopes:{skills:[0], 'os-skills':[1], connectors:[2], 'os-mcp':[3], plugins:[4], lite:[2], full:[0,1,2,3,4]},
  css:`
  .m-toolbox-grid .tg{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:4px}
  .m-toolbox-grid .tg-a{border:1px solid var(--line-2);border-radius:12px;padding:10px 12px;background:var(--surface);display:flex;flex-direction:column;gap:6px}
  .m-toolbox-grid .tg-k{font:800 13px var(--h);letter-spacing:.08em;text-transform:uppercase;color:var(--green)}
  .m-toolbox-grid .tg-c{display:flex;flex-wrap:wrap;gap:5px}
  .m-toolbox-grid .tg-c span{font:500 12.5px var(--b);border:1px solid var(--line-2);border-radius:999px;padding:2px 9px;color:var(--fg)}
  .m-toolbox-grid .tg-c span.os{border-color:var(--green)}
  .m-toolbox-grid .tg-c span.s-you{background:var(--green);color:var(--on-accent);border-color:var(--green)}
  .m-toolbox-grid .tg-c span.s-github{border:1.5px solid var(--green)}
  .m-toolbox-grid .tg-c span.s-marketplace{border:1.5px dashed var(--fg-2)}
  .m-toolbox-grid .tg-key i.you{background:var(--green)} .m-toolbox-grid .tg-key i.mk{border-style:dashed;border-color:var(--fg-2)}
  .m-toolbox-grid .tl{display:grid;grid-template-columns:repeat(2,1fr);gap:8px 18px;margin-top:4px}
  .m-toolbox-grid .tl-r{display:grid;grid-template-columns:170px 1fr;gap:12px;align-items:baseline;border-bottom:1px solid var(--line);padding:7px 0}
  .m-toolbox-grid .tl-n{font:800 15px var(--h);color:var(--fg)} .m-toolbox-grid .tl-n small{display:block;font:500 11px var(--m);color:var(--muted);letter-spacing:.04em;margin-top:2px}
  .m-toolbox-grid .tl-w{font-size:14px;color:var(--fg-2);line-height:1.35}
  .m-toolbox-grid .tl-u{display:block;font:12.5px var(--m);color:var(--green);text-decoration:none;margin-top:3px;word-break:break-all}
  .m-toolbox-grid .tl-u:hover{text-decoration:underline}
  .m-toolbox-grid .tg-key{display:flex;gap:18px;font-size:13px;color:var(--muted);margin-top:10px}
  .m-toolbox-grid .tg-key i{display:inline-block;width:18px;height:10px;border:1px solid var(--green);border-radius:5px;margin-right:6px;vertical-align:0}
  .m-toolbox-grid .pl{display:grid;grid-template-columns:1.1fr 1fr;gap:28px;align-items:start}
  .m-toolbox-grid .pl-box{border:1px solid var(--green);border-radius:14px;padding:14px 16px;background:color-mix(in srgb,var(--green) 6%,var(--surface))}
  .m-toolbox-grid .pl-box .tg-k{margin-bottom:8px}
  .m-toolbox-grid .pl-in{display:flex;flex-wrap:wrap;gap:8px}
  .m-toolbox-grid .pl-in span{font:600 13px var(--m);background:var(--bg);border:1px solid var(--line-2);border-radius:8px;padding:6px 10px;color:var(--fg)}
  .slide.active.m-toolbox-grid .tg-a,.slide.active.m-toolbox-grid .tl-r{animation:m-fade .45s ease both;animation-delay:calc(var(--i)*50ms + 120ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-toolbox-grid *{animation:none!important}}
  @media (max-width:900px){.m-toolbox-grid .tg,.m-toolbox-grid .tl,.m-toolbox-grid .pl{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'SKILLS', cls:'viz', title:`A SKILL FOR <span class="g">EVERY PART OF THE JOB</span>`,
   body:`<div class="tg" data-v="skills"></div><div class="tg-key"><span><i class="you"></i>built by you</span><span><i></i>open source on GitHub</span><span><i class="mk"></i>plugin marketplace</span><span>Full list: the Toolbox page</span></div>`,
   init(el){ TBX.grid(el,'skills'); }},
  {sec:'SKILLS', cls:'viz', title:`OPEN-SOURCE <span class="g">SKILLS</span>`,
   body:`<div class="sub" style="margin-top:0">Free, ready to copy. Read the SKILL.md before you install anything.</div><div class="tl" data-v="os-skills"></div>`,
   init(el){ TBX.list(el,e=>e.type==='skill'&&/open source|free/.test(e.cost)&&!e.ours); }},
  {sec:'CONNECTORS', cls:'viz', title:`A TOOL FOR <span class="g">EVERY PART OF THE JOB</span>`,
   body:`<div class="tg" data-v="connectors"></div><div class="tg-key"><span><i></i>open source or free</span><span>Full list: the Toolbox page on the course hub</span></div>`,
   init(el){ TBX.grid(el,'connectors'); }},
  {sec:'CONNECTORS', cls:'viz', title:`OPEN-SOURCE <span class="g">MCP AND TOOLS</span>`,
   body:`<div class="sub" style="margin-top:0">No company tools? These are free, and many you can run yourself.</div><div class="tl" data-v="os-mcp"></div>`,
   init(el){ TBX.list(el,e=>(e.type==='mcp'||e.type==='tool'||e.type==='connector')&&/open source/.test(e.cost)); }},
  {sec:'PLUGINS', cls:'viz', title:`PLUGINS: ONE INSTALL, <span class="g">A WHOLE TOOLKIT</span>`,
   body:`<div class="pl"><div class="pl-box"><div class="tg-k">A plugin bundles</div><div class="pl-in"><span>skills</span><span>MCP connectors</span><span>hooks</span><span>agents</span><span>commands</span></div>
     <div class="tl-w" style="margin-top:12px">Your team installs it once from a marketplace. Its skills are named with the plugin in front, so they never clash.</div></div>
     <div class="tl" style="grid-template-columns:1fr" data-v="plugins"></div></div>`,
   init(el){ TBX.list(el,e=>e.type==='plugin',6); }}
  ]
});
window.TBX={
  AREAS:[['discovery','Discovery'],['strategy','Strategy'],['execution','Execution'],['data','Data'],['reporting','Reporting'],['comms','Comms'],['visuals','Visuals'],['video','Video'],['build','Build']],
  data(){ return window.TOOLBOX||[]; },
  esc(s){ return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); },
  grid(el,kind){
    const D=this.data().filter(e=>kind==='skills'?(e.type==='skill'||(e.type==='plugin'&&e.name!=='Official plugin marketplace')):e.type!=='skill'&&e.type!=='api');
    el.querySelector('[data-v]').innerHTML=this.AREAS.map(([k,t],i)=>{
      const items=D.filter(e=>(e.areas||[]).includes(k)).sort((a,b)=>(b.pick?1:0)-(a.pick?1:0));
      const pickSrc=kind==='skills'?['you','github','marketplace'].flatMap(src=>items.filter(e=>e.src===src).slice(0,src==='you'?2:1)):items.slice(0,5);
      return `<div class="tg-a" style="--i:${i}"><div class="tg-k">${t}</div><div class="tg-c">${pickSrc.map(e=>`<span class="${kind==='skills'?'s-'+(e.src||'gh'):(/open source/.test(e.cost)?'os':'')}">${this.esc(e.name)}</span>`).join('')||'<span>coming soon</span>'}</div></div>`;
    }).join('');
  },
  list(el,f,max){
    const D=this.data().filter(f).slice(0,max||10);
    el.querySelector('[data-v]').innerHTML=D.map((e,i)=>`<div class="tl-r" style="--i:${i}"><div class="tl-n">${this.esc(e.name)}<small>${this.esc(e.type)} · ${this.esc(e.cost)}</small></div><div class="tl-w">${this.esc(e.what)}${e.link?`<a class="tl-u" href="${this.esc(e.link)}" target="_blank" rel="noopener">${this.esc(e.link.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,''))}</a>`:''}</div></div>`).join('')||'<div class="tl-w">Toolbox data not loaded.</div>';
  }
};
