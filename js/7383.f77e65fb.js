(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7383,1194],{66684:function(t,e,s){
/*!
 * @kirtandesai/ol-geocoder - v5.0.3
 * A geocoder extension compatible with OpenLayers v7.
 * https://github.com/kirtan-desai/ol-geocoder
 * Built: Thu Nov 17 2022 14:58:35 GMT-0500 (Eastern Standard Time)
 */
!function(e,n){t.exports=n(s(10972),s(29276),s(49700),s(82986),s(54602),s(44294),s(86717),s(89718))}(0,(function(t,e,s,n,i,r,a,o){"use strict";function c(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=c(t),d=c(e),u=c(s),h=c(n),p=c(i),g=c(r),m=c(a),f=c(o),y="gcd-container",w="gcd-button-control",v="gcd-input-query",_="gcd-input-reset",b={namespace:"ol-geocoder",spin:"gcd-pseudo-rotate",hidden:"gcd-hidden",address:"gcd-address",country:"gcd-country",city:"gcd-city",road:"gcd-road",olControl:"ol-control",glass:{container:"gcd-gl-container",control:"gcd-gl-control",button:"gcd-gl-btn",input:"gcd-gl-input",expanded:"gcd-gl-expanded",reset:"gcd-gl-reset",result:"gcd-gl-result"},inputText:{container:"gcd-txt-container",control:"gcd-txt-control",input:"gcd-txt-input",reset:"gcd-txt-reset",icon:"gcd-txt-glass",result:"gcd-txt-result"}},A={containerId:y,buttonControlId:w,inputQueryId:v,inputResetId:_,cssClasses:b};const D=Object.freeze({__proto__:null,containerId:y,buttonControlId:w,inputQueryId:v,inputResetId:_,cssClasses:b,default:A}),C="addresschosen",S="nominatim",T="reverse",k="glass-button",L="text-input",I="osm",E="mapquest",x="photon",M="bing",P="opencage",$={provider:I,placeholder:"Search for an address",featureStyle:null,targetType:k,lang:"en-US",limit:5,keepOpen:!1,preventDefault:!1,autoComplete:!1,autoCompleteMinLength:2,autoCompleteTimeout:200,debug:!1};function N(t,e="Assertion failed"){if(!t){if("undefined"!=typeof Error)throw new Error(e);throw e}}function R(t){const e=function(){if("performance"in window==0&&(window.performance={}),"now"in window.performance==0){let t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),window.performance.now=()=>Date.now()-t}return window.performance.now()}().toString(36);return t?t+e:e}function q(t){return/^\d+$/u.test(t)}function j(t,e,s){if(Array.isArray(t))return void t.forEach((t=>j(t,e)));const n=Array.isArray(e)?e:e.split(/\s+/u);let i=n.length;for(;i--;)F(t,n[i])||U(t,n[i],s)}function O(t,e,s){if(Array.isArray(t))return void t.forEach((t=>O(t,e,s)));const n=Array.isArray(e)?e:e.split(/\s+/u);let i=n.length;for(;i--;)F(t,n[i])&&Q(t,n[i],s)}function F(t,e){return t.classList?t.classList.contains(e):V(e).test(t.className)}function B(t,e){return t.replace(/\{\s*([\w-]+)\s*\}/gu,((t,s)=>{const n=void 0===e[s]?"":e[s];return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}))}function H(t,e){let s;if(Array.isArray(t)){if(s=document.createElement(t[0]),t[1].id&&(s.id=t[1].id),t[1].classname&&(s.className=t[1].classname),t[1].attr){const{attr:e}=t[1];if(Array.isArray(e)){let t=-1;for(;++t<e.length;)s.setAttribute(e[t].name,e[t].value)}else s.setAttribute(e.name,e.value)}}else s=document.createElement(t);s.innerHTML=e;const n=document.createDocumentFragment();for(;s.childNodes[0];)n.append(s.childNodes[0]);return s.append(n),s}function V(t){return new RegExp(`(^|\\s+) ${t} (\\s+|$)`,"u")}function U(t,e,s){t.classList?t.classList.add(e):t.className=`${t.className} ${e}`.trim(),s&&q(s)&&window.setTimeout((()=>Q(t,e)),s)}function Q(t,e,s){t.classList?t.classList.remove(e):t.className=t.className.replace(V(e)," ").trim(),s&&q(s)&&window.setTimeout((()=>U(t,e)),s)}const G=D.cssClasses;class K{constructor(t){this.options=t,this.els=this.createControl()}createControl(){let t,e,s;return this.options.targetType===L?(e=`${G.namespace} ${G.inputText.container}`,t=H(["div",{id:D.containerId,classname:e}],K.input),s={container:t,control:t.querySelector(`.${G.inputText.control}`),input:t.querySelector(`.${G.inputText.input}`),reset:t.querySelector(`.${G.inputText.reset}`),result:t.querySelector(`.${G.inputText.result}`)}):(e=`${G.namespace} ${G.glass.container}`,t=H(["div",{id:D.containerId,classname:e}],K.glass),s={container:t,control:t.querySelector(`.${G.glass.control}`),button:t.querySelector(`.${G.glass.button}`),input:t.querySelector(`.${G.glass.input}`),reset:t.querySelector(`.${G.glass.reset}`),result:t.querySelector(`.${G.glass.result}`)}),s.input.placeholder=this.options.placeholder,s}}K.glass=`\n  <div class="${G.glass.control} ${G.olControl}">\n    <button type="button" id="${D.buttonControlId}" class="${G.glass.button}"></button>\n    <input type="text" id="${D.inputQueryId}" class="${G.glass.input}" autocomplete="off" placeholder="Search ...">\n    <a id="${D.inputResetId}" class="${G.glass.reset} ${G.hidden}"></a>\n  </div>\n  <ul class="${G.glass.result}"></ul>\n`,K.input=`\n  <div class="${G.inputText.control}">\n    <input type="text" id="${D.inputQueryId}" class="${G.inputText.input}" autocomplete="off" placeholder="Search ...">\n    <span class="${G.inputText.icon}"></span>\n    <button type="button" id="${D.inputResetId}" class="${G.inputText.reset} ${G.hidden}"></button>\n  </div>\n  <ul class="${G.inputText.result}"></ul>\n`;class z{constructor(){this.settings={url:"https://photon.komoot.io/api/",params:{q:"",limit:10,lang:"en"},langs:["de","it","fr","en"]}}getParameters(t){return t.lang=t.lang.toLowerCase(),{url:this.settings.url,params:{q:t.query,limit:t.limit||this.settings.params.limit,lang:this.settings.langs.includes(t.lang)?t.lang:this.settings.params.lang}}}handleResponse(t){return 0===t.features.length?[]:t.features.map((t=>({lon:t.geometry.coordinates[0],lat:t.geometry.coordinates[1],address:{name:t.properties.name,postcode:t.properties.postcode,city:t.properties.city,state:t.properties.state,country:t.properties.country},original:{formatted:t.properties.name,details:t.properties}})))}}class X{constructor(){this.settings={url:"https://nominatim.openstreetmap.org/search/",params:{q:"",format:"json",addressdetails:1,limit:10,countrycodes:"","accept-language":"en-US"}}}getParameters(t){return{url:this.settings.url,params:{q:t.query,format:this.settings.params.format,addressdetails:this.settings.params.addressdetails,limit:t.limit||this.settings.params.limit,countrycodes:t.countrycodes||this.settings.params.countrycodes,"accept-language":t.lang||this.settings.params["accept-language"]}}}handleResponse(t){return 0===t.length?[]:t.map((t=>({lon:t.lon,lat:t.lat,bbox:t.boundingbox,address:{name:t.display_name,road:t.address.road||"",houseNumber:t.address.house_number||"",postcode:t.address.postcode,city:t.address.city||t.address.town,state:t.address.state,country:t.address.country},original:{formatted:t.display_name,details:t.address}})))}}class J{constructor(){this.settings={url:"https://open.mapquestapi.com/nominatim/v1/search.php",params:{q:"",key:"",format:"json",addressdetails:1,limit:10,countrycodes:"","accept-language":"en-US"}}}getParameters(t){return{url:this.settings.url,params:{q:t.query,key:t.key,format:"json",addressdetails:1,limit:t.limit||this.settings.params.limit,countrycodes:t.countrycodes||this.settings.params.countrycodes,"accept-language":t.lang||this.settings.params["accept-language"]}}}handleResponse(t){return 0===t.length?[]:t.map((t=>({lon:t.lon,lat:t.lat,address:{name:t.address.neighbourhood||"",road:t.address.road||"",postcode:t.address.postcode,city:t.address.city||t.address.town,state:t.address.state,country:t.address.country},original:{formatted:t.display_name,details:t.address}})))}}class W{constructor(){this.settings={url:"https://dev.virtualearth.net/REST/v1/Locations",callbackName:"jsonp",params:{query:"",key:"",includeNeighborhood:0,maxResults:10}}}getParameters(t){return{url:this.settings.url,callbackName:this.settings.callbackName,params:{query:t.query,key:t.key,includeNeighborhood:t.includeNeighborhood||this.settings.params.includeNeighborhood,maxResults:t.maxResults||this.settings.params.maxResults}}}handleResponse(t){const{resources:e}=t.resourceSets[0];return 0===e.length?[]:e.map((t=>({lon:t.point.coordinates[1],lat:t.point.coordinates[0],address:{name:t.name},original:{formatted:t.address.formattedAddress,details:t.address}})))}}class Y{constructor(){this.settings={url:"https://api.opencagedata.com/geocode/v1/json?",params:{q:"",key:"",limit:10,countrycode:"",pretty:1,no_annotations:1}}}getParameters(t){return{url:this.settings.url,params:{q:t.query,key:t.key,limit:t.limit||this.settings.params.limit,countrycode:t.countrycodes||this.settings.params.countrycodes}}}handleResponse(t){return 0===t.results.length?[]:t.results.map((t=>({lon:t.geometry.lng,lat:t.geometry.lat,address:{name:t.components.house_number||"",road:t.components.road||"",postcode:t.components.postcode,city:t.components.city||t.components.town,state:t.components.state,country:t.components.country},original:{formatted:t.formatted,details:t.components}})))}}function Z(t){return new Promise(((e,s)=>{const n=function(t,e){return e&&"object"==typeof e&&(t+=(/\?/u.test(t)?"&":"?")+tt(e)),t}(t.url,t.data),i={method:"GET",mode:"cors",credentials:"same-origin"};t.jsonp?function(t,e,s){const{head:n}=document,i=document.createElement("script"),r=`f${Math.round(Math.random()*Date.now())}`;i.setAttribute("src",`${t+(t.indexOf("?")>0?"&":"?")+e}=${r}`),window[r]=t=>{window[r]=void 0,setTimeout((()=>n.removeChild(i)),0),s(t)},n.append(i)}(n,t.callbackName,e):fetch(n,i).then((t=>t.json())).then(e).catch(s)}))}function tt(t){return Object.keys(t).reduce(((e,s)=>(e.push("object"==typeof t[s]?tt(t[s]):`${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`),e)),[]).join("&")}const et=D.cssClasses;class st{constructor(t,e){this.Base=t,this.layerName=R("geocoder-layer-"),this.layer=new h.default({name:this.layerName,source:new p.default}),this.options=t.options,this.options.provider="string"==typeof this.options.provider?this.options.provider.toLowerCase():this.options.provider,this.provider=this.newProvider(),this.els=e,this.lastQuery="",this.container=this.els.container,this.registeredListeners={mapClick:!1},this.setListeners()}setListeners(){let t,e;const s=t=>{t.stopPropagation(),F(this.els.control,et.glass.expanded)?this.collapse():this.expand()};this.els.input.addEventListener("keypress",(t=>{const e=t.target.value.trim();(t.key?"Enter"===t.key:t.which?13===t.which:t.keyCode&&13===t.keyCode)&&(t.preventDefault(),this.query(e))}),!1),this.els.input.addEventListener("click",(t=>t.stopPropagation()),!1),this.els.input.addEventListener("input",(s=>{const n=s.target.value.trim();0!==n.length?O(this.els.reset,et.hidden):j(this.els.reset,et.hidden),this.options.autoComplete&&n!==e&&(e=n,t&&clearTimeout(t),t=setTimeout((()=>{n.length>=this.options.autoCompleteMinLength&&this.query(n)}),this.options.autoCompleteTimeout))}),!1),this.els.reset.addEventListener("click",(t=>{this.els.input.focus(),this.els.input.value="",this.lastQuery="",j(this.els.reset,et.hidden),this.clearResults()}),!1),this.options.targetType===k&&this.els.button.addEventListener("click",s,!1)}query(t){this.provider||(this.provider=this.newProvider());const e=this.provider.getParameters({query:t,key:this.options.key,lang:this.options.lang,countrycodes:this.options.countrycodes,limit:this.options.limit});if(this.lastQuery===t&&this.els.result.firstChild)return;this.lastQuery=t,this.clearResults(),j(this.els.reset,et.spin);const s={url:e.url,data:e.params};e.callbackName&&(s.jsonp=!0,s.callbackName=e.callbackName),Z(s).then((t=>{this.options.debug&&console.info(t),O(this.els.reset,et.spin);const e=this.provider.handleResponse(t);e&&(this.createList(e),this.listenMapClick())})).catch((t=>{O(this.els.reset,et.spin);const e=H("li","<h5>Error! No internet connection?</h5>");this.els.result.append(e)}))}createList(t){const e=this.els.result;t.forEach((t=>{let s;s=this.options.provider===I?`<span class="${et.road}">${t.address.name}</span>`:this.addressTemplate(t.address);const n=H("li",`<a href="#">${s}</a>`);n.addEventListener("click",(e=>{e.preventDefault(),this.chosen(t,s,t.address,t.original)}),!1),e.append(n)}))}chosen(t,e,s,n){const i=this.Base.getMap(),r=[Number.parseFloat(t.lon),Number.parseFloat(t.lat)],a=i.getView().getProjection(),o=f.default.transform(r,"EPSG:4326",a);let{bbox:c}=t;c&&(c=f.default.transformExtent([c[2],c[1],c[3],c[0]],"EPSG:4326",a));const l={formatted:e,details:s,original:n};if(!1===this.options.keepOpen&&this.clearResults(!0),!0===this.options.preventDefault)this.Base.dispatchEvent({type:C,address:l,coordinate:o,bbox:c,place:t});else{c?i.getView().fit(c,{duration:500}):function(t,e,s=500,n=2.388657133911758){t.getView().animate({duration:s,resolution:n},{duration:s,center:e})}(i,o);const e=this.createFeature(o,l);this.Base.dispatchEvent({type:C,address:l,feature:e,coordinate:o,bbox:c,place:t})}}createFeature(t){const e=new m.default(new g.default(t));return this.addLayer(),e.setStyle(this.options.featureStyle),e.setId(R("geocoder-ft-")),this.getSource().addFeature(e),e}addressTemplate(t){const e=[];return t.name&&e.push(['<span class="',et.road,'">{name}</span>'].join("")),(t.road||t.building||t.house_number)&&e.push(['<span class="',et.road,'">{building} {road} {house_number}</span>'].join("")),(t.city||t.town||t.village)&&e.push(['<span class="',et.city,'">{postcode} {city} {town} {village}</span>'].join("")),(t.state||t.country)&&e.push(['<span class="',et.country,'">{state} {country}</span>'].join("")),B(e.join("<br>"),t)}newProvider(){switch(this.options.provider){case I:return new X;case E:return new J;case x:return new z;case M:return new W;case P:return new Y;default:return this.options.provider}}expand(){O(this.els.input,et.spin),j(this.els.control,et.glass.expanded),window.setTimeout((()=>this.els.input.focus()),100),this.listenMapClick()}collapse(){this.els.input.value="",this.els.input.blur(),j(this.els.reset,et.hidden),O(this.els.control,et.glass.expanded),this.clearResults()}listenMapClick(){if(this.registeredListeners.mapClick)return;const t=this,e=this.Base.getMap().getTargetElement();this.registeredListeners.mapClick=!0,e.addEventListener("click",{handleEvent(s){t.clearResults(!0),e.removeEventListener(s.type,this,!1),t.registeredListeners.mapClick=!1}},!1)}clearResults(t){t&&this.options.targetType===k?this.collapse():function(t){for(;t.firstChild;)t.firstChild.remove()}(this.els.result)}getSource(){return this.layer.getSource()}addLayer(){let t=!1;const e=this.Base.getMap();e.getLayers().forEach((e=>{e===this.layer&&(t=!0)})),t||e.addLayer(this.layer)}}class nt extends l.default{constructor(t=S,e={}){let s,n;N("string"==typeof t,"@param `type` should be string!"),N(t===S||t===T,`@param 'type' should be '${S}'\n      or '${T}'!`),N("object"==typeof e,"@param `options` should be object!"),$.featureStyle=[new d.default({image:new u.default({scale:.7,src:"//cdn.rawgit.com/jonataswalker/map-utils/master/images/marker.png"})})];const i=new K(e);if(t===S&&(s=i.els.container),super({element:s}),!(this instanceof nt))return new nt;this.options=function(t,e){const s={};return Object.keys(t).forEach((e=>{Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e])})),Object.keys(e).forEach((t=>{Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t])})),s}($,e),this.container=s,t===S&&(n=new st(this,i.els),this.layer=n.layer)}getLayer(){return this.layer}getSource(){return this.getLayer().getSource()}setProvider(t){this.options.provider=t}setProviderKey(t){this.options.key=t}}return nt}))},43070:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});var n=s(10972),i=class extends n["default"]{constructor(t){t=t||{};var e=document.createElement("DIV");if(e.classList.add("ol-unselectable","ol-control","ol-bar"),t.className){var s=t.className.split(" ").filter((function(t){return t.length>0}));e.classList.add.apply(e.classList,s)}if(t.group&&e.classList.add("ol-group"),super({element:e,target:t.target}),this.set("toggleOne",t.toggleOne),this.set("autoDeactivate",t.autoDeactivate),this.controls_=[],t.controls instanceof Array)for(var n=0;n<t.controls.length;n++)this.addControl(t.controls[n])}setVisible(t){this.element.style.display=t?"":"none"}getVisible(){return"none"!=this.element.style.display}setMap(t){super.setMap(t);for(var e=0;e<this.controls_.length;e++){var s=this.controls_[e];s.setMap(t)}}getControls(){return this.controls_}setPosition(t){this.element.classList.remove("ol-left","ol-top","ol-bottom","ol-right"),t=t.split("-");for(var e=0;e<t.length;e++)switch(t[e]){case"top":case"left":case"bottom":case"right":this.element.classList.add("ol-"+t[e]);break;default:break}}addControl(t){this.controls_.push(t),t.setTarget(this.element),this.getMap()&&this.getMap().addControl(t),t._activateBar&&t.un("change:active",t._activateBar),t._activateBar=function(e){this.onActivateControl_(e,t)}.bind(this),t.on("change:active",t._activateBar),t.getActive&&this.onActivateControl_({target:t,active:t.getActive()},t)}removeControl(t){const e=this.controls_.indexOf(t);e>-1&&(this.controls_.splice(e,1),this.getMap()&&this.getMap().removeControl(t),t._activateBar&&t.un("change:active",t._activateBar),delete t._activateBar)}deactivateControls(t){for(var e=0;e<this.controls_.length;e++)this.controls_[e]!==t&&this.controls_[e].setActive&&this.controls_[e].setActive(!1)}getActiveControls(){for(var t,e=[],s=0;t=this.controls_[s];s++)t.getActive&&t.getActive()&&e.push(t);return e}setActive(t){if(!t&&this.get("autoDeactivate")&&this.deactivateControls(),t)for(var e,s=this.getControls(),n=0;e=s[n];n++)e.get("autoActivate")&&e.setActive(!0)}onActivateControl_(t,e){if(this.get("toggleOne"))if(t.active){var s;for(s=0;s<this.controls_.length;s++)if(this.controls_[s]===e)break;if(s==this.controls_.length)return;this.deactivateControls(this.controls_[s])}else if(!this.getActiveControls().length)for(var n,i=0;n=this.controls_[i];i++)if(n.get("autoActivate")){n.setActive(!0);break}t.type?this.dispatchEvent({type:"control:active",control:e,active:t.active}):this.dispatchEvent({type:"control:add",control:e,active:t.active})}getControlsByName(t){var e=this.getControls();return e.filter((function(e){return e.get("name")===t}))}};const r=i},7683:(t,e,s)=>{"use strict";s.d(e,{A:()=>a});var n=s(10972),i=s(16452),r=class extends n["default"]{constructor(t){t=t||{};var e=document.createElement("div");e.className=(t.className||"")+" ol-button ol-unselectable ol-control",super({element:e,target:t.target});var s=this,n=this.button_=document.createElement(/ol-text-button/.test(t.className)?"div":"button");n.type="button",t.title&&(n.title=t.title),t.name&&(n.name=t.name),t.html instanceof Element?n.appendChild(t.html):n.innerHTML=t.html||"";var i=function(e){e&&e.preventDefault&&(e.preventDefault(),e.stopPropagation()),t.handleClick&&t.handleClick.call(s,e)};n.addEventListener("click",i),e.appendChild(n),!t.title&&n.firstElementChild&&(n.title=n.firstElementChild.title),t.title&&this.set("title",t.title),t.title&&this.set("title",t.title),t.name&&this.set("name",t.name)}setVisible(t){t?i.A.show(this.element):i.A.hide(this.element)}getDisable(){var t=this.element.querySelector("button");return t&&t.disabled}setDisable(t){this.getDisable()!=t&&(this.element.querySelector("button").disabled=t)}setTitle(t){this.button_.setAttribute("title",t)}setHtml(t){i.A.setHTML(this.button_,t)}getButtonElement(){return this.button_}};const a=r},26186:(t,e,s)=>{"use strict";s.d(e,{A:()=>b});var n=s(58704),i=s(54620),r=s(11217),a=s(34142),o=s(42770),c=s(43070),l=s(7683),d=s(52659),u=s(35124),h=s(30379),p=s(16452),g=s(67355),m=s(54158),f=s(55154),y=s(2230),w=s(41452),v=s(8616),_=class extends c.A{constructor(t){t=t||{},t.interactions=t.interactions||{},super({className:(t.className?t.className+" ":"")+"ol-editbar",toggleOne:!0,target:t.target}),this._source=t.source,this._interactions={},this._setSelectInteraction(t),!1!==t.edition&&this._setEditInteraction(t),this._setModifyInteraction(t)}setMap(t){this.getMap()&&(this._interactions.Delete&&this.getMap().removeInteraction(this._interactions.Delete),this._interactions.ModifySelect&&this.getMap().removeInteraction(this._interactions.ModifySelect)),super.setMap(t),this.getMap()&&(this._interactions.Delete&&this.getMap().addInteraction(this._interactions.Delete),this._interactions.ModifySelect&&this.getMap().addInteraction(this._interactions.ModifySelect))}getInteraction(t){return this._interactions[t]}_getTitle(t){if(t)return t.get?t.get("title"):"string"===typeof t?t:t.title}_setSelectInteraction(t){var e,s=this,i=new c.A;if(!1!==t.interactions.Delete){t.interactions.Delete instanceof h.A?this._interactions.Delete=t.interactions.Delete:this._interactions.Delete=new h.A;var r=this._interactions.Delete;r.setActive(!1),this.getMap()&&this.getMap().addInteraction(r),i.addControl(new l.A({className:"ol-delete",title:this._getTitle(t.interactions.Delete)||"Delete",name:"Delete",handleClick:function(t){r.delete(e.getInteraction().getFeatures());var s={type:"select",selected:[],deselected:e.getInteraction().getFeatures().getArray().slice(),mapBrowserEvent:t.mapBrowserEvent};e.getInteraction().getFeatures().clear(),e.getInteraction().dispatchEvent(s)}}))}if(!1!==t.interactions.Info&&i.addControl(new l.A({className:"ol-info",name:"Info",title:this._getTitle(t.interactions.Info)||"Show informations",handleClick:function(){s.dispatchEvent({type:"info",features:e.getInteraction().getFeatures()})}})),!1!==t.interactions.Select){t.interactions.Select instanceof o.A?this._interactions.Select=t.interactions.Select:this._interactions.Select=new o.A({condition:n.jM});var a=this._interactions.Select;e=new d.A({className:"ol-selection",name:"Select",title:this._getTitle(t.interactions.Select)||"Select",interaction:a,bar:i.getControls().length?i:void 0,autoActivate:!0,active:!0}),this.addControl(e),a.on("change:active",(function(){a.getActive()||a.getFeatures().clear()}))}}_setEditInteraction(t){if(!1!==t.interactions.DrawPoint){t.interactions.DrawPoint instanceof i.Ay?this._interactions.DrawPoint=t.interactions.DrawPoint:this._interactions.DrawPoint=new i.Ay({type:"Point",source:this._source});var e=new d.A({className:"ol-drawpoint",name:"DrawPoint",title:this._getTitle(t.interactions.DrawPoint)||"Point",interaction:this._interactions.DrawPoint});this.addControl(e)}if(!1!==t.interactions.DrawLine){t.interactions.DrawLine instanceof i.Ay?this._interactions.DrawLine=t.interactions.DrawLine:this._interactions.DrawLine=new i.Ay({type:"LineString",source:this._source,geometryFunction:function(t,e){return e?e.setCoordinates(t):e=new r.A(t),this.nbpts=e.getCoordinates().length,e}});var s=new d.A({className:"ol-drawline",title:this._getTitle(t.interactions.DrawLine)||"LineString",name:"DrawLine",interaction:this._interactions.DrawLine,bar:new c.A({controls:[new u.A({html:this._getTitle(t.interactions.UndoDraw)||"undo",title:this._getTitle(t.interactions.UndoDraw)||"delete last point",handleClick:function(){s.getInteraction().nbpts>1&&s.getInteraction().removeLastPoint()}}),new u.A({html:this._getTitle(t.interactions.FinishDraw)||"finish",title:this._getTitle(t.interactions.FinishDraw)||"finish",handleClick:function(){s.getInteraction().nbpts>2&&s.getInteraction().finishDrawing()}})]})});this.addControl(s)}if(!1!==t.interactions.DrawPolygon&&(t.interactions.DrawPolygon instanceof i.Ay?this._interactions.DrawPolygon=t.interactions.DrawPolygon:this._interactions.DrawPolygon=new i.Ay({type:"Polygon",source:this._source,geometryFunction:function(t,e){return this.nbpts=t[0].length,e?e.setCoordinates([t[0].concat([t[0][0]])]):e=new a.Ay(t),e}}),this._setDrawPolygon("ol-drawpolygon",this._interactions.DrawPolygon,this._getTitle(t.interactions.DrawPolygon)||"Polygon","DrawPolygon",t)),!1!==t.interactions.DrawHole&&(t.interactions.DrawHole instanceof v.A?this._interactions.DrawHole=t.interactions.DrawHole:this._interactions.DrawHole=new v.A,this._setDrawPolygon("ol-drawhole",this._interactions.DrawHole,this._getTitle(t.interactions.DrawHole)||"Hole","DrawHole",t)),!1!==t.interactions.DrawRegular){var n={pts:"pts",circle:"circle"};t.interactions.DrawRegular instanceof w.A?(this._interactions.DrawRegular=t.interactions.DrawRegular,n.pts=this._interactions.DrawRegular.get("ptsLabel")||n.pts,n.circle=this._interactions.DrawRegular.get("circleLabel")||n.circle):(this._interactions.DrawRegular=new w.A({source:this._source,sides:4}),t.interactions.DrawRegular&&(n.pts=t.interactions.DrawRegular.ptsLabel||n.pts,n.circle=t.interactions.DrawRegular.circleLabel||n.circle));var o=this._interactions.DrawRegular,l=document.createElement("DIV"),h=p.A.create("DIV",{parent:l});p.A.addListener(h,["click","touchstart"],function(){var t=o.getSides()-1;t<2&&(t=2),o.setSides(t),g.textContent=t>2?t+" "+n.pts:n.circle}.bind(this));var g=p.A.create("TEXT",{html:"4 "+n.pts,parent:l}),m=p.A.create("DIV",{parent:l});p.A.addListener(m,["click","touchstart"],function(){var t=o.getSides()+1;t<3&&(t=3),o.setSides(t),g.textContent=t+" "+n.pts}.bind(this));var f=new d.A({className:"ol-drawregular",title:this._getTitle(t.interactions.DrawRegular)||"Regular",name:"DrawRegular",interaction:this._interactions.DrawRegular,bar:new c.A({controls:[new u.A({html:l})]})});this.addControl(f)}}_setDrawPolygon(t,e,s,n,i){var r=new d.A({className:t,name:n,title:s,interaction:e,bar:new c.A({controls:[new u.A({html:this._getTitle(i.interactions.UndoDraw)||"undo",title:this._getTitle(i.interactions.UndoDraw)||"undo last point",handleClick:function(){r.getInteraction().nbpts>1&&r.getInteraction().removeLastPoint()}}),new u.A({html:this._getTitle(i.interactions.FinishDraw)||"finish",title:this._getTitle(i.interactions.FinishDraw)||"finish",handleClick:function(){r.getInteraction().nbpts>3&&r.getInteraction().finishDrawing()}})]})});return this.addControl(r),r}_setModifyInteraction(t){if(!1!==t.interactions.ModifySelect&&!1!==t.interactions.Select&&(t.interactions.ModifySelect instanceof y.A?this._interactions.ModifySelect=t.interactions.ModifySelect:this._interactions.ModifySelect=new y.A({features:this.getInteraction("Select").getFeatures()}),this.getMap()&&this.getMap().addInteraction(this._interactions.ModifySelect),this._interactions.ModifySelect.setActive(this._interactions.Select.getActive()),this._interactions.Select.on("change:active",function(){this._interactions.ModifySelect.setActive(this._interactions.Select.getActive())}.bind(this))),!1!==t.interactions.Transform){t.interactions.Transform instanceof f.A?this._interactions.Transform=t.interactions.Transform:this._interactions.Transform=new f.A({addCondition:n.Kg});var e=new d.A({html:"<i></i>",className:"ol-transform",title:this._getTitle(t.interactions.Transform)||"Transform",name:"Transform",interaction:this._interactions.Transform});this.addControl(e)}if(!1!==t.interactions.Split){t.interactions.Split instanceof m.A?this._interactions.Split=t.interactions.Split:this._interactions.Split=new m.A({sources:this._source});var s=new d.A({className:"ol-split",title:this._getTitle(t.interactions.Split)||"Split",name:"Split",interaction:this._interactions.Split});this.addControl(s)}if(!1!==t.interactions.Offset){t.interactions.Offset instanceof g.A?this._interactions.Offset=t.interactions.Offset:this._interactions.Offset=new g.A({source:this._source});var i=new d.A({html:"<i></i>",className:"ol-offset",title:this._getTitle(t.interactions.Offset)||"Offset",name:"Offset",interaction:this._interactions.Offset});this.addControl(i)}}};const b=_}}]);
//# sourceMappingURL=7383.f77e65fb.js.map