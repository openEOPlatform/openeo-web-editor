(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29d8a2d1","chunk-7f23d0f5"],{2930:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e("div",{ref:"container",staticClass:"modal-container",style:t.style},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},n=[],a=i("3115"),o=i("025e"),r={name:"Modal",mixins:[a["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...o["a"].mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...o["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},l=r,d=(i("6a83"),i("2877")),c=Object(d["a"])(l,s,n,!1,null,null,null);e["a"]=c.exports},"313b":function(t,e,i){"use strict";i("92d4")},3642:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("Modal",{ref:"modal",attrs:{width:"50%",title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[e("FileFormat",{attrs:{id:t.id,format:t.format,type:t.type}})],1)},n=[],a=i("2930"),o=i("b896"),r={name:"FileFormatModal",components:{Modal:a["a"],FileFormat:o["default"]},props:{id:{type:String},format:{type:Object},type:{type:String}},computed:{title(){return this.format.title||this.id}}},l=r,d=(i("313b"),i("2877")),c=Object(d["a"])(l,s,n,!1,null,"3a7ce09e",null);e["default"]=c.exports},"6a83":function(t,e,i){"use strict";i("c321")},"82a8":function(t,e,i){},"92d4":function(t,e,i){},b896:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("article",{staticClass:"vue-component file-format"},[t._t("title",(function(){return[e("a",{staticClass:"anchor",attrs:{name:t.id}}),e("h2",[t.format.title?[t._v(" "+t._s(t.format.title)+" ("),e("code",{staticClass:"id"},[t._v(t._s(t._f("abbrev")(t.id)))]),t._v(") ")]:e("code",{staticClass:"id"},[t._v(t._s(t._f("abbrev")(t.id)))])],2)]}),null,t.$props),t._t("badges",(function(){return[e("ul",{staticClass:"badges"},["input"===t.type?e("li",{staticClass:"badge option1"},[t._v("Import")]):t._e(),"output"===t.type?e("li",{staticClass:"badge option2"},[t._v("Export")]):t._e(),Array.isArray(t.format.gis_data_types)?t._l(t.format.gis_data_types,(function(i){return e("li",{key:i,staticClass:"badge gis"},[t._v(t._s(i))])})):t._e()],2)]}),null,t.$props),t._t("before-description",null,null,t.$props),t.format.description?e("section",{staticClass:"description"},[e("h3",[t._v("Description")]),e("Description",{attrs:{description:t.format.description}}),t.format.deprecated?e("DeprecationNotice",{attrs:{entity:"file format"}}):t._e(),t.format.experimental?e("ExperimentalNotice",{attrs:{entity:"file format"}}):t._e(),t.format["federation:backends"]?e("FederationNotice",{attrs:{backends:t.format["federation:backends"],federation:t.federation,entity:"file format"}}):t._e()],1):t._e(),e("section",{staticClass:"parameters"},[e("h3",[t._v("Parameters")]),t._l(t.parameters,(function(i){return e("ProcessParameter",{key:i.name,attrs:{parameter:i,federation:t.federation}})})),0===t.parameters.length?e("p",[t._v("This file format has no parameters.")]):t._e()],2),e("section",{staticClass:"links"},[e("LinkList",{attrs:{links:t.format.links,heading:"See Also",headingTag:"h3"}})],1),t._t("end",null,null,t.$props)],2)},n=[],a=i("60a2"),o=i("e71d"),r={name:"FileFormat",components:{DeprecationNotice:()=>i.e("chunk-4548ecac").then(i.bind(null,"5dc7")),Description:()=>i.e("chunk-7c1dfb0d").then(i.bind(null,"8088")),ExperimentalNotice:()=>i.e("chunk-cf82a0e4").then(i.bind(null,"b581")),ProcessParameter:()=>i.e("chunk-fe508da2").then(i.bind(null,"81dd")),LinkList:()=>i.e("chunk-543cbf67").then(i.bind(null,"4845"))},mixins:[o["a"]],props:{id:{type:String,default:""},format:{type:Object,default:()=>({})},type:{type:String,default:null},...o["a"].props},computed:{parameters(){return a["a"].toProcessParameters(this.format.parameters)}},filters:{abbrev:a["a"].prettifyAbbreviation},beforeCreate(){a["a"].enableHtmlProps(this)}},l=r,d=(i("e128"),i("2877")),c=Object(d["a"])(l,s,n,!1,null,null,null);e["default"]=c.exports},c321:function(t,e,i){},e128:function(t,e,i){"use strict";i("82a8")},e71d:function(t,e,i){"use strict";e["a"]={components:{FederationNotice:()=>i.e("chunk-38fe18ab").then(i.bind(null,"7482")),FederationMissingNotice:()=>i.e("chunk-4a47046a").then(i.bind(null,"c8b2"))},props:{federation:{type:Object,default:()=>({})}}}}}]);
//# sourceMappingURL=chunk-29d8a2d1.68661646.js.map