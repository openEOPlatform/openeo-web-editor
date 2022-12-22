"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7080,8503,1090,8552],{37080:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wizard-tab-content"},[t("WizardTab",{attrs:{pos:0,parent:e.parent,title:"Parameters",beforeChange:e.checkRequirements}},[e.processSpec?t("ChooseProcessParameters",{attrs:{process:e.processSpec},model:{value:e.args,callback:function(t){e.args=t},expression:"args"}}):e.loading?t("p",{staticClass:"center"},[t("i",{staticClass:"fas fa-spinner fa-spin"}),e._v(" Loading process...")]):t("p",[e._v("Process not available.")])],1),t("WizardTab",{attrs:{pos:1,parent:e.parent,title:"Finish"}},[t("ChooseProcessingMode",{attrs:{title:e.jobTitle},on:{"update:title":function(t){e.jobTitle=t}},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}})],1)],1)},r=[],a=s(18552),i=s(61090),n=s(71484),l=s(79879),c=s(28954),p=s(25108);const u={name:"UDP",mixins:[n.Z],components:{ChooseProcessingMode:a["default"],ChooseProcessParameters:i["default"]},data(){return{loading:!0,process:null,processSpec:null,args:{},jobTitle:"",mode:""}},computed:{...l.Z.mapGetters(["processes"]),graph(){if(!this.process||!this.processSpec)return null;let[e,t]=this.process.split("@");return{process_graph:{[e]:{process_id:e,namespace:t,description:this.processSpec.summary,arguments:this.args,result:!0}}}}},async created(){this.loading=!0;let[e,t]=this.process.split("@");try{this.processSpec=await this.loadProcess({id:e,namespace:t}),this.processSpec&&(this.jobTitle=this.processSpec.id)}catch(s){p.warn(s),this.$emit("close","Sorry, the wizard can't load the requested process.")}finally{this.loading=!1}},methods:{...l.Z.mapActions(["loadProcess"]),checkRequirements(){if(this.graph){var e=new c.ProcessGraph(this.graph,this.processes);return e.validate()}return!1},async finish(){this.$emit("input",{process:this.graph,mode:this.mode,modeOptions:{title:this.jobTitle}})}}},d=u;var m=s(1001),h=(0,m.Z)(d,o,r,!1,null,null,null);const v=h.exports},58503:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var o=function(){var e=this,t=e._self._c;return e.active?t("div",{staticClass:"wizard-tab-container"},[e._t("default",null,{active:e.active})],2):e._e()},r=[];const a={name:"WizardTab",props:{parent:{type:Object,required:!0},pos:{type:Number,required:!0},title:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function}},data(){return{active:!1,validationError:null,checked:!1}},mounted(){this.parent.addTab(this,this.pos)},beforeDestroy(){this.parent.removeTab(this)}},i=a;var n=s(1001),l=(0,n.Z)(i,o,r,!1,null,null,null);const c=l.exports},61090:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-process-parameters"},[0===e.process.parameters.length?t("p",[e._v("No editable parameters available.")]):t("Parameters",{attrs:{parameters:e.parameters,parent:e.process},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},r=[],a=s(52590),i=s(64578);const n={name:"ChooseProcessParameters",components:{Parameters:i.Z},props:{process:{type:Object,required:!0},value:{type:Object,required:!0}},computed:{parameters(){return this.process.parameters.map((e=>new a.ProcessParameter(e))).filter((e=>e.isEditable()))}}},l=n;var c=s(1001),p=(0,c.Z)(l,o,r,!1,null,null,null);const u=p.exports},18552:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step choose-processing-mode"},[e.isAuthenticated&&(e.supportsJobs||e.supportsSync)?[t("p",[e._v("Please select how you'd like to execute this workflow?")]),t("ul",{staticClass:"mode"},[e.supportsJobs?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"job",value:"job"},domProps:{checked:e._q(e.mode,"job")},on:{change:function(t){e.mode="job"}}}),t("label",{attrs:{for:"job"}},[t("strong",[e._v("Batch Jobs")]),t("br"),e._v(" Slower processing mode for large amounts of data. Creates and queues a batch job."),t("br"),e._v(" It is recommended to provide a title for the batch job: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.titleInput,expression:"titleInput"}],ref:"title",attrs:{type:"text"},domProps:{value:e.titleInput},on:{input:function(t){t.target.composing||(e.titleInput=t.target.value)}}})])]):e._e(),e.supportsSync?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"sync",value:"sync"},domProps:{checked:e._q(e.mode,"sync")},on:{change:function(t){e.mode="sync"}}}),e._m(0)]):e._e(),e.supportsSync?t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"model",value:""},domProps:{checked:e._q(e.mode,"")},on:{change:function(t){e.mode=""}}}),e._m(1)]):e._e()])]:t("p",[e._v(" The wizard has all information to create the workflow for you."),t("br"),e.isAuthenticated?[e._v("Unforntunately, this back-end can't process data,")]:[e._v("You are not logged in and thus you can't process data directly,")],e._v(" but you can insert the process into the visual model builder now. ")],2)],2)},r=[function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"sync"}},[t("strong",[e._v("Synchronous Processing")]),t("br"),e._v(" Fast processing mode for small amounts of data. ")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"model"}},[t("strong",[e._v("Don't execute")]),t("br"),e._v(" Only show the generated workflow in the visual model builder. You can then export it or you can run it later. ")])}],a=s(79879);const i={name:"ChooseProcessingMode",props:{value:{type:String,default:null},title:{type:String,default:""}},data(){return{mode:this.value}},computed:{...a.Z.mapState(["isAuthenticated"]),...a.Z.mapGetters(["supports"]),titleInput:{get(){return this.title},set(e){this.$emit("update:title",e)}},supportsJobs(){return this.supports("createJob")&&this.supports("startJob")},supportsSync(){return this.supports("computeResult")}},watch:{value(){this.mode=this.value},mode(){this.$emit("input",this.mode),"job"===this.mode&&this.$refs.title.select()},title(){this.$emit("update:title",this.title)}}},n=i;var l=s(1001),c=(0,l.Z)(n,o,r,!1,null,"449febe3",null);const p=c.exports},71484:(e,t,s)=>{s.d(t,{Z:()=>r});var o=s(58503);const r={components:{WizardTab:o["default"]},props:{parent:{type:Object,required:!0},options:{type:Object,default:()=>({})}},created(){for(let e in this.options)this[e]=this.options[e]}}}}]);
//# sourceMappingURL=7080.3d812581.js.map