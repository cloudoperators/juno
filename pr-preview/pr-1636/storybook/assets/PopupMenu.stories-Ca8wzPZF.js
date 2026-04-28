import{g as e}from"./iframe-Cx-zHds2.js";import{n as t,t as n}from"./Icon.component-hvX4Q9Gp.js";import{t as r}from"./PortalProvider.component-C2fswz4A.js";import"./PortalProvider-CbIFc8Et.js";import{t as i}from"./Button.component-DvVUjNUj.js";import"./Button-B0IkcDoi.js";import{A as a,B as o,C as s,F as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,R as _,S as v,T as y,U as ee,V as b,W as te,Y as ne,Z as x,_ as re,_t as ie,a as S,at as ae,b as oe,bt as C,c as se,ct as ce,d as le,dt as w,et as ue,f as de,ft as T,g as fe,gt as pe,h as me,ht as he,i as ge,it as E,j as _e,k as ve,l as ye,m as be,mt as D,n as O,nt as k,o as A,ot as j,p as xe,r as Se,rt as Ce,s as we,t as Te,u as Ee,ut as De,v as Oe,w as ke,x as Ae,y as je,yt as Me,z as Ne}from"./element-movement-DePbhexO.js";import{t as Pe}from"./use-tree-walker-DQkgaGow.js";import{d as Fe,f as Ie,h as Le,r as Re,u as ze}from"./floating-ui.react-ByCshd6r.js";import{t as Be}from"./use-text-value-DWgrt8J9.js";import M,{Children as Ve,Fragment as He,cloneElement as Ue,createContext as We,isValidElement as Ge,useCallback as N,useContext as Ke,useEffect as qe,useMemo as Je,useRef as Ye,useState as Xe}from"react";import{flushSync as Ze}from"react-dom";var Qe=Object.defineProperty,$e=(e,t,n)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,et=(e,t,n)=>($e(e,typeof t==`symbol`?t:t+``,n),n),P=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(P||{}),tt=(e=>(e[e.Pointer=0]=`Pointer`,e[e.Other=1]=`Other`,e))(tt||{}),F=(e=>(e[e.OpenMenu=0]=`OpenMenu`,e[e.CloseMenu=1]=`CloseMenu`,e[e.GoToItem=2]=`GoToItem`,e[e.Search=3]=`Search`,e[e.ClearSearch=4]=`ClearSearch`,e[e.RegisterItems=5]=`RegisterItems`,e[e.UnregisterItems=6]=`UnregisterItems`,e[e.SetButtonElement=7]=`SetButtonElement`,e[e.SetItemsElement=8]=`SetItemsElement`,e[e.SortItems=9]=`SortItems`,e[e.MarkButtonAsMoved=10]=`MarkButtonAsMoved`,e))(F||{});function nt(e,t=e=>e){let n=e.activeItemIndex===null?null:e.items[e.activeItemIndex],r=h(t(e.items.slice()),e=>e.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}var rt={1(e){if(e.menuState===1)return e;let t=e.buttonElement?O.Tracked(Te(e.buttonElement)):e.buttonPositionState;return{...e,activeItemIndex:null,pendingFocus:{focus:A.Nothing},menuState:1,buttonPositionState:t}},0(e,t){return e.menuState===0?e:{...e,__demoMode:!1,pendingFocus:t.focus,menuState:0,buttonPositionState:O.Idle}},2:(e,t)=>{if(e.menuState===1)return e;let n={...e,searchQuery:``,activationTrigger:t.trigger??1,__demoMode:!1};if(t.focus===A.Nothing)return{...n,activeItemIndex:null};if(t.focus===A.Specific)return{...n,activeItemIndex:e.items.findIndex(e=>e.id===t.id)};if(t.focus===A.Previous){let r=e.activeItemIndex;if(r!==null){let i=e.items[r].dataRef.current.domRef,a=we(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.items[a].dataRef.current.domRef;if(i.current?.previousElementSibling===t.current||t.current?.previousElementSibling===null)return{...n,activeItemIndex:a}}}}else if(t.focus===A.Next){let r=e.activeItemIndex;if(r!==null){let i=e.items[r].dataRef.current.domRef,a=we(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.items[a].dataRef.current.domRef;if(i.current?.nextElementSibling===t.current||t.current?.nextElementSibling===null)return{...n,activeItemIndex:a}}}}let r=nt(e),i=we(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...n,...r,activeItemIndex:i}},3:(e,t)=>{let n=+(e.searchQuery===``),r=e.searchQuery+t.value.toLowerCase(),i=(e.activeItemIndex===null?e.items:e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n))).find(e=>e.dataRef.current.textValue?.startsWith(r)&&!e.dataRef.current.disabled),a=i?e.items.indexOf(i):-1;return a===-1||a===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:a,activationTrigger:1}},4(e){return e.searchQuery===``?e:{...e,searchQuery:``,searchActiveItemIndex:null}},5:(e,t)=>{let n=e.items.concat(t.items.map(e=>e)),r=e.activeItemIndex;return e.pendingFocus.focus!==A.Nothing&&(r=we(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled})),{...e,items:n,activeItemIndex:r,pendingFocus:{focus:A.Nothing},pendingShouldSort:!0}},6:(e,t)=>{let n=e.items,r=[],i=new Set(t.items);for(let[e,t]of n.entries())if(i.has(t.id)&&(r.push(e),i.delete(t.id),i.size===0))break;if(r.length>0){n=n.slice();for(let e of r.reverse())n.splice(e,1)}return{...e,items:n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element},9:e=>e.pendingShouldSort?{...e,...nt(e),pendingShouldSort:!1}:e,10(e){return e.buttonPositionState.kind===`Tracked`?{...e,buttonPositionState:O.Moved}:e}},it=class e extends Ne{constructor(e){super(e),et(this,`actions`,{registerItem:o(()=>{let e=[],t=new Set;return[(n,r)=>{t.has(r)||(t.add(r),e.push({id:n,dataRef:r}))},()=>(t.clear(),this.send({type:5,items:e.splice(0)}))]}),unregisterItem:o(()=>{let e=[];return[t=>e.push(t),()=>this.send({type:6,items:e.splice(0)})]})}),et(this,`selectors`,{activeDescendantId(e){var t;let n=e.activeItemIndex,r=e.items;return n===null||(t=r[n])==null?void 0:t.id},isActive(e,t){let n=e.activeItemIndex,r=e.items;return n===null?!1:r[n]?.id===t},shouldScrollIntoView(e,t){return e.__demoMode||e.menuState!==0||e.activationTrigger===0?!1:this.isActive(e,t)},didButtonMove(e){return e.buttonPositionState.kind===`Moved`}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let e=this.state.id,t=_.get(null);this.disposables.add(t.on(f.Push,n=>{!t.selectors.isTop(n,e)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>t.actions.push(e)),this.on(1,()=>t.actions.pop(e))}this.disposables.group(e=>{this.on(1,t=>{t.buttonElement&&(e.dispose(),e.add(Se(t.buttonElement,t.buttonPositionState,()=>{this.send({type:10})})))})})}static new({id:t,__demoMode:n=!1}){return new e({id:t,__demoMode:n,menuState:+!n,buttonElement:null,itemsElement:null,items:[],searchQuery:``,activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:A.Nothing},buttonPositionState:O.Idle})}reduce(e,t){return ce(t.type,rt,e,t)}},at=We(null);function ot(e){let t=Ke(at);if(t===null){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,st),t}return t}function st({id:e,__demoMode:t=!1}){let n=Je(()=>it.new({id:e,__demoMode:t}),[]);return S(()=>n.dispose()),n}var ct=He;function lt(e,t){let n=k(),{__demoMode:r=!1,...i}=e,o=st({id:n,__demoMode:r}),[s,c,u]=l(o,e=>[e.menuState,e.itemsElement,e.buttonElement]),d=x(t),f=_.get(null);y(l(f,N(e=>f.selectors.isTop(e,n),[f,n])),[u,c],(e,t)=>{var n;o.send({type:F.CloseMenu}),ve(t,a.Loose)||(e.preventDefault(),(n=o.state.buttonElement)==null||n.focus())});let p=T(()=>{o.send({type:F.CloseMenu})}),m=De({open:s===P.Open,close:p}),h={ref:d},g=E();return M.createElement(le,null,M.createElement(at.Provider,{value:o},M.createElement(se,{value:ce(s,{[P.Open]:ye.Open,[P.Closed]:ye.Closed})},g({ourProps:h,theirProps:i,slot:m,defaultTag:ct,name:`Menu`}))))}var ut=`button`;function dt(e,t){let n=ot(`Menu.Button`),r=k(),{id:i=`headlessui-menu-button-${r}`,disabled:a=!1,autoFocus:o=!1,...c}=e,d=Ye(null),f=me(),p=x(t,d,de(),T(e=>n.send({type:F.SetButtonElement,element:e}))),m=T(e=>{switch(e.key){case u.Space:case u.Enter:case u.ArrowDown:e.preventDefault(),e.stopPropagation(),n.send({type:F.OpenMenu,focus:{focus:A.First}});break;case u.ArrowUp:e.preventDefault(),e.stopPropagation(),n.send({type:F.OpenMenu,focus:{focus:A.Last}});break}}),h=T(e=>{switch(e.key){case u.Space:e.preventDefault();break}}),[g,_,y]=l(n,e=>[e.menuState,e.buttonElement,e.itemsElement]);v(g===P.Open,{trigger:_,action:N(e=>{if(_!=null&&_.contains(e.target))return s.Ignore;let t=e.target.closest(`[role="menuitem"]:not([data-disabled])`);return ue(t)?s.Select(t):y!=null&&y.contains(e.target)?s.Ignore:s.Close},[_,y]),close:N(()=>n.send({type:F.CloseMenu}),[]),select:N(e=>e.click(),[])});let ee=b(e=>{var t;a||(g===P.Open?(Ze(()=>n.send({type:F.CloseMenu})),(t=d.current)==null||t.focus({preventScroll:!0})):(e.preventDefault(),n.send({type:F.OpenMenu,focus:{focus:A.Nothing},trigger:tt.Pointer})))}),{isFocusVisible:te,focusProps:ne}=C({autoFocus:o}),{isHovered:re,hoverProps:ie}=Me({isDisabled:a}),{pressed:S,pressProps:oe}=w({disabled:a}),se=De({open:g===P.Open,active:S||g===P.Open,disabled:a,hover:re,focus:te,autofocus:o}),ce=ae(f(),{ref:p,id:i,type:Ae(e,d.current),"aria-haspopup":`menu`,"aria-controls":y?.id,"aria-expanded":g===P.Open,disabled:a||void 0,autoFocus:o,onKeyDown:m,onKeyUp:h},ee,ne,ie,oe);return E()({ourProps:ce,theirProps:c,slot:se,defaultTag:ut,name:`Menu.Button`})}var ft=`div`,pt=Ce.RenderStrategy|Ce.Static;function mt(e,t){let n=k(),{id:r=`headlessui-menu-items-${n}`,anchor:i,portal:a=!1,modal:o=!0,transition:s=!1,...d}=e,f=fe(i),h=ot(`Menu.Items`),[_,v]=xe(f),y=be(),[b,te]=Xe(null),ne=x(t,f?_:null,T(e=>h.send({type:F.SetItemsElement,element:e})),te),[S,C]=l(h,e=>[e.menuState,e.buttonElement]),se=ke(C),ce=ke(b);f&&(a=!0);let le=Ee(),[w,ue]=re(s,b,le===null?S===P.Open:(le&ye.Open)===ye.Open);g(w,C,()=>{h.send({type:F.CloseMenu})});let de=l(h,e=>e.__demoMode);oe(de?!1:o&&S===P.Open,ce),c(de?!1:o&&S===P.Open,{allowed:N(()=>[C,b],[C,b])});let pe=l(h,h.selectors.didButtonMove)?!1:w;qe(()=>{let e=b;e&&S===P.Open&&(ie(e)||e.focus({preventScroll:!0}))},[S,b]),Pe(S===P.Open,{container:b,accept(e){return e.getAttribute(`role`)===`menuitem`?NodeFilter.FILTER_REJECT:e.hasAttribute(`role`)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute(`role`,`none`)}});let me=he(),ve=T(e=>{var t,n;switch(me.dispose(),e.key){case u.Space:if(h.state.searchQuery!==``)return e.preventDefault(),e.stopPropagation(),h.send({type:F.Search,value:e.key});case u.Enter:if(e.preventDefault(),e.stopPropagation(),h.state.activeItemIndex!==null){let{dataRef:e}=h.state.items[h.state.activeItemIndex];(t=e.current?.domRef.current)==null||t.click()}h.send({type:F.CloseMenu}),_e(h.state.buttonElement);break;case u.ArrowDown:return e.preventDefault(),e.stopPropagation(),h.send({type:F.GoToItem,focus:A.Next});case u.ArrowUp:return e.preventDefault(),e.stopPropagation(),h.send({type:F.GoToItem,focus:A.Previous});case u.Home:case u.PageUp:return e.preventDefault(),e.stopPropagation(),h.send({type:F.GoToItem,focus:A.First});case u.End:case u.PageDown:return e.preventDefault(),e.stopPropagation(),h.send({type:F.GoToItem,focus:A.Last});case u.Escape:e.preventDefault(),e.stopPropagation(),Ze(()=>h.send({type:F.CloseMenu})),(n=h.state.buttonElement)==null||n.focus({preventScroll:!0});break;case u.Tab:e.preventDefault(),e.stopPropagation(),Ze(()=>h.send({type:F.CloseMenu})),p(h.state.buttonElement,e.shiftKey?m.Previous:m.Next);break;default:e.key.length===1&&(h.send({type:F.Search,value:e.key}),me.setTimeout(()=>h.send({type:F.ClearSearch}),350));break}}),D=T(e=>{switch(e.key){case u.Space:e.preventDefault();break}}),O=De({open:S===P.Open}),j=ae(f?y():{},{"aria-activedescendant":l(h,h.selectors.activeDescendantId),"aria-labelledby":l(h,e=>e.buttonElement?.id),id:r,onKeyDown:ve,onKeyUp:D,role:`menu`,tabIndex:S===P.Open?0:void 0,ref:ne,style:{...d.style,...v,"--button-width":ee(w,C,!0).width},...Oe(ue)}),Se=E();return M.createElement(ge,{enabled:a?e.static||w:!1,ownerDocument:se},Se({ourProps:j,theirProps:d,slot:O,defaultTag:ft,features:pt,visible:pe,name:`Menu.Items`}))}var ht=He;function gt(e,t){let n=k(),{id:r=`headlessui-menu-item-${n}`,disabled:i=!1,...a}=e,o=ot(`Menu.Item`),s=l(o,e=>o.selectors.isActive(e,r)),c=Ye(null),u=x(t,c),f=l(o,e=>o.selectors.shouldScrollIntoView(e,r));D(()=>{if(f)return pe().requestAnimationFrame(()=>{var e,t;(t=(e=c.current)?.scrollIntoView)==null||t.call(e,{block:`nearest`})})},[f,c]);let p=Be(c),m=Ye({disabled:i,domRef:c,get textValue(){return p()}});D(()=>{m.current.disabled=i},[m,i]),D(()=>(o.actions.registerItem(r,m),()=>o.actions.unregisterItem(r)),[m,r]);let h=T(()=>{o.send({type:F.CloseMenu})}),g=T(e=>{if(i)return e.preventDefault();o.send({type:F.CloseMenu}),_e(o.state.buttonElement)}),_=T(()=>{if(i)return o.send({type:F.GoToItem,focus:A.Nothing});o.send({type:F.GoToItem,focus:A.Specific,id:r})}),v=je(),y=T(e=>v.update(e)),ee=T(e=>{v.wasMoved(e)&&(i||s||o.send({type:F.GoToItem,focus:A.Specific,id:r,trigger:tt.Pointer}))}),b=T(e=>{v.wasMoved(e)&&(i||s&&o.state.activationTrigger===tt.Pointer&&o.send({type:F.GoToItem,focus:A.Nothing}))}),[te,re]=d(),[ie,S]=ne(),ae=De({active:s,focus:s,disabled:i,close:h}),oe={id:r,ref:u,role:`menuitem`,tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-labelledby":te,"aria-describedby":ie,disabled:void 0,onClick:g,onFocus:_,onPointerEnter:y,onMouseEnter:y,onPointerMove:ee,onMouseMove:ee,onPointerLeave:b,onMouseLeave:b},C=E();return M.createElement(re,null,M.createElement(S,null,C({ourProps:oe,theirProps:a,slot:ae,defaultTag:ht,name:`Menu.Item`})))}var _t=`div`;function vt(e,t){let[n,r]=d(),i=e,a={ref:t,"aria-labelledby":n,role:`group`},o=E();return M.createElement(r,null,o({ourProps:a,theirProps:i,slot:{},defaultTag:_t,name:`Menu.Section`}))}var yt=`header`;function bt(e,t){let n=k(),{id:r=`headlessui-menu-heading-${n}`,...i}=e,a=te();D(()=>a.register(r),[r,a.register]);let o={id:r,ref:t,role:`presentation`,...a.props};return E()({ourProps:o,theirProps:i,slot:{},defaultTag:yt,name:`Menu.Heading`})}var xt=`div`;function St(e,t){let n=e,r={ref:t,role:`separator`};return E()({ourProps:r,theirProps:n,slot:{},defaultTag:xt,name:`Menu.Separator`})}var Ct=j(lt),wt=j(dt),Tt=j(mt),Et=j(gt),Dt=j(vt),Ot=j(bt),kt=j(St),At=Object.assign(Ct,{Button:wt,Items:Tt,Item:Et,Section:Dt,Heading:Ot,Separator:kt}),I=e(),jt=`
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`,Mt=`
  jn:cursor-not-allowed
  jn:opacity-50
`,Nt=`
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`,Pt=`
  jn:text-base
  jn:text-theme-default
  jn:flex
  jn:w-full
  jn:items-center
  jn:whitespace-nowrap
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,Ft=`
  jn:text-base
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,It=`
  jn:text-sm
  jn:p-2
`,Lt=`
  jn:hover:bg-theme-background-lvl-3
  jn:cursor-pointer
`,Rt=`
  jn:cursor-not-allowed
  jn:opacity-50
  jn:bg-theme-background-lvl-1
`,zt=`
  jn:inline-block
  jn:mr-2
`,Bt=`
  jn:border-b
  jn:border-theme-background-lvl-3
  jn:last:border-b-0
`,Vt=`
  jn:text-theme-light
  jn:text-xs
  jn:p-2
  jn:cursor-default
`,Ht=`
  jn:h-
  jn:bg-theme-background-lvl-3
`,Ut=`
  jn:inline-flex
`,Wt=We(null),Gt=()=>{let e=Ke(Wt);if(!e)throw Error(`The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.`);return e},Kt=({children:e,className:t=``,disabled:i=!1,icon:a=`moreVert`,menuSize:o=`normal`,onClose:s,onOpen:c,...l})=>{let[u,d]=Xe(!1),f=Ye(u),{refs:p,floatingStyles:m,update:h}=Re({placement:`bottom-start`,middleware:[Fe(4),ze(),Ie({padding:8})],whileElementsMounted:Le});qe(()=>{u!==f.current&&(u?c?.():s?.()),f.current=u},[u,c,s]);let g=Ve.toArray(e),_=g.some(e=>Ge(e)&&e.type===L),v=g.find(e=>Ge(e)&&e.type===R);return(0,I.jsx)(At,{as:`div`,className:`juno-popupmenu ${t}`,...l,children:({open:e,close:t})=>(qe(()=>{e!==u&&(d(e),e&&h())},[e]),(0,I.jsxs)(Wt.Provider,{value:{isOpen:u,close:t,menuSize:o},children:[(0,I.jsxs)(`div`,{ref:p.setReference,className:`juno-popupmenu-float-reference-wrapper ${Ut}`,children:[!_&&(0,I.jsx)(L,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${i?Mt:jt}`,disabled:i,children:(0,I.jsx)(n,{icon:a})}),g.map((e,t)=>Ge(e)&&e.type===L?Ue(e,{key:t}):null)]}),u&&(0,I.jsx)(r.Portal,{children:(0,I.jsx)(`div`,{ref:p.setFloating,style:m,className:`juno-popupmenu-float-content-wrapper`,children:v})})]}))})},L=({as:e=`button`,disabled:t=!1,children:n,className:r=``,...i})=>(0,I.jsx)(wt,{as:e,className:`juno-popupmenu-toggle ${t&&Mt} ${r}`,disabled:t,...i,children:n}),R=({children:e,className:t=``,...n})=>{let{menuSize:r}=Gt();return(0,I.jsx)(Tt,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${r} ${Nt} ${t}`,...n,children:e})},z=({as:e=`div`,children:t,className:r=``,disabled:i=!1,href:a,icon:o,label:s=``,rel:c,target:l,...u})=>{let{menuSize:d}=Gt();return(0,I.jsx)(Et,{as:e,disabled:i,className:`juno-popupmenu-item ${Pt} ${i?Rt:Lt} ${d===`small`?It:Ft} ${r}`,...e===`a`?{href:a,rel:c,target:l}:{},...u,children:e=>(0,I.jsxs)(I.Fragment,{children:[o&&(0,I.jsx)(n,{icon:o,size:`18`,className:`juno-popupmenu-item-icon ${zt}`}),s&&typeof s==`string`?s:typeof t==`function`?t(e):t]})})},B=({children:e,className:t=``,...n})=>(0,I.jsx)(`section`,{className:`juno-popupmenu-section ${Bt} ${t}`,...n,children:e}),qt=({children:e,label:t=``,className:n=``,...r})=>(0,I.jsx)(`header`,{className:`juno-popupmenu-section-title ${Vt} ${n}`,...r,children:(0,I.jsx)(`h1`,{children:t&&t.length?t:e})}),Jt=({className:e=``,...t})=>(0,I.jsx)(`div`,{className:`juno-popupmenu-section-divider ${Ht} ${e}`,...t});try{L.displayName=`PopupMenuToggle`,L.__docgenInfo={description:``,displayName:`PopupMenuToggle`,props:{as:{defaultValue:{value:`div`},description:`Element type to render as`,name:`as`,required:!1,type:{name:`ElementType`}},disabled:{defaultValue:{value:`false`},description:`Whether the toggle is disabled`,name:`disabled`,required:!1,type:{name:`boolean`}}}}}catch{}try{R.displayName=`PopupMenuOptions`,R.__docgenInfo={description:``,displayName:`PopupMenuOptions`,props:{as:{defaultValue:{value:`div`},description:``,name:`as`,required:!1,type:{name:`ElementType`}},className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}},key:{defaultValue:null,description:``,name:`key`,required:!1,type:{name:`Key`}}}}}catch{}try{z.displayName=`PopupMenuItem`,z.__docgenInfo={description:``,displayName:`PopupMenuItem`,props:{as:{defaultValue:{value:`div`},description:``,name:`as`,required:!1,type:{name:`ElementType`}},className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:``,name:`disabled`,required:!1,type:{name:`boolean`}},href:{defaultValue:null,description:``,name:`href`,required:!1,type:{name:`string`}},icon:{defaultValue:{value:`moreVert`},description:``,name:`icon`,required:!1,type:{name:`enum`,value:[{value:`"search"`},{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"upload"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},label:{defaultValue:{value:``},description:``,name:`label`,required:!1,type:{name:`string`}},rel:{defaultValue:null,description:``,name:`rel`,required:!1,type:{name:`string`}},target:{defaultValue:null,description:``,name:`target`,required:!1,type:{name:`string`}}}}}catch{}try{B.displayName=`PopupMenuSection`,B.__docgenInfo={description:``,displayName:`PopupMenuSection`,props:{className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}}}}}catch{}try{qt.displayName=`PopupMenuSectionHeading`,qt.__docgenInfo={description:``,displayName:`PopupMenuSectionHeading`,props:{className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}},label:{defaultValue:{value:``},description:``,name:`label`,required:!1,type:{name:`string`}}}}}catch{}try{Jt.displayName=`PopupMenuSectionSeparator`,Jt.__docgenInfo={description:``,displayName:`PopupMenuSectionSeparator`,props:{className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}}}}}catch{}try{Kt.displayName=`PopupMenu`,Kt.__docgenInfo={description:`A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.`,displayName:`PopupMenu`,props:{disabled:{defaultValue:{value:`false`},description:`Whether the PopupMenu is disabled.`,name:`disabled`,required:!1,type:{name:`boolean`}},icon:{defaultValue:{value:`moreVert`},description:`The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.`,name:`icon`,required:!1,type:{name:`enum`,value:[{value:`"search"`},{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"upload"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},menuSize:{defaultValue:{value:`normal`},description:`The size of the menu and its items.`,name:`menuSize`,required:!1,type:{name:`enum`,value:[{value:`"small"`},{value:`"normal"`}]}},onClose:{defaultValue:null,description:`Handler to run when the Menu closes.`,name:`onClose`,required:!1,type:{name:`(() => void)`}},onOpen:{defaultValue:null,description:`Handler to run when the Menu opens.`,name:`onOpen`,required:!1,type:{name:`(() => void)`}}}}}catch{}var{fn:V}=__STORYBOOK_MODULE_TEST__,Yt={title:`WiP/PopupMenu`,component:Kt,subcomponents:{PopupMenuToggle:L,PopupMenuOptions:R,PopupMenuItem:z,PopupMenuSection:B},argTypes:{children:{control:!1},icon:{options:[`moreVert`,...Object.keys(t)],control:{type:`select`}}},decorators:[e=>(0,I.jsx)(r,{children:(0,I.jsx)(e,{})})]},Xt=M.forwardRef(({className:e=``,onClick:t=void 0,...n},r)=>(0,I.jsx)(i,{ref:r,className:`my-custom-toggle ${e}`,onClick:t,...n,children:`Custom Toggle`}));Xt.displayName=`ToggleButton`;var Zt=M.forwardRef((e,t)=>{let{isOpen:n}=Gt(),{className:r,...a}=e;return(0,I.jsx)(i,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:`toggle-button-closed`} ${r||``}`,...a,children:e.children||`Toggle Me!`})});Zt.displayName=`StyledToggleButton`;var Qt=e=>{let{close:t}=Gt();return(0,I.jsx)(i,{onClick:t,...e})},H={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsx)(R,{children:(0,I.jsx)(`p`,{children:`Menu goes here.`})})}},U={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:V(),onClose:V()}},W={parameters:{args:{description:{story:`Disable the default toggle.`}}},args:{onOpen:V(),onClose:V(),disabled:!0}},G={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},K={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{as:`a`,href:`https://github.com/cloudoperators/juno`,label:`Go to Juno on Github`}),(0,I.jsx)(z,{as:`a`,href:`https://www.sap.com`,label:`Go to sap.com`,target:`_blank`,icon:`openInNew`})]})}},q={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsx)(`p`,{children:`Some content goes here.`}),(0,I.jsx)(Qt,{variant:`primary`,children:`Yay!`})]})}},J={parameters:{docs:{description:{story:`In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers.`}}},args:{onOpen:V(),onClose:V(),children:(0,I.jsxs)(R,{children:[(0,I.jsxs)(B,{children:[(0,I.jsx)(qt,{children:`Section 1`}),(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`})]}),(0,I.jsx)(Jt,{}),(0,I.jsxs)(B,{children:[(0,I.jsx)(qt,{label:`Section 2`}),(0,I.jsx)(z,{label:`Menu Item 3`}),(0,I.jsx)(z,{label:`Menu Item 4 Disabled`,disabled:!0})]})]})}},Y={parameters:{docs:{description:{story:`A default toggle can be rendered with a custom icon without having to pass a custom toggle element.`}}},args:{onOpen:V(),onClose:V(),icon:`warning`,children:(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},X={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{children:`The Toggle`},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},Z={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{as:Xt},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},Q={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{as:Zt},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},$={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:V(),onClose:V(),children:[(0,I.jsx)(L,{as:M.Fragment,children:(0,I.jsx)(Xt,{})},`t`),(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{label:`Menu Item 1`}),(0,I.jsx)(z,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(z,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};var $t=[`Default`,`NoMenu`,`DisabledDefaultToggle`,`WithMenuChild`,`WithChildrenAsLinks`,`WithMenuWithRandomContent`,`WithMenuChildWithSection`,`WithIcon`,`WithToggleAndMenuChildren`,`WithToggleAsButtonComponent`,`WithToggleAsButtonStyledByState`,`WithCustomButtonComponentAsChild`];export{H as Default,W as DisabledDefaultToggle,U as NoMenu,K as WithChildrenAsLinks,$ as WithCustomButtonComponentAsChild,Y as WithIcon,G as WithMenuChild,J as WithMenuChildWithSection,q as WithMenuWithRandomContent,X as WithToggleAndMenuChildren,Z as WithToggleAsButtonComponent,Q as WithToggleAsButtonStyledByState,$t as __namedExportsOrder,Yt as default};