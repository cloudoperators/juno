import{g as e,m as t}from"./iframe-DaLLswkI.js";import"react";var n=e(),r={title:`Layout/StyleProvider`,component:t,argTypes:{stylesWrapper:{options:[`head`,`inline`,`shadowRoot`],control:{type:`radio`}},children:{control:!1}}},i=e=>(0,n.jsx)(t,{...e,children:e.children||e.stylesWrapper||`undefined`}),a={render:i,args:{stylesWrapper:`head`}},o={render:i,args:{stylesWrapper:`inline`}},s={render:i,args:{stylesWrapper:`shadowRoot`}},c={render:i,args:{stylesWrapper:`shadowRoot`,theme:`theme-light`,children:`Light Theme`}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "head"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "inline"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot",
    theme: "theme-light",
    children: "Light Theme"
  }
}`,...c.parameters?.docs?.source}}};var l=[`AddStylesToHead`,`AddInlineStyles`,`AddStylesToShadowRoot`,`WithLightTheme`];export{o as AddInlineStyles,a as AddStylesToHead,s as AddStylesToShadowRoot,c as WithLightTheme,l as __namedExportsOrder,r as default};