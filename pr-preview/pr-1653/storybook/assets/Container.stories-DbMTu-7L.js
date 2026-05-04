import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,g as n,h as r,z as i}from"./iframe-CGB7IVMy.js";var a,o,s,c,l;e((()=>{i(),r(),a=t(),o={title:`Layout/Container`,component:n,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:`A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding.`}}}},s={render:e=>(0,a.jsx)(n,{...e,children:`Content goes here`}),parameters:{docs:{description:{story:`Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom.`}}},args:{}},c={render:e=>(0,a.jsx)(n,{...e,children:`Content goes here`}),parameters:{docs:{description:{story:`A content container with vertical padding added. This will add padding to both the top and the bottom of the container.`}}},args:{py:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContainerProps) => <Container {...args}>Content goes here</Container>,
  parameters: {
    docs: {
      description: {
        story: "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."
      }
    }
  },
  args: {}
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Basic`,`WithVerticalPadding`]}))();export{s as Basic,c as WithVerticalPadding,l as __namedExportsOrder,o as default};