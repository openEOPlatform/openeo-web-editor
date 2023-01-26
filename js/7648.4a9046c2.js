"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7648],{89518:(e,t,o)=>{o.d(t,{Z:()=>h});var a=o(88775);const s={props:{map:{type:Object}},data(){return{control:null}},mounted(){this.control=new a["default"]({element:this.$el})},watch:{map(e){e&&this.map.addControl(this.control)}},methods:{getControl(){return this.control}}},i=s;var r,n,l=o(1001),d=(0,l.Z)(i,r,n,!1,null,null,null);const h=d.exports},44717:(e,t,o)=>{o.d(t,{Z:()=>S});var a=o(79879),s=o(43334),i=o(28641),r=o(98683),n=o(43086),l=o(7517),d=o(92371),h=o(22556);const p={mixins:[s.Z],methods:{addGeoJson(e,t=!1,o="GeoJSON",s=!0){let n;n=e instanceof h["default"]?e:this.createGeoJsonSource(e,this.map.getView().getProjection());let p=new d["default"]({title:o,source:n});a.Z.isObject(s)?p.setStyle(s):!s&&this.removeLayerFill&&this.removeLayerFill(p),this.map.addLayer(p);let u=n.getExtent();if((0,i.xb)(u)||this.map.getView().fit(u,this.getFitOptions()),t){var c=new l.Z({hitTolerance:5,multi:!1,condition:r.Kf,layers:[p]});c.on("select",this.onSelect),this.map.addInteraction(c)}return p},onSelect(e){if(e.selected.length>0){let t=e.selected[0],o=a.Z.omitFromObject(t.getProperties(),["geometry"]),s=t.getId()||"Feature Properties";this.broadcast("showDataModal",o,s)}},createGeoJsonSource(e,t){let o=[];return a.Z.detectGeoJson(e)&&(o=(new n.Z).readFeatures(e,{featureProjection:t})),new h["default"]({features:o,wrapX:!1})}}},u=p;var c,g,m=o(1001),f=(0,m.Z)(u,c,g,!1,null,null,null);const w=f.exports;var y=o(81090),v=o(2033);const b={mixins:[w],methods:{addExtent(e,t=!0){let o=null;return o=a.Z.isObject(e)?"undefined"!==typeof e.west&&"undefined"!==typeof e.east&&"undefined"!==typeof e.south&&"undefined"!==typeof e.north?[e]:"Collection"===e.type?e.extent.spatial.bbox.map((e=>a.Z.extentToBBox(e))):"Feature"!==e.type||e.geometry||e.bbox?e:null:e,Array.isArray(o)&&o.length>0?this.addRectangles(o,t):o?this.addGeoJson(o,!1,"Footprint",t):null},addRectangles(e,t=!0){let o=this.map.getView().getProjection(),a=e.map((e=>{let t=(0,v.oJ)([e.west,e.south,e.east,e.north]).transform("EPSG:4326",o);return new y["default"](t)})),s=new h["default"]({features:a,projection:o,wrapX:!1}),i=new d["default"]({title:"Bounding Boxes",displayInLayerSwitcher:!1,source:s});return t||this.removeLayerFill(i),this.map.addLayer(i),this.map.getView().fit(s.getExtent(),this.getFitOptions()),i},removeLayerFill(e){let t=e.getStyle();"function"===typeof t&&(t=t()[0]),t.setFill(null)}}},L=b;var Z,x,C=(0,m.Z)(L,Z,x,!1,null,null,null);const S=C.exports},18840:(e,t,o)=>{o.d(t,{Z:()=>z});o(57658);var a=o(43334),s=o(79879),i=(o(71827),o(70097)),r=o(37494),n=o(83122),l=o(79258),d=o(86850),h=o(63432),p=o(29619),u=o(56933),c=o(41666),g=o(54680),m=o(23989),f=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"ol-unselectable ol-progress-control"},[t("div",{staticClass:"progress-bar"},[t("div",{staticClass:"progress-bar-inner",style:{width:e.percent}})]),t("div",{staticClass:"progress-label"},[e._v(e._s(e.label))])])},w=[],y=o(89518);const v={name:"ProgressControl",mixins:[y.Z],data(){return{loading:0,loaded:0}},computed:{show(){return this.loading>0&&this.loaded<=this.loading},percent(){return(this.loaded/this.loading*100).toFixed(1)+"%"},label(){return"Loading Tiles ("+this.percent+")"}},methods:{addLoading(){this.loading++,this.update()},addLoaded(){this.loaded++,this.update()},update(){this.loading===this.loaded&&(this.loading=0,this.loaded=0),this.loading===this.loaded&&(this.loading=0,this.loaded=0)}}},b=v;var L=o(1001),Z=(0,L.Z)(b,f,w,!1,null,"1da4d958",null);const x=Z.exports;var C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ol-location ol-unselectable ol-control",staticStyle:{"pointer-events":"auto"}},[t("button",{attrs:{type:"button",title:"Go to your location"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.request.apply(null,arguments)}}},[t("i",{staticClass:"fas fa-location-arrow"})])])},S=[];const F={name:"UserLocationControl",mixins:[y.Z],methods:{request(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((e=>{let t=this.map.getView(),o=[e.coords.longitude,e.coords.latitude];t.setCenter((0,h.fromLonLat)(o,t.getProjection()))}),(e=>Utils.error(this,e,"Location Error")),{maximumAge:1/0})}}},P=F;var j=(0,L.Z)(P,C,S,!1,null,"71051cba",null);const M=j.exports;let _=1;const $={components:{ProgressControl:x,UserLocationControl:M},mixins:[a.Z],props:{show:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},removableLayers:{type:Boolean,default:!1}},data(){return{map:null,id:"map_"+_++}},watch:{async show(){await this.showMap()}},async mounted(){await this.showMap()},methods:{async showMap(){this.show&&(await this.$nextTick(),await this.renderMap())},async createMap(e="EPSG:3857"){let t,o={showFullExtent:!0};if("string"===typeof e?o.projection=await u.Z.get(e):e instanceof p.Z?o.projection=e:e instanceof d.ZP?t=e:s.Z.isObject(e)&&(o=e),!t){if(t=new d.ZP(o),!t.getCenter()){let e=this.$config.mapLocation;Array.isArray(e)&&2==e.length||(e=[0,0]),t.setCenter((0,h.fromLonLat)([e[1],e[0]],t.getProjection()))}t.getZoom()||t.setZoom(this.$config.mapZoom||0)}if(null!==this.map)return this.map.updateSize(),void this.map.render();var a=[new i.Z,new r.Z],c={target:this.id,view:t};this.editable?c.controls=(0,n.c)().extend(a):(c.interactions=[],c.controls=a),this.map=new l.Z(c),this.listen("windowResized",this.updateMapSize);let g=this.map.getLayers();g.on("add",(e=>{let t=e.element,o=t.get("events");for(let a in o)this.map.on(a,o[a])})),g.on("remove",(e=>{let t=e.element,o=t.get("events");for(let a in o)this.map.un(a,o[a])}))},addLayerSwitcher(){this.map.addControl(new m.Z({trash:this.removableLayers}))},addBasemaps(){let e={opaque:!0,attributionsCollapsible:!1,wrapX:!1},t=[];if(Array.isArray(this.$config.basemaps)){let o=!1;for(let a of this.$config.basemaps){let s=new g.Z(Object.assign({},e,a)),i=new c.Z({source:this.trackTileProgress(s),baseLayer:!0,title:a.title,noSwitcherDelete:!0,visible:!o});t.push(i),this.map.addLayer(i),o=!0}}return t},onShow(){this.listen("windowResized",this.updateMapSize)},onHide(){this.unlisten("windowResized")},async renderMap(){await this.createMap(),this.addBasemaps()},async updateMapSize(){this.map&&(await this.$nextTick(),this.map.updateSize())},addLayerToMap(e){e.set("userLayer",!0),this.map.addLayer(e)},removeLayerFromMap(e){let t=this.getLayerFromMap(e);t&&this.map.removeLayer(t)},getLayerFromMap(e){let t=this.map.getLayers().getArray();for(let o of t)if(o.get("id")===e)return o;return null},getVisibleLayers(){let e=[],t=this.map.getLayers().getArray();for(let o of t)o.get("userLayer")&&o.getVisible()&&e.push(o);return e},getFitOptions(e=25){let t={};var o=this.map.getSize();return t.padding=o&&e>0?[o[0]*e/100,o[1]*e/100,o[0]*e/100,o[1]*e/100]:[30,30,30,30],t},trackTileProgress(e){if(this.$refs.progress){e.on("tileloadstart",(()=>this.$refs.progress&&this.$refs.progress.addLoading()));let t=()=>this.$refs.progress&&this.$refs.progress.addLoaded();e.on("tileloadend",t),e.on("tileloaderror",t)}return e},fromLonLat(e){return(0,h.fromLonLat)(e,this.map.getView().getProjection())},toExtent(e){let t=null;return s.Z.isObject(e)&&"west"in e&&"south"in e&&"east"in e&&"north"in e?t=[e.west,e.south,e.east,e.north]:Array.isArray(e)&&e.length>=4&&(t=e),t}}},A=$;var O,T,k=(0,L.Z)(A,O,T,!1,null,null,null);const z=k.exports}}]);
//# sourceMappingURL=7648.4a9046c2.js.map