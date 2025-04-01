import{as as ee,R as D,az as N,aA as G}from"./CG-vOezx.js";var q={exports:{}},B;function re(){return B||(B=1,function(s){var o=Object.prototype.hasOwnProperty,r="~";function e(){}Object.create&&(e.prototype=Object.create(null),new e().__proto__||(r=!1));function t(u,i,l){this.fn=u,this.context=i,this.once=l||!1}function n(u,i,l,f,g){if(typeof l!="function")throw new TypeError("The listener must be a function");var w=new t(l,f||u,g),d=r?r+i:i;return u._events[d]?u._events[d].fn?u._events[d]=[u._events[d],w]:u._events[d].push(w):(u._events[d]=w,u._eventsCount++),u}function a(u,i){--u._eventsCount===0?u._events=new e:delete u._events[i]}function c(){this._events=new e,this._eventsCount=0}c.prototype.eventNames=function(){var i=[],l,f;if(this._eventsCount===0)return i;for(f in l=this._events)o.call(l,f)&&i.push(r?f.slice(1):f);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(l)):i},c.prototype.listeners=function(i){var l=r?r+i:i,f=this._events[l];if(!f)return[];if(f.fn)return[f.fn];for(var g=0,w=f.length,d=new Array(w);g<w;g++)d[g]=f[g].fn;return d},c.prototype.listenerCount=function(i){var l=r?r+i:i,f=this._events[l];return f?f.fn?1:f.length:0},c.prototype.emit=function(i,l,f,g,w,d){var v=r?r+i:i;if(!this._events[v])return!1;var h=this._events[v],_=arguments.length,m,p;if(h.fn){switch(h.once&&this.removeListener(i,h.fn,void 0,!0),_){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,l),!0;case 3:return h.fn.call(h.context,l,f),!0;case 4:return h.fn.call(h.context,l,f,g),!0;case 5:return h.fn.call(h.context,l,f,g,w),!0;case 6:return h.fn.call(h.context,l,f,g,w,d),!0}for(p=1,m=new Array(_-1);p<_;p++)m[p-1]=arguments[p];h.fn.apply(h.context,m)}else{var E=h.length,y;for(p=0;p<E;p++)switch(h[p].once&&this.removeListener(i,h[p].fn,void 0,!0),_){case 1:h[p].fn.call(h[p].context);break;case 2:h[p].fn.call(h[p].context,l);break;case 3:h[p].fn.call(h[p].context,l,f);break;case 4:h[p].fn.call(h[p].context,l,f,g);break;default:if(!m)for(y=1,m=new Array(_-1);y<_;y++)m[y-1]=arguments[y];h[p].fn.apply(h[p].context,m)}}return!0},c.prototype.on=function(i,l,f){return n(this,i,l,f,!1)},c.prototype.once=function(i,l,f){return n(this,i,l,f,!0)},c.prototype.removeListener=function(i,l,f,g){var w=r?r+i:i;if(!this._events[w])return this;if(!l)return a(this,w),this;var d=this._events[w];if(d.fn)d.fn===l&&(!g||d.once)&&(!f||d.context===f)&&a(this,w);else{for(var v=0,h=[],_=d.length;v<_;v++)(d[v].fn!==l||g&&!d[v].once||f&&d[v].context!==f)&&h.push(d[v]);h.length?this._events[w]=h.length===1?h[0]:h:a(this,w)}return this},c.prototype.removeAllListeners=function(i){var l;return i?(l=r?r+i:i,this._events[l]&&a(this,l)):(this._events=new e,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,s.exports=c}(q)),q.exports}var ie=re();const V=ee(ie);var oe=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),ne=function(s){oe(o,s);function o(){return s!==null&&s.apply(this,arguments)||this}return o}(V),z,J;function ae(){if(J)return z;J=1;function s(o){if(o.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),e=0;e<r.length;e++)r[e]=255;for(var t=0;t<o.length;t++){var n=o.charAt(t),a=n.charCodeAt(0);if(r[a]!==255)throw new TypeError(n+" is ambiguous");r[a]=t}var c=o.length,u=o.charAt(0),i=Math.log(c)/Math.log(256),l=Math.log(256)/Math.log(c);function f(d){if(d instanceof Uint8Array||(ArrayBuffer.isView(d)?d=new Uint8Array(d.buffer,d.byteOffset,d.byteLength):Array.isArray(d)&&(d=Uint8Array.from(d))),!(d instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(d.length===0)return"";for(var v=0,h=0,_=0,m=d.length;_!==m&&d[_]===0;)_++,v++;for(var p=(m-_)*l+1>>>0,E=new Uint8Array(p);_!==m;){for(var y=d[_],j=0,S=p-1;(y!==0||j<h)&&S!==-1;S--,j++)y+=256*E[S]>>>0,E[S]=y%c>>>0,y=y/c>>>0;if(y!==0)throw new Error("Non-zero carry");h=j,_++}for(var x=p-h;x!==p&&E[x]===0;)x++;for(var R=u.repeat(v);x<p;++x)R+=o.charAt(E[x]);return R}function g(d){if(typeof d!="string")throw new TypeError("Expected String");if(d.length===0)return new Uint8Array;for(var v=0,h=0,_=0;d[v]===u;)h++,v++;for(var m=(d.length-v)*i+1>>>0,p=new Uint8Array(m);d[v];){var E=d.charCodeAt(v);if(E>255)return;var y=r[E];if(y===255)return;for(var j=0,S=m-1;(y!==0||j<_)&&S!==-1;S--,j++)y+=c*p[S]>>>0,p[S]=y%256>>>0,y=y/256>>>0;if(y!==0)throw new Error("Non-zero carry");_=j,v++}for(var x=m-_;x!==m&&p[x]===0;)x++;for(var R=new Uint8Array(h+(m-x)),te=h;x!==m;)R[te++]=p[x++];return R}function w(d){var v=g(d);if(v)return v;throw new Error("Non-base"+c+" character")}return{encode:f,decodeUnsafe:g,decode:w}}return z=s,z}var K,Q;function se(){return Q||(Q=1,K=ae()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")),K}var ce=se();const A=ee(ce);var le=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),F=function(){return F=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},F.apply(this,arguments)},H=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},L=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},X=function(s,o){var r=typeof Symbol=="function"&&s[Symbol.iterator];if(!r)return s;var e=r.call(s),t,n=[],a;try{for(;(o===void 0||o-- >0)&&!(t=e.next()).done;)n.push(t.value)}catch(c){a={error:c}}finally{try{t&&!t.done&&(r=e.return)&&r.call(e)}finally{if(a)throw a.error}}return n},ue=function(s){le(o,s);function o(r,e){var t=s.call(this)||this;if(t._handleMessage=function(n){if(t._injectedProvider&&n.source===window||n.origin===t._providerUrl.origin&&n.source===t._popup){if(n.data.method==="connected"){var a=new D(n.data.params.publicKey);(!t._publicKey||!t._publicKey.equals(a))&&(t._publicKey&&!t._publicKey.equals(a)&&t._handleDisconnect(),t._publicKey=a,t._autoApprove=!!n.data.params.autoApprove,t.emit("connect",t._publicKey))}else if(n.data.method==="disconnected")t._handleDisconnect();else if((n.data.result||n.data.error)&&t._responsePromises.has(n.data.id)){var c=X(t._responsePromises.get(n.data.id),2),u=c[0],i=c[1];n.data.result?u(n.data.result):i(new Error(n.data.error))}}},t._handleConnect=function(){return t._handlerAdded||(t._handlerAdded=!0,window.addEventListener("message",t._handleMessage),window.addEventListener("beforeunload",t.disconnect)),t._injectedProvider?new Promise(function(n){t._sendRequest("connect",{}),n()}):(window.name="parent",t._popup=window.open(t._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(function(n){t.once("connect",n)}))},t._handleDisconnect=function(){t._handlerAdded&&(t._handlerAdded=!1,window.removeEventListener("message",t._handleMessage),window.removeEventListener("beforeunload",t.disconnect)),t._publicKey&&(t._publicKey=null,t.emit("disconnect")),t._responsePromises.forEach(function(n,a){var c=X(n,2);c[0];var u=c[1];t._responsePromises.delete(a),u("Wallet disconnected")})},t._sendRequest=function(n,a){return H(t,void 0,void 0,function(){var c,u=this;return L(this,function(i){if(n!=="connect"&&!this.connected)throw new Error("Wallet not connected");return c=this._nextRequestId,++this._nextRequestId,[2,new Promise(function(l,f){u._responsePromises.set(c,[l,f]),u._injectedProvider?u._injectedProvider.postMessage({jsonrpc:"2.0",id:c,method:n,params:F({network:u._network},a)}):(u._popup.postMessage({jsonrpc:"2.0",id:c,method:n,params:a},u._providerUrl.origin),u.autoApprove||u._popup.focus())})]})})},t.connect=function(){return t._popup&&t._popup.close(),t._handleConnect()},t.disconnect=function(){return H(t,void 0,void 0,function(){return L(this,function(n){switch(n.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:n.sent(),n.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}})})},t.sign=function(n,a){return H(t,void 0,void 0,function(){var c,u,i;return L(this,function(l){switch(l.label){case 0:if(!(n instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:n,display:a})];case 1:return c=l.sent(),u=A.decode(c.signature),i=new D(c.publicKey),[2,{signature:u,publicKey:i}]}})})},de(r))t._injectedProvider=r;else if(fe(r))t._providerUrl=new URL(r),t._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:e}).toString();else throw new Error("provider parameter must be an injected provider or a URL string.");return t._network=e,t._publicKey=null,t._autoApprove=!1,t._popup=null,t._handlerAdded=!1,t._nextRequestId=1,t._responsePromises=new Map,t}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this._publicKey!==null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),o}(V);function fe(s){return typeof s=="string"}function de(s){return he(s)&&pe(s.postMessage)}function he(s){return typeof s=="object"&&s!==null}function pe(s){return typeof s=="function"}var ve=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),T=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},P=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},_e=function(s){ve(o,s);function o(r,e,t){var n=s.call(this)||this;return n._instance=null,n.handleMessage=function(a){},n._sendRequest=function(a,c){return T(n,void 0,void 0,function(){var u,i;return P(this,function(l){switch(l.label){case 0:return!((u=this._instance)===null||u===void 0)&&u.sendRequest?[4,this._instance.sendRequest(a,c)]:[3,2];case 1:return[2,l.sent()];case 2:return!((i=this._instance)===null||i===void 0)&&i._sendRequest?[4,this._instance._sendRequest(a,c)]:[3,4];case 3:return[2,l.sent()];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},n._handleConnect=function(){n.emit("connect")},n._handleDisconnect=function(){window.clearInterval(n._pollTimer),n.emit("disconnect")},n._network=e,n._provider=t,n}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return T(this,void 0,void 0,function(){var r=this;return P(this,function(e){switch(e.label){case 0:return this._instance=new ue(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,n;((n=(t=r._instance)===null||t===void 0?void 0:t._popup)===null||n===void 0?void 0:n.closed)!==!1&&r._handleDisconnect()},200),[4,this._instance.connect()];case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return T(this,void 0,void 0,function(){return P(this,function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return r.sent(),[2]}})})},o.prototype.signTransaction=function(r){return T(this,void 0,void 0,function(){var e;return P(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransactionV2",{transaction:A.encode(r)})];case 1:return e=t.sent().transaction,[2,A.decode(e)]}})})},o.prototype.signAllTransactions=function(r){return T(this,void 0,void 0,function(){var e;return P(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactionsV2",{transactions:r.map(function(n){return A.encode(n)})})];case 1:return e=t.sent().transactions,[2,e.map(function(n){return A.decode(n)})]}})})},o.prototype.signAndSendTransaction=function(r,e){return T(this,void 0,void 0,function(){var t;return P(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:A.encode(r),options:e})];case 1:return t=n.sent(),[2,t.signature]}})})},o.prototype.signMessage=function(r,e){return e===void 0&&(e="hex"),T(this,void 0,void 0,function(){var t;return P(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(r,e)];case 1:return t=n.sent().signature,[2,Uint8Array.from(t)]}})})},o}(ne);let W;const ye=new Uint8Array(16);function we(){if(!W&&(W=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!W))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return W(ye)}const b=[];for(let s=0;s<256;++s)b.push((s+256).toString(16).slice(1));function me(s,o=0){return b[s[o+0]]+b[s[o+1]]+b[s[o+2]]+b[s[o+3]]+"-"+b[s[o+4]]+b[s[o+5]]+"-"+b[s[o+6]]+b[s[o+7]]+"-"+b[s[o+8]]+b[s[o+9]]+"-"+b[s[o+10]]+b[s[o+11]]+b[s[o+12]]+b[s[o+13]]+b[s[o+14]]+b[s[o+15]]}const ge=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Y={randomUUID:ge};function be(s,o,r){if(Y.randomUUID&&!s)return Y.randomUUID();s=s||{};const e=s.random||(s.rng||we)();return e[6]=e[6]&15|64,e[8]=e[8]&63|128,me(e)}var xe=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),$=function(){return $=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},$.apply(this,arguments)},M=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},U=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},Z=function(s){xe(o,s);function o(r,e){var t=this,n;return t=s.call(this)||this,t._publicKey=null,t._messageHandlers={},t.handleMessage=function(a){if(t._messageHandlers[a.id]){var c=t._messageHandlers[a.id],u=c.resolve,i=c.reject;delete t._messageHandlers[a.id],a.error?i(a.error):u(a.result)}},t._sendMessage=function(a){if(!t.connected)throw new Error("Wallet not connected");return new Promise(function(c,u){var i,l,f=be();t._messageHandlers[f]={resolve:c,reject:u},(l=(i=t._iframe)===null||i===void 0?void 0:i.contentWindow)===null||l===void 0||l.postMessage({channel:"solflareWalletAdapterToIframe",data:$({id:f},a)},"*")})},t._iframe=r,t._publicKey=new D((n=e==null?void 0:e.toString)===null||n===void 0?void 0:n.call(e)),t}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return M(this,void 0,void 0,function(){return U(this,function(r){return[2]})})},o.prototype.disconnect=function(){return M(this,void 0,void 0,function(){return U(this,function(r){switch(r.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return r.sent(),[2]}})})},o.prototype.signTransaction=function(r){var e;return M(this,void 0,void 0,function(){var t,n;return U(this,function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{transaction:A.encode(r)}})];case 2:return t=a.sent(),[2,A.decode(t)];case 3:throw n=a.sent(),new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transaction");case 4:return[2]}})})},o.prototype.signAllTransactions=function(r){var e;return M(this,void 0,void 0,function(){var t,n;return U(this,function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{transactions:r.map(function(c){return A.encode(c)})}})];case 2:return t=a.sent(),[2,t.map(function(c){return A.decode(c)})];case 3:throw n=a.sent(),new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transactions");case 4:return[2]}})})},o.prototype.signAndSendTransaction=function(r,e){var t;return M(this,void 0,void 0,function(){var n,a;return U(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:A.encode(r),options:e}})];case 2:return n=c.sent(),[2,n];case 3:throw a=c.sent(),new Error(((t=a==null?void 0:a.toString)===null||t===void 0?void 0:t.call(a))||"Failed to sign and send transaction");case 4:return[2]}})})},o.prototype.signMessage=function(r,e){var t;return e===void 0&&(e="hex"),M(this,void 0,void 0,function(){var n,a;return U(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:r,display:e}})];case 2:return n=c.sent(),[2,Uint8Array.from(A.decode(n))];case 3:throw a=c.sent(),new Error(((t=a==null?void 0:a.toString)===null||t===void 0?void 0:t.call(a))||"Failed to sign message");case 4:return[2]}})})},o}(ne);function k(s){return s.version===void 0}var Ae="1.4.2",Ee=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),C=function(){return C=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},C.apply(this,arguments)},I=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},O=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},Se=function(s){var o=typeof Symbol=="function"&&Symbol.iterator,r=o&&s[o],e=0;if(r)return r.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&e>=s.length&&(s=void 0),{value:s&&s[e++],done:!s}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")},Oe=function(s){Ee(o,s);function o(r){var e=s.call(this)||this;return e._network="mainnet-beta",e._provider=null,e._iframeParams={},e._adapterInstance=null,e._element=null,e._iframe=null,e._connectHandler=null,e._flutterHandlerInterval=null,e._handleEvent=function(t){var n,a,c,u;switch(t.type){case"connect_native_web":{e._collapseIframe(),e._adapterInstance=new _e(e._iframe,e._network,((n=t.data)===null||n===void 0?void 0:n.provider)||e._provider||"https://solflare.com/provider"),e._adapterInstance.on("connect",e._webConnected),e._adapterInstance.on("disconnect",e._webDisconnected),e._adapterInstance.connect(),e._setPreferredAdapter("native_web");return}case"connect":{e._collapseIframe(),e._adapterInstance=new Z(e._iframe,((a=t.data)===null||a===void 0?void 0:a.publicKey)||""),e._adapterInstance.connect(),e._setPreferredAdapter((c=t.data)===null||c===void 0?void 0:c.adapter),e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey);return}case"disconnect":{e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect");return}case"accountChanged":{!((u=t.data)===null||u===void 0)&&u.publicKey?(e._adapterInstance=new Z(e._iframe,t.data.publicKey),e._adapterInstance.connect(),e.emit("accountChanged",e.publicKey)):e.emit("accountChanged",void 0);return}case"collapse":{e._collapseIframe();return}default:return}},e._handleResize=function(t){t.resizeMode==="full"?t.params.mode==="fullscreen"?e._expandIframe():t.params.mode==="hide"&&e._collapseIframe():t.resizeMode==="coordinates"&&e._iframe&&(e._iframe.style.top=isFinite(t.params.top)?"".concat(t.params.top,"px"):"",e._iframe.style.bottom=isFinite(t.params.bottom)?"".concat(t.params.bottom,"px"):"",e._iframe.style.left=isFinite(t.params.left)?"".concat(t.params.left,"px"):"",e._iframe.style.right=isFinite(t.params.right)?"".concat(t.params.right,"px"):"",e._iframe.style.width=isFinite(t.params.width)?"".concat(t.params.width,"px"):t.params.width,e._iframe.style.height=isFinite(t.params.height)?"".concat(t.params.height,"px"):t.params.height)},e._handleMessage=function(t){var n;if(((n=t.data)===null||n===void 0?void 0:n.channel)==="solflareIframeToWalletAdapter"){var a=t.data.data||{};a.type==="event"?e._handleEvent(a.event):a.type==="resize"?e._handleResize(a):a.type==="response"&&e._adapterInstance&&e._adapterInstance.handleMessage(a)}},e._removeElement=function(){e._flutterHandlerInterval!==null&&(clearInterval(e._flutterHandlerInterval),e._flutterHandlerInterval=null),e._element&&(e._element.remove(),e._element=null)},e._removeDanglingElements=function(){var t,n,a=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var c=Se(a),u=c.next();!u.done;u=c.next()){var i=u.value;i.parentElement&&i.remove()}}catch(l){t={error:l}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}},e._injectElement=function(){e._removeElement(),e._removeDanglingElements();var t=C(C({},e._iframeParams),{cluster:e._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:Ae}),n=e._getPreferredAdapter();n&&(t.adapter=n),e._provider&&(t.provider=e._provider);var a=Object.keys(t).map(function(u){return"".concat(u,"=").concat(encodeURIComponent(t[u]))}).join("&"),c="".concat(o.IFRAME_URL,"?").concat(a);e._element=document.createElement("div"),e._element.className="solflare-wallet-adapter-iframe",e._element.innerHTML=`
      <iframe src='`.concat(c,`' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),document.body.appendChild(e._element),e._iframe=e._element.querySelector("iframe"),window.fromFlutter=e._handleMobileMessage,e._flutterHandlerInterval=setInterval(function(){window.fromFlutter=e._handleMobileMessage},100),window.addEventListener("message",e._handleMessage,!1)},e._collapseIframe=function(){e._iframe&&(e._iframe.style.top="",e._iframe.style.right="",e._iframe.style.height="2px",e._iframe.style.width="2px")},e._expandIframe=function(){e._iframe&&(e._iframe.style.top="0px",e._iframe.style.bottom="0px",e._iframe.style.left="0px",e._iframe.style.right="0px",e._iframe.style.width="100%",e._iframe.style.height="100%")},e._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},e._setPreferredAdapter=function(t){localStorage&&t&&localStorage.setItem("solflarePreferredWalletAdapter",t)},e._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},e._webConnected=function(){e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey)},e._webDisconnected=function(){e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect")},e._disconnected=function(){window.removeEventListener("message",e._handleMessage,!1),e._removeElement(),e._clearPreferredAdapter(),e._adapterInstance=null},e._handleMobileMessage=function(t){var n,a;(a=(n=e._iframe)===null||n===void 0?void 0:n.contentWindow)===null||a===void 0||a.postMessage({channel:"solflareMobileToIframe",data:t},"*")},r!=null&&r.network&&(e._network=r==null?void 0:r.network),r!=null&&r.provider&&(e._provider=r==null?void 0:r.provider),r!=null&&r.params&&(e._iframeParams=C({},r==null?void 0:r.params)),e}return Object.defineProperty(o.prototype,"publicKey",{get:function(){var r;return((r=this._adapterInstance)===null||r===void 0?void 0:r.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isConnected",{get:function(){var r;return!!(!((r=this._adapterInstance)===null||r===void 0)&&r.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return I(this,void 0,void 0,function(){var r=this;return O(this,function(e){switch(e.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise(function(t,n){r._connectHandler={resolve:t,reject:n}})]);case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return I(this,void 0,void 0,function(){return O(this,function(r){switch(r.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return r.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},o.prototype.signTransaction=function(r){return I(this,void 0,void 0,function(){var e,t;return O(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return e=k(r)?Uint8Array.from(r.serialize({verifySignatures:!1,requireAllSignatures:!1})):r.serialize(),[4,this._adapterInstance.signTransaction(e)];case 1:return t=n.sent(),[2,k(r)?N.from(t):G.deserialize(t)]}})})},o.prototype.signAllTransactions=function(r){return I(this,void 0,void 0,function(){var e,t;return O(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return e=r.map(function(a){return k(a)?Uint8Array.from(a.serialize({verifySignatures:!1,requireAllSignatures:!1})):a.serialize()}),[4,this._adapterInstance.signAllTransactions(e)];case 1:if(t=n.sent(),t.length!==r.length)throw new Error("Failed to sign all transactions");return[2,t.map(function(a,c){return k(r[c])?N.from(a):G.deserialize(a)})]}})})},o.prototype.signAndSendTransaction=function(r,e){return I(this,void 0,void 0,function(){var t;return O(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=k(r)?r.serialize({verifySignatures:!1,requireAllSignatures:!1}):r.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,e)];case 1:return[2,n.sent()]}})})},o.prototype.signMessage=function(r,e){return e===void 0&&(e="utf8"),I(this,void 0,void 0,function(){return O(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(r,e)];case 1:return[2,t.sent()]}})})},o.prototype.sign=function(r,e){return e===void 0&&(e="utf8"),I(this,void 0,void 0,function(){return O(this,function(t){switch(t.label){case 0:return[4,this.signMessage(r,e)];case 1:return[2,t.sent()]}})})},o.prototype.detectWallet=function(r){var e;return r===void 0&&(r=10),I(this,void 0,void 0,function(){return O(this,function(t){return window.SolflareApp||!((e=window.solflare)===null||e===void 0)&&e.isSolflare?[2,!0]:[2,new Promise(function(n){var a,c;a=setInterval(function(){var u;(window.SolflareApp||!((u=window.solflare)===null||u===void 0)&&u.isSolflare)&&(clearInterval(a),clearTimeout(c),n(!0))},500),c=setTimeout(function(){clearInterval(a),n(!1)},r*1e3)})]})})},o.IFRAME_URL="https://connect.solflare.com/",o}(V);export{Oe as default};
