import{j as e}from"./iframe-DL2z27nb.js";import{B as i}from"./Button.component-BLVAQgrT.js";import{P as d,a as l}from"./PanelBody.component-Coxnyd-o.js";import{P as s}from"./PanelFooter.component-BE8Hw4pv.js";import{P as c}from"./PortalProvider.component-BbdNSRze.js";import"./Icon.component-BaIV3QHy.js";import"./Spinner.component-s6cTiFWY.js";const x={title:"Layout/Panel/PanelFooter",component:s,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(c,{children:e.jsx("div",{className:"jn:contrast-100",children:e.jsx(r,{})})})]},o={render:r=>e.jsxs("div",{children:[e.jsx(d,{heading:"My Panel",opened:!0,children:e.jsx(l,{footer:e.jsx(s,{...r,children:e.jsx(i,{children:"Do it"})}),children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn:h-[250px]",children:"Content Area"})]}),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."}}},args:{}};var n,t,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Footer"];export{o as Footer,j as __namedExportsOrder,x as default};
