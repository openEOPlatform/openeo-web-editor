"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1967],{22741:(t,e,n)=>{var r=n(66775),o=n(30120);
/*!
 * chartjs-adapter-luxon v1.2.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-luxon Contributors
 * Released under the MIT license
 */
const i={datetime:o.ou.DATETIME_MED_WITH_SECONDS,millisecond:"h:mm:ss.SSS a",second:o.ou.TIME_WITH_SECONDS,minute:o.ou.TIME_SIMPLE,hour:{hour:"numeric"},day:{day:"numeric",month:"short"},week:"DD",month:{month:"short",year:"numeric"},quarter:"'Q'q - yyyy",year:{year:"numeric"}};r.IQ._date.override({_id:"luxon",_create:function(t){return o.ou.fromMillis(t,this.options)},init(t){this.options.locale||(this.options.locale=t.locale)},formats:function(){return i},parse:function(t,e){const n=this.options,r=typeof t;return null===t||"undefined"===r?null:("number"===r?t=this._create(t):"string"===r?t="string"===typeof e?o.ou.fromFormat(t,e,n):o.ou.fromISO(t,n):t instanceof Date?t=o.ou.fromJSDate(t,n):"object"!==r||t instanceof o.ou||(t=o.ou.fromObject(t,n)),t.isValid?t.valueOf():null)},format:function(t,e){const n=this._create(t);return"string"===typeof e?n.toFormat(e):n.toLocaleString(e)},add:function(t,e,n){const r={};return r[n]=e,this._create(t).plus(r).valueOf()},diff:function(t,e,n){return this._create(t).diff(this._create(e)).as(n).valueOf()},startOf:function(t,e,n){if("isoWeek"===e){n=Math.trunc(Math.min(Math.max(0,n),6));const e=this._create(t);return e.minus({days:(e.weekday-n+7)%7}).startOf("day").valueOf()}return e?this._create(t).startOf(e).valueOf():t},endOf:function(t,e){return this._create(t).endOf(e).valueOf()}})},2454:(t,e,n)=>{n.d(e,{$:()=>Ee,A:()=>$,B:()=>f,C:()=>g,D:()=>Je,E:()=>nt,F:()=>Z,G:()=>Se,H:()=>W,I:()=>rt,J:()=>Ie,K:()=>Ze,L:()=>Ae,M:()=>De,N:()=>Fe,O:()=>Ke,P:()=>C,Q:()=>p,R:()=>bt,S:()=>yt,T:()=>E,U:()=>we,V:()=>w,W:()=>S,X:()=>Bn,Y:()=>st,Z:()=>at,_:()=>ht,a:()=>Ue,a0:()=>U,a1:()=>$n,a2:()=>Cn,a3:()=>zn,a4:()=>gt,a5:()=>qn,a6:()=>jn,a7:()=>ve,a8:()=>I,a9:()=>en,aA:()=>er,aB:()=>nr,aC:()=>xt,aD:()=>rr,aE:()=>Ce,aF:()=>o,aG:()=>J,aH:()=>Q,aI:()=>H,aJ:()=>z,aK:()=>q,aL:()=>K,aM:()=>Pe,aN:()=>ct,aO:()=>it,aa:()=>tn,ab:()=>nn,ac:()=>v,ad:()=>i,ae:()=>pt,af:()=>Xn,ag:()=>Re,ah:()=>R,ai:()=>b,aj:()=>j,ak:()=>ot,al:()=>ze,am:()=>Rn,an:()=>lr,ao:()=>cr,ap:()=>Vn,aq:()=>Zn,ar:()=>Qn,as:()=>Ye,at:()=>We,au:()=>je,av:()=>Le,aw:()=>Qe,ax:()=>Ve,ay:()=>sr,az:()=>tt,b:()=>s,c:()=>xe,d:()=>ke,e:()=>Ot,f:()=>O,g:()=>u,h:()=>Ge,i:()=>c,j:()=>P,k:()=>a,l:()=>ft,m:()=>h,n:()=>d,o:()=>Jn,p:()=>et,q:()=>mt,r:()=>dt,s:()=>L,t:()=>V,u:()=>lt,v:()=>l,w:()=>wt,x:()=>X,y:()=>wn,z:()=>B});var r=n(25108);
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */function o(){}const i=function(){let t=0;return function(){return t++}}();function a(t){return null===t||"undefined"===typeof t}function s(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function c(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const u=t=>("number"===typeof t||t instanceof Number)&&isFinite(+t);function f(t,e){return u(t)?t:e}function l(t,e){return"undefined"===typeof t?e:t}const h=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,d=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function g(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function p(t,e,n,r){let o,i,a;if(s(t))if(i=t.length,r)for(o=i-1;o>=0;o--)e.call(n,t[o],o);else for(o=0;o<i;o++)e.call(n,t[o],o);else if(c(t))for(a=Object.keys(t),i=a.length,o=0;o<i;o++)e.call(n,t[a[o]],a[o])}function b(t,e){let n,r,o,i;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(o=t[n],i=e[n],o.datasetIndex!==i.datasetIndex||o.index!==i.index)return!1;return!0}function y(t){if(s(t))return t.map(y);if(c(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let o=0;for(;o<r;++o)e[n[o]]=y(t[n[o]]);return e}return t}function x(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function m(t,e,n,r){if(!x(t))return;const o=e[t],i=n[t];c(o)&&c(i)?w(o,i,r):e[t]=y(i)}function w(t,e,n){const r=s(e)?e:[e],o=r.length;if(!c(t))return t;n=n||{};const i=n.merger||m;for(let a=0;a<o;++a){if(e=r[a],!c(e))continue;const o=Object.keys(e);for(let r=0,a=o.length;r<a;++r)i(o[r],t,e,n)}return t}function v(t,e){return w(t,e,{merger:_})}function _(t,e,n){if(!x(t))return;const r=e[t],o=n[t];c(r)&&c(o)?v(r,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=y(o))}const M={"":t=>t,x:t=>t.x,y:t=>t.y};function O(t,e){const n=M[e]||(M[e]=k(e));return n(t)}function k(t){const e=T(t);return t=>{for(const n of e){if(""===n)break;t=t&&t[n]}return t}}function T(t){const e=t.split("."),n=[];let r="";for(const o of e)r+=o,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function S(t){return t.charAt(0).toUpperCase()+t.slice(1)}const P=t=>"undefined"!==typeof t,I=t=>"function"===typeof t,R=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function j(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const C=Math.PI,E=2*C,A=E+C,F=Number.POSITIVE_INFINITY,Y=C/180,W=C/2,D=C/4,N=2*C/3,B=Math.log10,L=Math.sign;function H(t){const e=Math.round(t);t=q(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(B(t))),r=t/n,o=r<=1?1:r<=2?2:r<=5?5:10;return o*n}function $(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}function X(t){return!isNaN(parseFloat(t))&&isFinite(t)}function q(t,e,n){return Math.abs(t-e)<n}function z(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function Q(t,e,n){let r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r][n],isNaN(i)||(e.min=Math.min(e.min,i),e.max=Math.max(e.max,i))}function V(t){return t*(C/180)}function Z(t){return t*(180/C)}function K(t){if(!u(t))return;let e=1,n=0;while(Math.round(t*e)/e!==t)e*=10,n++;return n}function U(t,e){const n=e.x-t.x,r=e.y-t.y,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n);return i<-.5*C&&(i+=E),{angle:i,distance:o}}function J(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function G(t,e){return(t-e+A)%E-C}function tt(t){return(t%E+E)%E}function et(t,e,n,r){const o=tt(t),i=tt(e),a=tt(n),s=tt(i-o),c=tt(a-o),u=tt(o-i),f=tt(o-a);return o===i||o===a||r&&i===a||s>c&&u<f}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function rt(t){return nt(t,-32768,32767)}function ot(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function it(t,e,n){n=n||(n=>t[n]<e);let r,o=t.length-1,i=0;while(o-i>1)r=i+o>>1,n(r)?i=r:o=r;return{lo:i,hi:o}}const at=(t,e,n,r)=>it(t,n,r?r=>t[r][e]<=n:r=>t[r][e]<n),st=(t,e,n)=>it(t,n,(r=>t[r][e]>=n));function ct(t,e,n){let r=0,o=t.length;while(r<o&&t[r]<e)r++;while(o>r&&t[o-1]>n)o--;return r>0||o<t.length?t.slice(r,o):t}const ut=["push","pop","shift","splice","unshift"];function ft(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ut.forEach((e=>{const n="_onData"+S(e),r=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const o=r.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"===typeof t[n]&&t[n](...e)})),o}})})))}function lt(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,o=r.indexOf(e);-1!==o&&r.splice(o,1),r.length>0||(ut.forEach((e=>{delete t[e]})),delete t._chartjs)}function ht(t){const e=new Set;let n,r;for(n=0,r=t.length;n<r;++n)e.add(t[n]);return e.size===r?t:Array.from(e)}const dt=function(){return"undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame}();function gt(t,e,n){const r=n||(t=>Array.prototype.slice.call(t));let o=!1,i=[];return function(...n){i=r(n),o||(o=!0,dt.call(window,(()=>{o=!1,t.apply(e,i)})))}}function pt(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const bt=t=>"start"===t?"left":"end"===t?"right":"center",yt=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2,xt=(t,e,n,r)=>{const o=r?"left":"right";return t===o?n:"center"===t?(e+n)/2:e};function mt(t,e,n){const r=e.length;let o=0,i=r;if(t._sorted){const{iScale:a,_parsed:s}=t,c=a.axis,{min:u,max:f,minDefined:l,maxDefined:h}=a.getUserBounds();l&&(o=nt(Math.min(at(s,a.axis,u).lo,n?r:at(e,c,a.getPixelForValue(u)).lo),0,r-1)),i=h?nt(Math.max(at(s,a.axis,f,!0).hi+1,n?0:at(e,c,a.getPixelForValue(f),!0).hi+1),o,r)-o:r-o}return{start:o,count:i}}function wt(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,o={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=o,!0;const i=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,o),i}const vt=t=>0===t||1===t,_t=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*E/n),Mt=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*E/n)+1,Ot={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*W),easeOutSine:t=>Math.sin(t*W),easeInOutSine:t=>-.5*(Math.cos(C*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>vt(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>vt(t)?t:_t(t,.075,.3),easeOutElastic:t=>vt(t)?t:Mt(t,.075,.3),easeInOutElastic(t){const e=.1125,n=.45;return vt(t)?t:t<.5?.5*_t(2*t,e,n):.5+.5*Mt(2*t-1,e,n)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-Ot.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*Ot.easeInBounce(2*t):.5*Ot.easeOutBounce(2*t-1)+.5};
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
function kt(t){return t+.5|0}const Tt=(t,e,n)=>Math.max(Math.min(t,n),e);function St(t){return Tt(kt(2.55*t),0,255)}function Pt(t){return Tt(kt(255*t),0,255)}function It(t){return Tt(kt(t/2.55)/100,0,1)}function Rt(t){return Tt(kt(100*t),0,100)}const jt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ct=[..."0123456789ABCDEF"],Et=t=>Ct[15&t],At=t=>Ct[(240&t)>>4]+Ct[15&t],Ft=t=>(240&t)>>4===(15&t),Yt=t=>Ft(t.r)&&Ft(t.g)&&Ft(t.b)&&Ft(t.a);function Wt(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*jt[t[1]],g:255&17*jt[t[2]],b:255&17*jt[t[3]],a:5===n?17*jt[t[4]]:255}:7!==n&&9!==n||(e={r:jt[t[1]]<<4|jt[t[2]],g:jt[t[3]]<<4|jt[t[4]],b:jt[t[5]]<<4|jt[t[6]],a:9===n?jt[t[7]]<<4|jt[t[8]]:255})),e}const Dt=(t,e)=>t<255?e(t):"";function Nt(t){var e=Yt(t)?Et:At;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Dt(t.a,e):void 0}const Bt=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Lt(t,e,n){const r=e*Math.min(n,1-n),o=(e,o=(e+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function Ht(t,e,n){const r=(r,o=(r+t/60)%6)=>n-n*e*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function $t(t,e,n){const r=Lt(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)r[o]*=1-e-n,r[o]+=e;return r}function Xt(t,e,n,r,o){return t===o?(e-n)/r+(e<n?6:0):e===o?(n-t)/r+2:(t-e)/r+4}function qt(t){const e=255,n=t.r/e,r=t.g/e,o=t.b/e,i=Math.max(n,r,o),a=Math.min(n,r,o),s=(i+a)/2;let c,u,f;return i!==a&&(f=i-a,u=s>.5?f/(2-i-a):f/(i+a),c=Xt(n,r,o,f,i),c=60*c+.5),[0|c,u||0,s]}function zt(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(Pt)}function Qt(t,e,n){return zt(Lt,t,e,n)}function Vt(t,e,n){return zt($t,t,e,n)}function Zt(t,e,n){return zt(Ht,t,e,n)}function Kt(t){return(t%360+360)%360}function Ut(t){const e=Bt.exec(t);let n,r=255;if(!e)return;e[5]!==n&&(r=e[6]?St(+e[5]):Pt(+e[5]));const o=Kt(+e[2]),i=+e[3]/100,a=+e[4]/100;return n="hwb"===e[1]?Vt(o,i,a):"hsv"===e[1]?Zt(o,i,a):Qt(o,i,a),{r:n[0],g:n[1],b:n[2],a:r}}function Jt(t,e){var n=qt(t);n[0]=Kt(n[0]+e),n=Qt(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Gt(t){if(!t)return;const e=qt(t),n=e[0],r=Rt(e[1]),o=Rt(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${o}%, ${It(t.a)})`:`hsl(${n}, ${r}%, ${o}%)`}const te={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},ee={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function ne(){const t={},e=Object.keys(ee),n=Object.keys(te);let r,o,i,a,s;for(r=0;r<e.length;r++){for(a=s=e[r],o=0;o<n.length;o++)i=n[o],s=s.replace(i,te[i]);i=parseInt(ee[a],16),t[s]=[i>>16&255,i>>8&255,255&i]}return t}let re;function oe(t){re||(re=ne(),re.transparent=[0,0,0,0]);const e=re[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const ie=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ae(t){const e=ie.exec(t);let n,r,o,i=255;if(e){if(e[7]!==n){const t=+e[7];i=e[8]?St(t):Tt(255*t,0,255)}return n=+e[1],r=+e[3],o=+e[5],n=255&(e[2]?St(n):Tt(n,0,255)),r=255&(e[4]?St(r):Tt(r,0,255)),o=255&(e[6]?St(o):Tt(o,0,255)),{r:n,g:r,b:o,a:i}}}function se(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${It(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const ce=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,ue=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function fe(t,e,n){const r=ue(It(t.r)),o=ue(It(t.g)),i=ue(It(t.b));return{r:Pt(ce(r+n*(ue(It(e.r))-r))),g:Pt(ce(o+n*(ue(It(e.g))-o))),b:Pt(ce(i+n*(ue(It(e.b))-i))),a:t.a+n*(e.a-t.a)}}function le(t,e,n){if(t){let r=qt(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,0===e?360:1)),r=Qt(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function he(t,e){return t?Object.assign(e||{},t):t}function de(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Pt(t[3]))):(e=he(t,{r:0,g:0,b:0,a:1}),e.a=Pt(e.a)),e}function ge(t){return"r"===t.charAt(0)?ae(t):Ut(t)}class pe{constructor(t){if(t instanceof pe)return t;const e=typeof t;let n;"object"===e?n=de(t):"string"===e&&(n=Wt(t)||oe(t)||ge(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=he(this._rgb);return t&&(t.a=It(t.a)),t}set rgb(t){this._rgb=de(t)}rgbString(){return this._valid?se(this._rgb):void 0}hexString(){return this._valid?Nt(this._rgb):void 0}hslString(){return this._valid?Gt(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,r=t.rgb;let o;const i=e===o?.5:e,a=2*i-1,s=n.a-r.a,c=((a*s===-1?a:(a+s)/(1+a*s))+1)/2;o=1-c,n.r=255&c*n.r+o*r.r+.5,n.g=255&c*n.g+o*r.g+.5,n.b=255&c*n.b+o*r.b+.5,n.a=i*n.a+(1-i)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=fe(this._rgb,t._rgb,e)),this}clone(){return new pe(this.rgb)}alpha(t){return this._rgb.a=Pt(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=kt(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return le(this._rgb,2,t),this}darken(t){return le(this._rgb,2,-t),this}saturate(t){return le(this._rgb,1,t),this}desaturate(t){return le(this._rgb,1,-t),this}rotate(t){return Jt(this._rgb,t),this}}function be(t){return new pe(t)}function ye(t){if(t&&"object"===typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function xe(t){return ye(t)?t:be(t)}function me(t){return ye(t)?t:be(t).saturate(.5).darken(.1).hexString()}const we=Object.create(null),ve=Object.create(null);function _e(t,e){if(!e)return t;const n=e.split(".");for(let r=0,o=n.length;r<o;++r){const e=n[r];t=t[e]||(t[e]=Object.create(null))}return t}function Me(t,e,n){return"string"===typeof e?w(_e(t,e),n):w(_e(t,""),e)}class Oe{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>me(e.backgroundColor),this.hoverBorderColor=(t,e)=>me(e.borderColor),this.hoverColor=(t,e)=>me(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return Me(this,t,e)}get(t){return _e(this,t)}describe(t,e){return Me(ve,t,e)}override(t,e){return Me(we,t,e)}route(t,e,n,r){const o=_e(this,t),i=_e(this,n),a="_"+e;Object.defineProperties(o,{[a]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=i[r];return c(t)?Object.assign({},e,t):l(t,e)},set(t){this[a]=t}}})}}var ke=new Oe({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Te(t){return!t||a(t.size)||a(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Se(t,e,n,r,o){let i=e[o];return i||(i=e[o]=t.measureText(o).width,n.push(o)),i>r&&(r=i),r}function Pe(t,e,n,r){r=r||{};let o=r.data=r.data||{},i=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(o=r.data={},i=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let a=0;const c=n.length;let u,f,l,h,d;for(u=0;u<c;u++)if(h=n[u],void 0!==h&&null!==h&&!0!==s(h))a=Se(t,o,i,a,h);else if(s(h))for(f=0,l=h.length;f<l;f++)d=h[f],void 0===d||null===d||s(d)||(a=Se(t,o,i,a,d));t.restore();const g=i.length/2;if(g>n.length){for(u=0;u<g;u++)delete o[i[u]];i.splice(0,g)}return a}function Ie(t,e,n){const r=t.currentDevicePixelRatio,o=0!==n?Math.max(n/2,.5):0;return Math.round((e-o)*r)/r+o}function Re(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function je(t,e,n,r){Ce(t,e,n,r,null)}function Ce(t,e,n,r,o){let i,a,s,c,u,f;const l=e.pointStyle,h=e.rotation,d=e.radius;let g=(h||0)*Y;if(l&&"object"===typeof l&&(i=l.toString(),"[object HTMLImageElement]"===i||"[object HTMLCanvasElement]"===i))return t.save(),t.translate(n,r),t.rotate(g),t.drawImage(l,-l.width/2,-l.height/2,l.width,l.height),void t.restore();if(!(isNaN(d)||d<=0)){switch(t.beginPath(),l){default:o?t.ellipse(n,r,o/2,d,0,0,E):t.arc(n,r,d,0,E),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(g)*d,r-Math.cos(g)*d),g+=N,t.lineTo(n+Math.sin(g)*d,r-Math.cos(g)*d),g+=N,t.lineTo(n+Math.sin(g)*d,r-Math.cos(g)*d),t.closePath();break;case"rectRounded":u=.516*d,c=d-u,a=Math.cos(g+D)*c,s=Math.sin(g+D)*c,t.arc(n-a,r-s,u,g-C,g-W),t.arc(n+s,r-a,u,g-W,g),t.arc(n+a,r+s,u,g,g+W),t.arc(n-s,r+a,u,g+W,g+C),t.closePath();break;case"rect":if(!h){c=Math.SQRT1_2*d,f=o?o/2:c,t.rect(n-f,r-c,2*f,2*c);break}g+=D;case"rectRot":a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+s,r-a),t.lineTo(n+a,r+s),t.lineTo(n-s,r+a),t.closePath();break;case"crossRot":g+=D;case"cross":a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s),t.moveTo(n+s,r-a),t.lineTo(n-s,r+a);break;case"star":a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s),t.moveTo(n+s,r-a),t.lineTo(n-s,r+a),g+=D,a=Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s),t.moveTo(n+s,r-a),t.lineTo(n-s,r+a);break;case"line":a=o?o/2:Math.cos(g)*d,s=Math.sin(g)*d,t.moveTo(n-a,r-s),t.lineTo(n+a,r+s);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(g)*d,r+Math.sin(g)*d);break}t.fill(),e.borderWidth>0&&t.stroke()}}function Ee(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Ae(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Fe(t){t.restore()}function Ye(t,e,n,r,o){if(!e)return t.lineTo(n.x,n.y);if("middle"===o){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else"after"===o!==!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function We(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function De(t,e,n,r,o,i={}){const c=s(e)?e:[e],u=i.strokeWidth>0&&""!==i.strokeColor;let f,l;for(t.save(),t.font=o.string,Ne(t,i),f=0;f<c.length;++f)l=c[f],u&&(i.strokeColor&&(t.strokeStyle=i.strokeColor),a(i.strokeWidth)||(t.lineWidth=i.strokeWidth),t.strokeText(l,n,r,i.maxWidth)),t.fillText(l,n,r,i.maxWidth),Be(t,n,r,l,i),r+=o.lineHeight;t.restore()}function Ne(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),a(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function Be(t,e,n,r,o){if(o.strikethrough||o.underline){const i=t.measureText(r),a=e-i.actualBoundingBoxLeft,s=e+i.actualBoundingBoxRight,c=n-i.actualBoundingBoxAscent,u=n+i.actualBoundingBoxDescent,f=o.strikethrough?(c+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(a,f),t.lineTo(s,f),t.stroke()}}function Le(t,e){const{x:n,y:r,w:o,h:i,radius:a}=e;t.arc(n+a.topLeft,r+a.topLeft,a.topLeft,-W,C,!0),t.lineTo(n,r+i-a.bottomLeft),t.arc(n+a.bottomLeft,r+i-a.bottomLeft,a.bottomLeft,C,W,!0),t.lineTo(n+o-a.bottomRight,r+i),t.arc(n+o-a.bottomRight,r+i-a.bottomRight,a.bottomRight,W,0,!0),t.lineTo(n+o,r+a.topRight),t.arc(n+o-a.topRight,r+a.topRight,a.topRight,0,-W,!0),t.lineTo(n+a.topLeft,r)}const He=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),$e=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Xe(t,e){const n=(""+t).match(He);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const qe=t=>+t||0;function ze(t,e){const n={},r=c(e),o=r?Object.keys(e):e,i=c(t)?r?n=>l(t[n],t[e[n]]):e=>t[e]:()=>t;for(const a of o)n[a]=qe(i(a));return n}function Qe(t){return ze(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Ve(t){return ze(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ze(t){const e=Qe(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Ke(t,e){t=t||{},e=e||ke.font;let n=l(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let o=l(t.style,e.style);o&&!(""+o).match($e)&&(r.warn('Invalid font style specified: "'+o+'"'),o="");const i={family:l(t.family,e.family),lineHeight:Xe(l(t.lineHeight,e.lineHeight),n),size:n,style:o,weight:l(t.weight,e.weight),string:""};return i.string=Te(i),i}function Ue(t,e,n,r){let o,i,a,c=!0;for(o=0,i=t.length;o<i;++o)if(a=t[o],void 0!==a&&(void 0!==e&&"function"===typeof a&&(a=a(e),c=!1),void 0!==n&&s(a)&&(a=a[n%a.length],c=!1),void 0!==a))return r&&!c&&(r.cacheable=!1),a}function Je(t,e,n){const{min:r,max:o}=t,i=d(e,(o-r)/2),a=(t,e)=>n&&0===t?0:t+e;return{min:a(r,-Math.abs(i)),max:a(o,i)}}function Ge(t,e){return Object.assign(Object.create(t),e)}function tn(t,e=[""],n=t,r,o=(()=>t[0])){P(r)||(r=yn("_fallback",t));const i={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:n,_fallback:r,_getTarget:o,override:o=>tn([o,...t],e,n,r)};return new Proxy(i,{deleteProperty(e,n){return delete e[n],delete e._keys,delete t[0][n],!0},get(n,r){return an(n,r,(()=>bn(r,e,t,n)))},getOwnPropertyDescriptor(t,e){return Reflect.getOwnPropertyDescriptor(t._scopes[0],e)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(t,e){return xn(t).includes(e)},ownKeys(t){return xn(t)},set(t,e,n){const r=t._storage||(t._storage=o());return t[e]=r[e]=n,delete t._keys,!0}})}function en(t,e,n,r){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:nn(t,r),setContext:e=>en(t,e,n,r),override:o=>en(t.override(o),e,n,r)};return new Proxy(o,{deleteProperty(e,n){return delete e[n],delete t[n],!0},get(t,e,n){return an(t,e,(()=>sn(t,e,n)))},getOwnPropertyDescriptor(e,n){return e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(e,n){return Reflect.has(t,n)},ownKeys(){return Reflect.ownKeys(t)},set(e,n,r){return t[n]=r,delete e[n],!0}})}function nn(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:r,isScriptable:I(n)?n:()=>n,isIndexable:I(r)?r:()=>r}}const rn=(t,e)=>t?t+S(e):e,on=(t,e)=>c(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function an(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const r=n();return t[e]=r,r}function sn(t,e,n){const{_proxy:r,_context:o,_subProxy:i,_descriptors:a}=t;let c=r[e];return I(c)&&a.isScriptable(e)&&(c=cn(e,c,t,n)),s(c)&&c.length&&(c=un(e,c,t,a.isIndexable)),on(e,c)&&(c=en(c,o,i&&i[e],a)),c}function cn(t,e,n,r){const{_proxy:o,_context:i,_subProxy:a,_stack:s}=n;if(s.has(t))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+t);return s.add(t),e=e(i,a||r),s.delete(t),on(t,e)&&(e=dn(o._scopes,o,t,e)),e}function un(t,e,n,r){const{_proxy:o,_context:i,_subProxy:a,_descriptors:s}=n;if(P(i.index)&&r(t))e=e[i.index%e.length];else if(c(e[0])){const n=e,r=o._scopes.filter((t=>t!==n));e=[];for(const c of n){const n=dn(r,o,t,c);e.push(en(n,i,a&&a[t],s))}}return e}function fn(t,e,n){return I(t)?t(e,n):t}const ln=(t,e)=>!0===t?e:"string"===typeof t?O(e,t):void 0;function hn(t,e,n,r,o){for(const i of e){const e=ln(n,i);if(e){t.add(e);const i=fn(e._fallback,n,o);if(P(i)&&i!==n&&i!==r)return i}else if(!1===e&&P(r)&&n!==r)return null}return!1}function dn(t,e,n,r){const o=e._rootScopes,i=fn(e._fallback,n,r),a=[...t,...o],s=new Set;s.add(r);let c=gn(s,a,n,i||n,r);return null!==c&&((!P(i)||i===n||(c=gn(s,a,i,c,r),null!==c))&&tn(Array.from(s),[""],o,i,(()=>pn(e,n,r))))}function gn(t,e,n,r,o){while(n)n=hn(t,e,n,r,o);return n}function pn(t,e,n){const r=t._getTarget();e in r||(r[e]={});const o=r[e];return s(o)&&c(n)?n:o}function bn(t,e,n,r){let o;for(const i of e)if(o=yn(rn(i,t),n),P(o))return on(t,o)?dn(n,r,t,o):o}function yn(t,e){for(const n of e){if(!n)continue;const e=n[t];if(P(e))return e}}function xn(t){let e=t._keys;return e||(e=t._keys=mn(t._scopes)),e}function mn(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}function wn(t,e,n,r){const{iScale:o}=t,{key:i="r"}=this._parsing,a=new Array(r);let s,c,u,f;for(s=0,c=r;s<c;++s)u=s+n,f=e[u],a[s]={r:o.parse(O(f,i),u)};return a}const vn=Number.EPSILON||1e-14,_n=(t,e)=>e<t.length&&!t[e].skip&&t[e],Mn=t=>"x"===t?"y":"x";function On(t,e,n,r){const o=t.skip?e:t,i=e,a=n.skip?e:n,s=J(i,o),c=J(a,i);let u=s/(s+c),f=c/(s+c);u=isNaN(u)?0:u,f=isNaN(f)?0:f;const l=r*u,h=r*f;return{previous:{x:i.x-l*(a.x-o.x),y:i.y-l*(a.y-o.y)},next:{x:i.x+h*(a.x-o.x),y:i.y+h*(a.y-o.y)}}}function kn(t,e,n){const r=t.length;let o,i,a,s,c,u=_n(t,0);for(let f=0;f<r-1;++f)c=u,u=_n(t,f+1),c&&u&&(q(e[f],0,vn)?n[f]=n[f+1]=0:(o=n[f]/e[f],i=n[f+1]/e[f],s=Math.pow(o,2)+Math.pow(i,2),s<=9||(a=3/Math.sqrt(s),n[f]=o*a*e[f],n[f+1]=i*a*e[f])))}function Tn(t,e,n="x"){const r=Mn(n),o=t.length;let i,a,s,c=_n(t,0);for(let u=0;u<o;++u){if(a=s,s=c,c=_n(t,u+1),!s)continue;const o=s[n],f=s[r];a&&(i=(o-a[n])/3,s[`cp1${n}`]=o-i,s[`cp1${r}`]=f-i*e[u]),c&&(i=(c[n]-o)/3,s[`cp2${n}`]=o+i,s[`cp2${r}`]=f+i*e[u])}}function Sn(t,e="x"){const n=Mn(e),r=t.length,o=Array(r).fill(0),i=Array(r);let a,s,c,u=_n(t,0);for(a=0;a<r;++a)if(s=c,c=u,u=_n(t,a+1),c){if(u){const t=u[e]-c[e];o[a]=0!==t?(u[n]-c[n])/t:0}i[a]=s?u?L(o[a-1])!==L(o[a])?0:(o[a-1]+o[a])/2:o[a-1]:o[a]}kn(t,o,i),Tn(t,i,e)}function Pn(t,e,n){return Math.max(Math.min(t,n),e)}function In(t,e){let n,r,o,i,a,s=Ee(t[0],e);for(n=0,r=t.length;n<r;++n)a=i,i=s,s=n<r-1&&Ee(t[n+1],e),i&&(o=t[n],a&&(o.cp1x=Pn(o.cp1x,e.left,e.right),o.cp1y=Pn(o.cp1y,e.top,e.bottom)),s&&(o.cp2x=Pn(o.cp2x,e.left,e.right),o.cp2y=Pn(o.cp2y,e.top,e.bottom)))}function Rn(t,e,n,r,o){let i,a,s,c;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Sn(t,o);else{let n=r?t[t.length-1]:t[0];for(i=0,a=t.length;i<a;++i)s=t[i],c=On(n,s,t[Math.min(i+1,a-(r?0:1))%a],e.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}e.capBezierPoints&&In(t,n)}function jn(){return"undefined"!==typeof window&&"undefined"!==typeof document}function Cn(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function En(t,e,n){let r;return"string"===typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}const An=t=>window.getComputedStyle(t,null);function Fn(t,e){return An(t).getPropertyValue(e)}const Yn=["top","right","bottom","left"];function Wn(t,e,n){const r={};n=n?"-"+n:"";for(let o=0;o<4;o++){const i=Yn[o];r[i]=parseFloat(t[e+"-"+i+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const Dn=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function Nn(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:o,offsetY:i}=r;let a,s,c=!1;if(Dn(o,i,t.target))a=o,s=i;else{const t=e.getBoundingClientRect();a=r.clientX-t.left,s=r.clientY-t.top,c=!0}return{x:a,y:s,box:c}}function Bn(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,o=An(n),i="border-box"===o.boxSizing,a=Wn(o,"padding"),s=Wn(o,"border","width"),{x:c,y:u,box:f}=Nn(t,n),l=a.left+(f&&s.left),h=a.top+(f&&s.top);let{width:d,height:g}=e;return i&&(d-=a.width+s.width,g-=a.height+s.height),{x:Math.round((c-l)/d*n.width/r),y:Math.round((u-h)/g*n.height/r)}}function Ln(t,e,n){let r,o;if(void 0===e||void 0===n){const i=Cn(t);if(i){const t=i.getBoundingClientRect(),a=An(i),s=Wn(a,"border","width"),c=Wn(a,"padding");e=t.width-c.width-s.width,n=t.height-c.height-s.height,r=En(a.maxWidth,i,"clientWidth"),o=En(a.maxHeight,i,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:r||F,maxHeight:o||F}}const Hn=t=>Math.round(10*t)/10;function $n(t,e,n,r){const o=An(t),i=Wn(o,"margin"),a=En(o.maxWidth,t,"clientWidth")||F,s=En(o.maxHeight,t,"clientHeight")||F,c=Ln(t,e,n);let{width:u,height:f}=c;if("content-box"===o.boxSizing){const t=Wn(o,"border","width"),e=Wn(o,"padding");u-=e.width+t.width,f-=e.height+t.height}return u=Math.max(0,u-i.width),f=Math.max(0,r?Math.floor(u/r):f-i.height),u=Hn(Math.min(u,a,c.maxWidth)),f=Hn(Math.min(f,s,c.maxHeight)),u&&!f&&(f=Hn(u/2)),{width:u,height:f}}function Xn(t,e,n){const r=e||1,o=Math.floor(t.height*r),i=Math.floor(t.width*r);t.height=o/r,t.width=i/r;const a=t.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==r||a.height!==o||a.width!==i)&&(t.currentDevicePixelRatio=r,a.height=o,a.width=i,t.ctx.setTransform(r,0,0,r,0,0),!0)}const qn=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}return t}();function zn(t,e){const n=Fn(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Qn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function Vn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:"middle"===r?n<.5?t.y:e.y:"after"===r?n<1?t.y:e.y:n>0?e.y:t.y}}function Zn(t,e,n,r){const o={x:t.cp2x,y:t.cp2y},i={x:e.cp1x,y:e.cp1y},a=Qn(t,o,n),s=Qn(o,i,n),c=Qn(i,e,n),u=Qn(a,s,n),f=Qn(s,c,n);return Qn(u,f,n)}const Kn=new Map;function Un(t,e){e=e||{};const n=t+JSON.stringify(e);let r=Kn.get(n);return r||(r=new Intl.NumberFormat(t,e),Kn.set(n,r)),r}function Jn(t,e,n){return Un(e,n).format(t)}const Gn=function(t,e){return{x(n){return t+t+e-n},setWidth(t){e=t},textAlign(t){return"center"===t?t:"right"===t?"left":"right"},xPlus(t,e){return t-e},leftForLtr(t,e){return t-e}}},tr=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function er(t,e,n){return t?Gn(e,n):tr()}function nr(t,e){let n,r;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function rr(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function or(t){return"angle"===t?{between:et,compare:G,normalize:tt}:{between:ot,compare:(t,e)=>t-e,normalize:t=>t}}function ir({start:t,end:e,count:n,loop:r,style:o}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:o}}function ar(t,e,n){const{property:r,start:o,end:i}=n,{between:a,normalize:s}=or(r),c=e.length;let u,f,{start:l,end:h,loop:d}=t;if(d){for(l+=c,h+=c,u=0,f=c;u<f;++u){if(!a(s(e[l%c][r]),o,i))break;l--,h--}l%=c,h%=c}return h<l&&(h+=c),{start:l,end:h,loop:d,style:t.style}}function sr(t,e,n){if(!n)return[t];const{property:r,start:o,end:i}=n,a=e.length,{compare:s,between:c,normalize:u}=or(r),{start:f,end:l,loop:h,style:d}=ar(t,e,n),g=[];let p,b,y,x=!1,m=null;const w=()=>c(o,y,p)&&0!==s(o,y),v=()=>0===s(i,p)||c(i,y,p),_=()=>x||w(),M=()=>!x||v();for(let O=f,k=f;O<=l;++O)b=e[O%a],b.skip||(p=u(b[r]),p!==y&&(x=c(p,o,i),null===m&&_()&&(m=0===s(p,o)?O:k),null!==m&&M()&&(g.push(ir({start:m,end:O,loop:h,count:a,style:d})),m=null),k=O,y=p));return null!==m&&g.push(ir({start:m,end:l,loop:h,count:a,style:d})),g}function cr(t,e){const n=[],r=t.segments;for(let o=0;o<r.length;o++){const i=sr(r[o],t.points,e);i.length&&n.push(...i)}return n}function ur(t,e,n,r){let o=0,i=e-1;if(n&&!r)while(o<e&&!t[o].skip)o++;while(o<e&&t[o].skip)o++;o%=e,n&&(i+=o);while(i>o&&t[i%e].skip)i--;return i%=e,{start:o,end:i}}function fr(t,e,n,r){const o=t.length,i=[];let a,s=e,c=t[e];for(a=e+1;a<=n;++a){const n=t[a%o];n.skip||n.stop?c.skip||(r=!1,i.push({start:e%o,end:(a-1)%o,loop:r}),e=s=n.stop?a:null):(s=a,c.skip&&(e=a)),c=n}return null!==s&&i.push({start:e%o,end:s%o,loop:r}),i}function lr(t,e){const n=t.points,r=t.options.spanGaps,o=n.length;if(!o)return[];const i=!!t._loop,{start:a,end:s}=ur(n,o,i,r);if(!0===r)return hr(t,[{start:a,end:s,loop:i}],n,e);const c=s<a?s+o:s,u=!!t._fullLoop&&0===a&&s===o-1;return hr(t,fr(n,a,c,u),n,e)}function hr(t,e,n,r){return r&&r.setContext&&n?dr(t,e,n,r):e}function dr(t,e,n,r){const o=t._chart.getContext(),i=gr(t.options),{_datasetIndex:a,options:{spanGaps:s}}=t,c=n.length,u=[];let f=i,l=e[0].start,h=l;function d(t,e,r,o){const i=s?-1:1;if(t!==e){t+=c;while(n[t%c].skip)t-=i;while(n[e%c].skip)e+=i;t%c!==e%c&&(u.push({start:t%c,end:e%c,loop:r,style:o}),f=o,l=e%c)}}for(const g of e){l=s?l:g.start;let t,e=n[l%c];for(h=l+1;h<=g.end;h++){const i=n[h%c];t=gr(r.setContext(Ge(o,{type:"segment",p0:e,p1:i,p0DataIndex:(h-1)%c,p1DataIndex:h%c,datasetIndex:a}))),pr(t,f)&&d(l,h-1,g.loop,f),e=i,f=t}l<h-1&&d(l,h-1,g.loop,f)}return u}function gr(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function pr(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}}}]);
//# sourceMappingURL=1967.4973182c.js.map