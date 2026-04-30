import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,z as n}from"./iframe-DjykiOsC.js";import{n as r,t as i}from"./PortalProvider.component-CZTVpXVu.js";import{n as a,t as o}from"./Button.component-GL-KOESy.js";import{i as s,n as c,r as l,t as u}from"./PanelBody.component-CosuC1gT.js";import{n as d,t as f}from"./PanelFooter.component-DXK8X5qG.js";var p,m,h,g;e((()=>{n(),a(),s(),c(),d(),r(),p=t(),m={title:`Layout/Panel/PanelFooter`,component:f,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,p.jsx)(i,{children:(0,p.jsx)(`div`,{className:`jn:contrast-100`,children:(0,p.jsx)(e,{})})})]},h={render:e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(l,{heading:`My Panel`,opened:!0,children:(0,p.jsx)(u,{footer:(0,p.jsx)(f,{...e,children:(0,p.jsx)(o,{children:`Do it`})}),children:`This is the panel body`})}),(0,p.jsx)(`div`,{className:`dummy-css-ignore jn:h-[250px]`,children:`Content Area`})]}),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."},source:{transform:e=>e.replace(/jn:/g,``)}}},args:{}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Footer`]}))();export{h as Footer,g as __namedExportsOrder,m as default};