(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b577692","chunk-7b577692","chunk-7b577692"],{"21bc":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("3900"),o=n("01d4"),i=n("cd7e"),a=n("9f5e"),l=n("1af9"),s=n("0999"),c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(e){function t(t){var n=this,r=t||{};n=e.call(this,{element:document.createElement("div"),render:r.render,target:r.target})||this,n.ulElement_=document.createElement("ul"),n.collapsed_=void 0===r.collapsed||r.collapsed,n.userCollapsed_=n.collapsed_,n.overrideCollapsible_=void 0!==r.collapsible,n.collapsible_=void 0===r.collapsible||r.collapsible,n.collapsible_||(n.collapsed_=!1);var a=void 0!==r.className?r.className:"ol-attribution",l=void 0!==r.tipLabel?r.tipLabel:"Attributions",s=void 0!==r.expandClassName?r.expandClassName:a+"-expand",c=void 0!==r.collapseLabel?r.collapseLabel:"›",u=void 0!==r.collapseClassName?r.collapseClassName:a+"-collpase";"string"===typeof c?(n.collapseLabel_=document.createElement("span"),n.collapseLabel_.textContent=c,n.collapseLabel_.className=u):n.collapseLabel_=c;var d=void 0!==r.label?r.label:"i";"string"===typeof d?(n.label_=document.createElement("span"),n.label_.textContent=d,n.label_.className=s):n.label_=d;var p=n.collapsible_&&!n.collapsed_?n.collapseLabel_:n.label_;n.toggleButton_=document.createElement("button"),n.toggleButton_.setAttribute("type","button"),n.toggleButton_.setAttribute("aria-expanded",String(!n.collapsed_)),n.toggleButton_.title=l,n.toggleButton_.appendChild(p),n.toggleButton_.addEventListener(o["a"].CLICK,n.handleClick_.bind(n),!1);var f=a+" "+i["d"]+" "+i["b"]+(n.collapsed_&&n.collapsible_?" "+i["a"]:"")+(n.collapsible_?"":" ol-uncollapsible"),h=n.element;return h.className=f,h.appendChild(n.toggleButton_),h.appendChild(n.ulElement_),n.renderedAttributions_=[],n.renderedVisible_=!0,n}return c(t,e),t.prototype.collectSourceAttributions_=function(e){for(var t={},n=[],r=!0,o=e.layerStatesArray,i=0,a=o.length;i<a;++i){var s=o[i];if(Object(l["b"])(s,e.viewState)){var c=s.layer.getSource();if(c){var u=c.getAttributions();if(u){var d=u(e);if(d)if(r=r&&!1!==c.getAttributionsCollapsible(),Array.isArray(d))for(var p=0,f=d.length;p<f;++p)d[p]in t||(n.push(d[p]),t[d[p]]=!0);else d in t||(n.push(d),t[d]=!0)}}}}return this.overrideCollapsible_||this.setCollapsible(r),n},t.prototype.updateElement_=function(e){if(e){var t=this.collectSourceAttributions_(e),n=t.length>0;if(this.renderedVisible_!=n&&(this.element.style.display=n?"":"none",this.renderedVisible_=n),!Object(a["b"])(t,this.renderedAttributions_)){Object(s["b"])(this.ulElement_);for(var r=0,o=t.length;r<o;++r){var i=document.createElement("li");i.innerHTML=t[r],this.ulElement_.appendChild(i)}this.renderedAttributions_=t}}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},t.prototype.handleClick_=function(e){e.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_},t.prototype.handleToggle_=function(){this.element.classList.toggle(i["a"]),this.collapsed_?Object(s["e"])(this.collapseLabel_,this.label_):Object(s["e"])(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))},t.prototype.getCollapsible=function(){return this.collapsible_},t.prototype.setCollapsible=function(e){this.collapsible_!==e&&(this.collapsible_=e,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())},t.prototype.setCollapsed=function(e){this.userCollapsed_=e,this.collapsible_&&this.collapsed_!==e&&this.handleToggle_()},t.prototype.getCollapsed=function(){return this.collapsed_},t.prototype.render=function(e){this.updateElement_(e.frameState)},t}(r["a"]),d=u,p=n("e300"),f=n("ca42"),h=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(e){function t(t){var n=this,r=t||{};n=e.call(this,{element:document.createElement("div"),render:r.render,target:r.target})||this;var a=void 0!==r.className?r.className:"ol-rotate",l=void 0!==r.label?r.label:"⇧",s=void 0!==r.compassClassName?r.compassClassName:"ol-compass";n.label_=null,"string"===typeof l?(n.label_=document.createElement("span"),n.label_.className=s,n.label_.textContent=l):(n.label_=l,n.label_.classList.add(s));var c=r.tipLabel?r.tipLabel:"Reset rotation",u=document.createElement("button");u.className=a+"-reset",u.setAttribute("type","button"),u.title=c,u.appendChild(n.label_),u.addEventListener(o["a"].CLICK,n.handleClick_.bind(n),!1);var d=a+" "+i["d"]+" "+i["b"],p=n.element;return p.className=d,p.appendChild(u),n.callResetNorth_=r.resetNorth?r.resetNorth:void 0,n.duration_=void 0!==r.duration?r.duration:250,n.autoHide_=void 0===r.autoHide||r.autoHide,n.rotation_=void 0,n.autoHide_&&n.element.classList.add(i["c"]),n}return h(t,e),t.prototype.handleClick_=function(e){e.preventDefault(),void 0!==this.callResetNorth_?this.callResetNorth_():this.resetNorth_()},t.prototype.resetNorth_=function(){var e=this.getMap(),t=e.getView();if(t){var n=t.getRotation();void 0!==n&&(this.duration_>0&&n%(2*Math.PI)!==0?t.animate({rotation:0,duration:this.duration_,easing:f["b"]}):t.setRotation(0))}},t.prototype.render=function(e){var t=e.frameState;if(t){var n=t.viewState.rotation;if(n!=this.rotation_){var r="rotate("+n+"rad)";if(this.autoHide_){var o=this.element.classList.contains(i["c"]);o||0!==n?o&&0!==n&&this.element.classList.remove(i["c"]):this.element.classList.add(i["c"])}this.label_.style.transform=r}this.rotation_=n}},t}(r["a"]),v=_,b=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),m=function(e){function t(t){var n=this,r=t||{};n=e.call(this,{element:document.createElement("div"),target:r.target})||this;var a=void 0!==r.className?r.className:"ol-zoom",l=void 0!==r.delta?r.delta:1,s=void 0!==r.zoomInClassName?r.zoomInClassName:a+"-in",c=void 0!==r.zoomOutClassName?r.zoomOutClassName:a+"-out",u=void 0!==r.zoomInLabel?r.zoomInLabel:"+",d=void 0!==r.zoomOutLabel?r.zoomOutLabel:"–",p=void 0!==r.zoomInTipLabel?r.zoomInTipLabel:"Zoom in",f=void 0!==r.zoomOutTipLabel?r.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=s,h.setAttribute("type","button"),h.title=p,h.appendChild("string"===typeof u?document.createTextNode(u):u),h.addEventListener(o["a"].CLICK,n.handleClick_.bind(n,l),!1);var _=document.createElement("button");_.className=c,_.setAttribute("type","button"),_.title=f,_.appendChild("string"===typeof d?document.createTextNode(d):d),_.addEventListener(o["a"].CLICK,n.handleClick_.bind(n,-l),!1);var v=a+" "+i["d"]+" "+i["b"],b=n.element;return b.className=v,b.appendChild(h),b.appendChild(_),n.duration_=void 0!==r.duration?r.duration:250,n}return b(t,e),t.prototype.handleClick_=function(e,t){t.preventDefault(),this.zoomByDelta_(e)},t.prototype.zoomByDelta_=function(e){var t=this.getMap(),n=t.getView();if(n){var r=n.getZoom();if(void 0!==r){var o=n.getConstrainedZoom(r+e);this.duration_>0?(n.getAnimating()&&n.cancelAnimations(),n.animate({zoom:o,duration:this.duration_,easing:f["b"]})):n.setZoom(o)}}},t}(r["a"]),y=m;function g(e){var t=e||{},n=new p["a"],r=void 0===t.zoom||t.zoom;r&&n.push(new y(t.zoomOptions));var o=void 0===t.rotate||t.rotate;o&&n.push(new v(t.rotateOptions));var i=void 0===t.attribution||t.attribution;return i&&n.push(new d(t.attributionOptions)),n}},3900:function(e,t,n){"use strict";var r=n("e269"),o=n("592d"),i=n("57cb"),a=n("1e8d"),l=n("0999"),s=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(e){function t(t){var n=e.call(this)||this,r=t.element;return!r||t.target||r.style.pointerEvents||(r.style.pointerEvents="auto"),n.element=r||null,n.target_=null,n.map_=null,n.listenerKeys=[],t.render&&(n.render=t.render),t.target&&n.setTarget(t.target),n}return s(t,e),t.prototype.disposeInternal=function(){Object(l["c"])(this.element),e.prototype.disposeInternal.call(this)},t.prototype.getMap=function(){return this.map_},t.prototype.setMap=function(e){this.map_&&Object(l["c"])(this.element);for(var t=0,n=this.listenerKeys.length;t<n;++t)Object(a["c"])(this.listenerKeys[t]);if(this.listenerKeys.length=0,this.map_=e,this.map_){var r=this.target_?this.target_:e.getOverlayContainerStopEvent();r.appendChild(this.element),this.render!==i["c"]&&this.listenerKeys.push(Object(a["a"])(e,o["a"].POSTRENDER,this.render,this)),e.render()}},t.prototype.render=function(e){},t.prototype.setTarget=function(e){this.target_="string"===typeof e?document.getElementById(e):e},t}(r["a"]);t["a"]=c},"5c38":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return f}));var r=n("92fa"),o=n("7fc9"),i=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,a=/^([a-z]*)$|^hsla?\(.*\)$/i;function l(e){return"string"===typeof e?e:f(e)}function s(e){var t=document.createElement("div");if(t.style.color=e,""!==t.style.color){document.body.appendChild(t);var n=getComputedStyle(t).color;return document.body.removeChild(t),n}return""}var c=function(){var e=1024,t={},n=0;return function(r){var o;if(t.hasOwnProperty(r))o=t[r];else{if(n>=e){var i=0;for(var a in t)0===(3&i++)&&(delete t[a],--n)}o=d(r),t[r]=o,++n}return o}}();function u(e){return Array.isArray(e)?e:c(e)}function d(e){var t,n,o,l,c;if(a.exec(e)&&(e=s(e)),i.exec(e)){var u=e.length-1,d=void 0;d=u<=4?1:2;var f=4===u||8===u;t=parseInt(e.substr(1+0*d,d),16),n=parseInt(e.substr(1+1*d,d),16),o=parseInt(e.substr(1+2*d,d),16),l=f?parseInt(e.substr(1+3*d,d),16):255,1==d&&(t=(t<<4)+t,n=(n<<4)+n,o=(o<<4)+o,f&&(l=(l<<4)+l)),c=[t,n,o,l/255]}else 0==e.indexOf("rgba(")?(c=e.slice(5,-1).split(",").map(Number),p(c)):0==e.indexOf("rgb(")?(c=e.slice(4,-1).split(",").map(Number),c.push(1),p(c)):Object(r["a"])(!1,14);return c}function p(e){return e[0]=Object(o["a"])(e[0]+.5|0,0,255),e[1]=Object(o["a"])(e[1]+.5|0,0,255),e[2]=Object(o["a"])(e[2]+.5|0,0,255),e[3]=Object(o["a"])(e[3],0,1),e}function f(e){var t=e[0];t!=(0|t)&&(t=t+.5|0);var n=e[1];n!=(0|n)&&(n=n+.5|0);var r=e[2];r!=(0|r)&&(r=r+.5|0);var o=void 0===e[3]?1:e[3];return"rgba("+t+","+n+","+r+","+o+")"}},"67f6":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("7fc9");function o(e,t,n){return function(o,i,a,l,s){if(o){var c=t?0:a[0]*i,u=t?0:a[1]*i,d=s?s[0]:0,p=s?s[1]:0,f=e[0]+c/2+d,h=e[2]-c/2+d,_=e[1]+u/2+p,v=e[3]-u/2+p;f>h&&(f=(h+f)/2,h=f),_>v&&(_=(v+_)/2,v=_);var b=Object(r["a"])(o[0],f,h),m=Object(r["a"])(o[1],_,v),y=30*i;return l&&n&&(b+=-y*Math.log(1+Math.max(0,f-o[0])/y)+y*Math.log(1+Math.max(0,o[0]-h)/y),m+=-y*Math.log(1+Math.max(0,_-o[1])/y)+y*Math.log(1+Math.max(0,o[1]-v)/y)),[b,m]}}}function i(e){return e}},"92fa":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("835b");function o(e,t){if(!e)throw new r["a"](t)}},"9d47":function(e,t,n){"use strict";var r=n("3900"),o=n("fced"),i=n("cd7e"),a=n("256f"),l=n("92fa"),s=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c="units",u={DEGREES:"degrees",IMPERIAL:"imperial",NAUTICAL:"nautical",METRIC:"metric",US:"us"},d=[1,2,5],p=25.4/.28,f=function(e){function t(t){var n=this,r=t||{},o=void 0!==r.className?r.className:r.bar?"ol-scale-bar":"ol-scale-line";return n=e.call(this,{element:document.createElement("div"),render:r.render,target:r.target})||this,n.on,n.once,n.un,n.innerElement_=document.createElement("div"),n.innerElement_.className=o+"-inner",n.element.className=o+" "+i["d"],n.element.appendChild(n.innerElement_),n.viewState_=null,n.minWidth_=void 0!==r.minWidth?r.minWidth:64,n.renderedVisible_=!1,n.renderedWidth_=void 0,n.renderedHTML_="",n.addChangeListener(c,n.handleUnitsChanged_),n.setUnits(r.units||u.METRIC),n.scaleBar_=r.bar||!1,n.scaleBarSteps_=r.steps||4,n.scaleBarText_=r.text||!1,n.dpi_=r.dpi||void 0,n}return s(t,e),t.prototype.getUnits=function(){return this.get(c)},t.prototype.handleUnitsChanged_=function(){this.updateElement_()},t.prototype.setUnits=function(e){this.set(c,e)},t.prototype.setDpi=function(e){this.dpi_=e},t.prototype.updateElement_=function(){var e=this.viewState_;if(e){var t=e.center,n=e.projection,r=this.getUnits(),i=r==u.DEGREES?o["b"].DEGREES:o["b"].METERS,s=Object(a["i"])(n,e.resolution,t,i),c=this.minWidth_*(this.dpi_||p)/p,f=c*s,h="";if(r==u.DEGREES){var _=a["a"][o["b"].DEGREES];f*=_,f<_/60?(h="″",s*=3600):f<_?(h="′",s*=60):h="°"}else r==u.IMPERIAL?f<.9144?(h="in",s/=.0254):f<1609.344?(h="ft",s/=.3048):(h="mi",s/=1609.344):r==u.NAUTICAL?(s/=1852,h="nm"):r==u.METRIC?f<.001?(h="μm",s*=1e6):f<1?(h="mm",s*=1e3):f<1e3?h="m":(h="km",s/=1e3):r==u.US?f<.9144?(h="in",s*=39.37):f<1609.344?(h="ft",s/=.30480061):(h="mi",s/=1609.3472):Object(l["a"])(!1,33);var v,b,m,y,g=3*Math.floor(Math.log(c*s)/Math.log(10));while(1){m=Math.floor(g/3);var C=Math.pow(10,m);if(v=d[(g%3+3)%3]*C,b=Math.round(v/s),isNaN(b))return this.element.style.display="none",void(this.renderedVisible_=!1);if(b>=c)break;++g}y=this.scaleBar_?this.createScaleBar(b,v,h):v.toFixed(m<0?-m:0)+" "+h,this.renderedHTML_!=y&&(this.innerElement_.innerHTML=y,this.renderedHTML_=y),this.renderedWidth_!=b&&(this.innerElement_.style.width=b+"px",this.renderedWidth_=b),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},t.prototype.createScaleBar=function(e,t,n){for(var r,o="1 : "+Math.round(this.getScaleForResolution()).toLocaleString(),i=[],a=e/this.scaleBarSteps_,l="#ffffff",s=0;s<this.scaleBarSteps_;s++)0===s&&i.push(this.createMarker("absolute",s)),i.push('<div><div class="ol-scale-singlebar" style="width: '+a+"px;background-color: "+l+';"></div>'+this.createMarker("relative",s)+(s%2===0||2===this.scaleBarSteps_?this.createStepText(s,e,!1,t,n):"")+"</div>"),s===this.scaleBarSteps_-1&&i.push(this.createStepText(s+1,e,!0,t,n)),l="#ffffff"===l?"#000000":"#ffffff";r=this.scaleBarText_?'<div class="ol-scale-text" style="width: '+e+'px;">'+o+"</div>":"";var c='<div style="display: flex;">'+r+i.join("")+"</div>";return c},t.prototype.createMarker=function(e,t){var n="absolute"===e?3:-10;return'<div class="ol-scale-step-marker" style="position: '+e+";top: "+n+'px;"></div>'},t.prototype.createStepText=function(e,t,n,r,o){var i=0===e?0:Math.round(r/this.scaleBarSteps_*e*100)/100,a=i+(0===e?"":" "+o),l=0===e?-3:t/this.scaleBarSteps_*-1,s=0===e?0:t/this.scaleBarSteps_*2;return'<div class="ol-scale-step-text" style="margin-left: '+l+"px;text-align: "+(0===e?"left":"center")+"; min-width: "+s+"px;left: "+(n?t+"px":"unset")+';">'+a+"</div>"},t.prototype.getScaleForResolution=function(){var e=Object(a["i"])(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center),t=this.dpi_||p,n=this.viewState_.projection.getMetersPerUnit(),r=1e3/25.4;return parseFloat(e.toString())*n*r*t},t.prototype.render=function(e){var t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()},t}(r["a"]);t["a"]=f},"9f5e":function(e,t,n){"use strict";function r(e,t,n){var r,i,a=n||o,l=0,s=e.length,c=!1;while(l<s)r=l+(s-l>>1),i=+a(e[r],t),i<0?l=r+1:(s=r,c=!i);return c?l:~l}function o(e,t){return e>t?1:e<t?-1:0}function i(e,t){return e.indexOf(t)>=0}function a(e,t,n){var r=e.length;if(e[0]<=t)return 0;if(t<=e[r-1])return r-1;var o=void 0;if(n>0){for(o=1;o<r;++o)if(e[o]<t)return o-1}else if(n<0){for(o=1;o<r;++o)if(e[o]<=t)return o}else for(o=1;o<r;++o){if(e[o]==t)return o;if(e[o]<t)return"function"===typeof n?n(t,e[o-1],e[o])>0?o-1:o:e[o-1]-t<t-e[o]?o-1:o}return r-1}function l(e,t,n){while(t<n){var r=e[t];e[t]=e[n],e[n]=r,++t,--n}}function s(e,t){for(var n=Array.isArray(t)?t:[t],r=n.length,o=0;o<r;o++)e[e.length]=n[o]}function c(e,t){for(var n,r=e.length>>>0,o=0;o<r;o++)if(n=e[o],t(n,o,e))return n;return null}function u(e,t){var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function d(e,t){var n,r=!e.every((function(r,o){return n=o,!t(r,o,e)}));return r?n:-1}function p(e,t,n){var r=t||o;return e.every((function(t,o){if(0===o)return!0;var i=r(e[o-1],t);return!(i>0||n&&0===i)}))}n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"j",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return p}))},a568:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return f})),n.d(t,"f",(function(){return h}));var r=n("0af5");n("7fc9"),n("b0c1");function o(e,t){return e[0]+=+t[0],e[1]+=+t[1],e}function i(e,t){var n=t.getRadius(),r=t.getCenter(),o=r[0],i=r[1],a=e[0],l=e[1],s=a-o,c=l-i;0===s&&0===c&&(s=1);var u=Math.sqrt(s*s+c*c),d=o+n*s/u,p=i+n*c/u;return[d,p]}function a(e,t){var n,r,o=e[0],i=e[1],a=t[0],l=t[1],s=a[0],c=a[1],u=l[0],d=l[1],p=u-s,f=d-c,h=0===p&&0===f?0:(p*(o-s)+f*(i-c))/(p*p+f*f||0);return h<=0?(n=s,r=c):h>=1?(n=u,r=d):(n=s+h*p,r=c+h*f),[n,r]}function l(e,t){for(var n=!0,r=e.length-1;r>=0;--r)if(e[r]!=t[r]){n=!1;break}return n}function s(e,t){var n=Math.cos(t),r=Math.sin(t),o=e[0]*n-e[1]*r,i=e[1]*n+e[0]*r;return e[0]=o,e[1]=i,e}function c(e,t){return e[0]*=t,e[1]*=t,e}function u(e,t){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function d(e,t){return Math.sqrt(u(e,t))}function p(e,t){return u(e,a(e,t))}function f(e,t){if(t.canWrapX()){var n=Object(r["D"])(t.getExtent()),o=h(e,t,n);o&&(e[0]-=o*n)}return e}function h(e,t,n){var o=t.getExtent(),i=0;if(t.canWrapX()&&(e[0]<o[0]||e[0]>o[2])){var a=n||Object(r["D"])(o);i=Math.floor((e[0]-o[0])/a)}return i}},c320:function(e,t,n){"use strict";var r=n("3900"),o=n("01d4"),i=n("cd7e"),a=n("1e8d"),l=n("0999"),s=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],u={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"},d=function(e){function t(t){var n=this,r=t||{};n=e.call(this,{element:document.createElement("div"),target:r.target})||this,n.on,n.once,n.un,n.cssClassName_=void 0!==r.className?r.className:"ol-full-screen",n.activeClassName_=void 0!==r.activeClassName?r.activeClassName.split(" "):[n.cssClassName_+"-true"],n.inactiveClassName_=void 0!==r.inactiveClassName?r.inactiveClassName.split(" "):[n.cssClassName_+"-false"];var a=void 0!==r.label?r.label:"⤢";n.labelNode_="string"===typeof a?document.createTextNode(a):a;var l=void 0!==r.labelActive?r.labelActive:"×";n.labelActiveNode_="string"===typeof l?document.createTextNode(l):l,n.button_=document.createElement("button");var s=r.tipLabel?r.tipLabel:"Toggle full-screen";n.setClassName_(n.button_,f()),n.button_.setAttribute("type","button"),n.button_.title=s,n.button_.appendChild(n.labelNode_),n.button_.addEventListener(o["a"].CLICK,n.handleClick_.bind(n),!1);var c=n.cssClassName_+" "+i["d"]+" "+i["b"]+" "+(p()?"":i["e"]),u=n.element;return u.className=c,u.appendChild(n.button_),n.keys_=void 0!==r.keys&&r.keys,n.source_=r.source,n}return s(t,e),t.prototype.handleClick_=function(e){e.preventDefault(),this.handleFullScreen_()},t.prototype.handleFullScreen_=function(){if(p()){var e=this.getMap();if(e)if(f())v();else{var t=void 0;t=this.source_?"string"===typeof this.source_?document.getElementById(this.source_):this.source_:e.getTargetElement(),this.keys_?_(t):h(t)}}},t.prototype.handleFullScreenChange_=function(){var e=this.getMap();f()?(this.setClassName_(this.button_,!0),Object(l["e"])(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(u.ENTERFULLSCREEN)):(this.setClassName_(this.button_,!1),Object(l["e"])(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(u.LEAVEFULLSCREEN)),e&&e.updateSize()},t.prototype.setClassName_=function(e,t){var n,r,o,i=this.activeClassName_,a=this.inactiveClassName_,l=t?i:a;(n=e.classList).remove.apply(n,i),(r=e.classList).remove.apply(r,a),(o=e.classList).add.apply(o,l)},t.prototype.setMap=function(t){if(e.prototype.setMap.call(this,t),t)for(var n=0,r=c.length;n<r;++n)this.listenerKeys.push(Object(a["a"])(document,c[n],this.handleFullScreenChange_,this))},t}(r["a"]);function p(){var e=document.body;return!!(e["webkitRequestFullscreen"]||e["msRequestFullscreen"]&&document["msFullscreenEnabled"]||e.requestFullscreen&&document.fullscreenEnabled)}function f(){return!!(document["webkitIsFullScreen"]||document["msFullscreenElement"]||document.fullscreenElement)}function h(e){e.requestFullscreen?e.requestFullscreen():e["msRequestFullscreen"]?e["msRequestFullscreen"]():e["webkitRequestFullscreen"]&&e["webkitRequestFullscreen"]()}function _(e){e["webkitRequestFullscreen"]?e["webkitRequestFullscreen"]():h(e)}function v(){document.exitFullscreen?document.exitFullscreen():document["msExitFullscreen"]?document["msExitFullscreen"]():document["webkitExitFullscreen"]&&document["webkitExitFullscreen"]()}t["a"]=d},e98d:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5c38");function o(e){return Array.isArray(e)?Object(r["c"])(e):e}}}]);
//# sourceMappingURL=chunk-7b577692.bfcbc2a8.js.map