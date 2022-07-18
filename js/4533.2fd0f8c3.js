(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[4533],{8168:(t,e,s)=>{"use strict";s.d(e,{I3:()=>P,en:()=>M});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(){return n=Object.assign||function(t){for(var e,s=1,n=arguments.length;s<n;s++)for(var a in e=arguments[s],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},n.apply(this,arguments)},a="\\d+(?:[\\.,]\\d+)?",i="("+a+"W)",r="("+a+"Y)?("+a+"M)?("+a+"D)?",o="T("+a+"H)?("+a+"M)?("+a+"S)?",l="^P(?:"+i+"|"+r+"(?:"+o+")?)$",c=new RegExp(l),u=["weeks","years","months","days","hours","minutes","seconds"],p={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"S",weeks:"W"},h=Object.freeze({weeks:0,years:0,months:0,days:0,hours:0,minutes:0,seconds:0}),d=function(t){var e=t.match(c);if(!e)throw new Error("Invalid duration string");var s=e.slice(1).reduce((function(t,e,s){return t[u[s]]=parseFloat(e)||0,t}),{});return s},f=function(t){return t.weeks&&t.weeks>0?Object.assign({},h,{weeks:t.weeks}):u.reduce((function(e,s){var a;return n(n({},e),(a={},a[s]=t[s]||0,a))}),{})},m={locales:{},options:{},setLocales:function(t,e){this.locales=n(n({},this.locales),t),e&&(this.options=n(n({},this.options),e))},getLangConfig:function(t){var e=this.locales[t];if(!e&&this.options.fallbackLocale&&(e=this.locales[this.options.fallbackLocale]),!e)throw new Error("isoDuration: Translations for language: "+t+" are not provided");return e}},g=function(t){for(var e=["years","months","days"],s="",n=0,a=e;n<a.length;n++){var i=a[n];t[i]&&(s+=""+t[i]+p[i])}return s},v=function(t){for(var e=["hours","minutes","seconds"],s="",n=0,a=e;n<a.length;n++){var i=a[n];t[i]&&(s+=""+t[i]+p[i])}return s},_=function(t){if(t.weeks>0)return"P"+t.weeks+"W";var e="P",s=g(t);s&&(e+=s);var n=v(t);return n&&(e+="T"+n),s||n||(e+="0D"),e},y=function(t,e){var s=m.getLangConfig(e);return t.weeks+" "+s.weeks(t.weeks)},b=function(t,e,s){for(var n=m.getLangConfig(e),a="",i=["years","months","days","hours","minutes","seconds"],r=0,o=0;o<i.length;o++){var l=i[o],c=t[l];if(c&&(""!==a&&(a+=" "),a+=c+" "+n[l](c),r++,s&&s.largest&&s.largest<=r))break}return a},L=function(t,e,s){return t.weeks>0?y(t,e):b(t,e,s)},w=["seconds","minutes","hours","days","months"],C=function(t){return function(e){return{nextUnitValue:Math.floor(e/t),value:e%t}}},k=function(t,e){return new Date(e,t+1,0).getDate()},x={seconds:C(60),minutes:C(60),hours:C(24),days:function(t,e){var s=e?new Date(e.getTime()):new Date,n=t,a=0,i=k(s.getMonth(),s.getFullYear());while(n>i)n-=i,a++,s.setMonth(s.getMonth()+1),i=k(s.getMonth(),s.getFullYear());return{nextUnitValue:a,value:n}},months:C(12)},O=function(t,e){for(var s=n({},t),a=0;a<w.length;a++){var i=w[a],r=s[i];if(r>0){var o=x[i](r,e);if(s[i]=o.value,o.nextUnitValue){var l="months"===i?"years":w[a+1];s[l]=s[l]+o.nextUnitValue}}}return s},j=function(){function t(t){this.durationObj=t}return t.prototype.parse=function(){return this.durationObj},t.prototype.toString=function(){return _(this.durationObj)},t.prototype.humanize=function(t,e){return L(this.durationObj,t,e)},t.prototype.normalize=function(t){return this.durationObj=O(this.durationObj,t),this},t.prototype.isEmpty=function(){var t=this;return Object.keys(this.durationObj).every((function(e){return 0===t.durationObj[e]}))},t}();var M={years:function(t){return"year"+(1===t?"":"s")},months:function(t){return"month"+(1===t?"":"s")},weeks:function(t){return"week"+(1===t?"":"s")},days:function(t){return"day"+(1===t?"":"s")},hours:function(t){return"hour"+(1===t?"":"s")},minutes:function(t){return"minute"+(1===t?"":"s")},seconds:function(t){return"second"+(1===t?"":"s")},decimal:"."};function P(t){return new j("string"===typeof t?d(t):f(t))}P.setLocales=function(t,e){m.setLocales(t,e)}},27428:(t,e,s)=>{"use strict";s.d(e,{Z:()=>u});var n=s(65973),a=s(52590),i=s(95019),r=s.n(i),o=s(25108);const l=["image/apng","image/gif","image/png","image/jpeg","image/webp"],c=["gif","png","jpg","jpeg","webp"],u={components:{Description:()=>Promise.all([s.e(9856),s.e(8922)]).then(s.bind(s,79856)),DeprecationNotice:()=>s.e(9200).then(s.bind(s,79200)),LinkList:()=>s.e(8613).then(s.bind(s,38613)),StacAsset:()=>Promise.all([s.e(5062),s.e(5834),s.e(9856),s.e(9341)]).then(s.bind(s,35529)),StacFields:()=>Promise.all([s.e(5062),s.e(5834),s.e(4568)]).then(s.bind(s,64568))},props:{data:{type:Object,default:()=>({})},mapOptions:{type:Object,default:()=>({}),validator:function(t){const e={height:"string",width:"string",basemap:"string",attribution:"string",wrapAroundAntimeridian:"boolean",scrollWheelZoom:"boolean"},s=Object.keys(e);return"object"==typeof t&&Object.keys(t).every((n=>-1!=s.indexOf(n)&&typeof t[n]==e[n]))}}},data(){return{map:null}},computed:{stac(){let t=n.Z.deepClone(this.data);return r().stac(t)},leafletOptions(){return{height:this.mapOptions.height||"250px",width:this.mapOptions.width||"auto",basemap:this.mapOptions.basemap||"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:this.mapOptions.attribution||'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',noWrap:void 0===this.mapOptions.wrapAroundAntimeridian||!this.mapOptions.wrapAroundAntimeridian,scrollWheelZoom:void 0!==this.mapOptions.scrollWheelZoom&&this.mapOptions.scrollWheelZoom}},thumbnails(){return n.Z.isObject(this.stac.assets)?Object.values(this.stac.assets).filter(this.assetIsImage):[]},hasAssets(){return n.Z.size(this.stac.assets)>0}},watch:{data(){this.initMap()},showMap(t){t&&this.initMap()}},beforeCreate(){n.Z.enableHtmlProps(this)},mounted(){this.initMap()},methods:{assetIsImage(t){let e="string"===typeof t.href?t.href.split(".").pop():"";return Array.isArray(t.roles)&&(t.roles.includes("thumbnail")||t.roles.includes("overview"))&&(l.includes(t.type)||c.includes(e))},initLeafletPlugins(){},async initMap(){if(this.$refs.mapContainer||await this.$nextTick(),!this.$refs.mapContainer||null!==this.map||!this.showMap)return!1;let t=window.L;try{this.map={leaflet:null,instance:null,geometries:null};let r=()=>n.Z.isObject(window.L)&&a.Versions.validate(window.L.version)&&a.Versions.compare(window.L.version,"1.x.x","=");if(r()||(window.L=await Promise.resolve().then(s.t.bind(s,18031,23))),!r())return o.warn("Leaflet is not available"),!1;this.map.leaflet=window.L;let l=await s.e(3729).then(s.bind(s,13729));this.$root&&this.$root.$options.shadowRoot&&l.__inject__&&l.__inject__(this.$root.$options.shadowRoot);var e=this.map.leaflet.map(this.$refs.mapContainer,{scrollWheelZoom:this.leafletOptions.scrollWheelZoom});this.map.instance=e;var i=this.map.leaflet.tileLayer(this.leafletOptions.basemap,{name:"Basemap",attribution:this.leafletOptions.attribution,noWrap:this.leafletOptions.noWrap});return i.addTo(e),"function"===typeof this.addFeatures&&(this.map.geometries=this.addFeatures(),this.map.geometries&&this.map.geometries.addTo(e)),this.$refs.mapContainer.style.width=this.leafletOptions.width,this.$refs.mapContainer.style.height=this.leafletOptions.height,e.invalidateSize(!1),this.updateMapView(),"function"===typeof this.mapOptions.onAfterMapInit&&this.mapOptions.onAfterMapInit(e,this.map.geometries),window.L=t,!0}catch(r){return o.error(r),window.L=t,!1}},updateMapView(){if(this.map&&this.map.geometries){var t=this.map.geometries.getBounds(),e=this.map.instance.getBoundsZoom(t),s=Math.min(e,11);e>8?s-=3:e>5?s-=2:e>2&&s--,this.map.instance.fitBounds(t),this.map.instance.setZoom(s),this.map.instance.once("moveend zoomend",(()=>this.map.instance.invalidateSize(!1)))}}}}},24533:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>m});var n=function(){var t=this,e=t._self._c;return e("article",{staticClass:"vue-component stac collection"},[t._t("title",(function(){return[e("a",{staticClass:"anchor",attrs:{name:t.stac.id}}),e("h2",[t._v(t._s(t.stac.id))])]}),null,t.$props),t.stac.title?e("summary",[t._v(t._s(t.stac.title))]):t._e(),t.hasElements(t.stac.keywords)?e("section",{staticClass:"keywords"},[e("ul",{staticClass:"badges"},t._l(t.stac.keywords,(function(s){return e("li",{key:s,staticClass:"badge"},[t._v(t._s(s))])})),0)]):t._e(),t._t("before-description",null,null,t.$props),t.stac.description?e("section",{staticClass:"description"},[e("h3",[t._v("Description")]),e("Description",{attrs:{description:t.stac.description}}),t.stac.deprecated?e("DeprecationNotice",{attrs:{entity:"collection"}}):t._e(),t.supportedBy?e("FederationNotice",{attrs:{backends:t.supportedBy,federation:t.federation,entity:"collection"}}):t._e(),t.stac["federation:missing"]?e("FederationMissing",{attrs:{missing:t.stac["federation:missing"],federation:t.federation}}):t._e()],1):t._e(),e("section",{staticClass:"license"},[e("h3",[t._v("License")]),e("span",{domProps:{innerHTML:t._s(t.license)}})]),e("section",{directives:[{name:"show",rawName:"v-show",value:t.thumbnails.length,expression:"thumbnails.length"}],staticClass:"preview"},[e("h3",[t._v("Previews")]),e("div",{staticClass:"thumbnails"},t._l(t.thumbnails,(function(t){return e("a",{key:t.href,attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.href,title:t.title,alt:t.title||"Preview"}})])})),0)]),t.temporalIntervals.length||t.boundingBoxes.length?e("section",{staticClass:"extent"},[t.boundingBoxes.length?e("div",[e("h3",[t._v("Spatial Extent")]),t._t("spatial-extents",(function(){return[t.worldwide?e("span",{staticClass:"worldwide"},[e("i",{staticClass:"fas fa-globe"}),t._v(" Worldwide")]):e("div",{ref:"mapContainer",staticClass:"map"},[t.map?t._e():t._l(t.boundingBoxes,(function(s,n){return e("ul",{key:n},[e("li",[t._v("Latitudes: "+t._s(s[1])+" / "+t._s(s[3])+", Longitudes: "+t._s(s[0])+" / "+t._s(s[2]))])])}))],2)]}),{extents:t.boundingBoxes,mapOptions:t.mapOptions,worldwide:t.worldwide})],2):t._e(),t.temporalIntervals.length?e("div",[e("h3",[t._v("Temporal Extent")]),t._t("temporal-extents",(function(){return[t.temporalIntervals.length>1?t._l(t.temporalIntervals,(function(s,n){return e("ul",{key:n},[0!==n?e("li",{domProps:{innerHTML:t._s(t.formatters.formatTemporalExtent(s))}}):t._e()])})):e("span",{domProps:{innerHTML:t._s(t.formatters.formatTemporalExtent(t.temporalIntervals[0]))}})]}),{extents:t.temporalIntervals.length>0})],2):t._e()]):t._e(),t.hasProviders?e("section",{staticClass:"providers"},[e("h3",[t._v("Providers")]),e("ol",t._l(t.stac.providers,(function(s){return e("li",{key:s.name},[s.url?e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(t._s(s.name))]):[t._v(t._s(s.name))],t.hasElements(s.roles)?[e("ul",{staticClass:"badges small inline"},t._l(s.roles,(function(s){return e("li",{key:s,staticClass:"badge provider-role"},[t._v(t._s(s))])})),0)]:t._e(),s.description?e("Description",{attrs:{description:s.description,compact:!0}}):t._e()],2)})),0)]):t._e(),t.hasDimensions?e("section",{staticClass:"dimensions"},[e("h3",[t._v("Data Cube Dimensions")]),e("ul",t._l(t.stac["cube:dimensions"],(function(s,n){return e("li",{key:n,staticClass:"dimension"},[e("h4",["bands"===s.type?e("a",{staticClass:"name",attrs:{href:"#summary_eo:bands"},on:{click:t.scrollToBands}},[t._v(t._s(n))]):e("span",{staticClass:"name"},[t._v(t._s(n))]),e("ul",{staticClass:"type badges small inline"},[e("li",{staticClass:"badge"},[t._v(t._s(s.type))])])]),s.description?e("Description",{attrs:{description:s.description}}):t._e(),s.axis?e("div",{staticClass:"tabular"},[e("label",[t._v("Axis:")]),e("div",{staticClass:"value"},[t._v(t._s(s.axis))])]):t._e(),e("div",{staticClass:"tabular"},[e("label",[t._v("Labels:")]),s.extent?e("div",{staticClass:"value"},["temporal"===s.type?e("span",{domProps:{innerHTML:t._s(t.formatters.formatTemporalExtent(s.extent))}}):e("span",{domProps:{innerHTML:t._s(t.formatters.formatExtent(s.extent))}})]):Array.isArray(s.values)&&s.values.length>0?e("ul",{staticClass:"value comma-separated-list"},t._l(s.values,(function(s){return e("li",{key:s},[t._v(t._s(s))])})),0):e("div",{staticClass:"value"},[e("i",[t._v("n/a")])])]),"undefined"!==typeof s.step?e("div",{staticClass:"tabular"},[e("label",[t._v("Steps:")]),e("div",{staticClass:"value"},[null===s.step?[t._v("irregularly spaced")]:"temporal"===s.type?[t._v(t._s(t.formatDuration(s.step)))]:[t._v(t._s(s.step))]],2)]):t._e(),"undefined"!==typeof s.reference_system?e("div",{staticClass:"tabular"},[e("label",[t._v("Reference System:")]),e("div",{staticClass:"value"},["number"===typeof s.reference_system?e("div",{staticClass:"epsg",domProps:{innerHTML:t._s(t.formatters.formatEPSG(s.reference_system))}}):"string"===typeof s.reference_system?e("div",{staticClass:"wkt2",domProps:{innerHTML:t._s(t.formatters.formatWKT2(s.reference_system))}}):"object"===typeof s.reference_system?e("ObjectTree",{staticClass:"projjson",attrs:{data:s.reference_system}}):[t._v(t._s(s.reference_system))]],2)]):t._e()],1)})),0)]):t._e(),e("StacFields",{staticClass:"summaries",attrs:{type:"Collection",metadata:t.stac,ignore:t.ignoredFields}}),t.hasAssets?e("section",{staticClass:"assets"},[e("h3",[t._v("Assets")]),e("ul",{staticClass:"list"},t._l(t.stac.assets,(function(s,n){return e("StacAsset",{key:n,attrs:{asset:s,id:n,context:t.stac}})})),1)]):t._e(),e("section",{staticClass:"links"},[e("LinkList",{attrs:{links:t.stac.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","parent","root","license","cite-as"]}})],1),t._t("end",null,null,t.$props)],2)},a=[],i=s(65973),r=s(35834),o=s(15554),l=s(27428),c=s(8168),u=s(25108);const p={name:"Collection",components:{ObjectTree:()=>s.e(2458).then(s.bind(s,2458))},mixins:[l.Z,o.Z],props:{...l.Z.props,...o.Z.props},data(){return{ignoredFields:["federation:backends"],formatters:r.Formatters}},computed:{supportedBy(){return i.Z.isObject(this.stac.summary)&&Array.isArray(this.stac.summary["federation:backends"])?this.stac.summary["federation:backends"]:Array.isArray(this.stac["federation:backends"])?this.stac["federation:backends"]:void 0},showMap(){return this.boundingBoxes.length>0&&!this.worldwide},temporalIntervals(){let t=this.stac.extent;return i.Z.isObject(t)&&i.Z.isObject(t.temporal)&&i.Z.size(t.temporal.interval)>0?t.temporal.interval.filter((t=>Array.isArray(t)&&t.length>=2&&t.filter((t=>"string"===typeof t)).length>0)):[]},boundingBoxes(){let t=this.stac.extent;return i.Z.isObject(t)&&i.Z.isObject(t.spatial)&&i.Z.size(t.spatial.bbox)>0?t.spatial.bbox.filter((t=>Array.isArray(t)&&t.length>=4)):[]},worldwide(){if(1!==this.boundingBoxes.length)return!1;let t=this.boundingBoxes[0];return-180==Math.round(t[0])&&-90==Math.round(t[1])&&180==Math.round(t[2])&&90==Math.round(t[3])},hasProviders(){return i.Z.size(this.stac.providers)>0},hasDimensions(){return i.Z.size(this.stac["cube:dimensions"])>0},license(){return"string"===typeof this.stac.license&&0!==this.stac.license.length&&r.Formatters.formatLicense(this.stac.license,null,null,this.stac)}},methods:{addFeatures(){try{L.Wrapped=s(5602)}catch(n){u.warn(`Leaflet Antimeridian plugin is not available: ${n.message}`)}let t=L.featureGroup(),e=this.boundingBoxes.length>1?this.boundingBoxes.slice(1):this.boundingBoxes;for(let s of e){let e,n=[[s[1],s[0]],[s[3],s[0]],[s[3],s[2]],[s[1],s[2]]];e=L.Wrapped&&s[2]<s[0]?new L.Wrapped.Polygon(n):L.polygon(n),e.setStyle({color:"#3388ff",fillOpacity:.2}),t.addLayer(e)}return t},scrollToBands(t){let e=this.$el.querySelector("#field_eo\\:bands");e&&(e.scrollIntoView(),e.classList.add("highlight-box"),setTimeout((()=>{e.classList.remove("highlight-box")}),5e3)),t.preventDefault()},hasElements(t){return"object"===typeof t&&null!==t&&Object.keys(t).length>0},formatDuration(t){if("string"===typeof t)try{return c.I3.setLocales({en:c.en}),(0,c.I3)(t).humanize("en")}catch(e){u.warn(e)}return"n/a"}}},h=p;var d=s(1001),f=(0,d.Z)(h,n,a,!1,null,null,null);const m=f.exports},5602:function(t,e){(function(t,s){s(e)})(0,(function(t){"use strict";var e="1.0.0+master.7986dc5";function s(t){return"number"===typeof t?t?t<0?-1:1:0:NaN}function n(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng){if(t.lat>e.lat){var s=t;t=e,e=s}var n=360-Math.abs(t.lng-e.lng),a=e.lat-t.lat,i=Math.abs(180-Math.abs(t.lng));return t.lat+a*i/n}throw new Error("In order to calculate the Antimeridian latitude, two valid LatLngs are required.")}function a(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng)return s(t.lng)*s(e.lng)<0;throw new Error("In order to calculate whether two LatLngs cross a meridian, two valid LatLngs are required.")}function i(t,e,s,n){if(!(t instanceof Array&&e instanceof L.Bounds&&s instanceof L.LatLng&&n instanceof L.Map))throw new Error("In order to push a LatLng into a ring, the ring point array, the LatLng, the projectedBounds, and the map must all be valid.");t.push(n.latLngToLayerPoint(s)),e.extend(t[t.length-1])}function r(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng)return a(t,e)&&360-Math.abs(t.lng)-Math.abs(e.lng)<180;throw new Error("In order to calculate whether the ring created by two LatLngs should be broken, two valid LatLngs are required.")}function o(t,e,a,r,o){if(t instanceof L.LatLng&&e instanceof L.LatLng&&a instanceof Array&&r instanceof L.Bounds&&o instanceof L.Map){var l=a[a.length-1],c=n(t,e),u=[new L.LatLng(c,180),new L.LatLng(c,-180)];return s(t.lng)>0?i(l,r,u.shift(),o):i(l,r,u.pop(),o),u.pop()}throw new Error("In order to break a ring, all the inputs must exist and be valid.")}var l=L.Polyline.extend({_projectLatlngs:function(t,e,s){var n=t[0]instanceof L.LatLng;if(n)this._createRings(t,e,s);else for(var a=0;a<t.length;a++)this._projectLatlngs(t[a],e,s)},_createRings:function(t,e,s){var n=t.length;e.push([]);for(var a=0;a<n;a++){var l=this._getCompareLatLng(a,n,t),c=t[a];if(i(e[e.length-1],s,t[a],this._map),l&&r(l,c)){var u=o(c,l,e,s,this._map);this._startNextRing(e,s,u)}}},_getCompareLatLng:function(t,e,s){return t+1<e?s[t+1]:null},_startNextRing:function(t,e,s){var n=[];t.push(n),i(n,e,s,this._map)}});function c(t,e){return new L.Wrapped.Polyline(t,e)}var u=L.Polygon.extend({_projectLatlngs:function(t,e,s){var n=t[0]instanceof L.LatLng;if(n)this._createRings(t,e,s);else for(var a=0;a<t.length;a++)this._projectLatlngs(t[a],e,s)},_createRings:function(t,e,s){var n=t.length;e.push([]);for(var a=0;a<n;a++){var l=this._getCompareLatLng(a,n,t),c=t[a];if(i(e[e.length-1],s,c,this._map),r(l,c)){var u=o(c,l,e,s,this._map);this._startNextRing(e,s,u,a===n-1)}}this._checkConcaveRings(e),this._joinLastRing(e,t)},_startNextRing:function(t,e,s,n){var a;n?(a=t[0],a.unshift(this._map.latLngToLayerPoint(s)),e.extend(a[0])):(a=[],t.push(a),i(a,e,s,this._map))},_getCompareLatLng:function(t,e,s){return t+1<e?s[t+1]:s[0]},_joinLastRing:function(t,e){var s=t[0],n=t[t.length-1];if(t.length>1&&(2===s.length||2===n.length)&&!a(e[0],e[e.length-1])){for(var i=n.length,r=0;r<i;r++)s.unshift(n.pop());t.pop()}},_checkConcaveRings:function(t){for(var e=this._map.layerPointToLatLng(t[0][0]),s=0;s<=t.length-3;s++){var n=this._map.layerPointToLatLng(t[s+1][0]),i=this._map.layerPointToLatLng(t[s+2][0]);if(a(e,n)&&a(n,i)){var r=t[0],o=t[s+2],l=r.concat(o);t.splice(s+2,1),t.splice(0,1,l)}}}});function p(t,e){return new L.Wrapped.Polygon(t,e)}t.version=e,t.Polyline=l,t.wrappedPolyline=c,t.Polygon=u,t.wrappedPolygon=p,t.calculateAntimeridianLat=n,t.isCrossMeridian=a,t.isBreakRing=r,t.sign=s}))}}]);
//# sourceMappingURL=4533.2fd0f8c3.js.map