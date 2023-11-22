/*! For license information please see contentscript.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,r,o,i,a,u={},c=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function s(t,e){for(var n in e)t[n]=e[n];return t}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function h(e,n,r){var o,i,a,u={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:u[a]=n[a];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===u[a]&&(u[a]=e.defaultProps[a]);return p(e,u,o,i,null)}function p(t,r,o,i,a){var u={type:t,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++n:a,__i:-1,__u:0};return null==a&&null!=e.vnode&&e.vnode(u),u}function d(t){return t.children}function y(t,e){this.props=t,this.context=e}function v(t,e){if(null==e)return t.__?v(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?v(t):null}function m(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return m(t)}}function g(t){(!t.__d&&(t.__d=!0)&&r.push(t)&&!b.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||i)(b)}function b(){var t,n,o,i,u,c,l,_,f;for(r.sort(a);t=r.shift();)t.__d&&(n=r.length,i=void 0,c=(u=(o=t).__v).__e,_=[],f=[],(l=o.__P)&&((i=s({},u)).__v=u.__v+1,e.vnode&&e.vnode(i),N(l,i,u,o.__n,void 0!==l.ownerSVGElement,32&u.__u?[c]:null,_,null==c?v(u):c,!!(32&u.__u),f),i.__.__k[i.__i]=i,O(_,i,f),i.__e!=c&&m(i)),r.length>n&&r.sort(a));b.__r=0}function w(t,e,n,r,o,i,a,l,_,s,f){var h,p,d,y,v,m=r&&r.__k||c,g=e.length;for(n.__d=_,x(n,e,m),_=n.__d,h=0;h<g;h++)null!=(d=n.__k[h])&&"boolean"!=typeof d&&"function"!=typeof d&&(p=-1===d.__i?u:m[d.__i]||u,d.__i=h,N(t,d,p,o,i,a,l,_,s,f),y=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&T(p.ref,null,d),f.push(d.ref,d.__c||y,d)),null==v&&null!=y&&(v=y),65536&d.__u||p.__k===d.__k?_=k(d,_,t):"function"==typeof d.type&&void 0!==d.__d?_=d.__d:y&&(_=y.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=_,n.__e=v}function x(t,e,n){var r,o,i,a,u,c=e.length,l=n.length,s=l,f=0;for(t.__k=[],r=0;r<c;r++)null!=(o=t.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?p(null,o,null,null,o):_(o)?p(d,{children:o},null,null,null):o.__b>0?p(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,u=E(o,n,a=r+f,s),o.__i=u,i=null,-1!==u&&(s--,(i=n[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&f--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?f++:u>a?s>c-a?f+=u-a:f--:f=u<a&&u==a-1?u-a:0,u!==r+f&&(o.__u|=65536))):(i=n[r])&&null==i.key&&i.__e&&(i.__e==t.__d&&(t.__d=v(i)),H(i,i,!1),n[r]=null,s--);if(s)for(r=0;r<l;r++)null!=(i=n[r])&&0==(131072&i.__u)&&(i.__e==t.__d&&(t.__d=v(i)),H(i,i))}function k(t,e,n){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=k(r[o],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function E(t,e,n,r){var o=t.key,i=t.type,a=n-1,u=n+1,c=e[n];if(null===c||c&&o==c.key&&i===c.type)return n;if(r>(null!=c&&0==(131072&c.__u)?1:0))for(;a>=0||u<e.length;){if(a>=0){if((c=e[a])&&0==(131072&c.__u)&&o==c.key&&i===c.type)return a;a--}if(u<e.length){if((c=e[u])&&0==(131072&c.__u)&&o==c.key&&i===c.type)return u;u++}}return-1}function L(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||l.test(e)?n:n+"px"}function S(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||L(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||L(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=Date.now(),t.addEventListener(e,i?j:P,i)):t.removeEventListener(e,i?j:P,i);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&"rowSpan"!==e&&"colSpan"!==e&&"role"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,n))}}function P(t){var n=this.l[t.type+!1];if(t.t){if(t.t<=n.u)return}else t.t=Date.now();return n(e.event?e.event(t):t)}function j(t){return this.l[t.type+!0](e.event?e.event(t):t)}function N(t,n,r,o,i,a,u,c,l,f){var h,p,v,m,g,b,x,k,E,L,S,P,j,N,O,T=n.type;if(void 0!==n.constructor)return null;128&r.__u&&(l=!!(32&r.__u),a=[c=n.__e=r.__e]),(h=e.__b)&&h(n);t:if("function"==typeof T)try{if(k=n.props,E=(h=T.contextType)&&o[h.__c],L=h?E?E.props.value:h.__:o,r.__c?x=(p=n.__c=r.__c).__=p.__E:("prototype"in T&&T.prototype.render?n.__c=p=new T(k,L):(n.__c=p=new y(k,L),p.constructor=T,p.render=C),E&&E.sub(p),p.props=k,p.state||(p.state={}),p.context=L,p.__n=o,v=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,T.getDerivedStateFromProps(k,p.__s))),m=p.props,g=p.state,p.__v=n,v)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==T.getDerivedStateFromProps&&k!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,L),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,L)||n.__v===r.__v)){for(n.__v!==r.__v&&(p.props=k,p.state=p.__s,p.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(t){t&&(t.__=n)})),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&u.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,L),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,g,b)}))}if(p.context=L,p.props=k,p.__P=t,p.__e=!1,P=e.__r,j=0,"prototype"in T&&T.prototype.render){for(p.state=p.__s,p.__d=!1,P&&P(n),h=p.render(p.props,p.state,p.context),N=0;N<p._sb.length;N++)p.__h.push(p._sb[N]);p._sb=[]}else do{p.__d=!1,P&&P(n),h=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++j<25);p.state=p.__s,null!=p.getChildContext&&(o=s(s({},o),p.getChildContext())),v||null==p.getSnapshotBeforeUpdate||(b=p.getSnapshotBeforeUpdate(m,g)),w(t,_(O=null!=h&&h.type===d&&null==h.key?h.props.children:h)?O:[O],n,r,o,i,a,u,c,l,f),p.base=n.__e,n.__u&=-161,p.__h.length&&u.push(p),x&&(p.__E=p.__=null)}catch(t){n.__v=null,l||null!=a?(n.__e=c,n.__u|=l?160:32,a[a.indexOf(c)]=null):(n.__e=r.__e,n.__k=r.__k),e.__e(t,n,r)}else null==a&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=D(r.__e,n,r,o,i,a,u,l,f);(h=e.diffed)&&h(n)}function O(t,n,r){n.__d=void 0;for(var o=0;o<r.length;o++)T(r[o],r[++o],r[++o]);e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function D(e,n,r,o,i,a,c,l,s){var h,p,d,y,m,g,b,x=r.props,k=n.props,E=n.type;if("svg"===E&&(i=!0),null!=a)for(h=0;h<a.length;h++)if((m=a[h])&&"setAttribute"in m==!!E&&(E?m.localName===E:3===m.nodeType)){e=m,a[h]=null;break}if(null==e){if(null===E)return document.createTextNode(k);e=i?document.createElementNS("http://www.w3.org/2000/svg",E):document.createElement(E,k.is&&k),a=null,l=!1}if(null===E)x===k||l&&e.data===k||(e.data=k);else{if(a=a&&t.call(e.childNodes),x=r.props||u,!l&&null!=a)for(x={},h=0;h<e.attributes.length;h++)x[(m=e.attributes[h]).name]=m.value;for(h in x)m=x[h],"children"==h||("dangerouslySetInnerHTML"==h?d=m:"key"===h||h in k||S(e,h,null,m,i));for(h in k)m=k[h],"children"==h?y=m:"dangerouslySetInnerHTML"==h?p=m:"value"==h?g=m:"checked"==h?b=m:"key"===h||l&&"function"!=typeof m||x[h]===m||S(e,h,m,x[h],i);if(p)l||d&&(p.__html===d.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),n.__k=[];else if(d&&(e.innerHTML=""),w(e,_(y)?y:[y],n,r,o,i&&"foreignObject"!==E,a,c,a?a[0]:r.__k&&v(r,0),l,s),null!=a)for(h=a.length;h--;)null!=a[h]&&f(a[h]);l||(h="value",void 0!==g&&(g!==e[h]||"progress"===E&&!g||"option"===E&&g!==x[h])&&S(e,h,g,x[h],!1),h="checked",void 0!==b&&b!==e[h]&&S(e,h,b,x[h],!1))}return e}function T(t,n,r){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,r)}}function H(t,n,r){var o,i;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||T(o,null,n)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,n)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&H(o[i],n,r||"function"!=typeof t.type);r||null==t.__e||f(t.__e),t.__=t.__e=t.__d=void 0}function C(t,e,n){return this.constructor(t,n)}function F(n,r,o){var i,a,c,l;e.__&&e.__(n,r),a=(i="function"==typeof o)?null:o&&o.__k||r.__k,c=[],l=[],N(r,n=(!i&&o||r).__k=h(d,null,[n]),a||u,u,void 0!==r.ownerSVGElement,!i&&o?[o]:a?null:r.firstChild?t.call(r.childNodes):null,c,!i&&o?o:a?a.__e:r.firstChild,i,l),O(c,n,l)}t=c.slice,e={__e:function(t,e,n,r){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),a=o.__d),a)return o.__E=o}catch(e){t=e}throw t}},n=0,y.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof t&&(t=t(s({},n),this.props)),t&&s(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),g(this))},y.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),g(this))},y.prototype.render=d,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(t,e){return t.__v.__b-e.__v.__b},b.__r=0;var A,G,U,M,I=0,B=[],W=[],q=e.__b,V=e.__r,$=e.diffed,R=e.__c,Y=e.unmount;function J(t,n){e.__h&&e.__h(G,t,I||n),I=0;var r=G.__H||(G.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({__V:W}),r.__[t]}function z(t){return I=1,function(t,e,n){var r=J(A++,2);if(r.t=t,!r.__c&&(r.__=[nt(void 0,e),function(t){var e=r.__N?r.__N[0]:r.__[0],n=r.t(e,t);e!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=G,!G.u)){var o=function(t,e,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(t){return t.__c}));if(o.every((function(t){return!t.__N})))return!i||i.call(this,t,e,n);var a=!1;return o.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(a=!0)}})),!(!a&&r.__c.props===t)&&(!i||i.call(this,t,e,n))};G.u=!0;var i=G.shouldComponentUpdate,a=G.componentWillUpdate;G.componentWillUpdate=function(t,e,n){if(this.__e){var r=i;i=void 0,o(t,e,n),i=r}a&&a.call(this,t,e,n)},G.shouldComponentUpdate=o}return r.__N||r.__}(nt,t)}function K(t,n){var r,o,i=J(A++,3);!e.__s&&(r=i.__H,o=n,!r||r.length!==o.length||o.some((function(t,e){return t!==r[e]})))&&(i.__=t,i.i=n,G.__H.__h.push(i))}function Q(){for(var t;t=B.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(tt),t.__H.__h.forEach(et),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}}e.__b=function(t){G=null,q&&q(t)},e.__r=function(t){V&&V(t),A=0;var e=(G=t.__c).__H;e&&(U===G?(e.__h=[],G.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=W,t.__N=t.i=void 0}))):(e.__h.forEach(tt),e.__h.forEach(et),e.__h=[],A=0)),U=G},e.diffed=function(t){$&&$(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==B.push(n)&&M===e.requestAnimationFrame||((M=e.requestAnimationFrame)||Z)(Q)),n.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==W&&(t.__=t.__V),t.i=void 0,t.__V=W}))),U=G=null},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(tt),t.__h=t.__h.filter((function(t){return!t.__||et(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],e.__e(r,t.__v)}})),R&&R(t,n)},e.unmount=function(t){Y&&Y(t);var n,r=t.__c;r&&r.__H&&(r.__H.__.forEach((function(t){try{tt(t)}catch(t){n=t}})),r.__H=void 0,n&&e.__e(n,r.__v))};var X="function"==typeof requestAnimationFrame;function Z(t){var e,n=function(){clearTimeout(r),X&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);X&&(e=requestAnimationFrame(n))}function tt(t){var e=G,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),G=e}function et(t){var e=G;t.__c=t.__(),G=e}function nt(t,e){return"function"==typeof e?e(t):e}function rt(t){return rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(t)}function ot(){ot=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function _(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),u=new O(r||[]);return o(a,"_invoke",{value:S(t,n,u)}),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=_;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function g(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(D([])));x&&x!==n&&r.call(x,a)&&(b=x);var k=g.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,_=l.value;return _&&"object"==rt(_)&&r.call(_,"__await")?e.resolve(_.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(_).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=P(u,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=s(e,n,r);if("normal"===l.type){if(o=r.done?d:h,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=s(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function D(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(rt(e)+" is not iterable")}return m.prototype=g,o(k,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},E(L.prototype),l(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(_(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),l(k,c,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=D,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:D(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function it(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function at(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){it(i,r,o,a,u,"next",t)}function u(t){it(i,r,o,a,u,"throw",t)}a(void 0)}))}}var ut=function(){var t=at(ot().mark((function t(){var e,n;return ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=JSON.parse(localStorage.getItem("ajs_user_id")),t.next=4,fetch("https://app.hibob.com/api/timeoff/employees/".concat(e,"/requests/inRange?from=2023-01-01&to=2026-12-30"),{headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/json;charset=UTF-8",datatype:"json"},method:"GET",credentials:"include"});case 4:return n=t.sent,t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),ct=function(){var t=at(ot().mark((function t(e,n){var r,o;return ot().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.gov.uk/bank-holidays.json");case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o["england-and-wales"].events.map((function(t){return{date:t.date,title:t.title}})));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}(),lt=["January","February","March","April","May","June","July","August","September","October","November","December"],_t=[6,0,1,2,3,4,5],st=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ft=function(t){return t<10?"0"+t.toString():t.toString()},ht=function(t,e){return 0===e?{year:t-1,month:11}:{year:t,month:e-1}},pt=function(t,e){return 11===e?{year:t+1,month:0}:{year:t,month:e+1}};const dt=function(t){var e=t.year,n=t.month,r=t.date,o=t.holidays,i=t.isPaddedDate,a=t.isBankHoliday,u=function(t,e,n){var r=new Date,o=new Date(t,e,n);return r.toDateString()===o.toDateString()}(e,n,r)?"bg-red-500 text-white":i?"text-gray-400":"text-gray-700";return h("div",{style:"width: 14.28%; height: 120px",className:"px-4 pt-2 border-r border-b relative ".concat(a?"bg-orange-100":""),title:a&&a.title},h("div",{className:"inline-flex w-6 h-6 items-center justify-center text-center leading-none rounded-full transition ease-in-out duration-100 ".concat(u)},r),h("div",{style:"height: 80px;",className:"overflow-y-auto mt-1"},o.map((function(t){return h("div",{class:"px-2 py-1 rounded-lg mt-1 overflow-hidden border border-blue-200 text-blue-800 bg-blue-100"},h("p",{class:"text-sm truncate leading-tight"},t.policyTypeDisplayName))}))))},yt=function(t){var e=t.year,n=t.month,r=t.onClickPrev,o=t.onClickNext;return h("div",{className:"flex items-center justify-between py-2 px-6"},h("div",null,h("span",{className:"text-lg font-bold text-gray-800"},lt[n]),h("span",{className:"ml-1 text-lg text-gray-600 font-normal"},e)),h("div",{className:"border rounded-lg px-1",style:"padding-top: 2px;"},h("button",{type:"button",className:"leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center",onClick:r},h("svg",{className:"h-6 w-6 text-gray-500 inline-flex leading-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}))),h("div",{className:"border-r inline-flex h-6"}),h("button",{type:"button",className:"leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1",onClick:o},h("svg",{className:"h-6 w-6 text-gray-500 inline-flex leading-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})))))};function vt(t){return vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vt(t)}function mt(){mt=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function _(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),u=new O(r||[]);return o(a,"_invoke",{value:S(t,n,u)}),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=_;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function g(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(D([])));x&&x!==n&&r.call(x,a)&&(b=x);var k=g.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,_=l.value;return _&&"object"==vt(_)&&r.call(_,"__await")?e.resolve(_.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(_).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=P(u,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=s(e,n,r);if("normal"===l.type){if(o=r.done?d:h,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=s(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function D(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(vt(e)+" is not iterable")}return m.prototype=g,o(k,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},E(L.prototype),l(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(_(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),l(k,c,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=D,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:D(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function gt(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function bt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return wt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function xt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function kt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?xt(Object(n),!0).forEach((function(e){var r,o,i;r=t,o=e,i=n[e],(o=function(t){var e=function(t,e){if("object"!==vt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==vt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===vt(e)?e:String(e)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const Et=function(){var t,e,n,r,o,i=bt(z((e=(t=new Date).getMonth(),n=t.getFullYear(),r=ht(n,e),o=pt(n,e),{current:{year:n,month:e},prev:kt({},r),next:kt({},o),calendarDays:[],startPadding:[],endPadding:[]})),2),a=i[0],u=i[1],c=bt(z([]),2),l=c[0],_=c[1],s=bt(z([]),2),f=s[0],p=s[1],d=a.current,y=a.prev,v=a.next,m=function(t,e,n){var r=new Date(t,e,n);return l.filter((function(t){return new Date(t.startDate)<=r&&new Date(t.endDate)>=r}))},g=function(t,e,n,r){return f.find((function(r){return r.date==="".concat(t,"-").concat(ft(e+1),"-").concat(ft(n))}))};return K((function(){var t,e,n;t=function(t,e){for(var n=new Date(t,e,0).getDate(),r=new Date(t,e).getDay(),o=[],i=1;i<=_t[r];i++)o.push(n+1-i);return o.reverse()}(d.year,d.month),e=function(t,e){for(var n=new Date(t,e+1,0).getDate(),r=[],o=1;o<=n;o++)r.push(o);return r}(d.year,d.month),n=function(t){var e=t%7;if(0===e)return[];for(var n=7-e,r=[],o=1;o<=n;o++)r.push(o);return r}(t.length+e.length),u(kt(kt({},a),{},{startPadding:t,calendarDays:e,endPadding:n}))}),[d.month]),K((function(){var t;(t=mt().mark((function t(){var e,n;return mt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ut();case 2:return e=t.sent,_(e.requests),t.next=6,ct();case 6:n=t.sent,p(n);case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){gt(i,r,o,a,u,"next",t)}function u(t){gt(i,r,o,a,u,"throw",t)}a(void 0)}))})()}),[]),h("div",{class:"container mx-auto px-4 py-2"},h("div",{class:"bg-white rounded-lg shadow overflow-hidden"},h(yt,{year:d.year,month:d.month,onClickPrev:function(){var t=ht(d.year,d.month),e=ht(t.year,t.month),n=pt(t.year,t.month);u(kt(kt({},a),{},{current:t,prev:e,next:n}))},onClickNext:function(){var t=pt(d.year,d.month),e=ht(t.year,t.month),n=pt(t.year,t.month);u(kt(kt({},a),{},{current:t,prev:e,next:n}))}}),h("div",{class:"-mx-1 -mb-1"},h("div",{className:"flex flex-wrap",style:"margin-bottom: -40px;"},st.map((function(t){return h("div",{style:"width: 14.26%",className:"px-2 py-2",key:t},h("div",{className:"text-gray-600 text-sm uppercase tracking-wide font-bold text-center"},t))}))),h("div",{class:"flex flex-wrap border-t border-l"},a.startPadding.map((function(t,e){return h(dt,{key:e,year:y.year,month:y.month,date:t,holidays:m(y.year,y.month,t),isBankHoliday:g(y.year,y.month,t),isPaddedDate:!0})})),a.calendarDays.map((function(t,e){return h(dt,{key:e,year:d.year,month:d.month,date:t,holidays:m(d.year,d.month,t),isBankHoliday:g(d.year,d.month,t),isPaddedDate:!1})})),a.endPadding.map((function(t,e){return h(dt,{key:e,year:v.year,month:v.month,date:t,holidays:m(v.year,v.month,t),isBankHoliday:g(v.year,v.month,t),isPaddedDate:!0})}))))))};var Lt=new MutationObserver((function(t){t.forEach((function(t){var e;if(t.addedNodes)for(var n=0;n<t.addedNodes.length;n++)t.addedNodes[n].classList&&t.addedNodes[n].classList.contains("balance-tab-content")&&(void 0,e=document.createElement("div"),document.getElementsByClassName("balance-tab-content")[0].append(e),F(h(Et,null),e))}))}));Lt.observe(document.body,{childList:!0,subtree:!0})})();