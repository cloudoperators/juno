import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";e();var n=t(),r=`
  jn:animate-spin 
  jn:mr-3 
  jn:h-5 
  jn:w-5 
`,i=`
  jn:text-theme-accent
`,a=`
  jn:text-theme-danger 
`,o=`
  jn:text-theme-success
`,s=`
  jn:text-theme-warning  
`,c=`
  jn:text-theme-on-default
`,l=({variant:e=`default`,size:t,className:l=``,color:u=``,...d})=>{let f=()=>{switch(e){case`primary`:return i;case`danger`:return a;case`success`:return o;case`warning`:return s;default:return c}},p=e=>{switch(e){case`small`:return`1rem`;case`large`:return`3rem`;default:return e}},m=t?{width:p(t),height:p(t)}:{};return(0,n.jsxs)(`svg`,{className:`juno-spinner ${r} ${u||f()} ${l}`,xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,style:m,role:`progressbar`,...d,children:[(0,n.jsx)(`circle`,{className:`jn:opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,n.jsx)(`path`,{className:`jn:opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]})};try{l.displayName=`Spinner`,l.__docgenInfo={description:`A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data.
To indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.`,displayName:`Spinner`,props:{variant:{defaultValue:{value:`default`},description:`The semantic color variant of the Spinner`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"primary"`},{value:`"danger"`},{value:`"success"`},{value:`"warning"`}]}},size:{defaultValue:null,description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",name:`size`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Add custom classNames`,name:`className`,required:!1,type:{name:`string`}},color:{defaultValue:{value:``},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',name:`color`,required:!1,type:{name:`string`}}}}}catch{}export{l as t};