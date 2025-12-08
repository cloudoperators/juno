import{j as e,r as o,e as V}from"./iframe-CfRDRIv4.js";import{a as _}from"./Navigation.component-Dj5BFE_6.js";import{I as b}from"./Icon.component-BTQqbK8v.js";const E=`
  jn:px-[1.25rem]
  jn:py-[1rem]
  jn:w-[16rem]
  jn:bg-theme-sidenav
  jn:border-r
  jn:border-theme-sidenav
`,x=({activeItem:i="",ariaLabel:a,children:n,className:t="",disabled:s=!1,onActiveItemChange:u,...l})=>e.jsx(_,{activeItem:i,ariaLabel:a,className:`juno-sidenavigation ${E} ${t}`,disabled:s,onActiveItemChange:u,...l,children:n});try{x.displayName="SideNavigation",x.__docgenInfo={description:`A generic vertical side navigation component.
Place SideNavigationItem components as children.`,displayName:"SideNavigation",props:{activeItem:{defaultValue:{value:""},description:"The active navigation item by label",name:"activeItem",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the Navigation. These should be SideNavigationItem(s)",name:"children",required:!1,type:{name:"ReactElement<SideNavigationListProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationListProps, string | JSXElementConstructor<...>>[]"}},className:{defaultValue:{value:""},description:"Pass custom classname.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes",name:"onActiveItemChange",required:!1,type:{name:"((_activeItem: ReactNode) => void)"}}}}}catch{}const S=o.createContext(0),k=`
  jn:flex
  jn:justify-between
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:w-full
  jn:text-theme-sidenav
  jn:h-[30px]
`,q=`
  jn:flex
  jn:items-center
  jn:w-full 
`,j=`
  jn:opacity-50
  jn:cursor-not-allowed
`,N=({ariaLabel:i="",children:a,disabled:n=!1,href:t="",icon:s,label:u="",onClick:l,open:c=!1,selected:d=!1,...f})=>{const[r,v]=o.useState(c),m=o.useContext(S);o.useEffect(()=>{v(c)},[c]);const w=p=>{n||(p.stopPropagation(),v(!r))},h=p=>{n||(r||v(!r),t?window.location.href=t:l&&l(p))},I=()=>typeof a!="string"&&V.Children.count(a)>0?e.jsx("span",{onClick:w,role:"button",tabIndex:0,children:e.jsx(b,{size:"24",className:`
          ${n?j:""}`,icon:r?"expandMore":"chevronRight"})}):null,C=()=>e.jsxs("span",{className:q,children:[s&&m===0?e.jsx(b,{className:"jn:mr-[0.25rem]",icon:s,size:"24"}):null,e.jsx("div",{className:`level-${m+1}`,children:u||a})]}),g=()=>e.jsxs(e.Fragment,{children:[C(),I()]}),y=`
    juno-sidenavigation-item
    ${k}
    ${n?j:""}
    ${d?"selected":""}
    ${l||t||a?"jn:cursor-pointer":"jn:cursor-default"}
  `;return e.jsxs(S.Provider,{value:m+1,children:[t?e.jsx("a",{"aria-current":d?"page":void 0,"aria-label":i,className:y,href:n?void 0:t,onClick:h,...f,children:g()}):e.jsx("button",{"aria-current":d?"page":void 0,"aria-label":i,className:y,onClick:n?void 0:h,...f,children:g()}),r&&typeof a!="string"&&a]})};try{N.displayName="SideNavigationItem",N.__docgenInfo={description:`SideNavigationItem is a versatile component designed to be used within the SideNavigation component,
providing navigational functionalities in hierarchical interfaces.

It serves as an individual item representing a link or action within a navigation menu,
capable of displaying text labels, icons, and handling click events.

Key Features:
- Hierarchical Structure: Supports nested items for multi-level navigation through its children prop (up to 3 levels).
- Interactive Elements: Can operate as a link using the href prop or execute functions via onClick handlers.
- State Indicators: Supports active and disabled states, visually indicating the current focus or usability.
- Expandable Sections: When nested, automatically renders expand/collapse controls for child navigation items.
- Customization: Offers extensive styling versatility through CSS classes and optional icon rendering for visual enhancement.`,displayName:"SideNavigationItem",props:{ariaLabel:{defaultValue:{value:""},description:"Provides an accessibility label for the navigation item.",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Represents nested components. If a string is passed, it will be treated as a label.",name:"children",required:!1,type:{name:"string | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]"}},disabled:{defaultValue:{value:"false"},description:"Marks the item as non-interactive if set to true.",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:{value:""},description:"URL for navigation; transforms the item into a link.",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Defines the icon to display alongside the label.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"Text label displayed for the navigation item. Takes precedence over a label passed as children.",name:"label",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Function handler triggered upon item click.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},open:{defaultValue:{value:"false"},description:"Controls whether the item is expanded by default.",name:"open",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Indicates if the item is currently selected or active.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}export{x as S,N as a};
