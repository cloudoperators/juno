import{j as t}from"./jsx-runtime-D-gQZ2Nk.js";import{r as h,e as S}from"./index-BXnWnNu-.js";import{v as tn}from"./v4-CtRu48qb.js";import{U as q,y as U,h as on,a as x,k as rn,g as ze,C as H,I as te,l as Y,b as Z,u as an,q as sn,p as Ke,c as un,d as L,T as ln,i as pn,j as cn,e as v,f as w,r as dn,O as ue,_ as mn,M as le,D as Ge,m as hn,n as gn,S as J}from"./headlessui-float-DiQeP9zr.js";import{I as Qe,K as fn}from"./Icon.component-uANO5hmX.js";import{P as Ye}from"./PortalProvider.component-CHvemcrH.js";import{s as Mn}from"./use-text-value-Ck5VM9KE.js";import{F as yn}from"./use-tree-walker-BX-_Ig08.js";import{B as oe}from"./Button.component-DsMGLQPe.js";import"./index-CzvS-M9C.js";import"./floating-ui.react-dom-BTujDtLT.js";import"./Spinner.component-DqgRKBmm.js";var vn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vn||{}),bn=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(bn||{}),In=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(In||{});function X(e,o=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,r=gn(o(e.items.slice()),l=>l.dataRef.current.domRef.current),u=n?r.indexOf(n):null;return u===-1&&(u=null),{items:r,activeItemIndex:u}}let Pn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,o)=>{var n;let r=X(e),u=hn(o,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:u,activationTrigger:(n=o.trigger)!=null?n:1}},3:(e,o)=>{let n=e.searchQuery!==""?0:1,r=e.searchQuery+o.value.toLowerCase(),u=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(i=>{var s;return((s=i.dataRef.current.textValue)==null?void 0:s.startsWith(r))&&!i.dataRef.current.disabled}),l=u?e.items.indexOf(u):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,o)=>{let n=X(e,r=>[...r,{id:o.id,dataRef:o.dataRef}]);return{...e,...n}},6:(e,o)=>{let n=X(e,r=>{let u=r.findIndex(l=>l.id===o.id);return u!==-1&&r.splice(u,1),r});return{...e,...n,activationTrigger:1}}},re=h.createContext(null);re.displayName="MenuContext";function z(e){let o=h.useContext(re);if(o===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,z),n}return o}function xn(e,o){return ze(o.type,Pn,e,o)}let jn=h.Fragment;function Sn(e,o){let{__demoMode:n=!1,...r}=e,u=h.useReducer(xn,{__demoMode:n,menuState:n?0:1,buttonRef:h.createRef(),itemsRef:h.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:l,itemsRef:i,buttonRef:s},c]=u,g=U(o);on([s,i],(I,m)=>{var d;c({type:1}),pn(m,cn.Loose)||(I.preventDefault(),(d=s.current)==null||d.focus())},l===0);let M=x(()=>{c({type:1})}),y=h.useMemo(()=>({open:l===0,close:M}),[l,M]),f={ref:g};return S.createElement(re.Provider,{value:u},S.createElement(rn,{value:ze(l,{0:L.Open,1:L.Closed})},H({ourProps:f,theirProps:r,slot:y,defaultTag:jn,name:"Menu"})))}let wn="button";function Tn(e,o){var n;let r=te(),{id:u=`headlessui-menu-button-${r}`,...l}=e,[i,s]=z("Menu.Button"),c=U(i.buttonRef,o),g=Ke(),M=x(d=>{switch(d.key){case v.Space:case v.Enter:case v.ArrowDown:d.preventDefault(),d.stopPropagation(),s({type:0}),g.nextFrame(()=>s({type:2,focus:w.First}));break;case v.ArrowUp:d.preventDefault(),d.stopPropagation(),s({type:0}),g.nextFrame(()=>s({type:2,focus:w.Last}));break}}),y=x(d=>{switch(d.key){case v.Space:d.preventDefault();break}}),f=x(d=>{if(dn(d.currentTarget))return d.preventDefault();e.disabled||(i.menuState===0?(s({type:1}),g.nextFrame(()=>{var P;return(P=i.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})})):(d.preventDefault(),s({type:0})))}),I=h.useMemo(()=>({open:i.menuState===0}),[i]),m={ref:c,id:u,type:ln(e,i.buttonRef),"aria-haspopup":"menu","aria-controls":(n=i.itemsRef.current)==null?void 0:n.id,"aria-expanded":i.menuState===0,onKeyDown:M,onKeyUp:y,onClick:f};return H({ourProps:m,theirProps:l,slot:I,defaultTag:wn,name:"Menu.Button"})}let Cn="div",On=ue.RenderStrategy|ue.Static;function Rn(e,o){var n,r;let u=te(),{id:l=`headlessui-menu-items-${u}`,...i}=e,[s,c]=z("Menu.Items"),g=U(s.itemsRef,o),M=sn(s.itemsRef),y=Ke(),f=un(),I=f!==null?(f&L.Open)===L.Open:s.menuState===0;h.useEffect(()=>{let p=s.itemsRef.current;p&&s.menuState===0&&p!==(M==null?void 0:M.activeElement)&&p.focus({preventScroll:!0})},[s.menuState,s.itemsRef,M]),yn({container:s.itemsRef.current,enabled:s.menuState===0,accept(p){return p.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});let m=x(p=>{var T,O;switch(y.dispose(),p.key){case v.Space:if(s.searchQuery!=="")return p.preventDefault(),p.stopPropagation(),c({type:3,value:p.key});case v.Enter:if(p.preventDefault(),p.stopPropagation(),c({type:1}),s.activeItemIndex!==null){let{dataRef:b}=s.items[s.activeItemIndex];(O=(T=b.current)==null?void 0:T.domRef.current)==null||O.click()}Ge(s.buttonRef.current);break;case v.ArrowDown:return p.preventDefault(),p.stopPropagation(),c({type:2,focus:w.Next});case v.ArrowUp:return p.preventDefault(),p.stopPropagation(),c({type:2,focus:w.Previous});case v.Home:case v.PageUp:return p.preventDefault(),p.stopPropagation(),c({type:2,focus:w.First});case v.End:case v.PageDown:return p.preventDefault(),p.stopPropagation(),c({type:2,focus:w.Last});case v.Escape:p.preventDefault(),p.stopPropagation(),c({type:1}),Z().nextFrame(()=>{var b;return(b=s.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})});break;case v.Tab:p.preventDefault(),p.stopPropagation(),c({type:1}),Z().nextFrame(()=>{mn(s.buttonRef.current,p.shiftKey?le.Previous:le.Next)});break;default:p.key.length===1&&(c({type:3,value:p.key}),y.setTimeout(()=>c({type:4}),350));break}}),d=x(p=>{switch(p.key){case v.Space:p.preventDefault();break}}),P=h.useMemo(()=>({open:s.menuState===0}),[s]),C={"aria-activedescendant":s.activeItemIndex===null||(n=s.items[s.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(r=s.buttonRef.current)==null?void 0:r.id,id:l,onKeyDown:m,onKeyUp:d,role:"menu",tabIndex:0,ref:g};return H({ourProps:C,theirProps:i,slot:P,defaultTag:Cn,features:On,visible:I,name:"Menu.Items"})}let _n=h.Fragment;function kn(e,o){let n=te(),{id:r=`headlessui-menu-item-${n}`,disabled:u=!1,...l}=e,[i,s]=z("Menu.Item"),c=i.activeItemIndex!==null?i.items[i.activeItemIndex].id===r:!1,g=h.useRef(null),M=U(o,g);Y(()=>{if(i.__demoMode||i.menuState!==0||!c||i.activationTrigger===0)return;let b=Z();return b.requestAnimationFrame(()=>{var Q,se;(se=(Q=g.current)==null?void 0:Q.scrollIntoView)==null||se.call(Q,{block:"nearest"})}),b.dispose},[i.__demoMode,g,c,i.menuState,i.activationTrigger,i.activeItemIndex]);let y=Mn(g),f=h.useRef({disabled:u,domRef:g,get textValue(){return y()}});Y(()=>{f.current.disabled=u},[f,u]),Y(()=>(s({type:5,id:r,dataRef:f}),()=>s({type:6,id:r})),[f,r]);let I=x(()=>{s({type:1})}),m=x(b=>{if(u)return b.preventDefault();s({type:1}),Ge(i.buttonRef.current)}),d=x(()=>{if(u)return s({type:2,focus:w.Nothing});s({type:2,focus:w.Specific,id:r})}),P=an(),C=x(b=>P.update(b)),p=x(b=>{P.wasMoved(b)&&(u||c||s({type:2,focus:w.Specific,id:r,trigger:0}))}),T=x(b=>{P.wasMoved(b)&&(u||c&&s({type:2,focus:w.Nothing}))}),O=h.useMemo(()=>({active:c,disabled:u,close:I}),[c,u,I]);return H({ourProps:{id:r,ref:M,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:m,onFocus:d,onPointerEnter:C,onMouseEnter:C,onPointerMove:p,onMouseMove:p,onPointerLeave:T,onMouseLeave:T},theirProps:l,slot:O,defaultTag:_n,name:"Menu.Item"})}let Dn=q(Sn),En=q(Tn),An=q(Rn),$n=q(kn),K=Object.assign(Dn,{Button:En,Items:An,Item:$n});const{addons:Nn}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Fn}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:ie}=__STORYBOOK_MODULE_GLOBAL__;var Wn="storybook/actions",Bn=`${Wn}/action-event`,ee={depth:10,clearOnStoryChange:!0,limit:50},Je=(e,o)=>{let n=Object.getPrototypeOf(e);return!n||o(n)?n:Je(n,o)},Vn=e=>!!(typeof e=="object"&&e&&Je(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),Ln=e=>{if(Vn(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let n=Object.getOwnPropertyDescriptor(o,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...n,value:Object.create(r.constructor.prototype)}),o}return e},qn=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?tn():Date.now().toString(36)+Math.random().toString(36).substring(2);function Un(e,o={}){let n={...ee,...o},r=function(...u){var y,f;if(o.implicit){let I=(y="__STORYBOOK_PREVIEW__"in ie?ie.__STORYBOOK_PREVIEW__:void 0)==null?void 0:y.storyRenders.find(m=>m.phase==="playing"||m.phase==="rendering");if(I){let m=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),d=new Fn({phase:I.phase,name:e,deprecated:m});if(m)console.warn(d);else throw d}}let l=Nn.getChannel(),i=qn(),s=5,c=u.map(Ln),g=u.length>1?c:c[0],M={id:i,count:0,data:{name:e,args:g},options:{...n,maxDepth:s+(n.depth||3),allowFunction:n.allowFunction||!1}};l.emit(Bn,M)};return r.isAction=!0,r.implicit=o.implicit,r}var j=(...e)=>{let o=ee,n=e;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(o={...ee,...n.pop()});let r=n[0];(n.length!==1||typeof r=="string")&&(r={},n.forEach(l=>{r[l]=l}));let u={};return Object.keys(r).forEach(l=>{u[l]=Un(r[l],o)}),u};const Hn=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,Xe=`
  jn-cursor-not-allowed
  jn-opacity-50
`,zn=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,Kn=`
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
`,Qn=`
  jn-text-sm
  jn-p-2
`,Yn=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,Jn=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,Xn=`
  jn-inline-block
  jn-mr-2
`,Zn=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,et=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,nt=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,tt=`
  jn-inline-flex
`,Ze=h.createContext(null),G=()=>{const e=h.useContext(Ze);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},a=({children:e,className:o="",disabled:n=!1,icon:r="moreVert",menuSize:u="normal",onClose:l,onOpen:i,...s})=>{const[c,g]=h.useState(!1),M=h.useRef(c);h.useEffect(()=>{c!==M.current&&(c?i==null||i():l==null||l()),M.current=c},[c,i,l]);const y=S.Children.toArray(e),f=y.some(m=>S.isValidElement(m)&&m.type===ne),I=y.find(m=>S.isValidElement(m)&&m.type===en);return t.jsx(K,{as:"div",className:`juno-popupmenu ${o}`,...s,children:({open:m,close:d})=>(h.useEffect(()=>{m!==c&&g(m)},[m]),t.jsx(Ze.Provider,{value:{isOpen:c,close:d,menuSize:u},children:t.jsxs(J,{as:S.Fragment,placement:"bottom-start",offset:4,shift:8,flip:8,composable:!0,children:[t.jsx(J.Reference,{children:t.jsxs("div",{className:`juno-popupmenu-float-reference-wrapper ${tt}`,children:[!f&&t.jsx(a.Toggle,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?Xe:Hn}`,disabled:n,children:t.jsx(Qe,{icon:r})}),y.map(P=>{if(S.isValidElement(P)&&P.type===ne)return P})]})}),t.jsx(Ye.Portal,{children:t.jsx(J.Content,{children:t.jsx("div",{className:"juno-popupmenu-float-content-wrapper",children:I})})})]})}))})},ne=({as:e="button",disabled:o=!1,children:n,className:r="",...u})=>t.jsx(K.Button,{as:e,className:`juno-popupmenu-toggle ${o&&Xe} ${r}`,disabled:o,...u,children:n}),en=({children:e,className:o="",...n})=>{const{menuSize:r}=G();return t.jsx(K.Items,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${r} ${zn} ${o}`,...n,children:e})},ot=({as:e="div",children:o,className:n="",disabled:r=!1,href:u,icon:l,label:i="",rel:s,target:c,...g})=>{const{menuSize:M}=G(),y=M==="small"?Qn:Gn;return t.jsx(K.Item,{as:e,disabled:r,className:`juno-popupmenu-item ${Kn} ${r?Jn:Yn} ${y} ${n}`,...e==="a"?{href:u,rel:s,target:c}:{},...g,children:f=>t.jsxs(t.Fragment,{children:[l&&t.jsx(Qe,{icon:l,size:"18",className:`juno-popupmenu-item-icon ${Xn}`}),i&&typeof i=="string"?i:typeof o=="function"?o(f):o]})})},rt=({children:e,className:o="",...n})=>t.jsx("section",{className:`juno-popupmenu-section ${Zn} ${o}`,...n,children:e}),at=({children:e,label:o="",className:n="",...r})=>t.jsx("header",{className:`juno-popupmenu-section-title ${et} ${n}`,...r,children:t.jsx("h1",{children:o&&o.length?o:e})}),st=({className:e="",...o})=>t.jsx("div",{className:`juno-popupmenu-section-divider ${nt} ${e}`,...o});a.Toggle=ne;a.Menu=en;a.Item=ot;a.Section=rt;a.SectionHeading=at;a.SectionSeparator=st;try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}try{a.displayName="PopupMenu",a.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const bt={title:"WiP/PopupMenu",component:a,subcomponents:{"PopupMenu.Toggle":a.Toggle,"PopupMenu.Menu":a.Menu,"PopupMenu.Item":a.Item,"PopupMenu.Section":a.Section},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(fn)],control:{type:"select"}}},decorators:[e=>t.jsx(Ye,{children:e()})]},ae=S.forwardRef(({className:e="",onClick:o=void 0,...n},r)=>t.jsx(oe,{ref:r,className:`my-custom-toggle ${e}`,onClick:o,...n,children:"Custom Toggle"}));ae.displayName="ToggleButton";const nn=S.forwardRef((e,o)=>{const{isOpen:n}=G(),{className:r,...u}=e;return t.jsx(oe,{ref:o,className:`toggle-button ${n?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${r||""}`,...u,children:e.children||"Toggle Me!"})});nn.displayName="StyledToggleButton";const ut=e=>{const{close:o}=G();return t.jsx(oe,{onClick:o,...e})},R={parameters:{docs:{description:{story:"When no `<PopupMenu.Menu>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed."}}},args:{...j("onOpen","onClose"),children:t.jsx(a.Menu,{children:t.jsx("p",{children:"Menu goes here."})})}},_={parameters:{docs:{description:{story:"This story has no `PopupMenu.Menu` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...j("onOpen","onClose")}},k={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...j("onOpen","onClose"),disabled:!0}},D={parameters:{docs:{description:{story:"Pass at least a `<PopupMenu.Menu>` component with `<PopupMenu.Item>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...j("onOpen","onClose"),children:t.jsxs(a.Menu,{children:[t.jsx(a.Item,{label:"Menu Item 1"}),t.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})}},E={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenu.Item elements as links."}}},args:{...j("onOpen","onClose"),children:t.jsxs(a.Menu,{children:[t.jsx(a.Item,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),t.jsx(a.Item,{as:"a",href:"https://www.sap.com",label:"Got to sap.com",target:"_blank",icon:"openInNew"})]})}},A={parameters:{docs:{description:{story:"`PopupMenu.Item` elements may contain random elements other than `PopupMenu.Item`. In such cases you may consume the PupupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...j("onOpen","onClose"),children:t.jsxs(a.Menu,{children:[t.jsx("p",{children:"Some content goes here."}),t.jsx(ut,{variant:"primary",children:"Yay!"})]})}},$={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...j("onOpen","onClose"),children:t.jsxs(a.Menu,{children:[t.jsxs(a.Section,{children:[t.jsx(a.SectionHeading,{children:"Section 1"}),t.jsx(a.Item,{label:"Menu Item 1"}),t.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"})]}),t.jsx(a.SectionSeparator,{}),t.jsxs(a.Section,{children:[t.jsx(a.SectionHeading,{label:"Section 2"}),t.jsx(a.Item,{label:"Menu Item 3"}),t.jsx(a.Item,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},N={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...j("onOpen","onClose"),icon:"warning",children:t.jsxs(a.Menu,{children:[t.jsx(a.Item,{label:"Menu Item 1"}),t.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})}},F={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...j("onOpen","onClose"),children:[t.jsx(a.Toggle,{children:"The Toggle"},"t"),t.jsxs(a.Menu,{children:[t.jsx(a.Item,{label:"Menu Item 1"}),t.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},W={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenu.Toggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...j("onOpen","onClose"),children:[t.jsx(a.Toggle,{as:ae},"t"),t.jsxs(a.Menu,{children:[t.jsx(a.Item,{label:"Menu Item 1"}),t.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},B={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...j("onOpen","onClose"),children:[t.jsx(a.Toggle,{as:nn},"t"),t.jsxs(a.Menu,{children:[t.jsx(a.Item,{label:"Menu Item 1"}),t.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},V={parameters:{docs:{description:{story:"By default, `PopupMenu.Toggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenu.Toggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...j("onOpen","onClose"),children:[t.jsx(a.Toggle,{as:S.Fragment,children:t.jsx(ae,{})},"t"),t.jsxs(a.Menu,{children:[t.jsx(a.Item,{label:"Menu Item 1"}),t.jsx(a.Item,{label:"Menu Item 2",icon:"deleteForever"}),t.jsx(a.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var pe,ce,de;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,he,ge;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(he=_.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,Me,ye;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ye=(Me=k.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var ve,be,Ie;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ie=(be=D.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var Pe,xe,je;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(je=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Se,we,Te;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Ce,Oe,Re;$.parameters={...$.parameters,docs:{...(Ce=$.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var _e,ke,De;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(De=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ee,Ae,$e;F.parameters={...F.parameters,docs:{...(Ee=F.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...($e=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:$e.source}}};var Ne,Fe,We;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(We=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var Be,Ve,Le;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Le=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var qe,Ue,He;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(He=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};const It=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WitchChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{R as Default,k as DisabledDefaultToggle,_ as NoMenu,E as WitchChildrenAsLinks,V as WithCustomButtonComponentAsChild,N as WithIcon,D as WithMenuChild,$ as WithMenuChildWithSection,A as WithMenuWithRandomContent,F as WithToggleAndMenuChildren,W as WithToggleAsButtonComponent,B as WithToggleAsButtonStyledByState,It as __namedExportsOrder,bt as default};
