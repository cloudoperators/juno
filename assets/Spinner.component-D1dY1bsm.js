import{j as a}from"./iframe-Cn_EWEvX.js";const d=`
  jn:animate-spin 
  jn:mr-3 
  jn:h-5 
  jn:w-5 
`,p=`
  jn:text-theme-accent
`,m=`
  jn:text-theme-danger 
`,g=`
  jn:text-theme-success
`,f=`
  jn:text-theme-warning  
`,h=`
  jn:text-theme-on-default
`,i=({variant:n="default",size:e,className:o="",color:r="",...l})=>{const c=()=>{switch(n){case"primary":return p;case"danger":return m;case"success":return g;case"warning":return f;default:return h}},t=s=>{switch(s){case"small":return"1rem";case"large":return"3rem";default:return s}},u=e?{width:t(e),height:t(e)}:{};return a.jsxs("svg",{className:`juno-spinner ${d} ${r||c()} ${o}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:u,role:"progressbar",...l,children:[a.jsx("circle",{className:"jn:opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"jn:opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})};try{i.displayName="Spinner",i.__docgenInfo={description:`A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. 
To indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.`,displayName:"Spinner",props:{variant:{defaultValue:{value:"default"},description:"The semantic color variant of the Spinner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"default"'},{value:'"primary"'}]}},size:{defaultValue:null,description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",name:"size",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Add custom classNames",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:""},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',name:"color",required:!1,type:{name:"string"}}}}}catch{}export{i as S};
