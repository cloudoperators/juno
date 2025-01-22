import{j as h}from"./jsx-runtime-D6fbYt3N.js";import{r}from"./index-DysCNOs_.js";import{I as T}from"./Icon.component-B476qt6W.js";const S=r.createContext(void 0),_=({activeItem:i="",ariaLabel:v="",children:c,className:d="",disabled:g=!1,onActiveItemChange:o,...y})=>{const[j,l]=r.useState(""),[m,w]=r.useState(new Map),t=e=>{const a=["value","children","label"],n=Array.from(m.keys());if(n.includes(e))return e;{let s;for(const N of n){const u=m.get(N);a.forEach(f=>{u&&u[f]===e&&(s=u.id)})}return s}};r.useEffect(()=>{if(i){const e=t(i);l(e)}},[i]),r.useEffect(()=>{if(i){const e=t(i);l(e)}},[m]);const V=(e,a,n,s)=>{w(N=>new Map(N).set(e,{id:e,value:s,label:n,children:a,displayName:a||n||s}))},C=e=>{l(e),o&&o(e)};return h.jsx(S.Provider,{value:{activeItem:j,addItem:V,handleActiveItemChange:C,navigationDisabled:g},children:h.jsx("ul",{"aria-disabled":!!g,"aria-label":v&&v.length?v:"",className:`juno-navigation 
          ${g?"juno-navigation-disabled":""} 
          ${d}`,role:"navigation",...y,children:c})})};try{_.displayName="Navigation",_.__docgenInfo={description:"A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`.",displayName:"Navigation",props:{activeItem:{defaultValue:{value:""},description:"The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the navigation",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The child navigation items of the navigation",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:{value:""},description:"Pass a custom className to the navigation parent element",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled. Will disable all children.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes. Alias to `onChange`.",name:"onActiveItemChange",required:!1,type:{name:"ItemChangeHandler"}},onChange:{defaultValue:null,description:"Handler to execute when the active item changes.Alias to `onActiveItemChange`.",name:"onChange",required:!1,type:{name:"FormEventHandler<EventTarget>"}}}}}catch{}const x=`
  jn-flex
  jn-items-center
`,$=`
  jn-opacity-50
  jn-cursor-not-allowed
`,E=({active:i=!1,activeItemStyles:v="",ariaLabel:c="",children:d,className:g="",disabled:o=!1,icon:y=null,inactiveItemStyles:j="",label:l="",href:m="",onClick:w,value:t="",wrapperClassName:V="",...C})=>{const e=b=>!(typeof b=="string"&&b.trim().length===0),a=r.useContext(S),n=t||d||l,{activeItem:s,addItem:N,handleActiveItemChange:u,navigationDisabled:f,navigationRole:I}=a||{},k=()=>a!=null&&a.activeItem&&e(a==null?void 0:a.activeItem)?s===n:i,[p,q]=r.useState(()=>k());r.useEffect(()=>{N&&N(n,d,l,t)},[d,l,t]),r.useEffect(()=>{if(s){q(s===n);return}q(i)},[s,i]);const A=b=>{o?b.preventDefault():(!p&&u&&typeof u=="function"&&u(n),w&&w(b))};return h.jsx("li",{className:`juno-navigation-item-wrapper ${V}`,children:m&&m.length?h.jsxs("a",{"aria-disabled":f||o?!0:void 0,"aria-label":c&&c.length?c:void 0,"aria-selected":p?!0:void 0,className:`
            juno-navigation-item 
            ${x}
            ${I?"juno-"+I.toLowerCase()+"-item "+(p?"juno-"+I.toLowerCase()+"-item-active":""):""}
            ${p?"juno-navigation-item-active "+v:j}
            ${f||o?"juno-navigation-item-disabled "+$:""}
            ${g}`,"data-value":t&&t.length?t:null,href:m,onClick:A,...C,children:[y?h.jsx(T,{icon:y,size:"18",className:"jn-mr-2"}):"",d||l||t]}):h.jsxs("button",{"aria-disabled":f||o?!0:void 0,"aria-label":c&&c.length?c:void 0,"aria-selected":p?!0:void 0,className:`
            juno-navigation-item 
            ${x}
            ${I?"juno-"+I.toLowerCase()+"-item "+(p?"juno-"+I.toLowerCase()+"-item-active":""):""}
            ${p?"juno-navigation-item-active "+v:j}
            ${f||o?"juno-navigation-item-disabled "+$:""}
            ${g}`,"data-value":t&&t.length?t:null,disabled:f||o,onClick:A,...C,children:[y?h.jsx(T,{icon:y,size:"18",className:"jn-mr-2"}):"",d||l||t]})})};try{E.displayName="NavigationItem",E.__docgenInfo={description:"A generic Navigation Item component. For internal use only. Use to wrap more semantic, role-specific navigation item components such as `SidenavigationItem`, `TabNavigationItem` , `TopNavigationItem` around.",displayName:"NavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the navigation item is the currently active item. If an acitve item is set on the parent, the one on the parent will win.",name:"active",required:!1,type:{name:"boolean"}},activeItemStyles:{defaultValue:{value:""},description:"Styles to apply to the active item",name:"activeItemStyles",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria-label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass custom classNames to the item itself.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The child string of the item. Will override `label` when passed.",name:"children",required:!1,type:{name:"ItemKeyType"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"An icon to render in the item",name:"icon",required:!1,type:{name:'"accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | "cancel" | "check" | "checkCircle" | "chevronLeft" | "chevronRight" | ... 40 more ...'}},inactiveItemStyles:{defaultValue:{value:""},description:"",name:"inactiveItemStyles",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"The label of the item. Will be rendered if no children are passed",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The href of the item. The item will be rendered as an `<a>` element when passed, instead of a `<button>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Handler to execute when the item is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"The value of the item as a technical identifier. Use if needed to be different from the visble `label` or child string. Will only be rendered when no `label` prop and no children are passed.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the parent `<li>` element of the item.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}export{_ as N,E as a};
