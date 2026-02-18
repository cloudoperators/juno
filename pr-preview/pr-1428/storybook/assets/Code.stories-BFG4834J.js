import{j as c}from"./iframe-PzjH_KfA.js";import"./preload-helper-PPVm8Dsz.js";const d=`
  jn:bg-theme-code-block
  jn:text-sm
`,t=({content:o="",children:r,className:s="",...a})=>c.jsx("code",{className:`juno-code ${d} ${s}`,...a,children:o||r});try{t.displayName="Code",t.__docgenInfo={description:"The `Code` component is a lightweight inline `<code>` element used for displaying code snippets or text.\nIt can accept content directly through the `content` prop or render children encapsulated within it.",displayName:"Code",props:{content:{defaultValue:{value:""},description:"Text content to render within the code element. Overrides `children`.",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS class names for styling the code element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Elements or text to render inside the code element.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const p={title:"Components/Code",component:t,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},e={parameters:{docs:{description:{story:"Default inline code"}}},args:{content:"<span>Some code passed as content prop.</span>"}},n={parameters:{docs:{description:{story:"Inline code with children"}}},args:{children:"<Code>Some code with children</Code>"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const m=["Default","WithChildren"];export{e as Default,n as WithChildren,m as __namedExportsOrder,p as default};
