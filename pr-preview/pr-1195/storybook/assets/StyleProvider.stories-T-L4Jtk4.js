import{c as n,j as d}from"./iframe-CwrgFSKf.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Layout/StyleProvider",component:n,argTypes:{stylesWrapper:{options:["head","inline","shadowRoot"],control:{type:"radio"}},children:{control:!1}}},a=o=>d.jsx(n,{...o,children:o.children||o.stylesWrapper||"undefined"}),e={render:a,args:{stylesWrapper:"head"}},r={render:a,args:{stylesWrapper:"inline"}},s={render:a,args:{stylesWrapper:"shadowRoot"}},t={render:a,args:{stylesWrapper:"shadowRoot",theme:"theme-light",children:"Light Theme"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "head"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "inline"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot",
    theme: "theme-light",
    children: "Light Theme"
  }
}`,...t.parameters?.docs?.source}}};const i=["AddStylesToHead","AddInlineStyles","AddStylesToShadowRoot","WithLightTheme"];export{r as AddInlineStyles,e as AddStylesToHead,s as AddStylesToShadowRoot,t as WithLightTheme,i as __namedExportsOrder,c as default};
