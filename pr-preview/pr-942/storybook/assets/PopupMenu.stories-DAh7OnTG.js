import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as y,e as _}from"./index-DI7CEG0L.js";import{v as Dt}from"./v4-CtRu48qb.js";import{u as Ft,h as Vt,o as Bt,g as Wt,s as qt}from"./floating-ui.react-D61D_8ca.js";import{I as ft,K as Lt}from"./Icon.component-Zxq71KFA.js";import{P as ht}from"./PortalProvider.component--bS0Im1B.js";import{m as Ht,g as Oe,c as M,u as vt,f as G,_ as Kt,K as F,S as k,y as ie,n as se,a as j,Y as Gt,E as yt,a0 as Ut,L as V,x as zt,R as Yt,t as Qt,j as _e,k as Jt,l as Xt,p as re,q as Zt,r as en,s as tn,v as nn,h as bt,z as on,A as an,B as sn,F as rn,d as ln,$ as un,e as pn,w as cn,i as dn,O as we,D as mn,M as gn,G as fn,a1 as hn,J as O,N as vn,P as je,a2 as Mt,H as yn,T as bn,V as Mn,X as In}from"./portal-C-1npNRF.js";import{r as ge}from"./index-DnsdnBHL.js";import{a as Pn,s as xn}from"./use-text-value-Cxs_VAU1.js";import{F as Sn}from"./use-tree-walker-Dgr4X7e_.js";import{B as ye}from"./Button.component-CAgAAVSr.js";import"./index-BMl_lxmD.js";import"./Spinner.component-NCyRlNFL.js";var On=Object.defineProperty,_n=(e,n,t)=>n in e?On(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Te=(e,n,t)=>(_n(e,typeof n!="symbol"?n+"":n,t),t),S=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(S||{}),le=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(le||{}),g=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e))(g||{});function Ce(e,n=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=Kt(n(e.items.slice()),s=>s.dataRef.current.domRef.current),a=t?o.indexOf(t):null;return a===-1&&(a=null),{items:o,activeItemIndex:a}}let wn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,pendingFocus:{focus:M.Nothing},menuState:1}},0(e,n){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:n.focus,menuState:0}},2:(e,n)=>{var t,o,a,s,l;if(e.menuState===1)return e;let c={...e,searchQuery:"",activationTrigger:(t=n.trigger)!=null?t:1,__demoMode:!1};if(n.focus===M.Nothing)return{...c,activeItemIndex:null};if(n.focus===M.Specific)return{...c,activeItemIndex:e.items.findIndex(u=>u.id===n.id)};if(n.focus===M.Previous){let u=e.activeItemIndex;if(u!==null){let I=e.items[u].dataRef.current.domRef,v=G(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(v!==null){let d=e.items[v].dataRef.current.domRef;if(((o=I.current)==null?void 0:o.previousElementSibling)===d.current||((a=d.current)==null?void 0:a.previousElementSibling)===null)return{...c,activeItemIndex:v}}}}else if(n.focus===M.Next){let u=e.activeItemIndex;if(u!==null){let I=e.items[u].dataRef.current.domRef,v=G(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(v!==null){let d=e.items[v].dataRef.current.domRef;if(((s=I.current)==null?void 0:s.nextElementSibling)===d.current||((l=d.current)==null?void 0:l.nextElementSibling)===null)return{...c,activeItemIndex:v}}}}let p=Ce(e),P=G(n,{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...c,...p,activeItemIndex:P}},3:(e,n)=>{let t=e.searchQuery!==""?0:1,o=e.searchQuery+n.value.toLowerCase(),a=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find(l=>{var c;return((c=l.dataRef.current.textValue)==null?void 0:c.startsWith(o))&&!l.dataRef.current.disabled}),s=a?e.items.indexOf(a):-1;return s===-1||s===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:s,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,n)=>{let t=e.items.concat(n.items.map(a=>a)),o=e.activeItemIndex;return e.pendingFocus.focus!==M.Nothing&&(o=G(e.pendingFocus,{resolveItems:()=>t,resolveActiveIndex:()=>e.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled})),{...e,items:t,activeItemIndex:o,pendingFocus:{focus:M.Nothing},pendingShouldSort:!0}},6:(e,n)=>{let t=e.items,o=[],a=new Set(n.items);for(let[s,l]of t.entries())if(a.has(l.id)&&(o.push(s),a.delete(l.id),a.size===0))break;if(o.length>0){t=t.slice();for(let s of o.reverse())t.splice(s,1)}return{...e,items:t,activationTrigger:1}},7:(e,n)=>e.buttonElement===n.element?e:{...e,buttonElement:n.element},8:(e,n)=>e.itemsElement===n.element?e:{...e,itemsElement:n.element},9:e=>e.pendingShouldSort?{...e,...Ce(e),pendingShouldSort:!1}:e};class be extends Ht{constructor(n){super(n),Te(this,"actions",{registerItem:Oe(()=>{let t=[],o=new Set;return[(a,s)=>{o.has(s)||(o.add(s),t.push({id:a,dataRef:s}))},()=>(o.clear(),this.send({type:5,items:t.splice(0)}))]}),unregisterItem:Oe(()=>{let t=[];return[o=>t.push(o),()=>this.send({type:6,items:t.splice(0)})]})}),Te(this,"selectors",{activeDescendantId(t){var o;let a=t.activeItemIndex,s=t.items;return a===null||(o=s[a])==null?void 0:o.id},isActive(t,o){var a;let s=t.activeItemIndex,l=t.items;return s!==null?((a=l[s])==null?void 0:a.id)===o:!1},shouldScrollIntoView(t,o){return t.__demoMode||t.menuState!==0||t.activationTrigger===0?!1:this.isActive(t,o)}}),this.on(5,()=>{requestAnimationFrame(()=>{this.send({type:9})})})}static new({__demoMode:n=!1}={}){return new be({__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:M.Nothing}})}reduce(n,t){return vt(t.type,wn,n,t)}}const It=y.createContext(null);function Me(e){let n=y.useContext(It);if(n===null){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Pt),t}return n}function Pt({__demoMode:e=!1}={}){return y.useMemo(()=>be.new({__demoMode:e}),[])}let jn=y.Fragment;function Tn(e,n){let{__demoMode:t=!1,...o}=e,a=Pt({__demoMode:t}),[s,l,c]=k(a,m=>[m.menuState,m.itemsElement,m.buttonElement]),p=ie(n),P=s===S.Open;mn(P,[c,l],(m,E)=>{var C;a.send({type:g.CloseMenu}),bn(E,Mn.Loose)||(m.preventDefault(),(C=a.state.buttonElement)==null||C.focus())});let u=j(()=>{a.send({type:g.CloseMenu})}),I=y.useMemo(()=>({open:s===S.Open,close:u}),[s,u]),v={ref:p},d=V();return _.createElement(gn,null,_.createElement(It.Provider,{value:a},_.createElement(fn,{value:vt(s,{[S.Open]:re.Open,[S.Closed]:re.Closed})},d({ourProps:v,theirProps:o,slot:I,defaultTag:jn,name:"Menu"}))))}let Cn="button";function En(e,n){let t=Me("Menu.Button"),o=y.useId(),{id:a=`headlessui-menu-button-${o}`,disabled:s=!1,autoFocus:l=!1,...c}=e,p=y.useRef(null),P=rn(),u=ie(n,p,ln(),j(b=>t.send({type:g.SetButtonElement,element:b}))),I=j(b=>{switch(b.key){case O.Space:case O.Enter:case O.ArrowDown:b.preventDefault(),b.stopPropagation(),t.send({type:g.OpenMenu,focus:{focus:M.First}});break;case O.ArrowUp:b.preventDefault(),b.stopPropagation(),t.send({type:g.OpenMenu,focus:{focus:M.Last}});break}}),v=j(b=>{switch(b.key){case O.Space:b.preventDefault();break}}),[d,m]=k(t,b=>[b.menuState,b.itemsElement]),E=j(b=>{var W;if(b.button===0){if(yn(b.currentTarget))return b.preventDefault();s||(d===S.Open?(ge.flushSync(()=>t.send({type:g.CloseMenu})),(W=p.current)==null||W.focus({preventScroll:!0})):(b.preventDefault(),t.send({type:g.OpenMenu,focus:{focus:M.Nothing},trigger:le.Pointer})))}}),{isFocusVisible:C,focusProps:h}=un({autoFocus:l}),{isHovered:w,hoverProps:$}=pn({isDisabled:s}),{pressed:N,pressProps:B}=cn({disabled:s}),D=y.useMemo(()=>({open:d===S.Open,active:N||d===S.Open,disabled:s,hover:w,focus:C,autofocus:l}),[d,w,C,N,s,l]),q=bt(P(),{ref:u,id:a,type:dn(e,p.current),"aria-haspopup":"menu","aria-controls":m==null?void 0:m.id,"aria-expanded":d===S.Open,disabled:s||void 0,autoFocus:l,onKeyDown:I,onKeyUp:v,onMouseDown:E},h,$,B);return V()({ourProps:q,theirProps:c,slot:D,defaultTag:Cn,name:"Menu.Button"})}let Rn="div",Nn=we.RenderStrategy|we.Static;function $n(e,n){let t=y.useId(),{id:o=`headlessui-menu-items-${t}`,anchor:a,portal:s=!1,modal:l=!0,transition:c=!1,...p}=e,P=zt(a),u=Me("Menu.Items"),[I,v]=Yt(P),d=Qt(),[m,E]=y.useState(null),C=ie(n,P?I:null,j(i=>u.send({type:g.SetItemsElement,element:i})),E),[h,w]=k(u,i=>[i.menuState,i.buttonElement]),$=_e(w),N=_e(m);P&&(s=!0);let B=Jt(),[D,q]=Xt(c,m,B!==null?(B&re.Open)===re.Open:h===S.Open);Zt(D,w,()=>{u.send({type:g.CloseMenu})});let b=k(u,i=>i.__demoMode),W=b?!1:l&&h===S.Open;en(W,N);let de=b?!1:l&&h===S.Open;tn(de,{allowed:y.useCallback(()=>[w,m],[w,m])});let x=h!==S.Open,K=xn(x,w)?!1:D;y.useEffect(()=>{let i=m;i&&h===S.Open&&i!==(N==null?void 0:N.activeElement)&&i.focus({preventScroll:!0})},[h,m,N]),Sn(h===S.Open,{container:m,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let Pe=nn(),Et=j(i=>{var L,xe,Se;switch(Pe.dispose(),i.key){case O.Space:if(u.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),u.send({type:g.Search,value:i.key});case O.Enter:if(i.preventDefault(),i.stopPropagation(),u.state.activeItemIndex!==null){let{dataRef:kt}=u.state.items[u.state.activeItemIndex];(xe=(L=kt.current)==null?void 0:L.domRef.current)==null||xe.click()}u.send({type:g.CloseMenu}),Mt(u.state.buttonElement);break;case O.ArrowDown:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.Next});case O.ArrowUp:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.Previous});case O.Home:case O.PageUp:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.First});case O.End:case O.PageDown:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:M.Last});case O.Escape:i.preventDefault(),i.stopPropagation(),ge.flushSync(()=>u.send({type:g.CloseMenu})),(Se=u.state.buttonElement)==null||Se.focus({preventScroll:!0});break;case O.Tab:i.preventDefault(),i.stopPropagation(),ge.flushSync(()=>u.send({type:g.CloseMenu})),vn(u.state.buttonElement,i.shiftKey?je.Previous:je.Next);break;default:i.key.length===1&&(u.send({type:g.Search,value:i.key}),Pe.setTimeout(()=>u.send({type:g.ClearSearch}),350));break}}),Rt=j(i=>{switch(i.key){case O.Space:i.preventDefault();break}}),Nt=y.useMemo(()=>({open:h===S.Open}),[h]),$t=bt(P?d():{},{"aria-activedescendant":k(u,u.selectors.activeDescendantId),"aria-labelledby":k(u,i=>{var L;return(L=i.buttonElement)==null?void 0:L.id}),id:o,onKeyDown:Et,onKeyUp:Rt,role:"menu",tabIndex:h===S.Open?0:void 0,ref:C,style:{...p.style,...v,"--button-width":an(w,!0).width},...on(q)}),At=V();return _.createElement(sn,{enabled:s?e.static||D:!1,ownerDocument:$},At({ourProps:$t,theirProps:p,slot:Nt,defaultTag:Rn,features:Nn,visible:K,name:"Menu.Items"}))}let An=y.Fragment;function kn(e,n){let t=y.useId(),{id:o=`headlessui-menu-item-${t}`,disabled:a=!1,...s}=e,l=Me("Menu.Item"),c=k(l,x=>l.selectors.isActive(x,o)),p=y.useRef(null),P=ie(n,p),u=k(l,x=>l.selectors.shouldScrollIntoView(x,o));se(()=>{if(u)return In().requestAnimationFrame(()=>{var x,K;(K=(x=p.current)==null?void 0:x.scrollIntoView)==null||K.call(x,{block:"nearest"})})},[u,p]);let I=Pn(p),v=y.useRef({disabled:a,domRef:p,get textValue(){return I()}});se(()=>{v.current.disabled=a},[v,a]),se(()=>(l.actions.registerItem(o,v),()=>l.actions.unregisterItem(o)),[v,o]);let d=j(()=>{l.send({type:g.CloseMenu})}),m=j(x=>{if(a)return x.preventDefault();l.send({type:g.CloseMenu}),Mt(l.state.buttonElement)}),E=j(()=>{if(a)return l.send({type:g.GoToItem,focus:M.Nothing});l.send({type:g.GoToItem,focus:M.Specific,id:o})}),C=Gt(),h=j(x=>{C.update(x),!a&&(c||l.send({type:g.GoToItem,focus:M.Specific,id:o,trigger:le.Pointer}))}),w=j(x=>{C.wasMoved(x)&&(a||c||l.send({type:g.GoToItem,focus:M.Specific,id:o,trigger:le.Pointer}))}),$=j(x=>{C.wasMoved(x)&&(a||c&&l.send({type:g.GoToItem,focus:M.Nothing}))}),[N,B]=yt(),[D,q]=Ut(),b=y.useMemo(()=>({active:c,focus:c,disabled:a,close:d}),[c,a,d]),W={id:o,ref:P,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-labelledby":N,"aria-describedby":D,disabled:void 0,onClick:m,onFocus:E,onPointerEnter:h,onMouseEnter:h,onPointerMove:w,onMouseMove:w,onPointerLeave:$,onMouseLeave:$},de=V();return _.createElement(B,null,_.createElement(q,null,de({ourProps:W,theirProps:s,slot:b,defaultTag:An,name:"Menu.Item"})))}let Dn="div";function Fn(e,n){let[t,o]=yt(),a=e,s={ref:n,"aria-labelledby":t,role:"group"},l=V();return _.createElement(o,null,l({ourProps:s,theirProps:a,slot:{},defaultTag:Dn,name:"Menu.Section"}))}let Vn="header";function Bn(e,n){let t=y.useId(),{id:o=`headlessui-menu-heading-${t}`,...a}=e,s=hn();se(()=>s.register(o),[o,s.register]);let l={id:o,ref:n,role:"presentation",...s.props};return V()({ourProps:l,theirProps:a,slot:{},defaultTag:Vn,name:"Menu.Heading"})}let Wn="div";function qn(e,n){let t=e,o={ref:n,role:"separator"};return V()({ourProps:o,theirProps:t,slot:{},defaultTag:Wn,name:"Menu.Separator"})}let Ln=F(Tn),xt=F(En),St=F($n),Ot=F(kn),Hn=F(Fn),Kn=F(Bn),Gn=F(qn),Un=Object.assign(Ln,{Button:xt,Items:St,Item:Ot,Section:Hn,Heading:Kn,Separator:Gn});const{addons:zn}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Yn}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Ee}=__STORYBOOK_MODULE_GLOBAL__;var Qn=Object.defineProperty,Jn=(e,n)=>{for(var t in n)Qn(e,t,{get:n[t],enumerable:!0})},Xn="storybook/actions",Zn=`${Xn}/action-event`,fe={depth:10,clearOnStoryChange:!0,limit:50},_t=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:_t(t,n)},eo=e=>!!(typeof e=="object"&&e&&_t(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),to=e=>{if(eo(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(o.constructor.prototype)}),n}return e},no=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Dt():Date.now().toString(36)+Math.random().toString(36).substring(2);function pe(e,n={}){let t={...fe,...n},o=function(...a){var I,v;if(n.implicit){let d=(I="__STORYBOOK_PREVIEW__"in Ee?Ee.__STORYBOOK_PREVIEW__:void 0)==null?void 0:I.storyRenders.find(m=>m.phase==="playing"||m.phase==="rendering");if(d){let m=!((v=globalThis==null?void 0:globalThis.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),E=new Yn({phase:d.phase,name:e,deprecated:m});if(m)console.warn(E);else throw E}}let s=zn.getChannel(),l=no(),c=5,p=a.map(to),P=a.length>1?p:p[0],u={id:l,count:0,data:{name:e,args:P},options:{...t,maxDepth:c+(t.depth||3),allowFunction:t.allowFunction||!1}};s.emit(Zn,u)};return o.isAction=!0,o.implicit=n.implicit,o}var R=(...e)=>{let n=fe,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(n={...fe,...t.pop()});let o=t[0];(t.length!==1||typeof o=="string")&&(o={},t.forEach(s=>{o[s]=s}));let a={};return Object.keys(o).forEach(s=>{a[s]=pe(o[s],n)}),a};const{definePreview:ko}=__STORYBOOK_MODULE_PREVIEW_API__,{global:me}=__STORYBOOK_MODULE_GLOBAL__;var oo={};Jn(oo,{argsEnhancers:()=>ro,loaders:()=>uo});var wt=(e,n)=>typeof n[e]>"u"&&!(e in n),ao=e=>{let{initialArgs:n,argTypes:t,id:o,parameters:{actions:a}}=e;if(!a||a.disable||!a.argTypesRegex||!t)return{};let s=new RegExp(a.argTypesRegex);return Object.entries(t).filter(([l])=>!!s.test(l)).reduce((l,[c,p])=>(wt(c,n)&&(l[c]=pe(c,{implicit:!0,id:o})),l),{})},so=e=>{let{initialArgs:n,argTypes:t,parameters:{actions:o}}=e;return o!=null&&o.disable||!t?{}:Object.entries(t).filter(([a,s])=>!!s.action).reduce((a,[s,l])=>(wt(s,n)&&(a[s]=pe(typeof l.action=="string"?l.action:s)),a),{})},ro=[so,ao],Re=!1,lo=e=>{let{parameters:{actions:n}}=e;if(!(n!=null&&n.disable)&&!Re&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in me&&typeof me.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=me.__STORYBOOK_TEST_ON_MOCK_CALL__;t((o,a)=>{let s=o.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>s.startsWith(l)))&&pe(s)(a)}),Re=!0}},uo=[lo];const io=`
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
`,fo=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,ho=`
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
`,Tt=y.createContext(null),ce=()=>{const e=y.useContext(Tt);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},he=({children:e,className:n="",disabled:t=!1,icon:o="moreVert",menuSize:a="normal",onClose:s,onOpen:l,...c})=>{const[p,P]=y.useState(!1),u=y.useRef(p),{refs:I,floatingStyles:v,update:d}=Ft({placement:"bottom-start",middleware:[Bt(4),Wt(),qt({padding:8})],whileElementsMounted:Vt});y.useEffect(()=>{p!==u.current&&(p?l==null||l():s==null||s()),u.current=p},[p,l,s]);const m=_.Children.toArray(e),E=m.some(h=>_.isValidElement(h)&&h.type===A),C=m.find(h=>_.isValidElement(h)&&h.type===T);return r.jsx(Un,{as:"div",className:`juno-popupmenu ${n}`,...c,children:({open:h,close:w})=>(y.useEffect(()=>{h!==p&&(P(h),h&&d())},[h]),r.jsxs(Tt.Provider,{value:{isOpen:p,close:w,menuSize:a},children:[r.jsxs("div",{ref:I.setReference,className:`juno-popupmenu-float-reference-wrapper ${Io}`,children:[!E&&r.jsx(A,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${t?jt:io}`,disabled:t,children:r.jsx(ft,{icon:o})}),m.map(($,N)=>_.isValidElement($)&&$.type===A?_.cloneElement($,{key:N}):null)]}),p&&r.jsx(ht.Portal,{children:r.jsx("div",{ref:I.setFloating,style:v,className:"juno-popupmenu-float-content-wrapper",children:C})})]}))})},A=({as:e="button",disabled:n=!1,children:t,className:o="",...a})=>r.jsx(xt,{as:e,className:`juno-popupmenu-toggle ${n&&jt} ${o}`,disabled:n,...a,children:t}),T=({children:e,className:n="",...t})=>{const{menuSize:o}=ce();return r.jsx(St,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${po} ${n}`,...t,children:e})},f=({as:e="div",children:n,className:t="",disabled:o=!1,href:a,icon:s,label:l="",rel:c,target:p,...P})=>{const{menuSize:u}=ce(),I=u==="small"?go:mo;return r.jsx(Ot,{as:e,disabled:o,className:`juno-popupmenu-item ${co} ${o?ho:fo} ${I} ${t}`,...e==="a"?{href:a,rel:c,target:p}:{},...P,children:v=>r.jsxs(r.Fragment,{children:[s&&r.jsx(ft,{icon:s,size:"18",className:`juno-popupmenu-item-icon ${vo}`}),l&&typeof l=="string"?l:typeof n=="function"?n(v):n]})})},H=({children:e,className:n="",...t})=>r.jsx("section",{className:`juno-popupmenu-section ${yo} ${n}`,...t,children:e}),ue=({children:e,label:n="",className:t="",...o})=>r.jsx("header",{className:`juno-popupmenu-section-title ${bo} ${t}`,...o,children:r.jsx("h1",{children:n&&n.length?n:e})}),ve=({className:e="",...n})=>r.jsx("div",{className:`juno-popupmenu-section-divider ${Mo} ${e}`,...n});try{A.displayName="PopupMenuToggle",A.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{T.displayName="PopupMenuOptions",T.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{f.displayName="PopupMenuItem",f.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"help"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}try{H.displayName="PopupMenuSection",H.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ue.displayName="PopupMenuSectionHeading",ue.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ve.displayName="PopupMenuSectionSeparator",ve.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{he.displayName="PopupMenu",he.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"help"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const Do={title:"WiP/PopupMenu",component:he,subcomponents:{PopupMenuToggle:A,PopupMenuOptions:T,PopupMenuItem:f,PopupMenuSection:H},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(Lt)],control:{type:"select"}}},decorators:[e=>r.jsx(ht,{children:e()})]},Ie=_.forwardRef(({className:e="",onClick:n=void 0,...t},o)=>r.jsx(ye,{ref:o,className:`my-custom-toggle ${e}`,onClick:n,...t,children:"Custom Toggle"}));Ie.displayName="ToggleButton";const Ct=_.forwardRef((e,n)=>{const{isOpen:t}=ce(),{className:o,...a}=e;return r.jsx(ye,{ref:n,className:`toggle-button ${t?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...a,children:e.children||"Toggle Me!"})});Ct.displayName="StyledToggleButton";const Po=e=>{const{close:n}=ce();return r.jsx(ye,{onClick:n,...e})},U={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{...R("onOpen","onClose"),children:r.jsx(T,{children:r.jsx("p",{children:"Menu goes here."})})}},z={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...R("onOpen","onClose")}},Y={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...R("onOpen","onClose"),disabled:!0}},Q={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsx(f,{label:"Menu Item 1"}),r.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]})}},J={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsx(f,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),r.jsx(f,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},X={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsx("p",{children:"Some content goes here."}),r.jsx(Po,{variant:"primary",children:"Yay!"})]})}},Z={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...R("onOpen","onClose"),children:r.jsxs(T,{children:[r.jsxs(H,{children:[r.jsx(ue,{children:"Section 1"}),r.jsx(f,{label:"Menu Item 1"}),r.jsx(f,{label:"Menu Item 2",icon:"deleteForever"})]}),r.jsx(ve,{}),r.jsxs(H,{children:[r.jsx(ue,{label:"Section 2"}),r.jsx(f,{label:"Menu Item 3"}),r.jsx(f,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},ee={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...R("onOpen","onClose"),icon:"warning",children:r.jsxs(T,{children:[r.jsx(f,{label:"Menu Item 1"}),r.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]})}},te={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...R("onOpen","onClose"),children:[r.jsx(A,{children:"The Toggle"},"t"),r.jsxs(T,{children:[r.jsx(f,{label:"Menu Item 1"}),r.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ne={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...R("onOpen","onClose"),children:[r.jsx(A,{as:Ie},"t"),r.jsxs(T,{children:[r.jsx(f,{label:"Menu Item 1"}),r.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},oe={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...R("onOpen","onClose"),children:[r.jsx(A,{as:Ct},"t"),r.jsxs(T,{children:[r.jsx(f,{label:"Menu Item 1"}),r.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ae={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...R("onOpen","onClose"),children:[r.jsx(A,{as:_.Fragment,children:r.jsx(Ie,{})},"t"),r.jsxs(T,{children:[r.jsx(f,{label:"Menu Item 1"}),r.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var Ne,$e,Ae;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ae=($e=U.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var ke,De,Fe;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(We=(Be=Y.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var qe,Le,He;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(He=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:He.source}}};var Ke,Ge,Ue;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var ze,Ye,Qe;X.parameters={...X.parameters,docs:{...(ze=X.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ee.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,at,st;te.parameters={...te.parameters,docs:{...(ot=te.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(at=te.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var rt,lt,ut;ne.parameters={...ne.parameters,docs:{...(rt=ne.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ct=(pt=oe.parameters)==null?void 0:pt.docs)==null?void 0:ct.source}}};var dt,mt,gt;ae.parameters={...ae.parameters,docs:{...(dt=ae.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(gt=(mt=ae.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};const Fo=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{U as Default,Y as DisabledDefaultToggle,z as NoMenu,J as WithChildrenAsLinks,ae as WithCustomButtonComponentAsChild,ee as WithIcon,Q as WithMenuChild,Z as WithMenuChildWithSection,X as WithMenuWithRandomContent,te as WithToggleAndMenuChildren,ne as WithToggleAsButtonComponent,oe as WithToggleAsButtonStyledByState,Fo as __namedExportsOrder,Do as default};
