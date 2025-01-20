import{r as l,e as y,R as L}from"./index-DysCNOs_.js";var q=Object.defineProperty,_=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t,n)=>(_(e,typeof t!="symbol"?t+"":t,n),n);let B=class{constructor(){N(this,"current",this.detect()),N(this,"handoffState","pending"),N(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},h=new B,w=(e,t)=>{h.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function O(e){let t=l.useRef(e);return w(()=>{t.current=e},[e]),t}let K=function(e){let t=O(e);return y.useCallback((...n)=>t.current(...n),[t])};function V(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function A(){let e=[],t={addEventListener(n,r,u,o){return n.addEventListener(r,u,o),t.add(()=>n.removeEventListener(r,u,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return V(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,u){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:u}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=A();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let u of e.splice(r,1))u()}},dispose(){for(let n of e.splice(0))n()}};return t}function ge(){let[e]=l.useState(A);return l.useEffect(()=>()=>e.dispose(),[e]),e}function G(){let e=typeof document>"u";return"useSyncExternalStore"in L?(t=>t.useSyncExternalStore)(L)(()=>()=>{},()=>!1,()=>!e):!1}function W(){let e=G(),[t,n]=l.useState(h.isHandoffComplete);return t&&h.isHandoffComplete===!1&&n(!1),l.useEffect(()=>{t!==!0&&n(!0)},[t]),l.useEffect(()=>h.handoff(),[]),e?!1:t}var P;let Ee=(P=y.useId)!=null?P:function(){let e=W(),[t,n]=y.useState(e?()=>h.nextId():null);return w(()=>{t===null&&n(h.nextId())},[t]),t!=null?""+t:void 0};function F(e,t,...n){if(e in t){let u=t[e];return typeof u=="function"?u(...n):u}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(u=>`"${u}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,F),r}function x(e){return h.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let $=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var X=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(X||{}),Y=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Y||{}),z=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(z||{});function C(e=document.body){return e==null?[]:Array.from(e.querySelectorAll($)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var R=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(R||{});function k(e,t=0){var n;return e===((n=x(e))==null?void 0:n.body)?!1:F(t,{0(){return e.matches($)},1(){let r=e;for(;r!==null;){if(r.matches($))return!0;r=r.parentElement}return!1}})}function ye(e){let t=x(e);A().nextFrame(()=>{t&&!k(t.activeElement,0)&&Q(e)})}var J=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(J||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Q(e){e==null||e.focus({preventScroll:!0})}let Z=["textarea","input"].join(",");function ee(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Z))!=null?n:!1}function te(e,t=n=>n){return e.slice().sort((n,r)=>{let u=t(n),o=t(r);if(u===null||o===null)return 0;let i=u.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function we(e,t){return ne(C(),t,{relativeTo:e})}function ne(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?te(e):e:C(e);u.length>0&&i.length>1&&(i=i.filter(m=>!u.includes(m))),r=r??o.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},a=0,c=i.length,d;do{if(a>=c||a+c<=0)return 0;let m=s+a;if(t&16)m=(m+c)%c;else{if(m<0)return 3;if(m>=c)return 1}d=i[m],d==null||d.focus(p),a+=f}while(d!==o.activeElement);return t&6&&ee(d)&&d.select(),2}function re(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function oe(){return/Android/gi.test(window.navigator.userAgent)}function ue(){return re()||oe()}function g(e,t,n){let r=O(t);l.useEffect(()=>{function u(o){r.current(o)}return document.addEventListener(e,u,n),()=>document.removeEventListener(e,u,n)},[e,n])}function ie(e,t,n){let r=O(t);l.useEffect(()=>{function u(o){r.current(o)}return window.addEventListener(e,u,n),()=>window.removeEventListener(e,u,n)},[e,n])}function be(e,t,n=!0){let r=l.useRef(!1);l.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function u(i,f){if(!r.current||i.defaultPrevented)return;let s=f(i);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let p=function a(c){return typeof c=="function"?a(c()):Array.isArray(c)||c instanceof Set?c:[c]}(e);for(let a of p){if(a===null)continue;let c=a instanceof HTMLElement?a:a.current;if(c!=null&&c.contains(s)||i.composed&&i.composedPath().includes(c))return}return!k(s,R.Loose)&&s.tabIndex!==-1&&i.preventDefault(),t(i,s)}let o=l.useRef(null);g("pointerdown",i=>{var f,s;r.current&&(o.current=((s=(f=i.composedPath)==null?void 0:f.call(i))==null?void 0:s[0])||i.target)},!0),g("mousedown",i=>{var f,s;r.current&&(o.current=((s=(f=i.composedPath)==null?void 0:f.call(i))==null?void 0:s[0])||i.target)},!0),g("click",i=>{ue()||o.current&&(u(i,()=>o.current),o.current=null)},!0),g("touchend",i=>u(i,()=>i.target instanceof HTMLElement?i.target:null),!0),ie("blur",i=>u(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Ne(...e){return l.useMemo(()=>x(...e),[...e])}function j(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Se(e,t){let[n,r]=l.useState(()=>j(e));return w(()=>{r(j(e))},[e.type,e.as]),w(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let H=Symbol();function $e(e,t=!0){return Object.assign(e,{[H]:t})}function Oe(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=K(r=>{for(let u of t.current)u!=null&&(typeof u=="function"?u(r):u.current=r)});return e.every(r=>r==null||(r==null?void 0:r[H]))?void 0:n}function I(e){return[e.screenX,e.screenY]}function Ae(){let e=l.useRef([-1,-1]);return{wasMoved(t){let n=I(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=I(t)}}}function M(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),le=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(le||{});function Fe({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:o=!0,name:i,mergeRefs:f}){f=f??ae;let s=U(t,e);if(o)return E(s,n,r,i,f);let p=u??0;if(p&2){let{static:a=!1,...c}=s;if(a)return E(c,n,r,i,f)}if(p&1){let{unmount:a=!0,...c}=s;return F(a?0:1,{0(){return null},1(){return E({...c,hidden:!0,style:{display:"none"}},n,r,i,f)}})}return E(s,n,r,i,f)}function E(e,t={},n,r,u){let{as:o=n,children:i,refName:f="ref",...s}=S(e,["unmount","static"]),p=e.ref!==void 0?{[f]:e.ref}:{},a=typeof i=="function"?i(t):i;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let c={};if(t){let d=!1,m=[];for(let[b,v]of Object.entries(t))typeof v=="boolean"&&(d=!0),v===!0&&m.push(b);d&&(c["data-headlessui-state"]=m.join(" "))}if(o===l.Fragment&&Object.keys(D(s)).length>0){if(!l.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let d=a.props,m=typeof(d==null?void 0:d.className)=="function"?(...v)=>M(d==null?void 0:d.className(...v),s.className):M(d==null?void 0:d.className,s.className),b=m?{className:m}:{};return l.cloneElement(a,Object.assign({},U(a.props,D(S(s,["ref"]))),c,p,{ref:u(a.ref,p.ref)},b))}return l.createElement(o,Object.assign({},S(s,["ref"]),o!==l.Fragment&&p,o!==l.Fragment&&c),a)}function ae(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function U(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let u in r)u.startsWith("on")&&typeof r[u]=="function"?(n[u]!=null||(n[u]=[]),n[u].push(r[u])):t[u]=r[u];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](u,...o){let i=n[r];for(let f of i){if((u instanceof Event||(u==null?void 0:u.nativeEvent)instanceof Event)&&u.defaultPrevented)return;f(u,...o)}}});return t}function xe(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function D(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function S(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let T=l.createContext(null);T.displayName="OpenClosedContext";var ce=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ce||{});function Te(){return l.useContext(T)}function Le({value:e,children:t}){return y.createElement(T.Provider,{value:e},t)}function Pe(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&fe(n)?!1:r}function fe(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function de(e){throw new Error("Unexpected object: "+e)}var me=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(me||{});function je(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),u=r??-1;switch(e.focus){case 0:{for(let o=0;o<n.length;++o)if(!t.resolveDisabled(n[o],o,n))return o;return r}case 1:{for(let o=u-1;o>=0;--o)if(!t.resolveDisabled(n[o],o,n))return o;return r}case 2:{for(let o=u+1;o<n.length;++o)if(!t.resolveDisabled(n[o],o,n))return o;return r}case 3:{for(let o=n.length-1;o>=0;--o)if(!t.resolveDisabled(n[o],o,n))return o;return r}case 4:{for(let o=0;o<n.length;++o)if(t.resolveId(n[o],o,n)===e.id)return o;return r}case 5:return null;default:de(e)}}var pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(pe||{});export{W as A,le as B,Fe as C,ye as D,M as E,Ee as I,X as M,se as O,R as T,xe as U,we as _,K as a,be as b,Se as c,ce as d,Te as e,O as f,Ae as g,k as h,me as i,pe as j,A as k,w as l,je as m,te as n,x as o,ge as p,Ne as q,Pe as r,Le as s,ue as t,F as u,V as v,$e as w,D as x,Oe as y,h as z};
