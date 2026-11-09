/* ACA X visual modules - registry + small helpers.
   Each module file in modules/m/<id>.js calls MOD({...}). A module is 1 to 3 slides in the
   deck SLIDES format, plus meta. Decks pull one in with {module:'id', scope:'lite'|'full'}.

   MOD({
     id:'world-dots', title:'Who builds with AI', cluster:'foundations',
     fits:[1], minutes:3,                    // sessions it fits, talk time for the full scope
     scopes:{lite:[0], full:[0,1]},          // slide indexes per scope (full = all when omitted)
     verify: a list of claims to check before class, shown in review mode, never on the slide
     css:`...`,                              // injected once, prefix every rule with .m-<id>
     slides:[{sec,title,body,note,vis,cls,center,init(el){}}]
   });
   Rules: the default (no animation) state is the FINAL state, so print and PDF look right.
   Animations play when the slide gets .active. init(el) runs once at render. */
window.MODULES = window.MODULES || {};
window.MODULE_ORDER = window.MODULE_ORDER || [];
window.MOD = function (m) {
  if (!m || !m.id) return;
  MODULES[m.id] = m;
  MODULE_ORDER.push(m.id);
  if (m.css && !document.querySelector('style[data-mod="' + m.id + '"]')) {
    const st = document.createElement('style');
    st.dataset.mod = m.id;
    st.textContent = m.css;
    document.head.appendChild(st);
  }
};

window.VIZ = {
  // SVG element factory: VIZ.s('circle',{cx:1,cy:2,r:3}, parent)
  s(tag, attrs, parent) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  },
  // Run fn every time the slide becomes active (for JS-driven builds and replays)
  onShow(el, fn) {
    let was = false;
    new MutationObserver(() => {
      const on = el.classList.contains('active');
      if (on && !was) fn();
      was = on;
    }).observe(el, { attributes: true, attributeFilter: ['class'] });
    if (el.classList.contains('active')) { was = true; fn(); }
  },
  fmt(n) { return n.toLocaleString('en-US'); },
  // reduced motion, or a static thumbnail (view.html?static=1): show final states, skip JS builds
  reduced: matchMedia('(prefers-reduced-motion: reduce)').matches || /[?&]static=1/.test(location.search)
};
