import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t,h as n,m as r,p as i}from"./iframe-qPHz0liX.js";import{t as a}from"./Message.component-DG97QzGz.js";import"./Message-Di_i94FU.js";import{t as o}from"./PortalProvider.component-C0iptKAD.js";import"./PortalProvider-BUJ015cu.js";import{t as s}from"./CodeBlock.component-Dibhn6Gn.js";e();var c=t(),l=({children:e,shadowRoot:t,shadowRootMode:r})=>t?(0,c.jsx)(n,{mode:r,children:(0,c.jsx)(c.Fragment,{children:e})}):e,u=({shadowRoot:e=!0,shadowRootMode:t=`open`,stylesWrapper:n=`inline`,theme:a=i,children:s})=>(0,c.jsx)(l,{shadowRoot:e,shadowRootMode:t,children:(0,c.jsx)(r,{theme:a,stylesWrapper:e?`inline`:n,children:(0,c.jsx)(o,{children:s})})});try{u.displayName=`AppShellProvider`,u.__docgenInfo={description:"The `AppShellProvider` component serves as a wrapper for Juno apps. It integrates both\n`StyleProvider` and `PortalProvider`, offering consistent theming and managing portals across the app.\nThis provider can optionally render within a `ShadowRoot` to encapsulate styles independently.",displayName:`AppShellProvider`,props:{stylesWrapper:{defaultValue:{value:`inline`},description:'Specifies where app stylesheets are imported.\nThis is relevant only if `shadowRoot` is `false`. Must be `"inline"` if using a `ShadowRoot`.',name:`stylesWrapper`,required:!1,type:{name:`enum`,value:[{value:`"inline"`},{value:`"head"`}]}},theme:{defaultValue:{value:`theme-dark`},description:'Determines the theme of the application, choosing between `"theme-dark"` or `"theme-light"`.\nDefaults to the global default theme name.',name:`theme`,required:!1,type:{name:`enum`,value:[{value:`"theme-dark"`},{value:`"theme-light"`}]}},children:{defaultValue:null,description:`React nodes or a collection of React nodes to be rendered as content.`,name:`children`,required:!1,type:{name:`ReactNode`}},shadowRoot:{defaultValue:{value:`true`},description:"Determines whether the app is rendered inside a `ShadowRoot`.\nOnly set to `false` if the app runs as a standalone application.",name:`shadowRoot`,required:!1,type:{name:`boolean`}},shadowRootMode:{defaultValue:{value:`open`},description:"Specifies the mode of the `ShadowRoot`.",name:`shadowRootMode`,required:!1,type:{name:`enum`,value:[{value:`"open"`},{value:`"closed"`}]}}}}}catch{}var d={title:`Layout/AppShellProvider`,component:u,argTypes:{children:{control:!1}}},f={args:{children:[(0,c.jsx)(a,{children:`Juno styles are added inline`},0),(0,c.jsx)(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},p={args:{shadowRoot:!1,children:[(0,c.jsx)(a,{children:`No ShadowRoot, but the styles are still inline (default)`},0),(0,c.jsx)(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},m={args:{shadowRoot:!1,stylesWrapper:`head`,children:[(0,c.jsx)(a,{children:`Juno styles are added to the head tag`},0),(0,c.jsx)(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},h={args:{shadowRoot:!1,stylesWrapper:`inline`,children:[(0,c.jsx)(a,{children:`Juno style are added inline`},0),(0,c.jsx)(s,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},g={args:{theme:`theme-light`,children:[(0,c.jsx)(a,{children:`Light Theme`},0),(0,c.jsx)(s,{children:`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`},1)]}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`NoShadowRoot`,`StylesInHead`,`StylesInline`,`ThemeLight`];export{f as Default,p as NoShadowRoot,m as StylesInHead,h as StylesInline,g as ThemeLight,_ as __namedExportsOrder,d as default};