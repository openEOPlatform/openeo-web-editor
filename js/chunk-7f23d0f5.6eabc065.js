(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f23d0f5"],{"82a8":function(t,e,a){},b896:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("article",{staticClass:"vue-component file-format"},[t._t("title",(function(){return[e("a",{staticClass:"anchor",attrs:{name:t.id}}),e("h2",[t.format.title?[t._v(" "+t._s(t.format.title)+" ("),e("code",{staticClass:"id"},[t._v(t._s(t._f("abbrev")(t.id)))]),t._v(") ")]:e("code",{staticClass:"id"},[t._v(t._s(t._f("abbrev")(t.id)))])],2)]}),null,t.$props),t._t("badges",(function(){return[e("ul",{staticClass:"badges"},["input"===t.type?e("li",{staticClass:"badge option1"},[t._v("Import")]):t._e(),"output"===t.type?e("li",{staticClass:"badge option2"},[t._v("Export")]):t._e(),Array.isArray(t.format.gis_data_types)?t._l(t.format.gis_data_types,(function(a){return e("li",{key:a,staticClass:"badge gis"},[t._v(t._s(a))])})):t._e()],2)]}),null,t.$props),t._t("before-description",null,null,t.$props),t.format.description?e("section",{staticClass:"description"},[e("h3",[t._v("Description")]),e("Description",{attrs:{description:t.format.description}}),t.format.deprecated?e("DeprecationNotice",{attrs:{entity:"file format"}}):t._e(),t.format.experimental?e("ExperimentalNotice",{attrs:{entity:"file format"}}):t._e(),t.format["federation:backends"]?e("FederationNotice",{attrs:{backends:t.format["federation:backends"],federation:t.federation,entity:"file format"}}):t._e()],1):t._e(),e("section",{staticClass:"parameters"},[e("h3",[t._v("Parameters")]),t._l(t.parameters,(function(a){return e("ProcessParameter",{key:a.name,attrs:{parameter:a,federation:t.federation}})})),0===t.parameters.length?e("p",[t._v("This file format has no parameters.")]):t._e()],2),e("section",{staticClass:"links"},[e("LinkList",{attrs:{links:t.format.links,heading:"See Also",headingTag:"h3"}})],1),t._t("end",null,null,t.$props)],2)},i=[],n=a("60a2"),s=a("e71d"),o={name:"FileFormat",components:{DeprecationNotice:()=>a.e("chunk-4548ecac").then(a.bind(null,"5dc7")),Description:()=>a.e("chunk-7c1dfb0d").then(a.bind(null,"8088")),ExperimentalNotice:()=>a.e("chunk-cf82a0e4").then(a.bind(null,"b581")),ProcessParameter:()=>a.e("chunk-fe508da2").then(a.bind(null,"81dd")),LinkList:()=>a.e("chunk-543cbf67").then(a.bind(null,"4845"))},mixins:[s["a"]],props:{id:{type:String,default:""},format:{type:Object,default:()=>({})},type:{type:String,default:null},...s["a"].props},computed:{parameters(){return n["a"].toProcessParameters(this.format.parameters)}},filters:{abbrev:n["a"].prettifyAbbreviation},beforeCreate(){n["a"].enableHtmlProps(this)}},l=o,c=(a("e128"),a("2877")),p=Object(c["a"])(l,r,i,!1,null,null,null);e["default"]=p.exports},e128:function(t,e,a){"use strict";a("82a8")}}]);
//# sourceMappingURL=chunk-7f23d0f5.6eabc065.js.map