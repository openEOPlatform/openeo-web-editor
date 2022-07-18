(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7539c6c9"],{2930:function(e,t,s){"use strict";var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[t("div",{ref:"container",staticClass:"modal-container",style:e.style},[t("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[t("h2",[e._v(e._s(e.title))]),t("span",{staticClass:"close",on:{click:e.close}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),t("main",{staticClass:"modal-content"},[e._t("default")],2),t("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},i=[],n=s("3115"),a=s("025e"),r={name:"Modal",mixins:[n["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...a["a"].mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...a["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},l=r,c=(s("6a83"),s("2877")),d=Object(c["a"])(l,o,i,!1,null,null,null);t["a"]=d.exports},5871:function(e,t,s){},"6a83":function(e,t,s){"use strict";s("c321")},c28e:function(e,t,s){"use strict";s("5871")},c321:function(e,t,s){},f22f:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{show:e.show,title:"Import process from external source"},on:{closed:function(t){return e.$emit("closed")}},scopedSlots:e._u([{key:"default",fn:function(){return[t("div",{staticClass:"content"},[e._v(" You can load an external process from multiple different sources: "),t("h3",[e._v("Upload file from your computer")]),t("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.uploadFile.apply(null,arguments)}}},[t("input",{attrs:{type:"file",name:"file",accept:"application/json"},on:{change:e.setFile}}),e._v(" "),t("button",{attrs:{disabled:!e.hasFile}},[e._v("Upload")])]),t("h3",[e._v("Download file from the internet")]),t("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.loadUrl.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"url",name:"url"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),e._v(" "),t("button",{attrs:{disabled:!e.hasUrl}},[e._v("Load")])]),e.gh.length>0?[t("h3",[e._v("Examples from openEO processes repository")]),t("ul",e._l(e.gh,(function(s){return t("li",{key:s.name},[t("a",{on:{click:function(t){return e.request(s.url)}}},[e._v(e._s(s.name))])])})),0)]:e._e()],2)]},proxy:!0},{key:"footer",fn:function(){return[t("div",{staticClass:"footer"},[t("button",{attrs:{type:"button",disabled:!e.process},on:{click:e.submit}},[e._v(" Import "),null===e.processId?[e._v("unnamed process")]:e.processId?t("code",[e._v(e._s(e.processId))]):e._e()],2)])]},proxy:!0}])})},i=[],n=(s("d9e2"),s("025e")),a=s("2930"),r={name:"ImportProcessModal",components:{Modal:a["a"]},data(){return{gh:[],process:null,url:null,file:null,show:!0}},async created(){try{let e=await axios("https://api.github.com/repos/Open-EO/openeo-community-examples/git/trees/2babd5d10e56f10d0a51569838227e93fdd934c5");this.gh=e.data.tree.filter(e=>e.path.endsWith(".json")).map(e=>({name:e.path.substring(0,e.path.length-5),url:"https://raw.githubusercontent.com/Open-EO/openeo-community-examples/main/processes/"+e.path}))}catch(e){console.warn(e)}},computed:{processId(){return n["a"].isObject(this.process)?this.process.id?this.process.id:null:""},hasUrl(){return n["a"].isUrl(this.url)},hasFile(){return!!this.file}},methods:{checkProcess(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){throw new Error("Process is not valid JSON")}if(!n["a"].isObject(e))throw new Error("Process does not contain any data");if("string"!==typeof e.id&&!n["a"].isObject(e.process_graph))throw new Error("Process does not contain `id` or `process graph`");return e},setFile(e){e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length>0?this.file=e.dataTransfer.files[0]:e.target&&e.target.files&&e.target.files.length>0?this.file=e.target.files[0]:this.file=null},uploadFile(){var e=new FileReader;e.onload=async e=>{try{this.process=this.checkProcess(e.target.result)}catch(t){n["a"].exception(this,t,"Upload failed")}},e.onerror=e=>n["a"].exception(this,e,"Reading JSON file failed"),e.readAsText(this.file,"UTF-8")},loadUrl(){this.request(this.url)},async request(e){try{if(!n["a"].isUrl(e))throw new Error("Please provide a valid URL");let t=await axios(e);this.process=this.checkProcess(t.data)}catch(t){n["a"].exception(this,t,"Download failed")}},submit(){this.$emit("save",this.process),this.show=!1}}},l=r,c=(s("c28e"),s("2877")),d=Object(c["a"])(l,o,i,!1,null,"4c7cb15e",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7539c6c9.4e768afb.js.map