import{j as t}from"./jsx-runtime-D-gQZ2Nk.js";import{r as f,e as P}from"./index-BXnWnNu-.js";import{v as yn}from"./v4-CtRu48qb.js";import{u as In,o as Pn,g as xn,e as Sn,f as jn}from"./floating-ui.react-BEnEHP5A.js";import{I as Ze,K as wn}from"./Icon.component-uANO5hmX.js";import{P as en}from"./PortalProvider.component-CHvemcrH.js";import{L as $,F as En,y as Z,o as S,b as Cn,$ as Tn,c as On,w as _n,W as nn,e as Rn,D,x as $n,R as Dn,k as An,d as kn,f as Nn,g as Fn,i as X,m as Wn,h as Bn,j as Vn,p as Ln,l as Hn,q as qn,r as Kn,v as zn,M as Gn,z as Un,t as tn,V as Qn,n as J,K as on,S as Yn,T as Jn,X as Xn,B as Zn,C as I,E as x,G as et,H as ge,Y as rn,A as he,O as re,_ as nt,J as tt,N as ot}from"./portal-DFhZDPNF.js";import{r as F}from"./index-CzvS-M9C.js";import{s as rt,a as st}from"./use-text-value-l6TQAXZ1.js";import{F as at}from"./use-tree-walker-BIrZpV27.js";import{B as le}from"./Button.component-C3Sbd-0a.js";import"./Spinner.component-DqgRKBmm.js";var ut=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ut||{}),lt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(lt||{}),it=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e))(it||{});function se(e,n=o=>o){let o=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,r=nt(n(e.items.slice()),l=>l.dataRef.current.domRef.current),u=o?r.indexOf(o):null;return u===-1&&(u=null),{items:r,activeItemIndex:u}}let pt={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,n)=>{var o,r,u,l,i;if(e.menuState===1)return e;let m={...e,searchQuery:"",activationTrigger:(o=n.trigger)!=null?o:1,__demoMode:!1};if(n.focus===x.Nothing)return{...m,activeItemIndex:null};if(n.focus===x.Specific)return{...m,activeItemIndex:e.items.findIndex(g=>g.id===n.id)};if(n.focus===x.Previous){let g=e.activeItemIndex;if(g!==null){let M=e.items[g].dataRef.current.domRef,a=re(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(a!==null){let c=e.items[a].dataRef.current.domRef;if(((r=M.current)==null?void 0:r.previousElementSibling)===c.current||((u=c.current)==null?void 0:u.previousElementSibling)===null)return{...m,activeItemIndex:a}}}}else if(n.focus===x.Next){let g=e.activeItemIndex;if(g!==null){let M=e.items[g].dataRef.current.domRef,a=re(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(a!==null){let c=e.items[a].dataRef.current.domRef;if(((l=M.current)==null?void 0:l.nextElementSibling)===c.current||((i=c.current)==null?void 0:i.nextElementSibling)===null)return{...m,activeItemIndex:a}}}}let p=se(e),h=re(n,{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.current.disabled});return{...m,...p,activeItemIndex:h}},3:(e,n)=>{let o=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),u=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+o).concat(e.items.slice(0,e.activeItemIndex+o)):e.items).find(i=>{var m;return((m=i.dataRef.current.textValue)==null?void 0:m.startsWith(r))&&!i.dataRef.current.disabled}),l=u?e.items.indexOf(u):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,n)=>{let o=se(e,r=>[...r,{id:n.id,dataRef:n.dataRef}]);return{...e,...o}},6:(e,n)=>{let o=se(e,r=>{let u=r.findIndex(l=>l.id===n.id);return u!==-1&&r.splice(u,1),r});return{...e,...o,activationTrigger:1}},7:(e,n)=>e.buttonElement===n.element?e:{...e,buttonElement:n.element},8:(e,n)=>e.itemsElement===n.element?e:{...e,itemsElement:n.element}},ie=f.createContext(null);ie.displayName="MenuContext";function ee(e){let n=f.useContext(ie);if(n===null){let o=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,ee),o}return n}function ct(e,n){return tn(n.type,pt,e,n)}let dt=f.Fragment;function mt(e,n){let{__demoMode:o=!1,...r}=e,u=f.useReducer(ct,{__demoMode:o,menuState:o?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:l,itemsElement:i,buttonElement:m},p]=u,h=Z(n);zn(l===0,[m,i],(y,j)=>{p({type:1}),tt(j,ot.Loose)||(y.preventDefault(),m==null||m.focus())});let g=S(()=>{p({type:1})}),M=f.useMemo(()=>({open:l===0,close:g}),[l,g]),a={ref:h},c=D();return P.createElement(Gn,null,P.createElement(ie.Provider,{value:u},P.createElement(Un,{value:tn(l,{0:X.Open,1:X.Closed})},c({ourProps:a,theirProps:r,slot:M,defaultTag:dt,name:"Menu"}))))}let gt="button";function ht(e,n){var o;let r=f.useId(),{id:u=`headlessui-menu-button-${r}`,disabled:l=!1,autoFocus:i=!1,...m}=e,[p,h]=ee("Menu.Button"),g=En(),M=Z(n,Cn(),S(b=>h({type:7,element:b}))),a=S(b=>{switch(b.key){case I.Space:case I.Enter:case I.ArrowDown:b.preventDefault(),b.stopPropagation(),F.flushSync(()=>h({type:0})),h({type:2,focus:x.First});break;case I.ArrowUp:b.preventDefault(),b.stopPropagation(),F.flushSync(()=>h({type:0})),h({type:2,focus:x.Last});break}}),c=S(b=>{switch(b.key){case I.Space:b.preventDefault();break}}),y=S(b=>{var k;if(Zn(b.currentTarget))return b.preventDefault();l||(p.menuState===0?(F.flushSync(()=>h({type:1})),(k=p.buttonElement)==null||k.focus({preventScroll:!0})):(b.preventDefault(),h({type:0})))}),{isFocusVisible:j,focusProps:O}=Tn({autoFocus:i}),{isHovered:v,hoverProps:_}=On({isDisabled:l}),{pressed:C,pressProps:T}=_n({disabled:l}),A=f.useMemo(()=>({open:p.menuState===0,active:C||p.menuState===0,disabled:l,hover:v,focus:j,autofocus:i}),[p,v,j,C,l,i]),R=nn(g(),{ref:M,id:u,type:Rn(e,p.buttonElement),"aria-haspopup":"menu","aria-controls":(o=p.itemsElement)==null?void 0:o.id,"aria-expanded":p.menuState===0,disabled:l||void 0,autoFocus:i,onKeyDown:a,onKeyUp:c,onClick:y},O,_,T);return D()({ourProps:R,theirProps:m,slot:A,defaultTag:gt,name:"Menu.Button"})}let ft="div",Mt=he.RenderStrategy|he.Static;function vt(e,n){var o,r;let u=f.useId(),{id:l=`headlessui-menu-items-${u}`,anchor:i,portal:m=!1,modal:p=!0,transition:h=!1,...g}=e,M=$n(i),[a,c]=ee("Menu.Items"),[y,j]=Dn(M),O=An(),[v,_]=f.useState(null),C=Z(n,M?y:null,S(d=>c({type:8,element:d})),_),T=kn(a.itemsElement);M&&(m=!0);let A=Nn(),[R,b]=Fn(h,v,A!==null?(A&X.Open)===X.Open:a.menuState===0);Wn(R,a.buttonElement,()=>{c({type:1})});let k=a.__demoMode?!1:p&&a.menuState===0;Bn(k,T);let te=a.__demoMode?!1:p&&a.menuState===0;Vn(te,{allowed:f.useCallback(()=>[a.buttonElement,a.itemsElement],[a.buttonElement,a.itemsElement])});let oe=a.menuState!==0,w=rt(oe,a.buttonElement)?!1:R;f.useEffect(()=>{let d=a.itemsElement;d&&a.menuState===0&&d!==(T==null?void 0:T.activeElement)&&d.focus({preventScroll:!0})},[a.menuState,a.itemsElement,T]),at(a.menuState===0,{container:a.itemsElement,accept(d){return d.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});let N=Ln(),gn=S(d=>{var ce,de,me;switch(N.dispose(),d.key){case I.Space:if(a.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),c({type:3,value:d.key});case I.Enter:if(d.preventDefault(),d.stopPropagation(),c({type:1}),a.activeItemIndex!==null){let{dataRef:bn}=a.items[a.activeItemIndex];(de=(ce=bn.current)==null?void 0:ce.domRef.current)==null||de.click()}rn(a.buttonElement);break;case I.ArrowDown:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.Next});case I.ArrowUp:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.Previous});case I.Home:case I.PageUp:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.First});case I.End:case I.PageDown:return d.preventDefault(),d.stopPropagation(),c({type:2,focus:x.Last});case I.Escape:d.preventDefault(),d.stopPropagation(),F.flushSync(()=>c({type:1})),(me=a.buttonElement)==null||me.focus({preventScroll:!0});break;case I.Tab:d.preventDefault(),d.stopPropagation(),F.flushSync(()=>c({type:1})),et(a.buttonElement,d.shiftKey?ge.Previous:ge.Next);break;default:d.key.length===1&&(c({type:3,value:d.key}),N.setTimeout(()=>c({type:4}),350));break}}),hn=S(d=>{switch(d.key){case I.Space:d.preventDefault();break}}),fn=f.useMemo(()=>({open:a.menuState===0}),[a.menuState]),Mn=nn(M?O():{},{"aria-activedescendant":a.activeItemIndex===null||(o=a.items[a.activeItemIndex])==null?void 0:o.id,"aria-labelledby":(r=a.buttonElement)==null?void 0:r.id,id:l,onKeyDown:gn,onKeyUp:hn,role:"menu",tabIndex:a.menuState===0?0:void 0,ref:C,style:{...g.style,...j,"--button-width":qn(a.buttonElement,!0).width},...Hn(b)}),vn=D();return P.createElement(Kn,{enabled:m?e.static||R:!1},vn({ourProps:Mn,theirProps:g,slot:fn,defaultTag:ft,features:Mt,visible:w,name:"Menu.Items"}))}let bt=f.Fragment;function yt(e,n){let o=f.useId(),{id:r=`headlessui-menu-item-${o}`,disabled:u=!1,...l}=e,[i,m]=ee("Menu.Item"),p=i.activeItemIndex!==null?i.items[i.activeItemIndex].id===r:!1,h=f.useRef(null),g=Z(n,h);J(()=>{if(!i.__demoMode&&i.menuState===0&&p&&i.activationTrigger!==0)return Yn().requestAnimationFrame(()=>{var w,N;(N=(w=h.current)==null?void 0:w.scrollIntoView)==null||N.call(w,{block:"nearest"})})},[i.__demoMode,h,p,i.menuState,i.activationTrigger,i.activeItemIndex]);let M=st(h),a=f.useRef({disabled:u,domRef:h,get textValue(){return M()}});J(()=>{a.current.disabled=u},[a,u]),J(()=>(m({type:5,id:r,dataRef:a}),()=>m({type:6,id:r})),[a,r]);let c=S(()=>{m({type:1})}),y=S(w=>{if(u)return w.preventDefault();m({type:1}),rn(i.buttonElement)}),j=S(()=>{if(u)return m({type:2,focus:x.Nothing});m({type:2,focus:x.Specific,id:r})}),O=Jn(),v=S(w=>{O.update(w),!u&&(p||m({type:2,focus:x.Specific,id:r,trigger:0}))}),_=S(w=>{O.wasMoved(w)&&(u||p||m({type:2,focus:x.Specific,id:r,trigger:0}))}),C=S(w=>{O.wasMoved(w)&&(u||p&&m({type:2,focus:x.Nothing}))}),[T,A]=on(),[R,b]=Xn(),k=f.useMemo(()=>({active:p,focus:p,disabled:u,close:c}),[p,u,c]),te={id:r,ref:g,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-labelledby":T,"aria-describedby":R,disabled:void 0,onClick:y,onFocus:j,onPointerEnter:v,onMouseEnter:v,onPointerMove:_,onMouseMove:_,onPointerLeave:C,onMouseLeave:C},oe=D();return P.createElement(A,null,P.createElement(b,null,oe({ourProps:te,theirProps:l,slot:k,defaultTag:bt,name:"Menu.Item"})))}let It="div";function Pt(e,n){let[o,r]=on(),u=e,l={ref:n,"aria-labelledby":o,role:"group"},i=D();return P.createElement(r,null,i({ourProps:l,theirProps:u,slot:{},defaultTag:It,name:"Menu.Section"}))}let xt="header";function St(e,n){let o=f.useId(),{id:r=`headlessui-menu-heading-${o}`,...u}=e,l=Qn();J(()=>l.register(r),[r,l.register]);let i={id:r,ref:n,role:"presentation",...l.props};return D()({ourProps:i,theirProps:u,slot:{},defaultTag:xt,name:"Menu.Heading"})}let jt="div";function wt(e,n){let o=e,r={ref:n,role:"separator"};return D()({ourProps:r,theirProps:o,slot:{},defaultTag:jt,name:"Menu.Separator"})}let Et=$(mt),sn=$(ht),an=$(vt),un=$(yt),Ct=$(Pt),Tt=$(St),Ot=$(wt),_t=Object.assign(Et,{Button:sn,Items:an,Item:un,Section:Ct,Heading:Tt,Separator:Ot});const{addons:Rt}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:$t}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:fe}=__STORYBOOK_MODULE_GLOBAL__;var Dt="storybook/actions",At=`${Dt}/action-event`,ae={depth:10,clearOnStoryChange:!0,limit:50},ln=(e,n)=>{let o=Object.getPrototypeOf(e);return!o||n(o)?o:ln(o,n)},kt=e=>!!(typeof e=="object"&&e&&ln(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),Nt=e=>{if(kt(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let o=Object.getOwnPropertyDescriptor(n,"view"),r=o==null?void 0:o.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...o,value:Object.create(r.constructor.prototype)}),n}return e},Ft=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?yn():Date.now().toString(36)+Math.random().toString(36).substring(2);function Wt(e,n={}){let o={...ae,...n},r=function(...u){var M,a;if(n.implicit){let c=(M="__STORYBOOK_PREVIEW__"in fe?fe.__STORYBOOK_PREVIEW__:void 0)==null?void 0:M.storyRenders.find(y=>y.phase==="playing"||y.phase==="rendering");if(c){let y=!((a=window==null?void 0:window.FEATURES)!=null&&a.disallowImplicitActionsInRenderV8),j=new $t({phase:c.phase,name:e,deprecated:y});if(y)console.warn(j);else throw j}}let l=Rt.getChannel(),i=Ft(),m=5,p=u.map(Nt),h=u.length>1?p:p[0],g={id:i,count:0,data:{name:e,args:h},options:{...o,maxDepth:m+(o.depth||3),allowFunction:o.allowFunction||!1}};l.emit(At,g)};return r.isAction=!0,r.implicit=n.implicit,r}var E=(...e)=>{let n=ae,o=e;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(n={...ae,...o.pop()});let r=o[0];(o.length!==1||typeof r=="string")&&(r={},o.forEach(l=>{r[l]=l}));let u={};return Object.keys(r).forEach(l=>{u[l]=Wt(r[l],n)}),u};const Bt=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,pn=`
  jn-cursor-not-allowed
  jn-opacity-50
`,Vt=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,Lt=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Ht=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,qt=`
  jn-text-sm
  jn-p-2
`,Kt=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,zt=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,Gt=`
  jn-inline-block
  jn-mr-2
`,Ut=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,Qt=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,Yt=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,Jt=`
  jn-inline-flex
`,cn=f.createContext(null),ne=()=>{const e=f.useContext(cn);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},s=({children:e,className:n="",disabled:o=!1,icon:r="moreVert",menuSize:u="normal",onClose:l,onOpen:i,...m})=>{const[p,h]=f.useState(!1),g=f.useRef(p),{refs:M,floatingStyles:a,update:c}=In({placement:"bottom-start",middleware:[Pn(4),xn(),Sn({padding:8})],whileElementsMounted:jn});f.useEffect(()=>{p!==g.current&&(p?i==null||i():l==null||l()),g.current=p},[p,i,l]);const y=P.Children.toArray(e),j=y.some(v=>P.isValidElement(v)&&v.type===ue),O=y.find(v=>P.isValidElement(v)&&v.type===dn);return t.jsx(_t,{as:"div",className:`juno-popupmenu ${n}`,...m,children:({open:v,close:_})=>(f.useEffect(()=>{v!==p&&(h(v),v&&c())},[v]),t.jsxs(cn.Provider,{value:{isOpen:p,close:_,menuSize:u},children:[t.jsxs("div",{ref:M.setReference,className:`juno-popupmenu-float-reference-wrapper ${Jt}`,children:[!j&&t.jsx(s.Toggle,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${o?pn:Bt}`,disabled:o,children:t.jsx(Ze,{icon:r})}),y.map((C,T)=>P.isValidElement(C)&&C.type===ue?P.cloneElement(C,{key:T}):null)]}),p&&t.jsx(en.Portal,{children:t.jsx("div",{ref:M.setFloating,style:a,className:"juno-popupmenu-float-content-wrapper",children:O})})]}))})},ue=({as:e="button",disabled:n=!1,children:o,className:r="",...u})=>t.jsx(sn,{as:e,className:`juno-popupmenu-toggle ${n&&pn} ${r}`,disabled:n,...u,children:o}),dn=({children:e,className:n="",...o})=>{const{menuSize:r}=ne();return t.jsx(an,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${r} ${Vt} ${n}`,...o,children:e})},Xt=({as:e="div",children:n,className:o="",disabled:r=!1,href:u,icon:l,label:i="",rel:m,target:p,...h})=>{const{menuSize:g}=ne(),M=g==="small"?qt:Ht;return t.jsx(un,{as:e,disabled:r,className:`juno-popupmenu-item ${Lt} ${r?zt:Kt} ${M} ${o}`,...e==="a"?{href:u,rel:m,target:p}:{},...h,children:a=>t.jsxs(t.Fragment,{children:[l&&t.jsx(Ze,{icon:l,size:"18",className:`juno-popupmenu-item-icon ${Gt}`}),i&&typeof i=="string"?i:typeof n=="function"?n(a):n]})})},Zt=({children:e,className:n="",...o})=>t.jsx("section",{className:`juno-popupmenu-section ${Ut} ${n}`,...o,children:e}),eo=({children:e,label:n="",className:o="",...r})=>t.jsx("header",{className:`juno-popupmenu-section-title ${Qt} ${o}`,...r,children:t.jsx("h1",{children:n&&n.length?n:e})}),no=({className:e="",...n})=>t.jsx("div",{className:`juno-popupmenu-section-divider ${Yt} ${e}`,...n});s.Toggle=ue;s.Menu=dn;s.Item=Xt;s.Section=Zt;s.SectionHeading=eo;s.SectionSeparator=no;try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}try{s.displayName="PopupMenu",s.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const fo={title:"WiP/PopupMenu",component:s,subcomponents:{"PopupMenu.Toggle":s.Toggle,"PopupMenu.Menu":s.Menu,"PopupMenu.Item":s.Item,"PopupMenu.Section":s.Section},parameters:{},argTypes:{icon:{options:["moreVert",...Object.keys(wn)],control:{type:"select"}},disabled:{control:"boolean"}},decorators:[e=>t.jsx(en,{children:e()})]},pe=P.forwardRef(({className:e="",onClick:n=void 0,...o},r)=>t.jsx(le,{ref:r,className:`my-custom-toggle ${e}`,onClick:n,...o,children:"Custom Toggle"}));pe.displayName="ToggleButton";const mn=P.forwardRef((e,n)=>{const{isOpen:o}=ne(),{className:r,...u}=e;return t.jsx(le,{ref:n,className:`toggle-button ${o?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${r||""}`,...u,children:e.children||"Toggle Me!"})});mn.displayName="StyledToggleButton";const to=e=>{const{close:n}=ne();return t.jsx(le,{onClick:n,...e})},W={parameters:{docs:{description:{story:"When no `<PopupMenu.Menu>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed."}}},args:{...E("onOpen","onClose")},render:e=>t.jsx(s,{...e,children:t.jsx(s.Menu,{children:t.jsx("p",{children:"Menu goes here."})})})},B={parameters:{docs:{description:{story:"This story has no `PopupMenu.Menu` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...E("onOpen","onClose")},render:e=>t.jsx(s,{...e})},V={parameters:{docs:{description:{story:"Disable the default toggle."}}},args:{...E("onOpen","onClose"),disabled:!0},render:e=>t.jsx(s,{...e})},L={parameters:{docs:{description:{story:"Pass at least a `<PopupMenu.Menu>` component with `<PopupMenu.Item>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...E("onOpen","onClose")},render:e=>t.jsx(s,{...e,children:t.jsxs(s.Menu,{children:[t.jsx(s.Item,{label:"Menu Item 1"}),t.jsx(s.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(s.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})})},H={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenu.Item elements as links."}}},args:{...E("onOpen","onClose")},render:e=>t.jsx(s,{...e,children:t.jsxs(s.Menu,{children:[t.jsx(s.Item,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),t.jsx(s.Item,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})})},q={parameters:{docs:{description:{story:"`PopupMenu.Item` elements may contain random elements other than `PopupMenu.Item`. In such cases you may consume the PupupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...E("onOpen","onClose")},render:e=>t.jsx(s,{...e,children:t.jsxs(s.Menu,{children:[t.jsx("p",{children:"Some content goes here."}),t.jsx(to,{variant:"primary",children:"Yay!"})]})})},K={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...E("onOpen","onClose")},render:e=>t.jsx(s,{...e,children:t.jsxs(s.Menu,{children:[t.jsxs(s.Section,{children:[t.jsx(s.SectionHeading,{children:"Section 1"}),t.jsx(s.Item,{label:"Menu Item 1"}),t.jsx(s.Item,{label:"Menu Item 2",icon:"deleteForever"})]}),t.jsx(s.SectionSeparator,{}),t.jsxs(s.Section,{children:[t.jsx(s.SectionHeading,{label:"Section 2"}),t.jsx(s.Item,{label:"Menu Item 3"}),t.jsx(s.Item,{label:"Menu Item 4 Disabled",disabled:!0})]})]})})},z={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...E("onOpen","onClose"),icon:"warning"},render:e=>t.jsx(s,{...e,children:t.jsxs(s.Menu,{children:[t.jsx(s.Item,{label:"Menu Item 1"}),t.jsx(s.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(s.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})})},G={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...E("onOpen","onClose")},render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Toggle,{children:"The Toggle"}),t.jsxs(s.Menu,{children:[t.jsx(s.Item,{label:"Menu Item 1"}),t.jsx(s.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(s.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})]})},U={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenu.Toggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...E("onOpen","onClose")},render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Toggle,{as:pe}),t.jsxs(s.Menu,{children:[t.jsx(s.Item,{label:"Menu Item 1"}),t.jsx(s.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(s.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})]})},Q={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...E("onOpen","onClose")},render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Toggle,{as:mn}),t.jsxs(s.Menu,{children:[t.jsx(s.Item,{label:"Menu Item 1"}),t.jsx(s.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(s.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})]})},Y={parameters:{docs:{description:{story:"By default, `PopupMenu.Toggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenu.Toggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...E("onOpen","onClose")},render:e=>t.jsxs(s,{...e,children:[t.jsx(s.Toggle,{as:P.Fragment,children:t.jsx(pe,{})}),t.jsxs(s.Menu,{children:[t.jsx(s.Item,{label:"Menu Item 1"}),t.jsx(s.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(s.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})]})};var Me,ve,be;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When no \`<PopupMenu.Menu>\` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Menu>
        <p>Menu goes here.</p>
      </PopupMenu.Menu>
    </PopupMenu>
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
  },
  render: args => <PopupMenu {...args} />
}`,...(Pe=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var xe,Se,je;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disable the default toggle."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    disabled: true
  },
  render: args => <PopupMenu {...args} />
}`,...(je=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var we,Ee,Ce;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass at least a \`<PopupMenu.Menu>\` component with \`<PopupMenu.Item>\` elements inside to render a functional menu. A default toggle element will be rendered."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(Ce=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Te,Oe,_e;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`as\` as \`anchor\` and supply a \`href\` prop in order to render PopupMenu.Item elements as links."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Menu>
        <PopupMenu.Item as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenu.Item as="a" href="https://www.sap.com" label="Go to sap.com" target="_blank" icon="openInNew" />
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(_e=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Re,$e,De;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`PopupMenu.Item\` elements may contain random elements other than \`PopupMenu.Item\`. In such cases you may consume the PupupMenu context using the \`usePopupMenuContext\` hook that contains a \`close\` function that can be used by custom components to close the menu if needed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Menu>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(De=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Ae,ke,Ne;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Menu>
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
    </PopupMenu>
}`,...(Ne=(ke=K.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var Fe,We,Be;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon without having to pass a custom toggle element."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    icon: "warning"
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(Be=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var Ve,Le,He;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In the simplest case, a toggle can contain only a string. \`PopupMenu\` will render a \`<button>\` element containing that string or any opther children."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Toggle>The Toggle</PopupMenu.Toggle>
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(He=(Le=G.parameters)==null?void 0:Le.docs)==null?void 0:He.source}}};var qe,Ke,ze;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass a custom component to render \`as={MyCustomComponent}\` to render as a toggle. Make sure to forward refs. Note we may change the standard \`<PopupMenu.Toggle>\` to use our own \`<Button>\` component, in this case we would need a different example component here."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Toggle as={ToggleButton} />
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(ze=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var Ge,Ue,Qe;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A custom toggle component may consume the PopupMenu context using the \`usePopupMenuContext\` hook. This hook exposes the current \`isOpen\` state of the menu that can be used e.g. to apply conditional styling to the toggle."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Toggle as={StyledToggleButton} />
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(Qe=(Ue=Q.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var Ye,Je,Xe;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, \`PopupMenu.Toggle\` will render a \`<button>\` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the \`PopupMenu.Toggle\`'s \`as\` prop to \`React.Fragment\` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  },
  render: args => <PopupMenu {...args}>
      <PopupMenu.Toggle as={React.Fragment}>
        <ToggleButton />
      </PopupMenu.Toggle>
      <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
    </PopupMenu>
}`,...(Xe=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};const Mo=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{W as Default,V as DisabledDefaultToggle,B as NoMenu,H as WithChildrenAsLinks,Y as WithCustomButtonComponentAsChild,z as WithIcon,L as WithMenuChild,K as WithMenuChildWithSection,q as WithMenuWithRandomContent,G as WithToggleAndMenuChildren,U as WithToggleAsButtonComponent,Q as WithToggleAsButtonStyledByState,Mo as __namedExportsOrder,fo as default};
