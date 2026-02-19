import{j as o}from"./iframe-CkPUQXkT.js";const l=`
  jn:flex
  jn:flex-col
  jn:sticky
  jn:top-0
  jn:z-50
  jn:shadow-lg
  jn:bg-theme-global-bg
`,t=({fullWidth:e=!1,className:a="",children:n,...r})=>o.jsx("div",{className:`
    juno-header-container 
    ${e?"juno-header-container-fullwidth":"jn:w-full jn:2xl:container jn:2xl:mx-auto"}
    ${l} 
    ${a}`,...r,children:n});try{t.displayName="HeaderContainer",t.__docgenInfo={description:"The `HeaderContainer` component serves as a fixed, styled container at the top\nof a page or view, supporting full-width or constrained layouts.",displayName:"HeaderContainer",props:{fullWidth:{defaultValue:{value:"false"},description:"Whether the page/view content will stretch over the full width of the viewport or not.",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom CSS class name to apply to the header container.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content to be rendered within the header container.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as H};
