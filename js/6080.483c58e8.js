"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[6080],{36080:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var s=function(){var e=this,t=e._self._c;return t("div",{ref:"imageViewer",staticClass:"imageViewer",class:{fullscreen:e.fullScreen}},[e.error?[e._v(e._s(e.error))]:[t("div",{staticClass:"toolbar"},[t("span",{staticClass:"value",attrs:{title:e.valueTitle}},[e._v(e._s(e.valueText))]),t("FullscreenButton",{staticClass:"fullscreen-button",attrs:{element:()=>e.$refs.imageViewer},on:{changed:e.fullscreenToggled}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.context,expression:"!context"}],staticClass:"no-data"},[t("i",{staticClass:"fas fa-spinner fa-spin"}),e._v(" Loading image...")]),t("canvas",{directives:[{name:"show",rawName:"v-show",value:e.context,expression:"context"}],ref:"canvas",class:{fullsize:e.fullSize},attrs:{title:e.title},on:{click:e.resize,mousemove:e.getPixelValue,mouseout:e.resetPixelValue}})]],2)},l=[],a=i(70937),r=i(58661),n=i(25108);const u={name:"ImageViewer",components:{FullscreenButton:a.Z},props:{data:{type:Object,required:!0}},data(){return{fullScreen:!1,fullSize:!1,img:null,error:null,context:null,value:"-"}},async mounted(){this.$emit("mounted",this);try{this.img=await this.data.getData(),this.$refs.canvas.width=this.img.naturalWidth,this.$refs.canvas.height=this.img.naturalHeight,this.context=this.$refs.canvas.getContext("2d"),this.context.drawImage(this.img,0,0)}catch(e){this.error=e}},computed:{title(){return this.fullScreen?"":this.fullSize?"Click to shrink (fit to screen)":"Click to enlarge (full size)"},valueTitle(){return this.fullScreen||this.fullSize?"":"Show in full size to get precise values"},valueText(){return this.fullScreen||this.fullSize?`Pixel Value: ${this.value}`:`Estimated Pixel Value: ${this.value}`}},methods:{fullscreenToggled(e){this.fullScreen=e},resize(){this.fullScreen||(this.fullSize=!this.fullSize)},resetPixelValue(){this.value="-"},getPixelValue(e){try{let t=this.$refs.canvas.getBoundingClientRect(),i=this.img.naturalWidth/t.width,s=this.img.naturalHeight/t.height,l=e.offsetX*i,a=e.offsetY*s,n=this.context.getImageData(Math.ceil(l),Math.ceil(a),1,1).data;this.value=r.Z.displayRGBA(n)}catch(t){this.value="n/a",n.log(t)}}}},c=u;var o=i(1001),h=(0,o.Z)(c,s,l,!1,null,"0598f569",null);const f=h.exports}}]);
//# sourceMappingURL=6080.483c58e8.js.map