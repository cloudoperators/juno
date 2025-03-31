import{j as t}from"./jsx-runtime-BP6H2k8O.js";import"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";const p=`
  jn-animate-spin 
  jn-mr-3 
  jn-h-5 
  jn-w-5 
`,m=`
  jn-text-theme-accent
`,f=`
  jn-text-theme-danger 
`,g=`
  jn-text-theme-success
`,h=`
  jn-text-theme-warning  
`,y=`
  jn-text-theme-on-default
`,o=({variant:i="default",size:a=null,className:l="",color:s="",...c})=>{const u=()=>{switch(i){case"primary":return m;case"danger":return f;case"success":return g;case"warning":return h;default:return y}},n=r=>{switch(r){case"small":return"1rem";case"large":return"3rem";default:return r}},d=a?{width:n(a),height:n(a)}:{};return t.jsxs("svg",{className:`juno-spinner ${p} ${s||u()} ${l}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:d,role:"progressbar",...c,children:[t.jsx("circle",{className:"jn-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t.jsx("path",{className:"jn-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})};o.propTypes={variant:e.oneOf(["primary","danger","default","success","warning"]),size:e.string,className:e.string,color:e.string};o.__docgenInfo={description:`A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data. 
To indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.`,methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic color variant of the Spinner",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"danger"',computed:!1},{value:'"default"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1},size:{defaultValue:{value:"null",computed:!1},description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add custom classNames",type:{name:"string"},required:!1},color:{defaultValue:{value:'""',computed:!1},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',type:{name:"string"},required:!1}}};export{o as S};
