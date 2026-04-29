import{n as We,o as at,r as L,j as c,b as rt}from"./iframe-uWfseNJC.js";import{M as ze}from"./ModalFooter.component-Ceu1Ulsw.js";import{I as Ke}from"./Icon.component-Ben__1cl.js";import{u as nt,P as ot}from"./PortalProvider.component-DW_CZhSy.js";import{B as Ce}from"./Button.component-BA5scukC.js";import{B as it}from"./ButtonRow.component-CJNql4nn.js";import{C as st}from"./Checkbox.component-Dg5Ht-LG.js";import{F as lt}from"./Form.component-BlDTbnAE.js";import{F as H}from"./FormRow.component-Bg9FU4ms.js";import{T as $}from"./TextInput.component-5TCjNzQb.js";import{S as Ue,a as te}from"./SelectOption.component-DrvHC79y.js";import{C as He,a as G}from"./ComboBoxOption.component-B9rQpKTG.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner.component-Bj1PP07I.js";import"./Stack.component-cslfLANT.js";import"./Label.component-CmO3CSvC.js";import"./FormHint.component--jsPyFaL.js";import"./element-movement-DaHfs0Jw.js";import"./floating-ui.react-Do_UgzcN.js";import"./frozen-BQFkVy4H.js";import"./use-text-value-Bh26V301.js";import"./use-tree-walker-DC6wlWxy.js";var Xe=["input:not([inert]):not([inert] *)","select:not([inert]):not([inert] *)","textarea:not([inert]):not([inert] *)","a[href]:not([inert]):not([inert] *)","button:not([inert]):not([inert] *)","[tabindex]:not(slot):not([inert]):not([inert] *)","audio[controls]:not([inert]):not([inert] *)","video[controls]:not([inert]):not([inert] *)",'[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',"details>summary:first-of-type:not([inert]):not([inert] *)","details:not([inert]):not([inert] *)"],Se=Xe.join(","),$e=typeof Element>"u",Y=$e?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ke=!$e&&Element.prototype.getRootNode?function(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}:function(a){return a?.ownerDocument},Fe=function(e,t){var o;t===void 0&&(t=!0);var s=e==null||(o=e.getAttribute)===null||o===void 0?void 0:o.call(e,"inert"),u=s===""||s==="true",n=u||t&&e&&(typeof e.closest=="function"?e.closest("[inert]"):Fe(e.parentNode));return n},ct=function(e){var t,o=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return o===""||o==="true"},Ge=function(e,t,o){if(Fe(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll(Se));return t&&Y.call(e,Se)&&s.unshift(e),s=s.filter(o),s},xe=function(e,t,o){for(var s=[],u=Array.from(e);u.length;){var n=u.shift();if(!Fe(n,!1))if(n.tagName==="SLOT"){var b=n.assignedElements(),C=b.length?b:n.children,k=xe(C,!0,o);o.flatten?s.push.apply(s,k):s.push({scopeParent:n,candidates:k})}else{var O=Y.call(n,Se);O&&o.filter(n)&&(t||!e.includes(n))&&s.push(n);var D=n.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(n),A=!Fe(D,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(n));if(D&&A){var P=xe(D===!0?n.children:D.children,!0,o);o.flatten?s.push.apply(s,P):s.push({scopeParent:n,candidates:P})}else u.unshift.apply(u,n.children)}}return s},Ye=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},K=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ct(e))&&!Ye(e)?0:e.tabIndex},ut=function(e,t){var o=K(e);return o<0&&t&&!Ye(e)?0:o},dt=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ze=function(e){return e.tagName==="INPUT"},ft=function(e){return Ze(e)&&e.type==="hidden"},pt=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(o){return o.tagName==="SUMMARY"});return t},vt=function(e,t){for(var o=0;o<e.length;o++)if(e[o].checked&&e[o].form===t)return e[o]},mt=function(e){if(!e.name)return!0;var t=e.form||ke(e),o=function(b){return t.querySelectorAll('input[type="radio"][name="'+b+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=o(window.CSS.escape(e.name));else try{s=o(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var u=vt(s,e.form);return!u||u===e},ht=function(e){return Ze(e)&&e.type==="radio"},bt=function(e){return ht(e)&&!mt(e)},yt=function(e){var t,o=e&&ke(e),s=(t=o)===null||t===void 0?void 0:t.host,u=!1;if(o&&o!==e){var n,b,C;for(u=!!((n=s)!==null&&n!==void 0&&(b=n.ownerDocument)!==null&&b!==void 0&&b.contains(s)||e!=null&&(C=e.ownerDocument)!==null&&C!==void 0&&C.contains(e));!u&&s;){var k,O,D;o=ke(s),s=(k=o)===null||k===void 0?void 0:k.host,u=!!((O=s)!==null&&O!==void 0&&(D=O.ownerDocument)!==null&&D!==void 0&&D.contains(s))}}return u},Me=function(e){var t=e.getBoundingClientRect(),o=t.width,s=t.height;return o===0&&s===0},gt=function(e,t){var o=t.displayCheck,s=t.getShadowRoot;if(o==="full-native"&&"checkVisibility"in e){var u=e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});return!u}if(getComputedStyle(e).visibility==="hidden")return!0;var n=Y.call(e,"details>summary:first-of-type"),b=n?e.parentElement:e;if(Y.call(b,"details:not([open]) *"))return!0;if(!o||o==="full"||o==="full-native"||o==="legacy-full"){if(typeof s=="function"){for(var C=e;e;){var k=e.parentElement,O=ke(e);if(k&&!k.shadowRoot&&s(k)===!0)return Me(e);e.assignedSlot?e=e.assignedSlot:!k&&O!==e.ownerDocument?e=O.host:e=k}e=C}if(yt(e))return!e.getClientRects().length;if(o!=="legacy-full")return!0}else if(o==="non-zero-area")return Me(e);return!1},wt=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var o=0;o<t.children.length;o++){var s=t.children.item(o);if(s.tagName==="LEGEND")return Y.call(t,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}t=t.parentElement}return!1},Oe=function(e,t){return!(t.disabled||ft(t)||gt(t,e)||pt(t)||wt(t))},Ae=function(e,t){return!(bt(t)||K(t)<0||!Oe(e,t))},Tt=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Je=function(e){var t=[],o=[];return e.forEach(function(s,u){var n=!!s.scopeParent,b=n?s.scopeParent:s,C=ut(b,n),k=n?Je(s.candidates):b;C===0?n?t.push.apply(t,k):t.push(b):o.push({documentOrder:u,tabIndex:C,item:s,isScope:n,content:k})}),o.sort(dt).reduce(function(s,u){return u.isScope?s.push.apply(s,u.content):s.push(u.content),s},[]).concat(t)},Qe=function(e,t){t=t||{};var o;return t.getShadowRoot?o=xe([e],t.includeContainer,{filter:Ae.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Tt}):o=Ge(e,t.includeContainer,Ae.bind(null,t)),Je(o)},et=function(e,t){t=t||{};var o;return t.getShadowRoot?o=xe([e],t.includeContainer,{filter:Oe.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):o=Ge(e,t.includeContainer,Oe.bind(null,t)),o},X=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Y.call(e,Se)===!1?!1:Ae(t,e)},Ct=Xe.concat("iframe:not([inert]):not([inert] *)").join(","),je=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Y.call(e,Ct)===!1?!1:Oe(t,e)};const jt=Object.freeze(Object.defineProperty({__proto__:null,focusable:et,getTabIndex:K,isFocusable:je,isTabbable:X,tabbable:Qe},Symbol.toStringTag,{value:"Module"}));var re={exports:{}};function Ne(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,o=Array(e);t<e;t++)o[t]=a[t];return o}function St(a){if(Array.isArray(a))return Ne(a)}function Pe(a,e){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=tt(a))||e){t&&(a=t);var o=0,s=function(){};return{s,n:function(){return o>=a.length?{done:!0}:{done:!1,value:a[o++]}},e:function(C){throw C},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,n=!0,b=!1;return{s:function(){t=t.call(a)},n:function(){var C=t.next();return n=C.done,C},e:function(C){b=!0,u=C},f:function(){try{n||t.return==null||t.return()}finally{if(b)throw u}}}}function kt(a,e,t){return(e=Dt(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Ft(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),t.push.apply(t,o)}return t}function Le(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ie(Object(t),!0).forEach(function(o){kt(a,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Ie(Object(t)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(t,o))})}return a}function Ot(a){return St(a)||Ft(a)||tt(a)||xt()}function Et(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var o=t.call(a,e);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Dt(a){var e=Et(a,"string");return typeof e=="symbol"?e:e+""}function tt(a,e){if(a){if(typeof a=="string")return Ne(a,e);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ne(a,e):void 0}}var q={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){var o=q.getActiveTrap(e);t!==o&&q.pauseTrap(e);var s=e.indexOf(t);s===-1||e.splice(s,1),e.push(t)},deactivateTrap:function(e,t){var o=e.indexOf(t);o!==-1&&e.splice(o,1),q.unpauseTrap(e)},pauseTrap:function(e){var t=q.getActiveTrap(e);t?._setPausedState(!0)},unpauseTrap:function(e){var t=q.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},Bt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Rt=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},ae=function(e){return e?.key==="Tab"||e?.keyCode===9},At=function(e){return ae(e)&&!e.shiftKey},Nt=function(e){return ae(e)&&e.shiftKey},_e=function(e){return setTimeout(e,0)},ee=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,o):e},ne=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Mt=[],Pt=function(e,t){var o=t?.document||document,s=t?.trapStack||Mt,u=Le({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:At,isKeyBackward:Nt},t),n={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},b,C=function(i,r,d){return i&&i[r]!==void 0?i[r]:u[d||r]},k=function(i,r){var d=typeof r?.composedPath=="function"?r.composedPath():void 0;return n.containerGroups.findIndex(function(y){var h=y.container,T=y.tabbableNodes;return h.contains(i)||d?.includes(h)||T.find(function(v){return v===i})})},O=function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=r.hasFallback,y=d===void 0?!1:d,h=r.params,T=h===void 0?[]:h,v=u[i];if(typeof v=="function"&&(v=v.apply(void 0,Ot(T))),v===!0&&(v=void 0),!v){if(v===void 0||v===!1)return v;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var j=v;if(typeof v=="string"){try{j=o.querySelector(v)}catch(S){throw new Error("`".concat(i,'` appears to be an invalid selector; error="').concat(S.message,'"'))}if(!j&&!y)throw new Error("`".concat(i,"` as selector refers to no known node"))}return j},D=function(){var i=O("initialFocus",{hasFallback:!0});if(i===!1)return!1;if(i===void 0||i&&!je(i,u.tabbableOptions))if(k(o.activeElement)>=0)i=o.activeElement;else{var r=n.tabbableGroups[0],d=r&&r.firstTabbableNode;i=d||O("fallbackFocus")}else i===null&&(i=O("fallbackFocus"));if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},A=function(){if(n.containerGroups=n.containers.map(function(i){var r=Qe(i,u.tabbableOptions),d=et(i,u.tabbableOptions),y=r.length>0?r[0]:void 0,h=r.length>0?r[r.length-1]:void 0,T=d.find(function(S){return X(S)}),v=d.slice().reverse().find(function(S){return X(S)}),j=!!r.find(function(S){return K(S)>0});return{container:i,tabbableNodes:r,focusableNodes:d,posTabIndexesFound:j,firstTabbableNode:y,lastTabbableNode:h,firstDomTabbableNode:T,lastDomTabbableNode:v,nextTabbableNode:function(x){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,R=r.indexOf(x);return R<0?I?d.slice(d.indexOf(x)+1).find(function(V){return X(V)}):d.slice(0,d.indexOf(x)).reverse().find(function(V){return X(V)}):r[R+(I?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!O("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(i){return i.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},P=function(i){var r=i.activeElement;if(r)return r.shadowRoot&&r.shadowRoot.activeElement!==null?P(r.shadowRoot):r},N=function(i){if(i!==!1&&i!==P(document)){if(!i||!i.focus){N(D());return}i.focus({preventScroll:!!u.preventScroll}),n.mostRecentlyFocusedNode=i,Bt(i)&&i.select()}},Z=function(i){var r=O("setReturnFocus",{params:[i]});return r||(r===!1?!1:i)},_=function(i){var r=i.target,d=i.event,y=i.isBackward,h=y===void 0?!1:y;r=r||ne(d),A();var T=null;if(n.tabbableGroups.length>0){var v=k(r,d),j=v>=0?n.containerGroups[v]:void 0;if(v<0)h?T=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:T=n.tabbableGroups[0].firstTabbableNode;else if(h){var S=n.tabbableGroups.findIndex(function(Be){var Re=Be.firstTabbableNode;return r===Re});if(S<0&&(j.container===r||je(r,u.tabbableOptions)&&!X(r,u.tabbableOptions)&&!j.nextTabbableNode(r,!1))&&(S=v),S>=0){var x=S===0?n.tabbableGroups.length-1:S-1,I=n.tabbableGroups[x];T=K(r)>=0?I.lastTabbableNode:I.lastDomTabbableNode}else ae(d)||(T=j.nextTabbableNode(r,!1))}else{var R=n.tabbableGroups.findIndex(function(Be){var Re=Be.lastTabbableNode;return r===Re});if(R<0&&(j.container===r||je(r,u.tabbableOptions)&&!X(r,u.tabbableOptions)&&!j.nextTabbableNode(r))&&(R=v),R>=0){var V=R===n.tabbableGroups.length-1?0:R+1,E=n.tabbableGroups[V];T=K(r)>=0?E.firstTabbableNode:E.firstDomTabbableNode}else ae(d)||(T=j.nextTabbableNode(r))}}else T=O("fallbackFocus");return T},W=function(i){var r=ne(i);if(!(k(r,i)>=0)){if(ee(u.clickOutsideDeactivates,i)){b.deactivate({returnFocus:u.returnFocusOnDeactivate});return}ee(u.allowOutsideClick,i)||i.preventDefault()}},J=function(i){var r=ne(i),d=k(r,i)>=0;if(d||r instanceof Document)d&&(n.mostRecentlyFocusedNode=r);else{i.stopImmediatePropagation();var y,h=!0;if(n.mostRecentlyFocusedNode)if(K(n.mostRecentlyFocusedNode)>0){var T=k(n.mostRecentlyFocusedNode),v=n.containerGroups[T].tabbableNodes;if(v.length>0){var j=v.findIndex(function(S){return S===n.mostRecentlyFocusedNode});j>=0&&(u.isKeyForward(n.recentNavEvent)?j+1<v.length&&(y=v[j+1],h=!1):j-1>=0&&(y=v[j-1],h=!1))}}else n.containerGroups.some(function(S){return S.tabbableNodes.some(function(x){return K(x)>0})})||(h=!1);else h=!1;h&&(y=_({target:n.mostRecentlyFocusedNode,isBackward:u.isKeyBackward(n.recentNavEvent)})),N(y||n.mostRecentlyFocusedNode||D())}n.recentNavEvent=void 0},Q=function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=i;var d=_({event:i,isBackward:r});d&&(ae(i)&&i.preventDefault(),N(d))},U=function(i){(u.isKeyForward(i)||u.isKeyBackward(i))&&Q(i,u.isKeyBackward(i))},z=function(i){Rt(i)&&ee(u.escapeDeactivates,i)!==!1&&(i.preventDefault(),b.deactivate())},M=function(i){var r=ne(i);k(r,i)>=0||ee(u.clickOutsideDeactivates,i)||ee(u.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},p=function(){if(n.active)return q.activateTrap(s,b),n.delayInitialFocusTimer=u.delayInitialFocus?_e(function(){N(D())}):N(D()),o.addEventListener("focusin",J,!0),o.addEventListener("mousedown",W,{capture:!0,passive:!1}),o.addEventListener("touchstart",W,{capture:!0,passive:!1}),o.addEventListener("click",M,{capture:!0,passive:!1}),o.addEventListener("keydown",U,{capture:!0,passive:!1}),o.addEventListener("keydown",z),b},f=function(i){n.active&&!n.paused&&b._setSubtreeIsolation(!1),n.adjacentElements.clear(),n.alreadySilent.clear();var r=new Set,d=new Set,y=Pe(i),h;try{for(y.s();!(h=y.n()).done;){var T=h.value;r.add(T);for(var v=typeof ShadowRoot<"u"&&T.getRootNode()instanceof ShadowRoot,j=T;j;){r.add(j);var S=j.parentElement,x=[];S?x=S.children:!S&&v&&(x=j.getRootNode().children,S=j.getRootNode().host,v=typeof ShadowRoot<"u"&&S.getRootNode()instanceof ShadowRoot);var I=Pe(x),R;try{for(I.s();!(R=I.n()).done;){var V=R.value;d.add(V)}}catch(E){I.e(E)}finally{I.f()}j=S}}}catch(E){y.e(E)}finally{y.f()}r.forEach(function(E){d.delete(E)}),n.adjacentElements=d},g=function(){if(n.active)return o.removeEventListener("focusin",J,!0),o.removeEventListener("mousedown",W,!0),o.removeEventListener("touchstart",W,!0),o.removeEventListener("click",M,!0),o.removeEventListener("keydown",U,!0),o.removeEventListener("keydown",z),b},l=function(i){var r=i.some(function(d){var y=Array.from(d.removedNodes);return y.some(function(h){return h===n.mostRecentlyFocusedNode})});r&&N(D())},w=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(l):void 0,F=function(){w&&(w.disconnect(),n.active&&!n.paused&&n.containers.map(function(i){w.observe(i,{subtree:!0,childList:!0})}))};return b={get active(){return n.active},get paused(){return n.paused},activate:function(i){if(n.active)return this;var r=C(i,"onActivate"),d=C(i,"onPostActivate"),y=C(i,"checkCanFocusTrap"),h=q.getActiveTrap(s),T=!1;if(h&&!h.paused){var v;(v=h._setSubtreeIsolation)===null||v===void 0||v.call(h,!1),T=!0}try{y||A(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=P(o),r?.();var j=function(){y&&A(),p(),F(),u.isolateSubtrees&&b._setSubtreeIsolation(!0),d?.()};if(y)return y(n.containers.concat()).then(j,j),this;j()}catch(x){if(h===q.getActiveTrap(s)&&T){var S;(S=h._setSubtreeIsolation)===null||S===void 0||S.call(h,!0)}throw x}return this},deactivate:function(i){if(!n.active)return this;var r=Le({onDeactivate:u.onDeactivate,onPostDeactivate:u.onPostDeactivate,checkCanReturnFocus:u.checkCanReturnFocus},i);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,n.paused||b._setSubtreeIsolation(!1),n.alreadySilent.clear(),g(),n.active=!1,n.paused=!1,F(),q.deactivateTrap(s,b);var d=C(r,"onDeactivate"),y=C(r,"onPostDeactivate"),h=C(r,"checkCanReturnFocus"),T=C(r,"returnFocus","returnFocusOnDeactivate");d?.();var v=function(){_e(function(){T&&N(Z(n.nodeFocusedBeforeActivation)),y?.()})};return T&&h?(h(Z(n.nodeFocusedBeforeActivation)).then(v,v),this):(v(),this)},pause:function(i){return n.active?(n.manuallyPaused=!0,this._setPausedState(!0,i)):this},unpause:function(i){return n.active?(n.manuallyPaused=!1,s[s.length-1]!==this?this:this._setPausedState(!1,i)):this},updateContainerElements:function(i){var r=[].concat(i).filter(Boolean);return n.containers=r.map(function(d){return typeof d=="string"?o.querySelector(d):d}),u.isolateSubtrees&&f(n.containers),n.active&&(A(),u.isolateSubtrees&&!n.paused&&b._setSubtreeIsolation(!0)),F(),this}},Object.defineProperties(b,{_isManuallyPaused:{value:function(){return n.manuallyPaused}},_setPausedState:{value:function(i,r){if(n.paused===i)return this;if(n.paused=i,i){var d=C(r,"onPause"),y=C(r,"onPostPause");d?.(),g(),F(),b._setSubtreeIsolation(!1),y?.()}else{var h=C(r,"onUnpause"),T=C(r,"onPostUnpause");h?.(),b._setSubtreeIsolation(!0),A(),p(),F(),T?.()}return this}},_setSubtreeIsolation:{value:function(i){u.isolateSubtrees&&n.adjacentElements.forEach(function(r){var d;i?u.isolateSubtrees==="aria-hidden"?((r.ariaHidden==="true"||((d=r.getAttribute("aria-hidden"))===null||d===void 0?void 0:d.toLowerCase())==="true")&&n.alreadySilent.add(r),r.setAttribute("aria-hidden","true")):((r.inert||r.hasAttribute("inert"))&&n.alreadySilent.add(r),r.setAttribute("inert",!0)):n.alreadySilent.has(r)||(u.isolateSubtrees==="aria-hidden"?r.removeAttribute("aria-hidden"):r.removeAttribute("inert"))})}}}),b.updateContainerElements(e),b};const It=Object.freeze(Object.defineProperty({__proto__:null,createFocusTrap:Pt},Symbol.toStringTag,{value:"Module"})),Lt=We(It),_t=We(jt);var Ve;function Vt(){if(Ve)return re.exports;Ve=1;function a(p){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},a(p)}var e,t;function o(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function s(p,f){for(var g=0;g<f.length;g++){var l=f[g];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,N(l.key),l)}}function u(p,f,g){return f&&s(p.prototype,f),Object.defineProperty(p,"prototype",{writable:!1}),p}function n(p,f,g){return f=O(f),b(p,k()?Reflect.construct(f,g||[],O(p).constructor):f.apply(p,g))}function b(p,f){if(f&&(a(f)=="object"||typeof f=="function"))return f;if(f!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(p)}function C(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function k(){try{var p=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(k=function(){return!!p})()}function O(p){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},O(p)}function D(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),Object.defineProperty(p,"prototype",{writable:!1}),f&&A(p,f)}function A(p,f){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,l){return g.__proto__=l,g},A(p,f)}function P(p,f,g){return(f=N(f))in p?Object.defineProperty(p,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):p[f]=g,p}function N(p){var f=Z(p,"string");return a(f)=="symbol"?f:f+""}function Z(p,f){if(a(p)!="object"||!p)return p;var g=p[Symbol.toPrimitive];if(g!==void 0){var l=g.call(p,f);if(a(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(p)}var _=at(),W=Lt,J=W.createFocusTrap,Q=_t,U=Q.isFocusable,z=parseInt((e=(t=/^(\d+)\./.exec(_.version))===null||t===void 0?void 0:t[1])!==null&&e!==void 0?e:0,10),M=(function(p){function f(g){var l;o(this,f),l=n(this,f,[g]),P(l,"getNodeForOption",function(m){var i,r=(i=this.internalOptions[m])!==null&&i!==void 0?i:this.originalOptions[m];if(typeof r=="function"){for(var d=arguments.length,y=new Array(d>1?d-1:0),h=1;h<d;h++)y[h-1]=arguments[h];r=r.apply(void 0,y)}if(r===!0&&(r=void 0),!r){if(r===void 0||r===!1)return r;throw new Error("`".concat(m,"` was specified but was not a node, or did not return a node"))}var T=r;if(typeof r=="string"){var v;if(T=(v=this.getDocument())===null||v===void 0?void 0:v.querySelector(r),!T)throw new Error("`".concat(m,"` as selector refers to no known node"))}return T}),l.handleDeactivate=l.handleDeactivate.bind(l),l.handlePostDeactivate=l.handlePostDeactivate.bind(l),l.handleClickOutsideDeactivates=l.handleClickOutsideDeactivates.bind(l),l.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:l.handleDeactivate,onPostDeactivate:l.handlePostDeactivate,clickOutsideDeactivates:l.handleClickOutsideDeactivates},l.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var w=g.focusTrapOptions;for(var F in w)if(Object.prototype.hasOwnProperty.call(w,F)){if(F==="returnFocusOnDeactivate"||F==="onDeactivate"||F==="onPostDeactivate"||F==="checkCanReturnFocus"||F==="clickOutsideDeactivates"){l.originalOptions[F]=w[F];continue}l.internalOptions[F]=w[F]}return l.outsideClick=null,l.focusTrapElements=g.containerElements||[],l.updatePreviousElement(),l}return D(f,p),u(f,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document<"u"?document:void 0)}},{key:"getReturnFocusNode",value:function(){var l=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return l||(l===!1?!1:this.previouslyFocusedElement)}},{key:"updatePreviousElement",value:function(){var l=this.getDocument();l&&(this.previouslyFocusedElement=l.activeElement)}},{key:"deactivateTrap",value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(l){var w=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,l):this.originalOptions.clickOutsideDeactivates;return w&&(this.outsideClick={target:l.target,allowDeactivation:w}),w}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var l=this,w=function(){var m=l.getReturnFocusNode(),i=!!(l.originalOptions.returnFocusOnDeactivate&&m!==null&&m!==void 0&&m.focus&&(!l.outsideClick||l.outsideClick.allowDeactivation&&!U(l.outsideClick.target,l.internalOptions.tabbableOptions))),r=l.internalOptions.preventScroll,d=r===void 0?!1:r;i&&m.focus({preventScroll:d}),l.originalOptions.onPostDeactivate&&l.originalOptions.onPostDeactivate.call(null),l.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(w,w):w()}},{key:"setupFocusTrap",value:function(){if(this.focusTrap)this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause());else{var l=this.focusTrapElements.some(Boolean);l&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(l){if(this.focusTrap){l.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var w=!l.active&&this.props.active,F=l.active&&!this.props.active,m=!l.paused&&this.props.paused,i=l.paused&&!this.props.paused;if(w&&(this.updatePreviousElement(),this.focusTrap.activate()),F){this.deactivateTrap();return}m&&this.focusTrap.pause(),i&&this.focusTrap.unpause()}else l.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var l=this,w=this.props.children?_.Children.only(this.props.children):void 0;if(w){if(w.type&&w.type===_.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var F=function(r){var d=l.props.containerElements;w&&(z>=19?typeof w.props.ref=="function"?w.props.ref(r):w.props.ref&&(w.props.ref.current=r):typeof w.ref=="function"?w.ref(r):w.ref&&(w.ref.current=r)),l.focusTrapElements=d||[r]},m=_.cloneElement(w,{ref:F});return m}return null}}])})(_.Component);return M.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:J},re.exports=M,re.exports.FocusTrap=M,re.exports}var qt=Vt();const Wt=`
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
`,Xt=a=>{switch(a){case"large":return"jn:w-[40rem]";case"xl":return"jn:w-[76.75rem]";case"2xl":return"jn:w-[80%] jn:min-w-[85rem] jn:max-w-[112.5rem]";default:return"jn:w-[33.625rem]"}},Ee=({title:a="",heading:e="",ariaLabel:t,initialFocus:o,open:s=!1,closeable:u=!0,closeOnEsc:n=!0,closeOnBackdropClick:b=!1,disableCloseButton:C,size:k="small",unpad:O=!1,className:D="",children:A,modalFooter:P,confirmButtonLabel:N="",cancelButtonLabel:Z="",confirmButtonIcon:_,confirmButtonVariant:W,cancelButtonIcon:J,disableConfirmButton:Q=!1,disableCancelButton:U=!1,onConfirm:z,onCancel:M,...p})=>{const f=()=>"juno-modal-"+L.useId(),[g,l]=L.useState(s),[w,F]=L.useState(u),[m,i]=L.useState(b),[r,d]=L.useState(n);L.useEffect(()=>{l(s)},[s]),L.useEffect(()=>{F(u)},[u]),L.useEffect(()=>{i(b)},[b]),L.useEffect(()=>{d(n)},[n]);const y=E=>{z&&z(E)},h=E=>{l(!1),M&&M(E)},T=E=>{w&&r&&(l(!1),M&&M(E))},v=E=>{m?(l(!1),M&&M(E)):E.stopPropagation()},j=nt(),S=L.useRef(null),x=a||e,R=!!x?f():void 0,V=()=>x==null||x===!1?null:typeof x=="string"?c.jsx("h1",{className:`juno-modal-title ${qe}`,id:R,children:x}):c.jsx("div",{className:`juno-modal-title ${qe}`,id:R,children:x});return c.jsx(c.Fragment,{children:g&&rt.createPortal(c.jsx("div",{className:`juno-modal-container ${Wt}`,onClick:v,children:c.jsx(qt.FocusTrap,{focusTrapOptions:{initialFocus:o,clickOutsideDeactivates:m,fallbackFocus:()=>S.current,allowOutsideClick:!0,escapeDeactivates:E=>(T(E),!1)},children:c.jsxs("div",{className:`juno-modal ${Xt(k)} ${zt} ${D}`,role:"dialog",ref:S,...p,"aria-labelledby":R,"aria-label":t,children:[c.jsxs("div",{className:`juno-modal-header ${Kt} ${x?"jn:justify-between":"jn:justify-end"}`,children:[V(),w?c.jsx(Ke,{icon:"close",onClick:h,disabled:U||C}):""]}),c.jsx("div",{className:`juno-modal-content ${Ut} ${O?"":Ht}`,children:A}),w?P||c.jsx(ze,{confirmButtonLabel:N,cancelButtonLabel:Z,confirmButtonIcon:_,confirmButtonVariant:W,cancelButtonIcon:J,disableConfirmButton:Q,disableCancelButton:U,onConfirm:z?y:void 0,onCancel:h}):null]})})}),j||document.body)})};try{Ee.displayName="Modal",Ee.__docgenInfo={description:"The `Modal` component provides a flexible dialog window for user interactions,\nsupporting titles, dismissal controls, sizing options, and comprehensive footer configurations.",displayName:"Modal",props:{title:{defaultValue:{value:""},description:"The title of the modal. This will be rendering as the heading of the modal, and the modal's `aria-labelledby` attribute will reference the title/heading element. If the modal does not have `title` or `heading`, use `ariaLabel` to provide an accessible name for the modal.",name:"title",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:{value:""},description:"Also the title of the modal, just for API flexibility. If both `title` and `heading` are passed, `title` will take precedence.",name:"heading",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:"The aria-label of the modal. Use only if the modal does NOT have a `title` or `heading`.",name:"ariaLabel",required:!1,type:{name:"string"}},initialFocus:{defaultValue:null,description:"By default, the first element in the tab order of the Modal content will be focussed. To specify an element to be focussed when the modal opens, pass an element, DOM node, or selector string.",name:"initialFocus",required:!1,type:{name:"string | HTMLElement | SVGElement"}},open:{defaultValue:{value:"false"},description:"Whether the modal will be open.",name:"open",required:!1,type:{name:"boolean"}},closeable:{defaultValue:{value:"true"},description:'Whether the modal can be closed using an "X"-Button at the top right.',name:"closeable",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:{value:"false"},description:"Whether the modal should be closed when the backdrop is clicked. Essentially 'un-modals' the modal.",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},disableCloseButton:{defaultValue:{value:"false"},description:"Determines whether the close button should be disabled.",name:"disableCloseButton",required:!1,type:{name:"boolean"}},closeOnEsc:{defaultValue:{value:"true"},description:"Whether the modal can be closed by hitting the ESC key.",name:"closeOnEsc",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"The Modal size, determines the aesthetics of the modal.",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"xl"'},{value:'"2xl"'}]}},unpad:{defaultValue:{value:"false"},description:"Pass to remove default padding from the content area of the modal.",name:"unpad",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className to add to the modal for additional styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the modal. These will be rendered as the modal content. To render custom buttons at the bottom, see `modalFooter` below.",name:"children",required:!1,type:{name:"ReactNode"}},modalFooter:{defaultValue:null,description:"Optional. Pass a `<ModalFooter />` component with custom content as required. Will default to using the `<ModalFooter/>` component internally.",name:"modalFooter",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},confirmButtonLabel:{defaultValue:{value:""},description:"Pass a label to render a confirm button and a Cancel button.",name:"confirmButtonLabel",required:!1,type:{name:"string"}},cancelButtonLabel:{defaultValue:{value:""},description:'Pass a label for the cancel button. Defaults to "Cancel".',name:"cancelButtonLabel",required:!1,type:{name:"string"}},confirmButtonIcon:{defaultValue:null,description:"Pass an Icon name to show on the confirming action button.",name:"confirmButtonIcon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},confirmButtonVariant:{defaultValue:{value:'"primary"'},description:"The variant of the confirm button.",name:"confirmButtonVariant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},cancelButtonIcon:{defaultValue:null,description:"Pass an icon name to show on the cancelling button.",name:"cancelButtonIcon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},disableConfirmButton:{defaultValue:{value:"false"},description:"Determines whether the confirm action button should be disabled.",name:"disableConfirmButton",required:!1,type:{name:"boolean"}},disableCancelButton:{defaultValue:{value:"false"},description:"Determines whether the cancel action button should be disabled.",name:"disableCancelButton",required:!1,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"A handler to execute once the modal is confirmed by clicking the confirm button if exists. Note that we do not close the modal automatically.",name:"onConfirm",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onCancel:{defaultValue:null,description:"A handler to execute once the modal is cancelled or dismissed using the x-Close button,  Cancel-button or pressing ESC.",name:"onCancel",required:!1,type:{name:"((_event: MouseEvent<HTMLElement, MouseEvent> | KeyboardEvent) => void)"}}}}}catch{}const B=({closeOnConfirm:a,...e})=>{const[t,o]=L.useState(!1),s=()=>{o(!0)},u=()=>{o(!1)};return c.jsxs(c.Fragment,{children:[c.jsx(Ce,{label:"Open Modal",variant:"primary",onClick:s}),c.jsx(Ee,{open:t,onCancel:u,onConfirm:a?u:void 0,...e})]})},ha={title:"Components/Modal/Modal",component:Ee,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},modalFooter:{control:!1,table:{type:{summary:"ReactElement"}}}},parameters:{actions:{argTypesRegex:null},docs:{source:{transform:a=>a.replace(/jn:/g,"")}}},decorators:[a=>c.jsx(ot,{children:c.jsx("div",{className:"jn:m-20 jn:flex jn:justify-center",children:c.jsx(a,{})})})]},oe={render:B,parameters:{docs:{description:{story:"A modal dialog for simple acknowledgement."}}},args:{title:"Maintenance Mode Enabled for 'cluster-eu-1'",children:"Automated alerts and health checks for this cluster have been suspended. Turn off maintenance mode to resume normal monitoring."}},ie={render:B,parameters:{docs:{description:{story:"A modal dialog for confirming or canceling a non-destructive action."}}},args:{title:"Assign Role to user@example.com",children:"Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",cancelButtonLabel:"Cancel",confirmButtonLabel:"Assign Role"}},se={render:B,parameters:{docs:{description:{story:"A user-initiated low risk destructive action. Note the Confirm button is always enabled."}}},args:{title:"Delete Snapshot 'snap-20240115'",children:"Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.",confirmButtonVariant:"primary-danger",confirmButtonLabel:"Delete Snapshot"}},le={render:B,parameters:{docs:{description:{story:"A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox."}}},args:{title:"Remove User 'jsmith'",children:c.jsxs("div",{children:[c.jsx("p",{className:"jn:mb-4",children:"Removing user 'jsmith' will immediately revoke all their access to project resources."}),c.jsx(st,{label:"Check the box to confirm removing user"})]}),confirmButtonVariant:"primary-danger",confirmButtonLabel:"Remove User"}},ce={render:B,parameters:{docs:{description:{story:"A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase."}}},args:{title:"Delete Project 'production-eu'",children:c.jsxs("div",{children:[c.jsx("p",{className:"jn:mb-4",children:"This will permanently delete the projectand all associated resources, including clusters, configurations, and stored data."}),c.jsx("p",{className:"jn:mb-4",children:"This action cannot be undone."}),c.jsx($,{placeholder:"Type 'DELETE' to confirm deletion"})]}),confirmButtonVariant:"primary-danger",confirmButtonLabel:"Delete Project"}},ue={render:B,parameters:{docs:{description:{story:"In order to disable all buttons on a Modal, both `disableConfirmButton` and `disableCancelButton` need to be set to `true`."}}},args:{title:"Assign Role to user@example.com",children:"Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",cancelButtonLabel:"Cancel",confirmButtonLabel:"Assign Role",disableConfirmButton:!0,disableCancelButton:!0}},de={render:B,parameters:{docs:{description:{story:"In order to auto-focus an interactive element in the modal, assign an `id` and pass this `id` to the `initialFocus` prop."}}},args:{title:"Enter a Phrase",children:c.jsx($,{id:"focusOnMe"}),initialFocus:"#focusOnMe"}},De=()=>c.jsxs(lt,{children:[c.jsx(H,{children:c.jsx($,{label:"First Name",id:"firstname"})}),c.jsx(H,{children:c.jsx($,{label:"Last Name",id:"lastname"})}),c.jsx(H,{children:c.jsx($,{label:"Email",id:"email",type:"email"})}),c.jsx(H,{children:c.jsx($,{label:"Password",id:"password",type:"password"})}),c.jsx(H,{children:c.jsx($,{label:"Retype Password",id:"retype-password",type:"password"})}),c.jsx(H,{children:c.jsxs(Ue,{label:"Role",children:[c.jsx(te,{children:"Private Person"}),c.jsx(te,{children:"Small Business"})]})}),c.jsx(H,{children:c.jsxs(He,{label:"Country",children:[c.jsx(G,{value:"germany",children:"Germany"},"DE"),c.jsx(G,{value:"uk",children:"United Kingdom"},"UK"),c.jsx(G,{value:"us",children:"USA"},"US")]})})]}),fe={render:B,parameters:{docs:{description:{story:"A default size Modal with a form."}}},args:{title:"Default Modal Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:c.jsx(De,{})}},pe={render:B,parameters:{docs:{description:{story:"A `large` size Modal with a form."}}},args:{size:"large",title:"Large Modal Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:c.jsx(De,{})}},ve={render:B,parameters:{docs:{description:{story:"An `xl` size Modal with a form."}}},args:{size:"xl",title:"XL With Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:c.jsx(De,{})}},me={render:B,parameters:{docs:{description:{story:"An `2xl` size Modal with a form."}}},args:{size:"2xl",title:"2XL With Form",initialFocus:"#firstname",cancelButtonLabel:"Cancel",confirmButtonLabel:"Register now",children:c.jsx(De,{})}},he={render:B,parameters:{docs:{description:{story:"A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set `closeable` to `false`."}}},args:{title:"Non-Closeable Modal",children:"Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",closeable:!1}},be={render:B,parameters:{docs:{description:{story:"Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set `closeOnBackdropClick` to `true` to enable this behaviour."}}},args:{title:"Close on Backdrop Click",children:c.jsx("p",{children:"This Modal closes when clicking the backdrop."}),closeOnBackdropClick:!0}},ye={render:B,parameters:{docs:{description:{story:"In order to specifically disable the X-Close button, set `disableCloseButton`to `true`."}}},args:{title:"Disabled X-Close Button Modal",children:c.jsx("p",{children:"This Modal has a disabled top-right close button."}),disableCloseButton:!0,cancelButtonLabel:"Cancel"}},ge={render:B,parameters:{docs:{description:{story:"For complex use cases that require more than a Confirm and a Cancel button, a custom `ModalFooter` with buttons and additional elements can be passed to `Modal`."}}},args:{title:"Modal with Custom ModalFooter",size:"large",children:c.jsx("p",{children:"This Modal renders a custom footer with three buttons and a custom hint."}),modalFooter:c.jsxs(ze,{className:"jn:justify-between jn:items-center",children:[c.jsxs("span",{children:[c.jsx(Ke,{icon:"info",className:"jn:mr-1"}),"Have some custom content"]}),c.jsxs(it,{children:[c.jsx(Ce,{variant:"subdued",children:"Cancel"}),c.jsx(Ce,{variant:"primary-danger",children:"Destroy"}),c.jsx(Ce,{variant:"primary",children:"Proceed"})]})]})}},we={render:B,args:{title:"Modal with Select inside",size:"small",children:c.jsx(c.Fragment,{children:c.jsxs(Ue,{children:[c.jsx(te,{value:"1",label:"Option 1"},"o-1"),c.jsx(te,{value:"2",label:"Option 2"},"o-2"),c.jsx(te,{value:"3",label:"Option 3"},"o-3")]})})}},Te={render:B,args:{title:c.jsx("p",{children:"Hello"}),size:"small",children:c.jsx(c.Fragment,{children:c.jsxs(He,{children:[c.jsx(G,{value:"Rhubarb",children:"Rhubarb"},"1"),c.jsx(G,{value:"Carrots",children:"Carrots"},"2"),c.jsx(G,{value:"Spinach",children:"Spinach"},"3"),c.jsx(G,{value:"Tomatoes",children:"Tomatoes"},"4")]})})}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox."
      }
    }
  },
  args: {
    title: "Remove User 'jsmith'",
    children: <div>
        <p className="jn:mb-4">
          Removing user &apos;jsmith&apos; will immediately revoke all their access to project resources.
        </p>

        <Checkbox label="Check the box to confirm removing user" />
      </div>,
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Remove User"
  }
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase."
      }
    }
  },
  args: {
    title: "Delete Project 'production-eu'",
    children: <div>
        <p className="jn:mb-4">
          This will permanently delete the projectand all associated resources, including clusters, configurations, and
          stored data.
        </p>
        <p className="jn:mb-4">This action cannot be undone.</p>

        <TextInput placeholder="Type 'DELETE' to confirm deletion" />
      </div>,
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Project"
  }
}`,...ce.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
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
}`,...ue.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
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
}`,...de.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
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
}`,...fe.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
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
}`,...pe.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
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
}`,...ve.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
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
}`,...me.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
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
}`,...he.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
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
}`,...be.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
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
}`,...ye.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
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
}`,...ge.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
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
}`,...we.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
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
}`,...Te.parameters?.docs?.source}}};const ba=["Default","SimpleConfirmNonDestructiveAction","ConfirmDesctructiveActionLowRisk","ConfirmDesctructiveActionMediumRisk","ConfirmDesctructiveActionHighRisk","SimpleConfirmDialogWithDisabledButtons","AutoFocusDialog","DefaultWithForm","LargeWithForm","XLWithForm","XXLWithForm","NonCloseable","CloseOnBackdropClick","DisabledCloseButton","CustomModalFooter","TestSelectInModal","TestComboBoxInModal"];export{de as AutoFocusDialog,be as CloseOnBackdropClick,ce as ConfirmDesctructiveActionHighRisk,se as ConfirmDesctructiveActionLowRisk,le as ConfirmDesctructiveActionMediumRisk,ge as CustomModalFooter,oe as Default,fe as DefaultWithForm,ye as DisabledCloseButton,pe as LargeWithForm,he as NonCloseable,ue as SimpleConfirmDialogWithDisabledButtons,ie as SimpleConfirmNonDestructiveAction,Te as TestComboBoxInModal,we as TestSelectInModal,ve as XLWithForm,me as XXLWithForm,ba as __namedExportsOrder,ha as default};
