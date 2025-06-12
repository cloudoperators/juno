import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as l,a as m}from"./PanelBody.component-BL2MT0S7.js";import{P as p}from"./PortalProvider.component--bS0Im1B.js";import"./index-DI7CEG0L.js";import"./index-DnsdnBHL.js";import"./index-BMl_lxmD.js";import"./Icon.component-BavwJ0_M.js";const j={title:"Layout/Panel/Panel",component:l,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},heading:{table:{type:{summary:"ReactNode"}}}},decorators:[n=>e.jsx(p,{children:e.jsx("div",{className:"jn:contrast-100",children:n()})})]},h=n=>e.jsxs("div",{children:[e.jsx(l,{...n,children:e.jsx(m,{children:"Panel Body Content"})}),e.jsx("div",{className:"dummy-css-ignore jn:h-[150px]",children:"Content Area"})]}),r={args:{heading:"Panel Heading",opened:!0},parameters:{docs:{description:{story:'The panel component slides into view from the right. It is to be used as a drawer containing forms for actions on the current view, like "new item" etc. Panels should have a heading.'}}}},a=h.bind({});a.args={opened:!0};var o,s,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => <div>
    <Panel {...args}>
      <PanelBody>Panel Body Content</PanelBody>
    </Panel>
    <div className="dummy-css-ignore jn:h-[150px]">Content Area</div>
  </div>`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const w=["WithHeading","Plain"];export{a as Plain,r as WithHeading,w as __namedExportsOrder,j as default};
