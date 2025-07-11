import{j as e}from"./iframe-CrLkm8rI.js";import{B as t}from"./Button.component-BT1lo7yk.js";import{P as a,a as s}from"./PanelBody.component-DQmPZBzJ.js";import{P as n}from"./PanelFooter.component-DWL9BkED.js";import{P as i}from"./PortalProvider.component-H9whDyTu.js";import"./Icon.component-BrzztJVD.js";import"./Spinner.component-CyPYmV3p.js";const P={title:"Layout/Panel/PanelFooter",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(i,{children:e.jsx("div",{className:"jn:contrast-100",children:e.jsx(r,{})})})]},o={render:r=>e.jsxs("div",{children:[e.jsx(a,{heading:"My Panel",opened:!0,children:e.jsx(s,{footer:e.jsx(n,{...r,children:e.jsx(t,{children:"Do it"})}),children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn:h-[250px]",children:"Content Area"})]}),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."}}},args:{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Panel heading="My Panel" opened>
        <PanelBody footer={<PanelFooter {...args}>
              <Button>Do it</Button>
            </PanelFooter>}>
          This is the panel body
        </PanelBody>
      </Panel>
      <div className="dummy-css-ignore jn:h-[250px]">Content Area</div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its \`footer\` parameter."
      }
    }
  },
  args: {}
}`,...o.parameters?.docs?.source}}};const f=["Footer"];export{o as Footer,f as __namedExportsOrder,P as default};
