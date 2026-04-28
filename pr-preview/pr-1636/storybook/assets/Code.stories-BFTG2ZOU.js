import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";e();var n=t(),r=`
  jn:bg-theme-code-block
  jn:text-sm
`,i=({content:e=``,children:t,className:i=``,...a})=>(0,n.jsx)(`code`,{className:`juno-code ${r} ${i}`,...a,children:e||t});try{i.displayName=`Code`,i.__docgenInfo={description:"The `Code` component is a lightweight inline `<code>` element used for displaying code snippets or text.\nIt can accept content directly through the `content` prop or render children encapsulated within it.",displayName:`Code`,props:{content:{defaultValue:{value:``},description:"Text content to render within the code element. Overrides `children`.",name:`content`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Additional CSS class names for styling the code element.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Elements or text to render inside the code element.`,name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var a={title:`Components/Code`,component:i,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}}},o={parameters:{docs:{description:{story:`Default inline code`}}},args:{content:`<span>Some code passed as content prop.</span>`}},s={parameters:{docs:{description:{story:`Inline code with children`}}},args:{children:`<Code>Some code with children</Code>`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`WithChildren`];export{o as Default,s as WithChildren,c as __namedExportsOrder,a as default};