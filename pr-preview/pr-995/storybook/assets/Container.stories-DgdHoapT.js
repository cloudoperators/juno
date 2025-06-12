import{C as d,j as l}from"./iframe-BTuQkvQ2.js";const h={title:"Layout/Container",component:d,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},parameters:{docs:{description:{component:"A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding."}}}},c=p=>l.jsx(d,{...p,children:"Content goes here"}),e={render:c,parameters:{docs:{description:{story:"Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."}}},args:{}},t={render:c,parameters:{docs:{description:{story:"A content container with vertical padding added. This will add padding to both the top and the bottom of the container."}}},args:{py:!0}};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."
      }
    }
  },
  args: {}
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var r,s,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const y=["Basic","WithVerticalPadding"];export{e as Basic,t as WithVerticalPadding,y as __namedExportsOrder,h as default};
