// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,a,l,y,c;if(null==t)return r.call(t);a=t[o],c=o,e=null!=(y=t)&&n.call(y,c);try{t[o]=void 0}catch(n){return r.call(t)}return l=r.call(t),e?t[o]=a:delete t[o],l}:function(t){return r.call(t)},a="function"==typeof Int8Array;var l="function"==typeof Int8Array?Int8Array:null;var y="function"==typeof Int8Array?Int8Array:void 0;var c=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,128]),n=r,t=(a&&n instanceof Int8Array||"[object Int8Array]"===e(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){t=!1}return t}()?y:function(){throw new Error(function(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}("01100,Cw"))};export{c as default};
//# sourceMappingURL=mod.js.map
