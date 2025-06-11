import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m,e as T}from"./index-DI7CEG0L.js";import{v as Vt}from"./v4-CtRu48qb.js";import{u as Bt,h as Wt,o as qt,g as Lt,s as Gt}from"./floating-ui.react-D61D_8ca.js";import{I as ft,K as Ht}from"./Icon.component-BJIU5AI2.js";import{P as vt}from"./PortalProvider.component--bS0Im1B.js";import{E as Kt,x as _e,d as yt,k as Ut,c as I,u as bt,f as U,P as zt,e as Yt,K as F,S as A,y as ce,n as le,b as C,a4 as Qt,Q as Mt,a6 as Jt,L as V,p as Zt,R as Xt,T as en,q as we,r as tn,s as nn,t as ue,v as on,z as sn,A as an,B as rn,_ as It,C as ln,D as un,G as pn,h as cn,F as dn,i as mn,j as z,a as gn,$ as hn,l as fn,w as vn,m as yn,O as je,I as bn,J as Mn,M as In,a7 as Pn,X as j,Y as xn,Z as Te,a8 as Pt,W as Sn,a0 as On,a1 as _n,a3 as wn}from"./portal-BOpe4IRm.js";import{r as he}from"./index-DnsdnBHL.js";import{a as jn,s as Tn}from"./use-text-value-CRrMJWM1.js";import{F as Cn}from"./use-tree-walker-BTnp_bYR.js";import{B as be}from"./Button.component-BvpeSxoL.js";import"./index-BMl_lxmD.js";import"./Spinner.component-NCyRlNFL.js";var En=Object.defineProperty,$n=(e,n,t)=>n in e?En(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ce=(e,n,t)=>($n(e,typeof n!="symbol"?n+"":n,t),t),_=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_||{}),ie=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ie||{}),f=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e))(f||{});function Ee(e,n=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=zt(n(e.items.slice()),a=>a.dataRef.current.domRef.current),s=t?o.indexOf(t):null;return s===-1&&(s=null),{items:o,activeItemIndex:s}}let Rn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,pendingFocus:{focus:I.Nothing},menuState:1}},0(e,n){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:n.focus,menuState:0}},2:(e,n)=>{var t,o,s,a,l;if(e.menuState===1)return e;let d={...e,searchQuery:"",activationTrigger:(t=n.trigger)!=null?t:1,__demoMode:!1};if(n.focus===I.Nothing)return{...d,activeItemIndex:null};if(n.focus===I.Specific)return{...d,activeItemIndex:e.items.findIndex(u=>u.id===n.id)};if(n.focus===I.Previous){let u=e.activeItemIndex;if(u!==null){let P=e.items[u].dataRef.current.domRef,y=U(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(y!==null){let c=e.items[y].dataRef.current.domRef;if(((o=P.current)==null?void 0:o.previousElementSibling)===c.current||((s=c.current)==null?void 0:s.previousElementSibling)===null)return{...d,activeItemIndex:y}}}}else if(n.focus===I.Next){let u=e.activeItemIndex;if(u!==null){let P=e.items[u].dataRef.current.domRef,y=U(n,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(y!==null){let c=e.items[y].dataRef.current.domRef;if(((a=P.current)==null?void 0:a.nextElementSibling)===c.current||((l=c.current)==null?void 0:l.nextElementSibling)===null)return{...d,activeItemIndex:y}}}}let p=Ee(e),x=U(n,{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...d,...p,activeItemIndex:x}},3:(e,n)=>{let t=e.searchQuery!==""?0:1,o=e.searchQuery+n.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find(l=>{var d;return((d=l.dataRef.current.textValue)==null?void 0:d.startsWith(o))&&!l.dataRef.current.disabled}),a=s?e.items.indexOf(s):-1;return a===-1||a===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:a,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,n)=>{let t=e.items.concat(n.items.map(s=>s)),o=e.activeItemIndex;return e.pendingFocus.focus!==I.Nothing&&(o=U(e.pendingFocus,{resolveItems:()=>t,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled})),{...e,items:t,activeItemIndex:o,pendingFocus:{focus:I.Nothing},pendingShouldSort:!0}},6:(e,n)=>{let t=e.items,o=[],s=new Set(n.items);for(let[a,l]of t.entries())if(s.has(l.id)&&(o.push(a),s.delete(l.id),s.size===0))break;if(o.length>0){t=t.slice();for(let a of o.reverse())t.splice(a,1)}return{...e,items:t,activationTrigger:1}},7:(e,n)=>e.buttonElement===n.element?e:{...e,buttonElement:n.element},8:(e,n)=>e.itemsElement===n.element?e:{...e,itemsElement:n.element},9:e=>e.pendingShouldSort?{...e,...Ee(e),pendingShouldSort:!1}:e};class Me extends Kt{constructor(n){super(n),Ce(this,"actions",{registerItem:_e(()=>{let t=[],o=new Set;return[(s,a)=>{o.has(a)||(o.add(a),t.push({id:s,dataRef:a}))},()=>(o.clear(),this.send({type:5,items:t.splice(0)}))]}),unregisterItem:_e(()=>{let t=[];return[o=>t.push(o),()=>this.send({type:6,items:t.splice(0)})]})}),Ce(this,"selectors",{activeDescendantId(t){var o;let s=t.activeItemIndex,a=t.items;return s===null||(o=a[s])==null?void 0:o.id},isActive(t,o){var s;let a=t.activeItemIndex,l=t.items;return a!==null?((s=l[a])==null?void 0:s.id)===o:!1},shouldScrollIntoView(t,o){return t.__demoMode||t.menuState!==0||t.activationTrigger===0?!1:this.isActive(t,o)}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let t=this.state.id,o=yt.get(null);this.disposables.add(o.on(Ut.Push,s=>{!o.selectors.isTop(s,t)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>o.actions.push(t)),this.on(1,()=>o.actions.pop(t))}}static new({id:n,__demoMode:t=!1}){return new Me({id:n,__demoMode:t,menuState:t?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:I.Nothing}})}reduce(n,t){return bt(t.type,Rn,n,t)}}const xt=m.createContext(null);function Ie(e){let n=m.useContext(xt);if(n===null){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,St),t}return n}function St({id:e,__demoMode:n=!1}){let t=m.useMemo(()=>Me.new({id:e,__demoMode:n}),[]);return Yt(()=>t.dispose()),t}let Nn=m.Fragment;function kn(e,n){let t=m.useId(),{__demoMode:o=!1,...s}=e,a=St({id:t,__demoMode:o}),[l,d,p]=A(a,S=>[S.menuState,S.itemsElement,S.buttonElement]),x=ce(n),u=yt.get(null),P=A(u,m.useCallback(S=>u.selectors.isTop(S,t),[u,t]));bn(P,[p,d],(S,h)=>{var O;a.send({type:f.CloseMenu}),On(h,_n.Loose)||(S.preventDefault(),(O=a.state.buttonElement)==null||O.focus())});let y=C(()=>{a.send({type:f.CloseMenu})}),c=m.useMemo(()=>({open:l===_.Open,close:y}),[l,y]),b={ref:x},w=V();return T.createElement(Mn,null,T.createElement(xt.Provider,{value:a},T.createElement(In,{value:bt(l,{[_.Open]:ue.Open,[_.Closed]:ue.Closed})},w({ourProps:b,theirProps:s,slot:c,defaultTag:Nn,name:"Menu"}))))}let An="button";function Dn(e,n){let t=Ie("Menu.Button"),o=m.useId(),{id:s=`headlessui-menu-button-${o}`,disabled:a=!1,autoFocus:l=!1,...d}=e,p=m.useRef(null),x=cn(),u=ce(n,p,dn(),C(g=>t.send({type:f.SetButtonElement,element:g}))),P=C(g=>{switch(g.key){case j.Space:case j.Enter:case j.ArrowDown:g.preventDefault(),g.stopPropagation(),t.send({type:f.OpenMenu,focus:{focus:I.First}});break;case j.ArrowUp:g.preventDefault(),g.stopPropagation(),t.send({type:f.OpenMenu,focus:{focus:I.Last}});break}}),y=C(g=>{switch(g.key){case j.Space:g.preventDefault();break}}),[c,b,w]=A(t,g=>[g.menuState,g.buttonElement,g.itemsElement]),S=c===_.Open;mn(S,{trigger:b,action:m.useCallback(g=>{if(b!=null&&b.contains(g.target))return z.Ignore;let M=g.target.closest('[role="menuitem"]:not([data-disabled])');return gn(M)?z.Select(M):w!=null&&w.contains(g.target)?z.Ignore:z.Close},[b,w]),close:m.useCallback(()=>t.send({type:f.CloseMenu}),[]),select:m.useCallback(g=>g.click(),[])});let h=C(g=>{var M;if(g.button===0){if(Sn(g.currentTarget))return g.preventDefault();a||(c===_.Open?(he.flushSync(()=>t.send({type:f.CloseMenu})),(M=p.current)==null||M.focus({preventScroll:!0})):(g.preventDefault(),t.send({type:f.OpenMenu,focus:{focus:I.Nothing},trigger:ie.Pointer})))}}),{isFocusVisible:O,focusProps:N}=hn({autoFocus:l}),{isHovered:R,hoverProps:B}=fn({isDisabled:a}),{pressed:D,pressProps:q}=vn({disabled:a}),W=m.useMemo(()=>({open:c===_.Open,active:D||c===_.Open,disabled:a,hover:R,focus:O,autofocus:l}),[c,R,O,D,a,l]),L=It(x(),{ref:u,id:s,type:yn(e,p.current),"aria-haspopup":"menu","aria-controls":w==null?void 0:w.id,"aria-expanded":c===_.Open,disabled:a||void 0,autoFocus:l,onKeyDown:P,onKeyUp:y,onPointerDown:h},N,B,q);return V()({ourProps:L,theirProps:d,slot:W,defaultTag:An,name:"Menu.Button"})}let Fn="div",Vn=je.RenderStrategy|je.Static;function Bn(e,n){let t=m.useId(),{id:o=`headlessui-menu-items-${t}`,anchor:s,portal:a=!1,modal:l=!0,transition:d=!1,...p}=e,x=Zt(s),u=Ie("Menu.Items"),[P,y]=Xt(x),c=en(),[b,w]=m.useState(null),S=ce(n,x?P:null,C(i=>u.send({type:f.SetItemsElement,element:i})),w),[h,O]=A(u,i=>[i.menuState,i.buttonElement]),N=we(O),R=we(b);x&&(a=!0);let B=tn(),[D,q]=nn(d,b,B!==null?(B&ue.Open)===ue.Open:h===_.Open);on(D,O,()=>{u.send({type:f.CloseMenu})});let W=A(u,i=>i.__demoMode),L=W?!1:l&&h===_.Open;sn(L,R);let g=W?!1:l&&h===_.Open;an(g,{allowed:m.useCallback(()=>[O,b],[O,b])});let M=h!==_.Open,K=Tn(M,O)?!1:D;m.useEffect(()=>{let i=b;i&&h===_.Open&&i!==(R==null?void 0:R.activeElement)&&i.focus({preventScroll:!0})},[h,b,R]),Cn(h===_.Open,{container:b,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let xe=rn(),Rt=C(i=>{var G,Se,Oe;switch(xe.dispose(),i.key){case j.Space:if(u.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),u.send({type:f.Search,value:i.key});case j.Enter:if(i.preventDefault(),i.stopPropagation(),u.state.activeItemIndex!==null){let{dataRef:Ft}=u.state.items[u.state.activeItemIndex];(Se=(G=Ft.current)==null?void 0:G.domRef.current)==null||Se.click()}u.send({type:f.CloseMenu}),Pt(u.state.buttonElement);break;case j.ArrowDown:return i.preventDefault(),i.stopPropagation(),u.send({type:f.GoToItem,focus:I.Next});case j.ArrowUp:return i.preventDefault(),i.stopPropagation(),u.send({type:f.GoToItem,focus:I.Previous});case j.Home:case j.PageUp:return i.preventDefault(),i.stopPropagation(),u.send({type:f.GoToItem,focus:I.First});case j.End:case j.PageDown:return i.preventDefault(),i.stopPropagation(),u.send({type:f.GoToItem,focus:I.Last});case j.Escape:i.preventDefault(),i.stopPropagation(),he.flushSync(()=>u.send({type:f.CloseMenu})),(Oe=u.state.buttonElement)==null||Oe.focus({preventScroll:!0});break;case j.Tab:i.preventDefault(),i.stopPropagation(),he.flushSync(()=>u.send({type:f.CloseMenu})),xn(u.state.buttonElement,i.shiftKey?Te.Previous:Te.Next);break;default:i.key.length===1&&(u.send({type:f.Search,value:i.key}),xe.setTimeout(()=>u.send({type:f.ClearSearch}),350));break}}),Nt=C(i=>{switch(i.key){case j.Space:i.preventDefault();break}}),kt=m.useMemo(()=>({open:h===_.Open}),[h]),At=It(x?c():{},{"aria-activedescendant":A(u,u.selectors.activeDescendantId),"aria-labelledby":A(u,i=>{var G;return(G=i.buttonElement)==null?void 0:G.id}),id:o,onKeyDown:Rt,onKeyUp:Nt,role:"menu",tabIndex:h===_.Open?0:void 0,ref:S,style:{...p.style,...y,"--button-width":un(O,!0).width},...ln(q)}),Dt=V();return T.createElement(pn,{enabled:a?e.static||D:!1,ownerDocument:N},Dt({ourProps:At,theirProps:p,slot:kt,defaultTag:Fn,features:Vn,visible:K,name:"Menu.Items"}))}let Wn=m.Fragment;function qn(e,n){let t=m.useId(),{id:o=`headlessui-menu-item-${t}`,disabled:s=!1,...a}=e,l=Ie("Menu.Item"),d=A(l,M=>l.selectors.isActive(M,o)),p=m.useRef(null),x=ce(n,p),u=A(l,M=>l.selectors.shouldScrollIntoView(M,o));le(()=>{if(u)return wn().requestAnimationFrame(()=>{var M,K;(K=(M=p.current)==null?void 0:M.scrollIntoView)==null||K.call(M,{block:"nearest"})})},[u,p]);let P=jn(p),y=m.useRef({disabled:s,domRef:p,get textValue(){return P()}});le(()=>{y.current.disabled=s},[y,s]),le(()=>(l.actions.registerItem(o,y),()=>l.actions.unregisterItem(o)),[y,o]);let c=C(()=>{l.send({type:f.CloseMenu})}),b=C(M=>{if(s)return M.preventDefault();l.send({type:f.CloseMenu}),Pt(l.state.buttonElement)}),w=C(()=>{if(s)return l.send({type:f.GoToItem,focus:I.Nothing});l.send({type:f.GoToItem,focus:I.Specific,id:o})}),S=Qt(),h=C(M=>{S.update(M),!s&&(d||l.send({type:f.GoToItem,focus:I.Specific,id:o,trigger:ie.Pointer}))}),O=C(M=>{S.wasMoved(M)&&(s||d||l.send({type:f.GoToItem,focus:I.Specific,id:o,trigger:ie.Pointer}))}),N=C(M=>{S.wasMoved(M)&&(s||d&&l.send({type:f.GoToItem,focus:I.Nothing}))}),[R,B]=Mt(),[D,q]=Jt(),W=m.useMemo(()=>({active:d,focus:d,disabled:s,close:c}),[d,s,c]),L={id:o,ref:x,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-labelledby":R,"aria-describedby":D,disabled:void 0,onClick:b,onFocus:w,onPointerEnter:h,onMouseEnter:h,onPointerMove:O,onMouseMove:O,onPointerLeave:N,onMouseLeave:N},g=V();return T.createElement(B,null,T.createElement(q,null,g({ourProps:L,theirProps:a,slot:W,defaultTag:Wn,name:"Menu.Item"})))}let Ln="div";function Gn(e,n){let[t,o]=Mt(),s=e,a={ref:n,"aria-labelledby":t,role:"group"},l=V();return T.createElement(o,null,l({ourProps:a,theirProps:s,slot:{},defaultTag:Ln,name:"Menu.Section"}))}let Hn="header";function Kn(e,n){let t=m.useId(),{id:o=`headlessui-menu-heading-${t}`,...s}=e,a=Pn();le(()=>a.register(o),[o,a.register]);let l={id:o,ref:n,role:"presentation",...a.props};return V()({ourProps:l,theirProps:s,slot:{},defaultTag:Hn,name:"Menu.Heading"})}let Un="div";function zn(e,n){let t=e,o={ref:n,role:"separator"};return V()({ourProps:o,theirProps:t,slot:{},defaultTag:Un,name:"Menu.Separator"})}let Yn=F(kn),Ot=F(Dn),_t=F(Bn),wt=F(qn),Qn=F(Gn),Jn=F(Kn),Zn=F(zn),Xn=Object.assign(Yn,{Button:Ot,Items:_t,Item:wt,Section:Qn,Heading:Jn,Separator:Zn});const{addons:eo}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:to}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:$e}=__STORYBOOK_MODULE_GLOBAL__;var no=Object.defineProperty,oo=(e,n)=>{for(var t in n)no(e,t,{get:n[t],enumerable:!0})},so="storybook/actions",ao=`${so}/action-event`,fe={depth:10,clearOnStoryChange:!0,limit:50},jt=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:jt(t,n)},ro=e=>!!(typeof e=="object"&&e&&jt(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),lo=e=>{if(ro(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(o.constructor.prototype)}),n}return e},uo=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Vt():Date.now().toString(36)+Math.random().toString(36).substring(2);function de(e,n={}){let t={...fe,...n},o=function(...s){var P,y;if(n.implicit){let c=(P="__STORYBOOK_PREVIEW__"in $e?$e.__STORYBOOK_PREVIEW__:void 0)==null?void 0:P.storyRenders.find(b=>b.phase==="playing"||b.phase==="rendering");if(c){let b=!((y=globalThis==null?void 0:globalThis.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),w=new to({phase:c.phase,name:e,deprecated:b});if(b)console.warn(w);else throw w}}let a=eo.getChannel(),l=uo(),d=5,p=s.map(lo),x=s.length>1?p:p[0],u={id:l,count:0,data:{name:e,args:x},options:{...t,maxDepth:d+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(ao,u)};return o.isAction=!0,o.implicit=n.implicit,o}var $=(...e)=>{let n=fe,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(n={...fe,...t.pop()});let o=t[0];(t.length!==1||typeof o=="string")&&(o={},t.forEach(a=>{o[a]=a}));let s={};return Object.keys(o).forEach(a=>{s[a]=de(o[a],n)}),s};const{definePreview:qo}=__STORYBOOK_MODULE_PREVIEW_API__,{global:ge}=__STORYBOOK_MODULE_GLOBAL__;var io={};oo(io,{argsEnhancers:()=>mo,loaders:()=>ho});var Tt=(e,n)=>typeof n[e]>"u"&&!(e in n),po=e=>{let{initialArgs:n,argTypes:t,id:o,parameters:{actions:s}}=e;if(!s||s.disable||!s.argTypesRegex||!t)return{};let a=new RegExp(s.argTypesRegex);return Object.entries(t).filter(([l])=>!!a.test(l)).reduce((l,[d,p])=>(Tt(d,n)&&(l[d]=de(d,{implicit:!0,id:o})),l),{})},co=e=>{let{initialArgs:n,argTypes:t,parameters:{actions:o}}=e;return o!=null&&o.disable||!t?{}:Object.entries(t).filter(([s,a])=>!!a.action).reduce((s,[a,l])=>(Tt(a,n)&&(s[a]=de(typeof l.action=="string"?l.action:a)),s),{})},mo=[co,po],Re=!1,go=e=>{let{parameters:{actions:n}}=e;if(!(n!=null&&n.disable)&&!Re&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in ge&&typeof ge.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=ge.__STORYBOOK_TEST_ON_MOCK_CALL__;t((o,s)=>{let a=o.getMockName();a!=="spy"&&(!/^next\/.*::/.test(a)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>a.startsWith(l)))&&de(a)(s)}),Re=!0}},ho=[go];const fo=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,Ct=`
  jn-cursor-not-allowed
  jn-opacity-50
`,vo=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,yo=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,bo=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Mo=`
  jn-text-sm
  jn-p-2
`,Io=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,Po=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,xo=`
  jn-inline-block
  jn-mr-2
`,So=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,Oo=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,_o=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,wo=`
  jn-inline-flex
`,Et=m.createContext(null),me=()=>{const e=m.useContext(Et);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},ve=({children:e,className:n="",disabled:t=!1,icon:o="moreVert",menuSize:s="normal",onClose:a,onOpen:l,...d})=>{const[p,x]=m.useState(!1),u=m.useRef(p),{refs:P,floatingStyles:y,update:c}=Bt({placement:"bottom-start",middleware:[qt(4),Lt(),Gt({padding:8})],whileElementsMounted:Wt});m.useEffect(()=>{p!==u.current&&(p?l==null||l():a==null||a()),u.current=p},[p,l,a]);const b=T.Children.toArray(e),w=b.some(h=>T.isValidElement(h)&&h.type===k),S=b.find(h=>T.isValidElement(h)&&h.type===E);return r.jsx(Xn,{as:"div",className:`juno-popupmenu ${n}`,...d,children:({open:h,close:O})=>(m.useEffect(()=>{h!==p&&(x(h),h&&c())},[h]),r.jsxs(Et.Provider,{value:{isOpen:p,close:O,menuSize:s},children:[r.jsxs("div",{ref:P.setReference,className:`juno-popupmenu-float-reference-wrapper ${wo}`,children:[!w&&r.jsx(k,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${t?Ct:fo}`,disabled:t,children:r.jsx(ft,{icon:o})}),b.map((N,R)=>T.isValidElement(N)&&N.type===k?T.cloneElement(N,{key:R}):null)]}),p&&r.jsx(vt.Portal,{children:r.jsx("div",{ref:P.setFloating,style:y,className:"juno-popupmenu-float-content-wrapper",children:S})})]}))})},k=({as:e="button",disabled:n=!1,children:t,className:o="",...s})=>r.jsx(Ot,{as:e,className:`juno-popupmenu-toggle ${n&&Ct} ${o}`,disabled:n,...s,children:t}),E=({children:e,className:n="",...t})=>{const{menuSize:o}=me();return r.jsx(_t,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${vo} ${n}`,...t,children:e})},v=({as:e="div",children:n,className:t="",disabled:o=!1,href:s,icon:a,label:l="",rel:d,target:p,...x})=>{const{menuSize:u}=me(),P=u==="small"?Mo:bo;return r.jsx(wt,{as:e,disabled:o,className:`juno-popupmenu-item ${yo} ${o?Po:Io} ${P} ${t}`,...e==="a"?{href:s,rel:d,target:p}:{},...x,children:y=>r.jsxs(r.Fragment,{children:[a&&r.jsx(ft,{icon:a,size:"18",className:`juno-popupmenu-item-icon ${xo}`}),l&&typeof l=="string"?l:typeof n=="function"?n(y):n]})})},H=({children:e,className:n="",...t})=>r.jsx("section",{className:`juno-popupmenu-section ${So} ${n}`,...t,children:e}),pe=({children:e,label:n="",className:t="",...o})=>r.jsx("header",{className:`juno-popupmenu-section-title ${Oo} ${t}`,...o,children:r.jsx("h1",{children:n&&n.length?n:e})}),ye=({className:e="",...n})=>r.jsx("div",{className:`juno-popupmenu-section-divider ${_o} ${e}`,...n});try{k.displayName="PopupMenuToggle",k.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{E.displayName="PopupMenuOptions",E.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{v.displayName="PopupMenuItem",v.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}try{H.displayName="PopupMenuSection",H.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{pe.displayName="PopupMenuSectionHeading",pe.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ye.displayName="PopupMenuSectionSeparator",ye.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ve.displayName="PopupMenu",ve.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const Lo={title:"WiP/PopupMenu",component:ve,subcomponents:{PopupMenuToggle:k,PopupMenuOptions:E,PopupMenuItem:v,PopupMenuSection:H},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(Ht)],control:{type:"select"}}},decorators:[e=>r.jsx(vt,{children:e()})]},Pe=T.forwardRef(({className:e="",onClick:n=void 0,...t},o)=>r.jsx(be,{ref:o,className:`my-custom-toggle ${e}`,onClick:n,...t,children:"Custom Toggle"}));Pe.displayName="ToggleButton";const $t=T.forwardRef((e,n)=>{const{isOpen:t}=me(),{className:o,...s}=e;return r.jsx(be,{ref:n,className:`toggle-button ${t?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...s,children:e.children||"Toggle Me!"})});$t.displayName="StyledToggleButton";const jo=e=>{const{close:n}=me();return r.jsx(be,{onClick:n,...e})},Y={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{...$("onOpen","onClose"),children:r.jsx(E,{children:r.jsx("p",{children:"Menu goes here."})})}},Q={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...$("onOpen","onClose")}},J={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...$("onOpen","onClose"),disabled:!0}},Z={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...$("onOpen","onClose"),children:r.jsxs(E,{children:[r.jsx(v,{label:"Menu Item 1"}),r.jsx(v,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(v,{label:"Menu Item 3 Disabled",disabled:!0})]})}},X={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{...$("onOpen","onClose"),children:r.jsxs(E,{children:[r.jsx(v,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),r.jsx(v,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},ee={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...$("onOpen","onClose"),children:r.jsxs(E,{children:[r.jsx("p",{children:"Some content goes here."}),r.jsx(jo,{variant:"primary",children:"Yay!"})]})}},te={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...$("onOpen","onClose"),children:r.jsxs(E,{children:[r.jsxs(H,{children:[r.jsx(pe,{children:"Section 1"}),r.jsx(v,{label:"Menu Item 1"}),r.jsx(v,{label:"Menu Item 2",icon:"deleteForever"})]}),r.jsx(ye,{}),r.jsxs(H,{children:[r.jsx(pe,{label:"Section 2"}),r.jsx(v,{label:"Menu Item 3"}),r.jsx(v,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},ne={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...$("onOpen","onClose"),icon:"warning",children:r.jsxs(E,{children:[r.jsx(v,{label:"Menu Item 1"}),r.jsx(v,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(v,{label:"Menu Item 3 Disabled",disabled:!0})]})}},oe={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...$("onOpen","onClose"),children:[r.jsx(k,{children:"The Toggle"},"t"),r.jsxs(E,{children:[r.jsx(v,{label:"Menu Item 1"}),r.jsx(v,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(v,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},se={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...$("onOpen","onClose"),children:[r.jsx(k,{as:Pe},"t"),r.jsxs(E,{children:[r.jsx(v,{label:"Menu Item 1"}),r.jsx(v,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(v,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ae={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...$("onOpen","onClose"),children:[r.jsx(k,{as:$t},"t"),r.jsxs(E,{children:[r.jsx(v,{label:"Menu Item 1"}),r.jsx(v,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(v,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},re={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...$("onOpen","onClose"),children:[r.jsx(k,{as:T.Fragment,children:r.jsx(Pe,{})},"t"),r.jsxs(E,{children:[r.jsx(v,{label:"Menu Item 1"}),r.jsx(v,{label:"Menu Item 2",icon:"deleteForever"}),r.jsx(v,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var Ne,ke,Ae;Y.parameters={...Y.parameters,docs:{...(Ne=Y.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ae=(ke=Y.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var De,Fe,Ve;Q.parameters={...Q.parameters,docs:{...(De=Q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ve=(Fe=Q.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Be,We,qe;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(qe=(We=J.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Le,Ge,He;Z.parameters={...Z.parameters,docs:{...(Le=Z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(He=(Ge=Z.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Ue,ze;X.parameters={...X.parameters,docs:{...(Ke=X.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(ze=(Ue=X.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Ye,Qe,Je;ee.parameters={...ee.parameters,docs:{...(Ye=ee.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Qe=ee.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Ze,Xe,et;te.parameters={...te.parameters,docs:{...(Ze=te.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(et=(Xe=te.parameters)==null?void 0:Xe.docs)==null?void 0:et.source}}};var tt,nt,ot;ne.parameters={...ne.parameters,docs:{...(tt=ne.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(ot=(nt=ne.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,at,rt;oe.parameters={...oe.parameters,docs:{...(st=oe.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(rt=(at=oe.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var lt,ut,it;se.parameters={...se.parameters,docs:{...(lt=se.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(it=(ut=se.parameters)==null?void 0:ut.docs)==null?void 0:it.source}}};var pt,ct,dt;ae.parameters={...ae.parameters,docs:{...(pt=ae.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(dt=(ct=ae.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var mt,gt,ht;re.parameters={...re.parameters,docs:{...(mt=re.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ht=(gt=re.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};const Go=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{Y as Default,J as DisabledDefaultToggle,Q as NoMenu,X as WithChildrenAsLinks,re as WithCustomButtonComponentAsChild,ne as WithIcon,Z as WithMenuChild,te as WithMenuChildWithSection,ee as WithMenuWithRandomContent,oe as WithToggleAndMenuChildren,se as WithToggleAsButtonComponent,ae as WithToggleAsButtonStyledByState,Go as __namedExportsOrder,Lo as default};
