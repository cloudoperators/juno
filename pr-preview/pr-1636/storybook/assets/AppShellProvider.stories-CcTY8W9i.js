import{g as e,h as t,m as n,p as r}from"./iframe-DaLLswkI.js";import{t as i}from"./Message.component-CWgL-3ZN.js";import"./Message-c41U3szR.js";import{t as a}from"./PortalProvider.component-CY2B953U.js";import"./PortalProvider-DMzxyAqb.js";import{t as o}from"./CodeBlock.component-3drBnOYn.js";import"react";var s=e(),c=({children:e,shadowRoot:n,shadowRootMode:r})=>n?(0,s.jsx)(t,{mode:r,children:(0,s.jsx)(s.Fragment,{children:e})}):e,l=({shadowRoot:e=!0,shadowRootMode:t=`open`,stylesWrapper:i=`inline`,theme:o=r,children:l})=>(0,s.jsx)(c,{shadowRoot:e,shadowRootMode:t,children:(0,s.jsx)(n,{theme:o,stylesWrapper:e?`inline`:i,children:(0,s.jsx)(a,{children:l})})});try{l.displayName=`AppShellProvider`,l.__docgenInfo={description:"The `AppShellProvider` component serves as a wrapper for Juno apps. It integrates both\n`StyleProvider` and `PortalProvider`, offering consistent theming and managing portals across the app.\nThis provider can optionally render within a `ShadowRoot` to encapsulate styles independently.",displayName:`AppShellProvider`,props:{stylesWrapper:{defaultValue:{value:`inline`},description:'Specifies where app stylesheets are imported.\nThis is relevant only if `shadowRoot` is `false`. Must be `"inline"` if using a `ShadowRoot`.',name:`stylesWrapper`,required:!1,type:{name:`enum`,value:[{value:`"inline"`},{value:`"head"`}]}},theme:{defaultValue:{value:`theme-dark`},description:'Determines the theme of the application, choosing between `"theme-dark"` or `"theme-light"`.\nDefaults to the global default theme name.',name:`theme`,required:!1,type:{name:`enum`,value:[{value:`"theme-dark"`},{value:`"theme-light"`}]}},children:{defaultValue:null,description:`React nodes or a collection of React nodes to be rendered as content.`,name:`children`,required:!1,type:{name:`ReactNode`}},shadowRoot:{defaultValue:{value:`true`},description:"Determines whether the app is rendered inside a `ShadowRoot`.\nOnly set to `false` if the app runs as a standalone application.",name:`shadowRoot`,required:!1,type:{name:`boolean`}},shadowRootMode:{defaultValue:{value:`open`},description:"Specifies the mode of the `ShadowRoot`.",name:`shadowRootMode`,required:!1,type:{name:`enum`,value:[{value:`"open"`},{value:`"closed"`}]}}}}}catch{}var u={title:`Layout/AppShellProvider`,component:l,argTypes:{children:{control:!1}}},d={args:{children:[(0,s.jsx)(i,{children:`Juno styles are added inline`},0),(0,s.jsx)(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},f={args:{shadowRoot:!1,children:[(0,s.jsx)(i,{children:`No ShadowRoot, but the styles are still inline (default)`},0),(0,s.jsx)(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},p={args:{shadowRoot:!1,stylesWrapper:`head`,children:[(0,s.jsx)(i,{children:`Juno styles are added to the head tag`},0),(0,s.jsx)(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},m={args:{shadowRoot:!1,stylesWrapper:`inline`,children:[(0,s.jsx)(i,{children:`Juno style are added inline`},0),(0,s.jsx)(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},h={args:{theme:`theme-light`,children:[(0,s.jsx)(i,{children:`Light Theme`},0),(0,s.jsx)(o,{children:`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`},1)]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`NoShadowRoot`,`StylesInHead`,`StylesInline`,`ThemeLight`];export{d as Default,f as NoShadowRoot,p as StylesInHead,m as StylesInline,h as ThemeLight,g as __namedExportsOrder,u as default};