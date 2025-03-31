import{j as h}from"./jsx-runtime-BP6H2k8O.js";import{r as u}from"./index-DysCNOs_.js";import{I as x}from"./Icon.component-D9enpJBw.js";const E=u.createContext(void 0),A=({activeItem:i="",ariaLabel:g="",children:c,className:m="",disabled:y=!1,onActiveItemChange:l,...N})=>{const[j,o]=u.useState(""),[v,w]=u.useState(new Map),e=t=>{const a=String(t),s=["value","children","label"],n=Array.from(v.keys());if(n.includes(a))return a;{let f;for(const I of n){const r=v.get(I);s.forEach(d=>{r&&r[d]===a&&(f=r.id)})}return f}};u.useEffect(()=>{if(i){const t=e(String(i));o(t)}},[i]),u.useEffect(()=>{if(i){const t=e(String(i));o(t)}},[v]);const q=(t,a,s,n)=>{w(f=>new Map(f).set(t,{id:t,value:n,label:s,children:a,displayName:a||s||n}))},V=t=>{o(t),l&&l(t)};return h.jsx(E.Provider,{value:{activeItem:j,addItem:q,handleActiveItemChange:V,navigationDisabled:y},children:h.jsx("ul",{"aria-disabled":!!y,"aria-label":g&&g.length?g:"",className:`juno-navigation 
          ${y?"juno-navigation-disabled":""} 
          ${m}`,role:"navigation",...N,children:c})})};try{A.displayName="Navigation",A.__docgenInfo={description:"A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`.",displayName:"Navigation",props:{activeItem:{defaultValue:{value:""},description:"The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.",name:"activeItem",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the navigation",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The child navigation items of the navigation",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className to the navigation parent element",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled. Will disable all children.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes.",name:"onActiveItemChange",required:!1,type:{name:"ItemChangeHandler"}}}}}catch{}const S=`
  jn-flex
  jn-items-center
`,_=`
  jn-opacity-50
  jn-cursor-not-allowed
`,$=({active:i=!1,activeItemStyles:g="",ariaLabel:c="",children:m,className:y="",disabled:l=!1,icon:N,inactiveItemStyles:j="",label:o="",href:v="",onClick:w,value:e="",wrapperClassName:q="",...V})=>{const t=b=>!(typeof b=="string"&&b.trim().length===0),a=u.useContext(E),s=e||m||o,{activeItem:n,addItem:f,handleActiveItemChange:I,navigationDisabled:r,navigationRole:d}=a||{},k=()=>a!=null&&a.activeItem&&t(a==null?void 0:a.activeItem)?n===s:i,[p,C]=u.useState(()=>k());u.useEffect(()=>{f&&f(s,m,o,e)},[m,o,e]),u.useEffect(()=>{if(n){C(n===s);return}C(i)},[n,i]);const T=b=>{l?b.preventDefault():(!p&&I&&typeof I=="function"&&I(s),w&&w(b))};return h.jsx("li",{className:`juno-navigation-item-wrapper ${q}`,children:v&&v.length?h.jsxs("a",{"aria-disabled":r||l?!0:void 0,"aria-label":c&&c.length?c:void 0,"aria-selected":p?!0:void 0,className:`
            juno-navigation-item 
            ${S}
            ${d?"juno-"+d.toLowerCase()+"-item "+(p?"juno-"+d.toLowerCase()+"-item-active":""):""}
            ${p?"juno-navigation-item-active "+g:j}
            ${r||l?"juno-navigation-item-disabled "+_:""}
            ${y}`,"data-value":e&&e.length?e:null,href:v,onClick:T,...V,children:[N?h.jsx(x,{icon:N,size:"18",className:"jn-mr-2"}):"",m||o||e]}):h.jsxs("button",{"aria-disabled":r||l?!0:void 0,"aria-label":c&&c.length?c:void 0,"aria-selected":p?!0:void 0,className:`
            juno-navigation-item 
            ${S}
            ${d?"juno-"+d.toLowerCase()+"-item "+(p?"juno-"+d.toLowerCase()+"-item-active":""):""}
            ${p?"juno-navigation-item-active "+g:j}
            ${r||l?"juno-navigation-item-disabled "+_:""}
            ${y}`,"data-value":e&&e.length?e:null,disabled:r||l,onClick:T,...V,children:[N?h.jsx(x,{icon:N,size:"18",className:"jn-mr-2"}):"",m||o||e]})})};try{$.displayName="NavigationItem",$.__docgenInfo={description:"A generic Navigation Item component. For internal use only. Use to wrap more semantic, role-specific navigation item components such as `SidenavigationItem`, `TabNavigationItem` , `TopNavigationItem` around.",displayName:"NavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the navigation item is the currently active item. If an acitve item is set on the parent, the one on the parent will win.",name:"active",required:!1,type:{name:"boolean"}},activeItemStyles:{defaultValue:{value:""},description:"Styles to apply to the active item",name:"activeItemStyles",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria-label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass custom classNames to the item itself.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The child string of the item. Will override `label` when passed.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to render in the item",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},inactiveItemStyles:{defaultValue:{value:""},description:"",name:"inactiveItemStyles",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"The label of the item. Will be rendered if no children are passed",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The href of the item. The item will be rendered as an `<a>` element when passed, instead of a `<button>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Handler to execute when the item is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"The value of the item as a technical identifier. Use if needed to be different from the visble `label` or child string. Will only be rendered when no `label` prop and no children are passed.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the parent `<li>` element of the item.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}export{A as N,$ as a};
