"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3207],{8168:(e,t,n)=>{n.d(t,{I3:()=>P,en:()=>D});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var a=function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},a.apply(this,arguments)},s="\\d+(?:[\\.,]\\d+)?",r="("+s+"W)",o="("+s+"Y)?("+s+"M)?("+s+"D)?",i="T("+s+"H)?("+s+"M)?("+s+"S)?",u="^P(?:"+r+"|"+o+"(?:"+i+")?)$",d=new RegExp(u),l=["weeks","years","months","days","hours","minutes","seconds"],c={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"S",weeks:"W"},m=Object.freeze({weeks:0,years:0,months:0,days:0,hours:0,minutes:0,seconds:0}),h=function(e){var t=e.match(d);if(!t)throw new Error("Invalid duration string");var n=t.slice(1).reduce((function(e,t,n){return e[l[n]]=parseFloat(t)||0,e}),{});return n},p=function(e){return e.weeks&&e.weeks>0?Object.assign({},m,{weeks:e.weeks}):l.reduce((function(t,n){var s;return a(a({},t),(s={},s[n]=e[n]||0,s))}),{})},v={locales:{},options:{},setLocales:function(e,t){this.locales=a(a({},this.locales),e),t&&(this.options=a(a({},this.options),t))},getLangConfig:function(e){var t=this.locales[e];if(!t&&this.options.fallbackLocale&&(t=this.locales[this.options.fallbackLocale]),!t)throw new Error("isoDuration: Translations for language: "+e+" are not provided");return t}},f=function(e){for(var t=["years","months","days"],n="",a=0,s=t;a<s.length;a++){var r=s[a];e[r]&&(n+=""+e[r]+c[r])}return n},g=function(e){for(var t=["hours","minutes","seconds"],n="",a=0,s=t;a<s.length;a++){var r=s[a];e[r]&&(n+=""+e[r]+c[r])}return n},y=function(e){if(e.weeks>0)return"P"+e.weeks+"W";var t="P",n=f(e);n&&(t+=n);var a=g(e);return a&&(t+="T"+a),n||a||(t+="0D"),t},b=function(e,t){var n=v.getLangConfig(t);return e.weeks+" "+n.weeks(e.weeks)},w=function(e,t,n){for(var a=v.getLangConfig(t),s="",r=["years","months","days","hours","minutes","seconds"],o=0,i=0;i<r.length;i++){var u=r[i],d=e[u];if(d&&(""!==s&&(s+=" "),s+=d+" "+a[u](d),o++,n&&n.largest&&n.largest<=o))break}return s},k=function(e,t,n){return e.weeks>0?b(e,t):w(e,t,n)},O=["seconds","minutes","hours","days","months"],j=function(e){return function(t){return{nextUnitValue:Math.floor(t/e),value:t%e}}},_=function(e,t){return new Date(t,e+1,0).getDate()},x={seconds:j(60),minutes:j(60),hours:j(24),days:function(e,t){var n=t?new Date(t.getTime()):new Date,a=e,s=0,r=_(n.getMonth(),n.getFullYear());while(a>r)a-=r,s++,n.setMonth(n.getMonth()+1),r=_(n.getMonth(),n.getFullYear());return{nextUnitValue:s,value:a}},months:j(12)},C=function(e,t){for(var n=a({},e),s=0;s<O.length;s++){var r=O[s],o=n[r];if(o>0){var i=x[r](o,t);if(n[r]=i.value,i.nextUnitValue){var u="months"===r?"years":O[s+1];n[u]=n[u]+i.nextUnitValue}}}return n},M=function(){function e(e){this.durationObj=e}return e.prototype.parse=function(){return this.durationObj},e.prototype.toString=function(){return y(this.durationObj)},e.prototype.humanize=function(e,t){return k(this.durationObj,e,t)},e.prototype.normalize=function(e){return this.durationObj=C(this.durationObj,e),this},e.prototype.isEmpty=function(){var e=this;return Object.keys(this.durationObj).every((function(t){return 0===e.durationObj[t]}))},e}();var D={years:function(e){return"year"+(1===e?"":"s")},months:function(e){return"month"+(1===e?"":"s")},weeks:function(e){return"week"+(1===e?"":"s")},days:function(e){return"day"+(1===e?"":"s")},hours:function(e){return"hour"+(1===e?"":"s")},minutes:function(e){return"minute"+(1===e?"":"s")},seconds:function(e){return"second"+(1===e?"":"s")},decimal:"."};function P(e){return new M("string"===typeof e?h(e):p(e))}P.setLocales=function(e,t){v.setLocales(e,t)}},73207:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"duration-picker"},[t("div",{staticClass:"group"},[t("label",[e._v("Years")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.years,expression:"data.years"}],attrs:{type:"number",min:"0",disabled:!e.editable},domProps:{value:e.data.years},on:{change:e.emit,input:function(t){t.target.composing||e.$set(e.data,"years",t.target.value)}}})]),t("div",{staticClass:"group"},[t("label",[e._v("Months")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.months,expression:"data.months"}],attrs:{type:"number",min:"0",disabled:!e.editable},domProps:{value:e.data.months},on:{change:e.emit,input:function(t){t.target.composing||e.$set(e.data,"months",t.target.value)}}})]),t("div",{staticClass:"group"},[t("label",[e._v("Days")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.days,expression:"data.days"}],attrs:{type:"number",min:"0",disabled:!e.editable},domProps:{value:e.data.days},on:{change:e.emit,input:function(t){t.target.composing||e.$set(e.data,"days",t.target.value)}}})]),t("div",{staticClass:"group"},[t("label",[e._v("Hours")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.hours,expression:"data.hours"}],attrs:{type:"number",min:"0",disabled:!e.editable},domProps:{value:e.data.hours},on:{change:e.emit,input:function(t){t.target.composing||e.$set(e.data,"hours",t.target.value)}}})]),t("div",{staticClass:"group"},[t("label",[e._v("Minutes")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.minutes,expression:"data.minutes"}],attrs:{type:"number",min:"0",disabled:!e.editable},domProps:{value:e.data.minutes},on:{change:e.emit,input:function(t){t.target.composing||e.$set(e.data,"minutes",t.target.value)}}})]),t("div",{staticClass:"group"},[t("label",[e._v("Seconds")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.seconds,expression:"data.seconds"}],attrs:{type:"number",min:"0",disabled:!e.editable},domProps:{value:e.data.seconds},on:{change:e.emit,input:function(t){t.target.composing||e.$set(e.data,"seconds",t.target.value)}}})])])},s=[],r=n(8168);const o={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},i={name:"Duration",props:{value:{type:String,default:null},editable:{type:Boolean,default:!0}},data(){return{data:o}},watch:{value:{immediate:!0,handler(e,t){if(e===t)try{this.data=(0,r.I3)(e).parse()}catch(n){this.data=o}}}},methods:{emit(){let e=null;if(Object.values(this.data).find((e=>e>0)))try{e=(0,r.I3)(this.data).toString()}catch(t){}this.$emit("input",e)}}},u=i;var d=n(1001),l=(0,d.Z)(u,a,s,!1,null,"40e2a6f4",null);const c=l.exports}}]);
//# sourceMappingURL=3207.3ecd8377.js.map