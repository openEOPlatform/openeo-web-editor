"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[9566],{15554:(e,t,i)=>{i.d(t,{Z:()=>s});const s={components:{FederationNotice:()=>i.e(5518).then(i.bind(i,15518)),FederationMissingNotice:()=>i.e(233).then(i.bind(i,50233))},props:{federation:{type:Object,default:()=>({})}}}},14278:(e,t,i)=>{i.d(t,{Z:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component file-formats"},[t("SearchableList",{attrs:{data:e.fileFormats,summaryKey:"title",keywordsKey:"gis_data_types",showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},e.missing?{key:"content-start",fn:function(){return[t("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(i){return[e._t("summary",(function(){return[t("strong",{staticClass:"inline"},[e._v(e._s(i.item.name))]),t("ul",{staticClass:"badges small inline"},[e.showAll&&"input"===i.item.type?t("li",{staticClass:"badge option1"},[e._v("Import")]):e._e(),e.showAll&&"output"===i.item.type?t("li",{staticClass:"badge option2"},[e._v("Export")]):e._e(),Array.isArray(i.item.gis_data_types)?e._l(i.item.gis_data_types,(function(i){return t("li",{key:i,staticClass:"badge gis"},[e._v(e._s(i))])})):e._e()],2),t("br"),t("small",[e._v(e._s(i.summary.summary))])]}),null,i)]}},{key:"details",fn:function(i){return[t("FileFormat",{attrs:{id:i.summary.identifier,format:i.item,type:i.item.type,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("file-format-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("file-format-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},n=[],a=i(65973),l=i(15554);const o={name:"FileFormats",components:{SearchableList:()=>a.Z.loadAsyncComponent(i.e(1276).then(i.bind(i,91276))),FileFormat:()=>a.Z.loadAsyncComponent(i.e(2833).then(i.bind(i,12833)))},mixins:[l.Z],props:{formats:{type:Object,default:()=>({})},showInput:{type:Boolean,default:!0},showOutput:{type:Boolean,default:!0},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"File Formats"},collapsed:{type:Boolean,default:null},missing:{type:Array,default:null},...l.Z.props},computed:{showAll(){return this.showInput&&this.showOutput},typesToShow(){let e=[];return this.showInput&&e.push("input"),this.showOutput&&e.push("output"),e},fileFormats(){let e=[];for(let i of this.typesToShow)for(var t in this.formats[i]){let s=Object.assign({id:`${t}-${i}`,name:t,type:i},this.formats[i][t]);e.push(s)}return e}},beforeCreate(){a.Z.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},r=o;var u=i(1001),d=(0,u.Z)(r,s,n,!1,null,null,null);const c=d.exports},83543:(e,t,i)=>{i.d(t,{Z:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component udf-runtimes"},[t("SearchableList",{attrs:{data:e.runtimes,summaryKey:"title",showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},{key:"summary",fn:function(i){return[e._t("summary",(function(){return[t("strong",{staticClass:"inline"},[e._v(e._s(i.summary.identifier))]),t("ul",{staticClass:"badges small inline"},["docker"===i.item.type||i.item.docker&&i.item.tags?[t("li",{staticClass:"badge docker"},[e._v("Docker")]),e._l(i.item.tags,(function(s){return t("li",{key:s,staticClass:"badge version",class:{default:s===i.item.default}},[e._v(e._s(s))])}))]:e._l(i.item.versions,(function(s,n){return t("li",{key:n,staticClass:"badge version",class:{default:n===i.item.default}},[e._v(e._s(n))])}))],2),t("br"),t("small",[e._v(e._s(i.summary.summary))])]}),null,i)]}},{key:"details",fn:function(i){return[t("UdfRuntime",{attrs:{id:i.summary.identifier,runtime:i.item,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(t){return[e._t("udf-runtime-badges",null,null,t)]}},{key:"before-description",fn:function(t){return[e._t("udf-runtime-before-description",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},n=[],a=i(65973),l=i(15554);const o={name:"UdfRuntimes",components:{SearchableList:()=>a.Z.loadAsyncComponent(i.e(1276).then(i.bind(i,91276))),UdfRuntime:()=>a.Z.loadAsyncComponent(i.e(9816).then(i.bind(i,99816)))},mixins:[l.Z],props:{runtimes:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"UDF Runtimes"},collapsed:{type:Boolean,default:null},...l.Z.props},beforeCreate(){a.Z.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},r=o;var u=i(1001),d=(0,u.Z)(r,s,n,!1,null,null,null);const c=d.exports},40196:(e,t,i)=>{i.d(t,{Z:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[t("div",{ref:"container",staticClass:"modal-container",style:e.style},[t("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[t("h2",[e._v(e._s(e.title))]),t("span",{staticClass:"close",on:{click:e.close}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),t("main",{staticClass:"modal-content"},[e._t("default")],2),t("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},n=[],a=i(43334),l=i(79879);const o={name:"Modal",mixins:[a.Z],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...l.Z.mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...l.Z.mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},r=o;var u=i(1001),d=(0,u.Z)(r,s,n,!1,null,null,null);const c=d.exports},19566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var s=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{width:"60%",title:e.title},on:{closed:function(t){return e.$emit("closed")}}},[t("div",{staticClass:"vue-component server-info"},[t("Capabilities",{attrs:{capabilities:e.capabilities,url:e.url}}),t("h3",[e._v("File formats")]),t("FileFormats",{attrs:{formats:e.fileFormats,searchTerm:"",heading:null}}),t("h3",[e._v("Secondary web services")]),t("ServiceTypes",{attrs:{services:e.serviceTypes,searchTerm:"",heading:null}}),t("h3",[e._v("Runtimes for user-defined functions (UDF)")]),t("UdfRuntimes",{attrs:{runtimes:e.udfRuntimes,searchTerm:"",heading:null}})],1)])},n=[],a=i(40196),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component capabilities"},[t("h2",[e._v(e._s(e.title))]),t("section",{staticClass:"base-data"},[e.url2?t("div",{staticClass:"tabular"},[t("label",[e._v("URL:")]),t("span",{staticClass:"value"},[e._v(e._s(e.url2))])]):e._e(),e.capabilities.api_version?t("div",{staticClass:"tabular"},[t("label",[e._v("openEO-Version:")]),t("span",{staticClass:"value"},[e._v(e._s(e.capabilities.api_version))])]):e._e(),t("div",{staticClass:"tabular"},[t("label",[e._v("Production:")]),t("span",{staticClass:"value"},[e.capabilities.production?[e._v("✔️")]:[e._v("❌")]],2)])]),e.capabilities.description?t("Description",{attrs:{description:e.capabilities.description}}):e._e(),t("SupportedFeatures",{attrs:{endpoints:e.capabilities.endpoints,headingTag:"h3"}}),e.capabilities.billing?t("BillingPlans",{attrs:{billing:e.capabilities.billing,headingTag:"h3"}}):e._e(),e.federated?t("div",{staticClass:"federation"},[t("h3",[e._v("Federation")]),t("p",[e._v("This service is a federation of multiple services, which are all listed below:")]),t("ul",e._l(e.capabilities.federation,(function(i,s){return t("li",{key:s},[t("div",{staticClass:"fed-header"},[t("strong",{staticClass:"fed-title"},[e._v(e._s(i.title||s))]),t("ul",{staticClass:"badges small inline"},["offline"===i.status?t("li",{staticClass:"badge red",attrs:{title:e.offlineTitle(i)}},[e._v("offline")]):t("li",{staticClass:"badge green"},[e._v("online")])])]),t("small",[e._v("URL: "+e._s(i.url))]),i.description?t("Description",{attrs:{description0:i.description,compact:!0}}):e._e(),i.last_status_check?t("small",[e._v("Last check: "+e._s(e._f("timestamp")(i.last_status_check)))]):e._e()],1)})),0)]):e._e(),t("LinkList",{attrs:{links:e.capabilities.links,heading:"More information",headingTag:"h3"}})],1)},o=[],r=i(65973);const u={name:"Capabilities",props:{capabilities:{type:Object,default:()=>({})},url:{type:String}},components:{BillingPlans:()=>i.e(5668).then(i.bind(i,55668)),Description:()=>Promise.all([i.e(9856),i.e(8922)]).then(i.bind(i,79856)),LinkList:()=>i.e(8613).then(i.bind(i,38613)),SupportedFeatures:()=>i.e(7953).then(i.bind(i,87953))},computed:{title(){if("string"===typeof this.capabilities.title&&this.capabilities.title.length>0)return this.capabilities.title;try{var e=new URL(this.url);return e.hostname}catch(t){return""}},url2(){if("string"===typeof this.url)return this.url;if(Array.isArray(this.capabilities.links)){let e=this.capabilities.links.find((e=>"self"===e.rel));if(e)return e.href}return null},federated(){return r.Z.size(this.capabilities.federation)>0}},beforeCreate(){r.Z.enableHtmlProps(this)},filters:{timestamp(e){return r.Z.formatTimestamp(e)}},methods:{offlineTitle(e){return e.last_successful_check?`Last seen online: ${r.Z.formatTimestamp(e.last_successful_check)}`:null}}},d=u;var c=i(1001),p=(0,c.Z)(d,l,o,!1,null,null,null);const f=p.exports;var m=i(14278),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component service-types"},[t("SearchableList",{attrs:{data:e.services,summaryKey:"title",externalSearchTerm:e.searchTerm,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},{key:"summary",fn:function(t){return[e._t("summary",null,null,t)]}},{key:"details",fn:function(i){return[t("ServiceType",{attrs:{id:i.summary.identifier,service:i.item,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("service-type-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("service-type-end",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)},y=[],v=i(15554);const g={name:"ServiceTypes",components:{SearchableList:()=>r.Z.loadAsyncComponent(i.e(1276).then(i.bind(i,91276))),ServiceType:()=>r.Z.loadAsyncComponent(i.e(3168).then(i.bind(i,63168)))},mixins:[v.Z],props:{services:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Secondary Web Services"},collapsed:{type:Boolean,default:null},...v.Z.props},beforeCreate(){r.Z.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},_=g;var b=(0,c.Z)(_,h,y,!1,null,null,null);const C=b.exports;var k=i(83543),S=i(79879);const T={name:"ServerInfoModal",components:{Modal:a.Z,Capabilities:f,FileFormats:m.Z,ServiceTypes:C,UdfRuntimes:k.Z},computed:{...S.Z.mapState(["connection","serviceTypes","udfRuntimes"]),...S.Z.mapGetters(["fileFormats"]),capabilities(){return this.connection.capabilities().toJSON()},url(){return this.connection.getUrl()},title(){return this.connection.capabilities().title()||"Server information"}}},w=T;var Z=(0,c.Z)(w,s,n,!1,null,null,null);const x=Z.exports}}]);
//# sourceMappingURL=9566.0856153a.js.map