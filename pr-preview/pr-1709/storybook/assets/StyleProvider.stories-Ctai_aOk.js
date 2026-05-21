import{i as e}from"./preload-helper-DbRxMUml.js";import{F as t,N as n,Z as r,z as i}from"./iframe-CutxMBKi.js";var a,o,s,c,l,u,d,f;e((()=>{r(),n(),a=i(),o={title:`Layout/StyleProvider`,component:t,argTypes:{stylesWrapper:{options:[`head`,`inline`,`shadowRoot`],control:{type:`radio`}},children:{control:!1}}},s=e=>(0,a.jsx)(t,{...e,children:e.children||e.stylesWrapper||`undefined`}),c={render:s,args:{stylesWrapper:`head`}},l={render:s,args:{stylesWrapper:`inline`}},u={render:s,args:{stylesWrapper:`shadowRoot`}},d={render:s,args:{stylesWrapper:`shadowRoot`,theme:`theme-light`,children:`Light Theme`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "head"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "inline"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot",
    theme: "theme-light",
    children: "Light Theme"
  }
}`,...d.parameters?.docs?.source}}},f=[`AddStylesToHead`,`AddInlineStyles`,`AddStylesToShadowRoot`,`WithLightTheme`]}))();export{l as AddInlineStyles,c as AddStylesToHead,u as AddStylesToShadowRoot,d as WithLightTheme,f as __namedExportsOrder,o as default};