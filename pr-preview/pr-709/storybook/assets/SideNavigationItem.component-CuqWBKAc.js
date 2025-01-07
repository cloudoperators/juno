import{j as d}from"./jsx-runtime-D6fbYt3N.js";import{N as f,a as h}from"./NavigationItem.component-DcHMCGrx.js";const v=`
  jn-min-w-[7.5rem]
  jn-max-w-[20rem]
`,o=({activeItem:e="",ariaLabel:a,children:t=null,className:i="",disabled:n=!1,onActiveItemChange:l,...s})=>d.jsx(f,{activeItem:e,ariaLabel:a,className:`juno-sidenavigation ${v} ${i}`,disabled:n,onActiveItemChange:l,...s,children:t});try{o.displayName="SideNavigation",o.__docgenInfo={description:`A generic vertical side navigation component.
Place SideNavigationItem components as children.`,displayName:"SideNavigation",props:{activeItem:{defaultValue:{value:""},description:"The active navigation item by label",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The children of the Navigation. Typically these should be SideNavigationItem(s)",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass custom classname.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes",name:"onActiveItemChange",required:!1,type:{name:"ActiveItemChangeHandler"}}}}}catch{}const g=`
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
`,b=`
  jn-font-bold
  jn-text-theme-sidenavigation-item-active
  jn-bg-theme-sidenavigation-item-active
`,r=({active:e=!1,ariaLabel:a="",children:t,className:i="",disabled:n=!1,icon:l=null,label:s="",href:c="",onClick:u,value:m="",...p})=>d.jsx(h,{active:e,activeItemStyles:b,ariaLabel:a,className:`juno-sidenavigation-item ${g} ${i}`,disabled:n,icon:l,label:s,href:c,onClick:u,value:m,...p,children:t});try{r.displayName="SideNavigationItem",r.__docgenInfo={description:"A SideNavigation item. To be used inside SideNavigation.",displayName:"SideNavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the item is the currently active item",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"pass an icon name",name:"icon",required:!1,type:{name:'"search" | "error" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | "cancel" | ... 40 more ...'}},label:{defaultValue:{value:""},description:"The label of the item",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The link the item should point to. Will render the item as an anchor if passed",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"A handler to execute once the item is clicked. Will render the item as a button element if passed",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent SideNavigation.",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{o as S,r as a};
