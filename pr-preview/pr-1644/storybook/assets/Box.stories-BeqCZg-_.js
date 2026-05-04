import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,z as n}from"./iframe--fa2xe50.js";var r,i,a,o,s=e((()=>{n(),r=t(),i=`
  jn:text-sm
  jn:rounded
  jn:bg-theme-box-default
  jn:border
  jn:border-theme-box-default
`,a=`
  jn:py-1
  jn:px-2
`,o=({children:e,unpad:t=!1,className:n=``,...o})=>(0,r.jsx)(`div`,{className:`juno-box ${i} ${t?``:a} ${n}`,...o,children:e});try{o.displayName=`Box`,o.__docgenInfo={description:`The \`Box\` component is a versatile container with optional padding and a subtle border.
It is perfect for annotations, supplementary explanations, and remarks where more visually
pronounced components like a MessageBox or InfoBox would be excessive.
This component typically displays small text but can contain any child elements as required.`,displayName:`Box`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Box/Box.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`The child elements to be rendered inside the Box.`,name:`children`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{},type:{name:`ReactNode`}},unpad:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`Determines whether the Box should render without padding.
When true, padding is removed.`,name:`unpad`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`Additional CSS classes to apply to the Box component.`,name:`className`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{default:`""`},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-box--docs
{@link BoxProps }`}}}catch{}})),c=e((()=>{s()})),l,u,d,f;e((()=>{c(),l={title:`Components/Box`,component:o,argTypes:{}},u={args:{children:`Some content in a Box.`}},d={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:`A Box without padding`,unpad:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Box."
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithoutPadding`]}))();export{u as Default,d as WithoutPadding,f as __namedExportsOrder,l as default};