import{j as r}from"./jsx-runtime-D6fbYt3N.js";const o=`
  jn-flex
  jn-flex-col
  jn-sticky
  jn-top-0
  jn-z-50
  jn-shadow-lg
  jn-bg-theme-global-bg
`,a=({fullWidth:e=!1,className:t="",children:n=null,...l})=>r.jsx("div",{className:`
    juno-header-container 
    ${e?"juno-header-container-fullwidth":"jn-w-full 2xl:jn-container 2xl:jn-mx-auto"}
    ${o} 
    ${t}`,...l,children:n});try{a.displayName="HeaderContainer",a.__docgenInfo={description:"",displayName:"HeaderContainer",props:{fullWidth:{defaultValue:{value:"false"},description:"Whether the page/view content will stretch over the full width of the viewport or not. Default is `false`.",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{a as H};