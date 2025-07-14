import{j as i}from"./iframe-D7aRFT6Q.js";const l=`
  jn:text-sm
  jn:rounded
  jn:bg-theme-box-default
  jn:border
  jn:border-theme-box-default
`,p=`
  jn:py-1
  jn:px-2
`,n=({children:o,unpad:t=!1,className:r="",...s})=>{const d=`juno-box ${l} ${t?"":p} ${r}`;return i.jsx("div",{className:d,...s,children:o})};try{n.displayName="Box",n.__docgenInfo={description:`A generic Box component with optional padding and a light border.
Ideal for annotations, additional explanations, and remarks where a Message or InfoBox would be too visually emphasized.
Typically used for small text but can contain any child elements, as required.`,displayName:"Box",props:{children:{defaultValue:null,description:"Child elements to be rendered inside the Box.",name:"children",required:!1,type:{name:"ReactNode"}},unpad:{defaultValue:{value:"false"},description:"If true, padding is removed.",name:"unpad",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS styles to apply to the Box.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const u={title:"Components/Box",component:n,argTypes:{}},e={args:{children:"Some content in a Box."}},a={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:"A Box without padding",unpad:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Box."
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const m=["Default","WithoutPadding"];export{e as Default,a as WithoutPadding,m as __namedExportsOrder,u as default};
