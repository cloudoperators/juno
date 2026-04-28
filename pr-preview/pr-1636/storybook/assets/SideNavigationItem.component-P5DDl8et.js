import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Navigation.component-sBd5PMyv.js";import{t as i}from"./Icon.component-BYUQ4r57.js";var a=e(t()),o=n(),s=`
  jn:px-[1.25rem]
  jn:py-[1rem]
  jn:w-[16rem]
  jn:bg-theme-sidenav
  jn:border-r
  jn:border-theme-sidenav
`,c=({activeItem:e=``,ariaLabel:t,children:n,className:i=``,disabled:a=!1,onActiveItemChange:c,...l})=>(0,o.jsx)(r,{activeItem:e,ariaLabel:t,className:`juno-sidenavigation ${s} ${i}`,disabled:a,onActiveItemChange:c,...l,children:n});try{c.displayName=`SideNavigation`,c.__docgenInfo={description:`A generic vertical side navigation component.
Place SideNavigationItem components as children.`,displayName:`SideNavigation`,props:{activeItem:{defaultValue:{value:``},description:`The active navigation item by label`,name:`activeItem`,required:!1,type:{name:`ReactNode`}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:`ariaLabel`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`The children of the Navigation. These should be SideNavigationItem(s)`,name:`children`,required:!1,type:{name:`ReactElement<SideNavigationListProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationListProps, string | JSXElementConstructor<...>>[]`}},className:{defaultValue:{value:``},description:`Pass custom classname.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Whether the navigation is disabled`,name:`disabled`,required:!1,type:{name:`boolean`}},onActiveItemChange:{defaultValue:null,description:`Handler to execute when the active item changes`,name:`onActiveItemChange`,required:!1,type:{name:`((_activeItem: ReactNode) => void)`}}}}}catch{}var l=(0,a.createContext)(0),u=`
  jn:flex
  jn:justify-between
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:w-full
  jn:text-theme-sidenav
  jn:h-[30px]
`,d=`
  jn:flex
  jn:items-center
  jn:w-full 
`,f=`
  jn:opacity-50
  jn:cursor-not-allowed
`,p=({ariaLabel:e=``,children:t,disabled:n=!1,href:r=``,icon:s,label:c=``,onClick:p,open:m=!1,selected:h=!1,...g})=>{let[_,v]=(0,a.useState)(m),y=(0,a.useContext)(l);(0,a.useEffect)(()=>{v(m)},[m]);let b=e=>{n||(e.stopPropagation(),v(!_))},x=e=>{n||(_||v(!_),r?window.location.href=r:p&&p(e))},S=()=>typeof t!=`string`&&a.Children.count(t)>0?(0,o.jsx)(`span`,{onClick:b,role:`button`,tabIndex:0,children:(0,o.jsx)(i,{size:`24`,className:`
          ${n?f:``}`,icon:_?`expandMore`:`chevronRight`})}):null,C=()=>(0,o.jsxs)(`span`,{className:d,children:[s&&y===0?(0,o.jsx)(i,{className:`jn:mr-[0.25rem]`,icon:s,size:`24`}):null,(0,o.jsx)(`div`,{className:`level-${y+1}`,children:c||t})]}),w=()=>(0,o.jsxs)(o.Fragment,{children:[C(),S()]}),T=`
    juno-sidenavigation-item
    ${u}
    ${n?f:``}
    ${h?`selected`:``}
    ${p||r||t?`jn:cursor-pointer`:`jn:cursor-default`}
  `;return(0,o.jsxs)(l.Provider,{value:y+1,children:[r?(0,o.jsx)(`a`,{"aria-current":h?`page`:void 0,"aria-label":e,className:T,href:n?void 0:r,onClick:x,...g,children:w()}):(0,o.jsx)(`button`,{"aria-current":h?`page`:void 0,"aria-label":e,className:T,onClick:n?void 0:x,...g,children:w()}),_&&typeof t!=`string`&&t]})};try{p.displayName=`SideNavigationItem`,p.__docgenInfo={description:`SideNavigationItem is a versatile component designed to be used within the SideNavigation component,
providing navigational functionalities in hierarchical interfaces.

It serves as an individual item representing a link or action within a navigation menu,
capable of displaying text labels, icons, and handling click events.

Key Features:
- Hierarchical Structure: Supports nested items for multi-level navigation through its children prop (up to 3 levels).
- Interactive Elements: Can operate as a link using the href prop or execute functions via onClick handlers.
- State Indicators: Supports active and disabled states, visually indicating the current focus or usability.
- Expandable Sections: When nested, automatically renders expand/collapse controls for child navigation items.
- Customization: Offers extensive styling versatility through CSS classes and optional icon rendering for visual enhancement.`,displayName:`SideNavigationItem`,props:{ariaLabel:{defaultValue:{value:``},description:`Provides an accessibility label for the navigation item.`,name:`ariaLabel`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Represents nested components. If a string is passed, it will be treated as a label.`,name:`children`,required:!1,type:{name:`string | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},disabled:{defaultValue:{value:`false`},description:`Marks the item as non-interactive if set to true.`,name:`disabled`,required:!1,type:{name:`boolean`}},href:{defaultValue:{value:``},description:`URL for navigation; transforms the item into a link.`,name:`href`,required:!1,type:{name:`string`}},icon:{defaultValue:null,description:`Defines the icon to display alongside the label.`,name:`icon`,required:!1,type:{name:`enum`,value:[{value:`"search"`},{value:`"default"`},{value:`"download"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"danger"`},{value:`"dangerous"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"edit"`},{value:`"error"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"info"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"success"`},{value:`"upload"`},{value:`"warning"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},label:{defaultValue:{value:``},description:`Text label displayed for the navigation item. Takes precedence over a label passed as children.`,name:`label`,required:!1,type:{name:`ReactNode`}},onClick:{defaultValue:null,description:`Function handler triggered upon item click.`,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLElement>`}},open:{defaultValue:{value:`false`},description:`Controls whether the item is expanded by default.`,name:`open`,required:!1,type:{name:`boolean`}},selected:{defaultValue:{value:`false`},description:`Indicates if the item is currently selected or active.`,name:`selected`,required:!1,type:{name:`boolean`}}}}}catch{}export{c as n,p as t};