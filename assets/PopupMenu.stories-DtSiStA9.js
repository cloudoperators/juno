import{r as p,e as C,b as me,j as s}from"./iframe-DLtVslRY.js";import{u as Je,h as Ye,o as Ze,g as Xe,s as en}from"./floating-ui.react-CIy6V4A9.js";import{I as Ce,K as nn}from"./Icon.component-CkSsc1Jm.js";import{P as _e}from"./PortalProvider.component-BsysNP11.js";import{E as tn,x as xe,c as $e,k as on,d as P,u as Ee,f as z,P as sn,e as an,K as A,S as F,y as de,n as le,b as _,g as rn,Q as Ne,w as ln,L as V,h as un,R as pn,T as dn,i as Se,j as cn,l as mn,m as ue,p as fn,q as hn,r as gn,s as vn,_ as ke,t as yn,v as bn,z as Mn,A as In,F as Pn,B as xn,C as K,a as Sn,$ as wn,D as jn,G as On,H as Tn,O as we,I as Cn,J as _n,M as $n,N as En,U as T,V as Nn,W as je,X as De,Y as kn,Z as Dn,a0 as Fn,a1 as Rn}from"./portal-BYg-qWaY.js";import{s as An,a as Vn}from"./use-text-value-BjBF_13W.js";import{F as qn}from"./use-tree-walker-DDRa_pTz.js";import{B as ge}from"./Button.component-BrSTtRc9.js";import"./Spinner.component-C_K6wa-4.js";var Bn=Object.defineProperty,Wn=(e,t,n)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oe=(e,t,n)=>(Wn(e,typeof t!="symbol"?t+"":t,n),n),w=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(w||{}),ie=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ie||{}),h=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e))(h||{});function Te(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=sn(t(e.items.slice()),r=>r.dataRef.current.domRef.current),a=n?o.indexOf(n):null;return a===-1&&(a=null),{items:o,activeItemIndex:a}}let Hn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,pendingFocus:{focus:P.Nothing},menuState:1}},0(e,t){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:t.focus,menuState:0}},2:(e,t)=>{var n,o,a,r,u;if(e.menuState===1)return e;let v={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===P.Nothing)return{...v,activeItemIndex:null};if(t.focus===P.Specific)return{...v,activeItemIndex:e.items.findIndex(l=>l.id===t.id)};if(t.focus===P.Previous){let l=e.activeItemIndex;if(l!==null){let O=e.items[l].dataRef.current.domRef,b=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(b!==null){let c=e.items[b].dataRef.current.domRef;if(((o=O.current)==null?void 0:o.previousElementSibling)===c.current||((a=c.current)==null?void 0:a.previousElementSibling)===null)return{...v,activeItemIndex:b}}}}else if(t.focus===P.Next){let l=e.activeItemIndex;if(l!==null){let O=e.items[l].dataRef.current.domRef,b=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(b!==null){let c=e.items[b].dataRef.current.domRef;if(((r=O.current)==null?void 0:r.nextElementSibling)===c.current||((u=c.current)==null?void 0:u.nextElementSibling)===null)return{...v,activeItemIndex:b}}}}let d=Te(e),j=z(t,{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...v,...d,activeItemIndex:j}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),a=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(u=>{var v;return((v=u.dataRef.current.textValue)==null?void 0:v.startsWith(o))&&!u.dataRef.current.disabled}),r=a?e.items.indexOf(a):-1;return r===-1||r===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:r,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=e.items.concat(t.items.map(a=>a)),o=e.activeItemIndex;return e.pendingFocus.focus!==P.Nothing&&(o=z(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled})),{...e,items:n,activeItemIndex:o,pendingFocus:{focus:P.Nothing},pendingShouldSort:!0}},6:(e,t)=>{let n=e.items,o=[],a=new Set(t.items);for(let[r,u]of n.entries())if(a.has(u.id)&&(o.push(r),a.delete(u.id),a.size===0))break;if(o.length>0){n=n.slice();for(let r of o.reverse())n.splice(r,1)}return{...e,items:n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element},9:e=>e.pendingShouldSort?{...e,...Te(e),pendingShouldSort:!1}:e};class ve extends tn{constructor(t){super(t),Oe(this,"actions",{registerItem:xe(()=>{let n=[],o=new Set;return[(a,r)=>{o.has(r)||(o.add(r),n.push({id:a,dataRef:r}))},()=>(o.clear(),this.send({type:5,items:n.splice(0)}))]}),unregisterItem:xe(()=>{let n=[];return[o=>n.push(o),()=>this.send({type:6,items:n.splice(0)})]})}),Oe(this,"selectors",{activeDescendantId(n){var o;let a=n.activeItemIndex,r=n.items;return a===null||(o=r[a])==null?void 0:o.id},isActive(n,o){var a;let r=n.activeItemIndex,u=n.items;return r!==null?((a=u[r])==null?void 0:a.id)===o:!1},shouldScrollIntoView(n,o){return n.__demoMode||n.menuState!==0||n.activationTrigger===0?!1:this.isActive(n,o)}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let n=this.state.id,o=$e.get(null);this.disposables.add(o.on(on.Push,a=>{!o.selectors.isTop(a,n)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>o.actions.push(n)),this.on(1,()=>o.actions.pop(n))}}static new({id:t,__demoMode:n=!1}){return new ve({id:t,__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:P.Nothing}})}reduce(t,n){return Ee(n.type,Hn,t,n)}}const Fe=p.createContext(null);function ye(e){let t=p.useContext(Fe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Re),n}return t}function Re({id:e,__demoMode:t=!1}){let n=p.useMemo(()=>ve.new({id:e,__demoMode:t}),[]);return an(()=>n.dispose()),n}let Ln=p.Fragment;function Gn(e,t){let n=p.useId(),{__demoMode:o=!1,...a}=e,r=Re({id:n,__demoMode:o}),[u,v,d]=F(r,x=>[x.menuState,x.itemsElement,x.buttonElement]),j=de(t),l=$e.get(null),O=F(l,p.useCallback(x=>l.selectors.isTop(x,n),[l,n]));Cn(O,[d,v],(x,f)=>{var S;r.send({type:h.CloseMenu}),Dn(f,Fn.Loose)||(x.preventDefault(),(S=r.state.buttonElement)==null||S.focus())});let b=_(()=>{r.send({type:h.CloseMenu})}),c=p.useMemo(()=>({open:u===w.Open,close:b}),[u,b]),I={ref:j},E=V();return C.createElement(_n,null,C.createElement(Fe.Provider,{value:r},C.createElement($n,{value:Ee(u,{[w.Open]:ue.Open,[w.Closed]:ue.Closed})},E({ourProps:I,theirProps:a,slot:c,defaultTag:Ln,name:"Menu"}))))}let Un="button";function zn(e,t){let n=ye("Menu.Button"),o=p.useId(),{id:a=`headlessui-menu-button-${o}`,disabled:r=!1,autoFocus:u=!1,...v}=e,d=p.useRef(null),j=In(),l=de(t,d,Pn(),_(m=>n.send({type:h.SetButtonElement,element:m}))),O=_(m=>{switch(m.key){case T.Space:case T.Enter:case T.ArrowDown:m.preventDefault(),m.stopPropagation(),n.send({type:h.OpenMenu,focus:{focus:P.First}});break;case T.ArrowUp:m.preventDefault(),m.stopPropagation(),n.send({type:h.OpenMenu,focus:{focus:P.Last}});break}}),b=_(m=>{switch(m.key){case T.Space:m.preventDefault();break}}),[c,I,E]=F(n,m=>[m.menuState,m.buttonElement,m.itemsElement]),x=c===w.Open;xn(x,{trigger:I,action:p.useCallback(m=>{if(I!=null&&I.contains(m.target))return K.Ignore;let M=m.target.closest('[role="menuitem"]:not([data-disabled])');return Sn(M)?K.Select(M):E!=null&&E.contains(m.target)?K.Ignore:K.Close},[I,E]),close:p.useCallback(()=>n.send({type:h.CloseMenu}),[]),select:p.useCallback(m=>m.click(),[])});let f=_(m=>{var M;if(m.button===0){if(kn(m.currentTarget))return m.preventDefault();r||(c===w.Open?(me.flushSync(()=>n.send({type:h.CloseMenu})),(M=d.current)==null||M.focus({preventScroll:!0})):(m.preventDefault(),n.send({type:h.OpenMenu,focus:{focus:P.Nothing},trigger:ie.Pointer})))}}),{isFocusVisible:S,focusProps:k}=wn({autoFocus:u}),{isHovered:N,hoverProps:q}=jn({isDisabled:r}),{pressed:R,pressProps:W}=On({disabled:r}),B=p.useMemo(()=>({open:c===w.Open,active:R||c===w.Open,disabled:r,hover:N,focus:S,autofocus:u}),[c,N,S,R,r,u]),H=ke(j(),{ref:l,id:a,type:Tn(e,d.current),"aria-haspopup":"menu","aria-controls":E?.id,"aria-expanded":c===w.Open,disabled:r||void 0,autoFocus:u,onKeyDown:O,onKeyUp:b,onPointerDown:f},k,q,W);return V()({ourProps:H,theirProps:v,slot:B,defaultTag:Un,name:"Menu.Button"})}let Kn="div",Qn=we.RenderStrategy|we.Static;function Jn(e,t){let n=p.useId(),{id:o=`headlessui-menu-items-${n}`,anchor:a,portal:r=!1,modal:u=!0,transition:v=!1,...d}=e,j=un(a),l=ye("Menu.Items"),[O,b]=pn(j),c=dn(),[I,E]=p.useState(null),x=de(t,j?O:null,_(i=>l.send({type:h.SetItemsElement,element:i})),E),[f,S]=F(l,i=>[i.menuState,i.buttonElement]),k=Se(S),N=Se(I);j&&(r=!0);let q=cn(),[R,W]=mn(v,I,q!==null?(q&ue.Open)===ue.Open:f===w.Open);fn(R,S,()=>{l.send({type:h.CloseMenu})});let B=F(l,i=>i.__demoMode),H=B?!1:u&&f===w.Open;hn(H,N);let m=B?!1:u&&f===w.Open;gn(m,{allowed:p.useCallback(()=>[S,I],[S,I])});let M=f!==w.Open,U=Vn(M,S)?!1:R;p.useEffect(()=>{let i=I;i&&f===w.Open&&i!==N?.activeElement&&i.focus({preventScroll:!0})},[f,I,N]),qn(f===w.Open,{container:I,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let Me=vn(),Le=_(i=>{var L,Ie,Pe;switch(Me.dispose(),i.key){case T.Space:if(l.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),l.send({type:h.Search,value:i.key});case T.Enter:if(i.preventDefault(),i.stopPropagation(),l.state.activeItemIndex!==null){let{dataRef:Qe}=l.state.items[l.state.activeItemIndex];(Ie=(L=Qe.current)==null?void 0:L.domRef.current)==null||Ie.click()}l.send({type:h.CloseMenu}),De(l.state.buttonElement);break;case T.ArrowDown:return i.preventDefault(),i.stopPropagation(),l.send({type:h.GoToItem,focus:P.Next});case T.ArrowUp:return i.preventDefault(),i.stopPropagation(),l.send({type:h.GoToItem,focus:P.Previous});case T.Home:case T.PageUp:return i.preventDefault(),i.stopPropagation(),l.send({type:h.GoToItem,focus:P.First});case T.End:case T.PageDown:return i.preventDefault(),i.stopPropagation(),l.send({type:h.GoToItem,focus:P.Last});case T.Escape:i.preventDefault(),i.stopPropagation(),me.flushSync(()=>l.send({type:h.CloseMenu})),(Pe=l.state.buttonElement)==null||Pe.focus({preventScroll:!0});break;case T.Tab:i.preventDefault(),i.stopPropagation(),me.flushSync(()=>l.send({type:h.CloseMenu})),Nn(l.state.buttonElement,i.shiftKey?je.Previous:je.Next);break;default:i.key.length===1&&(l.send({type:h.Search,value:i.key}),Me.setTimeout(()=>l.send({type:h.ClearSearch}),350));break}}),Ge=_(i=>{switch(i.key){case T.Space:i.preventDefault();break}}),Ue=p.useMemo(()=>({open:f===w.Open}),[f]),ze=ke(j?c():{},{"aria-activedescendant":F(l,l.selectors.activeDescendantId),"aria-labelledby":F(l,i=>{var L;return(L=i.buttonElement)==null?void 0:L.id}),id:o,onKeyDown:Le,onKeyUp:Ge,role:"menu",tabIndex:f===w.Open?0:void 0,ref:x,style:{...d.style,...b,"--button-width":bn(S,!0).width},...yn(W)}),Ke=V();return C.createElement(Mn,{enabled:r?e.static||R:!1,ownerDocument:k},Ke({ourProps:ze,theirProps:d,slot:Ue,defaultTag:Kn,features:Qn,visible:U,name:"Menu.Items"}))}let Yn=p.Fragment;function Zn(e,t){let n=p.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:a=!1,...r}=e,u=ye("Menu.Item"),v=F(u,M=>u.selectors.isActive(M,o)),d=p.useRef(null),j=de(t,d),l=F(u,M=>u.selectors.shouldScrollIntoView(M,o));le(()=>{if(l)return Rn().requestAnimationFrame(()=>{var M,U;(U=(M=d.current)==null?void 0:M.scrollIntoView)==null||U.call(M,{block:"nearest"})})},[l,d]);let O=An(d),b=p.useRef({disabled:a,domRef:d,get textValue(){return O()}});le(()=>{b.current.disabled=a},[b,a]),le(()=>(u.actions.registerItem(o,b),()=>u.actions.unregisterItem(o)),[b,o]);let c=_(()=>{u.send({type:h.CloseMenu})}),I=_(M=>{if(a)return M.preventDefault();u.send({type:h.CloseMenu}),De(u.state.buttonElement)}),E=_(()=>{if(a)return u.send({type:h.GoToItem,focus:P.Nothing});u.send({type:h.GoToItem,focus:P.Specific,id:o})}),x=rn(),f=_(M=>{x.update(M),!a&&(v||u.send({type:h.GoToItem,focus:P.Specific,id:o,trigger:ie.Pointer}))}),S=_(M=>{x.wasMoved(M)&&(a||v||u.send({type:h.GoToItem,focus:P.Specific,id:o,trigger:ie.Pointer}))}),k=_(M=>{x.wasMoved(M)&&(a||v&&u.send({type:h.GoToItem,focus:P.Nothing}))}),[N,q]=Ne(),[R,W]=ln(),B=p.useMemo(()=>({active:v,focus:v,disabled:a,close:c}),[v,a,c]),H={id:o,ref:j,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-labelledby":N,"aria-describedby":R,disabled:void 0,onClick:I,onFocus:E,onPointerEnter:f,onMouseEnter:f,onPointerMove:S,onMouseMove:S,onPointerLeave:k,onMouseLeave:k},m=V();return C.createElement(q,null,C.createElement(W,null,m({ourProps:H,theirProps:r,slot:B,defaultTag:Yn,name:"Menu.Item"})))}let Xn="div";function et(e,t){let[n,o]=Ne(),a=e,r={ref:t,"aria-labelledby":n,role:"group"},u=V();return C.createElement(o,null,u({ourProps:r,theirProps:a,slot:{},defaultTag:Xn,name:"Menu.Section"}))}let nt="header";function tt(e,t){let n=p.useId(),{id:o=`headlessui-menu-heading-${n}`,...a}=e,r=En();le(()=>r.register(o),[o,r.register]);let u={id:o,ref:t,role:"presentation",...r.props};return V()({ourProps:u,theirProps:a,slot:{},defaultTag:nt,name:"Menu.Heading"})}let ot="div";function st(e,t){let n=e,o={ref:t,role:"separator"};return V()({ourProps:o,theirProps:n,slot:{},defaultTag:ot,name:"Menu.Separator"})}let at=A(Gn),Ae=A(zn),Ve=A(Jn),qe=A(Zn),rt=A(et),lt=A(tt),ut=A(st),it=Object.assign(at,{Button:Ae,Items:Ve,Item:qe,Section:rt,Heading:lt,Separator:ut});const pt=`
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`,Be=`
  jn:cursor-not-allowed
  jn:opacity-50
`,dt=`
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`,ct=`
  jn:text-base
  jn:text-theme-default
  jn:flex
  jn:w-full
  jn:items-center
  jn:whitespace-nowrap
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,mt=`
  jn:text-base
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,ft=`
  jn:text-sm
  jn:p-2
`,ht=`
  jn:hover:bg-theme-background-lvl-3
  jn:cursor-pointer
`,gt=`
  jn:cursor-not-allowed
  jn:opacity-50
  jn:bg-theme-background-lvl-1
`,vt=`
  jn:inline-block
  jn:mr-2
`,yt=`
  jn:border-b
  jn:border-theme-background-lvl-3
  jn:last:border-b-0
`,bt=`
  jn:text-theme-light
  jn:text-xs
  jn:p-2
  jn:cursor-default
`,Mt=`
  jn:h-
  jn:bg-theme-background-lvl-3
`,It=`
  jn:inline-flex
`,We=p.createContext(null),ce=()=>{const e=p.useContext(We);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},fe=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:a="normal",onClose:r,onOpen:u,...v})=>{const[d,j]=p.useState(!1),l=p.useRef(d),{refs:O,floatingStyles:b,update:c}=Je({placement:"bottom-start",middleware:[Ze(4),Xe(),en({padding:8})],whileElementsMounted:Ye});p.useEffect(()=>{d!==l.current&&(d?u?.():r?.()),l.current=d},[d,u,r]);const I=C.Children.toArray(e),E=I.some(f=>C.isValidElement(f)&&f.type===D),x=I.find(f=>C.isValidElement(f)&&f.type===$);return s.jsx(it,{as:"div",className:`juno-popupmenu ${t}`,...v,children:({open:f,close:S})=>(p.useEffect(()=>{f!==d&&(j(f),f&&c())},[f]),s.jsxs(We.Provider,{value:{isOpen:d,close:S,menuSize:a},children:[s.jsxs("div",{ref:O.setReference,className:`juno-popupmenu-float-reference-wrapper ${It}`,children:[!E&&s.jsx(D,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?Be:pt}`,disabled:n,children:s.jsx(Ce,{icon:o})}),I.map((k,N)=>C.isValidElement(k)&&k.type===D?C.cloneElement(k,{key:N}):null)]}),d&&s.jsx(_e.Portal,{children:s.jsx("div",{ref:O.setFloating,style:b,className:"juno-popupmenu-float-content-wrapper",children:x})})]}))})},D=({as:e="button",disabled:t=!1,children:n,className:o="",...a})=>s.jsx(Ae,{as:e,className:`juno-popupmenu-toggle ${t&&Be} ${o}`,disabled:t,...a,children:n}),$=({children:e,className:t="",...n})=>{const{menuSize:o}=ce();return s.jsx(Ve,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${dt} ${t}`,...n,children:e})},g=({as:e="div",children:t,className:n="",disabled:o=!1,href:a,icon:r,label:u="",rel:v,target:d,...j})=>{const{menuSize:l}=ce(),O=l==="small"?ft:mt;return s.jsx(qe,{as:e,disabled:o,className:`juno-popupmenu-item ${ct} ${o?gt:ht} ${O} ${n}`,...e==="a"?{href:a,rel:v,target:d}:{},...j,children:b=>s.jsxs(s.Fragment,{children:[r&&s.jsx(Ce,{icon:r,size:"18",className:`juno-popupmenu-item-icon ${vt}`}),u&&typeof u=="string"?u:typeof t=="function"?t(b):t]})})},G=({children:e,className:t="",...n})=>s.jsx("section",{className:`juno-popupmenu-section ${yt} ${t}`,...n,children:e}),pe=({children:e,label:t="",className:n="",...o})=>s.jsx("header",{className:`juno-popupmenu-section-title ${bt} ${n}`,...o,children:s.jsx("h1",{children:t&&t.length?t:e})}),he=({className:e="",...t})=>s.jsx("div",{className:`juno-popupmenu-section-divider ${Mt} ${e}`,...t});try{D.displayName="PopupMenuToggle",D.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{$.displayName="PopupMenuOptions",$.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{g.displayName="PopupMenuItem",g.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}try{G.displayName="PopupMenuSection",G.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{pe.displayName="PopupMenuSectionHeading",pe.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{he.displayName="PopupMenuSectionSeparator",he.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{fe.displayName="PopupMenu",fe.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const{fn:y}=__STORYBOOK_MODULE_TEST__,Et={title:"WiP/PopupMenu",component:fe,subcomponents:{PopupMenuToggle:D,PopupMenuOptions:$,PopupMenuItem:g,PopupMenuSection:G},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(nn)],control:{type:"select"}}},decorators:[e=>s.jsx(_e,{children:s.jsx(e,{})})]},be=C.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>s.jsx(ge,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));be.displayName="ToggleButton";const He=C.forwardRef((e,t)=>{const{isOpen:n}=ce(),{className:o,...a}=e;return s.jsx(ge,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...a,children:e.children||"Toggle Me!"})});He.displayName="StyledToggleButton";const Pt=e=>{const{close:t}=ce();return s.jsx(ge,{onClick:t,...e})},Q={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:y(),onClose:y(),children:s.jsx($,{children:s.jsx("p",{children:"Menu goes here."})})}},J={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:y(),onClose:y()}},Y={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{onOpen:y(),onClose:y(),disabled:!0}},Z={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:y(),onClose:y(),children:s.jsxs($,{children:[s.jsx(g,{label:"Menu Item 1"}),s.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]})}},X={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:y(),onClose:y(),children:s.jsxs($,{children:[s.jsx(g,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),s.jsx(g,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},ee={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:y(),onClose:y(),children:s.jsxs($,{children:[s.jsx("p",{children:"Some content goes here."}),s.jsx(Pt,{variant:"primary",children:"Yay!"})]})}},ne={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{onOpen:y(),onClose:y(),children:s.jsxs($,{children:[s.jsxs(G,{children:[s.jsx(pe,{children:"Section 1"}),s.jsx(g,{label:"Menu Item 1"}),s.jsx(g,{label:"Menu Item 2",icon:"deleteForever"})]}),s.jsx(he,{}),s.jsxs(G,{children:[s.jsx(pe,{label:"Section 2"}),s.jsx(g,{label:"Menu Item 3"}),s.jsx(g,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},te={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{onOpen:y(),onClose:y(),icon:"warning",children:s.jsxs($,{children:[s.jsx(g,{label:"Menu Item 1"}),s.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]})}},oe={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:y(),onClose:y(),children:[s.jsx(D,{children:"The Toggle"},"t"),s.jsxs($,{children:[s.jsx(g,{label:"Menu Item 1"}),s.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},se={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:y(),onClose:y(),children:[s.jsx(D,{as:be},"t"),s.jsxs($,{children:[s.jsx(g,{label:"Menu Item 1"}),s.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ae={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:y(),onClose:y(),children:[s.jsx(D,{as:He},"t"),s.jsxs($,{children:[s.jsx(g,{label:"Menu Item 1"}),s.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},re={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:y(),onClose:y(),children:[s.jsx(D,{as:C.Fragment,children:s.jsx(be,{})},"t"),s.jsxs($,{children:[s.jsx(g,{label:"Menu Item 1"}),s.jsx(g,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(g,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When no \`<PopupMenuOptions>\` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <p>Menu goes here.</p>
      </PopupMenuOptions>
  }
}`,...Q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This story has no \`PopupMenuOptions\` passed. The component should still render without any errors, and \`onOpen\` and \`onClose\` should be run regardless."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn()
  }
}`,...J.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    args: {
      description: {
        story: "Disable the default toggle."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    disabled: true
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass at least a \`<PopupMenuOptions>\` component with \`<PopupMenuItem>\` elements inside to render a functional menu. A default toggle element will be rendered."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...Z.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`as\` as \`anchor\` and supply a \`href\` prop in order to render PopupMenuItem elements as links."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuItem as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenuItem as="a" href="https://www.sap.com" label="Go to sap.com" target="_blank" icon="openInNew" />
      </PopupMenuOptions>
  }
}`,...X.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`PopupMenuItem\` elements may contain random elements other than \`PopupMenuItem\`. In such cases you may consume the PopupMenu context using the \`usePopupMenuContext\` hook that contains a \`close\` function that can be used by custom components to close the menu if needed."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenuOptions>
  }
}`,...ee.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
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
}`,...ne.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon without having to pass a custom toggle element."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    icon: "warning",
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...te.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In the simplest case, a toggle can contain only a string. \`PopupMenu\` will render a \`<button>\` element containing that string or any opther children."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle key="t">The Toggle</PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...oe.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass a custom component to render \`as={MyCustomComponent}\` to render as a toggle. Make sure to forward refs. Note we may change the standard \`<PopupMenuToggle>\` to use our own \`<Button>\` component, in this case we would need a different example component here."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={ToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...se.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A custom toggle component may consume the PopupMenu context using the \`usePopupMenuContext\` hook. This hook exposes the current \`isOpen\` state of the menu that can be used e.g. to apply conditional styling to the toggle."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={StyledToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...ae.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, \`PopupMenuToggle\` will render a \`<button>\` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the \`PopupMenuToggle\`'s \`as\` prop to \`React.Fragment\` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={React.Fragment} key="t">
        <ToggleButton />
      </PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...re.parameters?.docs?.source}}};const Nt=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{Q as Default,Y as DisabledDefaultToggle,J as NoMenu,X as WithChildrenAsLinks,re as WithCustomButtonComponentAsChild,te as WithIcon,Z as WithMenuChild,ne as WithMenuChildWithSection,ee as WithMenuWithRandomContent,oe as WithToggleAndMenuChildren,se as WithToggleAsButtonComponent,ae as WithToggleAsButtonStyledByState,Nt as __namedExportsOrder,Et as default};
