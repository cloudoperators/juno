import{e as m,j as l}from"./iframe-Ie7iB9gE.js";const f=`
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
          `}):""]}));e.displayName="Label";try{e.displayName="Label",e.__docgenInfo={description:"A re-usable Label component",displayName:"Label",props:{text:{defaultValue:{value:""},description:"Pass a string of text to be rendered as contents. Required.",name:"text",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"An Id of an input element to associate the label with",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Required",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Label for a disabled input",name:"disabled",required:!1,type:{name:"boolean"}},floating:{defaultValue:{value:"false"},description:"Whether the label is floating",name:"floating",required:!1,type:{name:"boolean"}},minimized:{defaultValue:{value:"false"},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",name:"minimized",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
