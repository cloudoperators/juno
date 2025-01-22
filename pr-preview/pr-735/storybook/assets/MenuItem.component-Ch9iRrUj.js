import{j as R}from"./jsx-runtime-D6fbYt3N.js";import{r as v,e as q}from"./index-DysCNOs_.js";import{O as V,U as $,y as k,b as J,a as y,s as z,u as B,d as P,C as T,I as A,p as K,c as X,q as Y,e as Z,l as E,g as ee,h as te,T as ae,j as m,i as I,r as ne,k as D,_ as re,M as L,D as W,m as le,n as oe}from"./keyboard-BayCKsX5.js";import{s as ue}from"./use-text-value-CqB0ebPQ.js";import{F as se}from"./use-tree-walker-sKJwDSu4.js";import{I as ie}from"./Icon.component-57XAkwRW.js";var ce=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ce||{}),de=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(de||{}),me=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(me||{});function N(e,u=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,a=oe(u(e.items.slice()),i=>i.dataRef.current.domRef.current),l=n?a.indexOf(n):null;return l===-1&&(l=null),{items:a,activeItemIndex:l}}let ve={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,u)=>{var n;let a=N(e),l=le(u,{resolveItems:()=>a.items,resolveActiveIndex:()=>a.activeItemIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return{...e,...a,searchQuery:"",activeItemIndex:l,activationTrigger:(n=u.trigger)!=null?n:1}},3:(e,u)=>{let n=e.searchQuery!==""?0:1,a=e.searchQuery+u.value.toLowerCase(),l=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(o=>{var t;return((t=o.dataRef.current.textValue)==null?void 0:t.startsWith(a))&&!o.dataRef.current.disabled}),i=l?e.items.indexOf(l):-1;return i===-1||i===e.activeItemIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeItemIndex:i,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,u)=>{let n=N(e,a=>[...a,{id:u.id,dataRef:u.dataRef}]);return{...e,...n}},6:(e,u)=>{let n=N(e,a=>{let l=a.findIndex(i=>i.id===u.id);return l!==-1&&a.splice(l,1),a});return{...e,...n,activationTrigger:1}}},F=v.createContext(null);F.displayName="MenuContext";function C(e){let u=v.useContext(F);if(u===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,C),n}return u}function pe(e,u){return B(u.type,ve,e,u)}let fe=v.Fragment;function he(e,u){let{__demoMode:n=!1,...a}=e,l=v.useReducer(pe,{__demoMode:n,menuState:n?0:1,buttonRef:v.createRef(),itemsRef:v.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:o,buttonRef:t},s]=l,p=k(u);J([t,o],(b,M)=>{var c;s({type:1}),te(M,ae.Loose)||(b.preventDefault(),(c=t.current)==null||c.focus())},i===0);let d=y(()=>{s({type:1})}),g=v.useMemo(()=>({open:i===0,close:d}),[i,d]),h={ref:p};return q.createElement(F.Provider,{value:l},q.createElement(z,{value:B(i,{0:P.Open,1:P.Closed})},T({ourProps:h,theirProps:a,slot:g,defaultTag:fe,name:"Menu"})))}let ye="button";function ge(e,u){var n;let a=A(),{id:l=`headlessui-menu-button-${a}`,...i}=e,[o,t]=C("Menu.Button"),s=k(o.buttonRef,u),p=K(),d=y(c=>{switch(c.key){case m.Space:case m.Enter:case m.ArrowDown:c.preventDefault(),c.stopPropagation(),t({type:0}),p.nextFrame(()=>t({type:2,focus:I.First}));break;case m.ArrowUp:c.preventDefault(),c.stopPropagation(),t({type:0}),p.nextFrame(()=>t({type:2,focus:I.Last}));break}}),g=y(c=>{switch(c.key){case m.Space:c.preventDefault();break}}),h=y(c=>{if(ne(c.currentTarget))return c.preventDefault();e.disabled||(o.menuState===0?(t({type:1}),p.nextFrame(()=>{var x;return(x=o.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})})):(c.preventDefault(),t({type:0})))}),b=v.useMemo(()=>({open:o.menuState===0}),[o]),M={ref:s,id:l,type:X(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":(n=o.itemsRef.current)==null?void 0:n.id,"aria-expanded":o.menuState===0,onKeyDown:d,onKeyUp:g,onClick:h};return T({ourProps:M,theirProps:i,slot:b,defaultTag:ye,name:"Menu.Button"})}let Ie="div",be=V.RenderStrategy|V.Static;function xe(e,u){var n,a;let l=A(),{id:i=`headlessui-menu-items-${l}`,...o}=e,[t,s]=C("Menu.Items"),p=k(t.itemsRef,u),d=Y(t.itemsRef),g=K(),h=Z(),b=h!==null?(h&P.Open)===P.Open:t.menuState===0;v.useEffect(()=>{let r=t.itemsRef.current;r&&t.menuState===0&&r!==(d==null?void 0:d.activeElement)&&r.focus({preventScroll:!0})},[t.menuState,t.itemsRef,d]),se({container:t.itemsRef.current,enabled:t.menuState===0,accept(r){return r.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});let M=y(r=>{var S,w;switch(g.dispose(),r.key){case m.Space:if(t.searchQuery!=="")return r.preventDefault(),r.stopPropagation(),s({type:3,value:r.key});case m.Enter:if(r.preventDefault(),r.stopPropagation(),s({type:1}),t.activeItemIndex!==null){let{dataRef:f}=t.items[t.activeItemIndex];(w=(S=f.current)==null?void 0:S.domRef.current)==null||w.click()}W(t.buttonRef.current);break;case m.ArrowDown:return r.preventDefault(),r.stopPropagation(),s({type:2,focus:I.Next});case m.ArrowUp:return r.preventDefault(),r.stopPropagation(),s({type:2,focus:I.Previous});case m.Home:case m.PageUp:return r.preventDefault(),r.stopPropagation(),s({type:2,focus:I.First});case m.End:case m.PageDown:return r.preventDefault(),r.stopPropagation(),s({type:2,focus:I.Last});case m.Escape:r.preventDefault(),r.stopPropagation(),s({type:1}),D().nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})});break;case m.Tab:r.preventDefault(),r.stopPropagation(),s({type:1}),D().nextFrame(()=>{re(t.buttonRef.current,r.shiftKey?L.Previous:L.Next)});break;default:r.key.length===1&&(s({type:3,value:r.key}),g.setTimeout(()=>s({type:4}),350));break}}),c=y(r=>{switch(r.key){case m.Space:r.preventDefault();break}}),x=v.useMemo(()=>({open:t.menuState===0}),[t]),j={"aria-activedescendant":t.activeItemIndex===null||(n=t.items[t.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(a=t.buttonRef.current)==null?void 0:a.id,id:i,onKeyDown:M,onKeyUp:c,role:"menu",tabIndex:0,ref:p};return T({ourProps:j,theirProps:o,slot:x,defaultTag:Ie,features:be,visible:b,name:"Menu.Items"})}let Me=v.Fragment;function Re(e,u){let n=A(),{id:a=`headlessui-menu-item-${n}`,disabled:l=!1,...i}=e,[o,t]=C("Menu.Item"),s=o.activeItemIndex!==null?o.items[o.activeItemIndex].id===a:!1,p=v.useRef(null),d=k(u,p);E(()=>{if(o.__demoMode||o.menuState!==0||!s||o.activationTrigger===0)return;let f=D();return f.requestAnimationFrame(()=>{var _,O;(O=(_=p.current)==null?void 0:_.scrollIntoView)==null||O.call(_,{block:"nearest"})}),f.dispose},[o.__demoMode,p,s,o.menuState,o.activationTrigger,o.activeItemIndex]);let g=ue(p),h=v.useRef({disabled:l,domRef:p,get textValue(){return g()}});E(()=>{h.current.disabled=l},[h,l]),E(()=>(t({type:5,id:a,dataRef:h}),()=>t({type:6,id:a})),[h,a]);let b=y(()=>{t({type:1})}),M=y(f=>{if(l)return f.preventDefault();t({type:1}),W(o.buttonRef.current)}),c=y(()=>{if(l)return t({type:2,focus:I.Nothing});t({type:2,focus:I.Specific,id:a})}),x=ee(),j=y(f=>x.update(f)),r=y(f=>{x.wasMoved(f)&&(l||s||t({type:2,focus:I.Specific,id:a,trigger:0}))}),S=y(f=>{x.wasMoved(f)&&(l||s&&t({type:2,focus:I.Nothing}))}),w=v.useMemo(()=>({active:s,disabled:l,close:b}),[s,l,b]);return T({ourProps:{id:a,ref:d,role:"menuitem",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,disabled:void 0,onClick:M,onFocus:c,onPointerEnter:j,onMouseEnter:j,onPointerMove:r,onMouseMove:r,onPointerLeave:S,onMouseLeave:S},theirProps:i,slot:w,defaultTag:Me,name:"Menu.Item"})}let Se=$(he),je=$(ge),we=$(xe),Pe=$(Re),H=Object.assign(Se,{Button:je,Items:we,Item:Pe});const $e=`
	jn-overflow-hidden
	jn-flex
	jn-flex-col
	jn-rounded
	jn-bg-theme-background-lvl-1
`,ke=`
	jn-text-sm
`,Te=`
	jn-text-base
`,G=v.createContext(void 0),U=({children:e,variant:u="normal",className:n="",...a})=>R.jsx(G.Provider,{value:{variant:u},children:R.jsx(H,{children:R.jsx("div",{className:`
					juno-menu 
					juno-menu-${u} 
					${$e} 
					${u==="small"?ke:Te} 
					${n}
				`,role:"menu",...a,children:e})})});try{U.displayName="Menu",U.__docgenInfo={description:"A generic menu component",displayName:"Menu",props:{children:{defaultValue:null,description:"The children to render in the MenuSection",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"normal"},description:"Whether the Menu will be in normal or small variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},className:{defaultValue:{value:""},description:"Pass a custom className to the menu",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ce=`
   jn-text-theme-default
   jn-flex
   jn-items-center
   jn-w-full
   bg-clip-padding
   jn-truncate
   jn-text-left
   jn-bg-theme-background-lvl-1
   disabled:jn-cursor-not-allowed
   data-[headlessui-state="disabled"]:jn-cursor-not-allowed
 `,_e=`
   jn-text-sm
   jn-p-2
 `,Ee=`
   jn-text-base
   jn-pt-[0.6875rem]
   jn-pb-[0.5rem]
   jn-px-[0.875rem]
 `,Ne=`
   hover:jn-bg-theme-background-lvl-3
   cursor-pointer
   data-[headlessui-state="disabled"]:jn-bg-theme-background-lvl-3
 `,Q=({children:e,className:u="",disabled:n=!1,href:a="",icon:l=null,label:i="",onClick:o=void 0,...t})=>{const s=v.useContext(G),p=(s==null?void 0:s.variant)??"normal",d=a?"a":e?"div":o?"button":"div",g=h=>{o&&o(h)};return R.jsx(H.Item,{as:d,...a&&!n&&d==="a"?{href:a}:{},onClick:o&&d==="button"&&!n?g:void 0,disabled:n,className:`
         juno-menu-item
         juno-menu-item-${d}
         ${Ce} 
         ${d!=="div"?Ne:""}
         ${p==="small"?_e:Ee}
         ${n?"jn-cursor-not-allowed":""}
         ${u}
       `,...t,children:R.jsxs("span",{className:`${n?"jn-opacity-50":""}`,children:[l&&R.jsx(ie,{icon:l,size:"18",className:"jn-inline-block jn-mr-2"}),e||i]})})};try{Q.displayName="MenuItem",Q.__docgenInfo={description:"A menu item to be used inside Menu.\nCan render `<a>`, `<button>`, or `<div>` based on props.",displayName:"MenuItem",props:{children:{defaultValue:null,description:"Children of the menu item",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className to the menu item",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the menu item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the menu item. Will take precedence over children passed to the component.",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"Pass an href to the menu item. Will result in the menu item being rendered as an `<a>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"undefined"},description:"Pass an onClick handler to the menu item. Will result in the menu item being rendered as a `<button>`.",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}export{U as M,Q as a,H as q};
