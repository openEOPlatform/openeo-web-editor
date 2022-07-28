"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[5230],{47982:(t,e,s)=>{s.d(e,{Z:()=>d});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-component collections"},[e("SearchableList",{attrs:{data:t.collections,identifierKey:"id",summaryKey:"title",keywordsKey:"keywords",showKeywords:t.showKeywords,showSummaryOnExpand:!1,externalSearchTerm:t.searchTerm,sort:t.sort,offerDetails:t.offerDetails,heading:t.heading,collapsed:t.collapsed,loadAdditionalData:t.loadAdditionalData,allowCopy:""},on:{detailsToggled:t.detailsToggled},scopedSlots:t._u([{key:"heading",fn:function(e){return[t._t("heading",null,null,e)]}},t.missing?{key:"content-start",fn:function(){return[e("FederationMissingNotice",{attrs:{missing:t.missing,federation:t.federation}})]},proxy:!0}:null,{key:"summary",fn:function(e){return[t._t("summary",null,null,e)]}},{key:"details",fn:function(s){return[e("Collection",{attrs:{data:s.item,mapOptions:t.mapOptions,federation:t.federation},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(e){return[t._t("collection-before-description",null,null,e)]}},{key:"end",fn:function(e){return[t._t("collection-end",null,null,e)]}},{key:"spatial-extents",fn:function(e){return[t._t("collection-spatial-extents",null,null,e)]}},{key:"temporal-extents",fn:function(e){return[t._t("collection-temporal-extents",null,null,e)]}}],null,!0)})]}}],null,!0)})],1)},i=[],a=s(65973),o=s(15554);const r={name:"Collections",components:{Collection:()=>a.Z.loadAsyncComponent(Promise.all([s.e(5062),s.e(5834),s.e(4533),s.e(2483)]).then(s.bind(s,24533))),SearchableList:()=>a.Z.loadAsyncComponent(s.e(1276).then(s.bind(s,91276)))},mixins:[o.Z],props:{collections:{type:Array,default:()=>[]},mapOptions:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Collections"},collapsed:{type:Boolean,default:null},loadAdditionalData:{type:Function,default:null},showKeywords:{type:Boolean,default:!1},missing:{type:Array,default:null},...o.Z.props},beforeCreate(){a.Z.enableHtmlProps(this)},methods:{detailsToggled(...t){this.$emit("detailsToggled",...t)}}},l=r;var u=s(1001),h=(0,u.Z)(l,n,i,!1,null,null,null);const d=h.exports},29081:(t,e,s)=>{s.d(e,{Z:()=>c});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-component data-table"},[e("div",{staticClass:"menu"},[e("div",{staticClass:"toolbar"},[t._t("toolbar")],2),t.hasData?e("div",{staticClass:"filter"},[e("SearchBox",{attrs:{compact:!0},model:{value:t.filterValue,callback:function(e){t.filterValue=e},expression:"filterValue"}})],1):t._e()]),t.hasData?e("table",[e("thead",[e("tr",t._l(t.columns,(function(s,n){return e("th",{directives:[{name:"show",rawName:"v-show",value:!s.hide,expression:"!col.hide"}],key:s.name,class:t.thClasses(n),attrs:{title:t.thTitle(n)},on:{click:function(e){return t.enableSort(n)}}},[t._v(t._s(s.name))])})),0)]),e("tbody",[t._l(t.view,(function(s,n){return e("tr",{key:n},t._l(t.columns,(function(i,a){return e("td",{directives:[{name:"show",rawName:"v-show",value:!i.hide,expression:"!col.hide"}],key:`${i.name}_${n}`,class:[a,{edit:t.canEdit(i)}],attrs:{title:!!t.canEdit(i)&&"Double-click to change the value","data-value":!!i.stylable&&t.value(s,i,a)},on:{dblclick:function(e){return t.onDblClick(e,s,i,a)}}},[t._t(a,(function(){return[t.showEditField(s,i,a)?[e("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.saveEditField(e,s,i,a)}}},[e("input",{ref:"editField",refInFor:!0,attrs:{type:"text"},domProps:{value:t.value(s,i,a)},on:{blur:function(e){return t.saveEditField(e,s,i,a)},keyup:function(e){return t.resetEditFieldEsc(e,s,i,a)}}})])]:e("span",{domProps:{innerHTML:t._s(t.formattedValue(s,i,a))}})]}),{row:s,col:i,id:a})],2)})),0)})),t.hasData&&0==t.view.length?e("tr",{staticClass:"no-results"},[e("td",{attrs:{colspan:t.columnCount}},[t._v("No element matches your search criteria.")])]):t._e()],2)]):e("div",{staticClass:"no-data"},[t._v(t._s(t.noDataMessage))])])},i=[],a=s(65973),o=s(35834),r=s(25108);const l={name:"DataTable",components:{SearchBox:()=>Promise.resolve().then(s.bind(s,24929))},props:{columns:{type:Object,default:()=>({})},data:{type:Array,default:()=>[]}},data(){return{view:[],filterValue:null,primaryKey:null,noDataMessage:"No data available.",editField:null,sortState:{id:null,direction:null}}},watch:{data(){this.updateView()},filterValue(){this.updateView()},sortState(){this.updateView()},columns:{immediate:!0,handler(){for(let t in this.columns){let e=this.columns[t].sort;if(["asc","desc"].includes(e)){this.enableSort(t,e);break}}}}},computed:{columnCount(){return Object.keys(this.columns).length},hasData(){return this.data.length>0},hasFilter(){return"string"===typeof this.filterValue&&this.filterValue.length>0}},beforeCreate(){a.Z.enableHtmlProps(this)},created(){this.determinePrimaryKey()},methods:{canEdit(t){return"function"===typeof t.edit},showEditField(t,e,s){return this.canEdit(e)&&null!=this.editField&&this.editField[0]==t&&this.editField[1]==s},onDblClick(t,e,s,n){if(this.canEdit(s)){var i=this.value(e,s,n);if("boolean"===typeof i){var a=this.columns[n].edit;a(e)}else this.editField=[e,n],this.$nextTick((()=>this.$refs.editField[0].focus()));t.preventDefault(),t.stopPropagation()}},saveEditField(t,e,s,n){if(null!==this.editField&&this.canEdit(s)){var i=this.columns[n].edit;i(e,this.$refs.editField[0].value),this.editField=null,t.preventDefault(),t.stopPropagation()}},resetEditFieldEsc(t,e,s,n){"Escape"==t.key&&(this.editField=null)},determinePrimaryKey(){for(var t in this.columns)if(this.columns[t].primaryKey){this.primaryKey=t;break}},setNoData(t){"string"!=typeof t?a.Z.isObject(t)&&("object"===typeof t.data&&"object"===typeof t.config&&"object"===typeof t.headers&&(t=t.data),a.Z.isObject(t)&&"string"===typeof t.message)?this.noDataMessage=t.message:(r.warn(t),this.noDataMessage="Sorry, an unknown error has occured."):this.noDataMessage=t},value(t,e,s){var n;return n="object"===typeof t?t[s]:t,a.Z.isObject(e)&&"function"===typeof e.computedValue&&(n=e.computedValue(t,n)),n},formattedValue(t,e,s){return this.format(this.value(t,e,s),e)},thClasses(t){let e=this.columns[t],s=[t];return!1!==e.sort&&(s.push("sortable"),this.sortState.id===t&&s.push("sort-"+this.sortState.direction)),s},thTitle(t){let e=this.columns[t];return!1!==e.sort?this.sortState.id===t&&"asc"===this.sortState.direction?"Click to sort column in descending order":"Click to sort column in ascending order":null},enableSort(t,e=null){!1!==this.columns[t].sort&&(null===e&&(e=this.sortState.id===t&&"asc"===this.sortState.direction?"desc":"asc"),this.sortState={id:t,direction:e})},sort(t){let e=this.sortState.id;if(null===e||!this.columns[e])return t;let s=this.columns[e];return!1===s.sort?t:t.slice(0).sort(((t,n)=>{let i="function"===typeof s.sortFn?s.sortFn:a.Z.compareStringCaseInsensitive,o=i(t[e],n[e]);return"desc"===this.sortState.direction?-1*o:o}))},filter(t){if(!this.hasFilter)return t;var e=this.filterValue.toLowerCase();return t.filter((t=>{let s=[];for(var n in t){var i=this.columns[n];if(!("undefined"===typeof i||i.hasOwnProperty("filterable")&&!1===i.filterable)){var o=this.value(t,i,n);"number"!==typeof o&&"string"!==typeof o&&"boolean"!==typeof o||(o=o.toString(),s.push(o))}}return a.Z.search(e,s)}))},clearFilter(){this.filterValue="",this.updateView()},updateView(){Array.isArray(this.data)?this.view=this.sort(this.filter(this.data)):this.view=[]},format(t,e){return"string"!==typeof e.format?"function"===typeof e.format?e.format.call(this,t,e):o.DataTypes.format(t):"function"===typeof o.Formatters["format"+e.format]?o.Formatters["format"+e.format](t,e):void r.warn(e.format+" is an invalid formatter.")}}},u=l;var h=s(1001),d=(0,h.Z)(u,n,i,!1,null,null,null);const c=d.exports},14278:(t,e,s)=>{s.d(e,{Z:()=>d});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-component file-formats"},[e("SearchableList",{attrs:{data:t.fileFormats,summaryKey:"title",keywordsKey:"gis_data_types",showSummaryOnExpand:!1,externalSearchTerm:t.searchTerm,sort:t.sort,offerDetails:t.offerDetails,heading:t.heading,collapsed:t.collapsed},on:{detailsToggled:t.detailsToggled},scopedSlots:t._u([{key:"heading",fn:function(e){return[t._t("heading",null,null,e)]}},t.missing?{key:"content-start",fn:function(){return[e("FederationMissingNotice",{attrs:{missing:t.missing,federation:t.federation}})]},proxy:!0}:null,{key:"summary",fn:function(s){return[t._t("summary",(function(){return[e("strong",{staticClass:"inline"},[t._v(t._s(s.item.name))]),e("ul",{staticClass:"badges small inline"},[t.showAll&&"input"===s.item.type?e("li",{staticClass:"badge option1"},[t._v("Import")]):t._e(),t.showAll&&"output"===s.item.type?e("li",{staticClass:"badge option2"},[t._v("Export")]):t._e(),Array.isArray(s.item.gis_data_types)?t._l(s.item.gis_data_types,(function(s){return e("li",{key:s,staticClass:"badge gis"},[t._v(t._s(s))])})):t._e()],2),e("br"),e("small",[t._v(t._s(s.summary.summary))])]}),null,s)]}},{key:"details",fn:function(s){return[e("FileFormat",{attrs:{id:s.summary.identifier,format:s.item,type:s.item.type,federation:t.federation},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(){return[e("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(e){return[t._t("file-format-before-description",null,null,e)]}},{key:"end",fn:function(e){return[t._t("file-format-end",null,null,e)]}}],null,!0)})]}}],null,!0)})],1)},i=[],a=s(65973),o=s(15554);const r={name:"FileFormats",components:{SearchableList:()=>a.Z.loadAsyncComponent(s.e(1276).then(s.bind(s,91276))),FileFormat:()=>a.Z.loadAsyncComponent(s.e(2833).then(s.bind(s,12833)))},mixins:[o.Z],props:{formats:{type:Object,default:()=>({})},showInput:{type:Boolean,default:!0},showOutput:{type:Boolean,default:!0},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"File Formats"},collapsed:{type:Boolean,default:null},missing:{type:Array,default:null},...o.Z.props},computed:{showAll(){return this.showInput&&this.showOutput},typesToShow(){let t=[];return this.showInput&&t.push("input"),this.showOutput&&t.push("output"),t},fileFormats(){let t=[];for(let s of this.typesToShow)for(var e in this.formats[s]){let n=Object.assign({id:`${e}-${s}`,name:e,type:s},this.formats[s][e]);t.push(n)}return t}},beforeCreate(){a.Z.enableHtmlProps(this)},methods:{detailsToggled(...t){this.$emit("detailsToggled",...t)}}},l=r;var u=s(1001),h=(0,u.Z)(l,n,i,!1,null,null,null);const d=h.exports},39593:(t,e,s)=>{const n=s(34411),i=Symbol("max"),a=Symbol("length"),o=Symbol("lengthCalculator"),r=Symbol("allowStale"),l=Symbol("maxAge"),u=Symbol("dispose"),h=Symbol("noDisposeOnSet"),d=Symbol("lruList"),c=Symbol("cache"),f=Symbol("updateAgeOnGet"),m=()=>1;class p{constructor(t){if("number"===typeof t&&(t={max:t}),t||(t={}),t.max&&("number"!==typeof t.max||t.max<0))throw new TypeError("max must be a non-negative number");this[i]=t.max||1/0;const e=t.length||m;if(this[o]="function"!==typeof e?m:e,this[r]=t.stale||!1,t.maxAge&&"number"!==typeof t.maxAge)throw new TypeError("maxAge must be a number");this[l]=t.maxAge||0,this[u]=t.dispose,this[h]=t.noDisposeOnSet||!1,this[f]=t.updateAgeOnGet||!1,this.reset()}set max(t){if("number"!==typeof t||t<0)throw new TypeError("max must be a non-negative number");this[i]=t||1/0,v(this)}get max(){return this[i]}set allowStale(t){this[r]=!!t}get allowStale(){return this[r]}set maxAge(t){if("number"!==typeof t)throw new TypeError("maxAge must be a non-negative number");this[l]=t,v(this)}get maxAge(){return this[l]}set lengthCalculator(t){"function"!==typeof t&&(t=m),t!==this[o]&&(this[o]=t,this[a]=0,this[d].forEach((t=>{t.length=this[o](t.value,t.key),this[a]+=t.length}))),v(this)}get lengthCalculator(){return this[o]}get length(){return this[a]}get itemCount(){return this[d].length}rforEach(t,e){e=e||this;for(let s=this[d].tail;null!==s;){const n=s.prev;_(this,t,s,e),s=n}}forEach(t,e){e=e||this;for(let s=this[d].head;null!==s;){const n=s.next;_(this,t,s,e),s=n}}keys(){return this[d].toArray().map((t=>t.key))}values(){return this[d].toArray().map((t=>t.value))}reset(){this[u]&&this[d]&&this[d].length&&this[d].forEach((t=>this[u](t.key,t.value))),this[c]=new Map,this[d]=new n,this[a]=0}dump(){return this[d].map((t=>!g(this,t)&&{k:t.key,v:t.value,e:t.now+(t.maxAge||0)})).toArray().filter((t=>t))}dumpLru(){return this[d]}set(t,e,s){if(s=s||this[l],s&&"number"!==typeof s)throw new TypeError("maxAge must be a number");const n=s?Date.now():0,r=this[o](e,t);if(this[c].has(t)){if(r>this[i])return b(this,this[c].get(t)),!1;const o=this[c].get(t),l=o.value;return this[u]&&(this[h]||this[u](t,l.value)),l.now=n,l.maxAge=s,l.value=e,this[a]+=r-l.length,l.length=r,this.get(t),v(this),!0}const f=new w(t,e,r,n,s);return f.length>this[i]?(this[u]&&this[u](t,e),!1):(this[a]+=f.length,this[d].unshift(f),this[c].set(t,this[d].head),v(this),!0)}has(t){if(!this[c].has(t))return!1;const e=this[c].get(t).value;return!g(this,e)}get(t){return y(this,t,!0)}peek(t){return y(this,t,!1)}pop(){const t=this[d].tail;return t?(b(this,t),t.value):null}del(t){b(this,this[c].get(t))}load(t){this.reset();const e=Date.now();for(let s=t.length-1;s>=0;s--){const n=t[s],i=n.e||0;if(0===i)this.set(n.k,n.v);else{const t=i-e;t>0&&this.set(n.k,n.v,t)}}}prune(){this[c].forEach(((t,e)=>y(this,e,!1)))}}const y=(t,e,s)=>{const n=t[c].get(e);if(n){const e=n.value;if(g(t,e)){if(b(t,n),!t[r])return}else s&&(t[f]&&(n.value.now=Date.now()),t[d].unshiftNode(n));return e.value}},g=(t,e)=>{if(!e||!e.maxAge&&!t[l])return!1;const s=Date.now()-e.now;return e.maxAge?s>e.maxAge:t[l]&&s>t[l]},v=t=>{if(t[a]>t[i])for(let e=t[d].tail;t[a]>t[i]&&null!==e;){const s=e.prev;b(t,e),e=s}},b=(t,e)=>{if(e){const s=e.value;t[u]&&t[u](s.key,s.value),t[a]-=s.length,t[c].delete(s.key),t[d].removeNode(e)}};class w{constructor(t,e,s,n,i){this.key=t,this.value=e,this.length=s,this.now=n,this.maxAge=i||0}}const _=(t,e,s,n)=>{let i=s.value;g(t,i)&&(b(t,s),t[r]||(i=void 0)),i&&e.call(n,i.value,i.key,t)};t.exports=p}}]);
//# sourceMappingURL=5230.fe8eb9a4.js.map