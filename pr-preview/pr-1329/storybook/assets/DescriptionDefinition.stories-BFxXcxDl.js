import{j as s}from"./iframe-Cwn8CgYt.js";import{D as i}from"./DescriptionDefinition.component-BwMgU9Du.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Components/Description/DescriptionDefinition",component:i,argTypes:{children:{control:{type:"text"},defaultValue:"This is a description text.",description:"Content to display as the definition in the description list."},className:{control:{type:"text"},description:"Additional custom class names for styling the component."}}},t={render:e=>s.jsx(i,{...e}),args:{children:"This is a default description."}},r={render:e=>s.jsx(i,{...e}),args:{children:"This description has custom styling.",className:"bg-blue-100 text-blue-800 p-4"}},n={render:e=>s.jsxs(i,{...e,children:[s.jsx("strong",{children:"This is bold text."})," ",s.jsx("em",{children:"This is italic text."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <DD {...args} />,
  args: {
    children: "This is a default description."
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <DD {...args} />,
  args: {
    children: "This description has custom styling.",
    className: "bg-blue-100 text-blue-800 p-4"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <DD {...args}>
      <strong>This is bold text.</strong> <em>This is italic text.</em>
    </DD>
}`,...n.parameters?.docs?.source}}};const d=["Default","CustomClassExample","RichContentExample"];export{r as CustomClassExample,t as Default,n as RichContentExample,d as __namedExportsOrder,l as default};
