import{C as n,j as a}from"./iframe-CcDtRYdv.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Layout/Container",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},parameters:{docs:{description:{component:"A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding."}}}},e={render:o=>a.jsx(n,{...o,children:"Content goes here"}),parameters:{docs:{description:{story:"Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."}}},args:{}},t={render:o=>a.jsx(n,{...o,children:"Content goes here"}),parameters:{docs:{description:{story:"A content container with vertical padding added. This will add padding to both the top and the bottom of the container."}}},args:{py:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args: ContainerProps) => <Container {...args}>Content goes here</Container>,
  parameters: {
    docs: {
      description: {
        story: "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."
      }
    }
  },
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ContainerProps) => <Container {...args}>Content goes here</Container>,
  parameters: {
    docs: {
      description: {
        story: "A content container with vertical padding added. This will add padding to both the top and the bottom of the container."
      }
    }
  },
  args: {
    py: true
  }
}`,...t.parameters?.docs?.source}}};const d=["Basic","WithVerticalPadding"];export{e as Basic,t as WithVerticalPadding,d as __namedExportsOrder,i as default};
