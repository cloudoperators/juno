import{j as e}from"./iframe-CuztJGvI.js";import{N as p}from"./NativeSelect.component-CDaV5W1u.js";import{N as t}from"./NativeSelectOption.component-D6f45g0u.js";import{N as o}from"./NativeSelectOptionGroup.component-C7CK3L59.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-CzX9dRCv.js";import"./Spinner.component-B1SQqu7t.js";const r=({children:i,...n})=>e.jsx(p,{children:e.jsx(o,{...n,children:i})}),O={title:"Forms/NativeSelect/NativeSelectOptionGroup",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},a={render:r,args:{label:"My option group",children:[e.jsx(t,{value:"1",label:"Option 1"},0),e.jsx(t,{value:"2",label:"Option 2"},1),e.jsx(t,{value:"3",label:"Option 3"},2)]}},l={render:r,args:{label:"My disabled option group",children:[e.jsx(t,{value:"1",label:"Option 1"},0),e.jsx(t,{value:"2",label:"Option 2"},1),e.jsx(t,{value:"3",label:"Option 3"},2)],disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />]
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My disabled option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />],
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const N=["Default","Disabled"];export{a as Default,l as Disabled,N as __namedExportsOrder,O as default};
