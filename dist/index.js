"use strict";var n=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=n(function(g,s){
var f=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),a=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/fft-base-fftpack-generic-rfftf/dist');function o(t){var r,e;return r=t[0],e=t[1],q(f(r,0),a(r),i(r,0),u(r),a(e),i(e,0),u(e)),r}s.exports=o
});var c=v();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
