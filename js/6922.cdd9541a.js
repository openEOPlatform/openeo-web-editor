"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[6922],{40196:(t,e,o)=>{o.d(e,{Z:()=>u});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e("div",{ref:"container",staticClass:"modal-container",style:t.style},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},i=[],n=o(43334),a=o(79879);const r={name:"Modal",mixins:[n.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...a.Z.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...a.Z.mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},l=r;var d=o(1001),h=(0,d.Z)(l,s,i,!1,null,null,null);const u=h.exports},16922:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var s=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{width:"50%",title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[e("p",{staticClass:"aboutPage"},[t._v(t._s(t.pkg.description))]),e("p",{staticClass:"aboutPage"},[t._v("This software is published by the "),e("strong",[t._v("openEO Consortium")]),t._v(" under the "),e("strong",[t._v("Apache 2.0 license")]),t._v(". Please find more information about the openEO project on our "),e("a",{attrs:{href:"http://www.openeo.org",target:"_blank"}},[t._v("homepage")]),t._v(" and visit the "),e("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor",target:"_blank"}},[t._v("GitHub repository")]),t._v(" for information about the Web Editor. Feel encouraged to "),e("strong",[t._v("report bugs, feature requests and other issues in the "),e("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor/issues",target:"_blank"}},[t._v("GitHub issue tracker")])]),t._v(".")]),e("h3",{staticClass:"aboutPage"},[t._v("Supported API versions:")]),e("ul",{staticClass:"aboutPage"},t._l(t.pkg.apiVersions,(function(o){return e("li",{key:o},[e("a",{attrs:{href:"https://api.openeo.org/"+o,target:"_blank"}},[t._v(t._s(o))])])})),0)])},i=[],n=o(4147),a=o(40196);const r={name:"WebEditorModal",components:{Modal:a.Z},data(){return{pkg:n}},computed:{title(){return`${this.$config.serviceName} ${this.$config.appName} ${this.pkg.version}`}}},l=r;var d=o(1001),h=(0,d.Z)(l,s,i,!1,null,null,null);const u=h.exports}}]);
//# sourceMappingURL=6922.cdd9541a.js.map