(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07b0a294","chunk-11aa48a8"],{"0869":function(t,e,i){},2263:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"vue-component stac item"},[t._t("title",(function(){return[i("a",{staticClass:"anchor",attrs:{name:t.data.id}}),i("h2",[t._v(t._s(t.title))])]}),null,t.$props),t._t("before-description",null,null,t.$props),t.properties.description?i("summary",{staticClass:"description"},[i("Description",{attrs:{description:t.properties.description}}),t.properties.deprecated?i("DeprecationNotice",{attrs:{entity:"item"}}):t._e()],1):t._e(),t.thumbnails.length?i("section",{staticClass:"preview"},[i("h3",[t._v("Previews")]),i("div",{staticClass:"thumbnails"},t._l(t.thumbnails,(function(t){return i("a",{key:t.href,attrs:{href:t.href,target:"_blank"}},[i("img",{attrs:{src:t.href,title:t.title,alt:t.title||"Preview"}})])})),0)]):t._e(),i("section",{staticClass:"metadata properties"},[t.thumbnails.length?i("h3",[t._v("Metadata")]):t._e(),t.data.geometry||Array.isArray(t.data.bbox)?t._t("location",(function(){return[i("div",{staticClass:"tabular wrap"},[i("label",[t._v("Location")]),i("div",{ref:"mapContainer",staticClass:"value map"},[t.map?t._e():[t._v(" Latitudes: "+t._s(t.data.bbox[1])+" / "+t._s(t.data.bbox[3])+", Longitudes: "+t._s(t.data.bbox[0])+" / "+t._s(t.data.bbox[2])+" ")]],2)])]}),{geometry:t.data.geometry,bbox:t.data.bbox,mapOptions:t.mapOptions}):t._e(),i("StacFields",{attrs:{metadata:t.data,headingTag:"h4",ignore:t.ignoredFields}})],2),i("section",{staticClass:"assets"},[i("LinkList",{attrs:{links:t.assetLinks,heading:"Assets",headingTag:"h3"}})],1),i("section",{staticClass:"links"},[i("LinkList",{attrs:{links:t.data.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","parent","root","license","cite-as"]}})],1),t._t("end",null,null,t.$props)],2)},s=[],n=i("8205"),o=i("60a2"),r={name:"Item",mixins:[n["a"]],props:{...n["a"].props},data(){return{ignoredFields:["title","description","deprecated"]}},computed:{properties(){return o["a"].isObject(this.data.properties)?this.data.properties:{}},title(){return this.properties.title?`${this.properties.title} (${this.data.id})`:this.data.id},showMap(){return Boolean(this.data.geometry)}},methods:{addFeatures(){let t=this.map.leaflet.geoJSON(this.data);return t.setStyle({color:"#3388ff",fillOpacity:.2}),t}}},l=r,p=(i("eed3"),i("2877")),h=Object(p["a"])(l,a,s,!1,null,null,null);e["default"]=h.exports},8205:function(t,e,i){"use strict";var a=i("60a2"),s=i("fbdae");const n=["image/apng","image/gif","image/png","image/jpeg","image/webp"],o=["gif","png","jpg","jpeg","webp"];e["a"]={components:{Description:()=>i.e("chunk-adfa0f9c").then(i.bind(null,"8088")),DeprecationNotice:()=>i.e("chunk-aca32992").then(i.bind(null,"5dc7")),LinkList:()=>i.e("chunk-241547dc").then(i.bind(null,"4845")),StacFields:()=>i.e("chunk-48eff0d7").then(i.bind(null,"f21e"))},props:{data:{type:Object,default:()=>({})},mapOptions:{type:Object,default:()=>({}),validator:function(t){const e={height:"string",width:"string",wrapAroundAntimeridian:"boolean",scrollWheelZoom:"boolean"},i=Object.keys(e);return"object"==typeof t&&Object.keys(t).every(a=>-1!=i.indexOf(a)&&typeof t[a]==e[a])}}},data(){return{map:null}},computed:{leafletOptions(){return{height:this.mapOptions.height||"300px",width:this.mapOptions.width||"auto",noWrap:void 0===this.mapOptions.wrapAroundAntimeridian||!this.mapOptions.wrapAroundAntimeridian,scrollWheelZoom:void 0!==this.mapOptions.scrollWheelZoom&&this.mapOptions.scrollWheelZoom}},assetLinks(){return a["a"].isObject(this.data.assets)?Object.values(this.data.assets).filter(t=>!this.assetIsImage(t)).map(t=>(Array.isArray(t.role)&&t.roles.length>0&&(t.rel=t.roles.join(" "),delete t.roles),t)):[]},thumbnails(){return a["a"].isObject(this.data.assets)?Object.values(this.data.assets).filter(this.assetIsImage):[]}},watch:{data(){this.initMap()},showMap(t){t&&this.initMap()}},beforeCreate(){a["a"].enableHtmlProps(this)},mounted(){this.initMap()},methods:{assetIsImage(t){let e="string"===typeof t.href?t.href.split(".").pop():"";return Array.isArray(t.roles)&&(t.roles.includes("thumbnail")||t.roles.includes("overview"))&&(n.includes(t.type)||o.includes(e))},initLeafletPlugins(){},async initMap(){if(this.$refs.mapContainer||await this.$nextTick(),!this.$refs.mapContainer||null!==this.map||!this.showMap)return!1;let t=window.L;try{this.map={leaflet:null,instance:null,geometries:null};let o=()=>a["a"].isObject(window.L)&&s["Versions"].validate(window.L.version)&&s["Versions"].compare(window.L.version,"1.x.x","=");if(o()||(window.L=i("860c")),!o())return console.warn("Leaflet is not available"),!1;this.map.leaflet=window.L;let r=await i.e("chunk-74a7ee2a").then(i.t.bind(null,"6cc5",7));this.$root&&this.$root.$options.shadowRoot&&r.__inject__&&r.__inject__(this.$root.$options.shadowRoot);var e=this.map.leaflet.map(this.$refs.mapContainer,{scrollWheelZoom:this.leafletOptions.scrollWheelZoom});this.map.instance=e;var n=this.map.leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{name:"OpenStreetMap",attribution:'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',noWrap:this.leafletOptions.noWrap});return n.addTo(e),"function"===typeof this.addFeatures&&(this.map.geometries=this.addFeatures(),this.map.geometries&&this.map.geometries.addTo(e)),this.$refs.mapContainer.style.width=this.leafletOptions.width,this.$refs.mapContainer.style.height=this.leafletOptions.height,e.invalidateSize(!1),this.updateMapView(),"function"===typeof this.mapOptions.onAfterMapInit&&this.mapOptions.onAfterMapInit(e,this.map.geometries),window.L=t,!0}catch(o){return console.error(o),window.L=t,!1}},updateMapView(){if(this.map&&this.map.geometries){var t=this.map.geometries.getBounds(),e=this.map.instance.getBoundsZoom(t),i=Math.min(e,11);e>8?i-=3:e>5?i-=2:e>2&&i--,this.map.instance.fitBounds(t),this.map.instance.setZoom(i),this.map.instance.once("moveend zoomend",()=>this.map.instance.invalidateSize(!1))}}}}},eed3:function(t,e,i){"use strict";i("0869")}}]);
//# sourceMappingURL=chunk-07b0a294.f7415767.js.map