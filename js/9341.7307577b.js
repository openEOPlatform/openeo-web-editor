"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[9341,8922,4568,9879],{35529:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=function(){var e=this,t=e._self._c;return t("li",{staticClass:"vue-component asset"},[t("h4",[t("ul",{staticClass:"badges actions"},[t("li",{staticClass:"badge action download"},[t("a",{staticClass:"badge-fill",attrs:{href:e.asset.href,target:"_blank",download:""}},[e._v(" Download '"+e._s(e.asset.title||e.id)+"' "),e.fileFormat?[e._v("as "+e._s(e.fileFormat))]:e._e()],2)])]),Array.isArray(e.asset.roles)?t("ul",{staticClass:"badges"},e._l(e.asset.roles,(function(s){return t("li",{key:s,staticClass:"badge",class:"data"===s?"green":"secondary"},[e._v(e._s(s))])})),0):e._e()]),e.asset.description?t("Description",{attrs:{description:e.asset.description,compact:!0}}):e._e(),t("StacFields",{attrs:{type:"Asset",metadata:e.asset,ignore:e.ignore,title:"",context:e.context,headingTag:"h5"}})],1)},r=[],i=s(35834),n=s(79856),o=s(64568);const l={name:"Asset",components:{Description:n["default"],StacFields:o["default"]},props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:()=>({})}},data(){return{ignore:["href","title","description","type","roles"]}},computed:{fileFormat(){return this.asset.type?i.Formatters.formatMediaType(this.asset.type):null}}},d=l;var c=s(1001),u=(0,c.Z)(d,a,r,!1,null,null,null);const p=u.exports},64568:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=function(){var e=this,t=e._self._c;return t("section",{staticClass:"vue-component stac stac-fields metadata"},[e._l(e.fields,(function(s){return[t(e.headingTag,{key:s.extension,tag:"component",domProps:{innerHTML:e._s(s.label||"General")}}),t("section",{key:`section_${s.extension}`,staticClass:"group"},e._l(s.properties,(function(a,r){return t("div",{key:s.extension+r,staticClass:"tabular",class:{wrap:Boolean(a.custom||a.items)},attrs:{id:"field_"+r}},[t("label",{attrs:{title:r},domProps:{innerHTML:e._s(a.label)}}),t("div",{staticClass:"value"},[e._t(r,(function(){return[a.items?t("table",{staticClass:"table"},[t("thead",[t("tr",[Array.isArray(a.formatted)?e._e():t("th",[e._v(" ")]),e._l(a.itemOrder,(function(s){return t("th",{key:s,domProps:{innerHTML:e._s(a.items[s].label)}})}))],2)]),t("tbody",e._l(a.formatted,(function(s,r){return t("tr",{key:r},[Array.isArray(a.formatted)?e._e():t("th",[e._v(e._s(r))]),e._l(a.itemOrder,(function(a){return t("td",{key:`${a}_${r}`,domProps:{innerHTML:e._s(s[a])}})}))],2)})),0)]):"card4l:processing_chain"===r?t("Process",{staticClass:"inline",attrs:{process:a.value,provideDownload:!1,showGraph:!0}}):a.formatted?t("div",{staticClass:"formatted",domProps:{innerHTML:e._s(a.formatted)}}):[e._v(e._s(a.value))]]}),{prop:a,field:r})],2)])})),0)]}))],2)},r=[],i=s(35834),n=s.n(i),o=s(65973);const l=["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","conformsTo","deprecated","cube:dimensions"];n().Registry.externalRenderer=!0;const d={name:"StacFields",components:{Process:()=>s.e(7132).then(s.bind(s,87132))},props:{metadata:{type:Object,default:()=>({})},headingTag:{type:String,default:"h3"},ignore:{type:Array,default:()=>[]},type:{type:String,required:!0},context:{type:Object,default:()=>({})}},computed:{ignoreFn(){return this.ignore.length>0?e=>!this.ignore.includes(e):null},fields(){if("Collection"===this.type){let e=o.Z.deepClone(this.metadata);o.Z.isObject(e.summaries)||(e.summaries={});for(let t in e)l.includes(t)||(e.summaries[t]=[e[t]]);return n().formatSummaries(e,this.ignoreFn)}if("Item"===this.type)return n().formatItemProperties(this.metadata,this.ignoreFn);if("Asset"===this.type)return n().formatAsset(this.metadata,this.context,this.ignoreFn);throw new Error("Not implemented yet")}},methods:{label(e,t={}){return n().label(e,t)}}},c=d;var u=s(1001),p=(0,u.Z)(c,a,r,!1,null,null,null);const m=p.exports}}]);
//# sourceMappingURL=9341.7307577b.js.map