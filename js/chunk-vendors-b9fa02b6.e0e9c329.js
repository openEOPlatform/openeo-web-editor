(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3460],{31044:(t,e,r)=>{"use strict";var o=r(40210),n=o("%Object.defineProperty%",!0),i=function(){if(n)try{return n({},"a",{value:1}),!0}catch(t){return!1}return!1};i.hasArrayLengthDefineBug=function(){if(!i())return null;try{return 1!==n([],"length",{value:1}).length}catch(t){return!0}},t.exports=i},41405:(t,e,r)=>{"use strict";var o="undefined"!==typeof Symbol&&Symbol,n=r(55419);t.exports=function(){return"function"===typeof o&&("function"===typeof Symbol&&("symbol"===typeof o("foo")&&("symbol"===typeof Symbol("bar")&&n())))}},55419:t=>{"use strict";t.exports=function(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return!1;if("symbol"===typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"===typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;var o=42;for(e in t[e]=o,t)return!1;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(i.value!==o||!0!==i.enumerable)return!1}return!0}},96410:(t,e,r)=>{"use strict";var o=r(55419);t.exports=function(){return o()&&!!Symbol.toStringTag}},17642:(t,e,r)=>{"use strict";var o=r(58612);t.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},80645:(t,e)=>{
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
e.read=function(t,e,r,o,n){var i,c,u=8*n-o-1,f=(1<<u)-1,l=f>>1,a=-7,s=r?n-1:0,p=r?-1:1,y=t[e+s];for(s+=p,i=y&(1<<-a)-1,y>>=-a,a+=u;a>0;i=256*i+t[e+s],s+=p,a-=8);for(c=i&(1<<-a)-1,i>>=-a,a+=o;a>0;c=256*c+t[e+s],s+=p,a-=8);if(0===i)i=1-l;else{if(i===f)return c?NaN:1/0*(y?-1:1);c+=Math.pow(2,o),i-=l}return(y?-1:1)*c*Math.pow(2,i-o)},e.write=function(t,e,r,o,n,i){var c,u,f,l=8*i-n-1,a=(1<<l)-1,s=a>>1,p=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,y=o?0:i-1,b=o?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,c=a):(c=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-c))<1&&(c--,f*=2),e+=c+s>=1?p/f:p*Math.pow(2,1-s),e*f>=2&&(c++,f/=2),c+s>=a?(u=0,c=a):c+s>=1?(u=(e*f-1)*Math.pow(2,n),c+=s):(u=e*Math.pow(2,s-1)*Math.pow(2,n),c=0));n>=8;t[r+y]=255&u,y+=b,u/=256,n-=8);for(c=c<<n|u,l+=n;l>0;t[r+y]=255&c,y+=b,c/=256,l-=8);t[r+y-b]|=128*g}},35717:t=>{"function"===typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},82584:(t,e,r)=>{"use strict";var o=r(96410)(),n=r(21924),i=n("Object.prototype.toString"),c=function(t){return!(o&&t&&"object"===typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===i(t)},u=function(t){return!!c(t)||null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Array]"!==i(t)&&"[object Function]"===i(t.callee)},f=function(){return c(arguments)}();c.isLegacyArguments=u,t.exports=f?c:u},95320:t=>{"use strict";var e,r,o=Function.prototype.toString,n="object"===typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"===typeof n&&"function"===typeof Object.defineProperty)try{e=Object.defineProperty({},"length",{get:function(){throw r}}),r={},n((function(){throw 42}),null,e)}catch(v){v!==r&&(n=null)}else n=null;var i=/^\s*class\b/,c=function(t){try{var e=o.call(t);return i.test(e)}catch(r){return!1}},u=function(t){try{return!c(t)&&(o.call(t),!0)}catch(e){return!1}},f=Object.prototype.toString,l="[object Object]",a="[object Function]",s="[object GeneratorFunction]",p="[object HTMLAllCollection]",y="[object HTML document.all class]",b="[object HTMLCollection]",g="function"===typeof Symbol&&!!Symbol.toStringTag,m=!(0 in[,]),h=function(){return!1};if("object"===typeof document){var j=document.all;f.call(j)===f.call(document.all)&&(h=function(t){if((m||!t)&&("undefined"===typeof t||"object"===typeof t))try{var e=f.call(t);return(e===p||e===y||e===b||e===l)&&null==t("")}catch(r){}return!1})}t.exports=n?function(t){if(h(t))return!0;if(!t)return!1;if("function"!==typeof t&&"object"!==typeof t)return!1;try{n(t,null,e)}catch(o){if(o!==r)return!1}return!c(t)&&u(t)}:function(t){if(h(t))return!0;if(!t)return!1;if("function"!==typeof t&&"object"!==typeof t)return!1;if(g)return u(t);if(c(t))return!1;var e=f.call(t);return!(e!==a&&e!==s&&!/^\[object HTML/.test(e))&&u(t)}},48662:(t,e,r)=>{"use strict";var o,n=Object.prototype.toString,i=Function.prototype.toString,c=/^\s*(?:function)?\*/,u=r(96410)(),f=Object.getPrototypeOf,l=function(){if(!u)return!1;try{return Function("return function*() {}")()}catch(t){}};t.exports=function(t){if("function"!==typeof t)return!1;if(c.test(i.call(t)))return!0;if(!u){var e=n.call(t);return"[object GeneratorFunction]"===e}if(!f)return!1;if("undefined"===typeof o){var r=l();o=!!r&&f(r)}return f(t)===o}},98611:t=>{"use strict";t.exports=function(t){return t!==t}},20360:(t,e,r)=>{"use strict";var o=r(55559),n=r(4289),i=r(98611),c=r(29415),u=r(23194),f=o(c(),Number);n(f,{getPolyfill:c,implementation:i,shim:u}),t.exports=f},29415:(t,e,r)=>{"use strict";var o=r(98611);t.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:o}},23194:(t,e,r)=>{"use strict";var o=r(4289),n=r(29415);t.exports=function(){var t=n();return o(Number,{isNaN:t},{isNaN:function(){return Number.isNaN!==t}}),t}},85692:(t,e,r)=>{"use strict";var o=r(94029),n=r(63083),i=r(21924),c=i("Object.prototype.toString"),u=r(96410)(),f=r(27296),l="undefined"===typeof globalThis?r.g:globalThis,a=n(),s=i("Array.prototype.indexOf",!0)||function(t,e){for(var r=0;r<t.length;r+=1)if(t[r]===e)return r;return-1},p=i("String.prototype.slice"),y={},b=Object.getPrototypeOf;u&&f&&b&&o(a,(function(t){var e=new l[t];if(Symbol.toStringTag in e){var r=b(e),o=f(r,Symbol.toStringTag);if(!o){var n=b(r);o=f(n,Symbol.toStringTag)}y[t]=o.get}}));var g=function(t){var e=!1;return o(y,(function(r,o){if(!e)try{e=r.call(t)===o}catch(n){}})),e};t.exports=function(t){if(!t||"object"!==typeof t)return!1;if(!u||!(Symbol.toStringTag in t)){var e=p(c(t),8,-1);return s(a,e)>-1}return!!f&&g(t)}},49461:t=>{"use strict";var e=t.exports=function(t,e,o){"function"==typeof e&&(o=e,e={}),o=e.cb||o;var n="function"==typeof o?o:o.pre||function(){},i=o.post||function(){};r(e,n,i,t,"",t)};function r(t,n,i,c,u,f,l,a,s,p){if(c&&"object"==typeof c&&!Array.isArray(c)){for(var y in n(c,u,f,l,a,s,p),c){var b=c[y];if(Array.isArray(b)){if(y in e.arrayKeywords)for(var g=0;g<b.length;g++)r(t,n,i,b[g],u+"/"+y+"/"+g,f,u,y,c,g)}else if(y in e.propsKeywords){if(b&&"object"==typeof b)for(var m in b)r(t,n,i,b[m],u+"/"+y+"/"+o(m),f,u,y,c,m)}else(y in e.keywords||t.allKeys&&!(y in e.skipKeywords))&&r(t,n,i,b,u+"/"+y,f,u,y,c)}i(c,u,f,l,a,s,p)}}function o(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0}},68779:t=>{"use strict";const e="undefined"!==typeof self?self:"undefined"!==typeof window?window:void 0;if(!e)throw new Error("Unable to find global scope. Are you sure this is running in the browser?");if(!e.AbortController)throw new Error('Could not find "AbortController" in the global scope. You need to polyfill it first');t.exports.AbortController=e.AbortController},24244:t=>{"use strict";var e=function(t){return t!==t};t.exports=function(t,r){return 0===t&&0===r?1/t===1/r:t===r||!(!e(t)||!e(r))}},20609:(t,e,r)=>{"use strict";var o=r(4289),n=r(55559),i=r(24244),c=r(75624),u=r(52281),f=n(c(),Object);o(f,{getPolyfill:c,implementation:i,shim:u}),t.exports=f},75624:(t,e,r)=>{"use strict";var o=r(24244);t.exports=function(){return"function"===typeof Object.is?Object.is:o}},52281:(t,e,r)=>{"use strict";var o=r(75624),n=r(4289);t.exports=function(){var t=o();return n(Object,{is:t},{is:function(){return Object.is!==t}}),t}},18987:(t,e,r)=>{"use strict";var o;if(!Object.keys){var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,c=r(21414),u=Object.prototype.propertyIsEnumerable,f=!u.call({toString:null},"toString"),l=u.call((function(){}),"prototype"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=function(t){var e=t.constructor;return e&&e.prototype===t},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"===typeof window)return!1;for(var t in window)try{if(!p["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"===typeof window[t])try{s(window[t])}catch(e){return!0}}catch(e){return!0}return!1}(),b=function(t){if("undefined"===typeof window||!y)return s(t);try{return s(t)}catch(e){return!1}};o=function(t){var e=null!==t&&"object"===typeof t,r="[object Function]"===i.call(t),o=c(t),u=e&&"[object String]"===i.call(t),s=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var p=l&&r;if(u&&t.length>0&&!n.call(t,0))for(var y=0;y<t.length;++y)s.push(String(y));if(o&&t.length>0)for(var g=0;g<t.length;++g)s.push(String(g));else for(var m in t)p&&"prototype"===m||!n.call(t,m)||s.push(String(m));if(f)for(var h=b(t),j=0;j<a.length;++j)h&&"constructor"===a[j]||!n.call(t,a[j])||s.push(a[j]);return s}}t.exports=o},82215:(t,e,r)=>{"use strict";var o=Array.prototype.slice,n=r(21414),i=Object.keys,c=i?function(t){return i(t)}:r(18987),u=Object.keys;c.shim=function(){if(Object.keys){var t=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);t||(Object.keys=function(t){return n(t)?u(o.call(t)):u(t)})}else Object.keys=c;return Object.keys||c},t.exports=c},21414:t=>{"use strict";var e=Object.prototype.toString;t.exports=function(t){var r=e.call(t),o="[object Arguments]"===r;return o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===e.call(t.callee)),o}}}]);
//# sourceMappingURL=chunk-vendors-b9fa02b6.e0e9c329.js.map