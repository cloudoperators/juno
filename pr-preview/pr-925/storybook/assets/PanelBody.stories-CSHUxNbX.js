import{j as e}from"./jsx-runtime-BP6H2k8O.js";import{B as l}from"./Button.component-w3tEngOA.js";import{a as m,P as y}from"./PanelBody.component-CERo68wO.js";import{P as f}from"./PanelFooter.component-CQZTfW46.js";import{P as h}from"./PortalProvider.component-CD4awzcQ.js";import"./index-DysCNOs_.js";import"./Icon.component-DsLoGuwO.js";import"./Spinner.component-DWsJM9DM.js";import"./index-BEZZli5v.js";const b={title:"Layout/Panel/PanelBody",component:m,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},footer:{control:!1,table:{type:{summary:"ReactElement"}}}},decorators:[t=>e.jsx(h,{children:e.jsx("div",{className:"jn-contrast-100",children:t()})})]},x=e.jsx(f,{children:e.jsx(l,{label:"Click me"})}),p=t=>e.jsxs("div",{children:[e.jsx(y,{heading:"My Panel",opened:!0,children:e.jsx(m,{...t,children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn-h-[250px]",children:"Content Area"})]}),r={render:p,parameters:{docs:{description:{story:"A container for panel content."}}},args:{}},o={render:p,parameters:{docs:{description:{story:"A container for panel content with footer."}}},args:{footer:x}};var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A container for panel content."
      }
    }
  },
  args: {}
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A container for panel content with footer."
      }
    }
  },
  args: {
    footer: FooterExample
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const v=["Body","BodyWithFooter"];export{r as Body,o as BodyWithFooter,v as __namedExportsOrder,b as default};
