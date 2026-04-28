import{d as e,g as t}from"./iframe-DaLLswkI.js";import"react";var n=t(),r={title:`Layout/Container`,component:e,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:`A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding.`}}}},i={render:t=>(0,n.jsx)(e,{...t,children:`Content goes here`}),parameters:{docs:{description:{story:`Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom.`}}},args:{}},a={render:t=>(0,n.jsx)(e,{...t,children:`Content goes here`}),parameters:{docs:{description:{story:`A content container with vertical padding added. This will add padding to both the top and the bottom of the container.`}}},args:{py:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: ContainerProps) => <Container {...args}>Content goes here</Container>,
  parameters: {
    docs: {
      description: {
        story: "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."
      }
    }
  },
  args: {}
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};var o=[`Basic`,`WithVerticalPadding`];export{i as Basic,a as WithVerticalPadding,o as __namedExportsOrder,r as default};