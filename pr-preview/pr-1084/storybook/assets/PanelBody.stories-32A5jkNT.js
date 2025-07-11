import{j as e}from"./iframe-CrLkm8rI.js";import{B as a}from"./Button.component-BT1lo7yk.js";import{a as n,P as s}from"./PanelBody.component-DQmPZBzJ.js";import{P as c}from"./PanelFooter.component-DWL9BkED.js";import{P as i}from"./PortalProvider.component-H9whDyTu.js";import"./Icon.component-BrzztJVD.js";import"./Spinner.component-CyPYmV3p.js";const u={title:"Layout/Panel/PanelBody",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},footer:{control:!1,table:{type:{summary:"ReactElement"}}}},decorators:[t=>e.jsx(i,{children:e.jsx("div",{className:"jn:contrast-100",children:e.jsx(t,{})})})],render:t=>e.jsxs("div",{children:[e.jsx(s,{heading:"My Panel",opened:!0,children:e.jsx(n,{...t,children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn:h-[250px]",children:"Content Area"})]})},d=e.jsx(c,{children:e.jsx(a,{label:"Click me"})}),r={parameters:{docs:{description:{story:"A container for panel content."}}},args:{}},o={parameters:{docs:{description:{story:"A container for panel content with footer."}}},args:{footer:d}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A container for panel content."
      }
    }
  },
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Body","BodyWithFooter"];export{r as Body,o as BodyWithFooter,j as __namedExportsOrder,u as default};
