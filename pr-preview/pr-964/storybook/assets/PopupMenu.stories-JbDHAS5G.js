import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h,e as P}from"./index-DN3cvKNT.js";import{v as Ot}from"./v4-CtRu48qb.js";import{u as wt,f as Tt,o as Et,j as Ct,e as Rt}from"./floating-ui.react-8LoX_53u.js";import{I as lt,K as Nt}from"./Icon.component-cS6TiWAp.js";import{P as ut}from"./PortalProvider.component-DwfadwbX.js";import{L as A,y as oe,n as ee,S as kt,o as _,T as At,K as it,V as $t,D as $,x as Dt,R as Vt,k as Ft,d as Bt,f as Wt,g as qt,i as te,m as Lt,h as Kt,j as Ht,p as zt,W as pt,l as Ut,q as Gt,r as Yt,F as Qt,b as Jt,$ as Xt,c as Zt,w as en,e as tn,A as Ie,v as nn,M as on,z as an,t as ct,X as rn,C as I,G as sn,H as Pe,E as x,Y as dt,B as ln,O as ie,_ as un,J as pn,N as cn}from"./portal-C4cIMEKJ.js";import{r as B}from"./index-FzTzjy2T.js";import{a as dn,s as mn}from"./use-text-value-BD1YbR5A.js";import{F as gn}from"./use-tree-walker-CCpvFVFt.js";import{B as fe}from"./Button.component-DOMGltHt.js";import"./index-yBjzXJbu.js";import"./index-fNjTmf9T.js";import"./Spinner.component-BgFgW-bc.js";var fn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(fn||{}),hn=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(hn||{}),vn=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e))(vn||{});function pe(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=un(t(e.items.slice()),r=>r.dataRef.current.domRef.current),s=n?o.indexOf(n):null;return s===-1&&(s=null),{items:o,activeItemIndex:s}}let yn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var n,o,s,r,u;if(e.menuState===1)return e;let c={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===x.Nothing)return{...c,activeItemIndex:null};if(t.focus===x.Specific)return{...c,activeItemIndex:e.items.findIndex(m=>m.id===t.id)};if(t.focus===x.Previous){let m=e.activeItemIndex;if(m!==null){let v=e.items[m].dataRef.current.domRef,l=ie(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(l!==null){let p=e.items[l].dataRef.current.domRef;if(((o=v.current)==null?void 0:o.previousElementSibling)===p.current||((s=p.current)==null?void 0:s.previousElementSibling)===null)return{...c,activeItemIndex:l}}}}else if(t.focus===x.Next){let m=e.activeItemIndex;if(m!==null){let v=e.items[m].dataRef.current.domRef,l=ie(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(l!==null){let p=e.items[l].dataRef.current.domRef;if(((r=v.current)==null?void 0:r.nextElementSibling)===p.current||((u=p.current)==null?void 0:u.nextElementSibling)===null)return{...c,activeItemIndex:l}}}}let i=pe(e),f=ie(t,{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:m=>m.id,resolveDisabled:m=>m.dataRef.current.disabled});return{...c,...i,activeItemIndex:f}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(u=>{var c;return((c=u.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!u.dataRef.current.disabled}),r=s?e.items.indexOf(s):-1;return r===-1||r===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:r,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=pe(e,o=>[...o,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=pe(e,o=>{let s=o.findIndex(r=>r.id===t.id);return s!==-1&&o.splice(s,1),o});return{...e,...n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element}},he=h.createContext(null);he.displayName="MenuContext";function ae(e){let t=h.useContext(he);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ae),n}return t}function bn(e,t){return ct(t.type,yn,e,t)}let Mn=h.Fragment;function In(e,t){let{__demoMode:n=!1,...o}=e,s=h.useReducer(bn,{__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsElement:u,buttonElement:c},i]=s,f=oe(t);nn(r===0,[c,u],(M,j)=>{i({type:1}),pn(j,cn.Loose)||(M.preventDefault(),c==null||c.focus())});let m=_(()=>{i({type:1})}),v=h.useMemo(()=>({open:r===0,close:m}),[r,m]),l={ref:f},p=$();return P.createElement(on,null,P.createElement(he.Provider,{value:s},P.createElement(an,{value:ct(r,{0:te.Open,1:te.Closed})},p({ourProps:l,theirProps:o,slot:v,defaultTag:Mn,name:"Menu"}))))}let Pn="button";function xn(e,t){var n;let o=h.useId(),{id:s=`headlessui-menu-button-${o}`,disabled:r=!1,autoFocus:u=!1,...c}=e,[i,f]=ae("Menu.Button"),m=Qt(),v=oe(t,Jt(),_(b=>f({type:7,element:b}))),l=_(b=>{switch(b.key){case I.Space:case I.Enter:case I.ArrowDown:b.preventDefault(),b.stopPropagation(),B.flushSync(()=>f({type:0})),f({type:2,focus:x.First});break;case I.ArrowUp:b.preventDefault(),b.stopPropagation(),B.flushSync(()=>f({type:0})),f({type:2,focus:x.Last});break}}),p=_(b=>{switch(b.key){case I.Space:b.preventDefault();break}}),M=_(b=>{var V;if(ln(b.currentTarget))return b.preventDefault();r||(i.menuState===0?(B.flushSync(()=>f({type:1})),(V=i.buttonElement)==null||V.focus({preventScroll:!0})):(b.preventDefault(),f({type:0})))}),{isFocusVisible:j,focusProps:R}=Xt({autoFocus:u}),{isHovered:y,hoverProps:N}=Zt({isDisabled:r}),{pressed:T,pressProps:E}=en({disabled:r}),D=h.useMemo(()=>({open:i.menuState===0,active:T||i.menuState===0,disabled:r,hover:y,focus:j,autofocus:u}),[i,y,j,T,r,u]),k=pt(m(),{ref:v,id:s,type:tn(e,i.buttonElement),"aria-haspopup":"menu","aria-controls":(n=i.itemsElement)==null?void 0:n.id,"aria-expanded":i.menuState===0,disabled:r||void 0,autoFocus:u,onKeyDown:l,onKeyUp:p,onClick:M},R,N,E);return $()({ourProps:k,theirProps:c,slot:D,defaultTag:Pn,name:"Menu.Button"})}let _n="div",Sn=Ie.RenderStrategy|Ie.Static;function jn(e,t){var n,o;let s=h.useId(),{id:r=`headlessui-menu-items-${s}`,anchor:u,portal:c=!1,modal:i=!0,transition:f=!1,...m}=e,v=Dt(u),[l,p]=ae("Menu.Items"),[M,j]=Vt(v),R=Ft(),[y,N]=h.useState(null),T=oe(t,v?M:null,_(d=>p({type:8,element:d})),N),E=Bt(l.itemsElement);v&&(c=!0);let D=Wt(),[k,b]=qt(f,y,D!==null?(D&te.Open)===te.Open:l.menuState===0);Lt(k,l.buttonElement,()=>{p({type:1})});let V=l.__demoMode?!1:i&&l.menuState===0;Kt(V,E);let le=l.__demoMode?!1:i&&l.menuState===0;Ht(le,{allowed:h.useCallback(()=>[l.buttonElement,l.itemsElement],[l.buttonElement,l.itemsElement])});let ue=l.menuState!==0,O=mn(ue,l.buttonElement)?!1:k;h.useEffect(()=>{let d=l.itemsElement;d&&l.menuState===0&&d!==(E==null?void 0:E.activeElement)&&d.focus({preventScroll:!0})},[l.menuState,l.itemsElement,E]),gn(l.menuState===0,{container:l.itemsElement,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let F=zt(),It=_(d=>{var ye,be,Me;switch(F.dispose(),d.key){case I.Space:if(l.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),p({type:3,value:d.key});case I.Enter:if(d.preventDefault(),d.stopPropagation(),p({type:1}),l.activeItemIndex!==null){let{dataRef:jt}=l.items[l.activeItemIndex];(be=(ye=jt.current)==null?void 0:ye.domRef.current)==null||be.click()}dt(l.buttonElement);break;case I.ArrowDown:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.Next});case I.ArrowUp:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.Previous});case I.Home:case I.PageUp:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.First});case I.End:case I.PageDown:return d.preventDefault(),d.stopPropagation(),p({type:2,focus:x.Last});case I.Escape:d.preventDefault(),d.stopPropagation(),B.flushSync(()=>p({type:1})),(Me=l.buttonElement)==null||Me.focus({preventScroll:!0});break;case I.Tab:d.preventDefault(),d.stopPropagation(),B.flushSync(()=>p({type:1})),sn(l.buttonElement,d.shiftKey?Pe.Previous:Pe.Next);break;default:d.key.length===1&&(p({type:3,value:d.key}),F.setTimeout(()=>p({type:4}),350));break}}),Pt=_(d=>{switch(d.key){case I.Space:d.preventDefault();break}}),xt=h.useMemo(()=>({open:l.menuState===0}),[l.menuState]),_t=pt(v?R():{},{"aria-activedescendant":l.activeItemIndex===null||(n=l.items[l.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(o=l.buttonElement)==null?void 0:o.id,id:r,onKeyDown:It,onKeyUp:Pt,role:"menu",tabIndex:l.menuState===0?0:void 0,ref:T,style:{...m.style,...j,"--button-width":Gt(l.buttonElement,!0).width},...Ut(b)}),St=$();return P.createElement(Yt,{enabled:c?e.static||k:!1},St({ourProps:_t,theirProps:m,slot:xt,defaultTag:_n,features:Sn,visible:O,name:"Menu.Items"}))}let On=h.Fragment;function wn(e,t){let n=h.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:s=!1,...r}=e,[u,c]=ae("Menu.Item"),i=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===o:!1,f=h.useRef(null),m=oe(t,f);ee(()=>{if(!u.__demoMode&&u.menuState===0&&i&&u.activationTrigger!==0)return kt().requestAnimationFrame(()=>{var O,F;(F=(O=f.current)==null?void 0:O.scrollIntoView)==null||F.call(O,{block:"nearest"})})},[u.__demoMode,f,i,u.menuState,u.activationTrigger,u.activeItemIndex]);let v=dn(f),l=h.useRef({disabled:s,domRef:f,get textValue(){return v()}});ee(()=>{l.current.disabled=s},[l,s]),ee(()=>(c({type:5,id:o,dataRef:l}),()=>c({type:6,id:o})),[l,o]);let p=_(()=>{c({type:1})}),M=_(O=>{if(s)return O.preventDefault();c({type:1}),dt(u.buttonElement)}),j=_(()=>{if(s)return c({type:2,focus:x.Nothing});c({type:2,focus:x.Specific,id:o})}),R=At(),y=_(O=>{R.update(O),!s&&(i||c({type:2,focus:x.Specific,id:o,trigger:0}))}),N=_(O=>{R.wasMoved(O)&&(s||i||c({type:2,focus:x.Specific,id:o,trigger:0}))}),T=_(O=>{R.wasMoved(O)&&(s||i&&c({type:2,focus:x.Nothing}))}),[E,D]=it(),[k,b]=$t(),V=h.useMemo(()=>({active:i,focus:i,disabled:s,close:p}),[i,s,p]),le={id:o,ref:m,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-labelledby":E,"aria-describedby":k,disabled:void 0,onClick:M,onFocus:j,onPointerEnter:y,onMouseEnter:y,onPointerMove:N,onMouseMove:N,onPointerLeave:T,onMouseLeave:T},ue=$();return P.createElement(D,null,P.createElement(b,null,ue({ourProps:le,theirProps:r,slot:V,defaultTag:On,name:"Menu.Item"})))}let Tn="div";function En(e,t){let[n,o]=it(),s=e,r={ref:t,"aria-labelledby":n,role:"group"},u=$();return P.createElement(o,null,u({ourProps:r,theirProps:s,slot:{},defaultTag:Tn,name:"Menu.Section"}))}let Cn="header";function Rn(e,t){let n=h.useId(),{id:o=`headlessui-menu-heading-${n}`,...s}=e,r=rn();ee(()=>r.register(o),[o,r.register]);let u={id:o,ref:t,role:"presentation",...r.props};return $()({ourProps:u,theirProps:s,slot:{},defaultTag:Cn,name:"Menu.Heading"})}let Nn="div";function kn(e,t){let n=e,o={ref:t,role:"separator"};return $()({ourProps:o,theirProps:n,slot:{},defaultTag:Nn,name:"Menu.Separator"})}let An=A(In),mt=A(xn),gt=A(jn),ft=A(wn),$n=A(En),Dn=A(Rn),Vn=A(kn),Fn=Object.assign(An,{Button:mt,Items:gt,Item:ft,Section:$n,Heading:Dn,Separator:Vn});const{addons:Bn}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Wn}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:xe}=__STORYBOOK_MODULE_GLOBAL__;var qn=Object.defineProperty,Ln=(e,t)=>{for(var n in t)qn(e,n,{get:t[n],enumerable:!0})},Kn="storybook/actions",Hn=`${Kn}/action-event`,de={depth:10,clearOnStoryChange:!0,limit:50},ht=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:ht(n,t)},zn=e=>!!(typeof e=="object"&&e&&ht(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Un=e=>{if(zn(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),o=n==null?void 0:n.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(o.constructor.prototype)}),t}return e},Gn=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Ot():Date.now().toString(36)+Math.random().toString(36).substring(2);function re(e,t={}){let n={...de,...t},o=function(...s){var v,l;if(t.implicit){let p=(v="__STORYBOOK_PREVIEW__"in xe?xe.__STORYBOOK_PREVIEW__:void 0)==null?void 0:v.storyRenders.find(M=>M.phase==="playing"||M.phase==="rendering");if(p){let M=!((l=globalThis==null?void 0:globalThis.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),j=new Wn({phase:p.phase,name:e,deprecated:M});if(M)console.warn(j);else throw j}}let r=Bn.getChannel(),u=Gn(),c=5,i=s.map(Un),f=s.length>1?i:i[0],m={id:u,count:0,data:{name:e,args:f},options:{...n,maxDepth:c+(n.depth||3),allowFunction:n.allowFunction||!1}};r.emit(Hn,m)};return o.isAction=!0,o.implicit=t.implicit,o}var w=(...e)=>{let t=de,n=e;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(t={...de,...n.pop()});let o=n[0];(n.length!==1||typeof o=="string")&&(o={},n.forEach(r=>{o[r]=r}));let s={};return Object.keys(o).forEach(r=>{s[r]=re(o[r],t)}),s};const{definePreview:To}=__STORYBOOK_MODULE_PREVIEW_API__,{global:ce}=__STORYBOOK_MODULE_GLOBAL__;var Yn={};Ln(Yn,{argsEnhancers:()=>Xn,loaders:()=>eo});var vt=(e,t)=>typeof t[e]>"u"&&!(e in t),Qn=e=>{let{initialArgs:t,argTypes:n,id:o,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!n)return{};let r=new RegExp(s.argTypesRegex);return Object.entries(n).filter(([u])=>!!r.test(u)).reduce((u,[c,i])=>(vt(c,t)&&(u[c]=re(c,{implicit:!0,id:o})),u),{})},Jn=e=>{let{initialArgs:t,argTypes:n,parameters:{actions:o}}=e;return o!=null&&o.disable||!n?{}:Object.entries(n).filter(([s,r])=>!!r.action).reduce((s,[r,u])=>(vt(r,t)&&(s[r]=re(typeof u.action=="string"?u.action:r)),s),{})},Xn=[Jn,Qn],_e=!1,Zn=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!_e&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in ce&&typeof ce.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let n=ce.__STORYBOOK_TEST_ON_MOCK_CALL__;n((o,s)=>{let r=o.getMockName();r!=="spy"&&(!/^next\/.*::/.test(r)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(u=>r.startsWith(u)))&&re(r)(s)}),_e=!0}},eo=[Zn];const to=`
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
`,ro=`
  jn-text-sm
  jn-p-2
`,so=`
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
`,bt=h.createContext(null),se=()=>{const e=h.useContext(bt);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},me=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:s="normal",onClose:r,onOpen:u,...c})=>{const[i,f]=h.useState(!1),m=h.useRef(i),{refs:v,floatingStyles:l,update:p}=wt({placement:"bottom-start",middleware:[Et(4),Ct(),Rt({padding:8})],whileElementsMounted:Tt});h.useEffect(()=>{i!==m.current&&(i?u==null||u():r==null||r()),m.current=i},[i,u,r]);const M=P.Children.toArray(e),j=M.some(y=>P.isValidElement(y)&&y.type===C),R=M.find(y=>P.isValidElement(y)&&y.type===S);return a.jsx(Fn,{as:"div",className:`juno-popupmenu ${t}`,...c,children:({open:y,close:N})=>(h.useEffect(()=>{y!==i&&(f(y),y&&p())},[y]),a.jsxs(bt.Provider,{value:{isOpen:i,close:N,menuSize:s},children:[a.jsxs("div",{ref:v.setReference,className:`juno-popupmenu-float-reference-wrapper ${mo}`,children:[!j&&a.jsx(C,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?yt:to}`,disabled:n,children:a.jsx(lt,{icon:o})}),M.map((T,E)=>P.isValidElement(T)&&T.type===C?P.cloneElement(T,{key:E}):null)]}),i&&a.jsx(ut.Portal,{children:a.jsx("div",{ref:v.setFloating,style:l,className:"juno-popupmenu-float-content-wrapper",children:R})})]}))})},C=({as:e="button",disabled:t=!1,children:n,className:o="",...s})=>a.jsx(mt,{as:e,className:`juno-popupmenu-toggle ${t&&yt} ${o}`,disabled:t,...s,children:n}),S=({children:e,className:t="",...n})=>{const{menuSize:o}=se();return a.jsx(gt,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${no} ${t}`,...n,children:e})},g=({as:e="div",children:t,className:n="",disabled:o=!1,href:s,icon:r,label:u="",rel:c,target:i,...f})=>{const{menuSize:m}=se(),v=m==="small"?ro:ao;return a.jsx(ft,{as:e,disabled:o,className:`juno-popupmenu-item ${oo} ${o?lo:so} ${v} ${n}`,...e==="a"?{href:s,rel:c,target:i}:{},...f,children:l=>a.jsxs(a.Fragment,{children:[r&&a.jsx(lt,{icon:r,size:"18",className:`juno-popupmenu-item-icon ${uo}`}),u&&typeof u=="string"?u:typeof t=="function"?t(l):t]})})},W=({children:e,className:t="",...n})=>a.jsx("section",{className:`juno-popupmenu-section ${io} ${t}`,...n,children:e}),ne=({children:e,label:t="",className:n="",...o})=>a.jsx("header",{className:`juno-popupmenu-section-title ${po} ${n}`,...o,children:a.jsx("h1",{children:t&&t.length?t:e})}),ge=({className:e="",...t})=>a.jsx("div",{className:`juno-popupmenu-section-divider ${co} ${e}`,...t});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}try{C.displayName="PopupMenuToggle",C.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{S.displayName="PopupMenuOptions",S.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{g.displayName="PopupMenuItem",g.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}try{W.displayName="PopupMenuSection",W.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ne.displayName="PopupMenuSectionHeading",ne.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ge.displayName="PopupMenuSectionSeparator",ge.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{me.displayName="PopupMenu",me.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const Eo={title:"WiP/PopupMenu",component:me,subcomponents:{PopupMenuToggle:C,PopupMenuOptions:S,PopupMenuItem:g,PopupMenuSection:W},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(Nt)],control:{type:"select"}}},decorators:[e=>a.jsx(ut,{children:e()})]},ve=P.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>a.jsx(fe,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));ve.displayName="ToggleButton";const Mt=P.forwardRef((e,t)=>{const{isOpen:n}=se(),{className:o,...s}=e;return a.jsx(fe,{ref:t,className:`toggle-button ${n?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...s,children:e.children||"Toggle Me!"})});Mt.displayName="StyledToggleButton";const go=e=>{const{close:t}=se();return a.jsx(fe,{onClick:t,...e})},q={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{...w("onOpen","onClose"),children:a.jsx(S,{children:a.jsx("p",{children:"Menu goes here."})})}},L={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...w("onOpen","onClose")}},K={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...w("onOpen","onClose"),disabled:!0}},H={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...w("onOpen","onClose"),children:a.jsxs(S,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]})}},z={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{...w("onOpen","onClose"),children:a.jsxs(S,{children:[a.jsx(g,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),a.jsx(g,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},U={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...w("onOpen","onClose"),children:a.jsxs(S,{children:[a.jsx("p",{children:"Some content goes here."}),a.jsx(go,{variant:"primary",children:"Yay!"})]})}},G={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...w("onOpen","onClose"),children:a.jsxs(S,{children:[a.jsxs(W,{children:[a.jsx(ne,{children:"Section 1"}),a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"})]}),a.jsx(ge,{}),a.jsxs(W,{children:[a.jsx(ne,{label:"Section 2"}),a.jsx(g,{label:"Menu Item 3"}),a.jsx(g,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},Y={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...w("onOpen","onClose"),icon:"warning",children:a.jsxs(S,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]})}},Q={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...w("onOpen","onClose"),children:[a.jsx(C,{children:"The Toggle"},"t"),a.jsxs(S,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},J={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...w("onOpen","onClose"),children:[a.jsx(C,{as:ve},"t"),a.jsxs(S,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},X={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...w("onOpen","onClose"),children:[a.jsx(C,{as:Mt},"t"),a.jsxs(S,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},Z={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...w("onOpen","onClose"),children:[a.jsx(C,{as:P.Fragment,children:a.jsx(ve,{})},"t"),a.jsxs(S,{children:[a.jsx(g,{label:"Menu Item 1"}),a.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var Se,je,Oe;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Oe=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var we,Te,Ee;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ce,Re,Ne;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ne=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var ke,Ae,$e;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...($e=(Ae=H.parameters)==null?void 0:Ae.docs)==null?void 0:$e.source}}};var De,Ve,Fe;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Fe=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var Be,We,qe;U.parameters={...U.parameters,docs:{...(Be=U.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(qe=(We=U.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Le,Ke,He;G.parameters={...G.parameters,docs:{...(Le=G.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ot=(nt=X.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var at,rt,st;Z.parameters={...Z.parameters,docs:{...(at=Z.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(rt=Z.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};const Co=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{q as Default,K as DisabledDefaultToggle,L as NoMenu,z as WithChildrenAsLinks,Z as WithCustomButtonComponentAsChild,Y as WithIcon,H as WithMenuChild,G as WithMenuChildWithSection,U as WithMenuWithRandomContent,Q as WithToggleAndMenuChildren,J as WithToggleAsButtonComponent,X as WithToggleAsButtonStyledByState,Co as __namedExportsOrder,Eo as default};
