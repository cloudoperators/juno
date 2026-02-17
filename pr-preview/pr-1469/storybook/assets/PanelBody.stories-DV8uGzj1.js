import{j as e}from"./iframe-BEb8cl8Z.js";import{B as a}from"./Button.component-BB30A-bw.js";import{a as n,P as s}from"./PanelBody.component-BTYUefOK.js";import{P as c}from"./PanelFooter.component-D-P2UC3w.js";import{P as i}from"./PortalProvider.component-RSOsZhPe.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-cm9a0uqc.js";import"./Spinner.component-BcfjZHST.js";const j={title:"Layout/Panel/PanelBody",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},footer:{control:!1,table:{type:{summary:"ReactElement"}}}},decorators:[r=>e.jsx(i,{children:e.jsx("div",{className:"jn:contrast-100",children:e.jsx(r,{})})})],parameters:{docs:{source:{transform:r=>r.replace(/jn:/g,"")}}},render:r=>e.jsxs("div",{children:[e.jsx(s,{heading:"My Panel",opened:!0,children:e.jsx(n,{...r,children:"This is the panel body"})}),e.jsx("div",{className:"dummy-css-ignore jn:h-[250px]",children:"Content Area"})]})},d=e.jsx(c,{children:e.jsx(a,{label:"Click me"})}),o={parameters:{docs:{description:{story:"A container for panel content."}}},args:{}},t={parameters:{docs:{description:{story:"A container for panel content with footer."}}},args:{footer:d}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A container for panel content."
      }
    }
  },
  args: {}
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["Body","BodyWithFooter"];export{o as Body,t as BodyWithFooter,P as __namedExportsOrder,j as default};
