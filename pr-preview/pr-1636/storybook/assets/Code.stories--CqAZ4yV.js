import{g as e}from"./iframe-DmqlBy6I.js";import"react";var t=e(),n=`
  jn:bg-theme-code-block
  jn:text-sm
`,r=({content:e=``,children:r,className:i=``,...a})=>(0,t.jsx)(`code`,{className:`juno-code ${n} ${i}`,...a,children:e||r});try{r.displayName=`Code`,r.__docgenInfo={description:"The `Code` component is a lightweight inline `<code>` element used for displaying code snippets or text.\nIt can accept content directly through the `content` prop or render children encapsulated within it.",displayName:`Code`,props:{content:{defaultValue:{value:``},description:"Text content to render within the code element. Overrides `children`.",name:`content`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Additional CSS class names for styling the code element.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Elements or text to render inside the code element.`,name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var i={title:`Components/Code`,component:r,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}}},a={parameters:{docs:{description:{story:`Default inline code`}}},args:{content:`<span>Some code passed as content prop.</span>`}},o={parameters:{docs:{description:{story:`Inline code with children`}}},args:{children:`<Code>Some code with children</Code>`}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default inline code"
      }
    }
  },
  args: {
    content: "<span>Some code passed as content prop.</span>"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Inline code with children"
      }
    }
  },
  args: {
    children: "<Code>Some code with children</Code>"
  }
}`,...o.parameters?.docs?.source}}};var s=[`Default`,`WithChildren`];export{a as Default,o as WithChildren,s as __namedExportsOrder,i as default};