// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,r="function"==typeof e?e.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,f,y,i,l;if(null==t)return n.call(t);f=t[r],l=r,e=null!=(i=t)&&o.call(i,l);try{t[r]=void 0}catch(o){return n.call(t)}return y=n.call(t),e?t[r]=f:delete t[r],y}:function(t){return n.call(t)},y="function"==typeof Int8Array,i="function"==typeof Int8Array?Int8Array:null,l="function"==typeof Int8Array?Int8Array:void 0;return function(){var t,n,o;if("function"!=typeof i)return!1;try{n=new i([1,3.14,-3.14,128]),o=n,t=(y&&o instanceof Int8Array||"[object Int8Array]"===f(o))&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}()?l:function(){throw new Error("not implemented")}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Int8Array=n();
//# sourceMappingURL=index.js.map
