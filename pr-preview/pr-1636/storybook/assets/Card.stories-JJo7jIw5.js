import{g as e}from"./iframe-DaLLswkI.js";import"react";var t=e(),n=`
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-theme-default
`,r=`jn:p-4`,i=({children:e,padding:i=!1,className:a=``,...o})=>(0,t.jsx)(`div`,{className:`juno-card ${n} ${i?r:``} ${a}`,...o,children:e});try{i.displayName=`Card`,i.__docgenInfo={description:`The \`Card\` component acts as a versatile container for various types of content, providing
an optional padding feature for additional layout flexibility. It is commonly used for
displaying information or grouping elements, allowing for consistent styling and shadow effects.`,displayName:`Card`,props:{children:{defaultValue:null,description:`Components or elements to be rendered as content.`,name:`children`,required:!1,type:{name:`ReactNode`}},padding:{defaultValue:{value:`false`},description:`Optional padding for the Card component.`,name:`padding`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Additional CSS styles to apply.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var a={title:`Components/Card`,component:i,argTypes:{}},o={args:{children:`Some content in a Card with padding.`,padding:!0}},s={args:{children:`A Card without padding.`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Card with padding.",
    padding: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "A Card without padding."
  }
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`WithoutPadding`];export{o as Default,s as WithoutPadding,c as __namedExportsOrder,a as default};