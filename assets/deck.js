/* ACA X deck engine - renders window.SLIDES into a keyboard-navigable deck.
   Each page defines: window.SLIDES = [ {sec,title,center?,body,note,vis}, ... ] */
(function(){
  // ?theme=<name> loads themes/_derive.css (greys rebuilt from the base tokens), then themes/<name>.css.
  // Without it the exact ACA defaults in deck.css apply.
  const theme = new URLSearchParams(location.search).get('theme');
  if (theme && /^[\w-]+$/.test(theme)) {
    ['_derive', theme].forEach(n => {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = new URL('themes/' + n + '.css', document.currentScript.src).href;
      document.head.appendChild(l);
    });
  }
  // {module:'id', scope:'lite'|'full'} entries expand to that module's slides (see modules/module.js)
  const MODS = window.MODULES || {}, SLIDES = [];
  (window.SLIDES || []).forEach(s=>{
    if(!s || !s.module){ SLIDES.push(s); return; }
    const m=MODS[s.module];
    if(!m){ console.warn('module not loaded: '+s.module); return; }
    const pick=(m.scopes&&m.scopes[s.scope||'full'])||m.slides.map((_,k)=>k);
    pick.forEach(k=>SLIDES.push(Object.assign({}, m.slides[k], {_mod:m.id}, s.sec?{sec:s.sec}:{})));  // entry sec overrides the library kicker
  });
  window.SLIDES = SLIDES;
  const deck = document.getElementById('deck');
  if(!document.querySelector('.by')){var by=document.createElement('div');by.className='by';by.textContent='Tigran Sargsyan';document.body.appendChild(by);}
  SLIDES.forEach(s=>{
    const el=document.createElement('section');
    el.className='slide'+(s.center?' center':'')+(s.cls?' '+s.cls:'')+(s._mod?' m-'+s._mod:'');
    el.innerHTML=`<div class="wrap"><div class="kicker">${s.sec||''}</div>`+
      `<h1 class="title">${s.title||''}</h1>`+
      `<div class="body">${s.body||''}</div></div>`;
    deck.appendChild(el);
    if(typeof s.init==='function'){ try{ s.init(el); }catch(e){ console.error(s._mod||'slide', e); } }
  });
  const slides=[...deck.querySelectorAll('.slide')];
  const totEl=document.getElementById('tot'); if(totEl) totEl.textContent=slides.length;
  let i=0;
  const prog=document.getElementById('prog'), cur=document.getElementById('cur');
  const notes=document.getElementById('notes'), noteText=document.getElementById('noteText'), visText=document.getElementById('visText');
  function show(n){
    i=Math.max(0,Math.min(slides.length-1,n));
    slides.forEach((s,k)=>s.classList.toggle('active',k===i));
    if(prog) prog.style.width=((i+1)/slides.length*100)+'%';
    if(cur) cur.textContent=i+1;
    if(noteText) noteText.textContent=(SLIDES[i]&&SLIDES[i].note)||'';
    if(visText) visText.innerHTML=(SLIDES[i]&&SLIDES[i].vis)?('<b>Visual:</b> '+SLIDES[i].vis):'';
    location.hash=(i+1);
  }
  function next(){show(i+1)} function prev(){show(i-1)}
  const nb=document.getElementById('next'), pb=document.getElementById('prev');
  if(nb) nb.onclick=next; if(pb) pb.onclick=prev;
  addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();next();}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();prev();}
    else if(e.key==='Home'){show(0);}
    else if(e.key==='End'){show(slides.length-1);}
    else if(e.key.toLowerCase()==='n'){notes&&notes.classList.toggle('on');}
    else if(e.key.toLowerCase()==='f'){if(!document.fullscreenElement)document.documentElement.requestFullscreen();else document.exitFullscreen();}
  });
  const start=parseInt(location.hash.replace('#',''))||1;
  show(start-1);
})();
