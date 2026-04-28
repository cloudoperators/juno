import{g as e}from"./iframe-DaLLswkI.js";import"react";var t=e(),n=`
  jn:text-sm
  jn:rounded
  jn:bg-theme-box-default
  jn:border
  jn:border-theme-box-default
`,r=`
  jn:py-1
  jn:px-2
`,i=({children:e,unpad:i=!1,className:a=``,...o})=>(0,t.jsx)(`div`,{className:`juno-box ${n} ${i?``:r} ${a}`,...o,children:e});try{i.displayName=`Box`,i.__docgenInfo={description:`The \`Box\` component is a versatile container with optional padding and a subtle border.
It is perfect for annotations, supplementary explanations, and remarks where more visually
pronounced components like a MessageBox or InfoBox would be excessive.
This component typically displays small text but can contain any child elements as required.`,displayName:`Box`,props:{children:{defaultValue:null,description:`The child elements to be rendered inside the Box.`,name:`children`,required:!1,type:{name:`ReactNode`}},unpad:{defaultValue:{value:`false`},description:`Determines whether the Box should render without padding.
When true, padding is removed.`,name:`unpad`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the Box component.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var a={title:`Components/Box`,component:i,argTypes:{}},o={args:{children:`Some content in a Box.`}},s={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:`A Box without padding`,unpad:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Box."
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`WithoutPadding`];export{o as Default,s as WithoutPadding,c as __namedExportsOrder,a as default};