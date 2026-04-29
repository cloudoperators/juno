import{n as We,o as at,r as R,j as s,b as rt}from"./iframe-DDNdGV9v.js";import{M as ze}from"./ModalFooter.component-BR6SvCUA.js";import{I as Ke}from"./Icon.component-D05Glyo3.js";import{u as nt,P as ot}from"./PortalProvider.component-VzAOQk9p.js";import{B as Q}from"./Button.component-Ch2NjqpW.js";import{B as it}from"./ButtonRow.component-btPUAbAd.js";import{C as st}from"./Checkbox.component-uTc5FFxn.js";import{F as lt}from"./Form.component-Djp2lhu8.js";import{F as H}from"./FormRow.component-CiMhOvtO.js";import{T as $}from"./TextInput.component-CKGHCKf1.js";import{S as Ue,a as re}from"./SelectOption.component-U7MzG6m1.js";import{C as He,a as G}from"./ComboBoxOption.component-BO_sh014.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner.component-nSU5gJTM.js";import"./Stack.component-TE4di30u.js";import"./Label.component-DPVJgLyQ.js";import"./FormHint.component-BlxfQX-M.js";import"./element-movement-CqWXh_fp.js";import"./floating-ui.react-BcxPGvj4.js";import"./frozen-fpsFioeq.js";import"./use-text-value-Cfu1HlOl.js";import"./use-tree-walker-BZsqaXE9.js";var Xe=["input:not([inert]):not([inert] *)","select:not([inert]):not([inert] *)","textarea:not([inert]):not([inert] *)","a[href]:not([inert]):not([inert] *)","button:not([inert]):not([inert] *)","[tabindex]:not(slot):not([inert]):not([inert] *)","audio[controls]:not([inert]):not([inert] *)","video[controls]:not([inert]):not([inert] *)",'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',"details>summary:first-of-type:not([inert]):not([inert] *)","details:not([inert]):not([inert] *)"],ke=Xe.join(","),$e=typeof Element>"u",Y=$e?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Fe=!$e&&Element.prototype.getRootNode?function(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}:function(a){return a?.ownerDocument},xe=function(e,t){var r;t===void 0&&(t=!0);var l=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),u=l===""||l==="true",o=u||t&&e&&(typeof e.closest=="function"?e.closest("[inert]"):xe(e.parentNode));return o},ct=function(e){var t,r=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return r===""||r==="true"},Ge=function(e,t,r){if(xe(e))return[];var l=Array.prototype.slice.apply(e.querySelectorAll(ke));return t&&Y.call(e,ke)&&l.unshift(e),l=l.filter(r),l},Oe=function(e,t,r){for(var l=[],u=Array.from(e);u.length;){var o=u.shift();if(!xe(o,!1))if(o.tagName==="SLOT"){var b=o.assignedElements(),C=b.length?b:o.children,k=Oe(C,!0,r);r.flatten?l.push.apply(l,k):l.push({scopeParent:o,candidates:k})}else{var O=Y.call(o,ke);O&&r.filter(o)&&(t||!e.includes(o))&&l.push(o);var D=o.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(o),N=!xe(D,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(o));if(D&&N){var I=Oe(D===!0?o.children:D.children,!0,r);r.flatten?l.push.apply(l,I):l.push({scopeParent:o,candidates:I})}else u.unshift.apply(u,o.children)}}return l},Ye=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},K=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ct(e))&&!Ye(e)?0:e.tabIndex},ut=function(e,t){var r=K(e);return r<0&&t&&!Ye(e)?0:r},dt=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ze=function(e){return e.tagName==="INPUT"},ft=function(e){return Ze(e)&&e.type==="hidden"},pt=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return t},mt=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]},vt=function(e){if(!e.name)return!0;var t=e.form||Fe(e),r=function(b){return t.querySelectorAll('input[type="radio"][name="'+b+'"]')},l;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")l=r(window.CSS.escape(e.name));else try{l=r(e.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var u=mt(l,e.form);return!u||u===e},ht=function(e){return Ze(e)&&e.type==="radio"},bt=function(e){return ht(e)&&!vt(e)},yt=function(e){var t,r=e&&Fe(e),l=(t=r)===null||t===void 0?void 0:t.host,u=!1;if(r&&r!==e){var o,b,C;for(u=!!((o=l)!==null&&o!==void 0&&(b=o.ownerDocument)!==null&&b!==void 0&&b.contains(l)||e!=null&&(C=e.ownerDocument)!==null&&C!==void 0&&C.contains(e));!u&&l;){var k,O,D;r=Fe(l),l=(k=r)===null||k===void 0?void 0:k.host,u=!!((O=l)!==null&&O!==void 0&&(D=O.ownerDocument)!==null&&D!==void 0&&D.contains(l))}}return u},Me=function(e){var t=e.getBoundingClientRect(),r=t.width,l=t.height;return r===0&&l===0},gt=function(e,t){var r=t.displayCheck,l=t.getShadowRoot;if(r==="full-native"&&"checkVisibility"in e){var u=e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!u}if(getComputedStyle(e).visibility==="hidden")return!0;var o=Y.call(e,"details>summary:first-of-type"),b=o?e.parentElement:e;if(Y.call(b,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="full-native"||r==="legacy-full"){if(typeof l=="function"){for(var C=e;e;){var k=e.parentElement,O=Fe(e);if(k&&!k.shadowRoot&&l(k)===!0)return Me(e);e.assignedSlot?e=e.assignedSlot:!k&&O!==e.ownerDocument?e=O.host:e=k}e=C}if(yt(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Me(e);return!1},wt=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var r=0;r<t.children.length;r++){var l=t.children.item(r);if(l.tagName==="LEGEND")return Y.call(t,"fieldset[disabled] *")?!0:!l.contains(e)}return!0}t=t.parentElement}return!1},Ee=function(e,t){return!(t.disabled||ft(t)||gt(t,e)||pt(t)||wt(t))},Ae=function(e,t){return!(bt(t)||K(t)<0||!Ee(e,t))},Tt=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Je=function(e){var t=[],r=[];return e.forEach(function(l,u){var o=!!l.scopeParent,b=o?l.scopeParent:l,C=ut(b,o),k=o?Je(l.candidates):b;C===0?o?t.push.apply(t,k):t.push(b):r.push({documentOrder:u,tabIndex:C,item:l,isScope:o,content:k})}),r.sort(dt).reduce(function(l,u){return u.isScope?l.push.apply(l,u.content):l.push(u.content),l},[]).concat(t)},Qe=function(e,t){t=t||{};var r;return t.getShadowRoot?r=Oe([e],t.includeContainer,{filter:Ae.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Tt}):r=Ge(e,t.includeContainer,Ae.bind(null,t)),Je(r)},et=function(e,t){t=t||{};var r;return t.getShadowRoot?r=Oe([e],t.includeContainer,{filter:Ee.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):r=Ge(e,t.includeContainer,Ee.bind(null,t)),r},X=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Y.call(e,ke)===!1?!1:Ae(t,e)},Ct=Xe.concat("iframe:not([inert]):not([inert] *)").join(","),Se=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Y.call(e,Ct)===!1?!1:Ee(t,e)};const jt=Object.freeze(Object.defineProperty({__proto__:null,focusable:et,getTabIndex:K,isFocusable:Se,isTabbable:X,tabbable:Qe},Symbol.toStringTag,{value:"Module"}));var oe={exports:{}};function Ne(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,r=Array(e);t<e;t++)r[t]=a[t];return r}function St(a){if(Array.isArray(a))return Ne(a)}function Pe(a,e){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=tt(a))||e){t&&(a=t);var r=0,l=function(){};return{s:l,n:function(){return r>=a.length?{done:!0}:{done:!1,value:a[r++]}},e:function(C){throw C},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,o=!0,b=!1;return{s:function(){t=t.call(a)},n:function(){var C=t.next();return o=C.done,C},e:function(C){b=!0,u=C},f:function(){try{o||t.return==null||t.return()}finally{if(b)throw u}}}}function kt(a,e,t){return(e=Dt(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Ft(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),t.push.apply(t,r)}return t}function Le(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ie(Object(t),!0).forEach(function(r){kt(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Ie(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function Ot(a){return St(a)||Ft(a)||tt(a)||xt()}function Et(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Dt(a){var e=Et(a,"string");return typeof e=="symbol"?e:e+""}function tt(a,e){if(a){if(typeof a=="string")return Ne(a,e);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ne(a,e):void 0}}var q={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){var r=q.getActiveTrap(e);t!==r&&q.pauseTrap(e);var l=e.indexOf(t);l===-1||e.splice(l,1),e.push(t)},deactivateTrap:function(e,t){var r=e.indexOf(t);r!==-1&&e.splice(r,1),q.unpauseTrap(e)},pauseTrap:function(e){var t=q.getActiveTrap(e);t?._setPausedState(!0)},unpauseTrap:function(e){var t=q.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},Bt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Rt=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},ne=function(e){return e?.key==="Tab"||e?.keyCode===9},At=function(e){return ne(e)&&!e.shiftKey},Nt=function(e){return ne(e)&&e.shiftKey},_e=function(e){return setTimeout(e,0)},ae=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),l=1;l<t;l++)r[l-1]=arguments[l];return typeof e=="function"?e.apply(void 0,r):e},ie=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Mt=[],Pt=function(e,t){var r=t?.document||document,l=t?.trapStack||Mt,u=Le({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:At,isKeyBackward:Nt},t),o={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},b,C=function(i,n,d){return i&&i[n]!==void 0?i[n]:u[d||n]},k=function(i,n){var d=typeof n?.composedPath=="function"?n.composedPath():void 0;return o.containerGroups.findIndex(function(y){var h=y.container,T=y.tabbableNodes;return h.contains(i)||d?.includes(h)||T.find(function(m){return m===i})})},O=function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=n.hasFallback,y=d===void 0?!1:d,h=n.params,T=h===void 0?[]:h,m=u[i];if(typeof m=="function"&&(m=m.apply(void 0,Ot(T))),m===!0&&(m=void 0),!m){if(m===void 0||m===!1)return m;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var j=m;if(typeof m=="string"){try{j=r.querySelector(m)}catch(S){throw new Error("`".concat(i,'` appears to be an invalid selector; error="').concat(S.message,'"'))}if(!j&&!y)throw new Error("`".concat(i,"` as selector refers to no known node"))}return j},D=function(){var i=O("initialFocus",{hasFallback:!0});if(i===!1)return!1;if(i===void 0||i&&!Se(i,u.tabbableOptions))if(k(r.activeElement)>=0)i=r.activeElement;else{var n=o.tabbableGroups[0],d=n&&n.firstTabbableNode;i=d||O("fallbackFocus")}else i===null&&(i=O("fallbackFocus"));if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},N=function(){if(o.containerGroups=o.containers.map(function(i){var n=Qe(i,u.tabbableOptions),d=et(i,u.tabbableOptions),y=n.length>0?n[0]:void 0,h=n.length>0?n[n.length-1]:void 0,T=d.find(function(S){return X(S)}),m=d.slice().reverse().find(function(S){return X(S)}),j=!!n.find(function(S){return K(S)>0});return{container:i,tabbableNodes:n,focusableNodes:d,posTabIndexesFound:j,firstTabbableNode:y,lastTabbableNode:h,firstDomTabbableNode:T,lastDomTabbableNode:m,nextTabbableNode:function(x){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,B=n.indexOf(x);return B<0?L?d.slice(d.indexOf(x)+1).find(function(V){return X(V)}):d.slice(0,d.indexOf(x)).reverse().find(function(V){return X(V)}):n[B+(L?1:-1)]}}}),o.tabbableGroups=o.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),o.tabbableGroups.length<=0&&!O("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(o.containerGroups.find(function(i){return i.posTabIndexesFound})&&o.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},I=function(i){var n=i.activeElement;if(n)return n.shadowRoot&&n.shadowRoot.activeElement!==null?I(n.shadowRoot):n},M=function(i){if(i!==!1&&i!==I(document)){if(!i||!i.focus){M(D());return}i.focus({preventScroll:!!u.preventScroll}),o.mostRecentlyFocusedNode=i,Bt(i)&&i.select()}},Z=function(i){var n=O("setReturnFocus",{params:[i]});return n||(n===!1?!1:i)},_=function(i){var n=i.target,d=i.event,y=i.isBackward,h=y===void 0?!1:y;n=n||ie(d),N();var T=null;if(o.tabbableGroups.length>0){var m=k(n,d),j=m>=0?o.containerGroups[m]:void 0;if(m<0)h?T=o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:T=o.tabbableGroups[0].firstTabbableNode;else if(h){var S=o.tabbableGroups.findIndex(function(Be){var Re=Be.firstTabbableNode;return n===Re});if(S<0&&(j.container===n||Se(n,u.tabbableOptions)&&!X(n,u.tabbableOptions)&&!j.nextTabbableNode(n,!1))&&(S=m),S>=0){var x=S===0?o.tabbableGroups.length-1:S-1,L=o.tabbableGroups[x];T=K(n)>=0?L.lastTabbableNode:L.lastDomTabbableNode}else ne(d)||(T=j.nextTabbableNode(n,!1))}else{var B=o.tabbableGroups.findIndex(function(Be){var Re=Be.lastTabbableNode;return n===Re});if(B<0&&(j.container===n||Se(n,u.tabbableOptions)&&!X(n,u.tabbableOptions)&&!j.nextTabbableNode(n))&&(B=m),B>=0){var V=B===o.tabbableGroups.length-1?0:B+1,E=o.tabbableGroups[V];T=K(n)>=0?E.firstTabbableNode:E.firstDomTabbableNode}else ne(d)||(T=j.nextTabbableNode(n))}}else T=O("fallbackFocus");return T},W=function(i){var n=ie(i);if(!(k(n,i)>=0)){if(ae(u.clickOutsideDeactivates,i)){b.deactivate({returnFocus:u.returnFocusOnDeactivate});return}ae(u.allowOutsideClick,i)||i.preventDefault()}},J=function(i){var n=ie(i),d=k(n,i)>=0;if(d||n instanceof Document)d&&(o.mostRecentlyFocusedNode=n);else{i.stopImmediatePropagation();var y,h=!0;if(o.mostRecentlyFocusedNode)if(K(o.mostRecentlyFocusedNode)>0){var T=k(o.mostRecentlyFocusedNode),m=o.containerGroups[T].tabbableNodes;if(m.length>0){var j=m.findIndex(function(S){return S===o.mostRecentlyFocusedNode});j>=0&&(u.isKeyForward(o.recentNavEvent)?j+1<m.length&&(y=m[j+1],h=!1):j-1>=0&&(y=m[j-1],h=!1))}}else o.containerGroups.some(function(S){return S.tabbableNodes.some(function(x){return K(x)>0})})||(h=!1);else h=!1;h&&(y=_({target:o.mostRecentlyFocusedNode,isBackward:u.isKeyBackward(o.recentNavEvent)})),M(y||o.mostRecentlyFocusedNode||D())}o.recentNavEvent=void 0},te=function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;o.recentNavEvent=i;var d=_({event:i,isBackward:n});d&&(ne(i)&&i.preventDefault(),M(d))},U=function(i){(u.isKeyForward(i)||u.isKeyBackward(i))&&te(i,u.isKeyBackward(i))},z=function(i){Rt(i)&&ae(u.escapeDeactivates,i)!==!1&&(i.preventDefault(),b.deactivate())},P=function(i){var n=ie(i);k(n,i)>=0||ae(u.clickOutsideDeactivates,i)||ae(u.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},p=function(){if(o.active)return q.activateTrap(l,b),o.delayInitialFocusTimer=u.delayInitialFocus?_e(function(){M(D())}):M(D()),r.addEventListener("focusin",J,!0),r.addEventListener("mousedown",W,{capture:!0,passive:!1}),r.addEventListener("touchstart",W,{capture:!0,passive:!1}),r.addEventListener("click",P,{capture:!0,passive:!1}),r.addEventListener("keydown",U,{capture:!0,passive:!1}),r.addEventListener("keydown",z),b},f=function(i){o.active&&!o.paused&&b._setSubtreeIsolation(!1),o.adjacentElements.clear(),o.alreadySilent.clear();var n=new Set,d=new Set,y=Pe(i),h;try{for(y.s();!(h=y.n()).done;){var T=h.value;n.add(T);for(var m=typeof ShadowRoot<"u"&&T.getRootNode()instanceof ShadowRoot,j=T;j;){n.add(j);var S=j.parentElement,x=[];S?x=S.children:!S&&m&&(x=j.getRootNode().children,S=j.getRootNode().host,m=typeof ShadowRoot<"u"&&S.getRootNode()instanceof ShadowRoot);var L=Pe(x),B;try{for(L.s();!(B=L.n()).done;){var V=B.value;d.add(V)}}catch(E){L.e(E)}finally{L.f()}j=S}}}catch(E){y.e(E)}finally{y.f()}n.forEach(function(E){d.delete(E)}),o.adjacentElements=d},g=function(){if(o.active)return r.removeEventListener("focusin",J,!0),r.removeEventListener("mousedown",W,!0),r.removeEventListener("touchstart",W,!0),r.removeEventListener("click",P,!0),r.removeEventListener("keydown",U,!0),r.removeEventListener("keydown",z),b},c=function(i){var n=i.some(function(d){var y=Array.from(d.removedNodes);return y.some(function(h){return h===o.mostRecentlyFocusedNode})});n&&M(D())},w=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(c):void 0,F=function(){w&&(w.disconnect(),o.active&&!o.paused&&o.containers.map(function(i){w.observe(i,{subtree:!0,childList:!0})}))};return b={get active(){return o.active},get paused(){return o.paused},activate:function(i){if(o.active)return this;var n=C(i,"onActivate"),d=C(i,"onPostActivate"),y=C(i,"checkCanFocusTrap"),h=q.getActiveTrap(l),T=!1;if(h&&!h.paused){var m;(m=h._setSubtreeIsolation)===null||m===void 0||m.call(h,!1),T=!0}try{y||N(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=I(r),n?.();var j=function(){y&&N(),p(),F(),u.isolateSubtrees&&b._setSubtreeIsolation(!0),d?.()};if(y)return y(o.containers.concat()).then(j,j),this;j()}catch(x){if(h===q.getActiveTrap(l)&&T){var S;(S=h._setSubtreeIsolation)===null||S===void 0||S.call(h,!0)}throw x}return this},deactivate:function(i){if(!o.active)return this;var n=Le({onDeactivate:u.onDeactivate,onPostDeactivate:u.onPostDeactivate,checkCanReturnFocus:u.checkCanReturnFocus},i);clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,o.paused||b._setSubtreeIsolation(!1),o.alreadySilent.clear(),g(),o.active=!1,o.paused=!1,F(),q.deactivateTrap(l,b);var d=C(n,"onDeactivate"),y=C(n,"onPostDeactivate"),h=C(n,"checkCanReturnFocus"),T=C(n,"returnFocus","returnFocusOnDeactivate");d?.();var m=function(){_e(function(){T&&M(Z(o.nodeFocusedBeforeActivation)),y?.()})};return T&&h?(h(Z(o.nodeFocusedBeforeActivation)).then(m,m),this):(m(),this)},pause:function(i){return o.active?(o.manuallyPaused=!0,this._setPausedState(!0,i)):this},unpause:function(i){return o.active?(o.manuallyPaused=!1,l[l.length-1]!==this?this:this._setPausedState(!1,i)):this},updateContainerElements:function(i){var n=[].concat(i).filter(Boolean);return o.containers=n.map(function(d){return typeof d=="string"?r.querySelector(d):d}),u.isolateSubtrees&&f(o.containers),o.active&&(N(),u.isolateSubtrees&&!o.paused&&b._setSubtreeIsolation(!0)),F(),this}},Object.defineProperties(b,{_isManuallyPaused:{value:function(){return o.manuallyPaused}},_setPausedState:{value:function(i,n){if(o.paused===i)return this;if(o.paused=i,i){var d=C(n,"onPause"),y=C(n,"onPostPause");d?.(),g(),F(),b._setSubtreeIsolation(!1),y?.()}else{var h=C(n,"onUnpause"),T=C(n,"onPostUnpause");h?.(),b._setSubtreeIsolation(!0),N(),p(),F(),T?.()}return this}},_setSubtreeIsolation:{value:function(i){u.isolateSubtrees&&o.adjacentElements.forEach(function(n){var d;i?u.isolateSubtrees==="aria-hidden"?((n.ariaHidden==="true"||((d=n.getAttribute("aria-hidden"))===null||d===void 0?void 0:d.toLowerCase())==="true")&&o.alreadySilent.add(n),n.setAttribute("aria-hidden","true")):((n.inert||n.hasAttribute("inert"))&&o.alreadySilent.add(n),n.setAttribute("inert",!0)):o.alreadySilent.has(n)||(u.isolateSubtrees==="aria-hidden"?n.removeAttribute("aria-hidden"):n.removeAttribute("inert"))})}}}),b.updateContainerElements(e),b};const It=Object.freeze(Object.defineProperty({__proto__:null,createFocusTrap:Pt},Symbol.toStringTag,{value:"Module"})),Lt=We(It),_t=We(jt);var Ve;function Vt(){if(Ve)return oe.exports;Ve=1;function a(p){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},a(p)}var e,t;function r(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function l(p,f){for(var g=0;g<f.length;g++){var c=f[g];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,M(c.key),c)}}function u(p,f,g){return f&&l(p.prototype,f),Object.defineProperty(p,"prototype",{writable:!1}),p}function o(p,f,g){return f=O(f),b(p,k()?Reflect.construct(f,g||[],O(p).constructor):f.apply(p,g))}function b(p,f){if(f&&(a(f)=="object"||typeof f=="function"))return f;if(f!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(p)}function C(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function k(){try{var p=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(k=function(){return!!p})()}function O(p){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},O(p)}function D(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),Object.defineProperty(p,"prototype",{writable:!1}),f&&N(p,f)}function N(p,f){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,c){return g.__proto__=c,g},N(p,f)}function I(p,f,g){return(f=M(f))in p?Object.defineProperty(p,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):p[f]=g,p}function M(p){var f=Z(p,"string");return a(f)=="symbol"?f:f+""}function Z(p,f){if(a(p)!="object"||!p)return p;var g=p[Symbol.toPrimitive];if(g!==void 0){var c=g.call(p,f);if(a(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(p)}var _=at(),W=Lt,J=W.createFocusTrap,te=_t,U=te.isFocusable,z=parseInt((e=(t=/^(\d+)\./.exec(_.version))===null||t===void 0?void 0:t[1])!==null&&e!==void 0?e:0,10),P=(function(p){function f(g){var c;r(this,f),c=o(this,f,[g]),I(c,"getNodeForOption",function(v){var i,n=(i=this.internalOptions[v])!==null&&i!==void 0?i:this.originalOptions[v];if(typeof n=="function"){for(var d=arguments.length,y=new Array(d>1?d-1:0),h=1;h<d;h++)y[h-1]=arguments[h];n=n.apply(void 0,y)}if(n===!0&&(n=void 0),!n){if(n===void 0||n===!1)return n;throw new Error("`".concat(v,"` was specified but was not a node, or did not return a node"))}var T=n;if(typeof n=="string"){var m;if(T=(m=this.getDocument())===null||m===void 0?void 0:m.querySelector(n),!T)throw new Error("`".concat(v,"` as selector refers to no known node"))}return T}),c.handleDeactivate=c.handleDeactivate.bind(c),c.handlePostDeactivate=c.handlePostDeactivate.bind(c),c.handleClickOutsideDeactivates=c.handleClickOutsideDeactivates.bind(c),c.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:c.handleDeactivate,onPostDeactivate:c.handlePostDeactivate,clickOutsideDeactivates:c.handleClickOutsideDeactivates},c.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var w=g.focusTrapOptions;for(var F in w)if(Object.prototype.hasOwnProperty.call(w,F)){if(F==="returnFocusOnDeactivate"||F==="onDeactivate"||F==="onPostDeactivate"||F==="checkCanReturnFocus"||F==="clickOutsideDeactivates"){c.originalOptions[F]=w[F];continue}c.internalOptions[F]=w[F]}return c.outsideClick=null,c.focusTrapElements=g.containerElements||[],c.updatePreviousElement(),c}return D(f,p),u(f,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document<"u"?document:void 0)}},{key:"getReturnFocusNode",value:function(){var c=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return c||(c===!1?!1:this.previouslyFocusedElement)}},{key:"updatePreviousElement",value:function(){var c=this.getDocument();c&&(this.previouslyFocusedElement=c.activeElement)}},{key:"deactivateTrap",value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(c){var w=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,c):this.originalOptions.clickOutsideDeactivates;return w&&(this.outsideClick={target:c.target,allowDeactivation:w}),w}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var c=this,w=function(){var v=c.getReturnFocusNode(),i=!!(c.originalOptions.returnFocusOnDeactivate&&v!==null&&v!==void 0&&v.focus&&(!c.outsideClick||c.outsideClick.allowDeactivation&&!U(c.outsideClick.target,c.internalOptions.tabbableOptions))),n=c.internalOptions.preventScroll,d=n===void 0?!1:n;i&&v.focus({preventScroll:d}),c.originalOptions.onPostDeactivate&&c.originalOptions.onPostDeactivate.call(null),c.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(w,w):w()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var c=this.focusTrapElements.some(Boolean);c&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(c){if(this.focusTrap){c.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var w=!c.active&&this.props.active,F=c.active&&!this.props.active,v=!c.paused&&this.props.paused,i=c.paused&&!this.props.paused;if(w&&(this.updatePreviousElement(),this.focusTrap.activate()),F){this.deactivateTrap();return}v&&this.focusTrap.pause(),i&&this.focusTrap.unpause()}else c.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var c=this,w=this.props.children?_.Children.only(this.props.children):void 0;if(w){if(w.type&&w.type===_.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var F=function(n){var d=c.props.containerElements;w&&(z>=19?typeof w.props.ref=="function"?w.props.ref(n):w.props.ref&&(w.props.ref.current=n):typeof w.ref=="function"?w.ref(n):w.ref&&(w.ref.current=n)),c.focusTrapElements=d||[n]},v=_.cloneElement(w,{ref:F});return v}return null}}])})(_.Component);return P.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:J},oe.exports=P,oe.exports.FocusTrap=P,oe.exports}var qt=Vt();const Wt=`
	jn:fixed
	jn:inset-0
	jn:flex
	jn:items-center
	jn:bg-theme-modal-backdrop
	jn:backdrop-blur-[2px]
	jn:z-9990
`,zt=`
	jn:bg-theme-background-lvl-0
	jn:relative
	jn:rounded
	jn:m-auto
	jn:overflow-y-auto
	jn:max-h-[90%]
`,Kt=`
	jn:flex
	jn:py-2
	jn:px-8
	jn:border-b
	jn:border-theme-background-lvl-4
	jn:h-[2.8125rem]
`,qe=`
  jn:text-xl
  jn:font-bold
`,Ut=`
	jn:min-h-[5rem]
`,Ht=`
	jn:py-4
	jn:px-8
`,Xt=a=>{switch(a){case"large":return"jn:w-[40rem]";case"xl":return"jn:w-[76.75rem]";case"2xl":return"jn:w-[80%] jn:min-w-[85rem] jn:max-w-[112.5rem]";default:return"jn:w-[33.625rem]"}},ee=({title:a="",heading:e="",ariaLabel:t,initialFocus:r,open:l=!1,closeable:u=!0,closeOnEsc:o=!0,closeOnBackdropClick:b=!1,disableCloseButton:C,size:k="small",unpad:O=!1,className:D="",children:N,modalFooter:I,confirmButtonLabel:M="",cancelButtonLabel:Z="",confirmButtonIcon:_,confirmButtonVariant:W,cancelButtonIcon:J,disableConfirmButton:te=!1,disableCancelButton:U=!1,onConfirm:z,onCancel:P,...p})=>{const f=()=>"juno-modal-"+R.useId(),[g,c]=R.useState(l),[w,F]=R.useState(u),[v,i]=R.useState(b),[n,d]=R.useState(o);R.useEffect(()=>{c(l)},[l]),R.useEffect(()=>{F(u)},[u]),R.useEffect(()=>{i(b)},[b]),R.useEffect(()=>{d(o)},[o]);const y=E=>{z&&z(E)},h=E=>{c(!1),P&&P(E)},T=E=>{w&&n&&(c(!1),P&&P(E))},m=E=>{v?(c(!1),P&&P(E)):E.stopPropagation()},j=nt(),S=R.useRef(null),x=a||e,B=!!x?f():void 0,V=()=>x==null||x===!1?null:typeof x=="string"?s.jsx("h1",{className:`juno-modal-title ${qe}`,id:B,children:x}):s.jsx("div",{className:`juno-modal-title ${qe}`,id:B,children:x});return s.jsx(s.Fragment,{children:g&&rt.createPortal(s.jsx("div",{className:`juno-modal-container ${Wt}`,onClick:m,children:s.jsx(qt.FocusTrap,{focusTrapOptions:{initialFocus:r,clickOutsideDeactivates:v,fallbackFocus:()=>S.current,allowOutsideClick:!0,escapeDeactivates:E=>(T(E),!1)},children:s.jsxs("div",{className:`juno-modal ${Xt(k)} ${zt} ${D}`,role:"dialog",ref:S,...p,"aria-labelledby":B,"aria-label":t,children:[s.jsxs("div",{className:`juno-modal-header ${Kt} ${x?"jn:justify-between":"jn:justify-end"}`,children:[V(),w?s.jsx(Ke,{icon:"close",onClick:h,disabled:U||C}):""]}),s.jsx("div",{className:`juno-modal-content ${Ut} ${O?"":Ht}`,children:N}),w?I||s.jsx(ze,{confirmButtonLabel:M,cancelButtonLabel:Z,confirmButtonIcon:_,confirmButtonVariant:W,cancelButtonIcon:J,disableConfirmButton:te,disableCancelButton:U,onConfirm:z?y:void 0,onCancel:h}):null]})})}),j||document.body)})};try{ee.displayName="Modal",ee.__docgenInfo={description:"The `Modal` component provides a flexible dialog window for user interactions,\nsupporting titles, dismissal controls, sizing options, and comprehensive footer configurations.",displayName:"Modal",props:{title:{defaultValue:{value:""},description:"The title of the modal. This will be rendering as the heading of the modal, and the modal's `aria-labelledby` attribute will reference the title/heading element. If the modal does not have `title` or `heading`, use `ariaLabel` to provide an accessible name for the modal.",name:"title",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:{value:""},description:"Also the title of the modal, just for API flexibility. If both `title` and `heading` are passed, `title` will take precedence.",name:"heading",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:"The aria-label of the modal. Use only if the modal does NOT have a `title` or `heading`.",name:"ariaLabel",required:!1,type:{name:"string"}},initialFocus:{defaultValue:null,description:"By default, the first element in the tab order of the Modal content will be focussed. To specify an element to be focussed when the modal opens, pass an element, DOM node, or selector string.",name:"initialFocus",required:!1,type:{name:"string | HTMLElement | SVGElement"}},open:{defaultValue:{value:"false"},description:"Whether the modal will be open.",name:"open",required:!1,type:{name:"boolean"}},closeable:{defaultValue:{value:"true"},description:'Whether the modal can be closed using an "X"-Button at the top right.',name:"closeable",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:{value:"false"},description:"Whether the modal should be closed when the backdrop is clicked. Essentially 'un-modals' the modal.",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},disableCloseButton:{defaultValue:{value:"false"},description:"Determines whether the close button should be disabled.",name:"disableCloseButton",required:!1,type:{name:"boolean"}},closeOnEsc:{defaultValue:{value:"true"},description:"Whether the modal can be closed by hitting the ESC key.",name:"closeOnEsc",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"The Modal size, determines the aesthetics of the modal.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"xl"'},{value:'"2xl"'}]}},unpad:{defaultValue:{value:"false"},description:"Pass to remove default padding from the content area of the modal.",name:"unpad",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className to add to the modal for additional styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the modal. These will be rendered as the modal content. To render custom buttons at the bottom, see `modalFooter` below.",name:"children",required:!1,type:{name:"ReactNode"}},modalFooter:{defaultValue:null,description:"Optional. Pass a `<ModalFooter />` component with custom content as required. Will default to using the `<ModalFooter/>` component internally.",name:"modalFooter",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},confirmButtonLabel:{defaultValue:{value:""},description:"Pass a label to render a confirm button and a Cancel button.",name:"confirmButtonLabel",required:!1,type:{name:"string"}},cancelButtonLabel:{defaultValue:{value:""},description:'Pass a label for the cancel button. Defaults to "Cancel".',name:"cancelButtonLabel",required:!1,type:{name:"string"}},confirmButtonIcon:{defaultValue:null,description:"Pass an Icon name to show on the confirming action button.",name:"confirmButtonIcon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},confirmButtonVariant:{defaultValue:{value:'"primary"'},description:"The variant of the confirm button.",name:"confirmButtonVariant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},cancelButtonIcon:{defaultValue:null,description:"Pass an icon name to show on the cancelling button.",name:"cancelButtonIcon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},disableConfirmButton:{defaultValue:{value:"false"},description:"Determines whether the confirm action button should be disabled.",name:"disableConfirmButton",required:!1,type:{name:"boolean"}},disableCancelButton:{defaultValue:{value:"false"},description:"Determines whether the cancel action button should be disabled.",name:"disableCancelButton",required:!1,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"A handler to execute once the modal is confirmed by clicking the confirm button if exists. Note that we do not close the modal automatically.",name:"onConfirm",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onCancel:{defaultValue:null,description:"A handler to execute once the modal is cancelled or dismissed using the x-Close button,  Cancel-button or pressing ESC.",name:"onCancel",required:!1,type:{name:"((_event: MouseEvent<HTMLElement, MouseEvent> | KeyboardEvent) => void)"}}}}}catch{}const A=({closeOnConfirm:a,...e})=>{const[t,r]=R.useState(!1),l=()=>{r(!0)},u=()=>{r(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(Q,{label:"Open Modal",variant:"primary",onClick:l}),s.jsx(ee,{open:t,onCancel:u,onConfirm:a?u:void 0,...e})]})},ya={title:"Components/Modal/Modal",component:ee,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},modalFooter:{control:!1,table:{type:{summary:"ReactElement"}}}},parameters:{actions:{argTypesRegex:null},docs:{source:{transform:a=>a.replace(/jn:/g,"")}}},decorators:[a=>s.jsx(ot,{children:s.jsx("div",{className:"jn:m-20 jn:flex jn:justify-center",children:s.jsx(a,{})})})]},se={render:A,parameters:{docs:{description:{story:"A modal dialog for simple acknowledgement."}}},args:{title:"Maintenance Mode Enabled for 'cluster-eu-1'",children:"Automated alerts and health checks for this cluster have been suspended. Turn off maintenance mode to resume normal monitoring."}},le={render:A,parameters:{docs:{description:{story:"A modal dialog for confirming or canceling a non-destructive action."}}},args:{title:"Assign Role to user@example.com",children:"Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",cancelButtonLabel:"Cancel",confirmButtonLabel:"Assign Role"}},ce={render:A,parameters:{docs:{description:{story:"A user-initiated low risk destructive action. Note the Confirm button is always enabled."}}},args:{title:"Delete Snapshot 'snap-20240115'",children:"Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.",confirmButtonVariant:"primary-danger",confirmButtonLabel:"Delete Snapshot"}},$t=a=>{const[e,t]=R.useState(!1),[r,l]=R.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(Q,{label:"Open Modal",variant:"primary",onClick:()=>t(!0)}),s.jsx(ee,{open:e,onCancel:()=>{t(!1),l(!1)},disableConfirmButton:!r,...a,children:s.jsxs("div",{children:[s.jsx("p",{className:"jn:mb-4",children:"Removing user 'jsmith' will immediately revoke all their access to project resources."}),s.jsx(st,{label:"Check the box to confirm removing user 'jsmith'",checked:r,onChange:u=>l(u.target.checked)})]})})]})},ue={render:$t,parameters:{docs:{description:{story:"A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox."}}},args:{title:"Remove User 'jsmith'",confirmButtonVariant:"primary-danger",confirmButtonLabel:"Remove User"}},Gt=a=>{const[e,t]=R.useState(!1),[r,l]=R.useState("");return s.jsxs(s.Fragment,{children:[s.jsx(Q,{label:"Open Modal",variant:"primary",onClick:()=>t(!0)}),s.jsx(ee,{open:e,onCancel:()=>{t(!1),l("")},disableConfirmButton:r!=="DELETE",...a,children:s.jsxs("div",{children:[s.jsx("p",{className:"jn:mb-4",children:"This will permanently delete the project 'production-eu' and all associated resources, including clusters, configurations, and stored data."}),s.jsx("p",{className:"jn:mb-4",children:"This action cannot be undone."}),s.jsx("p",{className:"jn:mb-4",children:"Type 'DELETE' (all caps, no quotes) in the field below to confirm:"}),s.jsx($,{placeholder:"Type 'DELETE' to confirm deletion",value:r,onChange:u=>l(u.target.value)})]})})]})},de={render:Gt,parameters:{docs:{description:{story:"A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase."}}},args:{title:"Delete Project 'production-eu'",confirmButtonVariant:"primary-danger",confirmButtonLabel:"Delete Project"}},fe={render:A,parameters:{docs:{description:{story:"In order to disable all buttons on a Modal, both `disableConfirmButton` and `disableCancelButton` need to be set to `true`."}}},args:{title:"Assign Role to user@example.com",children:"Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",cancelButtonLabel:"Cancel",confirmButtonLabel:"Assign Role",disableConfirmButton:!0,disableCancelButton:!0}},pe={render:A,parameters:{docs:{description:{story:"In order to auto-focus an interactive element in the modal, assign an `id` and pass this `id` to the `initialFocus` prop."}}},args:{title:"Enter a Phrase",children:s.jsx($,{id:"focusOnMe"}),initialFocus:"#focusOnMe"}},De=()=>s.jsxs(lt,{children:[s.jsx(H,{children:s.jsx($,{label:"First Name",id:"firstname"})}),s.jsx(H,{children:s.jsx($,{label:"Last Name",id:"lastname"})}),s.jsx(H,{children:s.jsx($,{label:"Email",id:"email",type:"email"})}),s.jsx(H,{children:s.jsx($,{label:"Password",id:"password",type:"password"})}),s.jsx(H,{children:s.jsx($,{label:"Retype Password",id:"retype-password",type:"password"})}),s.jsx(H,{children:s.jsxs(Ue,{label:"Role",children:[s.jsx(re,{children:"Private Person"}),s.jsx(re,{children:"Small Business"})]})}),s.jsx(H,{children:s.jsxs(He,{label:"Country",children:[s.jsx(G,{value:"germany",children:"Germany"},"DE"),s.jsx(G,{value:"uk",children:"United Kingdom"},"UK"),s.jsx(G,{value:"us",children:"USA"},"US")]})})]}),me={render:A,parameters:{docs:{description:{story:"A default size Modal with a form."}}},args:{title:"Default Modal Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:s.jsx(De,{})}},ve={render:A,parameters:{docs:{description:{story:"A `large` size Modal with a form."}}},args:{size:"large",title:"Large Modal Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:s.jsx(De,{})}},he={render:A,parameters:{docs:{description:{story:"An `xl` size Modal with a form."}}},args:{size:"xl",title:"XL With Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:s.jsx(De,{})}},be={render:A,parameters:{docs:{description:{story:"An `2xl` size Modal with a form."}}},args:{size:"2xl",title:"2XL With Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:s.jsx(De,{})}},ye={render:A,parameters:{docs:{description:{story:"A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set `closeable` to `false`."}}},args:{title:"Non-Closeable Modal",children:"Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",closeable:!1}},ge={render:A,parameters:{docs:{description:{story:"Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set `closeOnBackdropClick` to `true` to enable this behaviour."}}},args:{title:"Close on Backdrop Click",children:s.jsx("p",{children:"This Modal closes when clicking the backdrop."}),closeOnBackdropClick:!0}},we={render:A,parameters:{docs:{description:{story:"In order to specifically disable the X-Close button, set `disableCloseButton`to `true`."}}},args:{title:"Disabled X-Close Button Modal",children:s.jsx("p",{children:"This Modal has a disabled top-right close button."}),disableCloseButton:!0,cancelButtonLabel:"Cancel"}},Te={render:A,parameters:{docs:{description:{story:"For complex use cases that require more than a Confirm and a Cancel button, a custom `ModalFooter` with buttons and additional elements can be passed to `Modal`."}}},args:{title:"Modal with Custom ModalFooter",size:"large",children:s.jsx("p",{children:"This Modal renders a custom footer with three buttons and a custom hint."}),modalFooter:s.jsxs(ze,{className:"jn:justify-between jn:items-center",children:[s.jsxs("span",{children:[s.jsx(Ke,{icon:"info",className:"jn:mr-1"}),"Have some custom content"]}),s.jsxs(it,{children:[s.jsx(Q,{variant:"subdued",children:"Cancel"}),s.jsx(Q,{variant:"primary-danger",children:"Destroy"}),s.jsx(Q,{variant:"primary",children:"Proceed"})]})]})}},Ce={render:A,args:{title:"Modal with Select inside",size:"small",children:s.jsx(s.Fragment,{children:s.jsxs(Ue,{children:[s.jsx(re,{value:"1",label:"Option 1"},"o-1"),s.jsx(re,{value:"2",label:"Option 2"},"o-2"),s.jsx(re,{value:"3",label:"Option 3"},"o-3")]})})}},je={render:A,args:{title:s.jsx("p",{children:"Hello"}),size:"small",children:s.jsx(s.Fragment,{children:s.jsxs(He,{children:[s.jsx(G,{value:"Rhubarb",children:"Rhubarb"},"1"),s.jsx(G,{value:"Carrots",children:"Carrots"},"2"),s.jsx(G,{value:"Spinach",children:"Spinach"},"3"),s.jsx(G,{value:"Tomatoes",children:"Tomatoes"},"4")]})})}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for simple acknowledgement."
      }
    }
  },
  args: {
    title: "Maintenance Mode Enabled for 'cluster-eu-1'",
    children: "Automated alerts and health checks for this cluster have been suspended. Turn off maintenance mode to resume normal monitoring."
  }
}`,...se.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for confirming or canceling a non-destructive action."
      }
    }
  },
  args: {
    title: "Assign Role to user@example.com",
    children: "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role"
  }
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated low risk destructive action. Note the Confirm button is always enabled."
      }
    }
  },
  args: {
    title: "Delete Snapshot 'snap-20240115'",
    children: "Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Snapshot"
  }
}`,...ce.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: MediumRiskTemplate,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox."
      }
    }
  },
  args: {
    title: "Remove User 'jsmith'",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Remove User"
  }
}`,...ue.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: HighRiskTemplate,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase."
      }
    }
  },
  args: {
    title: "Delete Project 'production-eu'",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Project"
  }
}`,...de.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to disable all buttons on a Modal, both \`disableConfirmButton\` and \`disableCancelButton\` need to be set to \`true\`."
      }
    }
  },
  args: {
    title: "Assign Role to user@example.com",
    children: "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...fe.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to auto-focus an interactive element in the modal, assign an \`id\` and pass this \`id\` to the \`initialFocus\` prop."
      }
    }
  },
  args: {
    title: "Enter a Phrase",
    children: <TextInput id="focusOnMe" />,
    initialFocus: "#focusOnMe"
  }
}`,...pe.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A default size Modal with a form."
      }
    }
  },
  args: {
    title: "Default Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...me.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A \`large\` size Modal with a form."
      }
    }
  },
  args: {
    size: "large",
    title: "Large Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...ve.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An \`xl\` size Modal with a form."
      }
    }
  },
  args: {
    size: "xl",
    title: "XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...he.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An \`2xl\` size Modal with a form."
      }
    }
  },
  args: {
    size: "2xl",
    title: "2XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />
  }
}`,...be.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set \`closeable\` to \`false\`."
      }
    }
  },
  args: {
    title: "Non-Closeable Modal",
    children: "Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",
    closeable: false
  }
}`,...ye.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set \`closeOnBackdropClick\` to \`true\` to enable this behaviour."
      }
    }
  },
  args: {
    title: "Close on Backdrop Click",
    children: <p>This Modal closes when clicking the backdrop.</p>,
    closeOnBackdropClick: true
  }
}`,...ge.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to specifically disable the X-Close button, set \`disableCloseButton\`to \`true\`."
      }
    }
  },
  args: {
    title: "Disabled X-Close Button Modal",
    children: <p>This Modal has a disabled top-right close button.</p>,
    disableCloseButton: true,
    cancelButtonLabel: "Cancel"
  }
}`,...we.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "For complex use cases that require more than a Confirm and a Cancel button, a custom \`ModalFooter\` with buttons and additional elements can be passed to \`Modal\`."
      }
    }
  },
  args: {
    title: "Modal with Custom ModalFooter",
    size: "large",
    children: <p>This Modal renders a custom footer with three buttons and a custom hint.</p>,
    modalFooter: <ModalFooter className="jn:justify-between jn:items-center">
        <span>
          <Icon icon="info" className="jn:mr-1" />
          Have some custom content
        </span>
        <ButtonRow>
          <Button variant="subdued">Cancel</Button>
          <Button variant="primary-danger">Destroy</Button>
          <Button variant="primary">Proceed</Button>
        </ButtonRow>
      </ModalFooter>
  }
}`,...Te.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: "Modal with Select inside",
    size: "small",
    children: <>
        <Select>
          <SelectOption value="1" label="Option 1" key="o-1" />
          <SelectOption value="2" label="Option 2" key="o-2" />
          <SelectOption value="3" label="Option 3" key="o-3" />
        </Select>
      </>
  }
}`,...Ce.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: <p>Hello</p>,
    size: "small",
    children: <>
        <ComboBox>
          <ComboBoxOption value="Rhubarb" key="1">
            Rhubarb
          </ComboBoxOption>
          <ComboBoxOption value="Carrots" key="2">
            Carrots
          </ComboBoxOption>
          <ComboBoxOption value="Spinach" key="3">
            Spinach
          </ComboBoxOption>
          <ComboBoxOption value="Tomatoes" key="4">
            Tomatoes
          </ComboBoxOption>
        </ComboBox>
      </>
  }
}`,...je.parameters?.docs?.source}}};const ga=["Default","SimpleConfirmNonDestructiveAction","ConfirmDesctructiveActionLowRisk","ConfirmDesctructiveActionMediumRisk","ConfirmDesctructiveActionHighRisk","SimpleConfirmDialogWithDisabledButtons","AutoFocusDialog","DefaultWithForm","LargeWithForm","XLWithForm","XXLWithForm","NonCloseable","CloseOnBackdropClick","DisabledCloseButton","CustomModalFooter","TestSelectInModal","TestComboBoxInModal"];export{pe as AutoFocusDialog,ge as CloseOnBackdropClick,de as ConfirmDesctructiveActionHighRisk,ce as ConfirmDesctructiveActionLowRisk,ue as ConfirmDesctructiveActionMediumRisk,Te as CustomModalFooter,se as Default,me as DefaultWithForm,we as DisabledCloseButton,ve as LargeWithForm,ye as NonCloseable,fe as SimpleConfirmDialogWithDisabledButtons,le as SimpleConfirmNonDestructiveAction,je as TestComboBoxInModal,Ce as TestSelectInModal,he as XLWithForm,be as XXLWithForm,ga as __namedExportsOrder,ya as default};
