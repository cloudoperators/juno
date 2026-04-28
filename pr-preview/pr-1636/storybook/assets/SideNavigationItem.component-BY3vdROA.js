import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./Navigation.component-Dvq_7iMV.js";import{t as n}from"./Icon.component-hvX4Q9Gp.js";import{Children as r,createContext as i,useContext as a,useEffect as o,useState as s}from"react";var c=e(),l=`
  jn:px-[1.25rem]
  jn:py-[1rem]
  jn:w-[16rem]
  jn:bg-theme-sidenav
  jn:border-r
  jn:border-theme-sidenav
`,u=({activeItem:e=``,ariaLabel:n,children:r,className:i=``,disabled:a=!1,onActiveItemChange:o,...s})=>(0,c.jsx)(t,{activeItem:e,ariaLabel:n,className:`juno-sidenavigation ${l} ${i}`,disabled:a,onActiveItemChange:o,...s,children:r});try{u.displayName=`SideNavigation`,u.__docgenInfo={description:`A generic vertical side navigation component.
Place SideNavigationItem components as children.`,displayName:`SideNavigation`,props:{activeItem:{defaultValue:{value:``},description:`The active navigation item by label`,name:`activeItem`,required:!1,type:{name:`ReactNode`}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:`ariaLabel`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`The children of the Navigation. These should be SideNavigationItem(s)`,name:`children`,required:!1,type:{name:`ReactElement<SideNavigationListProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationListProps, string | JSXElementConstructor<...>>[]`}},className:{defaultValue:{value:``},description:`Pass custom classname.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Whether the navigation is disabled`,name:`disabled`,required:!1,type:{name:`boolean`}},onActiveItemChange:{defaultValue:null,description:`Handler to execute when the active item changes`,name:`onActiveItemChange`,required:!1,type:{name:`((_activeItem: ReactNode) => void)`}}}}}catch{}var d=i(0),f=`
  jn:flex
  jn:justify-between
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:w-full
  jn:text-theme-sidenav
  jn:h-[30px]
`,p=`
  jn:flex
  jn:items-center
  jn:w-full 
`,m=`
  jn:opacity-50
  jn:cursor-not-allowed
`,h=({ariaLabel:e=``,children:t,disabled:i=!1,href:l=``,icon:u,label:h=``,onClick:g,open:_=!1,selected:v=!1,...y})=>{let[b,x]=s(_),S=a(d);o(()=>{x(_)},[_]);let C=e=>{i||(e.stopPropagation(),x(!b))},w=e=>{i||(b||x(!b),l?window.location.href=l:g&&g(e))},T=()=>typeof t!=`string`&&r.count(t)>0?(0,c.jsx)(`span`,{onClick:C,role:`button`,tabIndex:0,children:(0,c.jsx)(n,{size:`24`,className:`
          ${i?m:``}`,icon:b?`expandMore`:`chevronRight`})}):null,E=()=>(0,c.jsxs)(`span`,{className:p,children:[u&&S===0?(0,c.jsx)(n,{className:`jn:mr-[0.25rem]`,icon:u,size:`24`}):null,(0,c.jsx)(`div`,{className:`level-${S+1}`,children:h||t})]}),D=()=>(0,c.jsxs)(c.Fragment,{children:[E(),T()]}),O=`
    juno-sidenavigation-item
    ${f}
    ${i?m:``}
    ${v?`selected`:``}
    ${g||l||t?`jn:cursor-pointer`:`jn:cursor-default`}
  `;return(0,c.jsxs)(d.Provider,{value:S+1,children:[l?(0,c.jsx)(`a`,{"aria-current":v?`page`:void 0,"aria-label":e,className:O,href:i?void 0:l,onClick:w,...y,children:D()}):(0,c.jsx)(`button`,{"aria-current":v?`page`:void 0,"aria-label":e,className:O,onClick:i?void 0:w,...y,children:D()}),b&&typeof t!=`string`&&t]})};try{h.displayName=`SideNavigationItem`,h.__docgenInfo={description:`SideNavigationItem is a versatile component designed to be used within the SideNavigation component,
providing navigational functionalities in hierarchical interfaces.

It serves as an individual item representing a link or action within a navigation menu,
capable of displaying text labels, icons, and handling click events.

Key Features:
- Hierarchical Structure: Supports nested items for multi-level navigation through its children prop (up to 3 levels).
- Interactive Elements: Can operate as a link using the href prop or execute functions via onClick handlers.
- State Indicators: Supports active and disabled states, visually indicating the current focus or usability.
- Expandable Sections: When nested, automatically renders expand/collapse controls for child navigation items.
- Customization: Offers extensive styling versatility through CSS classes and optional icon rendering for visual enhancement.`,displayName:`SideNavigationItem`,props:{ariaLabel:{defaultValue:{value:``},description:`Provides an accessibility label for the navigation item.`,name:`ariaLabel`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Represents nested components. If a string is passed, it will be treated as a label.`,name:`children`,required:!1,type:{name:`string | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},disabled:{defaultValue:{value:`false`},description:`Marks the item as non-interactive if set to true.`,name:`disabled`,required:!1,type:{name:`boolean`}},href:{defaultValue:{value:``},description:`URL for navigation; transforms the item into a link.`,name:`href`,required:!1,type:{name:`string`}},icon:{defaultValue:null,description:`Defines the icon to display alongside the label.`,name:`icon`,required:!1,type:{name:`enum`,value:[{value:`"search"`},{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"upload"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},label:{defaultValue:{value:``},description:`Text label displayed for the navigation item. Takes precedence over a label passed as children.`,name:`label`,required:!1,type:{name:`ReactNode`}},onClick:{defaultValue:null,description:`Function handler triggered upon item click.`,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLElement>`}},open:{defaultValue:{value:`false`},description:`Controls whether the item is expanded by default.`,name:`open`,required:!1,type:{name:`boolean`}},selected:{defaultValue:{value:`false`},description:`Indicates if the item is currently selected or active.`,name:`selected`,required:!1,type:{name:`boolean`}}}}}catch{}export{u as n,h as t};