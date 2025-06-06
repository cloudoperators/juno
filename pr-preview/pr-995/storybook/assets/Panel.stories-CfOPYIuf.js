import{j as e}from"./iframe-CTR9i8U0.js";import{P as l,a as m}from"./PanelBody.component-CUxkDnwx.js";import{P as p}from"./PortalProvider.component-B6Z-Ne69.js";import"./Icon.component-BDAzSom4.js";const v={title:"Layout/Panel/Panel",component:l,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},heading:{table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(p,{children:e.jsx("div",{className:"jn-contrast-100",children:r()})})]},h=r=>e.jsxs("div",{children:[e.jsx(l,{...r,children:e.jsx(m,{children:"Panel Body Content"})}),e.jsx("div",{className:"dummy-css-ignore jn-h-[150px]",children:"Content Area"})]}),n={args:{heading:"Panel Heading",opened:!0},parameters:{docs:{description:{story:'The panel component slides into view from the right. It is to be used as a drawer containing forms for actions on the current view, like "new item" etc. Panels should have a heading.'}}}},a=h.bind({});a.args={opened:!0};var s,o,t;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    heading: "Panel Heading",
    opened: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The panel component slides into view from the right. It is to be used as a drawer containing forms for actions on the current view, like "new item" etc. Panels should have a heading.'
      }
    }
  }
}`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => <div>
    <Panel {...args}>
      <PanelBody>Panel Body Content</PanelBody>
    </Panel>
    <div className="dummy-css-ignore jn-h-[150px]">Content Area</div>
  </div>`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const x=["WithHeading","Plain"];export{a as Plain,n as WithHeading,x as __namedExportsOrder,v as default};
