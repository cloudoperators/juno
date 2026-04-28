import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./PortalProvider.component-C0iptKAD.js";import{t as r}from"./Button.component-J1fJR8AZ.js";import{n as i,t as a}from"./PanelBody.component-BM-ZD1Ew.js";import{t as o}from"./PanelFooter.component-CPAGIwv1.js";e();var s=t(),c={title:`Layout/Panel/PanelFooter`,component:o,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,s.jsx)(n,{children:(0,s.jsx)(`div`,{className:`jn:contrast-100`,children:(0,s.jsx)(e,{})})})]},l={render:e=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(i,{heading:`My Panel`,opened:!0,children:(0,s.jsx)(a,{footer:(0,s.jsx)(o,{...e,children:(0,s.jsx)(r,{children:`Do it`})}),children:`This is the panel body`})}),(0,s.jsx)(`div`,{className:`dummy-css-ignore jn:h-[250px]`,children:`Content Area`})]}),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."},source:{transform:e=>e.replace(/jn:/g,``)}}},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};var u=[`Footer`];export{l as Footer,u as __namedExportsOrder,c as default};