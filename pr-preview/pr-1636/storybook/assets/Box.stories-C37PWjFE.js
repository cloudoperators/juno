import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";e();var n=t(),r=`
  jn:text-sm
  jn:rounded
  jn:bg-theme-box-default
  jn:border
  jn:border-theme-box-default
`,i=`
  jn:py-1
  jn:px-2
`,a=({children:e,unpad:t=!1,className:a=``,...o})=>(0,n.jsx)(`div`,{className:`juno-box ${r} ${t?``:i} ${a}`,...o,children:e});try{a.displayName=`Box`,a.__docgenInfo={description:`The \`Box\` component is a versatile container with optional padding and a subtle border.
It is perfect for annotations, supplementary explanations, and remarks where more visually
pronounced components like a MessageBox or InfoBox would be excessive.
This component typically displays small text but can contain any child elements as required.`,displayName:`Box`,props:{children:{defaultValue:null,description:`The child elements to be rendered inside the Box.`,name:`children`,required:!1,type:{name:`ReactNode`}},unpad:{defaultValue:{value:`false`},description:`Determines whether the Box should render without padding.
When true, padding is removed.`,name:`unpad`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the Box component.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var o={title:`Components/Box`,component:a,argTypes:{}},s={args:{children:`Some content in a Box.`}},c={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:`A Box without padding`,unpad:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Box."
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`WithoutPadding`];export{s as Default,c as WithoutPadding,l as __namedExportsOrder,o as default};