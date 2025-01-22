import{j as u}from"./jsx-runtime-D6fbYt3N.js";import{r as v}from"./index-DysCNOs_.js";import{N as g,a as y}from"./NavigationItem.component-YThh0Ouh.js";const N=`
  jn-flex
`,m=v.createContext(void 0),d=({activeItem:e="",ariaLabel:t,children:n,className:i="",disabled:l=!1,onActiveItemChange:o,tabStyle:a="main",...r})=>u.jsx(m.Provider,{value:{tabStyle:a},children:u.jsx(g,{activeItem:e,ariaLabel:t,className:`
          juno-tabnavigation 
          juno-tabnavigation-${a} 
          ${N} 
          ${i}
        `,disabled:l,onActiveItemChange:o,...r,children:n})});try{d.displayName="TabNavigation",d.__docgenInfo={description:"A Tab Navigation parent component. Use to wrap `<TabNavigationItem>` elements inside. For tabs with corresponding tab panels, use `<Tabs>` instead.",displayName:"TabNavigation",props:{activeItem:{defaultValue:{value:""},description:"The label of the selected tab. The `activeItem` prop set on the parent will override / take precedence over any `active` prop that may be set on a child.",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The child `<TabNavigationItem>` elements to render.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"A custom className to be rendered on the tab navigation",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the tab navigation is disabled. If set to `true`, all child tab navigation item elements will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"A handler to execute when the active tab changes",name:"onActiveItemChange",required:!1,type:{name:"ActiveItemChangeHandler"}},tabStyle:{defaultValue:{value:"main"},description:'The stylistic variant of the Tabs: Use `main` as the first child in an `Appshell` (when manually scaffolding, as first child of `juno-content-container`). For tabs inside the page content use "content". `<TabNavigation tabStyle="main">` will have no darkened border on the bottom of inactive tabs, `tabStyle="content"` will.',name:"tabStyle",required:!1,type:{name:"enum",value:[{value:'"content"'},{value:'"main"'}]}}}}}catch{}const T=`
  jn-flex
  jn-items-center
  jn-text-theme-default
  jn-font-bold
  jn-py-[0.875rem]
  jn-px-[1.5625rem]
  jn-border-b-[3px]
  focus-visible:jn-outline-none
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
`,j=`
  jn-text-theme-high
  jn-font-bold
  jn-border-b-[3px]
  jn-border-theme-tab-active-bottom
`,c=({active:e=!1,ariaLabel:t,children:n,className:i="",disabled:l=!1,href:o,icon:a,label:r="",onClick:p,value:b="",...h})=>{const f=v.useContext(m),{tabStyle:s}=f||{};return u.jsx(y,{active:e,activeItemStyles:j,ariaLabel:t,className:`
        juno-tabnavigation-item 
        ${s?"juno-tabnavigation-"+s+"-item":""}
        ${T} 
        ${i}
      `,disabled:l,href:o,icon:a,inactiveItemStyles:`${s==="content"?"jn-border-theme-tab-content-inactive-bottom":"jn-border-transparent"}`,label:r,onClick:p,value:b,...h,children:n})};try{c.displayName="TabNavigationItem",c.__docgenInfo={description:"An individual Tab Navigation Item. Use wrapped in a `<TabNavigation>` parent component.",displayName:"TabNavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the tab navigation item is active",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"The aria label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the tab navigation item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Pass the name of an icon to render in the Tab. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"search"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the tab navigation item. Must be unique within any given `<TabNavigation>` group.",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Pass a custom handler to execute when the tab is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{d as T,c as a};
