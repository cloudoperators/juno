import{j as e}from"./iframe-CIHUuHM3.js";import{M as r}from"./Message.component-COM5sXzt.js";import{A as n}from"./AppShellProvider.component-Drg6ouqt.js";import{C as s}from"./CodeBlock.component-Bq09Tjy-.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-B4A67JeU.js";import"./PortalProvider.component-BJWqH0ZV.js";import"./JsonViewer.component-D4eSTffn.js";import"./SearchInput.component-DBnee_nA.js";import"./Stack.component-BKjyzKsx.js";const f={title:"Layout/AppShellProvider",component:n,argTypes:{children:{control:!1}}},o={args:{children:[e.jsx(r,{children:"Juno styles are added inline"},0),e.jsx(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},p={args:{shadowRoot:!1,children:[e.jsx(r,{children:"No ShadowRoot, but the styles are still inline (default)"},0),e.jsx(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},l={args:{shadowRoot:!1,stylesWrapper:"head",children:[e.jsx(r,{children:"Juno styles are added to the head tag"},0),e.jsx(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},t={args:{shadowRoot:!1,stylesWrapper:"inline",children:[e.jsx(r,{children:"Juno style are added inline"},0),e.jsx(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},a={args:{theme:"theme-light",children:[e.jsx(r,{children:"Light Theme"},0),e.jsx(s,{children:`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`},1)]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Message key={0}>Juno styles are added inline</Message>, <CodeBlock key={1}>
        {\`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }\`}
      </CodeBlock>]
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    shadowRoot: false,
    children: [<Message key={0}>No ShadowRoot, but the styles are still inline (default)</Message>, <CodeBlock key={1}>
        {\`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }\`}
      </CodeBlock>]
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    shadowRoot: false,
    stylesWrapper: "head",
    children: [<Message key={0}>Juno styles are added to the head tag</Message>, <CodeBlock key={1}>
        {\`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }\`}
      </CodeBlock>]
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    shadowRoot: false,
    stylesWrapper: "inline",
    children: [<Message key={0}>Juno style are added inline</Message>, <CodeBlock key={1}>
        {\`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }\`}
      </CodeBlock>]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    theme: "theme-light",
    children: [<Message key={0}>Light Theme</Message>, <CodeBlock key={1}>{\`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>\`}</CodeBlock>]
  }
}`,...a.parameters?.docs?.source}}};const v=["Default","NoShadowRoot","StylesInHead","StylesInline","ThemeLight"];export{o as Default,p as NoShadowRoot,l as StylesInHead,t as StylesInline,a as ThemeLight,v as __namedExportsOrder,f as default};
