(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22009db5","chunk-22009db5","chunk-22009db5","chunk-22009db5"],{"496f":function(t,e,o){"use strict";e["a"]={ANIMATING:0,INTERACTING:1}},"57cc":function(t,e,o){"use strict";o.d(e,"b",(function(){return c}));var n=o("01d4"),i=o("dc10"),r=o("acc1"),s=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),a=function(t){function e(e,o){var n=t.call(this,(function(t){return e.apply(null,t)}),(function(t){return t[0].getKey()}))||this;return n.boundHandleTileChange_=n.handleTileChange.bind(n),n.tileChangeCallback_=o,n.tilesLoading_=0,n.tilesLoadingKeys_={},n}return s(e,t),e.prototype.enqueue=function(e){var o=t.prototype.enqueue.call(this,e);if(o){var i=e[0];i.addEventListener(n["a"].CHANGE,this.boundHandleTileChange_)}return o},e.prototype.getTilesLoading=function(){return this.tilesLoading_},e.prototype.handleTileChange=function(t){var e=t.target,o=e.getState();if(o===r["a"].LOADED||o===r["a"].ERROR||o===r["a"].EMPTY){e.removeEventListener(n["a"].CHANGE,this.boundHandleTileChange_);var i=e.getKey();i in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[i],--this.tilesLoading_),this.tileChangeCallback_()}},e.prototype.loadMoreTiles=function(t,e){var o,n,i,s=0;while(this.tilesLoading_<t&&s<e&&this.getCount()>0)n=this.dequeue()[0],i=n.getKey(),o=n.getState(),o!==r["a"].IDLE||i in this.tilesLoadingKeys_||(this.tilesLoadingKeys_[i]=!0,++this.tilesLoading_,++s,n.load())},e}(i["b"]);function c(t,e,o,n,r){if(!t||!(o in t.wantedTiles))return i["a"];if(!t.wantedTiles[o][e.getKey()])return i["a"];var s=t.viewState.center,a=n[0]-s[0],c=n[1]-s[1];return 65536*Math.log(r)+Math.sqrt(a*a+c*c)/r}e["a"]=a},"5e31":function(t,e,o){"use strict";var n=o("0ec0"),i=o("01d4"),r=o("acc1"),s=o("1300"),a=o("ca42"),c=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),u=function(t){function e(e,o,n){var i=t.call(this)||this,r=n||{};return i.tileCoord=e,i.state=o,i.interimTile=null,i.key="",i.transition_=void 0===r.transition?250:r.transition,i.transitionStarts_={},i}return c(e,t),e.prototype.changed=function(){this.dispatchEvent(i["a"].CHANGE)},e.prototype.release=function(){},e.prototype.getKey=function(){return this.key+"/"+this.tileCoord},e.prototype.getInterimTile=function(){if(!this.interimTile)return this;var t=this.interimTile;do{if(t.getState()==r["a"].LOADED)return this.transition_=0,t;t=t.interimTile}while(t);return this},e.prototype.refreshInterimChain=function(){if(this.interimTile){var t=this.interimTile,e=this;do{if(t.getState()==r["a"].LOADED){t.interimTile=null;break}t.getState()==r["a"].LOADING?e=t:t.getState()==r["a"].IDLE?e.interimTile=t.interimTile:e=t,t=e.interimTile}while(t)}},e.prototype.getTileCoord=function(){return this.tileCoord},e.prototype.getState=function(){return this.state},e.prototype.setState=function(t){if(this.state!==r["a"].ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()},e.prototype.load=function(){Object(s["b"])()},e.prototype.getAlpha=function(t,e){if(!this.transition_)return 1;var o=this.transitionStarts_[t];if(o){if(-1===o)return 1}else o=e,this.transitionStarts_[t]=o;var n=e-o+1e3/60;return n>=this.transition_?1:Object(a["a"])(n/this.transition_)},e.prototype.inTransition=function(t){return!!this.transition_&&-1!==this.transitionStarts_[t]},e.prototype.endTransition=function(t){this.transition_&&(this.transitionStarts_[t]=-1)},e}(n["a"]);e["a"]=u},"8d87":function(t,e,o){"use strict";var n=o("5116"),i=o("2c30"),r=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.expireCache=function(t){while(this.canExpireCache()){var e=this.peekLast();if(e.getKey()in t)break;this.pop().release()}},e.prototype.pruneExceptNewestZ=function(){if(0!==this.getCount()){var t=this.peekFirstKey(),e=Object(i["b"])(t),o=e[0];this.forEach(function(t){t.tileCoord[0]!==o&&(this.remove(Object(i["c"])(t.tileCoord)),t.release())}.bind(this))}},e}(n["a"]);e["a"]=s},a2c7:function(t,e,o){"use strict";var n=o("e269"),i=o("f623"),r=o("fced"),s=o("496f"),a={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"},c=o("0414"),u=o("256f"),h=o("57cb"),l=o("a568"),p=o("92fa"),g=o("38f3"),f=o("67f6"),m=o("7fc9"),_=o("aaa2"),d=o("8cc5"),v=o("ca42"),y=o("0af5"),R=o("9f5e"),b=o("5bc3"),C=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),O=0,j=function(t){function e(e){var o=t.call(this)||this;o.on,o.once,o.un;var n=Object(g["a"])({},e);return o.hints_=[0,0],o.animations_=[],o.updateAnimationKey_,o.projection_=Object(u["b"])(n.projection,"EPSG:3857"),o.viewportSize_=[100,100],o.targetCenter_=null,o.targetResolution_,o.targetRotation_,o.cancelAnchor_=void 0,n.center&&(n.center=Object(u["e"])(n.center,o.projection_)),n.extent&&(n.extent=Object(u["f"])(n.extent,o.projection_)),o.applyOptions_(n),o}return C(e,t),e.prototype.applyOptions_=function(t){var e={},o=T(t);this.maxResolution_=o.maxResolution,this.minResolution_=o.minResolution,this.zoomFactor_=o.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=o.minZoom;var n=x(t),i=o.constraint,r=M(t);this.constraints_={center:n,resolution:i,rotation:r},this.setRotation(void 0!==t.rotation?t.rotation:0),this.setCenterInternal(void 0!==t.center?t.center:null),void 0!==t.resolution?this.setResolution(t.resolution):void 0!==t.zoom&&this.setZoom(t.zoom),this.setProperties(e),this.options_=t},Object.defineProperty(e.prototype,"padding",{get:function(){return this.padding_},set:function(t){var e=this.padding_;this.padding_=t;var o=this.getCenter();if(o){var n=t||[0,0,0,0];e=e||[0,0,0,0];var i=this.getResolution(),r=i/2*(n[3]-e[3]+e[1]-n[1]),s=i/2*(n[0]-e[0]+e[2]-n[2]);this.setCenterInternal([o[0]+r,o[1]-s])}},enumerable:!1,configurable:!0}),e.prototype.getUpdatedOptions_=function(t){var e=Object(g["a"])({},this.options_);return void 0!==e.resolution?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object(g["a"])({},e,t)},e.prototype.animate=function(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var e=new Array(arguments.length),o=0;o<e.length;++o){var n=arguments[o];n.center&&(n=Object(g["a"])({},n),n.center=Object(u["e"])(n.center,this.getProjection())),n.anchor&&(n=Object(g["a"])({},n),n.anchor=Object(u["e"])(n.anchor,this.getProjection())),e[o]=n}this.animateInternal.apply(this,e)},e.prototype.animateInternal=function(t){var e,o=arguments.length;if(o>1&&"function"===typeof arguments[o-1]&&(e=arguments[o-1],--o),!this.isDef()){var n=arguments[o-1];return n.center&&this.setCenterInternal(n.center),void 0!==n.zoom&&this.setZoom(n.zoom),void 0!==n.rotation&&this.setRotation(n.rotation),void(e&&I(e,!0))}for(var i=Date.now(),r=this.targetCenter_.slice(),a=this.targetResolution_,c=this.targetRotation_,u=[],h=0;h<o;++h){var l=arguments[h],p={start:i,complete:!1,anchor:l.anchor,duration:void 0!==l.duration?l.duration:1e3,easing:l.easing||v["c"],callback:e};if(l.center&&(p.sourceCenter=r,p.targetCenter=l.center.slice(),r=p.targetCenter),void 0!==l.zoom?(p.sourceResolution=a,p.targetResolution=this.getResolutionForZoom(l.zoom),a=p.targetResolution):l.resolution&&(p.sourceResolution=a,p.targetResolution=l.resolution,a=p.targetResolution),void 0!==l.rotation){p.sourceRotation=c;var g=Object(m["e"])(l.rotation-c+Math.PI,2*Math.PI)-Math.PI;p.targetRotation=c+g,c=p.targetRotation}A(p)?p.complete=!0:i+=p.duration,u.push(p)}this.animations_.push(u),this.setHint(s["a"].ANIMATING,1),this.updateAnimations_()},e.prototype.getAnimating=function(){return this.hints_[s["a"].ANIMATING]>0},e.prototype.getInteracting=function(){return this.hints_[s["a"].INTERACTING]>0},e.prototype.cancelAnimations=function(){var t;this.setHint(s["a"].ANIMATING,-this.hints_[s["a"].ANIMATING]);for(var e=0,o=this.animations_.length;e<o;++e){var n=this.animations_[e];if(n[0].callback&&I(n[0].callback,!1),!t)for(var i=0,r=n.length;i<r;++i){var a=n[i];if(!a.complete){t=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t},e.prototype.updateAnimations_=function(){if(void 0!==this.updateAnimationKey_&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),this.getAnimating()){for(var t=Date.now(),e=!1,o=this.animations_.length-1;o>=0;--o){for(var n=this.animations_[o],i=!0,r=0,a=n.length;r<a;++r){var c=n[r];if(!c.complete){var u=t-c.start,h=c.duration>0?u/c.duration:1;h>=1?(c.complete=!0,h=1):i=!1;var l=c.easing(h);if(c.sourceCenter){var p=c.sourceCenter[0],g=c.sourceCenter[1],f=c.targetCenter[0],_=c.targetCenter[1],d=p+l*(f-p),v=g+l*(_-g);this.targetCenter_=[d,v]}if(c.sourceResolution&&c.targetResolution){var y=1===l?c.targetResolution:c.sourceResolution+l*(c.targetResolution-c.sourceResolution);if(c.anchor){var R=this.getViewportSize_(this.getRotation()),b=this.constraints_.resolution(y,0,R,!0);this.targetCenter_=this.calculateCenterZoom(b,c.anchor)}this.targetResolution_=y,this.applyTargetState_(!0)}if(void 0!==c.sourceRotation&&void 0!==c.targetRotation){var C=1===l?Object(m["e"])(c.targetRotation+Math.PI,2*Math.PI)-Math.PI:c.sourceRotation+l*(c.targetRotation-c.sourceRotation);if(c.anchor){var O=this.constraints_.rotation(C,!0);this.targetCenter_=this.calculateCenterRotate(O,c.anchor)}this.targetRotation_=C}if(this.applyTargetState_(!0),e=!0,!c.complete)break}}if(i){this.animations_[o]=null,this.setHint(s["a"].ANIMATING,-1);var j=n[0].callback;j&&I(j,!0)}}this.animations_=this.animations_.filter(Boolean),e&&void 0===this.updateAnimationKey_&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},e.prototype.calculateCenterRotate=function(t,e){var o,n=this.getCenterInternal();return void 0!==n&&(o=[n[0]-e[0],n[1]-e[1]],Object(l["g"])(o,t-this.getRotation()),Object(l["a"])(o,e)),o},e.prototype.calculateCenterZoom=function(t,e){var o,n=this.getCenterInternal(),i=this.getResolution();if(void 0!==n&&void 0!==i){var r=e[0]-t*(e[0]-n[0])/i,s=e[1]-t*(e[1]-n[1])/i;o=[r,s]}return o},e.prototype.getViewportSize_=function(t){var e=this.viewportSize_;if(t){var o=e[0],n=e[1];return[Math.abs(o*Math.cos(t))+Math.abs(n*Math.sin(t)),Math.abs(o*Math.sin(t))+Math.abs(n*Math.cos(t))]}return e},e.prototype.setViewportSize=function(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)},e.prototype.getCenter=function(){var t=this.getCenterInternal();return t?Object(u["l"])(t,this.getProjection()):t},e.prototype.getCenterInternal=function(){return this.get(a.CENTER)},e.prototype.getConstraints=function(){return this.constraints_},e.prototype.getConstrainResolution=function(){return this.options_.constrainResolution},e.prototype.getHints=function(t){return void 0!==t?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()},e.prototype.calculateExtent=function(t){var e=this.calculateExtentInternal(t);return Object(u["m"])(e,this.getProjection())},e.prototype.calculateExtentInternal=function(t){var e=t||this.getViewportSizeMinusPadding_(),o=this.getCenterInternal();Object(p["a"])(o,1);var n=this.getResolution();Object(p["a"])(void 0!==n,2);var i=this.getRotation();return Object(p["a"])(void 0!==i,3),Object(y["y"])(o,n,i,e)},e.prototype.getMaxResolution=function(){return this.maxResolution_},e.prototype.getMinResolution=function(){return this.minResolution_},e.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},e.prototype.setMaxZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))},e.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},e.prototype.setMinZoom=function(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))},e.prototype.setConstrainResolution=function(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolution=function(){return this.get(a.RESOLUTION)},e.prototype.getResolutions=function(){return this.resolutions_},e.prototype.getResolutionForExtent=function(t,e){return this.getResolutionForExtentInternal(Object(u["f"])(t,this.getProjection()),e)},e.prototype.getResolutionForExtentInternal=function(t,e){var o=e||this.getViewportSizeMinusPadding_(),n=Object(y["D"])(t)/o[0],i=Object(y["z"])(t)/o[1];return Math.max(n,i)},e.prototype.getResolutionForValueFunction=function(t){var e=t||2,o=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,i=Math.log(o/n)/Math.log(e);return function(t){var n=o/Math.pow(e,t*i);return n}},e.prototype.getRotation=function(){return this.get(a.ROTATION)},e.prototype.getValueForResolutionFunction=function(t){var e=Math.log(t||2),o=this.getConstrainedResolution(this.maxResolution_),n=this.minResolution_,i=Math.log(o/n)/e;return function(t){var n=Math.log(o/t)/e/i;return n}},e.prototype.getViewportSizeMinusPadding_=function(t){var e=this.getViewportSize_(t),o=this.padding_;return o&&(e=[e[0]-o[1]-o[3],e[1]-o[0]-o[2]]),e},e.prototype.getState=function(){var t=this.getProjection(),e=this.getResolution(),o=this.getRotation(),n=this.getCenterInternal(),i=this.padding_;if(i){var r=this.getViewportSizeMinusPadding_();n=w(n,this.getViewportSize_(),[r[0]/2+i[3],r[1]/2+i[0]],e,o)}return{center:n.slice(0),projection:void 0!==t?t:null,resolution:e,rotation:o,zoom:this.getZoom()}},e.prototype.getZoom=function(){var t,e=this.getResolution();return void 0!==e&&(t=this.getZoomForResolution(e)),t},e.prototype.getZoomForResolution=function(t){var e,o,n=this.minZoom_||0;if(this.resolutions_){var i=Object(R["h"])(this.resolutions_,t,1);n=i,e=this.resolutions_[i],o=i==this.resolutions_.length-1?2:e/this.resolutions_[i+1]}else e=this.maxResolution_,o=this.zoomFactor_;return n+Math.log(e/t)/Math.log(o)},e.prototype.getResolutionForZoom=function(t){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var e=Object(m["a"])(Math.floor(t),0,this.resolutions_.length-2),o=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(o,Object(m["a"])(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)},e.prototype.fit=function(t,e){var o;if(Object(p["a"])(Array.isArray(t)||"function"===typeof t.getSimplifiedGeometry,24),Array.isArray(t)){Object(p["a"])(!Object(y["G"])(t),25);var n=Object(u["f"])(t,this.getProjection());o=Object(b["c"])(n)}else if(t.getType()===i["a"].CIRCLE){n=Object(u["f"])(t.getExtent(),this.getProjection());o=Object(b["c"])(n),o.rotate(this.getRotation(),Object(y["w"])(n))}else{var r=Object(u["k"])();o=r?t.clone().transform(r,this.getProjection()):t}this.fitInternal(o,e)},e.prototype.rotatedExtentForGeometry=function(t){for(var e=this.getRotation(),o=Math.cos(e),n=Math.sin(-e),i=t.getFlatCoordinates(),r=t.getStride(),s=1/0,a=1/0,c=-1/0,u=-1/0,h=0,l=i.length;h<l;h+=r){var p=i[h]*o-i[h+1]*n,g=i[h]*n+i[h+1]*o;s=Math.min(s,p),a=Math.min(a,g),c=Math.max(c,p),u=Math.max(u,g)}return[s,a,c,u]},e.prototype.fitInternal=function(t,e){var o=e||{},n=o.size;n||(n=this.getViewportSizeMinusPadding_());var i,r=void 0!==o.padding?o.padding:[0,0,0,0],s=void 0!==o.nearest&&o.nearest;i=void 0!==o.minResolution?o.minResolution:void 0!==o.maxZoom?this.getResolutionForZoom(o.maxZoom):0;var a=this.rotatedExtentForGeometry(t),c=this.getResolutionForExtentInternal(a,[n[0]-r[1]-r[3],n[1]-r[0]-r[2]]);c=isNaN(c)?i:Math.max(c,i),c=this.getConstrainedResolution(c,s?0:1);var u=this.getRotation(),l=Math.sin(u),p=Math.cos(u),g=Object(y["w"])(a);g[0]+=(r[1]-r[3])/2*c,g[1]+=(r[0]-r[2])/2*c;var f=g[0]*p-g[1]*l,m=g[1]*p+g[0]*l,_=this.getConstrainedCenter([f,m],c),d=o.callback?o.callback:h["c"];void 0!==o.duration?this.animateInternal({resolution:c,center:_,duration:o.duration,easing:o.easing},d):(this.targetResolution_=c,this.targetCenter_=_,this.applyTargetState_(!1,!0),I(d,!0))},e.prototype.centerOn=function(t,e,o){this.centerOnInternal(Object(u["e"])(t,this.getProjection()),e,o)},e.prototype.centerOnInternal=function(t,e,o){this.setCenterInternal(w(t,e,o,this.getResolution(),this.getRotation()))},e.prototype.calculateCenterShift=function(t,e,o,n){var i,r=this.padding_;if(r&&t){var s=this.getViewportSizeMinusPadding_(-o),a=w(t,n,[s[0]/2+r[3],s[1]/2+r[0]],e,o);i=[t[0]-a[0],t[1]-a[1]]}return i},e.prototype.isDef=function(){return!!this.getCenterInternal()&&void 0!==this.getResolution()},e.prototype.adjustCenter=function(t){var e=Object(u["l"])(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])},e.prototype.adjustCenterInternal=function(t){var e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])},e.prototype.adjustResolution=function(t,e){var o=e&&Object(u["e"])(e,this.getProjection());this.adjustResolutionInternal(t,o)},e.prototype.adjustResolutionInternal=function(t,e){var o=this.getAnimating()||this.getInteracting(),n=this.getViewportSize_(this.getRotation()),i=this.constraints_.resolution(this.targetResolution_*t,0,n,o);e&&(this.targetCenter_=this.calculateCenterZoom(i,e)),this.targetResolution_*=t,this.applyTargetState_()},e.prototype.adjustZoom=function(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)},e.prototype.adjustRotation=function(t,e){e&&(e=Object(u["e"])(e,this.getProjection())),this.adjustRotationInternal(t,e)},e.prototype.adjustRotationInternal=function(t,e){var o=this.getAnimating()||this.getInteracting(),n=this.constraints_.rotation(this.targetRotation_+t,o);e&&(this.targetCenter_=this.calculateCenterRotate(n,e)),this.targetRotation_+=t,this.applyTargetState_()},e.prototype.setCenter=function(t){this.setCenterInternal(Object(u["e"])(t,this.getProjection()))},e.prototype.setCenterInternal=function(t){this.targetCenter_=t,this.applyTargetState_()},e.prototype.setHint=function(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]},e.prototype.setResolution=function(t){this.targetResolution_=t,this.applyTargetState_()},e.prototype.setRotation=function(t){this.targetRotation_=t,this.applyTargetState_()},e.prototype.setZoom=function(t){this.setResolution(this.getResolutionForZoom(t))},e.prototype.applyTargetState_=function(t,e){var o=this.getAnimating()||this.getInteracting()||e,n=this.constraints_.rotation(this.targetRotation_,o),i=this.getViewportSize_(n),r=this.constraints_.resolution(this.targetResolution_,0,i,o),s=this.constraints_.center(this.targetCenter_,r,i,o,this.calculateCenterShift(this.targetCenter_,r,n,i));this.get(a.ROTATION)!==n&&this.set(a.ROTATION,n),this.get(a.RESOLUTION)!==r&&this.set(a.RESOLUTION,r),this.get(a.CENTER)&&Object(l["e"])(this.get(a.CENTER),s)||this.set(a.CENTER,s),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0},e.prototype.resolveConstraints=function(t,e,o){var n=void 0!==t?t:200,i=e||0,r=this.constraints_.rotation(this.targetRotation_),s=this.getViewportSize_(r),a=this.constraints_.resolution(this.targetResolution_,i,s),c=this.constraints_.center(this.targetCenter_,a,s,!1,this.calculateCenterShift(this.targetCenter_,a,r,s));if(0===n&&!this.cancelAnchor_)return this.targetResolution_=a,this.targetRotation_=r,this.targetCenter_=c,void this.applyTargetState_();var u=o||(0===n?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,this.getResolution()===a&&this.getRotation()===r&&this.getCenterInternal()&&Object(l["e"])(this.getCenterInternal(),c)||(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:r,center:c,resolution:a,duration:n,easing:v["b"],anchor:u}))},e.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(s["a"].INTERACTING,1)},e.prototype.endInteraction=function(t,e,o){var n=o&&Object(u["e"])(o,this.getProjection());this.endInteractionInternal(t,e,n)},e.prototype.endInteractionInternal=function(t,e,o){this.setHint(s["a"].INTERACTING,-1),this.resolveConstraints(t,e,o)},e.prototype.getConstrainedCenter=function(t,e){var o=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),o)},e.prototype.getConstrainedZoom=function(t,e){var o=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(o,e))},e.prototype.getConstrainedResolution=function(t,e){var o=e||0,n=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,o,n)},e}(n["a"]);function I(t,e){setTimeout((function(){t(e)}),0)}function x(t){if(void 0!==t.extent){var e=void 0===t.smoothExtentConstraint||t.smoothExtentConstraint;return Object(f["a"])(t.extent,t.constrainOnlyCenter,e)}var o=Object(u["b"])(t.projection,"EPSG:3857");if(!0!==t.multiWorld&&o.isGlobal()){var n=o.getExtent().slice();return n[0]=-1/0,n[2]=1/0,Object(f["a"])(n,!1,!1)}return f["b"]}function T(t){var e,o,n,i=28,s=2,a=void 0!==t.minZoom?t.minZoom:O,h=void 0!==t.maxZoom?t.maxZoom:i,l=void 0!==t.zoomFactor?t.zoomFactor:s,p=void 0!==t.multiWorld&&t.multiWorld,g=void 0===t.smoothResolutionConstraint||t.smoothResolutionConstraint,f=void 0!==t.showFullExtent&&t.showFullExtent,m=Object(u["b"])(t.projection,"EPSG:3857"),d=m.getExtent(),v=t.constrainOnlyCenter,R=t.extent;if(p||R||!m.isGlobal()||(v=!1,R=d),void 0!==t.resolutions){var b=t.resolutions;o=b[a],n=void 0!==b[h]?b[h]:b[b.length-1],e=t.constrainResolution?Object(_["c"])(b,g,!v&&R,f):Object(_["a"])(o,n,g,!v&&R,f)}else{var C=d?Math.max(Object(y["D"])(d),Object(y["z"])(d)):360*u["a"][r["b"].DEGREES]/m.getMetersPerUnit(),j=C/c["b"]/Math.pow(s,O),I=j/Math.pow(s,i-O);o=t.maxResolution,void 0!==o?a=0:o=j/Math.pow(l,a),n=t.minResolution,void 0===n&&(n=void 0!==t.maxZoom?void 0!==t.maxResolution?o/Math.pow(l,h):j/Math.pow(l,h):I),h=a+Math.floor(Math.log(o/n)/Math.log(l)),n=o/Math.pow(l,h-a),e=t.constrainResolution?Object(_["b"])(l,o,n,g,!v&&R,f):Object(_["a"])(o,n,g,!v&&R,f)}return{constraint:e,maxResolution:o,minResolution:n,minZoom:a,zoomFactor:l}}function M(t){var e=void 0===t.enableRotation||t.enableRotation;if(e){var o=t.constrainRotation;return void 0===o||!0===o?Object(d["b"])():!1===o?d["d"]:"number"===typeof o?Object(d["a"])(o):d["d"]}return d["c"]}function A(t){return!(t.sourceCenter&&t.targetCenter&&!Object(l["e"])(t.sourceCenter,t.targetCenter))&&(t.sourceResolution===t.targetResolution&&t.sourceRotation===t.targetRotation)}function w(t,e,o,n,i){var r=Math.cos(-i),s=Math.sin(-i),a=t[0]*r-t[1]*s,c=t[1]*r+t[0]*s;a+=(e[0]/2-o[0])*n,c+=(o[1]-e[1]/2)*n,s=-s;var u=a*r-c*s,h=c*r+a*s;return[u,h]}e["a"]=j},acc1:function(t,e,o){"use strict";e["a"]={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},dc07:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=function(){function t(t,e,o,n){this.minX=t,this.maxX=e,this.minY=o,this.maxY=n}return t.prototype.contains=function(t){return this.containsXY(t[1],t[2])},t.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},t.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},t.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},t.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},t.prototype.getHeight=function(){return this.maxY-this.minY+1},t.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},t.prototype.getWidth=function(){return this.maxX-this.minX+1},t.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY},t}();function i(t,e,o,i,r){return void 0!==r?(r.minX=t,r.maxX=e,r.minY=o,r.maxY=i,r):new n(t,e,o,i)}e["b"]=n}}]);
//# sourceMappingURL=chunk-22009db5.3e81c28f.js.map