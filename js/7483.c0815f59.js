(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[7483],{82582:function(e){!function(t,r){e.exports=r()}(0,(function(){"use strict";function e(e,n,i,a,o){!function e(r,n,i,a,o){for(;a>i;){if(a-i>600){var s=a-i+1,u=n-i+1,h=Math.log(s),f=.5*Math.exp(2*h/3),l=.5*Math.sqrt(h*f*(s-f)/s)*(u-s/2<0?-1:1),c=Math.max(i,Math.floor(n-u*f/s+l)),d=Math.min(a,Math.floor(n+(s-u)*f/s+l));e(r,n,c,d,o)}var x=r[n],m=i,_=a;for(t(r,i,n),o(r[a],x)>0&&t(r,i,a);m<_;){for(t(r,m,_),m++,_--;o(r[m],x)<0;)m++;for(;o(r[_],x)>0;)_--}0===o(r[i],x)?t(r,i,_):t(r,++_,a),_<=n&&(i=_+1),n<=_&&(a=_-1)}}(e,n,i||0,a||e.length-1,o||r)}function t(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function r(e,t){return e<t?-1:e>t?1:0}var n=function(e){void 0===e&&(e=9),this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function i(e,t,r){if(!r)return t.indexOf(e);for(var n=0;n<t.length;n++)if(r(e,t[n]))return n;return-1}function a(e,t){o(e,0,e.children.length,t,e)}function o(e,t,r,n,i){i||(i=x(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var a=t;a<r;a++){var o=e.children[a];s(i,e.leaf?n(o):o)}return i}function s(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function u(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function l(e){return e.maxX-e.minX+(e.maxY-e.minY)}function c(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function d(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function m(t,r,n,i,a){for(var o=[r,n];o.length;)if(!((n=o.pop())-(r=o.pop())<=i)){var s=r+Math.ceil((n-r)/i/2)*i;e(t,s,r,n,a),o.push(r,s,s,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(e){var t=this.data,r=[];if(!d(e,t))return r;for(var n=this.toBBox,i=[];t;){for(var a=0;a<t.children.length;a++){var o=t.children[a],s=t.leaf?n(o):o;d(e,s)&&(t.leaf?r.push(o):c(e,s)?this._all(o,r):i.push(o))}t=i.pop()}return r},n.prototype.collides=function(e){var t=this.data;if(!d(e,t))return!1;for(var r=[];t;){for(var n=0;n<t.children.length;n++){var i=t.children[n],a=t.leaf?this.toBBox(i):i;if(d(e,a)){if(t.leaf||c(e,a))return!0;r.push(i)}}t=r.pop()}return!1},n.prototype.load=function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0;t<e.length;t++)this.insert(e[t]);return this}var r=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var n=this.data;this.data=r,r=n}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},n.prototype.insert=function(e){return e&&this._insert(e,this.data.height-1),this},n.prototype.clear=function(){return this.data=x([]),this},n.prototype.remove=function(e,t){if(!e)return this;for(var r,n,a,o=this.data,s=this.toBBox(e),u=[],h=[];o||u.length;){if(o||(o=u.pop(),n=u[u.length-1],r=h.pop(),a=!0),o.leaf){var f=i(e,o.children,t);if(-1!==f)return o.children.splice(f,1),u.push(o),this._condense(u),this}a||o.leaf||!c(o,s)?n?(r++,o=n.children[r],a=!1):o=null:(u.push(o),h.push(r),r=0,n=o,o=o.children[0])}return this},n.prototype.toBBox=function(e){return e},n.prototype.compareMinX=function(e,t){return e.minX-t.minX},n.prototype.compareMinY=function(e,t){return e.minY-t.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(e){return this.data=e,this},n.prototype._all=function(e,t){for(var r=[];e;)e.leaf?t.push.apply(t,e.children):r.push.apply(r,e.children),e=r.pop();return t},n.prototype._build=function(e,t,r,n){var i,o=r-t+1,s=this._maxEntries;if(o<=s)return a(i=x(e.slice(t,r+1)),this.toBBox),i;n||(n=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,n-1))),(i=x([])).leaf=!1,i.height=n;var u=Math.ceil(o/s),h=u*Math.ceil(Math.sqrt(s));m(e,t,r,h,this.compareMinX);for(var f=t;f<=r;f+=h){var l=Math.min(f+h-1,r);m(e,f,l,u,this.compareMinY);for(var c=f;c<=l;c+=u){var d=Math.min(c+u-1,l);i.children.push(this._build(e,c,d,n-1))}}return a(i,this.toBBox),i},n.prototype._chooseSubtree=function(e,t,r,n){for(;n.push(t),!t.leaf&&n.length-1!==r;){for(var i=1/0,a=1/0,o=void 0,s=0;s<t.children.length;s++){var u=t.children[s],h=f(u),l=(c=e,d=u,(Math.max(d.maxX,c.maxX)-Math.min(d.minX,c.minX))*(Math.max(d.maxY,c.maxY)-Math.min(d.minY,c.minY))-h);l<a?(a=l,i=h<i?h:i,o=u):l===a&&h<i&&(i=h,o=u)}t=o||t.children[0]}var c,d;return t},n.prototype._insert=function(e,t,r){var n=r?e:this.toBBox(e),i=[],a=this._chooseSubtree(n,this.data,t,i);for(a.children.push(e),s(a,n);t>=0&&i[t].children.length>this._maxEntries;)this._split(i,t),t--;this._adjustParentBBoxes(n,i,t)},n.prototype._split=function(e,t){var r=e[t],n=r.children.length,i=this._minEntries;this._chooseSplitAxis(r,i,n);var o=this._chooseSplitIndex(r,i,n),s=x(r.children.splice(o,r.children.length-o));s.height=r.height,s.leaf=r.leaf,a(r,this.toBBox),a(s,this.toBBox),t?e[t-1].children.push(s):this._splitRoot(r,s)},n.prototype._splitRoot=function(e,t){this.data=x([e,t]),this.data.height=e.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(e,t,r){for(var n,i,a,s,u,h,l,c=1/0,d=1/0,x=t;x<=r-t;x++){var m=o(e,0,x,this.toBBox),_=o(e,x,r,this.toBBox),g=(i=m,a=_,s=void 0,u=void 0,h=void 0,l=void 0,s=Math.max(i.minX,a.minX),u=Math.max(i.minY,a.minY),h=Math.min(i.maxX,a.maxX),l=Math.min(i.maxY,a.maxY),Math.max(0,h-s)*Math.max(0,l-u)),p=f(m)+f(_);g<c?(c=g,n=x,d=p<d?p:d):g===c&&p<d&&(d=p,n=x)}return n||r-t},n.prototype._chooseSplitAxis=function(e,t,r){var n=e.leaf?this.compareMinX:u,i=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,r,n)<this._allDistMargin(e,t,r,i)&&e.children.sort(n)},n.prototype._allDistMargin=function(e,t,r,n){e.children.sort(n);for(var i=this.toBBox,a=o(e,0,t,i),u=o(e,r-t,r,i),h=l(a)+l(u),f=t;f<r-t;f++){var c=e.children[f];s(a,e.leaf?i(c):c),h+=l(a)}for(var d=r-t-1;d>=t;d--){var x=e.children[d];s(u,e.leaf?i(x):x),h+=l(u)}return h},n.prototype._adjustParentBBoxes=function(e,t,r){for(var n=r;n>=0;n--)s(t[n],e)},n.prototype._condense=function(e){for(var t=e.length-1,r=void 0;t>=0;t--)0===e[t].children.length?t>0?(r=e[t-1].children).splice(r.indexOf(e[t]),1):this.clear():a(e[t],this.toBBox)},n}))},81428:(e,t,r)=>{"use strict";function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e,t){return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}r.d(t,{U:()=>n,u:()=>i})},41536:(e,t,r)=>{"use strict";r.d(t,{Ae:()=>f,F_:()=>o,MB:()=>s,RF:()=>c,cX:()=>a,fw:()=>x,kd:()=>u,qO:()=>i,r1:()=>l,wg:()=>h});var n=r(40177);const i=34962,a=34963,o=35040,s=35044,u=35048,h=5121,f=5123,l=5125,c=5126,d=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function x(e,t){t=Object.assign({preserveDrawingBuffer:!0,antialias:!n.ME},t);const r=d.length;for(let n=0;n<r;++n)try{const r=e.getContext(d[n],t);if(r)return r}catch(i){}return null}},22988:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>u});var n=r(41536),i=r(99515);const a={STATIC_DRAW:n.MB,STREAM_DRAW:n.F_,DYNAMIC_DRAW:n.kd};class o{constructor(e,t){this.array=null,this.type=e,(0,i.h)(e===n.qO||e===n.cX,62),this.usage=void 0!==t?t:a.STATIC_DRAW}ofSize(e){return this.array=new(s(this.type))(e),this}fromArray(e){return this.array=s(this.type).from(e),this}fromArrayBuffer(e){return this.array=new(s(this.type))(e),this}getType(){return this.type}getArray(){return this.array}getUsage(){return this.usage}getSize(){return this.array?this.array.length:0}}function s(e){switch(e){case n.qO:return Float32Array;case n.cX:return Uint32Array;default:return Float32Array}}const u=o},37751:(e,t,r)=>{"use strict";r.d(t,{GC:()=>m,ZC:()=>x,ZP:()=>A});const n={LOST:"webglcontextlost",RESTORED:"webglcontextrestored"};var i=r(55431),a=r(74187);const o="\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n",s="\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n  uniform float u_opacity;\n   \n  varying vec2 v_texCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;\n  }\n";class u{constructor(e){this.gl_=e.webGlContext;const t=this.gl_;this.scaleRatio_=e.scaleRatio||1,this.renderTargetTexture_=t.createTexture(),this.renderTargetTextureSize_=null,this.frameBuffer_=t.createFramebuffer(),this.depthBuffer_=t.createRenderbuffer();const r=t.createShader(t.VERTEX_SHADER);t.shaderSource(r,e.vertexShader||o),t.compileShader(r);const n=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(n,e.fragmentShader||s),t.compileShader(n),this.renderTargetProgram_=t.createProgram(),t.attachShader(this.renderTargetProgram_,r),t.attachShader(this.renderTargetProgram_,n),t.linkProgram(this.renderTargetProgram_),this.renderTargetVerticesBuffer_=t.createBuffer();const i=[-1,-1,1,-1,-1,1,1,-1,1,1,-1,1];t.bindBuffer(t.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW),this.renderTargetAttribLocation_=t.getAttribLocation(this.renderTargetProgram_,"a_position"),this.renderTargetUniformLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_screenSize"),this.renderTargetOpacityLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_opacity"),this.renderTargetTextureLocation_=t.getUniformLocation(this.renderTargetProgram_,"u_image"),this.uniforms_=[],e.uniforms&&Object.keys(e.uniforms).forEach((r=>{this.uniforms_.push({value:e.uniforms[r],location:t.getUniformLocation(this.renderTargetProgram_,r)})}))}getGL(){return this.gl_}init(e){const t=this.getGL(),r=[t.drawingBufferWidth*this.scaleRatio_,t.drawingBufferHeight*this.scaleRatio_];if(t.bindFramebuffer(t.FRAMEBUFFER,this.getFrameBuffer()),t.bindRenderbuffer(t.RENDERBUFFER,this.getDepthBuffer()),t.viewport(0,0,r[0],r[1]),!this.renderTargetTextureSize_||this.renderTargetTextureSize_[0]!==r[0]||this.renderTargetTextureSize_[1]!==r[1]){this.renderTargetTextureSize_=r;const e=0,n=t.RGBA,i=0,a=t.RGBA,o=t.UNSIGNED_BYTE,s=null;t.bindTexture(t.TEXTURE_2D,this.renderTargetTexture_),t.texImage2D(t.TEXTURE_2D,e,n,r[0],r[1],i,a,o,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.renderTargetTexture_,0),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,r[0],r[1]),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depthBuffer_)}}apply(e,t,r,n){const i=this.getGL(),o=e.size;if(i.bindFramebuffer(i.FRAMEBUFFER,t?t.getFrameBuffer():null),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.renderTargetTexture_),!t){const t=(0,a.sq)(i.canvas);if(!e.renderTargets[t]){const r=i.getContextAttributes();r&&r.preserveDrawingBuffer&&(i.clearColor(0,0,0,0),i.clearDepth(1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)),e.renderTargets[t]=!0}}i.disable(i.DEPTH_TEST),i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA),i.viewport(0,0,i.drawingBufferWidth,i.drawingBufferHeight),i.bindBuffer(i.ARRAY_BUFFER,this.renderTargetVerticesBuffer_),i.useProgram(this.renderTargetProgram_),i.enableVertexAttribArray(this.renderTargetAttribLocation_),i.vertexAttribPointer(this.renderTargetAttribLocation_,2,i.FLOAT,!1,0,0),i.uniform2f(this.renderTargetUniformLocation_,o[0],o[1]),i.uniform1i(this.renderTargetTextureLocation_,0);const s=e.layerStatesArray[e.layerIndex].opacity;i.uniform1f(this.renderTargetOpacityLocation_,s),this.applyUniforms(e),r&&r(i,e),i.drawArrays(i.TRIANGLES,0,6),n&&n(i,e)}getFrameBuffer(){return this.frameBuffer_}getDepthBuffer(){return this.depthBuffer_}applyUniforms(e){const t=this.getGL();let r,n=1;this.uniforms_.forEach((function(i){if(r="function"===typeof i.value?i.value(e):i.value,r instanceof HTMLCanvasElement||r instanceof ImageData)i.texture||(i.texture=t.createTexture()),t.activeTexture(t[`TEXTURE${n}`]),t.bindTexture(t.TEXTURE_2D,i.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r instanceof ImageData?t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,r.width,r.height,0,t.UNSIGNED_BYTE,new Uint8Array(r.data)):t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.uniform1i(i.location,n++);else if(Array.isArray(r))switch(r.length){case 2:return void t.uniform2f(i.location,r[0],r[1]);case 3:return void t.uniform3f(i.location,r[0],r[1],r[2]);case 4:return void t.uniform4f(i.location,r[0],r[1],r[2],r[3]);default:return}else"number"===typeof r&&t.uniform1f(i.location,r)}))}}const h=u;var f=r(41536),l=r(69374),c=r(6101),d=r(81428);const x={PROJECTION_MATRIX:"u_projectionMatrix",OFFSET_SCALE_MATRIX:"u_offsetScaleMatrix",OFFSET_ROTATION_MATRIX:"u_offsetRotateMatrix",TIME:"u_time",ZOOM:"u_zoom",RESOLUTION:"u_resolution",VIEWPORT_SIZE_PX:"u_viewportSizePx",PIXEL_RATIO:"u_pixelRatio",HIT_DETECTION:"u_hitDetection"},m={UNSIGNED_BYTE:f.wg,UNSIGNED_SHORT:f.Ae,UNSIGNED_INT:f.r1,FLOAT:f.RF},_={};function g(e){return"shared/"+e}let p=0;function E(){const e="unique/"+p;return p+=1,e}function T(e){let t=_[e];if(!t){const r=document.createElement("canvas");r.width=1,r.height=1,r.style.position="absolute",r.style.left="0";const n=(0,f.fw)(r);t={users:0,context:n},_[e]=t}return t.users+=1,t.context}function v(e){const t=_[e];if(!t)return;if(t.users-=1,t.users>0)return;const r=t.context,n=r.getExtension("WEBGL_lose_context");n&&n.loseContext();const i=r.canvas;i.width=1,i.height=1,delete _[e]}class y extends i.Z{constructor(e){super(),e=e||{},this.boundHandleWebGLContextLost_=this.handleWebGLContextLost.bind(this),this.boundHandleWebGLContextRestored_=this.handleWebGLContextRestored.bind(this),this.canvasCacheKey_=e.canvasCacheKey?g(e.canvasCacheKey):E(),this.gl_=T(this.canvasCacheKey_),this.bufferCache_={},this.extensionCache_={},this.currentProgram_=null;const t=this.gl_.canvas;t.addEventListener(n.LOST,this.boundHandleWebGLContextLost_),t.addEventListener(n.RESTORED,this.boundHandleWebGLContextRestored_),this.offsetRotateMatrix_=(0,c.Ue)(),this.offsetScaleMatrix_=(0,c.Ue)(),this.tmpMat4_=(0,d.U)(),this.uniformLocationsByProgram_={},this.attribLocationsByProgram_={},this.uniforms_=[],e.uniforms&&this.setUniforms(e.uniforms),this.postProcessPasses_=e.postProcesses?e.postProcesses.map((e=>new h({webGlContext:this.gl_,scaleRatio:e.scaleRatio,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms}))):[new h({webGlContext:this.gl_})],this.shaderCompileErrors_=null,this.startTime_=Date.now()}setUniforms(e){this.uniforms_=[];for(const t in e)this.uniforms_.push({name:t,value:e[t]})}canvasCacheKeyMatches(e){return this.canvasCacheKey_===g(e)}getExtension(e){if(e in this.extensionCache_)return this.extensionCache_[e];const t=this.gl_.getExtension(e);return this.extensionCache_[e]=t,t}bindBuffer(e){const t=this.gl_,r=(0,a.sq)(e);let n=this.bufferCache_[r];if(!n){const i=t.createBuffer();n={buffer:e,webGlBuffer:i},this.bufferCache_[r]=n}t.bindBuffer(e.getType(),n.webGlBuffer)}flushBufferData(e){const t=this.gl_;this.bindBuffer(e),t.bufferData(e.getType(),e.getArray(),e.getUsage())}deleteBuffer(e){const t=this.gl_,r=(0,a.sq)(e),n=this.bufferCache_[r];n&&!t.isContextLost()&&t.deleteBuffer(n.webGlBuffer),delete this.bufferCache_[r]}disposeInternal(){const e=this.gl_.canvas;e.removeEventListener(n.LOST,this.boundHandleWebGLContextLost_),e.removeEventListener(n.RESTORED,this.boundHandleWebGLContextRestored_),v(this.canvasCacheKey_),delete this.gl_}prepareDraw(e,t,r){const n=this.gl_,i=this.getCanvas(),a=e.size,o=e.pixelRatio;i.width===a[0]*o&&i.height===a[1]*o||(i.width=a[0]*o,i.height=a[1]*o,i.style.width=a[0]+"px",i.style.height=a[1]+"px");for(let s=this.postProcessPasses_.length-1;s>=0;s--)this.postProcessPasses_[s].init(e);n.bindTexture(n.TEXTURE_2D,null),n.clearColor(0,0,0,0),n.depthRange(0,1),n.clearDepth(1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.BLEND),n.blendFunc(n.ONE,t?n.ZERO:n.ONE_MINUS_SRC_ALPHA),r?(n.enable(n.DEPTH_TEST),n.depthFunc(n.LEQUAL)):n.disable(n.DEPTH_TEST)}bindTexture(e,t,r){const n=this.gl_;n.activeTexture(n.TEXTURE0+t),n.bindTexture(n.TEXTURE_2D,e),n.uniform1i(this.getUniformLocation(r),t)}prepareDrawToRenderTarget(e,t,r,n){const i=this.gl_,a=t.getSize();i.bindFramebuffer(i.FRAMEBUFFER,t.getFramebuffer()),i.bindRenderbuffer(i.RENDERBUFFER,t.getDepthbuffer()),i.viewport(0,0,a[0],a[1]),i.bindTexture(i.TEXTURE_2D,t.getTexture()),i.clearColor(0,0,0,0),i.depthRange(0,1),i.clearDepth(1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.ONE,r?i.ZERO:i.ONE_MINUS_SRC_ALPHA),n?(i.enable(i.DEPTH_TEST),i.depthFunc(i.LEQUAL)):i.disable(i.DEPTH_TEST)}drawElements(e,t){const r=this.gl_;this.getExtension("OES_element_index_uint");const n=r.UNSIGNED_INT,i=4,a=t-e,o=e*i;r.drawElements(r.TRIANGLES,a,n,o)}finalizeDraw(e,t,r){for(let n=0,i=this.postProcessPasses_.length;n<i;n++)n===i-1?this.postProcessPasses_[n].apply(e,null,t,r):this.postProcessPasses_[n].apply(e,this.postProcessPasses_[n+1])}getCanvas(){return this.gl_.canvas}getGL(){return this.gl_}applyFrameState(e){const t=e.size,r=e.viewState.rotation,n=e.pixelRatio,i=(0,c.mc)(this.offsetScaleMatrix_);(0,c.bA)(i,2/t[0],2/t[1]);const a=(0,c.mc)(this.offsetRotateMatrix_);0!==r&&(0,c.U1)(a,-r),this.setUniformMatrixValue(x.OFFSET_SCALE_MATRIX,(0,d.u)(this.tmpMat4_,i)),this.setUniformMatrixValue(x.OFFSET_ROTATION_MATRIX,(0,d.u)(this.tmpMat4_,a)),this.setUniformFloatValue(x.TIME,.001*(Date.now()-this.startTime_)),this.setUniformFloatValue(x.ZOOM,e.viewState.zoom),this.setUniformFloatValue(x.RESOLUTION,e.viewState.resolution),this.setUniformFloatValue(x.PIXEL_RATIO,n),this.setUniformFloatVec2(x.VIEWPORT_SIZE_PX,[t[0],t[1]])}applyHitDetectionUniform(e){const t=this.getUniformLocation(x.HIT_DETECTION);this.getGL().uniform1i(t,e?1:0)}applyUniforms(e){const t=this.gl_;let r,n=0;this.uniforms_.forEach((i=>{if(r="function"===typeof i.value?i.value(e):i.value,r instanceof HTMLCanvasElement||r instanceof HTMLImageElement||r instanceof ImageData){i.texture||(i.prevValue=void 0,i.texture=t.createTexture()),t.activeTexture(t[`TEXTURE${n}`]),t.bindTexture(t.TEXTURE_2D,i.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);const e=!(r instanceof HTMLImageElement)||r.complete;e&&i.prevValue!==r&&(i.prevValue=r,t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)),t.uniform1i(this.getUniformLocation(i.name),n++)}else if(Array.isArray(r)&&6===r.length)this.setUniformMatrixValue(i.name,(0,d.u)(this.tmpMat4_,r));else if(Array.isArray(r)&&r.length<=4)switch(r.length){case 2:return void t.uniform2f(this.getUniformLocation(i.name),r[0],r[1]);case 3:return void t.uniform3f(this.getUniformLocation(i.name),r[0],r[1],r[2]);case 4:return void t.uniform4f(this.getUniformLocation(i.name),r[0],r[1],r[2],r[3]);default:return}else"number"===typeof r&&t.uniform1f(this.getUniformLocation(i.name),r)}))}useProgram(e,t){const r=this.gl_;r.useProgram(e),this.currentProgram_=e,this.applyFrameState(t),this.applyUniforms(t)}compileShader(e,t){const r=this.gl_,n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}getProgram(e,t){const r=this.gl_,n=this.compileShader(e,r.FRAGMENT_SHADER),i=this.compileShader(t,r.VERTEX_SHADER),a=r.createProgram();if(r.attachShader(a,n),r.attachShader(a,i),r.linkProgram(a),!r.getShaderParameter(n,r.COMPILE_STATUS)){const e=`Fragment shader compilation failed: ${r.getShaderInfoLog(n)}`;throw new Error(e)}if(r.deleteShader(n),!r.getShaderParameter(i,r.COMPILE_STATUS)){const e=`Vertex shader compilation failed: ${r.getShaderInfoLog(i)}`;throw new Error(e)}if(r.deleteShader(i),!r.getProgramParameter(a,r.LINK_STATUS)){const e=`GL program linking failed: ${r.getProgramInfoLog(a)}`;throw new Error(e)}return a}getUniformLocation(e){const t=(0,a.sq)(this.currentProgram_);return void 0===this.uniformLocationsByProgram_[t]&&(this.uniformLocationsByProgram_[t]={}),void 0===this.uniformLocationsByProgram_[t][e]&&(this.uniformLocationsByProgram_[t][e]=this.gl_.getUniformLocation(this.currentProgram_,e)),this.uniformLocationsByProgram_[t][e]}getAttributeLocation(e){const t=(0,a.sq)(this.currentProgram_);return void 0===this.attribLocationsByProgram_[t]&&(this.attribLocationsByProgram_[t]={}),void 0===this.attribLocationsByProgram_[t][e]&&(this.attribLocationsByProgram_[t][e]=this.gl_.getAttribLocation(this.currentProgram_,e)),this.attribLocationsByProgram_[t][e]}makeProjectionTransform(e,t){const r=e.size,n=e.viewState.rotation,i=e.viewState.resolution,a=e.viewState.center;return(0,c.qC)(t,0,0,2/(i*r[0]),2/(i*r[1]),-n,-a[0],-a[1]),t}setUniformFloatValue(e,t){this.gl_.uniform1f(this.getUniformLocation(e),t)}setUniformFloatVec2(e,t){this.gl_.uniform2fv(this.getUniformLocation(e),t)}setUniformFloatVec4(e,t){this.gl_.uniform4fv(this.getUniformLocation(e),t)}setUniformMatrixValue(e,t){this.gl_.uniformMatrix4fv(this.getUniformLocation(e),!1,t)}enableAttributeArray_(e,t,r,n,i){const a=this.getAttributeLocation(e);a<0||(this.gl_.enableVertexAttribArray(a),this.gl_.vertexAttribPointer(a,t,r,!1,n,i))}enableAttributes(e){const t=b(e);let r=0;for(let n=0;n<e.length;n++){const i=e[n];this.enableAttributeArray_(i.name,i.size,i.type||f.RF,t,r),r+=i.size*R(i.type)}}handleWebGLContextLost(){(0,l.Z)(this.bufferCache_),this.currentProgram_=null}handleWebGLContextRestored(){}createTexture(e,t,r){const n=this.gl_;r=r||n.createTexture();const i=0,a=n.RGBA,o=0,s=n.RGBA,u=n.UNSIGNED_BYTE;return n.bindTexture(n.TEXTURE_2D,r),t?n.texImage2D(n.TEXTURE_2D,i,a,s,u,t):n.texImage2D(n.TEXTURE_2D,i,a,e[0],e[1],o,s,u,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}}function b(e){let t=0;for(let r=0;r<e.length;r++){const n=e[r];t+=n.size*R(n.type)}return t}function R(e){switch(e){case m.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case m.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case m.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case m.FLOAT:default:return Float32Array.BYTES_PER_ELEMENT}}const A=y},60931:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(65537);const i=new Uint8Array(4);class a{constructor(e,t){this.helper_=e;const r=e.getGL();this.texture_=r.createTexture(),this.framebuffer_=r.createFramebuffer(),this.depthbuffer_=r.createRenderbuffer(),this.size_=t||[1,1],this.data_=new Uint8Array(0),this.dataCacheDirty_=!0,this.updateSize_()}setSize(e){(0,n.fS)(e,this.size_)||(this.size_[0]=e[0],this.size_[1]=e[1],this.updateSize_())}getSize(){return this.size_}clearCachedData(){this.dataCacheDirty_=!0}readAll(){if(this.dataCacheDirty_){const e=this.size_,t=this.helper_.getGL();t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.readPixels(0,0,e[0],e[1],t.RGBA,t.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_}readPixel(e,t){if(e<0||t<0||e>this.size_[0]||t>=this.size_[1])return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;this.readAll();const r=Math.floor(e)+(this.size_[1]-Math.floor(t)-1)*this.size_[0];return i[0]=this.data_[4*r],i[1]=this.data_[4*r+1],i[2]=this.data_[4*r+2],i[3]=this.data_[4*r+3],i}getTexture(){return this.texture_}getFramebuffer(){return this.framebuffer_}getDepthbuffer(){return this.depthbuffer_}updateSize_(){const e=this.size_,t=this.helper_.getGL();this.texture_=this.helper_.createTexture(e,null,this.texture_),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.viewport(0,0,e[0],e[1]),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture_,0),t.bindRenderbuffer(t.RENDERBUFFER,this.depthbuffer_),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e[0],e[1]),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depthbuffer_),this.data_=new Uint8Array(e[0]*e[1]*4)}}const o=a},21025:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});var n=r(48764)["Buffer"];function i(){const e='const e="GENERATE_POLYGON_BUFFERS",t="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS",r={1:"The view center is not defined",2:"The view resolution is not defined",3:"The view rotation is not defined",4:"`image` and `src` cannot be provided at the same time",5:"`imgSize` must be set when `image` is provided",7:"`format` must be set when `url` is set",8:"Unknown `serverType` configured",9:"`url` must be configured or set using `#setUrl()`",10:"The default `geometryFunction` can only handle `Point` geometries",11:"`options.featureTypes` must be an Array",12:"`options.geometryName` must also be provided when `options.bbox` is set",13:"Invalid corner",14:"Invalid color",15:"Tried to get a value for a key that does not exist in the cache",16:"Tried to set a value for a key that is used already",17:"`resolutions` must be sorted in descending order",18:"Either `origin` or `origins` must be configured, never both",19:"Number of `tileSizes` and `resolutions` must be equal",20:"Number of `origins` and `resolutions` must be equal",22:"Either `tileSize` or `tileSizes` must be configured, never both",24:"Invalid extent or geometry provided as `geometry`",25:"Cannot fit empty extent provided as `geometry`",26:"Features must have an id set",27:"Features must have an id set",28:\'`renderMode` must be `"hybrid"` or `"vector"`\',30:"The passed `feature` was already added to the source",31:"Tried to enqueue an `element` that was already added to the queue",32:"Transformation matrix cannot be inverted",33:"Invalid units",34:"Invalid geometry layout",36:"Unknown SRS type",37:"Unknown geometry type found",38:"`styleMapValue` has an unknown type",39:"Unknown geometry type",40:"Expected `feature` to have a geometry",41:"Expected an `ol/style/Style` or an array of `ol/style/Style.js`",42:"Question unknown, the answer is 42",43:"Expected `layers` to be an array or a `Collection`",47:"Expected `controls` to be an array or an `ol/Collection`",48:"Expected `interactions` to be an array or an `ol/Collection`",49:"Expected `overlays` to be an array or an `ol/Collection`",50:"`options.featureTypes` should be an Array",51:"Either `url` or `tileJSON` options must be provided",52:"Unknown `serverType` configured",53:"Unknown `tierSizeCalculation` configured",55:"The {-y} placeholder requires a tile grid with extent",56:"mapBrowserEvent must originate from a pointer event",57:"At least 2 conditions are required",59:"Invalid command found in the PBF",60:"Missing or invalid `size`",61:"Cannot determine IIIF Image API version from provided image information JSON",62:"A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`",64:"Layer opacity must be a number",66:"`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`",67:"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both",68:"A VectorTile source can only be rendered if it has a projection compatible with the view projection",69:"`width` or `height` cannot be provided together with `scale`"};class o extends Error{constructor(e){const t=r[e];super(t),this.code=e,this.name="AssertionError",this.message=t}}var i=o;function a(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function s(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new i(t)}(0!==n,32);const o=t[0],a=t[1],s=t[2],u=t[3],f=t[4],x=t[5];return e[0]=u/n,e[1]=-a/n,e[2]=-s/n,e[3]=o/n,e[4]=(s*x-u*f)/n,e[5]=-(o*x-a*f)/n,e}function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}new Array(6);var f={exports:{}};function x(e,t,n){n=n||2;var r,o,i,a,s,u,f,x=t&&t.length,h=x?t[0]*n:e.length,v=l(e,0,h,n,!0),d=[];if(!v||v.next===v.prev)return d;if(x&&(v=function(e,t,n,r){var o,i,a,s=[];for(o=0,i=t.length;o<i;o++)(a=l(e,t[o]*r,o<i-1?t[o+1]*r:e.length,r,!1))===a.next&&(a.steiner=!0),s.push(A(a));for(s.sort(b),o=0;o<s.length;o++)n=g(s[o],n);return n}(e,t,v,n)),e.length>80*n){r=i=e[0],o=a=e[1];for(var y=n;y<h;y+=n)(s=e[y])<r&&(r=s),(u=e[y+1])<o&&(o=u),s>i&&(i=s),u>a&&(a=u);f=0!==(f=Math.max(i-r,a-o))?32767/f:0}return c(v,d,n,r,o,f,0),d}function l(e,t,n,r,o){var i,a;if(o===P(e,t,n,r)>0)for(i=t;i<n;i+=r)a=k(i,e[i],e[i+1],a);else for(i=n-r;i>=t;i-=r)a=k(i,e[i],e[i+1],a);return a&&F(a,a.next)&&(R(a),a=a.next),a}function h(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!F(r,r.next)&&0!==Z(r.prev,r,r.next))r=r.next;else{if(R(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function c(e,t,n,r,o,i,a){if(e){!a&&i&&function(e,t,n,r){var o=e;do{0===o.z&&(o.z=w(o.x,o.y,t,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,function(e){var t,n,r,o,i,a,s,u,f=1;do{for(n=e,e=null,i=null,a=0;n;){for(a++,r=n,s=0,t=0;t<f&&(s++,r=r.nextZ);t++);for(u=f;s>0||u>0&&r;)0!==s&&(0===u||!r||n.z<=r.z)?(o=n,n=n.nextZ,s--):(o=r,r=r.nextZ,u--),i?i.nextZ=o:e=o,o.prevZ=i,i=o;n=r}i.nextZ=null,f*=2}while(a>1)}(o)}(e,r,o,i);for(var s,u,f=e;e.prev!==e.next;)if(s=e.prev,u=e.next,i?d(e,r,o,i):v(e))t.push(s.i/n|0),t.push(e.i/n|0),t.push(u.i/n|0),R(e),e=u.next,f=u.next;else if((e=u)===f){a?1===a?c(e=y(h(e),t,n),t,n,r,o,i,2):2===a&&p(e,t,n,r,o,i):c(h(e),t,n,r,o,i,1);break}}}function v(e){var t=e.prev,n=e,r=e.next;if(Z(t,n,r)>=0)return!1;for(var o=t.x,i=n.x,a=r.x,s=t.y,u=n.y,f=r.y,x=o<i?o<a?o:a:i<a?i:a,l=s<u?s<f?s:f:u<f?u:f,h=o>i?o>a?o:a:i>a?i:a,c=s>u?s>f?s:f:u>f?u:f,v=r.next;v!==t;){if(v.x>=x&&v.x<=h&&v.y>=l&&v.y<=c&&E(o,s,i,u,a,f,v.x,v.y)&&Z(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function d(e,t,n,r){var o=e.prev,i=e,a=e.next;if(Z(o,i,a)>=0)return!1;for(var s=o.x,u=i.x,f=a.x,x=o.y,l=i.y,h=a.y,c=s<u?s<f?s:f:u<f?u:f,v=x<l?x<h?x:h:l<h?l:h,d=s>u?s>f?s:f:u>f?u:f,y=x>l?x>h?x:h:l>h?l:h,p=w(c,v,t,n,r),b=w(d,y,t,n,r),g=e.prevZ,m=e.nextZ;g&&g.z>=p&&m&&m.z<=b;){if(g.x>=c&&g.x<=d&&g.y>=v&&g.y<=y&&g!==o&&g!==a&&E(s,x,u,l,f,h,g.x,g.y)&&Z(g.prev,g,g.next)>=0)return!1;if(g=g.prevZ,m.x>=c&&m.x<=d&&m.y>=v&&m.y<=y&&m!==o&&m!==a&&E(s,x,u,l,f,h,m.x,m.y)&&Z(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;g&&g.z>=p;){if(g.x>=c&&g.x<=d&&g.y>=v&&g.y<=y&&g!==o&&g!==a&&E(s,x,u,l,f,h,g.x,g.y)&&Z(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;m&&m.z<=b;){if(m.x>=c&&m.x<=d&&m.y>=v&&m.y<=y&&m!==o&&m!==a&&E(s,x,u,l,f,h,m.x,m.y)&&Z(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function y(e,t,n){var r=e;do{var o=r.prev,i=r.next.next;!F(o,i)&&T(o,r,r.next,i)&&z(o,i)&&z(i,o)&&(t.push(o.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),R(r),R(r.next),r=e=i),r=r.next}while(r!==e);return h(r)}function p(e,t,n,r,o,i){var a=e;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&M(a,s)){var u=U(a,s);return a=h(a,a.next),u=h(u,u.next),c(a,t,n,r,o,i,0),void c(u,t,n,r,o,i,0)}s=s.next}a=a.next}while(a!==e)}function b(e,t){return e.x-t.x}function g(e,t){var n=function(e,t){var n,r=t,o=e.x,i=e.y,a=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var s=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=o&&s>a&&(a=s,n=r.x<r.next.x?r:r.next,s===o))return n}r=r.next}while(r!==t);if(!n)return null;var u,f=n,x=n.x,l=n.y,h=1/0;r=n;do{o>=r.x&&r.x>=x&&o!==r.x&&E(i<l?o:a,i,x,l,i<l?a:o,i,r.x,r.y)&&(u=Math.abs(i-r.y)/(o-r.x),z(r,e)&&(u<h||u===h&&(r.x>n.x||r.x===n.x&&m(n,r)))&&(n=r,h=u)),r=r.next}while(r!==f);return n}(e,t);if(!n)return t;var r=U(n,e);return h(r,r.next),h(n,n.next)}function m(e,t){return Z(e.prev,e,t.prev)<0&&Z(t.next,e,e.next)<0}function w(e,t,n,r,o){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*o|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function A(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function E(e,t,n,r,o,i,a,s){return(o-a)*(t-s)>=(e-a)*(i-s)&&(e-a)*(r-s)>=(n-a)*(t-s)&&(n-a)*(i-s)>=(o-a)*(r-s)}function M(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&T(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(z(e,t)&&z(t,e)&&function(e,t){var n=e,r=!1,o=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&o<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(Z(e.prev,e,t.prev)||Z(e,t.prev,t))||F(e,t)&&Z(e.prev,e,e.next)>0&&Z(t.prev,t,t.next)>0)}function Z(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function F(e,t){return e.x===t.x&&e.y===t.y}function T(e,t,n,r){var o=S(Z(e,t,n)),i=S(Z(e,t,r)),a=S(Z(n,r,e)),s=S(Z(n,r,t));return o!==i&&a!==s||(!(0!==o||!I(e,n,t))||(!(0!==i||!I(e,r,t))||(!(0!==a||!I(n,e,r))||!(0!==s||!I(n,t,r)))))}function I(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function S(e){return e>0?1:e<0?-1:0}function z(e,t){return Z(e.prev,e,e.next)<0?Z(e,t,e.next)>=0&&Z(e,e.prev,t)>=0:Z(e,t,e.prev)<0||Z(e,e.next,t)<0}function U(e,t){var n=new B(e.i,e.x,e.y),r=new B(t.i,t.x,t.y),o=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=o,o.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function k(e,t,n,r){var o=new B(e,t,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function R(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function B(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P(e,t,n,r){for(var o=0,i=t,a=n-r;i<n;i+=r)o+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return o}f.exports=x,f.exports.default=x,x.deviation=function(e,t,n,r){var o=t&&t.length,i=o?t[0]*n:e.length,a=Math.abs(P(e,0,i,n));if(o)for(var s=0,u=t.length;s<u;s++){var f=t[s]*n,x=s<u-1?t[s+1]*n:e.length;a-=Math.abs(P(e,f,x,n))}var l=0;for(s=0;s<r.length;s+=3){var h=r[s]*n,c=r[s+1]*n,v=r[s+2]*n;l+=Math.abs((e[h]-e[v])*(e[c+1]-e[h+1])-(e[h]-e[c])*(e[v+1]-e[h+1]))}return 0===a&&0===l?0:Math.abs((l-a)/a)},x.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,o=0;o<e.length;o++){for(var i=0;i<e[o].length;i++)for(var a=0;a<t;a++)n.vertices.push(e[o][i][a]);o>0&&(r+=e[o-1].length,n.holes.push(r))}return n};var N=u(f.exports);const _=[],O={vertexPosition:0,indexPosition:0};function q(e,t,n,r,o){e[t+0]=n,e[t+1]=r,e[t+2]=o}function L(e,t,n,r,o,i){const a=3+o,s=e[t+0],u=e[t+1],f=_;f.length=o;for(let n=0;n<f.length;n++)f[n]=e[t+2+n];let x=i?i.vertexPosition:0,l=i?i.indexPosition:0;const h=x/a;return q(n,x,s,u,0),f.length&&n.set(f,x+3),x+=a,q(n,x,s,u,1),f.length&&n.set(f,x+3),x+=a,q(n,x,s,u,2),f.length&&n.set(f,x+3),x+=a,q(n,x,s,u,3),f.length&&n.set(f,x+3),x+=a,r[l++]=h,r[l++]=h+1,r[l++]=h+3,r[l++]=h+1,r[l++]=h+2,r[l++]=h+3,O.vertexPosition=x,O.indexPosition=l,O}function C(e,t,n,r,o,i,s,u,f,x){const l=5+u.length,h=i.length/l,c=[e[t+0],e[t+1]],v=[e[n],e[n+1]],d=a(x,[...c]),y=a(x,[...v]);function p(e,t,n){const r=1e4;return Math.round(1500*t)+Math.round(1500*n)*r+e*r*r}function b(e,t,n){const r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),o=[(t[0]-e[0])/r,(t[1]-e[1])/r],i=[-o[1],o[0]],a=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),s=[(n[0]-e[0])/a,(n[1]-e[1])/a],u=0===r||0===a?0:Math.acos((f=s[0]*o[0]+s[1]*o[1],x=-1,l=1,Math.min(Math.max(f,x),l)));var f,x,l;return s[0]*i[0]+s[1]*i[1]>0?u:2*Math.PI-u}const g=null!==o;let m=0,w=0;if(null!==r){m=b(d,y,a(x,[...[e[r],e[r+1]]]))}if(g){w=b(y,d,a(x,[...[e[o],e[o+1]]]))}i.push(c[0],c[1],v[0],v[1],p(0,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(1,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(2,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(3,m,w)),i.push(...u),s.push(h,h+1,h+2,h+1,h+3,h+2)}function G(e,t,n,r,o){const i=2+o;let a=t;const s=e.slice(a,a+o);a+=o;const u=e[a++];let f=0;const x=new Array(u-1);for(let t=0;t<u;t++)f+=e[a++],t<u-1&&(x[t]=f);const l=e.slice(a,a+2*f),h=N(l,x,2);for(let e=0;e<h.length;e++)r.push(h[e]+n.length/i);for(let e=0;e<l.length;e+=2)n.push(l[e],l[e+1],...s);return a+2*f}const j=self;j.onmessage=r=>{const o=r.data;switch(o.type){case t:{const e=3,t=2,n=o.customAttributesSize,r=t+n,i=new Float32Array(o.renderInstructions),a=i.length/r,s=4*a*(n+e),u=new Uint32Array(6*a),f=new Float32Array(s);let x;for(let e=0;e<i.length;e+=r)x=L(i,e,f,u,n,x);const l=Object.assign({vertexBuffer:f.buffer,indexBuffer:u.buffer,renderInstructions:i.buffer},o);j.postMessage(l,[f.buffer,u.buffer,i.buffer]);break}case n:{const e=[],t=[],n=o.customAttributesSize,r=2,i=new Float32Array(o.renderInstructions);let a=0;const u=o.renderInstructionsTransform,f=[1,0,0,1,0,0];let x,l;for(s(f,u);a<i.length;){l=Array.from(i.slice(a,a+n)),a+=n,x=i[a++];for(let n=0;n<x-1;n++)C(i,a+n*r,a+(n+1)*r,n>0?a+(n-1)*r:null,n<x-2?a+(n+2)*r:null,e,t,l,0,f);a+=x*r}const h=Uint32Array.from(t),c=Float32Array.from(e),v=Object.assign({vertexBuffer:c.buffer,indexBuffer:h.buffer,renderInstructions:i.buffer},o);j.postMessage(v,[c.buffer,h.buffer,i.buffer]);break}case e:{const e=[],t=[],n=o.customAttributesSize,r=new Float32Array(o.renderInstructions);let i=0;for(;i<r.length;)i=G(r,i,e,t,n);const a=Uint32Array.from(t),s=Float32Array.from(e),u=Object.assign({vertexBuffer:s.buffer,indexBuffer:a.buffer,renderInstructions:r.buffer},o);j.postMessage(u,[s.buffer,a.buffer,r.buffer]);break}}};';return new Worker("undefined"===typeof Blob?"data:application/javascript;base64,"+n.from(e,"binary").toString("base64"):URL.createObjectURL(new Blob([e],{type:"application/javascript"})))}}}]);
//# sourceMappingURL=7483.c0815f59.js.map