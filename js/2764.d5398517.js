"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2764],{50797:(e,t,n)=>{function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function o(e,t,n){let r=0,o=e.length;const i=o/n;while(o>t){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;o-=t}const l=e.slice();for(let s=0;s<i;++s)for(let t=0;t<n;++t)e[n*s+t]=l[(n-t-1)*i+s]}function i(e,t,n,i,l,s){if(!t||1===t)return e;for(let r=0;r<l.length;++r){if(l[r]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[r]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const c=l[0]/8,a=2===s?1:l.length;for(let f=0;f<i;++f){if(f*a*n*c>=e.byteLength)break;let i;if(2===t){switch(l[0]){case 8:i=new Uint8Array(e,f*a*n*c,a*n*c);break;case 16:i=new Uint16Array(e,f*a*n*c,a*n*c/2);break;case 32:i=new Uint32Array(e,f*a*n*c,a*n*c/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}r(i,a,c)}else 3===t&&(i=new Uint8Array(e,f*a*n*c,a*n*c),o(i,a,c))}return e}n.d(t,{A:()=>l});class l{async decode(e,t){const n=await this.decodeBlock(t),r=e.Predictor||1;if(1!==r){const t=!e.StripOffsets,o=t?e.TileWidth:e.ImageWidth,l=t?e.TileLength:e.RowsPerStrip||e.ImageLength;return i(n,r,o,l,e.BitsPerSample,e.PlanarConfiguration)}return n}}},12764:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(50797);const o=9,i=256,l=257,s=12;function c(e,t,n){const r=t%8,o=Math.floor(t/8),i=8-r,s=t+n-8*(o+1);let c=8*(o+2)-(t+n);const a=8*(o+2)-t;if(c=Math.max(0,c),o>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),l;let f=e[o]&2**(8-r)-1;f<<=n-i;let h=f;if(o+1<e.length){let t=e[o+1]>>>c;t<<=Math.max(0,n-a),h+=t}if(s>8&&o+2<e.length){const r=8*(o+3)-(t+n),i=e[o+2]>>>r;h+=i}return h}function a(e,t){for(let n=t.length-1;n>=0;n--)e.push(t[n]);return e}function f(e){const t=new Uint16Array(4093),n=new Uint8Array(4093);for(let o=0;o<=257;o++)t[o]=4096,n[o]=o;let r=258,f=o,h=0;function u(){r=258,f=o}function d(e){const t=c(e,h,f);return h+=f,t}function w(e,o){return n[r]=o,t[r]=e,r++,r-1}function g(e){const r=[];for(let o=e;4096!==o;o=t[o])r.push(n[o]);return r}const p=[];u();const b=new Uint8Array(e);let y,k=d(b);while(k!==l){if(k===i){u(),k=d(b);while(k===i)k=d(b);if(k===l)break;if(k>i)throw new Error(`corrupted code at scanline ${k}`);{const e=g(k);a(p,e),y=k}}else if(k<r){const e=g(k);a(p,e),w(y,e[e.length-1]),y=k}else{const e=g(y);if(!e)throw new Error(`Bogus entry. Not in dictionary, ${y} / ${r}, position: ${h}`);a(p,e),p.push(e[e.length-1]),w(y,e[e.length-1]),y=k}r+1>=2**f&&(f===s?y=void 0:f++),k=d(b)}return new Uint8Array(p)}class h extends r.A{decodeBlock(e){return f(e,!1).buffer}}}}]);
//# sourceMappingURL=2764.d5398517.js.map