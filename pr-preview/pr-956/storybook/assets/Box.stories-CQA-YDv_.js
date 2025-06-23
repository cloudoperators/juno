import{j as x}from"./iframe-2EB-YwL5.js";const g=`
  jn:text-sm
  jn:rounded
  jn:bg-theme-box-default
  jn:border
  jn:border-theme-box-default
`,h=`
  jn:py-1
  jn:px-2
`,n=({children:o,unpad:p=!1,className:c="",...u})=>{const m=`juno-box ${g} ${p?"":h} ${c}`;return x.jsx("div",{className:m,...u,children:o})};try{n.displayName="Box",n.__docgenInfo={description:`A generic Box component with optional padding and a light border.
Ideal for annotations, additional explanations, and remarks where a Message or InfoBox would be too visually emphasized.
Typically used for small text but can contain any child elements, as required.`,displayName:"Box",props:{children:{defaultValue:null,description:"Child elements to be rendered inside the Box.",name:"children",required:!1,type:{name:"ReactNode"}},unpad:{defaultValue:{value:"false"},description:"If true, padding is removed.",name:"unpad",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS styles to apply to the Box.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Components/Box",component:n,argTypes:{}},e={args:{children:"Some content in a Box."}},a={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:"A Box without padding",unpad:!0}};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Box."
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "To remove padding, set the \`unpad\` prop."
      }
    }
  },
  args: {
    children: "A Box without padding",
    unpad: true
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["Default","WithoutPadding"];export{e as Default,a as WithoutPadding,b as __namedExportsOrder,y as default};
