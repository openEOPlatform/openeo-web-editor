"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[9409],{9409:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component search-box",class:{compact:e.compact}},[t("span",{staticClass:"icon"},[e._v("🔎")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"search",placeholder:e.placeholder,minlength:e.minLength,title:e.searchHint},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}})])},n=[];const s={name:"SearchBox",props:{value:{type:String,default:""},placeholder:{type:String,default:"Search"},minLength:{type:Number,default:1},compact:{type:Boolean,default:!1}},data(){return{searchTerm:this.value}},watch:{searchTerm(e,t){e.length<this.minLength&&(e=""),this.$emit("input",e)}},computed:{searchHint(){return this.minLength>1?`Searching requires at least ${this.minLength} characters.`:null}}},c=s;var l=a(81656),i=(0,l.A)(c,r,n,!1,null,null,null);const h=i.exports}}]);
//# sourceMappingURL=9409.27e2d99d.js.map