import{j as c}from"./iframe-zqCA6I52.js";const d=`
  jn:bg-theme-code-block
  jn:text-sm
`,o=({content:r="",children:s,className:t="",...a})=>c.jsx("code",{className:`juno-code ${d} ${t}`,...a,children:r||s});try{o.displayName="Code",o.__docgenInfo={description:'A basic inline `<code>` component.\n Accepts "content" prop or renders children as passed.',displayName:"Code",props:{content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const p={title:"Components/Code",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},e={parameters:{docs:{description:{story:"Default inline code"}}},args:{content:"<span>Some code passed as content prop.</span>"}},n={parameters:{docs:{description:{story:"Inline code with children"}}},args:{children:"<Code>Some code with children</Code>"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const l=["Default","WithChildren"];export{e as Default,n as WithChildren,l as __namedExportsOrder,p as default};
