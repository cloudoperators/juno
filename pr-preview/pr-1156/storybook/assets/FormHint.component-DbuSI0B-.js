import{j as o}from"./iframe-DVIhrKFE.js";const i=`
  jn:text-xs
  jn:mt-1
`,l=e=>{switch(e){case"success":return"jn:text-theme-success";case"error":return"jn:text-theme-error";default:return"jn:text-theme-light"}},t=({children:e,text:a="",variant:r="help",className:n="",...s})=>o.jsx("div",{className:`
        juno-form-hint 
        juno-form-hint-${r} 
        ${i} 
        ${l(r)} 
        ${n}
      `,...s,children:e||a});t.displayName="FormHint";try{t.displayName="FormHint",t.__docgenInfo={description:"A FormHint component used to provide contextual help, error, or success messages associated with form elements.",displayName:"FormHint",props:{children:{defaultValue:null,description:`The content to render as a hint for a form element.
If children are provided, they will take precedence over text.`,name:"children",required:!1,type:{name:"ReactNode"}},text:{defaultValue:{value:""},description:`The text to render as a hint for a form element.
Overridden by children, if provided.`,name:"text",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"help"},description:'The variant of the hint ("help", "error", or "success") determining its appearance.',name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"help"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the form hint for custom styling.",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{t as F};
