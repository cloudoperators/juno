import{j as a}from"./jsx-runtime-BP6H2k8O.js";import{r as f,e as P}from"./index-DysCNOs_.js";import{v as Ot}from"./v4-CtRu48qb.js";import{u as wt,o as Tt,j as Ct,e as Et,f as Rt}from"./floating-ui.react-N79nPNwQ.js";import{I as lt,K as kt}from"./Icon.component-A9eTkufy.js";import{P as ut}from"./PortalProvider.component-CD4awzcQ.js";import{L as N,y as oe,n as ee,S as At,o as S,T as Nt,K as it,V as $t,D as $,x as Dt,R as Ft,k as Vt,d as Bt,f as Wt,g as Lt,i as te,m as qt,h as Kt,j as Ht,p as zt,W as pt,l as Ut,q as Gt,r as Yt,F as Qt,b as Jt,$ as Xt,c as Zt,w as en,e as tn,A as Ie,v as nn,M as on,z as an,t as ct,X as sn,C as I,G as rn,H as Pe,E as x,Y as dt,B as ln,O as ie,_ as un,J as pn,N as cn}from"./portal-CTbR-aKX.js";import{r as B}from"./index-BEZZli5v.js";import{a as dn,s as mn}from"./use-text-value-DWotbbvK.js";import{F as gn}from"./use-tree-walker-BUv9AQkM.js";import{B as he}from"./Button.component-Dj7B4kLM.js";import"./Spinner.component-DWsJM9DM.js";var hn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(hn||{}),fn=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(fn||{}),vn=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e))(vn||{});function pe(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=un(t(e.items.slice()),s=>s.dataRef.current.domRef.current),r=n?o.indexOf(n):null;return r===-1&&(r=null),{items:o,activeItemIndex:r}}let yn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var n,o,r,s,u;if(e.menuState===1)return e;let c={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===x.Nothing)return{...c,activeItemIndex:null};if(t.focus===x.Specific)return{...c,activeItemIndex:e.items.findIndex(m=>m.id===t.id)};if(t.focus===x.Previous){let m=e.activeItemIndex;if(m!==null){let v=e.items[m].dataRef.current.domRef,l=ie(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(l!==null){let p=e.items[l].dataRef.current.domRef;if(((o=v.current)==null?void 0:o.previousElementSibling)===p.current||((r=p.current)==null?void 0:r.previousElementSibling)===null)return{...c,activeItemIndex:l}}}}else if(t.focus===x.Next){let m=e.activeItemIndex;if(m!==null){let v=e.items[m].dataRef.current.domRef,l=ie(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(l!==null){let p=e.items[l].dataRef.current.domRef;if(((s=v.current)==null?void 0:s.nextElementSibling)===p.current||((u=p.current)==null?void 0:u.nextElementSibling)===null)return{...c,activeItemIndex:l}}}}let i=pe(e),h=ie(t,{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:m=>m.id,resolveDisabled:m=>m.dataRef.current.disabled});return{...c,...i,activeItemIndex:h}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),r=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(u=>{var c;return((c=u.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!u.dataRef.current.disabled}),s=r?e.items.indexOf(r):-1;return s===-1||s===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:s,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=pe(e,o=>[...o,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=pe(e,o=>{let r=o.findIndex(s=>s.id===t.id);return r!==-1&&o.splice(r,1),o});return{...e,...n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element}},fe=f.createContext(null);fe.displayName="MenuContext";function ae(e){let t=f.useContext(fe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ae),n}return t}function bn(e,t){return ct(t.type,yn,e,t)}let Mn=f.Fragment;function In(e,t){let{__demoMode:n=!1,...o}=e,r=f.useReducer(bn,{__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:s,itemsElement:u,buttonElement:c},i]=r,h=oe(t);nn(s===0,[c,u],(M,j)=>{i({type:1}),pn(j,cn.Loose)||(M.preventDefault(),c==null||c.focus())});let m=S(()=>{i({type:1})}),v=f.useMemo(()=>({open:s===0,close:m}),[s,m]),l={ref:h},p=$();return P.createElement(on,null,P.createElement(fe.Provider,{value:r},P.createElement(an,{value:ct(s,{0:te.Open,1:te.Closed})},p({ourProps:l,theirProps:o,slot:v,defaultTag:Mn,name:"Menu"}))))}let Pn="button";function xn(e,t){var n;let o=f.useId(),{id:r=`headlessui-menu-button-${o}`,disabled:s=!1,autoFocus:u=!1,...c}=e,[i,h]=ae("Menu.Button"),m=Qt(),v=oe(t,Jt(),S(b=>h({type:7,element:b}))),l=S(b=>{switch(b.key){case I.Space:case I.Enter:case I.ArrowDown:b.preventDefault(),b.stopPropagation(),B.flushSync(()=>h({type:0})),h({type:2,focus:x.First});break;case I.ArrowUp:b.preventDefault(),b.stopPropagation(),B.flushSync(()=>h({type:0})),h({type:2,focus:x.Last});break}}),p=S(b=>{switch(b.key){case I.Space:b.preventDefault();break}}),M=S(b=>{var F;if(ln(b.currentTarget))return b.preventDefault();s||(i.menuState===0?(B.flushSync(()=>h({type:1})),(F=i.buttonElement)==null||F.focus({preventScroll:!0})):(b.preventDefault(),h({type:0})))}),{isFocusVisible:j,focusProps:R}=Xt({autoFocus:u}),{isHovered:y,hoverProps:k}=Zt({isDisabled:s}),{pressed:T,pressProps:C}=en({disabled:s}),D=f.useMemo(()=>({open:i.menuState===0,active:T||i.menuState===0,disabled:s,hover:y,focus:j,autofocus:u}),[i,y,j,T,s,u]),A=pt(m(),{ref:v,id:r,type:tn(e,i.buttonElement),"aria-haspopup":"menu","aria-controls":(n=i.itemsElement)==null?void 0:n.id,"aria-expanded":i.menuState===0,disabled:s||void 0,autoFocus:u,onKeyDown:l,onKeyUp:p,onClick:M},R,k,C);return $()({ourProps:A,theirProps:c,slot:D,defaultTag:Pn,name:"Menu.Button"})}let Sn="div",_n=Ie.RenderStrategy|Ie.Static;function jn(e,t){var n,o;let r=f.useId(),{id:s=`headlessui-menu-items-${r}`,anchor:u,portal:c=!1,modal:i=!0,transition:h=!1,...m}=e,v=Dt(u),[l,p]=ae("Menu.Items"),[M,j]=Ft(v),R=Vt(),[y,k]=f.useState(null),T=oe(t,v?M:null,S(d=>p({type:8,element:d})),k),C=Bt(l.itemsElement);v&&(c=!0);let D=Wt(),[A,b]=Lt(h,y,D!==null?(D&te.Open)===te.Open:l.menuState===0);qt(A,l.buttonElement,()=>{p({type:1})});let F=l.__demoMode?!1:i&&l.menuState===0;Kt(F,C);let le=l.__demoMode?!1:i&&l.menuState===0;Ht(le,{allowed:f.useCallback(()=>[l.buttonElement,l.itemsElement],[l.buttonElement,l.itemsElement])});let ue=l.menuState!==0,O=mn(ue,l.buttonElement)?!1:A;f.useEffect(()=>{let d=l.itemsElement;d&&l.menuState===0&&d!==(C==null?void 0:C.activeElement)&&d.focus({preventScroll:!0})},[l.menuState,l.itemsElement,C]),gn(l.menuState===0,{container:l.itemsElement,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let V=zt(),It=S(d=>{var ye,be,Me;switch(V.dispose(),d.key){case I.Space:if(l.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),p({type:3,value:d.key});case I.Enter:if(d.preventDefault(),d.stopPropagation(),p({type:1}),l.activeItemIndex!==null){let{dataRef:jt}=l.items[l.activeItemIndex];(be=(ye=jt.current)==null?void 0:ye.domRef.current)==null||be.click()}dt(l.buttonElement);break;case I.ArrowDown:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.Next});case I.ArrowUp:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.Previous});case I.Home:case I.PageUp:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.First});case I.End:case I.PageDown:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.Last});case I.Escape:d.preventDefault(),d.stopPropagation(),B.flushSync(()=>p({type:1})),(Me=l.buttonElement)==null||Me.focus({preventScroll:!0});break;case I.Tab:d.preventDefault(),d.stopPropagation(),B.flushSync(()=>p({type:1})),rn(l.buttonElement,d.shiftKey?Pe.Previous:Pe.Next);break;default:d.key.length===1&&(p({type:3,value:d.key}),V.setTimeout(()=>p({type:4}),350));break}}),Pt=S(d=>{switch(d.key){case I.Space:d.preventDefault();break}}),xt=f.useMemo(()=>({open:l.menuState===0}),[l.menuState]),St=pt(v?R():{},{"aria-activedescendant":l.activeItemIndex===null||(n=l.items[l.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(o=l.buttonElement)==null?void 0:o.id,id:s,onKeyDown:It,onKeyUp:Pt,role:"menu",tabIndex:l.menuState===0?0:void 0,ref:T,style:{...m.style,...j,"--button-width":Gt(l.buttonElement,!0).width},...Ut(b)}),_t=$();return P.createElement(Yt,{enabled:c?e.static||A:!1},_t({ourProps:St,theirProps:m,slot:xt,defaultTag:Sn,features:_n,visible:O,name:"Menu.Items"}))}let On=f.Fragment;function wn(e,t){let n=f.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:r=!1,...s}=e,[u,c]=ae("Menu.Item"),i=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===o:!1,h=f.useRef(null),m=oe(t,h);ee(()=>{if(!u.__demoMode&&u.menuState===0&&i&&u.activationTrigger!==0)return At().requestAnimationFrame(()=>{var O,V;(V=(O=h.current)==null?void 0:O.scrollIntoView)==null||V.call(O,{block:"nearest"})})},[u.__demoMode,h,i,u.menuState,u.activationTrigger,u.activeItemIndex]);let v=dn(h),l=f.useRef({disabled:r,domRef:h,get textValue(){return v()}});ee(()=>{l.current.disabled=r},[l,r]),ee(()=>(c({type:5,id:o,dataRef:l}),()=>c({type:6,id:o})),[l,o]);let p=S(()=>{c({type:1})}),M=S(O=>{if(r)return O.preventDefault();c({type:1}),dt(u.buttonElement)}),j=S(()=>{if(r)return c({type:2,focus:x.Nothing});c({type:2,focus:x.Specific,id:o})}),R=Nt(),y=S(O=>{R.update(O),!r&&(i||c({type:2,focus:x.Specific,id:o,trigger:0}))}),k=S(O=>{R.wasMoved(O)&&(r||i||c({type:2,focus:x.Specific,id:o,trigger:0}))}),T=S(O=>{R.wasMoved(O)&&(r||i&&c({type:2,focus:x.Nothing}))}),[C,D]=it(),[A,b]=$t(),F=f.useMemo(()=>({active:i,focus:i,disabled:r,close:p}),[i,r,p]),le={id:o,ref:m,role:"menuitem",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-labelledby":C,"aria-describedby":A,disabled:void 0,onClick:M,onFocus:j,onPointerEnter:y,onMouseEnter:y,onPointerMove:k,onMouseMove:k,onPointerLeave:T,onMouseLeave:T},ue=$();return P.createElement(D,null,P.createElement(b,null,ue({ourProps:le,theirProps:s,slot:F,defaultTag:On,name:"Menu.Item"})))}let Tn="div";function Cn(e,t){let[n,o]=it(),r=e,s={ref:t,"aria-labelledby":n,role:"group"},u=$();return P.createElement(o,null,u({ourProps:s,theirProps:r,slot:{},defaultTag:Tn,name:"Menu.Section"}))}let En="header";function Rn(e,t){let n=f.useId(),{id:o=`headlessui-menu-heading-${n}`,...r}=e,s=sn();ee(()=>s.register(o),[o,s.register]);let u={id:o,ref:t,role:"presentation",...s.props};return $()({ourProps:u,theirProps:r,slot:{},defaultTag:En,name:"Menu.Heading"})}let kn="div";function An(e,t){let n=e,o={ref:t,role:"separator"};return $()({ourProps:o,theirProps:n,slot:{},defaultTag:kn,name:"Menu.Separator"})}let Nn=N(In),mt=N(xn),gt=N(jn),ht=N(wn),$n=N(Cn),Dn=N(Rn),Fn=N(An),Vn=Object.assign(Nn,{Button:mt,Items:gt,Item:ht,Section:$n,Heading:Dn,Separator:Fn});const{addons:Bn}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Wn}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:xe}=__STORYBOOK_MODULE_GLOBAL__;var Ln=Object.defineProperty,qn=(e,t)=>{for(var n in t)Ln(e,n,{get:t[n],enumerable:!0})},Kn="storybook/actions",Hn=`${Kn}/action-event`,de={depth:10,clearOnStoryChange:!0,limit:50},ft=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:ft(n,t)},zn=e=>!!(typeof e=="object"&&e&&ft(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Un=e=>{if(zn(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),o=n==null?void 0:n.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(o.constructor.prototype)}),t}return e},Gn=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Ot():Date.now().toString(36)+Math.random().toString(36).substring(2);function se(e,t={}){let n={...de,...t},o=function(...r){var v,l;if(t.implicit){let p=(v="__STORYBOOK_PREVIEW__"in xe?xe.__STORYBOOK_PREVIEW__:void 0)==null?void 0:v.storyRenders.find(M=>M.phase==="playing"||M.phase==="rendering");if(p){let M=!((l=globalThis==null?void 0:globalThis.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),j=new Wn({phase:p.phase,name:e,deprecated:M});if(M)console.warn(j);else throw j}}let s=Bn.getChannel(),u=Gn(),c=5,i=r.map(Un),h=r.length>1?i:i[0],m={id:u,count:0,data:{name:e,args:h},options:{...n,maxDepth:c+(n.depth||3),allowFunction:n.allowFunction||!1}};s.emit(Hn,m)};return o.isAction=!0,o.implicit=t.implicit,o}var w=(...e)=>{let t=de,n=e;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(t={...de,...n.pop()});let o=n[0];(n.length!==1||typeof o=="string")&&(o={},n.forEach(s=>{o[s]=s}));let r={};return Object.keys(o).forEach(s=>{r[s]=se(o[s],t)}),r};const{definePreview:Oo}=__STORYBOOK_MODULE_PREVIEW_API__,{global:ce}=__STORYBOOK_MODULE_GLOBAL__;var Yn={};qn(Yn,{argsEnhancers:()=>Xn,loaders:()=>eo});var vt=(e,t)=>typeof t[e]>"u"&&!(e in t),Qn=e=>{let{initialArgs:t,argTypes:n,id:o,parameters:{actions:r}}=e;if(!r||r.disable||!r.argTypesRegex||!n)return{};let s=new RegExp(r.argTypesRegex);return Object.entries(n).filter(([u])=>!!s.test(u)).reduce((u,[c,i])=>(vt(c,t)&&(u[c]=se(c,{implicit:!0,id:o})),u),{})},Jn=e=>{let{initialArgs:t,argTypes:n,parameters:{actions:o}}=e;return o!=null&&o.disable||!n?{}:Object.entries(n).filter(([r,s])=>!!s.action).reduce((r,[s,u])=>(vt(s,t)&&(r[s]=se(typeof u.action=="string"?u.action:s)),r),{})},Xn=[Jn,Qn],Se=!1,Zn=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!Se&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in ce&&typeof ce.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=ce.__STORYBOOK_TEST_ON_MOCK_CALL__;n((o,r)=>{let s=o.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(u=>s.startsWith(u)))&&se(s)(r)}),Se=!0}},eo=[Zn];const to=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,yt=`
  jn-cursor-not-allowed
  jn-opacity-50
`,no=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,oo=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,ao=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,so=`
  jn-text-sm
  jn-p-2
`,ro=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,lo=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,uo=`
  jn-inline-block
  jn-mr-2
`,io=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,po=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,co=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,mo=`
  jn-inline-flex
`,bt=f.createContext(null),re=()=>{const e=f.useContext(bt);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},me=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:r="normal",onClose:s,onOpen:u,...c})=>{const[i,h]=f.useState(!1),m=f.useRef(i),{refs:v,floatingStyles:l,update:p}=wt({placement:"bottom-start",middleware:[Tt(4),Ct(),Et({padding:8})],whileElementsMounted:Rt});f.useEffect(()=>{i!==m.current&&(i?u==null||u():s==null||s()),m.current=i},[i,u,s]);const M=P.Children.toArray(e),j=M.some(y=>P.isValidElement(y)&&y.type===E),R=M.find(y=>P.isValidElement(y)&&y.type===_);return a.jsx(Vn,{as:"div",className:`juno-popupmenu ${t}`,...c,children:({open:y,close:k})=>(f.useEffect(()=>{y!==i&&(h(y),y&&p())},[y]),a.jsxs(bt.Provider,{value:{isOpen:i,close:k,menuSize:r},children:[a.jsxs("div",{ref:v.setReference,className:`juno-popupmenu-float-reference-wrapper ${mo}`,children:[!j&&a.jsx(E,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?yt:to}`,disabled:n,children:a.jsx(lt,{icon:o})}),M.map((T,C)=>P.isValidElement(T)&&T.type===E?P.cloneElement(T,{key:C}):null)]}),i&&a.jsx(ut.Portal,{children:a.jsx("div",{ref:v.setFloating,style:l,className:"juno-popupmenu-float-content-wrapper",children:R})})]}))})},E=({as:e="button",disabled:t=!1,children:n,className:o="",...r})=>a.jsx(mt,{as:e,className:`juno-popupmenu-toggle ${t&&yt} ${o}`,disabled:t,...r,children:n}),_=({children:e,className:t="",...n})=>{const{menuSize:o}=re();return a.jsx(gt,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${no} ${t}`,...n,children:e})},g=({as:e="div",children:t,className:n="",disabled:o=!1,href:r,icon:s,label:u="",rel:c,target:i,...h})=>{const{menuSize:m}=re(),v=m==="small"?so:ao;return a.jsx(ht,{as:e,disabled:o,className:`juno-popupmenu-item ${oo} ${o?lo:ro} ${v} ${n}`,...e==="a"?{href:r,rel:c,target:i}:{},...h,children:l=>a.jsxs(a.Fragment,{children:[s&&a.jsx(lt,{icon:s,size:"18",className:`juno-popupmenu-item-icon ${uo}`}),u&&typeof u=="string"?u:typeof t=="function"?t(l):t]})})},W=({children:e,className:t="",...n})=>a.jsx("section",{className:`juno-popupmenu-section ${io} ${t}`,...n,children:e}),ne=({children:e,label:t="",className:n="",...o})=>a.jsx("header",{className:`juno-popupmenu-section-title ${po} ${n}`,...o,children:a.jsx("h1",{children:t&&t.length?t:e})}),ge=({className:e="",...t})=>a.jsx("div",{className:`juno-popupmenu-section-divider ${co} ${e}`,...t});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}try{E.displayName="PopupMenuToggle",E.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="PopupMenuOptions",_.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{g.displayName="PopupMenuItem",g.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}}}}}catch{}try{W.displayName="PopupMenuSection",W.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ne.displayName="PopupMenuSectionHeading",ne.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ge.displayName="PopupMenuSectionSeparator",ge.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{me.displayName="PopupMenu",me.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}}}}}catch{}const wo={title:"WiP/PopupMenu",component:me,subcomponents:{PopupMenuToggle:E,PopupMenuOptions:_,PopupMenuItem:g,PopupMenuSection:W},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(kt)],control:{type:"select"}}},decorators:[e=>a.jsx(ut,{children:e()})]},ve=P.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>a.jsx(he,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));ve.displayName="ToggleButton";const Mt=P.forwardRef((e,t)=>{const{isOpen:n}=re(),{className:o,...r}=e;return a.jsx(he,{ref:t,className:`toggle-button ${n?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...r,children:e.children||"Toggle Me!"})});Mt.displayName="StyledToggleButton";const go=e=>{const{close:t}=re();return a.jsx(he,{onClick:t,...e})},L={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{...w("onOpen","onClose"),children:a.jsx(_,{children:a.jsx("p",{children:"Menu goes here."})})}},q={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...w("onOpen","onClose")}},K={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...w("onOpen","onClose"),disabled:!0}},H={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...w("onOpen","onClose"),children:a.jsxs(_,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]})}},z={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{...w("onOpen","onClose"),children:a.jsxs(_,{children:[a.jsx(g,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),a.jsx(g,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},U={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...w("onOpen","onClose"),children:a.jsxs(_,{children:[a.jsx("p",{children:"Some content goes here."}),a.jsx(go,{variant:"primary",children:"Yay!"})]})}},G={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...w("onOpen","onClose"),children:a.jsxs(_,{children:[a.jsxs(W,{children:[a.jsx(ne,{children:"Section 1"}),a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"})]}),a.jsx(ge,{}),a.jsxs(W,{children:[a.jsx(ne,{label:"Section 2"}),a.jsx(g,{label:"Menu Item 3"}),a.jsx(g,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},Y={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...w("onOpen","onClose"),icon:"warning",children:a.jsxs(_,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]})}},Q={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...w("onOpen","onClose"),children:[a.jsx(E,{children:"The Toggle"},"t"),a.jsxs(_,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},J={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...w("onOpen","onClose"),children:[a.jsx(E,{as:ve},"t"),a.jsxs(_,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},X={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...w("onOpen","onClose"),children:[a.jsx(E,{as:Mt},"t"),a.jsxs(_,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},Z={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...w("onOpen","onClose"),children:[a.jsx(E,{as:P.Fragment,children:a.jsx(ve,{})},"t"),a.jsxs(_,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var _e,je,Oe;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When no \`<PopupMenuOptions>\` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenuOptions>
        <p>Menu goes here.</p>
      </PopupMenuOptions>
  }
}`,...(Oe=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var we,Te,Ce;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This story has no \`PopupMenuOptions\` passed. The component should still render without any errors, and \`onOpen\` and \`onClose\` should be run regardless."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  }
}`,...(Ce=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Ee,Re,ke;K.parameters={...K.parameters,docs:{...(Ee=K.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ke=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Ae,Ne,$e;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass at least a \`<PopupMenuOptions>\` component with \`<PopupMenuItem>\` elements inside to render a functional menu. A default toggle element will be rendered."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...($e=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:$e.source}}};var De,Fe,Ve;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`as\` as \`anchor\` and supply a \`href\` prop in order to render PopupMenuItem elements as links."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenuOptions>
        <PopupMenuItem as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenuItem as="a" href="https://www.sap.com" label="Go to sap.com" target="_blank" icon="openInNew" />
      </PopupMenuOptions>
  }
}`,...(Ve=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Be,We,Le;U.parameters={...U.parameters,docs:{...(Be=U.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`PopupMenuItem\` elements may contain random elements other than \`PopupMenuItem\`. In such cases you may consume the PopupMenu context using the \`usePopupMenuContext\` hook that contains a \`close\` function that can be used by custom components to close the menu if needed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenuOptions>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenuOptions>
  }
}`,...(Le=(We=U.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var qe,Ke,He;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenuOptions>
        <PopupMenuSection>
          <PopupMenuSectionHeading>Section 1</PopupMenuSectionHeading>
          <PopupMenuItem label="Menu Item 1" />
          <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        </PopupMenuSection>
        <PopupMenuSectionSeparator />
        <PopupMenuSection>
          <PopupMenuSectionHeading label="Section 2" />
          <PopupMenuItem label="Menu Item 3" />
          <PopupMenuItem label="Menu Item 4 Disabled" disabled />
        </PopupMenuSection>
      </PopupMenuOptions>
  }
}`,...(He=(Ke=G.parameters)==null?void 0:Ke.docs)==null?void 0:He.source}}};var ze,Ue,Ge;Y.parameters={...Y.parameters,docs:{...(ze=Y.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...(Ge=(Ue=Y.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Ye,Qe,Je;Q.parameters={...Q.parameters,docs:{...(Ye=Q.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In the simplest case, a toggle can contain only a string. \`PopupMenu\` will render a \`<button>\` element containing that string or any opther children."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenuToggle key="t">The Toggle</PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...(Je=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Xe,Ze,et;J.parameters={...J.parameters,docs:{...(Xe=J.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass a custom component to render \`as={MyCustomComponent}\` to render as a toggle. Make sure to forward refs. Note we may change the standard \`<PopupMenuToggle>\` to use our own \`<Button>\` component, in this case we would need a different example component here."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenuToggle as={ToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...(et=(Ze=J.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,ot;X.parameters={...X.parameters,docs:{...(tt=X.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A custom toggle component may consume the PopupMenu context using the \`usePopupMenuContext\` hook. This hook exposes the current \`isOpen\` state of the menu that can be used e.g. to apply conditional styling to the toggle."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenuToggle as={StyledToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...(ot=(nt=X.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var at,st,rt;Z.parameters={...Z.parameters,docs:{...(at=Z.parameters)==null?void 0:at.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, \`PopupMenuToggle\` will render a \`<button>\` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the \`PopupMenuToggle\`'s \`as\` prop to \`React.Fragment\` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenuToggle as={React.Fragment} key="t">
        <ToggleButton />
      </PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...(rt=(st=Z.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};const To=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{L as Default,K as DisabledDefaultToggle,q as NoMenu,z as WithChildrenAsLinks,Z as WithCustomButtonComponentAsChild,Y as WithIcon,H as WithMenuChild,G as WithMenuChildWithSection,U as WithMenuWithRandomContent,Q as WithToggleAndMenuChildren,J as WithToggleAsButtonComponent,X as WithToggleAsButtonStyledByState,To as __namedExportsOrder,wo as default};
