(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var xh={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function hS(){if(W_)return Wo;W_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return Wo.Fragment=e,Wo.jsx=n,Wo.jsxs=n,Wo}var q_;function dS(){return q_||(q_=1,xh.exports=hS()),xh.exports}var fe=dS(),yh={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function pS(){if(Y_)return at;Y_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(U,ee,xe){this.props=U,this.context=ee,this.refs=T,this.updater=xe||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ee){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ee,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function O(U,ee,xe){this.props=U,this.context=ee,this.refs=T,this.updater=xe||y}var N=O.prototype=new x;N.constructor=O,E(N,S.prototype),N.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(U,ee,xe,Se,J,pe){return xe=pe.ref,{$$typeof:o,type:U,key:ee,ref:xe!==void 0?xe:null,props:pe}}function X(U,ee){return B(U.type,ee,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function w(U){var ee={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return ee[xe]})}var V=/\/+/g;function le(U,ee){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):ee.toString(36)}function re(){}function _e(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(re,re):(U.status="pending",U.then(function(ee){U.status==="pending"&&(U.status="fulfilled",U.value=ee)},function(ee){U.status==="pending"&&(U.status="rejected",U.reason=ee)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function de(U,ee,xe,Se,J){var pe=typeof U;(pe==="undefined"||pe==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(pe){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case o:case e:ye=!0;break;case g:return ye=U._init,de(ye(U._payload),ee,xe,Se,J)}}if(ye)return J=J(U),ye=Se===""?"."+le(U,0):Se,C(J)?(xe="",ye!=null&&(xe=ye.replace(V,"$&/")+"/"),de(J,ee,xe,"",function(ot){return ot})):J!=null&&(D(J)&&(J=X(J,xe+(J.key==null||U&&U.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+ye)),ee.push(J)),1;ye=0;var Ae=Se===""?".":Se+":";if(C(U))for(var Oe=0;Oe<U.length;Oe++)Se=U[Oe],pe=Ae+le(Se,Oe),ye+=de(Se,ee,xe,pe,J);else if(Oe=v(U),typeof Oe=="function")for(U=Oe.call(U),Oe=0;!(Se=U.next()).done;)Se=Se.value,pe=Ae+le(Se,Oe++),ye+=de(Se,ee,xe,pe,J);else if(pe==="object"){if(typeof U.then=="function")return de(_e(U),ee,xe,Se,J);throw ee=String(U),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ye}function I(U,ee,xe){if(U==null)return U;var Se=[],J=0;return de(U,Se,"","",function(pe){return ee.call(xe,pe,J++)}),Se}function Z(U){if(U._status===-1){var ee=U._result;ee=ee(),ee.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=ee)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Ee(){}return at.Children={map:I,forEach:function(U,ee,xe){I(U,function(){ee.apply(this,arguments)},xe)},count:function(U){var ee=0;return I(U,function(){ee++}),ee},toArray:function(U){return I(U,function(ee){return ee})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},at.Component=S,at.Fragment=n,at.Profiler=r,at.PureComponent=O,at.StrictMode=a,at.Suspense=d,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,at.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},at.cache=function(U){return function(){return U.apply(null,arguments)}},at.cloneElement=function(U,ee,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Se=E({},U.props),J=U.key,pe=void 0;if(ee!=null)for(ye in ee.ref!==void 0&&(pe=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!H.call(ee,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ee.ref===void 0||(Se[ye]=ee[ye]);var ye=arguments.length-2;if(ye===1)Se.children=xe;else if(1<ye){for(var Ae=Array(ye),Oe=0;Oe<ye;Oe++)Ae[Oe]=arguments[Oe+2];Se.children=Ae}return B(U.type,J,void 0,void 0,pe,Se)},at.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},at.createElement=function(U,ee,xe){var Se,J={},pe=null;if(ee!=null)for(Se in ee.key!==void 0&&(pe=""+ee.key),ee)H.call(ee,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(J[Se]=ee[Se]);var ye=arguments.length-2;if(ye===1)J.children=xe;else if(1<ye){for(var Ae=Array(ye),Oe=0;Oe<ye;Oe++)Ae[Oe]=arguments[Oe+2];J.children=Ae}if(U&&U.defaultProps)for(Se in ye=U.defaultProps,ye)J[Se]===void 0&&(J[Se]=ye[Se]);return B(U,pe,void 0,void 0,null,J)},at.createRef=function(){return{current:null}},at.forwardRef=function(U){return{$$typeof:h,render:U}},at.isValidElement=D,at.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},at.memo=function(U,ee){return{$$typeof:p,type:U,compare:ee===void 0?null:ee}},at.startTransition=function(U){var ee=F.T,xe={};F.T=xe;try{var Se=U(),J=F.S;J!==null&&J(xe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(Ee,Y)}catch(pe){Y(pe)}finally{F.T=ee}},at.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},at.use=function(U){return F.H.use(U)},at.useActionState=function(U,ee,xe){return F.H.useActionState(U,ee,xe)},at.useCallback=function(U,ee){return F.H.useCallback(U,ee)},at.useContext=function(U){return F.H.useContext(U)},at.useDebugValue=function(){},at.useDeferredValue=function(U,ee){return F.H.useDeferredValue(U,ee)},at.useEffect=function(U,ee,xe){var Se=F.H;if(typeof xe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(U,ee)},at.useId=function(){return F.H.useId()},at.useImperativeHandle=function(U,ee,xe){return F.H.useImperativeHandle(U,ee,xe)},at.useInsertionEffect=function(U,ee){return F.H.useInsertionEffect(U,ee)},at.useLayoutEffect=function(U,ee){return F.H.useLayoutEffect(U,ee)},at.useMemo=function(U,ee){return F.H.useMemo(U,ee)},at.useOptimistic=function(U,ee){return F.H.useOptimistic(U,ee)},at.useReducer=function(U,ee,xe){return F.H.useReducer(U,ee,xe)},at.useRef=function(U){return F.H.useRef(U)},at.useState=function(U){return F.H.useState(U)},at.useSyncExternalStore=function(U,ee,xe){return F.H.useSyncExternalStore(U,ee,xe)},at.useTransition=function(){return F.H.useTransition()},at.version="19.1.0",at}var j_;function Jd(){return j_||(j_=1,yh.exports=pS()),yh.exports}var Fs=Jd(),Sh={exports:{}},qo={},Mh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function mS(){return K_||(K_=1,function(o){function e(I,Z){var Y=I.length;I.push(Z);e:for(;0<Y;){var Ee=Y-1>>>1,U=I[Ee];if(0<r(U,Z))I[Ee]=Z,I[Y]=U,Y=Ee;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var Z=I[0],Y=I.pop();if(Y!==Z){I[0]=Y;e:for(var Ee=0,U=I.length,ee=U>>>1;Ee<ee;){var xe=2*(Ee+1)-1,Se=I[xe],J=xe+1,pe=I[J];if(0>r(Se,Y))J<U&&0>r(pe,Se)?(I[Ee]=pe,I[J]=Y,Ee=J):(I[Ee]=Se,I[xe]=Y,Ee=xe);else if(J<U&&0>r(pe,Y))I[Ee]=pe,I[J]=Y,Ee=J;else break e}}return Z}function r(I,Z){var Y=I.sortIndex-Z.sortIndex;return Y!==0?Y:I.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,y=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var Z=n(p);Z!==null;){if(Z.callback===null)a(p);else if(Z.startTime<=I)a(p),Z.sortIndex=Z.expirationTime,e(d,Z);else break;Z=n(p)}}function F(I){if(T=!1,C(I),!E)if(n(d)!==null)E=!0,H||(H=!0,le());else{var Z=n(p);Z!==null&&de(F,Z.startTime-I)}}var H=!1,B=-1,X=5,D=-1;function w(){return S?!0:!(o.unstable_now()-D<X)}function V(){if(S=!1,H){var I=o.unstable_now();D=I;var Z=!0;try{e:{E=!1,T&&(T=!1,O(B),B=-1),y=!0;var Y=v;try{t:{for(C(I),_=n(d);_!==null&&!(_.expirationTime>I&&w());){var Ee=_.callback;if(typeof Ee=="function"){_.callback=null,v=_.priorityLevel;var U=Ee(_.expirationTime<=I);if(I=o.unstable_now(),typeof U=="function"){_.callback=U,C(I),Z=!0;break t}_===n(d)&&a(d),C(I)}else a(d);_=n(d)}if(_!==null)Z=!0;else{var ee=n(p);ee!==null&&de(F,ee.startTime-I),Z=!1}}break e}finally{_=null,v=Y,y=!1}Z=void 0}}finally{Z?le():H=!1}}}var le;if(typeof N=="function")le=function(){N(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,_e=re.port2;re.port1.onmessage=V,le=function(){_e.postMessage(null)}}else le=function(){x(V,0)};function de(I,Z){B=x(function(){I(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return I()}finally{v=Y}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=v;v=I;try{return Z()}finally{v=Y}},o.unstable_scheduleCallback=function(I,Z,Y){var Ee=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ee+Y:Ee):Y=Ee,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,I={id:g++,callback:Z,priorityLevel:I,startTime:Y,expirationTime:U,sortIndex:-1},Y>Ee?(I.sortIndex=Y,e(p,I),n(d)===null&&I===n(p)&&(T?(O(B),B=-1):T=!0,de(F,Y-Ee))):(I.sortIndex=U,e(d,I),E||y||(E=!0,H||(H=!0,le()))),I},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(I){var Z=v;return function(){var Y=v;v=Z;try{return I.apply(this,arguments)}finally{v=Y}}}}(Eh)),Eh}var Z_;function gS(){return Z_||(Z_=1,Mh.exports=mS()),Mh.exports}var Th={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function _S(){if(Q_)return Un;Q_=1;var o=Jd();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(d,p,null,g)},Un.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Un.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Un.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Un.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Un.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Un.requestFormReset=function(d){a.d.r(d)},Un.unstable_batchedUpdates=function(d,p){return d(p)},Un.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Un.useFormStatus=function(){return u.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var J_;function vS(){if(J_)return Th.exports;J_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Th.exports=_S(),Th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function xS(){if($_)return qo;$_=1;var o=gS(),e=Jd(),n=vS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,b=f.child;b;){if(b===s){M=!0,s=f,l=m;break}if(b===l){M=!0,l=f,s=m;break}b=b.sibling}if(!M){for(b=m.child;b;){if(b===s){M=!0,s=m,l=f;break}if(b===l){M=!0,l=m,s=f;break}b=b.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case X:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}var de=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ee=[],U=-1;function ee(t){return{current:t}}function xe(t){0>U||(t.current=Ee[U],Ee[U]=null,U--)}function Se(t,i){U++,Ee[U]=t.current,t.current=i}var J=ee(null),pe=ee(null),ye=ee(null),Ae=ee(null);function Oe(t,i){switch(Se(ye,i),Se(pe,t),Se(J,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?x_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=x_(i),t=y_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xe(J),Se(J,t)}function ot(){xe(J),xe(pe),xe(ye)}function Ke(t){t.memoizedState!==null&&Se(Ae,t);var i=J.current,s=y_(i,t.type);i!==s&&(Se(pe,t),Se(J,s))}function Xt(t){pe.current===t&&(xe(J),xe(pe)),Ae.current===t&&(xe(Ae),Ho._currentValue=Y)}var Gt=Object.prototype.hasOwnProperty,ft=o.unstable_scheduleCallback,z=o.unstable_cancelCallback,Gn=o.unstable_shouldYield,vt=o.unstable_requestPaint,tt=o.unstable_now,Xe=o.unstable_getCurrentPriorityLevel,Pt=o.unstable_ImmediatePriority,Ge=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,A=o.unstable_LowPriority,te=o.unstable_IdlePriority,ve=o.log,Me=o.unstable_setDisableYieldValue,ue=null,Be=null;function Re(t){if(typeof ve=="function"&&Me(t),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(ue,t)}catch{}}var we=Math.clz32?Math.clz32:ze,xt=Math.log,be=Math.LN2;function ze(t){return t>>>=0,t===0?32:31-(xt(t)/be|0)|0}var Ye=256,Ze=4194304;function Pe(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var b=l&134217727;return b!==0?(l=b&~m,l!==0?f=Pe(l):(M&=b,M!==0?f=Pe(M):s||(s=b&~t,s!==0&&(f=Pe(s))))):(b=l&~m,b!==0?f=Pe(b):M!==0?f=Pe(M):s||(s=l&~t,s!==0&&(f=Pe(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function et(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function It(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Le(){var t=Ze;return Ze<<=1,(Ze&62914560)===0&&(Ze=4194304),t}function oe(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function me(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ie(t,i,s,l,f,m){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var b=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(s=M&~s;0<s;){var ce=31-we(s),ge=1<<ce;b[ce]=0,P[ce]=-1;var ne=$[ce];if(ne!==null)for($[ce]=null,ce=0;ce<ne.length;ce++){var ie=ne[ce];ie!==null&&(ie.lane&=-536870913)}s&=~ge}l!==0&&Ne(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~i))}function Ne(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-we(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function nt(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-we(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Wt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function an(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:z_(t.type))}function Kn(t,i){var s=Z.p;try{return Z.p=t,i()}finally{Z.p=s}}var mn=Math.random().toString(36).slice(2),cn="__reactFiber$"+mn,En="__reactProps$"+mn,Vn="__reactContainer$"+mn,os="__reactEvents$"+mn,gl="__reactListeners$"+mn,_l="__reactHandles$"+mn,ls="__reactResources$"+mn,ya="__reactMarker$"+mn;function Sa(t){delete t[cn],delete t[En],delete t[os],delete t[gl],delete t[_l]}function Gi(t){var i=t[cn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Vn]||s[cn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=T_(t);t!==null;){if(s=t[cn])return s;t=T_(t)}return i}t=s,s=t.parentNode}return null}function Vi(t){if(t=t[cn]||t[Vn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function cs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ma(t){var i=t[ls];return i||(i=t[ls]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function sn(t){t[ya]=!0}var vl=new Set,xl={};function ki(t,i){R(t,i),R(t+"Capture",i)}function R(t,i){for(xl[t]=i,t=0;t<i.length;t++)vl.add(i[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},se={};function K(t){return Gt.call(se,t)?!0:Gt.call(ae,t)?!1:q.test(t)?se[t]=!0:(ae[t]=!0,!1)}function Te(t,i,s){if(K(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ce(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function De(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Fe,Je;function We(t){if(Fe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Fe=i&&i[1]||"",Je=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+Je}var ke=!1;function dt(t,i){if(!t||ke)return"";ke=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(ie){ne=ie}t.call(ge.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],b=m[1];if(M&&b){var P=M.split(`
`),$=b.split(`
`);for(f=l=0;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===P.length||f===$.length)for(l=P.length-1,f=$.length-1;1<=l&&0<=f&&P[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(P[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||P[l]!==$[f]){var ce=`
`+P[l].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=l&&0<=f);break}}}finally{ke=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?We(s):""}function Rt(t){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return We("Activity");default:return""}}function Kt(t){try{var i="";do i+=Rt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=St(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Jt(t){t._valueTracker||(t._valueTracker=qe(t))}function bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=St(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function wn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ea=/[\n"\\]/g;function qt(t){return t.replace(Ea,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xi(t,i,s,l,f,m,M,b){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+yt(i)):t.value!==""+yt(i)&&(t.value=""+yt(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Cn(t,M,yt(i)):s!=null?Cn(t,M,yt(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+yt(b):t.removeAttribute("name")}function Vt(t,i,s,l,f,m,M,b){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+yt(s):"",i=i!=null?""+yt(i):s,b||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=b?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Cn(t,i,s){i==="number"&&wn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function un(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+yt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function gn(t,i,s){if(i!=null&&(i=""+yt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+yt(s):""}function Tn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(de(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=yt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Ri(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Wi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Wi.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function yp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&xp(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&xp(t,m,i[m])}function _u(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(t){return fx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var vu=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gs=null,Vs=null;function Sp(t){var i=Vi(t);if(i&&(t=i.stateNode)){var s=t[En]||null;e:switch(t=i.stateNode,i.type){case"input":if(Xi(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+qt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[En]||null;if(!f)throw Error(a(90));Xi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&bt(l)}break e;case"textarea":gn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&un(t,!!s.multiple,i,!1)}}}var yu=!1;function Mp(t,i,s){if(yu)return t(i,s);yu=!0;try{var l=t(i);return l}finally{if(yu=!1,(Gs!==null||Vs!==null)&&(sc(),Gs&&(i=Gs,t=Vs,Vs=Gs=null,Sp(i),t)))for(i=0;i<t.length;i++)Sp(t[i])}}function Jr(t,i){var s=t.stateNode;if(s===null)return null;var l=s[En]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(qi)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Su=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Su=!1}var Ta=null,Mu=null,Sl=null;function Ep(){if(Sl)return Sl;var t,i=Mu,s=i.length,l,f="value"in Ta?Ta.value:Ta.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[m-l];l++);return Sl=f.slice(t,1<l?1-l:void 0)}function Ml(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Tp(){return!1}function kn(t){function i(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(s=t[b],this[b]=s?s(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?El:Tp,this.isPropagationStopped=Tp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=kn(us),eo=g({},us,{view:0,detail:0}),hx=kn(eo),Eu,Tu,to,bl=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Eu=t.screenX-to.screenX,Tu=t.screenY-to.screenY):Tu=Eu=0,to=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),bp=kn(bl),dx=g({},bl,{dataTransfer:0}),px=kn(dx),mx=g({},eo,{relatedTarget:0}),bu=kn(mx),gx=g({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=kn(gx),vx=g({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xx=kn(vx),yx=g({},us,{data:0}),Ap=kn(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ex[t])?!!i[t]:!1}function Au(){return Tx}var bx=g({},eo,{key:function(t){if(t.key){var i=Sx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ax=kn(bx),Rx=g({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=kn(Rx),wx=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Cx=kn(wx),Dx=g({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=kn(Dx),Lx=g({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=kn(Lx),Ox=g({},us,{newState:0,oldState:0}),Px=kn(Ox),Ix=[9,13,27,32],Ru=qi&&"CompositionEvent"in window,no=null;qi&&"documentMode"in document&&(no=document.documentMode);var Bx=qi&&"TextEvent"in window&&!no,wp=qi&&(!Ru||no&&8<no&&11>=no),Cp=" ",Dp=!1;function Up(t,i){switch(t){case"keyup":return Ix.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function Fx(t,i){switch(t){case"compositionend":return Lp(i);case"keypress":return i.which!==32?null:(Dp=!0,Cp);case"textInput":return t=i.data,t===Cp&&Dp?null:t;default:return null}}function zx(t,i){if(ks)return t==="compositionend"||!Ru&&Up(t,i)?(t=Ep(),Sl=Mu=Ta=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wp&&i.locale!=="ko"?null:i.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Hx[t.type]:i==="textarea"}function Op(t,i,s,l){Gs?Vs?Vs.push(l):Vs=[l]:Gs=l,i=fc(i,"onChange"),0<i.length&&(s=new Tl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var io=null,ao=null;function Gx(t){p_(t,0)}function Al(t){var i=cs(t);if(bt(i))return t}function Pp(t,i){if(t==="change")return i}var Ip=!1;if(qi){var wu;if(qi){var Cu="oninput"in document;if(!Cu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Cu=typeof Bp.oninput=="function"}wu=Cu}else wu=!1;Ip=wu&&(!document.documentMode||9<document.documentMode)}function Fp(){io&&(io.detachEvent("onpropertychange",zp),ao=io=null)}function zp(t){if(t.propertyName==="value"&&Al(ao)){var i=[];Op(i,ao,t,xu(t)),Mp(Gx,i)}}function Vx(t,i,s){t==="focusin"?(Fp(),io=i,ao=s,io.attachEvent("onpropertychange",zp)):t==="focusout"&&Fp()}function kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(ao)}function Xx(t,i){if(t==="click")return Al(i)}function Wx(t,i){if(t==="input"||t==="change")return Al(i)}function qx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:qx;function so(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Gt.call(i,f)||!Zn(t[f],i[f]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,i){var s=Hp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Hp(s)}}function Vp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=wn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=wn(t.document)}return i}function Du(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Yx=qi&&"documentMode"in document&&11>=document.documentMode,Xs=null,Uu=null,ro=null,Lu=!1;function Xp(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lu||Xs==null||Xs!==wn(l)||(l=Xs,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&so(ro,l)||(ro=l,l=fc(Uu,"onSelect"),0<l.length&&(i=new Tl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Xs)))}function fs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Ws={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Nu={},Wp={};qi&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function hs(t){if(Nu[t])return Nu[t];if(!Ws[t])return t;var i=Ws[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Wp)return Nu[t]=i[s];return t}var qp=hs("animationend"),Yp=hs("animationiteration"),jp=hs("animationstart"),jx=hs("transitionrun"),Kx=hs("transitionstart"),Zx=hs("transitioncancel"),Kp=hs("transitionend"),Zp=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function gi(t,i){Zp.set(t,i),ki(i,[t])}var Qp=new WeakMap;function ri(t,i){if(typeof t=="object"&&t!==null){var s=Qp.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Kt(i)},Qp.set(t,i),i)}return{value:t,source:i,stack:Kt(i)}}var oi=[],qs=0,Pu=0;function Rl(){for(var t=qs,i=Pu=qs=0;i<t;){var s=oi[i];oi[i++]=null;var l=oi[i];oi[i++]=null;var f=oi[i];oi[i++]=null;var m=oi[i];if(oi[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&Jp(s,f,m)}}function wl(t,i,s,l){oi[qs++]=t,oi[qs++]=i,oi[qs++]=s,oi[qs++]=l,Pu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Iu(t,i,s,l){return wl(t,i,s,l),Cl(t)}function Ys(t,i){return wl(t,null,null,i),Cl(t)}function Jp(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-we(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Cl(t){if(50<Lo)throw Lo=0,kf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var js={};function Qx(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,s,l){return new Qx(t,i,s,l)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,i){var s=t.alternate;return s===null?(s=Qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function $p(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Dl(t,i,s,l,f,m){var M=0;if(l=t,typeof t=="function")Bu(t)&&(M=1);else if(typeof t=="string")M=$y(t,s,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Qn(31,s,i,f),t.elementType=D,t.lanes=m,t;case E:return ds(s.children,f,m,i);case T:M=8,f|=24;break;case S:return t=Qn(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case F:return t=Qn(13,s,i,f),t.elementType=F,t.lanes=m,t;case H:return t=Qn(19,s,i,f),t.elementType=H,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case N:M=10;break e;case O:M=9;break e;case C:M=11;break e;case B:M=14;break e;case X:M=16,l=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Qn(M,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function ds(t,i,s,l){return t=Qn(7,t,l,i),t.lanes=s,t}function Fu(t,i,s){return t=Qn(6,t,null,i),t.lanes=s,t}function zu(t,i,s){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ks=[],Zs=0,Ul=null,Ll=0,li=[],ci=0,ps=null,ji=1,Ki="";function ms(t,i){Ks[Zs++]=Ll,Ks[Zs++]=Ul,Ul=t,Ll=i}function em(t,i,s){li[ci++]=ji,li[ci++]=Ki,li[ci++]=ps,ps=t;var l=ji;t=Ki;var f=32-we(l)-1;l&=~(1<<f),s+=1;var m=32-we(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ji=1<<32-we(i)+f|s<<f|l,Ki=m+t}else ji=1<<m|s<<f|l,Ki=t}function Hu(t){t.return!==null&&(ms(t,1),em(t,1,0))}function Gu(t){for(;t===Ul;)Ul=Ks[--Zs],Ks[Zs]=null,Ll=Ks[--Zs],Ks[Zs]=null;for(;t===ps;)ps=li[--ci],li[ci]=null,Ki=li[--ci],li[ci]=null,ji=li[--ci],li[ci]=null}var On=null,$t=null,Ct=!1,gs=null,wi=!1,Vu=Error(a(519));function _s(t){var i=Error(a(418,""));throw co(ri(i,t)),Vu}function tm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[cn]=t,i[En]=l,s){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(s=0;s<Oo.length;s++)mt(Oo[s],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":mt("invalid",i),Vt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Jt(i);break;case"select":mt("invalid",i);break;case"textarea":mt("invalid",i),Tn(i,l.value,l.defaultValue,l.children),Jt(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||v_(i.textContent,s)?(l.popover!=null&&(mt("beforetoggle",i),mt("toggle",i)),l.onScroll!=null&&mt("scroll",i),l.onScrollEnd!=null&&mt("scrollend",i),l.onClick!=null&&(i.onclick=hc),i=!0):i=!1,i||_s(t)}function nm(t){for(On=t.return;On;)switch(On.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:On=On.return}}function oo(t){if(t!==On)return!1;if(!Ct)return nm(t),Ct=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||sh(t.type,t.memoizedProps)),s=!s),s&&$t&&_s(t),nm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){$t=vi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}$t=null}}else i===27?(i=$t,Ha(t.type)?(t=ch,ch=null,$t=t):$t=i):$t=On?vi(t.stateNode.nextSibling):null;return!0}function lo(){$t=On=null,Ct=!1}function im(){var t=gs;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),gs=null),t}function co(t){gs===null?gs=[t]:gs.push(t)}var ku=ee(null),vs=null,Zi=null;function ba(t,i,s){Se(ku,i._currentValue),i._currentValue=s}function Qi(t){t._currentValue=ku.current,xe(ku)}function Xu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Wu(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;e:for(;m!==null;){var b=m;m=f;for(var P=0;P<i.length;P++)if(b.context===i[P]){m.lanes|=s,b=m.alternate,b!==null&&(b.lanes|=s),Xu(m.return,s,t),l||(M=null);break e}m=b.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),Xu(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function uo(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var b=f.type;Zn(f.pendingProps.value,M.value)||(t!==null?t.push(b):t=[b])}}else if(f===Ae.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}f=f.return}t!==null&&Wu(i,t,s,l),i.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xs(t){vs=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return am(vs,t)}function Ol(t,i){return vs===null&&xs(t),am(t,i)}function am(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Zi===null){if(t===null)throw Error(a(308));Zi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Zi=Zi.next=i;return s}var Jx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},$x=o.unstable_scheduleCallback,ey=o.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new Jx,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&$x(ey,function(){t.controller.abort()})}var ho=null,Yu=0,Qs=0,Js=null;function ty(t,i){if(ho===null){var s=ho=[];Yu=0,Qs=Zf(),Js={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Yu++,i.then(sm,sm),i}function sm(){if(--Yu===0&&ho!==null){Js!==null&&(Js.status="fulfilled");var t=ho;ho=null,Qs=0,Js=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ny(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var rm=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&ty(t,i),rm!==null&&rm(t,i)};var ys=ee(null);function ju(){var t=ys.current;return t!==null?t:Yt.pooledCache}function Pl(t,i){i===null?Se(ys,ys.current):Se(ys,i.pool)}function om(){var t=ju();return t===null?null:{parent:fn._currentValue,pool:t}}var po=Error(a(460)),lm=Error(a(474)),Il=Error(a(542)),Ku={then:function(){}};function cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bl(){}function um(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Bl,Bl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,hm(t),t;default:if(typeof i.status=="string")i.then(Bl,Bl);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,hm(t),t}throw mo=i,po}}var mo=null;function fm(){if(mo===null)throw Error(a(459));var t=mo;return mo=null,t}function hm(t){if(t===po||t===Il)throw Error(a(483))}var Aa=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ut&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Cl(t),Jp(t,null,s),i}return wl(t,l,i,s),Cl(t)}function go(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,nt(t,s)}}function Ju(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var $u=!1;function _o(){if($u){var t=Js;if(t!==null)throw t}}function vo(t,i,s,l){$u=!1;var f=t.updateQueue;Aa=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var P=b,$=P.next;P.next=null,M===null?m=$:M.next=$,M=P;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,b=ce.lastBaseUpdate,b!==M&&(b===null?ce.firstBaseUpdate=$:b.next=$,ce.lastBaseUpdate=P))}if(m!==null){var ge=f.baseState;M=0,ce=$=P=null,b=m;do{var ne=b.lane&-536870913,ie=ne!==b.lane;if(ie?(Mt&ne)===ne:(l&ne)===ne){ne!==0&&ne===Qs&&($u=!0),ce!==null&&(ce=ce.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var $e=t,je=b;ne=i;var zt=s;switch(je.tag){case 1:if($e=je.payload,typeof $e=="function"){ge=$e.call(zt,ge,ne);break e}ge=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=je.payload,ne=typeof $e=="function"?$e.call(zt,ge,ne):$e,ne==null)break e;ge=g({},ge,ne);break e;case 2:Aa=!0}}ne=b.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=f.callbacks,ie===null?f.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ce===null?($=ce=ie,P=ge):ce=ce.next=ie,M|=ne;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;ie=b,b=ie.next,ie.next=null,f.lastBaseUpdate=ie,f.shared.pending=null}}while(!0);ce===null&&(P=ge),f.baseState=P,f.firstBaseUpdate=$,f.lastBaseUpdate=ce,m===null&&(f.shared.lanes=0),Ia|=M,t.lanes=M,t.memoizedState=ge}}function dm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function pm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)dm(s[t],i)}var $s=ee(null),Fl=ee(0);function mm(t,i){t=aa,Se(Fl,t),Se($s,i),aa=t|i.baseLanes}function ef(){Se(Fl,aa),Se($s,$s.current)}function tf(){aa=Fl.current,xe($s),xe(Fl)}var Ca=0,ut=null,Bt=null,rn=null,zl=!1,er=!1,Ss=!1,Hl=0,xo=0,tr=null,iy=0;function tn(){throw Error(a(321))}function nf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Zn(t[s],i[s]))return!1;return!0}function af(t,i,s,l,f,m){return Ca=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?Jm:$m,Ss=!1,m=s(l,f),Ss=!1,er&&(m=_m(i,s,l,f)),gm(t),m}function gm(t){I.H=ql;var i=Bt!==null&&Bt.next!==null;if(Ca=0,rn=Bt=ut=null,zl=!1,xo=0,tr=null,i)throw Error(a(300));t===null||_n||(t=t.dependencies,t!==null&&Nl(t)&&(_n=!0))}function _m(t,i,s,l){ut=t;var f=0;do{if(er&&(tr=null),xo=0,er=!1,25<=f)throw Error(a(301));if(f+=1,rn=Bt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=uy,m=i(s,l)}while(er);return m}function ay(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?yo(i):i,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(ut.flags|=1024),i}function sf(){var t=Hl!==0;return Hl=0,t}function rf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function of(t){if(zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}zl=!1}Ca=0,rn=Bt=ut=null,er=!1,xo=Hl=0,tr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?ut.memoizedState=rn=t:rn=rn.next=t,rn}function on(){if(Bt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var i=rn===null?ut.memoizedState:rn.next;if(i!==null)rn=i,Bt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},rn===null?ut.memoizedState=rn=t:rn=rn.next=t}return rn}function lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var i=xo;return xo+=1,tr===null&&(tr=[]),t=um(tr,t,i),i=ut,(rn===null?i.memoizedState:rn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Jm:$m),t}function Gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===N)return Dn(t)}throw Error(a(438,String(t)))}function cf(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=lf(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function Ji(t,i){return typeof i=="function"?i(t):i}function Vl(t){var i=on();return uf(i,Bt,t)}function uf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var b=M=null,P=null,$=i,ce=!1;do{var ge=$.lane&-536870913;if(ge!==$.lane?(Mt&ge)===ge:(Ca&ge)===ge){var ne=$.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ge===Qs&&(ce=!0);else if((Ca&ne)===ne){$=$.next,ne===Qs&&(ce=!0);continue}else ge={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=ge,M=m):P=P.next=ge,ut.lanes|=ne,Ia|=ne;ge=$.action,Ss&&s(m,ge),m=$.hasEagerState?$.eagerState:s(m,ge)}else ne={lane:ge,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=ne,M=m):P=P.next=ne,ut.lanes|=ge,Ia|=ge;$=$.next}while($!==null&&$!==i);if(P===null?M=m:P.next=b,!Zn(m,t.memoizedState)&&(_n=!0,ce&&(s=Js,s!==null)))throw s;t.memoizedState=m,t.baseState=M,t.baseQueue=P,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ff(t){var i=on(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);Zn(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function vm(t,i,s){var l=ut,f=on(),m=Ct;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!Zn((Bt||f).memoizedState,s);M&&(f.memoizedState=s,_n=!0),f=f.queue;var b=Sm.bind(null,l,f,t);if(So(2048,8,b,[t]),f.getSnapshot!==i||M||rn!==null&&rn.memoizedState.tag&1){if(l.flags|=2048,nr(9,kl(),ym.bind(null,l,f,s,i),null),Yt===null)throw Error(a(349));m||(Ca&124)!==0||xm(l,i,s)}return s}function xm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=lf(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function ym(t,i,s,l){i.value=s,i.getSnapshot=l,Mm(i)&&Em(t)}function Sm(t,i,s){return s(function(){Mm(i)&&Em(t)})}function Mm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Zn(t,s)}catch{return!0}}function Em(t){var i=Ys(t,2);i!==null&&ni(i,t,2)}function hf(t){var i=Xn();if(typeof t=="function"){var s=t;if(t=s(),Ss){Re(!0);try{s()}finally{Re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},i}function Tm(t,i,s,l){return t.baseState=s,uf(t,Bt,typeof l=="function"?l:Ji)}function sy(t,i,s,l,f){if(Wl(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,bm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function bm(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=I.T,M={};I.T=M;try{var b=s(f,l),P=I.S;P!==null&&P(M,b),Am(t,i,b)}catch($){df(t,i,$)}finally{I.T=m}}else try{m=s(f,l),Am(t,i,m)}catch($){df(t,i,$)}}function Am(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Rm(t,i,l)},function(l){return df(t,i,l)}):Rm(t,i,s)}function Rm(t,i,s){i.status="fulfilled",i.value=s,wm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,bm(t,s)))}function df(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,wm(i),i=i.next;while(i!==l)}t.action=null}function wm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Cm(t,i){return i}function Dm(t,i){if(Ct){var s=Yt.formState;if(s!==null){e:{var l=ut;if(Ct){if($t){t:{for(var f=$t,m=wi;f.nodeType!==8;){if(!m){f=null;break t}if(f=vi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){$t=vi(f.nextSibling),l=f.data==="F!";break e}}_s(l)}l=!1}l&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:i},s.queue=l,s=Km.bind(null,ut,l),l.dispatch=s,l=hf(!1),m=vf.bind(null,ut,!1,l.queue),l=Xn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=sy.bind(null,ut,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Um(t){var i=on();return Lm(i,Bt,t)}function Lm(t,i,s){if(i=uf(t,i,Cm)[0],t=Vl(Ji)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=yo(i)}catch(M){throw M===po?Il:M}else l=i;i=on();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,nr(9,kl(),ry.bind(null,f,s),null)),[l,m,t]}function ry(t,i){t.action=i}function Nm(t){var i=on(),s=Bt;if(s!==null)return Lm(i,s,t);on(),i=i.memoizedState,s=on();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function nr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=lf(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function kl(){return{destroy:void 0,resource:void 0}}function Om(){return on().memoizedState}function Xl(t,i,s,l){var f=Xn();l=l===void 0?null:l,ut.flags|=t,f.memoizedState=nr(1|i,kl(),s,l)}function So(t,i,s,l){var f=on();l=l===void 0?null:l;var m=f.memoizedState.inst;Bt!==null&&l!==null&&nf(l,Bt.memoizedState.deps)?f.memoizedState=nr(i,m,s,l):(ut.flags|=t,f.memoizedState=nr(1|i,m,s,l))}function Pm(t,i){Xl(8390656,8,t,i)}function Im(t,i){So(2048,8,t,i)}function Bm(t,i){return So(4,2,t,i)}function Fm(t,i){return So(4,4,t,i)}function zm(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Hm(t,i,s){s=s!=null?s.concat([t]):null,So(4,4,zm.bind(null,i,t),s)}function pf(){}function Gm(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&nf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Vm(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&nf(i,l[1]))return l[0];if(l=t(),Ss){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,i],l}function mf(t,i,s){return s===void 0||(Ca&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=Wg(),ut.lanes|=t,Ia|=t,s)}function km(t,i,s,l){return Zn(s,i)?s:$s.current!==null?(t=mf(t,s,l),Zn(t,i)||(_n=!0),t):(Ca&42)===0?(_n=!0,t.memoizedState=s):(t=Wg(),ut.lanes|=t,Ia|=t,i)}function Xm(t,i,s,l,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var M=I.T,b={};I.T=b,vf(t,!1,i,s);try{var P=f(),$=I.S;if($!==null&&$(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ce=ny(P,l);Mo(t,i,ce,ti(t))}else Mo(t,i,l,ti(t))}catch(ge){Mo(t,i,{then:function(){},status:"rejected",reason:ge},ti())}finally{Z.p=m,I.T=M}}function oy(){}function gf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Wm(t).queue;Xm(t,f,i,Y,s===null?oy:function(){return qm(t),s(l)})}function Wm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function qm(t){var i=Wm(t).next.queue;Mo(t,i,{},ti())}function _f(){return Dn(Ho)}function Ym(){return on().memoizedState}function jm(){return on().memoizedState}function ly(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();t=Ra(s);var l=wa(i,t,s);l!==null&&(ni(l,i,s),go(l,i,s)),i={cache:qu()},t.payload=i;return}i=i.return}}function cy(t,i,s){var l=ti();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Wl(t)?Zm(i,s):(s=Iu(t,i,s,l),s!==null&&(ni(s,t,l),Qm(s,i,l)))}function Km(t,i,s){var l=ti();Mo(t,i,s,l)}function Mo(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))Zm(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,b=m(M,s);if(f.hasEagerState=!0,f.eagerState=b,Zn(b,M))return wl(t,i,f,0),Yt===null&&Rl(),!1}catch{}finally{}if(s=Iu(t,i,f,l),s!==null)return ni(s,t,l),Qm(s,i,l),!0}return!1}function vf(t,i,s,l){if(l={lane:2,revertLane:Zf(),action:l,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(i)throw Error(a(479))}else i=Iu(t,s,l,2),i!==null&&ni(i,t,2)}function Wl(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function Zm(t,i){er=zl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Qm(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,nt(t,s)}}var ql={readContext:Dn,use:Gl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Jm={readContext:Dn,use:Gl,useCallback:function(t,i){return Xn().memoizedState=[t,i===void 0?null:i],t},useContext:Dn,useEffect:Pm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Xl(4194308,4,zm.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Xl(4194308,4,t,i)},useInsertionEffect:function(t,i){Xl(4,2,t,i)},useMemo:function(t,i){var s=Xn();i=i===void 0?null:i;var l=t();if(Ss){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Xn();if(s!==void 0){var f=s(i);if(Ss){Re(!0);try{s(i)}finally{Re(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=cy.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=Xn();return t={current:t},i.memoizedState=t},useState:function(t){t=hf(t);var i=t.queue,s=Km.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:pf,useDeferredValue:function(t,i){var s=Xn();return mf(s,t,i)},useTransition:function(){var t=hf(!1);return t=Xm.bind(null,ut,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,f=Xn();if(Ct){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Yt===null)throw Error(a(349));(Mt&124)!==0||xm(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Pm(Sm.bind(null,l,m,t),[t]),l.flags|=2048,nr(9,kl(),ym.bind(null,l,m,s,i),null),s},useId:function(){var t=Xn(),i=Yt.identifierPrefix;if(Ct){var s=Ki,l=ji;s=(l&~(1<<32-we(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Hl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=iy++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:_f,useFormState:Dm,useActionState:Dm,useOptimistic:function(t){var i=Xn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=vf.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:cf,useCacheRefresh:function(){return Xn().memoizedState=ly.bind(null,ut)}},$m={readContext:Dn,use:Gl,useCallback:Gm,useContext:Dn,useEffect:Im,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Fm,useMemo:Vm,useReducer:Vl,useRef:Om,useState:function(){return Vl(Ji)},useDebugValue:pf,useDeferredValue:function(t,i){var s=on();return km(s,Bt.memoizedState,t,i)},useTransition:function(){var t=Vl(Ji)[0],i=on().memoizedState;return[typeof t=="boolean"?t:yo(t),i]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:_f,useFormState:Um,useActionState:Um,useOptimistic:function(t,i){var s=on();return Tm(s,Bt,t,i)},useMemoCache:cf,useCacheRefresh:jm},uy={readContext:Dn,use:Gl,useCallback:Gm,useContext:Dn,useEffect:Im,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Fm,useMemo:Vm,useReducer:ff,useRef:Om,useState:function(){return ff(Ji)},useDebugValue:pf,useDeferredValue:function(t,i){var s=on();return Bt===null?mf(s,t,i):km(s,Bt.memoizedState,t,i)},useTransition:function(){var t=ff(Ji)[0],i=on().memoizedState;return[typeof t=="boolean"?t:yo(t),i]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:_f,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,i){var s=on();return Bt!==null?Tm(s,Bt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:cf,useCacheRefresh:jm},ir=null,Eo=0;function Yl(t){var i=Eo;return Eo+=1,ir===null&&(ir=[]),um(ir,t,i)}function To(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function jl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function eg(t){var i=t._init;return i(t._payload)}function tg(t){function i(W,G){if(t){var Q=W.deletions;Q===null?(W.deletions=[G],W.flags|=16):Q.push(G)}}function s(W,G){if(!t)return null;for(;G!==null;)i(W,G),G=G.sibling;return null}function l(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function f(W,G){return W=Yi(W,G),W.index=0,W.sibling=null,W}function m(W,G,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<G?(W.flags|=67108866,G):Q):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function M(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function b(W,G,Q,he){return G===null||G.tag!==6?(G=Fu(Q,W.mode,he),G.return=W,G):(G=f(G,Q),G.return=W,G)}function P(W,G,Q,he){var He=Q.type;return He===E?ce(W,G,Q.props.children,he,Q.key):G!==null&&(G.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&eg(He)===G.type)?(G=f(G,Q.props),To(G,Q),G.return=W,G):(G=Dl(Q.type,Q.key,Q.props,null,W.mode,he),To(G,Q),G.return=W,G)}function $(W,G,Q,he){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=zu(Q,W.mode,he),G.return=W,G):(G=f(G,Q.children||[]),G.return=W,G)}function ce(W,G,Q,he,He){return G===null||G.tag!==7?(G=ds(Q,W.mode,he,He),G.return=W,G):(G=f(G,Q),G.return=W,G)}function ge(W,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Fu(""+G,W.mode,Q),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return Q=Dl(G.type,G.key,G.props,null,W.mode,Q),To(Q,G),Q.return=W,Q;case y:return G=zu(G,W.mode,Q),G.return=W,G;case X:var he=G._init;return G=he(G._payload),ge(W,G,Q)}if(de(G)||le(G))return G=ds(G,W.mode,Q,null),G.return=W,G;if(typeof G.then=="function")return ge(W,Yl(G),Q);if(G.$$typeof===N)return ge(W,Ol(W,G),Q);jl(W,G)}return null}function ne(W,G,Q,he){var He=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:b(W,G,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===He?P(W,G,Q,he):null;case y:return Q.key===He?$(W,G,Q,he):null;case X:return He=Q._init,Q=He(Q._payload),ne(W,G,Q,he)}if(de(Q)||le(Q))return He!==null?null:ce(W,G,Q,he,null);if(typeof Q.then=="function")return ne(W,G,Yl(Q),he);if(Q.$$typeof===N)return ne(W,G,Ol(W,Q),he);jl(W,Q)}return null}function ie(W,G,Q,he,He){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return W=W.get(Q)||null,b(G,W,""+he,He);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case v:return W=W.get(he.key===null?Q:he.key)||null,P(G,W,he,He);case y:return W=W.get(he.key===null?Q:he.key)||null,$(G,W,he,He);case X:var ht=he._init;return he=ht(he._payload),ie(W,G,Q,he,He)}if(de(he)||le(he))return W=W.get(Q)||null,ce(G,W,he,He,null);if(typeof he.then=="function")return ie(W,G,Q,Yl(he),He);if(he.$$typeof===N)return ie(W,G,Q,Ol(G,he),He);jl(G,he)}return null}function $e(W,G,Q,he){for(var He=null,ht=null,Ve=G,Qe=G=0,xn=null;Ve!==null&&Qe<Q.length;Qe++){Ve.index>Qe?(xn=Ve,Ve=null):xn=Ve.sibling;var wt=ne(W,Ve,Q[Qe],he);if(wt===null){Ve===null&&(Ve=xn);break}t&&Ve&&wt.alternate===null&&i(W,Ve),G=m(wt,G,Qe),ht===null?He=wt:ht.sibling=wt,ht=wt,Ve=xn}if(Qe===Q.length)return s(W,Ve),Ct&&ms(W,Qe),He;if(Ve===null){for(;Qe<Q.length;Qe++)Ve=ge(W,Q[Qe],he),Ve!==null&&(G=m(Ve,G,Qe),ht===null?He=Ve:ht.sibling=Ve,ht=Ve);return Ct&&ms(W,Qe),He}for(Ve=l(Ve);Qe<Q.length;Qe++)xn=ie(Ve,W,Qe,Q[Qe],he),xn!==null&&(t&&xn.alternate!==null&&Ve.delete(xn.key===null?Qe:xn.key),G=m(xn,G,Qe),ht===null?He=xn:ht.sibling=xn,ht=xn);return t&&Ve.forEach(function(Wa){return i(W,Wa)}),Ct&&ms(W,Qe),He}function je(W,G,Q,he){if(Q==null)throw Error(a(151));for(var He=null,ht=null,Ve=G,Qe=G=0,xn=null,wt=Q.next();Ve!==null&&!wt.done;Qe++,wt=Q.next()){Ve.index>Qe?(xn=Ve,Ve=null):xn=Ve.sibling;var Wa=ne(W,Ve,wt.value,he);if(Wa===null){Ve===null&&(Ve=xn);break}t&&Ve&&Wa.alternate===null&&i(W,Ve),G=m(Wa,G,Qe),ht===null?He=Wa:ht.sibling=Wa,ht=Wa,Ve=xn}if(wt.done)return s(W,Ve),Ct&&ms(W,Qe),He;if(Ve===null){for(;!wt.done;Qe++,wt=Q.next())wt=ge(W,wt.value,he),wt!==null&&(G=m(wt,G,Qe),ht===null?He=wt:ht.sibling=wt,ht=wt);return Ct&&ms(W,Qe),He}for(Ve=l(Ve);!wt.done;Qe++,wt=Q.next())wt=ie(Ve,W,Qe,wt.value,he),wt!==null&&(t&&wt.alternate!==null&&Ve.delete(wt.key===null?Qe:wt.key),G=m(wt,G,Qe),ht===null?He=wt:ht.sibling=wt,ht=wt);return t&&Ve.forEach(function(fS){return i(W,fS)}),Ct&&ms(W,Qe),He}function zt(W,G,Q,he){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var He=Q.key;G!==null;){if(G.key===He){if(He=Q.type,He===E){if(G.tag===7){s(W,G.sibling),he=f(G,Q.props.children),he.return=W,W=he;break e}}else if(G.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&eg(He)===G.type){s(W,G.sibling),he=f(G,Q.props),To(he,Q),he.return=W,W=he;break e}s(W,G);break}else i(W,G);G=G.sibling}Q.type===E?(he=ds(Q.props.children,W.mode,he,Q.key),he.return=W,W=he):(he=Dl(Q.type,Q.key,Q.props,null,W.mode,he),To(he,Q),he.return=W,W=he)}return M(W);case y:e:{for(He=Q.key;G!==null;){if(G.key===He)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){s(W,G.sibling),he=f(G,Q.children||[]),he.return=W,W=he;break e}else{s(W,G);break}else i(W,G);G=G.sibling}he=zu(Q,W.mode,he),he.return=W,W=he}return M(W);case X:return He=Q._init,Q=He(Q._payload),zt(W,G,Q,he)}if(de(Q))return $e(W,G,Q,he);if(le(Q)){if(He=le(Q),typeof He!="function")throw Error(a(150));return Q=He.call(Q),je(W,G,Q,he)}if(typeof Q.then=="function")return zt(W,G,Yl(Q),he);if(Q.$$typeof===N)return zt(W,G,Ol(W,Q),he);jl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(s(W,G.sibling),he=f(G,Q),he.return=W,W=he):(s(W,G),he=Fu(Q,W.mode,he),he.return=W,W=he),M(W)):s(W,G)}return function(W,G,Q,he){try{Eo=0;var He=zt(W,G,Q,he);return ir=null,He}catch(Ve){if(Ve===po||Ve===Il)throw Ve;var ht=Qn(29,Ve,null,W.mode);return ht.lanes=he,ht.return=W,ht}finally{}}}var ar=tg(!0),ng=tg(!1),ui=ee(null),Ci=null;function Da(t){var i=t.alternate;Se(hn,hn.current&1),Se(ui,t),Ci===null&&(i===null||$s.current!==null||i.memoizedState!==null)&&(Ci=t)}function ig(t){if(t.tag===22){if(Se(hn,hn.current),Se(ui,t),Ci===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ci=t)}}else Ua()}function Ua(){Se(hn,hn.current),Se(ui,ui.current)}function $i(t){xe(ui),Ci===t&&(Ci=null),xe(hn)}var hn=ee(0);function Kl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||lh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function xf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var yf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ti(),f=Ra(l);f.payload=i,s!=null&&(f.callback=s),i=wa(t,f,l),i!==null&&(ni(i,t,l),go(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ti(),f=Ra(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=wa(t,f,l),i!==null&&(ni(i,t,l),go(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ti(),l=Ra(s);l.tag=2,i!=null&&(l.callback=i),i=wa(t,l,s),i!==null&&(ni(i,t,s),go(i,t,s))}};function ag(t,i,s,l,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!so(s,l)||!so(f,m):!0}function sg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&yf.enqueueReplaceState(i,i.state,null)}function Ms(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function rg(t){Zl(t)}function og(t){console.error(t)}function lg(t){Zl(t)}function Ql(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Sf(t,i,s){return s=Ra(s),s.tag=3,s.payload={element:null},s.callback=function(){Ql(t,i)},s}function ug(t){return t=Ra(t),t.tag=3,t}function fg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){cg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){cg(i,s,l),typeof f!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function fy(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&uo(i,s,f,!0),s=ui.current,s!==null){switch(s.tag){case 13:return Ci===null?Wf():s.alternate===null&&en===0&&(en=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Ku?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Yf(t,l,f)),!1;case 22:return s.flags|=65536,l===Ku?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Yf(t,l,f)),!1}throw Error(a(435,s.tag))}return Yf(t,l,f),Wf(),!1}if(Ct)return i=ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Vu&&(t=Error(a(422),{cause:l}),co(ri(t,s)))):(l!==Vu&&(i=Error(a(423),{cause:l}),co(ri(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=ri(l,s),f=Sf(t.stateNode,l,f),Ju(t,f),en!==4&&(en=2)),!1;var m=Error(a(520),{cause:l});if(m=ri(m,s),Uo===null?Uo=[m]:Uo.push(m),en!==4&&(en=2),i===null)return!0;l=ri(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Sf(s.stateNode,l,t),Ju(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ba===null||!Ba.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=ug(f),fg(f,t,s,l),Ju(s,f),!1}s=s.return}while(s!==null);return!1}var hg=Error(a(461)),_n=!1;function bn(t,i,s,l){i.child=t===null?ng(i,null,s,l):ar(i,t.child,s,l)}function dg(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var M={};for(var b in l)b!=="ref"&&(M[b]=l[b])}else M=l;return xs(i),l=af(t,i,s,M,m,f),b=sf(),t!==null&&!_n?(rf(t,i,f),ea(t,i,f)):(Ct&&b&&Hu(i),i.flags|=1,bn(t,i,l,f),i.child)}function pg(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Bu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,mg(t,i,m,l,f)):(t=Dl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Cf(t,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:so,s(M,l)&&t.ref===i.ref)return ea(t,i,f)}return i.flags|=1,t=Yi(m,l),t.ref=i.ref,t.return=i,i.child=t}function mg(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(so(m,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=m,Cf(t,f))(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,ea(t,i,f)}return Mf(t,i,s,l,f)}function gg(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return _g(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(i,m!==null?m.cachePool:null),m!==null?mm(i,m):ef(),ig(i);else return i.lanes=i.childLanes=536870912,_g(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Pl(i,m.cachePool),mm(i,m),Ua(),i.memoizedState=null):(t!==null&&Pl(i,null),ef(),Ua());return bn(t,i,f,s),i.child}function _g(t,i,s,l){var f=ju();return f=f===null?null:{parent:fn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Pl(i,null),ef(),ig(i),t!==null&&uo(t,i,l,!0),null}function Jl(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Mf(t,i,s,l,f){return xs(i),s=af(t,i,s,l,void 0,f),l=sf(),t!==null&&!_n?(rf(t,i,f),ea(t,i,f)):(Ct&&l&&Hu(i),i.flags|=1,bn(t,i,s,f),i.child)}function vg(t,i,s,l,f,m){return xs(i),i.updateQueue=null,s=_m(i,l,s,f),gm(t),l=sf(),t!==null&&!_n?(rf(t,i,m),ea(t,i,m)):(Ct&&l&&Hu(i),i.flags|=1,bn(t,i,s,m),i.child)}function xg(t,i,s,l,f){if(xs(i),i.stateNode===null){var m=js,M=s.contextType;typeof M=="object"&&M!==null&&(m=Dn(M)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Zu(i),M=s.contextType,m.context=typeof M=="object"&&M!==null?Dn(M):js,m.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(xf(i,s,M,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&yf.enqueueReplaceState(m,m.state,null),vo(i,l,m,f),_o(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var b=i.memoizedProps,P=Ms(s,b);m.props=P;var $=m.context,ce=s.contextType;M=js,typeof ce=="object"&&ce!==null&&(M=Dn(ce));var ge=s.getDerivedStateFromProps;ce=typeof ge=="function"||typeof m.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,ce||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b||$!==M)&&sg(i,m,l,M),Aa=!1;var ne=i.memoizedState;m.state=ne,vo(i,l,m,f),_o(),$=i.memoizedState,b||ne!==$||Aa?(typeof ge=="function"&&(xf(i,s,ge,l),$=i.memoizedState),(P=Aa||ag(i,s,P,l,ne,$,M))?(ce||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=$),m.props=l,m.state=$,m.context=M,l=P):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Qu(t,i),M=i.memoizedProps,ce=Ms(s,M),m.props=ce,ge=i.pendingProps,ne=m.context,$=s.contextType,P=js,typeof $=="object"&&$!==null&&(P=Dn($)),b=s.getDerivedStateFromProps,($=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==ge||ne!==P)&&sg(i,m,l,P),Aa=!1,ne=i.memoizedState,m.state=ne,vo(i,l,m,f),_o();var ie=i.memoizedState;M!==ge||ne!==ie||Aa||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof b=="function"&&(xf(i,s,b,l),ie=i.memoizedState),(ce=Aa||ag(i,s,ce,l,ne,ie,P)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ie,P),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ie,P)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ie),m.props=l,m.state=ie,m.context=P,l=ce):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Jl(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=ar(i,t.child,null,f),i.child=ar(i,null,s,f)):bn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ea(t,i,f),t}function yg(t,i,s,l){return lo(),i.flags|=256,bn(t,i,s,l),i.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:om()}}function bf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=fi),t}function Sg(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ct){if(f?Da(i):Ua(),Ct){var b=$t,P;if(P=b){e:{for(P=b,b=wi;P.nodeType!==8;){if(!b){b=null;break e}if(P=vi(P.nextSibling),P===null){b=null;break e}}b=P}b!==null?(i.memoizedState={dehydrated:b,treeContext:ps!==null?{id:ji,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},P=Qn(18,null,null,0),P.stateNode=b,P.return=i,i.child=P,On=i,$t=null,P=!0):P=!1}P||_s(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return lh(b)?i.lanes=32:i.lanes=536870912,null;$i(i)}return b=l.children,l=l.fallback,f?(Ua(),f=i.mode,b=$l({mode:"hidden",children:b},f),l=ds(l,f,s,null),b.return=i,l.return=i,b.sibling=l,i.child=b,f=i.child,f.memoizedState=Tf(s),f.childLanes=bf(t,M,s),i.memoizedState=Ef,l):(Da(i),Af(i,b))}if(P=t.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(m)i.flags&256?(Da(i),i.flags&=-257,i=Rf(t,i,s)):i.memoizedState!==null?(Ua(),i.child=t.child,i.flags|=128,i=null):(Ua(),f=l.fallback,b=i.mode,l=$l({mode:"visible",children:l.children},b),f=ds(f,b,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,ar(i,t.child,null,s),l=i.child,l.memoizedState=Tf(s),l.childLanes=bf(t,M,s),i.memoizedState=Ef,i=f);else if(Da(i),lh(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var $=M.dgst;M=$,l=Error(a(419)),l.stack="",l.digest=M,co({value:l,source:null,stack:null}),i=Rf(t,i,s)}else if(_n||uo(t,i,s,!1),M=(s&t.childLanes)!==0,_n||M){if(M=Yt,M!==null&&(l=s&-s,l=(l&42)!==0?1:Wt(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==P.retryLane))throw P.retryLane=l,Ys(t,l),ni(M,t,l),hg;b.data==="$?"||Wf(),i=Rf(t,i,s)}else b.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=P.treeContext,$t=vi(b.nextSibling),On=i,Ct=!0,gs=null,wi=!1,t!==null&&(li[ci++]=ji,li[ci++]=Ki,li[ci++]=ps,ji=t.id,Ki=t.overflow,ps=i),i=Af(i,l.children),i.flags|=4096);return i}return f?(Ua(),f=l.fallback,b=i.mode,P=t.child,$=P.sibling,l=Yi(P,{mode:"hidden",children:l.children}),l.subtreeFlags=P.subtreeFlags&65011712,$!==null?f=Yi($,f):(f=ds(f,b,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,b=t.child.memoizedState,b===null?b=Tf(s):(P=b.cachePool,P!==null?($=fn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=om(),b={baseLanes:b.baseLanes|s,cachePool:P}),f.memoizedState=b,f.childLanes=bf(t,M,s),i.memoizedState=Ef,l):(Da(i),s=t.child,t=s.sibling,s=Yi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Af(t,i){return i=$l({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function $l(t,i){return t=Qn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Rf(t,i,s){return ar(i,t.child,null,s),t=Af(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Mg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Xu(t.return,i,s)}function wf(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Eg(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(bn(t,i,l.children,s),l=hn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,s,i);else if(t.tag===19)Mg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Se(hn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Kl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),wf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Kl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}wf(i,!0,s,null,m);break;case"together":wf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ea(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ia|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(uo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Yi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Yi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Cf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function hy(t,i,s){switch(i.tag){case 3:Oe(i,i.stateNode.containerInfo),ba(i,fn,t.memoizedState.cache),lo();break;case 27:case 5:Ke(i);break;case 4:Oe(i,i.stateNode.containerInfo);break;case 10:ba(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Da(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Sg(t,i,s):(Da(i),t=ea(t,i,s),t!==null?t.sibling:null);Da(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(uo(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Eg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(hn,hn.current),l)break;return null;case 22:case 23:return i.lanes=0,gg(t,i,s);case 24:ba(i,fn,t.memoizedState.cache)}return ea(t,i,s)}function Tg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)_n=!0;else{if(!Cf(t,s)&&(i.flags&128)===0)return _n=!1,hy(t,i,s);_n=(t.flags&131072)!==0}else _n=!1,Ct&&(i.flags&1048576)!==0&&em(i,Ll,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Bu(l)?(t=Ms(l,t),i.tag=1,i=xg(null,i,l,t,s)):(i.tag=0,i=Mf(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===C){i.tag=11,i=dg(null,i,l,t,s);break e}else if(f===B){i.tag=14,i=pg(null,i,l,t,s);break e}}throw i=_e(l)||l,Error(a(306,i,""))}}return i;case 0:return Mf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ms(l,i.pendingProps),xg(t,i,l,f,s);case 3:e:{if(Oe(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Qu(t,i),vo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,ba(i,fn,l),l!==m.cache&&Wu(i,[fn],s,!0),_o(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=yg(t,i,l,s);break e}else if(l!==f){f=ri(Error(a(424)),i),co(f),i=yg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=vi(t.firstChild),On=i,Ct=!0,gs=null,wi=!0,s=ng(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(lo(),l===f){i=ea(t,i,s);break e}bn(t,i,l,s)}i=i.child}return i;case 26:return Jl(t,i),t===null?(s=w_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ct||(s=i.type,t=i.pendingProps,l=dc(ye.current).createElement(s),l[cn]=i,l[En]=t,Rn(l,s,t),sn(l),i.stateNode=l):i.memoizedState=w_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ke(i),t===null&&Ct&&(l=i.stateNode=b_(i.type,i.pendingProps,ye.current),On=i,wi=!0,f=$t,Ha(i.type)?(ch=f,$t=vi(l.firstChild)):$t=f),bn(t,i,i.pendingProps.children,s),Jl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ct&&((f=l=$t)&&(l=Hy(l,i.type,i.pendingProps,wi),l!==null?(i.stateNode=l,On=i,$t=vi(l.firstChild),wi=!1,f=!0):f=!1),f||_s(i)),Ke(i),f=i.type,m=i.pendingProps,M=t!==null?t.memoizedProps:null,l=m.children,sh(f,m)?l=null:M!==null&&sh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=af(t,i,ay,null,null,s),Ho._currentValue=f),Jl(t,i),bn(t,i,l,s),i.child;case 6:return t===null&&Ct&&((t=s=$t)&&(s=Gy(s,i.pendingProps,wi),s!==null?(i.stateNode=s,On=i,$t=null,t=!0):t=!1),t||_s(i)),null;case 13:return Sg(t,i,s);case 4:return Oe(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ar(i,null,l,s):bn(t,i,l,s),i.child;case 11:return dg(t,i,i.type,i.pendingProps,s);case 7:return bn(t,i,i.pendingProps,s),i.child;case 8:return bn(t,i,i.pendingProps.children,s),i.child;case 12:return bn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ba(i,i.type,l.value),bn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,xs(i),f=Dn(f),l=l(f),i.flags|=1,bn(t,i,l,s),i.child;case 14:return pg(t,i,i.type,i.pendingProps,s);case 15:return mg(t,i,i.type,i.pendingProps,s);case 19:return Eg(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=$l(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Yi(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return gg(t,i,s);case 24:return xs(i),l=Dn(fn),t===null?(f=ju(),f===null&&(f=Yt,m=qu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Zu(i),ba(i,fn,f)):((t.lanes&s)!==0&&(Qu(t,i),vo(i,null,null,s),_o()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ba(i,fn,l)):(l=m.cache,ba(i,fn,l),l!==f.cache&&Wu(i,[fn],s,!0))),bn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ta(t){t.flags|=4}function bg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!N_(i)){if(i=ui.current,i!==null&&((Mt&4194048)===Mt?Ci!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||i!==Ci))throw mo=Ku,lm;t.flags|=8192}}function ec(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Le():536870912,t.lanes|=i,lr|=i)}function bo(t,i){if(!Ct)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Zt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function dy(t,i,s){var l=i.pendingProps;switch(Gu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(i),null;case 1:return Zt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Qi(fn),ot(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(oo(i)?ta(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,im())),Zt(i),null;case 26:return s=i.memoizedState,t===null?(ta(i),s!==null?(Zt(i),bg(i,s)):(Zt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ta(i),Zt(i),bg(i,s)):(Zt(i),i.flags&=-16777217):(t.memoizedProps!==l&&ta(i),Zt(i),i.flags&=-16777217),null;case 27:Xt(i),s=ye.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ta(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Zt(i),null}t=J.current,oo(i)?tm(i):(t=b_(f,l,s),i.stateNode=t,ta(i))}return Zt(i),null;case 5:if(Xt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ta(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Zt(i),null}if(t=J.current,oo(i))tm(i);else{switch(f=dc(ye.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[cn]=i,t[En]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(Rn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ta(i)}}return Zt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ta(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ye.current,oo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[cn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||v_(t.nodeValue,s)),t||_s(i)}else t=dc(t).createTextNode(l),t[cn]=i,i.stateNode=t}return Zt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=oo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[cn]=i}else lo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zt(i),f=!1}else f=im(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?($i(i),i):($i(i),null)}if($i(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),ec(i,i.updateQueue),Zt(i),null;case 4:return ot(),t===null&&eh(i.stateNode.containerInfo),Zt(i),null;case 10:return Qi(i.type),Zt(i),null;case 19:if(xe(hn),f=i.memoizedState,f===null)return Zt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)bo(f,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Kl(t),m!==null){for(i.flags|=128,bo(f,!1),t=m.updateQueue,i.updateQueue=t,ec(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)$p(s,t),s=s.sibling;return Se(hn,hn.current&1|2),i.child}t=t.sibling}f.tail!==null&&tt()>ic&&(i.flags|=128,l=!0,bo(f,!1),i.lanes=4194304)}else{if(!l)if(t=Kl(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,ec(i,t),bo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ct)return Zt(i),null}else 2*tt()-f.renderingStartTime>ic&&s!==536870912&&(i.flags|=128,l=!0,bo(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=tt(),i.sibling=null,t=hn.current,Se(hn,l?t&1|2:t&1),i):(Zt(i),null);case 22:case 23:return $i(i),tf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Zt(i),i.subtreeFlags&6&&(i.flags|=8192)):Zt(i),s=i.updateQueue,s!==null&&ec(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&xe(ys),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Qi(fn),Zt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function py(t,i){switch(Gu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Qi(fn),ot(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Xt(i),null;case 13:if($i(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));lo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return xe(hn),null;case 4:return ot(),null;case 10:return Qi(i.type),null;case 22:case 23:return $i(i),tf(),t!==null&&xe(ys),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Qi(fn),null;case 25:return null;default:return null}}function Ag(t,i){switch(Gu(i),i.tag){case 3:Qi(fn),ot();break;case 26:case 27:case 5:Xt(i);break;case 4:ot();break;case 13:$i(i);break;case 19:xe(hn);break;case 10:Qi(i.type);break;case 22:case 23:$i(i),tf(),t!==null&&xe(ys);break;case 24:Qi(fn)}}function Ao(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(b){kt(i,i.return,b)}}function La(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var M=l.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,f=i;var P=s,$=b;try{$()}catch(ce){kt(f,P,ce)}}}l=l.next}while(l!==m)}}catch(ce){kt(i,i.return,ce)}}function Rg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{pm(i,s)}catch(l){kt(t,t.return,l)}}}function wg(t,i,s){s.props=Ms(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){kt(t,i,l)}}function Ro(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){kt(t,i,f)}}function Di(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){kt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){kt(t,i,f)}else s.current=null}function Cg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){kt(t,t.return,f)}}function Df(t,i,s){try{var l=t.stateNode;Py(l,t.type,s,i),l[En]=i}catch(f){kt(t,t.return,f)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=hc));else if(l!==4&&(l===27&&Ha(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Lf(t,i,s),t=t.sibling;t!==null;)Lf(t,i,s),t=t.sibling}function tc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ha(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(tc(t,i,s),t=t.sibling;t!==null;)tc(t,i,s),t=t.sibling}function Ug(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Rn(i,l,s),i[cn]=t,i[En]=s}catch(m){kt(t,t.return,m)}}var na=!1,nn=!1,Nf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function my(t,i){if(t=t.containerInfo,ih=xc,t=kp(t),Du(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var M=0,b=-1,P=-1,$=0,ce=0,ge=t,ne=null;t:for(;;){for(var ie;ge!==s||f!==0&&ge.nodeType!==3||(b=M+f),ge!==m||l!==0&&ge.nodeType!==3||(P=M+l),ge.nodeType===3&&(M+=ge.nodeValue.length),(ie=ge.firstChild)!==null;)ne=ge,ge=ie;for(;;){if(ge===t)break t;if(ne===s&&++$===f&&(b=M),ne===m&&++ce===l&&(P=M),(ie=ge.nextSibling)!==null)break;ge=ne,ne=ge.parentNode}ge=ie}s=b===-1||P===-1?null:{start:b,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(ah={focusedElem:t,selectionRange:s},xc=!1,vn=i;vn!==null;)if(i=vn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,vn=t;else for(;vn!==null;){switch(i=vn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var $e=Ms(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate($e,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(je){kt(s,s.return,je)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)oh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":oh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,vn=t;break}vn=i.return}}function Ng(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Na(t,s),l&4&&Ao(5,s);break;case 1:if(Na(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){kt(s,s.return,M)}else{var f=Ms(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){kt(s,s.return,M)}}l&64&&Rg(s),l&512&&Ro(s,s.return);break;case 3:if(Na(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{pm(t,i)}catch(M){kt(s,s.return,M)}}break;case 27:i===null&&l&4&&Ug(s);case 26:case 5:Na(t,s),i===null&&l&4&&Cg(s),l&512&&Ro(s,s.return);break;case 12:Na(t,s);break;case 13:Na(t,s),l&4&&Ig(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Ty.bind(null,s),Vy(t,s))));break;case 22:if(l=s.memoizedState!==null||na,!l){i=i!==null&&i.memoizedState!==null||nn,f=na;var m=nn;na=l,(nn=i)&&!m?Oa(t,s,(s.subtreeFlags&8772)!==0):Na(t,s),na=f,nn=m}break;case 30:break;default:Na(t,s)}}function Og(t){var i=t.alternate;i!==null&&(t.alternate=null,Og(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Sa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Wn=!1;function ia(t,i,s){for(s=s.child;s!==null;)Pg(t,i,s),s=s.sibling}function Pg(t,i,s){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:nn||Di(s,i),ia(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:nn||Di(s,i);var l=jt,f=Wn;Ha(s.type)&&(jt=s.stateNode,Wn=!1),ia(t,i,s),Io(s.stateNode),jt=l,Wn=f;break;case 5:nn||Di(s,i);case 6:if(l=jt,f=Wn,jt=null,ia(t,i,s),jt=l,Wn=f,jt!==null)if(Wn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(s.stateNode)}catch(m){kt(s,i,m)}else try{jt.removeChild(s.stateNode)}catch(m){kt(s,i,m)}break;case 18:jt!==null&&(Wn?(t=jt,E_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xo(t)):E_(jt,s.stateNode));break;case 4:l=jt,f=Wn,jt=s.stateNode.containerInfo,Wn=!0,ia(t,i,s),jt=l,Wn=f;break;case 0:case 11:case 14:case 15:nn||La(2,s,i),nn||La(4,s,i),ia(t,i,s);break;case 1:nn||(Di(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&wg(s,i,l)),ia(t,i,s);break;case 21:ia(t,i,s);break;case 22:nn=(l=nn)||s.memoizedState!==null,ia(t,i,s),nn=l;break;default:ia(t,i,s)}}function Ig(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xo(t)}catch(s){kt(i,i.return,s)}}function gy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Lg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Lg),i;default:throw Error(a(435,t.tag))}}function Of(t,i){var s=gy(t);i.forEach(function(l){var f=by.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,M=i,b=M;e:for(;b!==null;){switch(b.tag){case 27:if(Ha(b.type)){jt=b.stateNode,Wn=!1;break e}break;case 5:jt=b.stateNode,Wn=!1;break e;case 3:case 4:jt=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(jt===null)throw Error(a(160));Pg(m,M,f),jt=null,Wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Bg(i,t),i=i.sibling}var _i=null;function Bg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(i,t),$n(t),l&4&&(La(3,t,t.return),Ao(3,t),La(5,t,t.return));break;case 1:Jn(i,t),$n(t),l&512&&(nn||s===null||Di(s,s.return)),l&64&&na&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=_i;if(Jn(i,t),$n(t),l&512&&(nn||s===null||Di(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ya]||m[cn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Rn(m,l,s),m[cn]=t,sn(m),l=m;break e;case"link":var M=U_("link","href",f).get(l+(s.href||""));if(M){for(var b=0;b<M.length;b++)if(m=M[b],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(b,1);break t}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=U_("meta","content",f).get(l+(s.content||""))){for(b=0;b<M.length;b++)if(m=M[b],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(b,1);break t}}m=f.createElement(l),Rn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[cn]=t,sn(m),l=m}t.stateNode=l}else L_(f,t.type,t.stateNode);else t.stateNode=D_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?L_(f,t.type,t.stateNode):D_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Df(t,t.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,t),$n(t),l&512&&(nn||s===null||Di(s,s.return)),s!==null&&l&4&&Df(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,t),$n(t),l&512&&(nn||s===null||Di(s,s.return)),t.flags&32){f=t.stateNode;try{Ri(f,"")}catch(ie){kt(t,t.return,ie)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Df(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Nf=!0);break;case 6:if(Jn(i,t),$n(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ie){kt(t,t.return,ie)}}break;case 3:if(gc=null,f=_i,_i=pc(i.containerInfo),Jn(i,t),_i=f,$n(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xo(i.containerInfo)}catch(ie){kt(t,t.return,ie)}Nf&&(Nf=!1,Fg(t));break;case 4:l=_i,_i=pc(t.stateNode.containerInfo),Jn(i,t),$n(t),_i=l;break;case 12:Jn(i,t),$n(t);break;case 13:Jn(i,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Hf=tt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Of(t,l)));break;case 22:f=t.memoizedState!==null;var P=s!==null&&s.memoizedState!==null,$=na,ce=nn;if(na=$||f,nn=ce||P,Jn(i,t),nn=ce,na=$,$n(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||P||na||nn||Es(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){P=s=i;try{if(m=P.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=P.stateNode;var ge=P.memoizedProps.style,ne=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;b.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){kt(P,P.return,ie)}}}else if(i.tag===6){if(s===null){P=i;try{P.stateNode.nodeValue=f?"":P.memoizedProps}catch(ie){kt(P,P.return,ie)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Of(t,s))));break;case 19:Jn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Of(t,l)));break;case 30:break;case 21:break;default:Jn(i,t),$n(t)}}function $n(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Dg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Uf(t);tc(t,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Ri(M,""),s.flags&=-33);var b=Uf(t);tc(t,b,M);break;case 3:case 4:var P=s.stateNode.containerInfo,$=Uf(t);Lf(t,$,P);break;default:throw Error(a(161))}}catch(ce){kt(t,t.return,ce)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Fg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Na(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ng(t,i.alternate,i),i=i.sibling}function Es(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:La(4,i,i.return),Es(i);break;case 1:Di(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&wg(i,i.return,s),Es(i);break;case 27:Io(i.stateNode);case 26:case 5:Di(i,i.return),Es(i);break;case 22:i.memoizedState===null&&Es(i);break;case 30:Es(i);break;default:Es(i)}t=t.sibling}}function Oa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Oa(f,m,s),Ao(4,m);break;case 1:if(Oa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){kt(l,l.return,$)}if(l=m,f=l.updateQueue,f!==null){var b=l.stateNode;try{var P=f.shared.hiddenCallbacks;if(P!==null)for(f.shared.hiddenCallbacks=null,f=0;f<P.length;f++)dm(P[f],b)}catch($){kt(l,l.return,$)}}s&&M&64&&Rg(m),Ro(m,m.return);break;case 27:Ug(m);case 26:case 5:Oa(f,m,s),s&&l===null&&M&4&&Cg(m),Ro(m,m.return);break;case 12:Oa(f,m,s);break;case 13:Oa(f,m,s),s&&M&4&&Ig(f,m);break;case 22:m.memoizedState===null&&Oa(f,m,s),Ro(m,m.return);break;case 30:break;default:Oa(f,m,s)}i=i.sibling}}function Pf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&fo(s))}function If(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t))}function Ui(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)zg(t,i,s,l),i=i.sibling}function zg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ui(t,i,s,l),f&2048&&Ao(9,i);break;case 1:Ui(t,i,s,l);break;case 3:Ui(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t)));break;case 12:if(f&2048){Ui(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,M=m.id,b=m.onPostCommit;typeof b=="function"&&b(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){kt(i,i.return,P)}}else Ui(t,i,s,l);break;case 13:Ui(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Ui(t,i,s,l):wo(t,i):m._visibility&2?Ui(t,i,s,l):(m._visibility|=2,sr(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&Pf(M,i);break;case 24:Ui(t,i,s,l),f&2048&&If(i.alternate,i);break;default:Ui(t,i,s,l)}}function sr(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,M=i,b=s,P=l,$=M.flags;switch(M.tag){case 0:case 11:case 15:sr(m,M,b,P,f),Ao(8,M);break;case 23:break;case 22:var ce=M.stateNode;M.memoizedState!==null?ce._visibility&2?sr(m,M,b,P,f):wo(m,M):(ce._visibility|=2,sr(m,M,b,P,f)),f&&$&2048&&Pf(M.alternate,M);break;case 24:sr(m,M,b,P,f),f&&$&2048&&If(M.alternate,M);break;default:sr(m,M,b,P,f)}i=i.sibling}}function wo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:wo(s,l),f&2048&&Pf(l.alternate,l);break;case 24:wo(s,l),f&2048&&If(l.alternate,l);break;default:wo(s,l)}i=i.sibling}}var Co=8192;function rr(t){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)Hg(t),t=t.sibling}function Hg(t){switch(t.tag){case 26:rr(t),t.flags&Co&&t.memoizedState!==null&&tS(_i,t.memoizedState,t.memoizedProps);break;case 5:rr(t);break;case 3:case 4:var i=_i;_i=pc(t.stateNode.containerInfo),rr(t),_i=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Co,Co=16777216,rr(t),Co=i):rr(t));break;default:rr(t)}}function Gg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Do(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,kg(l,t)}Gg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vg(t),t=t.sibling}function Vg(t){switch(t.tag){case 0:case 11:case 15:Do(t),t.flags&2048&&La(9,t,t.return);break;case 3:Do(t);break;case 12:Do(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,nc(t)):Do(t);break;default:Do(t)}}function nc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,kg(l,t)}Gg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:La(8,i,i.return),nc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,nc(i));break;default:nc(i)}t=t.sibling}}function kg(t,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:La(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,vn=l;else e:for(s=t;vn!==null;){l=vn;var f=l.sibling,m=l.return;if(Og(l),l===s){vn=null;break e}if(f!==null){f.return=m,vn=f;break e}vn=m}}}var _y={getCacheForType:function(t){var i=Dn(fn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},vy=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Yt=null,pt=null,Mt=0,Lt=0,ei=null,Pa=!1,or=!1,Bf=!1,aa=0,en=0,Ia=0,Ts=0,Ff=0,fi=0,lr=0,Uo=null,qn=null,zf=!1,Hf=0,ic=1/0,ac=null,Ba=null,An=0,Fa=null,cr=null,ur=0,Gf=0,Vf=null,Xg=null,Lo=0,kf=null;function ti(){if((Ut&2)!==0&&Mt!==0)return Mt&-Mt;if(I.T!==null){var t=Qs;return t!==0?t:Zf()}return At()}function Wg(){fi===0&&(fi=(Mt&536870912)===0||Ct?k():536870912);var t=ui.current;return t!==null&&(t.flags|=32),fi}function ni(t,i,s){(t===Yt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(fr(t,0),za(t,Mt,fi,!1)),me(t,s),((Ut&2)===0||t!==Yt)&&(t===Yt&&((Ut&2)===0&&(Ts|=s),en===4&&za(t,Mt,fi,!1)),Li(t))}function qg(t,i,s){if((Ut&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||et(t,i),f=l?Sy(t,i):qf(t,i,!0),m=l;do{if(f===0){or&&!l&&za(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!xy(s)){f=qf(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var b=t;f=Uo;var P=b.current.memoizedState.isDehydrated;if(P&&(fr(b,M).flags|=256),M=qf(b,M,!1),M!==2){if(Bf&&!P){b.errorRecoveryDisabledLanes|=m,Ts|=m,f=4;break e}m=qn,qn=f,m!==null&&(qn===null?qn=m:qn.push.apply(qn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){fr(t,0),za(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:za(l,i,fi,!Pa);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Hf+300-tt(),10<f)){if(za(l,i,fi,!Pa),ct(l,0,!0)!==0)break e;l.timeoutHandle=S_(Yg.bind(null,l,s,qn,ac,zf,i,fi,Ts,lr,Pa,m,2,-0,0),f);break e}Yg(l,s,qn,ac,zf,i,fi,Ts,lr,Pa,m,0,-0,0)}}break}while(!0);Li(t)}function Yg(t,i,s,l,f,m,M,b,P,$,ce,ge,ne,ie){if(t.timeoutHandle=-1,ge=i.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(zo={stylesheets:null,count:0,unsuspend:eS},Hg(i),ge=nS(),ge!==null)){t.cancelPendingCommit=ge(e_.bind(null,t,i,m,s,l,f,M,b,P,ce,1,ne,ie)),za(t,m,M,!$);return}e_(t,i,m,s,l,f,M,b,P)}function xy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Zn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function za(t,i,s,l){i&=~Ff,i&=~Ts,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-we(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&Ne(t,s,i)}function sc(){return(Ut&6)===0?(No(0),!1):!0}function Xf(){if(pt!==null){if(Lt===0)var t=pt.return;else t=pt,Zi=vs=null,of(t),ir=null,Eo=0,t=pt;for(;t!==null;)Ag(t.alternate,t),t=t.return;pt=null}}function fr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,By(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Xf(),Yt=t,pt=s=Yi(t.current,null),Mt=i,Lt=0,ei=null,Pa=!1,or=et(t,i),Bf=!1,lr=fi=Ff=Ts=Ia=en=0,qn=Uo=null,zf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-we(l),m=1<<f;i|=t[f],l&=~m}return aa=i,Rl(),s}function jg(t,i){ut=null,I.H=ql,i===po||i===Il?(i=fm(),Lt=3):i===lm?(i=fm(),Lt=4):Lt=i===hg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,pt===null&&(en=1,Ql(t,ri(i,t.current)))}function Kg(){var t=I.H;return I.H=ql,t===null?ql:t}function Zg(){var t=I.A;return I.A=_y,t}function Wf(){en=4,Pa||(Mt&4194048)!==Mt&&ui.current!==null||(or=!0),(Ia&134217727)===0&&(Ts&134217727)===0||Yt===null||za(Yt,Mt,fi,!1)}function qf(t,i,s){var l=Ut;Ut|=2;var f=Kg(),m=Zg();(Yt!==t||Mt!==i)&&(ac=null,fr(t,i)),i=!1;var M=en;e:do try{if(Lt!==0&&pt!==null){var b=pt,P=ei;switch(Lt){case 8:Xf(),M=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(i=!0);var $=Lt;if(Lt=0,ei=null,hr(t,b,P,$),s&&or){M=0;break e}break;default:$=Lt,Lt=0,ei=null,hr(t,b,P,$)}}yy(),M=en;break}catch(ce){jg(t,ce)}while(!0);return i&&t.shellSuspendCounter++,Zi=vs=null,Ut=l,I.H=f,I.A=m,pt===null&&(Yt=null,Mt=0,Rl()),M}function yy(){for(;pt!==null;)Qg(pt)}function Sy(t,i){var s=Ut;Ut|=2;var l=Kg(),f=Zg();Yt!==t||Mt!==i?(ac=null,ic=tt()+500,fr(t,i)):or=et(t,i);e:do try{if(Lt!==0&&pt!==null){i=pt;var m=ei;t:switch(Lt){case 1:Lt=0,ei=null,hr(t,i,m,1);break;case 2:case 9:if(cm(m)){Lt=0,ei=null,Jg(i);break}i=function(){Lt!==2&&Lt!==9||Yt!==t||(Lt=7),Li(t)},m.then(i,i);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:cm(m)?(Lt=0,ei=null,Jg(i)):(Lt=0,ei=null,hr(t,i,m,7));break;case 5:var M=null;switch(pt.tag){case 26:M=pt.memoizedState;case 5:case 27:var b=pt;if(!M||N_(M)){Lt=0,ei=null;var P=b.sibling;if(P!==null)pt=P;else{var $=b.return;$!==null?(pt=$,rc($)):pt=null}break t}}Lt=0,ei=null,hr(t,i,m,5);break;case 6:Lt=0,ei=null,hr(t,i,m,6);break;case 8:Xf(),en=6;break e;default:throw Error(a(462))}}My();break}catch(ce){jg(t,ce)}while(!0);return Zi=vs=null,I.H=l,I.A=f,Ut=s,pt!==null?0:(Yt=null,Mt=0,Rl(),en)}function My(){for(;pt!==null&&!Gn();)Qg(pt)}function Qg(t){var i=Tg(t.alternate,t,aa);t.memoizedProps=t.pendingProps,i===null?rc(t):pt=i}function Jg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=vg(s,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=vg(s,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:of(i);default:Ag(s,i),i=pt=$p(i,aa),i=Tg(s,i,aa)}t.memoizedProps=t.pendingProps,i===null?rc(t):pt=i}function hr(t,i,s,l){Zi=vs=null,of(i),ir=null,Eo=0;var f=i.return;try{if(fy(t,f,i,s,Mt)){en=1,Ql(t,ri(s,t.current)),pt=null;return}}catch(m){if(f!==null)throw pt=f,m;en=1,Ql(t,ri(s,t.current)),pt=null;return}i.flags&32768?(Ct||l===1?t=!0:or||(Mt&536870912)!==0?t=!1:(Pa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),$g(i,t)):rc(i)}function rc(t){var i=t;do{if((i.flags&32768)!==0){$g(i,Pa);return}t=i.return;var s=dy(i.alternate,i,aa);if(s!==null){pt=s;return}if(i=i.sibling,i!==null){pt=i;return}pt=i=t}while(i!==null);en===0&&(en=5)}function $g(t,i){do{var s=py(t.alternate,t);if(s!==null){s.flags&=32767,pt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){pt=t;return}pt=t=s}while(t!==null);en=6,pt=null}function e_(t,i,s,l,f,m,M,b,P){t.cancelPendingCommit=null;do oc();while(An!==0);if((Ut&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Pu,Ie(t,s,m,M,b,P),t===Yt&&(pt=Yt=null,Mt=0),cr=i,Fa=t,ur=s,Gf=m,Vf=f,Xg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ay(L,function(){return s_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=Z.p,Z.p=2,M=Ut,Ut|=4;try{my(t,i,s)}finally{Ut=M,Z.p=f,I.T=l}}An=1,t_(),n_(),i_()}}function t_(){if(An===1){An=0;var t=Fa,i=cr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=Z.p;Z.p=2;var f=Ut;Ut|=4;try{Bg(i,t);var m=ah,M=kp(t.containerInfo),b=m.focusedElem,P=m.selectionRange;if(M!==b&&b&&b.ownerDocument&&Vp(b.ownerDocument.documentElement,b)){if(P!==null&&Du(b)){var $=P.start,ce=P.end;if(ce===void 0&&(ce=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ce,b.value.length);else{var ge=b.ownerDocument||document,ne=ge&&ge.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),$e=b.textContent.length,je=Math.min(P.start,$e),zt=P.end===void 0?je:Math.min(P.end,$e);!ie.extend&&je>zt&&(M=zt,zt=je,je=M);var W=Gp(b,je),G=Gp(b,zt);if(W&&G&&(ie.rangeCount!==1||ie.anchorNode!==W.node||ie.anchorOffset!==W.offset||ie.focusNode!==G.node||ie.focusOffset!==G.offset)){var Q=ge.createRange();Q.setStart(W.node,W.offset),ie.removeAllRanges(),je>zt?(ie.addRange(Q),ie.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ie.addRange(Q))}}}}for(ge=[],ie=b;ie=ie.parentNode;)ie.nodeType===1&&ge.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ge.length;b++){var he=ge[b];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}xc=!!ih,ah=ih=null}finally{Ut=f,Z.p=l,I.T=s}}t.current=i,An=2}}function n_(){if(An===2){An=0;var t=Fa,i=cr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=Z.p;Z.p=2;var f=Ut;Ut|=4;try{Ng(t,i.alternate,i)}finally{Ut=f,Z.p=l,I.T=s}}An=3}}function i_(){if(An===4||An===3){An=0,vt();var t=Fa,i=cr,s=ur,l=Xg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,cr=Fa=null,a_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ba=null),an(s),i=i.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(ue,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=Z.p,Z.p=2,I.T=null;try{for(var m=t.onRecoverableError,M=0;M<l.length;M++){var b=l[M];m(b.value,{componentStack:b.stack})}}finally{I.T=i,Z.p=f}}(ur&3)!==0&&oc(),Li(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===kf?Lo++:(Lo=0,kf=t):Lo=0,No(0)}}function a_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,fo(i)))}function oc(t){return t_(),n_(),i_(),s_()}function s_(){if(An!==5)return!1;var t=Fa,i=Gf;Gf=0;var s=an(ur),l=I.T,f=Z.p;try{Z.p=32>s?32:s,I.T=null,s=Vf,Vf=null;var m=Fa,M=ur;if(An=0,cr=Fa=null,ur=0,(Ut&6)!==0)throw Error(a(331));var b=Ut;if(Ut|=4,Vg(m.current),zg(m,m.current,M,s),Ut=b,No(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(ue,m)}catch{}return!0}finally{Z.p=f,I.T=l,a_(t,i)}}function r_(t,i,s){i=ri(s,i),i=Sf(t.stateNode,i,2),t=wa(t,i,2),t!==null&&(me(t,2),Li(t))}function kt(t,i,s){if(t.tag===3)r_(t,t,s);else for(;i!==null;){if(i.tag===3){r_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ba===null||!Ba.has(l))){t=ri(s,t),s=ug(2),l=wa(i,s,2),l!==null&&(fg(s,l,i,t),me(l,2),Li(l));break}}i=i.return}}function Yf(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new vy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Bf=!0,f.add(s),t=Ey.bind(null,t,i,s),i.then(t,t))}function Ey(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(Mt&s)===s&&(en===4||en===3&&(Mt&62914560)===Mt&&300>tt()-Hf?(Ut&2)===0&&fr(t,0):Ff|=s,lr===Mt&&(lr=0)),Li(t)}function o_(t,i){i===0&&(i=Le()),t=Ys(t,i),t!==null&&(me(t,i),Li(t))}function Ty(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),o_(t,s)}function by(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),o_(t,s)}function Ay(t,i){return ft(t,i)}var lc=null,dr=null,jf=!1,cc=!1,Kf=!1,bs=0;function Li(t){t!==dr&&t.next===null&&(dr===null?lc=dr=t:dr=dr.next=t),cc=!0,jf||(jf=!0,wy())}function No(t,i){if(!Kf&&cc){Kf=!0;do for(var s=!1,l=lc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,b=l.pingedLanes;m=(1<<31-we(42|t)+1)-1,m&=f&~(M&~b),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,f_(l,m))}else m=Mt,m=ct(l,l===Yt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||et(l,m)||(s=!0,f_(l,m));l=l.next}while(s);Kf=!1}}function Ry(){l_()}function l_(){cc=jf=!1;var t=0;bs!==0&&(Iy()&&(t=bs),bs=0);for(var i=tt(),s=null,l=lc;l!==null;){var f=l.next,m=c_(l,i);m===0?(l.next=null,s===null?lc=f:s.next=f,f===null&&(dr=s)):(s=l,(t!==0||(m&3)!==0)&&(cc=!0)),l=f}No(t)}function c_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-we(m),b=1<<M,P=f[M];P===-1?((b&s)===0||(b&l)!==0)&&(f[M]=It(b,i)):P<=i&&(t.expiredLanes|=b),m&=~b}if(i=Yt,s=Mt,s=ct(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&z(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||et(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&z(l),an(s)){case 2:case 8:s=Ge;break;case 32:s=L;break;case 268435456:s=te;break;default:s=L}return l=u_.bind(null,t),s=ft(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&z(l),t.callbackPriority=2,t.callbackNode=null,2}function u_(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(oc()&&t.callbackNode!==s)return null;var l=Mt;return l=ct(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(qg(t,l,i),c_(t,tt()),t.callbackNode!=null&&t.callbackNode===s?u_.bind(null,t):null)}function f_(t,i){if(oc())return null;qg(t,i,!0)}function wy(){Fy(function(){(Ut&6)!==0?ft(Pt,Ry):l_()})}function Zf(){return bs===0&&(bs=k()),bs}function h_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yl(""+t)}function d_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Cy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=h_((f[En]||null).action),M=l.submitter;M&&(i=(i=M[En]||null)?h_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var b=new Tl("action","action",null,l,f);t.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(bs!==0){var P=M?d_(f,M):new FormData(f);gf(s,{pending:!0,data:P,method:f.method,action:m},null,P)}}else typeof m=="function"&&(b.preventDefault(),P=M?d_(f,M):new FormData(f),gf(s,{pending:!0,data:P,method:f.method,action:m},m,P))},currentTarget:f}]})}}for(var Qf=0;Qf<Ou.length;Qf++){var Jf=Ou[Qf],Dy=Jf.toLowerCase(),Uy=Jf[0].toUpperCase()+Jf.slice(1);gi(Dy,"on"+Uy)}gi(qp,"onAnimationEnd"),gi(Yp,"onAnimationIteration"),gi(jp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(jx,"onTransitionRun"),gi(Kx,"onTransitionStart"),gi(Zx,"onTransitionCancel"),gi(Kp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function p_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],P=b.instance,$=b.currentTarget;if(b=b.listener,P!==m&&f.isPropagationStopped())break e;m=b,f.currentTarget=$;try{m(f)}catch(ce){Zl(ce)}f.currentTarget=null,m=P}else for(M=0;M<l.length;M++){if(b=l[M],P=b.instance,$=b.currentTarget,b=b.listener,P!==m&&f.isPropagationStopped())break e;m=b,f.currentTarget=$;try{m(f)}catch(ce){Zl(ce)}f.currentTarget=null,m=P}}}}function mt(t,i){var s=i[os];s===void 0&&(s=i[os]=new Set);var l=t+"__bubble";s.has(l)||(m_(i,t,2,!1),s.add(l))}function $f(t,i,s){var l=0;i&&(l|=4),m_(s,t,l,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function eh(t){if(!t[uc]){t[uc]=!0,vl.forEach(function(s){s!=="selectionchange"&&(Ly.has(s)||$f(s,!1,t),$f(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uc]||(i[uc]=!0,$f("selectionchange",!1,i))}}function m_(t,i,s,l){switch(z_(i)){case 2:var f=sS;break;case 8:f=rS;break;default:f=ph}s=f.bind(null,i,s,t),f=void 0,!Su||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function th(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===f)break;if(M===4)for(M=l.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;b!==null;){if(M=Gi(b),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){l=m=M;continue e}b=b.parentNode}}l=l.return}Mp(function(){var $=m,ce=xu(s),ge=[];e:{var ne=Zp.get(t);if(ne!==void 0){var ie=Tl,$e=t;switch(t){case"keypress":if(Ml(s)===0)break e;case"keydown":case"keyup":ie=Ax;break;case"focusin":$e="focus",ie=bu;break;case"focusout":$e="blur",ie=bu;break;case"beforeblur":case"afterblur":ie=bu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Cx;break;case qp:case Yp:case jp:ie=_x;break;case Kp:ie=Ux;break;case"scroll":case"scrollend":ie=hx;break;case"wheel":ie=Nx;break;case"copy":case"cut":case"paste":ie=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Rp;break;case"toggle":case"beforetoggle":ie=Px}var je=(i&4)!==0,zt=!je&&(t==="scroll"||t==="scrollend"),W=je?ne!==null?ne+"Capture":null:ne;je=[];for(var G=$,Q;G!==null;){var he=G;if(Q=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Q===null||W===null||(he=Jr(G,W),he!=null&&je.push(Po(G,he,Q))),zt)break;G=G.return}0<je.length&&(ne=new ie(ne,$e,null,s,ce),ge.push({event:ne,listeners:je}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&s!==vu&&($e=s.relatedTarget||s.fromElement)&&(Gi($e)||$e[Vn]))break e;if((ie||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?($e=s.relatedTarget||s.toElement,ie=$,$e=$e?Gi($e):null,$e!==null&&(zt=c($e),je=$e.tag,$e!==zt||je!==5&&je!==27&&je!==6)&&($e=null)):(ie=null,$e=$),ie!==$e)){if(je=bp,he="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(je=Rp,he="onPointerLeave",W="onPointerEnter",G="pointer"),zt=ie==null?ne:cs(ie),Q=$e==null?ne:cs($e),ne=new je(he,G+"leave",ie,s,ce),ne.target=zt,ne.relatedTarget=Q,he=null,Gi(ce)===$&&(je=new je(W,G+"enter",$e,s,ce),je.target=Q,je.relatedTarget=zt,he=je),zt=he,ie&&$e)t:{for(je=ie,W=$e,G=0,Q=je;Q;Q=pr(Q))G++;for(Q=0,he=W;he;he=pr(he))Q++;for(;0<G-Q;)je=pr(je),G--;for(;0<Q-G;)W=pr(W),Q--;for(;G--;){if(je===W||W!==null&&je===W.alternate)break t;je=pr(je),W=pr(W)}je=null}else je=null;ie!==null&&g_(ge,ne,ie,je,!1),$e!==null&&zt!==null&&g_(ge,zt,$e,je,!0)}}e:{if(ne=$?cs($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=Pp;else if(Np(ne))if(Ip)He=Wx;else{He=kx;var ht=Vx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&_u($.elementType)&&(He=Pp):He=Xx;if(He&&(He=He(t,$))){Op(ge,He,s,ce);break e}ht&&ht(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Cn(ne,"number",ne.value)}switch(ht=$?cs($):window,t){case"focusin":(Np(ht)||ht.contentEditable==="true")&&(Xs=ht,Uu=$,ro=null);break;case"focusout":ro=Uu=Xs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Xp(ge,s,ce);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Xp(ge,s,ce)}var Ve;if(Ru)e:{switch(t){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else ks?Up(t,s)&&(Qe="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Qe="onCompositionStart");Qe&&(wp&&s.locale!=="ko"&&(ks||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&ks&&(Ve=Ep()):(Ta=ce,Mu="value"in Ta?Ta.value:Ta.textContent,ks=!0)),ht=fc($,Qe),0<ht.length&&(Qe=new Ap(Qe,t,null,s,ce),ge.push({event:Qe,listeners:ht}),Ve?Qe.data=Ve:(Ve=Lp(s),Ve!==null&&(Qe.data=Ve)))),(Ve=Bx?Fx(t,s):zx(t,s))&&(Qe=fc($,"onBeforeInput"),0<Qe.length&&(ht=new Ap("onBeforeInput","beforeinput",null,s,ce),ge.push({event:ht,listeners:Qe}),ht.data=Ve)),Cy(ge,t,$,s,ce)}p_(ge,i)})}function Po(t,i,s){return{instance:t,listener:i,currentTarget:s}}function fc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Jr(t,s),f!=null&&l.unshift(Po(t,f,m)),f=Jr(t,i),f!=null&&l.push(Po(t,f,m))),t.tag===3)return l;t=t.return}return[]}function pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function g_(t,i,s,l,f){for(var m=i._reactName,M=[];s!==null&&s!==l;){var b=s,P=b.alternate,$=b.stateNode;if(b=b.tag,P!==null&&P===l)break;b!==5&&b!==26&&b!==27||$===null||(P=$,f?($=Jr(s,m),$!=null&&M.unshift(Po(s,$,P))):f||($=Jr(s,m),$!=null&&M.push(Po(s,$,P)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Ny=/\r\n?/g,Oy=/\u0000|\uFFFD/g;function __(t){return(typeof t=="string"?t:""+t).replace(Ny,`
`).replace(Oy,"")}function v_(t,i){return i=__(i),__(t)===i}function hc(){}function Ft(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ri(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ri(t,""+l);break;case"className":Ce(t,"class",l);break;case"tabIndex":Ce(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ce(t,s,l);break;case"style":yp(t,l,m);break;case"data":if(i!=="object"){Ce(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=yl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ft(t,i,"name",f.name,f,null),Ft(t,i,"formEncType",f.formEncType,f,null),Ft(t,i,"formMethod",f.formMethod,f,null),Ft(t,i,"formTarget",f.formTarget,f,null)):(Ft(t,i,"encType",f.encType,f,null),Ft(t,i,"method",f.method,f,null),Ft(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=yl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=hc);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=yl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Te(t,"popover",l);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Te(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ux.get(s)||s,Te(t,s,l))}}function nh(t,i,s,l,f,m){switch(s){case"style":yp(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Ri(t,l):(typeof l=="number"||typeof l=="bigint")&&Ri(t,""+l);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[En]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Te(t,s,l)}}}function Rn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ft(t,i,m,M,s,null)}}f&&Ft(t,i,"srcSet",s.srcSet,s,null),l&&Ft(t,i,"src",s.src,s,null);return;case"input":mt("invalid",t);var b=m=M=f=null,P=null,$=null;for(l in s)if(s.hasOwnProperty(l)){var ce=s[l];if(ce!=null)switch(l){case"name":f=ce;break;case"type":M=ce;break;case"checked":P=ce;break;case"defaultChecked":$=ce;break;case"value":m=ce;break;case"defaultValue":b=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:Ft(t,i,l,ce,s,null)}}Vt(t,m,b,P,$,M,f,!1),Jt(t);return;case"select":mt("invalid",t),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(b=s[f],b!=null))switch(f){case"value":m=b;break;case"defaultValue":M=b;break;case"multiple":l=b;default:Ft(t,i,f,b,s,null)}i=m,s=M,t.multiple=!!l,i!=null?un(t,!!l,i,!1):s!=null&&un(t,!!l,s,!0);return;case"textarea":mt("invalid",t),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(b=s[M],b!=null))switch(M){case"value":l=b;break;case"defaultValue":f=b;break;case"children":m=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Ft(t,i,M,b,s,null)}Tn(t,l,f,m),Jt(t);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(l=s[P],l!=null))switch(P){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ft(t,i,P,l,s,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(l=0;l<Oo.length;l++)mt(Oo[l],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(l=s[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ft(t,i,$,l,s,null)}return;default:if(_u(i)){for(ce in s)s.hasOwnProperty(ce)&&(l=s[ce],l!==void 0&&nh(t,i,ce,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&Ft(t,i,b,l,s,null))}function Py(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,b=null,P=null,$=null,ce=null;for(ie in s){var ge=s[ie];if(s.hasOwnProperty(ie)&&ge!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=ge;default:l.hasOwnProperty(ie)||Ft(t,i,ie,null,l,ge)}}for(var ne in l){var ie=l[ne];if(ge=s[ne],l.hasOwnProperty(ne)&&(ie!=null||ge!=null))switch(ne){case"type":m=ie;break;case"name":f=ie;break;case"checked":$=ie;break;case"defaultChecked":ce=ie;break;case"value":M=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:ie!==ge&&Ft(t,i,ne,ie,l,ge)}}Xi(t,M,b,P,$,ce,m,f);return;case"select":ie=M=b=ne=null;for(m in s)if(P=s[m],s.hasOwnProperty(m)&&P!=null)switch(m){case"value":break;case"multiple":ie=P;default:l.hasOwnProperty(m)||Ft(t,i,m,null,l,P)}for(f in l)if(m=l[f],P=s[f],l.hasOwnProperty(f)&&(m!=null||P!=null))switch(f){case"value":ne=m;break;case"defaultValue":b=m;break;case"multiple":M=m;default:m!==P&&Ft(t,i,f,m,l,P)}i=b,s=M,l=ie,ne!=null?un(t,!!s,ne,!1):!!l!=!!s&&(i!=null?un(t,!!s,i,!0):un(t,!!s,s?[]:"",!1));return;case"textarea":ie=ne=null;for(b in s)if(f=s[b],s.hasOwnProperty(b)&&f!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ft(t,i,b,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ne=f;break;case"defaultValue":ie=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Ft(t,i,M,f,l,m)}gn(t,ne,ie);return;case"option":for(var $e in s)if(ne=s[$e],s.hasOwnProperty($e)&&ne!=null&&!l.hasOwnProperty($e))switch($e){case"selected":t.selected=!1;break;default:Ft(t,i,$e,null,l,ne)}for(P in l)if(ne=l[P],ie=s[P],l.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Ft(t,i,P,ne,l,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in s)ne=s[je],s.hasOwnProperty(je)&&ne!=null&&!l.hasOwnProperty(je)&&Ft(t,i,je,null,l,ne);for($ in l)if(ne=l[$],ie=s[$],l.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,i));break;default:Ft(t,i,$,ne,l,ie)}return;default:if(_u(i)){for(var zt in s)ne=s[zt],s.hasOwnProperty(zt)&&ne!==void 0&&!l.hasOwnProperty(zt)&&nh(t,i,zt,void 0,l,ne);for(ce in l)ne=l[ce],ie=s[ce],!l.hasOwnProperty(ce)||ne===ie||ne===void 0&&ie===void 0||nh(t,i,ce,ne,l,ie);return}}for(var W in s)ne=s[W],s.hasOwnProperty(W)&&ne!=null&&!l.hasOwnProperty(W)&&Ft(t,i,W,null,l,ne);for(ge in l)ne=l[ge],ie=s[ge],!l.hasOwnProperty(ge)||ne===ie||ne==null&&ie==null||Ft(t,i,ge,ne,l,ie)}var ih=null,ah=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function x_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function sh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rh=null;function Iy(){var t=window.event;return t&&t.type==="popstate"?t===rh?!1:(rh=t,!0):(rh=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,By=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(t){return M_.resolve(null).then(t).catch(zy)}:S_;function zy(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function E_(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Io(M.documentElement),s&2&&Io(M.body),s&4)for(s=M.head,Io(s),M=s.firstChild;M;){var b=M.nextSibling,P=M.nodeName;M[ya]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=b}}if(f===0){t.removeChild(m),Xo(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Xo(i)}function oh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":oh(s),Sa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Hy(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ya])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Gy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=vi(t.nextSibling),t===null))return null;return t}function lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Vy(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function vi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var ch=null;function T_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function b_(t,i,s){switch(i=dc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Io(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Sa(t)}var hi=new Map,A_=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=Z.d;Z.d={f:ky,r:Xy,D:Wy,C:qy,L:Yy,m:jy,X:Zy,S:Ky,M:Qy};function ky(){var t=sa.f(),i=sc();return t||i}function Xy(t){var i=Vi(t);i!==null&&i.tag===5&&i.type==="form"?qm(i):sa.r(t)}var mr=typeof document>"u"?null:document;function R_(t,i,s){var l=mr;if(l&&typeof i=="string"&&i){var f=qt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),A_.has(f)||(A_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Rn(i,"link",t),sn(i),l.head.appendChild(i)))}}function Wy(t){sa.D(t),R_("dns-prefetch",t,null)}function qy(t,i){sa.C(t,i),R_("preconnect",t,i)}function Yy(t,i,s){sa.L(t,i,s);var l=mr;if(l&&t&&i){var f='link[rel="preload"][as="'+qt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+qt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+qt(s.imageSizes)+'"]')):f+='[href="'+qt(t)+'"]';var m=f;switch(i){case"style":m=gr(t);break;case"script":m=_r(t)}hi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),hi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Bo(m))||i==="script"&&l.querySelector(Fo(m))||(i=l.createElement("link"),Rn(i,"link",t),sn(i),l.head.appendChild(i)))}}function jy(t,i){sa.m(t,i);var s=mr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=_r(t)}if(!hi.has(m)&&(t=g({rel:"modulepreload",href:t},i),hi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fo(m)))return}l=s.createElement("link"),Rn(l,"link",t),sn(l),s.head.appendChild(l)}}}function Ky(t,i,s){sa.S(t,i,s);var l=mr;if(l&&t){var f=Ma(l).hoistableStyles,m=gr(t);i=i||"default";var M=f.get(m);if(!M){var b={loading:0,preload:null};if(M=l.querySelector(Bo(m)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=hi.get(m))&&uh(t,s);var P=M=l.createElement("link");sn(P),Rn(P,"link",t),P._p=new Promise(function($,ce){P.onload=$,P.onerror=ce}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,mc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:b},f.set(m,M)}}}function Zy(t,i){sa.X(t,i);var s=mr;if(s&&t){var l=Ma(s).hoistableScripts,f=_r(t),m=l.get(f);m||(m=s.querySelector(Fo(f)),m||(t=g({src:t,async:!0},i),(i=hi.get(f))&&fh(t,i),m=s.createElement("script"),sn(m),Rn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Qy(t,i){sa.M(t,i);var s=mr;if(s&&t){var l=Ma(s).hoistableScripts,f=_r(t),m=l.get(f);m||(m=s.querySelector(Fo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=hi.get(f))&&fh(t,i),m=s.createElement("script"),sn(m),Rn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function w_(t,i,s,l){var f=(f=ye.current)?pc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=gr(s.href),s=Ma(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=gr(s.href);var m=Ma(f).hoistableStyles,M=m.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=f.querySelector(Bo(t)))&&!m._p&&(M.instance=m,M.state.loading=5),hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(t,s),m||Jy(f,t,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=_r(s),s=Ma(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function gr(t){return'href="'+qt(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function C_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Jy(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Rn(i,"link",s),sn(i),t.head.appendChild(i))}function _r(t){return'[src="'+qt(t)+'"]'}function Fo(t){return"script[async]"+t}function D_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+qt(s.href)+'"]');if(l)return i.instance=l,sn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),sn(l),Rn(l,"style",f),mc(l,s.precedence,t),i.instance=l;case"stylesheet":f=gr(s.href);var m=t.querySelector(Bo(f));if(m)return i.state.loading|=4,i.instance=m,sn(m),m;l=C_(s),(f=hi.get(f))&&uh(l,f),m=(t.ownerDocument||t).createElement("link"),sn(m);var M=m;return M._p=new Promise(function(b,P){M.onload=b,M.onerror=P}),Rn(m,"link",l),i.state.loading|=4,mc(m,s.precedence,t),i.instance=m;case"script":return m=_r(s.src),(f=t.querySelector(Fo(m)))?(i.instance=f,sn(f),f):(l=s,(f=hi.get(m))&&(l=g({},s),fh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),sn(f),Rn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,mc(l,s.precedence,t));return i.instance}function mc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var b=l[M];if(b.dataset.precedence===i)m=b;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function uh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function fh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var gc=null;function U_(t,i,s){if(gc===null){var l=new Map,f=gc=new Map;f.set(s,l)}else f=gc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[ya]||m[cn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=t+M;var b=l.get(M);b?b.push(m):l.set(M,[m])}}return l}function L_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function $y(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function N_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var zo=null;function eS(){}function tS(t,i,s){if(zo===null)throw Error(a(475));var l=zo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=gr(s.href),m=t.querySelector(Bo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=_c.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,sn(m);return}m=t.ownerDocument||t,s=C_(s),(f=hi.get(f))&&uh(s,f),m=m.createElement("link"),sn(m);var M=m;M._p=new Promise(function(b,P){M.onload=b,M.onerror=P}),Rn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function nS(){if(zo===null)throw Error(a(475));var t=zo;return t.stylesheets&&t.count===0&&hh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&hh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)hh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function hh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,i.forEach(iS,t),vc=null,_c.call(t))}function iS(t,i){if(!(i.state.loading&4)){var s=vc.get(t);if(s)var l=s.get(null);else{s=new Map,vc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=_c.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Ho={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function aS(t,i,s,l,f,m,M,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oe(0),this.hiddenUpdates=oe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function O_(t,i,s,l,f,m,M,b,P,$,ce,ge){return t=new aS(t,i,s,M,b,P,$,ge),i=1,m===!0&&(i|=24),m=Qn(3,null,null,i),t.current=m,m.stateNode=t,i=qu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Zu(m),t}function P_(t){return t?(t=js,t):js}function I_(t,i,s,l,f,m){f=P_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ra(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=wa(t,l,i),s!==null&&(ni(s,t,i),go(s,t,i))}function B_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function dh(t,i){B_(t,i),(t=t.alternate)&&B_(t,i)}function F_(t){if(t.tag===13){var i=Ys(t,67108864);i!==null&&ni(i,t,67108864),dh(t,67108864)}}var xc=!0;function sS(t,i,s,l){var f=I.T;I.T=null;var m=Z.p;try{Z.p=2,ph(t,i,s,l)}finally{Z.p=m,I.T=f}}function rS(t,i,s,l){var f=I.T;I.T=null;var m=Z.p;try{Z.p=8,ph(t,i,s,l)}finally{Z.p=m,I.T=f}}function ph(t,i,s,l){if(xc){var f=mh(l);if(f===null)th(t,i,l,yc,s),H_(t,l);else if(lS(f,t,i,s,l))l.stopPropagation();else if(H_(t,l),i&4&&-1<oS.indexOf(t)){for(;f!==null;){var m=Vi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Pe(m.pendingLanes);if(M!==0){var b=m;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var P=1<<31-we(M);b.entanglements[1]|=P,M&=~P}Li(m),(Ut&6)===0&&(ic=tt()+500,No(0))}}break;case 13:b=Ys(m,2),b!==null&&ni(b,m,2),sc(),dh(m,2)}if(m=mh(l),m===null&&th(t,i,l,yc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else th(t,i,l,null,s)}}function mh(t){return t=xu(t),gh(t)}var yc=null;function gh(t){if(yc=null,t=Gi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return yc=t,null}function z_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xe()){case Pt:return 2;case Ge:return 8;case L:case A:return 32;case te:return 268435456;default:return 32}default:return 32}}var _h=!1,Ga=null,Va=null,ka=null,Go=new Map,Vo=new Map,Xa=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H_(t,i){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Go.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(i.pointerId)}}function ko(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Vi(i),i!==null&&F_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function lS(t,i,s,l,f){switch(i){case"focusin":return Ga=ko(Ga,t,i,s,l,f),!0;case"dragenter":return Va=ko(Va,t,i,s,l,f),!0;case"mouseover":return ka=ko(ka,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Go.set(m,ko(Go.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Vo.set(m,ko(Vo.get(m)||null,t,i,s,l,f)),!0}return!1}function G_(t){var i=Gi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Kn(t.priority,function(){if(s.tag===13){var l=ti();l=Wt(l);var f=Ys(s,l);f!==null&&ni(f,s,l),dh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=mh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vu=l,s.target.dispatchEvent(l),vu=null}else return i=Vi(s),i!==null&&F_(i),t.blockedOn=s,!1;i.shift()}return!0}function V_(t,i,s){Sc(t)&&s.delete(i)}function cS(){_h=!1,Ga!==null&&Sc(Ga)&&(Ga=null),Va!==null&&Sc(Va)&&(Va=null),ka!==null&&Sc(ka)&&(ka=null),Go.forEach(V_),Vo.forEach(V_)}function Mc(t,i){t.blockedOn===i&&(t.blockedOn=null,_h||(_h=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cS)))}var Ec=null;function k_(t){Ec!==t&&(Ec=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(gh(l||s)===null)continue;break}var m=Vi(s);m!==null&&(t.splice(i,3),i-=3,gf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Xo(t){function i(P){return Mc(P,t)}Ga!==null&&Mc(Ga,t),Va!==null&&Mc(Va,t),ka!==null&&Mc(ka,t),Go.forEach(i),Vo.forEach(i);for(var s=0;s<Xa.length;s++){var l=Xa[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Xa.length&&(s=Xa[0],s.blockedOn===null);)G_(s),s.blockedOn===null&&Xa.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[En]||null;if(typeof m=="function")M||k_(s);else if(M){var b=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[En]||null)b=M.formAction;else if(gh(f)!==null)continue}else b=M.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),k_(s)}}}function vh(t){this._internalRoot=t}Tc.prototype.render=vh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ti();I_(s,l,t,i,null,null)},Tc.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;I_(t.current,2,null,t,null,null),sc(),i[Vn]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var i=At();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Xa.length&&i!==0&&i<Xa[s].priority;s++);Xa.splice(s,0,t),s===0&&G_(t)}};var X_=e.version;if(X_!=="19.1.0")throw Error(a(527,X_,"19.1.0"));Z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var uS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{ue=bc.inject(uS),Be=bc}catch{}}return qo.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",f=rg,m=og,M=lg,b=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=O_(t,1,!1,null,null,s,l,f,m,M,b,null),t[Vn]=i.current,eh(t),new vh(i)},qo.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,f="",m=rg,M=og,b=lg,P=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=O_(t,1,!0,i,s??null,l,f,m,M,b,P,$),i.context=P_(null),s=i.current,l=ti(),l=Wt(l),f=Ra(l),f.callback=null,wa(s,f,l),s=l,i.current.lanes=s,me(i,s),Li(i),t[Vn]=i.current,eh(t),new Tc(i)},qo.version="19.1.0",qo}var ev;function yS(){if(ev)return Sh.exports;ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sh.exports=xS(),Sh.exports}var SS=yS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="175",MS=0,tv=1,ES=2,E0=1,TS=2,ha=3,va=0,jn=1,Oi=2,is=0,Or=1,nv=2,iv=3,av=4,bS=5,Ps=100,AS=101,RS=102,wS=103,CS=104,DS=200,US=201,LS=202,NS=203,ld=204,cd=205,OS=206,PS=207,IS=208,BS=209,FS=210,zS=211,HS=212,GS=213,VS=214,ud=0,fd=1,hd=2,Br=3,dd=4,pd=5,md=6,gd=7,T0=0,kS=1,XS=2,as=0,WS=1,qS=2,YS=3,jS=4,KS=5,ZS=6,QS=7,sv="attached",JS="detached",b0=300,Fr=301,zr=302,_d=303,vd=304,hu=306,Hr=1e3,es=1001,ou=1002,Fn=1003,A0=1004,nl=1005,si=1006,$c=1007,pa=1008,xa=1009,R0=1010,w0=1011,ol=1012,ep=1013,zs=1014,Ti=1015,pl=1016,tp=1017,np=1018,ll=1020,C0=35902,D0=1021,U0=1022,mi=1023,L0=1024,N0=1025,cl=1026,ul=1027,ip=1028,ap=1029,O0=1030,sp=1031,rp=1033,eu=33776,tu=33777,nu=33778,iu=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,Td=37492,bd=37496,Ad=37808,Rd=37809,wd=37810,Cd=37811,Dd=37812,Ud=37813,Ld=37814,Nd=37815,Od=37816,Pd=37817,Id=37818,Bd=37819,Fd=37820,zd=37821,au=36492,Hd=36494,Gd=36495,P0=36283,Vd=36284,kd=36285,Xd=36286,fl=2300,hl=2301,bh=2302,rv=2400,ov=2401,lv=2402,$S=2500,eM=0,I0=1,Wd=2,tM=3200,nM=3201,B0=0,iM=1,$a="",Sn="srgb",Hn="srgb-linear",lu="linear",Ht="srgb",vr=7680,cv=519,aM=512,sM=513,rM=514,F0=515,oM=516,lM=517,cM=518,uM=519,qd=35044,uv="300 es",ma=2e3,cu=2001;class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fv=1234567;const al=Math.PI/180,Gr=180/Math.PI;function bi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function op(o,e){return(o%e+e)%e}function fM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function hM(o,e,n){return o!==e?(n-o)/(e-o):0}function sl(o,e,n){return(1-n)*o+n*e}function dM(o,e,n,a){return sl(o,e,1-Math.exp(-n*a))}function pM(o,e=1){return e-Math.abs(op(o,e*2)-e)}function mM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function gM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function _M(o,e){return o+Math.floor(Math.random()*(e-o+1))}function vM(o,e){return o+Math.random()*(e-o)}function xM(o){return o*(.5-Math.random())}function yM(o){o!==void 0&&(fv=o);let e=fv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SM(o){return o*al}function MM(o){return o*Gr}function EM(o){return(o&o-1)===0&&o!==0}function TM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function bM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function AM(o,e,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),d=u(n/2),p=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),y=c((a-e)/2),E=u((a-e)/2);switch(r){case"XYX":o.set(h*g,d*_,d*v,h*p);break;case"YZY":o.set(d*v,h*g,d*_,h*p);break;case"ZXZ":o.set(d*_,d*v,h*g,h*p);break;case"XZX":o.set(h*g,d*E,d*y,h*p);break;case"YXY":o.set(d*y,h*g,d*E,h*p);break;case"ZYZ":o.set(d*E,d*y,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const RM={DEG2RAD:al,RAD2DEG:Gr,generateUUID:bi,clamp:gt,euclideanModulo:op,mapLinear:fM,inverseLerp:hM,lerp:sl,damp:dM,pingpong:pM,smoothstep:mM,smootherstep:gM,randInt:_M,randFloat:vM,randFloatSpread:xM,seededRandom:yM,degToRad:SM,radToDeg:MM,isPowerOfTwo:EM,ceilPowerOfTwo:TM,floorPowerOfTwo:bM,setQuaternionFromProperEuler:AM,normalize:Nt,denormalize:Mi};class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,a,r,c,u,h,d,p){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,d,p)}set(e,n,a,r,c,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],y=a[5],E=a[8],T=r[0],S=r[3],x=r[6],O=r[1],N=r[4],C=r[7],F=r[2],H=r[5],B=r[8];return c[0]=u*T+h*O+d*F,c[3]=u*S+h*N+d*H,c[6]=u*x+h*C+d*B,c[1]=p*T+g*O+_*F,c[4]=p*S+g*N+_*H,c[7]=p*x+g*C+_*B,c[2]=v*T+y*O+E*F,c[5]=v*S+y*N+E*H,c[8]=v*x+y*C+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-a*c*g+a*h*d+r*c*p-r*u*d}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=g*u-h*p,v=h*d-g*c,y=p*c-u*d,E=n*_+a*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(r*p-g*a)*T,e[2]=(h*a-r*u)*T,e[3]=v*T,e[4]=(g*n-r*d)*T,e[5]=(r*c-h*n)*T,e[6]=y*T,e[7]=(a*d-p*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*h)+u+e,-r*p,r*d,-r*(-p*u+d*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Ah.makeScale(e,n)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ah.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new st;function z0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function dl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wM(){const o=dl("canvas");return o.style.display="block",o}const hv={};function su(o){o in hv||(hv[o]=!0,console.warn(o))}function CM(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function DM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function UM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const o={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ht&&(r.r=ga(r.r),r.g=ga(r.g),r.b=ga(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},fromWorkingColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},toWorkingColorSpace:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$a?lu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Hn]:{primaries:e,whitePoint:a,transfer:lu,toXYZ:dv,fromXYZ:pv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:a,transfer:Ht,toXYZ:dv,fromXYZ:pv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),o}const Et=LM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Pr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xr;class NM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{xr===void 0&&(xr=dl("canvas")),xr.width=e.width,xr.height=e.height;const r=xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=xr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=ga(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ga(n[a]/255)*255):n[a]=ga(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(Rh(r[u].image)):c.push(Rh(r[u]))}else c=Rh(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function Rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?NM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PM=0;class Mn extends qr{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,a=es,r=es,c=si,u=pa,h=mi,d=xa,p=Mn.DEFAULT_ANISOTROPY,g=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=bi(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=b0;Mn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,a=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const d=e.elements,p=d[0],g=d[4],_=d[8],v=d[1],y=d[5],E=d[9],T=d[2],S=d[6],x=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,C=(y+1)/2,F=(x+1)/2,H=(g+v)/4,B=(_+T)/4,X=(E+S)/4;return N>C&&N>F?N<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(N),r=H/a,c=B/a):C>F?C<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(C),a=H/r,c=X/r):F<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(F),a=B/c,r=X/c),this.set(a,r,c,n),this}let O=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(_-T)/O,this.z=(v-g)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IM extends qr{constructor(e=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Mn(r,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new lp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hs extends IM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class H0 extends Mn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends Mn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,h){let d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];const v=c[u+0],y=c[u+1],E=c[u+2],T=c[u+3];if(h===0){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=v,e[n+1]=y,e[n+2]=E,e[n+3]=T;return}if(_!==T||d!==v||p!==y||g!==E){let S=1-h;const x=d*v+p*y+g*E+_*T,O=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const F=Math.sqrt(N),H=Math.atan2(F,x*O);S=Math.sin(S*H)/F,h=Math.sin(h*H)/F}const C=h*O;if(d=d*S+v*C,p=p*S+y*C,g=g*S+E*C,_=_*S+T*C,S===1-h){const F=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=F,p*=F,g*=F,_*=F}}e[n]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,c,u){const h=a[r],d=a[r+1],p=a[r+2],g=a[r+3],_=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return e[n]=h*E+g*_+d*y-p*v,e[n+1]=d*E+g*v+p*_-h*y,e[n+2]=p*E+g*y+h*v-d*_,e[n+3]=g*E-h*_-d*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(r/2),_=h(c/2),v=d(a/2),y=d(r/2),E=d(c/2);switch(u){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-d)*y,this._y=(c-p)*y,this._z=(u-r)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-d)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-p)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(u-r)/y,this._x=(c+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+r*p-c*d,this._y=r*g+u*d+c*h-a*p,this._z=c*g+u*p+a*d-r*h,this._w=u*g-a*h-r*d-c*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,c=this._z,u=this._w;let h=u*e._w+a*e._x+r*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=a,this._y=r,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*a+n*this._x,this._y=y*r+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,a=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*r-h*a),g=2*(h*n-c*r),_=2*(c*a-u*n);return this.x=n+d*p+u*_-h*g,this.y=a+d*g+h*p-c*_,this.z=r+d*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,h=n.y,d=n.z;return this.x=r*d-c*h,this.y=c*u-a*d,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new j,mv=new rs;class Bi{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,xi):xi.fromBufferAttribute(c,u),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ac.copy(a.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Rc.subVectors(this.max,Yo),yr.subVectors(e.a,Yo),Sr.subVectors(e.b,Yo),Mr.subVectors(e.c,Yo),qa.subVectors(Sr,yr),Ya.subVectors(Mr,Sr),As.subVectors(yr,Mr);let n=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-As.z,As.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,As.z,0,-As.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-As.y,As.x,0];return!Ch(n,yr,Sr,Mr,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Ch(n,yr,Sr,Mr,Rc))?!1:(wc.crossVectors(qa,Ya),n=[wc.x,wc.y,wc.z],Ch(n,yr,Sr,Mr,Rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ra=[new j,new j,new j,new j,new j,new j,new j,new j],xi=new j,Ac=new Bi,yr=new j,Sr=new j,Mr=new j,qa=new j,Ya=new j,As=new j,Yo=new j,Rc=new j,wc=new j,Rs=new j;function Ch(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Rs.fromArray(o,c);const h=r.x*Math.abs(Rs.x)+r.y*Math.abs(Rs.y)+r.z*Math.abs(Rs.z),d=e.dot(Rs),p=n.dot(Rs),g=a.dot(Rs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const FM=new Bi,jo=new j,Dh=new j;class Fi{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):FM.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(jo,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Dh)),this.expandByPoint(jo.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oa=new j,Uh=new j,Cc=new j,ja=new j,Lh=new j,Dc=new j,Nh=new j;class du{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,n),oa.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Uh.copy(e).add(n).multiplyScalar(.5),Cc.copy(n).sub(e).normalize(),ja.copy(this.origin).sub(Uh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Cc),h=ja.dot(this.direction),d=-ja.dot(Cc),p=ja.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*d-h,v=u*h-d,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,y=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-d),c),y=-_*_+v*(v+2*d)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-d),c),y=v*(v+2*d)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-d),c),y=-_*_+v*(v+2*d)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Uh).addScaledVector(Cc,v),y}intersectSphere(e,n){oa.subVectors(e.center,this.origin);const a=oa.dot(this.direction),r=oa.dot(oa)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),a>d||h>r)||((h>a||a!==a)&&(a=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,n,a,r,c){Lh.subVectors(n,e),Dc.subVectors(a,e),Nh.crossVectors(Lh,Dc);let u=this.direction.dot(Nh),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ja.subVectors(this.origin,e);const d=h*this.direction.dot(Dc.crossVectors(ja,Dc));if(d<0)return null;const p=h*this.direction.dot(Lh.cross(ja));if(p<0||d+p>u)return null;const g=-h*ja.dot(Nh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,n,a,r,c,u,h,d,p,g,_,v,y,E,T,S){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,d,p,g,_,v,y,E,T,S)}set(e,n,a,r,c,u,h,d,p,g,_,v,y,E,T,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=r,x[1]=c,x[5]=u,x[9]=h,x[13]=d,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),c=1/Er.setFromMatrixColumn(e,1).length(),u=1/Er.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(r),p=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,y=u*_,E=h*g,T=h*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=y+E*p,n[5]=v-T*p,n[9]=-h*d,n[2]=T-v*p,n[6]=E+y*p,n[10]=u*d}else if(e.order==="YXZ"){const v=d*g,y=d*_,E=p*g,T=p*_;n[0]=v+T*h,n[4]=E*h-y,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=y*h-E,n[6]=T+v*h,n[10]=u*d}else if(e.order==="ZXY"){const v=d*g,y=d*_,E=p*g,T=p*_;n[0]=v-T*h,n[4]=-u*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=u*g,n[9]=T-v*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(e.order==="ZYX"){const v=u*g,y=u*_,E=h*g,T=h*_;n[0]=d*g,n[4]=E*p-y,n[8]=v*p+T,n[1]=d*_,n[5]=T*p+v,n[9]=y*p-E,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*p,E=h*d,T=h*p;n[0]=d*g,n[4]=T-v*_,n[8]=E*_+y,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*_+E,n[10]=v-T*_}else if(e.order==="XZY"){const v=u*d,y=u*p,E=h*d,T=h*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+T,n[5]=u*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,HM)}lookAt(e,n,a){const r=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ka.crossVectors(a,ii),Ka.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ka.crossVectors(a,ii)),Ka.normalize(),Uc.crossVectors(ii,Ka),r[0]=Ka.x,r[4]=Uc.x,r[8]=ii.x,r[1]=Ka.y,r[5]=Uc.y,r[9]=ii.y,r[2]=Ka.z,r[6]=Uc.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],y=a[13],E=a[2],T=a[6],S=a[10],x=a[14],O=a[3],N=a[7],C=a[11],F=a[15],H=r[0],B=r[4],X=r[8],D=r[12],w=r[1],V=r[5],le=r[9],re=r[13],_e=r[2],de=r[6],I=r[10],Z=r[14],Y=r[3],Ee=r[7],U=r[11],ee=r[15];return c[0]=u*H+h*w+d*_e+p*Y,c[4]=u*B+h*V+d*de+p*Ee,c[8]=u*X+h*le+d*I+p*U,c[12]=u*D+h*re+d*Z+p*ee,c[1]=g*H+_*w+v*_e+y*Y,c[5]=g*B+_*V+v*de+y*Ee,c[9]=g*X+_*le+v*I+y*U,c[13]=g*D+_*re+v*Z+y*ee,c[2]=E*H+T*w+S*_e+x*Y,c[6]=E*B+T*V+S*de+x*Ee,c[10]=E*X+T*le+S*I+x*U,c[14]=E*D+T*re+S*Z+x*ee,c[3]=O*H+N*w+C*_e+F*Y,c[7]=O*B+N*V+C*de+F*Ee,c[11]=O*X+N*le+C*I+F*U,c[15]=O*D+N*re+C*Z+F*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],T=e[7],S=e[11],x=e[15];return E*(+c*d*_-r*p*_-c*h*v+a*p*v+r*h*y-a*d*y)+T*(+n*d*y-n*p*v+c*u*v-r*u*y+r*p*g-c*d*g)+S*(+n*p*_-n*h*y-c*u*_+a*u*y+c*h*g-a*p*g)+x*(-r*h*g-n*d*_+n*h*v+r*u*_-a*u*v+a*d*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],T=e[13],S=e[14],x=e[15],O=_*S*p-T*v*p+T*d*y-h*S*y-_*d*x+h*v*x,N=E*v*p-g*S*p-E*d*y+u*S*y+g*d*x-u*v*x,C=g*T*p-E*_*p+E*h*y-u*T*y-g*h*x+u*_*x,F=E*_*d-g*T*d-E*h*v+u*T*v+g*h*S-u*_*S,H=n*O+a*N+r*C+c*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=O*B,e[1]=(T*v*c-_*S*c-T*r*y+a*S*y+_*r*x-a*v*x)*B,e[2]=(h*S*c-T*d*c+T*r*p-a*S*p-h*r*x+a*d*x)*B,e[3]=(_*d*c-h*v*c-_*r*p+a*v*p+h*r*y-a*d*y)*B,e[4]=N*B,e[5]=(g*S*c-E*v*c+E*r*y-n*S*y-g*r*x+n*v*x)*B,e[6]=(E*d*c-u*S*c-E*r*p+n*S*p+u*r*x-n*d*x)*B,e[7]=(u*v*c-g*d*c+g*r*p-n*v*p-u*r*y+n*d*y)*B,e[8]=C*B,e[9]=(E*_*c-g*T*c-E*a*y+n*T*y+g*a*x-n*_*x)*B,e[10]=(u*T*c-E*h*c+E*a*p-n*T*p-u*a*x+n*h*x)*B,e[11]=(g*h*c-u*_*c-g*a*p+n*_*p+u*a*y-n*h*y)*B,e[12]=F*B,e[13]=(g*T*r-E*_*r+E*a*v-n*T*v-g*a*S+n*_*S)*B,e[14]=(E*h*r-u*T*r-E*a*d+n*T*d+u*a*S-n*h*S)*B,e[15]=(u*_*r-g*h*r+g*a*d-n*_*d-u*a*v+n*h*v)*B,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,h=e.y,d=e.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-r*d,p*d+r*h,0,p*h+r*d,g*h+a,g*d-r*u,0,p*d-r*h,g*d+r*u,c*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,_=h+h,v=c*p,y=c*g,E=c*_,T=u*g,S=u*_,x=h*_,O=d*p,N=d*g,C=d*_,F=a.x,H=a.y,B=a.z;return r[0]=(1-(T+x))*F,r[1]=(y+C)*F,r[2]=(E-N)*F,r[3]=0,r[4]=(y-C)*H,r[5]=(1-(v+x))*H,r[6]=(S+O)*H,r[7]=0,r[8]=(E+N)*B,r[9]=(S-O)*B,r[10]=(1-(v+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let c=Er.set(r[0],r[1],r[2]).length();const u=Er.set(r[4],r[5],r[6]).length(),h=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),e.x=r[12],e.y=r[13],e.z=r[14],yi.copy(this);const p=1/c,g=1/u,_=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,n.setFromRotationMatrix(yi),a.x=c,a.y=u,a.z=h,this}makePerspective(e,n,a,r,c,u,h=ma){const d=this.elements,p=2*c/(n-e),g=2*c/(a-r),_=(n+e)/(n-e),v=(a+r)/(a-r);let y,E;if(h===ma)y=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===cu)y=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,h=ma){const d=this.elements,p=1/(n-e),g=1/(a-r),_=1/(u-c),v=(n+e)*p,y=(a+r)*g;let E,T;if(h===ma)E=(u+c)*_,T=-2*_;else if(h===cu)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=T,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Er=new j,yi=new rt,zM=new j(0,0,0),HM=new j(1,1,1),Ka=new j,Uc=new j,ii=new j,gv=new rt,_v=new rs;class Ii{constructor(e=0,n=0,a=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],h=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _v.setFromEuler(this),this.setFromQuaternion(_v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class G0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GM=0;const vv=new j,Tr=new rs,la=new rt,Lc=new j,Ko=new j,VM=new j,kM=new rs,xv=new j(1,0,0),yv=new j(0,1,0),Sv=new j(0,0,1),Mv={type:"added"},XM={type:"removed"},br={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Qt extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new j,n=new Ii,a=new rs,r=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new st}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(yv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,n){return vv.copy(e).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(yv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Lc.copy(e):Lc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Ko,Lc,this.up):la.lookAt(Lc,Ko,this.up),this.quaternion.setFromRotationMatrix(la),r&&(la.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(la),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mv),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XM),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mv),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,kM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];c(e.shapes,_)}else c(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(e.materials,this.material[d]));r.material=h}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(c(e.animations,d))}}if(n){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),E=u(e.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=r,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new j(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new j,ca=new j,Ph=new j,ua=new j,Ar=new j,Rr=new j,Ev=new j,Ih=new j,Bh=new j,Fh=new j,zh=new Dt,Hh=new Dt,Gh=new Dt;class Ei{constructor(e=new j,n=new j,a=new j){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Si.subVectors(e,n),r.cross(Si);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Si.subVectors(r,n),ca.subVectors(a,n),Ph.subVectors(e,n);const u=Si.dot(Si),h=Si.dot(ca),d=Si.dot(Ph),p=ca.dot(ca),g=ca.dot(Ph),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*d-h*g)*v,E=(u*g-h*d)*v;return c.set(1-y-E,E,y)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,n,a,r,c,u,h,d){return this.getBarycoord(e,n,a,r,ua)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,ua.x),d.addScaledVector(u,ua.y),d.addScaledVector(h,ua.z),d)}static getInterpolatedAttribute(e,n,a,r,c,u){return zh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),zh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,a),Gh.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(zh,c.x),u.addScaledVector(Hh,c.y),u.addScaledVector(Gh,c.z),u}static isFrontFacing(e,n,a,r){return Si.subVectors(a,n),ca.subVectors(e,n),Si.cross(ca).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Si.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return Ei.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,h;Ar.subVectors(r,a),Rr.subVectors(c,a),Ih.subVectors(e,a);const d=Ar.dot(Ih),p=Rr.dot(Ih);if(d<=0&&p<=0)return n.copy(a);Bh.subVectors(e,r);const g=Ar.dot(Bh),_=Rr.dot(Bh);if(g>=0&&_<=g)return n.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Ar,u);Fh.subVectors(e,c);const y=Ar.dot(Fh),E=Rr.dot(Fh);if(E>=0&&y<=E)return n.copy(c);const T=y*p-d*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(Rr,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return Ev.subVectors(c,r),h=(_-g)/(_-g+(y-E)),n.copy(r).addScaledVector(Ev,h);const x=1/(S+T+v);return u=T*x,h=v*x,n.copy(a).addScaledVector(Ar,u).addScaledVector(Rr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Vh(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class it{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,a,r=Et.workingColorSpace){return this.r=e,this.g=n,this.b=a,Et.toWorkingColorSpace(this,r),this}setHSL(e,n,a,r=Et.workingColorSpace){if(e=op(e,1),n=gt(n,0,1),a=gt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Vh(u,c,e+1/3),this.g=Vh(u,c,e),this.b=Vh(u,c,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,n=Sn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const a=V0[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Et.fromWorkingColorSpace(Nn.copy(this),e),Math.round(gt(Nn.r*255,0,255))*65536+Math.round(gt(Nn.g*255,0,255))*256+Math.round(gt(Nn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(Nn.copy(this),n);const a=Nn.r,r=Nn.g,c=Nn.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:d=(r-c)/_+(r<c?6:0);break;case r:d=(c-a)/_+2;break;case c:d=(a-r)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Sn){Et.fromWorkingColorSpace(Nn.copy(this),e);const n=Nn.r,a=Nn.g,r=Nn.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+n,Za.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Za),e.getHSL(Nc);const a=sl(Za.h,Nc.h,n),r=sl(Za.s,Nc.s,n),c=sl(Za.l,Nc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new it;it.NAMES=V0;let WM=0;class Pi extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Or,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(a.blending=this.blending),this.side!==va&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ld&&(a.blendSrc=this.blendSrc),this.blendDst!==cd&&(a.blendDst=this.blendDst),this.blendEquation!==Ps&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ts extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new j,Oc=new Tt;let qM=0;class zn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=qd,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(e),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Mi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Nt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),a=Nt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),a=Nt(a,this.array),r=Nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),a=Nt(a,this.array),r=Nt(r,this.array),c=Nt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qd&&(e.usage=this.usage),e}}class k0 extends zn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class X0 extends zn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class _a extends zn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let YM=0;const di=new rt,kh=new Qt,wr=new j,ai=new Bi,Zo=new Bi,yn=new j;class zi extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z0(e)?X0:k0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new st().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,n,a){return di.makeTranslation(e,n,a),this.applyMatrix4(di),this}scale(e,n,a){return di.makeScale(e,n,a),this.applyMatrix4(di),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new _a(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Zo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ai.min,Zo.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Zo.max),ai.expandByPoint(yn)):(ai.expandByPoint(Zo.min),ai.expandByPoint(Zo.max))}ai.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)yn.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)yn.fromBufferAttribute(h,p),d&&(wr.fromBufferAttribute(e,p),yn.add(wr)),r=Math.max(r,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let X=0;X<a.count;X++)h[X]=new j,d[X]=new j;const p=new j,g=new j,_=new j,v=new Tt,y=new Tt,E=new Tt,T=new j,S=new j;function x(X,D,w){p.fromBufferAttribute(a,X),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,w),v.fromBufferAttribute(c,X),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[X].add(T),h[D].add(T),h[w].add(T),d[X].add(S),d[D].add(S),d[w].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let X=0,D=O.length;X<D;++X){const w=O[X],V=w.start,le=w.count;for(let re=V,_e=V+le;re<_e;re+=3)x(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const N=new j,C=new j,F=new j,H=new j;function B(X){F.fromBufferAttribute(r,X),H.copy(F);const D=h[X];N.copy(D),N.sub(F.multiplyScalar(F.dot(D))).normalize(),C.crossVectors(H,D);const V=C.dot(d[X])<0?-1:1;u.setXYZW(X,N.x,N.y,N.z,V)}for(let X=0,D=O.length;X<D;++X){const w=O[X],V=w.start,le=w.count;for(let re=V,_e=V+le;re<_e;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new j,c=new j,u=new j,h=new j,d=new j,p=new j,g=new j,_=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);r.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(a,E),d.fromBufferAttribute(a,T),p.fromBufferAttribute(a,S),h.add(g),d.add(g),p.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let y=0,E=0;for(let T=0,S=d.length;T<S;T++){h.isInterleavedBufferAttribute?y=d[T]*h.data.stride+h.offset:y=d[T]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new zn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,a=this.index.array,r=this.attributes;for(const h in r){const d=r[h],p=e(d,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=e(v,a);d.push(y)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(r[d]=g,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tv=new rt,ws=new du,Pc=new Fi,bv=new j,Ic=new j,Bc=new j,Fc=new j,Xh=new j,zc=new j,Av=new j,Hc=new j;class Yn extends Qt{constructor(e=new zi,n=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],_=c[d];g!==0&&(Xh.fromBufferAttribute(_,e),u?zc.addScaledVector(Xh,g):zc.addScaledVector(Xh.sub(n),g))}n.add(zc)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(Pc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Pc,bv)===null||ws.origin.distanceToSquared(bv)>(e.far-e.near)**2))&&(Tv.copy(c).invert(),ws.copy(e.ray).applyMatrix4(Tv),!(a.boundingBox!==null&&ws.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,ws)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],O=Math.max(S.start,y.start),N=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let C=O,F=N;C<F;C+=3){const H=h.getX(C),B=h.getX(C+1),X=h.getX(C+2);r=Gc(this,x,e,a,p,g,_,H,B,X),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const O=h.getX(S),N=h.getX(S+1),C=h.getX(S+2);r=Gc(this,u,e,a,p,g,_,O,N,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const S=v[E],x=u[S.materialIndex],O=Math.max(S.start,y.start),N=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=O,F=N;C<F;C+=3){const H=C,B=C+1,X=C+2;r=Gc(this,x,e,a,p,g,_,H,B,X),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=E,x=T;S<x;S+=3){const O=S,N=S+1,C=S+2;r=Gc(this,u,e,a,p,g,_,O,N,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function jM(o,e,n,a,r,c,u,h){let d;if(e.side===jn?d=a.intersectTriangle(u,c,r,!0,h):d=a.intersectTriangle(r,c,u,e.side===va,h),d===null)return null;Hc.copy(h),Hc.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(Hc);return p<n.near||p>n.far?null:{distance:p,point:Hc.clone(),object:o}}function Gc(o,e,n,a,r,c,u,h,d,p){o.getVertexPosition(h,Ic),o.getVertexPosition(d,Bc),o.getVertexPosition(p,Fc);const g=jM(o,e,n,a,Ic,Bc,Fc,Av);if(g){const _=new j;Ei.getBarycoord(Av,Ic,Bc,Fc,_),r&&(g.uv=Ei.getInterpolatedAttribute(r,h,d,p,_,new Tt)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,h,d,p,_,new Tt)),u&&(g.normal=Ei.getInterpolatedAttribute(u,h,d,p,_,new j),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new j,materialIndex:0};Ei.getNormal(Ic,Bc,Fc,v.normal),g.face=v,g.barycoord=_}return g}class Yr extends zi{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,r,u,2),E("x","z","y",1,-1,e,a,-n,r,u,3),E("x","y","z",1,-1,e,n,a,r,c,4),E("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(d),this.setAttribute("position",new _a(p,3)),this.setAttribute("normal",new _a(g,3)),this.setAttribute("uv",new _a(_,2));function E(T,S,x,O,N,C,F,H,B,X,D){const w=C/B,V=F/X,le=C/2,re=F/2,_e=H/2,de=B+1,I=X+1;let Z=0,Y=0;const Ee=new j;for(let U=0;U<I;U++){const ee=U*V-re;for(let xe=0;xe<de;xe++){const Se=xe*w-le;Ee[T]=Se*O,Ee[S]=ee*N,Ee[x]=_e,p.push(Ee.x,Ee.y,Ee.z),Ee[T]=0,Ee[S]=0,Ee[x]=H>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),_.push(xe/B),_.push(1-U/X),Z+=1}}for(let U=0;U<X;U++)for(let ee=0;ee<B;ee++){const xe=v+ee+de*U,Se=v+ee+de*(U+1),J=v+(ee+1)+de*(U+1),pe=v+(ee+1)+de*U;d.push(xe,Se,pe),d.push(Se,J,pe),Y+=6}h.addGroup(y,Y,D),y+=Y,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function In(o){const e={};for(let n=0;n<o.length;n++){const a=Vr(o[n]);for(const r in a)e[r]=a[r]}return e}function KM(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function W0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ZM={clone:Vr,merge:In};var QM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QM,this.fragmentShader=JM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=KM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class q0 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=ma}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new j,Rv=new Tt,wv=new Tt;class Bn extends q0{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,n){return this.getViewBounds(e,Rv,wv),n.subVectors(wv,Rv)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(al*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,Dr=1;class $M extends Qt{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Cr,Dr,e,n);r.layers=this.layers,this.add(r);const c=new Bn(Cr,Dr,e,n);c.layers=this.layers,this.add(c);const u=new Bn(Cr,Dr,e,n);u.layers=this.layers,this.add(u);const h=new Bn(Cr,Dr,e,n);h.layers=this.layers,this.add(h);const d=new Bn(Cr,Dr,e,n);d.layers=this.layers,this.add(d);const p=new Bn(Cr,Dr,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,d]=n;for(const p of n)this.remove(p);if(e===ma)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===cu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,h),e.setRenderTarget(a,3,r),e.render(n,d),e.setRenderTarget(a,4,r),e.render(n,p),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,r),e.render(n,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Y0 extends Mn{constructor(e=[],n=Fr,a,r,c,u,h,d,p,g){super(e,n,a,r,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eE extends Hs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new Y0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),c=new ss({name:"CubemapFromEquirect",uniforms:Vr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:is});c.uniforms.tEquirect.value=n;const u=new Yn(r,c),h=n.minFilter;return n.minFilter===pa&&(n.minFilter=si),new $M(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Bs extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),x=this._getHandJoint(p,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Bs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class nE extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class iE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=qd,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new j;class cp{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Pn.fromBufferAttribute(this,n),Pn.applyMatrix4(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Pn.fromBufferAttribute(this,n),Pn.applyNormalMatrix(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Pn.fromBufferAttribute(this,n),Pn.transformDirection(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Mi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Nt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Mi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Mi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Mi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Mi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),a=Nt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),a=Nt(a,this.array),r=Nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),a=Nt(a,this.array),r=Nt(r,this.array),c=Nt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new zn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cv=new j,Dv=new Dt,Uv=new Dt,aE=new j,Lv=new rt,Vc=new j,qh=new Fi,Nv=new rt,Yh=new du;class sE extends Yn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sv,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Vc),this.boundingBox.expandByPoint(Vc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Vc),this.boundingSphere.expandByPoint(Vc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qh.copy(this.boundingSphere),qh.applyMatrix4(r),e.ray.intersectsSphere(qh)!==!1&&(Nv.copy(r).invert(),Yh.copy(e.ray).applyMatrix4(Nv),!(this.boundingBox!==null&&Yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Yh)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===JS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;Dv.fromBufferAttribute(r.attributes.skinIndex,e),Uv.fromBufferAttribute(r.attributes.skinWeight,e),Cv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=Uv.getComponent(c);if(u!==0){const h=Dv.getComponent(c);Lv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(aE.copy(Cv).applyMatrix4(Lv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class j0 extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class K0 extends Mn{constructor(e=null,n=1,a=1,r,c,u,h,d,p=Fn,g=Fn,_,v){super(null,u,h,d,p,g,r,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ov=new rt,rE=new rt;class up{constructor(e=[],n=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new rt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:rE;Ov.multiplyMatrices(h,n[c]),Ov.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new up(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new K0(n,e,e,mi,Ti);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new j0),this.bones.push(u),this.boneInverses.push(new rt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class Yd extends zn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new rt,Pv=new rt,kc=[],Iv=new Bi,oE=new rt,Qo=new Yn,Jo=new Fi;class lE extends Yn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Yd(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,oE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),Iv.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Iv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Ur),Jo.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Jo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(a),e.ray.intersectsSphere(Jo)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Ur),Pv.multiplyMatrices(a,Ur),Qo.matrixWorld=Pv,Qo.raycast(e,kc);for(let u=0,h=kc.length;u<h;u++){const d=kc[u];d.instanceId=c,d.object=this,n.push(d)}kc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Yd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new K0(new Float32Array(r*this.count),r,this.count,ip,Ti));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=r*e;c[d]=h,c.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const jh=new j,cE=new j,uE=new st;class Ns{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=jh.subVectors(a,n).cross(cE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(jh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||uE.getNormalMatrix(e),r=this.coplanarPoint(jh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Fi,Xc=new j;class fp{constructor(e=new Ns,n=new Ns,a=new Ns,r=new Ns,c=new Ns,u=new Ns){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ma){const a=this.planes,r=e.elements,c=r[0],u=r[1],h=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],y=r[8],E=r[9],T=r[10],S=r[11],x=r[12],O=r[13],N=r[14],C=r[15];if(a[0].setComponents(d-c,v-p,S-y,C-x).normalize(),a[1].setComponents(d+c,v+p,S+y,C+x).normalize(),a[2].setComponents(d+u,v+g,S+E,C+O).normalize(),a[3].setComponents(d-u,v-g,S-E,C-O).normalize(),a[4].setComponents(d-h,v-_,S-T,C-N).normalize(),n===ma)a[5].setComponents(d+h,v+_,S+T,C+N).normalize();else if(n===cu)a[5].setComponents(h,_,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Xc.x=r.normal.x>0?e.max.x:e.min.x,Xc.y=r.normal.y>0?e.max.y:e.min.y,Xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z0 extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new j,fu=new j,Bv=new rt,$o=new du,Wc=new Fi,Kh=new j,Fv=new j;class hp extends Qt{constructor(e=new zi,n=new Z0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)uu.fromBufferAttribute(n,r-1),fu.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new _a(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(r),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;Bv.copy(r).invert(),$o.copy(e.ray).applyMatrix4(Bv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=p){const x=g.getX(T),O=g.getX(T+1),N=qc(this,e,$o,d,x,O,T);N&&n.push(N)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(y),x=qc(this,e,$o,d,T,S,E-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=p){const x=qc(this,e,$o,d,T,T+1,T);x&&n.push(x)}if(this.isLineLoop){const T=qc(this,e,$o,d,E-1,y,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function qc(o,e,n,a,r,c,u){const h=o.geometry.attributes.position;if(uu.fromBufferAttribute(h,r),fu.fromBufferAttribute(h,c),n.distanceSqToSegment(uu,fu,Kh,Fv)>a)return;Kh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Kh);if(!(p<e.near||p>e.far))return{distance:p,point:Fv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const zv=new j,Hv=new j;class fE extends hp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)zv.fromBufferAttribute(n,r),Hv.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+zv.distanceTo(Hv);e.setAttribute("lineDistance",new _a(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hE extends hp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Q0 extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gv=new rt,jd=new du,Yc=new Fi,jc=new j;class dE extends Qt{constructor(e=new zi,n=new Q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(r),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;Gv.copy(r).invert(),jd.copy(e.ray).applyMatrix4(Gv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=v,T=y;E<T;E++){const S=p.getX(E);jc.fromBufferAttribute(_,S),Vv(jc,S,d,r,e,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=v,T=y;E<T;E++)jc.fromBufferAttribute(_,E),Vv(jc,E,d,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Vv(o,e,n,a,r,c,u){const h=jd.distanceSqToPoint(o);if(h<n){const d=new j;jd.closestPointToPoint(o,d),d.applyMatrix4(a);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class J0 extends Mn{constructor(e,n,a=zs,r,c,u,h=Fn,d=Fn,p,g=cl){if(g!==cl&&g!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,c,u,h,d,g,a,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pu extends zi{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,h=Math.floor(a),d=Math.floor(r),p=h+1,g=d+1,_=e/h,v=n/d,y=[],E=[],T=[],S=[];for(let x=0;x<g;x++){const O=x*v-u;for(let N=0;N<p;N++){const C=N*_-c;E.push(C,-O,0),T.push(0,0,1),S.push(N/h),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let O=0;O<h;O++){const N=O+p*x,C=O+p*(x+1),F=O+1+p*(x+1),H=O+1+p*x;y.push(N,C,H),y.push(C,F,H)}this.setIndex(y),this.setAttribute("position",new _a(E,3)),this.setAttribute("normal",new _a(T,3)),this.setAttribute("uv",new _a(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class dp extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B0,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hi extends dp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pE extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mE extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Kc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function gE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function _E(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function kv(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let d=0;d!==e;++d)r[u++]=o[h+d]}return r}function $0(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class ml{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let d=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===d)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vE extends ml{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rv,endingEnd:rv}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,h=r[c],d=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case ov:c=e,h=2*n-a;break;case lv:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=e,h=a}if(d===void 0)switch(this.getSettings_().endingEnd){case ov:u=e,d=2*a-n;break;case lv:u=1,d=a+r[1]-r[0];break;default:u=e-1,d=n}const p=(a-n)*.5,g=this.valueSize;this._weightPrev=p/(n-h),this._weightNext=p/(d-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=e*h,p=d-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(a-n)/(r-n),T=E*E,S=T*E,x=-v*S+2*v*T-v*E,O=(1+v)*S+(-1.5-2*v)*T+(-.5+v)*E+1,N=(-1-y)*S+(1.5+y)*T+.5*E,C=y*S-y*T;for(let F=0;F!==h;++F)c[F]=x*u[g+F]+O*u[p+F]+N*u[d+F]+C*u[_+F];return c}}class xE extends ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=e*h,p=d-h,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[p+v]*_+u[d+v]*g;return c}}class yE extends ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kc(n,this.TimeBufferType),this.values=Kc(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Kc(e.times,Array),values:Kc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new yE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case fl:n=this.InterpolantFactoryMethodDiscrete;break;case hl:n=this.InterpolantFactoryMethodLinear;break;case bh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fl;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const d=a[h];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,d,u),e=!1;break}u=d}if(r!==void 0&&gE(r))for(let h=0,d=r.length;h!==d;++h){const p=r[h];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===bh,c=e.length-1;let u=1;for(let h=1;h<c;++h){let d=!1;const p=e[h],g=e[h+1];if(p!==g&&(h!==1||p!==e[0]))if(r)d=!0;else{const _=h*a,v=_-a,y=_+a;for(let E=0;E!==a;++E){const T=n[_+E];if(T!==n[v+E]||T!==n[y+E]){d=!0;break}}}if(d){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let y=0;y!==a;++y)n[v+y]=n[_+y]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,d=u*a,p=0;p!==a;++p)n[d+p]=n[h+p];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=hl;class jr extends Ai{constructor(e,n,a){super(e,n,a)}}jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=fl;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class ex extends Ai{constructor(e,n,a,r){super(e,n,a,r)}}ex.prototype.ValueTypeName="color";class kr extends Ai{constructor(e,n,a,r){super(e,n,a,r)}}kr.prototype.ValueTypeName="number";class SE extends ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=(a-n)/(r-n);let p=e*h;for(let g=p+h;p!==g;p+=4)rs.slerpFlat(c,0,u,p-h,u,p,d);return c}}class Xr extends Ai{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new SE(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends Ai{constructor(e,n,a){super(e,n,a)}}Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=fl;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends Ai{constructor(e,n,a,r){super(e,n,a,r)}}Wr.prototype.ValueTypeName="vector";class ME{constructor(e="",n=-1,a=[],r=$S){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(TE(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,u=a.length;c!==u;++c)n.push(Ai.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let d=[],p=[];d.push((h+c-1)%c,h,(h+1)%c),p.push(0,1,0);const g=_E(d);d=kv(d,1,g),p=kv(p,1,g),!r&&d[0]===0&&(d.push(c),p.push(p[0])),u.push(new kr(".morphTargetInfluences["+n[h].name+"]",d,p).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,d=e.length;h<d;h++){const p=e[h],g=p.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(p)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,y,E,T){if(y.length!==0){const S=[],x=[];$0(y,S,x,E),S.length!==0&&T.push(new _(v,S,x))}},r=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let d=e.length||-1;const p=e.hierarchy||[];for(let _=0;_<p.length;_++){const v=p[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let T=0;T<v[E].morphTargets.length;T++)y[v[E].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let O=0;O!==v[E].morphTargets.length;++O){const N=v[E];S.push(N.time),x.push(N.morphTarget===T?1:0)}r.push(new kr(".morphTargetInfluence["+T+"]",S,x))}d=y.length*u}else{const y=".bones["+n[_].name+"]";a(Wr,y+".position",v,"pos",r),a(Xr,y+".quaternion",v,"rot",r),a(Wr,y+".scale",v,"scl",r)}}return r.length===0?null:new this(c,d,r,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function EE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return Wr;case"color":return ex;case"quaternion":return Xr;case"bool":case"boolean":return jr;case"string":return Kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function TE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=EE(o.type);if(o.times===void 0){const n=[],a=[];$0(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ns={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class bE{constructor(e,n,a){const r=this;let c=!1,u=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const AE=new bE;class Zr{constructor(e){this.manager=e!==void 0?e:AE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const fa={};class RE extends Error{constructor(e,n){super(e),this.response=n}}class tx extends Zr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=ns.get(e);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(fa[e]!==void 0){fa[e].push({onLoad:n,onProgress:a,onError:r});return}fa[e]=[],fa[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,d=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=fa[e],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let T=0;const S=new ReadableStream({start(x){O();function O(){_.read().then(({done:N,value:C})=>{if(N)x.close();else{T+=C.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:y});for(let H=0,B=g.length;H<B;H++){const X=g[H];X.onProgress&&X.onProgress(F)}x.enqueue(C),O()}},N=>{x.error(N)})}}});return new Response(S)}else throw new RE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(E=>y.decode(E))}}}).then(p=>{ns.add(e,p);const g=fa[e];delete fa[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=fa[e];if(g===void 0)throw this.manager.itemError(e),p;delete fa[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wE extends Zr{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=ns.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const h=dl("img");function d(){g(),ns.add(e,this),n&&n(this),c.manager.itemEnd(e)}function p(_){g(),r&&r(_),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",d,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(e),h.src=e,h}}class CE extends Zr{constructor(e){super(e)}load(e,n,a,r){const c=new Mn,u=new wE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class mu extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zh=new rt,Xv=new j,Wv=new j;class pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fp,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Xv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xv),Wv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wv),n.updateMatrixWorld(),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DE extends pp{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,a=Gr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class UE extends mu{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new DE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qv=new rt,el=new j,Qh=new j;class LE extends pp{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),el.setFromMatrixPosition(e.matrixWorld),a.position.copy(el),Qh.copy(a.position),Qh.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Qh),a.updateMatrixWorld(),r.makeTranslation(-el.x,-el.y,-el.z),qv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qv)}}class NE extends mu{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new LE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mp extends q0{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class OE extends pp{constructor(){super(new mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nx extends mu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new OE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PE extends mu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class IE extends Zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=ns.get(e);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(p=>{n&&n(p),c.manager.itemEnd(e)}).catch(p=>{r&&r(p)});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const d=fetch(e,h).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(p){return ns.add(e,p),n&&n(p),c.manager.itemEnd(e),p}).catch(function(p){r&&r(p),ns.remove(e),c.manager.itemError(e),c.manager.itemEnd(e)});ns.add(e,d),c.manager.itemStart(e)}}class BE extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const gp="\\[\\]\\.:\\/",FE=new RegExp("["+gp+"]","g"),_p="[^"+gp+"]",zE="[^"+gp.replace("\\.","")+"]",HE=/((?:WC+[\/:])*)/.source.replace("WC",_p),GE=/(WCOD+)?/.source.replace("WCOD",zE),VE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_p),kE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_p),XE=new RegExp("^"+HE+GE+VE+kE+"$"),WE=["material","materials","bones","map"];class qE{constructor(e,n,a){const r=a||Ot.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Ot{constructor(e,n,a){this.path=n,this.parsedPath=a||Ot.parseTrackName(n),this.node=Ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Ot.Composite(e,n,a):new Ot(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FE,"")}static parseTrackName(e){const n=XE.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);WE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const d=a(h.children);if(d)return d}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Ot.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let p=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===p){p=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const u=e[r];if(u===void 0){const p=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=qE;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Yv(o,e,n,a){const r=YE(a);switch(n){case D0:return o*e;case L0:return o*e;case N0:return o*e*2;case ip:return o*e/r.components*r.byteLength;case ap:return o*e/r.components*r.byteLength;case O0:return o*e*2/r.components*r.byteLength;case sp:return o*e*2/r.components*r.byteLength;case U0:return o*e*3/r.components*r.byteLength;case mi:return o*e*4/r.components*r.byteLength;case rp:return o*e*4/r.components*r.byteLength;case eu:case tu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(o,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(o,8)*Math.max(e,8)/2;case Ed:case Td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case au:case Hd:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case P0:case Vd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case kd:case Xd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YE(o){switch(o){case xa:case R0:return{byteLength:1,components:1};case ol:case w0:case pl:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case zs:case ep:case Ti:return{byteLength:4,components:1};case C0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ix(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function jE(o){const e=new WeakMap;function n(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,d,p){const g=d.array,_=d.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];o.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(o.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:r,remove:c,update:u}}var KE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",AT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ab=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,db=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:KE,alphahash_pars_fragment:ZE,alphamap_fragment:QE,alphamap_pars_fragment:JE,alphatest_fragment:$E,alphatest_pars_fragment:eT,aomap_fragment:tT,aomap_pars_fragment:nT,batching_pars_vertex:iT,batching_vertex:aT,begin_vertex:sT,beginnormal_vertex:rT,bsdfs:oT,iridescence_fragment:lT,bumpmap_pars_fragment:cT,clipping_planes_fragment:uT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:dT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:_T,common:vT,cube_uv_reflection_fragment:xT,defaultnormal_vertex:yT,displacementmap_pars_vertex:ST,displacementmap_vertex:MT,emissivemap_fragment:ET,emissivemap_pars_fragment:TT,colorspace_fragment:bT,colorspace_pars_fragment:AT,envmap_fragment:RT,envmap_common_pars_fragment:wT,envmap_pars_fragment:CT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:GT,envmap_vertex:UT,fog_vertex:LT,fog_pars_vertex:NT,fog_fragment:OT,fog_pars_fragment:PT,gradientmap_pars_fragment:IT,lightmap_pars_fragment:BT,lights_lambert_fragment:FT,lights_lambert_pars_fragment:zT,lights_pars_begin:HT,lights_toon_fragment:VT,lights_toon_pars_fragment:kT,lights_phong_fragment:XT,lights_phong_pars_fragment:WT,lights_physical_fragment:qT,lights_physical_pars_fragment:YT,lights_fragment_begin:jT,lights_fragment_maps:KT,lights_fragment_end:ZT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:JT,logdepthbuf_pars_vertex:$T,logdepthbuf_vertex:eb,map_fragment:tb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:ab,metalnessmap_fragment:sb,metalnessmap_pars_fragment:rb,morphinstance_vertex:ob,morphcolor_vertex:lb,morphnormal_vertex:cb,morphtarget_pars_vertex:ub,morphtarget_vertex:fb,normal_fragment_begin:hb,normal_fragment_maps:db,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:_b,clearcoat_normal_fragment_begin:vb,clearcoat_normal_fragment_maps:xb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Sb,opaque_fragment:Mb,packing:Eb,premultiplied_alpha_fragment:Tb,project_vertex:bb,dithering_fragment:Ab,dithering_pars_fragment:Rb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Cb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Lb,shadowmask_pars_fragment:Nb,skinbase_vertex:Ob,skinning_pars_vertex:Pb,skinning_vertex:Ib,skinnormal_vertex:Bb,specularmap_fragment:Fb,specularmap_pars_fragment:zb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Gb,transmission_fragment:Vb,transmission_pars_fragment:kb,uv_pars_fragment:Xb,uv_pars_vertex:Wb,uv_vertex:qb,worldpos_vertex:Yb,background_vert:jb,background_frag:Kb,backgroundCube_vert:Zb,backgroundCube_frag:Qb,cube_vert:Jb,cube_frag:$b,depth_vert:eA,depth_frag:tA,distanceRGBA_vert:nA,distanceRGBA_frag:iA,equirect_vert:aA,equirect_frag:sA,linedashed_vert:rA,linedashed_frag:oA,meshbasic_vert:lA,meshbasic_frag:cA,meshlambert_vert:uA,meshlambert_frag:fA,meshmatcap_vert:hA,meshmatcap_frag:dA,meshnormal_vert:pA,meshnormal_frag:mA,meshphong_vert:gA,meshphong_frag:_A,meshphysical_vert:vA,meshphysical_frag:xA,meshtoon_vert:yA,meshtoon_frag:SA,points_vert:MA,points_frag:EA,shadow_vert:TA,shadow_frag:bA,sprite_vert:AA,sprite_frag:RA},Ue={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:In([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:In([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new it(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:In([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:In([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:In([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:In([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:In([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:In([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:In([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:In([Ue.lights,Ue.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Zc={r:0,b:0,g:0},Ds=new Ii,wA=new rt;function CA(o,e,n,a,r,c,u){const h=new it(0);let d=c===!0?0:1,p,g,_=null,v=0,y=null;function E(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?n:e).get(C)),C}function T(N){let C=!1;const F=E(N);F===null?x(h,d):F&&F.isColor&&(x(F,1),C=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(N,C){const F=E(C);F&&(F.isCubeTexture||F.mapping===hu)?(g===void 0&&(g=new Yn(new Yr(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:Vr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ds.copy(C.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(wA.makeRotationFromEuler(Ds)),g.material.toneMapped=Et.getTransfer(F.colorSpace)!==Ht,(_!==F||v!==F.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=F,v=F.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Yn(new pu(2,2),new ss({name:"BackgroundMaterial",uniforms:Vr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Et.getTransfer(F.colorSpace)!==Ht,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||v!==F.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,v=F.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,C){N.getRGB(Zc,W0(o)),a.buffers.color.setClear(Zc.r,Zc.g,Zc.b,C,u)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,C=1){h.set(N),d=C,x(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,x(h,d)},render:T,addToRenderList:S,dispose:O}}function DA(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function h(w,V,le,re,_e){let de=!1;const I=_(re,le,V);c!==I&&(c=I,p(c.object)),de=y(w,re,le,_e),de&&E(w,re,le,_e),_e!==null&&e.update(_e,o.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,C(w,V,le,re),_e!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function d(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function _(w,V,le){const re=le.wireframe===!0;let _e=a[w.id];_e===void 0&&(_e={},a[w.id]=_e);let de=_e[V.id];de===void 0&&(de={},_e[V.id]=de);let I=de[re];return I===void 0&&(I=v(d()),de[re]=I),I}function v(w){const V=[],le=[],re=[];for(let _e=0;_e<n;_e++)V[_e]=0,le[_e]=0,re[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:le,attributeDivisors:re,object:w,attributes:{},index:null}}function y(w,V,le,re){const _e=c.attributes,de=V.attributes;let I=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const U=_e[Y];let ee=de[Y];if(ee===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),U===void 0||U.attribute!==ee||ee&&U.data!==ee.data)return!0;I++}return c.attributesNum!==I||c.index!==re}function E(w,V,le,re){const _e={},de=V.attributes;let I=0;const Z=le.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let U=de[Y];U===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const ee={};ee.attribute=U,U&&U.data&&(ee.data=U.data),_e[Y]=ee,I++}c.attributes=_e,c.attributesNum=I,c.index=re}function T(){const w=c.newAttributes;for(let V=0,le=w.length;V<le;V++)w[V]=0}function S(w){x(w,0)}function x(w,V){const le=c.newAttributes,re=c.enabledAttributes,_e=c.attributeDivisors;le[w]=1,re[w]===0&&(o.enableVertexAttribArray(w),re[w]=1),_e[w]!==V&&(o.vertexAttribDivisor(w,V),_e[w]=V)}function O(){const w=c.newAttributes,V=c.enabledAttributes;for(let le=0,re=V.length;le<re;le++)V[le]!==w[le]&&(o.disableVertexAttribArray(le),V[le]=0)}function N(w,V,le,re,_e,de,I){I===!0?o.vertexAttribIPointer(w,V,le,_e,de):o.vertexAttribPointer(w,V,le,re,_e,de)}function C(w,V,le,re){T();const _e=re.attributes,de=le.getAttributes(),I=V.defaultAttributeValues;for(const Z in de){const Y=de[Z];if(Y.location>=0){let Ee=_e[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),Ee!==void 0){const U=Ee.normalized,ee=Ee.itemSize,xe=e.get(Ee);if(xe===void 0)continue;const Se=xe.buffer,J=xe.type,pe=xe.bytesPerElement,ye=J===o.INT||J===o.UNSIGNED_INT||Ee.gpuType===ep;if(Ee.isInterleavedBufferAttribute){const Ae=Ee.data,Oe=Ae.stride,ot=Ee.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Y.locationSize;Ke++)x(Y.location+Ke,Ae.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ke=0;Ke<Y.locationSize;Ke++)S(Y.location+Ke);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let Ke=0;Ke<Y.locationSize;Ke++)N(Y.location+Ke,ee/Y.locationSize,J,U,Oe*pe,(ot+ee/Y.locationSize*Ke)*pe,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Ae=0;Ae<Y.locationSize;Ae++)x(Y.location+Ae,Ee.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)S(Y.location+Ae);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let Ae=0;Ae<Y.locationSize;Ae++)N(Y.location+Ae,ee/Y.locationSize,J,U,ee*pe,ee/Y.locationSize*Ae*pe,ye)}}else if(I!==void 0){const U=I[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}O()}function F(){X();for(const w in a){const V=a[w];for(const le in V){const re=V[le];for(const _e in re)g(re[_e].object),delete re[_e];delete V[le]}delete a[w]}}function H(w){if(a[w.id]===void 0)return;const V=a[w.id];for(const le in V){const re=V[le];for(const _e in re)g(re[_e].object),delete re[_e];delete V[le]}delete a[w.id]}function B(w){for(const V in a){const le=a[V];if(le[w.id]===void 0)continue;const re=le[w.id];for(const _e in re)g(re[_e].object),delete re[_e];delete le[w.id]}}function X(){D(),u=!0,c!==r&&(c=r,p(c.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:O}}function UA(o,e,n){let a;function r(p){a=p}function c(p,g){o.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(o.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function d(p,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];n.update(E,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function LA(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(B){return!(B!==mi&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==xa&&a.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ti&&!X)}function d(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:F,maxSamples:H}}function NA(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new Ns,h=new st,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,x=o.get(_);if(!r||E===null||E.length===0||c&&!S)c?g(null):p();else{const O=c?0:a,N=O*4;let C=x.clippingState||null;d.value=C,C=g(E,v,N,y);for(let F=0;F!==N;++F)C[F]=n[F];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,y,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=d.value,E!==!0||S===null){const x=y+T*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,C=y;N!==T;++N,C+=4)u.copy(_[N]).applyMatrix4(O,h),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function OA(o){let e=new WeakMap;function n(u,h){return h===_d?u.mapping=Fr:h===vd&&(u.mapping=zr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===_d||h===vd)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new eE(d.height);return p.fromEquirectangularTexture(o,u),e.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Nr=4,jv=[.125,.215,.35,.446,.526,.582],Is=20,Jh=new mp,Kv=new it;let $h=null,ed=0,td=0,nd=!1;const Os=(1+Math.sqrt(5))/2,Lr=1/Os,Zv=[new j(-Os,Lr,0),new j(Os,Lr,0),new j(-Lr,0,Os),new j(Lr,0,Os),new j(0,Os,-Lr),new j(0,Os,Lr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],PA=new j;class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=PA}=c;$h=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,r,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($h,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$h=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:si,minFilter:si,generateMipmaps:!1,type:pl,format:mi,colorSpace:Hn,depthBuffer:!1},r=Jv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IA(c)),this._blurMaterial=BA(c,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Jh)}_sceneToCubeUV(e,n,a,r,c){const d=new Bn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Kv),_.toneMapping=as,_.autoClear=!1;const E=new ts({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),T=new Yn(new Yr,E);let S=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,S=!0):(E.color.copy(Kv),S=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(d.up.set(0,p[O],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[O],c.y,c.z)):N===1?(d.up.set(0,0,p[O]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[O],c.z)):(d.up.set(0,p[O],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[O]));const C=this._cubeSize;Qc(r,N*C,O>2?C:0,C,C),_.setRenderTarget(r),S&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=x}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Fr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$v());const c=r?this._cubemapMaterial:this._equirectMaterial,u=new Yn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const d=this._cubeSize;Qc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,Jh)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let c=1;c<r;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Zv[(r-c-1)%Zv.length];this._blur(e,c-1,c,u,h)}n.autoClear=a}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Yn(this._lodPlanes[r],p),v=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Is-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Is;S>Is&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Is}`);const x=[];let O=0;for(let B=0;B<Is;++B){const X=B/T,D=Math.exp(-X*X/2);x.push(D),B===0?O+=D:B<S&&(O+=2*D)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-a;const C=this._sizeLods[r],F=3*C*(r>N-Nr?r-N+Nr:0),H=4*(this._cubeSize-C);Qc(n,F,H,3*C,2*C),d.setRenderTarget(n),d.render(_,Jh)}}function IA(o){const e=[],n=[],a=[];let r=o;const c=o-Nr+1+jv.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);n.push(h);let d=1/h;u>o-Nr?d=jv[u-o+Nr-1]:u===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,S=2,x=1,O=new Float32Array(T*E*y),N=new Float32Array(S*E*y),C=new Float32Array(x*E*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,X=H>2?0:-1,D=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];O.set(D,T*E*H),N.set(v,S*E*H);const w=[H,H,H,H,H,H];C.set(w,x*E*H)}const F=new zi;F.setAttribute("position",new zn(O,T)),F.setAttribute("uv",new zn(N,S)),F.setAttribute("faceIndex",new zn(C,x)),e.push(F),r>Nr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function Jv(o,e,n){const a=new Hs(o,e,n);return a.texture.mapping=hu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Qc(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function BA(o,e,n){const a=new Float32Array(Is),r=new j(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function $v(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function e0(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function vp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FA(o){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===_d||d===vd,g=d===Fr||d===zr;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new Qv(o)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new Qv(o)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function r(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function zA(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&su("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function HA(o,e,n,a){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let N=0,C=O.length;N<C;N+=3){const F=O[N+0],H=O[N+1],B=O[N+2];v.push(F,H,H,B,B,F)}}else if(E!==void 0){const O=E.array;T=E.version;for(let N=0,C=O.length/3-1;N<C;N+=3){const F=N+0,H=N+1,B=N+2;v.push(F,H,H,B,B,F)}}else return;const S=new(z0(v)?X0:k0)(v,1);S.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function GA(o,e,n){let a;function r(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function d(v,y){o.drawElements(a,y,c,v*u),n.update(y,a,1)}function p(v,y,E){E!==0&&(o.drawElementsInstanced(a,y,c,v*u,E),n.update(y,a,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function _(v,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/u,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,T,0,E);let x=0;for(let O=0;O<E;O++)x+=y[O]*T[O];n.update(x,a,1)}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function VA(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function kA(o,e,n){const a=new WeakMap,r=new Dt;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let w=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let F=h.attributes.position.count*C,H=1;F>e.maxTextureSize&&(H=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const B=new Float32Array(F*H*4*_),X=new H0(B,F,H,_);X.type=Ti,X.needsUpdate=!0;const D=C*4;for(let V=0;V<_;V++){const le=x[V],re=O[V],_e=N[V],de=F*H*4*V;for(let I=0;I<le.count;I++){const Z=I*D;E===!0&&(r.fromBufferAttribute(le,I),B[de+Z+0]=r.x,B[de+Z+1]=r.y,B[de+Z+2]=r.z,B[de+Z+3]=0),T===!0&&(r.fromBufferAttribute(re,I),B[de+Z+4]=r.x,B[de+Z+5]=r.y,B[de+Z+6]=r.z,B[de+Z+7]=0),S===!0&&(r.fromBufferAttribute(_e,I),B[de+Z+8]=r.x,B[de+Z+9]=r.y,B[de+Z+10]=r.z,B[de+Z+11]=_e.itemSize===4?r.w:1)}}v={count:_,texture:X,size:new Tt(F,H)},a.set(h,v),h.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",T),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function XA(o,e,n,a){let r=new WeakMap;function c(d){const p=a.render.frame,g=d.geometry,_=e.get(d,g);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const ax=new Mn,t0=new J0(1,1),sx=new H0,rx=new BM,ox=new Y0,n0=[],i0=[],a0=new Float32Array(16),s0=new Float32Array(9),r0=new Float32Array(4);function Qr(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=n0[r];if(c===void 0&&(c=new Float32Array(r),n0[r]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,o[u].toArray(c,h)}return c}function dn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function pn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function gu(o,e){let n=i0[e];n===void 0&&(n=new Int32Array(e),i0[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function WA(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function qA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;o.uniform2fv(this.addr,e),pn(n,e)}}function YA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dn(n,e))return;o.uniform3fv(this.addr,e),pn(n,e)}}function jA(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;o.uniform4fv(this.addr,e),pn(n,e)}}function KA(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;r0.set(a),o.uniformMatrix2fv(this.addr,!1,r0),pn(n,a)}}function ZA(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;s0.set(a),o.uniformMatrix3fv(this.addr,!1,s0),pn(n,a)}}function QA(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;a0.set(a),o.uniformMatrix4fv(this.addr,!1,a0),pn(n,a)}}function JA(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function $A(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;o.uniform2iv(this.addr,e),pn(n,e)}}function e1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;o.uniform3iv(this.addr,e),pn(n,e)}}function t1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;o.uniform4iv(this.addr,e),pn(n,e)}}function n1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function i1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;o.uniform2uiv(this.addr,e),pn(n,e)}}function a1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;o.uniform3uiv(this.addr,e),pn(n,e)}}function s1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;o.uniform4uiv(this.addr,e),pn(n,e)}}function r1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(t0.compareFunction=F0,c=t0):c=ax,n.setTexture2D(e||c,r)}function o1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||rx,r)}function l1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||ox,r)}function c1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||sx,r)}function u1(o){switch(o){case 5126:return WA;case 35664:return qA;case 35665:return YA;case 35666:return jA;case 35674:return KA;case 35675:return ZA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return $A;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function f1(o,e){o.uniform1fv(this.addr,e)}function h1(o,e){const n=Qr(e,this.size,2);o.uniform2fv(this.addr,n)}function d1(o,e){const n=Qr(e,this.size,3);o.uniform3fv(this.addr,n)}function p1(o,e){const n=Qr(e,this.size,4);o.uniform4fv(this.addr,n)}function m1(o,e){const n=Qr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function g1(o,e){const n=Qr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function _1(o,e){const n=Qr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function v1(o,e){o.uniform1iv(this.addr,e)}function x1(o,e){o.uniform2iv(this.addr,e)}function y1(o,e){o.uniform3iv(this.addr,e)}function S1(o,e){o.uniform4iv(this.addr,e)}function M1(o,e){o.uniform1uiv(this.addr,e)}function E1(o,e){o.uniform2uiv(this.addr,e)}function T1(o,e){o.uniform3uiv(this.addr,e)}function b1(o,e){o.uniform4uiv(this.addr,e)}function A1(o,e,n){const a=this.cache,r=e.length,c=gu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||ax,c[u])}function R1(o,e,n){const a=this.cache,r=e.length,c=gu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||rx,c[u])}function w1(o,e,n){const a=this.cache,r=e.length,c=gu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||ox,c[u])}function C1(o,e,n){const a=this.cache,r=e.length,c=gu(n,r);dn(a,c)||(o.uniform1iv(this.addr,c),pn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||sx,c[u])}function D1(o){switch(o){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return y1;case 35669:case 35673:return S1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return C1}}class U1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=u1(n.type)}}class L1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D1(n.type)}}class N1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(e,n[h.id],a)}}}const id=/(\w+)(\])?(\[|\.)?/g;function o0(o,e){o.seq.push(e),o.map[e.id]=e}function O1(o,e,n){const a=o.name,r=a.length;for(id.lastIndex=0;;){const c=id.exec(a),u=id.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===r){o0(n,p===void 0?new U1(h,o,e):new L1(h,o,e));break}else{let _=n.map[h];_===void 0&&(_=new N1(h),o0(n,_)),n=_}}}class ru{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const c=e.getActiveUniform(n,r),u=e.getUniformLocation(n,c.name);O1(c,u,this)}}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=a[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function l0(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const P1=37297;let I1=0;function B1(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const c0=new st;function F1(o){Et._getMatrix(c0,Et.workingColorSpace,o);const e=`mat3( ${c0.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(o)){case lu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function u0(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(a&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+r+`

`+B1(o.getShaderSource(e),u)}else return r}function z1(o,e){const n=F1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function H1(o,e){let n;switch(e){case WS:n="Linear";break;case qS:n="Reinhard";break;case YS:n="Cineon";break;case jS:n="ACESFilmic";break;case ZS:n="AgX";break;case QS:n="Neutral";break;case KS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jc=new j;function G1(){Et.getLuminanceCoefficients(Jc);const o=Jc.x.toFixed(4),e=Jc.y.toFixed(4),n=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function k1(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function X1(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:h}}return n}function il(o){return o!==""}function f0(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(o){return o.replace(W1,Y1)}const q1=new Map;function Y1(o,e){let n=lt[e];if(n===void 0){const a=q1.get(e);if(a!==void 0)n=lt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(o){return o.replace(j1,K1)}function K1(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function p0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===E0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ha&&(e="SHADOWMAP_TYPE_VSM"),e}function Q1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Fr:case zr:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case T0:e="ENVMAP_BLENDING_MULTIPLY";break;case kS:e="ENVMAP_BLENDING_MIX";break;case XS:e="ENVMAP_BLENDING_ADD";break}return e}function eR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function tR(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=Z1(n),p=Q1(n),g=J1(n),_=$1(n),v=eR(n),y=V1(n),E=k1(c),T=r.createProgram();let S,x,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(il).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(il).join(`
`),x.length>0&&(x+=`
`)):(S=[p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),x=[p0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==as?"#define TONE_MAPPING":"",n.toneMapping!==as?lt.tonemapping_pars_fragment:"",n.toneMapping!==as?H1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,z1("linearToOutputTexel",n.outputColorSpace),G1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(il).join(`
`)),u=Kd(u),u=f0(u,n),u=h0(u,n),h=Kd(h),h=f0(h,n),h=h0(h,n),u=d0(u),h=d0(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=O+S+u,C=O+x+h,F=l0(r,r.VERTEX_SHADER,N),H=l0(r,r.FRAGMENT_SHADER,C);r.attachShader(T,F),r.attachShader(T,H),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function B(V){if(o.debug.checkShaderErrors){const le=r.getProgramInfoLog(T).trim(),re=r.getShaderInfoLog(F).trim(),_e=r.getShaderInfoLog(H).trim();let de=!0,I=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(de=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,F,H);else{const Z=u0(r,F,"vertex"),Y=u0(r,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+Z+`
`+Y)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(re===""||_e==="")&&(I=!1);I&&(V.diagnostics={runnable:de,programLog:le,vertexShader:{log:re,prefix:S},fragmentShader:{log:_e,prefix:x}})}r.deleteShader(F),r.deleteShader(H),X=new ru(r,T),D=X1(r,T)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(T,P1)),w},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=H,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new aR(e),n.set(e,a)),a}}class aR{constructor(e){this.id=nR++,this.code=e,this.usedTimes=0}}function sR(o,e,n,a,r,c,u){const h=new G0,d=new iR,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,w,V,le,re){const _e=le.fog,de=re.geometry,I=D.isMeshStandardMaterial?le.environment:null,Z=(D.isMeshStandardMaterial?n:e).get(D.envMap||I),Y=Z&&Z.mapping===hu?Z.image.height:null,Ee=E[D.type];D.precision!==null&&(y=r.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const U=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ee=U!==void 0?U.length:0;let xe=0;de.morphAttributes.position!==void 0&&(xe=1),de.morphAttributes.normal!==void 0&&(xe=2),de.morphAttributes.color!==void 0&&(xe=3);let Se,J,pe,ye;if(Ee){const At=Ni[Ee];Se=At.vertexShader,J=At.fragmentShader}else Se=D.vertexShader,J=D.fragmentShader,d.update(D),pe=d.getVertexShaderID(D),ye=d.getFragmentShaderID(D);const Ae=o.getRenderTarget(),Oe=o.state.buffers.depth.getReversed(),ot=re.isInstancedMesh===!0,Ke=re.isBatchedMesh===!0,Xt=!!D.map,Gt=!!D.matcap,ft=!!Z,z=!!D.aoMap,Gn=!!D.lightMap,vt=!!D.bumpMap,tt=!!D.normalMap,Xe=!!D.displacementMap,Pt=!!D.emissiveMap,Ge=!!D.metalnessMap,L=!!D.roughnessMap,A=D.anisotropy>0,te=D.clearcoat>0,ve=D.dispersion>0,Me=D.iridescence>0,ue=D.sheen>0,Be=D.transmission>0,Re=A&&!!D.anisotropyMap,we=te&&!!D.clearcoatMap,xt=te&&!!D.clearcoatNormalMap,be=te&&!!D.clearcoatRoughnessMap,ze=Me&&!!D.iridescenceMap,Ye=Me&&!!D.iridescenceThicknessMap,Ze=ue&&!!D.sheenColorMap,Pe=ue&&!!D.sheenRoughnessMap,ct=!!D.specularMap,et=!!D.specularColorMap,It=!!D.specularIntensityMap,k=Be&&!!D.transmissionMap,Le=Be&&!!D.thicknessMap,oe=!!D.gradientMap,me=!!D.alphaMap,Ie=D.alphaTest>0,Ne=!!D.alphaHash,nt=!!D.extensions;let Wt=as;D.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Wt=o.toneMapping);const an={shaderID:Ee,shaderType:D.type,shaderName:D.name,vertexShader:Se,fragmentShader:J,defines:D.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Ke,batchingColor:Ke&&re._colorsTexture!==null,instancing:ot,instancingColor:ot&&re.instanceColor!==null,instancingMorph:ot&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ae===null?o.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Hn,alphaToCoverage:!!D.alphaToCoverage,map:Xt,matcap:Gt,envMap:ft,envMapMode:ft&&Z.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:Gn,bumpMap:vt,normalMap:tt,displacementMap:v&&Xe,emissiveMap:Pt,normalMapObjectSpace:tt&&D.normalMapType===iM,normalMapTangentSpace:tt&&D.normalMapType===B0,metalnessMap:Ge,roughnessMap:L,anisotropy:A,anisotropyMap:Re,clearcoat:te,clearcoatMap:we,clearcoatNormalMap:xt,clearcoatRoughnessMap:be,dispersion:ve,iridescence:Me,iridescenceMap:ze,iridescenceThicknessMap:Ye,sheen:ue,sheenColorMap:Ze,sheenRoughnessMap:Pe,specularMap:ct,specularColorMap:et,specularIntensityMap:It,transmission:Be,transmissionMap:k,thicknessMap:Le,gradientMap:oe,opaque:D.transparent===!1&&D.blending===Or&&D.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:Ne,combine:D.combine,mapUv:Xt&&T(D.map.channel),aoMapUv:z&&T(D.aoMap.channel),lightMapUv:Gn&&T(D.lightMap.channel),bumpMapUv:vt&&T(D.bumpMap.channel),normalMapUv:tt&&T(D.normalMap.channel),displacementMapUv:Xe&&T(D.displacementMap.channel),emissiveMapUv:Pt&&T(D.emissiveMap.channel),metalnessMapUv:Ge&&T(D.metalnessMap.channel),roughnessMapUv:L&&T(D.roughnessMap.channel),anisotropyMapUv:Re&&T(D.anisotropyMap.channel),clearcoatMapUv:we&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:xt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(D.sheenRoughnessMap.channel),specularMapUv:ct&&T(D.specularMap.channel),specularColorMapUv:et&&T(D.specularColorMap.channel),specularIntensityMapUv:It&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:Le&&T(D.thicknessMap.channel),alphaMapUv:me&&T(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(tt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!de.attributes.uv&&(Xt||me),fog:!!_e,useFog:D.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Oe,skinning:re.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Xt&&D.map.isVideoTexture===!0&&Et.getTransfer(D.map.colorSpace)===Ht,decodeVideoTextureEmissive:Pt&&D.emissiveMap.isVideoTexture===!0&&Et.getTransfer(D.emissiveMap.colorSpace)===Ht,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Oi,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:nt&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&D.extensions.multiDraw===!0||Ke)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=p.has(1),an.vertexUv2s=p.has(2),an.vertexUv3s=p.has(3),p.clear(),an}function x(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(O(w,D),N(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function N(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=E[D.type];let V;if(w){const le=Ni[w];V=ZM.clone(le.uniforms)}else V=D.uniforms;return V}function F(D,w){let V;for(let le=0,re=g.length;le<re;le++){const _e=g[le];if(_e.cacheKey===w){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new tR(o,w,D,c),g.push(V)),V}function H(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function B(D){d.remove(D)}function X(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:F,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:X}}function rR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function oR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function m0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function g0(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,E,T,S){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},o[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=S),e++,x}function h(_,v,y,E,T,S){const x=u(_,v,y,E,T,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function d(_,v,y,E,T,S){const x=u(_,v,y,E,T,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function p(_,v){n.length>1&&n.sort(_||oR),a.length>1&&a.sort(v||m0),r.length>1&&r.sort(v||m0)}function g(){for(let _=e,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:h,unshift:d,finish:g,sort:p}}function lR(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new g0,o.set(a,[u])):r>=c.length?(u=new g0,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function cR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new it};break;case"SpotLight":n={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=n,n}}}function uR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let fR=0;function hR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function dR(o){const e=new cR,n=uR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new j);const r=new j,c=new rt,u=new rt;function h(p){let g=0,_=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let y=0,E=0,T=0,S=0,x=0,O=0,N=0,C=0,F=0,H=0,B=0;p.sort(hR);for(let D=0,w=p.length;D<w;D++){const V=p[D],le=V.color,re=V.intensity,_e=V.distance,de=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=le.r*re,_+=le.g*re,v+=le.b*re;else if(V.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(V.sh.coefficients[I],re);B++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,Y=n.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=de,a.directionalShadowMatrix[y]=V.shadow.matrix,O++}a.directional[y]=I,y++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(le).multiplyScalar(re),I.distance=_e,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,a.spot[T]=I;const Z=V.shadow;if(V.map&&(a.spotLightMap[F]=V.map,F++,Z.updateMatrices(V),V.castShadow&&H++),a.spotLightMatrix[T]=Z.matrix,V.castShadow){const Y=n.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,a.spotShadow[T]=Y,a.spotShadowMap[T]=de,C++}T++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(le).multiplyScalar(re),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=I,S++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const Z=V.shadow,Y=n.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,a.pointShadow[E]=Y,a.pointShadowMap[E]=de,a.pointShadowMatrix[E]=V.shadow.matrix,N++}a.point[E]=I,E++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(re),I.groundColor.copy(V.groundColor).multiplyScalar(re),a.hemi[x]=I,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):(a.rectAreaLTC1=Ue.LTC_HALF_1,a.rectAreaLTC2=Ue.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==O||X.numPointShadows!==N||X.numSpotShadows!==C||X.numSpotMaps!==F||X.numLightProbes!==B)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=C+F-H,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=B,X.directionalLength=y,X.pointLength=E,X.spotLength=T,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=O,X.numPointShadows=N,X.numSpotShadows=C,X.numSpotMaps=F,X.numLightProbes=B,a.version=fR++)}function d(p,g){let _=0,v=0,y=0,E=0,T=0;const S=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const N=p[x];if(N.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),_++}else if(N.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(S),u.identity(),c.copy(N.matrixWorld),c.premultiply(S),u.extractRotation(c),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(S),v++}else if(N.isHemisphereLight){const C=a.hemi[T];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:h,setupView:d,state:a}}function _0(o){const e=new dR(o),n=[],a=[];function r(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function d(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function pR(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let h;return u===void 0?(h=new _0(o),e.set(r,[h])):c>=u.length?(h=new _0(o),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const mR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _R(o,e,n){let a=new fp;const r=new Tt,c=new Tt,u=new Dt,h=new pE({depthPacking:nM}),d=new mE,p={},g=n.maxTextureSize,_={[va]:jn,[jn]:va,[Oi]:Oi},v=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:mR,fragmentShader:gR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Yn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E0;let x=this.type;this.render=function(H,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),le=o.state;le.setBlending(is),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const re=x!==ha&&this.type===ha,_e=x===ha&&this.type!==ha;for(let de=0,I=H.length;de<I;de++){const Z=H[de],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const Ee=Y.getFrameExtents();if(r.multiply(Ee),c.copy(Y.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/Ee.x),r.x=c.x*Ee.x,Y.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/Ee.y),r.y=c.y*Ee.y,Y.mapSize.y=c.y)),Y.map===null||re===!0||_e===!0){const ee=this.type!==ha?{minFilter:Fn,magFilter:Fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Hs(r.x,r.y,ee),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let ee=0;ee<U;ee++){const xe=Y.getViewport(ee);u.set(c.x*xe.x,c.y*xe.y,c.x*xe.z,c.y*xe.w),le.viewport(u),Y.updateMatrices(Z,ee),a=Y.getFrustum(),C(B,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ha&&O(Y,X),Y.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(D,w,V)};function O(H,B){const X=e.update(T);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Hs(r.x,r.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,X,v,T,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,X,y,T,null)}function N(H,B,X,D){let w=null;const V=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=X.isPointLight===!0?d:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const le=w.uuid,re=B.uuid;let _e=p[le];_e===void 0&&(_e={},p[le]=_e);let de=_e[re];de===void 0&&(de=w.clone(),_e[re]=de,B.addEventListener("dispose",F)),w=de}if(w.visible=B.visible,w.wireframe=B.wireframe,D===ha?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const le=o.properties.get(w);le.light=X}return w}function C(H,B,X,D,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===ha)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const re=e.update(H),_e=H.material;if(Array.isArray(_e)){const de=re.groups;for(let I=0,Z=de.length;I<Z;I++){const Y=de[I],Ee=_e[Y.materialIndex];if(Ee&&Ee.visible){const U=N(H,Ee,D,w);H.onBeforeShadow(o,H,B,X,re,U,Y),o.renderBufferDirect(X,null,re,U,H,Y),H.onAfterShadow(o,H,B,X,re,U,Y)}}}else if(_e.visible){const de=N(H,_e,D,w);H.onBeforeShadow(o,H,B,X,re,de,null),o.renderBufferDirect(X,null,re,de,H,null),H.onAfterShadow(o,H,B,X,re,de,null)}}const le=H.children;for(let re=0,_e=le.length;re<_e;re++)C(le[re],B,X,D,w)}function F(H){H.target.removeEventListener("dispose",F);for(const X in p){const D=p[X],w=H.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const vR={[ud]:fd,[hd]:md,[dd]:gd,[Br]:pd,[fd]:ud,[md]:hd,[gd]:dd,[pd]:Br};function xR(o,e){function n(){let k=!1;const Le=new Dt;let oe=null;const me=new Dt(0,0,0,0);return{setMask:function(Ie){oe!==Ie&&!k&&(o.colorMask(Ie,Ie,Ie,Ie),oe=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Ne,nt,Wt,an){an===!0&&(Ie*=Wt,Ne*=Wt,nt*=Wt),Le.set(Ie,Ne,nt,Wt),me.equals(Le)===!1&&(o.clearColor(Ie,Ne,nt,Wt),me.copy(Le))},reset:function(){k=!1,oe=null,me.set(-1,0,0,0)}}}function a(){let k=!1,Le=!1,oe=null,me=null,Ie=null;return{setReversed:function(Ne){if(Le!==Ne){const nt=e.get("EXT_clip_control");Ne?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Le=Ne;const Wt=Ie;Ie=null,this.setClear(Wt)}},getReversed:function(){return Le},setTest:function(Ne){Ne?Ae(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function(Ne){oe!==Ne&&!k&&(o.depthMask(Ne),oe=Ne)},setFunc:function(Ne){if(Le&&(Ne=vR[Ne]),me!==Ne){switch(Ne){case ud:o.depthFunc(o.NEVER);break;case fd:o.depthFunc(o.ALWAYS);break;case hd:o.depthFunc(o.LESS);break;case Br:o.depthFunc(o.LEQUAL);break;case dd:o.depthFunc(o.EQUAL);break;case pd:o.depthFunc(o.GEQUAL);break;case md:o.depthFunc(o.GREATER);break;case gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}me=Ne}},setLocked:function(Ne){k=Ne},setClear:function(Ne){Ie!==Ne&&(Le&&(Ne=1-Ne),o.clearDepth(Ne),Ie=Ne)},reset:function(){k=!1,oe=null,me=null,Ie=null,Le=!1}}}function r(){let k=!1,Le=null,oe=null,me=null,Ie=null,Ne=null,nt=null,Wt=null,an=null;return{setTest:function(At){k||(At?Ae(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(At){Le!==At&&!k&&(o.stencilMask(At),Le=At)},setFunc:function(At,Kn,mn){(oe!==At||me!==Kn||Ie!==mn)&&(o.stencilFunc(At,Kn,mn),oe=At,me=Kn,Ie=mn)},setOp:function(At,Kn,mn){(Ne!==At||nt!==Kn||Wt!==mn)&&(o.stencilOp(At,Kn,mn),Ne=At,nt=Kn,Wt=mn)},setLocked:function(At){k=At},setClear:function(At){an!==At&&(o.clearStencil(At),an=At)},reset:function(){k=!1,Le=null,oe=null,me=null,Ie=null,Ne=null,nt=null,Wt=null,an=null}}}const c=new n,u=new a,h=new r,d=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,O=null,N=null,C=null,F=null,H=null,B=new it(0,0,0),X=0,D=!1,w=null,V=null,le=null,re=null,_e=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=Z>=2);let Ee=null,U={};const ee=o.getParameter(o.SCISSOR_BOX),xe=o.getParameter(o.VIEWPORT),Se=new Dt().fromArray(ee),J=new Dt().fromArray(xe);function pe(k,Le,oe,me){const Ie=new Uint8Array(4),Ne=o.createTexture();o.bindTexture(k,Ne),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let nt=0;nt<oe;nt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,me,0,o.RGBA,o.UNSIGNED_BYTE,Ie):o.texImage2D(Le+nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ie);return Ne}const ye={};ye[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ae(o.DEPTH_TEST),u.setFunc(Br),vt(!1),tt(tv),Ae(o.CULL_FACE),z(is);function Ae(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Oe(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function ot(k,Le){return _[k]!==Le?(o.bindFramebuffer(k,Le),_[k]=Le,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Le),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(k,Le){let oe=y,me=!1;if(k){oe=v.get(Le),oe===void 0&&(oe=[],v.set(Le,oe));const Ie=k.textures;if(oe.length!==Ie.length||oe[0]!==o.COLOR_ATTACHMENT0){for(let Ne=0,nt=Ie.length;Ne<nt;Ne++)oe[Ne]=o.COLOR_ATTACHMENT0+Ne;oe.length=Ie.length,me=!0}}else oe[0]!==o.BACK&&(oe[0]=o.BACK,me=!0);me&&o.drawBuffers(oe)}function Xt(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Gt={[Ps]:o.FUNC_ADD,[AS]:o.FUNC_SUBTRACT,[RS]:o.FUNC_REVERSE_SUBTRACT};Gt[wS]=o.MIN,Gt[CS]=o.MAX;const ft={[DS]:o.ZERO,[US]:o.ONE,[LS]:o.SRC_COLOR,[ld]:o.SRC_ALPHA,[FS]:o.SRC_ALPHA_SATURATE,[IS]:o.DST_COLOR,[OS]:o.DST_ALPHA,[NS]:o.ONE_MINUS_SRC_COLOR,[cd]:o.ONE_MINUS_SRC_ALPHA,[BS]:o.ONE_MINUS_DST_COLOR,[PS]:o.ONE_MINUS_DST_ALPHA,[zS]:o.CONSTANT_COLOR,[HS]:o.ONE_MINUS_CONSTANT_COLOR,[GS]:o.CONSTANT_ALPHA,[VS]:o.ONE_MINUS_CONSTANT_ALPHA};function z(k,Le,oe,me,Ie,Ne,nt,Wt,an,At){if(k===is){T===!0&&(Oe(o.BLEND),T=!1);return}if(T===!1&&(Ae(o.BLEND),T=!0),k!==bS){if(k!==S||At!==D){if((x!==Ps||C!==Ps)&&(o.blendEquation(o.FUNC_ADD),x=Ps,C=Ps),At)switch(k){case Or:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFunc(o.ONE,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case av:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Or:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case av:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,N=null,F=null,H=null,B.set(0,0,0),X=0,S=k,D=At}return}Ie=Ie||Le,Ne=Ne||oe,nt=nt||me,(Le!==x||Ie!==C)&&(o.blendEquationSeparate(Gt[Le],Gt[Ie]),x=Le,C=Ie),(oe!==O||me!==N||Ne!==F||nt!==H)&&(o.blendFuncSeparate(ft[oe],ft[me],ft[Ne],ft[nt]),O=oe,N=me,F=Ne,H=nt),(Wt.equals(B)===!1||an!==X)&&(o.blendColor(Wt.r,Wt.g,Wt.b,an),B.copy(Wt),X=an),S=k,D=!1}function Gn(k,Le){k.side===Oi?Oe(o.CULL_FACE):Ae(o.CULL_FACE);let oe=k.side===jn;Le&&(oe=!oe),vt(oe),k.blending===Or&&k.transparent===!1?z(is):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const me=k.stencilWrite;h.setTest(me),me&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ae(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function tt(k){k!==MS?(Ae(o.CULL_FACE),k!==V&&(k===tv?o.cullFace(o.BACK):k===ES?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),V=k}function Xe(k){k!==le&&(I&&o.lineWidth(k),le=k)}function Pt(k,Le,oe){k?(Ae(o.POLYGON_OFFSET_FILL),(re!==Le||_e!==oe)&&(o.polygonOffset(Le,oe),re=Le,_e=oe)):Oe(o.POLYGON_OFFSET_FILL)}function Ge(k){k?Ae(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+de-1),Ee!==k&&(o.activeTexture(k),Ee=k)}function A(k,Le,oe){oe===void 0&&(Ee===null?oe=o.TEXTURE0+de-1:oe=Ee);let me=U[oe];me===void 0&&(me={type:void 0,texture:void 0},U[oe]=me),(me.type!==k||me.texture!==Le)&&(Ee!==oe&&(o.activeTexture(oe),Ee=oe),o.bindTexture(k,Le||ye[k]),me.type=k,me.texture=Le)}function te(){const k=U[Ee];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ve(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(k){Se.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Se.copy(k))}function Pe(k){J.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function ct(k,Le){let oe=p.get(Le);oe===void 0&&(oe=new WeakMap,p.set(Le,oe));let me=oe.get(k);me===void 0&&(me=o.getUniformBlockIndex(Le,k.name),oe.set(k,me))}function et(k,Le){const me=p.get(Le).get(k);d.get(Le)!==me&&(o.uniformBlockBinding(Le,me,k.__bindingPointIndex),d.set(Le,me))}function It(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Ee=null,U={},_={},v=new WeakMap,y=[],E=null,T=!1,S=null,x=null,O=null,N=null,C=null,F=null,H=null,B=new it(0,0,0),X=0,D=!1,w=null,V=null,le=null,re=null,_e=null,Se.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ae,disable:Oe,bindFramebuffer:ot,drawBuffers:Ke,useProgram:Xt,setBlending:z,setMaterial:Gn,setFlipSided:vt,setCullFace:tt,setLineWidth:Xe,setPolygonOffset:Pt,setScissorTest:Ge,activeTexture:L,bindTexture:A,unbindTexture:te,compressedTexImage2D:ve,compressedTexImage3D:Me,texImage2D:ze,texImage3D:Ye,updateUBOMapping:ct,uniformBlockBinding:et,texStorage2D:xt,texStorage3D:be,texSubImage2D:ue,texSubImage3D:Be,compressedTexSubImage2D:Re,compressedTexSubImage3D:we,scissor:Ze,viewport:Pe,reset:It}}function yR(o,e,n,a,r,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Tt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return y?new OffscreenCanvas(L,A):dl("canvas")}function T(L,A,te){let ve=1;const Me=Ge(L);if((Me.width>te||Me.height>te)&&(ve=te/Math.max(Me.width,Me.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(ve*Me.width),Be=Math.floor(ve*Me.height);_===void 0&&(_=E(ue,Be));const Re=A?E(ue,Be):_;return Re.width=ue,Re.height=Be,Re.getContext("2d").drawImage(L,0,0,ue,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ue+"x"+Be+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,A,te,ve,Me=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=A;if(A===o.RED&&(te===o.FLOAT&&(ue=o.R32F),te===o.HALF_FLOAT&&(ue=o.R16F),te===o.UNSIGNED_BYTE&&(ue=o.R8)),A===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.R8UI),te===o.UNSIGNED_SHORT&&(ue=o.R16UI),te===o.UNSIGNED_INT&&(ue=o.R32UI),te===o.BYTE&&(ue=o.R8I),te===o.SHORT&&(ue=o.R16I),te===o.INT&&(ue=o.R32I)),A===o.RG&&(te===o.FLOAT&&(ue=o.RG32F),te===o.HALF_FLOAT&&(ue=o.RG16F),te===o.UNSIGNED_BYTE&&(ue=o.RG8)),A===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.RG8UI),te===o.UNSIGNED_SHORT&&(ue=o.RG16UI),te===o.UNSIGNED_INT&&(ue=o.RG32UI),te===o.BYTE&&(ue=o.RG8I),te===o.SHORT&&(ue=o.RG16I),te===o.INT&&(ue=o.RG32I)),A===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),te===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),te===o.UNSIGNED_INT&&(ue=o.RGB32UI),te===o.BYTE&&(ue=o.RGB8I),te===o.SHORT&&(ue=o.RGB16I),te===o.INT&&(ue=o.RGB32I)),A===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),te===o.UNSIGNED_INT&&(ue=o.RGBA32UI),te===o.BYTE&&(ue=o.RGBA8I),te===o.SHORT&&(ue=o.RGBA16I),te===o.INT&&(ue=o.RGBA32I)),A===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),A===o.RGBA){const Be=Me?lu:Et.getTransfer(ve);te===o.FLOAT&&(ue=o.RGBA32F),te===o.HALF_FLOAT&&(ue=o.RGBA16F),te===o.UNSIGNED_BYTE&&(ue=Be===Ht?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(L,A){let te;return L?A===null||A===zs||A===ll?te=o.DEPTH24_STENCIL8:A===Ti?te=o.DEPTH32F_STENCIL8:A===ol&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zs||A===ll?te=o.DEPTH_COMPONENT24:A===Ti?te=o.DEPTH_COMPONENT32F:A===ol&&(te=o.DEPTH_COMPONENT16),te}function F(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Fn&&L.minFilter!==si?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function H(L){const A=L.target;A.removeEventListener("dispose",H),X(A),A.isVideoTexture&&g.delete(A)}function B(L){const A=L.target;A.removeEventListener("dispose",B),w(A)}function X(L){const A=a.get(L);if(A.__webglInit===void 0)return;const te=L.source,ve=v.get(te);if(ve){const Me=ve[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&D(L),Object.keys(ve).length===0&&v.delete(te)}a.remove(L)}function D(L){const A=a.get(L);o.deleteTexture(A.__webglTexture);const te=L.source,ve=v.get(te);delete ve[A.__cacheKey],u.memory.textures--}function w(L){const A=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(A.__webglFramebuffer[ve]))for(let Me=0;Me<A.__webglFramebuffer[ve].length;Me++)o.deleteFramebuffer(A.__webglFramebuffer[ve][Me]);else o.deleteFramebuffer(A.__webglFramebuffer[ve]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ve])}else{if(Array.isArray(A.__webglFramebuffer))for(let ve=0;ve<A.__webglFramebuffer.length;ve++)o.deleteFramebuffer(A.__webglFramebuffer[ve]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ve=0;ve<A.__webglColorRenderbuffer.length;ve++)A.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ve]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=L.textures;for(let ve=0,Me=te.length;ve<Me;ve++){const ue=a.get(te[ve]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),u.memory.textures--),a.remove(te[ve])}a.remove(L)}let V=0;function le(){V=0}function re(){const L=V;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),V+=1,L}function _e(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function de(L,A){const te=a.get(L);if(L.isVideoTexture&&Xe(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const ve=L.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,L,A);return}}n.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+A)}function I(L,A){const te=a.get(L);if(L.version>0&&te.__version!==L.version){J(te,L,A);return}n.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+A)}function Z(L,A){const te=a.get(L);if(L.version>0&&te.__version!==L.version){J(te,L,A);return}n.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+A)}function Y(L,A){const te=a.get(L);if(L.version>0&&te.__version!==L.version){pe(te,L,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+A)}const Ee={[Hr]:o.REPEAT,[es]:o.CLAMP_TO_EDGE,[ou]:o.MIRRORED_REPEAT},U={[Fn]:o.NEAREST,[A0]:o.NEAREST_MIPMAP_NEAREST,[nl]:o.NEAREST_MIPMAP_LINEAR,[si]:o.LINEAR,[$c]:o.LINEAR_MIPMAP_NEAREST,[pa]:o.LINEAR_MIPMAP_LINEAR},ee={[aM]:o.NEVER,[uM]:o.ALWAYS,[sM]:o.LESS,[F0]:o.LEQUAL,[rM]:o.EQUAL,[cM]:o.GEQUAL,[oM]:o.GREATER,[lM]:o.NOTEQUAL};function xe(L,A){if(A.type===Ti&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===si||A.magFilter===$c||A.magFilter===nl||A.magFilter===pa||A.minFilter===si||A.minFilter===$c||A.minFilter===nl||A.minFilter===pa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Ee[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Ee[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Ee[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[A.minFilter]),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==nl&&A.minFilter!==pa||A.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function Se(L,A){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",H));const ve=A.source;let Me=v.get(ve);Me===void 0&&(Me={},v.set(ve,Me));const ue=_e(A);if(ue!==L.__cacheKey){Me[ue]===void 0&&(Me[ue]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,te=!0),Me[ue].usedTimes++;const Be=Me[L.__cacheKey];Be!==void 0&&(Me[L.__cacheKey].usedTimes--,Be.usedTimes===0&&D(A)),L.__cacheKey=ue,L.__webglTexture=Me[ue].texture}return te}function J(L,A,te){let ve=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ve=o.TEXTURE_3D);const Me=Se(L,A),ue=A.source;n.bindTexture(ve,L.__webglTexture,o.TEXTURE0+te);const Be=a.get(ue);if(ue.version!==Be.__version||Me===!0){n.activeTexture(o.TEXTURE0+te);const Re=Et.getPrimaries(Et.workingColorSpace),we=A.colorSpace===$a?null:Et.getPrimaries(A.colorSpace),xt=A.colorSpace===$a||Re===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let be=T(A.image,!1,r.maxTextureSize);be=Pt(A,be);const ze=c.convert(A.format,A.colorSpace),Ye=c.convert(A.type);let Ze=N(A.internalFormat,ze,Ye,A.colorSpace,A.isVideoTexture);xe(ve,A);let Pe;const ct=A.mipmaps,et=A.isVideoTexture!==!0,It=Be.__version===void 0||Me===!0,k=ue.dataReady,Le=F(A,be);if(A.isDepthTexture)Ze=C(A.format===ul,A.type),It&&(et?n.texStorage2D(o.TEXTURE_2D,1,Ze,be.width,be.height):n.texImage2D(o.TEXTURE_2D,0,Ze,be.width,be.height,0,ze,Ye,null));else if(A.isDataTexture)if(ct.length>0){et&&It&&n.texStorage2D(o.TEXTURE_2D,Le,Ze,ct[0].width,ct[0].height);for(let oe=0,me=ct.length;oe<me;oe++)Pe=ct[oe],et?k&&n.texSubImage2D(o.TEXTURE_2D,oe,0,0,Pe.width,Pe.height,ze,Ye,Pe.data):n.texImage2D(o.TEXTURE_2D,oe,Ze,Pe.width,Pe.height,0,ze,Ye,Pe.data);A.generateMipmaps=!1}else et?(It&&n.texStorage2D(o.TEXTURE_2D,Le,Ze,be.width,be.height),k&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,be.width,be.height,ze,Ye,be.data)):n.texImage2D(o.TEXTURE_2D,0,Ze,be.width,be.height,0,ze,Ye,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&It&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Le,Ze,ct[0].width,ct[0].height,be.depth);for(let oe=0,me=ct.length;oe<me;oe++)if(Pe=ct[oe],A.format!==mi)if(ze!==null)if(et){if(k)if(A.layerUpdates.size>0){const Ie=Yv(Pe.width,Pe.height,A.format,A.type);for(const Ne of A.layerUpdates){const nt=Pe.data.subarray(Ne*Ie/Pe.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,Ne,Pe.width,Pe.height,1,ze,nt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,Pe.width,Pe.height,be.depth,ze,Pe.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,oe,Ze,Pe.width,Pe.height,be.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?k&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,Pe.width,Pe.height,be.depth,ze,Ye,Pe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,oe,Ze,Pe.width,Pe.height,be.depth,0,ze,Ye,Pe.data)}else{et&&It&&n.texStorage2D(o.TEXTURE_2D,Le,Ze,ct[0].width,ct[0].height);for(let oe=0,me=ct.length;oe<me;oe++)Pe=ct[oe],A.format!==mi?ze!==null?et?k&&n.compressedTexSubImage2D(o.TEXTURE_2D,oe,0,0,Pe.width,Pe.height,ze,Pe.data):n.compressedTexImage2D(o.TEXTURE_2D,oe,Ze,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&n.texSubImage2D(o.TEXTURE_2D,oe,0,0,Pe.width,Pe.height,ze,Ye,Pe.data):n.texImage2D(o.TEXTURE_2D,oe,Ze,Pe.width,Pe.height,0,ze,Ye,Pe.data)}else if(A.isDataArrayTexture)if(et){if(It&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Le,Ze,be.width,be.height,be.depth),k)if(A.layerUpdates.size>0){const oe=Yv(be.width,be.height,A.format,A.type);for(const me of A.layerUpdates){const Ie=be.data.subarray(me*oe/be.data.BYTES_PER_ELEMENT,(me+1)*oe/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,me,be.width,be.height,1,ze,Ye,Ie)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,ze,Ye,be.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ze,be.width,be.height,be.depth,0,ze,Ye,be.data);else if(A.isData3DTexture)et?(It&&n.texStorage3D(o.TEXTURE_3D,Le,Ze,be.width,be.height,be.depth),k&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,ze,Ye,be.data)):n.texImage3D(o.TEXTURE_3D,0,Ze,be.width,be.height,be.depth,0,ze,Ye,be.data);else if(A.isFramebufferTexture){if(It)if(et)n.texStorage2D(o.TEXTURE_2D,Le,Ze,be.width,be.height);else{let oe=be.width,me=be.height;for(let Ie=0;Ie<Le;Ie++)n.texImage2D(o.TEXTURE_2D,Ie,Ze,oe,me,0,ze,Ye,null),oe>>=1,me>>=1}}else if(ct.length>0){if(et&&It){const oe=Ge(ct[0]);n.texStorage2D(o.TEXTURE_2D,Le,Ze,oe.width,oe.height)}for(let oe=0,me=ct.length;oe<me;oe++)Pe=ct[oe],et?k&&n.texSubImage2D(o.TEXTURE_2D,oe,0,0,ze,Ye,Pe):n.texImage2D(o.TEXTURE_2D,oe,Ze,ze,Ye,Pe);A.generateMipmaps=!1}else if(et){if(It){const oe=Ge(be);n.texStorage2D(o.TEXTURE_2D,Le,Ze,oe.width,oe.height)}k&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ze,Ye,be)}else n.texImage2D(o.TEXTURE_2D,0,Ze,ze,Ye,be);S(A)&&x(ve),Be.__version=ue.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function pe(L,A,te){if(A.image.length!==6)return;const ve=Se(L,A),Me=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+te);const ue=a.get(Me);if(Me.version!==ue.__version||ve===!0){n.activeTexture(o.TEXTURE0+te);const Be=Et.getPrimaries(Et.workingColorSpace),Re=A.colorSpace===$a?null:Et.getPrimaries(A.colorSpace),we=A.colorSpace===$a||Be===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const xt=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,ze=[];for(let me=0;me<6;me++)!xt&&!be?ze[me]=T(A.image[me],!0,r.maxCubemapSize):ze[me]=be?A.image[me].image:A.image[me],ze[me]=Pt(A,ze[me]);const Ye=ze[0],Ze=c.convert(A.format,A.colorSpace),Pe=c.convert(A.type),ct=N(A.internalFormat,Ze,Pe,A.colorSpace),et=A.isVideoTexture!==!0,It=ue.__version===void 0||ve===!0,k=Me.dataReady;let Le=F(A,Ye);xe(o.TEXTURE_CUBE_MAP,A);let oe;if(xt){et&&It&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ct,Ye.width,Ye.height);for(let me=0;me<6;me++){oe=ze[me].mipmaps;for(let Ie=0;Ie<oe.length;Ie++){const Ne=oe[Ie];A.format!==mi?Ze!==null?et?k&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Ne.width,Ne.height,Ze,Ne.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,ct,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?k&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Ne.width,Ne.height,Ze,Pe,Ne.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,ct,Ne.width,Ne.height,0,Ze,Pe,Ne.data)}}}else{if(oe=A.mipmaps,et&&It){oe.length>0&&Le++;const me=Ge(ze[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ct,me.width,me.height)}for(let me=0;me<6;me++)if(be){et?k&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze[me].width,ze[me].height,Ze,Pe,ze[me].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,ze[me].width,ze[me].height,0,Ze,Pe,ze[me].data);for(let Ie=0;Ie<oe.length;Ie++){const nt=oe[Ie].image[me].image;et?k&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,nt.width,nt.height,Ze,Pe,nt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,ct,nt.width,nt.height,0,Ze,Pe,nt.data)}}else{et?k&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ze,Pe,ze[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Ze,Pe,ze[me]);for(let Ie=0;Ie<oe.length;Ie++){const Ne=oe[Ie];et?k&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,Ze,Pe,Ne.image[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,ct,Ze,Pe,Ne.image[me])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),ue.__version=Me.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ye(L,A,te,ve,Me,ue){const Be=c.convert(te.format,te.colorSpace),Re=c.convert(te.type),we=N(te.internalFormat,Be,Re,te.colorSpace),xt=a.get(A),be=a.get(te);if(be.__renderTarget=A,!xt.__hasExternalTextures){const ze=Math.max(1,A.width>>ue),Ye=Math.max(1,A.height>>ue);Me===o.TEXTURE_3D||Me===o.TEXTURE_2D_ARRAY?n.texImage3D(Me,ue,we,ze,Ye,A.depth,0,Be,Re,null):n.texImage2D(Me,ue,we,ze,Ye,0,Be,Re,null)}n.bindFramebuffer(o.FRAMEBUFFER,L),tt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,Me,be.__webglTexture,0,vt(A)):(Me===o.TEXTURE_2D||Me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,Me,be.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ae(L,A,te){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer){const ve=A.depthTexture,Me=ve&&ve.isDepthTexture?ve.type:null,ue=C(A.stencilBuffer,Me),Be=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=vt(A);tt(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,ue,A.width,A.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ue,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Be,o.RENDERBUFFER,L)}else{const ve=A.textures;for(let Me=0;Me<ve.length;Me++){const ue=ve[Me],Be=c.convert(ue.format,ue.colorSpace),Re=c.convert(ue.type),we=N(ue.internalFormat,Be,Re,ue.colorSpace),xt=vt(A);te&&tt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,we,A.width,A.height):tt(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,we,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,we,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Oe(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=a.get(A.depthTexture);ve.__renderTarget=A,(!ve.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const Me=ve.__webglTexture,ue=vt(A);if(A.depthTexture.format===cl)tt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0);else if(A.depthTexture.format===ul)tt(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function ot(L){const A=a.get(L),te=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const ve=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ve){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ve.removeEventListener("dispose",Me)};ve.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=ve}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Oe(A.__webglFramebuffer,L)}else if(te){A.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ve]),A.__webglDepthbuffer[ve]===void 0)A.__webglDepthbuffer[ve]=o.createRenderbuffer(),Ae(A.__webglDepthbuffer[ve],L,!1);else{const Me=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Me,o.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Ae(A.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Me=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Me),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,Me)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(L,A,te){const ve=a.get(L);A!==void 0&&ye(ve.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&ot(L)}function Xt(L){const A=L.texture,te=a.get(L),ve=a.get(A);L.addEventListener("dispose",B);const Me=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Be=Me.length>1;if(Be||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=A.version,u.memory.textures++),ue){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let we=0;we<A.mipmaps.length;we++)te.__webglFramebuffer[Re][we]=o.createFramebuffer()}else te.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)te.__webglFramebuffer[Re]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Be)for(let Re=0,we=Me.length;Re<we;Re++){const xt=a.get(Me[Re]);xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture(),u.memory.textures++)}if(L.samples>0&&tt(L)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<Me.length;Re++){const we=Me[Re];te.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const xt=c.convert(we.format,we.colorSpace),be=c.convert(we.type),ze=N(we.internalFormat,xt,be,we.colorSpace,L.isXRRenderTarget===!0),Ye=vt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,ze,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),Ae(te.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),xe(o.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)ye(te.__webglFramebuffer[Re][we],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,we);else ye(te.__webglFramebuffer[Re],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(A)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let Re=0,we=Me.length;Re<we;Re++){const xt=Me[Re],be=a.get(xt);n.bindTexture(o.TEXTURE_2D,be.__webglTexture),xe(o.TEXTURE_2D,xt),ye(te.__webglFramebuffer,L,xt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),S(xt)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let Re=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Re,ve.__webglTexture),xe(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)ye(te.__webglFramebuffer[we],L,A,o.COLOR_ATTACHMENT0,Re,we);else ye(te.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,Re,0);S(A)&&x(Re),n.unbindTexture()}L.depthBuffer&&ot(L)}function Gt(L){const A=L.textures;for(let te=0,ve=A.length;te<ve;te++){const Me=A[te];if(S(Me)){const ue=O(L),Be=a.get(Me).__webglTexture;n.bindTexture(ue,Be),x(ue),n.unbindTexture()}}}const ft=[],z=[];function Gn(L){if(L.samples>0){if(tt(L)===!1){const A=L.textures,te=L.width,ve=L.height;let Me=o.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Be=a.get(L),Re=A.length>1;if(Re)for(let we=0;we<A.length;we++)n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let we=0;we<A.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Be.__webglColorRenderbuffer[we]);const xt=a.get(A[we]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,te,ve,0,0,te,ve,Me,o.NEAREST),d===!0&&(ft.length=0,z.length=0,ft.push(o.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ft.push(ue),z.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let we=0;we<A.length;we++){n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Be.__webglColorRenderbuffer[we]);const xt=a.get(A[we]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Be.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,xt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const A=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function vt(L){return Math.min(r.maxSamples,L.samples)}function tt(L){const A=a.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(L){const A=u.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function Pt(L,A){const te=L.colorSpace,ve=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==Hn&&te!==$a&&(Et.getTransfer(te)===Ht?(ve!==mi||Me!==xa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=le,this.setTexture2D=de,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Gn,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=tt}function SR(o,e){function n(a,r=$a){let c;const u=Et.getTransfer(r);if(a===xa)return o.UNSIGNED_BYTE;if(a===tp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===np)return o.UNSIGNED_SHORT_5_5_5_1;if(a===C0)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===R0)return o.BYTE;if(a===w0)return o.SHORT;if(a===ol)return o.UNSIGNED_SHORT;if(a===ep)return o.INT;if(a===zs)return o.UNSIGNED_INT;if(a===Ti)return o.FLOAT;if(a===pl)return o.HALF_FLOAT;if(a===D0)return o.ALPHA;if(a===U0)return o.RGB;if(a===mi)return o.RGBA;if(a===L0)return o.LUMINANCE;if(a===N0)return o.LUMINANCE_ALPHA;if(a===cl)return o.DEPTH_COMPONENT;if(a===ul)return o.DEPTH_STENCIL;if(a===ip)return o.RED;if(a===ap)return o.RED_INTEGER;if(a===O0)return o.RG;if(a===sp)return o.RG_INTEGER;if(a===rp)return o.RGBA_INTEGER;if(a===eu||a===tu||a===nu||a===iu)if(u===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===xd||a===yd||a===Sd||a===Md)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ed||a===Td||a===bd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ed||a===Td)return u===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===bd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ad||a===Rd||a===wd||a===Cd||a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===Pd||a===Id||a===Bd||a===Fd||a===zd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ad)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Rd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===wd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Cd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Dd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ud)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ld)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Nd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Od)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Id)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Bd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Fd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===zd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===au||a===Hd||a===Gd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===au)return u===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===P0||a===Vd||a===kd||a===Xd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===au)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ll?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const MR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ER=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,a){if(this.texture===null){const r=new Mn,c=e.properties.get(r);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ss({vertexShader:MR,fragmentShader:ER,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new pu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends qr{constructor(e,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,y=null,E=null;const T=new TR,S=n.getContextAttributes();let x=null,O=null;const N=[],C=[],F=new Tt;let H=null;const B=new Bn;B.viewport=new Dt;const X=new Bn;X.viewport=new Dt;const D=[B,X],w=new BE;let V=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=N[J];return pe===void 0&&(pe=new Wh,N[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=N[J];return pe===void 0&&(pe=new Wh,N[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=N[J];return pe===void 0&&(pe=new Wh,N[J]=pe),pe.getHandSpace()};function re(J){const pe=C.indexOf(J.inputSource);if(pe===-1)return;const ye=N[pe];ye!==void 0&&(ye.update(J.inputSource,J.frame,p||u),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function _e(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",_e),r.removeEventListener("inputsourceschange",de);for(let J=0;J<N.length;J++){const pe=C[J];pe!==null&&(C[J]=null,N[J].disconnect(pe))}V=null,le=null,T.reset(),e.setRenderTarget(x),y=null,v=null,_=null,r=null,O=null,Se.stop(),a.isPresenting=!1,e.setPixelRatio(H),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",_e),r.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ae=null,Oe=null;S.depth&&(Oe=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=S.stencil?ul:cl,Ae=S.stencil?ll:zs);const ot={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:c};_=new XRWebGLBinding(r,n),v=_.createProjectionLayer(ot),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Hs(v.textureWidth,v.textureHeight,{format:mi,type:xa,depthTexture:new J0(v.textureWidth,v.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Hs(y.framebufferWidth,y.framebufferHeight,{format:mi,type:xa,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(h),Se.setContext(r),Se.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(J){for(let pe=0;pe<J.removed.length;pe++){const ye=J.removed[pe],Ae=C.indexOf(ye);Ae>=0&&(C[Ae]=null,N[Ae].disconnect(ye))}for(let pe=0;pe<J.added.length;pe++){const ye=J.added[pe];let Ae=C.indexOf(ye);if(Ae===-1){for(let ot=0;ot<N.length;ot++)if(ot>=C.length){C.push(ye),Ae=ot;break}else if(C[ot]===null){C[ot]=ye,Ae=ot;break}if(Ae===-1)break}const Oe=N[Ae];Oe&&Oe.connect(ye)}}const I=new j,Z=new j;function Y(J,pe,ye){I.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);const Ae=I.distanceTo(Z),Oe=pe.projectionMatrix.elements,ot=ye.projectionMatrix.elements,Ke=Oe[14]/(Oe[10]-1),Xt=Oe[14]/(Oe[10]+1),Gt=(Oe[9]+1)/Oe[5],ft=(Oe[9]-1)/Oe[5],z=(Oe[8]-1)/Oe[0],Gn=(ot[8]+1)/ot[0],vt=Ke*z,tt=Ke*Gn,Xe=Ae/(-z+Gn),Pt=Xe*-z;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ge=Ke+Xe,L=Xt+Xe,A=vt-Pt,te=tt+(Ae-Pt),ve=Gt*Xt/L*Ge,Me=ft*Xt/L*Ge;J.projectionMatrix.makePerspective(A,te,ve,Me,Ge,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ee(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let pe=J.near,ye=J.far;T.texture!==null&&(T.depthNear>0&&(pe=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),w.near=X.near=B.near=pe,w.far=X.far=B.far=ye,(V!==w.near||le!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,le=w.far),B.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,w.layers.mask=B.layers.mask|X.layers.mask;const Ae=J.parent,Oe=w.cameras;Ee(w,Ae);for(let ot=0;ot<Oe.length;ot++)Ee(Oe[ot],Ae);Oe.length===2?Y(w,B,X):w.projectionMatrix.copy(B.projectionMatrix),U(J,w,Ae)};function U(J,pe,ye){ye===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(J){d=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let ee=null;function xe(J,pe){if(g=pe.getViewerPose(p||u),E=pe,g!==null){const ye=g.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Ae=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,Ae=!0);for(let Ke=0;Ke<ye.length;Ke++){const Xt=ye[Ke];let Gt=null;if(y!==null)Gt=y.getViewport(Xt);else{const z=_.getViewSubImage(v,Xt);Gt=z.viewport,Ke===0&&(e.setRenderTargetTextures(O,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(O))}let ft=D[Ke];ft===void 0&&(ft=new Bn,ft.layers.enable(Ke),ft.viewport=new Dt,D[Ke]=ft),ft.matrix.fromArray(Xt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Xt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Ke===0&&(w.matrix.copy(ft.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ae===!0&&w.cameras.push(ft)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&T.init(e,Ke,r.renderState)}}for(let ye=0;ye<N.length;ye++){const Ae=C[ye],Oe=N[ye];Ae!==null&&Oe!==void 0&&Oe.update(Ae,pe,p||u)}ee&&ee(J,pe),pe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pe}),E=null}const Se=new ix;Se.setAnimationLoop(xe),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const Us=new Ii,AR=new rt;function RR(o,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,W0(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,O,N,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),T(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?d(S,x,O,N):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===jn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===jn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const O=e.get(x),N=O.envMap,C=O.envMapRotation;N&&(S.envMap.value=N,Us.copy(C),Us.x*=-1,Us.y*=-1,Us.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),S.envMapRotation.value.setFromMatrix4(AR.makeRotationFromEuler(Us)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,O,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=N*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const O=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function wR(o,e,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,N){const C=N.program;a.uniformBlockBinding(O,C)}function p(O,N){let C=r[O.id];C===void 0&&(E(O),C=g(O),r[O.id]=C,O.addEventListener("dispose",S));const F=N.program;a.updateUBOMapping(O,F);const H=e.render.frame;c[O.id]!==H&&(v(O),c[O.id]=H)}function g(O){const N=_();O.__bindingPointIndex=N;const C=o.createBuffer(),F=O.__size,H=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,F,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,C),C}function _(){for(let O=0;O<h;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const N=r[O.id],C=O.uniforms,F=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let H=0,B=C.length;H<B;H++){const X=Array.isArray(C[H])?C[H]:[C[H]];for(let D=0,w=X.length;D<w;D++){const V=X[D];if(y(V,H,D,F)===!0){const le=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let de=0;de<re.length;de++){const I=re[de],Z=T(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,le+_e,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,_e),_e+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,N,C,F){const H=O.value,B=N+"_"+C;if(F[B]===void 0)return typeof H=="number"||typeof H=="boolean"?F[B]=H:F[B]=H.clone(),!0;{const X=F[B];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return F[B]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function E(O){const N=O.uniforms;let C=0;const F=16;for(let B=0,X=N.length;B<X;B++){const D=Array.isArray(N[B])?N[B]:[N[B]];for(let w=0,V=D.length;w<V;w++){const le=D[w],re=Array.isArray(le.value)?le.value:[le.value];for(let _e=0,de=re.length;_e<de;_e++){const I=re[_e],Z=T(I),Y=C%F,Ee=Y%Z.boundary,U=Y+Ee;C+=Ee,U!==0&&F-U<Z.storage&&(C+=F-U),le.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=Z.storage}}}const H=C%F;return H>0&&(C+=F-H),O.__size=C,O.__cache={},this}function T(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),N}function S(O){const N=O.target;N.removeEventListener("dispose",S);const C=u.indexOf(N.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(r[N.id]),delete r[N.id],delete c[N.id]}function x(){for(const O in r)o.deleteBuffer(r[O]);u=[],r={},c={}}return{bind:d,update:p,dispose:x}}class CR{constructor(e={}){const{canvas:n=wM(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const O=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=Sn;let H=0,B=0,X=null,D=-1,w=null;const V=new Dt,le=new Dt;let re=null;const _e=new it(0);let de=0,I=n.width,Z=n.height,Y=1,Ee=null,U=null;const ee=new Dt(0,0,I,Z),xe=new Dt(0,0,I,Z);let Se=!1;const J=new fp;let pe=!1,ye=!1;const Ae=new rt,Oe=new rt,ot=new j,Ke=new Dt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ft(){return X===null?Y:1}let z=a;function Gn(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),z===null){const q="webgl2";if(z=Gn(q,R),z===null)throw Gn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let vt,tt,Xe,Pt,Ge,L,A,te,ve,Me,ue,Be,Re,we,xt,be,ze,Ye,Ze,Pe,ct,et,It,k;function Le(){vt=new zA(z),vt.init(),et=new SR(z,vt),tt=new LA(z,vt,e,et),Xe=new xR(z,vt),tt.reverseDepthBuffer&&v&&Xe.buffers.depth.setReversed(!0),Pt=new VA(z),Ge=new rR,L=new yR(z,vt,Xe,Ge,tt,et,Pt),A=new OA(C),te=new FA(C),ve=new jE(z),It=new DA(z,ve),Me=new HA(z,ve,Pt,It),ue=new XA(z,Me,ve,Pt),Ze=new kA(z,tt,L),be=new NA(Ge),Be=new sR(C,A,te,vt,tt,It,be),Re=new RR(C,Ge),we=new lR,xt=new pR(vt),Ye=new CA(C,A,te,Xe,ue,y,d),ze=new _R(C,ue,tt),k=new wR(z,Pt,tt,Xe),Pe=new UA(z,vt,Pt),ct=new GA(z,vt,Pt),Pt.programs=Be.programs,C.capabilities=tt,C.extensions=vt,C.properties=Ge,C.renderLists=we,C.shadowMap=ze,C.state=Xe,C.info=Pt}Le();const oe=new bR(C,z);this.xr=oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(I,Z,!1))},this.getSize=function(R){return R.set(I,Z)},this.setSize=function(R,q,ae=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Z=q,n.width=Math.floor(R*Y),n.height=Math.floor(q*Y),ae===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,ae){I=R,Z=q,Y=ae,n.width=Math.floor(R*ae),n.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,ae,se){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,ae,se),Xe.viewport(V.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,q,ae,se){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,q,ae,se),Xe.scissor(le.copy(xe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){Xe.setScissorTest(Se=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let se=0;if(R){let K=!1;if(X!==null){const Te=X.texture.format;K=Te===rp||Te===sp||Te===ap}if(K){const Te=X.texture.type,Ce=Te===xa||Te===zs||Te===ol||Te===ll||Te===tp||Te===np,De=Ye.getClearColor(),Fe=Ye.getClearAlpha(),Je=De.r,We=De.g,ke=De.b;Ce?(E[0]=Je,E[1]=We,E[2]=ke,E[3]=Fe,z.clearBufferuiv(z.COLOR,0,E)):(T[0]=Je,T[1]=We,T[2]=ke,T[3]=Fe,z.clearBufferiv(z.COLOR,0,T))}else se|=z.COLOR_BUFFER_BIT}q&&(se|=z.DEPTH_BUFFER_BIT),ae&&(se|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Ye.dispose(),we.dispose(),xt.dispose(),Ge.dispose(),A.dispose(),te.dispose(),ue.dispose(),It.dispose(),k.dispose(),Be.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",cn),oe.removeEventListener("sessionend",En),Vn.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Pt.autoReset,q=ze.enabled,ae=ze.autoUpdate,se=ze.needsUpdate,K=ze.type;Le(),Pt.autoReset=R,ze.enabled=q,ze.autoUpdate=ae,ze.needsUpdate=se,ze.type=K}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const q=R.target;q.removeEventListener("dispose",nt),Wt(q)}function Wt(R){an(R),Ge.remove(R)}function an(R){const q=Ge.get(R).programs;q!==void 0&&(q.forEach(function(ae){Be.releaseProgram(ae)}),R.isShaderMaterial&&Be.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,se,K,Te){q===null&&(q=Xt);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,De=cs(R,q,ae,se,K);Xe.setMaterial(se,Ce);let Fe=ae.index,Je=1;if(se.wireframe===!0){if(Fe=Me.getWireframeAttribute(ae),Fe===void 0)return;Je=2}const We=ae.drawRange,ke=ae.attributes.position;let dt=We.start*Je,Rt=(We.start+We.count)*Je;Te!==null&&(dt=Math.max(dt,Te.start*Je),Rt=Math.min(Rt,(Te.start+Te.count)*Je)),Fe!==null?(dt=Math.max(dt,0),Rt=Math.min(Rt,Fe.count)):ke!=null&&(dt=Math.max(dt,0),Rt=Math.min(Rt,ke.count));const Kt=Rt-dt;if(Kt<0||Kt===1/0)return;It.setup(K,se,De,ae,Fe);let yt,St=Pe;if(Fe!==null&&(yt=ve.get(Fe),St=ct,St.setIndex(yt)),K.isMesh)se.wireframe===!0?(Xe.setLineWidth(se.wireframeLinewidth*ft()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(K.isLine){let qe=se.linewidth;qe===void 0&&(qe=1),Xe.setLineWidth(qe*ft()),K.isLineSegments?St.setMode(z.LINES):K.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else K.isPoints?St.setMode(z.POINTS):K.isSprite&&St.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)su("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))St.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qe=K._multiDrawStarts,Jt=K._multiDrawCounts,bt=K._multiDrawCount,wn=Fe?ve.get(Fe).bytesPerElement:1,Ea=Ge.get(se).currentProgram.getUniforms();for(let qt=0;qt<bt;qt++)Ea.setValue(z,"_gl_DrawID",qt),St.render(qe[qt]/wn,Jt[qt])}else if(K.isInstancedMesh)St.renderInstances(dt,Kt,K.count);else if(ae.isInstancedBufferGeometry){const qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Jt=Math.min(ae.instanceCount,qe);St.renderInstances(dt,Kt,Jt)}else St.render(dt,Kt)};function At(R,q,ae){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Sa(R,q,ae),R.side=va,R.needsUpdate=!0,Sa(R,q,ae),R.side=Oi):Sa(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),x=xt.get(ae),x.init(q),N.push(x),ae.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==ae&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const se=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const De=Te[Ce];At(De,ae,K),se.add(De)}else At(Te,ae,K),se.add(Te)}),x=N.pop(),se},this.compileAsync=function(R,q,ae=null){const se=this.compile(R,q,ae);return new Promise(K=>{function Te(){if(se.forEach(function(Ce){Ge.get(Ce).currentProgram.isReady()&&se.delete(Ce)}),se.size===0){K(R);return}setTimeout(Te,10)}vt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Kn=null;function mn(R){Kn&&Kn(R)}function cn(){Vn.stop()}function En(){Vn.start()}const Vn=new ix;Vn.setAnimationLoop(mn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(R){Kn=R,oe.setAnimationLoop(R),R===null?Vn.stop():Vn.start()},oe.addEventListener("sessionstart",cn),oe.addEventListener("sessionend",En),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(q),q=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,X),x=xt.get(R,N.length),x.init(q),N.push(x),Oe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Oe),ye=this.localClippingEnabled,pe=be.init(this.clippingPlanes,ye),S=we.get(R,O.length),S.init(),O.push(S),oe.enabled===!0&&oe.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&os(Te,q,-1/0,C.sortObjects)}os(R,q,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(Ee,U),Gt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Gt&&Ye.addToRenderList(S,R),this.info.render.frame++,pe===!0&&be.beginShadows();const ae=x.state.shadowsArray;ze.render(ae,R,q),pe===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,K=S.transmissive;if(x.setupLights(),q.isArrayCamera){const Te=q.cameras;if(K.length>0)for(let Ce=0,De=Te.length;Ce<De;Ce++){const Fe=Te[Ce];_l(se,K,R,Fe)}Gt&&Ye.render(R);for(let Ce=0,De=Te.length;Ce<De;Ce++){const Fe=Te[Ce];gl(S,R,Fe,Fe.viewport)}}else K.length>0&&_l(se,K,R,q),Gt&&Ye.render(R),gl(S,R,q);X!==null&&B===0&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,q),It.resetDefaultState(),D=-1,w=null,N.pop(),N.length>0?(x=N[N.length-1],pe===!0&&be.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function os(R,q,ae,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){se&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Oe);const Ce=ue.update(R),De=R.material;De.visible&&S.push(R,Ce,De,ae,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ce=ue.update(R),De=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ke.copy(Ce.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Oe)),Array.isArray(De)){const Fe=Ce.groups;for(let Je=0,We=Fe.length;Je<We;Je++){const ke=Fe[Je],dt=De[ke.materialIndex];dt&&dt.visible&&S.push(R,Ce,dt,ae,Ke.z,ke)}}else De.visible&&S.push(R,Ce,De,ae,Ke.z,null)}}const Te=R.children;for(let Ce=0,De=Te.length;Ce<De;Ce++)os(Te[Ce],q,ae,se)}function gl(R,q,ae,se){const K=R.opaque,Te=R.transmissive,Ce=R.transparent;x.setupLightsView(ae),pe===!0&&be.setGlobalState(C.clippingPlanes,ae),se&&Xe.viewport(V.copy(se)),K.length>0&&ls(K,q,ae),Te.length>0&&ls(Te,q,ae),Ce.length>0&&ls(Ce,q,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function _l(R,q,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new Hs(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?pl:xa,minFilter:pa,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Te=x.state.transmissionRenderTarget[se.id],Ce=se.viewport||V;Te.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const De=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(_e),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),Gt&&Ye.render(ae);const Fe=C.toneMapping;C.toneMapping=as;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),pe===!0&&be.setGlobalState(C.clippingPlanes,se),ls(R,ae,se),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),vt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ke=0,dt=q.length;ke<dt;ke++){const Rt=q[ke],Kt=Rt.object,yt=Rt.geometry,St=Rt.material,qe=Rt.group;if(St.side===Oi&&Kt.layers.test(se.layers)){const Jt=St.side;St.side=jn,St.needsUpdate=!0,ya(Kt,ae,se,yt,St,qe),St.side=Jt,St.needsUpdate=!0,We=!0}}We===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}C.setRenderTarget(De),C.setClearColor(_e,de),Je!==void 0&&(se.viewport=Je),C.toneMapping=Fe}function ls(R,q,ae){const se=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Te=R.length;K<Te;K++){const Ce=R[K],De=Ce.object,Fe=Ce.geometry,Je=Ce.group;let We=Ce.material;We.allowOverride===!0&&se!==null&&(We=se),De.layers.test(ae.layers)&&ya(De,q,ae,Fe,We,Je)}}function ya(R,q,ae,se,K,Te){R.onBeforeRender(C,q,ae,se,K,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,q,ae,se,R,Te),K.transparent===!0&&K.side===Oi&&K.forceSinglePass===!1?(K.side=jn,K.needsUpdate=!0,C.renderBufferDirect(ae,q,se,K,R,Te),K.side=va,K.needsUpdate=!0,C.renderBufferDirect(ae,q,se,K,R,Te),K.side=Oi):C.renderBufferDirect(ae,q,se,K,R,Te),R.onAfterRender(C,q,ae,se,K,Te)}function Sa(R,q,ae){q.isScene!==!0&&(q=Xt);const se=Ge.get(R),K=x.state.lights,Te=x.state.shadowsArray,Ce=K.state.version,De=Be.getParameters(R,K.state,Te,q,ae),Fe=Be.getProgramCacheKey(De);let Je=se.programs;se.environment=R.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(R.isMeshStandardMaterial?te:A).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",nt),Je=new Map,se.programs=Je);let We=Je.get(Fe);if(We!==void 0){if(se.currentProgram===We&&se.lightsStateVersion===Ce)return Vi(R,De),We}else De.uniforms=Be.getUniforms(R),R.onBeforeCompile(De,C),We=Be.acquireProgram(De,Fe),Je.set(Fe,We),se.uniforms=De.uniforms;const ke=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=be.uniform),Vi(R,De),se.needsLights=sn(R),se.lightsStateVersion=Ce,se.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=We,se.uniformsList=null,We}function Gi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=ru.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Vi(R,q){const ae=Ge.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function cs(R,q,ae,se,K){q.isScene!==!0&&(q=Xt),L.resetTextureUnits();const Te=q.fog,Ce=se.isMeshStandardMaterial?q.environment:null,De=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Hn,Fe=(se.isMeshStandardMaterial?te:A).get(se.envMap||Ce),Je=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,We=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ke=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Rt=!!ae.morphAttributes.color;let Kt=as;se.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Kt=C.toneMapping);const yt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,St=yt!==void 0?yt.length:0,qe=Ge.get(se),Jt=x.state.lights;if(pe===!0&&(ye===!0||R!==w)){const gn=R===w&&se.id===D;be.setState(se,R,gn)}let bt=!1;se.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Jt.state.version||qe.outputColorSpace!==De||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==Fe||se.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==be.numPlanes||qe.numIntersection!==be.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==We||qe.morphTargets!==ke||qe.morphNormals!==dt||qe.morphColors!==Rt||qe.toneMapping!==Kt||qe.morphTargetsCount!==St)&&(bt=!0):(bt=!0,qe.__version=se.version);let wn=qe.currentProgram;bt===!0&&(wn=Sa(se,q,K));let Ea=!1,qt=!1,Xi=!1;const Vt=wn.getUniforms(),Cn=qe.uniforms;if(Xe.useProgram(wn.program)&&(Ea=!0,qt=!0,Xi=!0),se.id!==D&&(D=se.id,qt=!0),Ea||w!==R){Xe.buffers.depth.getReversed()?(Ae.copy(R.projectionMatrix),DM(Ae),UM(Ae),Vt.setValue(z,"projectionMatrix",Ae)):Vt.setValue(z,"projectionMatrix",R.projectionMatrix),Vt.setValue(z,"viewMatrix",R.matrixWorldInverse);const Tn=Vt.map.cameraPosition;Tn!==void 0&&Tn.setValue(z,ot.setFromMatrixPosition(R.matrixWorld)),tt.logarithmicDepthBuffer&&Vt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,qt=!0,Xi=!0)}if(K.isSkinnedMesh){Vt.setOptional(z,K,"bindMatrix"),Vt.setOptional(z,K,"bindMatrixInverse");const gn=K.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Vt.setValue(z,"boneTexture",gn.boneTexture,L))}K.isBatchedMesh&&(Vt.setOptional(z,K,"batchingTexture"),Vt.setValue(z,"batchingTexture",K._matricesTexture,L),Vt.setOptional(z,K,"batchingIdTexture"),Vt.setValue(z,"batchingIdTexture",K._indirectTexture,L),Vt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Vt.setValue(z,"batchingColorTexture",K._colorsTexture,L));const un=ae.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Ze.update(K,ae,wn),(qt||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Vt.setValue(z,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Cn.envMap.value=Fe,Cn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(Cn.envMapIntensity.value=q.environmentIntensity),qt&&(Vt.setValue(z,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&Ma(Cn,Xi),Te&&se.fog===!0&&Re.refreshFogUniforms(Cn,Te),Re.refreshMaterialUniforms(Cn,se,Y,Z,x.state.transmissionRenderTarget[R.id]),ru.upload(z,Gi(qe),Cn,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ru.upload(z,Gi(qe),Cn,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(z,"center",K.center),Vt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Vt.setValue(z,"normalMatrix",K.normalMatrix),Vt.setValue(z,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let Tn=0,Ri=gn.length;Tn<Ri;Tn++){const Wi=gn[Tn];k.update(Wi,wn),k.bind(Wi,wn)}}return wn}function Ma(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function sn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,ae){const se=Ge.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ge.get(R.texture).__webglTexture=q,Ge.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=Ge.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const vl=z.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){X=R,H=q,B=ae;let se=!0,K=null,Te=!1,Ce=!1;if(R){const Fe=Ge.get(R);if(Fe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(z.FRAMEBUFFER,null),se=!1;else if(Fe.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Fe.__hasExternalTextures)L.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Fe.__boundDepthTexture!==ke){if(ke!==null&&Ge.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ce=!0);const We=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[q])?K=We[q][ae]:K=We[q],Te=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?K=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?K=We[ae]:K=We,V.copy(R.viewport),le.copy(R.scissor),re=R.scissorTest}else V.copy(ee).multiplyScalar(Y).floor(),le.copy(xe).multiplyScalar(Y).floor(),re=Se;if(ae!==0&&(K=vl),Xe.bindFramebuffer(z.FRAMEBUFFER,K)&&se&&Xe.drawBuffers(R,K),Xe.viewport(V),Xe.scissor(le),Xe.setScissorTest(re),Te){const Fe=Ge.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,ae)}else if(Ce){const Fe=Ge.get(R.texture),Je=q;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.__webglTexture,ae,Je)}else if(R!==null&&ae!==0){const Fe=Ge.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Fe.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,q,ae,se,K,Te,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){Xe.bindFramebuffer(z.FRAMEBUFFER,De);try{const Fe=R.texture,Je=Fe.format,We=Fe.type;if(!tt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&ae>=0&&ae<=R.height-K&&z.readPixels(q,ae,se,K,et.convert(Je),et.convert(We),Te)}finally{const Fe=X!==null?Ge.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,se,K,Te,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(q>=0&&q<=R.width-se&&ae>=0&&ae<=R.height-K){Xe.bindFramebuffer(z.FRAMEBUFFER,De);const Fe=R.texture,Je=Fe.format,We=Fe.type;if(!tt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ke),z.bufferData(z.PIXEL_PACK_BUFFER,Te.byteLength,z.STREAM_READ),z.readPixels(q,ae,se,K,et.convert(Je),et.convert(We),0);const dt=X!==null?Ge.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,dt);const Rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await CM(z,Rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ke),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Te),z.deleteBuffer(ke),z.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const se=Math.pow(2,-ae),K=Math.floor(R.image.width*se),Te=Math.floor(R.image.height*se),Ce=q!==null?q.x:0,De=q!==null?q.y:0;L.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,Ce,De,K,Te),Xe.unbindTexture()};const xl=z.createFramebuffer(),ki=z.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,se=null,K=0,Te=null){Te===null&&(K!==0?(su("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let Ce,De,Fe,Je,We,ke,dt,Rt,Kt;const yt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)Ce=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,We=ae.min.y,ke=ae.isBox3?ae.min.z:0;else{const un=Math.pow(2,-K);Ce=Math.floor(yt.width*un),De=Math.floor(yt.height*un),R.isDataArrayTexture?Fe=yt.depth:R.isData3DTexture?Fe=Math.floor(yt.depth*un):Fe=1,Je=0,We=0,ke=0}se!==null?(dt=se.x,Rt=se.y,Kt=se.z):(dt=0,Rt=0,Kt=0);const St=et.convert(q.format),qe=et.convert(q.type);let Jt;q.isData3DTexture?(L.setTexture3D(q,0),Jt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),Jt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),Jt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const bt=z.getParameter(z.UNPACK_ROW_LENGTH),wn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ea=z.getParameter(z.UNPACK_SKIP_PIXELS),qt=z.getParameter(z.UNPACK_SKIP_ROWS),Xi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,yt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Je),z.pixelStorei(z.UNPACK_SKIP_ROWS,We),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ke);const Vt=R.isDataArrayTexture||R.isData3DTexture,Cn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const un=Ge.get(R),gn=Ge.get(q),Tn=Ge.get(un.__renderTarget),Ri=Ge.get(gn.__renderTarget);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Wi=0;Wi<Fe;Wi++)Vt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(R).__webglTexture,K,ke+Wi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(q).__webglTexture,Te,Kt+Wi)),z.blitFramebuffer(Je,We,Ce,De,dt,Rt,Ce,De,z.DEPTH_BUFFER_BIT,z.NEAREST);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ge.has(R)){const un=Ge.get(R),gn=Ge.get(q);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,xl),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,ki);for(let Tn=0;Tn<Fe;Tn++)Vt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,K,ke+Tn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,K),Cn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gn.__webglTexture,Te,Kt+Tn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gn.__webglTexture,Te),K!==0?z.blitFramebuffer(Je,We,Ce,De,dt,Rt,Ce,De,z.COLOR_BUFFER_BIT,z.NEAREST):Cn?z.copyTexSubImage3D(Jt,Te,dt,Rt,Kt+Tn,Je,We,Ce,De):z.copyTexSubImage2D(Jt,Te,dt,Rt,Je,We,Ce,De);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Jt,Te,dt,Rt,Kt,Ce,De,Fe,St,qe,yt.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Jt,Te,dt,Rt,Kt,Ce,De,Fe,St,yt.data):z.texSubImage3D(Jt,Te,dt,Rt,Kt,Ce,De,Fe,St,qe,yt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Te,dt,Rt,Ce,De,St,qe,yt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Te,dt,Rt,yt.width,yt.height,St,yt.data):z.texSubImage2D(z.TEXTURE_2D,Te,dt,Rt,Ce,De,St,qe,yt);z.pixelStorei(z.UNPACK_ROW_LENGTH,bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ea),z.pixelStorei(z.UNPACK_SKIP_ROWS,qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xi),Te===0&&q.generateMipmaps&&z.generateMipmap(Jt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ae=null,se=null,K=0){return su('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ae,se,K)},this.initRenderTarget=function(R){Ge.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){H=0,B=0,X=null,Xe.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function v0(o,e){if(e===eM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Wd||e===I0){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let d=0;d<h.count;d++)u.push(d);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===Wd)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class DR extends Zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new PR(n)}),this.register(function(n){return new IR(n)}),this.register(function(n){return new WR(n)}),this.register(function(n){return new qR(n)}),this.register(function(n){return new YR(n)}),this.register(function(n){return new FR(n)}),this.register(function(n){return new zR(n)}),this.register(function(n){return new HR(n)}),this.register(function(n){return new GR(n)}),this.register(function(n){return new OR(n)}),this.register(function(n){return new VR(n)}),this.register(function(n){return new BR(n)}),this.register(function(n){return new XR(n)}),this.register(function(n){return new kR(n)}),this.register(function(n){return new LR(n)}),this.register(function(n){return new jR(n)}),this.register(function(n){return new KR(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const p=rl.extractUrlBase(e);u=rl.resolveURL(p,this.path)}else u=rl.extractUrlBase(e);this.manager.itemStart(e);const h=function(p){r?r(p):console.error(p),c.manager.itemError(e),c.manager.itemEnd(e)},d=new tx(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(p){try{c.parse(p,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},h={},d=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===lx){try{u[_t.KHR_BINARY_GLTF]=new ZR(e)}catch(_){r&&r(_);return}c=JSON.parse(u[_t.KHR_BINARY_GLTF].content)}else c=JSON.parse(d.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new cw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](p);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case _t.KHR_MATERIALS_UNLIT:u[_]=new NR;break;case _t.KHR_DRACO_MESH_COMPRESSION:u[_]=new QR(c,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:u[_]=new JR;break;case _t.KHR_MESH_QUANTIZATION:u[_]=new $R;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}p.setExtensions(u),p.setPlugins(h),p.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function UR(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LR{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,d=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let p;const g=new it(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],Hn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new nx(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new NE(g),p.distance=_;break;case"spot":p=new UE(g),p.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),da(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=n.createUniqueName(d.name||"light_"+e),r=Promise.resolve(p),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(d){return a._getNodeRef(n.cache,h,d)})}}class NR{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return ts}extendParams(e,n,a){const r=[];e.color=new it(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Hn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,Sn))}return Promise.all(r)}}class OR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class PR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Tt(h,h)}return Promise.all(c)}}class IR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class BR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class FR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new it(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;n.sheenColor.setRGB(h[0],h[1],h[2],Hn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,Sn)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class zR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class HR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return n.attenuationColor=new it().setRGB(h[0],h[1],h[2],Hn),Promise.all(c)}}class GR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class VR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return n.specularColor=new it().setRGB(h[0],h[1],h[2],Hn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,Sn)),Promise.all(c)}}class kR{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class XR{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Hi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class WR{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class qR{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let d=a.textureLoader;if(h.uri){const p=a.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return a.loadTextureImage(e,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class YR{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let d=a.textureLoader;if(h.uri){const p=a.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return a.loadTextureImage(e,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class jR{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const d=r.byteOffset||0,p=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,d,p);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(y),g,_,v,r.mode,r.filter),y})})}else return null}}class KR{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const p of r.primitives)if(p.mode!==pi.TRIANGLES&&p.mode!==pi.TRIANGLE_STRIP&&p.mode!==pi.TRIANGLE_FAN&&p.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],d={};for(const p in u)h.push(this.parser.getDependency("accessor",u[p]).then(g=>(d[p]=g,d[p])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(p=>{const g=p.pop(),_=g.isGroup?g.children:[g],v=p[0].count,y=[];for(const E of _){const T=new rt,S=new j,x=new rs,O=new j(1,1,1),N=new lE(E.geometry,E.material,v);for(let C=0;C<v;C++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,C),d.SCALE&&O.fromBufferAttribute(d.SCALE,C),N.setMatrixAt(C,T.compose(S,x,O));for(const C in d)if(C==="_COLOR_0"){const F=d[C];N.instanceColor=new Yd(F.array,F.itemSize,F.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&E.geometry.setAttribute(C,d[C]);Qt.prototype.copy.call(N,E),this.parser.assignFinalMaterial(N),y.push(N)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const lx="glTF",tl=12,x0={JSON:1313821514,BIN:5130562};class ZR{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,tl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==lx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-tl,c=new DataView(e,tl);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const d=c.getUint32(u,!0);if(u+=4,d===x0.JSON){const p=new Uint8Array(e,tl+u,h);this.content=a.decode(p)}else if(d===x0.BIN){const p=tl+u;this.body=e.slice(p,p+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QR{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},d={},p={};for(const g in u){const _=Zd[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=Zd[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],y=Ir[v.componentType];p[_]=y.name,d[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(y){for(const E in y.attributes){const T=y.attributes[E],S=d[E];S!==void 0&&(T.normalized=S)}_(y)},h,p,Hn,v)})})}}class JR{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class $R{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class cx extends ml{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=h*2,p=h*3,g=r-n,_=(a-n)/g,v=_*_,y=v*_,E=e*p,T=E-p,S=-2*y+3*v,x=y-v,O=1-S,N=x-v+_;for(let C=0;C!==h;C++){const F=u[T+C+h],H=u[T+C+d]*g,B=u[E+C+h],X=u[E+C]*g;c[C]=O*F+N*H+S*B+x*X}return c}}const ew=new rs;class tw extends cx{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return ew.fromArray(c).normalize().toArray(c),c}}const pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},y0={9728:Fn,9729:si,9984:A0,9985:$c,9986:nl,9987:pa},S0={33071:es,33648:ou,10497:Hr},ad={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ja={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nw={CUBICSPLINE:void 0,LINEAR:hl,STEP:fl},sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new dp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:va})),o.DefaultMaterial}function Ls(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function da(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aw(o,e,n){let a=!1,r=!1,c=!1;for(let p=0,g=e.length;p<g;p++){const _=e[p];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],d=[];for(let p=0,g=e.length;p<g;p++){const _=e[p];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(p){const g=p[0],_=p[1],v=p[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function sw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rw(o){let e;const n=o.extensions&&o.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+rd(n.attributes):e=o.indices+":"+rd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+rd(o.targets[a]);return e}function rd(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function Qd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ow(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lw=new rt;class cw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new UR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const d=h.match(/Version\/(\d+)/);r=a&&d?parseInt(d[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new CE(this.options.manager):this.textureLoader=new IE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Ls(c,h,r),da(h,r),Promise.all(a._invokeAll(function(d){return d.afterRoot&&d.afterRoot(h)})).then(function(){for(const d of h.scenes)d.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,d=u.length;h<d;h++)e[u[h]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const d=this.associations.get(u);d!=null&&this.associations.set(h,d);for(const[p,g]of u.children.entries())c(g,h.children[p])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(rl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=ad[r.type],h=Ir[r.componentType],d=r.normalized===!0,p=new h(r.count*u);return Promise.resolve(new zn(p,u,d))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],d=ad[r.type],p=Ir[r.componentType],g=p.BYTES_PER_ELEMENT,_=g*d,v=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let T,S;if(y&&y!==_){const x=Math.floor(v/y),O="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let N=n.cache.get(O);N||(T=new p(h,x*y,r.count*y/g),N=new iE(T,y/g),n.cache.add(O,N)),S=new cp(N,d,v%y/g,E)}else h===null?T=new p(r.count*d):T=new p(h,v,r.count*d),S=new zn(T,d,E);if(r.sparse!==void 0){const x=ad.SCALAR,O=Ir[r.sparse.indices.componentType],N=r.sparse.indices.byteOffset||0,C=r.sparse.values.byteOffset||0,F=new O(u[1],N,r.sparse.count*x),H=new p(u[2],C,r.sparse.count*d);h!==null&&(S=new zn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let B=0,X=F.length;B<X;B++){const D=F[B];if(S.setX(D,H[B*d]),d>=2&&S.setY(D,H[B*d+1]),d>=3&&S.setZ(D,H[B*d+2]),d>=4&&S.setW(D,H[B*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const d=a.manager.getHandler(u.uri);d!==null&&(h=d)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],h=c.images[n],d=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=y0[v.magFilter]||si,g.minFilter=y0[v.minFilter]||pa,g.wrapS=S0[v.wrapS]||Hr,g.wrapT=S0[v.wrapT]||Hr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Fn&&g.minFilter!==si,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],h=self.URL||self.webkitURL;let d=u.uri||"",p=!1;if(u.bufferView!==void 0)d=a.getDependency("bufferView",u.bufferView).then(function(_){p=!0;const v=new Blob([_],{type:u.mimeType});return d=h.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(_){return new Promise(function(v,y){let E=v;n.isImageBitmapLoader===!0&&(E=function(T){const S=new Mn(T);S.needsUpdate=!0,v(S)}),n.load(rl.resolveURL(_,c.path),E,void 0,y)})}).then(function(_){return p===!0&&h.revokeObjectURL(d),da(_,u),_.userData.mimeType=u.mimeType||ow(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[_t.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const d=c.associations.get(u);u=c.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,d)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let d=this.cache.get(h);d||(d=new Q0,Pi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,d.sizeAttenuation=!1,this.cache.add(h,d)),a=d}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let d=this.cache.get(h);d||(d=new Z0,Pi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,this.cache.add(h,d)),a=d}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let d=this.cache.get(h);d||(d=a.clone(),c&&(d.vertexColors=!0),u&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(h,d),this.associations.set(d,this.associations.get(a))),a=d}e.material=a}getMaterialType(){return dp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const h={},d=c.extensions||{},p=[];if(d[_t.KHR_MATERIALS_UNLIT]){const _=r[_t.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),p.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new it(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Hn),h.opacity=v[3]}_.baseColorTexture!==void 0&&p.push(n.assignTexture(h,"map",_.baseColorTexture,Sn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(p.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),p.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),p.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Oi);const g=c.alphaMode||sd.OPAQUE;if(g===sd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===sd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==ts&&(p.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new Tt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==ts&&(p.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==ts){const _=c.emissiveFactor;h.emissive=new it().setRGB(_[0],_[1],_[2],Hn)}return c.emissiveTexture!==void 0&&u!==ts&&p.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Sn)),Promise.all(p).then(function(){const _=new u(h);return c.name&&(_.name=c.name),da(_,c),n.associations.set(_,{materials:e}),c.extensions&&Ls(r,_,c),_})}createUniqueName(e){const n=Ot.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(d){return M0(d,h,n)})}const u=[];for(let h=0,d=e.length;h<d;h++){const p=e[h],g=rw(p),_=r[g];if(_)u.push(_.promise);else{let v;p.extensions&&p.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?v=c(p):v=M0(new zi,p,n),r[g]={primitive:p,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let d=0,p=u.length;d<p;d++){const g=u[d].material===void 0?iw(this.cache):this.getDependency("material",u[d].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],_=[];for(let y=0,E=g.length;y<E;y++){const T=g[y],S=u[y];let x;const O=p[y];if(S.mode===pi.TRIANGLES||S.mode===pi.TRIANGLE_STRIP||S.mode===pi.TRIANGLE_FAN||S.mode===void 0)x=c.isSkinnedMesh===!0?new sE(T,O):new Yn(T,O),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===pi.TRIANGLE_STRIP?x.geometry=v0(x.geometry,I0):S.mode===pi.TRIANGLE_FAN&&(x.geometry=v0(x.geometry,Wd));else if(S.mode===pi.LINES)x=new fE(T,O);else if(S.mode===pi.LINE_STRIP)x=new hp(T,O);else if(S.mode===pi.LINE_LOOP)x=new hE(T,O);else if(S.mode===pi.POINTS)x=new dE(T,O);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&sw(x,c),x.name=n.createUniqueName(c.name||"mesh_"+e),da(x,c),S.extensions&&Ls(r,x,S),n.assignFinalMaterial(x),_.push(x)}for(let y=0,E=_.length;y<E;y++)n.associations.set(_[y],{meshes:e,primitives:y});if(_.length===1)return c.extensions&&Ls(r,_[0],c),_[0];const v=new Bs;c.extensions&&Ls(r,v,c),n.associations.set(v,{meshes:e});for(let y=0,E=_.length;y<E;y++)v.add(_[y]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Bn(RM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new mp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),da(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_){h.push(_);const v=new rt;c!==null&&v.fromArray(c.array,p*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[p])}return new up(h,d)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],h=[],d=[],p=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const y=r.channels[_],E=r.samplers[y.sampler],T=y.target,S=T.node,x=r.parameters!==void 0?r.parameters[E.input]:E.input,O=r.parameters!==void 0?r.parameters[E.output]:E.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",O)),p.push(E),g.push(T))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(_){const v=_[0],y=_[1],E=_[2],T=_[3],S=_[4],x=[];for(let O=0,N=v.length;O<N;O++){const C=v[O],F=y[O],H=E[O],B=T[O],X=S[O];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const D=a._createAnimationTracks(C,F,H,B,X);if(D)for(let w=0;w<D.length;w++)x.push(D[w])}return new ME(c,void 0,x)})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let d=0,p=r.weights.length;d<p;d++)h.morphTargetInfluences[d]=r.weights[d]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=r.children||[];for(let p=0,g=h.length;p<g;p++)u.push(a.getDependency("node",h[p]));const d=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),d]).then(function(p){const g=p[0],_=p[1],v=p[2];v!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(v,lw)});for(let y=0,E=_.length;y<E;y++)g.add(_[y]);return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",h=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(e)});return d&&h.push(d),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(p){return r._getNodeRef(r.cameraCache,c.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(e)}).forEach(function(p){h.push(p)}),this.nodeCache[e]=Promise.all(h).then(function(p){let g;if(c.isBone===!0?g=new j0:p.length>1?g=new Bs:p.length===1?g=p[0]:g=new Qt,g!==p[0])for(let _=0,v=p.length;_<v;_++)g.add(p[_]);if(c.name&&(g.userData.name=c.name,g.name=u),da(g,c),c.extensions&&Ls(a,g,c),c.matrix!==void 0){const _=new rt;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);return r.associations.has(g)||r.associations.set(g,{}),r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Bs;a.name&&(c.name=r.createUniqueName(a.name)),da(c,a),a.extensions&&Ls(n,c,a);const u=a.nodes||[],h=[];for(let d=0,p=u.length;d<p;d++)h.push(r.getDependency("node",u[d]));return Promise.all(h).then(function(d){for(let g=0,_=d.length;g<_;g++)c.add(d[g]);const p=g=>{const _=new Map;for(const[v,y]of r.associations)(v instanceof Pi||v instanceof Mn)&&_.set(v,y);return g.traverse(v=>{const y=r.associations.get(v);y!=null&&_.set(v,y)}),_};return r.associations=p(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],h=e.name?e.name:e.uuid,d=[];Ja[c.path]===Ja.weights?e.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(h);let p;switch(Ja[c.path]){case Ja.weights:p=kr;break;case Ja.rotation:p=Xr;break;case Ja.translation:case Ja.scale:p=Wr;break;default:switch(a.itemSize){case 1:p=kr;break;case 2:case 3:default:p=Wr;break}break}const g=r.interpolation!==void 0?nw[r.interpolation]:hl,_=this._getArrayFromAccessor(a);for(let v=0,y=d.length;v<y;v++){const E=new p(d[v]+"."+Ja[c.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Qd(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof Xr?tw:cx;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uw(o,e,n){const a=e.attributes,r=new Bi;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(r.set(new j(d[0],d[1],d[2]),new j(p[0],p[1],p[2])),h.normalized){const g=Qd(Ir[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new j,d=new j;for(let p=0,g=c.length;p<g;p++){const _=c[p];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const T=Qd(Ir[v.componentType]);d.multiplyScalar(T)}h.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Fi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function M0(o,e,n){const a=e.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(d){o.setAttribute(h,d)})}for(const u in a){const h=Zd[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return Et.workingColorSpace!==Hn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),da(o,e),uw(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?aw(o,e.targets,n):o})}function od(){const o=Fs.useRef(null),e=Fs.useRef(!1);return Fs.useEffect(()=>{const n=new nE,a=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new CR({antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setClearColor(0,0),r.setSize(window.innerWidth,window.innerHeight),r.outputColorSpace=Sn,o.current.appendChild(r.domElement),a.position.z=5;const c=new PE(7237230,.8);n.add(c);const u=new nx(3881273,1);u.position.set(1,1,1).normalize(),n.add(u);const h=new DR;let d=null,p=null;const g=()=>{e.current||h.load("/3Dmodels/Knuckles/scene.gltf",y=>{d&&n.remove(d),d=y.scene,e.current=!0;const E=new Bi().setFromObject(d),T=E.getSize(new j),x=1.5/Math.max(T.x,T.y,T.z);d.scale.set(x,x,x);const O=E.getCenter(new j);d.position.sub(O.multiplyScalar(x)),n.add(d),p||_()},void 0,y=>{console.error("Erreur de chargement:",y);const E=new Yr,T=new ts({color:65280});d=new Yn(E,T),n.add(d),_()})},_=()=>{p=requestAnimationFrame(_),d&&(d.rotation.x+=.005,d.rotation.y+=.005),r.render(n,a)},v=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return g(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),cancelAnimationFrame(p),o.current&&r.domElement.parentNode===o.current&&o.current.removeChild(r.domElement),r.dispose(),e.current=!1}},[]),fe.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,overflow:"hidden"}})}function fw(o){const{setPage:e}=o,{SETfrenchORenglish:n}=o,{frenchORenglish:a}=o,r=new Audio("Portefolio/ressources/sons/onHover.wav"),c=new Audio("Portefolio/ressources/sons/click2.wav");function u(){r.play()}function h(){n(_=>0)}function d(){n(_=>1)}function p(){e(_=>1),window.scrollTo(0,0),c.play()}function g(){e(_=>2),window.scrollTo(0,0),c.play()}return fe.jsxs("div",{children:[fe.jsxs("div",{align:"right",class:"language",children:[fe.jsx("button",{onClick:d,children:"EN"}),fe.jsx("button",{onClick:h,children:"FR"})]}),fe.jsxs("div",{className:"main-bar",children:[fe.jsx("button",{onMouseEnter:u,children:a?"Home":"Accueil"}),fe.jsx("button",{onMouseEnter:u,onClick:p,children:a?"Projects":"Projets"}),fe.jsx("button",{onMouseEnter:u,onClick:g,children:"Contact"})]}),fe.jsxs("div",{class:"simple-presentation-div",children:[fe.jsx("h3",{children:a?"Hi ! I’m Grégoire !":"Salut ! Moi c'est Grégoire !"}),fe.jsx("h3",{children:a?"A Developer.":"Je suis développeur."})]}),fe.jsx("div",{class:"simple-presentation-intro",children:fe.jsxs("p",{children:[a?"I'm":"Je suis"," ",fe.jsxs("span",{class:"highlight-me-blue",children:[a?"passionate":"passionné"," "]})," ",a?"about Web,":"de Web"," ",fe.jsx("span",{class:"highlight-me-red",children:a?"AI":"IA"}),", ",fe.jsx("span",{class:"highlight-me-yellow",children:"3D"}),", ",fe.jsx("span",{class:"highlight-me-green",children:"Design"})]})}),fe.jsx("div",{class:"void-div"}),fe.jsxs("div",{class:"global-info-block",children:[fe.jsx("h2",{children:a?"It all start with Scratch !":"Tout à commencé avec Scratch !"}),fe.jsx("iframe",{width:"100%",height:"500px",src:"https://www.youtube.com/embed/N7YSpK3Tbx0",title:"security breach scratch by Idaill",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),fe.jsxs("h3",{children:[a?"When I was in college, the":"Au collège, la découverte de"," ",fe.jsx("span",{class:"highlight-me-yellow",children:"scratch"})," ",a?"discovery was the bigest thing that made my life change":"fut la naissance de cette"," ",fe.jsx("span",{class:"highlight-me-blue",children:a?"complitly":"passion"}),a?" ":"pour l'informatique","!"]}),fe.jsx("p",{children:a?"I spend hours making games, from 2D to 3D Games like it can be seen in this video from a scratch user.":"J'ai passé des heures à la création de divers jeux de la 2D jusqu'à la 3D comme on peut le voir dans cette vidéo d'un utilisateur de Scratch."})]}),fe.jsxs("div",{class:"global-info-block",children:[fe.jsx("h2",{children:a?"KNOWN LANGUAGES":"LANGAGES QUE JE CONNAIS"}),fe.jsxs("div",{class:"global-image-box",children:[fe.jsx("img",{src:"Portefolio/ressources/images/css_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"}),fe.jsx("img",{src:"Portefolio/ressources/images/java_logo.svg",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Java_(langage)"}),fe.jsx("img",{src:"Portefolio/ressources/images/javafx_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/JavaFX"}),fe.jsx("img",{src:"Portefolio/ressources/images/html_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"}),fe.jsx("img",{src:"Portefolio/ressources/images/python_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Python_(langage)"}),fe.jsx("img",{src:"Portefolio/ressources/images/kotlin_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Kotlin_(langage)"}),fe.jsx("img",{src:"Portefolio/ressources/images/lua_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Lua"}),fe.jsx("img",{src:"Portefolio/ressources/images/sql_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Structured_Query_Language"}),fe.jsx("img",{src:"Portefolio/ressources/images/golang_logo.png",draggable:"false",onClick:()=>window.location.href="https://fr.wikipedia.org/wiki/Go_(langage)"})]})]}),fe.jsxs("div",{class:"see-more",onClick:p,children:[fe.jsx("img",{src:"Portefolio/ressources/images/starStart.svg"}),fe.jsx("h1",{children:a?"My Projects":"Mes projets"}),fe.jsx("img",{src:"Portefolio/ressources/images/starEnd.svg"})]})]})}function hw(o){const{setPage:e}=o,{SETfrenchORenglish:n}=o,{frenchORenglish:a}=o,r=new Audio("Portefolio/ressources/sons/onHover.wav"),c=new Audio("Portefolio/ressources/sons/click2.wav");function u(){r.play()}function h(){n(_=>0)}function d(){n(_=>1)}function p(){e(_=>0),window.scrollTo(0,0),c.play()}function g(){e(_=>2),window.scrollTo(0,0),c.play()}return fe.jsxs(fe.Fragment,{children:[fe.jsxs("div",{align:"right",class:"language",children:[fe.jsx("button",{onClick:d,children:"EN"}),fe.jsx("button",{onClick:h,children:"FR"})]}),fe.jsxs("div",{className:"main-bar",children:[fe.jsx("button",{onMouseEnter:u,onClick:p,children:a?"Home":"Accueil"}),fe.jsx("button",{onMouseEnter:u,children:a?"Projects":"Projets"}),fe.jsx("button",{onMouseEnter:u,onClick:g,children:"Contact"})]}),fe.jsx("div",{class:"simple-presentation-div",children:fe.jsx("h3",{children:a?"Some of my Projects":"Quelques de mes Projets"})}),fe.jsxs("div",{class:"global-info-block",children:[fe.jsxs("div",{class:"left-aligned-class",children:[fe.jsx("div",{class:"tag-work-in-progress",children:fe.jsx("h3",{children:a?"Work in progress !":"En cours !"})}),fe.jsx("h2",{children:a?"Lymen Studio - small LLC n":"Lymen Studio - petite SARL"})]}),fe.jsxs("div",{class:"project-presentation",children:[fe.jsx("iframe",{src:"https://lymen-studio.fr/",width:"100%",height:"500px"}),fe.jsx("h2",{children:a?"It’s a Small LLC, made with friends selling differents services around developement and design.":"C'est une petite SARL, faite avec des amis proposant divers services tel que le développement et le design"}),fe.jsx("h1",{children:"For now it’s just a idea but you can check out the website ! (not fully made too)"})]})]}),fe.jsxs("div",{class:"global-info-block",children:[fe.jsxs("div",{class:"left-aligned-class",children:[fe.jsx("div",{class:"tag-work-in-progress",children:fe.jsx("h3",{children:a?"Work in progress !":"En cours !"})}),fe.jsx("h2",{children:a?"Forgotten Files - Horror Game":"Forgotten Files - Jeu d'horreur"})]}),fe.jsxs("div",{class:"project-presentation",children:[fe.jsx("img",{draggable:"false",src:"Portefolio//ressources/images/ForgottenFilesImage.png",width:"100%",height:"100%"}),fe.jsx("h2",{children:a?"It’s an horror game in the Fives Nights At Freddy’s type.":"C'est un jeu d'horreur sur le thème de Fives Nights At Freddy's."}),fe.jsxs("div",{class:"normal-left-text",children:[fe.jsx("h1",{children:a?"The game is still in developement but I hired voice actors and 47 peoples have applied.":"Le jeu est toujours dans sa phase de développement mais j'ai recruter des voice-actors et 47 personnes ont postulés."}),fe.jsx("h1",{children:a?"I’ve also worked on it with somes friends, it make me learn to :":"J'y ai travailler avec des amis, cela m'a permiti de :"}),fe.jsxs("h1",{children:["○ ",a?"Manage a":"Diriger une"," ",fe.jsx("span",{class:"highlight-me-red",children:a?"team":"équipe"})]}),fe.jsxs("h1",{children:["○ ",fe.jsx("span",{class:"highlight-me-yellow",children:a?"Recruit":"Recruter"})]}),fe.jsxs("h1",{children:["○ ",a?"Be":"Être"," ",fe.jsx("span",{class:"highlight-me-green",children:a?"multitasking":"multi-tâches"})]}),fe.jsxs("h1",{children:[a?"And":"Et"," ",fe.jsx("span",{class:"highlight-me-blue",children:a?"more":"bien plus"})," !"]})]})]})]}),fe.jsxs("div",{class:"simple-presentation-div",onClick:()=>window.location.href="https://github.com/IdNewaill",children:[fe.jsx("img",{src:"Portefolio/ressources/images/github_logo.png",width:"10%"}),fe.jsxs("h3",{children:[a?"Discover more on my Github":"Découvrez plus sur mon Github"," !"]})]})]})}function dw(o){const{setPage:e}=o,{SETfrenchORenglish:n}=o,{frenchORenglish:a}=o,r=new Audio("Portefolio/ressources/sons/onHover.wav"),c=new Audio("Portefolio/ressources/sons/click2.wav");function u(){r.play()}const[h,d]=Fs.useState(!1),p=new Audio("Portefolio/ressources/sons/click.wav");function g(S){const x=document.createElement("textarea");x.value=S,x.style.position="fixed",x.style.opacity="0",document.body.appendChild(x),x.focus(),x.select();try{document.execCommand("copy"),console.log("Fallback: Copied!")}catch(O){console.error("Fallback: Copy failed",O)}document.body.removeChild(x)}function _(){try{navigator.clipboard.writeText("gregoire.delugre@free.fr")}catch{g("idnewaill@gmail.com")}p.play(),d(S=>!0)}function v(){n(S=>0)}function y(){n(S=>1)}function E(){e(S=>0),window.scrollTo(0,0),c.play()}function T(){e(S=>1),window.scrollTo(0,0),c.play()}return fe.jsxs(fe.Fragment,{children:[fe.jsxs("div",{align:"right",class:"language",children:[fe.jsx("button",{onClick:y,children:"EN"}),fe.jsx("button",{onClick:v,children:"FR"})]}),fe.jsxs("div",{className:"main-bar",children:[fe.jsx("button",{onMouseEnter:u,onClick:E,children:a?"Home":"Accueil"}),fe.jsx("button",{onMouseEnter:u,onClick:T,children:a?"Projects":"Projets"}),fe.jsx("button",{onMouseEnter:u,children:"Contact"})]}),fe.jsx("div",{class:"simple-presentation-div",children:fe.jsx("h3",{children:a?"Contact me here":"Contactez moi ici"})}),fe.jsxs("div",{class:"contact-gmail",children:[fe.jsx("img",{src:"Portefolio/ressources/images/gmail_logo.png",width:"50%",height:"100%",onClick:()=>window.location.href="mailto:gregoire.delugre@free.fr"}),fe.jsx("button",{class:"contact-email",onClick:_,children:h?a?"It's copied !":"C'est copié !":"gregoire.delugre@free.fr"})]})]})}function pw(){const[o,e]=Fs.useState(0),[n,a]=Fs.useState(1);return o==0?fe.jsxs(fe.Fragment,{children:[fe.jsx("div",{className:"reveal-screen"}),fe.jsx("div",{class:"Scene3D",children:fe.jsx(od,{})}),fe.jsx(fw,{setPage:e,SETfrenchORenglish:a,frenchORenglish:n})]}):o==1?fe.jsxs(fe.Fragment,{children:[fe.jsx("div",{className:"reveal-screen"}),fe.jsx("div",{class:"Scene3D",children:fe.jsx(od,{})}),fe.jsx(hw,{setPage:e,SETfrenchORenglish:a,frenchORenglish:n})]}):fe.jsxs(fe.Fragment,{children:[fe.jsx("div",{className:"reveal-screen"}),fe.jsx("div",{class:"Scene3D",children:fe.jsx(od,{})}),fe.jsx(dw,{setPage:e,SETfrenchORenglish:a,frenchORenglish:n})]})}SS.createRoot(document.getElementById("root")).render(fe.jsx(Fs.StrictMode,{children:fe.jsx(pw,{})}));
