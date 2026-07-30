import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{t as r}from"./Message.component-Df2lo6dC.js";import{t as i}from"./Message-DSuLm0rv.js";import{n as a,t as o}from"./AppShellProvider.component-DRHEVFKy.js";import{n as s,r as c,t as l}from"./CodeBlock.component-DQcRjA2O.js";var u=e((()=>{s(),c()})),d,f,p,m,h,g,_,v;e((()=>{t(),i(),a(),u(),d=n(),f={title:`Layout/AppShellProvider`,component:o,argTypes:{children:{control:!1}}},p={args:{children:[(0,d.jsx)(r,{children:`Juno styles are added inline`},0),(0,d.jsx)(l,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},m={args:{shadowRoot:!1,children:[(0,d.jsx)(r,{children:`No ShadowRoot, but the styles are still inline (default)`},0),(0,d.jsx)(l,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},h={args:{shadowRoot:!1,stylesWrapper:`head`,children:[(0,d.jsx)(r,{children:`Juno styles are added to the head tag`},0),(0,d.jsx)(l,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},g={args:{shadowRoot:!1,stylesWrapper:`inline`,children:[(0,d.jsx)(r,{children:`Juno style are added inline`},0),(0,d.jsx)(l,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},_={args:{theme:`theme-light`,children:[(0,d.jsx)(r,{children:`Light Theme`},0),(0,d.jsx)(l,{children:`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`},1)]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`NoShadowRoot`,`StylesInHead`,`StylesInline`,`ThemeLight`]}))();export{p as Default,m as NoShadowRoot,h as StylesInHead,g as StylesInline,_ as ThemeLight,v as __namedExportsOrder,f as default};