import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{d as t,g as n}from"./iframe-qPHz0liX.js";e();var r=n(),i={title:`Layout/Container`,component:t,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:`A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding.`}}}},a={render:e=>(0,r.jsx)(t,{...e,children:`Content goes here`}),parameters:{docs:{description:{story:`Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom.`}}},args:{}},o={render:e=>(0,r.jsx)(t,{...e,children:`Content goes here`}),parameters:{docs:{description:{story:`A content container with vertical padding added. This will add padding to both the top and the bottom of the container.`}}},args:{py:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: ContainerProps) => <Container {...args}>Content goes here</Container>,
  parameters: {
    docs: {
      description: {
        story: "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."
      }
    }
  },
  args: {}
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};var s=[`Basic`,`WithVerticalPadding`];export{a as Basic,o as WithVerticalPadding,s as __namedExportsOrder,i as default};