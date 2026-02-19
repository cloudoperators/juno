import{r as p,e as N,b as ge,j as s}from"./iframe-CkPUQXkT.js";import{u as Ye,h as Ze,o as Xe,g as en,s as nn}from"./floating-ui.react-C_-l30V4.js";import{I as _e,K as tn}from"./Icon.component-udzxEiov.js";import{P as $e}from"./PortalProvider.component-B9eWHrSM.js";import{T as on,k as Se,x as ke,b as sn,p as an,c as le,d as P,u as Ee,f as z,e as rn,G as ln,g as un,Y as R,S as E,y as ce,n as ue,o as $,h as pn,V as Ne,H as dn,i as me,K as W,j as cn,R as mn,m as hn,q as we,r as gn,N as fn,s as ie,t as vn,v as bn,w as yn,z as Mn,A as In,B as Ae,C as Pn,D as xn,E as Sn,F as wn,I as jn,L as Cn,J as K,a as On,M as Tn,$ as _n,O as $n,P as kn,Q as En,U as je,W as Nn,X as An,Z as Dn,_ as Fn,a0 as j,a1 as Rn,a2 as Ce,a3 as De,a4 as Wn,a5 as Vn,a6 as Bn}from"./element-movement-w8MFu8ld.js";import{s as qn}from"./use-text-value-gCpahAGY.js";import{F as Hn}from"./use-tree-walker-DcTyJ8av.js";import{B as be}from"./Button.component-ohFLE99s.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner.component-UtkMh74u.js";var Ln=Object.defineProperty,Gn=(e,t,n)=>t in e?Ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oe=(e,t,n)=>(Gn(e,typeof t!="symbol"?t+"":t,n),n),C=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(C||{}),pe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(pe||{}),m=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e[e.MarkButtonAsMoved=10]="MarkButtonAsMoved",e))(m||{});function Te(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,o=ln(t(e.items.slice()),l=>l.dataRef.current.domRef.current),a=n?o.indexOf(n):null;return a===-1&&(a=null),{items:o,activeItemIndex:a}}let Un={1(e){if(e.menuState===1)return e;let t=e.buttonElement?le.Tracked(rn(e.buttonElement)):e.buttonPositionState;return{...e,activeItemIndex:null,pendingFocus:{focus:P.Nothing},menuState:1,buttonPositionState:t}},0(e,t){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:t.focus,menuState:0,buttonPositionState:le.Idle}},2:(e,t)=>{var n,o,a,l,u;if(e.menuState===1)return e;let b={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===P.Nothing)return{...b,activeItemIndex:null};if(t.focus===P.Specific)return{...b,activeItemIndex:e.items.findIndex(r=>r.id===t.id)};if(t.focus===P.Previous){let r=e.activeItemIndex;if(r!==null){let w=e.items[r].dataRef.current.domRef,M=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(M!==null){let c=e.items[M].dataRef.current.domRef;if(((o=w.current)==null?void 0:o.previousElementSibling)===c.current||((a=c.current)==null?void 0:a.previousElementSibling)===null)return{...b,activeItemIndex:M}}}}else if(t.focus===P.Next){let r=e.activeItemIndex;if(r!==null){let w=e.items[r].dataRef.current.domRef,M=z(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(M!==null){let c=e.items[M].dataRef.current.domRef;if(((l=w.current)==null?void 0:l.nextElementSibling)===c.current||((u=c.current)==null?void 0:u.nextElementSibling)===null)return{...b,activeItemIndex:M}}}}let d=Te(e),S=z(t,{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled});return{...b,...d,activeItemIndex:S}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),a=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(u=>{var b;return((b=u.dataRef.current.textValue)==null?void 0:b.startsWith(o))&&!u.dataRef.current.disabled}),l=a?e.items.indexOf(a):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=e.items.concat(t.items.map(a=>a)),o=e.activeItemIndex;return e.pendingFocus.focus!==P.Nothing&&(o=z(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled})),{...e,items:n,activeItemIndex:o,pendingFocus:{focus:P.Nothing},pendingShouldSort:!0}},6:(e,t)=>{let n=e.items,o=[],a=new Set(t.items);for(let[l,u]of n.entries())if(a.has(u.id)&&(o.push(l),a.delete(u.id),a.size===0))break;if(o.length>0){n=n.slice();for(let l of o.reverse())n.splice(l,1)}return{...e,items:n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element},9:e=>e.pendingShouldSort?{...e,...Te(e),pendingShouldSort:!1}:e,10(e){return e.buttonPositionState.kind!=="Tracked"?e:{...e,buttonPositionState:le.Moved}}};class ye extends on{constructor(t){super(t),Oe(this,"actions",{registerItem:Se(()=>{let n=[],o=new Set;return[(a,l)=>{o.has(l)||(o.add(l),n.push({id:a,dataRef:l}))},()=>(o.clear(),this.send({type:5,items:n.splice(0)}))]}),unregisterItem:Se(()=>{let n=[];return[o=>n.push(o),()=>this.send({type:6,items:n.splice(0)})]})}),Oe(this,"selectors",{activeDescendantId(n){var o;let a=n.activeItemIndex,l=n.items;return a===null||(o=l[a])==null?void 0:o.id},isActive(n,o){var a;let l=n.activeItemIndex,u=n.items;return l!==null?((a=u[l])==null?void 0:a.id)===o:!1},shouldScrollIntoView(n,o){return n.__demoMode||n.menuState!==0||n.activationTrigger===0?!1:this.isActive(n,o)},didButtonMove(n){return n.buttonPositionState.kind==="Moved"}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let n=this.state.id,o=ke.get(null);this.disposables.add(o.on(sn.Push,a=>{!o.selectors.isTop(a,n)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>o.actions.push(n)),this.on(1,()=>o.actions.pop(n))}this.disposables.group(n=>{this.on(1,o=>{o.buttonElement&&(n.dispose(),n.add(an(o.buttonElement,o.buttonPositionState,()=>{this.send({type:10})})))})})}static new({id:t,__demoMode:n=!1}){return new ye({id:t,__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:P.Nothing},buttonPositionState:le.Idle})}reduce(t,n){return Ee(n.type,Un,t,n)}}const Fe=p.createContext(null);function Me(e){let t=p.useContext(Fe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Re),n}return t}function Re({id:e,__demoMode:t=!1}){let n=p.useMemo(()=>ye.new({id:e,__demoMode:t}),[]);return un(()=>n.dispose()),n}let zn=p.Fragment;function Kn(e,t){let n=p.useId(),{__demoMode:o=!1,...a}=e,l=Re({id:n,__demoMode:o}),[u,b,d]=E(l,x=>[x.menuState,x.itemsElement,x.buttonElement]),S=ce(t),r=ke.get(null),w=E(r,p.useCallback(x=>r.selectors.isTop(x,n),[r,n]));Nn(w,[d,b],(x,g)=>{var O;l.send({type:m.CloseMenu}),Wn(g,Vn.Loose)||(x.preventDefault(),(O=l.state.buttonElement)==null||O.focus())});let M=$(()=>{l.send({type:m.CloseMenu})}),c=me({open:u===C.Open,close:M}),I={ref:S},_=W();return N.createElement(An,null,N.createElement(Fe.Provider,{value:l},N.createElement(Dn,{value:Ee(u,{[C.Open]:ie.Open,[C.Closed]:ie.Closed})},_({ourProps:I,theirProps:a,slot:c,defaultTag:zn,name:"Menu"}))))}let Qn="button";function Jn(e,t){let n=Me("Menu.Button"),o=p.useId(),{id:a=`headlessui-menu-button-${o}`,disabled:l=!1,autoFocus:u=!1,...b}=e,d=p.useRef(null),S=wn(),r=ce(t,d,jn(),$(f=>n.send({type:m.SetButtonElement,element:f}))),w=$(f=>{switch(f.key){case j.Space:case j.Enter:case j.ArrowDown:f.preventDefault(),f.stopPropagation(),n.send({type:m.OpenMenu,focus:{focus:P.First}});break;case j.ArrowUp:f.preventDefault(),f.stopPropagation(),n.send({type:m.OpenMenu,focus:{focus:P.Last}});break}}),M=$(f=>{f.key===j.Space&&f.preventDefault()}),[c,I,_]=E(n,f=>[f.menuState,f.buttonElement,f.itemsElement]),x=c===C.Open;Cn(x,{trigger:I,action:p.useCallback(f=>{if(I!=null&&I.contains(f.target))return K.Ignore;let y=f.target.closest('[role="menuitem"]:not([data-disabled])');return On(y)?K.Select(y):_!=null&&_.contains(f.target)?K.Ignore:K.Close},[I,_]),close:p.useCallback(()=>n.send({type:m.CloseMenu}),[]),select:p.useCallback(f=>f.click(),[])});let g=Tn(f=>{var y;l||(c===C.Open?(ge.flushSync(()=>n.send({type:m.CloseMenu})),(y=d.current)==null||y.focus({preventScroll:!0})):(f.preventDefault(),n.send({type:m.OpenMenu,focus:{focus:P.Nothing},trigger:pe.Pointer})))}),{isFocusVisible:O,focusProps:k}=_n({autoFocus:u}),{isHovered:F,hoverProps:V}=$n({isDisabled:l}),{pressed:D,pressProps:q}=kn({disabled:l}),B=me({open:c===C.Open,active:D||c===C.Open,disabled:l,hover:F,focus:O,autofocus:u}),H=Ae(S(),{ref:r,id:a,type:En(e,d.current),"aria-haspopup":"menu","aria-controls":_?.id,"aria-expanded":c===C.Open,disabled:l||void 0,autoFocus:u,onKeyDown:w,onKeyUp:M},g,k,V,q);return W()({ourProps:H,theirProps:b,slot:B,defaultTag:Qn,name:"Menu.Button"})}let Yn="div",Zn=je.RenderStrategy|je.Static;function Xn(e,t){let n=p.useId(),{id:o=`headlessui-menu-items-${n}`,anchor:a,portal:l=!1,modal:u=!0,transition:b=!1,...d}=e,S=cn(a),r=Me("Menu.Items"),[w,M]=mn(S),c=hn(),[I,_]=p.useState(null),x=ce(t,S?w:null,$(i=>r.send({type:m.SetItemsElement,element:i})),_),[g,O]=E(r,i=>[i.menuState,i.buttonElement]),k=we(O),F=we(I);S&&(l=!0);let V=gn(),[D,q]=fn(b,I,V!==null?(V&ie.Open)===ie.Open:g===C.Open);vn(D,O,()=>{r.send({type:m.CloseMenu})});let B=E(r,i=>i.__demoMode),H=B?!1:u&&g===C.Open;bn(H,F);let f=B?!1:u&&g===C.Open;yn(f,{allowed:p.useCallback(()=>[O,I],[O,I])});let y=E(r,r.selectors.didButtonMove)?!1:D;p.useEffect(()=>{let i=I;i&&g===C.Open&&(Mn(i)||i.focus({preventScroll:!0}))},[g,I]),Hn(g===C.Open,{container:I,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let L=In(),Ge=$(i=>{var G,Pe,xe;switch(L.dispose(),i.key){case j.Space:if(r.state.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),r.send({type:m.Search,value:i.key});case j.Enter:if(i.preventDefault(),i.stopPropagation(),r.state.activeItemIndex!==null){let{dataRef:Je}=r.state.items[r.state.activeItemIndex];(Pe=(G=Je.current)==null?void 0:G.domRef.current)==null||Pe.click()}r.send({type:m.CloseMenu}),De(r.state.buttonElement);break;case j.ArrowDown:return i.preventDefault(),i.stopPropagation(),r.send({type:m.GoToItem,focus:P.Next});case j.ArrowUp:return i.preventDefault(),i.stopPropagation(),r.send({type:m.GoToItem,focus:P.Previous});case j.Home:case j.PageUp:return i.preventDefault(),i.stopPropagation(),r.send({type:m.GoToItem,focus:P.First});case j.End:case j.PageDown:return i.preventDefault(),i.stopPropagation(),r.send({type:m.GoToItem,focus:P.Last});case j.Escape:i.preventDefault(),i.stopPropagation(),ge.flushSync(()=>r.send({type:m.CloseMenu})),(xe=r.state.buttonElement)==null||xe.focus({preventScroll:!0});break;case j.Tab:i.preventDefault(),i.stopPropagation(),ge.flushSync(()=>r.send({type:m.CloseMenu})),Rn(r.state.buttonElement,i.shiftKey?Ce.Previous:Ce.Next);break;default:i.key.length===1&&(r.send({type:m.Search,value:i.key}),L.setTimeout(()=>r.send({type:m.ClearSearch}),350));break}}),Ue=$(i=>{i.key===j.Space&&i.preventDefault()}),ze=me({open:g===C.Open}),Ke=Ae(S?c():{},{"aria-activedescendant":E(r,r.selectors.activeDescendantId),"aria-labelledby":E(r,i=>{var G;return(G=i.buttonElement)==null?void 0:G.id}),id:o,onKeyDown:Ge,onKeyUp:Ue,role:"menu",tabIndex:g===C.Open?0:void 0,ref:x,style:{...d.style,...M,"--button-width":xn(D,O,!0).width},...Pn(q)}),Qe=W();return N.createElement(Sn,{enabled:l?e.static||D:!1,ownerDocument:k},Qe({ourProps:Ke,theirProps:d,slot:ze,defaultTag:Yn,features:Zn,visible:y,name:"Menu.Items"}))}let et=p.Fragment;function nt(e,t){let n=p.useId(),{id:o=`headlessui-menu-item-${n}`,disabled:a=!1,...l}=e,u=Me("Menu.Item"),b=E(u,y=>u.selectors.isActive(y,o)),d=p.useRef(null),S=ce(t,d),r=E(u,y=>u.selectors.shouldScrollIntoView(y,o));ue(()=>{if(r)return Bn().requestAnimationFrame(()=>{var y,L;(L=(y=d.current)==null?void 0:y.scrollIntoView)==null||L.call(y,{block:"nearest"})})},[r,d]);let w=qn(d),M=p.useRef({disabled:a,domRef:d,get textValue(){return w()}});ue(()=>{M.current.disabled=a},[M,a]),ue(()=>(u.actions.registerItem(o,M),()=>u.actions.unregisterItem(o)),[M,o]);let c=$(()=>{u.send({type:m.CloseMenu})}),I=$(y=>{if(a)return y.preventDefault();u.send({type:m.CloseMenu}),De(u.state.buttonElement)}),_=$(()=>{if(a)return u.send({type:m.GoToItem,focus:P.Nothing});u.send({type:m.GoToItem,focus:P.Specific,id:o})}),x=pn(),g=$(y=>x.update(y)),O=$(y=>{x.wasMoved(y)&&(a||b||u.send({type:m.GoToItem,focus:P.Specific,id:o,trigger:pe.Pointer}))}),k=$(y=>{x.wasMoved(y)&&(a||b&&u.state.activationTrigger===pe.Pointer&&u.send({type:m.GoToItem,focus:P.Nothing}))}),[F,V]=Ne(),[D,q]=dn(),B=me({active:b,focus:b,disabled:a,close:c}),H={id:o,ref:S,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-labelledby":F,"aria-describedby":D,disabled:void 0,onClick:I,onFocus:_,onPointerEnter:g,onMouseEnter:g,onPointerMove:O,onMouseMove:O,onPointerLeave:k,onMouseLeave:k},f=W();return N.createElement(V,null,N.createElement(q,null,f({ourProps:H,theirProps:l,slot:B,defaultTag:et,name:"Menu.Item"})))}let tt="div";function ot(e,t){let[n,o]=Ne(),a=e,l={ref:t,"aria-labelledby":n,role:"group"},u=W();return N.createElement(o,null,u({ourProps:l,theirProps:a,slot:{},defaultTag:tt,name:"Menu.Section"}))}let st="header";function at(e,t){let n=p.useId(),{id:o=`headlessui-menu-heading-${n}`,...a}=e,l=Fn();ue(()=>l.register(o),[o,l.register]);let u={id:o,ref:t,role:"presentation",...l.props};return W()({ourProps:u,theirProps:a,slot:{},defaultTag:st,name:"Menu.Heading"})}let rt="div";function lt(e,t){let n=e,o={ref:t,role:"separator"};return W()({ourProps:o,theirProps:n,slot:{},defaultTag:rt,name:"Menu.Separator"})}let ut=R(Kn),We=R(Jn),Ve=R(Xn),Be=R(nt),it=R(ot),pt=R(at),dt=R(lt),ct=Object.assign(ut,{Button:We,Items:Ve,Item:Be,Section:it,Heading:pt,Separator:dt});const mt=`
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`,qe=`
  jn:cursor-not-allowed
  jn:opacity-50
`,ht=`
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`,gt=`
  jn:text-base
  jn:text-theme-default
  jn:flex
  jn:w-full
  jn:items-center
  jn:whitespace-nowrap
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,ft=`
  jn:text-base
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,vt=`
  jn:text-sm
  jn:p-2
`,bt=`
  jn:hover:bg-theme-background-lvl-3
  jn:cursor-pointer
`,yt=`
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
`,xt=`
  jn:h-
  jn:bg-theme-background-lvl-3
`,St=`
  jn:inline-flex
`,He=p.createContext(null),he=()=>{const e=p.useContext(He);if(!e)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return e},fe=({children:e,className:t="",disabled:n=!1,icon:o="moreVert",menuSize:a="normal",onClose:l,onOpen:u,...b})=>{const[d,S]=p.useState(!1),r=p.useRef(d),{refs:w,floatingStyles:M,update:c}=Ye({placement:"bottom-start",middleware:[Xe(4),en(),nn({padding:8})],whileElementsMounted:Ze});p.useEffect(()=>{d!==r.current&&(d?u?.():l?.()),r.current=d},[d,u,l]);const I=p.Children.toArray(e),_=I.some(g=>p.isValidElement(g)&&g.type===A),x=I.find(g=>p.isValidElement(g)&&g.type===T);return s.jsx(ct,{as:"div",className:`juno-popupmenu ${t}`,...b,children:({open:g,close:O})=>(p.useEffect(()=>{g!==d&&(S(g),g&&c())},[g]),s.jsxs(He.Provider,{value:{isOpen:d,close:O,menuSize:a},children:[s.jsxs("div",{ref:w.setReference,className:`juno-popupmenu-float-reference-wrapper ${St}`,children:[!_&&s.jsx(A,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?qe:mt}`,disabled:n,children:s.jsx(_e,{icon:o})}),I.map((k,F)=>p.isValidElement(k)&&k.type===A?p.cloneElement(k,{key:F}):null)]}),d&&s.jsx($e.Portal,{children:s.jsx("div",{ref:w.setFloating,style:M,className:"juno-popupmenu-float-content-wrapper",children:x})})]}))})},A=({as:e="button",disabled:t=!1,children:n,className:o="",...a})=>s.jsx(We,{as:e,className:`juno-popupmenu-toggle ${t&&qe} ${o}`,disabled:t,...a,children:n}),T=({children:e,className:t="",...n})=>{const{menuSize:o}=he();return s.jsx(Ve,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${o} ${ht} ${t}`,...n,children:e})},h=({as:e="div",children:t,className:n="",disabled:o=!1,href:a,icon:l,label:u="",rel:b,target:d,...S})=>{const{menuSize:r}=he(),w=r==="small"?vt:ft;return s.jsx(Be,{as:e,disabled:o,className:`juno-popupmenu-item ${gt} ${o?yt:bt} ${w} ${n}`,...e==="a"?{href:a,rel:b,target:d}:{},...S,children:M=>s.jsxs(s.Fragment,{children:[l&&s.jsx(_e,{icon:l,size:"18",className:`juno-popupmenu-item-icon ${Mt}`}),u&&typeof u=="string"?u:typeof t=="function"?t(M):t]})})},U=({children:e,className:t="",...n})=>s.jsx("section",{className:`juno-popupmenu-section ${It} ${t}`,...n,children:e}),de=({children:e,label:t="",className:n="",...o})=>s.jsx("header",{className:`juno-popupmenu-section-title ${Pt} ${n}`,...o,children:s.jsx("h1",{children:t&&t.length?t:e})}),ve=({className:e="",...t})=>s.jsx("div",{className:`juno-popupmenu-section-divider ${xt} ${e}`,...t});try{A.displayName="PopupMenuToggle",A.__docgenInfo={description:"",displayName:"PopupMenuToggle",props:{as:{defaultValue:{value:"div"},description:"Element type to render as",name:"as",required:!1,type:{name:"ElementType"}},disabled:{defaultValue:{value:"false"},description:"Whether the toggle is disabled",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{T.displayName="PopupMenuOptions",T.__docgenInfo={description:"",displayName:"PopupMenuOptions",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}}}catch{}try{h.displayName="PopupMenuItem",h.__docgenInfo={description:"",displayName:"PopupMenuItem",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"moreVert"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}}}}}catch{}try{U.displayName="PopupMenuSection",U.__docgenInfo={description:"",displayName:"PopupMenuSection",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{de.displayName="PopupMenuSectionHeading",de.__docgenInfo={description:"",displayName:"PopupMenuSectionHeading",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}try{ve.displayName="PopupMenuSectionSeparator",ve.__docgenInfo={description:"",displayName:"PopupMenuSectionSeparator",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{fe.displayName="PopupMenu",fe.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"language"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}}}}}catch{}const{fn:v}=__STORYBOOK_MODULE_TEST__,Dt={title:"WiP/PopupMenu",component:fe,subcomponents:{PopupMenuToggle:A,PopupMenuOptions:T,PopupMenuItem:h,PopupMenuSection:U},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(tn)],control:{type:"select"}}},decorators:[e=>s.jsx($e,{children:s.jsx(e,{})})]},Ie=N.forwardRef(({className:e="",onClick:t=void 0,...n},o)=>s.jsx(be,{ref:o,className:`my-custom-toggle ${e}`,onClick:t,...n,children:"Custom Toggle"}));Ie.displayName="ToggleButton";const Le=N.forwardRef((e,t)=>{const{isOpen:n}=he(),{className:o,...a}=e;return s.jsx(be,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${o||""}`,...a,children:e.children||"Toggle Me!"})});Le.displayName="StyledToggleButton";const wt=e=>{const{close:t}=he();return s.jsx(be,{onClick:t,...e})},Q={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:v(),onClose:v(),children:s.jsx(T,{children:s.jsx("p",{children:"Menu goes here."})})}},J={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:v(),onClose:v()}},Y={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{onOpen:v(),onClose:v(),disabled:!0}},Z={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:v(),onClose:v(),children:s.jsxs(T,{children:[s.jsx(h,{label:"Menu Item 1"}),s.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]})}},X={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:v(),onClose:v(),children:s.jsxs(T,{children:[s.jsx(h,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),s.jsx(h,{as:"a",href:"https://www.sap.com",label:"Go to sap.com",target:"_blank",icon:"openInNew"})]})}},ee={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:v(),onClose:v(),children:s.jsxs(T,{children:[s.jsx("p",{children:"Some content goes here."}),s.jsx(wt,{variant:"primary",children:"Yay!"})]})}},ne={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{onOpen:v(),onClose:v(),children:s.jsxs(T,{children:[s.jsxs(U,{children:[s.jsx(de,{children:"Section 1"}),s.jsx(h,{label:"Menu Item 1"}),s.jsx(h,{label:"Menu Item 2",icon:"deleteForever"})]}),s.jsx(ve,{}),s.jsxs(U,{children:[s.jsx(de,{label:"Section 2"}),s.jsx(h,{label:"Menu Item 3"}),s.jsx(h,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},te={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{onOpen:v(),onClose:v(),icon:"warning",children:s.jsxs(T,{children:[s.jsx(h,{label:"Menu Item 1"}),s.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]})}},oe={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:v(),onClose:v(),children:[s.jsx(A,{children:"The Toggle"},"t"),s.jsxs(T,{children:[s.jsx(h,{label:"Menu Item 1"}),s.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},se={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:v(),onClose:v(),children:[s.jsx(A,{as:Ie},"t"),s.jsxs(T,{children:[s.jsx(h,{label:"Menu Item 1"}),s.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},ae={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:v(),onClose:v(),children:[s.jsx(A,{as:Le},"t"),s.jsxs(T,{children:[s.jsx(h,{label:"Menu Item 1"}),s.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},re={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:v(),onClose:v(),children:[s.jsx(A,{as:N.Fragment,children:s.jsx(Ie,{})},"t"),s.jsxs(T,{children:[s.jsx(h,{label:"Menu Item 1"}),s.jsx(h,{label:"Menu Item 2",icon:"deleteForever"}),s.jsx(h,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};const Ft=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WithChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{Q as Default,Y as DisabledDefaultToggle,J as NoMenu,X as WithChildrenAsLinks,re as WithCustomButtonComponentAsChild,te as WithIcon,Z as WithMenuChild,ne as WithMenuChildWithSection,ee as WithMenuWithRandomContent,oe as WithToggleAndMenuChildren,se as WithToggleAsButtonComponent,ae as WithToggleAsButtonStyledByState,Ft as __namedExportsOrder,Dt as default};
