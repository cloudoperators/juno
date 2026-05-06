import{a as e,n as t,o as n,r,t as i}from"./chunk-jRWAZmH_.js";import{D as a,E as o,z as s}from"./iframe-b05NV5R9.js";import{r as c,t as l}from"./Icon.component-3azk26Zn.js";import{t as u}from"./Icon-CkoKZ-My.js";import{n as d,r as f,t as p}from"./PortalProvider.component-uh9zsmeD.js";import{t as m}from"./PortalProvider-Da1LXFsP.js";import{t as h}from"./Button.component-D_okr3Cu.js";import{t as g}from"./Button-CtDEdxni.js";import{t as _}from"./ButtonRow.component-DnXRQRVe.js";import{t as v}from"./ButtonRow-CuAo5epi.js";import{t as ee}from"./Checkbox.component-ibEznuom.js";import{t as te}from"./Checkbox-RhNlXEIE.js";import{C as ne,S as y,T as b,b as x,w as S,x as re,y as ie}from"./floating-ui.react-zuo2JkJa.js";import{r as C,t as w}from"./ComboBoxOption.component-CKxHlmdc.js";import{n as ae,t as T}from"./ComboBoxOption-D1Un1U5l.js";import{n as oe,t as se}from"./Form.component-F55KQ4rD.js";import{n as ce,t as E}from"./FormRow.component-Y-aXotgv.js";import{r as le,t as D}from"./SelectOption.component-7WlxDc_o.js";import{t as O}from"./TextInput.component-Cn_U_Fsb.js";import{n as ue,t as de}from"./SelectOption-C1LM7Rpe.js";import{n as fe,t as k}from"./ModalFooter-C9D40o_m.js";import{t as pe}from"./TextInput-CYxSge8Y.js";var me=r({createFocusTrap:()=>Pe});function he(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ge(e){if(Array.isArray(e))return he(e)}function _e(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Ee(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function ve(e,t,n){return(t=Te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function be(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?xe(Object(n),!0).forEach(function(t){ve(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ce(e){return ge(e)||ye(e)||Ee(e)||be()}function we(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Te(e){var t=we(e,`string`);return typeof t==`symbol`?t:t+``}function Ee(e,t){if(e){if(typeof e==`string`)return he(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?he(e,t):void 0}}var A,De,Oe,j,ke,Ae,je,M,Me,Ne,Pe,Fe=t((()=>{y(),A={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){t!==A.getActiveTrap(e)&&A.pauseTrap(e);var n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),A.unpauseTrap(e)},pauseTrap:function(e){A.getActiveTrap(e)?._setPausedState(!0)},unpauseTrap:function(e){var t=A.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},De=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},Oe=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},j=function(e){return e?.key===`Tab`||e?.keyCode===9},ke=function(e){return j(e)&&!e.shiftKey},Ae=function(e){return j(e)&&e.shiftKey},je=function(e){return setTimeout(e,0)},M=function(e){var t=[...arguments].slice(1);return typeof e==`function`?e.apply(void 0,t):e},Me=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},Ne=[],Pe=function(e,t){var n=t?.document||document,r=t?.trapStack||Ne,i=Se({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:ke,isKeyBackward:Ae},t),a={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r===void 0?!1:r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,Ce(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!ne(e,i.tabbableOptions))if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l(`fallbackFocus`)}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=b(e,i.tabbableOptions),n=ie(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return S(e)}),s=n.slice().reverse().find(function(e){return S(e)});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:!!t.find(function(e){return x(e)>0}),firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return S(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return S(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){if(e!==!1&&e!==f(document)){if(!e||!e.focus){p(u());return}e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,De(e)&&e.select()}},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||(t===!1?!1:e)},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r===void 0?!1:r;t||=Me(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||ne(t,i.tabbableOptions)&&!S(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=x(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else j(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||ne(t,i.tabbableOptions)&&!S(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=x(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else j(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){if(!(c(Me(e),e)>=0)){if(M(i.clickOutsideDeactivates,e)){o.deactivate({returnFocus:i.returnFocusOnDeactivate});return}M(i.allowOutsideClick,e)||e.preventDefault()}},_=function(e){var t=Me(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode)if(x(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return x(e)>0})})||(o=!1);else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(j(e)&&e.preventDefault(),p(n))},ee=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},te=function(e){Oe(e)&&M(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},y=function(e){c(Me(e),e)>=0||M(i.clickOutsideDeactivates,e)||M(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},re=function(){if(a.active)return A.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?je(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,ee,{capture:!0,passive:!1}),n.addEventListener(`keydown`,te),o},C=function(e){a.active&&!a.paused&&o._setSubtreeIsolation(!1),a.adjacentElements.clear(),a.alreadySilent.clear();var t=new Set,n=new Set,r=_e(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;t.add(s);for(var c=typeof ShadowRoot<`u`&&s.getRootNode()instanceof ShadowRoot,l=s;l;){t.add(l);var u=l.parentElement,d=[];u?d=u.children:!u&&c&&(d=l.getRootNode().children,u=l.getRootNode().host,c=typeof ShadowRoot<`u`&&u.getRootNode()instanceof ShadowRoot);var f=_e(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;n.add(m)}}catch(e){f.e(e)}finally{f.f()}l=u}}}catch(e){r.e(e)}finally{r.f()}t.forEach(function(e){n.delete(e)}),a.adjacentElements=n},w=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,y,!0),n.removeEventListener(`keydown`,ee,!0),n.removeEventListener(`keydown`,te),o},ae=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===a.mostRecentlyFocusedNode})})&&p(u())}):void 0,T=function(){ae&&(ae.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){ae.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),c=s(e,`onPostActivate`),l=s(e,`checkCanFocusTrap`),u=A.getActiveTrap(r),p=!1;if(u&&!u.paused){var m;(m=u._setSubtreeIsolation)==null||m.call(u,!1),p=!0}try{l||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=f(n),t?.();var h=function(){l&&d(),re(),T(),i.isolateSubtrees&&o._setSubtreeIsolation(!0),c?.()};if(l)return l(a.containers.concat()).then(h,h),this;h()}catch(e){if(u===A.getActiveTrap(r)&&p){var g;(g=u._setSubtreeIsolation)==null||g.call(u,!0)}throw e}return this},deactivate:function(e){if(!a.active)return this;var t=Se({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,a.paused||o._setSubtreeIsolation(!1),a.alreadySilent.clear(),w(),a.active=!1,a.paused=!1,T(),A.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){je(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){return a.containers=[].concat(e).filter(Boolean).map(function(e){return typeof e==`string`?n.querySelector(e):e}),i.isolateSubtrees&&C(a.containers),a.active&&(d(),i.isolateSubtrees&&!a.paused&&o._setSubtreeIsolation(!0)),T(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),w(),T(),o._setSubtreeIsolation(!1),r?.()}else{var i=s(t,`onUnpause`),c=s(t,`onPostUnpause`);i?.(),o._setSubtreeIsolation(!0),d(),re(),T(),c?.()}return this}},_setSubtreeIsolation:{value:function(e){i.isolateSubtrees&&a.adjacentElements.forEach(function(t){if(e)switch(i.isolateSubtrees){case`aria-hidden`:(t.ariaHidden===`true`||t.getAttribute(`aria-hidden`)?.toLowerCase()===`true`)&&a.alreadySilent.add(t),t.setAttribute(`aria-hidden`,`true`);break;default:(t.inert||t.hasAttribute(`inert`))&&a.alreadySilent.add(t),t.setAttribute(`inert`,!0);break}else if(!a.alreadySilent.has(t))switch(i.isolateSubtrees){case`aria-hidden`:t.removeAttribute(`aria-hidden`);break;default:t.removeAttribute(`inert`);break}})}}}),o.updateContainerElements(e),o}})),Ie=i(((t,n)=>{function r(e){"@babel/helpers - typeof";return r=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},r(e)}function i(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function c(e,t,n){return t=f(t),l(e,d()?Reflect.construct(t,n||[],f(e).constructor):t.apply(e,n))}function l(e,t){if(t&&(r(t)==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return u(e)}function u(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(d=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,`prototype`,{writable:!1}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function h(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=_(e,`string`);return r(t)==`symbol`?t:t+``}function _(e,t){if(r(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||`default`);if(r(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var v=s(),ee=(Fe(),e(me)).createFocusTrap,te=(y(),e(re)).isFocusable,ne=parseInt(/^(\d+)\./.exec(v.version)?.[1]??0,10),b=function(e){function t(e){var n;i(this,t),n=c(this,t,[e]),h(n,`getNodeForOption`,function(e){var t=this.internalOptions[e]??this.originalOptions[e];if(typeof t==`function`){var n=[...arguments].slice(1);t=t.apply(void 0,n)}if(t===!0&&(t=void 0),!t){if(t===void 0||t===!1)return t;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var r=t;if(typeof t==`string`&&(r=this.getDocument()?.querySelector(t),!r))throw Error(`\`${e}\` as selector refers to no known node`);return r}),n.handleDeactivate=n.handleDeactivate.bind(n),n.handlePostDeactivate=n.handlePostDeactivate.bind(n),n.handleClickOutsideDeactivates=n.handleClickOutsideDeactivates.bind(n),n.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:n.handleDeactivate,onPostDeactivate:n.handlePostDeactivate,clickOutsideDeactivates:n.handleClickOutsideDeactivates},n.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var r=e.focusTrapOptions;for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)){if(a===`returnFocusOnDeactivate`||a===`onDeactivate`||a===`onPostDeactivate`||a===`checkCanReturnFocus`||a===`clickOutsideDeactivates`){n.originalOptions[a]=r[a];continue}n.internalOptions[a]=r[a]}return n.outsideClick=null,n.focusTrapElements=e.containerElements||[],n.updatePreviousElement(),n}return p(t,e),o(t,[{key:`getDocument`,value:function(){return this.props.focusTrapOptions.document||(typeof document<`u`?document:void 0)}},{key:`getReturnFocusNode`,value:function(){var e=this.getNodeForOption(`setReturnFocus`,this.previouslyFocusedElement);return e||(e===!1?!1:this.previouslyFocusedElement)}},{key:`updatePreviousElement`,value:function(){var e=this.getDocument();e&&(this.previouslyFocusedElement=e.activeElement)}},{key:`deactivateTrap`,value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:`handleClickOutsideDeactivates`,value:function(e){var t=typeof this.originalOptions.clickOutsideDeactivates==`function`?this.originalOptions.clickOutsideDeactivates.call(null,e):this.originalOptions.clickOutsideDeactivates;return t&&(this.outsideClick={target:e.target,allowDeactivation:t}),t}},{key:`handleDeactivate`,value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:`handlePostDeactivate`,value:function(){var e=this,t=function(){var t=e.getReturnFocusNode(),n=!!(e.originalOptions.returnFocusOnDeactivate&&t!=null&&t.focus&&(!e.outsideClick||e.outsideClick.allowDeactivation&&!te(e.outsideClick.target,e.internalOptions.tabbableOptions))),r=e.internalOptions.preventScroll,i=r===void 0?!1:r;n&&t.focus({preventScroll:i}),e.originalOptions.onPostDeactivate&&e.originalOptions.onPostDeactivate.call(null),e.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(t,t):t()}},{key:`setupFocusTrap`,value:function(){this.focusTrap?this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()):this.focusTrapElements.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}},{key:`componentDidMount`,value:function(){this.props.active&&this.setupFocusTrap()}},{key:`componentDidUpdate`,value:function(e){if(this.focusTrap){e.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var t=!e.active&&this.props.active,n=e.active&&!this.props.active,r=!e.paused&&this.props.paused,i=e.paused&&!this.props.paused;if(t&&(this.updatePreviousElement(),this.focusTrap.activate()),n){this.deactivateTrap();return}r&&this.focusTrap.pause(),i&&this.focusTrap.unpause()}else e.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:`componentWillUnmount`,value:function(){this.deactivateTrap()}},{key:`render`,value:function(){var e=this,t=this.props.children?v.Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===v.Fragment)throw Error(`A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.`);return v.cloneElement(t,{ref:function(n){var r=e.props.containerElements;t&&(ne>=19?typeof t.props.ref==`function`?t.props.ref(n):t.props.ref&&(t.props.ref.current=n):typeof t.ref==`function`?t.ref(n):t.ref&&(t.ref.current=n)),e.focusTrapElements=r||[n]}})}return null}}])}(v.Component);b.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:ee},n.exports=b,n.exports.FocusTrap=b})),N,Le,Re,P,ze,Be,Ve,He,Ue,We,Ge,F,Ke=t((()=>{N=n(s()),Le=n(a()),Re=Ie(),k(),c(),d(),P=o(),ze=`
	jn:fixed
	jn:inset-0
	jn:flex
	jn:items-center
	jn:bg-theme-modal-backdrop
	jn:backdrop-blur-[2px]
	jn:z-9990
`,Be=`
	jn:bg-theme-background-lvl-0
	jn:relative
	jn:rounded
	jn:m-auto
	jn:overflow-y-auto
	jn:max-h-[90%]
`,Ve=`
	jn:flex
	jn:py-2
	jn:px-8
	jn:border-b
	jn:border-theme-background-lvl-4
	jn:h-[2.8125rem]
`,He=`
  jn:text-xl
  jn:font-bold
`,Ue=`
	jn:min-h-[5rem]
`,We=`
	jn:py-4
	jn:px-8
`,Ge=e=>{switch(e){case`large`:return`jn:w-[40rem]`;case`xl`:return`jn:w-[76.75rem]`;case`2xl`:return`jn:w-[80%] jn:min-w-[85rem] jn:max-w-[112.5rem]`;default:return`jn:w-[33.625rem]`}},F=({title:e=``,heading:t=``,ariaLabel:n,initialFocus:r,open:i=!1,closeable:a=!0,closeOnEsc:o=!0,closeOnBackdropClick:s=!1,disableCloseButton:c,size:u=`small`,unpad:d=!1,className:p=``,children:m,modalFooter:h,confirmButtonLabel:g=``,cancelButtonLabel:_=``,confirmButtonIcon:v,confirmButtonVariant:ee,cancelButtonIcon:te,disableConfirmButton:ne=!1,disableCancelButton:y=!1,onConfirm:b,onCancel:x,...S})=>{let re=()=>`juno-modal-`+(0,N.useId)(),[ie,C]=(0,N.useState)(i),[w,ae]=(0,N.useState)(a),[T,oe]=(0,N.useState)(s),[se,ce]=(0,N.useState)(o);(0,N.useEffect)(()=>{C(i)},[i]),(0,N.useEffect)(()=>{ae(a)},[a]),(0,N.useEffect)(()=>{oe(s)},[s]),(0,N.useEffect)(()=>{ce(o)},[o]);let E=e=>{b&&b(e)},le=e=>{C(!1),x&&x(e)},D=e=>{w&&se&&(C(!1),x&&x(e))},O=e=>{T?(C(!1),x&&x(e)):e.stopPropagation()},ue=f(),de=(0,N.useRef)(null),k=e||t,pe=k?re():void 0,me=()=>k==null||k===!1?null:typeof k==`string`?(0,P.jsx)(`h1`,{className:`juno-modal-title ${He}`,id:pe,children:k}):(0,P.jsx)(`div`,{className:`juno-modal-title ${He}`,id:pe,children:k});return(0,P.jsx)(P.Fragment,{children:ie&&(0,Le.createPortal)((0,P.jsx)(`div`,{className:`juno-modal-container ${ze}`,onClick:O,children:(0,P.jsx)(Re.FocusTrap,{focusTrapOptions:{initialFocus:r,clickOutsideDeactivates:T,fallbackFocus:()=>de.current,allowOutsideClick:!0,escapeDeactivates:e=>(D(e),!1)},children:(0,P.jsxs)(`div`,{className:`juno-modal ${Ge(u)} ${Be} ${p}`,role:`dialog`,ref:de,...S,"aria-labelledby":pe,"aria-label":n,children:[(0,P.jsxs)(`div`,{className:`juno-modal-header ${Ve} ${k?`jn:justify-between`:`jn:justify-end`}`,children:[me(),w?(0,P.jsx)(l,{icon:`close`,onClick:le,disabled:y||c}):``]}),(0,P.jsx)(`div`,{className:`juno-modal-content ${Ue} ${d?``:We}`,children:m}),w?h||(0,P.jsx)(fe,{confirmButtonLabel:g,cancelButtonLabel:_,confirmButtonIcon:v,confirmButtonVariant:ee,cancelButtonIcon:te,disableConfirmButton:ne,disableCancelButton:y,onConfirm:b?E:void 0,onCancel:le}):null]})})}),ue||document.body)})};try{F.displayName=`Modal`,F.__docgenInfo={description:"The `Modal` component provides a flexible dialog window for user interactions,\nsupporting titles, dismissal controls, sizing options, and comprehensive footer configurations.",displayName:`Modal`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Modal/Modal.component.tsx`,methods:[],props:{title:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:"The title of the modal. This will be rendering as the heading of the modal, and the modal's `aria-labelledby` attribute will reference the title/heading element. If the modal does not have `title` or `heading`, use `ariaLabel` to provide an accessible name for the modal.",name:`title`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},heading:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:"Also the title of the modal, just for API flexibility. If both `title` and `heading` are passed, `title` will take precedence.",name:`heading`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},ariaLabel:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:"The aria-label of the modal. Use only if the modal does NOT have a `title` or `heading`.",name:`ariaLabel`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`string`}},initialFocus:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`By default, the first element in the tab order of the Modal content will be focussed. To specify an element to be focussed when the modal opens, pass an element, DOM node, or selector string.`,name:`initialFocus`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`string | HTMLElement | SVGElement`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Whether the modal will be open.`,name:`open`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},closeable:{defaultValue:{value:`true`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Whether the modal can be closed using an "X"-Button at the top right.`,name:`closeable`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`true`},type:{name:`boolean`}},closeOnBackdropClick:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Whether the modal should be closed when the backdrop is clicked. Essentially 'un-modals' the modal.`,name:`closeOnBackdropClick`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},disableCloseButton:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Determines whether the close button should be disabled.`,name:`disableCloseButton`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},closeOnEsc:{defaultValue:{value:`true`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Whether the modal can be closed by hitting the ESC key.`,name:`closeOnEsc`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`true`},type:{name:`boolean`}},size:{defaultValue:{value:`small`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`The Modal size, determines the aesthetics of the modal.`,name:`size`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`small`},type:{name:`enum`,raw:`ModalSize`,value:[{value:`"small"`},{value:`"large"`},{value:`"xl"`},{value:`"2xl"`}]}},unpad:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Pass to remove default padding from the content area of the modal.`,name:`unpad`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Custom className to add to the modal for additional styling.`,name:`className`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`""`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:"The children of the modal. These will be rendered as the modal content. To render custom buttons at the bottom, see `modalFooter` below.",name:`children`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},modalFooter:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:"Optional. Pass a `<ModalFooter />` component with custom content as required. Will default to using the `<ModalFooter/>` component internally.",name:`modalFooter`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},confirmButtonLabel:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Pass a label to render a confirm button and a Cancel button.`,name:`confirmButtonLabel`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`""`},type:{name:`string`}},cancelButtonLabel:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Pass a label for the cancel button. Defaults to "Cancel".`,name:`cancelButtonLabel`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`"Cancel"`},type:{name:`string`}},confirmButtonIcon:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Pass an Icon name to show on the confirming action button.`,name:`confirmButtonIcon`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`enum`,raw:`"info" | "warning" | "danger" | "error" | "success" | "search" | "help" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 44 more ...`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"search"`},{value:`"help"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"home"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"upload"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},confirmButtonVariant:{defaultValue:{value:`"primary"`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`The variant of the confirm button.`,name:`confirmButtonVariant`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`"primary"`},type:{name:`enum`,raw:`ButtonVariant`,value:[{value:`"default"`},{value:`"primary"`},{value:`"primary-danger"`},{value:`"subdued"`}]}},cancelButtonIcon:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Pass an icon name to show on the cancelling button.`,name:`cancelButtonIcon`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`enum`,raw:`"info" | "warning" | "danger" | "error" | "success" | "search" | "help" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 44 more ...`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"search"`},{value:`"help"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"home"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"upload"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},disableConfirmButton:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Determines whether the confirm action button should be disabled.`,name:`disableConfirmButton`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},disableCancelButton:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`Determines whether the cancel action button should be disabled.`,name:`disableCancelButton`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},onConfirm:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`A handler to execute once the modal is confirmed by clicking the confirm button if exists. Note that we do not close the modal automatically.`,name:`onConfirm`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLElement>`}},onCancel:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`}],description:`A handler to execute once the modal is cancelled or dismissed using the x-Close button,  Cancel-button or pressing ESC.`,name:`onCancel`,parent:{fileName:`ui-components/src/components/Modal/Modal.component.tsx`,name:`ModalProps`},required:!1,tags:{},type:{name:`((_event: MouseEvent<HTMLElement, MouseEvent> | KeyboardEvent) => void)`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-modal-modal--docs
{@link ModalProps }`}}}catch{}})),qe=t((()=>{oe()})),Je=t((()=>{ce()})),I,L,R,Ye,z,B,V,Xe,H,Ze,U,W,G,Qe,K,q,J,Y,X,Z,Q,$,$e,et,tt;t((()=>{I=n(s()),Ke(),k(),g(),v(),te(),qe(),Je(),pe(),u(),m(),ue(),de(),ae(),T(),L=o(),R=({closeOnConfirm:e,...t})=>{let[n,r]=(0,I.useState)(!1),i=()=>{r(!0)},a=()=>{r(!1)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h,{label:`Open Modal`,variant:`primary`,onClick:i}),(0,L.jsx)(F,{open:n,onCancel:a,onConfirm:e?a:void 0,...t})]})},Ye={title:`Components/Modal/Modal`,component:F,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},modalFooter:{control:!1,table:{type:{summary:`ReactElement`}}}},parameters:{actions:{argTypesRegex:null},docs:{source:{transform:e=>e.replace(/jn:/g,``)}}},decorators:[e=>(0,L.jsx)(p,{children:(0,L.jsx)(`div`,{className:`jn:m-20 jn:flex jn:justify-center`,children:(0,L.jsx)(e,{})})})]},z={render:R,parameters:{docs:{description:{story:`A modal dialog for simple acknowledgement.`}}},args:{title:`Maintenance Mode Enabled for 'cluster-eu-1'`,children:`Automated alerts and health checks for this cluster have been suspended. Turn off maintenance mode to resume normal monitoring.`}},B={render:R,parameters:{docs:{description:{story:`A modal dialog for confirming or canceling a non-destructive action.`}}},args:{title:`Assign Role to user@example.com`,children:`Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Assign Role`}},V={render:R,parameters:{docs:{description:{story:`A user-initiated low risk destructive action. Note the Confirm button is always enabled.`}}},args:{title:`Delete Snapshot 'snap-20240115'`,children:`Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Delete Snapshot`}},Xe=e=>{let[t,n]=(0,I.useState)(!1),[r,i]=(0,I.useState)(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h,{label:`Open Modal`,variant:`primary`,onClick:()=>n(!0)}),(0,L.jsx)(F,{open:t,onCancel:()=>{n(!1),i(!1)},disableConfirmButton:!r,...e,children:(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{className:`jn:mb-4`,children:`Removing user 'jsmith' will immediately revoke all their access to project resources.`}),(0,L.jsx)(ee,{label:`Check the box to confirm removing user 'jsmith'`,checked:r,onChange:e=>i(e.target.checked)})]})})]})},H={render:Xe,parameters:{docs:{description:{story:`A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox.`}}},args:{title:`Remove User 'jsmith'`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Remove User`}},Ze=e=>{let[t,n]=(0,I.useState)(!1),[r,i]=(0,I.useState)(``);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h,{label:`Open Modal`,variant:`primary`,onClick:()=>n(!0)}),(0,L.jsx)(F,{open:t,onCancel:()=>{n(!1),i(``)},disableConfirmButton:r!==`DELETE`,...e,children:(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{className:`jn:mb-4`,children:`This will permanently delete the project 'production-eu' and all associated resources, including clusters, configurations, and stored data.`}),(0,L.jsx)(`p`,{className:`jn:mb-4`,children:`This action cannot be undone.`}),(0,L.jsx)(`p`,{className:`jn:mb-4`,children:`Type 'DELETE' (all caps, no quotes) in the field below to confirm:`}),(0,L.jsx)(O,{placeholder:`Type 'DELETE' to confirm deletion`,value:r,onChange:e=>i(e.target.value)})]})})]})},U={render:Ze,parameters:{docs:{description:{story:`A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase.`}}},args:{title:`Delete Project 'production-eu'`,confirmButtonVariant:`primary-danger`,confirmButtonLabel:`Delete Project`}},W={render:R,parameters:{docs:{description:{story:"In order to disable all buttons on a Modal, both `disableConfirmButton` and `disableCancelButton` need to be set to `true`."}}},args:{title:`Assign Role to user@example.com`,children:`Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Assign Role`,disableConfirmButton:!0,disableCancelButton:!0}},G={render:R,parameters:{docs:{description:{story:"In order to auto-focus an interactive element in the modal, assign an `id` and pass this `id` to the `initialFocus` prop."}}},args:{title:`Enter a Phrase`,children:(0,L.jsx)(O,{id:`focusOnMe`}),initialFocus:`#focusOnMe`}},Qe=()=>(0,L.jsxs)(se,{children:[(0,L.jsx)(E,{children:(0,L.jsx)(O,{label:`First Name`,id:`firstname`})}),(0,L.jsx)(E,{children:(0,L.jsx)(O,{label:`Last Name`,id:`lastname`})}),(0,L.jsx)(E,{children:(0,L.jsx)(O,{label:`Email`,id:`email`,type:`email`})}),(0,L.jsx)(E,{children:(0,L.jsx)(O,{label:`Password`,id:`password`,type:`password`})}),(0,L.jsx)(E,{children:(0,L.jsx)(O,{label:`Retype Password`,id:`retype-password`,type:`password`})}),(0,L.jsx)(E,{children:(0,L.jsxs)(le,{label:`Role`,children:[(0,L.jsx)(D,{children:`Private Person`}),(0,L.jsx)(D,{children:`Small Business`})]})}),(0,L.jsx)(E,{children:(0,L.jsxs)(C,{label:`Country`,children:[(0,L.jsx)(w,{value:`germany`,children:`Germany`},`DE`),(0,L.jsx)(w,{value:`uk`,children:`United Kingdom`},`UK`),(0,L.jsx)(w,{value:`us`,children:`USA`},`US`)]})})]}),K={render:R,parameters:{docs:{description:{story:`A default size Modal with a form.`}}},args:{title:`Default Modal Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,L.jsx)(Qe,{})}},q={render:R,parameters:{docs:{description:{story:"A `large` size Modal with a form."}}},args:{size:`large`,title:`Large Modal Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,L.jsx)(Qe,{})}},J={render:R,parameters:{docs:{description:{story:"An `xl` size Modal with a form."}}},args:{size:`xl`,title:`XL With Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,L.jsx)(Qe,{})}},Y={render:R,parameters:{docs:{description:{story:"An `2xl` size Modal with a form."}}},args:{size:`2xl`,title:`2XL With Form`,initialFocus:`#firstname`,cancelButtonLabel:`Cancel`,confirmButtonLabel:`Register now`,children:(0,L.jsx)(Qe,{})}},X={render:R,parameters:{docs:{description:{story:"A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set `closeable` to `false`."}}},args:{title:`Non-Closeable Modal`,children:`Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.`,closeable:!1}},Z={render:R,parameters:{docs:{description:{story:"Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set `closeOnBackdropClick` to `true` to enable this behaviour."}}},args:{title:`Close on Backdrop Click`,children:(0,L.jsx)(`p`,{children:`This Modal closes when clicking the backdrop.`}),closeOnBackdropClick:!0}},Q={render:R,parameters:{docs:{description:{story:"In order to specifically disable the X-Close button, set `disableCloseButton`to `true`."}}},args:{title:`Disabled X-Close Button Modal`,children:(0,L.jsx)(`p`,{children:`This Modal has a disabled top-right close button.`}),disableCloseButton:!0,cancelButtonLabel:`Cancel`}},$={render:R,parameters:{docs:{description:{story:"For complex use cases that require more than a Confirm and a Cancel button, a custom `ModalFooter` with buttons and additional elements can be passed to `Modal`."}}},args:{title:`Modal with Custom ModalFooter`,size:`large`,children:(0,L.jsx)(`p`,{children:`This Modal renders a custom footer with three buttons and a custom hint.`}),modalFooter:(0,L.jsxs)(fe,{className:`jn:justify-between jn:items-center`,children:[(0,L.jsxs)(`span`,{children:[(0,L.jsx)(l,{icon:`info`,className:`jn:mr-1`}),`Have some custom content`]}),(0,L.jsxs)(_,{children:[(0,L.jsx)(h,{variant:`subdued`,children:`Cancel`}),(0,L.jsx)(h,{variant:`primary-danger`,children:`Destroy`}),(0,L.jsx)(h,{variant:`primary`,children:`Proceed`})]})]})}},$e={render:R,args:{title:`Modal with Select inside`,size:`small`,children:(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(le,{children:[(0,L.jsx)(D,{value:`1`,label:`Option 1`},`o-1`),(0,L.jsx)(D,{value:`2`,label:`Option 2`},`o-2`),(0,L.jsx)(D,{value:`3`,label:`Option 3`},`o-3`)]})})}},et={render:R,args:{title:(0,L.jsx)(`p`,{children:`Hello`}),size:`small`,children:(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(C,{children:[(0,L.jsx)(w,{value:`Rhubarb`,children:`Rhubarb`},`1`),(0,L.jsx)(w,{value:`Carrots`,children:`Carrots`},`2`),(0,L.jsx)(w,{value:`Spinach`,children:`Spinach`},`3`),(0,L.jsx)(w,{value:`Tomatoes`,children:`Tomatoes`},`4`)]})})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`{
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
}`,...$e.parameters?.docs?.source}}},et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
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
}`,...et.parameters?.docs?.source}}},tt=[`Default`,`SimpleConfirmNonDestructiveAction`,`ConfirmDesctructiveActionLowRisk`,`ConfirmDesctructiveActionMediumRisk`,`ConfirmDestructiveActionHighRisk`,`SimpleConfirmDialogWithDisabledButtons`,`AutoFocusDialog`,`DefaultWithForm`,`LargeWithForm`,`XLWithForm`,`XXLWithForm`,`NonCloseable`,`CloseOnBackdropClick`,`DisabledCloseButton`,`CustomModalFooter`,`TestSelectInModal`,`TestComboBoxInModal`]}))();export{G as AutoFocusDialog,Z as CloseOnBackdropClick,V as ConfirmDesctructiveActionLowRisk,H as ConfirmDesctructiveActionMediumRisk,U as ConfirmDestructiveActionHighRisk,$ as CustomModalFooter,z as Default,K as DefaultWithForm,Q as DisabledCloseButton,q as LargeWithForm,X as NonCloseable,W as SimpleConfirmDialogWithDisabledButtons,B as SimpleConfirmNonDestructiveAction,et as TestComboBoxInModal,$e as TestSelectInModal,J as XLWithForm,Y as XXLWithForm,tt as __namedExportsOrder,Ye as default};