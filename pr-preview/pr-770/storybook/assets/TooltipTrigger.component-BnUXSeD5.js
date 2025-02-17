import{j as V}from"./jsx-runtime-D6fbYt3N.js";import{r as i,R as me,e as B}from"./index-DysCNOs_.js";import{I as Re}from"./Icon.component-BeY45KNK.js";import{g as J,u as be,c as Te,o as we,f as Ce,b as xe}from"./floating-ui.react-dom-t1-XbZXo.js";import"./index-DxCGxluL.js";function ve(e){return ge(e)?(e.nodeName||"").toLowerCase():"#document"}function W(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Pe(e){var t;return(t=(ge(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ge(e){return e instanceof Node||e instanceof W(e).Node}function N(e){return e instanceof Element||e instanceof W(e).Element}function G(e){return e instanceof HTMLElement||e instanceof W(e).HTMLElement}function ne(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof W(e).ShadowRoot}function _e(e){return["html","body","#document"].includes(ve(e))}function ke(e){return W(e).getComputedStyle(e)}function Me(e){if(ve(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ne(e)&&e.host||Pe(e);return ne(t)?t.host:t}function Ne(e){let t=e.activeElement;for(;((n=t)==null||(o=n.shadowRoot)==null?void 0:o.activeElement)!=null;){var n,o;t=t.shadowRoot.activeElement}return t}function H(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&ne(n)){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}return!1}function Ie(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Se(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:o}=t;return n+"/"+o}).join(" "):navigator.userAgent}function De(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(Ie())||t.test(Se()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Le(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Y(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function je(e){return"nativeEvent"in e}function Oe(e){return e.matches("html,body")}function O(e){return(e==null?void 0:e.ownerDocument)||document}function U(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function $e(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Fe="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Ae(e){return G(e)&&e.matches(Fe)}function oe(e){return i.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}var q=typeof document<"u"?i.useLayoutEffect:i.useEffect;let Q=!1,Ve=0;const ie=()=>"floating-ui-"+Ve++;function Be(){const[e,t]=i.useState(()=>Q?ie():void 0);return q(()=>{e==null&&t(ie())},[]),i.useEffect(()=>{Q||(Q=!0)},[]),e}const Ke=me.useId,he=Ke||Be;function He(){const e=new Map;return{emit(t,n){var o;(o=e.get(t))==null||o.forEach(r=>r(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(r=>r!==n))||[])}}}const qe=i.createContext(null),We=i.createContext(null),ye=()=>{var e;return((e=i.useContext(qe))==null?void 0:e.id)||null},re=()=>i.useContext(We);function se(e){return"data-floating-ui-"+e}function ue(e){const t=i.useRef(e);return q(()=>{t.current=e}),t}const le=se("safe-polygon");function Z(e,t,n){return n&&!Y(n)?0:typeof e=="number"?e:e==null?void 0:e[t]}function Ue(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,dataRef:r,events:s,elements:{domReference:c,floating:u},refs:l}=e,{enabled:f=!0,delay:T=0,handleClose:R=null,mouseOnly:v=!1,restMs:a=0,move:b=!0}=t,g=re(),M=ye(),x=ue(R),C=ue(T),I=i.useRef(),h=i.useRef(),P=i.useRef(),D=i.useRef(),A=i.useRef(!0),K=i.useRef(!1),L=i.useRef(()=>{}),$=i.useCallback(()=>{var p;const m=(p=r.current.openEvent)==null?void 0:p.type;return(m==null?void 0:m.includes("mouse"))&&m!=="mousedown"},[r]);i.useEffect(()=>{if(!f)return;function p(){clearTimeout(h.current),clearTimeout(D.current),A.current=!0}return s.on("dismiss",p),()=>{s.off("dismiss",p)}},[f,s]),i.useEffect(()=>{if(!f||!x.current||!n)return;function p(k){$()&&o(!1,k)}const m=O(u).documentElement;return m.addEventListener("mouseleave",p),()=>{m.removeEventListener("mouseleave",p)}},[u,n,o,f,x,r,$]);const y=i.useCallback(function(p,m){m===void 0&&(m=!0);const k=Z(C.current,"close",I.current);k&&!P.current?(clearTimeout(h.current),h.current=setTimeout(()=>o(!1,p),k)):m&&(clearTimeout(h.current),o(!1,p))},[C,o]),_=i.useCallback(()=>{L.current(),P.current=void 0},[]),d=i.useCallback(()=>{if(K.current){const p=O(l.floating.current).body;p.style.pointerEvents="",p.removeAttribute(le),K.current=!1}},[l]);return i.useEffect(()=>{if(!f)return;function p(){return r.current.openEvent?["click","mousedown"].includes(r.current.openEvent.type):!1}function m(E){if(clearTimeout(h.current),A.current=!1,v&&!Y(I.current)||a>0&&Z(C.current,"open")===0)return;const w=Z(C.current,"open",I.current);w?h.current=setTimeout(()=>{o(!0,E)},w):o(!0,E)}function k(E){if(p())return;L.current();const w=O(u);if(clearTimeout(D.current),x.current){n||clearTimeout(h.current),P.current=x.current({...e,tree:g,x:E.clientX,y:E.clientY,onClose(){d(),_(),y(E)}});const F=P.current;w.addEventListener("mousemove",F),L.current=()=>{w.removeEventListener("mousemove",F)};return}(I.current==="touch"?!H(u,E.relatedTarget):!0)&&y(E)}function j(E){p()||x.current==null||x.current({...e,tree:g,x:E.clientX,y:E.clientY,onClose(){d(),_(),y(E)}})(E)}if(N(c)){const E=c;return n&&E.addEventListener("mouseleave",j),u==null||u.addEventListener("mouseleave",j),b&&E.addEventListener("mousemove",m,{once:!0}),E.addEventListener("mouseenter",m),E.addEventListener("mouseleave",k),()=>{n&&E.removeEventListener("mouseleave",j),u==null||u.removeEventListener("mouseleave",j),b&&E.removeEventListener("mousemove",m),E.removeEventListener("mouseenter",m),E.removeEventListener("mouseleave",k)}}},[c,u,f,e,v,a,b,y,_,d,o,n,g,C,x,r]),q(()=>{var p;if(f&&n&&(p=x.current)!=null&&p.__options.blockPointerEvents&&$()){const j=O(u).body;if(j.setAttribute(le,""),j.style.pointerEvents="none",K.current=!0,N(c)&&u){var m,k;const E=c,w=g==null||(m=g.nodesRef.current.find(S=>S.id===M))==null||(k=m.context)==null?void 0:k.elements.floating;return w&&(w.style.pointerEvents=""),E.style.pointerEvents="auto",u.style.pointerEvents="auto",()=>{E.style.pointerEvents="",u.style.pointerEvents=""}}}},[f,n,M,u,c,g,x,r,$]),q(()=>{n||(I.current=void 0,_(),d())},[n,_,d]),i.useEffect(()=>()=>{_(),clearTimeout(h.current),clearTimeout(D.current),d()},[f,c,_,d]),i.useMemo(()=>{if(!f)return{};function p(m){I.current=m.pointerType}return{reference:{onPointerDown:p,onPointerEnter:p,onMouseMove(m){n||a===0||(clearTimeout(D.current),D.current=setTimeout(()=>{A.current||o(!0,m.nativeEvent)},a))}},floating:{onMouseEnter(){clearTimeout(h.current)},onMouseLeave(m){s.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),y(m.nativeEvent,!1)}}}},[s,f,a,n,o,y])}function ee(e,t){let n=e.filter(r=>{var s;return r.parentId===t&&((s=r.context)==null?void 0:s.open)}),o=n;for(;o.length;)o=e.filter(r=>{var s;return(s=o)==null?void 0:s.some(c=>{var u;return r.parentId===c.id&&((u=r.context)==null?void 0:u.open)})}),n=n.concat(o);return n}function ae(e){return G(e.target)&&e.target.tagName==="BUTTON"}function ce(e){return Ae(e)}function Xe(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,dataRef:r,elements:{domReference:s}}=e,{enabled:c=!0,event:u="click",toggle:l=!0,ignoreMouse:f=!1,keyboardHandlers:T=!0}=t,R=i.useRef(),v=i.useRef(!1);return i.useMemo(()=>c?{reference:{onPointerDown(a){R.current=a.pointerType},onMouseDown(a){a.button===0&&(Y(R.current,!0)&&f||u!=="click"&&(n&&l&&(!r.current.openEvent||r.current.openEvent.type==="mousedown")?o(!1,a.nativeEvent):(a.preventDefault(),o(!0,a.nativeEvent))))},onClick(a){if(u==="mousedown"&&R.current){R.current=void 0;return}Y(R.current,!0)&&f||(n&&l&&(!r.current.openEvent||r.current.openEvent.type==="click")?o(!1,a.nativeEvent):o(!0,a.nativeEvent))},onKeyDown(a){R.current=void 0,!(a.defaultPrevented||!T||ae(a))&&(a.key===" "&&!ce(s)&&(a.preventDefault(),v.current=!0),a.key==="Enter"&&o(!(n&&l),a.nativeEvent))},onKeyUp(a){a.defaultPrevented||!T||ae(a)||ce(s)||a.key===" "&&v.current&&(v.current=!1,o(!(n&&l),a.nativeEvent))}}}:{},[c,r,u,f,T,s,l,n,o])}const Ye=me.useInsertionEffect,ze=Ye||(e=>e());function X(e){const t=i.useRef(()=>{});return ze(()=>{t.current=e}),i.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}const Ge={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Je={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Qe=e=>{var t,n;return{escapeKeyBubbles:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePressBubbles:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function Ze(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,events:r,nodeId:s,elements:{reference:c,domReference:u,floating:l},dataRef:f}=e,{enabled:T=!0,escapeKey:R=!0,outsidePress:v=!0,outsidePressEvent:a="pointerdown",referencePress:b=!1,referencePressEvent:g="pointerdown",ancestorScroll:M=!1,bubbles:x}=t,C=re(),I=ye()!=null,h=X(typeof v=="function"?v:()=>!1),P=typeof v=="function"?h:v,D=i.useRef(!1),{escapeKeyBubbles:A,outsidePressBubbles:K}=Qe(x),L=X(y=>{if(!n||!T||!R||y.key!=="Escape")return;const _=C?ee(C.nodesRef.current,s):[];if(!A&&(y.stopPropagation(),_.length>0)){let d=!0;if(_.forEach(p=>{var m;if((m=p.context)!=null&&m.open&&!p.context.dataRef.current.__escapeKeyBubbles){d=!1;return}}),!d)return}r.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),o(!1,je(y)?y.nativeEvent:y)}),$=X(y=>{const _=D.current;if(D.current=!1,_||typeof P=="function"&&!P(y))return;const d=$e(y),p="["+se("inert")+"]",m=O(l).querySelectorAll(p);let k=N(d)?d:null;for(;k&&!_e(k);){const w=Me(k);if(w===O(l).body||!N(w))break;k=w}if(m.length&&N(d)&&!Oe(d)&&!H(d,l)&&Array.from(m).every(w=>!H(k,w)))return;if(G(d)&&l){const w=d.clientWidth>0&&d.scrollWidth>d.clientWidth,S=d.clientHeight>0&&d.scrollHeight>d.clientHeight;let F=S&&y.offsetX>d.clientWidth;if(S&&ke(d).direction==="rtl"&&(F=y.offsetX<=d.offsetWidth-d.clientWidth),F||w&&y.offsetY>d.clientHeight)return}const j=C&&ee(C.nodesRef.current,s).some(w=>{var S;return U(y,(S=w.context)==null?void 0:S.elements.floating)});if(U(y,l)||U(y,u)||j)return;const E=C?ee(C.nodesRef.current,s):[];if(E.length>0){let w=!0;if(E.forEach(S=>{var F;if((F=S.context)!=null&&F.open&&!S.context.dataRef.current.__outsidePressBubbles){w=!1;return}}),!w)return}r.emit("dismiss",{type:"outsidePress",data:{returnFocus:I?{preventScroll:!0}:De(y)||Le(y)}}),o(!1,y)});return i.useEffect(()=>{if(!n||!T)return;f.current.__escapeKeyBubbles=A,f.current.__outsidePressBubbles=K;function y(p){o(!1,p)}const _=O(l);R&&_.addEventListener("keydown",L),P&&_.addEventListener(a,$);let d=[];return M&&(N(u)&&(d=J(u)),N(l)&&(d=d.concat(J(l))),!N(c)&&c&&c.contextElement&&(d=d.concat(J(c.contextElement)))),d=d.filter(p=>{var m;return p!==((m=_.defaultView)==null?void 0:m.visualViewport)}),d.forEach(p=>{p.addEventListener("scroll",y,{passive:!0})}),()=>{R&&_.removeEventListener("keydown",L),P&&_.removeEventListener(a,$),d.forEach(p=>{p.removeEventListener("scroll",y)})}},[f,l,u,c,R,P,a,n,o,M,T,A,K,L,$]),i.useEffect(()=>{D.current=!1},[P,a]),i.useMemo(()=>T?{reference:{onKeyDown:L,[Ge[g]]:y=>{b&&(r.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),o(!1,y.nativeEvent))}},floating:{onKeyDown:L,[Je[a]]:()=>{D.current=!0}}}:{},[T,r,b,a,g,o,L])}function et(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:o,nodeId:r}=e,[s,c]=i.useState(null),u=((t=e.elements)==null?void 0:t.reference)||s,l=be(e),f=re(),T=X((h,P)=>{h&&(v.current.openEvent=P),o==null||o(h,P)}),R=i.useRef(null),v=i.useRef({}),a=i.useState(()=>He())[0],b=he(),g=i.useCallback(h=>{const P=N(h)?{getBoundingClientRect:()=>h.getBoundingClientRect(),contextElement:h}:h;l.refs.setReference(P)},[l.refs]),M=i.useCallback(h=>{(N(h)||h===null)&&(R.current=h,c(h)),(N(l.refs.reference.current)||l.refs.reference.current===null||h!==null&&!N(h))&&l.refs.setReference(h)},[l.refs]),x=i.useMemo(()=>({...l.refs,setReference:M,setPositionReference:g,domReference:R}),[l.refs,M,g]),C=i.useMemo(()=>({...l.elements,domReference:u}),[l.elements,u]),I=i.useMemo(()=>({...l,refs:x,elements:C,dataRef:v,nodeId:r,floatingId:b,events:a,open:n,onOpenChange:T}),[l,r,b,a,n,T,x,C]);return q(()=>{const h=f==null?void 0:f.nodesRef.current.find(P=>P.id===r);h&&(h.context=I)}),i.useMemo(()=>({...l,context:I,refs:x,elements:C}),[l,x,C,I])}function tt(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,dataRef:r,events:s,refs:c,elements:{floating:u,domReference:l}}=e,{enabled:f=!0,keyboardOnly:T=!0}=t,R=i.useRef(""),v=i.useRef(!1),a=i.useRef();return i.useEffect(()=>{if(!f)return;const g=O(u).defaultView||window;function M(){!n&&G(l)&&l===Ne(O(l))&&(v.current=!0)}return g.addEventListener("blur",M),()=>{g.removeEventListener("blur",M)}},[u,l,n,f]),i.useEffect(()=>{if(!f)return;function b(g){(g.type==="referencePress"||g.type==="escapeKey")&&(v.current=!0)}return s.on("dismiss",b),()=>{s.off("dismiss",b)}},[s,f]),i.useEffect(()=>()=>{clearTimeout(a.current)},[]),i.useMemo(()=>f?{reference:{onPointerDown(b){let{pointerType:g}=b;R.current=g,v.current=!!(g&&T)},onMouseLeave(){v.current=!1},onFocus(b){var g;v.current||b.type==="focus"&&((g=r.current.openEvent)==null?void 0:g.type)==="mousedown"&&U(r.current.openEvent,l)||o(!0,b.nativeEvent)},onBlur(b){v.current=!1;const g=b.relatedTarget,M=N(g)&&g.hasAttribute(se("focus-guard"))&&g.getAttribute("data-type")==="outside";a.current=setTimeout(()=>{H(c.floating.current,g)||H(l,g)||M||o(!1,b.nativeEvent)})}}}:{},[f,T,l,c,r,o])}function te(e,t,n){const o=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(r=>r?r[n]:null).concat(e).reduce((r,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(u.indexOf("on")===0){if(o.has(u)||o.set(u,[]),typeof l=="function"){var f;(f=o.get(u))==null||f.push(l),r[u]=function(){for(var T,R=arguments.length,v=new Array(R),a=0;a<R;a++)v[a]=arguments[a];return(T=o.get(u))==null?void 0:T.map(b=>b(...v)).find(b=>b!==void 0)}}}else r[u]=l}),r),{})}}function nt(e){e===void 0&&(e=[]);const t=e,n=i.useCallback(s=>te(s,e,"reference"),t),o=i.useCallback(s=>te(s,e,"floating"),t),r=i.useCallback(s=>te(s,e,"item"),e.map(s=>s==null?void 0:s.item));return i.useMemo(()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:r}),[n,o,r])}function ot(e,t){t===void 0&&(t={});const{open:n,floatingId:o}=e,{enabled:r=!0,role:s="dialog"}=t,c=he();return i.useMemo(()=>{const u={id:o,role:s};return r?s==="tooltip"?{reference:{"aria-describedby":n?o:void 0},floating:u}:{reference:{"aria-expanded":n?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":n?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c}},floating:{...u,...s==="menu"&&{"aria-labelledby":c}}}:{}},[r,s,n,o,c])}const rt=({initialOpen:e=!1,variant:t,placement:n="top",triggerEvent:o="click",open:r,onOpenChange:s,disabled:c=!1}={})=>{const[u,l]=i.useState(e),f=r??u,T=s??l,R=et({placement:n,open:f,onOpenChange:T,whileElementsMounted:Te,middleware:[we(5),Ce(),xe()]}),v=R.context,a=Xe(v,{enabled:r==null&&c===!1&&o==="click"}),b=Ue(v,{move:!1,enabled:r==null&&c===!1&&o==="hover"}),g=tt(v,{enabled:r==null}),M=Ze(v),x=ot(v,{role:"tooltip"}),C=nt([a,b,g,M,x]);return B.useMemo(()=>({open:f,setOpen:T,variant:t,disabled:c,...C,...R}),[f,T,t,c,C,R])},Ee=B.createContext(null),z=()=>{const e=B.useContext(Ee);if(e==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e},fe=({initialOpen:e=!1,placement:t="top",variant:n,open:o,triggerEvent:r="click",disabled:s=!1,children:c,...u})=>{const l=rt({initialOpen:e,placement:t,variant:n,open:o,triggerEvent:r,disabled:s,props:u});return V.jsx(Ee.Provider,{value:l,children:c})};try{z.displayName="useTooltipState",z.__docgenInfo={description:"This hook holds the TooltipContext.",displayName:"useTooltipState",props:{}}}catch{}try{fe.displayName="Tooltip",fe.__docgenInfo={description:`A tooltip component that optionally comes in the various semantic flavors (e.g. info, warning, ...). It can be used as an uncontrolled component where
you configure the event type that should open the tooltip (click or hover) or alternatively you can use it as a controlled component where you set the
open state and handle the events that open/close the tooltip yourself.`,displayName:"Tooltip",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"danger"'},{value:'"info"'},{value:'"warning"'}]}},triggerEvent:{defaultValue:{value:"click"},description:"Uncontrolled Tooltip: Choose which event should trigger the opening of the tooltip (click or hover)",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},placement:{defaultValue:{value:"top"},description:"Tooltip placement in relation to trigger, default is top",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'}]}},disabled:{defaultValue:{value:"false"},description:"Disable the tooltip. If this is true, the uncontrolled tooltip can't be opened anymore and the cursor hovered over the trigger will be the default cursor instead of the pointer cursor",name:"disabled",required:!1,type:{name:"boolean"}},initialOpen:{defaultValue:{value:"false"},description:"Set whether tooltip should be initially rendered opened or closed. This is only evaluated if Tooltip is in uncontrolled mode",name:"initialOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:`Whether the Tooltip is open. By passing this prop you turn the Tooltip into a controlled component, which means
you also have to take care of opening and closing it. In this case the triggerEvent prop is ignored since you're handling the trigger yourself`,name:"open",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Pass the TooltipTrigger and TooltipContent elements as children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const st=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
  jn-items-center
    jn-p-2
    jn-rounded
    jn-drop-shadow-[0_0_4px_rgba(0,0,0,0.15)]
`,it=`
    jn-mx-4
    jn-max-w-full
`,ut=`
    jn-shrink-0
`,lt=e=>{switch(e){case"error":return"dangerous";default:return e}},de=B.forwardRef(function({className:t="",children:n,...o},r){const s=z(),c=oe([s.refs.setFloating,r]),u=s.variant;return V.jsx(V.Fragment,{children:s.open&&V.jsxs("div",{className:`juno-tooltip juno-tooltip-${u} ${st} ${t}`,ref:c,style:{...s.floatingStyles},...s.getFloatingProps(o),children:[u&&V.jsx(Re,{icon:lt(u),color:`jn-text-theme-${u}`,className:`juno-tooltip-popover-icon ${ut}`}),V.jsx("p",{className:`${it}`,children:n})]})})});try{de.displayName="TooltipContent",de.__docgenInfo={description:"Put content for a tooltip here. See Tooltip for more in-depth explanation and examples.",displayName:"TooltipContent",props:{children:{defaultValue:null,description:"Pass child nodes to display in the tooltip",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a className to render to the icon button",name:"className",required:!1,type:{name:"string"}}}}}catch{}const pe=B.forwardRef(function({children:t,asChild:n=!1,className:o="",...r},s){const c=z(),u=oe([c.refs.setReference,s]);if(n&&B.isValidElement(t)){const l=t.props,f=l.ref,R={ref:oe([c.refs.setReference,s,f]),...r,...l,"data-state":c.open?"open":"closed",className:l.className+`${c.disabled&&" jn-cursor-default"}`},v=c.getReferenceProps(R);return B.cloneElement(t,v)}return V.jsx("button",{ref:u,"data-state":c.open?"open":"closed",...c.getReferenceProps(r),className:`${o} ${c.disabled&&" jn-cursor-default"}`,children:t})});try{pe.displayName="TooltipTrigger",pe.__docgenInfo={description:"This is the trigger element for a tooltip. See Tooltip for more in-depth explanation and examples.",displayName:"TooltipTrigger",props:{asChild:{defaultValue:{value:"false"},description:"If true, the child you passed to the TooltipTrigger is rendered as the trigger element, instead of the default trigger component. This is useful if you e.g. want to use a Button or Icon as the trigger.",name:"asChild",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Pass child nodes to display in the tooltip",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a className to render to the trigger element",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{fe as T,pe as a,de as b};
