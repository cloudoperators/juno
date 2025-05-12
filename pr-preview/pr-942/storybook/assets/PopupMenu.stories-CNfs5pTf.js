import{j as r}from"./jsx-runtime-BP6H2k8O.js";import{r as y,e as _}from"./index-DysCNOs_.js";import{v as Dt}from"./v4-CtRu48qb.js";import{u as Ft,h as Vt,o as Bt,g as Wt,s as Lt}from"./floating-ui.react-D05g4VsL.js";import{I as ht,K as qt}from"./Icon.component-CocZ6dXe.js";import{P as ft}from"./PortalProvider.component-LAwe1vqg.js";import{m as Kt,g as Oe,c as M,u as vt,f as H,_ as Gt,K as F,S as k,y as ie,n as ae,a as j,Y as Ht,E as yt,a0 as Ut,L as V,x as zt,R as Yt,t as Qt,j as _e,k as Jt,l as Xt,p as re,q as Zt,r as en,s as tn,v as nn,h as bt,z as on,A as sn,B as an,F as rn,d as ln,$ as un,e as pn,w as cn,i as dn,O as we,D as mn,M as gn,G as hn,a1 as fn,J as O,N as vn,P as je,a2 as Mt,H as yn,T as bn,V as Mn,X as In}from"./portal-D4UJPuRj.js";import{r as ge}from"./index-BEZZli5v.js";import{a as Pn,s as xn}from"./use-text-value-BOHFEIuC.js";import{F as Sn}from"./use-tree-walker-CuPmIfSf.js";import{B as ye}from"./Button.component-Vxgp8g6T.js";import"./Spinner.component-DWsJM9DM.js";var On=Object.defineProperty,_n=(e,n,t)=>n in e?On(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Te=(e,n,t)=>(_n(e,typeof n!="symbol"?n+"":n,t),t),S=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(S||{}),le=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(le||{}),g=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e))(g||{});function Ce(e,n=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=Gt(n(e.items.slice()),a=>a.dataRef.current.domRef.current),s=t?o.indexOf(t):null;return s===-1&&(s=null),{items:o,activeItemIndex:s}}let wn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,pendingFocus:{focus:M.Nothing},menuState:1}},0(e,n){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:n.focus,menuState:0}},2:(e,n)=>{var t,o,s,a,l;if(e.menuState===1)return e;let c={...e,searchQuery:"",activationTrigger:(t=n.trigger)!=null?t:1,__demoMode:!1};if(n.focus===M.Nothing)return{...c,activeItemIndex:null};if(n.focus===M.Specific)return{...c,activeItemIndex:e.items.findIndex(u=>u.id===n.id)};if(n.focus===M.Previous){let u=e.activeItemIndex;if(u!==null){let I=e.items[u].dataRef.current.domRef,v=H(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(v!==null){let d=e.items[v].dataRef.current.domRef;if(((o=I.current)==null?void 0:o.previousElementSibling)===d.current||((s=d.current)==null?void 0:s.previousElementSibling)===null)return{...c,activeItemIndex:v}}}}else if(n.focus===M.Next){let u=e.activeItemIndex;if(u!==null){let I=e.items[u].dataRef.current.domRef,v=H(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(v!==null){let d=e.items[v].dataRef.current.domRef;if(((a=I.current)==null?void 0:a.nextElementSibling)===d.current||((l=d.current)==null?void 0:l.nextElementSibling)===null)return{...c,activeItemIndex:v}}}}let p=Ce(e),P=H(n,{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...c,...p,activeItemIndex:P}},3:(e,n)=>{let t=e.searchQuery!==""?0:1,o=e.searchQuery+n.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!l.dataRef.current.disabled}),a=s?e.items.indexOf(s):-1;return a===-1||a===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:a,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,n)=>{let t=e.items.concat(n.items.map(s=>s)),o=e.activeItemIndex;return e.pendingFocus.focus!==M.Nothing&&(o=H(e.pendingFocus,{resolveItems:()=>t,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled})),{...e,items:t,activeItemIndex:o,pendingFocus:{focus:M.Nothing},pendingShouldSort:!0}},6:(e,n)=>{let t=e.items,o=[],s=new Set(n.items);for(let[a,l]of t.entries())if(s.has(l.id)&&(o.push(a),s.delete(l.id),s.size===0))break;if(o.length>0){t=t.slice();for(let a of o.reverse())t.splice(a,1)}return{...e,items:t,activationTrigger:1}},7:(e,n)=>e.buttonElement===n.element?e:{...e,buttonElement:n.element},8:(e,n)=>e.itemsElement===n.element?e:{...e,itemsElement:n.element},9:e=>e.pendingShouldSort?{...e,...Ce(e),pendingShouldSort:!1}:e};class be extends Kt{constructor(n){super(n),Te(this,"actions",{registerItem:Oe(()=>{let t=[],o=new Set;return[(s,a)=>{o.has(a)||(o.add(a),t.push({id:s,dataRef:a}))},()=>(o.clear(),this.send({type:5,items:t.splice(0)}))]}),unregisterItem:Oe(()=>{let t=[];return[o=>t.push(o),()=>this.send({type:6,items:t.splice(0)})]})}),Te(this,"selectors",{activeDescendantId(t){var o;let s=t.activeItemIndex,a=t.items;return s===null||(o=a[s])==null?void 0:o.id},isActive(t,o){var s;let a=t.activeItemIndex,l=t.items;return a!==null?((s=l[a])==null?void 0:s.id)===o:!1},shouldScrollIntoView(t,o){return t.__demoMode||t.menuState!==0||t.activationTrigger===0?!1:this.isActive(t,o)}}),this.on(5,()=>{requestAnimationFrame(()=>{this.send({type:9})})})}static new({__demoMode:n=!1}={}){return new be({__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:M.Nothing}})}reduce(n,t){return vt(t.type,wn,n,t)}}const It=y.createContext(null);function Me(e){let n=y.useContext(It);if(n===null){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Pt),t}return n}function Pt({__demoMode:e=!1}={}){return y.useMemo(()=>be.new({__demoMode:e}),[])}let jn=y.Fragment;function Tn(e,n){let{__demoMode:t=!1,...o}=e,s=Pt({__demoMode:t}),[a,l,c]=k(s,m=>[m.menuState,m.itemsElement,m.buttonElement]),p=ie(n),P=a===S.Open;mn(P,[c,l],(m,E)=>{var C;s.send({type:g.CloseMenu}),bn(E,Mn.Loose)||(m.preventDefault(),(C=s.state.buttonElement)==null||C.focus())});let u=j(()=>{s.send({type:g.CloseMenu})}),I=y.useMemo(()=>({open:a===S.Open,close:u}),[a,u]),v={ref:p},d=V();return _.createElement(gn,null,_.createElement(It.Provider,{value:s},_.createElement(hn,{value:vt(a,{[S.Open]:re.Open,[S.Closed]:re.Closed})},d({ourProps:v,theirProps:o,slot:I,defaultTag:jn,name:"Menu"}))))}let Cn="button";function En(e,n){let t=Me("Menu.Button"),o=y.useId(),{id:s=`headlessui-menu-button-${o}`,disabled:a=!1,autoFocus:l=!1,...c}=e,p=y.useRef(null),P=rn(),u=ie(n,p,ln(),j(b=>t.send({type:g.SetButtonElement,element:b}))),I=j(b=>{switch(b.key){case O.Space:case O.Enter:case O.ArrowDown:b.preventDefault(),b.stopPropagation(),t.send({type:g.OpenMenu,focus:{focus:M.First}});break;case O.ArrowUp:b.preventDefault(),b.stopPropagation(),t.send({type:g.OpenMenu,focus:{focus:M.Last}});break}}),v=j(b=>{switch(b.key){case O.Space:b.preventDefault();break}}),[d,m]=k(t,b=>[b.menuState,b.itemsElement]),E=j(b=>{var W;if(b.button===0){if(yn(b.currentTarget))return b.preventDefault();a||(d===S.Open?(ge.flushSync(()=>t.send({type:g.CloseMenu})),(W=p.current)==null||W.focus({preventScroll:!0})):(b.preventDefault(),t.send({type:g.OpenMenu,focus:{focus:M.Nothing},trigger:le.Pointer})))}}),{isFocusVisible:C,focusProps:f}=un({autoFocus:l}),{isHovered:w,hoverProps:A}=pn({isDisabled:a}),{pressed:$,pressProps:B}=cn({disabled:a}),D=y.useMemo(()=>({open:d===S.Open,active:$||d===S.Open,disabled:a,hover:w,focus:C,autofocus:l}),[d,w,C,$,a,l]),L=bt(P(),{ref:u,id:s,type:dn(e,p.current),"aria-haspopup":"menu","aria-controls":m==null?void 0:m.id,"aria-expanded":d===S.Open,disabled:a||void 0,autoFocus:l,onKeyDown:I,onKeyUp:v,onMouseDown:E},f,A,B);return V()({ourProps:L,theirProps:c,slot:D,defaultTag:Cn,name:"Menu.Button"})}let Rn="div",$n=we.RenderStrategy|we.Static;function An(e,n){let t=y.useId(),{id:o=`headlessui-menu-items-${t}`,anchor:s,portal:a=!1,modal:l=!0,transition:c=!1,...p}=e,P=zt(s),u=Me("Menu.Items"),[I,v]=Yt(P),d=Qt(),[m,E]=y.useState(null),C=ie(n,P?I:null,j(i=>u.send({type:g.SetItemsElement,element:i})),E),[f,w]=k(u,i=>[i.menuState,i.buttonElement]),A=_e(w),$=_e(m);P&&(a=!0);let B=Jt(),[D,L]=Xt(c,m,B!==null?(B&re.Open)===re.Open:f===S.Open);Zt(D,w,()=>{u.send({type:g.CloseMenu})});let b=k(u,i=>i.__demoMode),W=b?!1:l&&f===S.Open;en(W,$);let de=b?!1:l&&f===S.Open;tn(de,{allowed:y.useCallback(()=>[w,m],[w,m])});let x=f!==S.Open,G=xn(x,w)?!1:D;y.useEffect(()=>{let i=m;i&&f===S.Open&&i!==($==null?void 0:$.activeElement)&&i.focus({preventScroll:!0})},[f,m,$]),Sn(f===S.Open,{container:m,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let Pe=nn(),Et=j(i=>{var q,xe,Se;switch(Pe.dispose(),i.key){case O.Space:if(u.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),u.send({type:g.Search,value:i.key});case O.Enter:if(i.preventDefault(),i.stopPropagation(),u.state.activeItemIndex!==null){let{dataRef:kt}=u.state.items[u.state.activeItemIndex];(xe=(q=kt.current)==null?void 0:q.domRef.current)==null||xe.click()}u.send({type:g.CloseMenu}),Mt(u.state.buttonElement);break;case O.ArrowDown:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.Next});case O.ArrowUp:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.Previous});case O.Home:case O.PageUp:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.First});case O.End:case O.PageDown:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.Last});case O.Escape:i.preventDefault(),i.stopPropagation(),ge.flushSync(()=>u.send({type:g.CloseMenu})),(Se=u.state.buttonElement)==null||Se.focus({preventScroll:!0});break;case O.Tab:i.preventDefault(),i.stopPropagation(),ge.flushSync(()=>u.send({type:g.CloseMenu})),vn(u.state.buttonElement,i.shiftKey?je.Previous:je.Next);break;default:i.key.length===1&&(u.send({type:g.Search,value:i.key}),Pe.setTimeout(()=>u.send({type:g.ClearSearch}),350));break}}),Rt=j(i=>{switch(i.key){case O.Space:i.preventDefault();break}}),$t=y.useMemo(()=>({open:f===S.Open}),[f]),At=bt(P?d():{},{"aria-activedescendant":k(u,u.selectors.activeDescendantId),"aria-labelledby":k(u,i=>{var q;return(q=i.buttonElement)==null?void 0:q.id}),id:o,onKeyDown:Et,onKeyUp:Rt,role:"menu",tabIndex:f===S.Open?0:void 0,ref:C,style:{...p.style,...v,"--button-width":sn(w,!0).width},...on(L)}),Nt=V();return _.createElement(an,{enabled:a?e.static||D:!1,ownerDocument:A},Nt({ourProps:At,theirProps:p,slot:$t,defaultTag:Rn,features:$n,visible:G,name:"Menu.Items"}))}let Nn=y.Fragment;function kn(e,n){let t=y.useId(),{id:o=`headlessui-menu-item-${t}`,disabled:s=!1,...a}=e,l=Me("Menu.Item"),c=k(l,x=>l.selectors.isActive(x,o)),p=y.useRef(null),P=ie(n,p),u=k(l,x=>l.selectors.shouldScrollIntoView(x,o));ae(()=>{if(u)return In().requestAnimationFrame(()=>{var x,G;(G=(x=p.current)==null?void 0:x.scrollIntoView)==null||G.call(x,{block:"nearest"})})},[u,p]);let I=Pn(p),v=y.useRef({disabled:s,domRef:p,get textValue(){return I()}});ae(()=>{v.current.disabled=s},[v,s]),ae(()=>(l.actions.registerItem(o,v),()=>l.actions.unregisterItem(o)),[v,o]);let d=j(()=>{l.send({type:g.CloseMenu})}),m=j(x=>{if(s)return x.preventDefault();l.send({type:g.CloseMenu}),Mt(l.state.buttonElement)}),E=j(()=>{if(s)return l.send({type:g.GoToItem,focus:M.Nothing});l.send({type:g.GoToItem,focus:M.Specific,id:o})}),C=Ht(),f=j(x=>{C.update(x),!s&&(c||l.send({type:g.GoToItem,focus:M.Specific,id:o,trigger:le.Pointer}))}),w=j(x=>{C.wasMoved(x)&&(s||c||l.send({type:g.GoToItem,focus:M.Specific,id:o,trigger:le.Pointer}))}),A=j(x=>{C.wasMoved(x)&&(s||c&&l.send({type:g.GoToItem,focus:M.Nothing}))}),[$,B]=yt(),[D,L]=Ut(),b=y.useMemo(()=>({active:c,focus:c,disabled:s,close:d}),[c,s,d]),W={id:o,ref:P,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-labelledby":$,"aria-describedby":D,disabled:void 0,onClick:m,onFocus:E,onPointerEnter:f,onMouseEnter:f,onPointerMove:w,onMouseMove:w,onPointerLeave:A,onMouseLeave:A},de=V();return _.createElement(B,null,_.createElement(L,null,de({ourProps:W,theirProps:a,slot:b,defaultTag:Nn,name:"Menu.Item"})))}let Dn="div";function Fn(e,n){let[t,o]=yt(),s=e,a={ref:n,"aria-labelledby":t,role:"group"},l=V();return _.createElement(o,null,l({ourProps:a,theirProps:s,slot:{},defaultTag:Dn,name:"Menu.Section"}))}let Vn="header";function Bn(e,n){let t=y.useId(),{id:o=`headlessui-menu-heading-${t}`,...s}=e,a=fn();ae(()=>a.register(o),[o,a.register]);let l={id:o,ref:n,role:"presentation",...a.props};return V()({ourProps:l,theirProps:s,slot:{},defaultTag:Vn,name:"Menu.Heading"})}let Wn="div";function Ln(e,n){let t=e,o={ref:n,role:"separator"};return V()({ourProps:o,theirProps:t,slot:{},defaultTag:Wn,name:"Menu.Separator"})}let qn=F(Tn),xt=F(En),St=F(An),Ot=F(kn),Kn=F(Fn),Gn=F(Bn),Hn=F(Ln),Un=Object.assign(qn,{Button:xt,Items:St,Item:Ot,Section:Kn,Heading:Gn,Separator:Hn});const{addons:zn}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Yn}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Ee}=__STORYBOOK_MODULE_GLOBAL__;var Qn=Object.defineProperty,Jn=(e,n)=>{for(var t in n)Qn(e,t,{get:n[t],enumerable:!0})},Xn="storybook/actions",Zn=`${Xn}/action-event`,he={depth:10,clearOnStoryChange:!0,limit:50},_t=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:_t(t,n)},eo=e=>!!(typeof e=="object"&&e&&_t(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),to=e=>{if(eo(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(o.constructor.prototype)}),n}return e},no=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Dt():Date.now().toString(36)+Math.random().toString(36).substring(2);function pe(e,n={}){let t={...he,...n},o=function(...s){var I,v;if(n.implicit){let d=(I="__STORYBOOK_PREVIEW__"in Ee?Ee.__STORYBOOK_PREVIEW__:void 0)==null?void 0:I.storyRenders.find(m=>m.phase==="playing"||m.phase==="rendering");if(d){let m=!((v=globalThis==null?void 0:globalThis.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),E=new Yn({phase:d.phase,name:e,deprecated:m});if(m)console.warn(E);else throw E}}let a=zn.getChannel(),l=no(),c=5,p=s.map(to),P=s.length>1?p:p[0],u={id:l,count:0,data:{name:e,args:P},options:{...t,maxDepth:c+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(Zn,u)};return o.isAction=!0,o.implicit=n.implicit,o}var R=(...e)=>{let n=he,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(n={...he,...t.pop()});let o=t[0];(t.length!==1||typeof o=="string")&&(o={},t.forEach(a=>{o[a]=a}));let s={};return Object.keys(o).forEach(a=>{s[a]=pe(o[a],n)}),s};const{definePreview:No}=__STORYBOOK_MODULE_PREVIEW_API__,{global:me}=__STORYBOOK_MODULE_GLOBAL__;var oo={};Jn(oo,{argsEnhancers:()=>ro,loaders:()=>uo});var wt=(e,n)=>typeof n[e]>"u"&&!(e in n),so=e=>{let{initialArgs:n,argTypes:t,id:o,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!t)return{};let a=new RegExp(s.argTypesRegex);return Object.entries(t).filter(([l])=>!!a.test(l)).reduce((l,[c,p])=>(wt(c,n)&&(l[c]=pe(c,{implicit:!0,id:o})),l),{})},ao=e=>{let{initialArgs:n,argTypes:t,parameters:{actions:o}}=e;return o!=null&&o.disable||!t?{}:Object.entries(t).filter(([s,a])=>!!a.action).reduce((s,[a,l])=>(wt(a,n)&&(s[a]=pe(typeof l.action=="string"?l.action:a)),s),{})},ro=[ao,so],Re=!1,lo=e=>{let{parameters:{actions:n}}=e;if(!(n!=null&&n.disable)&&!Re&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in me&&typeof me.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=me.__STORYBOOK_TEST_ON_MOCK_CALL__;t((o,s)=>{let a=o.getMockName();a!=="spy"&&(!/^next\/.*::/.test(a)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>a.startsWith(l)))&&pe(a)(s)}),Re=!0}},uo=[lo];const io=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,jt=`
  jn-cursor-not-allowed
  jn-opacity-50
`,po=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,co=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,mo=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,go=`
  jn-text-sm
  jn-p-2
`,ho=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,fo=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,vo=`
  jn-inline-block
  jn-mr-2
`,yo=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,bo=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,Mo=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,Io=`
  jn-inline-flex
`,Tt=y.createContext(null),ce=()=>{const e=y.useContext(Tt);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},fe=({children:e,className:n="",disabled:t=!1,icon:o="moreVert",menuSize:s="normal",onClose:a,onOpen:l,...c})=>{const[p,P]=y.useState(!1),u=y.useRef(p),{refs:I,floatingStyles:v,update:d}=Ft({placement:"bottom-start",middleware:[Bt(4),Wt(),Lt({padding:8})],whileElementsMounted:Vt});y.useEffect(()=>{p!==u.current&&(p?l==null||l():a==null||a()),u.current=p},[p,l,a]);const m=_.Children.toArray(e),E=m.some(f=>_.isValidElement(f)&&f.type===N),C=m.find(f=>_.isValidElement(f)&&f.type===T);return r.jsx(Un,{as:"div",className:`juno-popupmenu ${n}`,...c,children:({open:f,close:w})=>(y.useEffect(()=>{f!==p&&(P(f),f&&d())},[f]),r.jsxs(Tt.Provider,{value:{isOpen:p,close:w,menuSize:s},children:[r.jsxs("div",{ref:I.setReference,className:`juno-popupmenu-float-reference-wrapper ${Io}`,children:[!E&&r.jsx(N,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${t?jt:io}`,disabled:t,children:r.jsx(ht,{icon:o})}),m.map((A,$)=>_.isValidElement(A)&&A.type===N?_.cloneElement(A,{key:$}):null)]}),p&&r.jsx(ft.Portal,{children:r.jsx("div",{ref:I.setFloating,style:v,className:"juno-popupmenu-float-content-wrapper",children:C})})]}))})},N=({as:e="button",disabled:n=!1,children:t,className:o="",...s})=>r.jsx(xt,{as:e,className:`juno-popupmenu-toggle ${n&&jt} ${o}`,disabled:n,...s,children:t}),T=({children:e,className:n="",...t})=>{const{menuSize:o}=ce();return r.jsx(St,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${po} ${n}`,...t,children:e})},h=({as:e="div",children:n,className:t="",disabled:o=!1,href:s,icon:a,label:l="",rel:c,target:p,...P})=>{const{menuSize:u}=ce(),I=u==="small"?go:mo;return r.jsx(Ot,{as:e,disabled:o,className:`juno-popupmenu-item ${co} ${o?fo:ho} ${I} ${t}`,...e==="a"?{href:s,rel:c,target:p}:{},...P,children:v=>r.jsxs(r.Fragment,{children:[a&&r.jsx(ht,{icon:a,size:"18",className:`juno-popupmenu-item-icon ${vo}`}),l&&typeof l=="string"?l:typeof n=="function"?n(v):n]})})},K=({children:e,className:n="",...t})=>r.jsx("section",{className:`juno-popupmenu-section ${yo} ${n}`,...t,children:e}),ue=({children:e,label:n="",className:t="",...o})=>r.jsx("header",{className:`juno-popupmenu-section-title ${bo} ${t}`,...o,children:r.jsx("h1",{children:n&&n.length?n:e})}),ve=({className:e="",...n})=>r.jsx("div",{className:`juno-popupmenu-section-divider ${Mo} ${e}`,...n});try{N.displayName="PopupMenuToggle",N.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{T.displayName="PopupMenuOptions",T.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{h.displayName="PopupMenuItem",h.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}}}}}catch{}try{K.displayName="PopupMenuSection",K.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ue.displayName="PopupMenuSectionHeading",ue.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ve.displayName="PopupMenuSectionSeparator",ve.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{fe.displayName="PopupMenu",fe.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}}}}}catch{}const ko={title:"WiP/PopupMenu",component:fe,subcomponents:{PopupMenuToggle:N,PopupMenuOptions:T,PopupMenuItem:h,PopupMenuSection:K},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(qt)],control:{type:"select"}}},decorators:[e=>r.jsx(ft,{children:e()})]},Ie=_.forwardRef(({className:e="",onClick:n=void 0,...t},o)=>r.jsx(ye,{ref:o,className:`my-custom-toggle ${e}`,onClick:n,...t,children:"Custom Toggle"}));Ie.displayName="ToggleButton";const Ct=_.forwardRef((e,n)=>{const{isOpen:t}=ce(),{className:o,...s}=e;return r.jsx(ye,{ref:n,className:`toggle-button ${t?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...s,children:e.children||"Toggle Me!"})});Ct.displayName="StyledToggleButton";const Po=e=>{const{close:n}=ce();return r.jsx(ye,{onClick:n,...e})},U={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{...R("onOpen","onClose"),children:r.jsx(T,{children:r.jsx("p",{children:"Menu goes here."})})}},z={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...R("onOpen","onClose")}},Y={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...R("onOpen","onClose"),disabled:!0}},Q={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsx(h,{label:"Menu Item 1"}),r.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]})}},J={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsx(h,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),r.jsx(h,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},X={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsx("p",{children:"Some content goes here."}),r.jsx(Po,{variant:"primary",children:"Yay!"})]})}},Z={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsxs(K,{children:[r.jsx(ue,{children:"Section 1"}),r.jsx(h,{label:"Menu Item 1"}),r.jsx(h,{label:"Menu Item 2",icon:"deleteForever"})]}),r.jsx(ve,{}),r.jsxs(K,{children:[r.jsx(ue,{label:"Section 2"}),r.jsx(h,{label:"Menu Item 3"}),r.jsx(h,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},ee={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...R("onOpen","onClose"),icon:"warning",children:r.jsxs(T,{children:[r.jsx(h,{label:"Menu Item 1"}),r.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]})}},te={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...R("onOpen","onClose"),children:[r.jsx(N,{children:"The Toggle"},"t"),r.jsxs(T,{children:[r.jsx(h,{label:"Menu Item 1"}),r.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ne={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...R("onOpen","onClose"),children:[r.jsx(N,{as:Ie},"t"),r.jsxs(T,{children:[r.jsx(h,{label:"Menu Item 1"}),r.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},oe={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...R("onOpen","onClose"),children:[r.jsx(N,{as:Ct},"t"),r.jsxs(T,{children:[r.jsx(h,{label:"Menu Item 1"}),r.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},se={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...R("onOpen","onClose"),children:[r.jsx(N,{as:_.Fragment,children:r.jsx(Ie,{})},"t"),r.jsxs(T,{children:[r.jsx(h,{label:"Menu Item 1"}),r.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var $e,Ae,Ne;U.parameters={...U.parameters,docs:{...($e=U.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ne=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var ke,De,Fe;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Fe=(De=z.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Ve,Be,We;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(We=(Be=Y.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Le,qe,Ke;Q.parameters={...Q.parameters,docs:{...(Le=Q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=Q.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ge,He,Ue;J.parameters={...J.parameters,docs:{...(Ge=J.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(He=J.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var ze,Ye,Qe;X.parameters={...X.parameters,docs:{...(ze=X.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=(Ye=X.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Je,Xe,Ze;Z.parameters={...Z.parameters,docs:{...(Je=Z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=Z.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ee.parameters={...ee.parameters,docs:{...(et=ee.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ee.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,st,at;te.parameters={...te.parameters,docs:{...(ot=te.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(st=te.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};var rt,lt,ut;ne.parameters={...ne.parameters,docs:{...(rt=ne.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ut=(lt=ne.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var it,pt,ct;oe.parameters={...oe.parameters,docs:{...(it=oe.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ct=(pt=oe.parameters)==null?void 0:pt.docs)==null?void 0:ct.source}}};var dt,mt,gt;se.parameters={...se.parameters,docs:{...(dt=se.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(gt=(mt=se.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};const Do=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{U as Default,Y as DisabledDefaultToggle,z as NoMenu,J as WithChildrenAsLinks,se as WithCustomButtonComponentAsChild,ee as WithIcon,Q as WithMenuChild,Z as WithMenuChildWithSection,X as WithMenuWithRandomContent,te as WithToggleAndMenuChildren,ne as WithToggleAsButtonComponent,oe as WithToggleAsButtonStyledByState,Do as __namedExportsOrder,ko as default};
