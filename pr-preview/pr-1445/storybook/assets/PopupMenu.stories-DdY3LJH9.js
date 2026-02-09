import{r as g,e as O,b as fe,j as a}from"./iframe-CCMO8pG3.js";import{u as Ye,h as Ze,o as Xe,g as en,s as nn}from"./floating-ui.react-j9skBNUL.js";import{I as ke,K as tn}from"./Icon.component-D8-HJfBp.js";import{P as _e}from"./PortalProvider.component-Dxzr7Q5Q.js";import{T as on,k as xe,x as $e,b as an,p as sn,c as le,d as P,u as Ee,f as z,e as rn,G as ln,g as un,Y as R,S as N,y as ce,n as ue,o as $,h as dn,V as Ne,H as pn,i as me,K as F,j as cn,R as mn,m as hn,q as we,r as fn,N as gn,s as ie,t as vn,v as yn,w as bn,z as Mn,A as In,B as Ae,C as Pn,D as Sn,E as xn,F as wn,I as jn,L as Cn,J as K,a as Tn,M as On,$ as kn,O as _n,P as $n,Q as En,U as je,W as Nn,X as An,Z as Vn,_ as Dn,a0 as j,a1 as Rn,a2 as Ce,a3 as Ve,a4 as Fn,a5 as qn,a6 as Wn}from"./element-movement-fAjOwrWh.js";import{s as Bn}from"./use-text-value-BKjsAe7A.js";import{F as Ln}from"./use-tree-walker-DoSPHYcW.js";import{B as ye}from"./Button.component-DIqwU54h.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner.component-CWl5wAli.js";var Hn=Object.defineProperty,Un=(e,t,n)=>t in e?Hn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Te=(e,t,n)=>(Un(e,typeof t!="symbol"?t+"":t,n),n),C=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(C||{}),de=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(de||{}),c=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e[e.MarkButtonAsMoved=10]="MarkButtonAsMoved",e))(c||{});function Oe(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=ln(t(e.items.slice()),l=>l.dataRef.current.domRef.current),s=n?o.indexOf(n):null;return s===-1&&(s=null),{items:o,activeItemIndex:s}}let Gn={1(e){if(e.menuState===1)return e;let t=e.buttonElement?le.Tracked(rn(e.buttonElement)):e.buttonPositionState;return{...e,activeItemIndex:null,pendingFocus:{focus:P.Nothing},menuState:1,buttonPositionState:t}},0(e,t){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:t.focus,menuState:0,buttonPositionState:le.Idle}},2:(e,t)=>{var n,o,s,l,u;if(e.menuState===1)return e;let y={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===P.Nothing)return{...y,activeItemIndex:null};if(t.focus===P.Specific)return{...y,activeItemIndex:e.items.findIndex(r=>r.id===t.id)};if(t.focus===P.Previous){let r=e.activeItemIndex;if(r!==null){let w=e.items[r].dataRef.current.domRef,M=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(M!==null){let p=e.items[M].dataRef.current.domRef;if(((o=w.current)==null?void 0:o.previousElementSibling)===p.current||((s=p.current)==null?void 0:s.previousElementSibling)===null)return{...y,activeItemIndex:M}}}}else if(t.focus===P.Next){let r=e.activeItemIndex;if(r!==null){let w=e.items[r].dataRef.current.domRef,M=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(M!==null){let p=e.items[M].dataRef.current.domRef;if(((l=w.current)==null?void 0:l.nextElementSibling)===p.current||((u=p.current)==null?void 0:u.nextElementSibling)===null)return{...y,activeItemIndex:M}}}}let d=Oe(e),x=z(t,{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled});return{...y,...d,activeItemIndex:x}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(u=>{var y;return((y=u.dataRef.current.textValue)==null?void 0:y.startsWith(o))&&!u.dataRef.current.disabled}),l=s?e.items.indexOf(s):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=e.items.concat(t.items.map(s=>s)),o=e.activeItemIndex;return e.pendingFocus.focus!==P.Nothing&&(o=z(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled})),{...e,items:n,activeItemIndex:o,pendingFocus:{focus:P.Nothing},pendingShouldSort:!0}},6:(e,t)=>{let n=e.items,o=[],s=new Set(t.items);for(let[l,u]of n.entries())if(s.has(u.id)&&(o.push(l),s.delete(u.id),s.size===0))break;if(o.length>0){n=n.slice();for(let l of o.reverse())n.splice(l,1)}return{...e,items:n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element},9:e=>e.pendingShouldSort?{...e,...Oe(e),pendingShouldSort:!1}:e,10(e){return e.buttonPositionState.kind!=="Tracked"?e:{...e,buttonPositionState:le.Moved}}};class be extends on{constructor(t){super(t),Te(this,"actions",{registerItem:xe(()=>{let n=[],o=new Set;return[(s,l)=>{o.has(l)||(o.add(l),n.push({id:s,dataRef:l}))},()=>(o.clear(),this.send({type:5,items:n.splice(0)}))]}),unregisterItem:xe(()=>{let n=[];return[o=>n.push(o),()=>this.send({type:6,items:n.splice(0)})]})}),Te(this,"selectors",{activeDescendantId(n){var o;let s=n.activeItemIndex,l=n.items;return s===null||(o=l[s])==null?void 0:o.id},isActive(n,o){var s;let l=n.activeItemIndex,u=n.items;return l!==null?((s=u[l])==null?void 0:s.id)===o:!1},shouldScrollIntoView(n,o){return n.__demoMode||n.menuState!==0||n.activationTrigger===0?!1:this.isActive(n,o)},didButtonMove(n){return n.buttonPositionState.kind==="Moved"}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let n=this.state.id,o=$e.get(null);this.disposables.add(o.on(an.Push,s=>{!o.selectors.isTop(s,n)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>o.actions.push(n)),this.on(1,()=>o.actions.pop(n))}this.disposables.group(n=>{this.on(1,o=>{o.buttonElement&&(n.dispose(),n.add(sn(o.buttonElement,o.buttonPositionState,()=>{this.send({type:10})})))})})}static new({id:t,__demoMode:n=!1}){return new be({id:t,__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:P.Nothing},buttonPositionState:le.Idle})}reduce(t,n){return Ee(n.type,Gn,t,n)}}const De=g.createContext(null);function Me(e){let t=g.useContext(De);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Re),n}return t}function Re({id:e,__demoMode:t=!1}){let n=g.useMemo(()=>be.new({id:e,__demoMode:t}),[]);return un(()=>n.dispose()),n}let zn=g.Fragment;function Kn(e,t){let n=g.useId(),{__demoMode:o=!1,...s}=e,l=Re({id:n,__demoMode:o}),[u,y,d]=N(l,S=>[S.menuState,S.itemsElement,S.buttonElement]),x=ce(t),r=$e.get(null),w=N(r,g.useCallback(S=>r.selectors.isTop(S,n),[r,n]));Nn(w,[d,y],(S,h)=>{var T;l.send({type:c.CloseMenu}),Fn(h,qn.Loose)||(S.preventDefault(),(T=l.state.buttonElement)==null||T.focus())});let M=$(()=>{l.send({type:c.CloseMenu})}),p=me({open:u===C.Open,close:M}),I={ref:x},_=F();return O.createElement(An,null,O.createElement(De.Provider,{value:l},O.createElement(Vn,{value:Ee(u,{[C.Open]:ie.Open,[C.Closed]:ie.Closed})},_({ourProps:I,theirProps:s,slot:p,defaultTag:zn,name:"Menu"}))))}let Qn="button";function Jn(e,t){let n=Me("Menu.Button"),o=g.useId(),{id:s=`headlessui-menu-button-${o}`,disabled:l=!1,autoFocus:u=!1,...y}=e,d=g.useRef(null),x=wn(),r=ce(t,d,jn(),$(f=>n.send({type:c.SetButtonElement,element:f}))),w=$(f=>{switch(f.key){case j.Space:case j.Enter:case j.ArrowDown:f.preventDefault(),f.stopPropagation(),n.send({type:c.OpenMenu,focus:{focus:P.First}});break;case j.ArrowUp:f.preventDefault(),f.stopPropagation(),n.send({type:c.OpenMenu,focus:{focus:P.Last}});break}}),M=$(f=>{f.key===j.Space&&f.preventDefault()}),[p,I,_]=N(n,f=>[f.menuState,f.buttonElement,f.itemsElement]),S=p===C.Open;Cn(S,{trigger:I,action:g.useCallback(f=>{if(I!=null&&I.contains(f.target))return K.Ignore;let b=f.target.closest('[role="menuitem"]:not([data-disabled])');return Tn(b)?K.Select(b):_!=null&&_.contains(f.target)?K.Ignore:K.Close},[I,_]),close:g.useCallback(()=>n.send({type:c.CloseMenu}),[]),select:g.useCallback(f=>f.click(),[])});let h=On(f=>{var b;l||(p===C.Open?(fe.flushSync(()=>n.send({type:c.CloseMenu})),(b=d.current)==null||b.focus({preventScroll:!0})):(f.preventDefault(),n.send({type:c.OpenMenu,focus:{focus:P.Nothing},trigger:de.Pointer})))}),{isFocusVisible:T,focusProps:E}=kn({autoFocus:u}),{isHovered:D,hoverProps:q}=_n({isDisabled:l}),{pressed:V,pressProps:B}=$n({disabled:l}),W=me({open:p===C.Open,active:V||p===C.Open,disabled:l,hover:D,focus:T,autofocus:u}),L=Ae(x(),{ref:r,id:s,type:En(e,d.current),"aria-haspopup":"menu","aria-controls":_?.id,"aria-expanded":p===C.Open,disabled:l||void 0,autoFocus:u,onKeyDown:w,onKeyUp:M},h,E,q,B);return F()({ourProps:L,theirProps:y,slot:W,defaultTag:Qn,name:"Menu.Button"})}let Yn="div",Zn=je.RenderStrategy|je.Static;function Xn(e,t){let n=g.useId(),{id:o=`headlessui-menu-items-${n}`,anchor:s,portal:l=!1,modal:u=!0,transition:y=!1,...d}=e,x=cn(s),r=Me("Menu.Items"),[w,M]=mn(x),p=hn(),[I,_]=g.useState(null),S=ce(t,x?w:null,$(i=>r.send({type:c.SetItemsElement,element:i})),_),[h,T]=N(r,i=>[i.menuState,i.buttonElement]),E=we(T),D=we(I);x&&(l=!0);let q=fn(),[V,B]=gn(y,I,q!==null?(q&ie.Open)===ie.Open:h===C.Open);vn(V,T,()=>{r.send({type:c.CloseMenu})});let W=N(r,i=>i.__demoMode),L=W?!1:u&&h===C.Open;yn(L,D);let f=W?!1:u&&h===C.Open;bn(f,{allowed:g.useCallback(()=>[T,I],[T,I])});let b=N(r,r.selectors.didButtonMove)?!1:V;g.useEffect(()=>{let i=I;i&&h===C.Open&&(Mn(i)||i.focus({preventScroll:!0}))},[h,I]),Ln(h===C.Open,{container:I,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let H=In(),Ue=$(i=>{var U,Pe,Se;switch(H.dispose(),i.key){case j.Space:if(r.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),r.send({type:c.Search,value:i.key});case j.Enter:if(i.preventDefault(),i.stopPropagation(),r.state.activeItemIndex!==null){let{dataRef:Je}=r.state.items[r.state.activeItemIndex];(Pe=(U=Je.current)==null?void 0:U.domRef.current)==null||Pe.click()}r.send({type:c.CloseMenu}),Ve(r.state.buttonElement);break;case j.ArrowDown:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.Next});case j.ArrowUp:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.Previous});case j.Home:case j.PageUp:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.First});case j.End:case j.PageDown:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.Last});case j.Escape:i.preventDefault(),i.stopPropagation(),fe.flushSync(()=>r.send({type:c.CloseMenu})),(Se=r.state.buttonElement)==null||Se.focus({preventScroll:!0});break;case j.Tab:i.preventDefault(),i.stopPropagation(),fe.flushSync(()=>r.send({type:c.CloseMenu})),Rn(r.state.buttonElement,i.shiftKey?Ce.Previous:Ce.Next);break;default:i.key.length===1&&(r.send({type:c.Search,value:i.key}),H.setTimeout(()=>r.send({type:c.ClearSearch}),350));break}}),Ge=$(i=>{i.key===j.Space&&i.preventDefault()}),ze=me({open:h===C.Open}),Ke=Ae(x?p():{},{"aria-activedescendant":N(r,r.selectors.activeDescendantId),"aria-labelledby":N(r,i=>{var U;return(U=i.buttonElement)==null?void 0:U.id}),id:o,onKeyDown:Ue,onKeyUp:Ge,role:"menu",tabIndex:h===C.Open?0:void 0,ref:S,style:{...d.style,...M,"--button-width":Sn(V,T,!0).width},...Pn(B)}),Qe=F();return O.createElement(xn,{enabled:l?e.static||V:!1,ownerDocument:E},Qe({ourProps:Ke,theirProps:d,slot:ze,defaultTag:Yn,features:Zn,visible:b,name:"Menu.Items"}))}let et=g.Fragment;function nt(e,t){let n=g.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:s=!1,...l}=e,u=Me("Menu.Item"),y=N(u,b=>u.selectors.isActive(b,o)),d=g.useRef(null),x=ce(t,d),r=N(u,b=>u.selectors.shouldScrollIntoView(b,o));ue(()=>{if(r)return Wn().requestAnimationFrame(()=>{var b,H;(H=(b=d.current)==null?void 0:b.scrollIntoView)==null||H.call(b,{block:"nearest"})})},[r,d]);let w=Bn(d),M=g.useRef({disabled:s,domRef:d,get textValue(){return w()}});ue(()=>{M.current.disabled=s},[M,s]),ue(()=>(u.actions.registerItem(o,M),()=>u.actions.unregisterItem(o)),[M,o]);let p=$(()=>{u.send({type:c.CloseMenu})}),I=$(b=>{if(s)return b.preventDefault();u.send({type:c.CloseMenu}),Ve(u.state.buttonElement)}),_=$(()=>{if(s)return u.send({type:c.GoToItem,focus:P.Nothing});u.send({type:c.GoToItem,focus:P.Specific,id:o})}),S=dn(),h=$(b=>S.update(b)),T=$(b=>{S.wasMoved(b)&&(s||y||u.send({type:c.GoToItem,focus:P.Specific,id:o,trigger:de.Pointer}))}),E=$(b=>{S.wasMoved(b)&&(s||y&&u.state.activationTrigger===de.Pointer&&u.send({type:c.GoToItem,focus:P.Nothing}))}),[D,q]=Ne(),[V,B]=pn(),W=me({active:y,focus:y,disabled:s,close:p}),L={id:o,ref:x,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-labelledby":D,"aria-describedby":V,disabled:void 0,onClick:I,onFocus:_,onPointerEnter:h,onMouseEnter:h,onPointerMove:T,onMouseMove:T,onPointerLeave:E,onMouseLeave:E},f=F();return O.createElement(q,null,O.createElement(B,null,f({ourProps:L,theirProps:l,slot:W,defaultTag:et,name:"Menu.Item"})))}let tt="div";function ot(e,t){let[n,o]=Ne(),s=e,l={ref:t,"aria-labelledby":n,role:"group"},u=F();return O.createElement(o,null,u({ourProps:l,theirProps:s,slot:{},defaultTag:tt,name:"Menu.Section"}))}let at="header";function st(e,t){let n=g.useId(),{id:o=`headlessui-menu-heading-${n}`,...s}=e,l=Dn();ue(()=>l.register(o),[o,l.register]);let u={id:o,ref:t,role:"presentation",...l.props};return F()({ourProps:u,theirProps:s,slot:{},defaultTag:at,name:"Menu.Heading"})}let rt="div";function lt(e,t){let n=e,o={ref:t,role:"separator"};return F()({ourProps:o,theirProps:n,slot:{},defaultTag:rt,name:"Menu.Separator"})}let ut=R(Kn),Fe=R(Jn),qe=R(Xn),We=R(nt),it=R(ot),dt=R(st),pt=R(lt),ct=Object.assign(ut,{Button:Fe,Items:qe,Item:We,Section:it,Heading:dt,Separator:pt});const mt=`
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`,Be=`
  jn:cursor-not-allowed
  jn:opacity-50
`,ht=`
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`,ft=`
  jn:text-base
  jn:text-theme-default
  jn:flex
  jn:w-full
  jn:items-center
  jn:whitespace-nowrap
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,gt=`
  jn:text-base
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,vt=`
  jn:text-sm
  jn:p-2
`,yt=`
  jn:hover:bg-theme-background-lvl-3
  jn:cursor-pointer
`,bt=`
  jn:cursor-not-allowed
  jn:opacity-50
  jn:bg-theme-background-lvl-1
`,Mt=`
  jn:inline-block
  jn:mr-2
`,It=`
  jn:border-b
  jn:border-theme-background-lvl-3
  jn:last:border-b-0
`,Pt=`
  jn:text-theme-light
  jn:text-xs
  jn:p-2
  jn:cursor-default
`,St=`
  jn:h-
  jn:bg-theme-background-lvl-3
`,xt=`
  jn:inline-flex
`,Le=g.createContext(null),he=()=>{const e=g.useContext(Le);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},ge=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:s="normal",onClose:l,onOpen:u,...y})=>{const[d,x]=g.useState(!1),r=g.useRef(d),{refs:w,floatingStyles:M,update:p}=Ye({placement:"bottom-start",middleware:[Xe(4),en(),nn({padding:8})],whileElementsMounted:Ze});g.useEffect(()=>{d!==r.current&&(d?u?.():l?.()),r.current=d},[d,u,l]);const I=O.Children.toArray(e),_=I.some(h=>O.isValidElement(h)&&h.type===A),S=I.find(h=>O.isValidElement(h)&&h.type===k);return a.jsx(ct,{as:"div",className:`juno-popupmenu ${t}`,...y,children:({open:h,close:T})=>(g.useEffect(()=>{h!==d&&(x(h),h&&p())},[h]),a.jsxs(Le.Provider,{value:{isOpen:d,close:T,menuSize:s},children:[a.jsxs("div",{ref:w.setReference,className:`juno-popupmenu-float-reference-wrapper ${xt}`,children:[!_&&a.jsx(A,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?Be:mt}`,disabled:n,children:a.jsx(ke,{icon:o})}),I.map((E,D)=>O.isValidElement(E)&&E.type===A?O.cloneElement(E,{key:D}):null)]}),d&&a.jsx(_e.Portal,{children:a.jsx("div",{ref:w.setFloating,style:M,className:"juno-popupmenu-float-content-wrapper",children:S})})]}))})},A=({as:e="button",disabled:t=!1,children:n,className:o="",...s})=>a.jsx(Fe,{as:e,className:`juno-popupmenu-toggle ${t&&Be} ${o}`,disabled:t,...s,children:n}),k=({children:e,className:t="",...n})=>{const{menuSize:o}=he();return a.jsx(qe,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${ht} ${t}`,...n,children:e})},m=({as:e="div",children:t,className:n="",disabled:o=!1,href:s,icon:l,label:u="",rel:y,target:d,...x})=>{const{menuSize:r}=he(),w=r==="small"?vt:gt;return a.jsx(We,{as:e,disabled:o,className:`juno-popupmenu-item ${ft} ${o?bt:yt} ${w} ${n}`,...e==="a"?{href:s,rel:y,target:d}:{},...x,children:M=>a.jsxs(a.Fragment,{children:[l&&a.jsx(ke,{icon:l,size:"18",className:`juno-popupmenu-item-icon ${Mt}`}),u&&typeof u=="string"?u:typeof t=="function"?t(M):t]})})},G=({children:e,className:t="",...n})=>a.jsx("section",{className:`juno-popupmenu-section ${It} ${t}`,...n,children:e}),pe=({children:e,label:t="",className:n="",...o})=>a.jsx("header",{className:`juno-popupmenu-section-title ${Pt} ${n}`,...o,children:a.jsx("h1",{children:t&&t.length?t:e})}),ve=({className:e="",...t})=>a.jsx("div",{className:`juno-popupmenu-section-divider ${St} ${e}`,...t});try{A.displayName="PopupMenuToggle",A.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{as:{defaultValue:{value:"div"},description:"Element type to render as",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"CSS class names",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the toggle is disabled",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children to render inside the toggle",name:"children",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Additional HTML attributes",name:"id",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:"boolean"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"((_event: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}try{k.displayName="PopupMenuOptions",k.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{m.displayName="PopupMenuItem",m.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"Element type to render as (e.g., 'div', 'a', 'button')",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"CSS class names",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:'URL for links (when as="a")',name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"Icon to display",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"Label text to display",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:'Link relationship (when as="a")',name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:'Link target (when as="a")',name:"target",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children content - can be ReactNode or function for render props",name:"children",required:!1,type:{name:"ReactNode | ((_itemBag: { active: boolean; disabled: boolean; close: () => void; }) => ReactNode)"}},id:{defaultValue:null,description:"Additional HTML attributes",name:"id",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"",name:"aria-current",required:!1,type:{name:'boolean | "page" | "step" | "location" | "date" | "time"'}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"((_event: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}try{G.displayName="PopupMenuSection",G.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{pe.displayName="PopupMenuSectionHeading",pe.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ve.displayName="PopupMenuSectionSeparator",ve.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ge.displayName="PopupMenu",ge.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},id:{defaultValue:null,description:"Additional props passed to the root element",name:"id",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}}}}}catch{}const{fn:v}=__STORYBOOK_MODULE_TEST__,Vt={title:"WiP/PopupMenu",component:ge,subcomponents:{PopupMenuToggle:A,PopupMenuOptions:k,PopupMenuItem:m,PopupMenuSection:G},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(tn)],control:{type:"select"}}},decorators:[e=>a.jsx(_e,{children:a.jsx(e,{})})]},Ie=O.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>a.jsx(ye,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));Ie.displayName="ToggleButton";const He=O.forwardRef((e,t)=>{const{isOpen:n}=he(),{className:o,...s}=e;return a.jsx(ye,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...s,children:e.children||"Toggle Me!"})});He.displayName="StyledToggleButton";const wt=e=>{const{close:t}=he();return a.jsx(ye,{onClick:t,...e})},Q={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:v(),onClose:v(),children:a.jsx(k,{children:a.jsx("p",{children:"Menu goes here."})})}},J={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:v(),onClose:v()}},Y={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{onOpen:v(),onClose:v(),disabled:!0}},Z={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(k,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]})}},X={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(k,{children:[a.jsx(m,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),a.jsx(m,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},ee={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(k,{children:[a.jsx("p",{children:"Some content goes here."}),a.jsx(wt,{variant:"primary",children:"Yay!"})]})}},ne={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(k,{children:[a.jsxs(G,{children:[a.jsx(pe,{children:"Section 1"}),a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"})]}),a.jsx(ve,{}),a.jsxs(G,{children:[a.jsx(pe,{label:"Section 2"}),a.jsx(m,{label:"Menu Item 3"}),a.jsx(m,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},te={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{onOpen:v(),onClose:v(),icon:"warning",children:a.jsxs(k,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]})}},oe={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{children:"The Toggle"},"t"),a.jsxs(k,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ae={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{as:Ie},"t"),a.jsxs(k,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},se={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{as:He},"t"),a.jsxs(k,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},re={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{as:O.Fragment,children:a.jsx(Ie,{})},"t"),a.jsxs(k,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};const Dt=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{Q as Default,Y as DisabledDefaultToggle,J as NoMenu,X as WithChildrenAsLinks,re as WithCustomButtonComponentAsChild,te as WithIcon,Z as WithMenuChild,ne as WithMenuChildWithSection,ee as WithMenuWithRandomContent,oe as WithToggleAndMenuChildren,ae as WithToggleAsButtonComponent,se as WithToggleAsButtonStyledByState,Dt as __namedExportsOrder,Vt as default};
