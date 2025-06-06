import{j as u}from"./iframe-9Ty3EMVT.js";const h=`
  jn-bg-theme-code-block
  jn-text-sm
`,o=({content:r="",children:p,className:l="",...m})=>u.jsx("code",{className:`juno-code ${h} ${l}`,...m,children:r||p});try{o.displayName="Code",o.__docgenInfo={description:`A basic inline <code> component.
 Accepts "content" prop or renders children as passed.`,displayName:"Code",props:{content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Components/Code",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},e={parameters:{docs:{description:{story:"Default inline code"}}},args:{content:"<span>Some code passed as content prop.</span>"}},n={parameters:{docs:{description:{story:"Inline code with children"}}},args:{children:"<Code>Some code with children</Code>"}};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var c,d,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const g=["Default","WithChildren"];export{e as Default,n as WithChildren,g as __namedExportsOrder,f as default};
