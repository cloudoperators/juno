import{j as u}from"./jsx-runtime-BP6H2k8O.js";import{N as p,a as h}from"./NavigationItem.component-Ut54wNRH.js";const f=`
  jn-min-w-[7.5rem]
  jn-max-w-[20rem]
`,s=({activeItem:e="",ariaLabel:a,children:t,className:i="",disabled:l=!1,onActiveItemChange:n,...o})=>u.jsx(p,{activeItem:e,ariaLabel:a,className:`juno-sidenavigation ${f} ${i}`,disabled:l,onActiveItemChange:n,...o,children:t});try{s.displayName="SideNavigation",s.__docgenInfo={description:`A generic vertical side navigation component.
Place SideNavigationItem components as children.`,displayName:"SideNavigation",props:{activeItem:{defaultValue:{value:""},description:"The active navigation item by label",name:"activeItem",required:!1,type:{name:"ReactNode"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the Navigation. Typically these should be SideNavigationItem(s)",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass custom classname.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes",name:"onActiveItemChange",required:!1,type:{name:"((activeItem: ReactNode) => void)"}}}}}catch{}const g=`
  jn-flex
  jn-items-center
  jn-w-full
  jn-py-1.5
  jn-px-8
  jn-text-theme-default
  jn-font-bold
  jn-cursor-pointer
  focus-visible:jn-outline-none
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
`,y=`
  jn-font-bold
  jn-text-theme-sidenavigation-item-active
  jn-bg-theme-sidenavigation-item-active
`,r=({active:e=!1,ariaLabel:a="",children:t,className:i="",disabled:l=!1,icon:n,label:o="",href:d="",onClick:c,value:v="",...m})=>u.jsx(h,{active:e,activeItemStyles:y,ariaLabel:a,className:`juno-sidenavigation-item ${g} ${i}`,disabled:l,icon:n,label:o,href:d,onClick:c,value:v,...m,children:t});try{r.displayName="SideNavigationItem",r.__docgenInfo={description:"A SideNavigation item. To be used inside SideNavigation.",displayName:"SideNavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the item is the currently active item",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"pass an icon name",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"help"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the item",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The link the item should point to. Will render the item as an anchor if passed",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"A handler to execute once the item is clicked. Will render the item as a button element if passed",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},value:{defaultValue:{value:""},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent SideNavigation.",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{s as S,r as a};
