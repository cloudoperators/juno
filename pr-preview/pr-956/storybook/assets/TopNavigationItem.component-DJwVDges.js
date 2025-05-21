import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{N as p,a as h}from"./NavigationItem.component-D5XDO9ZT.js";const f=`
  jn:flex
  jn:bg-theme-background-lvl-1
  jn:gap-0
`,r=({activeItem:e,ariaLabel:a,children:t,className:i="",disabled:n=!1,onActiveItemChange:l,...o})=>u.jsx(p,{activeItem:e,ariaLabel:a,className:`juno-topnavigation ${f} ${i}`,disabled:n,onActiveItemChange:l,...o,children:t});try{r.displayName="TopNavigation",r.__docgenInfo={description:"A generic horizontal top level navigation component. To be placed below the application header but above application content.\nPlace `TopNavigationItem` elements as children.",displayName:"TopNavigation",props:{activeItem:{defaultValue:null,description:"The active navigation item by label",name:"activeItem",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the Navigation. Typically these should be TopNavigationItem(s)",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom classname.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes",name:"onActiveItemChange",required:!1,type:{name:"((activeItem: ReactNode) => void)"}}}}}catch{}const g=`
  jn:flex
  jn:items-center
  jn:grow-0
  jn:box-border
  jn:justify-start
  jn:text-theme-default
  jn:font-bold
  jn:leading-6
  jn:py-[0.875rem]
  jn:px-[1.9rem]
  jn:text-theme-default
  jn:bg-theme-topnavigation-item
  jn:hover:text-theme-high
  jn:hover:bg-theme-topnavigation-item-active
  jn:active:text-theme-high
  jn:active:bg-theme-topnavigation-item-active
  jn:focus-visible:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
`,b=`
  jn:font-bold
  jn:text-theme-high
  jn:bg-theme-topnavigation-item-active
  jn:border-b-[3px]
`,s=({active:e=!1,ariaLabel:a,children:t,className:i="",disabled:n=!1,href:l="",icon:o,label:c="",onClick:d,value:v="",...m})=>u.jsx(h,{active:e,activeItemStyles:b,ariaLabel:a,className:`juno-topnavigation-item ${g} ${i}`,disabled:n,icon:o,label:c,href:l,onClick:d,value:v,...m,children:t});try{s.displayName="TopNavigationItem",s.__docgenInfo={description:"An individual item of a top level navigation. Place inside TopNavigation.",displayName:"TopNavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the item is the currently active item",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"The aria label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"pass an icon name",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the item",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The link the item should point to. Will render the item as an anchor if passed",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"A handler to execute once the navigation item is clicked. Will render the item as a button element if passed",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},value:{defaultValue:{value:""},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{r as T,s as a};
