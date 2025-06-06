import{r as p,e as T,b as me,j as s}from"./iframe-CTR9i8U0.js";import{u as Nn,h as kn,o as Dn,g as Fn,s as Rn}from"./floating-ui.react-C-URvRnT.js";import{I as cn,K as An}from"./Icon.component-BDAzSom4.js";import{P as mn}from"./PortalProvider.component-B6Z-Ne69.js";import{E as Vn,x as xe,c as hn,k as qn,d as I,u as gn,f as z,P as Bn,e as Wn,K as A,S as F,y as de,n as le,b as C,g as Hn,Q as fn,w as Ln,L as V,h as Gn,R as Un,T as zn,i as Se,j as Kn,l as Qn,m as ue,p as Jn,q as Yn,r as Zn,s as Xn,_ as vn,t as et,v as nt,z as tt,A as ot,F as st,B as at,C as K,a as rt,$ as lt,D as ut,G as it,H as pt,O as we,I as dt,J as ct,M as mt,N as ht,U as O,V as gt,W as je,X as yn,Y as ft,Z as vt,a0 as yt,a1 as bt}from"./portal-BOf6YUCz.js";import{s as Mt,a as It}from"./use-text-value-BIuMwWJO.js";import{F as Pt}from"./use-tree-walker-DrsfwMgY.js";import{B as fe}from"./Button.component-CY7X9zv3.js";import"./Spinner.component-Bb0d9HiA.js";var xt=Object.defineProperty,St=(e,t,n)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oe=(e,t,n)=>(St(e,typeof t!="symbol"?t+"":t,n),n),S=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(S||{}),ie=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ie||{}),g=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e))(g||{});function Te(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=Bn(t(e.items.slice()),r=>r.dataRef.current.domRef.current),a=n?o.indexOf(n):null;return a===-1&&(a=null),{items:o,activeItemIndex:a}}let wt={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,pendingFocus:{focus:I.Nothing},menuState:1}},0(e,t){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:t.focus,menuState:0}},2:(e,t)=>{var n,o,a,r,l;if(e.menuState===1)return e;let v={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===I.Nothing)return{...v,activeItemIndex:null};if(t.focus===I.Specific)return{...v,activeItemIndex:e.items.findIndex(u=>u.id===t.id)};if(t.focus===I.Previous){let u=e.activeItemIndex;if(u!==null){let j=e.items[u].dataRef.current.domRef,y=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(y!==null){let c=e.items[y].dataRef.current.domRef;if(((o=j.current)==null?void 0:o.previousElementSibling)===c.current||((a=c.current)==null?void 0:a.previousElementSibling)===null)return{...v,activeItemIndex:y}}}}else if(t.focus===I.Next){let u=e.activeItemIndex;if(u!==null){let j=e.items[u].dataRef.current.domRef,y=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(y!==null){let c=e.items[y].dataRef.current.domRef;if(((r=j.current)==null?void 0:r.nextElementSibling)===c.current||((l=c.current)==null?void 0:l.nextElementSibling)===null)return{...v,activeItemIndex:y}}}}let d=Te(e),w=z(t,{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...v,...d,activeItemIndex:w}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),a=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(l=>{var v;return((v=l.dataRef.current.textValue)==null?void 0:v.startsWith(o))&&!l.dataRef.current.disabled}),r=a?e.items.indexOf(a):-1;return r===-1||r===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:r,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=e.items.concat(t.items.map(a=>a)),o=e.activeItemIndex;return e.pendingFocus.focus!==I.Nothing&&(o=z(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled})),{...e,items:n,activeItemIndex:o,pendingFocus:{focus:I.Nothing},pendingShouldSort:!0}},6:(e,t)=>{let n=e.items,o=[],a=new Set(t.items);for(let[r,l]of n.entries())if(a.has(l.id)&&(o.push(r),a.delete(l.id),a.size===0))break;if(o.length>0){n=n.slice();for(let r of o.reverse())n.splice(r,1)}return{...e,items:n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element},9:e=>e.pendingShouldSort?{...e,...Te(e),pendingShouldSort:!1}:e};class ve extends Vn{constructor(t){super(t),Oe(this,"actions",{registerItem:xe(()=>{let n=[],o=new Set;return[(a,r)=>{o.has(r)||(o.add(r),n.push({id:a,dataRef:r}))},()=>(o.clear(),this.send({type:5,items:n.splice(0)}))]}),unregisterItem:xe(()=>{let n=[];return[o=>n.push(o),()=>this.send({type:6,items:n.splice(0)})]})}),Oe(this,"selectors",{activeDescendantId(n){var o;let a=n.activeItemIndex,r=n.items;return a===null||(o=r[a])==null?void 0:o.id},isActive(n,o){var a;let r=n.activeItemIndex,l=n.items;return r!==null?((a=l[r])==null?void 0:a.id)===o:!1},shouldScrollIntoView(n,o){return n.__demoMode||n.menuState!==0||n.activationTrigger===0?!1:this.isActive(n,o)}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let n=this.state.id,o=hn.get(null);this.disposables.add(o.on(qn.Push,a=>{!o.selectors.isTop(a,n)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>o.actions.push(n)),this.on(1,()=>o.actions.pop(n))}}static new({id:t,__demoMode:n=!1}){return new ve({id:t,__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:I.Nothing}})}reduce(t,n){return gn(n.type,wt,t,n)}}const bn=p.createContext(null);function ye(e){let t=p.useContext(bn);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Mn),n}return t}function Mn({id:e,__demoMode:t=!1}){let n=p.useMemo(()=>ve.new({id:e,__demoMode:t}),[]);return Wn(()=>n.dispose()),n}let jt=p.Fragment;function Ot(e,t){let n=p.useId(),{__demoMode:o=!1,...a}=e,r=Mn({id:n,__demoMode:o}),[l,v,d]=F(r,P=>[P.menuState,P.itemsElement,P.buttonElement]),w=de(t),u=hn.get(null),j=F(u,p.useCallback(P=>u.selectors.isTop(P,n),[u,n]));dt(j,[d,v],(P,h)=>{var x;r.send({type:g.CloseMenu}),vt(h,yt.Loose)||(P.preventDefault(),(x=r.state.buttonElement)==null||x.focus())});let y=C(()=>{r.send({type:g.CloseMenu})}),c=p.useMemo(()=>({open:l===S.Open,close:y}),[l,y]),M={ref:w},$=V();return T.createElement(ct,null,T.createElement(bn.Provider,{value:r},T.createElement(mt,{value:gn(l,{[S.Open]:ue.Open,[S.Closed]:ue.Closed})},$({ourProps:M,theirProps:a,slot:c,defaultTag:jt,name:"Menu"}))))}let Tt="button";function Ct(e,t){let n=ye("Menu.Button"),o=p.useId(),{id:a=`headlessui-menu-button-${o}`,disabled:r=!1,autoFocus:l=!1,...v}=e,d=p.useRef(null),w=ot(),u=de(t,d,st(),C(m=>n.send({type:g.SetButtonElement,element:m}))),j=C(m=>{switch(m.key){case O.Space:case O.Enter:case O.ArrowDown:m.preventDefault(),m.stopPropagation(),n.send({type:g.OpenMenu,focus:{focus:I.First}});break;case O.ArrowUp:m.preventDefault(),m.stopPropagation(),n.send({type:g.OpenMenu,focus:{focus:I.Last}});break}}),y=C(m=>{switch(m.key){case O.Space:m.preventDefault();break}}),[c,M,$]=F(n,m=>[m.menuState,m.buttonElement,m.itemsElement]),P=c===S.Open;at(P,{trigger:M,action:p.useCallback(m=>{if(M!=null&&M.contains(m.target))return K.Ignore;let b=m.target.closest('[role="menuitem"]:not([data-disabled])');return rt(b)?K.Select(b):$!=null&&$.contains(m.target)?K.Ignore:K.Close},[M,$]),close:p.useCallback(()=>n.send({type:g.CloseMenu}),[]),select:p.useCallback(m=>m.click(),[])});let h=C(m=>{var b;if(m.button===0){if(ft(m.currentTarget))return m.preventDefault();r||(c===S.Open?(me.flushSync(()=>n.send({type:g.CloseMenu})),(b=d.current)==null||b.focus({preventScroll:!0})):(m.preventDefault(),n.send({type:g.OpenMenu,focus:{focus:I.Nothing},trigger:ie.Pointer})))}}),{isFocusVisible:x,focusProps:k}=lt({autoFocus:l}),{isHovered:N,hoverProps:q}=ut({isDisabled:r}),{pressed:R,pressProps:W}=it({disabled:r}),B=p.useMemo(()=>({open:c===S.Open,active:R||c===S.Open,disabled:r,hover:N,focus:x,autofocus:l}),[c,N,x,R,r,l]),H=vn(w(),{ref:u,id:a,type:pt(e,d.current),"aria-haspopup":"menu","aria-controls":$==null?void 0:$.id,"aria-expanded":c===S.Open,disabled:r||void 0,autoFocus:l,onKeyDown:j,onKeyUp:y,onPointerDown:h},k,q,W);return V()({ourProps:H,theirProps:v,slot:B,defaultTag:Tt,name:"Menu.Button"})}let _t="div",$t=we.RenderStrategy|we.Static;function Et(e,t){let n=p.useId(),{id:o=`headlessui-menu-items-${n}`,anchor:a,portal:r=!1,modal:l=!0,transition:v=!1,...d}=e,w=Gn(a),u=ye("Menu.Items"),[j,y]=Un(w),c=zn(),[M,$]=p.useState(null),P=de(t,w?j:null,C(i=>u.send({type:g.SetItemsElement,element:i})),$),[h,x]=F(u,i=>[i.menuState,i.buttonElement]),k=Se(x),N=Se(M);w&&(r=!0);let q=Kn(),[R,W]=Qn(v,M,q!==null?(q&ue.Open)===ue.Open:h===S.Open);Jn(R,x,()=>{u.send({type:g.CloseMenu})});let B=F(u,i=>i.__demoMode),H=B?!1:l&&h===S.Open;Yn(H,N);let m=B?!1:l&&h===S.Open;Zn(m,{allowed:p.useCallback(()=>[x,M],[x,M])});let b=h!==S.Open,U=It(b,x)?!1:R;p.useEffect(()=>{let i=M;i&&h===S.Open&&i!==(N==null?void 0:N.activeElement)&&i.focus({preventScroll:!0})},[h,M,N]),Pt(h===S.Open,{container:M,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let Me=Xn(),On=C(i=>{var L,Ie,Pe;switch(Me.dispose(),i.key){case O.Space:if(u.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),u.send({type:g.Search,value:i.key});case O.Enter:if(i.preventDefault(),i.stopPropagation(),u.state.activeItemIndex!==null){let{dataRef:En}=u.state.items[u.state.activeItemIndex];(Ie=(L=En.current)==null?void 0:L.domRef.current)==null||Ie.click()}u.send({type:g.CloseMenu}),yn(u.state.buttonElement);break;case O.ArrowDown:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:I.Next});case O.ArrowUp:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:I.Previous});case O.Home:case O.PageUp:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:I.First});case O.End:case O.PageDown:return i.preventDefault(),i.stopPropagation(),u.send({type:g.GoToItem,focus:I.Last});case O.Escape:i.preventDefault(),i.stopPropagation(),me.flushSync(()=>u.send({type:g.CloseMenu})),(Pe=u.state.buttonElement)==null||Pe.focus({preventScroll:!0});break;case O.Tab:i.preventDefault(),i.stopPropagation(),me.flushSync(()=>u.send({type:g.CloseMenu})),gt(u.state.buttonElement,i.shiftKey?je.Previous:je.Next);break;default:i.key.length===1&&(u.send({type:g.Search,value:i.key}),Me.setTimeout(()=>u.send({type:g.ClearSearch}),350));break}}),Tn=C(i=>{switch(i.key){case O.Space:i.preventDefault();break}}),Cn=p.useMemo(()=>({open:h===S.Open}),[h]),_n=vn(w?c():{},{"aria-activedescendant":F(u,u.selectors.activeDescendantId),"aria-labelledby":F(u,i=>{var L;return(L=i.buttonElement)==null?void 0:L.id}),id:o,onKeyDown:On,onKeyUp:Tn,role:"menu",tabIndex:h===S.Open?0:void 0,ref:P,style:{...d.style,...y,"--button-width":nt(x,!0).width},...et(W)}),$n=V();return T.createElement(tt,{enabled:r?e.static||R:!1,ownerDocument:k},$n({ourProps:_n,theirProps:d,slot:Cn,defaultTag:_t,features:$t,visible:U,name:"Menu.Items"}))}let Nt=p.Fragment;function kt(e,t){let n=p.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:a=!1,...r}=e,l=ye("Menu.Item"),v=F(l,b=>l.selectors.isActive(b,o)),d=p.useRef(null),w=de(t,d),u=F(l,b=>l.selectors.shouldScrollIntoView(b,o));le(()=>{if(u)return bt().requestAnimationFrame(()=>{var b,U;(U=(b=d.current)==null?void 0:b.scrollIntoView)==null||U.call(b,{block:"nearest"})})},[u,d]);let j=Mt(d),y=p.useRef({disabled:a,domRef:d,get textValue(){return j()}});le(()=>{y.current.disabled=a},[y,a]),le(()=>(l.actions.registerItem(o,y),()=>l.actions.unregisterItem(o)),[y,o]);let c=C(()=>{l.send({type:g.CloseMenu})}),M=C(b=>{if(a)return b.preventDefault();l.send({type:g.CloseMenu}),yn(l.state.buttonElement)}),$=C(()=>{if(a)return l.send({type:g.GoToItem,focus:I.Nothing});l.send({type:g.GoToItem,focus:I.Specific,id:o})}),P=Hn(),h=C(b=>{P.update(b),!a&&(v||l.send({type:g.GoToItem,focus:I.Specific,id:o,trigger:ie.Pointer}))}),x=C(b=>{P.wasMoved(b)&&(a||v||l.send({type:g.GoToItem,focus:I.Specific,id:o,trigger:ie.Pointer}))}),k=C(b=>{P.wasMoved(b)&&(a||v&&l.send({type:g.GoToItem,focus:I.Nothing}))}),[N,q]=fn(),[R,W]=Ln(),B=p.useMemo(()=>({active:v,focus:v,disabled:a,close:c}),[v,a,c]),H={id:o,ref:w,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-labelledby":N,"aria-describedby":R,disabled:void 0,onClick:M,onFocus:$,onPointerEnter:h,onMouseEnter:h,onPointerMove:x,onMouseMove:x,onPointerLeave:k,onMouseLeave:k},m=V();return T.createElement(q,null,T.createElement(W,null,m({ourProps:H,theirProps:r,slot:B,defaultTag:Nt,name:"Menu.Item"})))}let Dt="div";function Ft(e,t){let[n,o]=fn(),a=e,r={ref:t,"aria-labelledby":n,role:"group"},l=V();return T.createElement(o,null,l({ourProps:r,theirProps:a,slot:{},defaultTag:Dt,name:"Menu.Section"}))}let Rt="header";function At(e,t){let n=p.useId(),{id:o=`headlessui-menu-heading-${n}`,...a}=e,r=ht();le(()=>r.register(o),[o,r.register]);let l={id:o,ref:t,role:"presentation",...r.props};return V()({ourProps:l,theirProps:a,slot:{},defaultTag:Rt,name:"Menu.Heading"})}let Vt="div";function qt(e,t){let n=e,o={ref:t,role:"separator"};return V()({ourProps:o,theirProps:n,slot:{},defaultTag:Vt,name:"Menu.Separator"})}let Bt=A(Ot),In=A(Ct),Pn=A(Et),xn=A(kt),Wt=A(Ft),Ht=A(At),Lt=A(qt),Gt=Object.assign(Bt,{Button:In,Items:Pn,Item:xn,Section:Wt,Heading:Ht,Separator:Lt});const Ut=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,Sn=`
  jn-cursor-not-allowed
  jn-opacity-50
`,zt=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,Kt=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Qt=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Jt=`
  jn-text-sm
  jn-p-2
`,Yt=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,Zt=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,Xt=`
  jn-inline-block
  jn-mr-2
`,eo=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,no=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,to=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,oo=`
  jn-inline-flex
`,wn=p.createContext(null),ce=()=>{const e=p.useContext(wn);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},he=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:a="normal",onClose:r,onOpen:l,...v})=>{const[d,w]=p.useState(!1),u=p.useRef(d),{refs:j,floatingStyles:y,update:c}=Nn({placement:"bottom-start",middleware:[Dn(4),Fn(),Rn({padding:8})],whileElementsMounted:kn});p.useEffect(()=>{d!==u.current&&(d?l==null||l():r==null||r()),u.current=d},[d,l,r]);const M=T.Children.toArray(e),$=M.some(h=>T.isValidElement(h)&&h.type===D),P=M.find(h=>T.isValidElement(h)&&h.type===_);return s.jsx(Gt,{as:"div",className:`juno-popupmenu ${t}`,...v,children:({open:h,close:x})=>(p.useEffect(()=>{h!==d&&(w(h),h&&c())},[h]),s.jsxs(wn.Provider,{value:{isOpen:d,close:x,menuSize:a},children:[s.jsxs("div",{ref:j.setReference,className:`juno-popupmenu-float-reference-wrapper ${oo}`,children:[!$&&s.jsx(D,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?Sn:Ut}`,disabled:n,children:s.jsx(cn,{icon:o})}),M.map((k,N)=>T.isValidElement(k)&&k.type===D?T.cloneElement(k,{key:N}):null)]}),d&&s.jsx(mn.Portal,{children:s.jsx("div",{ref:j.setFloating,style:y,className:"juno-popupmenu-float-content-wrapper",children:P})})]}))})},D=({as:e="button",disabled:t=!1,children:n,className:o="",...a})=>s.jsx(In,{as:e,className:`juno-popupmenu-toggle ${t&&Sn} ${o}`,disabled:t,...a,children:n}),_=({children:e,className:t="",...n})=>{const{menuSize:o}=ce();return s.jsx(Pn,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${zt} ${t}`,...n,children:e})},f=({as:e="div",children:t,className:n="",disabled:o=!1,href:a,icon:r,label:l="",rel:v,target:d,...w})=>{const{menuSize:u}=ce(),j=u==="small"?Jt:Qt;return s.jsx(xn,{as:e,disabled:o,className:`juno-popupmenu-item ${Kt} ${o?Zt:Yt} ${j} ${n}`,...e==="a"?{href:a,rel:v,target:d}:{},...w,children:y=>s.jsxs(s.Fragment,{children:[r&&s.jsx(cn,{icon:r,size:"18",className:`juno-popupmenu-item-icon ${Xt}`}),l&&typeof l=="string"?l:typeof t=="function"?t(y):t]})})},G=({children:e,className:t="",...n})=>s.jsx("section",{className:`juno-popupmenu-section ${eo} ${t}`,...n,children:e}),pe=({children:e,label:t="",className:n="",...o})=>s.jsx("header",{className:`juno-popupmenu-section-title ${no} ${n}`,...o,children:s.jsx("h1",{children:t&&t.length?t:e})}),ge=({className:e="",...t})=>s.jsx("div",{className:`juno-popupmenu-section-divider ${to} ${e}`,...t});try{D.displayName="PopupMenuToggle",D.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{_.displayName="PopupMenuOptions",_.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{f.displayName="PopupMenuItem",f.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}try{G.displayName="PopupMenuSection",G.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{pe.displayName="PopupMenuSectionHeading",pe.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ge.displayName="PopupMenuSectionSeparator",ge.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{he.displayName="PopupMenu",he.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const{actions:E}=__STORYBOOK_MODULE_ACTIONS__,go={title:"WiP/PopupMenu",component:he,subcomponents:{PopupMenuToggle:D,PopupMenuOptions:_,PopupMenuItem:f,PopupMenuSection:G},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(An)],control:{type:"select"}}},decorators:[e=>s.jsx(mn,{children:e()})]},be=T.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>s.jsx(fe,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));be.displayName="ToggleButton";const jn=T.forwardRef((e,t)=>{const{isOpen:n}=ce(),{className:o,...a}=e;return s.jsx(fe,{ref:t,className:`toggle-button ${n?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...a,children:e.children||"Toggle Me!"})});jn.displayName="StyledToggleButton";const so=e=>{const{close:t}=ce();return s.jsx(fe,{onClick:t,...e})},Q={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{...E("onOpen","onClose"),children:s.jsx(_,{children:s.jsx("p",{children:"Menu goes here."})})}},J={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...E("onOpen","onClose")}},Y={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...E("onOpen","onClose"),disabled:!0}},Z={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...E("onOpen","onClose"),children:s.jsxs(_,{children:[s.jsx(f,{label:"Menu Item 1"}),s.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]})}},X={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{...E("onOpen","onClose"),children:s.jsxs(_,{children:[s.jsx(f,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),s.jsx(f,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},ee={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...E("onOpen","onClose"),children:s.jsxs(_,{children:[s.jsx("p",{children:"Some content goes here."}),s.jsx(so,{variant:"primary",children:"Yay!"})]})}},ne={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...E("onOpen","onClose"),children:s.jsxs(_,{children:[s.jsxs(G,{children:[s.jsx(pe,{children:"Section 1"}),s.jsx(f,{label:"Menu Item 1"}),s.jsx(f,{label:"Menu Item 2",icon:"deleteForever"})]}),s.jsx(ge,{}),s.jsxs(G,{children:[s.jsx(pe,{label:"Section 2"}),s.jsx(f,{label:"Menu Item 3"}),s.jsx(f,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},te={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...E("onOpen","onClose"),icon:"warning",children:s.jsxs(_,{children:[s.jsx(f,{label:"Menu Item 1"}),s.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]})}},oe={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...E("onOpen","onClose"),children:[s.jsx(D,{children:"The Toggle"},"t"),s.jsxs(_,{children:[s.jsx(f,{label:"Menu Item 1"}),s.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},se={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...E("onOpen","onClose"),children:[s.jsx(D,{as:be},"t"),s.jsxs(_,{children:[s.jsx(f,{label:"Menu Item 1"}),s.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ae={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...E("onOpen","onClose"),children:[s.jsx(D,{as:jn},"t"),s.jsxs(_,{children:[s.jsx(f,{label:"Menu Item 1"}),s.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},re={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...E("onOpen","onClose"),children:[s.jsx(D,{as:T.Fragment,children:s.jsx(be,{})},"t"),s.jsxs(_,{children:[s.jsx(f,{label:"Menu Item 1"}),s.jsx(f,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(f,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var Ce,_e,$e;Q.parameters={...Q.parameters,docs:{...(Ce=Q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...($e=(_e=Q.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Ee,Ne,ke;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ke=(Ne=J.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var De,Fe,Re;Y.parameters={...Y.parameters,docs:{...(De=Y.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Re=(Fe=Y.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var Ae,Ve,qe;Z.parameters={...Z.parameters,docs:{...(Ae=Z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(qe=(Ve=Z.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var Be,We,He;X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(He=(We=X.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Le,Ge,Ue;ee.parameters={...ee.parameters,docs:{...(Le=ee.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=ee.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var ze,Ke,Qe;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=ne.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Je,Ye,Ze;te.parameters={...te.parameters,docs:{...(Je=te.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=te.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Xe,en,nn;oe.parameters={...oe.parameters,docs:{...(Xe=oe.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(nn=(en=oe.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,on,sn;se.parameters={...se.parameters,docs:{...(tn=se.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(sn=(on=se.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var an,rn,ln;ae.parameters={...ae.parameters,docs:{...(an=ae.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(ln=(rn=ae.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var un,pn,dn;re.parameters={...re.parameters,docs:{...(un=re.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(dn=(pn=re.parameters)==null?void 0:pn.docs)==null?void 0:dn.source}}};const fo=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{Q as Default,Y as DisabledDefaultToggle,J as NoMenu,X as WithChildrenAsLinks,re as WithCustomButtonComponentAsChild,te as WithIcon,Z as WithMenuChild,ne as WithMenuChildWithSection,ee as WithMenuWithRandomContent,oe as WithToggleAndMenuChildren,se as WithToggleAsButtonComponent,ae as WithToggleAsButtonStyledByState,fo as __namedExportsOrder,go as default};
