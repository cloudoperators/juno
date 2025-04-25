import{j as s}from"./jsx-runtime-BP6H2k8O.js";import{r as f,e as P}from"./index-DysCNOs_.js";import{v as bt}from"./v4-CtRu48qb.js";import{u as yt,o as It,g as Pt,e as xt,f as St}from"./floating-ui.react-p8NZUn7b.js";import{I as Ze,K as jt}from"./Icon.component-A9eTkufy.js";import{P as et}from"./PortalProvider.component-Dpl-KYct.js";import{L as $,F as wt,y as Z,o as S,b as Et,$ as Ct,c as Tt,w as Ot,W as tt,e as _t,D as k,x as Rt,R as $t,k as kt,d as Dt,f as At,g as Nt,i as X,m as Ft,h as Wt,j as Bt,p as Vt,l as Lt,q as Ht,r as qt,v as Kt,M as zt,z as Gt,t as nt,V as Ut,n as J,K as ot,S as Qt,T as Yt,X as Jt,B as Xt,C as I,E as x,G as Zt,H as he,Y as st,A as ge,O as se,_ as en,J as tn,N as nn}from"./portal-BABn4eeb.js";import{r as F}from"./index-DxJeRO9x.js";import{s as on,a as sn}from"./use-text-value-kHf2xNJv.js";import{F as rn}from"./use-tree-walker-Bq2YyH1P.js";import{B as ue}from"./Button.component-Dj7B4kLM.js";import"./Spinner.component-DWsJM9DM.js";var an=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(an||{}),ln=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ln||{}),un=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e))(un||{});function re(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=en(t(e.items.slice()),u=>u.dataRef.current.domRef.current),l=n?o.indexOf(n):null;return l===-1&&(l=null),{items:o,activeItemIndex:l}}let pn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var n,o,l,u,i;if(e.menuState===1)return e;let m={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===x.Nothing)return{...m,activeItemIndex:null};if(t.focus===x.Specific)return{...m,activeItemIndex:e.items.findIndex(h=>h.id===t.id)};if(t.focus===x.Previous){let h=e.activeItemIndex;if(h!==null){let M=e.items[h].dataRef.current.domRef,r=se(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(r!==null){let c=e.items[r].dataRef.current.domRef;if(((o=M.current)==null?void 0:o.previousElementSibling)===c.current||((l=c.current)==null?void 0:l.previousElementSibling)===null)return{...m,activeItemIndex:r}}}}else if(t.focus===x.Next){let h=e.activeItemIndex;if(h!==null){let M=e.items[h].dataRef.current.domRef,r=se(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(r!==null){let c=e.items[r].dataRef.current.domRef;if(((u=M.current)==null?void 0:u.nextElementSibling)===c.current||((i=c.current)==null?void 0:i.nextElementSibling)===null)return{...m,activeItemIndex:r}}}}let p=re(e),g=se(t,{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:h=>h.id,resolveDisabled:h=>h.dataRef.current.disabled});return{...m,...p,activeItemIndex:g}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),l=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(i=>{var m;return((m=i.dataRef.current.textValue)==null?void 0:m.startsWith(o))&&!i.dataRef.current.disabled}),u=l?e.items.indexOf(l):-1;return u===-1||u===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:u,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=re(e,o=>[...o,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=re(e,o=>{let l=o.findIndex(u=>u.id===t.id);return l!==-1&&o.splice(l,1),o});return{...e,...n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element}},ie=f.createContext(null);ie.displayName="MenuContext";function ee(e){let t=f.useContext(ie);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ee),n}return t}function cn(e,t){return nt(t.type,pn,e,t)}let dn=f.Fragment;function mn(e,t){let{__demoMode:n=!1,...o}=e,l=f.useReducer(cn,{__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:u,itemsElement:i,buttonElement:m},p]=l,g=Z(t);Kt(u===0,[m,i],(y,j)=>{p({type:1}),tn(j,nn.Loose)||(y.preventDefault(),m==null||m.focus())});let h=S(()=>{p({type:1})}),M=f.useMemo(()=>({open:u===0,close:h}),[u,h]),r={ref:g},c=k();return P.createElement(zt,null,P.createElement(ie.Provider,{value:l},P.createElement(Gt,{value:nt(u,{0:X.Open,1:X.Closed})},c({ourProps:r,theirProps:o,slot:M,defaultTag:dn,name:"Menu"}))))}let hn="button";function gn(e,t){var n;let o=f.useId(),{id:l=`headlessui-menu-button-${o}`,disabled:u=!1,autoFocus:i=!1,...m}=e,[p,g]=ee("Menu.Button"),h=wt(),M=Z(t,Et(),S(b=>g({type:7,element:b}))),r=S(b=>{switch(b.key){case I.Space:case I.Enter:case I.ArrowDown:b.preventDefault(),b.stopPropagation(),F.flushSync(()=>g({type:0})),g({type:2,focus:x.First});break;case I.ArrowUp:b.preventDefault(),b.stopPropagation(),F.flushSync(()=>g({type:0})),g({type:2,focus:x.Last});break}}),c=S(b=>{switch(b.key){case I.Space:b.preventDefault();break}}),y=S(b=>{var A;if(Xt(b.currentTarget))return b.preventDefault();u||(p.menuState===0?(F.flushSync(()=>g({type:1})),(A=p.buttonElement)==null||A.focus({preventScroll:!0})):(b.preventDefault(),g({type:0})))}),{isFocusVisible:j,focusProps:O}=Ct({autoFocus:i}),{isHovered:v,hoverProps:_}=Tt({isDisabled:u}),{pressed:C,pressProps:T}=Ot({disabled:u}),D=f.useMemo(()=>({open:p.menuState===0,active:C||p.menuState===0,disabled:u,hover:v,focus:j,autofocus:i}),[p,v,j,C,u,i]),R=tt(h(),{ref:M,id:l,type:_t(e,p.buttonElement),"aria-haspopup":"menu","aria-controls":(n=p.itemsElement)==null?void 0:n.id,"aria-expanded":p.menuState===0,disabled:u||void 0,autoFocus:i,onKeyDown:r,onKeyUp:c,onClick:y},O,_,T);return k()({ourProps:R,theirProps:m,slot:D,defaultTag:hn,name:"Menu.Button"})}let fn="div",Mn=ge.RenderStrategy|ge.Static;function vn(e,t){var n,o;let l=f.useId(),{id:u=`headlessui-menu-items-${l}`,anchor:i,portal:m=!1,modal:p=!0,transition:g=!1,...h}=e,M=Rt(i),[r,c]=ee("Menu.Items"),[y,j]=$t(M),O=kt(),[v,_]=f.useState(null),C=Z(t,M?y:null,S(d=>c({type:8,element:d})),_),T=Dt(r.itemsElement);M&&(m=!0);let D=At(),[R,b]=Nt(g,v,D!==null?(D&X.Open)===X.Open:r.menuState===0);Ft(R,r.buttonElement,()=>{c({type:1})});let A=r.__demoMode?!1:p&&r.menuState===0;Wt(A,T);let ne=r.__demoMode?!1:p&&r.menuState===0;Bt(ne,{allowed:f.useCallback(()=>[r.buttonElement,r.itemsElement],[r.buttonElement,r.itemsElement])});let oe=r.menuState!==0,w=on(oe,r.buttonElement)?!1:R;f.useEffect(()=>{let d=r.itemsElement;d&&r.menuState===0&&d!==(T==null?void 0:T.activeElement)&&d.focus({preventScroll:!0})},[r.menuState,r.itemsElement,T]),rn(r.menuState===0,{container:r.itemsElement,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let N=Vt(),mt=S(d=>{var ce,de,me;switch(N.dispose(),d.key){case I.Space:if(r.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),c({type:3,value:d.key});case I.Enter:if(d.preventDefault(),d.stopPropagation(),c({type:1}),r.activeItemIndex!==null){let{dataRef:vt}=r.items[r.activeItemIndex];(de=(ce=vt.current)==null?void 0:ce.domRef.current)==null||de.click()}st(r.buttonElement);break;case I.ArrowDown:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.Next});case I.ArrowUp:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.Previous});case I.Home:case I.PageUp:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.First});case I.End:case I.PageDown:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.Last});case I.Escape:d.preventDefault(),d.stopPropagation(),F.flushSync(()=>c({type:1})),(me=r.buttonElement)==null||me.focus({preventScroll:!0});break;case I.Tab:d.preventDefault(),d.stopPropagation(),F.flushSync(()=>c({type:1})),Zt(r.buttonElement,d.shiftKey?he.Previous:he.Next);break;default:d.key.length===1&&(c({type:3,value:d.key}),N.setTimeout(()=>c({type:4}),350));break}}),ht=S(d=>{switch(d.key){case I.Space:d.preventDefault();break}}),gt=f.useMemo(()=>({open:r.menuState===0}),[r.menuState]),ft=tt(M?O():{},{"aria-activedescendant":r.activeItemIndex===null||(n=r.items[r.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(o=r.buttonElement)==null?void 0:o.id,id:u,onKeyDown:mt,onKeyUp:ht,role:"menu",tabIndex:r.menuState===0?0:void 0,ref:C,style:{...h.style,...j,"--button-width":Ht(r.buttonElement,!0).width},...Lt(b)}),Mt=k();return P.createElement(qt,{enabled:m?e.static||R:!1},Mt({ourProps:ft,theirProps:h,slot:gt,defaultTag:fn,features:Mn,visible:w,name:"Menu.Items"}))}let bn=f.Fragment;function yn(e,t){let n=f.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:l=!1,...u}=e,[i,m]=ee("Menu.Item"),p=i.activeItemIndex!==null?i.items[i.activeItemIndex].id===o:!1,g=f.useRef(null),h=Z(t,g);J(()=>{if(!i.__demoMode&&i.menuState===0&&p&&i.activationTrigger!==0)return Qt().requestAnimationFrame(()=>{var w,N;(N=(w=g.current)==null?void 0:w.scrollIntoView)==null||N.call(w,{block:"nearest"})})},[i.__demoMode,g,p,i.menuState,i.activationTrigger,i.activeItemIndex]);let M=sn(g),r=f.useRef({disabled:l,domRef:g,get textValue(){return M()}});J(()=>{r.current.disabled=l},[r,l]),J(()=>(m({type:5,id:o,dataRef:r}),()=>m({type:6,id:o})),[r,o]);let c=S(()=>{m({type:1})}),y=S(w=>{if(l)return w.preventDefault();m({type:1}),st(i.buttonElement)}),j=S(()=>{if(l)return m({type:2,focus:x.Nothing});m({type:2,focus:x.Specific,id:o})}),O=Yt(),v=S(w=>{O.update(w),!l&&(p||m({type:2,focus:x.Specific,id:o,trigger:0}))}),_=S(w=>{O.wasMoved(w)&&(l||p||m({type:2,focus:x.Specific,id:o,trigger:0}))}),C=S(w=>{O.wasMoved(w)&&(l||p&&m({type:2,focus:x.Nothing}))}),[T,D]=ot(),[R,b]=Jt(),A=f.useMemo(()=>({active:p,focus:p,disabled:l,close:c}),[p,l,c]),ne={id:o,ref:h,role:"menuitem",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-labelledby":T,"aria-describedby":R,disabled:void 0,onClick:y,onFocus:j,onPointerEnter:v,onMouseEnter:v,onPointerMove:_,onMouseMove:_,onPointerLeave:C,onMouseLeave:C},oe=k();return P.createElement(D,null,P.createElement(b,null,oe({ourProps:ne,theirProps:u,slot:A,defaultTag:bn,name:"Menu.Item"})))}let In="div";function Pn(e,t){let[n,o]=ot(),l=e,u={ref:t,"aria-labelledby":n,role:"group"},i=k();return P.createElement(o,null,i({ourProps:u,theirProps:l,slot:{},defaultTag:In,name:"Menu.Section"}))}let xn="header";function Sn(e,t){let n=f.useId(),{id:o=`headlessui-menu-heading-${n}`,...l}=e,u=Ut();J(()=>u.register(o),[o,u.register]);let i={id:o,ref:t,role:"presentation",...u.props};return k()({ourProps:i,theirProps:l,slot:{},defaultTag:xn,name:"Menu.Heading"})}let jn="div";function wn(e,t){let n=e,o={ref:t,role:"separator"};return k()({ourProps:o,theirProps:n,slot:{},defaultTag:jn,name:"Menu.Separator"})}let En=$(mn),rt=$(gn),at=$(vn),lt=$(yn),Cn=$(Pn),Tn=$(Sn),On=$(wn),_n=Object.assign(En,{Button:rt,Items:at,Item:lt,Section:Cn,Heading:Tn,Separator:On});const{addons:Rn}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:$n}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:fe}=__STORYBOOK_MODULE_GLOBAL__;var kn="storybook/actions",Dn=`${kn}/action-event`,ae={depth:10,clearOnStoryChange:!0,limit:50},ut=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:ut(n,t)},An=e=>!!(typeof e=="object"&&e&&ut(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Nn=e=>{if(An(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),o=n==null?void 0:n.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(o.constructor.prototype)}),t}return e},Fn=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?bt():Date.now().toString(36)+Math.random().toString(36).substring(2);function Wn(e,t={}){let n={...ae,...t},o=function(...l){var M,r;if(t.implicit){let c=(M="__STORYBOOK_PREVIEW__"in fe?fe.__STORYBOOK_PREVIEW__:void 0)==null?void 0:M.storyRenders.find(y=>y.phase==="playing"||y.phase==="rendering");if(c){let y=!((r=window==null?void 0:window.FEATURES)!=null&&r.disallowImplicitActionsInRenderV8),j=new $n({phase:c.phase,name:e,deprecated:y});if(y)console.warn(j);else throw j}}let u=Rn.getChannel(),i=Fn(),m=5,p=l.map(Nn),g=l.length>1?p:p[0],h={id:i,count:0,data:{name:e,args:g},options:{...n,maxDepth:m+(n.depth||3),allowFunction:n.allowFunction||!1}};u.emit(Dn,h)};return o.isAction=!0,o.implicit=t.implicit,o}var E=(...e)=>{let t=ae,n=e;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(t={...ae,...n.pop()});let o=n[0];(n.length!==1||typeof o=="string")&&(o={},n.forEach(u=>{o[u]=u}));let l={};return Object.keys(o).forEach(u=>{l[u]=Wn(o[u],t)}),l};const Bn=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,it=`
  jn-cursor-not-allowed
  jn-opacity-50
`,Vn=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,Ln=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Hn=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,qn=`
  jn-text-sm
  jn-p-2
`,Kn=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,zn=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,Gn=`
  jn-inline-block
  jn-mr-2
`,Un=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,Qn=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,Yn=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,Jn=`
  jn-inline-flex
`,pt=f.createContext(null),te=()=>{const e=f.useContext(pt);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},a=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:l="normal",onClose:u,onOpen:i,...m})=>{const[p,g]=f.useState(!1),h=f.useRef(p),{refs:M,floatingStyles:r,update:c}=yt({placement:"bottom-start",middleware:[It(4),Pt(),xt({padding:8})],whileElementsMounted:St});f.useEffect(()=>{p!==h.current&&(p?i==null||i():u==null||u()),h.current=p},[p,i,u]);const y=P.Children.toArray(e),j=y.some(v=>P.isValidElement(v)&&v.type===le),O=y.find(v=>P.isValidElement(v)&&v.type===ct);return s.jsx(_n,{as:"div",className:`juno-popupmenu ${t}`,...m,children:({open:v,close:_})=>(f.useEffect(()=>{v!==p&&(g(v),v&&c())},[v]),s.jsxs(pt.Provider,{value:{isOpen:p,close:_,menuSize:l},children:[s.jsxs("div",{ref:M.setReference,className:`juno-popupmenu-float-reference-wrapper ${Jn}`,children:[!j&&s.jsx(a.Toggle,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?it:Bn}`,disabled:n,children:s.jsx(Ze,{icon:o})}),y.map((C,T)=>P.isValidElement(C)&&C.type===le?P.cloneElement(C,{key:T}):null)]}),p&&s.jsx(et.Portal,{children:s.jsx("div",{ref:M.setFloating,style:r,className:"juno-popupmenu-float-content-wrapper",children:O})})]}))})},le=({as:e="button",disabled:t=!1,children:n,className:o="",...l})=>s.jsx(rt,{as:e,className:`juno-popupmenu-toggle ${t&&it} ${o}`,disabled:t,...l,children:n}),ct=({children:e,className:t="",...n})=>{const{menuSize:o}=te();return s.jsx(at,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${Vn} ${t}`,...n,children:e})},Xn=({as:e="div",children:t,className:n="",disabled:o=!1,href:l,icon:u,label:i="",rel:m,target:p,...g})=>{const{menuSize:h}=te(),M=h==="small"?qn:Hn;return s.jsx(lt,{as:e,disabled:o,className:`juno-popupmenu-item ${Ln} ${o?zn:Kn} ${M} ${n}`,...e==="a"?{href:l,rel:m,target:p}:{},...g,children:r=>s.jsxs(s.Fragment,{children:[u&&s.jsx(Ze,{icon:u,size:"18",className:`juno-popupmenu-item-icon ${Gn}`}),i&&typeof i=="string"?i:typeof t=="function"?t(r):t]})})},Zn=({children:e,className:t="",...n})=>s.jsx("section",{className:`juno-popupmenu-section ${Un} ${t}`,...n,children:e}),eo=({children:e,label:t="",className:n="",...o})=>s.jsx("header",{className:`juno-popupmenu-section-title ${Qn} ${n}`,...o,children:s.jsx("h1",{children:t&&t.length?t:e})}),to=({className:e="",...t})=>s.jsx("div",{className:`juno-popupmenu-section-divider ${Yn} ${e}`,...t});a.Toggle=le;a.Menu=ct;a.Item=Xn;a.Section=Zn;a.SectionHeading=eo;a.SectionSeparator=to;try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}try{a.displayName="PopupMenu",a.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const fo={title:"WiP/PopupMenu",component:a,subcomponents:{"PopupMenu.Toggle":a.Toggle,"PopupMenu.Menu":a.Menu,"PopupMenu.Item":a.Item,"PopupMenu.Section":a.Section},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(jt)],control:{type:"select"}}},decorators:[e=>s.jsx(et,{children:e()})]},pe=P.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>s.jsx(ue,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));pe.displayName="ToggleButton";const dt=P.forwardRef((e,t)=>{const{isOpen:n}=te(),{className:o,...l}=e;return s.jsx(ue,{ref:t,className:`toggle-button ${n?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...l,children:e.children||"Toggle Me!"})});dt.displayName="StyledToggleButton";const no=e=>{const{close:t}=te();return s.jsx(ue,{onClick:t,...e})},W={parameters:{docs:{description:{story:"When no `<PopupMenu.Menu>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed."}}},args:{...E("onOpen","onClose"),children:s.jsx(a.Menu,{children:s.jsx("p",{children:"Menu goes here."})})}},B={parameters:{docs:{description:{story:"This story has no `PopupMenu.Menu` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...E("onOpen","onClose")}},V={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...E("onOpen","onClose"),disabled:!0}},L={parameters:{docs:{description:{story:"Pass at least a `<PopupMenu.Menu>` component with `<PopupMenu.Item>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...E("onOpen","onClose"),children:s.jsxs(a.Menu,{children:[s.jsx(a.Item,{label:"Menu Item 1"}),s.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})}},H={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenu.Item elements as links."}}},args:{...E("onOpen","onClose"),children:s.jsxs(a.Menu,{children:[s.jsx(a.Item,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),s.jsx(a.Item,{as:"a",href:"https://www.sap.com",label:"Got to sap.com",target:"_blank",icon:"openInNew"})]})}},q={parameters:{docs:{description:{story:"`PopupMenu.Item` elements may contain random elements other than `PopupMenu.Item`. In such cases you may consume the PupupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...E("onOpen","onClose"),children:s.jsxs(a.Menu,{children:[s.jsx("p",{children:"Some content goes here."}),s.jsx(no,{variant:"primary",children:"Yay!"})]})}},K={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...E("onOpen","onClose"),children:s.jsxs(a.Menu,{children:[s.jsxs(a.Section,{children:[s.jsx(a.SectionHeading,{children:"Section 1"}),s.jsx(a.Item,{label:"Menu Item 1"}),s.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"})]}),s.jsx(a.SectionSeparator,{}),s.jsxs(a.Section,{children:[s.jsx(a.SectionHeading,{label:"Section 2"}),s.jsx(a.Item,{label:"Menu Item 3"}),s.jsx(a.Item,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},z={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...E("onOpen","onClose"),icon:"warning",children:s.jsxs(a.Menu,{children:[s.jsx(a.Item,{label:"Menu Item 1"}),s.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})}},G={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...E("onOpen","onClose"),children:[s.jsx(a.Toggle,{children:"The Toggle"},"t"),s.jsxs(a.Menu,{children:[s.jsx(a.Item,{label:"Menu Item 1"}),s.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},U={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenu.Toggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...E("onOpen","onClose"),children:[s.jsx(a.Toggle,{as:pe},"t"),s.jsxs(a.Menu,{children:[s.jsx(a.Item,{label:"Menu Item 1"}),s.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},Q={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...E("onOpen","onClose"),children:[s.jsx(a.Toggle,{as:dt},"t"),s.jsxs(a.Menu,{children:[s.jsx(a.Item,{label:"Menu Item 1"}),s.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},Y={parameters:{docs:{description:{story:"By default, `PopupMenu.Toggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenu.Toggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...E("onOpen","onClose"),children:[s.jsx(a.Toggle,{as:P.Fragment,children:s.jsx(pe,{})},"t"),s.jsxs(a.Menu,{children:[s.jsx(a.Item,{label:"Menu Item 1"}),s.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var Me,ve,be;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When no \`<PopupMenu.Menu>\` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <p>Menu goes here.</p>
      </PopupMenu.Menu>
  }
}`,...(be=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ye,Ie,Pe;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This story has no \`PopupMenu.Menu\` passed. The component should still render without any errors, and \`onOpen\` and \`onClose\` should be run regardless."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  }
}`,...(Pe=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var xe,Se,je;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    args: {
      description: {
        story: "Disable the default toggle."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    disabled: true
  }
}`,...(je=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var we,Ee,Ce;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass at least a \`<PopupMenu.Menu>\` component with \`<PopupMenu.Item>\` elements inside to render a functional menu. A default toggle element will be rendered."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
  }
}`,...(Ce=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Te,Oe,_e;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`as\` as \`anchor\` and supply a \`href\` prop in order to render PopupMenu.Item elements as links."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <PopupMenu.Item as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenu.Item as="a" href="https://www.sap.com" label="Got to sap.com" target="_blank" icon="openInNew" />
      </PopupMenu.Menu>
  }
}`,...(_e=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Re,$e,ke;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`PopupMenu.Item\` elements may contain random elements other than \`PopupMenu.Item\`. In such cases you may consume the PupupMenu context using the \`usePopupMenuContext\` hook that contains a \`close\` function that can be used by custom components to close the menu if needed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenu.Menu>
  }
}`,...(ke=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:ke.source}}};var De,Ae,Ne;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <PopupMenu.Section>
          <PopupMenu.SectionHeading>Section 1</PopupMenu.SectionHeading>
          <PopupMenu.Item label="Menu Item 1" />
          <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        </PopupMenu.Section>
        <PopupMenu.SectionSeparator />
        <PopupMenu.Section>
          <PopupMenu.SectionHeading label="Section 2" />
          <PopupMenu.Item label="Menu Item 3" />
          <PopupMenu.Item label="Menu Item 4 Disabled" disabled />
        </PopupMenu.Section>
      </PopupMenu.Menu>
  }
}`,...(Ne=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Fe,We,Be;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon without having to pass a custom toggle element."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    icon: "warning",
    children: <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
  }
}`,...(Be=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var Ve,Le,He;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In the simplest case, a toggle can contain only a string. \`PopupMenu\` will render a \`<button>\` element containing that string or any opther children."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle key="t">The Toggle</PopupMenu.Toggle>, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(He=(Le=G.parameters)==null?void 0:Le.docs)==null?void 0:He.source}}};var qe,Ke,ze;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass a custom component to render \`as={MyCustomComponent}\` to render as a toggle. Make sure to forward refs. Note we may change the standard \`<PopupMenu.Toggle>\` to use our own \`<Button>\` component, in this case we would need a different example component here."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle as={ToggleButton} key="t" />, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(ze=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var Ge,Ue,Qe;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A custom toggle component may consume the PopupMenu context using the \`usePopupMenuContext\` hook. This hook exposes the current \`isOpen\` state of the menu that can be used e.g. to apply conditional styling to the toggle."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle as={StyledToggleButton} key="t" />, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(Qe=(Ue=Q.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var Ye,Je,Xe;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, \`PopupMenu.Toggle\` will render a \`<button>\` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the \`PopupMenu.Toggle\`'s \`as\` prop to \`React.Fragment\` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle as={React.Fragment} key="t">
        <ToggleButton />
      </PopupMenu.Toggle>, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(Xe=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};const Mo=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WitchChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{W as Default,V as DisabledDefaultToggle,B as NoMenu,H as WitchChildrenAsLinks,Y as WithCustomButtonComponentAsChild,z as WithIcon,L as WithMenuChild,K as WithMenuChildWithSection,q as WithMenuWithRandomContent,G as WithToggleAndMenuChildren,U as WithToggleAsButtonComponent,Q as WithToggleAsButtonStyledByState,Mo as __namedExportsOrder,fo as default};
