import{r as m,j as l}from"./iframe-DPr166uo.js";const f=`
  jn:text-theme-high
  jn:text-base
  jn:transform 
  jn:origin-top-left 
  jn:transition-all 
  jn:duration-100 
  jn:ease-in-out
  jn:z-10
`,c=`
  jn:absolute
`,p=`
  jn:scale-75
  jn:-translate-y-[0.4375rem]
`,b=`
  jn:inline-block
  jn:w-1
  jn:h-1
  jn:rounded-full
  jn:align-top
  jn:ml-1
  jn:mt-2
  jn:bg-theme-required
`,j=`
  jn:opacity-50
  jn:cursor-not-allowed
`,e=m.forwardRef(({text:a="",htmlFor:n,required:t=!1,className:s="",disabled:i=!1,floating:r=!1,minimized:o=!1,...d},u)=>l.jsxs("label",{className:`
        juno-label 
        ${f} 
        ${r?"juno-label-floating "+c:""}
        ${o?"juno-label-minimized "+p:""}
        ${i?"juno-label-disabled "+j:""} 
        ${s}
      `,htmlFor:n,ref:u,...d,children:[a,t?l.jsx("span",{className:`
          juno-required 
          ${b}
          `}):""]}));e.displayName="Label";try{e.displayName="Label",e.__docgenInfo={description:"The `Label` component is a reusable, accessible label for form elements.\nIt supports optional features like disabling, required indicators, and floating label styles.",displayName:"Label",props:{text:{defaultValue:{value:""},description:"Text content for the label, required for display.",name:"text",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"ID of an input element to associate the label with for accessibility.",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Displays the required indicator when set.",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom CSS class names for label styling.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Enables disabled styling to indicate non-interactive fields.",name:"disabled",required:!1,type:{name:"boolean"}},floating:{defaultValue:{value:"false"},description:"Applies floating label styles for improved UX.",name:"floating",required:!1,type:{name:"boolean"}},minimized:{defaultValue:{value:"false"},description:"Applies minimized label styles; requires `floating` to be `true`.",name:"minimized",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
