// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,f,l,i,y;if(null==t)return o.call(t);f=t[e],y=e,n=null!=(i=t)&&r.call(i,y);try{t[e]=void 0}catch(n){return o.call(t)}return l=o.call(t),n?t[e]=f:delete t[e],l}:function(t){return o.call(t)},l="function"==typeof Int8Array,i="function"==typeof Int8Array?Int8Array:null,y="function"==typeof Int8Array?Int8Array:void 0;return t=function(){var t,n,o;if("function"!=typeof i)return!1;try{n=new i([1,3.14,-3.14,128]),o=n,t=(l&&o instanceof Int8Array||"[object Int8Array]"===f(o))&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}()?y:function(){throw new Error(function(){var t,n=arguments,o="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)o+="&arg[]="+encodeURIComponent(n[t]);return o}("00V00"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Int8Array=n();
//# sourceMappingURL=index.js.map
