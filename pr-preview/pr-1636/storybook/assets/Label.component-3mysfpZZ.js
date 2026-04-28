import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";var r=e(t()),i=n(),a=`
  jn:text-theme-high
  jn:text-base
  jn:transform 
  jn:origin-top-left 
  jn:transition-all 
  jn:duration-100 
  jn:ease-in-out
  jn:z-10
`,o=`
  jn:absolute
`,s=`
  jn:scale-75
  jn:-translate-y-[0.4375rem]
`,c=`
  jn:inline-block
  jn:w-1
  jn:h-1
  jn:rounded-full
  jn:align-top
  jn:ml-1
  jn:mt-2
  jn:bg-theme-required
`,l=`
  jn:opacity-50
  jn:cursor-not-allowed
`,u=(0,r.forwardRef)(({text:e=``,htmlFor:t,required:n=!1,className:r=``,disabled:u=!1,floating:d=!1,minimized:f=!1,...p},m)=>(0,i.jsxs)(`label`,{className:`
        juno-label 
        ${a} 
        ${d?`juno-label-floating `+o:``}
        ${f?`juno-label-minimized `+s:``}
        ${u?`juno-label-disabled `+l:``} 
        ${r}
      `,htmlFor:t,ref:m,...p,children:[e,n?(0,i.jsx)(`span`,{className:`
          juno-required 
          ${c}
          `}):``]}));u.displayName=`Label`;try{u.displayName=`Label`,u.__docgenInfo={description:"The `Label` component is a reusable, accessible label for form elements.\nIt supports optional features like disabling, required indicators, and floating label styles.",displayName:`Label`,props:{text:{defaultValue:{value:``},description:`Text content for the label, required for display.`,name:`text`,required:!1,type:{name:`string`}},htmlFor:{defaultValue:null,description:`ID of an input element to associate the label with for accessibility.`,name:`htmlFor`,required:!1,type:{name:`string`}},required:{defaultValue:{value:`false`},description:`Displays the required indicator when set.`,name:`required`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Custom CSS class names for label styling.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Enables disabled styling to indicate non-interactive fields.`,name:`disabled`,required:!1,type:{name:`boolean`}},floating:{defaultValue:{value:`false`},description:`Applies floating label styles for improved UX.`,name:`floating`,required:!1,type:{name:`boolean`}},minimized:{defaultValue:{value:`false`},description:"Applies minimized label styles; requires `floating` to be `true`.",name:`minimized`,required:!1,type:{name:`boolean`}}}}}catch{}export{u as t};