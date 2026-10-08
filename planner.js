/*PLANNER-START*/
var PLN_NODES={
"ohare":["O'Hare station (Blue Line)",41.9742,-87.9073],
"jeffpark":["Jefferson Park (Blue Line)",41.9706,-87.7606],
"logan":["Logan Square (Blue Line)",41.9234,-87.7089],
"division-blue":["Division (Blue Line)",41.9035,-87.6666],
"chicago-blue":["Chicago station (Blue Line)",41.8968,-87.6552],
"grand-blue":["Grand station (Blue Line)",41.8917,-87.6477],
"clark-lake":["Clark/Lake station",41.8858,-87.6309],
"washington-blue":["Washington (Blue Line)",41.8831,-87.6296],
"monroe-blue":["Monroe (Blue Line)",41.8807,-87.6294],
"jackson-blue":["Jackson (Blue Line)",41.8779,-87.6293],
"clinton-blue":["Clinton (Blue Line)",41.8755,-87.6410],
"grand-red":["Grand station (Red Line)",41.8917,-87.6281],
"chicago-red":["Chicago station (Red Line)",41.8968,-87.6287],
"clark-division":["Clark/Division (Red Line)",41.9039,-87.6309],
"north-clybourn":["North/Clybourn (Red Line)",41.9108,-87.6490],
"fullerton":["Fullerton station (Red/Brown/Purple)",41.9254,-87.6529],
"belmont":["Belmont station (Red/Brown/Purple)",41.9398,-87.6533],
"addison-red":["Addison station (Red Line)",41.9474,-87.6539],
"lake-red":["Lake station (Red Line)",41.8847,-87.6278],
"monroe-red":["Monroe (Red Line)",41.8803,-87.6277],
"jackson-red":["Jackson (Red Line)",41.8778,-87.6277],
"roosevelt":["Roosevelt station (Red/Orange/Green)",41.8672,-87.6279],
"mart":["Merchandise Mart (Brown/Purple)",41.8885,-87.6354],
"chicago-brown":["Chicago station (Brown/Purple)",41.8968,-87.6353],
"sedgwick":["Sedgwick (Brown/Purple)",41.9104,-87.6388],
"armitage":["Armitage station (Brown/Purple)",41.9185,-87.6522],
"diversey":["Diversey (Brown/Purple)",41.9328,-87.6533],
"southport":["Southport station (Brown Line)",41.9439,-87.6636],
"washington-wabash":["Washington/Wabash station",41.8827,-87.6260],
"adams-wabash":["Adams/Wabash station",41.8795,-87.6259],
"clinton-green":["Clinton station (Green/Pink)",41.8856,-87.6417],
"morgan":["Morgan station (Green/Pink)",41.8856,-87.6522],
"ashland-green":["Ashland station (Green/Pink)",41.8853,-87.6669],
"clark-washington":["Clark & Washington bus stop",41.8828,-87.6307],
"clark-armitage":["Clark & Armitage bus stop",41.9182,-87.6345],
"clark-webster":["Clark & Webster bus stop",41.9214,-87.6312],
"clark-fullerton":["Clark & Fullerton bus stop",41.9253,-87.6310],
"clark-wrightwood":["Clark & Wrightwood bus stop",41.9294,-87.6313],
"clark-deming":["Clark & Deming bus stop",41.9320,-87.6313],
"michigan-hubbard":["Michigan & Hubbard bus stop",41.8907,-87.6246],
"stockton-armitage":["Stockton & Armitage bus stop",41.9182,-87.6353],
"stockton-webster":["Stockton & Webster bus stop",41.9220,-87.6350],
"stockton-fullerton":["Stockton & Fullerton bus stop",41.9256,-87.6356],
"washington-state":["Washington & State bus stop",41.8831,-87.6277],
"columbus-illinois":["Columbus & Illinois bus stop",41.8910,-87.6198],
"illinois-mcclurg":["Illinois & McClurg bus stop",41.8912,-87.6175],
"navy-pier-terminal":["Navy Pier Terminal",41.8917,-87.6057],
"field-stop":["Museum Campus — Field Museum bus stop",41.8658,-87.6180],
"shedd-stop":["Shedd Aquarium bus stop (Solidarity Dr)",41.8676,-87.6140],
"adler-stop":["Adler Planetarium bus stop",41.8663,-87.6065],
"grand-racine":["Grand & Racine bus stop",41.8910,-87.6571],
"grand-halsted":["Grand & Halsted bus stop",41.8912,-87.6471],
"ashland-cortland":["Ashland & Cortland bus stop",41.9160,-87.6660]
};
/* line: [name, mode, min-per-mile, wait-min, [stops in order], label if index increases, label if index decreases] */
var PLN_LINES=[
["Blue Line","train",3.4,3,["ohare","jeffpark","logan","division-blue","chicago-blue","grand-blue","clark-lake","washington-blue","monroe-blue","jackson-blue","clinton-blue"],"toward Forest Park","toward O'Hare"],
["Red Line","train",3.4,3,["addison-red","belmont","fullerton","north-clybourn","clark-division","chicago-red","grand-red","lake-red","monroe-red","jackson-red","roosevelt"],"toward 95th/Dan Ryan","toward Howard"],
["Brown/Purple Line","train",3.6,3,["southport","belmont","diversey","fullerton","armitage","sedgwick","chicago-brown","mart","washington-wabash","adams-wabash","clark-lake"],"toward the Loop","toward Kimball (Brown) / Linden (Purple)"],
["Green/Pink Line","train",3.6,3,["ashland-green","morgan","clinton-green","clark-lake","washington-wabash","adams-wabash"],"toward the Loop / 63rd","toward Harlem (Green) / 54th (Pink)"],
["#22 Clark bus","bus",5.5,4,["clark-washington","clark-division","clark-armitage","clark-webster","clark-fullerton","clark-wrightwood","clark-deming"],"toward Howard","toward downtown"],
["#151 Sheridan bus","bus",5.5,4,["michigan-hubbard","stockton-armitage","stockton-webster","stockton-fullerton"],"toward Devon/Clark","toward Union Station (downtown)"],
["#124 Navy Pier bus","bus",5.5,4,["washington-state","columbus-illinois","illinois-mcclurg","navy-pier-terminal"],"toward Navy Pier","toward Clinton/Quincy (downtown)"],
["#146 Museum Campus bus","bus",5.5,4,["roosevelt","field-stop","shedd-stop","adler-stop"],"toward Museum Campus","toward downtown / Berwyn"],
["#65 Grand bus","bus",5.5,4,["grand-racine","grand-halsted","grand-red"],"toward Navy Pier (east)","toward Harlem (west)"],
["#9 Ashland bus","bus",5.5,4,["chicago-blue","ashland-cortland"],"toward Irving Park (north)","toward 95th (south)"]
];
var PLN_XFER=[["clark-lake","washington-wabash"],["washington-blue","washington-wabash"],["monroe-blue","monroe-red"],["lake-red","clark-lake"],["chicago-red","chicago-brown"],["michigan-hubbard","grand-red"],["clark-armitage","armitage"],["grand-halsted","grand-blue"],["clark-washington","clark-lake"],["washington-state","washington-blue"],["washington-state","washington-wabash"],["grand-red","washington-state"]];
function plnDist(a,b){var R=3958.8,dLa=(b[0]-a[0])*Math.PI/180,dLo=(b[1]-a[1])*Math.PI/180;var h=Math.sin(dLa/2)*Math.sin(dLa/2)+Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*Math.sin(dLo/2)*Math.sin(dLo/2);return 2*R*Math.asin(Math.sqrt(h));}
function plnFmtD(mi){var ft=mi*5280; if(ft<1000) return Math.max(10,Math.round(ft/10)*10)+" ft"; return (mi<10?mi.toFixed(1):Math.round(mi))+" mi";}
function planRouteV1(fromPin,toPin){
 /* fromPin/toPin: {n,lat,lng}. Returns {steps:[strings], totalMin} or null */
 var N={}; Object.keys(PLN_NODES).forEach(function(k){ N[k]={name:PLN_NODES[k][0],c:[PLN_NODES[k][1],PLN_NODES[k][2]]}; });
 N["@from"]={name:fromPin.n,c:[fromPin.lat,fromPin.lng]};
 N["@to"]={name:toPin.n,c:[toPin.lat,toPin.lng]};
 var adj={}; Object.keys(N).forEach(function(k){ adj[k]=[]; });
 function addEdge(a,b,min,kind,line,dir){ adj[a].push({to:b,min:min,kind:kind,line:line||null,dir:dir||null}); adj[b].push({to:a,min:min,kind:kind,line:line||null,dir:dir||null}); }
 PLN_LINES.forEach(function(L){
   for(var i=0;i<L[4].length-1;i++){
     var A=L[4][i],B=L[4][i+1];
     var d=plnDist(N[A].c,N[B].c), mins=Math.max(1,Math.round(d*L[2]));
     adj[A].push({to:B,min:mins,kind:"ride",line:L,dir:L[5]});
     adj[B].push({to:A,min:mins,kind:"ride",line:L,dir:L[6]});
   }
 });
 PLN_XFER.forEach(function(pr){ var d=plnDist(N[pr[0]].c,N[pr[1]].c); addEdge(pr[0],pr[1],Math.max(2,Math.round(d*20)),"xfer"); });
 [["@from",fromPin],["@to",toPin]].forEach(function(sp){
   var cand=Object.keys(PLN_NODES).map(function(k){ return {k:k,d:plnDist([sp[1].lat,sp[1].lng],N[k].c)}; }).filter(function(x){ return x.d<=1.05; }).sort(function(a,b){ return a.d-b.d; }).slice(0,4);
   cand.forEach(function(x){ addEdge(sp[0],x.k,Math.max(1,Math.round(x.d*20)),"walk"); });
 });
 var dd=plnDist([fromPin.lat,fromPin.lng],[toPin.lat,toPin.lng]);
 if(dd<=0.9) addEdge("@from","@to",Math.max(1,Math.round(dd*20)),"walkall");
 /* Dijkstra */
 var dist={},prev={},Q=new Set(Object.keys(N));
 Object.keys(N).forEach(function(k){ dist[k]=Infinity; }); dist["@from"]=0;
 while(Q.size){
   var u=null,best=Infinity; Q.forEach(function(k){ if(dist[k]<best){best=dist[k];u=k;} });
   if(u===null||u==="@to") break; Q.delete(u);
   adj[u].forEach(function(e){ var nd=dist[u]+e.min+(e.kind==="ride"&&(!prev[u]||prev[u].e.kind!=="ride"||prev[u].e.line!==e.line)?e.line[3]:0); if(nd<dist[e.to]){ dist[e.to]=nd; prev[e.to]={from:u,e:e}; } });
 }
 if(!isFinite(dist["@to"])) return null;
 var path=[],cur="@to"; while(cur!=="@from"){ var pr=prev[cur]; if(!pr) return null; path.unshift({from:pr.from,to:cur,e:pr.e}); cur=pr.from; }
 /* Merge ride runs */
 var steps=[],rides=[],i=0,total=0;
 function walkText(aN,bN,mins){ return "🚶 Walk ~"+mins+" min ("+plnFmtD(plnDist(N[aN].c,N[bN].c))+")"; }
 while(i<path.length){
   var s=path[i];
   if(s.e.kind==="ride"){
     var line=s.e.line,dir=s.e.dir,board=s.from,exitN=s.to,mins=s.e.min+line[3]; i++;
     while(i<path.length&&path[i].e.kind==="ride"&&path[i].e.line===line){ mins+=path[i].e.min; exitN=path[i].to; i++; }
     total+=mins;
     steps.push((line[1]==="bus"?"🚌":"🚇")+" Board the "+line[0]+" at "+N[board].name+" ("+dir+") → ride ~"+mins+" min → exit at "+N[exitN].name);
     rides.push({step:steps.length-1,mode:(line[1]==="bus"?"bus":"train"),line:line[0],route:(line[1]==="bus"?line[0].replace(/^#/,"").split(" ")[0]:null),node:board,dir:dir,boardName:N[board].name,exitName:N[exitN].name});
   } else if(s.e.kind==="xfer"){
     total+=s.e.min; steps.push("🚶 Transfer: walk ~"+s.e.min+" min to "+N[s.to].name); i++;
   } else if(s.e.kind==="walkall"){
     total+=s.e.min; steps.push("🚶 Walk the whole way — ~"+s.e.min+" min ("+plnFmtD(dd)+") to "+toPin.n); i++;
   } else { /* walk */
     total+=s.e.min;
     if(s.from==="@from") steps.push(walkText(s.from,s.to,s.e.min)+" to "+N[s.to].name);
     else steps.push(walkText(s.from,s.to,s.e.min)+" to "+toPin.n+" — you're there");
     i++;
   }
 }
 var coords=path.map(function(sg){ return N[sg.from].c; }); coords.push(N["@to"].c);
 return {steps:steps,totalMin:total,coords:coords,rides:rides};
}
if(typeof document!=="undefined"&&document.getElementById){
 var dayPick=document.getElementById("planDayPick"), actPick=document.getElementById("planActPick");
 function plnFillActs(){
   if(!actPick) return;
   var d=dayPick?dayPick.value:"";
   actPick.innerHTML="";
   var ph=document.createElement("option"); ph.value="";
   if(!d){ ph.textContent="Pick a day first\u2026"; actPick.appendChild(ph); actPick.disabled=true; return; }
   ph.textContent="\uD83C\uDFAF Pick an activity\u2026"; actPick.appendChild(ph);
   var list=[];
   if(d==="sat"){ ["Fairfield Inn \u2014 your hotel (base)","\u2708\uFE0F O'Hare (ORD)","Beatrix \u2014 River North","Eataly Chicago"].forEach(function(nm){ var f=POIS.filter(function(x){return x.n===nm;})[0]; if(f) list.push(f); }); }
   else POIS.forEach(function(p){ if(p.day===d) list.push(p); });
   list.forEach(function(p){ var o=document.createElement("option"); o.value=p.n; o.textContent=p.n; actPick.appendChild(o); });
   if(!list.length){ var o2=document.createElement("option"); o2.value=""; o2.textContent="Nothing pinned this day"; actPick.appendChild(o2); }
   actPick.disabled=false;
 }
 if(dayPick){ dayPick.addEventListener("change",plnFillActs); plnFillActs(); }
 if(actPick) actPick.addEventListener("change",function(){ if(actPick.value){ document.getElementById("planTo").value=actPick.value; plnGo(); } });
 function plnMatchPin(txt){
   txt=(txt||"").trim(); if(!txt) return null;
   var low=txt.toLowerCase(),i;
   for(i=0;i<POIS.length;i++) if(POIS[i].n.toLowerCase()===low) return POIS[i];
   for(i=0;i<POIS.length;i++) if(POIS[i].n.toLowerCase().indexOf(low)>=0) return POIS[i];
   return null;
 }
 function plnClearRoute(){
   if(window.__routeLine&&typeof map!=="undefined"&&map){ try{ map.removeLayer(window.__routeLine); }catch(_){ } window.__routeLine=null; }
 }
 function plnDrawRoute(coords){
   if(typeof L==="undefined"||typeof map==="undefined"||!map||!coords||coords.length<2) return;
   plnClearRoute();
   var pts=coords.map(function(c){ return [c[0],c[1]]; });
   window.__routeLine=L.layerGroup([
     L.polyline(pts,{color:"#ffffff",weight:9,opacity:0.9}),
     L.polyline(pts,{color:"#0b5cad",weight:5,opacity:0.95}),
     L.circleMarker(pts[0],{radius:7,color:"#0b5cad",weight:3,fillColor:"#ffffff",fillOpacity:1}),
     L.circleMarker(pts[pts.length-1],{radius:7,color:"#ffffff",weight:3,fillColor:"#0b5cad",fillOpacity:1})
   ]).addTo(map);
   try{ map.fitBounds(window.__routeLine.getBounds().pad(0.18)); }catch(_){ }
 }
 function plnRender(f,t){
   if(window.__liveTimer){ clearInterval(window.__liveTimer); window.__liveTimer=null; }
   var out=document.getElementById("planOut");
   var hb=document.getElementById("planHome"); if(hb&&hb.classList) hb.classList.toggle("on",!!(typeof POIS!=="undefined"&&POIS[0]&&t===POIS[0]));
   if(!t.cat&&typeof map!=="undefined"&&map) map.setView([t.lat,t.lng],15);
   var appleAddr=encodeURIComponent(t.n+(t.addr?" "+t.addr:"")+" Chicago IL");
   var r=planRoute(f,t);
   if(!r){ plnClearRoute(); out.innerHTML="<p>No simple bus/train route found from where you are to "+t.n+". <a href='https://maps.apple.com/?daddr="+appleAddr+"&dirflg=t' target='_blank' rel='noopener'>Open directions in Apple Maps 🗺️</a></p>"; return; }
   var extra=t.addr?"":" <br><a href='https://maps.apple.com/?q="+appleAddr+"' target='_blank' rel='noopener'>See it in Apple Maps 🗺️</a>";
   out.innerHTML="<p style='margin:6px 0'><strong>From where you are \u2192 "+t.n+"</strong> · ~"+r.totalMin+" min door to door (approx, incl. average waits)</p>"+(r.notice?("<p style='margin:6px 0'>ℹ️ "+plnEsc(r.notice)+"</p>"):"")+"<ol>"+r.steps.map(function(x,xi){ var rj=-1; (r.rides||[]).forEach(function(rd,j){ if(rd.step===xi) rj=j; }); return "<li>"+x+(rj>=0?"<span class='liveT' id='liveT"+rj+"'></span>":"")+"</li>"; }).join("")+"</ol>"+extra;
   window.__lastRoute={res:r,from:f,to:t}; var nb=document.getElementById("navBtn"); if(nb) nb.style.display="block"; if(window.__nav&&window.__nav.on&&!window.__navRerender) plnNavEnd();
   plnDrawRoute(r.coords);
   if(r.rides&&r.rides.length&&typeof plnLiveFill==="function") plnLiveFill(r.rides,false);
   if(r.walkLegs&&r.walkLegs.length&&typeof plnOsrmEnrich==="function") plnOsrmEnrich(r);
  
 }
 function plnEsc(x){ return String(x==null?"":x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function plnWeb(u){ u=String(u||"").split(";")[0].trim(); if(!u) return ""; if(!/^https?:\/\//i.test(u)) u="https://"+u; return u; }
function plnExtraHTML(g){
 return (g.tel?"<p style='margin:2px 0'>\uD83D\uDCDE <a href='tel:+1"+String(g.tel).replace(/[^0-9]/g,"").replace(/^1(?=\d{10}$)/,"")+"'>"+plnEsc(g.tel)+"</a></p>":"")
 + (g.web?"<p style='margin:2px 0'>\uD83C\uDF10 <a target='_blank' rel='noopener' href='"+plnEsc(g.web)+"'>Website</a></p>":"")
 + (g.hours?"<p style='margin:2px 0'>\uD83D\uDD50 "+plnEsc(g.hours)+"</p>":"")
 + (g.cuisine?"<p style='margin:2px 0'>\uD83C\uDF7D\uFE0F "+plnEsc(g.cuisine)+"</p>":"");
}
function plnEnrich(g,out){
 try{
  var nm=String(g.n||"").replace(/[\\"]/g," ").replace(/[.*+?^${}()|[\]]/g," ");
  if(!nm.trim()) return;
  var q='[out:json][timeout:8];(node["name"~"^'+nm+'$",i](around:400,'+g.lat+','+g.lng+');way["name"~"^'+nm+'$",i](around:400,'+g.lat+','+g.lng+'););out tags center 3;';
  var ctl=(typeof AbortController!=="undefined")?new AbortController():null;
  var to=ctl?setTimeout(function(){ try{ctl.abort();}catch(_){} },9000):null;
  fetch("https://overpass-api.de/api/interpreter",{method:"POST",body:"data="+encodeURIComponent(q),signal:ctl?ctl.signal:undefined})
   .then(function(r){ return r.json(); })
   .then(function(oj){
     if(to) clearTimeout(to);
     if(!oj||!oj.elements||!oj.elements.length) return;
     var best=null,bs=-1;
     oj.elements.forEach(function(el){ var t=el.tags||{}; var sc=(t["contact:phone"]||t.phone?1:0)+(t["contact:website"]||t.website?1:0)+(t.opening_hours?1:0)+(t.cuisine?1:0); if(sc>bs){ bs=sc; best=t; } });
     if(!best) return;
     if(!g.tel) g.tel=best["contact:phone"]||best.phone||"";
     if(!g.web) g.web=plnWeb(best["contact:website"]||best.website||"");
     if(!g.hours) g.hours=best.opening_hours||"";
     if(!g.cuisine&&best.cuisine) g.cuisine=best.cuisine.replace(/_/g," ").replace(/;/g,", ");
     var sp=out.querySelector?out.querySelector(".plnLiveExtra"):null;
     if(sp) sp.innerHTML=plnExtraHTML(g);
   }).catch(function(){ if(to) clearTimeout(to); });
 }catch(e){}
}
function plnCardHTML(g){
 window.__lastLive=g;
 return "<div style='margin-top:8px;border-top:1px solid var(--line);padding-top:8px'><p style='margin:2px 0'><strong>"+plnEsc(g.n)+"</strong>"+(g.kind?" \u00B7 "+plnEsc(g.kind):"")+" <span style='color:var(--mut);font-size:12px'>(live lookup \u2014 not one of your saved pins)</span></p><p style='margin:2px 0'>"+plnEsc(g.full||g.n)+"</p><span class='plnLiveExtra'>"+plnExtraHTML(g)+"</span><p style='margin:6px 0'><button type='button' class='btn' data-savelive='1'>➕ Save to my pins</button></p></div>";
}
function plnFeatureToPlace(ft,fallbackName){
 var pr=(ft&&ft.properties)||{}, co=(ft&&ft.geometry&&ft.geometry.coordinates)||[0,0];
 var g={n:pr.name||fallbackName||"",lat:co[1],lng:co[0]};
 g.full=[pr.name,pr.housenumber,pr.street,pr.city,pr.state,pr.postcode].filter(Boolean).join(" ");
 if(!g.full) g.full=g.n;
 g.tel=""; g.web=""; g.hours=""; g.kind=(pr.osm_value||"").replace(/_/g," ");
 return g;
}
function plnShowLive(ft){
 var out=document.getElementById("planOut");
 var g=plnFeatureToPlace(ft,((document.getElementById("planTo")||{}).value||"").trim());
 document.getElementById("planTo").value=g.n;
 if(typeof myPos!=="undefined"&&myPos){ plnRender({n:"\uD83D\uDCCD Your current location",lat:myPos.lat,lng:myPos.lng},g); }
 else { out.innerHTML="<p>No live location yet \u2014 tap \u201CCurrent location\u201D, or tap the map / drag the \uD83D\uDEB6 walker to set where you are, and the route will show here.</p>"; }
 out.innerHTML+=plnCardHTML(g);
 plnEnrich(g,out);
}
function plnPhotonMulti(f,txt,out){
 fetch("https://photon.komoot.io/api/?limit=5&lang=en&lat=41.8781&lon=-87.6298&q="+encodeURIComponent(txt.trim()+" Chicago"))
  .then(function(r){ return r.json(); })
  .then(function(pj){
    var cands=[];
    if(pj&&pj.features) pj.features.forEach(function(ft){ if(ft&&ft.properties&&ft.properties.name) cands.push(plnFeatureToPlace(ft,txt.trim())); });
    plnShowCands(f,txt,cands,out);
  })
  .catch(function(){ out.innerHTML="<p>Place search needs an internet connection \u2014 try again in a moment, or pick from the day dropdown (works offline).</p>"; });
}
function plnMi(a,b){ var R=3958.8, dLa=(b.lat-a.lat)*Math.PI/180, dLo=(b.lng-a.lng)*Math.PI/180; var h=Math.sin(dLa/2)*Math.sin(dLa/2)+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLo/2)*Math.sin(dLo/2); return 2*R*Math.asin(Math.sqrt(h)); }
function plnGoPlace(f,g,out){
 plnRender(f,g);
 out.innerHTML+=plnCardHTML(g);
 plnEnrich(g,out);
}
function plnShowCands(f,txt,cands,out){
 var ded=[];
 cands.forEach(function(c){ var dup=false; for(var i=0;i<ded.length;i++){ if(ded[i].n.toLowerCase()===c.n.toLowerCase()&&plnMi(ded[i],c)<0.1){ dup=true; break; } } if(!dup) ded.push(c); });
 ded.sort(function(a,b){ return plnMi(f,a)-plnMi(f,b); });
 ded=ded.slice(0,5);
 if(!ded.length){ out.innerHTML="<p>Couldn\u2019t find \u201C"+plnEsc(txt.trim())+"\u201D in Chicago \u2014 check the spelling, or pick from the day dropdown.</p>"; return; }
 if(ded.length===1){ plnGoPlace(f,ded[0],out); return; }
 window.__cands=ded; window.__candFrom=f;
 var h="<p style='margin:6px 0'><strong>"+ded.length+" places match \u201C"+plnEsc(txt.trim())+"\u201D \u2014 nearest first. Tap one:</strong></p>";
 ded.forEach(function(c,i){
   var d=plnMi(f,c);
   var dtxt=d<0.1?Math.round(d*5280)+" ft":d.toFixed(1)+" mi";
   h+="<div data-cand='"+i+"' style='border:1px solid var(--line);border-radius:10px;padding:9px 10px;margin:5px 0;cursor:pointer;background:var(--panel)'><strong>\uD83D\uDCCD "+plnEsc(c.n)+"</strong> \u00B7 "+dtxt+"<br><span style='color:var(--mut);font-size:13px'>"+plnEsc(c.full||"")+"</span></div>";
 });
 out.innerHTML=h;

}
function plnGo(){
   var out=document.getElementById("planOut");
   if(!(typeof myPos!=="undefined"&&myPos)){ out.innerHTML="<p>No live location yet — tap \u201CCurrent location\u201D, or tap the map / drag the \uD83D\uDEB6 walker to set where you are, then try again.</p>"; return; }
   var f={n:"\uD83D\uDCCD Your current location",lat:myPos.lat,lng:myPos.lng};
   var txt=document.getElementById("planTo").value||"";
   var t=plnMatchPin(txt);
   if(t){ var six=POIS.indexOf(t); if(six>=0&&typeof showPin==="function") showPin(six,false); plnRender(f,t); return; }
   if(!txt.trim()){ out.innerHTML="<p>Pick a destination from the day dropdown, or type any business or place name.</p>"; return; }
   out.innerHTML="<p>\uD83D\uDD0E Searching for \u201C"+txt.trim()+"\u201D\u2026</p>";
   fetch("https://nominatim.openstreetmap.org/search?format=json&limit=5&addressdetails=1&extratags=1&namedetails=1&countrycodes=us&viewbox=-87.95,42.05,-87.50,41.60&q="+encodeURIComponent(txt.trim()+", Chicago, IL"))
     .then(function(r){ return r.json(); })
     .then(function(j){
       if(!j||!j.length){ plnPhotonMulti(f,txt,out); return; }
       var cands=j.map(function(r0){
         var xt=r0.extratags||{};
         var g={n:(r0.namedetails&&r0.namedetails.name)||r0.display_name.split(",").slice(0,2).join(","),lat:parseFloat(r0.lat),lng:parseFloat(r0.lon)};
         g.full=r0.display_name;
         g.tel=xt["contact:phone"]||xt.phone||"";
         g.web=plnWeb(xt["contact:website"]||xt.website||"");
         g.hours=xt.opening_hours||"";
         g.kind=(r0.type||"").replace(/_/g," ");
         return g;
       });
       plnShowCands(f,txt,cands,out);
     })
     .catch(function(){ out.innerHTML="<p>Place search needs an internet connection — try again in a moment, or pick from the day dropdown (works offline).</p>"; });
 }
 var _pb=document.getElementById("planBtn"); if(_pb) _pb.addEventListener("click",plnGo);
 var homeBtn=document.getElementById("planHome");
 if(homeBtn) homeBtn.addEventListener("click",function(){ document.getElementById("planTo").value=POIS[0].n; plnGo(); });
 var clearBtn=document.getElementById("planClear");
 if(clearBtn) clearBtn.addEventListener("click",function(){ document.getElementById("planTo").value=""; var dp=document.getElementById("planDayPick"); if(dp) dp.value=""; if(typeof plnFillActs==="function") plnFillActs(); document.getElementById("planOut").innerHTML=""; var hb2=document.getElementById("planHome"); if(hb2&&hb2.classList) hb2.classList.remove("on"); if(typeof unselectPin==="function") unselectPin(); });
 var toEl=document.getElementById("planTo"), pickEl=document.getElementById("planPick");
 var plnPickTimer=null, plnPickToken=0, plnPickBase=null, plnLiveFeats=[], plnPickCtl=null;
 function hidePick(){ if(pickEl) pickEl.style.display="none"; }
 function renderPick(){
   if(!pickEl||!toEl) return;
   var q=(toEl.value||"").trim().toLowerCase();
   if(q.length<3){ hidePick(); return; }
   var qn=q.replace(/-/g," ");
   var nameHits=[], tagHits=[];
   POIS.forEach(function(p,ix){
     if(p.n.toLowerCase().indexOf(q)>=0||(p.addr&&p.addr.toLowerCase().indexOf(q)>=0)) nameHits.push(ix);
     else if(p.tags&&p.tags.toLowerCase().replace(/-/g," ").indexOf(qn)>=0) tagHits.push(ix);
   });
   var hits=nameHits.map(function(ix){return {ix:ix,tag:false};}).concat(tagHits.map(function(ix){return {ix:ix,tag:true};})).slice(0,5);
   var h="";
   hits.forEach(function(hit){ var p=POIS[hit.ix]; h+="<li data-i=\""+hit.ix+"\">"+((typeof ICONS!=="undefined"&&ICONS[p.cat])||"\uD83D\uDCCD")+" "+p.n+" <span class='pa-addr'>"+(hit.tag?("\uD83C\uDFF7\uFE0F "+p.tags):(p.addr||""))+"</span></li>"; });
   var rawQ=(toEl.value||"").trim();
   var searchRow="<li data-search=\"1\">\uD83D\uDD0E Search Chicago for \u201C"+plnEsc(rawQ)+"\u201D <span class='pa-addr'>any place \u2014 route + live info</span></li>";
   pickEl.innerHTML=h+searchRow; pickEl.style.display="block";
   plnPickBase={pins:h,search:searchRow,q:q,cnt:hits.length};
   clearTimeout(plnPickTimer);
   var token=++plnPickToken;
   plnPickTimer=setTimeout(function(){
     if(plnPickCtl){ try{ plnPickCtl.abort(); }catch(_){} }
     plnPickCtl=(typeof AbortController!=="undefined")?new AbortController():null;
     fetch("https://photon.komoot.io/api/?limit=8&lang=en&lat=41.8781&lon=-87.6298&q="+encodeURIComponent(rawQ+" Chicago"),{signal:plnPickCtl?plnPickCtl.signal:undefined})
      .then(function(r){ return r.json(); })
      .then(function(pj){
        if(token!==plnPickToken||!pj||!pj.features) return;
        if(!pickEl||pickEl.style.display==="none") return;
        var curQ=((toEl.value||"").trim().toLowerCase());
        if(curQ!==q) return;
        var pinNames={}; POIS.forEach(function(pp){ pinNames[pp.n.toLowerCase()]=1; });
        plnLiveFeats=[];
        var room=Math.max(0,5-(plnPickBase.cnt||0));
        var lh="";
        pj.features.forEach(function(ft){ if(plnLiveFeats.length>=room) return; var pr=ft.properties||{}; if(!pr.name) return; if(pinNames[pr.name.toLowerCase()]) return; var li2=plnLiveFeats.length; plnLiveFeats.push(ft); var det=[pr.housenumber,pr.street,pr.city].filter(Boolean).join(" "); var ic=(pr.osm_value==="restaurant"||pr.osm_value==="fast_food"||pr.osm_value==="cafe")?"\uD83C\uDF74":"\uD83D\uDCCD"; lh+="<li data-live=\""+li2+"\">"+ic+" "+plnEsc(pr.name)+" <span class='pa-addr'>"+plnEsc(det)+" \u00B7 outside your pins</span></li>"; });
        if(lh) pickEl.innerHTML=plnPickBase.pins+lh+plnPickBase.search;
      }).catch(function(){});
   },120);
 }
 if(toEl&&pickEl){
   toEl.addEventListener("input",renderPick);
   toEl.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); hidePick(); plnGo(); } });
   toEl.addEventListener("focus",renderPick);
   pickEl.addEventListener("click",function(e){
     var li=e.target; while(li&&li.tagName!=="LI") li=li.parentNode;
     if(!li) return;
     if(li.getAttribute("data-search")){ hidePick(); plnGo(); return; }
     var lv=li.getAttribute("data-live");
     if(lv!==null&&lv!==undefined&&plnLiveFeats[parseInt(lv,10)]){ hidePick(); plnShowLive(plnLiveFeats[parseInt(lv,10)]); return; }
     var ix=parseInt(li.getAttribute("data-i"),10);
     if(!isNaN(ix)&&POIS[ix]){ toEl.value=POIS[ix].n; hidePick(); plnGo(); }
   });
   document.addEventListener("click",function(e){ if(e.target!==toEl&&pickEl.style.display!=="none"&&e.target!==pickEl) hidePick(); });
 }
 var apBtn=document.getElementById("planApple");
 if(apBtn) apBtn.addEventListener("click",function(){
   var txt=((document.getElementById("planTo").value)||"").trim();
   var out=document.getElementById("planOut");
   if(!txt){ out.innerHTML="<p>Pick or type a destination first \u2014 then tap 🗺️ Directions.</p>"; return; }
   var pin=plnMatchPin(txt);
   var url=pin?gdir(pin):"https://maps.apple.com/?daddr="+encodeURIComponent(txt+" Chicago IL")+"&dirflg=t";
   window.open(url,"_blank");
 });
}
/*PLANNER-END*/
(function(){
 var outEl=document.getElementById("planOut");
 if(outEl) outEl.addEventListener("click",function(e){
   var t=e.target;
   while(t&&t!==outEl&&!(t.getAttribute&&t.getAttribute("data-cand"))) t=t.parentNode;
   if(!t||t===outEl) return;
   var ci=parseInt(t.getAttribute("data-cand"),10);
   var c=(window.__cands||[])[ci];
   if(c&&window.__candFrom) plnGoPlace(window.__candFrom,c,outEl);
 });
})();
/* Live CTA stop IDs — from CTA GTFS (Sep 2026 feed); trains: Train Tracker mapid by planner node; buses: Bus Tracker stpid by node|route|direction */
var PLN_TRAIN_ID={"adams-wabash":"40680","addison-red":"41420","armitage":"40660","ashland-green":"40170","belmont":"41320","chicago-blue":"41410","chicago-brown":"40710","chicago-red":"41450","clark-division":"40630","clark-lake":"40380","clinton-blue":"40430","clinton-green":"41160","diversey":"40530","division-blue":"40320","fullerton":"41220","grand-blue":"40490","grand-red":"40330","jackson-blue":"40070","jackson-red":"40560","jeffpark":"41280","lake-red":"41660","logan":"41020","mart":"40460","monroe-blue":"40790","monroe-red":"41090","morgan":"41510","north-clybourn":"40650","ohare":"40890","roosevelt":"41400","sedgwick":"40800","southport":"40360","washington-blue":"40370","washington-wabash":"41700"};
var PLN_BUS_ID={"adler-stop|146":{"toward Museum Campus":"4877","toward downtown / Berwyn":"4877"},"ashland-cortland|9":{"toward 95th (south)":"6016","toward Irving Park (north)":"6259"},"chicago-blue|9":{"toward 95th (south)":"15842","toward Irving Park (north)":"15843"},"clark-armitage|22":{"toward Howard":"1907","toward downtown":"14788"},"clark-deming|22":{"toward Howard":"1913","toward downtown":"1836"},"clark-division|22":{"toward Howard":"1899","toward downtown":"1850"},"clark-fullerton|22":{"toward Howard":"1909","toward downtown":"1840"},"clark-washington|22":{"toward Howard":"1882","toward downtown":"1865"},"clark-webster|22":{"toward Howard":"1908","toward downtown":"1841"},"clark-wrightwood|22":{"toward Howard":"1911","toward downtown":"1838"},"columbus-illinois|124":{"toward Clinton/Quincy (downtown)":"5513","toward Navy Pier":"5511"},"field-stop|146":{"toward Museum Campus":"4873","toward downtown / Berwyn":"15426"},"grand-halsted|65":{"toward Harlem (west)":"14774","toward Navy Pier (east)":"738"},"grand-racine|65":{"toward Harlem (west)":"780","toward Navy Pier (east)":"15135"},"grand-red|65":{"toward Harlem (west)":"764","toward Navy Pier (east)":"14775"},"illinois-mcclurg|124":{"toward Clinton/Quincy (downtown)":"589","toward Navy Pier":"754"},"michigan-hubbard|151":{"toward Devon/Clark":"1122","toward Union Station (downtown)":"1102"},"navy-pier-terminal|124":{"toward Clinton/Quincy (downtown)":"14161","toward Navy Pier":"14161"},"roosevelt|146":{"toward Museum Campus":"316","toward downtown / Berwyn":"16140"},"shedd-stop|146":{"toward Museum Campus":"4591","toward downtown / Berwyn":"4595"},"stockton-armitage|151":{"toward Devon/Clark":"1141","toward Union Station (downtown)":"1084"},"stockton-fullerton|151":{"toward Devon/Clark":"1144","toward Union Station (downtown)":"1081"},"stockton-webster|151":{"toward Devon/Clark":"1143","toward Union Station (downtown)":"1082"},"washington-state|124":{"toward Clinton/Quincy (downtown)":"18126","toward Navy Pier":"448"}};
var PLN_RT_CODES={"Blue Line":["Blue"],"Red Line":["Red"],"Brown/Purple Line":["Brn","P"],"Green/Pink Line":["G","Pink"],"Brown Line":["Brn"],"Purple Line":["P"],"Green Line":["G"],"Pink Line":["Pink"],"Orange Line":["Org"],"Yellow Line":["Y"]};
function plnLsGet(k){ try{ return localStorage.getItem(k)||""; }catch(e){ return ""; } }
function plnLsSet(k,v){ try{ if(v) localStorage.setItem(k,v); else localStorage.removeItem(k); }catch(e){} }
var PLN_RELAY_DEFAULT="https://cta-relay.yd9zy8w2j6.workers.dev";
function plnLiveCfg(){ return {train:plnLsGet("chiTrainKey"),bus:plnLsGet("chiBusKey"),relay:(plnLsGet("chiRelay")||PLN_RELAY_DEFAULT).replace(/\/+$/,"")}; }
function plnFetchJSON(url,want,opts){
  opts=opts||{}; var isErr=opts.isErr||null, keyed=!!opts.keyed;
  var cfg=plnLiveCfg(), tries=[];
  if(cfg.relay) tries.push(cfg.relay+"?u="+encodeURIComponent(url));
  tries.push("https://api.codetabs.com/v1/proxy?quest="+encodeURIComponent(url));
  tries.push("https://api.allorigins.win/raw?url="+encodeURIComponent(url));
  return new Promise(function(resolve,reject){
    var left=tries.length, done=false, ctls=[], errPayload=null;
    function fail(){ left--; if(left<=0&&!done){ done=true; if(errPayload) resolve(errPayload); else reject(new Error("all transports failed")); } }
    tries.forEach(function(tu){
      var settled=false;
      var ctl=("AbortController" in window)?new AbortController():null; ctls.push(ctl);
      var to=ctl?setTimeout(function(){ if(!settled){ settled=true; try{ ctl.abort(); }catch(e){} fail(); } },9000):null;
      fetch(tu,ctl?{signal:ctl.signal}:undefined).then(function(r){ if(!r.ok) throw new Error("http "+r.status); return r.text(); }).then(function(tx){
        var j=JSON.parse(tx); if(want&&!(want in j)) throw new Error("wrong shape");
        if(isErr&&isErr(j)){ if(keyed) errPayload=j; throw new Error("cta rejected"); }
        if(settled) return; settled=true; if(to) clearTimeout(to);
        if(!done){ done=true; ctls.forEach(function(c){ if(c&&c!==ctl){ try{ c.abort(); }catch(e){} } }); resolve(j); }
      }).catch(function(){ if(settled) return; settled=true; if(to) clearTimeout(to); fail(); });
    });
  });
}
function plnChiMs(str){
  var m=String(str||"").match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  if(!m){ var d0=new Date(str); return d0.getTime(); }
  var target=Date.UTC(+m[1],+m[2]-1,+m[3],+m[4],+m[5],+m[6]);
  var guess=target;
  try{
    var fmt=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false});
    for(var k=0;k<2;k++){
      var parts={}; fmt.formatToParts(new Date(guess)).forEach(function(p){ parts[p.type]=p.value; });
      var wall=Date.UTC(+parts.year,+parts.month-1,+parts.day,+(+parts.hour%24),+parts.minute,+parts.second);
      guess+=(target-wall);
    }
  }catch(e){}
  return guess;
}
function plnDirTokens(dir){
  return String(dir||"").replace(/^toward\s+/i,"").split("/").map(function(x){ return x.replace(/\(.*?\)/g,"").replace(/^the\s+/i,"").trim().toLowerCase(); }).filter(Boolean);
}
var PLN_RT_COLOR={"Blue":"Blue","Red":"Red","Brn":"Brown","P":"Purple","G":"Green","Pink":"Pink","Org":"Orange","Y":"Yellow"};
var PLN_RT_NAME={"Blue":"Blue Line","Red":"Red Line","Brn":"Brown Line","P":"Purple Line","G":"Green Line","Pink":"Pink Line","Org":"Orange Line","Y":"Yellow Line"};
function plnClock(ms){ if(!ms) return ""; try{ return new Date(ms).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",timeZone:"America/Chicago"}); }catch(e){ return ""; } }
function plnBusMs(v){ return plnChiMs(String(v||"").replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2})/,"$1-$2-$3T$4:$5:00")); }
function plnShortName(n){ return String(n||"").replace(/\s*\([^)]*\)\s*/g," ").replace(/\s+/g," ").trim().replace(/\s+station$/i,""); }
function plnVeh(rt){ var nm=PLN_RT_NAME[rt], k=PLN_RT_COLOR[rt]; if(!nm) return "Train"; return '<span class="lc'+(k?" lc-"+k:"")+'">'+nm+"</span> train"; }
function liveMinSpan(x){ return '<span class="lc'+(x.k?" lc-"+x.k:"")+'">'+x.m+'</span>'; }
function liveTable(rows,rd){ if(!rows.length) return ""; var bn=plnEsc(plnShortName(rd&&rd.boardName)), xn=plnEsc(plnShortName(rd&&rd.exitName)); var body=rows.map(function(x){ return "<tr><td>"+(x.veh||"")+(x.dir?("<br><span class=\"liveDir\">"+plnEsc(x.dir)+"</span>"):"")+"<br><span class=\"liveStops\">"+bn+" → "+xn+"</span></td><td>"+bn+"</td><td>"+xn+"</td><td>"+liveMinSpan(x)+"</td><td>"+(x.c?('<span class="lc'+(x.k?" lc-"+x.k:"")+'">'+x.c+'</span>'):"")+"</td><td>"+(x.late?'<span class="lc lc-Red">Late</span>':'<span class="lc lc-Green">On time</span>')+"</td></tr>"; }).join(""); return '<table class="liveTbl"><tr><th>Bus or Train</th><th>Board</th><th>Exit</th><th>Arrival</th><th>Time</th><th>Status</th></tr>'+body+"</table>"; }
function plnLiveMark(span,ok){ if(span) span.className="liveT "+(ok?"ok":"bad"); }
function plnLiveFill(rides,quiet){
  var cfg=plnLiveCfg(); if(!cfg.relay&&!cfg.train&&!cfg.bus) return;
  window.__liveRides=rides; if(!window.__liveCache) window.__liveCache={};
  rides.forEach(function(rd,j){
    var span=document.getElementById("liveT"+j); if(!span) return;
    if(rd.mode==="train"){
      if(!cfg.relay&&!cfg.train) return;
      var mid=rd.gtfs?rd.node:((typeof PLN_TRAIN_ID!=="undefined")?PLN_TRAIN_ID[rd.node]:null); if(!mid) return;
      var ckeyT="T|"+mid+"|"+rd.dir; if(window.__liveCache[ckeyT]){ span.innerHTML=window.__liveCache[ckeyT]; plnLiveMark(span,true); } else if(!quiet){ span.textContent="⏱ Fetching live trains…"; plnLiveMark(span,false); }
      var url="https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?mapid="+mid+"&max=6&outputType=JSON"+(cfg.relay?"":"&key="+encodeURIComponent(cfg.train));
      plnFetchJSON(url,"ctatt",{keyed:!!(cfg.relay||cfg.train),isErr:function(j){ return !!(j.ctatt&&j.ctatt.errCd==="101"); }}).then(function(j2){
        if(j2.ctatt.errCd&&j2.ctatt.errCd!=="0"){ plnLiveMark(span,false); span.textContent="⏱ CTA rejected the train key — check it under Live times → Edit"; return; }
        var etas=(j2&&j2.ctatt&&j2.ctatt.eta)||[];
        var codes=PLN_RT_CODES[rd.line]||[];
        var toks=plnDirTokens(rd.dir);
        var mine=etas.filter(function(e){ return codes.indexOf(e.rt)>=0&&toks.some(function(t){ return String(e.stpDe||"").toLowerCase().indexOf(t)>=0; }); });
        if(!mine.length) mine=etas.filter(function(e){ return codes.indexOf(e.rt)>=0; });
        if(!mine.length){ plnLiveMark(span,false); span.textContent="⏱ No live trains reported right now"; return; }
        var now=Date.now(), ent=[], dly=false;
        mine.slice(0,3).forEach(function(e){
          if(e.isDly==="1") dly=true;
          var k=PLN_RT_COLOR[e.rt]||"";
          if(e.isApp==="1"){ ent.push({late:(e.isDly==="1"), veh:plnVeh(e.rt), dir:(e.destNm?("toward "+e.destNm):rd.dir), m:"due", c:plnClock(plnChiMs(e.arrT)), k:k}); return; }
          var m=Math.round((plnChiMs(e.arrT)-now)/60000);
          ent.push({late:(e.isDly==="1"), veh:plnVeh(e.rt), dir:(e.destNm?("toward "+e.destNm):rd.dir), m:(m<=0?"due":m+" min"), c:plnClock(plnChiMs(e.arrT)), k:k});
        });
        plnLiveMark(span,true); span.innerHTML="<span class=\"liveLbl\">🟢 Live: next "+(codes.length>1?rd.line.split(" ")[0]+" ":"")+"trains</span>"+liveTable(ent, rd); window.__liveCache[ckeyT]=span.innerHTML;
      }).catch(function(){ plnLiveMark(span,false); span.textContent="⏱ Live times unavailable right now"; });
    } else {
      if(!cfg.relay&&!cfg.bus) return;
      var stpid=null; if(rd.gtfs){ stpid=rd.node; } else { var byDir=(typeof PLN_BUS_ID!=="undefined")?PLN_BUS_ID[rd.node+"|"+rd.route]:null; stpid=byDir?byDir[rd.dir]:null; } if(!stpid) return;
      var ckeyB="B|"+stpid+"|"+rd.route; if(window.__liveCache[ckeyB]){ span.innerHTML=window.__liveCache[ckeyB]; plnLiveMark(span,true); } else if(!quiet){ span.textContent="⏱ Fetching live buses…"; plnLiveMark(span,false); }
      var url2="https://www.ctabustracker.com/bustime/api/v2/getpredictions?stpid="+stpid+"&format=json"+(cfg.relay?"":"&key="+encodeURIComponent(cfg.bus));
      plnFetchJSON(url2,"bustime-response",{keyed:!!(cfg.relay||cfg.bus),isErr:function(j){ var e=j["bustime-response"]&&j["bustime-response"].error; return !!(e&&e.length&&/key/i.test((e[0]&&e[0].msg)||"")); }}).then(function(j2){
        var berr=j2["bustime-response"].error; if(berr&&berr.length){ var bmsg=(berr[0]&&berr[0].msg)||""; plnLiveMark(span,false);
          if(/key/i.test(bmsg)) span.textContent="⏱ CTA rejected the bus key";
          else if(/no service scheduled/i.test(bmsg)) span.textContent="⏱ No more #"+rd.route+" buses scheduled right now";
          else span.textContent="⏱ "+(bmsg||"No live buses reported right now");
          return; }
        var prds=(j2&&j2["bustime-response"]&&j2["bustime-response"].prd)||[];
        var mine=prds.filter(function(p){ return String(p.rt)===String(rd.route); });
        if(!mine.length){ plnLiveMark(span,false); span.textContent="⏱ No live buses reported right now"; return; }
        var ent=[], dly=false;
        mine.slice(0,3).forEach(function(p){ if(p.dly) dly=true; ent.push({late:!!p.dly, veh:"Bus #"+rd.route, dir:((p.rtdir||"")+(p.des?(" to "+p.des):""))||rd.dir, m:((p.prdctdn==="DUE"||parseInt(p.prdctdn,10)<=0)?"due":p.prdctdn+" min"), c:plnClock(plnBusMs(p.prdtm)), k:""}); });
        plnLiveMark(span,true); span.innerHTML="<span class=\"liveLbl\">🟢 Live: next #"+rd.route+" buses</span>"+liveTable(ent, rd); window.__liveCache[ckeyB]=span.innerHTML;
      }).catch(function(){ plnLiveMark(span,false); span.textContent="⏱ Live times unavailable right now"; });
    }
  });
  if(window.__liveTimer) clearInterval(window.__liveTimer);
  window.__liveTimer=setInterval(function(){ if(document.getElementById("liveT0")) plnLiveFill(rides,true); else { clearInterval(window.__liveTimer); window.__liveTimer=null; } },20000);
}
/* Live-times setup row (keys live only on this device) */
function plnLiveSetupRender(){
  var lsu=document.getElementById("liveSetup"); if(!lsu) return;
  var c=plnLiveCfg();
  if(c.relay||c.train||c.bus) lsu.innerHTML="<span>🟢 <strong>Live times: on</strong></span>";
  else lsu.innerHTML="<span>🔴 <strong>Live times: off</strong></span>";
  var b=document.getElementById("liveEdit"); if(b) b.addEventListener("click",plnLiveForm);
}
function plnLiveForm(){
  var lsu=document.getElementById("liveSetup"); if(!lsu) return;
  var c=plnLiveCfg();
  lsu.innerHTML="<label>Train Tracker key <input class='planIn' id='liveTrainKey' type='text' autocomplete='off' value='"+plnEsc(c.train)+"'></label>"
   +"<label>Bus Tracker key <input class='planIn' id='liveBusKey' type='text' autocomplete='off' value='"+plnEsc(c.bus)+"'></label>"
   +"<label>Relay URL (optional, if you run one) <input class='planIn' id='liveRelay' type='url' autocomplete='off' placeholder='https://your-relay.workers.dev' value='"+plnEsc(c.relay)+"'></label>"
   +"<p class='planBtns'><button type='button' class='btn go' id='liveSave'>Save</button><button type='button' class='btn' id='liveCancel'>Cancel</button></p>"
   +"<p style='font-size:12.5px;color:var(--mut)'>Stored only on this phone, never in the app code. Trains: apply at transitchicago.com/developers (Train Tracker). Buses: ctabustracker.com account, then My Account → Developer API.</p>";
  document.getElementById("liveSave").addEventListener("click",function(){
    plnLsSet("chiTrainKey",document.getElementById("liveTrainKey").value.trim());
    plnLsSet("chiBusKey",document.getElementById("liveBusKey").value.trim());
    plnLsSet("chiRelay",document.getElementById("liveRelay").value.trim());
    plnLiveSetupRender();
    if(document.getElementById("planTo")&&document.getElementById("planTo").value&&typeof plnGo==="function") plnGo();
  });
  document.getElementById("liveCancel").addEventListener("click",plnLiveSetupRender);
}
if(typeof document!=="undefined"&&document.addEventListener&&!window.__liveVisHook){ window.__liveVisHook=1; document.addEventListener("visibilitychange",function(){ if(!document.hidden&&window.__liveRides&&document.getElementById("liveT0")) plnLiveFill(window.__liveRides,true); }); }
if(typeof document!=="undefined"&&document.getElementById&&document.getElementById("liveSetup")) plnLiveSetupRender();

/* ---- Planner v2: full CTA network from GTFS (gtfs-graph.js) ---- */
var GT_ON = (typeof GT_NODES!=="undefined" && typeof GT_EDGES!=="undefined" && typeof GT_ROUTES!=="undefined");
var GT_GRID=null, GT_XFER=(typeof GT_XFER0!=="undefined")?GT_XFER0:null;
function gtInit(){
  if(GT_GRID) return;
  if(!GT_XFER) GT_XFER={};
  GT_GRID={};
  GT_NODES.forEach(function(n,i){
    var k=Math.floor(n[2]/0.004)+":"+Math.floor(n[3]/0.004);
    (GT_GRID[k]=GT_GRID[k]||[]).push(i);
  });
  GT_XFER={};
}
function gtXferFor(i){
  if(GT_XFER[i]!==undefined) return GT_XFER[i];
  var n=GT_NODES[i], near=gtNear(n[2],n[3],0.10,14), lst=[];
  near.forEach(function(x){ if(x.i!==i) lst.push([x.i, Math.max(1, Math.round(x.d*20)), x.d]); });
  GT_XFER[i]=lst; return lst;
}
function gtNear(lat,lng,rMi,maxN){
  var out=[], seen={};
  var c0=Math.floor(lat/0.004), c1=Math.floor(lng/0.004);
  var span=Math.max(1, Math.ceil(rMi/69/0.004)+1);
  for(var a=c0-span;a<=c0+span;a++) for(var b=c1-span;b<=c1+span;b++){
    var cell=GT_GRID[a+":"+b]; if(!cell) continue;
    cell.forEach(function(i){
      if(seen[i]) return; seen[i]=1;
      var d=plnDist([lat,lng],[GT_NODES[i][2],GT_NODES[i][3]]);
      if(d<=rMi) out.push({i:i,d:d});
    });
  }
  out.sort(function(x,y){ return x.d-y.d; });
  return out.slice(0,maxN||99);
}
function planRouteGT(fromPin,toPin,banSet){
  gtInit();
  var NN=GT_NODES.length, SRC=NN, DST=NN+1, TOT=NN+2;
  var dist=new Float64Array(TOT).fill(Infinity);
  var prevN=new Int32Array(TOT).fill(-1);
  var prevK=new Uint8Array(TOT);           // 1 walk, 2 ride, 3 xfer, 4 walkall
  var prevR=new Int32Array(TOT), prevD=new Uint8Array(TOT);
  var prevMin=new Float64Array(TOT), prevDist=new Float64Array(TOT);
  var done=new Uint8Array(TOT);
  var fromNear=gtNear(fromPin.lat,fromPin.lng,1.05,40);
  var toNear=gtNear(toPin.lat,toPin.lng,1.05,40);
  if(!fromNear.length||!toNear.length) return null;
  function addRail(list,lat,lng){ var seen={}; list.forEach(function(x){ seen[x.i]=1; });
    GT_NODES.forEach(function(n,ix){ if(n[4]===1&&!seen[ix]){ var d=plnDist([lat,lng],[n[2],n[3]]); if(d<=1.05) list.push({i:ix,d:d}); } }); }
  addRail(fromNear,fromPin.lat,fromPin.lng); addRail(toNear,toPin.lat,toPin.lng);
  var toSet={}; toNear.forEach(function(x){ toSet[x.i]=x; });
  var directD=plnDist([fromPin.lat,fromPin.lng],[toPin.lat,toPin.lng]);
  var heap=[[0,SRC]];
  function hPush(c,n){ heap.push([c,n]); var i=heap.length-1; while(i>0){ var p=(i-1)>>1; if(heap[p][0]<=heap[i][0]) break; var t=heap[p]; heap[p]=heap[i]; heap[i]=t; i=p; } }
  function hPop(){ var top=heap[0], last=heap.pop(); if(heap.length){ heap[0]=last; var i=0; for(;;){ var l=2*i+1, r=l+1, m=i; if(l<heap.length&&heap[l][0]<heap[m][0]) m=l; if(r<heap.length&&heap[r][0]<heap[m][0]) m=r; if(m===i) break; var t=heap[m]; heap[m]=heap[i]; heap[i]=t; i=m; } } return top; }
  dist[SRC]=0;
  var found=false;
  while(heap.length){
    var top=hPop(), u=top[1], uc=top[0];
    if(done[u]) continue; done[u]=1;
    if(u===DST){ found=true; break; }
    if(uc>dist[u]+1e-9) continue;
    if(u===SRC){
      for(var fi=0; fi<fromNear.length; fi++){ var fx=fromNear[fi], fw=Math.max(1,Math.round(fx.d*20)), fn=fx.i;
        if(dist[SRC]+fw<dist[fn]){ dist[fn]=dist[SRC]+fw; prevN[fn]=SRC; prevK[fn]=1; prevMin[fn]=fw; prevDist[fn]=fx.d; hPush(dist[fn],fn); } }
      if(directD<=1.2){ var wa=Math.max(1,Math.round(directD*20));
        if(wa<dist[DST]){ dist[DST]=wa; prevN[DST]=SRC; prevK[DST]=4; prevMin[DST]=wa; prevDist[DST]=directD; hPush(wa,DST); } }
      continue;
    }
    var ts=toSet[u];
    if(ts){ var w2=Math.max(1,Math.round(ts.d*20));
      if(dist[u]+w2<dist[DST]){ dist[DST]=dist[u]+w2; prevN[DST]=u; prevK[DST]=1; prevMin[DST]=w2; prevDist[DST]=ts.d; hPush(dist[DST],DST); } }
    var pk=prevK[u], pr=prevR[u], pd=prevD[u];
    var edges=GT_EDGES[u]||[];
    for(var ei=0; ei<edges.length; ei++){
      var e=edges[ei], sameRun=(pk===2&&pr===e[2]&&pd===e[3]);
      if(banSet&&banSet[e[2]+":"+e[3]]) continue;
      var w=e[1]/60+(sameRun?0:3), nd=dist[u]+w, tn=e[0];
      if(nd<dist[tn]){ dist[tn]=nd; prevN[tn]=u; prevK[tn]=2; prevR[tn]=e[2]; prevD[tn]=e[3]; hPush(nd,tn); }
    }
    if(pk===2){ // street transfers only make sense right after a ride
      var xf=gtXferFor(u);
      for(var xi=0; xi<xf.length; xi++){ var xn=xf[xi][0], xw=xf[xi][1], nd2=dist[u]+xw;
        if(nd2<dist[xn]){ dist[xn]=nd2; prevN[xn]=u; prevK[xn]=3; prevMin[xn]=xw; prevDist[xn]=xf[xi][2]; hPush(nd2,xn); } }
    }
  }
  if(!found) return null;
  var path=[], cur=DST;
  var KIND=["","walk","ride","xfer","walkall"];
  while(cur!==SRC){ var p=prevN[cur]; if(p<0) return null;
    path.unshift({from:p,to:cur,e:{kind:KIND[prevK[cur]],route:prevR[cur],dir:prevD[cur],min:prevMin[cur],d:prevDist[cur],to:cur}});
    cur=p; }
  var steps=[], rides=[], total=0, coords=[[fromPin.lat,fromPin.lng]], legs=[];
  function nodeName(i){ return GT_NODES[i][1]; }
  function nodeCoord(i){ return [GT_NODES[i][2],GT_NODES[i][3]]; }
  var i=0;
  while(i<path.length){
    var sg=path[i];
    if(sg.e.kind==="ride"){
      var rt=sg.e.route, dr=sg.e.dir, board=sg.from, exitN=sg.to, secs=0, nstops=0;
      while(i<path.length&&path[i].e.kind==="ride"&&path[i].e.route===rt&&path[i].e.dir===dr){
        var ed=(GT_EDGES[path[i].from]||[]).filter(function(x){ return x[0]===path[i].to&&x[2]===rt&&x[3]===dr; })[0];
        secs+=ed?ed[1]:60; nstops++; exitN=path[i].to; coords.push(nodeCoord(path[i].to)); i++;
      }
      var mins=Math.max(1,Math.round(secs/60));
      total+=mins+3;
      var R=GT_ROUTES[rt];
      var isBus=R[1]===3;
      var lineName=isBus?("#"+R[0]):R[0];
      var hs=R[2+dr]||"";
      steps.push((isBus?"🚌":"🚇")+" Board the "+lineName+" at "+nodeName(board)+" (toward "+hs+") → ride "+nstops+(nstops===1?" stop":" stops")+", ~"+mins+" min → exit at "+nodeName(exitN));
      rides.push({step:steps.length-1,mode:isBus?"bus":"train",line:lineName,route:isBus?String(R[0]).split(" ")[0]:null,node:GT_NODES[board][0],dir:"toward "+hs,boardName:nodeName(board),exitName:nodeName(exitN),gtfs:1,ridx:rt,gdir:dr});
    } else if(sg.e.kind==="walkall"){
      legs.push({step:steps.length,kind:"all",from:[fromPin.lat,fromPin.lng],to:[toPin.lat,toPin.lng],ci:0,toName:toPin.n});
      total+=sg.e.min||Math.max(1,Math.round(directD*20));
      steps.push("🚶 Walk the whole way — ~"+(sg.e.min||Math.max(1,Math.round(directD*20)))+" min ("+plnFmtD(directD)+") to "+toPin.n); i++;
    } else {
      var wmin=0, wdist=0, lastTo=sg.to;
      while(i<path.length && (path[i].e.kind==="walk"||path[i].e.kind==="xfer")){ wmin+=path[i].e.min||2; wdist+=path[i].e.d||0; lastTo=path[i].to; i++; }
      total+=wmin;
      var isEnd=(lastTo===DST);
      legs.push({step:steps.length,kind:isEnd?"end":(steps.length===0?"start":"transfer"),from:coords[coords.length-1].slice(),to:isEnd?[toPin.lat,toPin.lng]:nodeCoord(lastTo),ci:coords.length-1,toName:isEnd?toPin.n:nodeName(lastTo)});
      if(isEnd){ steps.push("🚶 Walk ~"+wmin+" min ("+plnFmtD(wdist)+") to "+toPin.n+" — you're there"); }
      else { steps.push((steps.length===0?"🚶 Walk ~":"🚶 Transfer: walk ~")+wmin+" min ("+plnFmtD(wdist)+") to "+nodeName(lastTo)); coords.push(nodeCoord(lastTo)); }
    }
  }
  coords.push([toPin.lat,toPin.lng]);
  return {steps:steps,totalMin:total,coords:coords,rides:rides,walkLegs:legs};
}
function gtNowSvcMin(){
  if(typeof window!=="undefined"&&window.__nowMin!=null) return window.__nowMin;
  try{
    var parts=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(new Date());
    var h=0,m=0; parts.forEach(function(pp){ if(pp.type==="hour") h=parseInt(pp.value,10)%24; if(pp.type==="minute") m=parseInt(pp.value,10); });
    var t=h*60+m; if(h<3) t+=1440; return t;
  }catch(e){ var d=new Date(); var t2=d.getHours()*60+d.getMinutes(); if(d.getHours()<3) t2+=1440; return t2; }
}
function gtClock(mins){ var m=((mins%1440)+1440)%1440; var h=Math.floor(m/60), mm=m%60, ap=h<12?"AM":"PM"; var h12=h%12; if(h12===0) h12=12; return h12+":"+(mm<10?"0":"")+mm+" "+ap; }
function gtRideState(rd){
  if(typeof GT_SPANS==="undefined"||!rd||rd.ridx==null) return null;
  var sp=GT_SPANS[rd.ridx]; if(!sp) return null;
  var one=sp[rd.gdir]; if(!one||one[1]<=one[0]) return null;
  var now=gtNowSvcMin();
  if(now>=one[0]&&now<=one[1]) return null;
  return now<one[0]?{kind:"before",at:one[0]}:{kind:"after",at:one[1]};
}
function planRoute(fromPin,toPin){
  if(GT_ON){ try{
    var r=planRouteGT(fromPin,toPin,null);
    if(r&&r.rides&&typeof GT_SPANS!=="undefined"){
      var dead=r.rides.map(function(rd){ return {rd:rd,st:gtRideState(rd)}; }).filter(function(x){ return !!x.st; });
      if(dead.length){
        var ban={}; dead.forEach(function(x){ ban[x.rd.ridx+":"+x.rd.gdir]=1; });
        var r2=null; try{ r2=planRouteGT(fromPin,toPin,ban); }catch(e){}
        if(r2&&r2.rides&&r2.rides.length){
          r2.notice=dead.map(function(x){ return x.rd.line+" isn't running now ("+(x.st.kind==="before"?("service starts "+gtClock(x.st.at)):("service ended "+gtClock(x.st.at)))+")"; }).join(" · ")+" — routed another way instead.";
          return r2;
        }
        dead.forEach(function(x){ r.steps[x.rd.step]+=" ⚠️ Not running now — "+(x.st.kind==="before"?("service starts "+gtClock(x.st.at)):("service ended "+gtClock(x.st.at)))+"."; x.rd.notRunning=1; });
      }
    }
    if(r) return r;
  }catch(e){} }
  return planRouteV1(fromPin,toPin);
}

function osrmBearing(b){ if(b==null||isNaN(b)) return ""; var dirs=["north","northeast","east","southeast","south","southwest","west","northwest"]; return dirs[Math.round((((b%360)+360)%360)/45)%8]; }
function osrmInstr(st){
  var m=st.maneuver||{}, name=st.name||"", mod=m.modifier||"";
  if(name==="-") name="";
  if(m.type==="arrive") return "";
  if(m.type==="depart") return "Head "+osrmBearing(m.bearing_after)+(name?(" on "+name):"");
  if(m.type==="turn") return "Turn "+mod+(name?(" onto "+name):"");
  if(m.type==="end of road") return "At the end of the road, turn "+mod+(name?(" onto "+name):"");
  if(m.type==="fork") return "Keep "+mod+(name?(" onto "+name):"");
  if(m.type==="merge") return "Merge"+(name?(" onto "+name):"");
  if(m.type==="roundabout"||m.type==="rotary") return "At the roundabout, take exit "+(m.exit||"")+(name?(" onto "+name):"");
  if(m.type==="continue"||m.type==="new name") return name?("Continue on "+name):"Continue";
  return (mod?("Turn "+mod):"Continue")+(name?(" onto "+name):"");
}
function plnOsrmEnrich(res){
  if(!res||!res.walkLegs||!res.walkLegs.length||typeof fetch==="undefined") return;
  var tok=(window.__routeTok=(window.__routeTok||0)+1);
  var base=res.coords.map(function(c){ return [c[0],c[1]]; });
  res.walkLegs.forEach(function(leg){
    var url="https://router.project-osrm.org/route/v1/foot/"+leg.from[1]+","+leg.from[0]+";"+leg.to[1]+","+leg.to[0]+"?steps=true&overview=full&geometries=geojson";
    var ctl=(typeof AbortController!=="undefined")?new AbortController():null;
    var timer=ctl?setTimeout(function(){ try{ ctl.abort(); }catch(e){} },6000):null;
    fetch(url, ctl?{signal:ctl.signal}:undefined).then(function(r){ return r.json(); }).then(function(j){
      if(timer) clearTimeout(timer);
      if(tok!==window.__routeTok) return;
      if(!j||!j.routes||!j.routes[0]) return;
      var rt=j.routes[0];
      var mi=rt.distance/1609.34, mins=Math.max(1,Math.round(mi*20));
      var out=document.getElementById("planOut"); if(!out||!out.querySelector) return;
      var ol=out.querySelector("ol"); if(!ol) return;
      var li=ol.children[leg.step]; if(!li) return;
      var head=(leg.kind==="all"?"🚶 Walk the whole way — ~":(leg.kind==="transfer"?"🚶 Transfer: walk ~":"🚶 Walk ~"))+mins+" min ("+plnFmtD(mi)+") to "+leg.toName+(leg.kind==="end"?" — you're there":"");
      var subs=[], raw=(rt.legs&&rt.legs[0])?rt.legs[0].steps:[];
      raw.forEach(function(st){
        var ins=osrmInstr(st); if(!ins) return;
        if(st.distance) ins+=" · "+plnFmtD(st.distance/1609.34);
        if(subs.length&&subs[subs.length-1]===ins) return;
        subs.push(ins);
      });
      if(subs.length>9) subs=subs.slice(0,9);
      li.innerHTML=plnEsc(head)+(subs.length?("<ul class='walkSub'>"+subs.map(function(x){ return "<li>"+plnEsc(x)+"</li>"; }).join("")+"</ul>"):"");
      var geo=(rt.geometry&&rt.geometry.coordinates)?rt.geometry.coordinates.map(function(p){ return [p[1],p[0]]; }):[];
      leg.maneuvers=raw.map(function(st){ var ins=osrmInstr(st); var mv=(st.maneuver||{}).location; return (ins&&mv)?{lat:mv[1],lng:mv[0],text:ins}:null; }).filter(Boolean);
      if(geo.length>1){
        var idx=leg.ci;
        base.splice.apply(base,[idx,2].concat(geo));
        leg.geoN=geo.length;
        res.walkLegs.forEach(function(o){ if(o!==leg&&o.ci>idx) o.ci+=geo.length-2; });
        res.coords=base;
        plnDrawRoute(base);
      }
    }).catch(function(){ if(timer) clearTimeout(timer); });
  });
}

/* ---- Navigation mode: live GPS follow, advancing steps, voice, reroute ---- */
var PLN_NAV={on:false,watch:null,seq:[],idx:0,res:null,dest:null,lastPos:null,offTicks:0,lastReroute:0,lastPan:0,dot:null,voice:(function(){ try{ return localStorage.getItem("chiNavVoice")!=="0"; }catch(e){ return true; } })()};
window.__nav=PLN_NAV;
function plnNavEl(id){ return document.getElementById(id); }
function plnNavSpeak(txt){ if(!PLN_NAV.voice||typeof speechSynthesis==="undefined") return; try{ speechSynthesis.cancel(); var u=new SpeechSynthesisUtterance(String(txt).replace(/[\uD83D\uDEB6\uD83D\uDE8C\uD83D\uDE87\uD83E\uDD6C\u23F1\uD83D\uDFE2\uD83D\uDD34]/g,"")); u.rate=1.05; speechSynthesis.speak(u); }catch(e){} }
function plnNavBuildSeq(res){
  var seq=[];
  var legs=(res.walkLegs||[]).slice().sort(function(a,b){ return a.step-b.step; });
  var rides=(res.rides||[]).slice().sort(function(a,b){ return a.step-b.step; });
  var items=[];
  legs.forEach(function(l){ items.push({type:"walk",step:l.step,leg:l}); });
  rides.forEach(function(r){ items.push({type:"ride",step:r.step,ride:r}); });
  items.sort(function(a,b){ return a.step-b.step; });
  var coords=res.coords||[];
  var prevIdx=0;
  items.forEach(function(it){
    if(it.type==="walk"){
      var leg=it.leg, geoN=leg.geoN||2;
      if(leg.maneuvers&&leg.maneuvers.length){
        leg.maneuvers.forEach(function(mv){ seq.push({lat:mv.lat,lng:mv.lng,text:mv.text,kind:"walk",thr:0.016}); });
      } else {
        seq.push({lat:leg.to[0],lng:leg.to[1],text:(res.steps[leg.step]||"Walk"),kind:"walk",thr:0.016});
      }
      prevIdx=leg.ci+geoN-1;
    } else {
      var rd=it.ride;
      var nextLeg=null; legs.forEach(function(l){ if(l.step>rd.step&&!nextLeg) nextLeg=l; });
      var endIdx=nextLeg?nextLeg.ci:(coords.length-1);
      var stations=coords.slice(prevIdx,endIdx+1);
      if(stations.length){
        var b=stations[0], x=stations[stations.length-1];
        seq.push({lat:b[0],lng:b[1],text:"Board the "+rd.line+" at "+rd.boardName+" ("+rd.dir+")",kind:"board",thr:0.02});
        seq.push({lat:x[0],lng:x[1],text:"🚇 Ride the "+rd.line+" — get off at "+rd.exitName,kind:"ride",thr:0.045,stations:stations,line:rd.line,exitName:rd.exitName});
      }
      prevIdx=endIdx;
    }
  });
  var last=coords[coords.length-1];
  if(last) seq.push({lat:last[0],lng:last[1],text:"🎉 You've arrived",kind:"arrive",thr:0.03});
  return seq;
}
function plnNavSetCard(){
  var big=plnNavEl("navBig"), sub=plnNavEl("navSub"); if(!big) return;
  var wp=PLN_NAV.seq[PLN_NAV.idx];
  if(!wp){ big.textContent="🎉 You've arrived"; if(sub) sub.textContent=""; return; }
  big.textContent=wp.text;
  if(!sub) return;
  var pos=PLN_NAV.lastPos;
  if(!pos){ sub.textContent="Waiting for GPS…"; return; }
  if(wp.kind==="ride"&&wp.stations){
    var ni=0, nd=1e9;
    wp.stations.forEach(function(st,i){ var dd=plnDist([pos.lat,pos.lng],st); if(dd<nd){ nd=dd; ni=i; } });
    var left=wp.stations.length-1-ni;
    sub.textContent=left>0?((left===1?"1 stop":left+" stops")+" to go · exit at "+wp.exitName):("Arriving at "+wp.exitName+" — get ready to exit");
  } else {
    sub.textContent="In "+plnFmtD(plnDist([pos.lat,pos.lng],[wp.lat,wp.lng]));
  }
}
function plnNavAdvance(){
  PLN_NAV.idx++; PLN_NAV.offTicks=0;
  if(PLN_NAV.idx>=PLN_NAV.seq.length){ plnNavArrive(); return; }
  plnNavSetCard();
  plnNavSpeak(PLN_NAV.seq[PLN_NAV.idx].text);
}
function plnNavArrive(){
  var big=plnNavEl("navBig"), sub=plnNavEl("navSub");
  if(big) big.textContent="🎉 You've arrived";
  if(sub) sub.textContent=PLN_NAV.dest?("Welcome to "+PLN_NAV.dest.n):"";
  plnNavSpeak("You have arrived");
  setTimeout(function(){ if(PLN_NAV.on) plnNavEnd(); }, 6000);
}
function plnNavOffDist(pos, coords){
  var la=69, lo=69*Math.cos(pos.lat*Math.PI/180);
  var px=pos.lng*lo, py=pos.lat*la, best=1e9;
  for(var i=0;i<coords.length-1;i++){
    var ax=coords[i][1]*lo, ay=coords[i][0]*la, bx=coords[i+1][1]*lo, by=coords[i+1][0]*la;
    var dx=bx-ax, dy=by-ay, L2=dx*dx+dy*dy;
    var t=L2?((px-ax)*dx+(py-ay)*dy)/L2:0; t=Math.max(0,Math.min(1,t));
    var ex=ax+t*dx-px, ey=ay+t*dy-py, dd=ex*ex+ey*ey;
    if(dd<best) best=dd;
  }
  return Math.sqrt(best);
}
function plnNavTick(pos){
  var lat=pos.coords.latitude, lng=pos.coords.longitude, acc=pos.coords.accuracy||999;
  PLN_NAV.lastPos={lat:lat,lng:lng,acc:acc};
  if(typeof myPos!=="undefined") myPos={lat:lat,lng:lng};
  if(typeof L!=="undefined"&&typeof map!=="undefined"&&map){
    try{
      if(!PLN_NAV.dot){ PLN_NAV.dot=L.circleMarker([lat,lng],{radius:8,color:"#ffffff",weight:3,fillColor:"#1e9e50",fillOpacity:1}).addTo(map); }
      else PLN_NAV.dot.setLatLng([lat,lng]);
      var now=Date.now();
      if(now-PLN_NAV.lastPan>1500){ var c=map.getCenter(); if(plnDist([c.lat,c.lng],[lat,lng])>0.01) map.panTo([lat,lng]); PLN_NAV.lastPan=now; }
    }catch(e){}
  }
  var wp=PLN_NAV.seq[PLN_NAV.idx]; if(!wp) return;
  if(acc>160){ var s0=plnNavEl("navSub"); if(s0) s0.textContent="GPS signal weak (±"+Math.round(acc*3.28)+" ft) — hold on"; return; }
  var d=plnDist([lat,lng],[wp.lat,wp.lng]);
  if(d<wp.thr){ plnNavAdvance(); return; }
  if((wp.kind==="walk"||wp.kind==="board")&&PLN_NAV.res){
    var off=plnNavOffDist(PLN_NAV.lastPos, PLN_NAV.res.coords||[]);
    PLN_NAV.offTicks=(off>0.075)?PLN_NAV.offTicks+1:0;
    if(PLN_NAV.offTicks>=3&&Date.now()-PLN_NAV.lastReroute>45000){
      PLN_NAV.lastReroute=Date.now(); PLN_NAV.offTicks=0;
      plnNavSpeak("Rerouting");
      window.__navRerender=1;
      plnRender({n:"📍 Your current location",lat:lat,lng:lng}, PLN_NAV.dest);
      window.__navRerender=0;
      if(window.__lastRoute){ PLN_NAV.res=window.__lastRoute.res; PLN_NAV.seq=plnNavBuildSeq(PLN_NAV.res); PLN_NAV.idx=0; }
    }
  }
  plnNavSetCard();
}
function plnNavStart(){
  var lr=window.__lastRoute; if(!lr||!lr.res) return;
  if(typeof navigator==="undefined"||!navigator.geolocation){ var s1=plnNavEl("navSub"); if(s1) s1.textContent="Geolocation isn't available in this browser."; return; }
  PLN_NAV.res=lr.res; PLN_NAV.dest=lr.to;
  PLN_NAV.seq=plnNavBuildSeq(lr.res); PLN_NAV.idx=0; PLN_NAV.offTicks=0; PLN_NAV.lastReroute=0;
  if(!PLN_NAV.seq.length) return;
  PLN_NAV.on=true;
  var card=plnNavEl("navCard"), btn=plnNavEl("navBtn");
  if(card) card.style.display="block"; if(btn) btn.style.display="none";
  var vb=plnNavEl("navVoice"); if(vb) vb.textContent=PLN_NAV.voice?"🔊 Voice: on":"🔇 Voice: off";
  plnNavSetCard();
  plnNavSpeak(PLN_NAV.seq[0].text);
  PLN_NAV.watch=navigator.geolocation.watchPosition(plnNavTick, function(){ var s=plnNavEl("navSub"); if(s) s.textContent="GPS unavailable — check location permission"; }, {enableHighAccuracy:true, maximumAge:3000, timeout:20000});
}
function plnNavEnd(){
  PLN_NAV.on=false;
  if(PLN_NAV.watch!=null&&typeof navigator!=="undefined"&&navigator.geolocation) navigator.geolocation.clearWatch(PLN_NAV.watch);
  PLN_NAV.watch=null;
  if(typeof speechSynthesis!=="undefined"){ try{ speechSynthesis.cancel(); }catch(e){} }
  if(PLN_NAV.dot&&typeof map!=="undefined"&&map){ try{ map.removeLayer(PLN_NAV.dot); }catch(e){} PLN_NAV.dot=null; }
  var card=plnNavEl("navCard"), btn=plnNavEl("navBtn");
  if(card) card.style.display="none"; if(btn&&window.__lastRoute) btn.style.display="block";
}
if(typeof document!=="undefined"&&document.getElementById){
  var __nb=document.getElementById("navBtn"); if(__nb) __nb.addEventListener("click",plnNavStart);
  var __ne=document.getElementById("navEnd"); if(__ne) __ne.addEventListener("click",plnNavEnd);
  var __nn=document.getElementById("navNext"); if(__nn) __nn.addEventListener("click",function(){ plnNavAdvance(); });
  var __nv=document.getElementById("navVoice"); if(__nv) __nv.addEventListener("click",function(){ PLN_NAV.voice=!PLN_NAV.voice; try{ localStorage.setItem("chiNavVoice",PLN_NAV.voice?"1":"0"); }catch(e){} __nv.textContent=PLN_NAV.voice?"🔊 Voice: on":"🔇 Voice: off"; if(PLN_NAV.voice) plnNavSpeak("Voice on"); });
}
