"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3136],{13883:(e,t,r)=>{r.d(t,{Z:()=>i});r(57658);var a=r(28954),s=r(79879);class n extends a.BaseProcess{constructor(e,t){super(e),this.exporter=t}async execute(e){await this.exporter.generateFunction(e)}}class i extends a.ProcessGraph{constructor(e,t,r){super(s.Z.isObject(e)?e:{},t),this.connection=r,this.code=[],this.fnCounter=1,this.allowEmpty(),this.fillUndefinedParameters()}createProcessGraphInstance(e){let t=new i(e,this.processRegistry,this.getJsonSchemaValidator());return this.copyProcessGraphInstanceProperties(t)}copyProcessGraphInstanceProperties(e){return e=super.copyProcessGraphInstanceProperties(e),e.connection=this.connection,e}createProcessInstance(e){return new n(e,this)}isKeyword(e){return this.getKeywords().includes(e.toLowerCase())}getKeywords(){return[]}comment(){}generateImports(){}generateConnection(){}generateAuthentication(){}generateBuilder(){}generateMetadata(){}generateMissingParameter(){}async generateFunction(){}generateFunctionParams(e){return e.map((e=>"undefined"!==typeof e.default?`${e.name} = ${this.e(e.default)}`:e.name))}async generateCallback(){}generateResult(){}makeNull(){return"null"}makeBoolean(e){return e?"true":"false"}makeArray(e){return`[${e.join(", ")}]`}makeObject(e){let t=s.Z.mapObject(e,((e,t)=>`${this.makeString(t)}: ${e}`));return`{${t.join(", ")}}`}makeString(e){return JSON.stringify(e)}makeNumber(e){return e}e(e){return null===e?this.makeNull():"boolean"===typeof e?this.makeBoolean(e):"number"===typeof e?this.makeNumber(e):"string"===typeof e?this.makeString(e):Array.isArray(e)?this.makeArray(e.map((e=>this.e(e)))):s.Z.isObject(e)?this.makeObject(s.Z.mapObjectValues(e,(e=>this.e(e)))):"function"===typeof e?e():this.makeNull()}generateMetadata(){let e=!1;for(let t in this.process){if("process_graph"===t)continue;let r=this.process[t];Array.isArray(r)&&0===r.length||("string"===typeof r&&0===r.length||("boolean"!==typeof r||r)&&(e||(this.newLine(),this.comment("Set the metadata for the process"),e=!0),this.generateMetadataEntry(t,r)))}}async resolveArguments(e,t,r){let a=Array.isArray(e)?[]:{};for(let n in e){let o=e[n];if(!r||!r(n,o))if(s.Z.isObject(o)){if(o.from_node){a[n]=()=>this.var(o.from_node,this.varPrefix());continue}if(o.from_parameter){a[n]=()=>this.var(o.from_parameter);continue}if(o instanceof i){let e=await t(n);a[n]=()=>e;continue}a[n]=await this.resolveArguments(o,t,r)}else Array.isArray(o)?a[n]=await this.resolveArguments(o,t,r):a[n]=o}return a}async resolveCallback(e,t){let r;if("load_collection"===e.process_id){let a=e.getArgument("properties");r=a[t]}else r=e.getArgument(t);let a=r.getCallbackParameters();await r.execute(a);let s=this.var(`${t}${this.fnCounter++}`,"fn_"),n=await this.generateCallback(r,a,s);return n||s}async generateArguments(e,t=!1,r=null){let a=await this.resolveArguments(e.arguments,(async t=>await this.resolveCallback(e,t)),r);return t&&(a=this.orderArguments(e,a)),a}orderArguments(e,t){let r=e.getProcessGraph().getProcess(e);if(r&&Array.isArray(r.parameters)){let e=r.parameters.map((e=>"undefined"!==typeof t[e.name]?t[e.name]:e.optional?void 0:null)),a=!1;for(let t=e.length-1;t>=0;t--)"undefined"===typeof e[t]?a?e[t]=null:e.pop():a=!0;return e}}varPrefix(){return this.getParent()?"data":"datacube"}var(e,t="var"){return e=String(e),this.isKeyword(e)?`${e}_`:e.match(/^[a-z_]\w*$/)?e:t+e.replace(/[^\w]+/g,"_")}getTab(){return"\t"}addCode(e,t="",r=0){if("string"!==typeof e)return;let a=this.getTab().repeat(r),s=e.trim().split(/\r\n|\r|\n/g);for(let n of s)this.code.push(`${a}${t}${n}\n`)}newLine(e=1){for(let t=0;t<e;t++)this.addCode("")}getServerUrl(){return this.connection.getUrl()}async toCode(e=!1){this.code=[],e||(this.comment("Import required packages"),this.generateImports(),this.newLine(),this.comment("Connect to the back-end"),this.generateConnection(),this.generateAuthentication(),this.newLine(),this.generateBuilder(),this.generateMetadata(),this.newLine());let t=this.getProcessParameters();if(t.length>0){this.comment("ToDo: Here you need to set values for the parameters");for(let e of t)this.generateMissingParameter(e);this.newLine()}return await this.execute(),e||(this.newLine(),this.comment("The process can be executed synchronously (see below), as batch job or as web service now")),this.generateResult(this.getResultNode(),e),this.code.join("").trim()}async execute(){return await this.validate(),this.reset(),await this.executeNodes(this.getStartNodes()),this.getResultNode()}isMath(){return"undefined"===typeof this._isMath&&(this._isMath=this.processRegistry.isMath(this)),this._isMath}}},66541:(e,t,r)=>{r.d(t,{Z:()=>o});r(57658);var a=r(79879),s=r(13883),n=r(6139);const i=["abstract","arguments","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield","builder","connection","formula","openeo","result"];class o extends s.Z{constructor(e,t,r,a=!1){super(e,t,r),this.generateFormula=a}createProcessGraphInstance(e){let t=new o(e,this.processRegistry,this.getJsonSchemaValidator(),this.generateFormula);return this.copyProcessGraphInstanceProperties(t)}parse(){this.parsed||super.parse()}getKeywords(){return i}comment(e){this.addCode(e,"// ")}generateImports(){this.addCode("import { OpenEO, Formula } from '@openeo/js-client';")}generateConnection(){this.addCode(`let connection = await OpenEO.connect('${this.getServerUrl()}');`)}generateAuthentication(){this.comment("ToDo: Here you need to add your authentication steps")}generateBuilder(){this.addCode("let builder = await connection.buildProcess();")}generateMetadataEntry(e,t){this.addCode(`builder.${e} = ${this.e(t)};`)}async generateFunction(e){let t=e.getParent()?"this":"builder",r=this.var(e.id,this.varPrefix()),s=await this.generateArguments(e,!e.namespace);if(this.comment(e.description),a.Z.isObject(s)){let a=e.namespace?`${e.process_id}@${e.namespace}`:e.process_id;this.addCode(`let ${r} = ${t}.process("${a}", ${this.e(s)});`)}else this.addCode(`let ${r} = ${t}.${e.process_id}(${s.map((e=>this.e(e))).join(", ")});`)}generateMissingParameter(e){this.comment(e.description);let t=this.var(e.name,"param"),r="undefined"!==typeof e.default?e.default:null;this.addCode(`let ${t} = ${this.e(r)};`)}async generateCallback(e,t,r){if(this.generateFormula&&e&&e.isMath()){let t=e.toFormulaString(),r=JSON.stringify(t);return`new Formula(${r})`}{let a=this.generateFunctionParams(t);this.newLine(),this.addCode(`let ${r} = function(${a.join(", ")}) {`),this.addCode(await e.toCode(!0),"",1),this.addCode("}")}}generateResult(e,t){if(!e)return;let r=this.var(e.id,this.varPrefix());t?this.addCode(`return ${r};`):this.addCode(`let result = await connection.computeResult(${r});`)}toFormulaString(){return this.isMath()?this.nodeToFormula(this.getResultNode()):""}getArrayElementPlaceholder(e){if("array_element"===e.process_id&&"parameter"===e.getArgumentType("data")){let t=e.getRawArgument("data").from_parameter,r=this.getCallbackParameters().findIndex((e=>e.name===t));if(r>=0)return"$".repeat(r+1)+(e.getArgument("label")||e.getArgument("index"))}return null}nodeToFormula(e,t=null){if("array_element"===e.process_id){let t=this.getArrayElementPlaceholder(e);if(t)return t}let r=n.Formula.reverseOperatorMapping[e.process_id],s=this.processRegistry.get(e.process_id),i="undefined"!==typeof n.Formula.arrayOperatorMapping[e.process_id],o=t=>{if(a.Z.isObject(t))if(t.from_node){let a=e.getProcessGraph().getNode(t.from_node);t=a?this.nodeToFormula(a,r):"#"+t.from_node}else{if(!t.from_parameter)throw new Error("Objects not allowed");t=t.from_parameter}return t},c=[],l=Array.isArray(s.parameters)?s.parameters:[];for(let a of l){let t=o(e.getRawArgument(a.name));if(i&&Array.isArray(t)&&"data"===a.name){c=t.map((e=>o(e)));break}if("undefined"!==typeof t)c.push(t);else{if("undefined"===typeof a.default)throw new Error('Argument for parameter "'+a.name+'" missing');c.push(a.default)}}if(i&&(c=c.filter((e=>null!==e))),r){let e=["/","*"],a=["-","+"],s=c.map((e=>e<0?"("+e+")":e)).join(r);return!t||a.includes(t)&&a.includes(r)||"^"===r||a.includes(t)&&e.includes(r)?s:"("+s+")"}return e.process_id+"("+c.join(", ")+")"}}},23416:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(62851);class s extends a.D3{constructor(e,t=[",",";"]){super(e,"TableViewer","fa-table"),this.delim=t}async parseData(e){if("string"===typeof e){let t=this.parseCSV(e.trim());return t.map((e=>e.map((e=>(e=e.trim(),0===e.length?NaN:isNaN(e)?e:parseFloat(e))))))}return e}parseCSV(e){for(var t=[],r=!1,a=0,s=0,n=0;n<e.length;n++){var i=e[n],o=e[n+1];t[a]=t[a]||[],t[a][s]=t[a][s]||"",'"'==i&&r&&'"'==o?(t[a][s]+=i,++n):'"'!=i?!this.delim.includes(i)||r?"\r"!=i||"\n"!=o||r?("\n"!=i||r)&&("\r"!=i||r)?t[a][s]+=i:(++a,s=0):(++a,s=0,++n):++s:r=!r}return t}}const n=s},62851:(e,t,r)=>{r.d(t,{D3:()=>n,ED:()=>s,Tw:()=>i});var a=r(79879);class s{constructor(e){Object.assign(this,e),this.context=null}setContext(e){this.context=e}getContext(){return this.context}getUrl(){return this.href}canGroup(){return!1}isBinary(){return!0}download(e=null){let t=document.createElement("a");t.style.display="none",t.href=this.getUrl(),t.setAttribute("download",e||a.Z.makeFileName("result",this.type)),"undefined"===typeof t.download&&t.setAttribute("target","_blank"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}async loadData(e){this.loaded||(this.data=await this.fetchData(e),this.loaded=!0)}getData(){if(!this.loaded)throw new Error("Data must be loaded before");return this.data}async fetchData(e){let t,r=this.getUrl();if(r.startsWith("blob:")){let e=await fetch(r);t=await e.blob()}else t=await e.download(r,!1);let a=new Promise(((e,r)=>{let a=new FileReader;a.onload=t=>e(t.target.result),a.onerror=r,this.isBinary()?a.readAsBinaryString(t):a.readAsText(t)})),s=await a;return await this.parseData(s)}async parseData(e){return e}}class n extends s{constructor(e,t=null,r="fa-database",a={},s={}){super(e),this.loaded=!1,this.component=t,this.props=a,this.props.data||(this.props.data=this),this.icon=r,this.events=s}isBinary(){return!1}}class i extends s{constructor(e){super(e)}}},1950:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(37811),s=r(62851);class n extends s.D3{constructor(e){super(e,"ImageViewer","fa-image")}isBinary(){return!0}async fetchData(){return new Promise(((e,t)=>{let r=new Image;r.crossOrigin="anonymous",r.onerror=()=>t(new Error("Failed to load the image")),r.onload=()=>e(r),r.fetchPriotity="high",r.decoding="sync",r.src=this.getUrl()}))}}const i=n;var o=r(23416),c=r(87128),l=r(23806);class h extends s.D3{constructor(e){super(e,"DataViewer")}}const d=h;class u extends o.Z{constructor(e){super(e,["\t"])}}const p=u;var m=r(25108);class g{constructor(){}createFilesFromSTAC(e,t=null){let r=Object.values(e.assets).filter((e=>!Array.isArray(e.roles)||!e.roles.includes("metadata"))).map((t=>this.createFileFromAsset(t,e)));return t&&r.forEach((e=>e.setContext(t))),r}createFilesFromBlob(e){if(!(e instanceof Blob))throw new Error("Given data is not a valid Blob");return this.createFilesFromSTAC({stac_version:"1.0.0",type:"Feature",geometry:null,properties:{},links:[],assets:{result:{href:URL.createObjectURL(e),blob:e,type:e.type}}})}createFileFromAsset(e,t){try{if("string"===typeof e.type){let r=a.parse(e.type.toLowerCase());switch(r.type){case"image/png":case"image/jpg":case"image/jpeg":case"image/gif":case"image/webp":return new i(e);case"application/json":case"text/json":case"application/geo+json":return new l.Z(e);case"text/plain":return new d(e);case"text/csv":return new o.Z(e);case"text/tab-separated-values":return new p(e);case"image/tiff":return new c.Z(e,t)}}if("string"===typeof e.href){let r=e.href.split(/[#?]/)[0].split(".").pop().trim().toLowerCase();switch(r){case"png":case"jpg":case"jpeg":case"gif":case"webp":return new i(e);case"json":case"geojson":return new l.Z(e);case"txt":return new d(e);case"csv":return new o.Z(e);case"tsv":return new p(e);case"tif":case"tiff":return new c.Z(e,t)}}}catch(r){m.log(r)}return new s.Tw(e)}}},87128:(e,t,r)=>{r.d(t,{Z:()=>f});r(57658);var a=r(62851),s=r(79879),n=r(56933),i=r(38193),o=r(82499),c=r(63432),l=r(29619),h=r(58375),d=r(25108);const u="STATISTICS_MINIMUM",p="STATISTICS_MAXIMUM",m="DESCRIPTION";class g extends a.D3{constructor(e,t){super(e,"MapViewer","fa-map",{removableLayers:!0}),this.bands=[],this.nodata=[],this.img=null,this.projection=null,this.extent=null,this.convertToRGB=!1,this.stac=t}isBinary(){return!0}canGroup(){return!0}async loadData(e){return this.loaded||(await this.parseMetadata(),this.loaded=!0),this}getData(){return this}async parseMetadata(){let e,t,r=this.stac&&(this.stac.geometry||this.stac.extent);this.projection=await n.Z.addFromStac(this.stac),Array.isArray(this["file:nodata"])&&this["file:nodata"].length>0&&(this.nodata=s.Z.parseNodata(this["file:nodata"])),Array.isArray(this["eo:bands"])&&this["eo:bands"].length>0&&this["eo:bands"].forEach(((e,t)=>this.setBandInfo(t,{name:e.name}))),Array.isArray(this["raster:bands"])&&this["raster:bands"].length>0&&this["raster:bands"].forEach(((e,t)=>{e.name&&this.setBandInfo(t,{name:e.name}),s.Z.isObject(e.statistics)&&this.setBandInfo(t,{min:e.statistics.minimum,max:e.statistics.maximum}),0===this.nodata.length&&"undefined"!==typeof e.nodata&&this.nodata.push(s.Z.parseNodata(e.nodata))})),e=this.getBlob()?await(0,i.mK)(this.getBlob()):await(0,i.W0)(this.getUrl()),this.img=await e.getImage();for(let n=0;n<this.img.getSamplesPerPixel();n++){let e={};try{let t=this.img.getArrayForSample(n);Number.isFinite(this.bands[n].min)||(e.min=this.getMinForDataType(t)),Number.isFinite(this.bands[n].max)||(e.max=this.getMaxForDataType(t))}catch(a){}let t=this.img.getGDALMetadata(n);s.Z.isObject(t)&&(u in t&&(e.min=parseFloat(t[u])),p in t&&(e.max=parseFloat(t[p])),m in t&&(e.name=t[m])),this.setBandInfo(n,e);let r=this.img.getGDALNoData();0===this.nodata.length&&null!==r&&this.nodata.push(r)}if(!this.projection&&this.img.geoKeys){let{ProjectedCSTypeGeoKey:e,GeographicTypeGeoKey:r,ProjLinearUnitsGeoKey:a,GeogAngularUnitsGeoKey:s}=this.img.geoKeys;if(e&&(t="EPSG:"+e,this.projection=await n.Z.get(t)),!this.projection&&r&&(t="EPSG:"+r,this.projection=await n.Z.get(t)),!this.projection&&t){const e=a&&(0,h.Ne)(a)||s&&(0,h.Ne)(s);e&&(this.projection=new l.Z({code:t,units:e}))}}if(!r)try{let e=this.img.getBoundingBox();this.extent=(0,c.Fj)(e,this.projection)}catch(a){d.warn(a)}if(this.img.fileDirectory.ColorMap){const e=Array.from(this.img.fileDirectory.ColorMap),t=e.length/3,r=e.length/3*2;this.colorMap=[];for(let a=0;a<t;a++)this.colorMap.push([Math.trunc(e[a]/65536*256),Math.trunc(e[a+t]/65536*256),Math.trunc(e[a+r]/65536*256),this.nodata.includes(a)?0:1])}switch(this.img.fileDirectory.PhotometricInterpretation){case o.Ie.CMYK:case o.Ie.YCbCr:case o.Ie.CIELab:this.convertToRGB=!0;break;default:this.convertToRGB=!1}}setBandInfo(e,t){this.bands[e]?Object.assign(this.bands[e],t):this.bands.push(Object.assign({id:e+1},t))}getBlob(){return this.blob}getNoData(){return this.nodata}getContext(){return this.stac}getBands(){return this.bands}getProjection(){return this.projection}getExtent(){return this.extent}getColorMap(){return this.colorMap}getMinForDataType(e){return e instanceof Int8Array?-128:e instanceof Int16Array?-32768:e instanceof Int32Array?-2147483648:e instanceof Float32Array?12e-39:0}getMaxForDataType(e){return e instanceof Int8Array?127:e instanceof Uint8Array||e instanceof Uint8ClampedArray?255:e instanceof Int16Array?32767:e instanceof Uint16Array?65535:e instanceof Int32Array?2147483647:e instanceof Uint32Array?4294967295:e instanceof Float32Array?34e37:255}}const f=g},23806:(e,t,r)=>{r.d(t,{Z:()=>o});r(81486);var a=r(79879),s=r(62851),n=r(25108);class i extends s.D3{constructor(e,t="DataViewer"){super(e,t),this.isGeoJson=!1}async parseData(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){n.log(t)}return a.Z.detectGeoJson(e)?(this.isGeoJson=!0,this.component="MapViewer",this.icon="fa-map"):this.isTable(e)&&(this.component="TableViewer",this.icon="fa-table"),e}isTable(e){if(!e||"object"!==typeof e||0===a.Z.size(e))return!1;let t=Object.values(e),r=Object.keys(t[0]);return!t.some((e=>!e||"object"!==typeof e||!a.Z.equals(Object.keys(e),r)))}}const o=i}}]);
//# sourceMappingURL=3136.e3e42509.js.map