(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},f="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,n=function(){n=function(){};f.Symbol||(f.Symbol=ba)},ba=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}(),q=function(){n();var a=f.Symbol.iterator;a||(a=f.Symbol.iterator=f.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return p(this)}});q=function(){}},p=function(a){var b=0;return ca(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},ca=function(a){q();a={next:a};a[f.Symbol.iterator]=function(){return this};return a},r=function(a){q();var b=a[Symbol.iterator];return b?b.call(a):p(a)},t=this,v=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=da:w=ea;return w.apply(null,arguments)},x=Date.now||function(){return+new Date},z=function(a,b){function c(){}c.prototype=b.prototype;a.F=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.H=function(a,c,I){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var A=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"==typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var B=function(){},fa="function"==typeof Uint8Array,D=function(a,b,c){a.g=null;b||(b=[]);a.u=void 0;a.j=-1;a.h=b;a:{if(b=a.h.length){--b;var d=a.h[b];if(d&&"object"==typeof d&&"array"!=v(d)&&!(fa&&d instanceof Uint8Array)){a.l=b-a.j;a.i=d;break a}}a.l=Number.MAX_VALUE}a.o={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.l)d+=a.j,a.h[d]=a.h[d]||C;else{var e=a.l+a.j;a.h[e]||(a.i=a.h[e]={});a.i[d]=a.i[d]||C}},C=[],E=function(a,b){if(b<a.l){b+=a.j;var c=a.h[b];return c===C?a.h[b]=[]:c}if(a.i)return c=a.i[b],c===C?a.i[b]=[]:c},ha=function(a){var b=F;a.g||(a.g={});if(!a.g[1]){var c=E(a,1);c&&(a.g[1]=new b(c))}return a.g[1]},H=function(a){var b=G;a.g||(a.g={});if(!a.g[1]){if(1<a.l){var c=1+a.j;var d=a.h[c];c=d===C?a.h[c]=[]:d}else d=a.i[1],c=d===C?a.i[1]=[]:d;d=[];for(var e=0;e<c.length;e++)d[e]=new b(c[e]);a.g[1]=d}b=a.g[1];b==C&&(b=a.g[1]=[]);return b},L=function(a){if(a.g)for(var b in a.g){var c=a.g[b];if("array"==v(c))for(var d=0;d<c.length;d++)c[d]&&K(c[d]);else c&&K(c)}},K=function(a){L(a);return a.h};B.prototype.toString=function(){L(this);return this.h.toString()};var F=function(a){D(this,a,ia)};z(F,B);var ia=[1],G=function(a){D(this,a,null)};z(G,B);var M=function(a){D(this,a,null)};z(M,B);var N=document,O=window;var ka={capture:!0},la=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});t.addEventListener("test",null,b)}catch(c){}return a});function ma(a){return a?a.passive&&la()?a:a.capture||!1:a}var P=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,ma(d)):a.attachEvent&&a.attachEvent("on"+b,c)};var na=Object.prototype.hasOwnProperty,oa=function(a,b){for(var c in a)na.call(a,c)&&b.call(void 0,a[c],c,a)},Q=function(a,b){a&&oa(b,function(b,d){a.style[d]=b})},pa=function(a){for(var b=N.body,c=document.createDocumentFragment(),d=a.length,e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};var R=function(){this.h=this.h;this.i=this.i};R.prototype.h=!1;var qa=function(a){a.h||(a.h=!0,a.j())};R.prototype.j=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var S=function(a,b,c){R.call(this);this.l=a;this.B=b||0;this.o=c;this.u=w(this.A,this)};z(S,R);S.prototype.g=0;S.prototype.j=function(){S.F.j.call(this);this.stop();delete this.l;delete this.o};S.prototype.start=function(a){this.stop();var b=this.u;a=void 0!==a?a:this.B;if("function"!=v(b))if(b&&"function"==typeof b.handleEvent)b=w(b.handleEvent,b);else throw Error("Invalid listener argument");this.g=2147483647<Number(a)?-1:t.setTimeout(b,a||0)};S.prototype.stop=function(){0!=this.g&&t.clearTimeout(this.g);this.g=0};S.prototype.A=function(){this.g=0;this.l&&this.l.call(this.o)};var ra=function(a){P(O,"message",function(b){try{var c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};var sa={display:"inline-block",position:"absolute"},ta={display:"none",width:"100%",height:"100%",top:"0",left:"0"},T=function(a,b){a&&(a.style.display=(void 0===b?0:b)?"none":"inline-block")},U=function(){this.i=[];this.j=this.g=null;this.B=[];this.o=null;this.A=[];this.h=[];this.l=[];this.u={};this.G=[]};U.prototype.init=function(a){var b=this;this.o=new M(a);a=ha(this.o);A(H(a),function(a){b.l.push({C:0,v:!1,D:0,m:a,w:-1})});try{var c=N.querySelectorAll("*[data-ifc]")}catch(e){c=[]}this.h=c;c=this.h.length;for(a={s:0};a.s<c;a={s:a.s},++a.s){var d=new F(JSON.parse(this.h[a.s].getAttribute("data-ifc")||"[]"));A(H(d),function(a){return function(c){b.l.push({C:0,v:!1,D:0,m:c,w:a.s})}}(a))}c=r(this.l);for(a=c.next();!a.done;a=c.next())a=a.value,d=a.m,0<E(d,2)&&0<E(d,5)?(!this.g&&E(d,9)&&(this.g=V(ta)),ua(this,a)):E(d,1)&&E(d,9)&&va(this,E(d,1)||"");c=this.i.slice(0);this.g&&c.push(this.g);N.body&&pa(c);P(N,"click",function(a){for(var c,d=-1,e=[],X=r(b.l),m=X.next();!m.done;m=X.next()){m=m.value;var g=m.w,l=-1!==g;if(!(E(m.m,3)<=d||m.v||l&&!1===e[g])){var h=!l||e[g]||b.h[g].contains(a.target);l&&h&&(e[g]=!0);if(g=h)if(l=a,g=m,h=g.m,0<E(h,2)&&0<E(h,5))g=b.u[E(h,5)],g=void 0!==g&&x()<g+E(h,2);else if(E(h,1)){h=(0<=g.w?b.h[g.w]:N.body).getBoundingClientRect();var y=parseFloat(N.body.style.zoom||1),u=r([l.clientX/y-h.left,l.clientY/y-h.top,h.width,h.height]);l=u.next().value;h=u.next().value;y=u.next().value;u=u.next().value;!(0<y&&0<u)||isNaN(l)||isNaN(h)||0>l||0>h?g=!1:(g=W(E(g.m,1)||""),g=!(l>=g.left&&y-l>g.right&&h>=g.top&&u-h>g.bottom))}else g=!0;g&&(c=m,d=E(m.m,3))}}if(c)switch(d=c.m,E(d,4)){case 2:case 3:case 4:var k=void 0===k?!1:k;a.preventDefault?a.preventDefault():a.returnValue=!1;k&&a.stopPropagation();k=x();500<k-c.D&&(c.D=k,++c.C);k=c.m;if(E(k,8)&&c.C>=E(k,8))if(c.v=!0,b.g&&0<E(k,2))Y(b);else if(0<b.i.length&&E(k,1))for(k=r(b.i),c=k.next();!c.done;c=k.next())T(c.value,!0);k=K(d);c=r(b.A);for(d=c.next();!d.done;d=c.next())d=d.value,d(a,k)}},ka)};U.prototype.registerCallback=function(a){this.A.push(a)};var va=function(a,b){b=W(b);var c=E(a.o,9)||0;a.i=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(function(a){return V(a,9019)})},Z=function(a,b){if(!b.v){var c=E(b.m,5);a.u[c]=x();E(b.m,9)&&(a.B.push(b),Y(a))}},ua=function(a,b){switch(E(b.m,5)){case 2:O.AFMA_Communicator&&O.AFMA_Communicator.addEventListener&&P(O.AFMA_Communicator,"onshow",function(){Z(a,b)});break;case 4:P(N,"DOMContentLoaded",function(){Z(a,b)});break;case 7:O.mraid&&O.mraid.isViewable&&P(O.mraid,"viewableChange",function(){var c=O.mraid;"function"==v(c.isViewable)&&c.isViewable()&&Z(a,b)});break;case 8:ra(function(c){c.rr&&Z(a,b)});break;case 9:if(O.IntersectionObserver){var c=new IntersectionObserver(function(c){c=r(c);for(var d=c.next();!d.done;d=c.next())if(0<d.value.intersectionRatio){Z(a,b);break}});c.observe(N.body);a.G.push(c)}}},Y=function(a){for(var b=0,c=r(a.B),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.m,I=a.u[E(e,5)];d.v||void 0===I||(b=Math.max(b,I+E(e,2)))}a.j&&qa(a.j);b-=x();var J=a.g;0<b?(T(J),a.j=new S(function(){T(J,!0)},b),a.j.start()):T(J,!0)},V=function(a,b){b=void 0===b?2147483647:b;var c=N.createElement("DIV");Q(c,sa);Q(c,{"z-index":b});Q(c,a);return c},W=function(a){a=void 0===a?"":a;var b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4==a.length&&a.reduce(function(a,b){return a&&!isNaN(b)},!0)&&(a=r(a.map(function(a){return+a})),b.top=a.next().value,b.right=a.next().value,b.bottom=a.next().value,b.left=a.next().value));return b};window.googqscp=new U;}).call(this);
