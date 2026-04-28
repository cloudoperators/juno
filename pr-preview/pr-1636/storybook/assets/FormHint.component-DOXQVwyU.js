import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";e();var n=t(),r=`
  jn:text-xs
  jn:mt-1
`,i=e=>{switch(e){case`success`:return`jn:text-theme-success`;case`error`:return`jn:text-theme-error`;default:return`jn:text-theme-light`}},a=({children:e,text:t=``,variant:a=`help`,className:o=``,...s})=>(0,n.jsx)(`div`,{className:`
        juno-form-hint 
        juno-form-hint-${a} 
        ${r} 
        ${i(a)} 
        ${o}
      `,...s,children:e||t});a.displayName=`FormHint`;try{a.displayName=`FormHint`,a.__docgenInfo={description:"The `FormHint` component provides contextual messages associated with form elements,\nsuch as help, error, or success messages. It adjusts appearance based on the variant specified.",displayName:`FormHint`,props:{children:{defaultValue:null,description:`The content to render as a hint for a form element.
If children are provided, they will take precedence over text.`,name:`children`,required:!1,type:{name:`ReactNode`}},text:{defaultValue:{value:``},description:`The text to render as a hint for a form element.
Overridden by children, if provided.`,name:`text`,required:!1,type:{name:`ReactNode`}},variant:{defaultValue:{value:`help`},description:`The variant of the hint ("help", "error", or "success") determining its appearance.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"error"`},{value:`"help"`},{value:`"success"`}]}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the form hint for custom styling.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}export{a as t};