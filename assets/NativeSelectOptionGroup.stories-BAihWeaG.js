import{j as e}from"./iframe-D5ily5-W.js";import{a as o,N as p}from"./NativeSelectOptionGroup.component-BzVrVCoi.js";import{N as a}from"./NativeSelectOption.component-De2UuZH-.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-BJNvdsFq.js";import"./Spinner.component-BV7KUzsA.js";const r=({children:i,...n})=>e.jsx(p,{children:e.jsx(o,{...n,children:i})}),v={title:"Forms/NativeSelect/NativeSelectOptionGroup",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},t={render:r,args:{label:"My option group",children:[e.jsx(a,{value:"1",label:"Option 1"},0),e.jsx(a,{value:"2",label:"Option 2"},1),e.jsx(a,{value:"3",label:"Option 3"},2)]}},l={render:r,args:{label:"My disabled option group",children:[e.jsx(a,{value:"1",label:"Option 1"},0),e.jsx(a,{value:"2",label:"Option 2"},1),e.jsx(a,{value:"3",label:"Option 3"},2)],disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />]
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My disabled option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />],
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const O=["Default","Disabled"];export{t as Default,l as Disabled,O as __namedExportsOrder,v as default};
