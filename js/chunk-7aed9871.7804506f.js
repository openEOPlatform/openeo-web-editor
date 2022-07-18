(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aed9871","chunk-fe508da2"],{2930:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[t("div",{ref:"container",staticClass:"modal-container",style:e.style},[t("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[t("h2",[e._v(e._s(e.title))]),t("span",{staticClass:"close",on:{click:e.close}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),t("main",{staticClass:"modal-content"},[e._t("default")],2),t("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},i=[],n=a("3115"),o=a("025e"),r={name:"Modal",mixins:[n["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...o["a"].mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...o["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},c=r,d=(a("6a83"),a("2877")),l=Object(d["a"])(c,s,i,!1,null,null,null);t["a"]=l.exports},"6a83":function(e,t,a){"use strict";a("c321")},"81dd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component process-parameter"},[t("h4",[t("code",[e._v(e._s(e.parameter.name))]),e.parameter.optional?e._e():t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]),e.hasDefault?t("code",{staticClass:"default"},[e._v(" = "+e._s(e.defaultValue))]):e._e()]),t("div",{staticClass:"details"},[e.parameter.description?t("Description",{attrs:{description:e.parameter.description,processUrl:e.processUrl}}):e._e(),!0===e.parameter.deprecated?t("DeprecationNotice",{attrs:{entity:"parameter"}}):e._e(),!0===e.parameter.experimental?t("ExperimentalNotice",{attrs:{entity:"parameter"}}):e._e(),e.parameter["federation:backends"]?t("FederationNotice",{attrs:{backends:e.parameter["federation:backends"],federation:e.federation,entity:"parameter"}}):e._e(),e.parameter.schema?t("div",{staticClass:"json-schema-container"},[t("JsonSchema",{attrs:{schema:e.parameter.schema,processUrl:e.processUrl}})],1):e._e()],1)])},i=[],n=a("e71d"),o={name:"ProcessParameter",components:{DeprecationNotice:()=>a.e("chunk-4548ecac").then(a.bind(null,"5dc7")),Description:()=>a.e("chunk-7c1dfb0d").then(a.bind(null,"8088")),ExperimentalNotice:()=>a.e("chunk-cf82a0e4").then(a.bind(null,"b581")),JsonSchema:()=>a.e("chunk-ed8d3906").then(a.bind(null,"6e45"))},mixins:[n["a"]],props:{parameter:{type:Object},processUrl:{type:String},...n["a"].props},computed:{hasDefault(){return"undefined"!==typeof this.parameter.default},defaultValue(){return JSON.stringify(this.parameter.default)}}},r=o,c=(a("9768"),a("2877")),d=Object(c["a"])(r,s,i,!1,null,null,null);t["default"]=d.exports},"8de3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{width:"50%",title:e.title},on:{closed:function(t){return e.$emit("closed")}}},[t("div",{staticClass:"processParameterModal"},[e.udp?t("p",{staticClass:"message info"},[t("i",{staticClass:"fas fa-info-circle"}),t("span",[e._v(" This is a parameter for a user-defined process. It is a value made available by the parent entity (usually another process or a secondary web service) that is executing this processes for further use. See below for details about this parameter: ")])]):e._e(),t("ProcessParameter",{attrs:{parameter:e.parameter}})],1)])},i=[],n=a("2930"),o=a("81dd"),r={name:"ProcessParameterModal",components:{Modal:n["a"],ProcessParameter:o["default"]},props:{parameter:{type:Object},udp:{type:Boolean,default:!1}},computed:{title(){return this.parameter.name||"Unnamed Parameter"}}},c=r,d=(a("8fd8"),a("2877")),l=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=l.exports},"8fd8":function(e,t,a){"use strict";a("d731")},9768:function(e,t,a){"use strict";a("dd76")},c321:function(e,t,a){},d731:function(e,t,a){},dd76:function(e,t,a){},e71d:function(e,t,a){"use strict";t["a"]={components:{FederationNotice:()=>a.e("chunk-38fe18ab").then(a.bind(null,"7482")),FederationMissingNotice:()=>a.e("chunk-4a47046a").then(a.bind(null,"c8b2"))},props:{federation:{type:Object,default:()=>({})}}}}}]);
//# sourceMappingURL=chunk-7aed9871.7804506f.js.map