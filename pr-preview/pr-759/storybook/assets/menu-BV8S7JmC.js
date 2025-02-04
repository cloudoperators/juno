import{r as p,e as L}from"./index-DysCNOs_.js";import{O as Q,U as $,y as D,b as V,a as v,s as j,u as K,d as T,C as k,I as _,p as q,c as G,q as H,e as J,l as C,g as W,h as z,T as X,j as d,i as g,r as Y,k as A,_ as Z,M as N,D as B,m as ee,n as te}from"./keyboard-BayCKsX5.js";import{s as re}from"./use-text-value-CqB0ebPQ.js";import{F as ne}from"./use-tree-walker-sKJwDSu4.js";var ae=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ae||{}),oe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(oe||{}),ue=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(ue||{});function F(e,i=o=>o){let o=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,n=te(i(e.items.slice()),s=>s.dataRef.current.domRef.current),a=o?n.indexOf(o):null;return a===-1&&(a=null),{items:n,activeItemIndex:a}}let ie={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,i)=>{var o;let n=F(e),a=ee(i,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:a,activationTrigger:(o=i.trigger)!=null?o:1}},3:(e,i)=>{let o=e.searchQuery!==""?0:1,n=e.searchQuery+i.value.toLowerCase(),a=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+o).concat(e.items.slice(0,e.activeItemIndex+o)):e.items).find(u=>{var t;return((t=u.dataRef.current.textValue)==null?void 0:t.startsWith(n))&&!u.dataRef.current.disabled}),s=a?e.items.indexOf(a):-1;return s===-1||s===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:s,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,i)=>{let o=F(e,n=>[...n,{id:i.id,dataRef:i.dataRef}]);return{...e,...o}},6:(e,i)=>{let o=F(e,n=>{let a=n.findIndex(s=>s.id===i.id);return a!==-1&&n.splice(a,1),n});return{...e,...o,activationTrigger:1}}},O=p.createContext(null);O.displayName="MenuContext";function E(e){let i=p.useContext(O);if(i===null){let o=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,E),o}return i}function se(e,i){return K(i.type,ie,e,i)}let le=p.Fragment;function ce(e,i){let{__demoMode:o=!1,...n}=e,a=p.useReducer(se,{__demoMode:o,menuState:o?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:s,itemsRef:u,buttonRef:t},l]=a,f=D(i);V([t,u],(R,h)=>{var c;l({type:1}),z(h,X.Loose)||(R.preventDefault(),(c=t.current)==null||c.focus())},s===0);let y=v(()=>{l({type:1})}),b=p.useMemo(()=>({open:s===0,close:y}),[s,y]),I={ref:f};return L.createElement(O.Provider,{value:a},L.createElement(j,{value:K(s,{0:T.Open,1:T.Closed})},k({ourProps:I,theirProps:n,slot:b,defaultTag:le,name:"Menu"})))}let de="button";function me(e,i){var o;let n=_(),{id:a=`headlessui-menu-button-${n}`,...s}=e,[u,t]=E("Menu.Button"),l=D(u.buttonRef,i),f=q(),y=v(c=>{switch(c.key){case d.Space:case d.Enter:case d.ArrowDown:c.preventDefault(),c.stopPropagation(),t({type:0}),f.nextFrame(()=>t({type:2,focus:g.First}));break;case d.ArrowUp:c.preventDefault(),c.stopPropagation(),t({type:0}),f.nextFrame(()=>t({type:2,focus:g.Last}));break}}),b=v(c=>{switch(c.key){case d.Space:c.preventDefault();break}}),I=v(c=>{if(Y(c.currentTarget))return c.preventDefault();e.disabled||(u.menuState===0?(t({type:1}),f.nextFrame(()=>{var x;return(x=u.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})})):(c.preventDefault(),t({type:0})))}),R=p.useMemo(()=>({open:u.menuState===0}),[u]),h={ref:l,id:a,type:G(e,u.buttonRef),"aria-haspopup":"menu","aria-controls":(o=u.itemsRef.current)==null?void 0:o.id,"aria-expanded":u.menuState===0,onKeyDown:y,onKeyUp:b,onClick:I};return k({ourProps:h,theirProps:s,slot:R,defaultTag:de,name:"Menu.Button"})}let pe="div",fe=Q.RenderStrategy|Q.Static;function ve(e,i){var o,n;let a=_(),{id:s=`headlessui-menu-items-${a}`,...u}=e,[t,l]=E("Menu.Items"),f=D(t.itemsRef,i),y=H(t.itemsRef),b=q(),I=J(),R=I!==null?(I&T.Open)===T.Open:t.menuState===0;p.useEffect(()=>{let r=t.itemsRef.current;r&&t.menuState===0&&r!==(y==null?void 0:y.activeElement)&&r.focus({preventScroll:!0})},[t.menuState,t.itemsRef,y]),ne({container:t.itemsRef.current,enabled:t.menuState===0,accept(r){return r.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});let h=v(r=>{var S,P;switch(b.dispose(),r.key){case d.Space:if(t.searchQuery!=="")return r.preventDefault(),r.stopPropagation(),l({type:3,value:r.key});case d.Enter:if(r.preventDefault(),r.stopPropagation(),l({type:1}),t.activeItemIndex!==null){let{dataRef:m}=t.items[t.activeItemIndex];(P=(S=m.current)==null?void 0:S.domRef.current)==null||P.click()}B(t.buttonRef.current);break;case d.ArrowDown:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.Next});case d.ArrowUp:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.Previous});case d.Home:case d.PageUp:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.First});case d.End:case d.PageDown:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.Last});case d.Escape:r.preventDefault(),r.stopPropagation(),l({type:1}),A().nextFrame(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})});break;case d.Tab:r.preventDefault(),r.stopPropagation(),l({type:1}),A().nextFrame(()=>{Z(t.buttonRef.current,r.shiftKey?N.Previous:N.Next)});break;default:r.key.length===1&&(l({type:3,value:r.key}),b.setTimeout(()=>l({type:4}),350));break}}),c=v(r=>{switch(r.key){case d.Space:r.preventDefault();break}}),x=p.useMemo(()=>({open:t.menuState===0}),[t]),M={"aria-activedescendant":t.activeItemIndex===null||(o=t.items[t.activeItemIndex])==null?void 0:o.id,"aria-labelledby":(n=t.buttonRef.current)==null?void 0:n.id,id:s,onKeyDown:h,onKeyUp:c,role:"menu",tabIndex:0,ref:f};return k({ourProps:M,theirProps:u,slot:x,defaultTag:pe,features:fe,visible:R,name:"Menu.Items"})}let Ie=p.Fragment;function ye(e,i){let o=_(),{id:n=`headlessui-menu-item-${o}`,disabled:a=!1,...s}=e,[u,t]=E("Menu.Item"),l=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===n:!1,f=p.useRef(null),y=D(i,f);C(()=>{if(u.__demoMode||u.menuState!==0||!l||u.activationTrigger===0)return;let m=A();return m.requestAnimationFrame(()=>{var w,U;(U=(w=f.current)==null?void 0:w.scrollIntoView)==null||U.call(w,{block:"nearest"})}),m.dispose},[u.__demoMode,f,l,u.menuState,u.activationTrigger,u.activeItemIndex]);let b=re(f),I=p.useRef({disabled:a,domRef:f,get textValue(){return b()}});C(()=>{I.current.disabled=a},[I,a]),C(()=>(t({type:5,id:n,dataRef:I}),()=>t({type:6,id:n})),[I,n]);let R=v(()=>{t({type:1})}),h=v(m=>{if(a)return m.preventDefault();t({type:1}),B(u.buttonRef.current)}),c=v(()=>{if(a)return t({type:2,focus:g.Nothing});t({type:2,focus:g.Specific,id:n})}),x=W(),M=v(m=>x.update(m)),r=v(m=>{x.wasMoved(m)&&(a||l||t({type:2,focus:g.Specific,id:n,trigger:0}))}),S=v(m=>{x.wasMoved(m)&&(a||l&&t({type:2,focus:g.Nothing}))}),P=p.useMemo(()=>({active:l,disabled:a,close:R}),[l,a,R]);return k({ourProps:{id:n,ref:y,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,disabled:void 0,onClick:h,onFocus:c,onPointerEnter:M,onMouseEnter:M,onPointerMove:r,onMouseMove:r,onPointerLeave:S,onMouseLeave:S},theirProps:s,slot:P,defaultTag:Ie,name:"Menu.Item"})}let ge=$(ce),be=$(me),Re=$(ve),xe=$(ye),Te=Object.assign(ge,{Button:be,Items:Re,Item:xe});export{Te as q};
