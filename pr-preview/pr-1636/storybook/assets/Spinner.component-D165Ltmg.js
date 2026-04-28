import{g as e}from"./iframe-DaLLswkI.js";import"react";var t=e(),n=`
  jn:animate-spin 
  jn:mr-3 
  jn:h-5 
  jn:w-5 
`,r=`
  jn:text-theme-accent
`,i=`
  jn:text-theme-danger 
`,a=`
  jn:text-theme-success
`,o=`
  jn:text-theme-warning  
`,s=`
  jn:text-theme-on-default
`,c=({variant:e=`default`,size:c,className:l=``,color:u=``,...d})=>{let f=()=>{switch(e){case`primary`:return r;case`danger`:return i;case`success`:return a;case`warning`:return o;default:return s}},p=e=>{switch(e){case`small`:return`1rem`;case`large`:return`3rem`;default:return e}},m=c?{width:p(c),height:p(c)}:{};return(0,t.jsxs)(`svg`,{className:`juno-spinner ${n} ${u||f()} ${l}`,xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,style:m,role:`progressbar`,...d,children:[(0,t.jsx)(`circle`,{className:`jn:opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,t.jsx)(`path`,{className:`jn:opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]})};try{c.displayName=`Spinner`,c.__docgenInfo={description:`A generic Spinner component to indicate an individual component or portion of the UI is busy processing or awaiting data.
To indicate full views, panels, or other larger parts of an interface are busy or waiting for data, use LoadingIndicator instead.`,displayName:`Spinner`,props:{variant:{defaultValue:{value:`default`},description:`The semantic color variant of the Spinner`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"warning"`},{value:`"danger"`},{value:`"success"`},{value:`"default"`},{value:`"primary"`}]}},size:{defaultValue:null,description:"The size of the spinner: `small`, `large`, or any valid CSS length like `1.5rem`",name:`size`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Add custom classNames`,name:`className`,required:!1,type:{name:`string`}},color:{defaultValue:{value:``},description:'Pass a text-color class in order to apply any color to a spinner (These classes typically begin with "text-".). If passed, `color` will overwrite the semantic color as defined by `variant`.',name:`color`,required:!1,type:{name:`string`}}}}}catch{}export{c as t};