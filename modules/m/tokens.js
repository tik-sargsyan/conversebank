MOD({
  id:'tokens', title:'Text becomes tokens', cluster:'foundations', fits:[1], minutes:4,
  scopes:{lite:[0], full:[0,1]},
  css:`
  .m-tokens .tk-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
  .m-tokens .tk{font-family:var(--m);font-size:clamp(24px,2.6vw,36px);padding:8px 12px;border-radius:8px;white-space:pre;line-height:1.2;color:var(--fg)}
  .m-tokens .tk.a{background:color-mix(in srgb,var(--green) 20%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--green) 55%,transparent)}
  .m-tokens .tk.b{background:var(--c-232327);box-shadow:inset 0 0 0 1px var(--dim)}
  .m-tokens .tk.sm{font-size:clamp(20px,2vw,28px);padding:6px 10px}
  .m-tokens .tk-in{width:100%;background:var(--surface);border:1px solid var(--line);border-radius:10px;color:var(--fg);font-family:var(--m);font-size:17px;padding:12px 14px;outline:none}
  .m-tokens .tk-in:focus{border-color:var(--green)}
  .m-tokens .tk-stats{display:flex;gap:44px;align-items:flex-end;margin-top:20px}
  .m-tokens .tk-stats .stat{font-size:clamp(56px,6.5vw,92px)}
  .m-tokens .tk-stats .stat.w{color:var(--fg)}
  .m-tokens .tk-rule{border-left:4px solid var(--green);background:var(--surface);border-radius:10px;padding:14px 18px;font-size:18px;line-height:1.45}
  .m-tokens .tk-rule b{color:var(--green)}
  .m-tokens .tk-cmp{display:grid;grid-template-columns:170px 1fr 120px;gap:18px;align-items:center;padding:18px 0;border-bottom:1px solid var(--line)}
  .m-tokens .tk-cmp .k{font-family:var(--h);font-weight:800;text-transform:uppercase;font-size:20px;letter-spacing:.04em}
  .m-tokens .tk-cmp .n{font-family:var(--h);font-weight:900;font-size:44px;color:var(--green);text-align:right}
  .m-tokens .tk-cmp .n small{display:block;font-family:var(--m);font-weight:400;font-size:13px;color:var(--muted)}
  .slide.active.m-tokens .tk{animation:m-pop .4s cubic-bezier(.3,1.4,.4,1) both;animation-delay:calc(var(--i,0)*70ms + 200ms)}
  @media (prefers-reduced-motion:reduce){.slide.active.m-tokens .tk{animation:none}}
  `,
  slides:[
  {sec:'HOW AI WORKS', cls:'viz', title:`MODELS READ <span class="g">TOKENS</span>, NOT WORDS`,
   body:`<div class="tk-row tk-main"></div>
     <div class="tk-stats"><div><div class="stat tk-n">0</div><div class="stat-cap">tokens</div></div><div><div class="stat w tk-wn">0</div><div class="stat-cap">words</div></div>
       <div class="tk-rule" style="flex:1;margin-bottom:6px">Rule of thumb: <b>1 token ≈ 0.75 English words</b> (approximate).<br>1,000 tokens ≈ 750 words.</div></div>
     <input class="tk-in" type="text" value="Write a PRD for the onboarding redesign." aria-label="Type a sentence to split into rough tokens" style="margin-top:22px">
     <div class="src" style="margin-top:8px"><b>Note:</b> rough split for teaching, not a real tokenizer · a dot marks a space</div>`,
   init(el){
     const PRE=['re','un','pre'], SUF=['ing','tion','ed','ly','er','s'];
     function split(text){
       const raw=text.match(/\s?[A-Za-z]+|\s?\d{1,3}|\s?[^\sA-Za-z\d]{1,2}|\s+/g)||[];
       const out=[];
       raw.forEach(t=>{
         const sp=t.startsWith(' ')?' ':'', w=t.trim();
         if(!/^[A-Za-z]+$/.test(w)){
           if(/[^\x00-\x7F]/.test(w)&&w.length>2){ for(let i=0;i<w.length;i+=2) out.push((i===0?sp:'')+w.slice(i,i+2)); }
           else out.push(t);
           return;
         }
         if(w.length<=6){ out.push(t); return; }
         const p=PRE.find(x=>w.toLowerCase().startsWith(x)&&w.length-x.length>=4);
         const s=SUF.find(x=>w.toLowerCase().endsWith(x)&&w.length-x.length>=4);
         if(p){ out.push(sp+w.slice(0,p.length)); out.push(w.slice(p.length)); }
         else if(s){ out.push(sp+w.slice(0,w.length-s.length)); out.push(w.slice(w.length-s.length)); }
         else { const h=Math.ceil(w.length/2); out.push(sp+w.slice(0,h)); out.push(w.slice(h)); }
       });
       return out.filter(t=>t.length);
     }
     const row=el.querySelector('.tk-main'), n=el.querySelector('.tk-n'), wn=el.querySelector('.tk-wn'), inp=el.querySelector('.tk-in');
     function render(){
       const v=inp.value.slice(0,90), toks=split(v);
       row.innerHTML=toks.map((t,i)=>`<span class="tk ${i%2?'b':'a'}" style="--i:${i}">${t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/ /g,'·')}</span>`).join('');
       n.textContent=toks.length; wn.textContent=(v.trim().match(/\S+/g)||[]).length;
     }
     inp.addEventListener('input',render);
     el.addEventListener('keydown',e=>e.stopPropagation());
     render();
   }},
  {sec:'HOW AI WORKS', cls:'viz', title:`SAME MEANING, <span class="g">MORE TOKENS</span>`,
   body:`<div class="tk-cmp" style="border-top:1px solid var(--line)"><div class="k">English</div><div class="tk-row tk-en"></div><div class="n tk-en-n"></div></div>
     <div class="tk-cmp"><div class="k">Armenian</div><div class="tk-row tk-hy"></div><div class="n tk-hy-n"></div></div>
     <div class="lead" style="margin-top:26px;max-width:none">Same question, <span class="g">more blocks</span>. More tokens means <span class="w">higher cost</span>, slower answers, and less room in its working memory (context window).</div>
     <div class="src" style="margin-top:10px"><b>Illustrative split.</b> Test your own language in a real token counter.</div>`,
   init(el){
     const EN=['Hello',',',' how',' are',' you','?'];
     const HY=['Բա','րև',',',' ին','չպ','ե՞','ս',' ե','ս'];
     const put=(sel,arr)=>{ el.querySelector(sel).innerHTML=arr.map((t,i)=>`<span class="tk sm ${i%2?'b':'a'}" style="--i:${i}">${t.replace(/ /g,'·')}</span>`).join(''); };
     put('.tk-en',EN); put('.tk-hy',HY);
     el.querySelector('.tk-en-n').innerHTML=EN.length+'<small>blocks</small>';
     el.querySelector('.tk-hy-n').innerHTML=HY.length+'<small>blocks</small>';
   }}
  ]
});
