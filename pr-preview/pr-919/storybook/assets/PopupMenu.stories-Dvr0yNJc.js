import{j as a}from"./jsx-runtime-D-gQZ2Nk.js";import{r as h,e as P}from"./index-BXnWnNu-.js";import{v as xt}from"./v4-CtRu48qb.js";import{u as St,o as jt,g as wt,e as _t,f as Ot}from"./floating-ui.react-BEnEHP5A.js";import{I as at,K as Et}from"./Icon.component-KLQ-3Fva.js";import{P as st}from"./PortalProvider.component-CHvemcrH.js";import{L as $,y as oe,n as ee,S as Ct,o as S,T as Tt,K as rt,V as Nt,D,x as Rt,R as kt,k as $t,d as Dt,f as At,g as Vt,i as te,m as Ft,h as qt,j as Bt,p as Wt,W as lt,l as Lt,q as Ht,r as Kt,F as zt,b as Gt,$ as Ut,c as Qt,w as Yt,e as Jt,A as be,v as Xt,M as Zt,z as en,t as ut,X as tn,C as I,G as nn,H as Me,E as x,Y as it,B as on,O as ue,_ as an,J as sn,N as rn}from"./portal-CxRCJl3j.js";import{r as q}from"./index-CzvS-M9C.js";import{a as ln,s as un}from"./use-text-value-CE0LmPae.js";import{F as pn}from"./use-tree-walker-ChKeye9K.js";import{B as me}from"./Button.component-BnZ4Yg-T.js";import"./Spinner.component-DqgRKBmm.js";var cn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(cn||{}),dn=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(dn||{}),mn=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e))(mn||{});function ie(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=an(t(e.items.slice()),l=>l.dataRef.current.domRef.current),r=n?o.indexOf(n):null;return r===-1&&(r=null),{items:o,activeItemIndex:r}}let fn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var n,o,r,l,u;if(e.menuState===1)return e;let d={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===x.Nothing)return{...d,activeItemIndex:null};if(t.focus===x.Specific)return{...d,activeItemIndex:e.items.findIndex(m=>m.id===t.id)};if(t.focus===x.Previous){let m=e.activeItemIndex;if(m!==null){let v=e.items[m].dataRef.current.domRef,s=ue(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(s!==null){let p=e.items[s].dataRef.current.domRef;if(((o=v.current)==null?void 0:o.previousElementSibling)===p.current||((r=p.current)==null?void 0:r.previousElementSibling)===null)return{...d,activeItemIndex:s}}}}else if(t.focus===x.Next){let m=e.activeItemIndex;if(m!==null){let v=e.items[m].dataRef.current.domRef,s=ue(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(s!==null){let p=e.items[s].dataRef.current.domRef;if(((l=v.current)==null?void 0:l.nextElementSibling)===p.current||((u=p.current)==null?void 0:u.nextElementSibling)===null)return{...d,activeItemIndex:s}}}}let i=ie(e),g=ue(t,{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:m=>m.id,resolveDisabled:m=>m.dataRef.current.disabled});return{...d,...i,activeItemIndex:g}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),r=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(u=>{var d;return((d=u.dataRef.current.textValue)==null?void 0:d.startsWith(o))&&!u.dataRef.current.disabled}),l=r?e.items.indexOf(r):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=ie(e,o=>[...o,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=ie(e,o=>{let r=o.findIndex(l=>l.id===t.id);return r!==-1&&o.splice(r,1),o});return{...e,...n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element}},fe=h.createContext(null);fe.displayName="MenuContext";function ae(e){let t=h.useContext(fe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ae),n}return t}function gn(e,t){return ut(t.type,fn,e,t)}let hn=h.Fragment;function vn(e,t){let{__demoMode:n=!1,...o}=e,r=h.useReducer(gn,{__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:l,itemsElement:u,buttonElement:d},i]=r,g=oe(t);Xt(l===0,[d,u],(M,w)=>{i({type:1}),sn(w,rn.Loose)||(M.preventDefault(),d==null||d.focus())});let m=S(()=>{i({type:1})}),v=h.useMemo(()=>({open:l===0,close:m}),[l,m]),s={ref:g},p=D();return P.createElement(Zt,null,P.createElement(fe.Provider,{value:r},P.createElement(en,{value:ut(l,{0:te.Open,1:te.Closed})},p({ourProps:s,theirProps:o,slot:v,defaultTag:hn,name:"Menu"}))))}let yn="button";function bn(e,t){var n;let o=h.useId(),{id:r=`headlessui-menu-button-${o}`,disabled:l=!1,autoFocus:u=!1,...d}=e,[i,g]=ae("Menu.Button"),m=zt(),v=oe(t,Gt(),S(b=>g({type:7,element:b}))),s=S(b=>{switch(b.key){case I.Space:case I.Enter:case I.ArrowDown:b.preventDefault(),b.stopPropagation(),q.flushSync(()=>g({type:0})),g({type:2,focus:x.First});break;case I.ArrowUp:b.preventDefault(),b.stopPropagation(),q.flushSync(()=>g({type:0})),g({type:2,focus:x.Last});break}}),p=S(b=>{switch(b.key){case I.Space:b.preventDefault();break}}),M=S(b=>{var V;if(on(b.currentTarget))return b.preventDefault();l||(i.menuState===0?(q.flushSync(()=>g({type:1})),(V=i.buttonElement)==null||V.focus({preventScroll:!0})):(b.preventDefault(),g({type:0})))}),{isFocusVisible:w,focusProps:N}=Ut({autoFocus:u}),{isHovered:y,hoverProps:R}=Qt({isDisabled:l}),{pressed:E,pressProps:C}=Yt({disabled:l}),A=h.useMemo(()=>({open:i.menuState===0,active:E||i.menuState===0,disabled:l,hover:y,focus:w,autofocus:u}),[i,y,w,E,l,u]),k=lt(m(),{ref:v,id:r,type:Jt(e,i.buttonElement),"aria-haspopup":"menu","aria-controls":(n=i.itemsElement)==null?void 0:n.id,"aria-expanded":i.menuState===0,disabled:l||void 0,autoFocus:u,onKeyDown:s,onKeyUp:p,onClick:M},N,R,C);return D()({ourProps:k,theirProps:d,slot:A,defaultTag:yn,name:"Menu.Button"})}let Mn="div",In=be.RenderStrategy|be.Static;function Pn(e,t){var n,o;let r=h.useId(),{id:l=`headlessui-menu-items-${r}`,anchor:u,portal:d=!1,modal:i=!0,transition:g=!1,...m}=e,v=Rt(u),[s,p]=ae("Menu.Items"),[M,w]=kt(v),N=$t(),[y,R]=h.useState(null),E=oe(t,v?M:null,S(c=>p({type:8,element:c})),R),C=Dt(s.itemsElement);v&&(d=!0);let A=At(),[k,b]=Vt(g,y,A!==null?(A&te.Open)===te.Open:s.menuState===0);Ft(k,s.buttonElement,()=>{p({type:1})});let V=s.__demoMode?!1:i&&s.menuState===0;qt(V,C);let re=s.__demoMode?!1:i&&s.menuState===0;Bt(re,{allowed:h.useCallback(()=>[s.buttonElement,s.itemsElement],[s.buttonElement,s.itemsElement])});let le=s.menuState!==0,_=un(le,s.buttonElement)?!1:k;h.useEffect(()=>{let c=s.itemsElement;c&&s.menuState===0&&c!==(C==null?void 0:C.activeElement)&&c.focus({preventScroll:!0})},[s.menuState,s.itemsElement,C]),pn(s.menuState===0,{container:s.itemsElement,accept(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}});let F=Wt(),vt=S(c=>{var he,ve,ye;switch(F.dispose(),c.key){case I.Space:if(s.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),p({type:3,value:c.key});case I.Enter:if(c.preventDefault(),c.stopPropagation(),p({type:1}),s.activeItemIndex!==null){let{dataRef:Pt}=s.items[s.activeItemIndex];(ve=(he=Pt.current)==null?void 0:he.domRef.current)==null||ve.click()}it(s.buttonElement);break;case I.ArrowDown:return c.preventDefault(),c.stopPropagation(),p({type:2,focus:x.Next});case I.ArrowUp:return c.preventDefault(),c.stopPropagation(),p({type:2,focus:x.Previous});case I.Home:case I.PageUp:return c.preventDefault(),c.stopPropagation(),p({type:2,focus:x.First});case I.End:case I.PageDown:return c.preventDefault(),c.stopPropagation(),p({type:2,focus:x.Last});case I.Escape:c.preventDefault(),c.stopPropagation(),q.flushSync(()=>p({type:1})),(ye=s.buttonElement)==null||ye.focus({preventScroll:!0});break;case I.Tab:c.preventDefault(),c.stopPropagation(),q.flushSync(()=>p({type:1})),nn(s.buttonElement,c.shiftKey?Me.Previous:Me.Next);break;default:c.key.length===1&&(p({type:3,value:c.key}),F.setTimeout(()=>p({type:4}),350));break}}),yt=S(c=>{switch(c.key){case I.Space:c.preventDefault();break}}),bt=h.useMemo(()=>({open:s.menuState===0}),[s.menuState]),Mt=lt(v?N():{},{"aria-activedescendant":s.activeItemIndex===null||(n=s.items[s.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(o=s.buttonElement)==null?void 0:o.id,id:l,onKeyDown:vt,onKeyUp:yt,role:"menu",tabIndex:s.menuState===0?0:void 0,ref:E,style:{...m.style,...w,"--button-width":Ht(s.buttonElement,!0).width},...Lt(b)}),It=D();return P.createElement(Kt,{enabled:d?e.static||k:!1},It({ourProps:Mt,theirProps:m,slot:bt,defaultTag:Mn,features:In,visible:_,name:"Menu.Items"}))}let xn=h.Fragment;function Sn(e,t){let n=h.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:r=!1,...l}=e,[u,d]=ae("Menu.Item"),i=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===o:!1,g=h.useRef(null),m=oe(t,g);ee(()=>{if(!u.__demoMode&&u.menuState===0&&i&&u.activationTrigger!==0)return Ct().requestAnimationFrame(()=>{var _,F;(F=(_=g.current)==null?void 0:_.scrollIntoView)==null||F.call(_,{block:"nearest"})})},[u.__demoMode,g,i,u.menuState,u.activationTrigger,u.activeItemIndex]);let v=ln(g),s=h.useRef({disabled:r,domRef:g,get textValue(){return v()}});ee(()=>{s.current.disabled=r},[s,r]),ee(()=>(d({type:5,id:o,dataRef:s}),()=>d({type:6,id:o})),[s,o]);let p=S(()=>{d({type:1})}),M=S(_=>{if(r)return _.preventDefault();d({type:1}),it(u.buttonElement)}),w=S(()=>{if(r)return d({type:2,focus:x.Nothing});d({type:2,focus:x.Specific,id:o})}),N=Tt(),y=S(_=>{N.update(_),!r&&(i||d({type:2,focus:x.Specific,id:o,trigger:0}))}),R=S(_=>{N.wasMoved(_)&&(r||i||d({type:2,focus:x.Specific,id:o,trigger:0}))}),E=S(_=>{N.wasMoved(_)&&(r||i&&d({type:2,focus:x.Nothing}))}),[C,A]=rt(),[k,b]=Nt(),V=h.useMemo(()=>({active:i,focus:i,disabled:r,close:p}),[i,r,p]),re={id:o,ref:m,role:"menuitem",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-labelledby":C,"aria-describedby":k,disabled:void 0,onClick:M,onFocus:w,onPointerEnter:y,onMouseEnter:y,onPointerMove:R,onMouseMove:R,onPointerLeave:E,onMouseLeave:E},le=D();return P.createElement(A,null,P.createElement(b,null,le({ourProps:re,theirProps:l,slot:V,defaultTag:xn,name:"Menu.Item"})))}let jn="div";function wn(e,t){let[n,o]=rt(),r=e,l={ref:t,"aria-labelledby":n,role:"group"},u=D();return P.createElement(o,null,u({ourProps:l,theirProps:r,slot:{},defaultTag:jn,name:"Menu.Section"}))}let _n="header";function On(e,t){let n=h.useId(),{id:o=`headlessui-menu-heading-${n}`,...r}=e,l=tn();ee(()=>l.register(o),[o,l.register]);let u={id:o,ref:t,role:"presentation",...l.props};return D()({ourProps:u,theirProps:r,slot:{},defaultTag:_n,name:"Menu.Heading"})}let En="div";function Cn(e,t){let n=e,o={ref:t,role:"separator"};return D()({ourProps:o,theirProps:n,slot:{},defaultTag:En,name:"Menu.Separator"})}let Tn=$(vn),pt=$(bn),ct=$(Pn),dt=$(Sn),Nn=$(wn),Rn=$(On),kn=$(Cn),$n=Object.assign(Tn,{Button:pt,Items:ct,Item:dt,Section:Nn,Heading:Rn,Separator:kn});const{addons:Dn}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:An}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Ie}=__STORYBOOK_MODULE_GLOBAL__;var Vn="storybook/actions",Fn=`${Vn}/action-event`,pe={depth:10,clearOnStoryChange:!0,limit:50},mt=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:mt(n,t)},qn=e=>!!(typeof e=="object"&&e&&mt(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Bn=e=>{if(qn(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),o=n==null?void 0:n.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(o.constructor.prototype)}),t}return e},Wn=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?xt():Date.now().toString(36)+Math.random().toString(36).substring(2);function Ln(e,t={}){let n={...pe,...t},o=function(...r){var v,s;if(t.implicit){let p=(v="__STORYBOOK_PREVIEW__"in Ie?Ie.__STORYBOOK_PREVIEW__:void 0)==null?void 0:v.storyRenders.find(M=>M.phase==="playing"||M.phase==="rendering");if(p){let M=!((s=window==null?void 0:window.FEATURES)!=null&&s.disallowImplicitActionsInRenderV8),w=new An({phase:p.phase,name:e,deprecated:M});if(M)console.warn(w);else throw w}}let l=Dn.getChannel(),u=Wn(),d=5,i=r.map(Bn),g=r.length>1?i:i[0],m={id:u,count:0,data:{name:e,args:g},options:{...n,maxDepth:d+(n.depth||3),allowFunction:n.allowFunction||!1}};l.emit(Fn,m)};return o.isAction=!0,o.implicit=t.implicit,o}var O=(...e)=>{let t=pe,n=e;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(t={...pe,...n.pop()});let o=n[0];(n.length!==1||typeof o=="string")&&(o={},n.forEach(l=>{o[l]=l}));let r={};return Object.keys(o).forEach(l=>{r[l]=Ln(o[l],t)}),r};const Hn=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,ft=`
  jn-cursor-not-allowed
  jn-opacity-50
`,Kn=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,zn=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Gn=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Un=`
  jn-text-sm
  jn-p-2
`,Qn=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,Yn=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,Jn=`
  jn-inline-block
  jn-mr-2
`,Xn=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,Zn=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,eo=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,to=`
  jn-inline-flex
`,gt=h.createContext(null),se=()=>{const e=h.useContext(gt);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},ce=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:r="normal",onClose:l,onOpen:u,...d})=>{const[i,g]=h.useState(!1),m=h.useRef(i),{refs:v,floatingStyles:s,update:p}=St({placement:"bottom-start",middleware:[jt(4),wt(),_t({padding:8})],whileElementsMounted:Ot});h.useEffect(()=>{i!==m.current&&(i?u==null||u():l==null||l()),m.current=i},[i,u,l]);const M=P.Children.toArray(e),w=M.some(y=>P.isValidElement(y)&&y.type===T),N=M.find(y=>P.isValidElement(y)&&y.type===j);return a.jsx($n,{as:"div",className:`juno-popupmenu ${t}`,...d,children:({open:y,close:R})=>(h.useEffect(()=>{y!==i&&(g(y),y&&p())},[y]),a.jsxs(gt.Provider,{value:{isOpen:i,close:R,menuSize:r},children:[a.jsxs("div",{ref:v.setReference,className:`juno-popupmenu-float-reference-wrapper ${to}`,children:[!w&&a.jsx(T,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?ft:Hn}`,disabled:n,children:a.jsx(at,{icon:o})}),M.map((E,C)=>P.isValidElement(E)&&E.type===T?P.cloneElement(E,{key:C}):null)]}),i&&a.jsx(st.Portal,{children:a.jsx("div",{ref:v.setFloating,style:s,className:"juno-popupmenu-float-content-wrapper",children:N})})]}))})},T=({as:e="button",disabled:t=!1,children:n,className:o="",...r})=>a.jsx(pt,{as:e,className:`juno-popupmenu-toggle ${t&&ft} ${o}`,disabled:t,...r,children:n}),j=({children:e,className:t="",...n})=>{const{menuSize:o}=se();return a.jsx(ct,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${Kn} ${t}`,...n,children:e})},f=({as:e="div",children:t,className:n="",disabled:o=!1,href:r,icon:l,label:u="",rel:d,target:i,...g})=>{const{menuSize:m}=se(),v=m==="small"?Un:Gn;return a.jsx(dt,{as:e,disabled:o,className:`juno-popupmenu-item ${zn} ${o?Yn:Qn} ${v} ${n}`,...e==="a"?{href:r,rel:d,target:i}:{},...g,children:s=>a.jsxs(a.Fragment,{children:[l&&a.jsx(at,{icon:l,size:"18",className:`juno-popupmenu-item-icon ${Jn}`}),u&&typeof u=="string"?u:typeof t=="function"?t(s):t]})})},B=({children:e,className:t="",...n})=>a.jsx("section",{className:`juno-popupmenu-section ${Xn} ${t}`,...n,children:e}),ne=({children:e,label:t="",className:n="",...o})=>a.jsx("header",{className:`juno-popupmenu-section-title ${Zn} ${n}`,...o,children:a.jsx("h1",{children:t&&t.length?t:e})}),de=({className:e="",...t})=>a.jsx("div",{className:`juno-popupmenu-section-divider ${eo} ${e}`,...t});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}try{T.displayName="PopupMenuToggle",T.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{j.displayName="PopupMenuOptions",j.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{f.displayName="PopupMenuItem",f.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}try{B.displayName="PopupMenuSection",B.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ne.displayName="PopupMenuSectionHeading",ne.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{de.displayName="PopupMenuSectionSeparator",de.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ce.displayName="PopupMenu",ce.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const ho={title:"WiP/PopupMenu",component:ce,subcomponents:{PopupMenuToggle:T,PopupMenuOptions:j,PopupMenuItem:f,PopupMenuSection:B},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(Et)],control:{type:"select"}}},decorators:[e=>a.jsx(st,{children:e()})]},ge=P.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>a.jsx(me,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));ge.displayName="ToggleButton";const ht=P.forwardRef((e,t)=>{const{isOpen:n}=se(),{className:o,...r}=e;return a.jsx(me,{ref:t,className:`toggle-button ${n?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...r,children:e.children||"Toggle Me!"})});ht.displayName="StyledToggleButton";const no=e=>{const{close:t}=se();return a.jsx(me,{onClick:t,...e})},W={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{...O("onOpen","onClose"),children:a.jsx(j,{children:a.jsx("p",{children:"Menu goes here."})})}},L={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...O("onOpen","onClose")}},H={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...O("onOpen","onClose"),disabled:!0}},K={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...O("onOpen","onClose"),children:a.jsxs(j,{children:[a.jsx(f,{label:"Menu Item 1"}),a.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]})}},z={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{...O("onOpen","onClose"),children:a.jsxs(j,{children:[a.jsx(f,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),a.jsx(f,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},G={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...O("onOpen","onClose"),children:a.jsxs(j,{children:[a.jsx("p",{children:"Some content goes here."}),a.jsx(no,{variant:"primary",children:"Yay!"})]})}},U={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...O("onOpen","onClose"),children:a.jsxs(j,{children:[a.jsxs(B,{children:[a.jsx(ne,{children:"Section 1"}),a.jsx(f,{label:"Menu Item 1"}),a.jsx(f,{label:"Menu Item 2",icon:"deleteForever"})]}),a.jsx(de,{}),a.jsxs(B,{children:[a.jsx(ne,{label:"Section 2"}),a.jsx(f,{label:"Menu Item 3"}),a.jsx(f,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},Q={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...O("onOpen","onClose"),icon:"warning",children:a.jsxs(j,{children:[a.jsx(f,{label:"Menu Item 1"}),a.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]})}},Y={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...O("onOpen","onClose"),children:[a.jsx(T,{children:"The Toggle"},"t"),a.jsxs(j,{children:[a.jsx(f,{label:"Menu Item 1"}),a.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},J={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...O("onOpen","onClose"),children:[a.jsx(T,{as:ge},"t"),a.jsxs(j,{children:[a.jsx(f,{label:"Menu Item 1"}),a.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},X={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...O("onOpen","onClose"),children:[a.jsx(T,{as:ht},"t"),a.jsxs(j,{children:[a.jsx(f,{label:"Menu Item 1"}),a.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},Z={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...O("onOpen","onClose"),children:[a.jsx(T,{as:P.Fragment,children:a.jsx(ge,{})},"t"),a.jsxs(j,{children:[a.jsx(f,{label:"Menu Item 1"}),a.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var Pe,xe,Se;W.parameters={...W.parameters,docs:{...(Pe=W.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Se=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var je,we,_e;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(_e=(we=L.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};var Oe,Ee,Ce;H.parameters={...H.parameters,docs:{...(Oe=H.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ce=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Te,Ne,Re;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Re=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};var ke,$e,De;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Ae,Ve,Fe;G.parameters={...G.parameters,docs:{...(Ae=G.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Fe=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var qe,Be,We;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(We=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Le,He,Ke;Q.parameters={...Q.parameters,docs:{...(Le=Q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ke=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var ze,Ge,Ue;Y.parameters={...Y.parameters,docs:{...(ze=Y.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Qe,Ye,Je;J.parameters={...J.parameters,docs:{...(Qe=J.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=J.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Xe,Ze,et;X.parameters={...X.parameters,docs:{...(Xe=X.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=X.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,ot;Z.parameters={...Z.parameters,docs:{...(tt=Z.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Z.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};const vo=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{W as Default,H as DisabledDefaultToggle,L as NoMenu,z as WithChildrenAsLinks,Z as WithCustomButtonComponentAsChild,Q as WithIcon,K as WithMenuChild,U as WithMenuChildWithSection,G as WithMenuWithRandomContent,Y as WithToggleAndMenuChildren,J as WithToggleAsButtonComponent,X as WithToggleAsButtonStyledByState,vo as __namedExportsOrder,ho as default};
