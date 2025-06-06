import{j as e}from"./iframe-8-cwDH10.js";import{B as p}from"./Button.component-BnXPmQEf.js";import{a as l,P as y}from"./PanelBody.component-DE70o3L5.js";import{P as f}from"./PanelFooter.component-CclcUed6.js";import{P as h}from"./PortalProvider.component-B24QbBZK.js";import"./Icon.component-CTo8OzKg.js";import"./Spinner.component-BOOVsHtD.js";const F={title:"Layout/Panel/PanelBody",component:l,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},footer:{control:!1,table:{type:{summary:"ReactElement"}}}},decorators:[t=>e.jsx(h,{children:e.jsx("div",{className:"jn-contrast-100",children:t()})})]},x=e.jsx(f,{children:e.jsx(p,{label:"Click me"})}),m=t=>e.jsxs("div",{children:[e.jsx(y,{heading:"My Panel",opened:!0,children:e.jsx(l,{...t,children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn-h-[250px]",children:"Content Area"})]}),r={render:m,parameters:{docs:{description:{story:"A container for panel content."}}},args:{}},o={render:m,parameters:{docs:{description:{story:"A container for panel content with footer."}}},args:{footer:x}};var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const T=["Body","BodyWithFooter"];export{r as Body,o as BodyWithFooter,T as __namedExportsOrder,F as default};
