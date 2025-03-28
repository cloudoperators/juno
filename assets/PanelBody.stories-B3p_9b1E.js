import{j as e}from"./jsx-runtime-BP6H2k8O.js";import{B as l}from"./Button.component-BBzXWSKc.js";import{a as m,P as y}from"./PanelBody.component-CIkAU_9L.js";import{P as f}from"./PanelFooter.component-AajtrMPo.js";import{P as h}from"./PortalProvider.component-Dpl-KYct.js";import"./index-DysCNOs_.js";import"./Icon.component-CXl2PBh9.js";import"./widgets-BR6-ubtP.js";import"./Spinner.component-D_tPrRjo.js";import"./index-DxJeRO9x.js";const v={title:"Layout/Panel/PanelBody",component:m,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},footer:{control:!1,table:{type:{summary:"ReactElement"}}}},decorators:[t=>e.jsx(h,{children:e.jsx("div",{className:"jn-contrast-100",children:t()})})]},x=e.jsx(f,{children:e.jsx(l,{label:"Click me"})}),p=t=>e.jsxs("div",{children:[e.jsx(y,{heading:"My Panel",opened:!0,children:e.jsx(m,{...t,children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn-h-[250px]",children:"Content Area"})]}),r={render:p,parameters:{docs:{description:{story:"A container for panel content."}}},args:{}},o={render:p,parameters:{docs:{description:{story:"A container for panel content with footer."}}},args:{footer:x}};var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const N=["Body","BodyWithFooter"];export{r as Body,o as BodyWithFooter,N as __namedExportsOrder,v as default};
