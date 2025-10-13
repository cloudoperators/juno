import{j as e,r as v,e as V}from"./iframe-C5lWpbBS.js";import{a as _}from"./Navigation.component-B2cDScxe.js";import{I as y}from"./Icon.component-Cz6l0nqD.js";const k=`
  jn:min-w-[7.5rem]
  jn:max-w-[20rem]
  jn:bg-theme-sidenav
  jn:border-theme-sidenav
`,x=({activeItem:t="",ariaLabel:a,children:n,className:i="",disabled:r=!1,onActiveItemChange:l,...s})=>e.jsx(_,{activeItem:t,ariaLabel:a,className:`juno-sidenavigation ${k} ${i}`,disabled:r,onActiveItemChange:l,...s,children:n});try{x.displayName="SideNavigation",x.__docgenInfo={description:`A generic vertical side navigation component.
Place SideNavigationItem components as children.`,displayName:"SideNavigation",props:{activeItem:{defaultValue:{value:""},description:"The active navigation item by label",name:"activeItem",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the Navigation. These should be SideNavigationItem(s)",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass custom classname.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes",name:"onActiveItemChange",required:!1,type:{name:"((_activeItem: ReactNode) => void)"}}}}}catch{}const b=v.createContext(0),q=`
  jn:flex
  jn:justify-between 
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-sidenav
  jn:w-full
`,A=`
  jn:flex
  jn:items-center
  jn:space-x-[0.25rem]
  jn:w-full 
`,j=`
  jn:opacity-50
  jn:cursor-not-allowed
`,w=({ariaLabel:t="",children:a,disabled:n=!1,href:i="",icon:r,label:l="",onClick:s,open:N=!1,selected:c=!1,...m})=>{const[o,p]=v.useState(N),u=v.useContext(b);typeof a!="string"&&u+1===3&&(a=null);const S=d=>{n||(d.stopPropagation(),p(!o))},f=d=>{n||(o||p(!o),i?window.location.href=i:s&&s(d))},I=()=>typeof a!="string"&&V.Children.count(a)>0?e.jsx("span",{onClick:S,role:"button",tabIndex:0,children:e.jsx(y,{className:`
          juno-sidenavigation-item
          ${n?j:""}`,icon:o?"expandMore":"chevronRight"})}):null,C=()=>e.jsxs("span",{className:A,children:[r&&u===0?e.jsx(y,{icon:r,size:"18"}):null,e.jsx("div",{className:`juno-sidenavigation-item-content level-${u+1}`,children:l||a})]}),h=()=>e.jsxs(e.Fragment,{children:[C(),I()]}),g=`
    juno-sidenavigation-item
    ${q}
    ${n?j:""}
    ${c?"selected":""}
  `;return e.jsxs(b.Provider,{value:u+1,children:[i?e.jsx("a",{"aria-current":c?"page":void 0,"aria-label":t||l,className:g,href:n?void 0:i,onClick:f,...m,children:h()}):e.jsx("button",{"aria-current":c?"page":void 0,"aria-label":t||l,className:g,onClick:n?void 0:f,...m,children:h()}),o&&a]})};try{w.displayName="SideNavigationItem",w.__docgenInfo={description:`SideNavigationItem is a versatile component designed to be used within the SideNavigation component,
providing navigational functionalities in hierarchical interfaces.

It serves as an individual item representing a link or action within a navigation menu,
capable of displaying text labels, icons, and handling click events.

Key Features:
- Hierarchical Structure: Supports nested items for multi-level navigation through its children prop (up to 3 levels).
- Interactive Elements: Can operate as a link using the href prop or execute functions via onClick handlers.
- State Indicators: Supports active and disabled states, visually indicating the current focus or usability.
- Expandable Sections: When nested, automatically renders expand/collapse controls for child navigation items.
- Customization: Offers extensive styling versatility through CSS classes and optional icon rendering for visual enhancement.`,displayName:"SideNavigationItem",props:{ariaLabel:{defaultValue:{value:""},description:"Provides an accessibility label for the navigation item.",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Represents nested components or text content within the item.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Marks the item as non-interactive if set to true.",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:{value:""},description:"URL for navigation; transforms the item into a link.",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Defines the icon to display alongside the label.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityVeryHigh"'},{value:'"severityCritical"'},{value:'"severityUnknown"'},{value:'"sortShortWideArrowUp"'},{value:'"sortShortWideArrowDown"'},{value:'"sortWideShortArrowUp"'},{value:'"sortWideShortArrowDown"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"Text label displayed for the navigation item.",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Function handler triggered upon item click.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},open:{defaultValue:{value:"false"},description:"Controls whether the item is expanded by default.",name:"open",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Indicates if the item is currently selected or active.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}export{x as S,w as a};
