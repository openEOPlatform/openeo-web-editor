"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[1743],{81743:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var o=function(){var t=this,e=t._self._c;return e("Modal",{attrs:{width:"60%",title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[e("ul",{staticClass:"list"},t._l(t.result.assets,(function(s,o){return e("StacAsset",{key:o,attrs:{asset:s,id:o,context:t.result}})})),1)])},i=[],n=s(73466);const a={name:"DownloadAssetsModal",components:{StacAsset:()=>Promise.all([s.e(5062),s.e(5834),s.e(8370),s.e(9856),s.e(9879)]).then(s.bind(s,35529)),Modal:n.Z},props:{job:{type:Object},result:{type:Object}},computed:{title(){return"Download Results for: "+(this.job.title||"#"+this.job.id)}}},l=a;var r=s(1001),d=(0,r.Z)(l,o,i,!1,null,null,null);const c=d.exports},73466:(t,e,s)=>{s.d(e,{Z:()=>h});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[e("div",{ref:"container",staticClass:"modal-container",style:t.style},[e("header",{staticClass:"modal-header",on:{mousedown:t.startMove}},[t._t("header",(function(){return[e("h2",[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.close}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),e("main",{staticClass:"modal-content"},[t._t("default")],2),e("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},i=[],n=s(37787),a=s(58661);const l={name:"Modal",mixins:[n.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...a.Z.mapState("editor",["hightestModalZIndex"]),style(){let t={width:this.width};return this.minWidth&&(t["min-width"]=this.minWidth),Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...a.Z.mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){"H2"!==t.target.tagName&&(this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),t.preventDefault(),t.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},r=l;var d=s(1001),c=(0,d.Z)(r,o,i,!1,null,null,null);const h=c.exports}}]);
//# sourceMappingURL=1743.46410c83.js.map