import{r as g,e as O,b as he,j as a}from"./iframe-BuPfffmw.js";import{u as Ye,h as Ze,o as Xe,g as en,s as nn}from"./floating-ui.react-BNkbzEQo.js";import{I as _e,K as tn}from"./Icon.component-dI5EcLx4.js";import{P as $e}from"./PortalProvider.component-CdruN--Y.js";import{T as on,k as xe,x as ke,b as an,p as sn,c as le,d as P,u as Ee,f as z,e as rn,G as ln,g as un,Y as V,S as N,y as ce,n as ue,o as k,h as pn,V as Ne,H as dn,i as me,K as R,j as cn,R as mn,m as fn,q as we,r as hn,N as gn,s as ie,t as vn,v as yn,w as bn,z as Mn,A as In,B as Ae,C as Pn,D as Sn,E as xn,F as wn,I as jn,L as Tn,J as K,a as Cn,M as On,$ as _n,O as $n,P as kn,Q as En,U as je,W as Nn,X as An,Z as Dn,_ as Fn,a0 as j,a1 as Vn,a2 as Te,a3 as De,a4 as Rn,a5 as Wn,a6 as qn}from"./element-movement-OgUSdXp2.js";import{s as Bn}from"./use-text-value-Bj2U7E-N.js";import{F as Hn}from"./use-tree-walker-Bv2w6BfY.js";import{B as ye}from"./Button.component-BK48icso.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner.component-CgiF15o7.js";var Ln=Object.defineProperty,Gn=(e,t,n)=>t in e?Ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t,n)=>(Gn(e,typeof t!="symbol"?t+"":t,n),n),T=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(T||{}),pe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(pe||{}),c=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e[e.MarkButtonAsMoved=10]="MarkButtonAsMoved",e))(c||{});function Oe(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=ln(t(e.items.slice()),l=>l.dataRef.current.domRef.current),s=n?o.indexOf(n):null;return s===-1&&(s=null),{items:o,activeItemIndex:s}}let Un={1(e){if(e.menuState===1)return e;let t=e.buttonElement?le.Tracked(rn(e.buttonElement)):e.buttonPositionState;return{...e,activeItemIndex:null,pendingFocus:{focus:P.Nothing},menuState:1,buttonPositionState:t}},0(e,t){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:t.focus,menuState:0,buttonPositionState:le.Idle}},2:(e,t)=>{var n,o,s,l,u;if(e.menuState===1)return e;let y={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===P.Nothing)return{...y,activeItemIndex:null};if(t.focus===P.Specific)return{...y,activeItemIndex:e.items.findIndex(r=>r.id===t.id)};if(t.focus===P.Previous){let r=e.activeItemIndex;if(r!==null){let w=e.items[r].dataRef.current.domRef,M=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(M!==null){let d=e.items[M].dataRef.current.domRef;if(((o=w.current)==null?void 0:o.previousElementSibling)===d.current||((s=d.current)==null?void 0:s.previousElementSibling)===null)return{...y,activeItemIndex:M}}}}else if(t.focus===P.Next){let r=e.activeItemIndex;if(r!==null){let w=e.items[r].dataRef.current.domRef,M=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.current.disabled});if(M!==null){let d=e.items[M].dataRef.current.domRef;if(((l=w.current)==null?void 0:l.nextElementSibling)===d.current||((u=d.current)==null?void 0:u.nextElementSibling)===null)return{...y,activeItemIndex:M}}}}let p=Oe(e),x=z(t,{resolveItems:()=>p.items,resolveActiveIndex:()=>p.activeItemIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled});return{...y,...p,activeItemIndex:x}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(u=>{var y;return((y=u.dataRef.current.textValue)==null?void 0:y.startsWith(o))&&!u.dataRef.current.disabled}),l=s?e.items.indexOf(s):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=e.items.concat(t.items.map(s=>s)),o=e.activeItemIndex;return e.pendingFocus.focus!==P.Nothing&&(o=z(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled})),{...e,items:n,activeItemIndex:o,pendingFocus:{focus:P.Nothing},pendingShouldSort:!0}},6:(e,t)=>{let n=e.items,o=[],s=new Set(t.items);for(let[l,u]of n.entries())if(s.has(u.id)&&(o.push(l),s.delete(u.id),s.size===0))break;if(o.length>0){n=n.slice();for(let l of o.reverse())n.splice(l,1)}return{...e,items:n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element},9:e=>e.pendingShouldSort?{...e,...Oe(e),pendingShouldSort:!1}:e,10(e){return e.buttonPositionState.kind!=="Tracked"?e:{...e,buttonPositionState:le.Moved}}};class be extends on{constructor(t){super(t),Ce(this,"actions",{registerItem:xe(()=>{let n=[],o=new Set;return[(s,l)=>{o.has(l)||(o.add(l),n.push({id:s,dataRef:l}))},()=>(o.clear(),this.send({type:5,items:n.splice(0)}))]}),unregisterItem:xe(()=>{let n=[];return[o=>n.push(o),()=>this.send({type:6,items:n.splice(0)})]})}),Ce(this,"selectors",{activeDescendantId(n){var o;let s=n.activeItemIndex,l=n.items;return s===null||(o=l[s])==null?void 0:o.id},isActive(n,o){var s;let l=n.activeItemIndex,u=n.items;return l!==null?((s=u[l])==null?void 0:s.id)===o:!1},shouldScrollIntoView(n,o){return n.__demoMode||n.menuState!==0||n.activationTrigger===0?!1:this.isActive(n,o)},didButtonMove(n){return n.buttonPositionState.kind==="Moved"}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let n=this.state.id,o=ke.get(null);this.disposables.add(o.on(an.Push,s=>{!o.selectors.isTop(s,n)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>o.actions.push(n)),this.on(1,()=>o.actions.pop(n))}this.disposables.group(n=>{this.on(1,o=>{o.buttonElement&&(n.dispose(),n.add(sn(o.buttonElement,o.buttonPositionState,()=>{this.send({type:10})})))})})}static new({id:t,__demoMode:n=!1}){return new be({id:t,__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:P.Nothing},buttonPositionState:le.Idle})}reduce(t,n){return Ee(n.type,Un,t,n)}}const Fe=g.createContext(null);function Me(e){let t=g.useContext(Fe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ve),n}return t}function Ve({id:e,__demoMode:t=!1}){let n=g.useMemo(()=>be.new({id:e,__demoMode:t}),[]);return un(()=>n.dispose()),n}let zn=g.Fragment;function Kn(e,t){let n=g.useId(),{__demoMode:o=!1,...s}=e,l=Ve({id:n,__demoMode:o}),[u,y,p]=N(l,S=>[S.menuState,S.itemsElement,S.buttonElement]),x=ce(t),r=ke.get(null),w=N(r,g.useCallback(S=>r.selectors.isTop(S,n),[r,n]));Nn(w,[p,y],(S,f)=>{var C;l.send({type:c.CloseMenu}),Rn(f,Wn.Loose)||(S.preventDefault(),(C=l.state.buttonElement)==null||C.focus())});let M=k(()=>{l.send({type:c.CloseMenu})}),d=me({open:u===T.Open,close:M}),I={ref:x},$=R();return O.createElement(An,null,O.createElement(Fe.Provider,{value:l},O.createElement(Dn,{value:Ee(u,{[T.Open]:ie.Open,[T.Closed]:ie.Closed})},$({ourProps:I,theirProps:s,slot:d,defaultTag:zn,name:"Menu"}))))}let Qn="button";function Jn(e,t){let n=Me("Menu.Button"),o=g.useId(),{id:s=`headlessui-menu-button-${o}`,disabled:l=!1,autoFocus:u=!1,...y}=e,p=g.useRef(null),x=wn(),r=ce(t,p,jn(),k(h=>n.send({type:c.SetButtonElement,element:h}))),w=k(h=>{switch(h.key){case j.Space:case j.Enter:case j.ArrowDown:h.preventDefault(),h.stopPropagation(),n.send({type:c.OpenMenu,focus:{focus:P.First}});break;case j.ArrowUp:h.preventDefault(),h.stopPropagation(),n.send({type:c.OpenMenu,focus:{focus:P.Last}});break}}),M=k(h=>{switch(h.key){case j.Space:h.preventDefault();break}}),[d,I,$]=N(n,h=>[h.menuState,h.buttonElement,h.itemsElement]),S=d===T.Open;Tn(S,{trigger:I,action:g.useCallback(h=>{if(I!=null&&I.contains(h.target))return K.Ignore;let b=h.target.closest('[role="menuitem"]:not([data-disabled])');return Cn(b)?K.Select(b):$!=null&&$.contains(h.target)?K.Ignore:K.Close},[I,$]),close:g.useCallback(()=>n.send({type:c.CloseMenu}),[]),select:g.useCallback(h=>h.click(),[])});let f=On(h=>{var b;l||(d===T.Open?(he.flushSync(()=>n.send({type:c.CloseMenu})),(b=p.current)==null||b.focus({preventScroll:!0})):(h.preventDefault(),n.send({type:c.OpenMenu,focus:{focus:P.Nothing},trigger:pe.Pointer})))}),{isFocusVisible:C,focusProps:E}=_n({autoFocus:u}),{isHovered:F,hoverProps:W}=$n({isDisabled:l}),{pressed:D,pressProps:B}=kn({disabled:l}),q=me({open:d===T.Open,active:D||d===T.Open,disabled:l,hover:F,focus:C,autofocus:u}),H=Ae(x(),{ref:r,id:s,type:En(e,p.current),"aria-haspopup":"menu","aria-controls":$?.id,"aria-expanded":d===T.Open,disabled:l||void 0,autoFocus:u,onKeyDown:w,onKeyUp:M},f,E,W,B);return R()({ourProps:H,theirProps:y,slot:q,defaultTag:Qn,name:"Menu.Button"})}let Yn="div",Zn=je.RenderStrategy|je.Static;function Xn(e,t){let n=g.useId(),{id:o=`headlessui-menu-items-${n}`,anchor:s,portal:l=!1,modal:u=!0,transition:y=!1,...p}=e,x=cn(s),r=Me("Menu.Items"),[w,M]=mn(x),d=fn(),[I,$]=g.useState(null),S=ce(t,x?w:null,k(i=>r.send({type:c.SetItemsElement,element:i})),$),[f,C]=N(r,i=>[i.menuState,i.buttonElement]),E=we(C),F=we(I);x&&(l=!0);let W=hn(),[D,B]=gn(y,I,W!==null?(W&ie.Open)===ie.Open:f===T.Open);vn(D,C,()=>{r.send({type:c.CloseMenu})});let q=N(r,i=>i.__demoMode),H=q?!1:u&&f===T.Open;yn(H,F);let h=q?!1:u&&f===T.Open;bn(h,{allowed:g.useCallback(()=>[C,I],[C,I])});let b=N(r,r.selectors.didButtonMove)?!1:D;g.useEffect(()=>{let i=I;i&&f===T.Open&&(Mn(i)||i.focus({preventScroll:!0}))},[f,I]),Hn(f===T.Open,{container:I,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let L=In(),Ge=k(i=>{var G,Pe,Se;switch(L.dispose(),i.key){case j.Space:if(r.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),r.send({type:c.Search,value:i.key});case j.Enter:if(i.preventDefault(),i.stopPropagation(),r.state.activeItemIndex!==null){let{dataRef:Je}=r.state.items[r.state.activeItemIndex];(Pe=(G=Je.current)==null?void 0:G.domRef.current)==null||Pe.click()}r.send({type:c.CloseMenu}),De(r.state.buttonElement);break;case j.ArrowDown:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.Next});case j.ArrowUp:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.Previous});case j.Home:case j.PageUp:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.First});case j.End:case j.PageDown:return i.preventDefault(),i.stopPropagation(),r.send({type:c.GoToItem,focus:P.Last});case j.Escape:i.preventDefault(),i.stopPropagation(),he.flushSync(()=>r.send({type:c.CloseMenu})),(Se=r.state.buttonElement)==null||Se.focus({preventScroll:!0});break;case j.Tab:i.preventDefault(),i.stopPropagation(),he.flushSync(()=>r.send({type:c.CloseMenu})),Vn(r.state.buttonElement,i.shiftKey?Te.Previous:Te.Next);break;default:i.key.length===1&&(r.send({type:c.Search,value:i.key}),L.setTimeout(()=>r.send({type:c.ClearSearch}),350));break}}),Ue=k(i=>{switch(i.key){case j.Space:i.preventDefault();break}}),ze=me({open:f===T.Open}),Ke=Ae(x?d():{},{"aria-activedescendant":N(r,r.selectors.activeDescendantId),"aria-labelledby":N(r,i=>{var G;return(G=i.buttonElement)==null?void 0:G.id}),id:o,onKeyDown:Ge,onKeyUp:Ue,role:"menu",tabIndex:f===T.Open?0:void 0,ref:S,style:{...p.style,...M,"--button-width":Sn(D,C,!0).width},...Pn(B)}),Qe=R();return O.createElement(xn,{enabled:l?e.static||D:!1,ownerDocument:E},Qe({ourProps:Ke,theirProps:p,slot:ze,defaultTag:Yn,features:Zn,visible:b,name:"Menu.Items"}))}let et=g.Fragment;function nt(e,t){let n=g.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:s=!1,...l}=e,u=Me("Menu.Item"),y=N(u,b=>u.selectors.isActive(b,o)),p=g.useRef(null),x=ce(t,p),r=N(u,b=>u.selectors.shouldScrollIntoView(b,o));ue(()=>{if(r)return qn().requestAnimationFrame(()=>{var b,L;(L=(b=p.current)==null?void 0:b.scrollIntoView)==null||L.call(b,{block:"nearest"})})},[r,p]);let w=Bn(p),M=g.useRef({disabled:s,domRef:p,get textValue(){return w()}});ue(()=>{M.current.disabled=s},[M,s]),ue(()=>(u.actions.registerItem(o,M),()=>u.actions.unregisterItem(o)),[M,o]);let d=k(()=>{u.send({type:c.CloseMenu})}),I=k(b=>{if(s)return b.preventDefault();u.send({type:c.CloseMenu}),De(u.state.buttonElement)}),$=k(()=>{if(s)return u.send({type:c.GoToItem,focus:P.Nothing});u.send({type:c.GoToItem,focus:P.Specific,id:o})}),S=pn(),f=k(b=>S.update(b)),C=k(b=>{S.wasMoved(b)&&(s||y||u.send({type:c.GoToItem,focus:P.Specific,id:o,trigger:pe.Pointer}))}),E=k(b=>{S.wasMoved(b)&&(s||y&&u.state.activationTrigger===pe.Pointer&&u.send({type:c.GoToItem,focus:P.Nothing}))}),[F,W]=Ne(),[D,B]=dn(),q=me({active:y,focus:y,disabled:s,close:d}),H={id:o,ref:x,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-labelledby":F,"aria-describedby":D,disabled:void 0,onClick:I,onFocus:$,onPointerEnter:f,onMouseEnter:f,onPointerMove:C,onMouseMove:C,onPointerLeave:E,onMouseLeave:E},h=R();return O.createElement(W,null,O.createElement(B,null,h({ourProps:H,theirProps:l,slot:q,defaultTag:et,name:"Menu.Item"})))}let tt="div";function ot(e,t){let[n,o]=Ne(),s=e,l={ref:t,"aria-labelledby":n,role:"group"},u=R();return O.createElement(o,null,u({ourProps:l,theirProps:s,slot:{},defaultTag:tt,name:"Menu.Section"}))}let at="header";function st(e,t){let n=g.useId(),{id:o=`headlessui-menu-heading-${n}`,...s}=e,l=Fn();ue(()=>l.register(o),[o,l.register]);let u={id:o,ref:t,role:"presentation",...l.props};return R()({ourProps:u,theirProps:s,slot:{},defaultTag:at,name:"Menu.Heading"})}let rt="div";function lt(e,t){let n=e,o={ref:t,role:"separator"};return R()({ourProps:o,theirProps:n,slot:{},defaultTag:rt,name:"Menu.Separator"})}let ut=V(Kn),Re=V(Jn),We=V(Xn),qe=V(nt),it=V(ot),pt=V(st),dt=V(lt),ct=Object.assign(ut,{Button:Re,Items:We,Item:qe,Section:it,Heading:pt,Separator:dt});const mt=`
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`,Be=`
  jn:cursor-not-allowed
  jn:opacity-50
`,ft=`
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`,ht=`
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
`,He=g.createContext(null),fe=()=>{const e=g.useContext(He);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},ge=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:s="normal",onClose:l,onOpen:u,...y})=>{const[p,x]=g.useState(!1),r=g.useRef(p),{refs:w,floatingStyles:M,update:d}=Ye({placement:"bottom-start",middleware:[Xe(4),en(),nn({padding:8})],whileElementsMounted:Ze});g.useEffect(()=>{p!==r.current&&(p?u?.():l?.()),r.current=p},[p,u,l]);const I=O.Children.toArray(e),$=I.some(f=>O.isValidElement(f)&&f.type===A),S=I.find(f=>O.isValidElement(f)&&f.type===_);return a.jsx(ct,{as:"div",className:`juno-popupmenu ${t}`,...y,children:({open:f,close:C})=>(g.useEffect(()=>{f!==p&&(x(f),f&&d())},[f]),a.jsxs(He.Provider,{value:{isOpen:p,close:C,menuSize:s},children:[a.jsxs("div",{ref:w.setReference,className:`juno-popupmenu-float-reference-wrapper ${xt}`,children:[!$&&a.jsx(A,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?Be:mt}`,disabled:n,children:a.jsx(_e,{icon:o})}),I.map((E,F)=>O.isValidElement(E)&&E.type===A?O.cloneElement(E,{key:F}):null)]}),p&&a.jsx($e.Portal,{children:a.jsx("div",{ref:w.setFloating,style:M,className:"juno-popupmenu-float-content-wrapper",children:S})})]}))})},A=({as:e="button",disabled:t=!1,children:n,className:o="",...s})=>a.jsx(Re,{as:e,className:`juno-popupmenu-toggle ${t&&Be} ${o}`,disabled:t,...s,children:n}),_=({children:e,className:t="",...n})=>{const{menuSize:o}=fe();return a.jsx(We,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${ft} ${t}`,...n,children:e})},m=({as:e="div",children:t,className:n="",disabled:o=!1,href:s,icon:l,label:u="",rel:y,target:p,...x})=>{const{menuSize:r}=fe(),w=r==="small"?vt:gt;return a.jsx(qe,{as:e,disabled:o,className:`juno-popupmenu-item ${ht} ${o?bt:yt} ${w} ${n}`,...e==="a"?{href:s,rel:y,target:p}:{},...x,children:M=>a.jsxs(a.Fragment,{children:[l&&a.jsx(_e,{icon:l,size:"18",className:`juno-popupmenu-item-icon ${Mt}`}),u&&typeof u=="string"?u:typeof t=="function"?t(M):t]})})},U=({children:e,className:t="",...n})=>a.jsx("section",{className:`juno-popupmenu-section ${It} ${t}`,...n,children:e}),de=({children:e,label:t="",className:n="",...o})=>a.jsx("header",{className:`juno-popupmenu-section-title ${Pt} ${n}`,...o,children:a.jsx("h1",{children:t&&t.length?t:e})}),ve=({className:e="",...t})=>a.jsx("div",{className:`juno-popupmenu-section-divider ${St} ${e}`,...t});try{A.displayName="PopupMenuToggle",A.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}try{_.displayName="PopupMenuOptions",_.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{m.displayName="PopupMenuItem",m.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}try{U.displayName="PopupMenuSection",U.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{de.displayName="PopupMenuSectionHeading",de.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ve.displayName="PopupMenuSectionSeparator",ve.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{ge.displayName="PopupMenu",ge.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const{fn:v}=__STORYBOOK_MODULE_TEST__,Dt={title:"WiP/PopupMenu",component:ge,subcomponents:{PopupMenuToggle:A,PopupMenuOptions:_,PopupMenuItem:m,PopupMenuSection:U},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(tn)],control:{type:"select"}}},decorators:[e=>a.jsx($e,{children:a.jsx(e,{})})]},Ie=O.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>a.jsx(ye,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));Ie.displayName="ToggleButton";const Le=O.forwardRef((e,t)=>{const{isOpen:n}=fe(),{className:o,...s}=e;return a.jsx(ye,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...s,children:e.children||"Toggle Me!"})});Le.displayName="StyledToggleButton";const wt=e=>{const{close:t}=fe();return a.jsx(ye,{onClick:t,...e})},Q={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:v(),onClose:v(),children:a.jsx(_,{children:a.jsx("p",{children:"Menu goes here."})})}},J={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:v(),onClose:v()}},Y={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{onOpen:v(),onClose:v(),disabled:!0}},Z={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(_,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]})}},X={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(_,{children:[a.jsx(m,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),a.jsx(m,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},ee={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(_,{children:[a.jsx("p",{children:"Some content goes here."}),a.jsx(wt,{variant:"primary",children:"Yay!"})]})}},ne={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{onOpen:v(),onClose:v(),children:a.jsxs(_,{children:[a.jsxs(U,{children:[a.jsx(de,{children:"Section 1"}),a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"})]}),a.jsx(ve,{}),a.jsxs(U,{children:[a.jsx(de,{label:"Section 2"}),a.jsx(m,{label:"Menu Item 3"}),a.jsx(m,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},te={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{onOpen:v(),onClose:v(),icon:"warning",children:a.jsxs(_,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]})}},oe={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{children:"The Toggle"},"t"),a.jsxs(_,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ae={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{as:Ie},"t"),a.jsxs(_,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},se={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{as:Le},"t"),a.jsxs(_,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},re={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:v(),onClose:v(),children:[a.jsx(A,{as:O.Fragment,children:a.jsx(Ie,{})},"t"),a.jsxs(_,{children:[a.jsx(m,{label:"Menu Item 1"}),a.jsx(m,{label:"Menu Item 2",icon:"deleteForever"}),a.jsx(m,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};const Ft=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{Q as Default,Y as DisabledDefaultToggle,J as NoMenu,X as WithChildrenAsLinks,re as WithCustomButtonComponentAsChild,te as WithIcon,Z as WithMenuChild,ne as WithMenuChildWithSection,ee as WithMenuWithRandomContent,oe as WithToggleAndMenuChildren,ae as WithToggleAsButtonComponent,se as WithToggleAsButtonStyledByState,Ft as __namedExportsOrder,Dt as default};
