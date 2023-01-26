"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7660,7868],{47868:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-container"},[e.loaded?[t("MultiSelect",{key:e.type,ref:"htmlElement",attrs:{label:"label","track-by":"id",multiple:e.multiple,options:e.selectOptions,allowEmpty:!1,preselectFirst:e.preselect,disabled:!e.editable,deselectLabel:e.deselectLabel,taggable:e.taggable,tagPlaceholder:e.tagPlaceholder},on:{tag:e.addValue},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e.showDetails?t("button",{attrs:{type:"button",title:"Details"},on:{click:function(t){return e.$emit("onDetails")}}},[t("i",{staticClass:"fas fa-info"})]):e._e()]:t("div",{staticClass:"loading"},[t("i",{staticClass:"fas fa-spinner fa-spin"}),e._v(" Loading options...")])],2)},a=[],r=(s(57658),s(30541),s(47907)),l=s.n(r),n=s(79879);const o={name:"SelectBox",components:{MultiSelect:l()},props:{value:{},type:{type:String,default:""},editable:{type:Boolean,default:!0},options:{type:[Array,Object]},schema:{type:Object},context:{},optionFilter:{type:Function,default:null}},computed:{...n.Z.mapGetters(["collectionDefaults"]),selectOptions(){let e=[];switch(this.type){case"band-name":let t=this.$store.state.collections.find((e=>e.id==this.context));if(n.Z.isObject(t)){try{e=t.summaries["eo:bands"].map((e=>e.name))}catch(a){}if(0===e.length&&n.Z.isObject(t["cube:dimensions"]))try{let s=Object.values(t["cube:dimensions"]).find((e=>"bands"===e.type));s&&Array.isArray(s.values)&&(e=s.values)}catch(a){}}break;case"collection-id":e=this.$store.state.collections;break;case"job-id":e=this.$store.state.jobs.jobs;break;case"file-path":case"file-paths":e=this.$store.state.files.files;break;case"epsg-code":e=this.$store.state.editor.epsgCodes;break;case"input-format":e=this.$store.state.fileFormats.getInputTypes();break;case"openeo-datatype":let i=s(9510),r={};for(let e of i.NATIVE_TYPES)r[e]={type:e};e=Object.assign(r,i.API_TYPES);break;case"output-format":e=this.$store.state.fileFormats.getOutputTypes();break;case"service-type":e=this.$store.state.serviceTypes;break;case"billing-plan":e=this.$store.state.connection.capabilities().listPlans();break;case"udf-runtime":e=Object.keys(this.$store.state.udfRuntimes);break;case"udf-runtime-version":e=this.context in this.$store.state.udfRuntimes?Object.keys(this.$store.state.udfRuntimes[this.context].versions):[];break}"function"===typeof this.optionFilter&&e&&"object"===typeof e&&(e=n.Z.isObject(e)?Object.fromEntries(Object.entries(e).filter((([e,t])=>this.optionFilter(t,e)))):e.filter(((e,t)=>this.optionFilter(e,t))));let t=[];switch(this.type){case"collection-id":return e.map((e=>this.e(e.id))).sort(this.sortByLabel);case"job-id":return e.map((e=>({id:e.id,label:n.Z.getResourceTitle(e)}))).sort(this.sortByLabel);case"openeo-datatype":for(let i in e){let s=e[i];t.push({id:i,label:s.title||n.Z.prettifyString(i),value:s})}return t;case"file-path":case"file-paths":return e.map((e=>this.e(e.path))).sort(((e,t)=>n.Z.sortByPath(e.id,t.id)));case"epsg-code":for(let i in e)t.push({id:Number.parseInt(i,10),label:i+": "+e[i]});return t;case"input-format":case"output-format":case"service-type":for(let i in e){let s=i.toUpperCase(),a=e[i].title;a?s!==a.toUpperCase()&&(a=`${a} - ${s}`):a=s,t.push({id:s,label:a})}return t.sort(this.sortByLabel);case"billing-plan":return e.map((e=>({id:e.name,label:e.name+(e.paid?" (paid)":" (free)")})));case"year":let s=(new Date).getFullYear(),a=Array.from({length:100},((e,t)=>this.e(String(s-t))));if("string"===typeof this.value&&this.value.length>0&&-1===a.findIndex((e=>e.id===this.value))){var i=this.e(this.value);this.value>s?a.unshift(i):a.push(this.e(this.value))}return a;case"band-name":case"udf-runtime":case"udf-runtime-version":return e.map((e=>this.e(e)));default:return n.Z.isObject(this.schema)&&this.schema.isEnum()?this.schema.getEnumChoices().map((e=>this.e(e))):Array.isArray(this.options)?this.options.map((e=>n.Z.isObject(e)?e:this.e(e))):[]}},showDetails(){return"collection-id"===this.type},deselectLabel(){return this.multiple?"Press enter to remove":""},tagPlaceholder(){return"year"===this.type?"Press enter to select":"Press enter to create a tag"},multiple(){return"file-paths"===this.type},taggable(){return"year"===this.type},preselect(){return this.multiple?!Array.isArray(this.selected)||0===this.selected.length:null===this.selected}},data(){return{selected:null,loaded:!1}},created(){this.loadData()},watch:{type(){this.loadData()},selected(e){let t;if(null===e)t=null;else if(this.multiple)Array.isArray(e)||(e=[e]),t=e.map((e=>e.id));else switch(this.type){case"epsg-code":var s=Number.parseInt(e.id);t=Number.isNaN(s)?null:s;break;case"openeo-datatype":t=e.value;break;case"year":t=String(e.id);break;default:t=e.id}this.$emit("input",t)},context(){switch(this.type){case"udf-runtime":case"udf-runtime-version":this.selected=null,this.preselectFirst();break;case"band-name":this.selected=null,this.loadData();break}}},methods:{...n.Z.mapActions(["describeCollection"]),...n.Z.mapActions("editor",["loadEpsgCodes"]),e(e){return{id:e,label:e}},async loadData(){this.loaded=!1,"epsg-code"===this.type?await this.loadEpsgCodes():"band-name"===this.type&&await this.describeCollection(this.context),this.initSelection(),this.loaded=!0},async preselectFirst(){await this.$nextTick();let e=this.$refs.htmlElement;e.preselectFirst&&Array.isArray(e.filteredOptions)&&e.filteredOptions.length&&e.select(e.filteredOptions[0])},initSelection(){let e=this.value;if(this.multiple&&Array.isArray(e))this.selected=this.selectOptions.filter((t=>e.includes(t.id)));else{switch(this.type){case"input-format":case"output-format":case"service-type":"string"===typeof e&&(e=e.toUpperCase());break}let t=this.selectOptions.find((t=>t.id===e));void 0!==t&&(this.selected=t)}},sortByLabel(e,t){return n.Z.compareStringCaseInsensitive(e.label,t.label)},addValue(e){this.selected=this.e(e)}}},c=o;var p=s(1001),u=(0,p.Z)(c,i,a,!1,null,null,null);const d=u.exports},37660:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-time"},[t("p",[e._v(e._s(e.text))]),t("SelectBox",{attrs:{options:e.options,value:e.value},on:{input:t=>e.$emit("input",t)}})],1)},a=[],r=(s(30541),s(47868)),l=s(79879);const n={name:"ChooseReducer",components:{SelectBox:r["default"]},props:{text:{type:String,default:"Please select a method for aggregation:"},allowEmpty:{type:Boolean,default:!1},value:{type:String,default:"mean"}},computed:{...l.Z.mapGetters(["processes"]),options(){let e=this.processes.all().filter((e=>{if(Array.isArray(e.categories)&&e.categories.includes("reducer")&&Array.isArray(e.parameters)&&"array_element"!==e.id){let t=e.parameters.filter((e=>!0!==e.optional));return 1===t.length&&"data"===t[0].name}return!1})).map((e=>({id:e.id,label:`${e.id} - ${e.summary}`})));return e.unshift({id:"",label:"No composite"}),e}}},o=n;var c=s(1001),p=(0,c.Z)(o,i,a,!1,null,null,null);const u=p.exports},9510:(e,t,s)=>{s.r(t),s.d(t,{API_TYPES:()=>a,NATIVE_TYPES:()=>r});var i=s(79879);const a=i.Z.resolveJsonRefs(s(66027)).definitions,r=["string","integer","number","boolean","array","object"]},85117:(e,t,s)=>{var i=s(66330),a=TypeError;e.exports=function(e,t){if(!delete e[t])throw a("Cannot delete property "+i(t)+" of "+i(e))}},30541:(e,t,s)=>{var i=s(82109),a=s(47908),r=s(26244),l=s(83658),n=s(85117),o=s(7207),c=1!==[].unshift(0),p=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},u=c||!p();i({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(e){var t=a(this),s=r(t),i=arguments.length;if(i){o(s+i);var c=s;while(c--){var p=c+i;c in t?t[p]=t[c]:n(t,p)}for(var u=0;u<i;u++)t[u]=arguments[u]}return l(t,s+i)}})}}]);
//# sourceMappingURL=7660.87903297.js.map