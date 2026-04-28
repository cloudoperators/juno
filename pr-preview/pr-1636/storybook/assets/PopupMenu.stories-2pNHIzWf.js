import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{_ as n,g as r}from"./iframe-qPHz0liX.js";import{n as i,t as a}from"./Icon.component-BYUQ4r57.js";import{t as o}from"./PortalProvider.component-C0iptKAD.js";import"./PortalProvider-BUJ015cu.js";import{t as s}from"./Button.component-J1fJR8AZ.js";import"./Button-DFKvvwdO.js";import{A as c,B as l,C as u,F as d,I as f,J as p,K as m,L as h,M as g,N as _,O as v,P as y,R as b,S as ee,T as x,U as te,V as S,W as C,Y as ne,Z as re,_ as ie,_t as ae,a as oe,at as se,b as ce,bt as le,c as w,ct as ue,d as de,dt as fe,et as pe,f as me,ft as T,g as he,gt as ge,h as _e,ht as ve,i as ye,it as E,j as be,k as xe,l as D,m as Se,mt as O,n as k,nt as A,o as j,ot as M,p as Ce,r as we,rt as Te,s as Ee,t as De,u as Oe,ut as ke,v as Ae,w as je,x as Me,y as Ne,yt as Pe,z as Fe}from"./element-movement-Bj4AfkKE.js";import{t as Ie}from"./use-tree-walker-D0M7Nbbb.js";import{d as Le,f as Re,h as ze,r as Be,u as Ve}from"./floating-ui.react-Rb8oS9fZ.js";import{t as He}from"./use-text-value-BIW-CM2F.js";var Ue=Object.defineProperty,We=(e,t,n)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ge=(e,t,n)=>(We(e,typeof t==`symbol`?t:t+``,n),n),N=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(N||{}),Ke=(e=>(e[e.Pointer=0]=`Pointer`,e[e.Other=1]=`Other`,e))(Ke||{}),P=(e=>(e[e.OpenMenu=0]=`OpenMenu`,e[e.CloseMenu=1]=`CloseMenu`,e[e.GoToItem=2]=`GoToItem`,e[e.Search=3]=`Search`,e[e.ClearSearch=4]=`ClearSearch`,e[e.RegisterItems=5]=`RegisterItems`,e[e.UnregisterItems=6]=`UnregisterItems`,e[e.SetButtonElement=7]=`SetButtonElement`,e[e.SetItemsElement=8]=`SetItemsElement`,e[e.SortItems=9]=`SortItems`,e[e.MarkButtonAsMoved=10]=`MarkButtonAsMoved`,e))(P||{});function qe(e,t=e=>e){let n=e.activeItemIndex===null?null:e.items[e.activeItemIndex],r=v(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}var Je={1(e){if(e.menuState===1)return e;let t=e.buttonElement?k.Tracked(De(e.buttonElement)):e.buttonPositionState;return{...e,activeItemIndex:null,pendingFocus:{focus:j.Nothing},menuState:1,buttonPositionState:t}},0(e,t){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:t.focus,menuState:0,buttonPositionState:k.Idle}},2:(e,t)=>{if(e.menuState===1)return e;let n={...e,searchQuery:``,activationTrigger:t.trigger??1,__demoMode:!1};if(t.focus===j.Nothing)return{...n,activeItemIndex:null};if(t.focus===j.Specific)return{...n,activeItemIndex:e.items.findIndex(e=>e.id===t.id)};if(t.focus===j.Previous){let r=e.activeItemIndex;if(r!==null){let i=e.items[r].dataRef.current.domRef,a=Ee(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.items[a].dataRef.current.domRef;if(i.current?.previousElementSibling===t.current||t.current?.previousElementSibling===null)return{...n,activeItemIndex:a}}}}else if(t.focus===j.Next){let r=e.activeItemIndex;if(r!==null){let i=e.items[r].dataRef.current.domRef,a=Ee(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.items[a].dataRef.current.domRef;if(i.current?.nextElementSibling===t.current||t.current?.nextElementSibling===null)return{...n,activeItemIndex:a}}}}let r=qe(e),i=Ee(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...n,...r,activeItemIndex:i}},3:(e,t)=>{let n=+(e.searchQuery===``),r=e.searchQuery+t.value.toLowerCase(),i=(e.activeItemIndex===null?e.items:e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n))).find(e=>e.dataRef.current.textValue?.startsWith(r)&&!e.dataRef.current.disabled),a=i?e.items.indexOf(i):-1;return a===-1||a===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:a,activationTrigger:1}},4(e){return e.searchQuery===``?e:{...e,searchQuery:``,searchActiveItemIndex:null}},5:(e,t)=>{let n=e.items.concat(t.items.map(e=>e)),r=e.activeItemIndex;return e.pendingFocus.focus!==j.Nothing&&(r=Ee(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled})),{...e,items:n,activeItemIndex:r,pendingFocus:{focus:j.Nothing},pendingShouldSort:!0}},6:(e,t)=>{let n=e.items,r=[],i=new Set(t.items);for(let[e,t]of n.entries())if(i.has(t.id)&&(r.push(e),i.delete(t.id),i.size===0))break;if(r.length>0){n=n.slice();for(let e of r.reverse())n.splice(e,1)}return{...e,items:n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element},9:e=>e.pendingShouldSort?{...e,...qe(e),pendingShouldSort:!1}:e,10(e){return e.buttonPositionState.kind===`Tracked`?{...e,buttonPositionState:k.Moved}:e}},Ye=class e extends Fe{constructor(e){super(e),Ge(this,`actions`,{registerItem:l(()=>{let e=[],t=new Set;return[(n,r)=>{t.has(r)||(t.add(r),e.push({id:n,dataRef:r}))},()=>(t.clear(),this.send({type:5,items:e.splice(0)}))]}),unregisterItem:l(()=>{let e=[];return[t=>e.push(t),()=>this.send({type:6,items:e.splice(0)})]})}),Ge(this,`selectors`,{activeDescendantId(e){var t;let n=e.activeItemIndex,r=e.items;return n===null||(t=r[n])==null?void 0:t.id},isActive(e,t){let n=e.activeItemIndex,r=e.items;return n===null?!1:r[n]?.id===t},shouldScrollIntoView(e,t){return e.__demoMode||e.menuState!==0||e.activationTrigger===0?!1:this.isActive(e,t)},didButtonMove(e){return e.buttonPositionState.kind===`Moved`}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let e=this.state.id,t=b.get(null);this.disposables.add(t.on(h.Push,n=>{!t.selectors.isTop(n,e)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>t.actions.push(e)),this.on(1,()=>t.actions.pop(e))}this.disposables.group(e=>{this.on(1,t=>{t.buttonElement&&(e.dispose(),e.add(we(t.buttonElement,t.buttonPositionState,()=>{this.send({type:10})})))})})}static new({id:t,__demoMode:n=!1}){return new e({id:t,__demoMode:n,menuState:+!n,buttonElement:null,itemsElement:null,items:[],searchQuery:``,activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:j.Nothing},buttonPositionState:k.Idle})}reduce(e,t){return ue(t.type,Je,e,t)}},F=e(t(),1),Xe=(0,F.createContext)(null);function Ze(e){let t=(0,F.useContext)(Xe);if(t===null){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Qe),t}return t}function Qe({id:e,__demoMode:t=!1}){let n=(0,F.useMemo)(()=>Ye.new({id:e,__demoMode:t}),[]);return oe(()=>n.dispose()),n}var $e=e(n(),1),et=F.Fragment;function tt(e,t){let n=(0,A.useId)(),{__demoMode:r=!1,...i}=e,a=Qe({id:n,__demoMode:r}),[o,s,l]=f(a,e=>[e.menuState,e.itemsElement,e.buttonElement]),u=re(t),d=b.get(null);x(f(d,(0,F.useCallback)(e=>d.selectors.isTop(e,n),[d,n])),[l,s],(e,t)=>{var n;a.send({type:P.CloseMenu}),xe(t,c.Loose)||(e.preventDefault(),(n=a.state.buttonElement)==null||n.focus())});let p=T(()=>{a.send({type:P.CloseMenu})}),m=ke({open:o===N.Open,close:p}),h={ref:u},g=E();return F.createElement(de,null,F.createElement(Xe.Provider,{value:a},F.createElement(w,{value:ue(o,{[N.Open]:D.Open,[N.Closed]:D.Closed})},g({ourProps:h,theirProps:i,slot:m,defaultTag:et,name:`Menu`}))))}var nt=`button`;function rt(e,t){let n=Ze(`Menu.Button`),r=(0,A.useId)(),{id:i=`headlessui-menu-button-${r}`,disabled:a=!1,autoFocus:o=!1,...s}=e,c=(0,F.useRef)(null),l=_e(),d=re(t,c,me(),T(e=>n.send({type:P.SetButtonElement,element:e}))),m=T(e=>{switch(e.key){case p.Space:case p.Enter:case p.ArrowDown:e.preventDefault(),e.stopPropagation(),n.send({type:P.OpenMenu,focus:{focus:j.First}});break;case p.ArrowUp:e.preventDefault(),e.stopPropagation(),n.send({type:P.OpenMenu,focus:{focus:j.Last}});break}}),h=T(e=>{switch(e.key){case p.Space:e.preventDefault();break}}),[g,_,v]=f(n,e=>[e.menuState,e.buttonElement,e.itemsElement]);ee(g===N.Open,{trigger:_,action:(0,F.useCallback)(e=>{if(_!=null&&_.contains(e.target))return u.Ignore;let t=e.target.closest(`[role="menuitem"]:not([data-disabled])`);return pe(t)?u.Select(t):v!=null&&v.contains(e.target)?u.Ignore:u.Close},[_,v]),close:(0,F.useCallback)(()=>n.send({type:P.CloseMenu}),[]),select:(0,F.useCallback)(e=>e.click(),[])});let y=S(e=>{var t;a||(g===N.Open?((0,$e.flushSync)(()=>n.send({type:P.CloseMenu})),(t=c.current)==null||t.focus({preventScroll:!0})):(e.preventDefault(),n.send({type:P.OpenMenu,focus:{focus:j.Nothing},trigger:Ke.Pointer})))}),{isFocusVisible:b,focusProps:x}=le({autoFocus:o}),{isHovered:te,hoverProps:C}=Pe({isDisabled:a}),{pressed:ne,pressProps:ie}=fe({disabled:a}),ae=ke({open:g===N.Open,active:ne||g===N.Open,disabled:a,hover:te,focus:b,autofocus:o}),oe=se(l(),{ref:d,id:i,type:Me(e,c.current),"aria-haspopup":`menu`,"aria-controls":v?.id,"aria-expanded":g===N.Open,disabled:a||void 0,autoFocus:o,onKeyDown:m,onKeyUp:h},y,x,C,ie);return E()({ourProps:oe,theirProps:s,slot:ae,defaultTag:nt,name:`Menu.Button`})}var it=`div`,at=Te.RenderStrategy|Te.Static;function ot(e,t){let n=(0,A.useId)(),{id:r=`headlessui-menu-items-${n}`,anchor:i,portal:a=!1,modal:o=!0,transition:s=!1,...c}=e,l=he(i),u=Ze(`Menu.Items`),[m,h]=Ce(l),v=Se(),[b,ee]=(0,F.useState)(null),x=re(t,l?m:null,T(e=>u.send({type:P.SetItemsElement,element:e})),ee),[S,C]=f(u,e=>[e.menuState,e.buttonElement]),ne=je(C),oe=je(b);l&&(a=!0);let le=Oe(),[w,ue]=ie(s,b,le===null?S===N.Open:(le&D.Open)===D.Open);y(w,C,()=>{u.send({type:P.CloseMenu})});let de=f(u,e=>e.__demoMode);ce(de?!1:o&&S===N.Open,oe),d(de?!1:o&&S===N.Open,{allowed:(0,F.useCallback)(()=>[C,b],[C,b])});let fe=f(u,u.selectors.didButtonMove)?!1:w;(0,F.useEffect)(()=>{let e=b;e&&S===N.Open&&(ae(e)||e.focus({preventScroll:!0}))},[S,b]),Ie(S===N.Open,{container:b,accept(e){return e.getAttribute(`role`)===`menuitem`?NodeFilter.FILTER_REJECT:e.hasAttribute(`role`)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute(`role`,`none`)}});let pe=ve(),me=T(e=>{var t,n;switch(pe.dispose(),e.key){case p.Space:if(u.state.searchQuery!==``)return e.preventDefault(),e.stopPropagation(),u.send({type:P.Search,value:e.key});case p.Enter:if(e.preventDefault(),e.stopPropagation(),u.state.activeItemIndex!==null){let{dataRef:e}=u.state.items[u.state.activeItemIndex];(t=e.current?.domRef.current)==null||t.click()}u.send({type:P.CloseMenu}),be(u.state.buttonElement);break;case p.ArrowDown:return e.preventDefault(),e.stopPropagation(),u.send({type:P.GoToItem,focus:j.Next});case p.ArrowUp:return e.preventDefault(),e.stopPropagation(),u.send({type:P.GoToItem,focus:j.Previous});case p.Home:case p.PageUp:return e.preventDefault(),e.stopPropagation(),u.send({type:P.GoToItem,focus:j.First});case p.End:case p.PageDown:return e.preventDefault(),e.stopPropagation(),u.send({type:P.GoToItem,focus:j.Last});case p.Escape:e.preventDefault(),e.stopPropagation(),(0,$e.flushSync)(()=>u.send({type:P.CloseMenu})),(n=u.state.buttonElement)==null||n.focus({preventScroll:!0});break;case p.Tab:e.preventDefault(),e.stopPropagation(),(0,$e.flushSync)(()=>u.send({type:P.CloseMenu})),g(u.state.buttonElement,e.shiftKey?_.Previous:_.Next);break;default:e.key.length===1&&(u.send({type:P.Search,value:e.key}),pe.setTimeout(()=>u.send({type:P.ClearSearch}),350));break}}),ge=T(e=>{switch(e.key){case p.Space:e.preventDefault();break}}),_e=ke({open:S===N.Open}),xe=se(l?v():{},{"aria-activedescendant":f(u,u.selectors.activeDescendantId),"aria-labelledby":f(u,e=>e.buttonElement?.id),id:r,onKeyDown:me,onKeyUp:ge,role:`menu`,tabIndex:S===N.Open?0:void 0,ref:x,style:{...c.style,...h,"--button-width":te(w,C,!0).width},...Ae(ue)}),O=E();return F.createElement(ye,{enabled:a?e.static||w:!1,ownerDocument:ne},O({ourProps:xe,theirProps:c,slot:_e,defaultTag:it,features:at,visible:fe,name:`Menu.Items`}))}var st=F.Fragment;function ct(e,t){let n=(0,A.useId)(),{id:r=`headlessui-menu-item-${n}`,disabled:i=!1,...a}=e,o=Ze(`Menu.Item`),s=f(o,e=>o.selectors.isActive(e,r)),c=(0,F.useRef)(null),l=re(t,c),u=f(o,e=>o.selectors.shouldScrollIntoView(e,r));O(()=>{if(u)return ge().requestAnimationFrame(()=>{var e,t;(t=(e=c.current)?.scrollIntoView)==null||t.call(e,{block:`nearest`})})},[u,c]);let d=He(c),p=(0,F.useRef)({disabled:i,domRef:c,get textValue(){return d()}});O(()=>{p.current.disabled=i},[p,i]),O(()=>(o.actions.registerItem(r,p),()=>o.actions.unregisterItem(r)),[p,r]);let h=T(()=>{o.send({type:P.CloseMenu})}),g=T(e=>{if(i)return e.preventDefault();o.send({type:P.CloseMenu}),be(o.state.buttonElement)}),_=T(()=>{if(i)return o.send({type:P.GoToItem,focus:j.Nothing});o.send({type:P.GoToItem,focus:j.Specific,id:r})}),v=Ne(),y=T(e=>v.update(e)),b=T(e=>{v.wasMoved(e)&&(i||s||o.send({type:P.GoToItem,focus:j.Specific,id:r,trigger:Ke.Pointer}))}),ee=T(e=>{v.wasMoved(e)&&(i||s&&o.state.activationTrigger===Ke.Pointer&&o.send({type:P.GoToItem,focus:j.Nothing}))}),[x,te]=m(),[S,C]=ne(),ie=ke({active:s,focus:s,disabled:i,close:h}),ae={id:r,ref:l,role:`menuitem`,tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-labelledby":x,"aria-describedby":S,disabled:void 0,onClick:g,onFocus:_,onPointerEnter:y,onMouseEnter:y,onPointerMove:b,onMouseMove:b,onPointerLeave:ee,onMouseLeave:ee},oe=E();return F.createElement(te,null,F.createElement(C,null,oe({ourProps:ae,theirProps:a,slot:ie,defaultTag:st,name:`Menu.Item`})))}var lt=`div`;function ut(e,t){let[n,r]=m(),i=e,a={ref:t,"aria-labelledby":n,role:`group`},o=E();return F.createElement(r,null,o({ourProps:a,theirProps:i,slot:{},defaultTag:lt,name:`Menu.Section`}))}var dt=`header`;function ft(e,t){let n=(0,A.useId)(),{id:r=`headlessui-menu-heading-${n}`,...i}=e,a=C();O(()=>a.register(r),[r,a.register]);let o={id:r,ref:t,role:`presentation`,...a.props};return E()({ourProps:o,theirProps:i,slot:{},defaultTag:dt,name:`Menu.Heading`})}var pt=`div`;function mt(e,t){let n=e,r={ref:t,role:`separator`};return E()({ourProps:r,theirProps:n,slot:{},defaultTag:pt,name:`Menu.Separator`})}var ht=M(tt),gt=M(rt),_t=M(ot),vt=M(ct),yt=M(ut),bt=M(ft),xt=M(mt),St=Object.assign(ht,{Button:gt,Items:_t,Item:vt,Section:yt,Heading:bt,Separator:xt}),I=r(),Ct=`
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`,wt=`
  jn:cursor-not-allowed
  jn:opacity-50
`,Tt=`
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`,Et=`
  jn:text-base
  jn:text-theme-default
  jn:flex
  jn:w-full
  jn:items-center
  jn:whitespace-nowrap
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,Dt=`
  jn:text-base
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,Ot=`
  jn:text-sm
  jn:p-2
`,kt=`
  jn:hover:bg-theme-background-lvl-3
  jn:cursor-pointer
`,At=`
  jn:cursor-not-allowed
  jn:opacity-50
  jn:bg-theme-background-lvl-1
`,jt=`
  jn:inline-block
  jn:mr-2
`,Mt=`
  jn:border-b
  jn:border-theme-background-lvl-3
  jn:last:border-b-0
`,Nt=`
  jn:text-theme-light
  jn:text-xs
  jn:p-2
  jn:cursor-default
`,Pt=`
  jn:h-
  jn:bg-theme-background-lvl-3
`,Ft=`
  jn:inline-flex
`,It=(0,F.createContext)(null),Lt=()=>{let e=(0,F.useContext)(It);if(!e)throw Error(`The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.`);return e},Rt=({children:e,className:t=``,disabled:n=!1,icon:r=`moreVert`,menuSize:i=`normal`,onClose:s,onOpen:c,...l})=>{let[u,d]=(0,F.useState)(!1),f=(0,F.useRef)(u),{refs:p,floatingStyles:m,update:h}=Be({placement:`bottom-start`,middleware:[Le(4),Ve(),Re({padding:8})],whileElementsMounted:ze});(0,F.useEffect)(()=>{u!==f.current&&(u?c?.():s?.()),f.current=u},[u,c,s]);let g=F.Children.toArray(e),_=g.some(e=>(0,F.isValidElement)(e)&&e.type===L),v=g.find(e=>(0,F.isValidElement)(e)&&e.type===R);return(0,I.jsx)(St,{as:`div`,className:`juno-popupmenu ${t}`,...l,children:({open:e,close:t})=>((0,F.useEffect)(()=>{e!==u&&(d(e),e&&h())},[e]),(0,I.jsxs)(It.Provider,{value:{isOpen:u,close:t,menuSize:i},children:[(0,I.jsxs)(`div`,{ref:p.setReference,className:`juno-popupmenu-float-reference-wrapper ${Ft}`,children:[!_&&(0,I.jsx)(L,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?wt:Ct}`,disabled:n,children:(0,I.jsx)(a,{icon:r})}),g.map((e,t)=>(0,F.isValidElement)(e)&&e.type===L?(0,F.cloneElement)(e,{key:t}):null)]}),u&&(0,I.jsx)(o.Portal,{children:(0,I.jsx)(`div`,{ref:p.setFloating,style:m,className:`juno-popupmenu-float-content-wrapper`,children:v})})]}))})},L=({as:e=`button`,disabled:t=!1,children:n,className:r=``,...i})=>(0,I.jsx)(gt,{as:e,className:`juno-popupmenu-toggle ${t&&wt} ${r}`,disabled:t,...i,children:n}),R=({children:e,className:t=``,...n})=>{let{menuSize:r}=Lt();return(0,I.jsx)(_t,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${r} ${Tt} ${t}`,...n,children:e})},z=({as:e=`div`,children:t,className:n=``,disabled:r=!1,href:i,icon:o,label:s=``,rel:c,target:l,...u})=>{let{menuSize:d}=Lt();return(0,I.jsx)(vt,{as:e,disabled:r,className:`juno-popupmenu-item ${Et} ${r?At:kt} ${d===`small`?Ot:Dt} ${n}`,...e===`a`?{href:i,rel:c,target:l}:{},...u,children:e=>(0,I.jsxs)(I.Fragment,{children:[o&&(0,I.jsx)(a,{icon:o,size:`18`,className:`juno-popupmenu-item-icon ${jt}`}),s&&typeof s==`string`?s:typeof t==`function`?t(e):t]})})},B=({children:e,className:t=``,...n})=>(0,I.jsx)(`section`,{className:`juno-popupmenu-section ${Mt} ${t}`,...n,children:e}),zt=({children:e,label:t=``,className:n=``,...r})=>(0,I.jsx)(`header`,{className:`juno-popupmenu-section-title ${Nt} ${n}`,...r,children:(0,I.jsx)(`h1`,{children:t&&t.length?t:e})}),Bt=({className:e=``,...t})=>(0,I.jsx)(`div`,{className:`juno-popupmenu-section-divider ${Pt} ${e}`,...t});try{L.displayName=`PopupMenuToggle`,L.__docgenInfo={description:``,displayName:`PopupMenuToggle`,props:{as:{defaultValue:{value:`div`},description:`Element type to render as`,name:`as`,required:!1,type:{name:`ElementType`}},disabled:{defaultValue:{value:`false`},description:`Whether the toggle is disabled`,name:`disabled`,required:!1,type:{name:`boolean`}}}}}catch{}try{R.displayName=`PopupMenuOptions`,R.__docgenInfo={description:``,displayName:`PopupMenuOptions`,props:{as:{defaultValue:{value:`div`},description:``,name:`as`,required:!1,type:{name:`ElementType`}},className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}},key:{defaultValue:null,description:``,name:`key`,required:!1,type:{name:`Key`}}}}}catch{}try{z.displayName=`PopupMenuItem`,z.__docgenInfo={description:``,displayName:`PopupMenuItem`,props:{as:{defaultValue:{value:`div`},description:``,name:`as`,required:!1,type:{name:`ElementType`}},className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:``,name:`disabled`,required:!1,type:{name:`boolean`}},href:{defaultValue:null,description:``,name:`href`,required:!1,type:{name:`string`}},icon:{defaultValue:{value:`moreVert`},description:``,name:`icon`,required:!1,type:{name:`enum`,value:[{value:`"search"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"danger"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"error"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"info"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"success"`},{value:`"upload"`},{value:`"warning"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},label:{defaultValue:{value:``},description:``,name:`label`,required:!1,type:{name:`string`}},rel:{defaultValue:null,description:``,name:`rel`,required:!1,type:{name:`string`}},target:{defaultValue:null,description:``,name:`target`,required:!1,type:{name:`string`}}}}}catch{}try{B.displayName=`PopupMenuSection`,B.__docgenInfo={description:``,displayName:`PopupMenuSection`,props:{className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}}}}}catch{}try{zt.displayName=`PopupMenuSectionHeading`,zt.__docgenInfo={description:``,displayName:`PopupMenuSectionHeading`,props:{className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}},label:{defaultValue:{value:``},description:``,name:`label`,required:!1,type:{name:`string`}}}}}catch{}try{Bt.displayName=`PopupMenuSectionSeparator`,Bt.__docgenInfo={description:``,displayName:`PopupMenuSectionSeparator`,props:{className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}}}}}catch{}try{Rt.displayName=`PopupMenu`,Rt.__docgenInfo={description:`A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.`,displayName:`PopupMenu`,props:{disabled:{defaultValue:{value:`false`},description:`Whether the PopupMenu is disabled.`,name:`disabled`,required:!1,type:{name:`boolean`}},icon:{defaultValue:{value:`moreVert`},description:`The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.`,name:`icon`,required:!1,type:{name:`enum`,value:[{value:`"search"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"danger"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"error"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"info"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"success"`},{value:`"upload"`},{value:`"warning"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},menuSize:{defaultValue:{value:`normal`},description:`The size of the menu and its items.`,name:`menuSize`,required:!1,type:{name:`enum`,value:[{value:`"small"`},{value:`"normal"`}]}},onClose:{defaultValue:null,description:`Handler to run when the Menu closes.`,name:`onClose`,required:!1,type:{name:`(() => void)`}},onOpen:{defaultValue:null,description:`Handler to run when the Menu opens.`,name:`onOpen`,required:!1,type:{name:`(() => void)`}}}}}catch{}var{fn:V}=__STORYBOOK_MODULE_TEST__,Vt={title:`WiP/PopupMenu`,component:Rt,subcomponents:{PopupMenuToggle:L,PopupMenuOptions:R,PopupMenuItem:z,PopupMenuSection:B},argTypes:{children:{control:!1},icon:{options:[`moreVert`,...Object.keys(i)],control:{type:`select`}}},decorators:[e=>(0,I.jsx)(o,{children:(0,I.jsx)(e,{})})]},Ht=F.forwardRef(({className:e=``,onClick:t=void 0,...n},r)=>(0,I.jsx)(s,{ref:r,className:`my-custom-toggle ${e}`,onClick:t,...n,children:`Custom Toggle`}));Ht.displayName=`ToggleButton`;var Ut=F.forwardRef((e,t)=>{let{isOpen:n}=Lt(),{className:r,...i}=e;return(0,I.jsx)(s,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:`toggle-button-closed`} ${r||``}`,...i,children:e.children||`Toggle Me!`})});Ut.displayName=`StyledToggleButton`;var Wt=e=>{let{close:t}=Lt();return(0,I.jsx)(s,{onClick:t,...e})},H={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsx)(R,{children:(0,I.jsx)(`p`,{children:`Menu goes here.`})})}},U={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:V(),onClose:V()}},W={parameters:{args:{description:{story:`Disable the default toggle.`}}},args:{onOpen:V(),onClose:V(),disabled:!0}},G={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},K={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{as:`a`,href:`https://github.com/cloudoperators/juno`,label:`Go to Juno on Github`}),(0,I.jsx)(z,{as:`a`,href:`https://www.sap.com`,label:`Go to sap.com`,target:`_blank`,icon:`openInNew`})]})}},q={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsx)(`p`,{children:`Some content goes here.`}),(0,I.jsx)(Wt,{variant:`primary`,children:`Yay!`})]})}},J={parameters:{docs:{description:{story:`In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers.`}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsxs)(B,{children:[(0,I.jsx)(zt,{children:`Section 1`}),(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`})]}),(0,I.jsx)(Bt,{}),(0,I.jsxs)(B,{children:[(0,I.jsx)(zt,{label:`Section 2`}),(0,I.jsx)(z,{label:`Menu Item 3`}),(0,I.jsx)(z,{label:`Menu Item 4 Disabled`,disabled:!0})]})]})}},Y={parameters:{docs:{description:{story:`A default toggle can be rendered with a custom icon without having to pass a custom toggle element.`}}},args:{onOpen:V(),onClose:V(),icon:`warning`,children:(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},X={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{children:`The Toggle`},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},Z={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{as:Ht},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},Q={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{as:Ut},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},$={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{as:F.Fragment,children:(0,I.jsx)(Ht,{})},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};var Gt=[`Default`,`NoMenu`,`DisabledDefaultToggle`,`WithMenuChild`,`WithChildrenAsLinks`,`WithMenuWithRandomContent`,`WithMenuChildWithSection`,`WithIcon`,`WithToggleAndMenuChildren`,`WithToggleAsButtonComponent`,`WithToggleAsButtonStyledByState`,`WithCustomButtonComponentAsChild`];export{H as Default,W as DisabledDefaultToggle,U as NoMenu,K as WithChildrenAsLinks,$ as WithCustomButtonComponentAsChild,Y as WithIcon,G as WithMenuChild,J as WithMenuChildWithSection,q as WithMenuWithRandomContent,X as WithToggleAndMenuChildren,Z as WithToggleAsButtonComponent,Q as WithToggleAsButtonStyledByState,Gt as __namedExportsOrder,Vt as default};