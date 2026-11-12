MOD({
  id:'open-apis', title:'Open APIs: free live data your app can call', cluster:'pm', fits:[8], minutes:3,
  scopes:{lite:[0], full:[0]},
  css:`
  .oa{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.5fr);gap:34px;align-items:center;max-width:1140px;margin:14px auto 0}
  .oa-flow{display:flex;flex-direction:column;align-items:center;gap:8px}
  .oa-n{width:100%;border:1px solid var(--line-2);border-radius:14px;padding:14px 16px;background:var(--surface);text-align:center}
  .oa-n b{display:block;font:800 clamp(16px,1.6vw,20px) var(--h);text-transform:uppercase;color:var(--fg)}
  .oa-n span{font-size:clamp(13px,1.3vw,16px);color:var(--fg-2)}
  .oa-n.hot{border-color:var(--accent)}.oa-n.hot b{color:var(--accent)}
  .oa-a{font:600 12px var(--m);color:var(--accent);letter-spacing:.1em;display:flex;align-items:center;gap:8px}
  .oa-a:before{content:'';width:2px;height:18px;background:var(--accent);display:block}
  .oa-list{display:flex;flex-direction:column;gap:10px}
  .oa-r{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:14px;align-items:baseline;border-bottom:1px solid var(--line);padding-bottom:9px}
  .oa-r b{font:800 clamp(15px,1.5vw,19px) var(--h);color:var(--fg);text-transform:uppercase}
  .oa-r i{display:block;font:normal 12px var(--m);color:var(--accent);margin-top:2px}
  .oa-r span{font-size:clamp(13px,1.35vw,17px);color:var(--fg-2);line-height:1.4}
  .oa-r.ai{border-bottom:1px dashed var(--line-2)}.oa-r.ai b{color:var(--fg-2)}
  .oa-hub{display:block;text-decoration:none;border:2px solid var(--accent);border-radius:14px;padding:12px 16px;margin-top:6px;background:color-mix(in srgb,var(--accent) 10%,transparent)}
  .oa-hub b{display:block;font:800 clamp(16px,1.6vw,20px) var(--h);text-transform:uppercase;color:var(--accent)}
  .oa-hub i{display:block;font:600 clamp(13px,1.3vw,16px) var(--m);font-style:normal;color:var(--fg);margin:2px 0}
  .oa-hub span{font-size:clamp(12px,1.2vw,15px);color:var(--fg-2)}
  .oa-more{font-size:clamp(13px,1.3vw,16px);color:var(--muted);margin-top:4px}
  .oa-more i{font-style:normal;font-family:var(--m);color:var(--accent)}
  .oa-rule{max-width:1140px;margin:20px auto 0;text-align:center;font-size:clamp(14px,1.45vw,18px);color:var(--fg-2)}
  .oa-rule b{color:var(--fg)}
  @media (max-width:900px){.oa{grid-template-columns:1fr}}
  `,
  slides:[
  {sec:'OPEN APIS', cls:'viz', title:`FREE LIVE DATA: <span class="g">OPEN APIS</span>`,
   body:`<div class="oa">
     <div class="oa-flow">
       <div class="oa-n"><b>Your app</b><span>asks a question</span></div>
       <div class="oa-a">REQUEST</div>
       <div class="oa-n hot"><b>Open API</b><span>a public service, free, often no key</span></div>
       <div class="oa-a">ANSWER</div>
       <div class="oa-n"><b>Live data</b><span>shown in your app</span></div>
     </div>
     <div class="oa-list">
       <div class="oa-r"><div><b>Weather</b><i>open-meteo.com</i></div><span>Forecast for any city. Plan a site visit, an event, a delivery day.</span></div>
       <div class="oa-r"><div><b>Exchange rates</b><i>frankfurter.dev</i></div><span>Daily rates from central banks. Convert prices and budgets.</span></div>
       <div class="oa-r"><div><b>Public holidays</b><i>date.nager.at</i></div><span>Holidays by country and year. Plan deadlines and releases.</span></div>
       <div class="oa-r ai"><div><b>AI models</b><i>console.anthropic.com · platform.openai.com</i></div><span>Claude and OpenAI work the same way: your app sends text, gets an answer. Paid: needs a key and credit.</span></div>
       <a class="oa-hub" href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener"><b>Find more free APIs</b><i>github.com/public-apis/public-apis</i><span>The biggest free API list, by topic. Open source.</span></a>
     </div>
   </div>
   <div class="oa-rule">Pick <b>one free API</b> that makes your magic moment better. Read its limits. Free plans are often <b>non-commercial only</b>.</div>`}
  ]
});
