import{j as e}from"./iframe-Bc3Wjhg4.js";import{B as t}from"./Button.component-Bzg4Q3ru.js";import{P as a,a as s}from"./PanelBody.component-CXnIaVA-.js";import{P as n}from"./PanelFooter.component-7mQogZ3-.js";import{P as i}from"./PortalProvider.component-BVKIm68b.js";import"./Icon.component-t8J23iBK.js";import"./Spinner.component-NPfKDKl_.js";const f={title:"Layout/Panel/PanelFooter",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[o=>e.jsx(i,{children:e.jsx("div",{className:"jn:contrast-100",children:e.jsx(o,{})})})]},r={render:o=>e.jsxs("div",{children:[e.jsx(a,{heading:"My Panel",opened:!0,children:e.jsx(s,{footer:e.jsx(n,{...o,children:e.jsx(t,{children:"Do it"})}),children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn:h-[250px]",children:"Content Area"})]}),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."},source:{transform:o=>o.replace(/jn:/g,"")}}},args:{}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const h=["Footer"];export{r as Footer,h as __namedExportsOrder,f as default};
