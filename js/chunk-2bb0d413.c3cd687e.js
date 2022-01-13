(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bb0d413"],{"0513":function(e,t,s){},"0af1":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Modal",{attrs:{width:"80%",title:e.title},on:{closed:function(t){return e.$emit("closed")}}},[s("Service",{attrs:{service:e.service,currency:e.currency},scopedSlots:e._u([{key:"process-graph",fn:function(){return[s("Editor",{staticClass:"infoViewer",attrs:{value:e.service.process,editable:!1,id:"servicePgViewer"}})]},proxy:!0}])})],1)},i=[],r=s("025e"),o=s("2930"),n=s("ceb0"),l=s("9ebe"),c={name:"ServiceInfoModal",components:{Editor:n["default"],Modal:o["a"],Service:l["a"]},props:{service:{type:Object}},computed:{...r["a"].mapGetters(["currency"]),title(){return"Web Service: "+(this.service.title||"#"+this.service.id)}}},d=c,u=(s("5922"),s("2877")),h=Object(u["a"])(d,a,i,!1,null,null,null);t["default"]=h.exports},"0f29":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"textEditor",class:e.languageString},[s("div",{staticClass:"sourceHeader"},[e.title?s("strong",[e._v(e._s(e.title))]):e._e(),s("div",{staticClass:"sourceToolbar"},[s("span",{staticClass:"sepr"},[e.editable?s("button",{attrs:{type:"button",title:"New script / Clear current script"},on:{click:e.confirmClear}},[s("i",{staticClass:"fas fa-file"})]):e._e(),e._t("file-toolbar")],2),e.editable?s("span",{staticClass:"sepr"},[s("button",{attrs:{type:"button",disabled:!e.canUndo,title:"Revert last change"},on:{click:function(t){return e.editor.undo()}}},[s("i",{staticClass:"fas fa-undo-alt"})]),s("button",{attrs:{type:"button",disabled:!e.canRedo,title:"Redo last reverted change"},on:{click:function(t){return e.editor.redo()}}},[s("i",{staticClass:"fas fa-redo-alt"})]),e._t("edit-toolbar")],2):e._e(),s("FullscreenButton",{attrs:{element:e.element}}),e._t("toolbar")],2)]),s("div",{staticClass:"sourceCodeEditor",attrs:{id:e.id}})])},i=[],r=s("025e"),o=s("5472"),n=s("a76e"),l=s("56b3"),c=s.n(l),d=(s("a7be"),s("f9d4"),s("959b"),s("ced6"),s("db91"),s("903e"),s("d7d5"),s("8c33"),s("10b2"),s("0dd0"),s("8822"),s("d2de"),s("4ebc")),u=s.n(d);window.jsonlint=u.a;var h={name:"TextEditor",components:{FullscreenButton:o["a"]},props:{id:String,editable:{type:Boolean,default:!0},value:{required:!0},language:{type:String,default:null},placeholder:{type:String,default:""},title:{type:String}},computed:{...r["a"].mapGetters(["processes"]),languageString(){return"string"===typeof this.language?this.language.toLowerCase():""},editorOptions(){let e={indentUnit:2,lineNumbers:!0,indentWithTabs:!0,matchBrackets:!0,autoCloseBrackets:!0,readOnly:!this.editable,placeholder:this.placeholder};switch(this.languageString){case"r":e.mode="text/x-rsrc";break;case"python":e.mode="text/x-python";break;case"math":e.mode="text/x-mathematica";break;case"markdown":e.mode="text/x-markdown",e.lineWrapping=!0;break;case"javascript":e.mode="text/javascript";break;case"json":case"processgraph":e.mode="application/json",e.gutters=["CodeMirror-lint-markers"],e.lint=!0;break}return e}},data(){return{canUndo:!1,canRedo:!1,editor:null,emitValue:this.value,element:null}},watch:{async value(){this.emitValue!==this.value&&(this.updateContent(),this.editor.clearHistory())},editorOptions(){for(var e in this.editorOptions)this.editor.setOption(e,this.editorOptions[e]);this.updateContent()}},mounted(){this.editor=c()(document.getElementById(this.id),this.editorOptions),this.editor.setSize(null,"100%"),"processgraph"===this.languageString&&this.editor.on("change",()=>this.updateState()),this.updateContent(),this.editor.on("changes",(e,t)=>{try{0===Object.values(t).filter(e=>"setValue"===e.origin).length&&this.commit()}catch(s){this.$emit("error",s)}}),this.element=this.$el},methods:{confirmClear(){var e=confirm("Do you really want to clear the existing code?");e&&(this.insert(""),this.emit(null))},updateState(){this.editor.setOption("lint",!!this.editor.getValue().trim());let e=this.editor.getDoc().historySize();this.canUndo=e.undo>0,this.canRedo=e.redo>0,this.editor.refresh(),this.element=this.$el},commit(){var e=this.editor.getValue();switch(this.languageString){case"math":return this.emit(e.replace(/[\r\n\t]+/," "));case"processgraph":if(e){var t=JSON.parse(e);if(r["a"].size(t)>0){var s=new n["ProcessGraph"](t,this.processes);return s.allowEmpty(),s.parse(),this.emit(t)}}return this.emit(null);case"json":return e?this.emit(JSON.parse(e)):this.emit(null);default:return this.emit(e)}},emit(e){this.emitValue=e,this.$emit("input",e)},insert(e,t=!0){if("string"!==typeof e&&(e=String(e)),t){const t=this.editor.getValue();if(e!==t){const t=this.editor.getScrollInfo();this.editor.setValue(e),this.editor.scrollTo(t.left,t.top)}}else this.editor.replaceSelection(e)},updateContent(){if(this.value)switch(this.languageString){case"processgraph":r["a"].isObject(this.value)?this.insert(JSON.stringify(this.value,null,this.editorOptions.indentUnit)):this.insert("");break;case"json":this.insert(JSON.stringify(this.value,null,this.editorOptions.indentUnit));break;default:this.insert(this.value)}else this.insert("");this.editor.getDoc().clearHistory(),this.updateState()},insertProcess(e){try{this.insert(JSON.stringify(e,null,2),!1)}catch(t){r["a"].exception(this,t)}}}},p=h,m=(s("4f8c"),s("ccbe"),s("2877")),f=Object(m["a"])(p,a,i,!1,null,"100002bb",null);t["a"]=f.exports},"206d":function(e,t,s){},2930:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal",style:{"z-index":e.zIndex},on:{mousedown:e.backgroundClose}},[s("div",{ref:"container",staticClass:"modal-container",style:e.style},[s("header",{staticClass:"modal-header",on:{mousedown:e.startMove}},[e._t("header",(function(){return[s("h2",[e._v(e._s(e.title))]),s("span",{staticClass:"close",on:{click:e.close}},[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),s("main",{staticClass:"modal-content"},[e._t("default")],2),s("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])},i=[],r=s("3115"),o=s("025e"),n={name:"Modal",mixins:[r["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:null},width:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...o["a"].mapState("editor",["hightestModalZIndex"]),style(){let e={width:this.width};return this.minWidth&&(e["min-width"]=this.minWidth),Array.isArray(this.position)&&(e.position="absolute",e.left=this.position[0]+"px",e.top=this.position[1]+"px"),e}},watch:{show:{immediate:!0,handler(e){e?this.open():this.close()}}},methods:{...o["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(e){"H2"!==e.target.tagName&&(this.dragPosition=[e.clientX,e.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove),e.preventDefault(),e.stopPropagation())},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(e){e.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-e.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-e.clientY)],this.dragPosition=[e.clientX,e.clientY]},escCloseListener(e){if("Escape"==e.key)return this.close(),e.preventDefault(),e.stopPropagation(),!1},backgroundClose(e){e.target===this.$el&&this.close()}}},l=n,c=(s("8781"),s("2877")),d=Object(c["a"])(l,a,i,!1,null,null,null);t["a"]=d.exports},3986:function(e,t,s){},4525:function(e,t,s){},"4d982":function(e,t,s){"use strict";s("c98e")},"4f8c":function(e,t,s){"use strict";s("65f5")},5472:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{directives:[{name:"show",rawName:"v-show",value:e.element,expression:"element"}],attrs:{type:"button",title:e.isFullscreen?"Close fullscreen":"Show fullscreen"},on:{click:e.toggleFullscreen}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.isFullscreen,expression:"isFullscreen"}]},[s("i",{staticClass:"fas fa-compress"})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isFullscreen,expression:"!isFullscreen"}]},[s("i",{staticClass:"fas fa-expand"})])])},i=[],r=s("3115"),o=s("025e"),n={name:"FullscreenButton",mixins:[r["a"]],props:{element:{required:!0}},data(){return{isFullscreen:!1,keyDownFn:null,oldZIndex:"auto"}},mounted(){this.keyDownFn=this.onkeyDown.bind(this);let e=this.getElement();e&&e.addEventListener("keydown",this.keyDownFn)},beforeDestroy(){let e=this.getElement();e&&e.removeEventListener("keydown",this.keyDownFn)},computed:{...o["a"].mapState("editor",["hightestModalZIndex"])},methods:{...o["a"].mapMutations("editor",["openModal","closeModal"]),onkeyDown(e){!this.isFullscreen||"F11"!==e.key&&"Escape"!==e.key||(this.toggleFullscreen(),e.preventDefault(),e.stopPropagation())},getElement(){return"string"===typeof this.element?document.querySelector(this.element):"function"===typeof this.element?this.element():this.element},toggleFullscreen(){let e=this.getElement();this.isFullscreen?(this.isFullscreen=!1,e.classList.remove("fullscreen"),e.style.zIndex=this.oldZIndex,this.closeModal()):(this.isFullscreen=!0,e.classList.add("fullscreen"),this.openModal(),this.oldZIndex=e.style.zIndex,e.style.zIndex=this.hightestModalZIndex),this.$emit("changed",this.isFullscreen),this.emit("stopTour")}}},l=n,c=(s("90f4"),s("2877")),d=Object(c["a"])(l,a,i,!1,null,null,null);t["a"]=d.exports},"58d3":function(e,t,s){"use strict";s("f08e")},5922:function(e,t,s){"use strict";s("0513")},6219:function(e,t,s){},"65f5":function(e,t,s){},"6b1e":function(e,t,s){},"79f4":function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s("a76e"),i=s("025e");class r extends a["BaseProcess"]{constructor(e,t){super(e),this.exporter=t}async execute(e){await this.exporter.generateFunction(e)}}class o extends a["ProcessGraph"]{constructor(e,t,s){super(i["a"].isObject(e)?e:{},t),this.connection=s,this.indent=0,this.code=[],this.allowEmpty(),this.fillUndefinedParameters()}createProcessGraphInstance(e){let t=new o(e,this.processRegistry,this.getJsonSchemaValidator());return this.copyProcessGraphInstanceProperties(t)}copyProcessGraphInstanceProperties(e){return e=super.copyProcessGraphInstanceProperties(e),e.connection=this.connection,e}createProcessInstance(e){return new r(e,this)}isKeyword(){return!1}comment(){}generateImports(){}generateConnection(){}generateAuthentication(){}generateBuilder(){}generateMetadata(){}generateMissingParameter(){}async generateFunction(){}generateFunctionParams(e){return e.map(e=>"undefined"!==typeof e.default?`${e.name} = ${this.e(e.default)}`:e.name)}async generateCallback(){}generateResult(){}makeNull(){return"null"}makeBoolean(e){return e?"true":"false"}makeArray(e){return`[${e.join(", ")}]`}makeObject(e){let t=i["a"].mapObject(e,(e,t)=>`${this.makeString(t)}: ${e}`);return`{${t.join(", ")}}`}makeString(e){return JSON.stringify(e)}makeNumber(e){return e}e(e){return null===e?this.makeNull():"boolean"===typeof e?this.makeBoolean(e):"number"===typeof e?this.makeNumber(e):"string"===typeof e?this.makeString(e):Array.isArray(e)?this.makeArray(e.map(e=>this.e(e))):i["a"].isObject(e)?this.makeObject(i["a"].mapObjectValues(e,e=>this.e(e))):"function"===typeof e?e():this.makeNull()}generateMetadata(){let e=!1;for(let t in this.process){if("process_graph"===t)continue;let s=this.process[t];Array.isArray(s)&&0===s.length||("string"===typeof s&&0===s.length||("boolean"!==typeof s||s)&&(e||(this.newLine(),this.comment("Set the metadata for the process"),e=!0),this.generateMetadataEntry(t,s)))}}async resolveArguments(e,t,s){let a=Array.isArray(e)?[]:{};for(let r in e){let n=e[r];if(!s||!s(r,n))if(i["a"].isObject(n)){if(n.from_node){a[r]=()=>this.var(n.from_node);continue}if(n.from_parameter){a[r]=()=>this.var(n.from_parameter);continue}if(n instanceof o){let e=await t(r);a[r]=()=>e;continue}a[r]=await this.resolveArguments(n,t,s)}else Array.isArray(n)?a[r]=await this.resolveArguments(n,t,s):a[r]=n}return a}async resolveCallback(e,t){let s=e.getArgument(t),a=s.getCallbackParameters();await s.execute(a);let i=this.var(e.id,"fn"),r=await this.generateCallback(s,a,i);return r||i}async generateArguments(e,t=!1,s=null){let a=await this.resolveArguments(e.arguments,async t=>await this.resolveCallback(e,t),s);return t&&(a=this.orderArguments(e,a)),a}orderArguments(e,t){let s=e.getProcessGraph().getProcess(e);if(s&&Array.isArray(s.parameters)){let e=s.parameters.map(e=>"undefined"!==typeof t[e.name]?t[e.name]:e.optional?void 0:null),a=!1;for(let t=e.length-1;t>=0;t--)"undefined"===typeof e[t]?a?e[t]=null:e.pop():a=!0;return e}}var(e,t="datacube"){return this.isKeyword(e)?e+"_":e.match(/^[a-z_]\w*$/)?e:`${t}${e}`}getTab(){return"\t"}addCode(e,t=""){if("string"!==typeof e)return;let s=this.getTab().repeat(this.indent),a=e.trim().split(/\r\n|\r|\n/g);for(let i of a)this.code.push(`${s}${t}${i}\n`)}newLine(e=1){for(let t=0;t<e;t++)this.addCode("")}getServerUrl(){return this.connection.getUrl()}async toCode(e=!1){this.code=[],e||(this.comment("Import required packages"),this.generateImports(),this.newLine(),this.comment("Connect to the back-end"),this.generateConnection(),this.generateAuthentication(),this.newLine(),this.generateBuilder(),this.generateMetadata(),this.newLine());let t=this.getProcessParameters();if(t.length>0){this.comment("ToDo: Here you need to set values for the parameters");for(let e of t)this.generateMissingParameter(e);this.newLine()}return await this.execute(),e||(this.newLine(),this.comment("The process can be executed synchronously (see below), as batch job or as web service now")),this.generateResult(this.getResultNode(),e),this.code.join("").trim()}async execute(){return await this.validate(),this.reset(),await this.executeNodes(this.getStartNodes()),this.getResultNode()}isMath(){return"undefined"===typeof this._isMath&&(this._isMath=this.processRegistry.isMath(this)),this._isMath}}},"7b86":function(e,t,s){"use strict";s("3986")},"877a":function(e,t,s){"use strict";s("6219")},8781:function(e,t,s){"use strict";s("6b1e")},"8c66":function(e,t,s){"use strict";var a=function(){var e=this,t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"visualEditor",staticClass:"visualEditor"},[a("div",{staticClass:"sourceHeader"},[t.title?a("strong",[t._v(t._s(t.title))]):t._e(),a("div",{staticClass:"sourceToolbar"},[t.editable?a("span",{staticClass:"sepr"},[a("button",{attrs:{type:"button",title:"New script / Clear current script"},on:{click:t.confirmClear}},[a("i",{staticClass:"fas fa-file"})]),t._t("file-toolbar")],2):t._e(),t.editable?a("span",{staticClass:"sepr"},[a("button",{attrs:{type:"button",disabled:!t.canUndo,title:"Revert last change"},on:{click:function(e){return t.$refs.blocks.undo()}}},[a("i",{staticClass:"fas fa-undo-alt"})]),a("button",{attrs:{type:"button",disabled:!t.canRedo,title:"Redo last reverted change"},on:{click:function(e){return t.$refs.blocks.redo()}}},[a("i",{staticClass:"fas fa-redo-alt"})]),a("button",{attrs:{type:"button",disabled:!t.hasSelection,title:"Delete selected elements"},on:{click:function(e){return t.$refs.blocks.deleteSelected()}}},[a("i",{staticClass:"fas fa-trash"})])]):t._e(),t.editable?a("span",{staticClass:"sepr"},[t.parent?t._e():a("button",{attrs:{type:"button",title:"Edit Process Metadata"},on:{click:function(){return t.editProcess(t.value)}}},[a("i",{staticClass:"fas fa-edit"})]),a("button",{attrs:{type:"button",title:"Add Parameter"},on:{click:t.addParameter}},[a("i",{staticClass:"fas fa-parking"})]),t.supportsMath?a("button",{class:{highlightFormula:t.isMath},attrs:{type:"button",title:"Insert/Edit formula"},on:{click:t.showExpressionModal}},[a("i",{staticClass:"fas fa-square-root-alt"})]):t._e()]):t._e(),a("button",{class:{compactMode:t.compactMode},attrs:{type:"button",title:"Compact Mode"},on:{click:function(e){return t.$refs.blocks.toggleCompact()}}},[a("i",{staticClass:"fas fa-compress-arrows-alt"})]),a("button",{attrs:{type:"button",title:"Scale to perfect size"},on:{click:function(e){return t.$refs.blocks.perfectScale()}}},[a("i",{staticClass:"fas fa-arrows-alt"})]),a("FullscreenButton",{attrs:{element:function(){return e.$refs.visualEditor}},on:{changed:function(s){e.$refs.blocks.perfectScale(),t.isFullScreen=s}}}),t._t("toolbar")],2)]),a("div",{staticClass:"editorSplitter"},[(t.showDiscoveryToolbar||t.isFullScreen)&&t.editable?a("DiscoveryToolbar",{staticClass:"discoveryToolbar",attrs:{onAddProcess:t.insertProcess}}):t._e(),a("div",{staticClass:"graphBuilder",on:{drop:t.onDrop,dragover:t.allowDrop}},[a("ModelBuilder",{ref:"blocks",attrs:{editable:t.editable,id:t.id,processes:t.processes,collections:t.collections,parent:t.parent,parentSchema:t.parentSchema,value:t.value},on:{input:t.commit,error:t.errorHandler,showProcess:function(e,s){return t.emit("showProcess",{id:e,namespace:s})},showCollection:function(e){return t.emit("showCollection",e)},showParameter:function(e){return t.emit("showProcessParameter",e)},editParameter:t.editParameter,editArguments:t.openArgumentEditor,compactMode:function(t){return e.compactMode=t},selectionChanged:t.selectionChanged,historyChanged:t.historyChanged}})],1)],1)])},i=[],r=s("1d9a"),o=s("025e"),n=s("cbd9"),l=s("3115"),c=s("5472"),d=s("fbda"),u=s("db05"),h={name:"VisualEditor",mixins:[l["a"]],components:{ModelBuilder:r["default"],DiscoveryToolbar:n["a"],FullscreenButton:c["a"]},props:{id:String,editable:{type:Boolean,default:!0},value:{type:Object,default:()=>null},parent:{type:Object,default:null},parentSchema:{type:Object,default:null},showDiscoveryToolbar:{type:Boolean,default:!1},title:{type:String},defaultValue:{}},computed:{...o["a"].mapState(["connection","collections"]),...o["a"].mapGetters(["processes","supportsMath"]),...o["a"].mapState("editor",["initialNode"]),isMath(){return this.supportsMath&&this.processes.isMath(this.value)}},data(){return{canUndo:!1,canRedo:!1,compactMode:!1,hasSelection:!1,formula:null,isFullScreen:!1}},watch:{value:{immediate:!0,handler(e){if(this.initialNode&&o["a"].isObject(e)&&o["a"].isObject(e.process_graph))try{let t=this.initialNode;"1"==t&&o["a"].size(e.process_graph)&&(t=Object.keys(e.process_graph)[0]),this.openArgumentEditorForNode(t)}catch(t){o["a"].exception(this,t)}finally{this.setInitialNode(null)}}}},methods:{...o["a"].mapMutations("editor",["setInitialNode"]),commit(e){"undefined"!==typeof this.defaultValue&&o["a"].isObject(e)&&0===o["a"].size(e.process_graph)&&(e=this.defaultValue),this.$emit("input",e)},errorHandler(e,t=null){o["a"].exception(this,e,t)},selectionChanged(e,t){this.hasSelection=Boolean(e.filter(e=>e.$el.allowsDelete).length||t.length)},historyChanged(e,t){this.canUndo=!!e[t-1],this.canRedo=!!e[t+1]},allowDrop(e){e.preventDefault()},onDrop(e){var t=e.dataTransfer.getData("application/vnd.openeo-node");if(t){let s=JSON.parse(t);return this.insertProcess(s,e.pageX,e.pageY),e.preventDefault()}let s=e.dataTransfer.files;if(1===s.length){let t=e.dataTransfer.files[0];if("application/json"===t.type){var a=new FileReader;return a.onload=async e=>{try{let t=JSON.parse(e.target.result);await this.$refs.blocks.import(t)}catch(t){o["a"].exception(this,t,"Parsing JSON file failed")}},a.onerror=e=>o["a"].exception(this,e,"Reading JSON file failed"),a.readAsText(t,"UTF-8"),e.preventDefault()}}},getNameField(e,t="name"){return{value:e,name:t,description:"A unique identifier. Must contain only letters (`a`-`z`), digits (`0`-`9`) and underscores (`_`). `snake_case` is recommended.",label:"Name",schema:{type:"string",pattern:"^\\w+$"},default:null}},getDescriptionField(e,t=!1,s="description",a="Description"){return{value:e,name:s,description:"Provides a detailed description. CommonMark (Markdown) syntax can be used for rich text formatting.",label:a,optional:t,schema:{type:"string",subtype:"commonmark"}}},getOptionalField(e){return{value:e,name:"optional",label:"Optional",description:"Parameters by default are required. CHeck this option to make the parameter optional. For optional parameters a default value should be specified.",optional:!0,schema:{type:"boolean"},default:!1}},getDefaultField(e){return{value:e,name:"default",label:"Default Value",description:"This value is used whenever the user of this process did not specify a value for this parameter.",toggledBy:"optional",optional:!0,schema:{}}},getExperimentalField(e){return{value:e,name:"experimental",label:"Experimental",description:"Declares that this is experimental, which means that it is unstable and likely to change.",optional:!0,schema:{type:"boolean"},default:!1}},getDeprecatedField(e){return{value:e,name:"deprecated",label:"Deprecated",description:"Declares that this is deprecated with the potential to be removed in any of the next versions. It should be transitioned out of usage.",optional:!0,schema:{type:"boolean"},default:!1}},getSchemaField(e,t="schema",s="Data Types"){let a=e?"json-schema":"openeo-datatype";return{value:e,name:t,label:s,description:"Allowed data type(s) as JSON Schema.",schema:[{title:"Single data type",type:"object",subtype:a},{title:"Multiple data types",type:"array",minItems:2,items:{type:"object",subtype:a}}]}},editProcess(e){e=o["a"].isObject(e)?e:{};let t=o["a"].isObject(e.returns)?e.returns:{};var s=[this.getNameField(e.id,"id"),{value:e.summary,name:"summary",description:"A very short description of the process with usually less than 60 characters.",label:"Summary",optional:!0,schema:{type:"string"}},this.getDescriptionField(e.description,!0),{value:e.categories,name:"categories",label:"Categories",optional:!0,schema:{type:"array",items:{type:"string"}}},this.getExperimentalField(e.experimental),this.getDeprecatedField(e.deprecated),{label:"Parameters",description:'The parameters can be edited directly in the "Visual Model" interface.',info:!0},this.getDescriptionField(t.description,!0,"returns_description","Return Value > Description"),this.getSchemaField(t.schema,"returns_schema","Return Value > Data Type"),{value:e.exceptions,name:"exceptions",description:"Declares exceptions (errors) that might occur during execution of this process. This list is just for informative purposes.\n\nThe keys of the object are the error codes, which should only consist of alphanumerical characters. `PascalCase` is recommended.",label:"Errors",optional:!0,schema:{type:"object",additionalProperties:{type:"object",required:["message"],properties:{message:{title:"Error Message",type:"string"},description:{title:"Description",type:"string",subtype:"commonmark"},http:{title:"HTTP Status Code",type:"integer",enum:[400,500,501]}}}}},{value:e.examples,name:"examples",label:"Examples",description:"Example calls for this process with specific values for the parameters (arguments) and the result (return value).",optional:!0,schema:{type:"array",items:{type:"object",required:["arguments"],properties:{title:{title:"Title",type:"string"},title:{title:"Description",type:"string",subtype:"commonmark"},arguments:{title:"Arguments",type:"object",default:{}},returns:{title:"Return Value"}}}}},{value:e.links,name:"links",label:"Links",description:"Links related to this process, e.g. additional documentation.",optional:!0,schema:{type:"array",items:{type:"object",required:["href","rel"],properties:{href:{title:"URL",type:"string"},rel:{title:"Relation",description:"For examples see [IANA relation types](https://www.iana.org/assignments/link-relations/link-relations.xhtml)",type:"string",default:"about"},title:{title:"Title",type:"string"},type:{title:"Media Type",description:"For examples see [IANA media types](https://www.iana.org/assignments/media-types/media-types.xhtml)",type:"string"}}}}}];this.emit("showDataForm","Edit Process",s,async e=>{let t=o["a"].pickFromObject(e,["id","summary","description","categories","experimental","deprecated","exception","examples","links"]);("string"===typeof t.description||o["a"].isObject(t.schema))&&(t.returns={description:e.returns_description,schema:e.returns_schema});let s=this.$refs.blocks.export(!0),a=Object.assign({},s,t);const i={id:"",summary:"",description:"",categories:[],experimental:!1,deprecated:!1,examples:[],links:[],process_graph:{}};for(let r in i)o["a"].equals(i[r],a[r])&&delete a[r];this.commit(a)})},addParameter(){var e=[this.getNameField(),this.getDescriptionField(),this.getOptionalField(),this.getDefaultField(),this.getExperimentalField(),this.getDeprecatedField(),this.getSchemaField()];this.emit("showDataForm","Add Parameter",e,async e=>{"string"===typeof e.name&&e.name.length>0&&await this.$refs.blocks.addPgParameter(e)})},editParameter(e,t="Edit Parameter",s=null){var a=[this.getNameField(e.name),this.getDescriptionField(e.description),this.getOptionalField(e.optional),this.getDefaultField(e.default),this.getExperimentalField(e.experimental),this.getDeprecatedField(e.deprecated),this.getSchemaField(e.schema)];this.emit("showDataForm",t,a,s)},showExpressionModal(){let e=new u["a"](this.value,this.processes,this.connection,!0);e.setCallbackParameters(this.$refs.blocks.getPgParameters().map(e=>e.spec));try{e.parse();let t={process:e},s={save:this.insertNodes};this.emit("showModal","ExpressionModal",t,s)}catch(t){o["a"].exception(this,t)}},openArgumentEditorForNode(e){let t=o["a"].deepClone(this.value),s=t.process_graph[e],a=this.processes.get(s.process_id,s.namespace);this.openArgumentEditor(a.parameters.map(e=>new d["ProcessParameter"](e)).filter(e=>e.isEditable()),s.arguments,a.id,!0,null,e=>{Object.assign(s,{arguments:e}),this.commit(t)})},openArgumentEditor(e,t,s="Edit",a=!0,i=null,r=null,o=null){let n={title:s,parameters:e,data:t,editable:a,selectParameterName:i,parent:o},l={};"function"===typeof r&&(l.save=r),this.emit("showModal","ParameterModal",n,l)},confirmClear(){var e=confirm("Do you really want to clear the existing model?");e&&this.clear()},clear(){this.$refs.blocks&&this.$refs.blocks.clear(),this.commit(null)},insertProcess(e,t=null,s=null){try{var a=this.$refs.blocks.getPositionForPageXY(t,s);let i=e.namespace;"backend"!==i&&"user"!==i||(i=null),this.$refs.blocks.addProcess(e.process_id,e.arguments,a,i)}catch(i){o["a"].exception(this,i)}},async insertNodes(e,t=!1){return await this.$refs.blocks.import({process_graph:e},{clear:t})}}},p=h,m=(s("4d982"),s("2877")),f=Object(m["a"])(p,a,i,!1,null,null,null);t["a"]=f.exports},"90f4":function(e,t,s){"use strict";s("206d")},c98e:function(e,t,s){},cbd9:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"discovery-toolbar"},[s("SearchBox",{model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),s("div",{staticClass:"search-results"},[s("Collections",{staticClass:"category",attrs:{collections:e.collections,searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var a=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:e.supportsLoadCollection},on:{dragstart:function(t){return e.onDrag(t,"collection",a)}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showCollectionInfo(a.id)}}},[s("strong",{attrs:{title:a.id}},[e._v(e._s(a.id))]),a.title?s("small",{attrs:{title:a.title}},[e._v(e._s(a.title))]):e._e()]),e.hasCollectionPreview(a)?s("button",{staticClass:"discovery-button",attrs:{type:"button",title:"View on map"},on:{click:function(t){return e.showCollectionPreview(a)}}},[s("i",{staticClass:"fas fa-map"})]):e._e()])]}}])}),s("Processes",{staticClass:"category",attrs:{processes:e.allProcesses,searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var a=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:"true"},on:{dragstart:function(t){return e.onDrag(t,"process",a)}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showProcess(a)}}},["user"===a.namespace?s("i",{staticClass:"custom-process fas fa-xs fa-sitemap",attrs:{title:"Custom Process"}}):"backend"!==a.namespace?s("i",{staticClass:"custom-process fas fa-xs fa-tag",attrs:{title:"Process from namespace '"+a.namespace+"'"}}):e._e(),s("strong",{attrs:{title:a.id}},[e._v(e._s(a.id))]),a.summary?s("small",{attrs:{title:a.summary}},[e._v(e._s(a.summary))]):e._e()])])]}}])}),e.hasUdfRuntimes?s("UdfRuntimes",{staticClass:"category",attrs:{runtimes:e.udfRuntimes,searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var a=t.summary,i=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:e.supportsRunUdf},on:{dragstart:function(t){return e.onDrag(t,"udf",{runtime:a.identifier,version:i.default})}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showUdfInfo(a.identifier,i)}}},[s("strong",{attrs:{title:a.identifier}},[e._v(e._s(a.identifier)+" ("+e._s(i.default)+")")]),a.summary?s("small",{attrs:{title:a.summary}},[e._v(e._s(a.summary))]):e._e()])])]}}],null,!1,92063951)}):e._e(),s("FileFormats",{staticClass:"category",attrs:{formats:e.fileFormats,showInput:!1,heading:"Export File Formats",searchTerm:e.searchTerm,offerDetails:!1,collapsed:e.collapsed},scopedSlots:e._u([{key:"summary",fn:function(t){var a=t.item;return[s("div",{staticClass:"discovery-entity",attrs:{draggable:e.supportsSaveResult},on:{dragstart:function(t){return e.onDrag(t,"fileformat",a)}}},[s("div",{staticClass:"discovery-info",on:{click:function(t){return e.showFileFormatInfo(a)}}},[s("strong",{attrs:{title:a.name}},[e._v(e._s(a.name))]),a.title?s("small",{attrs:{title:a.title}},[e._v(e._s(a.title))]):e._e()])])]}}])})],1)],1)},i=[],r=s("3115"),o=s("025e"),n=s("69d2"),l=s("a0e2"),c=s("9b5d"),d=s("2979"),u=s("d235"),h={name:"DiscoveryToolbar",mixins:[r["a"]],components:{Collections:n["a"],FileFormats:l["a"],Processes:c["a"],SearchBox:d["default"],UdfRuntimes:u["a"]},props:{onAddProcess:{type:Function,required:!0},collectionPreview:{type:Boolean,default:!1},persist:{type:Boolean,default:!1}},data(){return{internalSearchTerm:"",collapsed:!0}},computed:{...o["a"].mapState(["collections","udfRuntimes"]),...o["a"].mapState("editor",["discoverySearchTerm"]),...o["a"].mapGetters(["supports","collectionDefaults","fileFormats","processes"]),supportsLoadCollection(){return this.processes.has("load_collection")},supportsRunUdf(){return this.processes.has("run_udf")},supportsSaveResult(){return this.processes.has("save_result")},hasUdfRuntimes(){return o["a"].size(this.udfRuntimes)},allProcesses(){return this.processes.all()},searchTerm:{get(){return this.persist?this.discoverySearchTerm:this.internalSearchTerm},set(e){this.persist?this.setDiscoverySearchTerm(e):this.internalSearchTerm=e}}},watch:{searchTerm:{immediate:!0,handler(e,t){!e&&t?this.collapsed=!0:e&&!t&&(this.collapsed=!1)}}},methods:{...o["a"].mapMutations("editor",["setDiscoverySearchTerm"]),onDrag(e,t,s){let a=this.getNode(t,s);e.dataTransfer.setData("application/vnd.openeo-node",JSON.stringify(a)),e.dataTransfer.setData("text/plain",JSON.stringify(a,null,2))},showCollectionInfo(e){this.emit("showCollection",e)},hasCollectionPreview(e){return Boolean(this.collectionPreview&&o["a"].getPreviewLinkFromSTAC(e))},showCollectionPreview(e){this.emit("showCollectionPreview",e)},showProcess(e){this.emit("showProcess",e)},showUdfInfo(e,t){this.emit("showModal","UdfRuntimeModal",{id:e,data:t,version:t.default})},showFileFormatInfo(e){let t={id:e.name,format:this.fileFormats.output[e.name],type:"output"};this.emit("showModal","FileFormatModal",t)},getNode(e,t){switch(e){case"collection":return{process_id:"load_collection",arguments:this.collectionDefaults(t.id)};case"process":return{process_id:t.id,namespace:t.namespace,arguments:{}};case"udf":return{process_id:"run_udf",arguments:t};case"fileformat":return{process_id:"save_result",arguments:{format:t.name,options:{}}}}}}},p=h,m=(s("7b86"),s("877a"),s("2877")),f=Object(m["a"])(p,a,i,!1,null,"e5b627b0",null);t["a"]=f.exports},ccbe:function(e,t,s){"use strict";s("4525")},ceb0:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Tabs",{ref:"tabs",staticClass:"editor",attrs:{id:"customProcessContent",position:"bottom"}},[s("Tab",{attrs:{id:"visual",name:"Visual Model",icon:"fa-project-diagram",selected:!0,allowShow:e.canSwitchView},on:{show:e.showModel}},[s("VisualEditor",{ref:"graphBuilder",staticClass:"visualEditorTab",attrs:{editable:e.editable,parent:e.parent,parentSchema:e.parentSchema,value:e.modelValue,title:e.title,id:e.id+"_visual",showDiscoveryToolbar:e.showDiscoveryToolbar,defaultValue:e.defaultValue},on:{input:e.commit,error:e.onError},scopedSlots:e._u([{key:"file-toolbar",fn:function(){return[e._t("file-toolbar")]},proxy:!0},{key:"toolbar",fn:function(){return[e._t("toolbar")]},proxy:!0}],null,!0)})],1),s("Tab",{attrs:{id:"source",name:"Code",icon:"fa-code",allowShow:e.canSwitchView},on:{show:e.showCode}},[s("TextEditor",{ref:"sourceEditor",staticClass:"textEditorTab",attrs:{editable:e.editable,value:e.codeValue,title:e.title,id:e.id+"_text",language:"processgraph"},on:{input:e.commit,error:e.onError},scopedSlots:e._u([{key:"file-toolbar",fn:function(){return[e._t("file-toolbar")]},proxy:!0},{key:"toolbar",fn:function(){return[e._t("toolbar")]},proxy:!0}],null,!0)})],1)],1)},i=[],r=s("025e"),o=s("e7ea"),n=s("bdb2"),l=s("8c66"),c=s("0f29"),d={name:"Editor",components:{VisualEditor:l["a"],TextEditor:c["a"],Tabs:o["default"],Tab:n["default"]},props:{id:String,editable:{type:Boolean,default:!0},value:{type:Object,default:()=>null},title:{type:String},parent:{type:Object,default:null},parentSchema:{type:Object,default:null},showDiscoveryToolbar:{type:Boolean,default:!1},defaultValue:{}},watch:{value(){this.updateTab()}},data(){return{modelValue:null,codeValue:null,error:null}},mounted(){this.updateTab()},methods:{...r["a"].mapActions(["loadProcess"]),showModel(){this.error=null,this.modelValue=this.value},showCode(){this.error=null,this.codeValue=this.value,this.$refs.sourceEditor.updateState()},updateTab(){"source"===this.$refs.tabs.getActiveTabId()?this.showCode():this.showModel()},commit(e){this.error=null,this.$emit("input",e)},onError(e){this.error=e},activeEditor(){return"source"===this.$refs.tabs.getActiveTabId()?this.$refs.sourceEditor:this.$refs.graphBuilder},async insertProcess(e){try{await this.loadProcess({id:e.process_id,namespace:e.namespace}),this.activeEditor().insertProcess(e)}catch(t){r["a"].exception(this,t)}},canSwitchView(){return!this.editable||null===this.error||(r["a"].exception(this,this.error,"Process Invalid Error"),!1)}}},u=d,h=(s("58d3"),s("2877")),p=Object(h["a"])(u,a,i,!1,null,null,null);t["default"]=p.exports},db05:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s("d9e2");var a=s("025e"),i=s("79f4"),r=s("2b70");const o=["abstract","arguments","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield","builder","connection","formula","openeo","result"];class n extends i["a"]{constructor(e,t,s,a=!1){super(e,t,s),this.generateFormula=a}createProcessGraphInstance(e){let t=new n(e,this.processRegistry,this.getJsonSchemaValidator(),this.generateFormula);return this.copyProcessGraphInstanceProperties(t)}parse(){this.parsed||super.parse()}isKeyword(e){return o.includes(e.toLowerCase())}comment(e){this.addCode(e,"// ")}generateImports(){this.addCode("import { OpenEO, Formula } from '@openeo/js-client';")}generateConnection(){this.addCode(`let connection = await OpenEO.connect('${this.getServerUrl()}');`)}generateAuthentication(){this.comment("ToDo: Here you need to add your authentication steps")}generateBuilder(){this.addCode("let builder = await connection.buildProcess();")}generateMetadataEntry(e,t){this.addCode(`builder.${e} = ${this.e(t)};`)}async generateFunction(e){let t=this.var(e.id),s=e.getParent()?"this":"builder",i=await this.generateArguments(e,!e.namespace);if(this.comment(e.description),a["a"].isObject(i)){let a=e.namespace?`${e.process_id}@${e.namespace}`:e.process_id;this.addCode(`let ${t} = ${s}.process("${a}", ${this.e(i)});`)}else this.addCode(`let ${t} = ${s}.${e.process_id}(${i.map(e=>this.e(e)).join(", ")});`)}generateMissingParameter(e){this.comment(e.description);let t=this.var(e.name,"param"),s="undefined"!==typeof e.default?e.default:null;this.addCode(`let ${t} = ${this.e(s)};`)}async generateCallback(e,t,s){if(this.generateFormula&&e&&e.isMath()){let t=e.toFormulaString(),s=JSON.stringify(t);return`new Formula(${s})`}{let a=this.generateFunctionParams(t);this.newLine(),this.addCode(`let ${s} = function(${a.join(", ")}) {`),this.indent++,this.addCode(await e.toCode(!0)),this.indent--,this.addCode("}")}}generateResult(e,t){if(!e)return;let s=this.var(e.id);t?this.addCode(`return ${s};`):this.addCode(`let result = await connection.computeResult(${s});`)}toFormulaString(){return this.isMath()?this.nodeToFormula(this.getResultNode()):""}getArrayElementPlaceholder(e){if("array_element"===e.process_id&&"parameter"===e.getArgumentType("data")){let t=e.getRawArgument("data").from_parameter,s=this.getCallbackParameters().findIndex(e=>e.name===t);if(s>=0)return"$".repeat(s+1)+(e.getArgument("label")||e.getArgument("index"))}return null}nodeToFormula(e,t=null){if("array_element"===e.process_id){let t=this.getArrayElementPlaceholder(e);if(t)return t}let s=r["Formula"].reverseOperatorMapping[e.process_id],i=this.processRegistry.get(e.process_id),o="undefined"!==typeof r["Formula"].arrayOperatorMapping[e.process_id],n=t=>{if(a["a"].isObject(t))if(t.from_node){let a=e.getProcessGraph().getNode(t.from_node);t=a?this.nodeToFormula(a,s):"#"+t.from_node}else{if(!t.from_parameter)throw new Error("Objects not allowed");t=t.from_parameter}return t},l=[],c=Array.isArray(i.parameters)?i.parameters:[];for(let a of c){let t=n(e.getRawArgument(a.name));if(o&&Array.isArray(t)&&"data"===a.name){l=t.map(e=>n(e));break}if("undefined"!==typeof t)l.push(t);else{if("undefined"===typeof a.default)throw new Error('Argument for parameter "'+a.name+'" missing');l.push(a.default)}}if(o&&(l=l.filter(e=>null!==e)),s){let e=["/","*"],a=["-","+"],i=l.map(e=>e<0?"("+e+")":e).join(s);return!t||a.includes(t)&&a.includes(s)||e.includes(t)&&e.includes(s)||"^"===s||a.includes(t)&&e.includes(s)?i:"("+i+")"}return e.process_id+"("+l.join(", ")+")"}}},f08e:function(e,t,s){}}]);
//# sourceMappingURL=chunk-2bb0d413.c3cd687e.js.map