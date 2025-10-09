import{j as e}from"./iframe-CH7UXiUD.js";import{P as n,a as o}from"./PanelBody.component-utE_Reup.js";import{P as t}from"./PortalProvider.component-DZFrdDYY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-BXYGnNwh.js";const p={title:"Layout/Panel/Panel",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},heading:{table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(t,{children:e.jsx("div",{className:"jn:contrast-100",children:e.jsx(r,{})})})],parameters:{docs:{source:{transform:r=>r.replace(/jn:/g,"")}}},render:r=>e.jsxs("div",{children:[e.jsx(n,{...r,children:e.jsx(o,{children:"Panel Body Content"})}),e.jsx("div",{className:"dummy-css-ignore jn:h-[150px]",children:"Content Area"})]})},a={args:{heading:"Panel Heading",opened:!0},parameters:{docs:{description:{story:'The panel component slides into view from the right. It is to be used as a drawer containing forms for actions on the current view, like "new item" etc. Panels should have a heading.'}}}},s={args:{opened:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Panel Heading",
    opened: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The panel component slides into view from the right. It is to be used as a drawer containing forms for actions on the current view, like "new item" etc. Panels should have a heading.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true
  }
}`,...s.parameters?.docs?.source}}};const h=["WithHeading","Plain"];export{s as Plain,a as WithHeading,h as __namedExportsOrder,p as default};
