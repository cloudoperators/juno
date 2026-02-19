import{j as i}from"./iframe-B4yXLd1L.js";import"./preload-helper-PPVm8Dsz.js";const p=`
  jn:text-sm
  jn:rounded
  jn:bg-theme-box-default
  jn:border
  jn:border-theme-box-default
`,c=`
  jn:py-1
  jn:px-2
`,o=({children:a,unpad:t=!1,className:r="",...s})=>{const d=`juno-box ${p} ${t?"":c} ${r}`;return i.jsx("div",{className:d,...s,children:a})};try{o.displayName="Box",o.__docgenInfo={description:`The \`Box\` component is a versatile container with optional padding and a subtle border.
It is perfect for annotations, supplementary explanations, and remarks where more visually
pronounced components like a MessageBox or InfoBox would be excessive.
This component typically displays small text but can contain any child elements as required.`,displayName:"Box",props:{children:{defaultValue:null,description:"The child elements to be rendered inside the Box.",name:"children",required:!1,type:{name:"ReactNode"}},unpad:{defaultValue:{value:"false"},description:`Determines whether the Box should render without padding.
When true, padding is removed.`,name:"unpad",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the Box component.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const u={title:"Components/Box",component:o,argTypes:{}},e={args:{children:"Some content in a Box."}},n={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:"A Box without padding",unpad:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Box."
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const h=["Default","WithoutPadding"];export{e as Default,n as WithoutPadding,h as __namedExportsOrder,u as default};
