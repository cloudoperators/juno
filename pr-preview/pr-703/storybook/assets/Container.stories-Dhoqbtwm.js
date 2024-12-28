import{j as l}from"./jsx-runtime-D6fbYt3N.js";import{C as d}from"./Container.component-CzIMm-Jh.js";import"./index-DysCNOs_.js";const u={title:"Layout/Container",component:d,argTypes:{children:{control:!1}},parameters:{docs:{description:{component:"A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding."}}}},c=p=>l.jsx(d,{...p,children:"Content goes here"}),t={render:c,parameters:{docs:{description:{story:"Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."}}},args:{}},e={render:c,parameters:{docs:{description:{story:"A content container with vertical padding added. This will add padding to both the top and the bottom of the container."}}},args:{py:!0}};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."
      }
    }
  },
  args: {}
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const g=["Basic","WithVerticalPadding"];export{t as Basic,e as WithVerticalPadding,g as __namedExportsOrder,u as default};
