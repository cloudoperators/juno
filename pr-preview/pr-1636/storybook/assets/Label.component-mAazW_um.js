import{g as e}from"./iframe-Cx-zHds2.js";import{forwardRef as t}from"react";var n=e(),r=`
  jn:text-theme-high
  jn:text-base
  jn:transform 
  jn:origin-top-left 
  jn:transition-all 
  jn:duration-100 
  jn:ease-in-out
  jn:z-10
`,i=`
  jn:absolute
`,a=`
  jn:scale-75
  jn:-translate-y-[0.4375rem]
`,o=`
  jn:inline-block
  jn:w-1
  jn:h-1
  jn:rounded-full
  jn:align-top
  jn:ml-1
  jn:mt-2
  jn:bg-theme-required
`,s=`
  jn:opacity-50
  jn:cursor-not-allowed
`,c=t(({text:e=``,htmlFor:t,required:c=!1,className:l=``,disabled:u=!1,floating:d=!1,minimized:f=!1,...p},m)=>(0,n.jsxs)(`label`,{className:`
        juno-label 
        ${r} 
        ${d?`juno-label-floating `+i:``}
        ${f?`juno-label-minimized `+a:``}
        ${u?`juno-label-disabled `+s:``} 
        ${l}
      `,htmlFor:t,ref:m,...p,children:[e,c?(0,n.jsx)(`span`,{className:`
          juno-required 
          ${o}
          `}):``]}));c.displayName=`Label`;try{c.displayName=`Label`,c.__docgenInfo={description:"The `Label` component is a reusable, accessible label for form elements.\nIt supports optional features like disabling, required indicators, and floating label styles.",displayName:`Label`,props:{text:{defaultValue:{value:``},description:`Text content for the label, required for display.`,name:`text`,required:!1,type:{name:`string`}},htmlFor:{defaultValue:null,description:`ID of an input element to associate the label with for accessibility.`,name:`htmlFor`,required:!1,type:{name:`string`}},required:{defaultValue:{value:`false`},description:`Displays the required indicator when set.`,name:`required`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Custom CSS class names for label styling.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Enables disabled styling to indicate non-interactive fields.`,name:`disabled`,required:!1,type:{name:`boolean`}},floating:{defaultValue:{value:`false`},description:`Applies floating label styles for improved UX.`,name:`floating`,required:!1,type:{name:`boolean`}},minimized:{defaultValue:{value:`false`},description:"Applies minimized label styles; requires `floating` to be `true`.",name:`minimized`,required:!1,type:{name:`boolean`}}}}}catch{}export{c as t};