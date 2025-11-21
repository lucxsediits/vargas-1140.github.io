(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gy={exports:{}},Ll={},yy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),PE=Symbol.for("react.portal"),NE=Symbol.for("react.fragment"),xE=Symbol.for("react.strict_mode"),DE=Symbol.for("react.profiler"),VE=Symbol.for("react.provider"),OE=Symbol.for("react.context"),LE=Symbol.for("react.forward_ref"),ME=Symbol.for("react.suspense"),bE=Symbol.for("react.memo"),FE=Symbol.for("react.lazy"),xp=Symbol.iterator;function UE(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var _y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vy=Object.assign,wy={};function Hi(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||_y}Hi.prototype.isReactComponent={};Hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ey(){}Ey.prototype=Hi.prototype;function Kh(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||_y}var Qh=Kh.prototype=new Ey;Qh.constructor=Kh;vy(Qh,Hi.prototype);Qh.isPureReactComponent=!0;var Dp=Array.isArray,Ty=Object.prototype.hasOwnProperty,Xh={current:null},Iy={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ty.call(e,r)&&!Iy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:t,key:s,ref:o,props:i,_owner:Xh.current}}function jE(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function zE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vp=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zE(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case PE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bu(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(Vp,"$&/")+"/"),Ta(i,e,n,"",function(h){return h})):i!=null&&(Yh(i)&&(i=jE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Bu(s,l);o+=Ta(s,e,n,u,i)}else if(u=UE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Bu(s,l++),o+=Ta(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ia={transition:null},$E={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:Xh};function Ay(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!Yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Hi;Z.Fragment=NE;Z.Profiler=DE;Z.PureComponent=Kh;Z.StrictMode=xE;Z.Suspense=ME;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;Z.act=Ay;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ty.call(e,u)&&!Iy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:wo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:OE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VE,_context:t},t.Consumer=t};Z.createElement=Sy;Z.createFactory=function(t){var e=Sy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:LE,render:t}};Z.isValidElement=Yh;Z.lazy=function(t){return{$$typeof:FE,_payload:{_status:-1,_result:t},_init:BE}};Z.memo=function(t,e){return{$$typeof:bE,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};Z.unstable_act=Ay;Z.useCallback=function(t,e){return at.current.useCallback(t,e)};Z.useContext=function(t){return at.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Z.useEffect=function(t,e){return at.current.useEffect(t,e)};Z.useId=function(){return at.current.useId()};Z.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return at.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Z.useRef=function(t){return at.current.useRef(t)};Z.useState=function(t){return at.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return at.current.useTransition()};Z.version="18.3.1";yy.exports=Z;var Re=yy.exports;const HE=kE(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=Re,qE=Symbol.for("react.element"),GE=Symbol.for("react.fragment"),KE=Object.prototype.hasOwnProperty,QE=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XE={key:!0,ref:!0,__self:!0,__source:!0};function Cy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KE.call(e,r)&&!XE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qE,type:t,key:s,ref:o,props:i,_owner:QE.current}}Ll.Fragment=GE;Ll.jsx=Cy;Ll.jsxs=Cy;gy.exports=Ll;var $=gy.exports,Pc={},Ry={exports:{}},Tt={},ky={exports:{}},Py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,K){var Y=j.length;j.push(K);e:for(;0<Y;){var ge=Y-1>>>1,ae=j[ge];if(0<i(ae,K))j[ge]=K,j[Y]=ae,Y=ge;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var K=j[0],Y=j.pop();if(Y!==K){j[0]=Y;e:for(var ge=0,ae=j.length,Ie=ae>>>1;ge<Ie;){var sn=2*(ge+1)-1,on=j[sn],an=sn+1,ln=j[an];if(0>i(on,Y))an<ae&&0>i(ln,on)?(j[ge]=ln,j[an]=Y,ge=an):(j[ge]=on,j[sn]=Y,ge=sn);else if(an<ae&&0>i(ln,Y))j[ge]=ln,j[an]=Y,ge=an;else break e}}return K}function i(j,K){var Y=j.sortIndex-K.sortIndex;return Y!==0?Y:j.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,A=!1,P=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=j)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function D(j){if(x=!1,S(j),!P)if(n(u)!==null)P=!0,es(V);else{var K=n(h);K!==null&&rn(D,K.startTime-j)}}function V(j,K){P=!1,x&&(x=!1,I(y),y=-1),A=!0;var Y=g;try{for(S(K),m=n(u);m!==null&&(!(m.expirationTime>K)||j&&!C());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var ae=ge(m.expirationTime<=K);K=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),S(K)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var sn=n(h);sn!==null&&rn(D,sn.startTime-K),Ie=!1}return Ie}finally{m=null,g=Y,A=!1}}var L=!1,_=null,y=-1,v=5,E=-1;function C(){return!(t.unstable_now()-E<v)}function k(){if(_!==null){var j=t.unstable_now();E=j;var K=!0;try{K=_(!0,j)}finally{K?T():(L=!1,_=null)}}else L=!1}var T;if(typeof w=="function")T=function(){w(k)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Er=St.port2;St.port1.onmessage=k,T=function(){Er.postMessage(null)}}else T=function(){M(k,0)};function es(j){_=j,L||(L=!0,T())}function rn(j,K){y=M(function(){j(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,es(V))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var Y=g;g=K;try{return j()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=g;g=j;try{return K()}finally{g=Y}},t.unstable_scheduleCallback=function(j,K,Y){var ge=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ge+Y:ge):Y=ge,j){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,j={id:f++,callback:K,priorityLevel:j,startTime:Y,expirationTime:ae,sortIndex:-1},Y>ge?(j.sortIndex=Y,e(h,j),n(u)===null&&j===n(h)&&(x?(I(y),y=-1):x=!0,rn(D,Y-ge))):(j.sortIndex=ae,e(u,j),P||A||(P=!0,es(V))),j},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(j){var K=g;return function(){var Y=g;g=K;try{return j.apply(this,arguments)}finally{g=Y}}}})(Py);ky.exports=Py;var YE=ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE=Re,Et=YE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ny=new Set,Gs={};function Kr(t,e){xi(t,e),xi(t+"Capture",e)}function xi(t,e){for(Gs[t]=e,t=0;t<e.length;t++)Ny.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=Object.prototype.hasOwnProperty,ZE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Lp={};function e1(t){return Nc.call(Lp,t)?!0:Nc.call(Op,t)?!1:ZE.test(t)?Lp[t]=!0:(Op[t]=!0,!1)}function t1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n1(t,e,n,r){if(e===null||typeof e>"u"||t1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jh=/[\-:]([a-z])/g;function Zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jh,Zh);$e[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jh,Zh);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jh,Zh);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ed(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n1(e,n,i,r)&&(n=null),r||i===null?e1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=JE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),ai=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),xy=Symbol.for("react.provider"),Dy=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Vy=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function ps(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,$u;function Is(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Hu=!1;function Wu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function r1(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function Oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case li:return"Fragment";case ai:return"Portal";case xc:return"Profiler";case td:return"StrictMode";case Dc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dy:return(t.displayName||"Context")+".Consumer";case xy:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rd:return e=t.displayName||null,e!==null?e:Oc(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return Oc(t(e))}catch{}}return null}function i1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oc(e);case 8:return e===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s1(t){var e=Oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=s1(t))}function Ly(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function My(t,e){e=e.checked,e!=null&&ed(t,"checked",e,!1)}function Mc(t,e){My(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&bc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bc(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ss(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function by(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Uy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o1=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(t){o1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ds[e]=Ds[t]})});function jy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ds.hasOwnProperty(t)&&Ds[t]?(""+e).trim():e+"px"}function zy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var a1=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jc(t,e){if(e){if(a1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bc=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $c=null,Ei=null,Ti=null;function zp(t){if(t=Io(t)){if(typeof $c!="function")throw Error(F(280));var e=t.stateNode;e&&(e=jl(e),$c(t.stateNode,t.type,e))}}function By(t){Ei?Ti?Ti.push(t):Ti=[t]:Ei=t}function $y(){if(Ei){var t=Ei,e=Ti;if(Ti=Ei=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function Hy(t,e){return t(e)}function Wy(){}var qu=!1;function qy(t,e,n){if(qu)return t(e,n);qu=!0;try{return Hy(t,e,n)}finally{qu=!1,(Ei!==null||Ti!==null)&&(Wy(),$y())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Hc=!1;if(_n)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Hc=!1}function l1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Vs=!1,qa=null,Ga=!1,Wc=null,u1={onError:function(t){Vs=!0,qa=t}};function c1(t,e,n,r,i,s,o,l,u){Vs=!1,qa=null,l1.apply(u1,arguments)}function h1(t,e,n,r,i,s,o,l,u){if(c1.apply(this,arguments),Vs){if(Vs){var h=qa;Vs=!1,qa=null}else throw Error(F(198));Ga||(Ga=!0,Wc=h)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(Qr(t)!==t)throw Error(F(188))}function d1(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bp(i),t;if(s===r)return Bp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Ky(t){return t=d1(t),t!==null?Qy(t):null}function Qy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qy(t);if(e!==null)return e;t=t.sibling}return null}var Xy=Et.unstable_scheduleCallback,$p=Et.unstable_cancelCallback,f1=Et.unstable_shouldYield,p1=Et.unstable_requestPaint,Ae=Et.unstable_now,m1=Et.unstable_getCurrentPriorityLevel,sd=Et.unstable_ImmediatePriority,Yy=Et.unstable_UserBlockingPriority,Ka=Et.unstable_NormalPriority,g1=Et.unstable_LowPriority,Jy=Et.unstable_IdlePriority,Ml=null,Gt=null;function y1(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:w1,_1=Math.log,v1=Math.LN2;function w1(t){return t>>>=0,t===0?32:31-(_1(t)/v1|0)|0}var ra=64,ia=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=As(l):(s&=o,s!==0&&(r=As(s)))}else o=n&~i,o!==0?r=As(o):s!==0&&(r=As(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function E1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=E1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function qc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zy(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function I1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function e_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t_,ad,n_,r_,i_,Gc=!1,sa=[],qn=null,Gn=null,Kn=null,Xs=new Map,Ys=new Map,bn=[],S1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Xs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function gs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Io(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function A1(t,e,n,r,i){switch(e){case"focusin":return qn=gs(qn,t,e,n,r,i),!0;case"dragenter":return Gn=gs(Gn,t,e,n,r,i),!0;case"mouseover":return Kn=gs(Kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xs.set(s,gs(Xs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,gs(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function s_(t){var e=Pr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gy(n),e!==null){t.blockedOn=e,i_(t.priority,function(){n_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bc=r,n.target.dispatchEvent(r),Bc=null}else return e=Io(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){Sa(t)&&n.delete(e)}function C1(){Gc=!1,qn!==null&&Sa(qn)&&(qn=null),Gn!==null&&Sa(Gn)&&(Gn=null),Kn!==null&&Sa(Kn)&&(Kn=null),Xs.forEach(Wp),Ys.forEach(Wp)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,C1)))}function Js(t){function e(i){return ys(i,t)}if(0<sa.length){ys(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&ys(qn,t),Gn!==null&&ys(Gn,t),Kn!==null&&ys(Kn,t),Xs.forEach(e),Ys.forEach(e),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)s_(n),n.blockedOn===null&&bn.shift()}var Ii=Rn.ReactCurrentBatchConfig,Xa=!0;function R1(t,e,n,r){var i=oe,s=Ii.transition;Ii.transition=null;try{oe=1,ld(t,e,n,r)}finally{oe=i,Ii.transition=s}}function k1(t,e,n,r){var i=oe,s=Ii.transition;Ii.transition=null;try{oe=4,ld(t,e,n,r)}finally{oe=i,Ii.transition=s}}function ld(t,e,n,r){if(Xa){var i=Kc(t,e,n,r);if(i===null)rc(t,e,r,Ya,n),Hp(t,r);else if(A1(i,t,e,n,r))r.stopPropagation();else if(Hp(t,r),e&4&&-1<S1.indexOf(t)){for(;i!==null;){var s=Io(i);if(s!==null&&t_(s),s=Kc(t,e,n,r),s===null&&rc(t,e,r,Ya,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rc(t,e,r,null,n)}}var Ya=null;function Kc(t,e,n,r){if(Ya=null,t=id(r),t=Pr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ya=t,null}function o_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m1()){case sd:return 1;case Yy:return 4;case Ka:case g1:return 16;case Jy:return 536870912;default:return 16}default:return 16}}var $n=null,ud=null,Aa=null;function a_(){if(Aa)return Aa;var t,e=ud,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Aa=i.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function qp(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:qp,this.isPropagationStopped=qp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=It(Wi),To=ve({},Wi,{view:0,detail:0}),P1=It(To),Ku,Qu,_s,bl=ve({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(Ku=t.screenX-_s.screenX,Qu=t.screenY-_s.screenY):Qu=Ku=0,_s=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Gp=It(bl),N1=ve({},bl,{dataTransfer:0}),x1=It(N1),D1=ve({},To,{relatedTarget:0}),Xu=It(D1),V1=ve({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=It(V1),L1=ve({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M1=It(L1),b1=ve({},Wi,{data:0}),Kp=It(b1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j1[t])?!!e[t]:!1}function hd(){return z1}var B1=ve({},To,{key:function(t){if(t.key){var e=F1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$1=It(B1),H1=ve({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=It(H1),W1=ve({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),q1=It(W1),G1=ve({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),K1=It(G1),Q1=ve({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X1=It(Q1),Y1=[9,13,27,32],dd=_n&&"CompositionEvent"in window,Os=null;_n&&"documentMode"in document&&(Os=document.documentMode);var J1=_n&&"TextEvent"in window&&!Os,l_=_n&&(!dd||Os&&8<Os&&11>=Os),Xp=" ",Yp=!1;function u_(t,e){switch(t){case"keyup":return Y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function Z1(t,e){switch(t){case"compositionend":return c_(e);case"keypress":return e.which!==32?null:(Yp=!0,Xp);case"textInput":return t=e.data,t===Xp&&Yp?null:t;default:return null}}function eT(t,e){if(ui)return t==="compositionend"||!dd&&u_(t,e)?(t=a_(),Aa=ud=$n=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l_&&e.locale!=="ko"?null:e.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tT[t.type]:e==="textarea"}function h_(t,e,n,r){By(r),e=Ja(e,"onChange"),0<e.length&&(n=new cd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ls=null,Zs=null;function nT(t){T_(t,0)}function Fl(t){var e=di(t);if(Ly(e))return t}function rT(t,e){if(t==="change")return e}var d_=!1;if(_n){var Yu;if(_n){var Ju="oninput"in document;if(!Ju){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Ju=typeof Zp.oninput=="function"}Yu=Ju}else Yu=!1;d_=Yu&&(!document.documentMode||9<document.documentMode)}function em(){Ls&&(Ls.detachEvent("onpropertychange",f_),Zs=Ls=null)}function f_(t){if(t.propertyName==="value"&&Fl(Zs)){var e=[];h_(e,Zs,t,id(t)),qy(nT,e)}}function iT(t,e,n){t==="focusin"?(em(),Ls=e,Zs=n,Ls.attachEvent("onpropertychange",f_)):t==="focusout"&&em()}function sT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Zs)}function oT(t,e){if(t==="click")return Fl(e)}function aT(t,e){if(t==="input"||t==="change")return Fl(e)}function lT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:lT;function eo(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nc.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function p_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m_(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uT(t){var e=m_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p_(n.ownerDocument.documentElement,n)){if(r!==null&&fd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cT=_n&&"documentMode"in document&&11>=document.documentMode,ci=null,Qc=null,Ms=null,Xc=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||ci==null||ci!==Wa(r)||(r=ci,"selectionStart"in r&&fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&eo(Ms,r)||(Ms=r,r=Ja(Qc,"onSelect"),0<r.length&&(e=new cd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Zu={},g_={};_n&&(g_=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function Ul(t){if(Zu[t])return Zu[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g_)return Zu[t]=e[n];return t}var y_=Ul("animationend"),__=Ul("animationiteration"),v_=Ul("animationstart"),w_=Ul("transitionend"),E_=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){E_.set(t,e),Kr(e,[t])}for(var ec=0;ec<im.length;ec++){var tc=im[ec],hT=tc.toLowerCase(),dT=tc[0].toUpperCase()+tc.slice(1);gr(hT,"on"+dT)}gr(y_,"onAnimationEnd");gr(__,"onAnimationIteration");gr(v_,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(w_,"onTransitionEnd");xi("onMouseEnter",["mouseout","mouseover"]);xi("onMouseLeave",["mouseout","mouseover"]);xi("onPointerEnter",["pointerout","pointerover"]);xi("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,h1(r,e,void 0,t),t.currentTarget=null}function T_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}}}if(Ga)throw t=Wc,Ga=!1,Wc=null,t}function he(t,e){var n=e[th];n===void 0&&(n=e[th]=new Set);var r=t+"__bubble";n.has(r)||(I_(e,t,2,!1),n.add(r))}function nc(t,e,n){var r=0;e&&(r|=4),I_(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[la]){t[la]=!0,Ny.forEach(function(n){n!=="selectionchange"&&(fT.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,nc("selectionchange",!1,e))}}function I_(t,e,n,r){switch(o_(e)){case 1:var i=R1;break;case 4:i=k1;break;default:i=ld}n=i.bind(null,e,n,t),i=void 0,!Hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qy(function(){var h=s,f=id(n),m=[];e:{var g=E_.get(t);if(g!==void 0){var A=cd,P=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":A=$1;break;case"focusin":P="focus",A=Xu;break;case"focusout":P="blur",A=Xu;break;case"beforeblur":case"afterblur":A=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=q1;break;case y_:case __:case v_:A=O1;break;case w_:A=K1;break;case"scroll":A=P1;break;case"wheel":A=X1;break;case"copy":case"cut":case"paste":A=M1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Qp}var x=(e&4)!==0,M=!x&&t==="scroll",I=x?g!==null?g+"Capture":null:g;x=[];for(var w=h,S;w!==null;){S=w;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=Qs(w,I),D!=null&&x.push(no(w,D,S)))),M)break;w=w.return}0<x.length&&(g=new A(g,P,null,n,f),m.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Bc&&(P=n.relatedTarget||n.fromElement)&&(Pr(P)||P[vn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Pr(P):null,P!==null&&(M=Qr(P),P!==M||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(x=Gp,D="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=Qp,D="onPointerLeave",I="onPointerEnter",w="pointer"),M=A==null?g:di(A),S=P==null?g:di(P),g=new x(D,w+"leave",A,n,f),g.target=M,g.relatedTarget=S,D=null,Pr(f)===h&&(x=new x(I,w+"enter",P,n,f),x.target=S,x.relatedTarget=M,D=x),M=D,A&&P)t:{for(x=A,I=P,w=0,S=x;S;S=ni(S))w++;for(S=0,D=I;D;D=ni(D))S++;for(;0<w-S;)x=ni(x),w--;for(;0<S-w;)I=ni(I),S--;for(;w--;){if(x===I||I!==null&&x===I.alternate)break t;x=ni(x),I=ni(I)}x=null}else x=null;A!==null&&om(m,g,A,x,!1),P!==null&&M!==null&&om(m,M,P,x,!0)}}e:{if(g=h?di(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var V=rT;else if(Jp(g))if(d_)V=aT;else{V=sT;var L=iT}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=oT);if(V&&(V=V(t,h))){h_(m,V,n,f);break e}L&&L(t,g,h),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&bc(g,"number",g.value)}switch(L=h?di(h):window,t){case"focusin":(Jp(L)||L.contentEditable==="true")&&(ci=L,Qc=h,Ms=null);break;case"focusout":Ms=Qc=ci=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,rm(m,n,f);break;case"selectionchange":if(cT)break;case"keydown":case"keyup":rm(m,n,f)}var _;if(dd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ui?u_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(l_&&n.locale!=="ko"&&(ui||y!=="onCompositionStart"?y==="onCompositionEnd"&&ui&&(_=a_()):($n=f,ud="value"in $n?$n.value:$n.textContent,ui=!0)),L=Ja(h,y),0<L.length&&(y=new Kp(y,t,null,n,f),m.push({event:y,listeners:L}),_?y.data=_:(_=c_(n),_!==null&&(y.data=_)))),(_=J1?Z1(t,n):eT(t,n))&&(h=Ja(h,"onBeforeInput"),0<h.length&&(f=new Kp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=_))}T_(m,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(no(t,s,i)),s=Qs(t,e),s!=null&&r.push(no(t,s,i))),t=t.return}return r}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Qs(n,s),u!=null&&o.unshift(no(n,u,l))):i||(u=Qs(n,s),u!=null&&o.push(no(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pT=/\r\n?/g,mT=/\u0000|\uFFFD/g;function am(t){return(typeof t=="string"?t:""+t).replace(pT,`
`).replace(mT,"")}function ua(t,e,n){if(e=am(e),am(t)!==e&&n)throw Error(F(425))}function Za(){}var Yc=null,Jc=null;function Zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,gT=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(_T)}:eh;function _T(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Js(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),qt="__reactFiber$"+qi,ro="__reactProps$"+qi,vn="__reactContainer$"+qi,th="__reactEvents$"+qi,vT="__reactListeners$"+qi,wT="__reactHandles$"+qi;function Pr(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[qt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[qt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function jl(t){return t[ro]||null}var nh=[],fi=-1;function yr(t){return{current:t}}function pe(t){0>fi||(t.current=nh[fi],nh[fi]=null,fi--)}function ue(t,e){fi++,nh[fi]=t.current,t.current=e}var ar={},tt=yr(ar),ft=yr(!1),Fr=ar;function Di(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function el(){pe(ft),pe(tt)}function cm(t,e,n){if(tt.current!==ar)throw Error(F(168));ue(tt,e),ue(ft,n)}function S_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,i1(t)||"Unknown",i));return ve({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Fr=tt.current,ue(tt,t),ue(ft,ft.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=S_(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(tt),ue(tt,t)):pe(ft),ue(ft,n)}var dn=null,zl=!1,sc=!1;function A_(t){dn===null?dn=[t]:dn.push(t)}function ET(t){zl=!0,A_(t)}function _r(){if(!sc&&dn!==null){sc=!0;var t=0,e=oe;try{var n=dn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,zl=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),Xy(sd,_r),i}finally{oe=e,sc=!1}}return null}var pi=[],mi=0,nl=null,rl=0,At=[],Ct=0,Ur=null,fn=1,pn="";function Cr(t,e){pi[mi++]=rl,pi[mi++]=nl,nl=t,rl=e}function C_(t,e,n){At[Ct++]=fn,At[Ct++]=pn,At[Ct++]=Ur,Ur=t;var r=fn;t=pn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-jt(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function pd(t){t.return!==null&&(Cr(t,1),C_(t,1,0))}function md(t){for(;t===nl;)nl=pi[--mi],pi[mi]=null,rl=pi[--mi],pi[mi]=null;for(;t===Ur;)Ur=At[--Ct],At[Ct]=null,pn=At[--Ct],At[Ct]=null,fn=At[--Ct],At[Ct]=null}var wt=null,_t=null,me=!1,bt=null;function R_(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,_t=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,_t=null,!0):!1;default:return!1}}function rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ih(t){if(me){var e=_t;if(e){var n=e;if(!dm(t,e)){if(rh(t))throw Error(F(418));e=Qn(n.nextSibling);var r=wt;e&&dm(t,e)?R_(r,n):(t.flags=t.flags&-4097|2,me=!1,wt=t)}}else{if(rh(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,wt=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function ca(t){if(t!==wt)return!1;if(!me)return fm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zc(t.type,t.memoizedProps)),e&&(e=_t)){if(rh(t))throw k_(),Error(F(418));for(;e;)R_(t,e),e=Qn(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=wt?Qn(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=_t;t;)t=Qn(t.nextSibling)}function Vi(){_t=wt=null,me=!1}function gd(t){bt===null?bt=[t]:bt.push(t)}var TT=Rn.ReactCurrentBatchConfig;function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function P_(t){function e(I,w){if(t){var S=I.deletions;S===null?(I.deletions=[w],I.flags|=16):S.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=Zn(I,w),I.index=0,I.sibling=null,I}function s(I,w,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<w?(I.flags|=2,w):S):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,S,D){return w===null||w.tag!==6?(w=dc(S,I.mode,D),w.return=I,w):(w=i(w,S),w.return=I,w)}function u(I,w,S,D){var V=S.type;return V===li?f(I,w,S.props.children,D,S.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ln&&pm(V)===w.type)?(D=i(w,S.props),D.ref=vs(I,w,S),D.return=I,D):(D=Va(S.type,S.key,S.props,null,I.mode,D),D.ref=vs(I,w,S),D.return=I,D)}function h(I,w,S,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=fc(S,I.mode,D),w.return=I,w):(w=i(w,S.children||[]),w.return=I,w)}function f(I,w,S,D,V){return w===null||w.tag!==7?(w=Or(S,I.mode,D,V),w.return=I,w):(w=i(w,S),w.return=I,w)}function m(I,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=dc(""+w,I.mode,S),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ea:return S=Va(w.type,w.key,w.props,null,I.mode,S),S.ref=vs(I,null,w),S.return=I,S;case ai:return w=fc(w,I.mode,S),w.return=I,w;case Ln:var D=w._init;return m(I,D(w._payload),S)}if(Ss(w)||ps(w))return w=Or(w,I.mode,S,null),w.return=I,w;ha(I,w)}return null}function g(I,w,S,D){var V=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return V!==null?null:l(I,w,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ea:return S.key===V?u(I,w,S,D):null;case ai:return S.key===V?h(I,w,S,D):null;case Ln:return V=S._init,g(I,w,V(S._payload),D)}if(Ss(S)||ps(S))return V!==null?null:f(I,w,S,D,null);ha(I,S)}return null}function A(I,w,S,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,l(w,I,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ea:return I=I.get(D.key===null?S:D.key)||null,u(w,I,D,V);case ai:return I=I.get(D.key===null?S:D.key)||null,h(w,I,D,V);case Ln:var L=D._init;return A(I,w,S,L(D._payload),V)}if(Ss(D)||ps(D))return I=I.get(S)||null,f(w,I,D,V,null);ha(w,D)}return null}function P(I,w,S,D){for(var V=null,L=null,_=w,y=w=0,v=null;_!==null&&y<S.length;y++){_.index>y?(v=_,_=null):v=_.sibling;var E=g(I,_,S[y],D);if(E===null){_===null&&(_=v);break}t&&_&&E.alternate===null&&e(I,_),w=s(E,w,y),L===null?V=E:L.sibling=E,L=E,_=v}if(y===S.length)return n(I,_),me&&Cr(I,y),V;if(_===null){for(;y<S.length;y++)_=m(I,S[y],D),_!==null&&(w=s(_,w,y),L===null?V=_:L.sibling=_,L=_);return me&&Cr(I,y),V}for(_=r(I,_);y<S.length;y++)v=A(_,I,y,S[y],D),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?y:v.key),w=s(v,w,y),L===null?V=v:L.sibling=v,L=v);return t&&_.forEach(function(C){return e(I,C)}),me&&Cr(I,y),V}function x(I,w,S,D){var V=ps(S);if(typeof V!="function")throw Error(F(150));if(S=V.call(S),S==null)throw Error(F(151));for(var L=V=null,_=w,y=w=0,v=null,E=S.next();_!==null&&!E.done;y++,E=S.next()){_.index>y?(v=_,_=null):v=_.sibling;var C=g(I,_,E.value,D);if(C===null){_===null&&(_=v);break}t&&_&&C.alternate===null&&e(I,_),w=s(C,w,y),L===null?V=C:L.sibling=C,L=C,_=v}if(E.done)return n(I,_),me&&Cr(I,y),V;if(_===null){for(;!E.done;y++,E=S.next())E=m(I,E.value,D),E!==null&&(w=s(E,w,y),L===null?V=E:L.sibling=E,L=E);return me&&Cr(I,y),V}for(_=r(I,_);!E.done;y++,E=S.next())E=A(_,I,y,E.value,D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),w=s(E,w,y),L===null?V=E:L.sibling=E,L=E);return t&&_.forEach(function(k){return e(I,k)}),me&&Cr(I,y),V}function M(I,w,S,D){if(typeof S=="object"&&S!==null&&S.type===li&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ea:e:{for(var V=S.key,L=w;L!==null;){if(L.key===V){if(V=S.type,V===li){if(L.tag===7){n(I,L.sibling),w=i(L,S.props.children),w.return=I,I=w;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ln&&pm(V)===L.type){n(I,L.sibling),w=i(L,S.props),w.ref=vs(I,L,S),w.return=I,I=w;break e}n(I,L);break}else e(I,L);L=L.sibling}S.type===li?(w=Or(S.props.children,I.mode,D,S.key),w.return=I,I=w):(D=Va(S.type,S.key,S.props,null,I.mode,D),D.ref=vs(I,w,S),D.return=I,I=D)}return o(I);case ai:e:{for(L=S.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(I,w.sibling),w=i(w,S.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=fc(S,I.mode,D),w.return=I,I=w}return o(I);case Ln:return L=S._init,M(I,w,L(S._payload),D)}if(Ss(S))return P(I,w,S,D);if(ps(S))return x(I,w,S,D);ha(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,S),w.return=I,I=w):(n(I,w),w=dc(S,I.mode,D),w.return=I,I=w),o(I)):n(I,w)}return M}var Oi=P_(!0),N_=P_(!1),il=yr(null),sl=null,gi=null,yd=null;function _d(){yd=gi=sl=null}function vd(t){var e=il.current;pe(il),t._currentValue=e}function sh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){sl=t,yd=gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(yd!==t)if(t={context:t,memoizedValue:e,next:null},gi===null){if(sl===null)throw Error(F(308));gi=t,sl.dependencies={lanes:0,firstContext:t}}else gi=gi.next=t;return e}var Nr=null;function wd(t){Nr===null?Nr=[t]:Nr.push(t)}function x_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wd(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,wd(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}function mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(g=e,A=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){m=P.call(A,m,g);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,g=typeof P=="function"?P.call(A,m,g):P,g==null)break e;m=ve({},m,g);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=m}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var So={},Kt=yr(So),io=yr(So),so=yr(So);function xr(t){if(t===So)throw Error(F(174));return t}function Td(t,e){switch(ue(so,e),ue(io,t),ue(Kt,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uc(e,t)}pe(Kt),ue(Kt,e)}function Li(){pe(Kt),pe(io),pe(so)}function V_(t){xr(so.current);var e=xr(Kt.current),n=Uc(e,t.type);e!==n&&(ue(io,t),ue(Kt,n))}function Id(t){io.current===t&&(pe(Kt),pe(io))}var ye=yr(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Sd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var ka=Rn.ReactCurrentDispatcher,ac=Rn.ReactCurrentBatchConfig,jr=0,_e=null,Ne=null,Me=null,ll=!1,bs=!1,oo=0,IT=0;function Qe(){throw Error(F(321))}function Ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function Cd(t,e,n,r,i,s){if(jr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ka.current=t===null||t.memoizedState===null?RT:kT,t=n(r,i),bs){s=0;do{if(bs=!1,oo=0,25<=s)throw Error(F(301));s+=1,Me=Ne=null,e.updateQueue=null,ka.current=PT,t=n(r,i)}while(bs)}if(ka.current=ul,e=Ne!==null&&Ne.next!==null,jr=0,Me=Ne=_e=null,ll=!1,e)throw Error(F(300));return t}function Rd(){var t=oo!==0;return oo=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?_e.memoizedState=Me=t:Me=Me.next=t,Me}function Dt(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Me===null?_e.memoizedState:Me.next;if(e!==null)Me=e,Ne=t;else{if(t===null)throw Error(F(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Me===null?_e.memoizedState=Me=t:Me=Me.next=t}return Me}function ao(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((jr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,zr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Bt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function O_(){}function L_(t,e){var n=_e,r=Dt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,kd(F_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,lo(9,b_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(F(349));jr&30||M_(n,e,i)}return i}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,r){e.value=n,e.getSnapshot=r,U_(e)&&j_(t)}function F_(t,e,n){return n(function(){U_(e)&&j_(t)})}function U_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function j_(t){var e=wn(t,1);e!==null&&zt(e,t,1,-1)}function ym(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=CT.bind(null,_e,t),[e.memoizedState,t]}function lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function z_(){return Dt().memoizedState}function Pa(t,e,n,r){var i=Ht();_e.flags|=t,i.memoizedState=lo(1|e,n,void 0,r===void 0?null:r)}function Bl(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Ad(r,o.deps)){i.memoizedState=lo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=lo(1|e,n,s,r)}function _m(t,e){return Pa(8390656,8,t,e)}function kd(t,e){return Bl(2048,8,t,e)}function B_(t,e){return Bl(4,2,t,e)}function $_(t,e){return Bl(4,4,t,e)}function H_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W_(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,H_.bind(null,e,t),n)}function Pd(){}function q_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return jr&21?(Bt(n,e)||(n=Zy(),_e.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function ST(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=ac.transition;ac.transition={};try{t(!1),e()}finally{oe=n,ac.transition=r}}function Q_(){return Dt().memoizedState}function AT(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X_(t))Y_(e,n);else if(n=x_(t,e,n,r),n!==null){var i=ot();zt(n,t,r,i),J_(n,e,r)}}function CT(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X_(t))Y_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bt(l,o)){var u=e.interleaved;u===null?(i.next=i,wd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=x_(t,e,i,r),n!==null&&(i=ot(),zt(n,t,r,i),J_(n,e,r))}}function X_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function Y_(t,e){bs=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,od(t,n)}}var ul={readContext:xt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},RT={readContext:xt,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,H_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AT.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:Pd,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=ST.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Ht();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),be===null)throw Error(F(349));jr&30||M_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_m(F_.bind(null,r,s,t),[t]),r.flags|=2048,lo(9,b_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ht(),e=be.identifierPrefix;if(me){var n=pn,r=fn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kT={readContext:xt,useCallback:q_,useContext:xt,useEffect:kd,useImperativeHandle:W_,useInsertionEffect:B_,useLayoutEffect:$_,useMemo:G_,useReducer:lc,useRef:z_,useState:function(){return lc(ao)},useDebugValue:Pd,useDeferredValue:function(t){var e=Dt();return K_(e,Ne.memoizedState,t)},useTransition:function(){var t=lc(ao)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:L_,useId:Q_,unstable_isNewReconciler:!1},PT={readContext:xt,useCallback:q_,useContext:xt,useEffect:kd,useImperativeHandle:W_,useInsertionEffect:B_,useLayoutEffect:$_,useMemo:G_,useReducer:uc,useRef:z_,useState:function(){return uc(ao)},useDebugValue:Pd,useDeferredValue:function(t){var e=Dt();return Ne===null?e.memoizedState=t:K_(e,Ne.memoizedState,t)},useTransition:function(){var t=uc(ao)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:L_,useId:Q_,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function oh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Jn(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(zt(e,t,i,r),Ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Jn(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(zt(e,t,i,r),Ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Jn(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(zt(e,t,r,n),Ra(e,t,r))}};function vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(n,r)||!eo(i,s):!0}function Z_(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=pt(e)?Fr:tt.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function ah(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=pt(e)?Fr:tt.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(oh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$l.enqueueReplaceState(i,i.state,null),ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mi(t,e){try{var n="",r=e;do n+=r1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NT=typeof WeakMap=="function"?WeakMap:Map;function ev(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hl||(hl=!0,_h=r),lh(t,e)},n}function tv(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lh(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Em(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HT.bind(null,t,e,n),e.then(t,t))}function Tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var xT=Rn.ReactCurrentOwner,dt=!1;function st(t,e,n,r){e.child=t===null?N_(e,null,n,r):Oi(e,t.child,n,r)}function Sm(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=Cd(t,e,n,r,s,i),n=Rd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&n&&pd(e),e.flags|=1,st(t,e,r,i),e.child)}function Am(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nv(t,e,s,r,i)):(t=Va(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function nv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(eo(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,En(t,e,i)}return uh(t,e,n,r,i)}function rv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(_i,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(_i,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(_i,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(_i,yt),yt|=r;return st(t,e,i,n),e.child}function iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uh(t,e,n,r,i){var s=pt(n)?Fr:tt.current;return s=Di(e,s),Si(e,i),n=Cd(t,e,n,r,s,i),r=Rd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&r&&pd(e),e.flags|=1,st(t,e,n,i),e.child)}function Cm(t,e,n,r,i){if(pt(n)){var s=!0;tl(e)}else s=!1;if(Si(e,i),e.stateNode===null)Na(t,e),Z_(e,n,r),ah(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=xt(h):(h=pt(n)?Fr:tt.current,h=Di(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&wm(e,o,r,h),Mn=!1;var g=e.memoizedState;o.state=g,ol(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ft.current||Mn?(typeof f=="function"&&(oh(e,n,f,r),u=e.memoizedState),(l=Mn||vm(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Lt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=pt(n)?Fr:tt.current,u=Di(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&wm(e,o,r,u),Mn=!1,g=e.memoizedState,o.state=g,ol(e,r,o,i);var P=e.memoizedState;l!==m||g!==P||ft.current||Mn?(typeof A=="function"&&(oh(e,n,A,r),P=e.memoizedState),(h=Mn||vm(e,n,h,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ch(t,e,n,r,s,i)}function ch(t,e,n,r,i,s){iv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),En(t,e,s);r=e.stateNode,xT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function sv(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),Td(t,e.containerInfo)}function Rm(t,e,n,r,i){return Vi(),gd(i),e.flags|=256,st(t,e,n,r),e.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ov(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ye,i&1),t===null)return ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ql(o,r,0,null),t=Or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dh(n),e.memoizedState=hh,t):Nd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Zn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zn(l,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hh,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nd(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&gd(r),Oi(e,t.child,null,n),t=Nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error(F(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ql({mode:"visible",children:r.children},i,0,null),s=Or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=dh(o),e.memoizedState=hh,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=cc(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),zt(r,t,i,-1))}return Md(),r=cc(Error(F(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Qn(i.nextSibling),wt=e,me=!0,bt=null,t!==null&&(At[Ct++]=fn,At[Ct++]=pn,At[Ct++]=Ur,fn=t.id,pn=t.overflow,Ur=e),e=Nd(e,r.children),e.flags|=4096,e)}function km(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sh(t.return,e,n)}function hc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function av(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&km(t,n,e);else if(t.tag===19)km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hc(e,!0,n,null,s);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VT(t,e,n){switch(e.tag){case 3:sv(e),Vi();break;case 5:V_(e);break;case 1:pt(e.type)&&tl(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(ue(ye,ye.current&1),t=En(t,e,n),t!==null?t.sibling:null);ue(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return av(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,rv(t,e,n)}return En(t,e,n)}var lv,fh,uv,cv;lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fh=function(){};uv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xr(Kt.current);var s=null;switch(n){case"input":i=Lc(t,i),r=Lc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Fc(t,i),r=Fc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Za)}jc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Gs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};cv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ws(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OT(t,e,n){var r=e.pendingProps;switch(md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return pt(e.type)&&el(),Xe(e),null;case 3:return r=e.stateNode,Li(),pe(ft),pe(tt),Sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(Eh(bt),bt=null))),fh(t,e),Xe(e),null;case 5:Id(e);var i=xr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)uv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Xe(e),null}if(t=xr(Kt.current),ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[ro]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Cs.length;i++)he(Cs[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":bp(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Up(r,s),he("invalid",r)}jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",""+l]):Gs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":ta(r),Fp(r,s,!0);break;case"textarea":ta(r),jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[ro]=r,lv(t,e,!1,!1),e.stateNode=t;e:{switch(o=zc(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<Cs.length;i++)he(Cs[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":bp(t,r),i=Lc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),he("invalid",t);break;case"textarea":Up(t,r),i=Fc(t,r),he("invalid",t);break;default:i=r}jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?zy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ks(t,u):typeof u=="number"&&Ks(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&ed(t,s,u,o))}switch(n){case"input":ta(t),Fp(t,r,!1);break;case"textarea":ta(t),jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)cv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=xr(so.current),xr(Kt.current),ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return Xe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&e.mode&1&&!(e.flags&128))k_(),Vi(),e.flags|=98560,s=!1;else if(s=ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[qt]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else bt!==null&&(Eh(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?De===0&&(De=3):Md())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Li(),fh(t,e),t===null&&to(e.stateNode.containerInfo),Xe(e),null;case 10:return vd(e.type._context),Xe(e),null;case 17:return pt(e.type)&&el(),Xe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ws(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>bi&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Xe(e),null}else 2*Ae()-s.renderingStartTime>bi&&n!==1073741824&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ue(ye,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function LT(t,e){switch(md(e),e.tag){case 1:return pt(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(),pe(ft),pe(tt),Sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Li(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var fa=!1,Ze=!1,MT=typeof WeakSet=="function"?WeakSet:Set,B=null;function yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function ph(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Pm=!1;function bT(t,e){if(Yc=Xa,t=m_(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jc={focusedElem:t,selectionRange:n},Xa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,M=P.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?x:Lt(e.type,x),M);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Te(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return P=Pm,Pm=!1,P}function Fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ph(e,n,s)}i=i.next}while(i!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hv(t){var e=t.alternate;e!==null&&(t.alternate=null,hv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[ro],delete e[th],delete e[vT],delete e[wT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(r!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}function yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yh(t,e,n),t=t.sibling;t!==null;)yh(t,e,n),t=t.sibling}var Ue=null,Mt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)fv(t,e,n),n=n.sibling}function fv(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ze||yi(n,e);case 6:var r=Ue,i=Mt;Ue=null,Vn(t,e,n),Ue=r,Mt=i,Ue!==null&&(Mt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Mt?(t=Ue,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),Js(t)):ic(Ue,n.stateNode));break;case 4:r=Ue,i=Mt,Ue=n.stateNode.containerInfo,Mt=!0,Vn(t,e,n),Ue=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ph(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Ze&&(yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Vn(t,e,n),Ze=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MT),e.forEach(function(r){var i=qT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Mt=!1;break e;case 3:Ue=l.stateNode.containerInfo,Mt=!0;break e;case 4:Ue=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(Ue===null)throw Error(F(160));fv(s,o,i),Ue=null,Mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pv(e,t),e=e.sibling}function pv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),$t(t),r&4){try{Fs(3,t,t.return),Hl(3,t)}catch(x){Te(t,t.return,x)}try{Fs(5,t,t.return)}catch(x){Te(t,t.return,x)}}break;case 1:Ot(e,t),$t(t),r&512&&n!==null&&yi(n,n.return);break;case 5:if(Ot(e,t),$t(t),r&512&&n!==null&&yi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(x){Te(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&My(i,s),zc(l,o);var h=zc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?zy(i,m):f==="dangerouslySetInnerHTML"?Uy(i,m):f==="children"?Ks(i,m):ed(i,f,m,h)}switch(l){case"input":Mc(i,s);break;case"textarea":by(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?wi(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?wi(i,!!s.multiple,s.defaultValue,!0):wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ro]=s}catch(x){Te(t,t.return,x)}}break;case 6:if(Ot(e,t),$t(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Te(t,t.return,x)}}break;case 3:if(Ot(e,t),$t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(x){Te(t,t.return,x)}break;case 4:Ot(e,t),$t(t);break;case 13:Ot(e,t),$t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vd=Ae())),r&4&&xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,Ot(e,t),Ze=h):Ot(e,t),$t(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(g=B,A=g.child,g.tag){case 0:case 11:case 14:case 15:Fs(4,g,g.return);break;case 1:yi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:yi(g,g.return);break;case 22:if(g.memoizedState!==null){Vm(m);continue}}A!==null?(A.return=g,B=A):Vm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=jy("display",o))}catch(x){Te(t,t.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(x){Te(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ot(e,t),$t(t),r&4&&xm(t);break;case 21:break;default:Ot(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=Nm(t);yh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nm(t);gh(t,l,o);break;default:throw Error(F(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FT(t,e,n){B=t,mv(t)}function mv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=fa;var h=Ze;if(fa=o,(Ze=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Om(i):u!==null?(u.return=o,B=u):Om(i);for(;s!==null;)B=s,mv(s),s=s.sibling;B=i,fa=l,Ze=h}Dm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Dm(t)}}function Dm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Js(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||e.flags&512&&mh(e)}catch(g){Te(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Vm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Om(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{mh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{mh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var UT=Math.ceil,cl=Rn.ReactCurrentDispatcher,xd=Rn.ReactCurrentOwner,Pt=Rn.ReactCurrentBatchConfig,re=0,be=null,ke=null,Be=0,yt=0,_i=yr(0),De=0,uo=null,zr=0,Wl=0,Dd=0,Us=null,ct=null,Vd=0,bi=1/0,hn=null,hl=!1,_h=null,Yn=null,pa=!1,Hn=null,dl=0,js=0,vh=null,xa=-1,Da=0;function ot(){return re&6?Ae():xa!==-1?xa:xa=Ae()}function Jn(t){return t.mode&1?re&2&&Be!==0?Be&-Be:TT.transition!==null?(Da===0&&(Da=Zy()),Da):(t=oe,t!==0||(t=window.event,t=t===void 0?16:o_(t.type)),t):1}function zt(t,e,n,r){if(50<js)throw js=0,vh=null,Error(F(185));Eo(t,n,r),(!(re&2)||t!==be)&&(t===be&&(!(re&2)&&(Wl|=n),De===4&&Fn(t,Be)),mt(t,r),n===1&&re===0&&!(e.mode&1)&&(bi=Ae()+500,zl&&_r()))}function mt(t,e){var n=t.callbackNode;T1(t,e);var r=Qa(t,t===be?Be:0);if(r===0)n!==null&&$p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$p(n),e===1)t.tag===0?ET(Lm.bind(null,t)):A_(Lm.bind(null,t)),yT(function(){!(re&6)&&_r()}),n=null;else{switch(e_(r)){case 1:n=sd;break;case 4:n=Yy;break;case 16:n=Ka;break;case 536870912:n=Jy;break;default:n=Ka}n=Iv(n,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gv(t,e){if(xa=-1,Da=0,re&6)throw Error(F(327));var n=t.callbackNode;if(Ai()&&t.callbackNode!==n)return null;var r=Qa(t,t===be?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fl(t,r);else{e=r;var i=re;re|=2;var s=_v();(be!==t||Be!==e)&&(hn=null,bi=Ae()+500,Vr(t,e));do try{BT();break}catch(l){yv(t,l)}while(!0);_d(),cl.current=s,re=i,ke!==null?e=0:(be=null,Be=0,e=De)}if(e!==0){if(e===2&&(i=qc(t),i!==0&&(r=i,e=wh(t,i))),e===1)throw n=uo,Vr(t,0),Fn(t,r),mt(t,Ae()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!jT(i)&&(e=fl(t,r),e===2&&(s=qc(t),s!==0&&(r=s,e=wh(t,s))),e===1))throw n=uo,Vr(t,0),Fn(t,r),mt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Rr(t,ct,hn);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=Vd+500-Ae(),10<e)){if(Qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=eh(Rr.bind(null,t,ct,hn),e);break}Rr(t,ct,hn);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UT(r/1960))-r,10<r){t.timeoutHandle=eh(Rr.bind(null,t,ct,hn),r);break}Rr(t,ct,hn);break;case 5:Rr(t,ct,hn);break;default:throw Error(F(329))}}}return mt(t,Ae()),t.callbackNode===n?gv.bind(null,t):null}function wh(t,e){var n=Us;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=ct,ct=n,e!==null&&Eh(e)),t}function Eh(t){ct===null?ct=t:ct.push.apply(ct,t)}function jT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~Dd,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(re&6)throw Error(F(327));Ai();var e=Qa(t,0);if(!(e&1))return mt(t,Ae()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=qc(t);r!==0&&(e=r,n=wh(t,r))}if(n===1)throw n=uo,Vr(t,0),Fn(t,e),mt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ct,hn),mt(t,Ae()),null}function Od(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(bi=Ae()+500,zl&&_r())}}function Br(t){Hn!==null&&Hn.tag===0&&!(re&6)&&Ai();var e=re;re|=1;var n=Pt.transition,r=oe;try{if(Pt.transition=null,oe=1,t)return t()}finally{oe=r,Pt.transition=n,re=e,!(re&6)&&_r()}}function Ld(){yt=_i.current,pe(_i)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gT(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:Li(),pe(ft),pe(tt),Sd();break;case 5:Id(r);break;case 4:Li();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:vd(r.type._context);break;case 22:case 23:Ld()}n=n.return}if(be=t,ke=t=Zn(t.current,null),Be=yt=e,De=0,uo=null,Dd=Wl=zr=0,ct=Us=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function yv(t,e){do{var n=ke;try{if(_d(),ka.current=ul,ll){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ll=!1}if(jr=0,Me=Ne=_e=null,bs=!1,oo=0,xd.current=null,n===null||n.return===null){De=1,uo=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Tm(o);if(A!==null){A.flags&=-257,Im(A,o,l,s,e),A.mode&1&&Em(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var x=new Set;x.add(u),e.updateQueue=x}else P.add(u);break e}else{if(!(e&1)){Em(s,h,e),Md();break e}u=Error(F(426))}}else if(me&&l.mode&1){var M=Tm(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Im(M,o,l,s,e),gd(Mi(u,l));break e}}s=u=Mi(u,l),De!==4&&(De=2),Us===null?Us=[s]:Us.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=ev(s,u,e);mm(s,I);break e;case 1:l=u;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Yn===null||!Yn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=tv(s,l,e);mm(s,D);break e}}s=s.return}while(s!==null)}wv(n)}catch(V){e=V,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function _v(){var t=cl.current;return cl.current=ul,t===null?ul:t}function Md(){(De===0||De===3||De===2)&&(De=4),be===null||!(zr&268435455)&&!(Wl&268435455)||Fn(be,Be)}function fl(t,e){var n=re;re|=2;var r=_v();(be!==t||Be!==e)&&(hn=null,Vr(t,e));do try{zT();break}catch(i){yv(t,i)}while(!0);if(_d(),re=n,cl.current=r,ke!==null)throw Error(F(261));return be=null,Be=0,De}function zT(){for(;ke!==null;)vv(ke)}function BT(){for(;ke!==null&&!f1();)vv(ke)}function vv(t){var e=Tv(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?wv(t):ke=e,xd.current=null}function wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LT(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,ke=null;return}}else if(n=OT(n,e,yt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);De===0&&(De=5)}function Rr(t,e,n){var r=oe,i=Pt.transition;try{Pt.transition=null,oe=1,$T(t,e,n,r)}finally{Pt.transition=i,oe=r}return null}function $T(t,e,n,r){do Ai();while(Hn!==null);if(re&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(I1(t,s),t===be&&(ke=be=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,Iv(Ka,function(){return Ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=oe;oe=1;var l=re;re|=4,xd.current=null,bT(t,n),pv(n,t),uT(Jc),Xa=!!Yc,Jc=Yc=null,t.current=n,FT(n),p1(),re=l,oe=o,Pt.transition=s}else t.current=n;if(pa&&(pa=!1,Hn=t,dl=i),s=t.pendingLanes,s===0&&(Yn=null),y1(n.stateNode),mt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hl)throw hl=!1,t=_h,_h=null,t;return dl&1&&t.tag!==0&&Ai(),s=t.pendingLanes,s&1?t===vh?js++:(js=0,vh=t):js=0,_r(),null}function Ai(){if(Hn!==null){var t=e_(dl),e=Pt.transition,n=oe;try{if(Pt.transition=null,oe=16>t?16:t,Hn===null)var r=!1;else{if(t=Hn,Hn=null,dl=0,re&6)throw Error(F(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Fs(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var g=f.sibling,A=f.return;if(hv(f),f===h){B=null;break}if(g!==null){g.return=A,B=g;break}B=A}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var w=t.current;for(B=w;B!==null;){o=B;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,B=S;else e:for(o=w;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(V){Te(l,l.return,V)}if(l===o){B=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,B=D;break e}B=l.return}}if(re=i,_r(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Ml,t)}catch{}r=!0}return r}finally{oe=n,Pt.transition=e}}return!1}function Mm(t,e,n){e=Mi(n,e),e=ev(t,e,1),t=Xn(t,e,1),e=ot(),t!==null&&(Eo(t,1,e),mt(t,e))}function Te(t,e,n){if(t.tag===3)Mm(t,t,n);else for(;e!==null;){if(e.tag===3){Mm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Mi(n,t),t=tv(e,t,1),e=Xn(e,t,1),t=ot(),e!==null&&(Eo(e,1,t),mt(e,t));break}}e=e.return}}function HT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Be&n)===n&&(De===4||De===3&&(Be&130023424)===Be&&500>Ae()-Vd?Vr(t,0):Dd|=n),mt(t,e)}function Ev(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=ot();t=wn(t,e),t!==null&&(Eo(t,e,n),mt(t,n))}function WT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ev(t,n)}function qT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Ev(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,VT(t,e,n);dt=!!(t.flags&131072)}else dt=!1,me&&e.flags&1048576&&C_(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Na(t,e),t=e.pendingProps;var i=Di(e,tt.current);Si(e,n),i=Cd(null,e,r,t,i,n);var s=Rd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ed(e),i.updater=$l,e.stateNode=i,i._reactInternals=e,ah(e,r,t,n),e=ch(null,e,r,!0,s,n)):(e.tag=0,me&&s&&pd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KT(r),t=Lt(r,t),i){case 0:e=uh(null,e,r,t,n);break e;case 1:e=Cm(null,e,r,t,n);break e;case 11:e=Sm(null,e,r,t,n);break e;case 14:e=Am(null,e,r,Lt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),uh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Cm(t,e,r,i,n);case 3:e:{if(sv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,D_(t,e),ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mi(Error(F(423)),e),e=Rm(t,e,r,n,i);break e}else if(r!==i){i=Mi(Error(F(424)),e),e=Rm(t,e,r,n,i);break e}else for(_t=Qn(e.stateNode.containerInfo.firstChild),wt=e,me=!0,bt=null,n=N_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){e=En(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return V_(e),t===null&&ih(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zc(r,i)?o=null:s!==null&&Zc(r,s)&&(e.flags|=32),iv(t,e),st(t,e,o,n),e.child;case 6:return t===null&&ih(e),null;case 13:return ov(t,e,n);case 4:return Td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Sm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(il,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!ft.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),sh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=xt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),Am(t,e,r,i,n);case 15:return nv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Na(t,e),e.tag=1,pt(r)?(t=!0,tl(e)):t=!1,Si(e,n),Z_(e,r,i),ah(e,r,i,n),ch(null,e,r,!0,t,n);case 19:return av(t,e,n);case 22:return rv(t,e,n)}throw Error(F(156,e.tag))};function Iv(t,e){return Xy(t,e)}function GT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new GT(t,e,n,r)}function bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KT(t){if(typeof t=="function")return bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===rd)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case li:return Or(n.children,i,s,e);case td:o=8,i|=8;break;case xc:return t=kt(12,n,e,i|2),t.elementType=xc,t.lanes=s,t;case Dc:return t=kt(13,n,e,i),t.elementType=Dc,t.lanes=s,t;case Vc:return t=kt(19,n,e,i),t.elementType=Vc,t.lanes=s,t;case Vy:return ql(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xy:o=10;break e;case Dy:o=9;break e;case nd:o=11;break e;case rd:o=14;break e;case Ln:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Or(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function ql(t,e,n,r){return t=kt(22,t,r,e),t.elementType=Vy,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,r,i,s,o,l,u){return t=new QT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(s),t}function XT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Sv(t){if(!t)return ar;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(pt(n))return S_(t,n,e)}return e}function Av(t,e,n,r,i,s,o,l,u){return t=Fd(n,r,!0,t,i,s,o,l,u),t.context=Sv(null),n=t.current,r=ot(),i=Jn(n),s=yn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Eo(t,i,r),mt(t,r),t}function Gl(t,e,n,r){var i=e.current,s=ot(),o=Jn(i);return n=Sv(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(zt(t,i,o,s),Ra(t,i,o)),o}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function YT(){return null}var Cv=typeof reportError=="function"?reportError:function(t){console.error(t)};function jd(t){this._internalRoot=t}Kl.prototype.render=jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Gl(t,e,null,null)};Kl.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Gl(null,t,null,null)}),e[vn]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=r_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,t),n===0&&s_(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function JT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=pl(o);s.call(h)}}var o=Av(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[vn]=o.current,to(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=pl(u);l.call(h)}}var u=Fd(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=u,t[vn]=u.current,to(t.nodeType===8?t.parentNode:t),Br(function(){Gl(e,u,n,r)}),u}function Xl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=pl(o);l.call(u)}}Gl(e,o,t,i)}else o=JT(n,e,t,i,r);return pl(o)}t_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=As(e.pendingLanes);n!==0&&(od(e,n|1),mt(e,Ae()),!(re&6)&&(bi=Ae()+500,_r()))}break;case 13:Br(function(){var r=wn(t,1);if(r!==null){var i=ot();zt(r,t,1,i)}}),Ud(t,1)}};ad=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=ot();zt(e,t,134217728,n)}Ud(t,134217728)}};n_=function(t){if(t.tag===13){var e=Jn(t),n=wn(t,e);if(n!==null){var r=ot();zt(n,t,e,r)}Ud(t,e)}};r_=function(){return oe};i_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};$c=function(t,e,n){switch(e){case"input":if(Mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=jl(r);if(!i)throw Error(F(90));Ly(r),Mc(r,i)}}}break;case"textarea":by(t,n);break;case"select":e=n.value,e!=null&&wi(t,!!n.multiple,e,!1)}};Hy=Od;Wy=Br;var ZT={usingClientEntryPoint:!1,Events:[Io,di,jl,By,$y,Od]},Es={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eI={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ky(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Ml=ma.inject(eI),Gt=ma}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(F(200));return XT(t,e,null,n)};Tt.createRoot=function(t,e){if(!zd(t))throw Error(F(299));var n=!1,r="",i=Cv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,to(t.nodeType===8?t.parentNode:t),new jd(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Ky(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Br(t)};Tt.hydrate=function(t,e,n){if(!Ql(e))throw Error(F(200));return Xl(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Av(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,to(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kl(e)};Tt.render=function(t,e,n){if(!Ql(e))throw Error(F(200));return Xl(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(F(40));return t._reactRootContainer?(Br(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Od;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ql(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Xl(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Ry.exports=Tt;var tI=Ry.exports,Um=tI;Pc.createRoot=Um.createRoot,Pc.hydrateRoot=Um.hydrateRoot;const nI=()=>{};var jm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new iI;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sI=function(t){const e=kv(t);return Pv.encodeByteArray(e,!0)},ml=function(t){return sI(t).replace(/\./g,"")},Nv=function(t){try{return Pv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=()=>oI().__FIREBASE_DEFAULTS__,lI=()=>{if(typeof process>"u"||typeof jm>"u")return;const t=jm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nv(t[1]);return e&&JSON.parse(e)},Yl=()=>{try{return nI()||aI()||lI()||uI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xv=t=>{var e,n;return(n=(e=Yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cI=t=>{const e=xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dv=()=>{var t;return(t=Yl())===null||t===void 0?void 0:t.config},Vv=t=>{var e;return(e=Yl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ov(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),""].join(".")}const zs={};function fI(){const t={prod:[],emulator:[]};for(const e of Object.keys(zs))zs[e]?t.emulator.push(e):t.prod.push(e);return t}function pI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let zm=!1;function Lv(t,e){if(typeof window>"u"||typeof document>"u"||!Gi(window.location.host)||zs[t]===e||zs[t]||zm)return;zs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=fI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{zm=!0,o()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=pI(r),A=n("text"),P=document.getElementById(A)||document.createElement("span"),x=n("learnmore"),M=document.getElementById(x)||document.createElement("a"),I=n("preprendIcon"),w=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),f(M,x);const D=h();u(w,I),S.append(w,P,M,D),document.body.appendChild(S)}s?(P.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function gI(){var t;const e=(t=Yl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _I(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wI(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EI(){return!gI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function II(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function AI(t,e){return t.replace(CI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const CI=/\{\$([^}]+)}/g;function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bm(s)&&Bm(o)){if(!$r(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kI(t,e){const n=new PI(t,e);return n.subscribe.bind(n)}class PI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pc),i.error===void 0&&(i.error=pc),i.complete===void 0&&(i.complete=pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DI(t){return t===kr?void 0:t}function VI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const LI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},MI=ee.INFO,bI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},FI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=MI,this._logHandler=FI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const UI=(t,e)=>e.some(n=>t instanceof n);let $m,Hm;function jI(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zI(){return Hm||(Hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mv=new WeakMap,Th=new WeakMap,bv=new WeakMap,mc=new WeakMap,$d=new WeakMap;function BI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mv.set(n,t)}).catch(()=>{}),$d.set(e,t),e}function $I(t){if(Th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Th.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HI(t){Ih=t(Ih)}function WI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gc(this),e,...n);return bv.set(r,e.sort?e.sort():[e]),er(r)}:zI().includes(t)?function(...e){return t.apply(gc(this),e),er(Mv.get(this))}:function(...e){return er(t.apply(gc(this),e))}}function qI(t){return typeof t=="function"?WI(t):(t instanceof IDBTransaction&&$I(t),UI(t,jI())?new Proxy(t,Ih):t)}function er(t){if(t instanceof IDBRequest)return BI(t);if(mc.has(t))return mc.get(t);const e=qI(t);return e!==t&&(mc.set(t,e),$d.set(e,t)),e}const gc=t=>$d.get(t);function GI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(er(o.result),u.oldVersion,u.newVersion,er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const KI=["get","getKey","getAll","getAllKeys","count"],QI=["put","add","delete","clear"],yc=new Map;function Wm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=QI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return yc.set(e,s),s}HI(t=>({...t,get:(e,n,r)=>Wm(e,n)||t.get(e,n,r),has:(e,n)=>!!Wm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",qm="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Bd("@firebase/app"),JI="@firebase/app-compat",ZI="@firebase/analytics-compat",eS="@firebase/analytics",tS="@firebase/app-check-compat",nS="@firebase/app-check",rS="@firebase/auth",iS="@firebase/auth-compat",sS="@firebase/database",oS="@firebase/data-connect",aS="@firebase/database-compat",lS="@firebase/functions",uS="@firebase/functions-compat",cS="@firebase/installations",hS="@firebase/installations-compat",dS="@firebase/messaging",fS="@firebase/messaging-compat",pS="@firebase/performance",mS="@firebase/performance-compat",gS="@firebase/remote-config",yS="@firebase/remote-config-compat",_S="@firebase/storage",vS="@firebase/storage-compat",wS="@firebase/firestore",ES="@firebase/ai",TS="@firebase/firestore-compat",IS="firebase",SS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="[DEFAULT]",AS={[Sh]:"fire-core",[JI]:"fire-core-compat",[eS]:"fire-analytics",[ZI]:"fire-analytics-compat",[nS]:"fire-app-check",[tS]:"fire-app-check-compat",[rS]:"fire-auth",[iS]:"fire-auth-compat",[sS]:"fire-rtdb",[oS]:"fire-data-connect",[aS]:"fire-rtdb-compat",[lS]:"fire-fn",[uS]:"fire-fn-compat",[cS]:"fire-iid",[hS]:"fire-iid-compat",[dS]:"fire-fcm",[fS]:"fire-fcm-compat",[pS]:"fire-perf",[mS]:"fire-perf-compat",[gS]:"fire-rc",[yS]:"fire-rc-compat",[_S]:"fire-gcs",[vS]:"fire-gcs-compat",[wS]:"fire-fst",[TS]:"fire-fst-compat",[ES]:"fire-vertex","fire-js":"fire-js",[IS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Map,CS=new Map,Ch=new Map;function Gm(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fi(t){const e=t.name;if(Ch.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Ch.set(e,t);for(const n of gl.values())Gm(n,t);for(const n of CS.values())Gm(n,t);return!0}function Hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Ao("app","Firebase",RS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=SS;function Fv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ah,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=Dv()),!n)throw tr.create("no-options");const s=gl.get(i);if(s){if($r(n,s.options)&&$r(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new OI(i);for(const u of Ch.values())o.addComponent(u);const l=new kS(n,r,o);return gl.set(i,l),l}function Uv(t=Ah){const e=gl.get(t);if(!e&&t===Ah&&Dv())return Fv();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let i=(r=AS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}Fi(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="firebase-heartbeat-database",NS=1,co="firebase-heartbeat-store";let _c=null;function jv(){return _c||(_c=GI(PS,NS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(co)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),_c}async function xS(t){try{const n=(await jv()).transaction(co),r=await n.objectStore(co).get(zv(t));return await n.done,r}catch(e){if(e instanceof kn)Tn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Km(t,e){try{const r=(await jv()).transaction(co,"readwrite");await r.objectStore(co).put(e,zv(t)),await r.done}catch(n){if(n instanceof kn)Tn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function zv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1024,VS=30;class OS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>VS){const o=bS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qm(),{heartbeatsToSend:r,unsentEntries:i}=LS(this._heartbeatsCache.heartbeats),s=ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tn.warn(n),""}}}function Qm(){return new Date().toISOString().substring(0,10)}function LS(t,e=DS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?II().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xm(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}function bS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){Fi(new Hr("platform-logger",e=>new XI(e),"PRIVATE")),Fi(new Hr("heartbeat",e=>new OS(e),"PRIVATE")),nr(Sh,qm,t),nr(Sh,qm,"esm2017"),nr("fire-js","")}FS("");var US="firebase",jS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(US,jS,"app");function Wd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zS=Bv,$v=new Ao("auth","Firebase",Bv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Bd("@firebase/auth");function BS(t,...e){yl.logLevel<=ee.WARN&&yl.warn(`Auth (${Ki}): ${t}`,...e)}function Oa(t,...e){yl.logLevel<=ee.ERROR&&yl.error(`Auth (${Ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw qd(t,...e)}function Qt(t,...e){return qd(t,...e)}function Hv(t,e,n){const r=Object.assign(Object.assign({},zS()),{[e]:n});return new Ao("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return Hv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $v.create(t,...e)}function G(t,e,...n){if(!t)throw qd(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oa(e),new Error(e)}function Sn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $S(){return Ym()==="http:"||Ym()==="https:"}function Ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($S()||_I()||"connection"in navigator)?navigator.onLine:!0}function WS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=mI()||vI()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KS=new Ro(3e4,6e4);function Jl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qi(t,e,n,r,i={}){return qv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Co(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return yI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Gi(t.emulatorConfig.host)&&(h.credentials="include"),Wv.fetch()(await Kv(t,t.config.apiHost,n,l),h)})}async function qv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qS),e);try{const i=new QS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ga(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Hv(t,f,h);In(t,f)}}catch(i){if(i instanceof kn)throw i;In(t,"network-request-failed",{message:String(i)})}}async function Gv(t,e,n,r,i={}){const s=await Qi(t,e,n,r,i);return"mfaPendingCredential"in s&&In(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Kv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Gd(t.config,i):`${t.config.apiScheme}://${i}`;return GS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class QS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),KS.get())})}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){return Qi(t,"POST","/v1/accounts:delete",e)}async function _l(t,e){return Qi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YS(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=Kd(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bs(vc(i.auth_time)),issuedAtTime:Bs(vc(i.iat)),expirationTime:Bs(vc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nv(n);return i?JSON.parse(i):(Oa("Failed to decode base64 JWT payload"),null)}catch(i){return Oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jm(t){const e=Kd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&JS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ho(t,_l(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qv(s.providerUserInfo):[],l=tA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new kh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function eA(t){const e=He(t);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qv(t){return t.map(e=>{var{providerId:n}=e,r=Wd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e){const n=await qv(t,{},async()=>{const r=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Kv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Gi(t.emulatorConfig.host)&&(u.credentials="include"),Wv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rA(t,e){return Qi(t,"POST","/v2/accounts:revokeToken",Jl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Jm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ci;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YS(this,e)}reload(){return eA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await ho(this,XS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:D,isAnonymous:V,providerData:L,stsTokenManager:_}=n;G(S&&_,e,"internal-error");const y=Ci.fromJSON(this.name,_);G(typeof S=="string",e,"internal-error"),On(m,e.name),On(g,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof V=="boolean",e,"internal-error"),On(A,e.name),On(P,e.name),On(x,e.name),On(M,e.name),On(I,e.name),On(w,e.name);const v=new Ut({uid:S,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:V,photoURL:P,phoneNumber:A,tenantId:x,stsTokenManager:y,createdAt:I,lastLoginAt:w});return L&&Array.isArray(L)&&(v.providerData=L.map(E=>Object.assign({},E))),M&&(v._redirectEventId=M),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ci;i.updateFromServerResponse(n);const s=new Ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ci;l.updateFromIdToken(r);const u=new Ut({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new kh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new Map;function gn(t){Sn(t instanceof Function,"Expected a class definition");let e=Zm.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xv.type="NONE";const eg=Xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=La(this.userKey,i.apiKey,s),this.fullPersistenceKey=La("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _l(this.auth,{idToken:e}).catch(()=>{});return n?Ut._fromGetAccountInfoResponse(this.auth,n,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(gn(eg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||gn(eg);const o=La(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await _l(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Ut._fromGetAccountInfoResponse(e,g,f)}else m=Ut._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ri(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ri(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n0(e))return"Blackberry";if(r0(e))return"Webos";if(Jv(e))return"Safari";if((e.includes("chrome/")||Zv(e))&&!e.includes("edge/"))return"Chrome";if(t0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yv(t=nt()){return/firefox\//i.test(t)}function Jv(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zv(t=nt()){return/crios\//i.test(t)}function e0(t=nt()){return/iemobile/i.test(t)}function t0(t=nt()){return/android/i.test(t)}function n0(t=nt()){return/blackberry/i.test(t)}function r0(t=nt()){return/webos/i.test(t)}function Qd(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iA(t=nt()){var e;return Qd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sA(){return wI()&&document.documentMode===10}function i0(t=nt()){return Qd(t)||t0(t)||r0(t)||n0(t)||/windows phone/i.test(t)||e0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t,e=[]){let n;switch(t){case"Browser":n=tg(nt());break;case"Worker":n=`${tg(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e={}){return Qi(t,"GET","/v2/passwordPolicy",Jl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=6;class uA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new oA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _l(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(rr(this));const n=e?He(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aA(this),n=new uA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zl(t){return He(t)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=kI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hA(t){Xd=t}function dA(t){return Xd.loadJS(t)}function fA(){return Xd.gapiScript}function pA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t,e){const n=Hd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($r(s,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function gA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yA(t,e,n){const r=Zl(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=o0(e),{host:o,port:l}=_A(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G($r(h,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Gi(o)?(Ov(`${s}//${o}${u}`),Lv("Auth",!0)):vA()}function o0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _A(t){const e=o0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rg(o)}}}function rg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e){return Gv(t,"POST","/v1/accounts:signInWithIdp",Jl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="http://localhost";class Wr extends a0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:wA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends l0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ko{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends ko{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ko{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return Gv(t,"POST","/v1/accounts:signUp",Jl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ut._fromIdTokenResponse(e,r,i),o=ig(r);return new lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ig(r);return new lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t){var e;if(Ft(t.app))return Promise.reject(rr(t));const n=Zl(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new lr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await EA(n,{returnSecureToken:!0}),i=await lr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wl(e,n,r,i)}}function u0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(t,s,e,r):s})}async function IA(t,e,n=!1){const r=await ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await ho(t,u0(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Kd(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&In(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e,n=!1){if(Ft(t.app))return Promise.reject(rr(t));const r="signIn",i=await u0(t,r,e),s=await lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function CA(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function RA(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function kA(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}const El="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(El,"1"),this.storage.removeItem(El),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=1e3,NA=10;class h0 extends c0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=i0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h0.type="LOCAL";const xA=h0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0 extends c0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d0.type="SESSION";const f0=d0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await DA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Yd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function OA(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function LA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bA(){return p0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="firebaseLocalStorageDb",FA=1,Tl="firebaseLocalStorage",g0="fbase_key";class Po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tu(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function UA(){const t=indexedDB.deleteDatabase(m0);return new Po(t).toPromise()}function Ph(){const t=indexedDB.open(m0,FA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:g0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await UA(),e(await Ph()))})})}async function sg(t,e,n){const r=tu(t,!0).put({[g0]:e,value:n});return new Po(r).toPromise()}async function jA(t,e){const n=tu(t,!1).get(e),r=await new Po(n).toPromise();return r===void 0?null:r.value}function og(t,e){const n=tu(t,!0).delete(e);return new Po(n).toPromise()}const zA=800,BA=3;class y0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eu._getInstance(bA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LA(),!this.activeServiceWorker)return;this.sender=new VA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ph();return await sg(e,El,"1"),await og(e,El),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tu(i,!1).getAll();return new Po(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}y0.type="LOCAL";const $A=y0;new Ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t,e){return e?gn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends a0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WA(t){return AA(t.auth,new Jd(t),t.bypassAuthState)}function qA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),SA(n,new Jd(t),t.bypassAuthState)}async function GA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),IA(n,new Jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WA;case"linkViaPopup":case"linkViaRedirect":return GA;case"reauthViaPopup":case"reauthViaRedirect":return qA;default:In(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=new Ro(2e3,1e4);class vi extends _0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KA.get())};e()}}vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="pendingRedirect",Ma=new Map;class XA extends _0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await YA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YA(t,e){const n=eC(e),r=ZA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JA(t,e){Ma.set(t._key(),e)}function ZA(t){return gn(t._redirectPersistence)}function eC(t){return La(QA,t.config.apiKey,t.name)}async function tC(t,e,n=!1){if(Ft(t.app))return Promise.reject(rr(t));const r=Zl(t),i=HA(r,e),o=await new XA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=10*60*1e3;class rC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!v0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ag(e))}saveEventToCache(e){this.cachedEventUids.add(ag(e)),this.lastProcessedEventTime=Date.now()}}function ag(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function v0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e={}){return Qi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aC=/^https?/;async function lC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sC(t);for(const n of e)try{if(uC(n))return}catch{}In(t,"unauthorized-domain")}function uC(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aC.test(n))return!1;if(oC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new Ro(3e4,6e4);function lg(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hC(t){return new Promise((e,n)=>{var r,i,s;function o(){lg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lg(),n(Qt(t,"network-request-failed"))},timeout:cC.get()})}if(!((i=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xt().gapi)===null||s===void 0)&&s.load)o();else{const l=pA("iframefcb");return Xt()[l]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},dA(`${fA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ba=null,e})}let ba=null;function dC(t){return ba=ba||hC(t),ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=new Ro(5e3,15e3),pC="__/auth/iframe",mC="emulator/auth/iframe",gC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _C(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gd(e,mC):`https://${t.config.authDomain}/${pC}`,r={apiKey:e.apiKey,appName:t.name,v:Ki},i=yC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Co(r).slice(1)}`}async function vC(t){const e=await dC(t),n=Xt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:_C(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),l=Xt().setTimeout(()=>{s(o)},fC.get());function u(){Xt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EC=500,TC=600,IC="_blank",SC="http://localhost";class ug{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AC(t,e,n,r=EC,i=TC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},wC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=nt().toLowerCase();n&&(l=Zv(h)?IC:n),Yv(h)&&(e=e||SC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,P])=>`${g}${A}=${P},`,"");if(iA(h)&&l!=="_self")return CC(e||"",l),new ug(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new ug(m)}function CC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="__/auth/handler",kC="emulator/auth/handler",PC=encodeURIComponent("fac");async function cg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(e instanceof l0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ko){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${PC}=${encodeURIComponent(u)}`:"";return`${NC(t)}?${Co(l).slice(1)}${h}`}function NC({config:t}){return t.emulator?Gd(t,kC):`https://${t.authDomain}/${RC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class xC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f0,this._completeRedirectFn=tC,this._overrideRedirectResult=JA}async _openPopup(e,n,r,i){var s;Sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cg(e,n,r,Rh(),i);return AC(e,o,Yd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cg(e,n,r,Rh(),i);return OA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vC(e),r=new rC(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wc];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return i0()||Jv()||Qd()}}const DC=xC;var hg="@firebase/auth",dg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LC(t){Fi(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s0(t)},h=new cA(r,i,s,u);return gA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fi(new Hr("auth-internal",e=>{const n=Zl(e.getProvider("auth").getImmediate());return(r=>new VC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(hg,dg,OC(t)),nr(hg,dg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=5*60,bC=Vv("authIdTokenMaxAge")||MC;let fg=null;const FC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bC)return;const i=n==null?void 0:n.token;fg!==i&&(fg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function UC(t=Uv()){const e=Hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mA(t,{popupRedirectResolver:DC,persistence:[$A,xA,f0]}),r=Vv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=FC(s.toString());RA(n,o,()=>o(n.currentUser)),CA(n,l=>o(l))}}const i=xv("auth");return i&&yA(n,`http://${i}`),n}function jC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LC("Browser");var pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ir,w0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function v(){}v.prototype=y.prototype,_.D=y.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(E,C,k){for(var T=Array(arguments.length-2),St=2;St<arguments.length;St++)T[St-2]=arguments[St];return y.prototype[C].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,v){v||(v=0);var E=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)E[C]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(C=0;16>C;++C)E[C]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=_.g[0],v=_.g[1],C=_.g[2];var k=_.g[3],T=y+(k^v&(C^k))+E[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=k+(C^y&(v^C))+E[1]+3905402710&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(v^k&(y^v))+E[2]+606105819&4294967295,C=k+(T<<17&4294967295|T>>>15),T=v+(y^C&(k^y))+E[3]+3250441966&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(k^v&(C^k))+E[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=k+(C^y&(v^C))+E[5]+1200080426&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(v^k&(y^v))+E[6]+2821735955&4294967295,C=k+(T<<17&4294967295|T>>>15),T=v+(y^C&(k^y))+E[7]+4249261313&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(k^v&(C^k))+E[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=k+(C^y&(v^C))+E[9]+2336552879&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(v^k&(y^v))+E[10]+4294925233&4294967295,C=k+(T<<17&4294967295|T>>>15),T=v+(y^C&(k^y))+E[11]+2304563134&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(k^v&(C^k))+E[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=k+(C^y&(v^C))+E[13]+4254626195&4294967295,k=y+(T<<12&4294967295|T>>>20),T=C+(v^k&(y^v))+E[14]+2792965006&4294967295,C=k+(T<<17&4294967295|T>>>15),T=v+(y^C&(k^y))+E[15]+1236535329&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(C^k&(v^C))+E[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^C&(y^v))+E[6]+3225465664&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(k^y))+E[11]+643717713&4294967295,C=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(C^k))+E[0]+3921069994&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(C^k&(v^C))+E[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^C&(y^v))+E[10]+38016083&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(k^y))+E[15]+3634488961&4294967295,C=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(C^k))+E[4]+3889429448&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(C^k&(v^C))+E[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^C&(y^v))+E[14]+3275163606&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(k^y))+E[3]+4107603335&4294967295,C=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(C^k))+E[8]+1163531501&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(C^k&(v^C))+E[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=k+(v^C&(y^v))+E[2]+4243563512&4294967295,k=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(k^y))+E[7]+1735328473&4294967295,C=k+(T<<14&4294967295|T>>>18),T=v+(k^y&(C^k))+E[12]+2368359562&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(v^C^k)+E[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^C)+E[8]+2272392833&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^v)+E[11]+1839030562&4294967295,C=k+(T<<16&4294967295|T>>>16),T=v+(C^k^y)+E[14]+4259657740&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(v^C^k)+E[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^C)+E[4]+1272893353&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^v)+E[7]+4139469664&4294967295,C=k+(T<<16&4294967295|T>>>16),T=v+(C^k^y)+E[10]+3200236656&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(v^C^k)+E[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^C)+E[0]+3936430074&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^v)+E[3]+3572445317&4294967295,C=k+(T<<16&4294967295|T>>>16),T=v+(C^k^y)+E[6]+76029189&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(v^C^k)+E[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=k+(y^v^C)+E[12]+3873151461&4294967295,k=y+(T<<11&4294967295|T>>>21),T=C+(k^y^v)+E[15]+530742520&4294967295,C=k+(T<<16&4294967295|T>>>16),T=v+(C^k^y)+E[2]+3299628645&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(C^(v|~k))+E[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~C))+E[7]+1126891415&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~v))+E[14]+2878612391&4294967295,C=k+(T<<15&4294967295|T>>>17),T=v+(k^(C|~y))+E[5]+4237533241&4294967295,v=C+(T<<21&4294967295|T>>>11),T=y+(C^(v|~k))+E[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~C))+E[3]+2399980690&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~v))+E[10]+4293915773&4294967295,C=k+(T<<15&4294967295|T>>>17),T=v+(k^(C|~y))+E[1]+2240044497&4294967295,v=C+(T<<21&4294967295|T>>>11),T=y+(C^(v|~k))+E[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~C))+E[15]+4264355552&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~v))+E[6]+2734768916&4294967295,C=k+(T<<15&4294967295|T>>>17),T=v+(k^(C|~y))+E[13]+1309151649&4294967295,v=C+(T<<21&4294967295|T>>>11),T=y+(C^(v|~k))+E[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=k+(v^(y|~C))+E[11]+3174756917&4294967295,k=y+(T<<10&4294967295|T>>>22),T=C+(y^(k|~v))+E[2]+718787259&4294967295,C=k+(T<<15&4294967295|T>>>17),T=v+(k^(C|~y))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+C&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var v=y-this.blockSize,E=this.B,C=this.h,k=0;k<y;){if(C==0)for(;k<=v;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<y;)if(E[C++]=_.charCodeAt(k++),C==this.blockSize){i(this,E),C=0;break}}else for(;k<y;)if(E[C++]=_[k++],C==this.blockSize){i(this,E),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var v=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=v&255,v/=256;for(this.u(_),_=Array(16),y=v=0;4>y;++y)for(var E=0;32>E;E+=8)_[v++]=this.g[y]>>>E&255;return _};function s(_,y){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=y(_)}function o(_,y){this.h=y;for(var v=[],E=!0,C=_.length-1;0<=C;C--){var k=_[C]|0;E&&k==y||(v[C]=k,E=!1)}this.g=v}var l={};function u(_){return-128<=_&&128>_?s(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return M(h(-_));for(var y=[],v=1,E=0;_>=v;E++)y[E]=_/v|0,v*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return M(f(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),E=m,C=0;C<_.length;C+=8){var k=Math.min(8,_.length-C),T=parseInt(_.substring(C,C+k),y);8>k?(k=h(Math.pow(y,k)),E=E.j(k).add(h(T))):(E=E.j(v),E=E.add(h(T)))}return E}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-M(this).m();for(var _=0,y=1,v=0;v<this.g.length;v++){var E=this.i(v);_+=(0<=E?E:4294967296+E)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(x(this))return"-"+M(this).toString(_);for(var y=h(Math.pow(_,6)),v=this,E="";;){var C=D(v,y).g;v=I(v,C.j(y));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=C,P(v))return k+E;for(;6>k.length;)k="0"+k;E=k+E}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function x(_){return _.h==-1}t.l=function(_){return _=I(this,_),x(_)?-1:P(_)?0:1};function M(_){for(var y=_.g.length,v=[],E=0;E<y;E++)v[E]=~_.g[E];return new o(v,~_.h).add(g)}t.abs=function(){return x(this)?M(this):this},t.add=function(_){for(var y=Math.max(this.g.length,_.g.length),v=[],E=0,C=0;C<=y;C++){var k=E+(this.i(C)&65535)+(_.i(C)&65535),T=(k>>>16)+(this.i(C)>>>16)+(_.i(C)>>>16);E=T>>>16,k&=65535,T&=65535,v[C]=T<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(_,y){return _.add(M(y))}t.j=function(_){if(P(this)||P(_))return m;if(x(this))return x(_)?M(this).j(M(_)):M(M(this).j(_));if(x(_))return M(this.j(M(_)));if(0>this.l(A)&&0>_.l(A))return h(this.m()*_.m());for(var y=this.g.length+_.g.length,v=[],E=0;E<2*y;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<_.g.length;C++){var k=this.i(E)>>>16,T=this.i(E)&65535,St=_.i(C)>>>16,Er=_.i(C)&65535;v[2*E+2*C]+=T*Er,w(v,2*E+2*C),v[2*E+2*C+1]+=k*Er,w(v,2*E+2*C+1),v[2*E+2*C+1]+=T*St,w(v,2*E+2*C+1),v[2*E+2*C+2]+=k*St,w(v,2*E+2*C+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new o(v,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function S(_,y){this.g=_,this.h=y}function D(_,y){if(P(y))throw Error("division by zero");if(P(_))return new S(m,m);if(x(_))return y=D(M(_),y),new S(M(y.g),M(y.h));if(x(y))return y=D(_,M(y)),new S(M(y.g),y.h);if(30<_.g.length){if(x(_)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,E=y;0>=E.l(_);)v=V(v),E=V(E);var C=L(v,1),k=L(E,1);for(E=L(E,2),v=L(v,2);!P(E);){var T=k.add(E);0>=T.l(_)&&(C=C.add(v),k=T),E=L(E,1),v=L(v,1)}return y=I(_,C.j(y)),new S(C,y)}for(C=m;0<=_.l(y);){for(v=Math.max(1,Math.floor(_.m()/y.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),k=h(v),T=k.j(y);x(T)||0<T.l(_);)v-=E,k=h(v),T=k.j(y);P(k)&&(k=g),C=C.add(k),_=I(_,T)}return new S(C,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var y=Math.max(this.g.length,_.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)&_.i(E);return new o(v,this.h&_.h)},t.or=function(_){for(var y=Math.max(this.g.length,_.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)|_.i(E);return new o(v,this.h|_.h)},t.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),v=[],E=0;E<y;E++)v[E]=this.i(E)^_.i(E);return new o(v,this.h^_.h)};function V(_){for(var y=_.g.length+1,v=[],E=0;E<y;E++)v[E]=_.i(E)<<1|_.i(E-1)>>>31;return new o(v,_.h)}function L(_,y){var v=y>>5;y%=32;for(var E=_.g.length-v,C=[],k=0;k<E;k++)C[k]=0<y?_.i(k+v)>>>y|_.i(k+v+1)<<32-y:_.i(k+v);return new o(C,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,w0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ir=o}).apply(typeof pg<"u"?pg:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E0,Rs,T0,Fa,Nh,I0,S0,A0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var R=a[p];if(!(R in d))break e;d=d[R]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,R={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,R,N){for(var U=Array(arguments.length-2),le=2;le<arguments.length;le++)U[le-2]=arguments[le];return c.prototype[R].apply(p,U)}}function x(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function M(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=a.length||0,N=p.length||0;a.length=R+N;for(let U=0;U<N;U++)a[R+U]=p[U]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var V=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function L(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function _(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)a[d]=p[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class St{constructor(){this.h=this.g=null}add(c,d){const p=Er.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Er=new I(()=>new es,a=>a.reset());class es{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let rn,j=!1,K=new St,Y=()=>{const a=l.Promise.resolve(void 0);rn=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=Er;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}j=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var sn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function on(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{D(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:an[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}P(on,Ie);var an={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),Yw=0;function Jw(a,c,d,p,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Yw,this.da=this.fa=!1}function Lo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mo(a){this.src=a,this.g={},this.h=0}Mo.prototype.add=function(a,c,d,p,R){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=wu(a,c,p,R);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new Jw(c,this.src,N,!!p,R),c.fa=d,a.push(c)),c};function vu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],R=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=R)&&Array.prototype.splice.call(p,R,1),N&&(Lo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wu(a,c,d,p){for(var R=0;R<a.length;++R){var N=a[R];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return R}return-1}var Eu="closure_lm_"+(1e6*Math.random()|0),Tu={};function Df(a,c,d,p,R){if(Array.isArray(c)){for(var N=0;N<c.length;N++)Df(a,c[N],d,p,R);return null}return d=Lf(d),a&&a[ln]?a.K(c,d,h(p)?!!p.capture:!1,R):Zw(a,c,d,!1,p,R)}function Zw(a,c,d,p,R,N){if(!c)throw Error("Invalid event type");var U=h(R)?!!R.capture:!!R,le=Su(a);if(le||(a[Eu]=le=new Mo(a)),d=le.add(c,d,p,U,N),d.proxy)return d;if(p=eE(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)sn||(R=U),R===void 0&&(R=!1),a.addEventListener(c.toString(),p,R);else if(a.attachEvent)a.attachEvent(Of(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eE(){function a(d){return c.call(a.src,a.listener,d)}const c=tE;return a}function Vf(a,c,d,p,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)Vf(a,c[N],d,p,R);else p=h(p)?!!p.capture:!!p,d=Lf(d),a&&a[ln]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=wu(N,d,p,R),-1<d&&(Lo(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=Su(a))&&(c=a.g[c.toString()],a=-1,c&&(a=wu(c,d,p,R)),(d=-1<a?c[a]:null)&&Iu(d))}function Iu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[ln])vu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Of(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Su(c))?(vu(d,a),d.h==0&&(d.src=null,c[Eu]=null)):Lo(a)}}}function Of(a){return a in Tu?Tu[a]:Tu[a]="on"+a}function tE(a,c){if(a.da)a=!0;else{c=new on(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&Iu(a),a=d.call(p,c)}return a}function Su(a){return a=a[Eu],a instanceof Mo?a:null}var Au="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lf(a){return typeof a=="function"?a:(a[Au]||(a[Au]=function(c){return a.handleEvent(c)}),a[Au])}function qe(){ae.call(this),this.i=new Mo(this),this.M=this,this.F=null}P(qe,ae),qe.prototype[ln]=!0,qe.prototype.removeEventListener=function(a,c,d,p){Vf(this,a,c,d,p)};function rt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var R=c;c=new Ie(p,a),E(c,R)}if(R=!0,d)for(var N=d.length-1;0<=N;N--){var U=c.g=d[N];R=bo(U,p,!0,c)&&R}if(U=c.g=a,R=bo(U,p,!0,c)&&R,R=bo(U,p,!1,c)&&R,d)for(N=0;N<d.length;N++)U=c.g=d[N],R=bo(U,p,!1,c)&&R}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Lo(d[p]);delete a.g[c],a.h--}}this.F=null},qe.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},qe.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function bo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,N=0;N<c.length;++N){var U=c[N];if(U&&!U.da&&U.capture==d){var le=U.listener,Fe=U.ha||U.src;U.fa&&vu(a.i,U),R=le.call(Fe,p)!==!1&&R}}return R&&!p.defaultPrevented}function Mf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function bf(a){a.g=Mf(()=>{a.g=null,a.i&&(a.i=!1,bf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class nE extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:bf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(a){ae.call(this),this.h=a,this.g={}}P(ts,ae);var Ff=[];function Uf(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&Iu(c)},a),a.g={}}ts.prototype.N=function(){ts.aa.N.call(this),Uf(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cu=l.JSON.stringify,rE=l.JSON.parse,iE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ru(){}Ru.prototype.h=null;function jf(a){return a.h||(a.h=a.i())}function zf(){}var ns={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ku(){Ie.call(this,"d")}P(ku,Ie);function Pu(){Ie.call(this,"c")}P(Pu,Ie);var Tr={},Bf=null;function Fo(){return Bf=Bf||new qe}Tr.La="serverreachability";function $f(a){Ie.call(this,Tr.La,a)}P($f,Ie);function rs(a){const c=Fo();rt(c,new $f(c))}Tr.STAT_EVENT="statevent";function Hf(a,c){Ie.call(this,Tr.STAT_EVENT,a),this.stat=c}P(Hf,Ie);function it(a){const c=Fo();rt(c,new Hf(c,a))}Tr.Ma="timingevent";function Wf(a,c){Ie.call(this,Tr.Ma,a),this.size=c}P(Wf,Ie);function is(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function sE(a,c,d,p,R,N){a.info(function(){if(a.g)if(N)for(var U="",le=N.split("&"),Fe=0;Fe<le.length;Fe++){var ie=le[Fe].split("=");if(1<ie.length){var Ge=ie[0];ie=ie[1];var Ke=Ge.split("_");U=2<=Ke.length&&Ke[1]=="type"?U+(Ge+"="+ie+"&"):U+(Ge+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+U})}function oE(a,c,d,p,R,N,U){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+N+" "+U})}function Jr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+lE(a,d)+(p?" "+p:"")})}function aE(a,c){a.info(function(){return"TIMEOUT: "+c})}ss.prototype.info=function(){};function lE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<R.length;U++)R[U]=""}}}}return Cu(d)}catch{return c}}var Uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nu;function jo(){}P(jo,Ru),jo.prototype.g=function(){return new XMLHttpRequest},jo.prototype.i=function(){return{}},Nu=new jo;function Nn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gf}function Gf(){this.i=null,this.g="",this.h=!1}var Kf={},xu={};function Du(a,c,d){a.L=1,a.v=Ho(un(c)),a.m=d,a.P=!0,Qf(a,null)}function Qf(a,c){a.F=Date.now(),zo(a),a.A=un(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),up(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Gf,a.g=Rp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new nE(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ff[0]=R.toString()),R=Ff);for(var N=0;N<R.length;N++){var U=Df(d,R[N],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),rs(),sE(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const c=this.M;c&&cn(a)==3?c.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=cn(this.g);var c=this.g.Ba();const ti=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||gp(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=ti?rs(3):rs(2)),Vu(this);var d=this.g.Z();this.X=d;t:if(Xf(this)){var p=gp(this.g);a="";var R=p.length,N=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),os(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==R-1)});p.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,oE(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Fe=this.g;if((le=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(le)){var ie=le;break t}}ie=null}if(d=ie)Jr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ou(this,d);else{this.o=!1,this.s=3,it(12),Ir(this),os(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<U.length;)if(Vt=uE(this,U),Vt==xu){Ke==4&&(this.s=4,it(14),d=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Kf){this.s=4,it(15),Jr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Jr(this.i,this.l,Vt,null),Ou(this,Vt);if(Xf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||U.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)Jr(this.i,this.l,U,"[Invalid Chunked Response]"),Ir(this),os(this);else if(0<U.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ju(Ge),Ge.M=!0,it(11))}}else Jr(this.i,this.l,U,null),Ou(this,U);Ke==4&&Ir(this),this.o&&!this.J&&(Ke==4?Ip(this.j,this):(this.o=!1,zo(this)))}else CE(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Ir(this),os(this)}}}catch{}finally{}};function Xf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?xu:(d=Number(c.substring(d,p)),isNaN(d)?Kf:(p+=1,p+d>c.length?xu:(c=c.slice(p,p+d),a.C=p+d,c)))}Nn.prototype.cancel=function(){this.J=!0,Ir(this)};function zo(a){a.S=Date.now()+a.I,Yf(a,a.I)}function Yf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=is(g(a.ba,a),c)}function Vu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aE(this.i,this.A),this.L!=2&&(rs(),it(17)),Ir(this),this.s=2,os(this)):Yf(this,this.S-a)};function os(a){a.j.G==0||a.J||Ip(a.j,a)}function Ir(a){Vu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Uf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ou(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Lu(d.h,a))){if(!a.K&&Lu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Xo(d),Ko(d);else break e;Uu(d),it(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=is(g(d.Za,d),6e3));if(1>=ep(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ar(d,11)}else if((a.K||d.g==a)&&Xo(d),!w(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let ie=R[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Ge=ie[3];Ge!=null&&(d.la=Ge,d.j.info("VER="+d.la));const Ke=ie[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const ti=ie[5];ti!=null&&typeof ti=="number"&&0<ti&&(p=1.5*ti,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Vt=a.g;if(Vt){const Jo=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jo){var N=p.h;N.g||Jo.indexOf("spdy")==-1&&Jo.indexOf("quic")==-1&&Jo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Mu(N,N.h),N.h=null))}if(p.D){const zu=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;zu&&(p.ya=zu,ce(p.I,p.D,zu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var U=a;if(p.qa=Cp(p,p.J?p.ia:null,p.W),U.K){tp(p.h,U);var le=U,Fe=p.L;Fe&&(le.I=Fe),le.B&&(Vu(le),zo(le)),p.g=U}else Ep(p);0<d.i.length&&Qo(d)}else ie[0]!="stop"&&ie[0]!="close"||Ar(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Ar(d,7):Fu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}rs(4)}catch{}}var cE=class{constructor(a,c){this.g=a,this.map=c}};function Jf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ep(a){return a.h?1:a.g?a.g.size:0}function Lu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Mu(a,c){a.g?a.g.add(c):a.h=c}function tp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Jf.prototype.cancel=function(){if(this.i=np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function np(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return x(a.i)}function hE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function dE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function rp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=dE(a),p=hE(a),R=p.length,N=0;N<R;N++)c.call(void 0,p[N],d&&d[N],a)}var ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),R=null;if(0<=p){var N=a[d].substring(0,p);R=a[d].substring(p+1)}else N=a[d];c(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,Bo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var c=a.i,d=new us;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),sp(this,d),this.m=a.m}else a&&(c=String(a).match(ip))?(this.h=!1,Bo(this,c[1]||"",!0),this.o=as(c[2]||""),this.g=as(c[3]||"",!0),$o(this,c[4]),this.l=as(c[5]||"",!0),sp(this,c[6]||"",!0),this.m=as(c[7]||"")):(this.h=!1,this.i=new us(null,this.h))}Sr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ls(c,op,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ls(c,op,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ls(d,d.charAt(0)=="/"?gE:mE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ls(d,_E)),a.join("")};function un(a){return new Sr(a)}function Bo(a,c,d){a.j=d?as(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function sp(a,c,d){c instanceof us?(a.i=c,vE(a.i,a.h)):(d||(c=ls(c,yE)),a.i=new us(c,a.h))}function ce(a,c,d){a.i.set(c,d)}function Ho(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function as(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ls(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,pE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var op=/[#\/\?@]/g,mE=/[#\?:]/g,gE=/[#\?]/g,yE=/[#\?@]/g,_E=/#/g;function us(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&fE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=us.prototype,t.add=function(a,c){xn(this),this.i=null,a=Zr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ap(a,c){xn(a),c=Zr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function lp(a,c){return xn(a),c=Zr(a,c),a.g.has(c)}t.forEach=function(a,c){xn(this),this.g.forEach(function(d,p){d.forEach(function(R){a.call(c,R,p,this)},this)},this)},t.na=function(){xn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=a[p];for(let N=0;N<R.length;N++)d.push(c[p])}return d},t.V=function(a){xn(this);let c=[];if(typeof a=="string")lp(this,a)&&(c=c.concat(this.g.get(Zr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return xn(this),this.i=null,a=Zr(this,a),lp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function up(a,c,d){ap(a,c),0<d.length&&(a.i=null,a.g.set(Zr(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var R=N;U[p]!==""&&(R+="="+encodeURIComponent(String(U[p]))),a.push(R)}}return this.i=a.join("&")};function Zr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function vE(a,c){c&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(ap(this,p),up(this,R,d))},a)),a.j=c}function wE(a,c){const d=new ss;if(l.Image){const p=new Image;p.onload=A(Dn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(Dn,d,"TestLoadImage: error",!1,c,p),p.onabort=A(Dn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(Dn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function EE(a,c){const d=new ss,p=new AbortController,R=setTimeout(()=>{p.abort(),Dn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(R),N.ok?Dn(d,"TestPingServer: ok",!0,c):Dn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Dn(d,"TestPingServer: error",!1,c)})}function Dn(a,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function TE(){this.g=new iE}function IE(a,c,d){const p=d||"";try{rp(a,function(R,N){let U=R;h(R)&&(U=Cu(R)),c.push(p+N+"="+encodeURIComponent(U))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Wo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Wo,Ru),Wo.prototype.g=function(){return new qo(this.l,this.j)},Wo.prototype.i=function(a){return function(){return a}}({});function qo(a,c){qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(qo,qe),t=qo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?cs(this):hs(this),this.readyState==3&&cp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,cs(this))},t.Qa=function(a){this.g&&(this.response=a,cs(this))},t.ga=function(){this.g&&cs(this)};function cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,hs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hp(a){let c="";return L(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function bu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=hp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ce(a,c,d))}function Ee(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ee,qe);var SE=/^https?$/i,AE=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nu.g(),this.v=this.o?jf(this.o):jf(Nu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){dp(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AE,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of d)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mp(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){dp(this,N)}};function dp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,fp(a),Go(a)}function fp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pp(this):this.bb())},t.bb=function(){pp(this)};function pp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cn(a)!=4||a.Z()!=2)){if(a.u&&cn(a)==4)Mf(a.Ea,0,a);else if(rt(a,"readystatechange"),cn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=U===0){var R=String(a.D).match(ip)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!SE.test(R?R.toLowerCase():"")}d=p}if(d)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var N=2<cn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",fp(a)}}finally{Go(a)}}}}function Go(a,c){if(a.g){mp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||rt(a,"ready");try{d.onreadystatechange=p}catch{}}}function mp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),rE(c)}};function gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function CE(a){const c={};a=(a.g&&2<=cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(w(a[p]))continue;var d=C(a[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[R]||[];c[R]=N,N.push(d)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function yp(a){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,a),this.cb=ds("retryDelaySeedMs",1e4,a),this.Wa=ds("forwardChannelMaxRetries",2,a),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jf(a&&a.concurrentRequestLimit),this.Da=new TE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){it(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Cp(this,null,this.W),Qo(this)};function Fu(a){if(_p(a),a.G==3){var c=a.U++,d=un(a.I);if(ce(d,"SID",a.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),fs(a,d),c=new Nn(a,a.j,c),c.L=2,c.v=Ho(un(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Rp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),zo(c)}Ap(a)}function Ko(a){a.g&&(ju(a),a.g.cancel(),a.g=null)}function _p(a){Ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Qo(a){if(!Zf(a.h)&&!a.s){a.s=!0;var c=a.Ga;rn||Y(),j||(rn(),j=!0),K.add(c,a),a.B=0}}function RE(a,c){return ep(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=is(g(a.Ga,a,c),Sp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Nn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=wp(this,R,c),d=un(this.I),ce(d,"RID",a),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),fs(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(hp(N)))+"&"+c:this.m&&bu(d,this.m,N)),Mu(this.h,R),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),R.T=!0,Du(R,d,null)):Du(R,d,c),this.G=2}}else this.G==3&&(a?vp(this,a):this.i.length==0||Zf(this.h)||vp(this))};function vp(a,c){var d;c?d=c.l:d=a.U++;const p=un(a.I);ce(p,"SID",a.K),ce(p,"RID",d),ce(p,"AID",a.T),fs(a,p),a.m&&a.o&&bu(p,a.m,a.o),d=new Nn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=wp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mu(a.h,d),Du(d,p,c)}function fs(a,c){a.H&&L(a.H,function(d,p){ce(c,p,d)}),a.l&&rp({},function(d,p){ce(c,p,d)})}function wp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let N=-1;for(;;){const U=["count="+d];N==-1?0<d?(N=R[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let le=!0;for(let Fe=0;Fe<d;Fe++){let ie=R[Fe].g;const Ge=R[Fe].map;if(ie-=N,0>ie)N=Math.max(0,R[Fe].g-100),le=!1;else try{IE(Ge,U,"req"+ie+"_")}catch{p&&p(Ge)}}if(le){p=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function Ep(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;rn||Y(),j||(rn(),j=!0),K.add(c,a),a.v=0}}function Uu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=is(g(a.Fa,a),Sp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Tp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=is(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ko(this),Tp(this))};function ju(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Tp(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=un(a.qa);ce(c,"RID","rpc"),ce(c,"SID",a.K),ce(c,"AID",a.T),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(c,"TO",a.ja),ce(c,"TYPE","xmlhttp"),fs(a,c),a.m&&a.o&&bu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ho(un(c)),d.m=null,d.P=!0,Qf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),Uu(this),it(19))};function Xo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ip(a,c){var d=null;if(a.g==c){Xo(a),ju(a),a.g=null;var p=2}else if(Lu(a.h,c))d=c.D,tp(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;p=Fo(),rt(p,new Wf(p,d)),Qo(a)}else Ep(a);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&RE(a,c)||p==2&&Uu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Ar(a,5);break;case 4:Ar(a,10);break;case 3:Ar(a,6);break;default:Ar(a,2)}}}function Sp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Ar(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),p=a.Xa;const R=!p;p=new Sr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bo(p,"https"),Ho(p),R?wE(p.toString(),d):EE(p.toString(),d)}else it(2);a.G=0,a.l&&a.l.sa(c),Ap(a),_p(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Ap(a){if(a.G=0,a.ka=[],a.l){const c=np(a.h);(c.length!=0||a.i.length!=0)&&(M(a.ka,c),M(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Cp(a,c,d){var p=d instanceof Sr?un(d):new Sr(d);if(p.g!="")c&&(p.g=c+"."+p.g),$o(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var N=new Sr(null);p&&Bo(N,p),c&&(N.g=c),R&&$o(N,R),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&ce(p,d,c),ce(p,"VER",a.la),fs(a,p),p}function Rp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new Wo({eb:d})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kp(){}t=kp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yo(){}Yo.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){qe.call(this),this.g=new yp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ei(this)}P(gt,qe),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Fu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Cu(a),a=d);c.i.push(new cE(c.Ya++,a)),c.G==3&&Qo(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,Fu(this.g),delete this.g,gt.aa.N.call(this)};function Pp(a){ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Pp,ku);function Np(){Pu.call(this),this.status=1}P(Np,Pu);function ei(a){this.g=a}P(ei,kp),ei.prototype.ua=function(){rt(this.g,"a")},ei.prototype.ta=function(a){rt(this.g,new Pp(a))},ei.prototype.sa=function(a){rt(this.g,new Np)},ei.prototype.ra=function(){rt(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,A0=function(){return new Yo},S0=function(){return Fo()},I0=Tr,Nh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Uo.NO_ERROR=0,Uo.TIMEOUT=8,Uo.HTTP_ERROR=6,Fa=Uo,qf.COMPLETE="complete",T0=qf,zf.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Rs=zf,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,E0=Ee}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});const mg="@firebase/firestore",gg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Bd("@firebase/firestore");function ri(){return qr.logLevel}function z(t,...e){if(qr.logLevel<=ee.DEBUG){const n=e.map(Zd);qr.debug(`Firestore (${Xi}): ${t}`,...n)}}function An(t,...e){if(qr.logLevel<=ee.ERROR){const n=e.map(Zd);qr.error(`Firestore (${Xi}): ${t}`,...n)}}function ur(t,...e){if(qr.logLevel<=ee.WARN){const n=e.map(Zd);qr.warn(`Firestore (${Xi}): ${t}`,...n)}}function Zd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,C0(t,r,n)}function C0(t,e,n){let r=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw An(r),new Error(r)}function se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||C0(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class BC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $C{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new R0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class HC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new HC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){se(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=GC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function xh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return J(r,i);{const s=k0(),o=KC(s.encode(_g(t,n)),s.encode(_g(e,n)));return o!==0?o:J(r,i)}}n+=r>65535?2:1}return J(t.length,e.length)}function _g(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function KC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return J(t[n],e[n]);return J(t.length,e.length)}function Ui(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="__name__";class Wt{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Wt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return J(e.length,n.length)}static compareSegments(e,n){const r=Wt.isNumericId(e),i=Wt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Wt.extractNumericId(e).compare(Wt.extractNumericId(n)):xh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ir.fromString(e.substring(4,e.length-2))}}class de extends Wt{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const QC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Wt{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return QC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vg}static keyField(){return new ze([vg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(de.fromString(e))}static fromName(e){return new W(de.fromString(e).popFirst(5))}static empty(){return new W(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t,e,n){if(!n)throw new H(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XC(t,e,n,r){if(e===!0&&r===!0)throw new H(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wg(t){if(!W.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Eg(t){if(W.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function N0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q(12329,{type:typeof t})}function Mr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tf(t);throw new H(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function No(t,e){if(!N0(t))throw new H(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(b.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=-62135596800,Ig=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ig);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tg)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(No(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Pe("string",fe._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new fe(0,0))}static max(){return new Q(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=-1;function YC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new cr(i,W.empty(),e)}function JC(t){return new cr(t.readTime,t.key,fo)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(Q.min(),W.empty(),fo)}static max(){return new cr(Q.max(),W.empty(),fo)}}function ZC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==eR)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}nu.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=-1;function ru(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function rR(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="";function iR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sg(e)),e=sR(t.get(n),e);return Sg(e)}function sR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case x0:n+="";break;default:n+=s}}return n}function Sg(t){return t+x0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function D0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new vt([])}unionWith(e){let n=new Oe(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new V0("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const oR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(se(!!t,39018),typeof t=="string"){let e=0;const n=oR.exec(t);if(se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="server_timestamp",L0="__type__",M0="__previous_value__",b0="__local_write_time__";function rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[L0])===null||n===void 0?void 0:n.stringValue)===O0}function iu(t){const e=t.mapValue.fields[M0];return rf(e)?iu(e):e}function po(t){const e=hr(t.mapValue.fields[b0].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Sl="(default)";class mo{constructor(e,n){this.projectId=e,this.database=n||Sl}static empty(){return new mo("","")}get isDefaultDatabase(){return this.database===Sl}isEqual(e){return e instanceof mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="__type__",lR="__max__",va={mapValue:{}},U0="__vector__",Al="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:cR(t)?9007199254740991:uR(t)?10:11:q(28295,{value:t})}function tn(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return po(t).isEqual(po(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),l=hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return dr(i.bytesValue).isEqual(dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?Il(o)===Il(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ui(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ag(o)!==Ag(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return q(52216,{left:t})}}function go(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Rg(t.timestampValue,e.timestampValue);case 4:return Rg(po(t),po(e));case 5:return xh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=dr(s),u=dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=J(l[h],u[h]);if(f!==0)return f}return J(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=J(Se(s.latitude),Se(o.latitude));return l!==0?l:J(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},g=o.fields||{},A=(l=m[Al])===null||l===void 0?void 0:l.arrayValue,P=(u=g[Al])===null||u===void 0?void 0:u.arrayValue,x=J(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:kg(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===va.mapValue&&o===va.mapValue)return 0;if(s===va.mapValue)return 1;if(o===va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=xh(u[m],f[m]);if(g!==0)return g;const A=ji(l[u[m]],h[f[m]]);if(A!==0)return A}return J(u.length,f.length)}(t.mapValue,e.mapValue);default:throw q(23264,{le:n})}}function Rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=hr(t),r=hr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function kg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ji(n[i],r[i]);if(s)return s}return J(n.length,r.length)}function zi(t){return Dh(t)}function Dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dh(n.fields[o])}`;return i+"}"}(t.mapValue):q(61005,{value:t})}function Ua(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=iu(t);return e?16+Ua(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ua(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return vr(r.fields,(s,o)=>{i+=s.length+Ua(o)}),i}(t.mapValue);default:throw q(13486,{value:t})}}function Vh(t){return!!t&&"integerValue"in t}function sf(t){return!!t&&"arrayValue"in t}function Pg(t){return!!t&&"nullValue"in t}function Ng(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ja(t){return!!t&&"mapValue"in t}function uR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[F0])===null||n===void 0?void 0:n.stringValue)===U0}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===lR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=$s(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht($s(this.value))}}function j0(t){const e=[];return vr(t.fields,(n,r)=>{const i=new ze([n]);if(ja(r)){const s=j0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Q.min(),Q.min(),Q.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,Q.min(),Q.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Q.min(),Q.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.position=e,this.inclusive=n}}function xg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ji(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function hR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{}class xe extends z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fR(e,n,r):n==="array-contains"?new gR(e,r):n==="in"?new yR(e,r):n==="not-in"?new _R(e,r):n==="array-contains-any"?new vR(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pR(e,r):new mR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ji(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends z0{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new nn(e,n)}matches(e){return B0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function B0(t){return t.op==="and"}function $0(t){return dR(t)&&B0(t)}function dR(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Oh(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+zi(t.value);if($0(t))return t.filters.map(e=>Oh(e)).join(",");{const e=t.filters.map(n=>Oh(n)).join(",");return`${t.op}(${e})`}}function H0(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&H0(o,i.filters[l]),!0):!1}(t,e):void q(19439)}function W0(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${zi(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(W0).join(" ,")+"}"}(t):"Filter"}class fR extends xe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class pR extends xe{constructor(e,n){super(e,"in",n),this.keys=q0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mR extends xe{constructor(e,n){super(e,"not-in",n),this.keys=q0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function q0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class gR extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sf(n)&&go(n.arrayValue,this.value)}}class yR extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&go(this.value.arrayValue,n)}}class _R extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!go(this.value.arrayValue,n)}}class vR extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>go(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Vg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wR(t,e,n,r,i,s,o)}function of(t){const e=X(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zi(r)).join(",")),e.Pe=n}return e.Pe}function af(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!H0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dg(t.startAt,e.startAt)&&Dg(t.endAt,e.endAt)}function Lh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ER(t,e,n,r,i,s,o,l){return new su(t,e,n,r,i,s,o,l)}function lf(t){return new su(t)}function Og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TR(t){return t.collectionGroup!==null}function Hs(t){const e=X(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Rl(s,r))}),n.has(ze.keyField().canonicalString())||e.Te.push(new Rl(ze.keyField(),r))}return e.Te}function Yt(t){const e=X(t);return e.Ie||(e.Ie=IR(e,Hs(t))),e.Ie}function IR(t,e){if(t.limitType==="F")return Vg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Rl(i.field,s)});const n=t.endAt?new Cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cl(t.startAt.position,t.startAt.inclusive):null;return Vg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mh(t,e,n){return new su(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ou(t,e){return af(Yt(t),Yt(e))&&t.limitType===e.limitType}function G0(t){return`${of(Yt(t))}|lt:${t.limitType}`}function ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>W0(i)).join(", ")}]`),ru(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>zi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>zi(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function au(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Hs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=xg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Hs(r),i)||r.endAt&&!function(o,l,u){const h=xg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Hs(r),i))}(t,e)}function SR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function K0(t){return(e,n)=>{let r=!1;for(const i of Hs(t)){const s=AR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AR(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ji(u,h):q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return D0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new we(W.comparator);function Cn(){return CR}const Q0=new we(W.comparator);function ks(...t){let e=Q0;for(const n of t)e=e.insert(n.key,n);return e}function X0(t){let e=Q0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Ws()}function Y0(){return Ws()}function Ws(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const RR=new we(W.comparator),kR=new Oe(W.comparator);function te(...t){let e=kR;for(const n of t)e=e.add(n);return e}const PR=new Oe(J);function NR(){return PR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function J0(t){return{integerValue:""+t}}function xR(t,e){return rR(e)?J0(e):uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this._=void 0}}function DR(t,e,n){return t instanceof kl?function(i,s){const o={fields:{[L0]:{stringValue:O0},[b0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rf(s)&&(s=iu(s)),s&&(o.fields[M0]=s),{mapValue:o}}(n,e):t instanceof yo?ew(t,e):t instanceof _o?tw(t,e):function(i,s){const o=Z0(i,s),l=Lg(o)+Lg(i.Ee);return Vh(o)&&Vh(i.Ee)?J0(l):uf(i.serializer,l)}(t,e)}function VR(t,e,n){return t instanceof yo?ew(t,e):t instanceof _o?tw(t,e):n}function Z0(t,e){return t instanceof Pl?function(r){return Vh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class kl extends lu{}class yo extends lu{constructor(e){super(),this.elements=e}}function ew(t,e){const n=nw(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends lu{constructor(e){super(),this.elements=e}}function tw(t,e){let n=nw(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Pl extends lu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Lg(t){return Se(t.integerValue||t.doubleValue)}function nw(t){return sf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yo&&i instanceof yo||r instanceof _o&&i instanceof _o?Ui(r.elements,i.elements,tn):r instanceof Pl&&i instanceof Pl?tn(r.Ee,i.Ee):r instanceof kl&&i instanceof kl}(t.transform,e.transform)}class LR{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function rw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cf(t.key,Nt.none()):new xo(t.key,t.data,Nt.none());{const n=t.data,r=ht.empty();let i=new Oe(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wr(t.key,r,new vt(i.toArray()),Nt.none())}}function MR(t,e,n){t instanceof xo?function(i,s,o){const l=i.value.clone(),u=bg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(i,s,o){if(!za(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=bg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(iw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qs(t,e,n,r){return t instanceof xo?function(s,o,l,u){if(!za(s.precondition,o))return l;const h=s.value.clone(),f=Fg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(s,o,l,u){if(!za(s.precondition,o))return l;const h=Fg(s.fieldTransforms,u,o),f=o.data;return f.setAll(iw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return za(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Z0(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ui(r,i,(s,o)=>OR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xo extends uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bg(t,e,n){const r=new Map;se(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,VR(o,l,n[i]))}return r}function Fg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,DR(s,o,e))}return r}class cf extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FR extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Y0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=rw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&Ui(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class hf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return RR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ne;function BR(t){switch(t){case b.OK:return q(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return q(15467,{code:t})}}function sw(t){if(t===void 0)return An("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ce.OK:return b.OK;case Ce.CANCELLED:return b.CANCELLED;case Ce.UNKNOWN:return b.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return b.INTERNAL;case Ce.UNAVAILABLE:return b.UNAVAILABLE;case Ce.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ce.NOT_FOUND:return b.NOT_FOUND;case Ce.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ce.ABORTED:return b.ABORTED;case Ce.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ce.DATA_LOSS:return b.DATA_LOSS;default:return q(39323,{code:t})}}(ne=Ce||(Ce={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new ir([4294967295,4294967295],0);function Ug(t){const e=k0().encode(t),n=new w0;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ir([n,r],0),new ir([i,s],0)]}class df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ps(`Invalid padding: ${n}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=ir.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(ir.fromNumber(r)));return i.compare($R)===1&&(i=new ir([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ug(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new df(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Ug(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cu(Q.min(),i,new we(J),Cn(),te())}}class Do{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Do(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class ow{constructor(e,n){this.targetId=e,this.De=n}}class aw{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zg{constructor(){this.ve=0,this.Ce=Bg(),this.Fe=We.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=te(),n=te(),r=te();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q(38017,{changeType:s})}}),new Do(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Bg()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class HR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Cn(),this.je=wa(),this.Je=wa(),this.He=new we(J)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Lh(s))if(r===0){const o=new W(s.path);this.Xe(n,o,et.newNoDocument(o,Q.min()))}else se(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=dr(r).toUint8Array()}catch(u){if(u instanceof V0)return ur("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new df(o,i,s)}catch(u){return ur(u instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Lh(l.target)){const u=new W(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,et.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=te();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new cu(e,n,this.He,this.ze,r);return this.ze=Cn(),this.je=wa(),this.Je=wa(),this.He=new we(J),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new zg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Oe(J),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Oe(J),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new zg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function wa(){return new we(W.comparator)}function Bg(){return new we(W.comparator)}const WR={asc:"ASCENDING",desc:"DESCENDING"},qR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GR={and:"AND",or:"OR"};class KR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bh(t,e){return t.useProto3Json||ru(e)?e:{value:e}}function Nl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QR(t,e){return Nl(t,e.toTimestamp())}function Jt(t){return se(!!t,49232),Q.fromTimestamp(function(n){const r=hr(n);return new fe(r.seconds,r.nanos)}(t))}function ff(t,e){return Fh(t,e).canonicalString()}function Fh(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uw(t){const e=de.fromString(t);return se(pw(e),10190,{key:e.toString()}),e}function Uh(t,e){return ff(t.databaseId,e.path)}function Ec(t,e){const n=uw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(hw(n))}function cw(t,e){return ff(t.databaseId,e)}function XR(t){const e=uw(t);return e.length===4?de.emptyPath():hw(e)}function jh(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hw(t){return se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $g(t,e,n){return{name:Uh(t,e),fields:n.value.mapValue.fields}}function YR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string",58123),We.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:sw(h.code);return new H(f,h.message||"")}(o);n=new aw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ec(t,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):Q.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ba(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ec(t,r.document),s=r.readTime?Jt(r.readTime):Q.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ec(t,r.document),s=r.removedTargetIds||[];n=new Ba([],s,i,null)}else{if(!("filter"in e))return q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new zR(i,s),l=r.targetId;n=new ow(l,o)}}return n}function JR(t,e){let n;if(e instanceof xo)n={update:$g(t,e.key,e.value)};else if(e instanceof cf)n={delete:Uh(t,e.key)};else if(e instanceof wr)n={update:$g(t,e.key,e.data),updateMask:ak(e.fieldMask)};else{if(!(e instanceof FR))return q(16599,{Rt:e.type});n={verify:Uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof kl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:QR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q(27497)}(t,e.precondition)),n}function ZR(t,e){return t&&t.length>0?(se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Jt(i.updateTime):Jt(s);return o.isEqual(Q.min())&&(o=Jt(s)),new LR(o,i.transformResults||[])}(n,e))):[]}function ek(t,e){return{documents:[cw(t,e.path)]}}function tk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cw(t,i);const s=function(h){if(h.length!==0)return fw(nn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:si(g.field),direction:ik(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function nk(t){let e=XR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=dw(m);return g instanceof nn&&$0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(P){return new Rl(oi(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ru(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new Cl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,A=m.values||[];return new Cl(A,g)}(n.endAt)),ER(e,i,o,s,l,"F",u,h)}function rk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=oi(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=oi(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=oi(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(t):t.fieldFilter!==void 0?function(n){return xe.create(oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>dw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(n.compositeFilter.op))}(t):q(30097,{filter:t})}function ik(t){return WR[t]}function sk(t){return qR[t]}function ok(t){return GR[t]}function si(t){return{fieldPath:t.canonicalString()}}function oi(t){return ze.fromServerFormat(t.fieldPath)}function fw(t){return t instanceof xe?function(n){if(n.op==="=="){if(Ng(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(Pg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ng(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(Pg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:sk(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>fw(i));return r.length===1?r[0]:{compositeFilter:{op:ok(n.op),filters:r}}}(t):q(54877,{filter:t})}function ak(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e){this.gt=e}}function uk(t){const e=nk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.Dn=new hk}addToCollectionParentIndex(e,n){return this.Dn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(cr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class hk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mw=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(mw,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Bi(0)}static ur(){return new Bi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="LruGarbageCollector",dk=1048576;function qg([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class fk{constructor(e){this.Tr=e,this.buffer=new Oe(qg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){z(Wg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ji(n)?z(Wg,"Ignoring IndexedDB error during garbage collection: ",n):await Yi(n)}await this.Rr(3e5)})}}class mk{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(nu.ue);const r=new fk(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Hg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),ri()<=ee.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function gk(t,e){return new mk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&qs(r.mutation,i,vt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ks();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cn();const o=Ws(),l=function(){return Ws()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof wr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),qs(f.mutation,h,f.mutation.getFieldMask(),fe.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new _k(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ws();let i=new we((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Y0();f.forEach(g=>{if(!s.has(g)){const A=rw(n.get(g),r.get(g));A!==null&&m.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Dr());let l=fo,u=s;return o.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:X0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=ks();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ks();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,g){return new su(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=ks();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&qs(f.mutation,h,vt.empty(),fe.now()),au(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return O.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:uk(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.overlays=new we(W.comparator),this.kr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Dr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Dr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jR(n,r));let s=this.kr.get(n);s===void 0&&(s=te(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.qr=new Oe(Le.Qr),this.$r=new Oe(Le.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Le(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new W(new de([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new W(new de([])),r=new Le(n,e),i=new Le(n,e+1);let s=te();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return W.comparator(e.key,n.key)||J(e.Hr,n.Hr)}static Ur(e,n){return J(e.Hr,n.Hr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Oe(Le.Qr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?nf:this.er-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(J);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),O.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Le(new W(s),0);let l=new Oe(J);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),O.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return O.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Le(n,0),i=this.Yr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.ni=e,this.docs=function(){return new we(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ZC(JC(f),r)<=0||(i.has(f.key)||au(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q(9500)}ri(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ak(this)}getSize(e){return O.resolve(this.size)}}class Ak extends yk{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.persistence=e,this.ii=new Xr(n=>of(n),af),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new pf,this.targetCount=0,this._i=Bi.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),O.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Bi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.hr(n),O.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.ai={},this.overlays={},this.ui=new nu(0),this.ci=!1,this.ci=!0,this.li=new Tk,this.referenceDelegate=e(this),this.hi=new Ck(this),this.indexManager=new ck,this.remoteDocumentCache=function(i){return new Sk(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new lk(n),this.Ti=new wk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ek,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Ik(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new Rk(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return O.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class Rk extends tR{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Ai=new pf,this.Ri=null}static Vi(e){return new mf(e)}get mi(){if(this.Ri)return this.Ri;throw q(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.mi,r=>{const i=W.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return O.or([()=>O.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class xl{constructor(e,n){this.persistence=e,this.gi=new Xr(r=>iR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=gk(this,n)}static Vi(e,n){return new xl(e,n)}Ii(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return O.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),O.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ua(e.data.value)),n}Sr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return EI()?8:nR(nt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kk;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(ri()<=ee.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(ri()<=ee.DEBUG&&z("QueryEngine","Query:",ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(ri()<=ee.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):O.resolve())}ps(e,n){if(Og(n))return O.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mh(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Mh(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Og(n)||i.isEqual(Q.min())?O.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?O.resolve(null):(ri()<=ee.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ii(n)),this.vs(e,o,n,YC(i,fo)).next(l=>l))})}bs(e,n){let r=new Oe(K0(e));return n.forEach((i,s)=>{au(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return ri()<=ee.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",ii(n)),this.gs.getDocumentsMatchingQuery(e,n,cr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="LocalStore",Nk=3e8;class xk{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new we(J),this.Ms=new Xr(s=>of(s),af),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function Dk(t,e,n,r){return new xk(t,e,n,r)}async function yw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Vk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let A=O.resolve();return g.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(x=>{const M=h.docVersions.get(P);se(M!==null,48541),x.version.compareTo(M)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _w(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Ok(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,m)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(We.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(x,M,I){return x.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Nk?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,A,f)&&l.push(n.hi.updateTargetData(s,A))});let u=Cn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Lk(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(Q.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(m=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function Lk(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(yf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function Mk(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=nf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bk(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function zh(t,e,n){const r=X(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ji(o))throw o;z(yf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Gg(t,e,n){const r=X(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=X(u),g=m.Ms.get(f);return g!==void 0?O.resolve(m.Fs.get(g)):m.hi.getTargetData(h,f)}(r,o,Yt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(l=>(Fk(r,SR(e),l),{documents:l,qs:s})))}function Fk(t,e,n){let r=t.xs.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class Kg{constructor(){this.activeTargetIds=NR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uk{constructor(){this.Fo=new Kg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="ConnectivityMonitor";class Xg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){z(Qg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){z(Qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea=null;function Bh(){return Ea===null?Ea=function(){return 268435456+Math.round(2147483648*Math.random())}():Ea++,"0x"+Ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="RestConnection",zk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Bk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Sl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Bh(),l=this.Go(e,n.toUriEncodedString());z(Tc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=Gi(h);return this.jo(e,l,u,r,f).then(m=>(z(Tc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ur(Tc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=zk[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class Hk extends Bk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=Bh();return new Promise((l,u)=>{const h=new E0;h.setWithCredentials(!0),h.listenOnce(T0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Fa.NO_ERROR:const m=h.getResponseJson();z(Ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Fa.TIMEOUT:z(Ye,`RPC '${e}' ${o} timed out`),u(new H(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const g=h.getStatus();if(z(Ye,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const x=function(I){const w=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(w)>=0?w:b.UNKNOWN}(P.status);u(new H(x,P.message))}else u(new H(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(b.UNAVAILABLE,"Connection failed."));break;default:q(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{z(Ye,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);z(Ye,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Bh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=A0(),l=S0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");z(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let g=!1,A=!1;const P=new $k({Ho:M=>{A?z(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(g||(z(Ye,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),z(Ye,`RPC '${e}' stream ${i} sending:`,M),m.send(M))},Yo:()=>m.close()}),x=(M,I,w)=>{M.listen(I,S=>{try{w(S)}catch(D){setTimeout(()=>{throw D},0)}})};return x(m,Rs.EventType.OPEN,()=>{A||(z(Ye,`RPC '${e}' stream ${i} transport opened.`),P.s_())}),x(m,Rs.EventType.CLOSE,()=>{A||(A=!0,z(Ye,`RPC '${e}' stream ${i} transport closed`),P.__(),this.I_(m))}),x(m,Rs.EventType.ERROR,M=>{A||(A=!0,ur(Ye,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),P.__(new H(b.UNAVAILABLE,"The operation could not be completed")))}),x(m,Rs.EventType.MESSAGE,M=>{var I;if(!A){const w=M.data[0];se(!!w,16349);const S=w,D=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(D){z(Ye,`RPC '${e}' stream ${i} received error:`,D);const V=D.status;let L=function(v){const E=Ce[v];if(E!==void 0)return sw(E)}(V),_=D.message;L===void 0&&(L=b.INTERNAL,_="Unknown error status: "+V+" with message "+D.message),A=!0,P.__(new H(L,_)),m.close()}else z(Ye,`RPC '${e}' stream ${i} received:`,w),P.a_(w)}}),x(l,I0.STAT_EVENT,M=>{M.stat===Nh.PROXY?z(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Nh.NOPROXY&&z(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){return new KR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="PersistentStream";class ww{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new vw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new H(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(Yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(z(Yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wk extends ww{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=YR(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Jt(o.readTime):Q.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=jh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Lh(u)?{documents:ek(s,u)}:{query:tk(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=lw(s,o.resumeToken);const h=bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Nl(s,o.snapshotVersion.toTimestamp());const h=bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=rk(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=jh(this.serializer),n.removeTarget=e,this.k_(n)}}class qk extends ww{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=ZR(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=jh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JR(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{}class Kk extends Gk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Fh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(b.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Fh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(b.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Qk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(An(n),this._a=!1):z("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RemoteStore";class Xk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(z(Gr,"Restarting streams for network reachability change."),await async function(u){const h=X(u);h.Ia.add(4),await Vo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await du(h)}(this))})}),this.Aa=new Qk(r,i)}}async function du(t){if(Yr(t))for(const e of t.da)await e(!0)}async function Vo(t){for(const e of t.da)await e(!1)}function Ew(t,e){const n=X(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ef(n)?wf(n):Zi(n).x_()&&vf(n,e))}function _f(t,e){const n=X(t),r=Zi(n);n.Ta.delete(e),r.x_()&&Tw(n,e),n.Ta.size===0&&(r.x_()?r.B_():Yr(n)&&n.Aa.set("Unknown"))}function vf(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zi(t).H_(e)}function Tw(t,e){t.Ra.$e(e),Zi(t).Y_(e)}function wf(t){t.Ra=new HR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Zi(t).start(),t.Aa.aa()}function Ef(t){return Yr(t)&&!Zi(t).M_()&&t.Ta.size>0}function Yr(t){return X(t).Ia.size===0}function Iw(t){t.Ra=void 0}async function Yk(t){t.Aa.set("Online")}async function Jk(t){t.Ta.forEach((e,n)=>{vf(t,e)})}async function Zk(t,e){Iw(t),Ef(t)?(t.Aa.la(e),wf(t)):t.Aa.set("Unknown")}async function eP(t,e,n){if(t.Aa.set("Online"),e instanceof aw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){z(Gr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof Ba?t.Ra.Ye(e):e instanceof ow?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Q.min()))try{const r=await _w(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),Tw(s,u);const m=new Wn(f.target,u,h,f.sequenceNumber);vf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z(Gr,"Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!Ji(e))throw e;t.Ia.add(1),await Vo(t),t.Aa.set("Offline"),n||(n=()=>_w(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(Gr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await du(t)})}function Sw(t,e){return e().catch(n=>Dl(t,n,e))}async function fu(t){const e=X(t),n=pr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nf;for(;tP(e);)try{const i=await Mk(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,nP(e,i)}catch(i){await Dl(e,i)}Aw(e)&&Cw(e)}function tP(t){return Yr(t)&&t.Pa.length<10}function nP(t,e){t.Pa.push(e);const n=pr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Aw(t){return Yr(t)&&!pr(t).M_()&&t.Pa.length>0}function Cw(t){pr(t).start()}async function rP(t){pr(t).na()}async function iP(t){const e=pr(t);for(const n of t.Pa)e.X_(n.mutations)}async function sP(t,e,n){const r=t.Pa.shift(),i=hf.from(r,e,n);await Sw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fu(t)}async function oP(t,e){e&&pr(t).Z_&&await async function(r,i){if(function(o){return BR(o)&&o!==b.ABORTED}(i.code)){const s=r.Pa.shift();pr(r).N_(),await Sw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await fu(r)}}(t,e),Aw(t)&&Cw(t)}async function Jg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),z(Gr,"RemoteStore received new credentials");const r=Yr(n);n.Ia.add(3),await Vo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await du(n)}async function aP(t,e){const n=X(t);e?(n.Ia.delete(2),await du(n)):e||(n.Ia.add(2),await Vo(n),n.Aa.set("Unknown"))}function Zi(t){return t.Va||(t.Va=function(n,r,i){const s=X(n);return s.ia(),new Wk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:Yk.bind(null,t),e_:Jk.bind(null,t),n_:Zk.bind(null,t),J_:eP.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Ef(t)?wf(t):t.Aa.set("Unknown")):(await t.Va.stop(),Iw(t))})),t.Va}function pr(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.ia(),new qk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:rP.bind(null,t),n_:oP.bind(null,t),ea:iP.bind(null,t),ta:sP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await fu(t)):(await t.ma.stop(),t.Pa.length>0&&(z(Gr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Tf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(t,e){if(An("AsyncQueue",`${e}: ${t}`),Ji(t))return new H(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{static emptySet(e){return new Pi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=ks(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.fa=new we(W.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):q(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class $i{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new $i(e,n,Pi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class uP{constructor(){this.queries=ey(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=ey(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new H(b.ABORTED,"Firestore shutting down"))}}function ey(){return new Xr(t=>G0(t),ou)}async function cP(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new lP,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=If(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Sf(n)}async function hP(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dP(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Sf(n)}function fP(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Sf(t){t.Da.forEach(e=>{e.next()})}var $h,ty;(ty=$h||($h={})).Fa="default",ty.Cache="cache";class pP{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==$h.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.key=e}}class kw{constructor(e){this.key=e}}class mP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=te(),this.mutatedKeys=te(),this.Xa=K0(e),this.eu=new Pi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Zg,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),A=au(this.query,m)?m:null,P=!!g&&this.mutatedKeys.has(g.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;g&&A?g.data.isEqual(A.data)?P!==x&&(r.track({type:3,doc:A}),M=!0):this.iu(g,A)||(r.track({type:2,doc:A}),M=!0,(u&&this.Xa(A,u)>0||h&&this.Xa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),M=!0):g&&!A&&(r.track({type:1,doc:g}),M=!0,(u||h)&&(l=!0)),M&&(A?(o=o.add(A),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(A,P){const x=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{At:M})}};return x(A)-x(P)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new $i(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=te(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new kw(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new Rw(r))}),n}uu(e){this.Ha=e.qs,this.Za=te();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return $i.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Af="SyncEngine";class gP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yP{constructor(e){this.key=e,this.lu=!1}}class _P{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Xr(l=>G0(l),ou),this.Tu=new Map,this.Iu=new Set,this.du=new we(W.comparator),this.Eu=new Map,this.Au=new pf,this.Ru={},this.Vu=new Map,this.mu=Bi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function vP(t,e,n=!0){const r=Ow(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Pw(r,e,n,!0),i}async function wP(t,e){const n=Ow(t);await Pw(n,e,!0,!1)}async function Pw(t,e,n,r){const i=await bk(t.localStore,Yt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await EP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ew(t.remoteStore,i),l}async function EP(t,e,n,r,i){t.gu=(m,g,A)=>async function(x,M,I,w){let S=M.view.nu(I);S.Ds&&(S=await Gg(x.localStore,M.query,!1).then(({documents:_})=>M.view.nu(_,S)));const D=w&&w.targetChanges.get(M.targetId),V=w&&w.targetMismatches.get(M.targetId)!=null,L=M.view.applyChanges(S,x.isPrimaryClient,D,V);return ry(x,M.targetId,L._u),L.snapshot}(t,m,g,A);const s=await Gg(t.localStore,e,!0),o=new mP(e,s.qs),l=o.nu(s.documents),u=Do.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ry(t,n,h._u);const f=new gP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function TP(t,e,n){const r=X(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!ou(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&_f(r.remoteStore,i.targetId),Hh(r,i.targetId)}).catch(Yi)):(Hh(r,i.targetId),await zh(r.localStore,i.targetId,!0))}async function IP(t,e){const n=X(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_f(n.remoteStore,r.targetId))}async function SP(t,e,n){const r=xP(t);try{const i=await function(o,l){const u=X(o),h=fe.now(),f=l.reduce((A,P)=>A.add(P.key),te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Cn(),x=te();return u.Os.getEntries(A,f).next(M=>{P=M,P.forEach((I,w)=>{w.isValidDocument()||(x=x.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(M=>{m=M;const I=[];for(const w of l){const S=bR(w,m.get(w.key).overlayedDocument);S!=null&&I.push(new wr(w.key,S,j0(S.value.mapValue),Nt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(M=>{g=M;const I=M.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(A,M.batchId,I)})}).then(()=>({batchId:g.batchId,changes:X0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new we(J)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await Oo(r,i.changes),await fu(r.remoteStore)}catch(i){const s=If(i,"Failed to persist write");n.reject(s)}}async function Nw(t,e){const n=X(t);try{const r=await Ok(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?se(o.lu,14607):i.removedDocuments.size>0&&(se(o.lu,42227),o.lu=!1))}),await Oo(n,r,e)}catch(r){await Yi(r)}}function ny(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.wa)g.va(l)&&(h=!0)}),h&&Sf(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new we(W.comparator);o=o.insert(s,et.newNoDocument(s,Q.min()));const l=te().add(s),u=new cu(Q.min(),new Map,new we(J),o,l);await Nw(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Cf(r)}else await zh(r.localStore,e,!1).then(()=>Hh(r,e,n)).catch(Yi)}async function CP(t,e){const n=X(t),r=e.batch.batchId;try{const i=await Vk(n.localStore,e);Dw(n,r,null),xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oo(n,i)}catch(i){await Yi(i)}}async function RP(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(se(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Dw(r,e,n),xw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Oo(r,i)}catch(i){await Yi(i)}}function xw(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function Dw(t,e,n){const r=X(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Hh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Vw(t,r)})}function Vw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(_f(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Cf(t))}function ry(t,e,n){for(const r of n)r instanceof Rw?(t.Au.addReference(r.key,e),kP(t,r)):r instanceof kw?(z(Af,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Vw(t,r.key)):q(19791,{yu:r})}function kP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(z(Af,"New document in limbo: "+n),t.Iu.add(r),Cf(t))}function Cf(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new W(de.fromString(e)),r=t.mu.next();t.Eu.set(r,new yP(n)),t.du=t.du.insert(n,r),Ew(t.remoteStore,new Wn(Yt(lf(n.path)),r,"TargetPurposeLimboResolution",nu.ue))}}async function Oo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=gf.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,g=>O.forEach(g.Is,A=>f.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>O.forEach(g.ds,A=>f.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!Ji(m))throw m;z(yf,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const A=f.Fs.get(g),P=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(P);f.Fs=f.Fs.insert(g,x)}}}(r.localStore,s))}async function PP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){z(Af,"User change. New user:",e.toKey());const r=await yw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new H(b.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oo(n,r.Bs)}}function NP(t,e){const n=X(t),r=n.Eu.get(e);if(r&&r.lu)return te().add(r.key);{let i=te();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function Ow(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AP.bind(null,e),e.hu.J_=dP.bind(null,e.eventManager),e.hu.pu=fP.bind(null,e.eventManager),e}function xP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RP.bind(null,e),e}class Vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return Dk(this.persistence,new Pk,e.initialUser,this.serializer)}Du(e){return new gw(mf.Vi,this.serializer)}bu(e){return new Uk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vl.provider={build:()=>new Vl};class DP extends Vl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){se(this.persistence.referenceDelegate instanceof xl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pk(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new gw(r=>xl.Vi(r,n),this.serializer)}}class Wh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PP.bind(null,this.syncEngine),await aP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uP}()}createDatastore(e){const n=hu(e.databaseInfo.databaseId),r=function(s){return new Hk(s)}(e.databaseInfo);return function(s,o,l,u){return new Kk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Xk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ny(this.syncEngine,n,0),function(){return Xg.C()?new Xg:new jk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new _P(i,s,o,l,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);z(Gr,"RemoteStore shutting down."),s.Ia.add(5),await Vo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wh.provider={build:()=>new Wh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="FirestoreClient";class OP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z(mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=If(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sc(t,e){t.asyncQueue.verifyOperationInProgress(),z(mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{ur("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{z("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{ur("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LP(t);z(mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jg(e.remoteStore,i)),t._onlineComponents=e}async function LP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(mr,"Using user provided OfflineComponentProvider");try{await Sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ur("Error using user provided cache. Falling back to memory cache: "+n),await Sc(t,new Vl)}}else z(mr,"Using default OfflineComponentProvider"),await Sc(t,new DP(void 0));return t._offlineComponents}async function Lw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(mr,"Using user provided OnlineComponentProvider"),await iy(t,t._uninitializedComponentsProvider._online)):(z(mr,"Using default OnlineComponentProvider"),await iy(t,new Wh))),t._onlineComponents}function MP(t){return Lw(t).then(e=>e.syncEngine)}async function sy(t){const e=await Lw(t),n=e.eventManager;return n.onListen=vP.bind(null,e.syncEngine),n.onUnlisten=TP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=IP.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="firestore.googleapis.com",ay=!0;class ly{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bw,this.ssl=ay}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ay;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dk)throw new H(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zC;switch(r.type){case"firstParty":return new WC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oy.get(n);r&&(z("ComponentProvider","Removing Datastore"),oy.delete(n),r.terminate())}(this),Promise.resolve()}}function bP(t,e,n,r={}){var i;t=Mr(t,pu);const s=Gi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(Ov(`https://${u}`),Lv("Firestore",!0)),o.host!==bw&&o.host!==u&&ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!$r(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Je.MOCK_USER;else{f=dI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Je(g)}t._authCredentials=new BC(new R0(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mu(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(No(n,Ve._jsonSchema))return new Ve(e,r||null,new W(de.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:Pe("string",Ve._jsonSchemaVersion),referencePath:Pe("string")};class sr extends mu{constructor(e,n,r){super(e,n,lf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new W(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function FP(t,e,...n){if(t=He(t),P0("collection","path",e),t instanceof pu){const r=de.fromString(e,...n);return Eg(r),new sr(t,null,r)}{if(!(t instanceof Ve||t instanceof sr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Eg(r),new sr(t.firestore,null,r)}}function uy(t,e,...n){if(t=He(t),arguments.length===1&&(e=ef.newId()),P0("doc","path",e),t instanceof pu){const r=de.fromString(e,...n);return wg(r),new Ve(t,null,new W(r))}{if(!(t instanceof Ve||t instanceof sr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return wg(r),new Ve(t.firestore,t instanceof sr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="AsyncQueue";class hy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new vw(this,"async_queue_retry"),this.oc=()=>{const r=Ic();r&&z(cy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Ic();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Lr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ji(e))throw e;z(cy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,An("INTERNAL UNHANDLED ERROR: ",dy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Tf.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&q(47125,{hc:dy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function dy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class vo extends pu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new hy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hy(e),this._firestoreClient=void 0,await e}}}function UP(t,e){const n=typeof t=="object"?t:Uv(),r=typeof t=="string"?t:Sl,i=Hd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cI("firestore");s&&bP(i,...s)}return i}function Rf(t){if(t._terminated)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jP(t),t._firestoreClient}function jP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new aR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Mw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new OP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(We.fromBase64String(e))}catch(n){throw new H(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(No(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Pe("string",Rt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(No(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:Pe("string",Zt._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(No(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new en(e.vectorValues);throw new H(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:Pe("string",en._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=/^__.*__$/;class BP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}class Fw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Uw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ec:t})}}class Pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ol(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Uw(this.Ec)&&zP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $P{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hu(e)}Dc(e,n,r,i=!1){return new Pf({Ec:e,methodName:n,bc:r,path:ze.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jw(t){const e=t._freezeSettings(),n=hu(t._databaseId);return new $P(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zw(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);Nf("Data must be an object, but it was:",o,r);const l=Bw(r,o);let u,h;if(s.merge)u=new vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=qh(e,m,n);if(!o.contains(g))throw new H(b.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Hw(f,g)||f.push(g)}u=new vt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new BP(new ht(l),u,h)}class yu extends kf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yu}}function HP(t,e,n,r){const i=t.Dc(1,e,n);Nf("Data must be an object, but it was:",i,r);const s=[],o=ht.empty();vr(r,(u,h)=>{const f=xf(e,u,n);h=He(h);const m=i.gc(f);if(h instanceof yu)s.push(f);else{const g=_u(h,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new vt(s);return new Fw(o,l,i.fieldTransforms)}function WP(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[qh(e,r,n)],u=[i];if(s.length%2!=0)throw new H(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(qh(e,s[g])),u.push(s[g+1]);const h=[],f=ht.empty();for(let g=l.length-1;g>=0;--g)if(!Hw(h,l[g])){const A=l[g];let P=u[g];P=He(P);const x=o.gc(A);if(P instanceof yu)h.push(A);else{const M=_u(P,x);M!=null&&(h.push(A),f.set(A,M))}}const m=new vt(h);return new Fw(f,m,o.fieldTransforms)}function _u(t,e){if($w(t=He(t)))return Nf("Unsupported field value:",e,t),Bw(t,e);if(t instanceof kf)return function(r,i){if(!Uw(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_u(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:Nl(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nl(i.serializer,s)}}if(r instanceof Zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:lw(i.serializer,r._byteString)};if(r instanceof Ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ff(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof en)return function(o,l){return{mapValue:{fields:{[F0]:{stringValue:U0},[Al]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return uf(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${tf(r)}`)}(t,e)}function Bw(t,e){const n={};return D0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,i)=>{const s=_u(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $w(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Zt||t instanceof Rt||t instanceof Ve||t instanceof kf||t instanceof en)}function Nf(t,e,n){if(!$w(n)||!N0(n)){const r=tf(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function qh(t,e,n){if((e=He(e))instanceof gu)return e._internalPath;if(typeof e=="string")return xf(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const qP=new RegExp("[~\\*/\\[\\]]");function xf(t,e,n){if(e.search(qP)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gu(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(b.INVALID_ARGUMENT,l+t+u)}function Hw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GP extends Ww{data(){return super.data()}}function qw(t,e){return typeof e=="string"?xf(t,e):e instanceof gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QP{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Al].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new en(s)}convertGeoPoint(e){return new Zt(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=iu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(po(e));default:return null}}convertTimestamp(e){const n=hr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);se(pw(r),9688,{name:e});const i=new mo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||An(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends Ww{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:Pe("string",br._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class $a extends br{data(e={}){return super.data(e)}}class Ni{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ns(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $a(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $a(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:XP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:t})}}Ni._jsonSchemaVersion="firestore/querySnapshot/1.0",Ni._jsonSchema={type:Pe("string",Ni._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class Kw extends QP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function YP(t,e,n){t=Mr(t,Ve);const r=Mr(t.firestore,vo),i=Gw(t.converter,e,n);return Qw(r,[zw(jw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nt.none())])}function JP(t,...e){var n,r,i;t=He(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||fy(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(fy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof Ve)h=Mr(t.firestore,vo),f=lf(t._key.path),u={next:m=>{e[o]&&e[o](ZP(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Mr(t,mu);h=Mr(m.firestore,vo),f=m._query;const g=new Kw(h);u={next:A=>{e[o]&&e[o](new Ni(h,g,m,A))},error:e[o+1],complete:e[o+2]},KP(t._query)}return function(g,A,P,x){const M=new VP(x),I=new pP(A,M,P);return g.asyncQueue.enqueueAndForget(async()=>cP(await sy(g),I)),()=>{M.Ou(),g.asyncQueue.enqueueAndForget(async()=>hP(await sy(g),I))}}(Rf(h),f,l,u)}function Qw(t,e){return function(r,i){const s=new Lr;return r.asyncQueue.enqueueAndForget(async()=>SP(await MP(r),i,s)),s.promise}(Rf(t),e)}function ZP(t,e,n){const r=n.docs.get(e._key),i=new Kw(t);return new br(t,i,e._key,r,new Ns(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=jw(e)}set(e,n,r){this._verifyNotCommitted();const i=Ac(e,this._firestore),s=Gw(i.converter,n,r),o=zw(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Nt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ac(e,this._firestore);let o;return o=typeof(n=He(n))=="string"||n instanceof gu?WP(this._dataReader,"WriteBatch.update",s._key,n,r,i):HP(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Nt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ac(e,this._firestore);return this._mutations=this._mutations.concat(new cf(n._key,Nt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ac(t,e){if((t=He(t)).firestore!==e)throw new H(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){return Rf(t=Mr(t,vo)),new e2(t,e=>Qw(t,e))}(function(e,n=!0){(function(i){Xi=i})(Ki),Fi(new Hr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new vo(new $C(r.getProvider("auth-internal")),new qC(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(mg,gg,e),nr(mg,gg,"esm2017")})();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xw=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=Re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>Re.createElement("svg",{ref:u,...r2,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Xw("lucide",i),...l},[...o.map(([h,f])=>Re.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=(t,e)=>{const n=Re.forwardRef(({className:r,...i},s)=>Re.createElement(i2,{ref:s,iconNode:e,className:Xw(`lucide-${n2(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=Pn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=Pn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=Pn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=Pn("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=Pn("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=Pn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=Pn("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=Pn("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=Pn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),py={apiKey:"AIzaSyCXUG9VanJhe-huto707XTszRMCOjmzvA0",authDomain:"vargascury1140.firebaseapp.com",projectId:"vargascury1140",storageBucket:"vargascury1140.firebasestorage.app",messagingSenderId:"248969218430",appId:"1:248969218430:web:6ffaee66a679c93659cb2f",measurementId:"G-ZWHG09M19B"};let Ha,Gh,xs;try{py.apiKey&&(Ha=Fv(py),Gh=UC(Ha),xs=UP(Ha))}catch{console.error("Erro Firebase")}const Rc={"nao-verificado":{label:"Não Verificado",bg:"bg-yellow-400",text:"text-yellow-900",icon:a2},dificil:{label:"Difícil",bg:"bg-red-600",text:"text-white",icon:l2},facil:{label:"Fácil",bg:"bg-cyan-500",text:"text-white",icon:s2},pronto:{label:"Pronto",bg:"bg-green-600",text:"text-white",icon:o2}},Ts=["102","103","104","105","106","110","113","115","117","119","120","201","202","203","204","205","210","213","214","215","217","218","219","220","301","304","305","306","307","309","313","314","315","318","320","402","403","404","413","414","415","416","417","418","419","501","502","503","504","505","506","510","511","513","514","515","516","520","601","602","603","617","618","701","705","706","708","709","712","713","719","720","801","802","805","810","813","815","816","817","818","819","901","902","903","904","905","906","910","912","913","914","916","917","918","919","920","1001","1002","1004","1005","1006","1013","1015","1016","1017","1019","1102","1103","1104","1105","1106","1107","1108","1110","1111","1112","1113","1114","1115","1117","1119","1120","1202","1203","1205","1206","1207","1208","1212","1214","1215","1217","1218","1219","1220","1301","1302","1304","1305","1306","1313","1314","1315","1317","1318","1401","1404","1406","1407","1408","1412","1414","1415","1416","1417","1418","1420","1501","1504","1506","1507","1510","1511","1512","1514","1517","1519","1520","1602","1603","1604","1606","1608","1613","1614","1615","1616","1618","1619","1702","1703","1705","1711","1712","1715","1718","1719","1720","1801","1802","1803","1810","1811","1814","1815","1818","1819","1820"],my=18,kc=20;function f2(){const[t,e]=Re.useState(null),[n,r]=Re.useState({}),[i,s]=Re.useState(!0),[o,l]=Re.useState(null),[u,h]=Re.useState(""),[f,m]=Re.useState("nao-verificado"),[g,A]=Re.useState(!1),[P,x]=Re.useState(null);if(!Ha)return $.jsx("div",{className:"h-screen flex flex-col items-center justify-center bg-slate-100 p-4",children:$.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-2xl text-center border-l-8 border-red-500",children:[$.jsx("h1",{className:"text-2xl font-black text-slate-800 mb-2",children:"FALTA CONFIGURAR"}),$.jsxs("p",{className:"text-slate-600",children:["Você precisa colar o ",$.jsx("code",{children:"firebaseConfig"})," no início do arquivo ",$.jsx("code",{children:"App.jsx"}),"."]})]})});Re.useEffect(()=>{TA(Gh);const V=kA(Gh,e);return()=>V()},[]),Re.useEffect(()=>{if(!t)return;const V=JP(FP(xs,"vargas_vistoria_data"),L=>{const _={};L.forEach(y=>_[y.id]=y.data()),Object.keys(_).length===0?M():(r(_),s(!1))});return()=>V()},[t]);const M=async()=>{s(!0);const V=t2(xs);let L=0;for(let _=1;_<=my;_++)for(let y=1;y<=kc;y++){const v=`${_}${y.toString().padStart(2,"0")}`;V.set(uy(xs,"vargas_vistoria_data",v),{id:v,status:"nao-verificado",notes:"",isPriority:Ts.includes(v)}),L++,L>=450&&(await V.commit(),L=0)}L>0&&await V.commit(),s(!1)},I=async()=>{!t||!o||(await YP(uy(xs,"vargas_vistoria_data",o),{id:o,status:f,notes:u,updatedAt:new Date().toISOString(),updatedBy:"Admin",isPriority:Ts.includes(o)},{merge:!0}),l(null))},w=()=>{const V=Object.values(n).filter(y=>y.status==="pronto").length,L=Object.values(n).length,_=`*VARGAS 1140 - STATUS*
✅ Prontos: ${V}/${L}

Acesse o painel para ver detalhes.`;navigator.clipboard.writeText(_).then(()=>alert("Relatório copiado!"))},S=Re.useMemo(()=>{const V={pronto:0,facil:0,dificil:0,"nao-verificado":0,priorityOk:0,priorityTotal:0};return Ts.forEach(L=>{n[L]&&(V.priorityTotal++,n[L].status==="pronto"&&V.priorityOk++)}),Object.values(n).forEach(L=>{V[L.status]!==void 0?V[L.status]++:V["nao-verificado"]++}),V},[n]),D=Re.useMemo(()=>{const V=[];for(let L=my;L>=1;L--){const _=[];for(let y=1;y<=kc;y++){const v=`${L}${y.toString().padStart(2,"0")}`;_.push(n[v]||{id:v,status:"nao-verificado"})}V.push({floor:L,units:_})}return V},[n]);return i?$.jsx("div",{className:"flex h-screen items-center justify-center text-xl font-bold text-slate-600 animate-pulse",children:"Carregando Tabela da Obra..."}):$.jsxs("div",{className:"min-h-screen bg-slate-200 font-sans text-slate-900 flex flex-col",children:[$.jsx("header",{className:"bg-slate-900 text-white shadow-2xl z-20 sticky top-0 border-b-4 border-blue-600",children:$.jsxs("div",{className:"max-w-[1800px] mx-auto p-3",children:[$.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-4 gap-4",children:[$.jsxs("div",{className:"flex items-center gap-3",children:[$.jsx("div",{className:"bg-blue-600 p-2 rounded shadow-lg",children:$.jsx(u2,{className:"w-6 h-6 text-white"})}),$.jsxs("div",{children:[$.jsx("h1",{className:"text-2xl font-black tracking-tighter",children:"VARGAS 1140"}),$.jsx("p",{className:"text-[10px] text-blue-200 font-mono tracking-widest uppercase",children:"Painel de Controle"})]})]}),$.jsxs("div",{className:"flex items-center gap-4 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 shadow-inner",children:[$.jsxs("div",{className:"text-right",children:[$.jsx("div",{className:"text-[10px] uppercase tracking-widest text-yellow-400 font-bold",children:"Principais"}),$.jsxs("div",{className:"text-2xl font-black leading-none text-white",children:[S.priorityOk," ",$.jsxs("span",{className:"text-sm text-slate-500 font-medium",children:["/ ",S.priorityTotal]})]})]}),$.jsx(Cc,{className:"w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-lg"})]}),$.jsxs("div",{className:"flex gap-2",children:[$.jsx("button",{onClick:()=>A(!g),className:`px-4 py-2 rounded font-bold text-xs uppercase tracking-wide border transition-all ${g?"bg-yellow-400 text-black border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]":"bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400/10"}`,children:g?"Ver Apenas Principais":"Ver Todos"}),$.jsxs("button",{onClick:w,className:"px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-xs uppercase flex items-center gap-2 shadow-lg transition-transform active:scale-95",children:[$.jsx(h2,{className:"w-4 h-4"})," Relatório"]})]})]}),$.jsx("div",{className:"grid grid-cols-4 gap-1 md:gap-3",children:Object.entries(Rc).map(([V,L])=>$.jsxs("button",{onClick:()=>x(P===V?null:V),className:`
                  relative overflow-hidden p-2 rounded flex flex-col items-center justify-center transition-all duration-200
                  ${P===V?"ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-105 z-10 shadow-xl":"opacity-90 hover:opacity-100 hover:scale-105"}
                  ${L.bg}
                `,children:[$.jsx("span",{className:"text-2xl font-black text-white drop-shadow-md",children:S[V]}),$.jsx("span",{className:"text-[10px] uppercase font-bold text-white/80 tracking-wider",children:L.label})]},V))})]})}),$.jsx("main",{className:"flex-1 overflow-x-auto p-4",children:$.jsxs("div",{className:"min-w-[1200px] max-w-[1800px] mx-auto bg-white shadow-2xl border border-slate-400 rounded overflow-hidden",children:[$.jsxs("div",{className:"flex bg-slate-800 text-white font-mono text-xs border-b border-slate-600",children:[$.jsx("div",{className:"w-16 p-2 flex items-center justify-center font-bold bg-slate-900 shrink-0 border-r border-slate-600",children:"ANDAR"}),Array.from({length:kc},(V,L)=>L+1).map(V=>$.jsxs("div",{className:"flex-1 p-2 text-center border-r border-slate-700 last:border-r-0 font-bold bg-slate-800/95",children:["COLUNA ",V.toString().padStart(2,"0")]},V))]}),$.jsx("div",{className:"divide-y divide-slate-300",children:D.map(({floor:V,units:L})=>$.jsxs("div",{className:"flex h-14",children:[$.jsxs("div",{className:"w-16 bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm border-r border-slate-300 shrink-0 shadow-inner",children:[V,"º"]}),L.map(_=>{const y=Ts.includes(_.id),v=Rc[_.status];return P&&_.status!==P||g&&!y?$.jsx("div",{className:"flex-1 bg-slate-100 border-r border-slate-200 opacity-20"},_.id):$.jsxs("div",{onClick:()=>{l(_.id),m(_.status),h(_.notes||"")},className:`
                        flex-1 relative border-r border-black/10 cursor-pointer group transition-all duration-150
                        flex items-center justify-center
                        ${v.bg} hover:brightness-110 hover:z-10 hover:scale-105 hover:shadow-xl
                      `,title:`Apto ${_.id}`,children:[$.jsx("span",{className:"font-mono font-bold text-white text-sm drop-shadow-md",children:_.id}),y&&$.jsx("div",{className:"absolute top-1 right-1 transform group-hover:rotate-12 transition-transform",children:$.jsx(Cc,{className:"w-3 h-3 text-yellow-300 fill-yellow-300 drop-shadow-md"})}),_.notes&&$.jsx("div",{className:"absolute bottom-1.5 w-1.5 h-1.5 bg-white rounded-full shadow-sm animate-pulse"})]},_.id)})]},V))})]})}),o&&$.jsx("div",{className:"fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in zoom-in duration-200",children:$.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200",children:[$.jsxs("div",{className:"bg-slate-900 text-white p-5 flex justify-between items-center border-b border-slate-700",children:[$.jsxs("div",{className:"flex items-center gap-3",children:[$.jsx("h2",{className:"text-3xl font-black tracking-tight",children:o}),Ts.includes(o)&&$.jsxs("span",{className:"bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded uppercase flex items-center gap-1",children:[$.jsx(Cc,{className:"w-3 h-3 fill-black"})," Principal"]})]}),$.jsx("button",{onClick:()=>l(null),className:"p-1 hover:bg-white/10 rounded transition-colors",children:$.jsx(d2,{className:"w-6 h-6"})})]}),$.jsxs("div",{className:"p-6 bg-slate-50",children:[$.jsx("label",{className:"block text-xs font-bold text-slate-500 uppercase mb-3",children:"Selecione o Status"}),$.jsx("div",{className:"grid grid-cols-2 gap-3 mb-6",children:Object.entries(Rc).map(([V,L])=>$.jsx("button",{onClick:()=>m(V),className:`
                      p-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all shadow-sm
                      ${f===V?`${L.bg} ${L.text} border-transparent ring-2 ring-offset-2 ring-slate-900 scale-105`:"bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100"}
                    `,children:L.label},V))}),$.jsx("label",{className:"block text-xs font-bold text-slate-500 uppercase mb-2",children:"Pendências / Observações"}),$.jsx("textarea",{className:"w-full p-4 bg-white border border-slate-200 rounded-lg h-32 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none shadow-inner text-slate-700",placeholder:"Ex: Pintura manchada, falta espelho...",value:u,onChange:V=>h(V.target.value)}),$.jsxs("button",{onClick:I,className:"w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg transform active:scale-[0.98] transition-all",children:[$.jsx(c2,{className:"w-5 h-5"})," SALVAR ALTERAÇÕES"]})]})]})})]})}Pc.createRoot(document.getElementById("root")).render($.jsx(HE.StrictMode,{children:$.jsx(f2,{})}));
