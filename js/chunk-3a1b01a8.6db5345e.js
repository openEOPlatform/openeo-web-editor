(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a1b01a8","chunk-63098fc4"],{"22af":function(e,s,t){"use strict";t("f368")},"2b37":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e._self._c;return s("article",{staticClass:"vue-component process"},[e.process.id?e._t("title",(function(){return[s("a",{staticClass:"anchor",attrs:{name:e.process.id}}),s("h2",[e._v(" "+e._s(e.process.id)+" "),e.displayableNamespace?s("span",{staticClass:"namespace"},[e._v(" — "+e._s(e.displayableNamespace))]):e._e()])]}),{vBind:e.$props,displayableNamespace:e.displayableNamespace}):e._e(),e.process.summary||e.process.deprecated||e.process.experimental?[s("summary",[e._v(" "+e._s(e.process.summary)+" "),e.process.deprecated||e.process.experimental?[e.process.summary?[e._v(" — ")]:e._e(),e.process.deprecated?s("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e(),e.process.experimental?s("strong",{staticClass:"experimental"},[e._v("experimental")]):e._e()]:e._e()],2)]:e._e(),e.provideDownload||e.hasElements(e.process.categories)?[s("div",{staticClass:"process-bar"},[e.hasElements(e.process.categories)?s("ul",{staticClass:"badges categories"},e._l(e.process.categories,(function(t){return s("li",{key:t,staticClass:"badge category",domProps:{textContent:e._s(e.formatCategory(t))}})})),0):e._e(),e.provideDownload?s("ul",{staticClass:"badges actions"},[s("li",{staticClass:"badge action download"},[s("a",{staticClass:"badge-fill",on:{click:e.download}},[e._v("Download JSON")])])]):e._e()])]:e._e(),e._t("before-description",null,{vBind:e.$props}),e.process.description?s("section",{staticClass:"description"},[s("h3",[e._v("Description")]),s("code",{staticClass:"signature",domProps:{innerHTML:e._s(e.signature)}}),s("Description",{attrs:{description:e.process.description,processUrl:e.processUrl}}),e.process.deprecated?s("DeprecationNotice",{attrs:{entity:"process"}}):e._e(),e.process.experimental?s("ExperimentalNotice",{attrs:{entity:"process"}}):e._e(),e.process["federation:backends"]?s("FederationNotice",{attrs:{backends:e.process["federation:backends"],federation:e.federation,entity:"process"}}):e._e()],1):e._e(),s("section",{staticClass:"parameters"},[s("h3",[e._v("Parameters")]),e._l(e.parameters,(function(t){return s("ProcessParameter",{key:t.name,attrs:{parameter:t,processUrl:e.processUrl,federation:e.federation}})})),0===e.parameters.length?s("p",[e._v("This process has no parameters.")]):e._e()],2),s("section",{staticClass:"returns"},[s("h3",[e._v("Return Value")]),e.returns.description||e.returns.schema?[e.returns.description?s("Description",{attrs:{description:e.returns.description,processUrl:e.processUrl}}):e._e(),e.returns.schema?s("div",{staticClass:"json-schema-container"},[s("JsonSchema",{attrs:{schema:e.returns.schema}})],1):e._e()]:s("p",[e._v("The return value has not been defined.")])],2),e.hasElements(e.process.exceptions)?s("section",{staticClass:"exceptions"},[s("h3",[e._v("Errors/Exceptions")]),s("ul",e._l(e.process.exceptions,(function(t,r){return s("li",{key:r,staticClass:"exception"},[s("code",[e._v(e._s(r))]),t.http?s("span",{staticClass:"http-code"},[e._v(" — HTTP "+e._s(t.http))]):e._e(),t.code?s("span",{staticClass:"error-code"},[e._v(" — "+e._s(t.code))]):e._e(),t.description?s("Description",{attrs:{description:t.description,processUrl:e.processUrl,compact:!0}}):e._e(),t.message?s("div",{staticClass:"message"},[e._v("Message: "),s("em",[e._v(e._s(t.message))])]):e._e()],1)})),0)]):e._e(),e.hasElements(e.process.examples)?s("section",{staticClass:"examples"},[s("h3",[e._v("Examples")]),e._l(e.process.examples,(function(t,r){return s("ProcessExample",{key:r,attrs:{id:r,example:t,processId:e.id,processParameters:e.parameters,processUrl:e.processUrl}})})),s("LinkList",{attrs:{links:e.exampleLinks,heading:"Processes",headingTag:"h4"}})],2):e._e(),s("section",{staticClass:"links"},[s("LinkList",{attrs:{links:e.process.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","example"]}})],1),e.showGraph&&e.process.process_graph?s("section",{staticClass:"process-graph"},[s("h3",[e._v("Processing Instructions")]),s("div",{staticClass:"graph"},[e._t("process-graph",(function(){return[s("ModelBuilder",{attrs:{id:e.id,value:e.process,explicitZoom:!0}})]}),{vBind:e.$props})],2)]):e._e(),e._t("end",null,{vBind:e.$props})],2)},a=[],n=function(){var e=this,s=e._self._c;return s("div",{staticClass:"vue-component process-example"},[s("h4",[e._v(e._s(e.title))]),s("div",{staticClass:"content"},[e.example.description?s("Description",{attrs:{description:e.example.description,processUrl:e.processUrl,compact:!0}}):e._e(),e.example.arguments?s("div",{staticClass:"arguments"},[s("code",{domProps:{innerHTML:e._s(e.renderedArguments)}})]):e._e()],1)])},i=[],c=t("60a2"),o={name:"ProcessExample",props:{id:Number,example:Object,processId:String,processParameters:Array,processUrl:String},components:{Description:()=>t.e("chunk-7c1dfb0d").then(t.bind(null,"8088"))},computed:{identifier(){return"#"+(this.id+1)},title(){return this.example.title?this.example.title+" ("+this.identifier+")":"Example "+this.identifier},renderedArguments(){var e=[];for(var s in this.processParameters){var t=this.processParameters[s];if("undefined"!==typeof this.example.arguments[t.name]){var r=this.example.arguments[t.name];let s;s=c["a"].isObject(r)&&r.from_parameter?'<em title="Variable">$'+c["a"].htmlentities(r.from_parameter)+"</em>":c["a"].isObject(r)&&r.from_node?'<em title="Result from other process">$'+c["a"].htmlentities(r.from_node)+"</em>":JSON.stringify(r),e.push('<span class="param-name">'+t.name+'</span> = <span class="argument">'+s+"</span>")}}var a="";return"undefined"!==typeof this.example.returns&&(a=' => <span class="return-value">'+JSON.stringify(this.example.returns)+"</span>"),'<span class="process-name">'+this.processId+"</span>("+e.join(", ")+")"+a}}},p=o,l=(t("22af"),t("2877")),d=Object(l["a"])(p,n,i,!1,null,null,null),m=d.exports,u=t("e71d"),h={name:"Process",components:{JsonSchema:()=>t.e("chunk-4846cba6").then(t.bind(null,"6e45")),DeprecationNotice:()=>t.e("chunk-4548ecac").then(t.bind(null,"5dc7")),Description:()=>t.e("chunk-7c1dfb0d").then(t.bind(null,"8088")),ExperimentalNotice:()=>t.e("chunk-cf82a0e4").then(t.bind(null,"b581")),ModelBuilder:()=>t.e("chunk-a5c3b7a6").then(t.bind(null,"1d9a")),ProcessExample:m,ProcessParameter:()=>t.e("chunk-fe508da2").then(t.bind(null,"81dd")),LinkList:()=>t.e("chunk-543cbf67").then(t.bind(null,"4845"))},mixins:[u["a"]],props:{process:{type:Object,default:()=>({})},namespace:{type:String,default:null},provideDownload:{type:Boolean,default:!0},processUrl:String,showGraph:{type:Boolean,default:!1},...u["a"].props},computed:{displayableNamespace(){let e=this.process.namespace||this.namespace;return"backend"===e?"":"user"===e?"user-defined":e},id(){return this.process.id||"unnamed"},parameters(){return Array.isArray(this.process.parameters)?this.process.parameters:[]},returns(){return c["a"].isObject(this.process.returns)?this.process.returns:{}},signature(e=!0){return c["a"].formatProcessSignature(this,e)},exampleLinks(){return Array.isArray(this.process.links)?this.process.links.filter(e=>"example"===e.rel):[]}},beforeCreate(){c["a"].enableHtmlProps(this)},methods:{hasElements(e){return"object"===typeof e&&null!==e&&Object.keys(e).length>0},formatCategory(e){return e.replace("_"," ")},download(){let e="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.process,null,2)),s=document.createElement("a");s.setAttribute("href",e),s.setAttribute("download",this.id+".json"),document.body.appendChild(s),s.click(),s.remove()}}},_=h,f=(t("fcdf"),Object(l["a"])(_,r,a,!1,null,null,null));s["default"]=f.exports},e71d:function(e,s,t){"use strict";s["a"]={components:{FederationNotice:()=>t.e("chunk-38fe18ab").then(t.bind(null,"7482")),FederationMissingNotice:()=>t.e("chunk-4a47046a").then(t.bind(null,"c8b2"))},props:{federation:{type:Object,default:()=>({})}}}},e87e:function(e,s,t){},f368:function(e,s,t){},fcdf:function(e,s,t){"use strict";t("e87e")}}]);
//# sourceMappingURL=chunk-3a1b01a8.6db5345e.js.map