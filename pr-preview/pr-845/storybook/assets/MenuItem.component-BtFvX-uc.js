import{j as n}from"./jsx-runtime-D6fbYt3N.js";import{r as m}from"./index-DysCNOs_.js";import{w as c}from"./withDeprecationWarning.component-DcP1MqMf.js";import{q as v}from"./menu-BV8S7JmC.js";import{I as x}from"./Icon.component-BrOSObIN.js";const w=`
	jn-overflow-hidden
	jn-flex
	jn-flex-col
	jn-rounded
	jn-bg-theme-background-lvl-1
`,N=`
	jn-text-sm
`,I=`
	jn-text-base
`,p=m.createContext(void 0),h=({children:a,variant:t="normal",className:e="",...l})=>n.jsx(p.Provider,{value:{variant:t},children:n.jsx(v,{children:n.jsx("div",{className:`
					juno-menu 
					juno-menu-${t} 
					${w} 
					${t==="small"?N:I} 
					${e}
				`,role:"menu",...l,children:a})})});h.displayName="Menu";const i=c(h,"Menu is deprecated and will be removed in future versions. Use PopupMenu instead.");try{i.displayName="Menu",i.__docgenInfo={description:"",displayName:"Menu",props:{children:{defaultValue:null,description:"The children to render in the MenuSection",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"normal"},description:"Whether the Menu will be in normal or small variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},className:{defaultValue:{value:""},description:"Pass a custom className to the menu",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=`
   jn-text-theme-default
   jn-flex
   jn-items-center
   jn-w-full
   bg-clip-padding
   jn-truncate
   jn-text-left
   jn-bg-theme-background-lvl-1
   disabled:jn-cursor-not-allowed
   data-[headlessui-state="disabled"]:jn-cursor-not-allowed
 `,C=`
   jn-text-sm
   jn-p-2
 `,$=`
   jn-text-base
   jn-pt-[0.6875rem]
   jn-pb-[0.5rem]
   jn-px-[0.875rem]
 `,q=`
   hover:jn-bg-theme-background-lvl-3
   cursor-pointer
   data-[headlessui-state="disabled"]:jn-bg-theme-background-lvl-3
 `,f=({children:a,className:t="",disabled:e=!1,href:l="",icon:r=null,label:j="",onClick:s=void 0,...y})=>{const o=m.useContext(p),b=(o==null?void 0:o.variant)??"normal",u=l?"a":a?"div":s?"button":"div",g=M=>{s&&s(M)};return n.jsx(v.Item,{as:u,...l&&!e&&u==="a"?{href:l}:{},onClick:s&&u==="button"&&!e?g:void 0,disabled:e,className:`
         juno-menu-item
         juno-menu-item-${u}
         ${_} 
         ${u!=="div"?q:""}
         ${b==="small"?C:$}
         ${e?"jn-cursor-not-allowed":""}
         ${t}
       `,...y,children:n.jsxs("span",{className:`${e?"jn-opacity-50":""}`,children:[r&&n.jsx(x,{icon:r,size:"18",className:"jn-inline-block jn-mr-2"}),a||j]})})};f.displayName="MenuItem";const d=c(f,"MenuItem is deprecated and will be removed in future versions. Use PopupMenu with PopupMenu.Item instead.");try{d.displayName="MenuItem",d.__docgenInfo={description:"DEPRECATED: Use `PopupMenu` with `PopupMenu.Item instead. A menu item to be used inside Menu.\nCan render `<a>`, `<button>`, or `<div>` based on props.",displayName:"MenuItem",props:{children:{defaultValue:null,description:"Children of the menu item",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className to the menu item",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the menu item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"search"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the menu item. Will take precedence over children passed to the component.",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"Pass an href to the menu item. Will result in the menu item being rendered as an `<a>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"undefined"},description:"Pass an onClick handler to the menu item. Will result in the menu item being rendered as a `<button>`.",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}export{i as M,d as a};
