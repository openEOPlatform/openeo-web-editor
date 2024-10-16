(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[3249],{44924:(t,e,s)=>{"use strict";s.d(e,{A:()=>c});var a=s(86975),n=s(31572),i=s(71321),r=s.n(i);const o=["image/apng","image/gif","image/png","image/jpeg","image/webp"],l=["gif","png","jpg","jpeg","webp"],c={components:{Description:()=>Promise.all([s.e(7261),s.e(1194)]).then(s.bind(s,27261)),DeprecationNotice:()=>s.e(6238).then(s.bind(s,36238)),LinkList:()=>s.e(2810).then(s.bind(s,52810)),StacAsset:()=>Promise.all([s.e(7261),s.e(156),s.e(2919),s.e(4432),s.e(9140),s.e(2281),s.e(8053)]).then(s.bind(s,84890)),StacFields:()=>Promise.all([s.e(156),s.e(2919),s.e(4432),s.e(9140),s.e(2281),s.e(7123)]).then(s.bind(s,67123))},props:{data:{type:Object,default:()=>({})},mapOptions:{type:Object,default:()=>({}),validator:function(t){const e={height:"string",width:"string",basemap:"string",attribution:"string",wrapAroundAntimeridian:"boolean",scrollWheelZoom:"boolean"},s=Object.keys(e);return"object"==typeof t&&Object.keys(t).every((a=>-1!=s.indexOf(a)&&typeof t[a]==e[a]))}}},data(){return{map:null}},computed:{stac(){let t=a.A.deepClone(this.data);return r().stac(t)},leafletOptions(){return{height:this.mapOptions.height||"250px",width:this.mapOptions.width||"auto",basemap:this.mapOptions.basemap||"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:this.mapOptions.attribution||'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',noWrap:void 0===this.mapOptions.wrapAroundAntimeridian||!this.mapOptions.wrapAroundAntimeridian,scrollWheelZoom:void 0!==this.mapOptions.scrollWheelZoom&&this.mapOptions.scrollWheelZoom}},thumbnails(){return a.A.isObject(this.stac.assets)?Object.values(this.stac.assets).filter(this.assetIsImage):[]},hasAssets(){return a.A.size(this.stac.assets)>0}},watch:{data(){this.initMap()},showMap(t){t&&this.initMap()}},beforeCreate(){a.A.enableHtmlProps(this)},mounted(){this.initMap()},methods:{assetIsImage(t){let e="string"===typeof t.href?t.href.split(".").pop():"";return Array.isArray(t.roles)&&(t.roles.includes("thumbnail")||t.roles.includes("overview"))&&(o.includes(t.type)||l.includes(e))},initLeafletPlugins(){},async initMap(){if(this.$refs.mapContainer||await this.$nextTick(),!this.$refs.mapContainer||null!==this.map||!this.showMap)return!1;let t=window.L;try{this.map={leaflet:null,instance:null,geometries:null};let r=()=>a.A.isObject(window.L)&&n.Versions.validate(window.L.version)&&n.Versions.compare(window.L.version,"1.x.x","=");if(r()||(window.L=await Promise.resolve().then(s.t.bind(s,85525,23))),!r())return console.warn("Leaflet is not available"),!1;this.map.leaflet=window.L;let o=await s.e(6689).then(s.bind(s,16689));this.$root&&this.$root.$options.shadowRoot&&o.__inject__&&o.__inject__(this.$root.$options.shadowRoot);var e=this.map.leaflet.map(this.$refs.mapContainer,{scrollWheelZoom:this.leafletOptions.scrollWheelZoom});this.map.instance=e;var i=this.map.leaflet.tileLayer(this.leafletOptions.basemap,{name:"Basemap",attribution:this.leafletOptions.attribution,noWrap:this.leafletOptions.noWrap});return i.addTo(e),"function"===typeof this.addFeatures&&(this.map.geometries=this.addFeatures(),this.map.geometries&&this.map.geometries.addTo(e)),this.$refs.mapContainer.style.width=this.leafletOptions.width,this.$refs.mapContainer.style.height=this.leafletOptions.height,e.invalidateSize(!1),this.updateMapView(),"function"===typeof this.mapOptions.onAfterMapInit&&this.mapOptions.onAfterMapInit(e,this.map.geometries),window.L=t,!0}catch(r){return console.error(r),window.L=t,!1}},updateMapView(){if(this.map&&this.map.geometries){var t=this.map.geometries.getBounds(),e=this.map.instance.getBoundsZoom(t),s=Math.min(e,11);e>8?s-=3:e>5?s-=2:e>2&&s--,this.map.instance.fitBounds(t),this.map.instance.setZoom(s),this.map.instance.once("moveend zoomend",(()=>this.map.instance.invalidateSize(!1)))}}}}},3249:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>m});var a=function(){var t=this,e=t._self._c;return e("article",{staticClass:"vue-component stac collection"},[t._t("title",(function(){return[e("a",{staticClass:"anchor",attrs:{name:t.stac.id}}),e("h2",[t._v(t._s(t.stac.id))])]}),null,t.$props),t.stac.title?e("summary",[t._v(t._s(t.stac.title))]):t._e(),t.hasElements(t.stac.keywords)?e("section",{staticClass:"keywords"},[e("ul",{staticClass:"badges"},t._l(t.stac.keywords,(function(s){return e("li",{key:s,staticClass:"badge"},[t._v(t._s(s))])})),0)]):t._e(),t._t("before-description",null,null,t.$props),t.stac.description?e("section",{staticClass:"description"},[e("h3",[t._v("Description")]),e("Description",{attrs:{description:t.stac.description}}),t.stac.deprecated?e("DeprecationNotice",{attrs:{entity:"collection"}}):t._e(),t.supportedBy?e("FederationNotice",{attrs:{backends:t.supportedBy,federation:t.federation,entity:"collection"}}):t._e(),t.stac["federation:missing"]?e("FederationMissing",{attrs:{missing:t.stac["federation:missing"],federation:t.federation}}):t._e()],1):t._e(),e("section",{staticClass:"license"},[e("h3",[t._v("License")]),e("span",{domProps:{innerHTML:t._s(t.license)}})]),e("section",{directives:[{name:"show",rawName:"v-show",value:t.thumbnails.length,expression:"thumbnails.length"}],staticClass:"preview"},[e("h3",[t._v("Previews")]),e("div",{staticClass:"thumbnails"},t._l(t.thumbnails,(function(t){return e("a",{key:t.href,attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.href,title:t.title,alt:t.title||"Preview"}})])})),0)]),t.temporalIntervals.length||t.boundingBoxes.length?e("section",{staticClass:"extent"},[t.boundingBoxes.length?e("div",[e("h3",[t._v("Spatial Extent")]),t._t("spatial-extents",(function(){return[t.worldwide?e("span",{staticClass:"worldwide"},[e("i",{staticClass:"fas fa-globe"}),t._v(" Worldwide")]):e("div",{ref:"mapContainer",staticClass:"map"},[t.map?t._e():t._l(t.boundingBoxes,(function(s,a){return e("ul",{key:a},[e("li",[t._v("Latitudes: "+t._s(s[1])+" / "+t._s(s[3])+", Longitudes: "+t._s(s[0])+" / "+t._s(s[2]))])])}))],2)]}),{extents:t.boundingBoxes,mapOptions:t.mapOptions,worldwide:t.worldwide})],2):t._e(),t.temporalIntervals.length?e("div",[e("h3",[t._v("Temporal Extent")]),t._t("temporal-extents",(function(){return[t.temporalIntervals.length>1?t._l(t.temporalIntervals,(function(s,a){return e("ul",{key:a},[0!==a?e("li",{domProps:{innerHTML:t._s(t.formatters.formatTemporalExtent(s))}}):t._e()])})):e("span",{domProps:{innerHTML:t._s(t.formatters.formatTemporalExtent(t.temporalIntervals[0]))}})]}),{extents:t.temporalIntervals.length>0})],2):t._e()]):t._e(),t.hasProviders?e("section",{staticClass:"providers"},[e("h3",[t._v("Providers")]),e("ol",t._l(t.stac.providers,(function(s){return e("li",{key:s.name},[s.url?e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(t._s(s.name))]):[t._v(t._s(s.name))],t.hasElements(s.roles)?[e("ul",{staticClass:"badges small inline"},t._l(s.roles,(function(s){return e("li",{key:s,staticClass:"badge provider-role"},[t._v(t._s(s))])})),0)]:t._e(),s.description?e("Description",{attrs:{description:s.description,compact:!0}}):t._e()],2)})),0)]):t._e(),t.hasDimensions?e("section",{staticClass:"dimensions"},[e("h3",[t._v("Data Cube Dimensions")]),e("ul",t._l(t.stac["cube:dimensions"],(function(s,a){return e("li",{key:a,staticClass:"dimension"},[e("h4",["bands"===s.type?e("a",{staticClass:"name",attrs:{href:"#summary_bands"},on:{click:t.scrollToBands}},[t._v(t._s(a))]):e("span",{staticClass:"name"},[t._v(t._s(a))]),e("ul",{staticClass:"type badges small inline"},[e("li",{staticClass:"badge"},[t._v(t._s(s.type))])])]),s.description?e("Description",{attrs:{description:s.description}}):t._e(),s.axis?e("div",{staticClass:"tabular"},[e("label",[t._v("Axis:")]),e("div",{staticClass:"value"},[t._v(t._s(s.axis))])]):t._e(),e("div",{staticClass:"tabular"},[e("label",[t._v("Labels:")]),s.extent?e("div",{staticClass:"value"},["temporal"===s.type?e("span",{domProps:{innerHTML:t._s(t.formatters.formatTemporalExtent(s.extent))}}):e("span",{domProps:{innerHTML:t._s(t.formatters.formatExtent(s.extent))}})]):Array.isArray(s.values)&&s.values.length>0?e("ul",{staticClass:"value comma-separated-list"},t._l(s.values,(function(s){return e("li",{key:s},[t._v(t._s(s))])})),0):e("div",{staticClass:"value"},[e("i",[t._v("n/a")])])]),"undefined"!==typeof s.step?e("div",{staticClass:"tabular"},[e("label",[t._v("Steps:")]),e("div",{staticClass:"value"},[null===s.step?[t._v("irregularly spaced")]:"temporal"===s.type?[t._v(t._s(t.formatDuration(s.step)))]:[t._v(t._s(s.step))]],2)]):t._e(),"undefined"!==typeof s.reference_system?e("div",{staticClass:"tabular"},[e("label",[t._v("Reference System:")]),e("div",{staticClass:"value"},["number"===typeof s.reference_system?e("div",{staticClass:"epsg",domProps:{innerHTML:t._s(t.formatters.formatEPSG(s.reference_system))}}):"string"===typeof s.reference_system?e("div",{staticClass:"wkt2",domProps:{innerHTML:t._s(t.formatters.formatWKT2(s.reference_system))}}):"object"===typeof s.reference_system?e("ObjectTree",{staticClass:"projjson",attrs:{data:s.reference_system}}):[t._v(t._s(s.reference_system))]],2)]):t._e()],1)})),0)]):t._e(),e("StacFields",{staticClass:"summaries",attrs:{type:"Collection",metadata:t.stac,ignore:t.ignoredFields}}),t.hasAssets?e("section",{staticClass:"assets"},[e("h3",[t._v("Assets")]),e("ul",{staticClass:"list"},t._l(t.stac.assets,(function(s,a){return e("StacAsset",{key:a,attrs:{asset:s,id:a,context:t.stac}})})),1)]):t._e(),e("section",{staticClass:"links"},[e("LinkList",{attrs:{links:t.stac.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","parent","root","license","cite-as"]}})],1),t._t("end",null,null,t.$props)],2)},n=[],i=s(86975),r=s(74870),o=s(35254),l=s(44924),c=s(99710);const p={name:"Collection",components:{ObjectTree:()=>s.e(2327).then(s.bind(s,2327))},mixins:[l.A,o.A],props:{...l.A.props,...o.A.props},data(){return{ignoredFields:["federation:backends"],formatters:r.Formatters}},computed:{supportedBy(){return i.A.isObject(this.stac.summary)&&Array.isArray(this.stac.summary["federation:backends"])?this.stac.summary["federation:backends"]:Array.isArray(this.stac["federation:backends"])?this.stac["federation:backends"]:void 0},showMap(){return this.boundingBoxes.length>0&&!this.worldwide},temporalIntervals(){let t=this.stac.extent;return i.A.isObject(t)&&i.A.isObject(t.temporal)&&i.A.size(t.temporal.interval)>0?t.temporal.interval.filter((t=>Array.isArray(t)&&t.length>=2&&t.filter((t=>"string"===typeof t)).length>0)):[]},boundingBoxes(){let t=this.stac.extent;return i.A.isObject(t)&&i.A.isObject(t.spatial)&&i.A.size(t.spatial.bbox)>0?t.spatial.bbox.filter((t=>Array.isArray(t)&&t.length>=4)):[]},worldwide(){if(1!==this.boundingBoxes.length)return!1;let t=this.boundingBoxes[0];return-180==Math.round(t[0])&&-90==Math.round(t[1])&&180==Math.round(t[2])&&90==Math.round(t[3])},hasProviders(){return i.A.size(this.stac.providers)>0},hasDimensions(){return i.A.size(this.stac["cube:dimensions"])>0},license(){return"string"===typeof this.stac.license&&0!==this.stac.license.length&&r.Formatters.formatLicense(this.stac.license,null,null,this.stac)}},methods:{addFeatures(){try{L.Wrapped=s(8859)}catch(a){console.warn(`Leaflet Antimeridian plugin is not available: ${a.message}`)}let t=L.featureGroup(),e=this.boundingBoxes.length>1?this.boundingBoxes.slice(1):this.boundingBoxes;for(let s of e){let e,a=[[s[1],s[0]],[s[3],s[0]],[s[3],s[2]],[s[1],s[2]]];e=L.Wrapped&&s[2]<s[0]?new L.Wrapped.Polygon(a):L.polygon(a),e.setStyle({color:"#3388ff",fillOpacity:.2}),t.addLayer(e)}return t},scrollToBands(t){let e=this.$el.querySelector("#field_bands");e&&(e.scrollIntoView(),e.classList.add("highlight-box"),setTimeout((()=>{e.classList.remove("highlight-box")}),5e3)),t.preventDefault()},hasElements(t){return"object"===typeof t&&null!==t&&Object.keys(t).length>0},formatDuration(t){if("string"===typeof t)try{return c.isoDuration.setLocales({en:c.en}),(0,c.isoDuration)(t).humanize("en")}catch(e){console.warn(e)}return"n/a"}}},h=p;var d=s(81656),u=(0,d.A)(h,a,n,!1,null,null,null);const m=u.exports},8859:function(t,e){(function(t,s){s(e)})(0,(function(t){"use strict";var e="1.0.0+master.7986dc5";function s(t){return"number"===typeof t?t?t<0?-1:1:0:NaN}function a(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng){if(t.lat>e.lat){var s=t;t=e,e=s}var a=360-Math.abs(t.lng-e.lng),n=e.lat-t.lat,i=Math.abs(180-Math.abs(t.lng));return t.lat+n*i/a}throw new Error("In order to calculate the Antimeridian latitude, two valid LatLngs are required.")}function n(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng)return s(t.lng)*s(e.lng)<0;throw new Error("In order to calculate whether two LatLngs cross a meridian, two valid LatLngs are required.")}function i(t,e,s,a){if(!(t instanceof Array&&e instanceof L.Bounds&&s instanceof L.LatLng&&a instanceof L.Map))throw new Error("In order to push a LatLng into a ring, the ring point array, the LatLng, the projectedBounds, and the map must all be valid.");t.push(a.latLngToLayerPoint(s)),e.extend(t[t.length-1])}function r(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng)return n(t,e)&&360-Math.abs(t.lng)-Math.abs(e.lng)<180;throw new Error("In order to calculate whether the ring created by two LatLngs should be broken, two valid LatLngs are required.")}function o(t,e,n,r,o){if(t instanceof L.LatLng&&e instanceof L.LatLng&&n instanceof Array&&r instanceof L.Bounds&&o instanceof L.Map){var l=n[n.length-1],c=a(t,e),p=[new L.LatLng(c,180),new L.LatLng(c,-180)];return s(t.lng)>0?i(l,r,p.shift(),o):i(l,r,p.pop(),o),p.pop()}throw new Error("In order to break a ring, all the inputs must exist and be valid.")}var l=L.Polyline.extend({_projectLatlngs:function(t,e,s){var a=t[0]instanceof L.LatLng;if(a)this._createRings(t,e,s);else for(var n=0;n<t.length;n++)this._projectLatlngs(t[n],e,s)},_createRings:function(t,e,s){var a=t.length;e.push([]);for(var n=0;n<a;n++){var l=this._getCompareLatLng(n,a,t),c=t[n];if(i(e[e.length-1],s,t[n],this._map),l&&r(l,c)){var p=o(c,l,e,s,this._map);this._startNextRing(e,s,p)}}},_getCompareLatLng:function(t,e,s){return t+1<e?s[t+1]:null},_startNextRing:function(t,e,s){var a=[];t.push(a),i(a,e,s,this._map)}});function c(t,e){return new L.Wrapped.Polyline(t,e)}var p=L.Polygon.extend({_projectLatlngs:function(t,e,s){var a=t[0]instanceof L.LatLng;if(a)this._createRings(t,e,s);else for(var n=0;n<t.length;n++)this._projectLatlngs(t[n],e,s)},_createRings:function(t,e,s){var a=t.length;e.push([]);for(var n=0;n<a;n++){var l=this._getCompareLatLng(n,a,t),c=t[n];if(i(e[e.length-1],s,c,this._map),r(l,c)){var p=o(c,l,e,s,this._map);this._startNextRing(e,s,p,n===a-1)}}this._checkConcaveRings(e),this._joinLastRing(e,t)},_startNextRing:function(t,e,s,a){var n;a?(n=t[0],n.unshift(this._map.latLngToLayerPoint(s)),e.extend(n[0])):(n=[],t.push(n),i(n,e,s,this._map))},_getCompareLatLng:function(t,e,s){return t+1<e?s[t+1]:s[0]},_joinLastRing:function(t,e){var s=t[0],a=t[t.length-1];if(t.length>1&&(2===s.length||2===a.length)&&!n(e[0],e[e.length-1])){for(var i=a.length,r=0;r<i;r++)s.unshift(a.pop());t.pop()}},_checkConcaveRings:function(t){for(var e=this._map.layerPointToLatLng(t[0][0]),s=0;s<=t.length-3;s++){var a=this._map.layerPointToLatLng(t[s+1][0]),i=this._map.layerPointToLatLng(t[s+2][0]);if(n(e,a)&&n(a,i)){var r=t[0],o=t[s+2],l=r.concat(o);t.splice(s+2,1),t.splice(0,1,l)}}}});function h(t,e){return new L.Wrapped.Polygon(t,e)}t.version=e,t.Polyline=l,t.wrappedPolyline=c,t.Polygon=p,t.wrappedPolygon=h,t.calculateAntimeridianLat=a,t.isCrossMeridian=n,t.isBreakRing=r,t.sign=s}))}}]);
//# sourceMappingURL=3249.71117480.js.map