import{r as o,e as S,R as Qe}from"./index-DysCNOs_.js";import{r as Ze}from"./index-BIiW_AJL.js";import{l as U,b as T,v as Ke,U as G,y as K,w as Je,q as je,z as Pe,A as ue,C as J,g as O,a as ce,p as Ne,s as V,c as Ie,d as I,B as M,O as et,E as we,k as tt}from"./keyboard-RYHMaleb.js";import{u as rt,i as Q,c as nt,d as ot,e as st,h as at,j as lt,k as it,l as ut}from"./floating-ui.react-dom-DW-4-pTb.js";function fe(){let e=o.useRef(!1);return U(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ct(e){let t=T(e),r=o.useRef(!1);o.useEffect(()=>(r.current=!1,()=>{r.current=!0,Ke(()=>{r.current&&t()})}),[t])}let ft=o.createContext(!1);function dt(){return o.useContext(ft)}function pt(e){let t=dt(),r=o.useContext(Oe),n=je(e),[s,c]=o.useState(()=>{if(!t&&r!==null||Pe.isServer)return null;let a=n==null?void 0:n.getElementById("headlessui-portal-root");if(a)return a;if(n===null)return null;let l=n.createElement("div");return l.setAttribute("id","headlessui-portal-root"),n.body.appendChild(l)});return o.useEffect(()=>{s!==null&&(n!=null&&n.body.contains(s)||n==null||n.body.appendChild(s))},[s,n]),o.useEffect(()=>{t||r!==null&&c(r.current)},[r,c,t]),s}let mt=o.Fragment;function ht(e,t){let r=e,n=o.useRef(null),s=K(Je(i=>{n.current=i}),t),c=je(n),a=pt(n),[l]=o.useState(()=>{var i;return Pe.isServer?null:(i=c==null?void 0:c.createElement("div"))!=null?i:null}),u=o.useContext(bt),f=ue();return U(()=>{!a||!l||a.contains(l)||(l.setAttribute("data-headlessui-portal",""),a.appendChild(l))},[a,l]),U(()=>{if(l&&u)return u.register(l)},[u,l]),ct(()=>{var i;!a||!l||(l instanceof Node&&a.contains(l)&&a.removeChild(l),a.childNodes.length<=0&&((i=a.parentElement)==null||i.removeChild(a)))}),f?!a||!l?null:Ze.createPortal(J({ourProps:{ref:s},theirProps:r,defaultTag:mt,name:"Portal"}),l):null}let vt=o.Fragment,Oe=o.createContext(null);function gt(e,t){let{target:r,...n}=e,s={ref:K(t)};return S.createElement(Oe.Provider,{value:r},J({ourProps:s,theirProps:n,defaultTag:vt,name:"Popover.Group"}))}let bt=o.createContext(null),yt=G(ht),wt=G(gt),Et=Object.assign(yt,{Group:wt});function xt(e=0){let[t,r]=o.useState(e),n=fe(),s=o.useCallback(u=>{n.current&&r(f=>f|u)},[t,n]),c=o.useCallback(u=>!!(t&u),[t]),a=o.useCallback(u=>{n.current&&r(f=>f&~u)},[r,n]),l=o.useCallback(u=>{n.current&&r(f=>f^u)},[r]);return{flags:t,addFlag:s,hasFlag:c,removeFlag:a,toggleFlag:l}}function Ct(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function oe(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Rt(e,t){let r=ce();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:s}=getComputedStyle(e),[c,a]=[n,s].map(u=>{let[f=0]=u.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,m)=>m-i);return f}),l=c+a;if(l!==0){r.group(f=>{f.setTimeout(()=>{t(),f.dispose()},l),f.addEventListener(e,"transitionrun",i=>{i.target===i.currentTarget&&f.dispose()})});let u=r.addEventListener(e,"transitionend",f=>{f.target===f.currentTarget&&(t(),u())})}else t();return r.add(()=>t()),r.dispose}function Ft(e,t,r,n){let s=r?"enter":"leave",c=ce(),a=n!==void 0?Ct(n):()=>{};s==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let l=O(s,{enter:()=>t.enter,leave:()=>t.leave}),u=O(s,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),f=O(s,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return se(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),oe(e,...t.base,...l,...f),c.nextFrame(()=>{se(e,...t.base,...l,...f),oe(e,...t.base,...l,...u),Rt(e,()=>(se(e,...t.base,...l),oe(e,...t.base,...t.entered),a()))}),c.dispose}function St({immediate:e,container:t,direction:r,classes:n,onStart:s,onStop:c}){let a=fe(),l=Ne(),u=V(r);U(()=>{e&&(u.current="enter")},[e]),U(()=>{let f=ce();l.add(f.dispose);let i=t.current;if(i&&u.current!=="idle"&&a.current)return f.dispose(),s.current(u.current),f.add(Ft(i,n.current,u.current==="enter",()=>{f.dispose(),c.current(u.current)})),f.dispose},[r])}function N(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let ee=o.createContext(null);ee.displayName="TransitionContext";var $t=(e=>(e.Visible="visible",e.Hidden="hidden",e))($t||{});function Tt(){let e=o.useContext(ee);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function jt(){let e=o.useContext(te);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let te=o.createContext(null);te.displayName="NestingContext";function re(e){return"children"in e?re(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ae(e,t){let r=V(e),n=o.useRef([]),s=fe(),c=Ne(),a=T((d,p=M.Hidden)=>{let g=n.current.findIndex(({el:h})=>h===d);g!==-1&&(O(p,{[M.Unmount](){n.current.splice(g,1)},[M.Hidden](){n.current[g].state="hidden"}}),c.microTask(()=>{var h;!re(n)&&s.current&&((h=r.current)==null||h.call(r))}))}),l=T(d=>{let p=n.current.find(({el:g})=>g===d);return p?p.state!=="visible"&&(p.state="visible"):n.current.push({el:d,state:"visible"}),()=>a(d,M.Unmount)}),u=o.useRef([]),f=o.useRef(Promise.resolve()),i=o.useRef({enter:[],leave:[],idle:[]}),m=T((d,p,g)=>{u.current.splice(0),t&&(t.chains.current[p]=t.chains.current[p].filter(([h])=>h!==d)),t==null||t.chains.current[p].push([d,new Promise(h=>{u.current.push(h)})]),t==null||t.chains.current[p].push([d,new Promise(h=>{Promise.all(i.current[p].map(([w,C])=>C)).then(()=>h())})]),p==="enter"?f.current=f.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(p)):g(p)}),v=T((d,p,g)=>{Promise.all(i.current[p].splice(0).map(([h,w])=>w)).then(()=>{var h;(h=u.current.shift())==null||h()}).then(()=>g(p))});return o.useMemo(()=>({children:n,register:l,unregister:a,onStart:m,onStop:v,wait:f,chains:i}),[l,a,n,m,v,i,f])}function Pt(){}let Nt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Ee(e){var t;let r={};for(let n of Nt)r[n]=(t=e[n])!=null?t:Pt;return r}function It(e){let t=o.useRef(Ee(e));return o.useEffect(()=>{t.current=Ee(e)},[e]),t}let Ot="div",Le=et.RenderStrategy;function At(e,t){var r,n;let{beforeEnter:s,afterEnter:c,beforeLeave:a,afterLeave:l,enter:u,enterFrom:f,enterTo:i,entered:m,leave:v,leaveFrom:d,leaveTo:p,...g}=e,h=o.useRef(null),w=K(h,t),C=(r=g.unmount)==null||r?M.Unmount:M.Hidden,{show:b,appear:E,initial:x}=Tt(),[R,F]=o.useState(b?"visible":"hidden"),A=jt(),{register:L,unregister:D}=A;o.useEffect(()=>L(h),[L,h]),o.useEffect(()=>{if(C===M.Hidden&&h.current){if(b&&R!=="visible"){F("visible");return}return O(R,{hidden:()=>D(h),visible:()=>L(h)})}},[R,h,L,D,b,C]);let H=V({base:N(g.className),enter:N(u),enterFrom:N(f),enterTo:N(i),entered:N(m),leave:N(v),leaveFrom:N(d),leaveTo:N(p)}),j=It({beforeEnter:s,afterEnter:c,beforeLeave:a,afterLeave:l}),k=ue();o.useEffect(()=>{if(k&&R==="visible"&&h.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[h,R,k]);let ve=x&&!E,ne=E&&b&&x,ge=!k||ve?"idle":b?"enter":"leave",_=xt(0),be=T(P=>O(P,{enter:()=>{_.addFlag(I.Opening),j.current.beforeEnter()},leave:()=>{_.addFlag(I.Closing),j.current.beforeLeave()},idle:()=>{}})),ye=T(P=>O(P,{enter:()=>{_.removeFlag(I.Opening),j.current.afterEnter()},leave:()=>{_.removeFlag(I.Closing),j.current.afterLeave()},idle:()=>{}})),W=Ae(()=>{F("hidden"),D(h)},A),Y=o.useRef(!1);St({immediate:ne,container:h,classes:H,direction:ge,onStart:V(P=>{Y.current=!0,W.onStart(h,P,be)}),onStop:V(P=>{Y.current=!1,W.onStop(h,P,ye),P==="leave"&&!re(W)&&(F("hidden"),D(h))})});let B=g,Ge={ref:w};return ne?B={...B,className:we(g.className,...H.current.enter,...H.current.enterFrom)}:Y.current&&(B.className=we(g.className,(n=h.current)==null?void 0:n.className),B.className===""&&delete B.className),S.createElement(te.Provider,{value:W},S.createElement(tt,{value:O(R,{visible:I.Open,hidden:I.Closed})|_.flags},J({ourProps:Ge,theirProps:B,defaultTag:Ot,features:Le,visible:R==="visible",name:"Transition.Child"})))}function Lt(e,t){let{show:r,appear:n=!1,unmount:s=!0,...c}=e,a=o.useRef(null),l=K(a,t);ue();let u=Ie();if(r===void 0&&u!==null&&(r=(u&I.Open)===I.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[f,i]=o.useState(r?"visible":"hidden"),m=Ae(()=>{i("hidden")}),[v,d]=o.useState(!0),p=o.useRef([r]);U(()=>{v!==!1&&p.current[p.current.length-1]!==r&&(p.current.push(r),d(!1))},[p,r]);let g=o.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);o.useEffect(()=>{if(r)i("visible");else if(!re(m))i("hidden");else{let b=a.current;if(!b)return;let E=b.getBoundingClientRect();E.x===0&&E.y===0&&E.width===0&&E.height===0&&i("hidden")}},[r,m]);let h={unmount:s},w=T(()=>{var b;v&&d(!1),(b=e.beforeEnter)==null||b.call(e)}),C=T(()=>{var b;v&&d(!1),(b=e.beforeLeave)==null||b.call(e)});return S.createElement(te.Provider,{value:m},S.createElement(ee.Provider,{value:g},J({ourProps:{...h,as:o.Fragment,children:S.createElement(De,{ref:l,...h,...c,beforeEnter:w,beforeLeave:C})},theirProps:{},defaultTag:o.Fragment,features:Le,visible:f==="visible",name:"Transition"})))}function Dt(e,t){let r=o.useContext(ee)!==null,n=Ie()!==null;return S.createElement(S.Fragment,null,!r&&n?S.createElement(le,{ref:t,...e}):S.createElement(De,{ref:t,...e}))}let le=G(Lt),De=G(At),kt=G(Dt),xe=Object.assign(le,{Child:kt,Root:le});const ke={...Qe},Mt=ke.useInsertionEffect,Ht=Mt||(e=>e());function _t(e){const t=o.useRef(()=>{});return Ht(()=>{t.current=e}),o.useCallback(function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.current==null?void 0:t.current(...n)},[])}var ie=typeof document<"u"?o.useLayoutEffect:o.useEffect;let Ce=!1,Bt=0;const Re=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Bt++;function Ut(){const[e,t]=o.useState(()=>Ce?Re():void 0);return ie(()=>{e==null&&t(Re())},[]),o.useEffect(()=>{Ce=!0},[]),e}const Wt=ke.useId,Yt=Wt||Ut;function zt(){const e=new Map;return{emit(t,r){var n;(n=e.get(t))==null||n.forEach(s=>s(r))},on(t,r){e.set(t,[...e.get(t)||[],r])},off(t,r){var n;e.set(t,((n=e.get(t))==null?void 0:n.filter(s=>s!==r))||[])}}}const Vt=o.createContext(null),Xt=o.createContext(null),qt=()=>{var e;return((e=o.useContext(Vt))==null?void 0:e.id)||null},Gt=()=>o.useContext(Xt);function Qt(e){const{open:t=!1,onOpenChange:r,elements:n}=e,s=Yt(),c=o.useRef({}),[a]=o.useState(()=>zt()),l=qt()!=null,[u,f]=o.useState(n.reference),i=_t((d,p,g)=>{c.current.openEvent=d?p:void 0,a.emit("openchange",{open:d,event:p,reason:g,nested:l}),r==null||r(d,p,g)}),m=o.useMemo(()=>({setPositionReference:f}),[]),v=o.useMemo(()=>({reference:u||n.reference||null,floating:n.floating||null,domReference:n.reference}),[u,n.reference,n.floating]);return o.useMemo(()=>({dataRef:c,open:t,onOpenChange:i,elements:v,events:a,floatingId:s,refs:m}),[t,i,v,a,s,m])}function Zt(e){e===void 0&&(e={});const{nodeId:t}=e,r=Qt({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||r,s=n.elements,[c,a]=o.useState(null),[l,u]=o.useState(null),i=(s==null?void 0:s.domReference)||c,m=o.useRef(null),v=Gt();ie(()=>{i&&(m.current=i)},[i]);const d=rt({...e,elements:{...s,...l&&{reference:l}}}),p=o.useCallback(b=>{const E=Q(b)?{getBoundingClientRect:()=>b.getBoundingClientRect(),contextElement:b}:b;u(E),d.refs.setReference(E)},[d.refs]),g=o.useCallback(b=>{(Q(b)||b===null)&&(m.current=b,a(b)),(Q(d.refs.reference.current)||d.refs.reference.current===null||b!==null&&!Q(b))&&d.refs.setReference(b)},[d.refs]),h=o.useMemo(()=>({...d.refs,setReference:g,setPositionReference:p,domReference:m}),[d.refs,g,p]),w=o.useMemo(()=>({...d.elements,domReference:i}),[d.elements,i]),C=o.useMemo(()=>({...d,...n,refs:h,elements:w,nodeId:t}),[d,h,w,t,n]);return ie(()=>{n.dataRef.current.floatingContext=C;const b=v==null?void 0:v.nodesRef.current.find(E=>E.id===t);b&&(b.context=C)}),o.useMemo(()=>({...d,context:C,refs:h,elements:w}),[d,h,w,C])}var Kt=Object.defineProperty,Jt=(e,t,r)=>t in e?Kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fe=(e,t,r)=>Jt(e,typeof t!="symbol"?t+"":t,r),Me={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function er(){if(Se)return z;Se=1;var e=S,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(l,u,f){var i,m={},v=null,d=null;f!==void 0&&(v=""+f),u.key!==void 0&&(v=""+u.key),u.ref!==void 0&&(d=u.ref);for(i in u)n.call(u,i)&&!c.hasOwnProperty(i)&&(m[i]=u[i]);if(l&&l.defaultProps)for(i in u=l.defaultProps,u)m[i]===void 0&&(m[i]=u[i]);return{$$typeof:t,type:l,key:v,ref:d,props:m,_owner:s.current}}return z.Fragment=r,z.jsx=a,z.jsxs=a,z}Me.exports=er();var y=Me.exports;function tr(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function $e(e,t){const r=tr(e);return Math.round(t*r)/r}class rr{constructor(){Fe(this,"current",this.detect()),Fe(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}const X=new rr,He=(e,t)=>{X.isServer?o.useEffect(e,t):o.useLayoutEffect(e,t)},ae={serverHandoffComplete:!1};function nr(){const[e,t]=o.useState(ae.serverHandoffComplete);return o.useEffect(()=>{e!==!0&&t(!0)},[e]),o.useEffect(()=>{ae.serverHandoffComplete===!1&&(ae.serverHandoffComplete=!0)},[]),e}const or=S.useId??function(){const e=nr(),[t,r]=S.useState(e?()=>X.nextId():null);return He(()=>{t===null&&r(X.nextId())},[t]),t!=null?`${t}`:void 0};function sr(e,t,r,n){o.useEffect(()=>{const s=[];(typeof n.offset=="number"||typeof n.offset=="object"||typeof n.offset=="function")&&s.push(ot(n.offset)),(n.flip===!0||typeof n.flip=="number"||typeof n.flip=="object")&&s.push(st({padding:typeof n.flip=="number"?n.flip:void 0,...typeof n.flip=="object"?n.flip:{}})),(n.shift===!0||typeof n.shift=="number"||typeof n.shift=="object")&&s.push(at({padding:typeof n.shift=="number"?n.shift:void 0,...typeof n.shift=="object"?n.shift:{}})),(n.autoPlacement===!0||typeof n.autoPlacement=="object")&&s.push(lt(typeof n.autoPlacement=="object"?n.autoPlacement:void 0)),s.push(...typeof n.middleware=="function"?n.middleware({referenceEl:t.reference,floatingEl:t.floating}):n.middleware||[]),(n.arrow===!0||typeof n.arrow=="number")&&s.push(it({element:r,padding:n.arrow===!0?0:n.arrow})),(n.hide===!0||typeof n.hide=="object"||Array.isArray(n.hide))&&(Array.isArray(n.hide)?n.hide:[n.hide]).forEach(c=>{s.push(ut(typeof c=="object"?c:void 0))}),e(s)},[n.offset,n.shift,n.flip,n.arrow,n.autoPlacement,n.hide,n.middleware])}function ar(e,t,r){o.useEffect(()=>{if(e&&X.isClient&&typeof ResizeObserver<"u"&&t.current&&t.current instanceof Element){const n=new ResizeObserver(([s])=>{const c=s.borderBoxSize.reduce((a,{inlineSize:l})=>a+l,0);r(c)});return n.observe(t.current),()=>{n.disconnect(),r(null)}}},[])}const lr=e=>{switch(e){case"top":return"origin-bottom";case"bottom":return"origin-top";case"left":return"origin-right";case"right":return"origin-left";case"top-start":case"right-end":return"origin-bottom-left";case"top-end":case"left-end":return"origin-bottom-right";case"right-start":case"bottom-start":return"origin-top-left";case"left-start":case"bottom-end":return"origin-top-right";default:return"origin-center"}};function ir(e,t){return o.useMemo(()=>typeof e.originClass=="function"?e.originClass(t):typeof e.originClass=="string"?e.originClass:e.tailwindcssOriginClass?lr(t):"",[t,e.originClass,e.tailwindcssOriginClass])}function _e(e,t,...r){if(e in t){const s=t[e];return typeof s=="function"?s(...r):s}const n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_e),n}function Be(e){return X.isServer?null:e instanceof Node?e.ownerDocument:e&&Object.prototype.hasOwnProperty.call(e,"current")&&e.current instanceof Node?e.current.ownerDocument:document}const Te=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ue=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ue||{});function ur(e,t=0){var r;return e===((r=Be(e))==null?void 0:r.body)?!1:_e(t,{0(){return e.matches(Te)},1(){let n=e;for(;n!==null;){if(n.matches(Te))return!0;n=n.parentElement}return!1}})}function cr(e){const t=o.useRef(e);return He(()=>{t.current=e},[e]),t}function $(e,t,r){const n=cr(t);o.useEffect(()=>{function s(c){n.current(c)}return document.addEventListener(e,s,r),()=>document.removeEventListener(e,s,r)},[e,r])}function fr(e,t,r=!0){const n=o.useRef(!1);o.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function s(a,l){if(!n.current||a.defaultPrevented)return;const u=function i(m){return typeof m=="function"?i(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e),f=l(a);if(f!==null&&f.getRootNode().contains(f)){for(const i of u){if(i===null)continue;const m=i instanceof HTMLElement?i:i.current;if(m!=null&&m.contains(f)||a.composed&&a.composedPath().includes(m))return}return!ur(f,Ue.Loose)&&f.tabIndex!==-1&&a.preventDefault(),t(a,f)}}const c=o.useRef(null);$("mousedown",a=>{var l,u;n.current&&(c.current=((u=(l=a.composedPath)==null?void 0:l.call(a))==null?void 0:u[0])||a.target)},!0),$("click",a=>{c.current&&(s(a,()=>c.current),c.current=null)},!0),$("blur",a=>s(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}const Z=new Map,de=o.createContext(null);de.displayName="ReferenceContext";const pe=o.createContext(null);pe.displayName="FloatingContext";const q=o.createContext(null);q.displayName="ArrowContext";function We(e){const t=o.useContext(de);if(t===null){const r=new Error(`<${e} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,We),r}return t}function Ye(e){const t=o.useContext(pe);if(t===null){const r=new Error(`<${e} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ye),r}return t}function ze(e){const t=o.useContext(q);if(t===null){const r=new Error(`<${e} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ze),r}return t}function Ve(e,t,{key:r,...n},s){const{referenceRef:c}=s,a=t;if(a.as===o.Fragment)return y.jsx(e.type,{...e.props,...n,ref:c},r);const l=a.as||"div";return y.jsx(l,{...n,ref:c,children:y.jsx(e.type,{...e.props})},r)}function me(e,t,{key:r,...n},s){const{floatingRef:c,props:a,mounted:l,setShow:u,referenceHidden:f,escaped:i,placement:m,floatingStyles:v,referenceElWidth:d}=s,p={...a,...t},g=ir(p,m),h={show:l.current?p.show:!1,unmount:e.props.unmount===!1?!1:void 0,enter:`${p.enter||""} ${g}`,enterFrom:`${p.enterFrom||""}`,enterTo:`${p.enterTo||""}`,leave:`${p.leave||""} ${g}`,leaveFrom:`${p.leaveFrom||""}`,leaveTo:`${p.leaveTo||""}`,beforeEnter:()=>{u(!0)},afterLeave:()=>{u(!1)}},w={className:[f?p.referenceHiddenClass:void 0,i?p.escapedClass:void 0].filter(x=>!!x).join(" "),style:{...v,zIndex:p.zIndex||9999}};if(p.adaptiveWidth&&typeof d=="number"){const x={attribute:"width",...typeof p.adaptiveWidth=="object"?p.adaptiveWidth:{}};w.style[x.attribute]=`${d}px`}function C(x){return p.portal?l.current?y.jsx(Et,{children:x}):y.jsx(o.Fragment,{}):x}function b(x){const R={...w,...n,ref:c};if(x.type===o.Fragment)return y.jsx(o.Fragment,{});if(p.as===o.Fragment)return y.jsx(x.type,{...x.props,...R},r);const F=p.as||"div";return y.jsx(F,{...R,children:y.jsx(x.type,{...x.props})},r)}function E(){return l.current?p.transitionChild?y.jsx(xe.Child,{as:o.Fragment,...h,children:y.jsx(e.type,{...e.props})}):y.jsx(xe,{as:o.Fragment,...h,children:y.jsx(e.type,{...e.props})}):y.jsx(o.Fragment,{})}return C(b(E()))}function Xe([e,t],r){var n,s;const c=or(),a=o.useRef(!1),[l,u]=o.useState(),[f,i]=o.useState(void 0),[m,v]=o.useState(void 0),d=o.useRef(null),p=o.useMemo(()=>({show:r.onShow||(()=>{}),hide:r.onHide||(()=>{}),update:r.onUpdate||(()=>{})}),[r.onShow,r.onHide,r.onUpdate]),{placement:g,update:h,refs:w,floatingStyles:C,isPositioned:b,middlewareData:E}=Zt({placement:r.placement||"bottom-start",strategy:r.strategy,middleware:l,transform:r.dialog?!1:r.transform??!1}),[x,R]=o.useState(null);o.useEffect(()=>{a.current=!0},[]),o.useEffect(()=>{e&&!Z.get(c)?(Z.set(c,!0),p.show()):!e&&Z.get(c)&&(Z.delete(c),p.hide())},[e]);const F=o.useCallback(()=>{h(),p.update()},[h,p]);o.useEffect(F,[r.placement,r.strategy,l]),sr(u,w,d,r),o.useEffect(()=>{var j,k;(r.hide===!0||typeof r.hide=="object"||Array.isArray(r.hide))&&(i(((j=E.hide)==null?void 0:j.referenceHidden)||!b),v((k=E.hide)==null?void 0:k.escaped))},[E,r.hide,b]),ar(!!r.adaptiveWidth,w.reference,R),o.useEffect(()=>{if(w.reference.current&&w.floating.current&&e)return r.autoUpdate!==!1?nt(w.reference.current,w.floating.current,F,typeof r.autoUpdate=="object"?r.autoUpdate:void 0):()=>{}},[e,F,w]);const A=o.useRef(!0);o.useEffect(()=>{!(w.reference.current instanceof Element)&&w.reference.current&&w.floating.current&&A.current&&(A.current=!1,F(),window.requestAnimationFrame(()=>{A.current=!0,F()}))},[w]);const L={referenceRef:w.setReference,placement:g},D={floatingRef:w.setFloating,props:r,mounted:a,setShow:t,referenceHidden:f,escaped:m,placement:g,floatingStyles:C,referenceElWidth:x},H={arrowRef:d,placement:g,x:(n=E.arrow)==null?void 0:n.x,y:(s=E.arrow)==null?void 0:s.y};return{referenceApi:L,floatingApi:D,arrowApi:H,placement:g,update:F,refs:w,middlewareData:E}}const qe=o.forwardRef((e,t)=>{const[r,n]=o.useState(e.show??!1),{referenceApi:s,floatingApi:c,arrowApi:a,placement:l}=Xe([r,n],e),u={placement:l},[f,i]=typeof e.children=="function"?e.children(u):e.children;if(!o.isValidElement(f))return console.warn("<Float /> is missing a reference and floating element."),y.jsx(o.Fragment,{});function m(p){if(e.as===o.Fragment||!e.as)return y.jsx(o.Fragment,{children:p});const g=e.as;return y.jsx(g,{ref:t,className:e.className,children:p})}if(e.composable||e.dialog)return m(y.jsx(de.Provider,{value:s,children:y.jsx(pe.Provider,{value:c,children:y.jsx(q.Provider,{value:a,children:typeof e.children=="function"?e.children(u):e.children})})},"FloatingNode"));const v=Ve(f,{as:o.Fragment},{key:"reference-node"},s),d=me(i,{as:e.floatingAs||"div"},{},c);return m([v,y.jsx(q.Provider,{value:a,children:d},"floating-node")])});qe.displayName="Float";function dr(e){if(!e.children)return y.jsx(o.Fragment,{});const t=o.useMemo(()=>{const{as:c,children:a,...l}=e;return l},[e]),r=We("Float.Reference"),{placement:n}=r,s={placement:n};return Ve(typeof e.children=="function"?e.children(s):e.children,{...e,as:e.as||o.Fragment},t,r)}function pr(e){if(!e.children)return y.jsx(o.Fragment,{});const t=o.useMemo(()=>{const{as:c,enter:a,enterFrom:l,enterTo:u,leave:f,leaveFrom:i,leaveTo:m,originClass:v,tailwindcssOriginClass:d,transitionChild:p,children:g,...h}=e;return h},[e]),r=Ye("Float.Content"),{placement:n}=r,s={placement:n};return me(typeof e.children=="function"?e.children(s):e.children,{...e,as:e.as||"div"},t,r)}function mr(e){const{arrowRef:t,placement:r,x:n,y:s}=ze("Float.Arrow"),c=o.useMemo(()=>{const{as:f,offset:i,children:m,...v}=e;return v},[e]),a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]],l={left:t.current&&typeof n=="number"?`${$e(t.current,n)}px`:void 0,top:t.current&&typeof s=="number"?`${$e(t.current,s)}px`:void 0,right:void 0,bottom:void 0,[a]:`${(e.offset??4)*-1}px`,...c.style};if(e.as===o.Fragment){const f={placement:r},i=typeof e.children=="function"?e.children(f):e.children;return!i||!o.isValidElement(i)?y.jsx(o.Fragment,{}):y.jsx(i.type,{...i.props,ref:t,style:l})}const u=e.as||"div";return y.jsx(u,{ref:t,...c,style:l,children:e.children})}function he({onInitial:e,children:t,...r}){const[n,s]=o.useState(r.show??!1),c=o.useMemo(()=>{const{as:v,show:d,placement:p,strategy:g,offset:h,shift:w,flip:C,arrow:b,autoPlacement:E,autoUpdate:x,zIndex:R,enter:F,enterFrom:A,enterTo:L,leave:D,leaveFrom:H,leaveTo:j,originClass:k,tailwindcssOriginClass:ve,portal:ne,transform:ge,middleware:_,onShow:be,onHide:ye,onUpdate:W,...Y}=r;return Y},[r]),{floatingApi:a,arrowApi:l,placement:u,refs:f}=Xe([n,s],r);o.useEffect(()=>{s(r.show??!1)},[r.show]);function i(){n&&s(!1)}if(e({show:n,setShow:s,placement:u,refs:f}),!t)return y.jsx(o.Fragment,{});const m=me(typeof t=="function"?t({placement:u,close:i}):t,{...r,as:r.as||o.Fragment,show:n},c,a);return y.jsx(q.Provider,{value:l,children:m})}function hr(e){const[t,r]=o.useState(!1);function n({setShow:s,refs:c}){$("contextmenu",a=>{a.preventDefault(),c.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:a.clientX,y:a.clientY,top:a.clientY,left:a.clientX,right:a.clientX,bottom:a.clientY}}}),s(!0)}),fr(c.floating,()=>{s(!1)})}return o.useEffect(()=>(r(!0),()=>{r(!1)}),[]),t?y.jsx(he,{flip:!0,...e,show:!1,portal:!0,onInitial:n}):y.jsx(o.Fragment,{})}function vr({globalHideCursor:e,...t}){const[r,n]=o.useState(!1);function s({setShow:c,refs:a}){function l(){c(!0)}function u(){c(!1)}function f(d){a.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:d.clientX,y:d.clientY,top:d.clientY,left:d.clientX,right:d.clientX,bottom:d.clientY}}})}function i(d){l(),f(d)}function m(d){l(),f(d.touches[0])}const v=Be(a.floating);v&&(o.useEffect(()=>{if((e||e===void 0)&&!v.getElementById("headlesui-float-cursor-style")){const d=v.createElement("style");return(v.head||v.getElementsByTagName("head")[0]).appendChild(d),d.id="headlesui-float-cursor-style",d.appendChild(v.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var p;return(p=v.getElementById("headlesui-float-cursor-style"))==null?void 0:p.remove()}}},[e]),"ontouchstart"in window||navigator.maxTouchPoints>0?($("touchstart",m),$("touchend",u),$("touchmove",m)):($("mouseenter",i),$("mouseleave",u),$("mousemove",i)))}return o.useEffect(()=>(n(!0),()=>{n(!1)}),[]),r?y.jsx(he,{...t,portal:!0,className:"headlesui-float-cursor-root",onInitial:s}):y.jsx(o.Fragment,{})}const Er=Object.assign(qe,{Reference:dr,Content:pr,Arrow:mr,Virtual:he,ContextMenu:hr,Cursor:vr});export{Er as S};
