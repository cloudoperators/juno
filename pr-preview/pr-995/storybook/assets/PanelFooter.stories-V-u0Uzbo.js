import{j as e}from"./iframe-B7VDxPWK.js";import{B as i}from"./Button.component-BqvdfIsV.js";import{P as d,a as l}from"./PanelBody.component-Zc52slu1.js";import{P as s}from"./PanelFooter.component-CVpl4pLz.js";import{P as c}from"./PortalProvider.component-DtJ7Fm1-.js";import"./Icon.component-BrQtvuC3.js";import"./Spinner.component-qOdCLAt5.js";const x={title:"Layout/Panel/PanelFooter",component:s,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(c,{children:e.jsx("div",{className:"jn-contrast-100",children:r()})})]},o={render:r=>e.jsxs("div",{children:[e.jsx(d,{heading:"My Panel",opened:!0,children:e.jsx(l,{footer:e.jsx(s,{...r,children:e.jsx(i,{children:"Do it"})}),children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn-h-[250px]",children:"Content Area"})]}),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."}}},args:{}};var n,t,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <div>
      <Panel heading="My Panel" opened>
        <PanelBody footer={<PanelFooter {...args}>
              <Button>Do it</Button>
            </PanelFooter>}>
          This is the panel body
        </PanelBody>
      </Panel>
      <div className="dummy-css-ignore jn-h-[250px]">Content Area</div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its \`footer\` parameter."
      }
    }
  },
  args: {}
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Footer"];export{o as Footer,j as __namedExportsOrder,x as default};
