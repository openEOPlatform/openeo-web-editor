"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[8221],{82634:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var a=function(){var e=this,t=e._self._c;return t("Modal",{attrs:{width:"80%",title:"Export as Source Code"},on:{closed:function(t){return e.$emit("closed")}}},[t("section",{staticClass:"exportCode"},[t("h3",[e._v("Choose Programming Language")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],attrs:{type:"radio",id:"js",value:"JavaScript"},domProps:{checked:e._q(e.language,"JavaScript")},on:{change:function(t){e.language="JavaScript"}}}),t("label",{attrs:{for:"js"}},[e._v("JavaScript")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],attrs:{type:"radio",id:"py",value:"Python"},domProps:{checked:e._q(e.language,"Python")},on:{change:function(t){e.language="Python"}}}),t("label",{attrs:{for:"py"}},[e._v("Python")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],attrs:{type:"radio",id:"r",value:"R"},domProps:{checked:e._q(e.language,"R")},on:{change:function(t){e.language="R"}}}),t("label",{attrs:{for:"r"}},[e._v("R")]),t("h3",[e._v("Generated Code")]),e.error?t("div",{staticClass:"message error"},[t("i",{staticClass:"fas fa-exclamation-circle"}),t("span",[e._v(" Sorry, the code generation failed due to the following reason:"),t("br"),t("em",[e._v(e._s(e.error))])])]):[t("div",{staticClass:"message warning"},[t("i",{staticClass:"fas fa-bullhorn"}),t("span",[e._v("Please note that this feature is "),t("strong",[e._v("experimental")]),e._v(" and there are chances that the generated code won't work. Also, the code generated is not always following best practices nor will the implementation use the most efficient way of implementing processes, which is the nature of automatic code generation.")])]),t("TextEditor",{ref:"editor",attrs:{id:e.language,title:e.language,value:e.code,language:e.language,editable:!1},scopedSlots:e._u([{key:"file-toolbar",fn:function(){return[t("button",{attrs:{type:"button",title:"Download code"},on:{click:e.download}},[t("i",{staticClass:"fas fa-download"})])]},proxy:!0}])})]],2)])},n=[],s=r(73902),i=r(57497),o=r(94679),c=r(2566),l=r(47067),d=(r(98992),r(72577),r(16125));const h=["and","as","assert","break","class","continue","def","del","elif","else","except","exec","finally","for","from","global","if","import","in","is","lambda","not","or","pass","print","raise","return","try","while","with","yield","openeo","connection","process","builder"];class u extends d.A{createProcessGraphInstance(e){let t=new u(e,this.processRegistry,this.getJsonSchemaValidator());return this.copyProcessGraphInstanceProperties(t)}getKeywords(){return h}comment(e){this.addCode(e,"# ")}generateImports(){this.addCode("import openeo"),this.addCode("from openeo.processes import process")}generateConnection(){this.addCode(`connection = openeo.connect("${this.getServerUrl()}")`)}generateAuthentication(){this.comment("ToDo: Here you need to authenticate with authenticate_basic() or authenticate_oidc()")}generateBuilder(){}generateMetadataEntry(e,t){this.comment(`${e}: ${this.e(t)}`)}makeNull(){return"None"}makeBoolean(e){return e?"True":"False"}getTab(){return"    "}hasCallbackParameter(e){return Boolean(Object.values(e.arguments).find((e=>e instanceof u)))}async generateFunction(e){let t,r=this.var(e.id,this.varPrefix()),a=!0,n=null;if(e.getParent())t="process";else{let r=e.getProcessGraph().getStartNodeIds();if(r.includes(e.id))"load_collection"===e.process_id?(t="connection.load_collection",e.arguments=Object.assign({collection_id:e.arguments.id},c.A.omitFromObject(e.arguments,["id"])),a=!1):t="connection.datacube_from_process";else{let r=e.getPreviousNodes(),s=this.var(r[0].id,this.varPrefix());this.hasCallbackParameter(e)||"save_result"===e.process_id?(t=`${s}.${e.process_id}`,a=!1,n=(e,t)=>c.A.isObject(t)&&t.from_node&&this.var(t.from_node,this.varPrefix())===s):t=`${s}.process`}}let s=await this.generateArguments(e,!1,n);e.namespace&&(s.namespace=this.makeString(e.namespace)),s=c.A.mapObject(s,((e,t)=>`${t} = ${this.e(e)}`)),a&&s.unshift(this.makeString(e.process_id)),this.comment(e.description),this.addCode(`${r} = ${t}(${s.join(", ")})`)}generateMissingParameter(e){this.comment(e.description);let t=this.var(e.name,"param"),r="undefined"!==typeof e.default?e.default:null;this.addCode(`${t} = ${this.e(r)}`)}async generateCallback(e,t,r){let a=this.generateFunctionParams(t);0===a.length&&a.push("builder"),this.newLine(),this.addCode(`def ${r}(${a.join(", ")}):`),this.addCode(await e.toCode(!0),"",1),this.newLine()}generateResult(e,t){if(!e)return;let r=this.var(e.id,this.varPrefix());t?this.addCode(`return ${r}`):this.addCode(`result = connection.execute(${r})`)}}const p=["if","else","repeat","while","function","for","in","next","break","true","false","null","inf","nan","na","na_integer_","na_real_","na_complex_","na_character_","openeo","connect","connection","datacube","p","compute_result"];class m extends d.A{createProcessGraphInstance(e){let t=new m(e,this.processRegistry,this.getJsonSchemaValidator());return this.copyProcessGraphInstanceProperties(t)}getKeywords(){return p}makeNull(){return"NULL"}makeBoolean(e){return e?"TRUE":"FALSE"}makeArray(e){return`list(${e.join(", ")})`}makeObject(e){let t=c.A.mapObject(e,((e,t)=>`${this.makeString(t)} = ${e}`));return`list(${t.join(", ")})`}comment(e){this.addCode(e,"# ")}generateImports(){this.addCode("library(openeo)")}generateConnection(){this.addCode(`connection = connect(host = "${this.getServerUrl()}")`)}generateAuthentication(){this.comment("ToDo: Authentication with login()")}generateBuilder(){this.addCode("p = processes()")}generateMetadataEntry(e,t){this.comment(`${e}: ${this.e(t)}`)}async generateFunction(e){let t=this.var(e.id,this.varPrefix()),r=await this.generateArguments(e);if(e.namespace)throw new Error("The R client doesn't support namespaced processes yet");r=c.A.mapObject(r,((e,t)=>`${t} = ${this.e(e)}`)),this.comment(e.description),this.addCode(`${t} = p$${e.process_id}(${r.join(", ")})`)}generateMissingParameter(e){this.comment(e.description);let t=this.var(e.name,"param"),r="undefined"!==typeof e.default?e.default:null;this.addCode(`${t} = ${this.e(r)}`)}async generateCallback(e,t,r){let a=!1;if(a);else{let a=this.generateFunctionParams(t);this.newLine(),this.addCode(`${r} = function(${a.join(", ")}) {`),this.addCode(await e.toCode(!0),"",1),this.addCode("}")}}generateResult(e,t){if(!e)return;let r=this.var(e.id,this.varPrefix());t?this.addCode(`return(${r})`):this.addCode(`result = compute_result(graph = ${r})`)}}const g={name:"ExportCodeModal",components:{Modal:o.A,TextEditor:i.A},data(){return{language:"JavaScript",code:"",error:null}},computed:{...c.A.mapState(["connection"]),...c.A.mapState("editor",["process"]),...c.A.mapGetters(["processes","supportsMath"])},watch:{language:{immediate:!0,async handler(){try{let e;if("JavaScript"===this.language)e=new l.A(this.process,this.processes,this.connection,this.supportsMath);else if("Python"===this.language)e=new u(this.process,this.processes,this.connection);else{if("R"!==this.language)throw new Error("Unsupported programming language selected");e=new m(this.process,this.processes,this.connection)}this.code=e?await e.toCode():"",this.error=null}catch(e){this.code="",this.error=e instanceof Error?e.message:e}}}},methods:{download(){let e;"JavaScript"===this.language?e="code.js":"Python"===this.language?e="code.py":"R"===this.language&&(e="code.r"),s.OpenEO.Environment.saveToFile(this.code,e)}}},f=g;var y=r(81656),w=(0,y.A)(f,a,n,!1,null,null,null);const v=w.exports},16125:(e,t,r)=>{r.d(t,{A:()=>i});r(81454);var a=r(14894),n=r(2566);class s extends a.BaseProcess{constructor(e,t){super(e),this.exporter=t}async execute(e){await this.exporter.generateFunction(e)}}class i extends a.ProcessGraph{constructor(e,t,r){super(n.A.isObject(e)?e:{},t),this.connection=r,this.code=[],this.fnCounter=1,this.allowEmpty(),this.fillUndefinedParameters()}createProcessGraphInstance(e){let t=new i(e,this.processRegistry,this.getJsonSchemaValidator());return this.copyProcessGraphInstanceProperties(t)}copyProcessGraphInstanceProperties(e){return e=super.copyProcessGraphInstanceProperties(e),e.connection=this.connection,e}createProcessInstance(e){return new s(e,this)}isKeyword(e){return this.getKeywords().includes(e.toLowerCase())}getKeywords(){return[]}comment(){}generateImports(){}generateConnection(){}generateAuthentication(){}generateBuilder(){}generateMetadata(){}generateMissingParameter(){}async generateFunction(){}generateFunctionParams(e){return e.map((e=>"undefined"!==typeof e.default?`${e.name} = ${this.e(e.default)}`:e.name))}async generateCallback(){}generateResult(){}makeNull(){return"null"}makeBoolean(e){return e?"true":"false"}makeArray(e){return`[${e.join(", ")}]`}makeObject(e){let t=n.A.mapObject(e,((e,t)=>`${this.makeString(t)}: ${e}`));return`{${t.join(", ")}}`}makeString(e){return JSON.stringify(e)}makeNumber(e){return e}e(e){return null===e?this.makeNull():"boolean"===typeof e?this.makeBoolean(e):"number"===typeof e?this.makeNumber(e):"string"===typeof e?this.makeString(e):Array.isArray(e)?this.makeArray(e.map((e=>this.e(e)))):n.A.isObject(e)?this.makeObject(n.A.mapObjectValues(e,(e=>this.e(e)))):"function"===typeof e?e():this.makeNull()}generateMetadata(){let e=!1;for(let t in this.process){if("process_graph"===t)continue;let r=this.process[t];Array.isArray(r)&&0===r.length||("string"===typeof r&&0===r.length||("boolean"!==typeof r||r)&&(e||(this.newLine(),this.comment("Set the metadata for the process"),e=!0),this.generateMetadataEntry(t,r)))}}async resolveArguments(e,t,r){let a=Array.isArray(e)?[]:{};for(let s in e){let o=e[s];if(!r||!r(s,o))if(n.A.isObject(o)){if(o.from_node){a[s]=()=>this.var(o.from_node,this.varPrefix());continue}if(o.from_parameter){a[s]=()=>this.var(o.from_parameter);continue}if(o instanceof i){let e=await t(s);a[s]=()=>e;continue}a[s]=await this.resolveArguments(o,t,r)}else Array.isArray(o)?a[s]=await this.resolveArguments(o,t,r):a[s]=o}return a}async resolveCallback(e,t){let r;if("load_collection"===e.process_id){let a=e.getArgument("properties");r=a[t]}else r=e.getArgument(t);let a=r.getCallbackParameters();await r.execute(a);let n=this.var(`${t}${this.fnCounter++}`,"fn_"),s=await this.generateCallback(r,a,n);return s||n}async generateArguments(e,t=!1,r=null){let a=await this.resolveArguments(e.arguments,(async t=>await this.resolveCallback(e,t)),r);return t&&(a=this.orderArguments(e,a)),a}orderArguments(e,t){let r=e.getProcessGraph().getProcess(e);if(r&&Array.isArray(r.parameters)){let e=r.parameters.map((e=>"undefined"!==typeof t[e.name]?t[e.name]:e.optional?void 0:null)),a=!1;for(let t=e.length-1;t>=0;t--)"undefined"===typeof e[t]?a?e[t]=null:e.pop():a=!0;return e}}varPrefix(){return this.getParent()?"data":"datacube"}var(e,t="var"){return e=String(e),this.isKeyword(e)?`${e}_`:e.match(/^[a-z_]\w*$/)?e:t+e.replace(/[^\w]+/g,"_")}getTab(){return"\t"}addCode(e,t="",r=0){if("string"!==typeof e)return;let a=this.getTab().repeat(r),n=e.trim().split(/\r\n|\r|\n/g);for(let s of n)this.code.push(`${a}${t}${s}\n`)}newLine(e=1){for(let t=0;t<e;t++)this.addCode("")}getServerUrl(){return this.connection.getUrl()}async toCode(e=!1){this.code=[],e||(this.comment("Import required packages"),this.generateImports(),this.newLine(),this.comment("Connect to the back-end"),this.generateConnection(),this.generateAuthentication(),this.newLine(),this.generateBuilder(),this.generateMetadata(),this.newLine());let t=this.getProcessParameters();if(t.length>0){this.comment("ToDo: Here you need to set values for the parameters");for(let e of t)this.generateMissingParameter(e);this.newLine()}return await this.execute(),e||(this.newLine(),this.comment("The process can be executed synchronously (see below), as batch job or as web service now")),this.generateResult(this.getResultNode(),e),this.code.join("").trim()}async execute(){return await this.validate(),this.reset(),await this.executeNodes(this.getStartNodes()),this.getResultNode()}isMath(){return"undefined"===typeof this._isMath&&(this._isMath=this.processRegistry.isMath(this)),this._isMath}}},47067:(e,t,r)=>{r.d(t,{A:()=>o});r(98992),r(54520),r(81454);var a=r(2566),n=r(16125),s=r(73902);const i=["abstract","arguments","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield","builder","connection","formula","openeo","result"];class o extends n.A{constructor(e,t,r,a=!1){super(e,t,r),this.generateFormula=a}createProcessGraphInstance(e){let t=new o(e,this.processRegistry,this.getJsonSchemaValidator(),this.generateFormula);return this.copyProcessGraphInstanceProperties(t)}parse(){this.parsed||super.parse()}getKeywords(){return i}comment(e){this.addCode(e,"// ")}generateImports(){this.addCode("import { OpenEO, Formula } from '@openeo/js-client';")}generateConnection(){this.addCode(`let connection = await OpenEO.connect('${this.getServerUrl()}');`)}generateAuthentication(){this.comment("ToDo: Here you need to add your authentication steps")}generateBuilder(){this.addCode("let builder = await connection.buildProcess();")}generateMetadataEntry(e,t){this.addCode(`builder.${e} = ${this.e(t)};`)}async generateFunction(e){let t=e.getParent()?"this":"builder",r=this.var(e.id,this.varPrefix()),n=await this.generateArguments(e,!e.namespace);if(this.comment(e.description),a.A.isObject(n)){let a=e.namespace?`${e.process_id}@${e.namespace}`:e.process_id;this.addCode(`let ${r} = ${t}.process("${a}", ${this.e(n)});`)}else this.addCode(`let ${r} = ${t}.${e.process_id}(${n.map((e=>this.e(e))).join(", ")});`)}generateMissingParameter(e){this.comment(e.description);let t=this.var(e.name,"param"),r="undefined"!==typeof e.default?e.default:null;this.addCode(`let ${t} = ${this.e(r)};`)}async generateCallback(e,t,r){if(this.generateFormula&&e&&e.isMath()){let t=e.toFormulaString(),r=JSON.stringify(t);return`new Formula(${r})`}{let a=this.generateFunctionParams(t);this.newLine(),this.addCode(`let ${r} = function(${a.join(", ")}) {`),this.addCode(await e.toCode(!0),"",1),this.addCode("}")}}generateResult(e,t){if(!e)return;let r=this.var(e.id,this.varPrefix());t?this.addCode(`return ${r};`):this.addCode(`let result = await connection.computeResult(${r});`)}toFormulaString(){return this.isMath()?this.nodeToFormula(this.getResultNode()):""}getArrayElementPlaceholder(e){if("array_element"===e.process_id&&"parameter"===e.getArgumentType("data")){let t=e.getRawArgument("data").from_parameter,r=this.getCallbackParameters().findIndex((e=>e.name===t));if(r>=0)return"$".repeat(r+1)+(e.getArgument("label")||e.getArgument("index"))}return null}nodeToFormula(e,t=null){if("array_element"===e.process_id){let t=this.getArrayElementPlaceholder(e);if(t)return t}let r=s.Formula.reverseOperatorMapping[e.process_id],n=this.processRegistry.get(e.process_id),i="undefined"!==typeof s.Formula.arrayOperatorMapping[e.process_id],o=t=>{if(a.A.isObject(t))if(t.from_node){let a=e.getProcessGraph().getNode(t.from_node);t=a?this.nodeToFormula(a,r):"#"+t.from_node}else{if(!t.from_parameter)throw new Error("Objects not allowed");t=t.from_parameter}return t},c=[],l=Array.isArray(n.parameters)?n.parameters:[];for(let a of l){let t=o(e.getRawArgument(a.name));if(i&&Array.isArray(t)&&"data"===a.name){c=t.map((e=>o(e)));break}if("undefined"!==typeof t)c.push(t);else{if("undefined"===typeof a.default)throw new Error('Argument for parameter "'+a.name+'" missing');c.push(a.default)}}if(i&&(c=c.filter((e=>null!==e))),r){let e=["/","*"],a=["-","+"],n=c.map((e=>e<0?"("+e+")":e)).join(r);return!t||a.includes(t)&&a.includes(r)||"^"===r||a.includes(t)&&e.includes(r)?n:"("+n+")"}return e.process_id+"("+c.join(", ")+")"}}}}]);
//# sourceMappingURL=8221.143dea2e.js.map