// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,f="function"==typeof r?r.toStringTag:"",i=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,i,l,y;if(null==t)return o.call(t);r=t[f],y=f,n=null!=(l=t)&&e.call(l,y);try{t[f]=void 0}catch(n){return o.call(t)}return i=o.call(t),n?t[f]=r:delete t[f],i}:function(t){return o.call(t)},l="function"==typeof Int8Array,y="function"==typeof Int8Array?Int8Array:null,c="function"==typeof Int8Array?Int8Array:void 0;return t=function(){var t,n,o;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,128]),o=n,t=(l&&o instanceof Int8Array||"[object Int8Array]"===i(o))&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}()?c:function(){throw new Error(function(){var t,n=arguments,o="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)o+="&arg[]="+encodeURIComponent(n[t]);return o}("01100"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Int8Array=n();
//# sourceMappingURL=index.js.map
