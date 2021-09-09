(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c50d734"],{"0639":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{width:"40%",title:"Estimate for Batch Job"},on:{closed:function(e){return t.$emit("closed")}}},[n("JobEstimate",{attrs:{estimate:t.estimate,currency:t.currency}}),t.job?n("section",{staticClass:"vue-component basedata"},[n("h3",[t._v("Batch Job")]),n("div",{staticClass:"tabular"},[n("label",[t._v("ID:")]),n("tt",{staticClass:"value"},[t._v(t._s(t.job.id))])],1),t.job.title?n("div",{staticClass:"tabular"},[n("label",[t._v("Title:")]),n("span",{staticClass:"value"},[t._v(t._s(t.job.title))])]):t._e()]):t._e()],1)},i=[],a=n("025e"),o=n("2930"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-component estimate"},[n("h2",[t._v("Estimate")]),n("div",{staticClass:"tabular"},[n("label",[t._v("Costs:")]),n("span",{staticClass:"value"},[t._v(t._s(t.costs))])]),n("div",{staticClass:"tabular"},[n("label",[t._v("Runtime:")]),n("span",{staticClass:"value"},[t._v(t._s(t.duration))])]),n("div",{staticClass:"tabular"},[n("label",[t._v("File size:")]),n("span",{staticClass:"value"},[t._v(t._s(t.size))])]),n("div",{staticClass:"tabular"},[n("label",[t._v("Downloads included:")]),n("span",{staticClass:"value"},[t._v(t._s(t.downloadsIncluded))])]),t.expires?n("div",{staticClass:"tabular"},[n("label",[t._v("Valid until:")]),n("span",{staticClass:"value"},[t._v(t._s(t.expires))])]):t._e()])},u=[],l=n("60a2"),c=n("863a"),d={name:"JobEstimate",props:{estimate:{type:Object,default:()=>({})},currency:{type:String,default:null}},computed:{downloadsIncluded(){return 0===this.estimate.downloads_included?"None":this.estimate.downloads_included>0?`Yes, ${this.estimate.downloads_included}×`:"Yes, unlimited"},expires(){return l["a"].formatTimestamp(this.estimate.expires,null)},costs(){return l["a"].formatCurrency(this.estimate.costs,this.currency,"n/a")},size(){return l["a"].formatFileSize(this.estimate.size,"n/a")},duration(){if("string"===typeof this.estimate.duration)try{return c["b"].setLocales({en:c["a"]}),Object(c["b"])(this.estimate.duration).humanize("en")}catch(t){console.warn(t)}return"n/a"}},beforeCreate(){l["a"].enableHtmlProps(this)}},h=d,f=(n("3ab8"),n("2877")),m=Object(f["a"])(h,r,u,!1,null,null,null),p=m.exports,v={name:"JobEstimateModal",components:{JobEstimate:p,Modal:o["a"]},computed:{...a["a"].mapGetters(["currency"])},props:{job:{type:Object},estimate:{type:Object}}},b=v,w=(n("9d33"),Object(f["a"])(b,s,i,!1,null,null,null));e["default"]=w.exports},2930:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[n("div",{ref:"container",staticClass:"modal-container",style:t.style},[n("header",{staticClass:"modal-header",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.startMove.apply(null,arguments)}}},[t._t("header",(function(){return[n("h2",[t._v(t._s(t.title))]),n("span",{staticClass:"close",on:{click:t.close}},[n("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),n("main",{staticClass:"modal-content"},[t._t("default")],2),n("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},i=[],a=n("3115"),o=n("025e"),r={name:"Modal",mixins:[a["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...o["a"].mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...o["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove)},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},u=r,l=(n("8781"),n("2877")),c=Object(l["a"])(u,s,i,!1,null,null,null);e["a"]=c.exports},"3ab8":function(t,e,n){"use strict";n("e026")},"4a46":function(t,e,n){},"6b1e":function(t,e,n){},"863a":function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return L}));
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
var s=function(){return s=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},s.apply(this,arguments)},i="\\d+(?:[\\.,]\\d+)?",a="("+i+"W)",o="("+i+"Y)?("+i+"M)?("+i+"D)?",r="T("+i+"H)?("+i+"M)?("+i+"S)?",u="^P(?:"+a+"|"+o+"(?:"+r+")?)$",l=new RegExp(u),c=["weeks","years","months","days","hours","minutes","seconds"],d={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"S",weeks:"W"},h=Object.freeze({weeks:0,years:0,months:0,days:0,hours:0,minutes:0,seconds:0}),f=function(t){var e=t.match(l);if(!e)throw new Error("Invalid duration string");var n=e.slice(1).reduce((function(t,e,n){return t[c[n]]=parseFloat(e)||0,t}),{});return n},m=function(t){return t.weeks&&t.weeks>0?Object.assign({},h,{weeks:t.weeks}):c.reduce((function(e,n){var i;return s(s({},e),(i={},i[n]=t[n]||0,i))}),{})},p={locales:{},options:{},setLocales:function(t,e){this.locales=s(s({},this.locales),t),e&&(this.options=s(s({},this.options),e))},getLangConfig:function(t){var e=this.locales[t];if(!e&&this.options.fallbackLocale&&(e=this.locales[this.options.fallbackLocale]),!e)throw new Error("isoDuration: Translations for language: "+t+" are not provided");return e}},v=function(t){for(var e=["years","months","days"],n="",s=0,i=e;s<i.length;s++){var a=i[s];t[a]&&(n+=""+t[a]+d[a])}return n},b=function(t){for(var e=["hours","minutes","seconds"],n="",s=0,i=e;s<i.length;s++){var a=i[s];t[a]&&(n+=""+t[a]+d[a])}return n},w=function(t){if(t.weeks>0)return"P"+t.weeks+"W";var e="P",n=v(t);n&&(e+=n);var s=b(t);return s&&(e+="T"+s),n||s||(e+="0D"),e},y=function(t,e){var n=p.getLangConfig(e);return t.weeks+" "+n.weeks(t.weeks)},g=function(t,e,n){for(var s=p.getLangConfig(e),i="",a=["years","months","days","hours","minutes","seconds"],o=0,r=0;r<a.length;r++){var u=a[r],l=t[u];if(l&&(""!==i&&(i+=" "),i+=l+" "+s[u](l),o++,n&&n.largest&&n.largest<=o))break}return i},_=function(t,e,n){return t.weeks>0?y(t,e):g(t,e,n)},C=["seconds","minutes","hours","days","months"],k=function(t){return function(e){return{nextUnitValue:Math.floor(e/t),value:e%t}}},j=function(t,e){return new Date(e,t+1,0).getDate()},M={seconds:k(60),minutes:k(60),hours:k(24),days:function(t,e){var n=e?new Date(e.getTime()):new Date,s=t,i=0,a=j(n.getMonth(),n.getFullYear());while(s>a)s-=a,i++,n.setMonth(n.getMonth()+1),a=j(n.getMonth(),n.getFullYear());return{nextUnitValue:i,value:s}},months:k(12)},x=function(t,e){for(var n=s({},t),i=0;i<C.length;i++){var a=C[i],o=n[a];if(o>0){var r=M[a](o,e);if(n[a]=r.value,r.nextUnitValue){var u="months"===a?"years":C[i+1];n[u]=n[u]+r.nextUnitValue}}}return n},O=function(){function t(t){this.durationObj=t}return t.prototype.parse=function(){return this.durationObj},t.prototype.toString=function(){return w(this.durationObj)},t.prototype.humanize=function(t,e){return _(this.durationObj,t,e)},t.prototype.normalize=function(t){return this.durationObj=x(this.durationObj,t),this},t.prototype.isEmpty=function(){var t=this;return Object.keys(this.durationObj).every((function(e){return 0===t.durationObj[e]}))},t}();var E={years:function(t){return"year"+(1===t?"":"s")},months:function(t){return"month"+(1===t?"":"s")},weeks:function(t){return"week"+(1===t?"":"s")},days:function(t){return"day"+(1===t?"":"s")},hours:function(t){return"hour"+(1===t?"":"s")},minutes:function(t){return"minute"+(1===t?"":"s")},seconds:function(t){return"second"+(1===t?"":"s")},decimal:"."};function L(t){return new O("string"===typeof t?f(t):m(t))}L.setLocales=function(t,e){p.setLocales(t,e)}},8781:function(t,e,n){"use strict";n("6b1e")},"9d33":function(t,e,n){"use strict";n("4a46")},e026:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6c50d734.ff927c8d.js.map