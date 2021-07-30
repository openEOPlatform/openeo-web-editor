(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17004fc3"],{"1f22":function(e,t){var s={features:{"Basic functionality":{"get /collections":"Data discovery","get /collections/{collection_id}":"Data discovery details","get /processes":"Process discovery","get /file_formats":"File format discovery","get /credentials/oidc":"OpenID Connect authentication","get /me":"User profiles"},"Synchronous processing":{"post /result":"Synchronous processing"},"Batch processing":{"get /jobs":"Overview","post /jobs":"Creating","get /jobs/{job_id}":"Status","delete /jobs/{job_id}":"Deleting","get /jobs/{job_id}/logs":"Logs","get /jobs/{job_id}/results":"Downloading results","post /jobs/{job_id}/results":"Queuing"},"Estimate processing costs":{"get /jobs/{job_id}/estimate":"Estimate processing costs"},"Additional web services":{"get /service_types":"Discovery","get /services":"Overview","post /services":"Creating","get /services/{service_id}":"Status","delete /services/{service_id}":"Deleting","get /services/{service_id}/logs":"Logs"},"File storage":{"get /files":"Overview","get /files/{path}":"Downloading","put /files/{path}":"Uploading","delete /files/{path}":"Deleting"},"User-defined processes":{"get /process_graphs":"Overview","get /process_graphs/{process_graph_id}":"Status","put /process_graphs/{process_graph_id}":"Creating","delete /process_graphs/{process_graph_id}":"Deleting"},"User-defined functions (UDF)":{"get /udf_runtimes":"User-defined functions (UDF)"}}};e.exports=s},"33af":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-component features"},[e.heading?s(e.headingTag,{tag:"component"},[e._v(" "+e._s(e.heading)+" ("+e._s(e.supportedFeatureCount)+"/"+e._s(e.totalCount)+") ")]):e._e(),s("ul",e._l(e.supportedFeatures,(function(t,o){return s("li",{key:o},[s("span",{class:t.className,attrs:{title:t.tooltip},domProps:{textContent:e._s(t.icon)}}),e._v(" "+e._s(o)+" ")])})),0)],1)},i=[],r=s("1f22"),n=s.n(r),a=s("60a2"),p={name:"SupportedFeatures",props:{endpoints:{type:Array,default:()=>[]},heading:{type:String,default:"Supported Functionalities"},headingTag:{type:String,default:"h2"}},data(){return{supportedFeatures:{},supportedFeatureCount:0}},computed:{totalCount(){return a["a"].size(this.supportedFeatures)}},watch:{endpoints:{immediate:!0,handler(e){let t=[];for(let s of e)for(let e of s.methods){let o=e+" "+s.path;t.push(o.toLowerCase())}this.supportedFeatureCount=0,this.supportedFeatures={};for(let s in n.a.features){let e,o,i,r=n.a.features[s],a=Object.keys(r),p=a.filter(e=>!t.includes(e));switch(p.length){case 0:this.supportedFeatureCount++,e="✔️",o="supported",i="fully supported";break;case a.length:e="❌",o="unsupported",i="not supported";break;default:e="⚠️",o="partial",i="partially supported, missing: "+p.map(e=>r[e]).join(", ")}this.supportedFeatures[s]={icon:e,className:o,tooltip:i,missingEndpoints:p}}}}},beforeCreate(){a["a"].enableHtmlProps(this)}},u=p,c=(s("b258"),s("2877")),l=Object(c["a"])(u,o,i,!1,null,null,null);t["default"]=l.exports},b258:function(e,t,s){"use strict";s("b497")},b497:function(e,t,s){}}]);
//# sourceMappingURL=chunk-17004fc3.73c71c06.js.map