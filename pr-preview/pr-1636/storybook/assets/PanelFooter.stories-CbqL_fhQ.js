import{g as e}from"./iframe-DaLLswkI.js";import{t}from"./PortalProvider.component-CY2B953U.js";import{t as n}from"./Button.component-CWavRqvr.js";import{n as r,t as i}from"./PanelBody.component-D1kCYFAN.js";import{t as a}from"./PanelFooter.component-Qf-21wzj.js";import"react";var o=e(),s={title:`Layout/Panel/PanelFooter`,component:a,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,o.jsx)(t,{children:(0,o.jsx)(`div`,{className:`jn:contrast-100`,children:(0,o.jsx)(e,{})})})]},c={render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(r,{heading:`My Panel`,opened:!0,children:(0,o.jsx)(i,{footer:(0,o.jsx)(a,{...e,children:(0,o.jsx)(n,{children:`Do it`})}),children:`This is the panel body`})}),(0,o.jsx)(`div`,{className:`dummy-css-ignore jn:h-[250px]`,children:`Content Area`})]}),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."},source:{transform:e=>e.replace(/jn:/g,``)}}},args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      },
      source: {
        transform: (source: string): string => {
          // Remove :jn prefix for docs, internal use only
          return source.replace(/jn:/g, "");
        }
      }
    }
  },
  args: {}
}`,...c.parameters?.docs?.source}}};var l=[`Footer`];export{c as Footer,l as __namedExportsOrder,s as default};