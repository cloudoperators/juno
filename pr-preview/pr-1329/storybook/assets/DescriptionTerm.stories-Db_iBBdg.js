import{j as a}from"./iframe-Hf5h7-N0.js";import{D as t}from"./DescriptionTerm.component-B5_ZTF2N.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Description/DescriptionTerm",component:t,argTypes:{children:{control:{type:"text"},defaultValue:"Default Term",description:"The term to be displayed in the description list."}}},e={render:s=>a.jsx(t,{...s}),args:{children:"Default Term"}},r={render:s=>a.jsx(t,{...s}),args:{children:"Custom Term",className:"font-bold text-lg"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <DT {...args} />,
  args: {
    children: "Default Term"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <DT {...args} />,
  args: {
    children: "Custom Term",
    className: "font-bold text-lg"
  }
}`,...r.parameters?.docs?.source}}};const d=["Default","CustomTerm"];export{r as CustomTerm,e as Default,d as __namedExportsOrder,c as default};
