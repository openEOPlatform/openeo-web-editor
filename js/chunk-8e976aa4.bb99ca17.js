(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e976aa4","chunk-70900a3b"],{"0921":function(e,t,r){"use strict";var i=r("3115"),n=r("025e"),a=(r("5bc0"),r("c320")),o=r("9d47"),s=r("21bc"),h=r("0af5"),u=r("a2e1"),l=r("5eee"),c=r("a2c7"),f=r("256f"),d=r("480c"),p=r("3e6b"),m=r("5831"),g=r("2ef1"),_=(r("1399"),r("0417")),T=r("3900");class v{constructor(){this.createHtml(),this.loading=0,this.loaded=0}addLoading(){this.loading++,this.update()}addLoaded(){this.loaded++,this.update()}update(){var e=(this.loaded/this.loading*100).toFixed(1)+"%";this.label.innerText="Loading Tiles ("+e+")",this.progressBarInner.style.width=e,this.loading===this.loaded&&(this.loading=0,this.loaded=0),this.el.style.opacity=this.show()?1:0}show(){return this.loading>0&&this.loaded<=this.loading}createHtml(){this.el=document.createElement("div"),this.el.className="ol-unselectable ol-progress-control",this.progressBar=document.createElement("div"),this.progressBar.className="progress-bar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="progress-bar-inner",this.progressBar.appendChild(this.progressBarInner),this.label=document.createElement("div"),this.label.className="progress-label",this.el.appendChild(this.progressBar),this.el.appendChild(this.label)}getControl(){var e=new T["a"]({element:this.el});return e}}var E,y,b={mixins:[i["a"]],props:{id:{type:String,required:!0},center:{type:Array,default:()=>[0,0]},zoom:{type:Number,default:1},show:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},removableLayers:{type:Boolean,default:!1}},data(){return{map:null,baseLayers:[],basemap:null,progress:null,fitOptions:{padding:[30,30,30,30]}}},watch:{show(){this.showMap()}},mounted(){this.showMap()},methods:{showMap(){this.show&&this.$nextTick(()=>this.renderMap())},createMap(e=!1,t="EPSG:3857"){if(null!==this.map)return this.map.updateSize(),void this.map.render();this.progress=new v;var r=[new a["a"],new o["a"],this.progress.getControl()];e&&r.push(new _["a"]({trash:this.removableLayers}));let i={opaque:!0,attributionsCollapsible:!1};this.baseLayers=[];let n=!1;for(let a of this.$config.basemaps){let e=new g["a"](Object.assign({},i,a)),t=new d["a"]({source:this.trackTileProgress(e),baseLayer:!0,title:a.title,noSwitcherDelete:!0,visible:!n});this.baseLayers.push(t),n=!0}let h=[this.center[1],this.center[0]];var u={target:this.id,layers:this.baseLayers,view:new c["a"]({center:"EPSG:3857"===t?Object(f["d"])(h):h,zoom:this.zoom,showFullExtent:!0,projection:t})};this.editable?u.controls=Object(s["a"])().extend(r):(u.interactions=[],u.controls=r),this.map=new l["a"](u),this.listen("windowResized",this.updateMapSize)},fromLonLat(e){return this.map&&"EPSG:3857"===this.map.getView().getProjection().getCode()?Object(f["d"])(e):e},onShow(){this.listen("windowResized",this.updateMapSize)},onHide(){this.unlisten("windowResized")},renderMap(){this.createMap()},async updateMapSize(){this.map&&(await this.$nextTick(),this.map.updateSize())},getVisibleLayers(){let e=[],t=this.map.getLayers().getArray();for(let r of t)r.get("userLayer")&&r.getVisible()&&e.push(r);return e},addGeoJson(e){var t={};n["a"].detectGeoJson(e)&&(t.features=(new u["a"]).readFeatures(e,{featureProjection:this.map.getView().getProjection()}));var r=new m["a"](t),i=new p["a"]({title:"GeoJSON",source:r});this.map.addLayer(i);var a=r.getExtent();return Object(h["G"])(a)||this.map.getView().fit(a,this.fitOptions),i},trackTileProgress(e){return e.on("tileloadstart",()=>{this.progress.addLoading()}),e.on("tileloadend",()=>{this.progress.addLoaded()}),e.on("tileloaderror",()=>{this.progress.addLoaded()}),e}}},x=b,L=r("2877"),w=Object(L["a"])(x,E,y,!1,null,null,null);t["a"]=w.exports},"25a5":function(e,t,r){!function(t,r){e.exports=r()}(0,(function(){"use strict";function e(e,i,n,a,o){!function e(r,i,n,a,o){for(;a>n;){if(a-n>600){var s=a-n+1,h=i-n+1,u=Math.log(s),l=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*l*(s-l)/s)*(h-s/2<0?-1:1),f=Math.max(n,Math.floor(i-h*l/s+c)),d=Math.min(a,Math.floor(i+(s-h)*l/s+c));e(r,i,f,d,o)}var p=r[i],m=n,g=a;for(t(r,n,i),o(r[a],p)>0&&t(r,n,a);m<g;){for(t(r,m,g),m++,g--;o(r[m],p)<0;)m++;for(;o(r[g],p)>0;)g--}0===o(r[n],p)?t(r,n,g):t(r,++g,a),g<=i&&(n=g+1),i<=g&&(a=g-1)}}(e,i,n||0,a||e.length-1,o||r)}function t(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function r(e,t){return e<t?-1:e>t?1:0}var i=function(e){void 0===e&&(e=9),this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function n(e,t,r){if(!r)return t.indexOf(e);for(var i=0;i<t.length;i++)if(r(e,t[i]))return i;return-1}function a(e,t){o(e,0,e.children.length,t,e)}function o(e,t,r,i,n){n||(n=p(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(var a=t;a<r;a++){var o=e.children[a];s(n,e.leaf?i(o):o)}return n}function s(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function h(e,t){return e.minX-t.minX}function u(e,t){return e.minY-t.minY}function l(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function c(e){return e.maxX-e.minX+(e.maxY-e.minY)}function f(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function d(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function p(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function m(t,r,i,n,a){for(var o=[r,i];o.length;)if(!((i=o.pop())-(r=o.pop())<=n)){var s=r+Math.ceil((i-r)/n/2)*n;e(t,s,r,i,a),o.push(r,s,s,i)}}return i.prototype.all=function(){return this._all(this.data,[])},i.prototype.search=function(e){var t=this.data,r=[];if(!d(e,t))return r;for(var i=this.toBBox,n=[];t;){for(var a=0;a<t.children.length;a++){var o=t.children[a],s=t.leaf?i(o):o;d(e,s)&&(t.leaf?r.push(o):f(e,s)?this._all(o,r):n.push(o))}t=n.pop()}return r},i.prototype.collides=function(e){var t=this.data;if(!d(e,t))return!1;for(var r=[];t;){for(var i=0;i<t.children.length;i++){var n=t.children[i],a=t.leaf?this.toBBox(n):n;if(d(e,a)){if(t.leaf||f(e,a))return!0;r.push(n)}}t=r.pop()}return!1},i.prototype.load=function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0;t<e.length;t++)this.insert(e[t]);return this}var r=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},i.prototype.insert=function(e){return e&&this._insert(e,this.data.height-1),this},i.prototype.clear=function(){return this.data=p([]),this},i.prototype.remove=function(e,t){if(!e)return this;for(var r,i,a,o=this.data,s=this.toBBox(e),h=[],u=[];o||h.length;){if(o||(o=h.pop(),i=h[h.length-1],r=u.pop(),a=!0),o.leaf){var l=n(e,o.children,t);if(-1!==l)return o.children.splice(l,1),h.push(o),this._condense(h),this}a||o.leaf||!f(o,s)?i?(r++,o=i.children[r],a=!1):o=null:(h.push(o),u.push(r),r=0,i=o,o=o.children[0])}return this},i.prototype.toBBox=function(e){return e},i.prototype.compareMinX=function(e,t){return e.minX-t.minX},i.prototype.compareMinY=function(e,t){return e.minY-t.minY},i.prototype.toJSON=function(){return this.data},i.prototype.fromJSON=function(e){return this.data=e,this},i.prototype._all=function(e,t){for(var r=[];e;)e.leaf?t.push.apply(t,e.children):r.push.apply(r,e.children),e=r.pop();return t},i.prototype._build=function(e,t,r,i){var n,o=r-t+1,s=this._maxEntries;if(o<=s)return a(n=p(e.slice(t,r+1)),this.toBBox),n;i||(i=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,i-1))),(n=p([])).leaf=!1,n.height=i;var h=Math.ceil(o/s),u=h*Math.ceil(Math.sqrt(s));m(e,t,r,u,this.compareMinX);for(var l=t;l<=r;l+=u){var c=Math.min(l+u-1,r);m(e,l,c,h,this.compareMinY);for(var f=l;f<=c;f+=h){var d=Math.min(f+h-1,c);n.children.push(this._build(e,f,d,i-1))}}return a(n,this.toBBox),n},i.prototype._chooseSubtree=function(e,t,r,i){for(;i.push(t),!t.leaf&&i.length-1!==r;){for(var n=1/0,a=1/0,o=void 0,s=0;s<t.children.length;s++){var h=t.children[s],u=l(h),c=(f=e,d=h,(Math.max(d.maxX,f.maxX)-Math.min(d.minX,f.minX))*(Math.max(d.maxY,f.maxY)-Math.min(d.minY,f.minY))-u);c<a?(a=c,n=u<n?u:n,o=h):c===a&&u<n&&(n=u,o=h)}t=o||t.children[0]}var f,d;return t},i.prototype._insert=function(e,t,r){var i=r?e:this.toBBox(e),n=[],a=this._chooseSubtree(i,this.data,t,n);for(a.children.push(e),s(a,i);t>=0&&n[t].children.length>this._maxEntries;)this._split(n,t),t--;this._adjustParentBBoxes(i,n,t)},i.prototype._split=function(e,t){var r=e[t],i=r.children.length,n=this._minEntries;this._chooseSplitAxis(r,n,i);var o=this._chooseSplitIndex(r,n,i),s=p(r.children.splice(o,r.children.length-o));s.height=r.height,s.leaf=r.leaf,a(r,this.toBBox),a(s,this.toBBox),t?e[t-1].children.push(s):this._splitRoot(r,s)},i.prototype._splitRoot=function(e,t){this.data=p([e,t]),this.data.height=e.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},i.prototype._chooseSplitIndex=function(e,t,r){for(var i,n,a,s,h,u,c,f=1/0,d=1/0,p=t;p<=r-t;p++){var m=o(e,0,p,this.toBBox),g=o(e,p,r,this.toBBox),_=(n=m,a=g,s=void 0,h=void 0,u=void 0,c=void 0,s=Math.max(n.minX,a.minX),h=Math.max(n.minY,a.minY),u=Math.min(n.maxX,a.maxX),c=Math.min(n.maxY,a.maxY),Math.max(0,u-s)*Math.max(0,c-h)),T=l(m)+l(g);_<f?(f=_,i=p,d=T<d?T:d):_===f&&T<d&&(d=T,i=p)}return i||r-t},i.prototype._chooseSplitAxis=function(e,t,r){var i=e.leaf?this.compareMinX:h,n=e.leaf?this.compareMinY:u;this._allDistMargin(e,t,r,i)<this._allDistMargin(e,t,r,n)&&e.children.sort(i)},i.prototype._allDistMargin=function(e,t,r,i){e.children.sort(i);for(var n=this.toBBox,a=o(e,0,t,n),h=o(e,r-t,r,n),u=c(a)+c(h),l=t;l<r-t;l++){var f=e.children[l];s(a,e.leaf?n(f):f),u+=c(a)}for(var d=r-t-1;d>=t;d--){var p=e.children[d];s(h,e.leaf?n(p):p),u+=c(h)}return u},i.prototype._adjustParentBBoxes=function(e,t,r){for(var i=r;i>=0;i--)s(t[i],e)},i.prototype._condense=function(e){for(var t=e.length-1,r=void 0;t>=0;t--)0===e[t].children.length?t>0?(r=e[t-1].children).splice(r.indexOf(e[t]),1):this.clear():a(e[t],this.toBBox)},i}))},"5e7e":function(e,t,r){"use strict";r.d(t,"b",(function(){return g})),r.d(t,"a",(function(){return _}));var i={LOST:"webglcontextlost",RESTORED:"webglcontextrestored"},n=r("da5c"),a="\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n",o="\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n   \n  varying vec2 v_texCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord);\n  }\n",s=function(){function e(e){this.gl_=e.webGlContext;var t=this.gl_;this.scaleRatio_=e.scaleRatio||1,this.renderTargetTexture_=t.createTexture(),this.renderTargetTextureSize_=null,this.frameBuffer_=t.createFramebuffer();var r=t.createShader(t.VERTEX_SHADER);t.shaderSource(r,e.vertexShader||a),t.compileShader(r);var i=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(i,e.fragmentShader||o),t.compileShader(i),this.renderTargetProgram_=t.createProgram(),t.attachShader(this.renderTargetProgram_,r),t.attachShader(this.renderTargetProgram_,i),t.linkProgram(this.renderTargetProgram_),this.renderTargetVerticesBuffer_=t.createBuffer();var n=[-1,-1,1,-1,-1,1,1,-1,1,1,-1,1];t.bindBuffer(t.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW),this.renderTargetAttribLocation_=t.getAttribLocation(this.renderTargetProgram_,"a_position"),this.renderTargetUniformLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_screenSize"),this.renderTargetTextureLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_image"),this.uniforms_=[],e.uniforms&&Object.keys(e.uniforms).forEach(function(r){this.uniforms_.push({value:e.uniforms[r],location:t.getUniformLocation(this.renderTargetProgram_,r)})}.bind(this))}return e.prototype.getGL=function(){return this.gl_},e.prototype.init=function(e){var t=this.getGL(),r=[t.drawingBufferWidth*this.scaleRatio_,t.drawingBufferHeight*this.scaleRatio_];if(t.bindFramebuffer(t.FRAMEBUFFER,this.getFrameBuffer()),t.viewport(0,0,r[0],r[1]),!this.renderTargetTextureSize_||this.renderTargetTextureSize_[0]!==r[0]||this.renderTargetTextureSize_[1]!==r[1]){this.renderTargetTextureSize_=r;var i=0,n=t.RGBA,a=0,o=t.RGBA,s=t.UNSIGNED_BYTE,h=null;t.bindTexture(t.TEXTURE_2D,this.renderTargetTexture_),t.texImage2D(t.TEXTURE_2D,i,n,r[0],r[1],a,o,s,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.renderTargetTexture_,0)}},e.prototype.apply=function(e,t){var r=this.getGL(),i=e.size;r.bindFramebuffer(r.FRAMEBUFFER,t?t.getFrameBuffer():null),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.renderTargetTexture_),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),r.bindBuffer(r.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),r.useProgram(this.renderTargetProgram_),r.enableVertexAttribArray(this.renderTargetAttribLocation_),r.vertexAttribPointer(this.renderTargetAttribLocation_,2,r.FLOAT,!1,0,0),r.uniform2f(this.renderTargetUniformLocation_,i[0],i[1]),r.uniform1i(this.renderTargetTextureLocation_,0),this.applyUniforms(e),r.drawArrays(r.TRIANGLES,0,6)},e.prototype.getFrameBuffer=function(){return this.frameBuffer_},e.prototype.applyUniforms=function(e){var t,r=this.getGL(),i=1;this.uniforms_.forEach((function(n){if(t="function"===typeof n.value?n.value(e):n.value,t instanceof HTMLCanvasElement||t instanceof ImageData)n.texture||(n.texture=r.createTexture()),r.activeTexture(r["TEXTURE"+i]),r.bindTexture(r.TEXTURE_2D,n.texture),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),t instanceof ImageData?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,t.width,t.height,0,r.UNSIGNED_BYTE,new Uint8Array(t.data)):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.uniform1i(n.location,i++);else if(Array.isArray(t))switch(t.length){case 2:return void r.uniform2f(n.location,t[0],t[1]);case 3:return void r.uniform3f(n.location,t[0],t[1],t[2]);case 4:return void r.uniform4f(n.location,t[0],t[1],t[2],t[3]);default:return}else"number"===typeof t&&r.uniform1f(n.location,t)}))},e}(),h=s,u=r("86e0"),l=r("38f3"),c=r("a896");function f(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function d(e,t){return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}var p=r("1300"),m=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),g={PROJECTION_MATRIX:"u_projectionMatrix",OFFSET_SCALE_MATRIX:"u_offsetScaleMatrix",OFFSET_ROTATION_MATRIX:"u_offsetRotateMatrix",TIME:"u_time",ZOOM:"u_zoom",RESOLUTION:"u_resolution"},_={UNSIGNED_BYTE:u["g"],UNSIGNED_SHORT:u["i"],UNSIGNED_INT:u["h"],FLOAT:u["d"]},T=function(e){function t(t){var r=e.call(this)||this,n=t||{};r.boundHandleWebGLContextLost_=r.handleWebGLContextLost.bind(r),r.boundHandleWebGLContextRestored_=r.handleWebGLContextRestored.bind(r),r.canvas_=document.createElement("canvas"),r.canvas_.style.position="absolute",r.canvas_.style.left="0",r.gl_=Object(u["j"])(r.canvas_);var a=r.getGL();if(r.bufferCache_={},r.extensionCache_={},r.currentProgram_=null,r.canvas_.addEventListener(i.LOST,r.boundHandleWebGLContextLost_),r.canvas_.addEventListener(i.RESTORED,r.boundHandleWebGLContextRestored_),r.offsetRotateMatrix_=Object(c["c"])(),r.offsetScaleMatrix_=Object(c["c"])(),r.tmpMat4_=f(),r.uniformLocations_={},r.attribLocations_={},r.uniforms_=[],n.uniforms)for(var o in n.uniforms)r.uniforms_.push({name:o,value:n.uniforms[o]});return r.postProcessPasses_=n.postProcesses?n.postProcesses.map((function(e){return new h({webGlContext:a,scaleRatio:e.scaleRatio,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms})})):[new h({webGlContext:a})],r.shaderCompileErrors_=null,r.startTime_=Date.now(),r}return m(t,e),t.prototype.getExtension=function(e){if(e in this.extensionCache_)return this.extensionCache_[e];var t=this.gl_.getExtension(e);return this.extensionCache_[e]=t,t},t.prototype.bindBuffer=function(e){var t=this.getGL(),r=Object(p["c"])(e),i=this.bufferCache_[r];if(!i){var n=t.createBuffer();i={buffer:e,webGlBuffer:n},this.bufferCache_[r]=i}t.bindBuffer(e.getType(),i.webGlBuffer)},t.prototype.flushBufferData=function(e){var t=this.getGL();this.bindBuffer(e),t.bufferData(e.getType(),e.getArray(),e.getUsage())},t.prototype.deleteBuffer=function(e){var t=this.getGL(),r=Object(p["c"])(e),i=this.bufferCache_[r];i&&!t.isContextLost()&&t.deleteBuffer(i.webGlBuffer),delete this.bufferCache_[r]},t.prototype.disposeInternal=function(){this.canvas_.removeEventListener(i.LOST,this.boundHandleWebGLContextLost_),this.canvas_.removeEventListener(i.RESTORED,this.boundHandleWebGLContextRestored_);var e=this.gl_.getExtension("WEBGL_lose_context");e&&e.loseContext(),delete this.gl_,delete this.canvas_},t.prototype.prepareDraw=function(e,t){var r=this.getGL(),i=this.getCanvas(),n=e.size,a=e.pixelRatio;i.width=n[0]*a,i.height=n[1]*a,i.style.width=n[0]+"px",i.style.height=n[1]+"px",r.useProgram(this.currentProgram_);for(var o=this.postProcessPasses_.length-1;o>=0;o--)this.postProcessPasses_[o].init(e);r.bindTexture(r.TEXTURE_2D,null),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,t?r.ZERO:r.ONE_MINUS_SRC_ALPHA),r.useProgram(this.currentProgram_),this.applyFrameState(e),this.applyUniforms(e)},t.prototype.prepareDrawToRenderTarget=function(e,t,r){var i=this.getGL(),n=t.getSize();i.bindFramebuffer(i.FRAMEBUFFER,t.getFramebuffer()),i.viewport(0,0,n[0],n[1]),i.bindTexture(i.TEXTURE_2D,t.getTexture()),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.ONE,r?i.ZERO:i.ONE_MINUS_SRC_ALPHA),i.useProgram(this.currentProgram_),this.applyFrameState(e),this.applyUniforms(e)},t.prototype.drawElements=function(e,t){var r=this.getGL();this.getExtension("OES_element_index_uint");var i=r.UNSIGNED_INT,n=4,a=t-e,o=e*n;r.drawElements(r.TRIANGLES,a,i,o)},t.prototype.finalizeDraw=function(e){for(var t=0;t<this.postProcessPasses_.length;t++)this.postProcessPasses_[t].apply(e,this.postProcessPasses_[t+1]||null)},t.prototype.getCanvas=function(){return this.canvas_},t.prototype.getGL=function(){return this.gl_},t.prototype.applyFrameState=function(e){var t=e.size,r=e.viewState.rotation,i=Object(c["g"])(this.offsetScaleMatrix_);Object(c["i"])(i,2/t[0],2/t[1]);var n=Object(c["g"])(this.offsetRotateMatrix_);0!==r&&Object(c["h"])(n,-r),this.setUniformMatrixValue(g.OFFSET_SCALE_MATRIX,d(this.tmpMat4_,i)),this.setUniformMatrixValue(g.OFFSET_ROTATION_MATRIX,d(this.tmpMat4_,n)),this.setUniformFloatValue(g.TIME,.001*(Date.now()-this.startTime_)),this.setUniformFloatValue(g.ZOOM,e.viewState.zoom),this.setUniformFloatValue(g.RESOLUTION,e.viewState.resolution)},t.prototype.applyUniforms=function(e){var t,r=this.getGL(),i=0;this.uniforms_.forEach(function(n){if(t="function"===typeof n.value?n.value(e):n.value,t instanceof HTMLCanvasElement||t instanceof HTMLImageElement||t instanceof ImageData){n.texture||(n.prevValue=void 0,n.texture=r.createTexture()),r.activeTexture(r["TEXTURE"+i]),r.bindTexture(r.TEXTURE_2D,n.texture),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);var a=!(t instanceof HTMLImageElement)||t.complete;a&&n.prevValue!==t&&(n.prevValue=t,r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)),r.uniform1i(this.getUniformLocation(n.name),i++)}else if(Array.isArray(t)&&6===t.length)this.setUniformMatrixValue(n.name,d(this.tmpMat4_,t));else if(Array.isArray(t)&&t.length<=4)switch(t.length){case 2:return void r.uniform2f(this.getUniformLocation(n.name),t[0],t[1]);case 3:return void r.uniform3f(this.getUniformLocation(n.name),t[0],t[1],t[2]);case 4:return void r.uniform4f(this.getUniformLocation(n.name),t[0],t[1],t[2],t[3]);default:return}else"number"===typeof t&&r.uniform1f(this.getUniformLocation(n.name),t)}.bind(this))},t.prototype.useProgram=function(e){if(e==this.currentProgram_)return!1;var t=this.getGL();return t.useProgram(e),this.currentProgram_=e,this.uniformLocations_={},this.attribLocations_={},!0},t.prototype.compileShader=function(e,t){var r=this.getGL(),i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i},t.prototype.getProgram=function(e,t){var r=this.getGL(),i=this.compileShader(e,r.FRAGMENT_SHADER),n=this.compileShader(t,r.VERTEX_SHADER),a=r.createProgram();if(r.attachShader(a,i),r.attachShader(a,n),r.linkProgram(a),!r.getShaderParameter(i,r.COMPILE_STATUS)){var o="Fragment shader compliation failed: "+r.getShaderInfoLog(i);throw new Error(o)}if(r.deleteShader(i),!r.getShaderParameter(n,r.COMPILE_STATUS)){o="Vertex shader compilation failed: "+r.getShaderInfoLog(n);throw new Error(o)}if(r.deleteShader(n),!r.getProgramParameter(a,r.LINK_STATUS)){o="GL program linking failed: "+r.getShaderInfoLog(n);throw new Error(o)}return a},t.prototype.getUniformLocation=function(e){return void 0===this.uniformLocations_[e]&&(this.uniformLocations_[e]=this.getGL().getUniformLocation(this.currentProgram_,e)),this.uniformLocations_[e]},t.prototype.getAttributeLocation=function(e){return void 0===this.attribLocations_[e]&&(this.attribLocations_[e]=this.getGL().getAttribLocation(this.currentProgram_,e)),this.attribLocations_[e]},t.prototype.makeProjectionTransform=function(e,t){var r=e.size,i=e.viewState.rotation,n=e.viewState.resolution,a=e.viewState.center;return Object(c["g"])(t),Object(c["b"])(t,0,0,2/(n*r[0]),2/(n*r[1]),-i,-a[0],-a[1]),t},t.prototype.setUniformFloatValue=function(e,t){this.getGL().uniform1f(this.getUniformLocation(e),t)},t.prototype.setUniformMatrixValue=function(e,t){this.getGL().uniformMatrix4fv(this.getUniformLocation(e),!1,t)},t.prototype.enableAttributeArray_=function(e,t,r,i,n){var a=this.getAttributeLocation(e);a<0||(this.getGL().enableVertexAttribArray(a),this.getGL().vertexAttribPointer(a,t,r,!1,i,n))},t.prototype.enableAttributes=function(e){for(var t=v(e),r=0,i=0;i<e.length;i++){var n=e[i];this.enableAttributeArray_(n.name,n.size,n.type||u["d"],t,r),r+=n.size*E(n.type)}},t.prototype.handleWebGLContextLost=function(){Object(l["b"])(this.bufferCache_),this.currentProgram_=null},t.prototype.handleWebGLContextRestored=function(){},t.prototype.createTexture=function(e,t,r){var i=this.getGL(),n=r||i.createTexture(),a=0,o=i.RGBA,s=0,h=i.RGBA,u=i.UNSIGNED_BYTE;return i.bindTexture(i.TEXTURE_2D,n),t?i.texImage2D(i.TEXTURE_2D,a,o,h,u,t):i.texImage2D(i.TEXTURE_2D,a,o,e[0],e[1],s,h,u,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),n},t}(n["a"]);function v(e){for(var t=0,r=0;r<e.length;r++){var i=e[r];t+=i.size*E(i.type)}return t}function E(e){switch(e){case _.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case _.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case _.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case _.FLOAT:default:return Float32Array.BYTES_PER_ELEMENT}}t["c"]=T},"7fd1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i='var e="function"==typeof Object.assign?Object.assign:function(e,n){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(null!=i)for(var f in i)i.hasOwnProperty(f)&&(t[f]=i[f])}return t},n="GENERATE_BUFFERS",t=[],r={vertexPosition:0,indexPosition:0};function o(e,n,t,r,o){e[n+0]=t,e[n+1]=r,e[n+2]=o}function i(e,n,i,f,s,u){var a=3+s,l=e[n+0],v=e[n+1],c=t;c.length=s;for(var g=0;g<c.length;g++)c[g]=e[n+2+g];var b=u?u.vertexPosition:0,h=u?u.indexPosition:0,d=b/a;return o(i,b,l,v,0),c.length&&i.set(c,b+3),o(i,b+=a,l,v,1),c.length&&i.set(c,b+3),o(i,b+=a,l,v,2),c.length&&i.set(c,b+3),o(i,b+=a,l,v,3),c.length&&i.set(c,b+3),b+=a,f[h++]=d,f[h++]=d+1,f[h++]=d+3,f[h++]=d+1,f[h++]=d+2,f[h++]=d+3,r.vertexPosition=b,r.indexPosition=h,r}var f=self;f.onmessage=function(t){var r=t.data;if(r.type===n){for(var o=r.customAttributesCount,s=2+o,u=new Float32Array(r.renderInstructions),a=u.length/s,l=4*a*(o+3),v=new Uint32Array(6*a),c=new Float32Array(l),g=null,b=0;b<u.length;b+=s)g=i(u,b,c,v,o,g);var h=e({vertexBuffer:c.buffer,indexBuffer:v.buffer,renderInstructions:u.buffer},r);f.postMessage(h,[c.buffer,v.buffer,u.buffer])}};',n=new Blob([i],{type:"application/javascript"}),a=URL.createObjectURL(n);function o(){return new Worker(a)}},"86e0":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"g",(function(){return h})),r.d(t,"i",(function(){return u})),r.d(t,"h",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"j",(function(){return d}));var i=34962,n=34963,a=35040,o=35044,s=35048,h=5121,u=5123,l=5125,c=5126,f=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function d(e,t){for(var r=f.length,i=0;i<r;++i)try{var n=e.getContext(f[i],t);if(n)return n}catch(a){}return null}},"90b4":function(e,t,r){},"991b":function(e,t,r){"use strict";r("90b4")},a5c1:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:e.id}})},n=[],a=r("0921"),o=r("025e"),s=r("e300"),h=r("4cdf"),u=r("9c78"),l=r("5bc3"),c=r("480c"),f=r("6cf3"),d=r("3e6b"),p=r("5831"),m=r("2ef1"),g=r("2278"),_=r("d510"),T=(r("7505"),r("cfd3")),v=(r("6601"),r("457f")),E={name:"MapViewer",mixins:[a["a"]],props:{extents:{type:Array,default:()=>null},geoJson:{type:Object,default:()=>null}},data(){return{WMTSCapabilities:{},swipe:{control:null,left:null,right:null},timeline:null}},methods:{renderMap(){let e=Array.isArray(this.extents)&&this.extents.length>0;if(this.createMap(!e),e)for(let i of this.extents){var t=o["a"].extentToBBox(i);this.addRectangle(t.west,t.east,t.north,t.south)}o["a"].isObject(this.geoJson)&&(this.geoJsonLayer=this.addGeoJson(this.geoJson));let r=this.map.getLayers();r.on("add",()=>this.toggleSwipeControl()),r.on("remove",()=>this.toggleSwipeControl()),this.$listeners&&this.$listeners.drop&&(this.map.getViewport().addEventListener("dragover",e=>e.preventDefault()),this.map.getViewport().addEventListener("drop",this.$listeners.drop))},addRectangle(e,t,r,i){let n=[...this.fromLonLat([e,i]),...this.fromLonLat([t,r])],a=new d["a"]({title:"Extent",displayInLayerSwitcher:!1,source:new p["a"]({features:[new h["a"](Object(l["c"])(n))],projection:"EPSG:4326",wrapX:!1})});this.map.addLayer(a),this.map.getView().fit(n,this.fitOptions)},async showWebService(e){switch(e.type.toLowerCase()){case"xyz":this.updateXYZLayer(e);break;case"wmts":await this.updateWMTSLayer(e);break;default:o["a"].error(this,"Sorry, the service type is not supported by the map.")}},toggleSwipeControl(){var e=this.getVisibleLayers();2===e.length?(null===this.swipe.control&&(this.swipe.control=new T["a"],this.map.addControl(this.swipe.control)),this.swipe.left!==e[0]&&(this.swipe.control.addLayer(e[0]),this.swipe.left=e[0]),this.swipe.right!==e[1]&&(this.swipe.control.addLayer(e[1],!0),this.swipe.right=e[1])):(this.map.removeControl(this.swipe.control),this.swipe.control=null,this.swipe.left=null,this.swipe.right=null)},addLayerToMap(e){e.set("userLayer",!0),this.map.addLayer(e),e.on("change",()=>this.toggleSwipeControl()),e.on("change:visible",()=>this.toggleSwipeControl()),e.on("change:zIndex",()=>this.toggleSwipeControl())},removeLayerFromMap(e){let t=this.getLayerFromMap(e);t&&this.map.removeLayer(t)},getLayerFromMap(e){let t=this.map.getLayers().getArray();for(let r of t)if(r.get("id")===e)return r;return null},updateGeoTiffLayer(e,t=null){var r=new c["a"]({id:e,title:t||"GeoTiff",source:new f["a"]({url:"http://tiles.rdnt.io/tiles?url="+encodeURIComponent(e),crossOrigin:"anonymous"})});return this.addLayerToMap(r),r},async addCollection(e){let t=o["a"].getPreviewLinkFromSTAC(e);t||o["a"].error(this,"No visualizations found for collection");let r,i={id:e.id,url:t.href,title:e.title||e.id};switch(this.map.getLayers().forEach(e=>{e.get("previewLayer")&&e.get("id")!==i.id&&this.map.removeLayer(e)}),t.rel.toLowerCase()){case"xyz":r=this.updateXYZLayer(i);break;case"wmts":let e=[];t["wmts:layer"]&&e.push(t["wmts:layer"]),r=await this.updateWMTSLayer(i,e);break;default:return void o["a"].error(this,"Sorry, the service type is not supported by the map.")}r.set("previewLayer",!0);try{let t=o["a"].extentToBBox(e.extent.spatial.bbox[0]),i=[...this.fromLonLat([t.west,t.south]),...this.fromLonLat([t.east,t.north])],n=new d["a"]({title:"Extent",noSwitcherDelete:!0,source:new p["a"]({features:[new h["a"](Object(l["c"])(i))],projection:"EPSG:4326",wrapX:!1})}),a=n.getStyle();"function"===typeof a&&(a=a()[0]),a.setFill(null),r.getLayers().push(n),this.map.getView().fit(i,this.fitOptions)}catch(n){console.log(n)}},getWMTSTimes(e,t){const r=e.Contents.Layer||[];let i=r.find(e=>e.Identifier==t);if(!i||!i.Dimension)return[];let n=i.Dimension.find(e=>"TIME"===e.Identifier);return n?n.Value.sort():[]},async updateWMTSLayer(e,t=[],r,i="Service"){if(this.removeLayerFromMap(e.id),!this.WMTSCapabilities[e.url]){let t=new URL(e.url);t.searchParams.set("service","wmts"),t.searchParams.set("request","GetCapabilities");let r=await axios.get(t.toString(),{responseType:"text"});var n=new g["a"];this.WMTSCapabilities[e.url]=n.read(r.data)}let a=this.WMTSCapabilities[e.url],h=null,l=null,f=null,d=null,p=o["a"].getResourceTitle(e,i),m=new s["a"];for(let s of t){let e=Object(_["b"])(a,{layer:s,matrixSet:"EPSG:3857"});f||(f=new Date(e.dimensions.TIME));let t=this.getWMTSTimes(a,s);if(t.length){let e=new Date(t[0]),r=new Date(t[t.length-1]);(!h||e<h)&&(h=e),(!l||r>l)&&(l=r)}r&&(o["a"].isObject(e.dimensions)||(e.dimensions={}),e.dimensions.time=r),d=new _["a"](e);var T=new c["a"]({title:p,source:this.trackTileProgress(d),noSwitcherDelete:!0});m.push(T)}if(h&&l){let e;this.timeline=new v["a"]({className:"ol-pointer",graduation:"day",minDate:h,maxDate:l}),this.timeline.on("scroll",(function(t){!t.date||t.date>l||t.date<h||(e&&window.clearTimeout(e),e=window.setTimeout(()=>{try{let e=t.date.toISOString().substr(0,10);d.updateDimensions({TIME:e});let r=document.getElementsByClassName("timeline-date-label");r[0].innerText=e,r[0].disabled=!0}catch(r){console.log(r)}e=null},500))})),this.map.addControl(this.timeline),this.timeline.addButton({className:"timeline-date-label",title:`The date that is shown on the map for the collection '${p}'`,html:"No date"}),this.timeline.setDate(f)}let E=new u["a"]({id:e.id,title:p,layers:m});return this.addLayerToMap(E),this.timeline&&this.map.getLayers().on("remove",e=>{e.element===E&&(this.map.removeControl(this.timeline),this.timeline=null)}),E},updateXYZLayer(e,t="Service"){this.removeLayerFromMap(e.id);let r=o["a"].replaceParam(e.url,"__editorSessionId",(new Date).getTime()).replace(/%7B/g,"{").replace(/%7D/g,"}"),i=o["a"].getResourceTitle(e,t),n=new c["a"]({title:i,source:this.trackTileProgress(new m["a"]({url:r})),noSwitcherDelete:!0}),a=new u["a"]({id:e.id,title:i,layers:[n]});return this.addLayerToMap(a),a}}},y=E,b=(r("991b"),r("2877")),x=Object(b["a"])(y,i,n,!1,null,null,null);t["default"]=x.exports},aab2:function(e,t,r){"use strict";var i=r("86e0"),n=r("92fa"),a={STATIC_DRAW:i["e"],STREAM_DRAW:i["f"],DYNAMIC_DRAW:i["b"]},o=function(){function e(e,t){this.array=null,this.type=e,Object(n["a"])(e===i["a"]||e===i["c"],62),this.usage=void 0!==t?t:a.STATIC_DRAW}return e.prototype.ofSize=function(e){this.array=new(s(this.type))(e)},e.prototype.fromArray=function(e){var t=s(this.type);this.array=t.from?t.from(e):new t(e)},e.prototype.fromArrayBuffer=function(e){this.array=new(s(this.type))(e)},e.prototype.getType=function(){return this.type},e.prototype.getArray=function(){return this.array},e.prototype.getUsage=function(){return this.usage},e.prototype.getSize=function(){return this.array?this.array.length:0},e}();function s(e){switch(e){case i["a"]:return Float32Array;case i["c"]:return Uint32Array;default:return Float32Array}}t["a"]=o},d706:function(e,t,r){"use strict";var i=r("9f5e"),n=new Uint8Array(4),a=function(){function e(e,t){this.helper_=e;var r=e.getGL();this.texture_=r.createTexture(),this.framebuffer_=r.createFramebuffer(),this.size_=t||[1,1],this.data_=new Uint8Array(0),this.dataCacheDirty_=!0,this.updateSize_()}return e.prototype.setSize=function(e){Object(i["b"])(e,this.size_)||(this.size_[0]=e[0],this.size_[1]=e[1],this.updateSize_())},e.prototype.getSize=function(){return this.size_},e.prototype.clearCachedData=function(){this.dataCacheDirty_=!0},e.prototype.readAll=function(){if(this.dataCacheDirty_){var e=this.size_,t=this.helper_.getGL();t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.readPixels(0,0,e[0],e[1],t.RGBA,t.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_},e.prototype.readPixel=function(e,t){if(e<0||t<0||e>this.size_[0]||t>=this.size_[1])return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n;this.readAll();var r=Math.floor(e)+(this.size_[1]-Math.floor(t)-1)*this.size_[0];return n[0]=this.data_[4*r],n[1]=this.data_[4*r+1],n[2]=this.data_[4*r+2],n[3]=this.data_[4*r+3],n},e.prototype.getTexture=function(){return this.texture_},e.prototype.getFramebuffer=function(){return this.framebuffer_},e.prototype.updateSize_=function(){var e=this.size_,t=this.helper_.getGL();this.texture_=this.helper_.createTexture(e,null,this.texture_),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.viewport(0,0,e[0],e[1]),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture_,0),this.data_=new Uint8Array(e[0]*e[1]*4)},e}();t["a"]=a},da5d:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"h",(function(){return s})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return f})),r.d(t,"i",(function(){return p})),r.d(t,"b",(function(){return g}));r("9f5e");function i(e,t){return g().createElementNS(e,t)}function n(e,t){return a(e,t,[]).join("")}function a(e,t,r){if(e.nodeType==Node.CDATA_SECTION_NODE||e.nodeType==Node.TEXT_NODE)t?r.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):r.push(e.nodeValue);else{var i=void 0;for(i=e.firstChild;i;i=i.nextSibling)a(i,t,r)}return r}function o(e){return"documentElement"in e}function s(e){return(new DOMParser).parseFromString(e,"application/xml")}function h(e,t){return function(r,i){var n=e.call(void 0!==t?t:this,r,i);if(void 0!==n){var a=i[i.length-1];a.push(n)}}}function u(e,t,r){return function(i,n){var a=e.call(void 0!==r?r:this,i,n);if(void 0!==a){var o=n[n.length-1],s=void 0!==t?t:i.localName,h=void 0;s in o?h=o[s]:(h=[],o[s]=h),h.push(a)}}}function l(e,t,r){return function(i,n){var a=e.call(void 0!==r?r:this,i,n);if(void 0!==a){var o=n[n.length-1],s=void 0!==t?t:i.localName;o[s]=a}}}function c(e,t){var r=e;return function(e,n,a){var o=n[n.length-1],s=o.node,h=r;void 0===h&&(h=a);var u=void 0!==t?t:s.namespaceURI;return i(u,h)}}c();function f(e,t,r){var i,n,a=void 0!==r?r:{};for(i=0,n=e.length;i<n;++i)a[e[i]]=t;return a}function d(e,t,r,i){var n;for(n=t.firstElementChild;n;n=n.nextElementSibling){var a=e[n.namespaceURI];if(void 0!==a){var o=a[n.localName];void 0!==o&&o.call(i,n,r)}}}function p(e,t,r,i,n){return i.push(e),d(t,r,i,n),i.pop()}var m=void 0;function g(){return void 0===m&&"undefined"!==typeof document&&(m=document.implementation.createDocument("","",null)),m}}}]);
//# sourceMappingURL=chunk-8e976aa4.bb99ca17.js.map