import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{I as p}from"./Icon.component-mRvJQXAl.js";const y=`
  jn-text-sm
  jn-text-theme-high
  jn-flex
  jn-gap-1
  jn-items-center
`,j=`
  jn-text-theme-high
  jn-inline-flex
`,d=({href:n="#",label:a="Item",ariaLabel:u="",active:i=!1,children:l=null,disabled:t=!1,onClick:s,className:b="",...r})=>{if(l)return e.jsx(e.Fragment,{children:l});const{icon:c}=r,m=c?e.jsx(p,{icon:c,size:"18",color:"jn-text-theme-default",className:a?"jn-mr-1":""}):null,o=`juno-breadcrumb-item 
    ${y} 
    ${t?"juno-breadcrumb-item-disabled":""} 
    ${i?"juno-breadcrumb-item-active":""} 
    ${b}`;if(i||t)return e.jsxs("span",{className:o,...r,children:[m,a]});const f=h=>{s&&!t&&s(h)};return e.jsx("span",{className:o,...r,children:e.jsxs("a",{href:n,className:j,"aria-label":u||a,onClick:f,children:[m,a]})})};try{d.displayName="BreadcrumbItem",d.__docgenInfo={description:"BreadcrumbItem represents an individual item within a Breadcrumb component.",displayName:"BreadcrumbItem",props:{icon:{defaultValue:null,description:"The icon type to display in the breadcrumb item.",name:"icon",required:!1,type:{name:'"search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | "cancel" | "check" | "checkCircle" | "chevronLeft" | ... 40 more ...'}},href:{defaultValue:{value:"#"},description:"A URL the breadcrumb item points to for navigation.",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:{value:"Item"},description:"The text to display inside the breadcrumb item.",name:"label",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The value for the aria-label attribute, used to improve accessibility.",name:"ariaLabel",required:!1,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"Determines if this item is the last or currently active breadcrumb.",name:"active",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"The click event handler for the breadcrumb item.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},disabled:{defaultValue:{value:"false"},description:"If true, disables the breadcrumb item.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS class names to apply to the breadcrumb item for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Custom content to render within the breadcrumb item, replacing the default content.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{d as B};
