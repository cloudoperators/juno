import{j as e,c as y,l as m,S as f}from"./iframe-C18dJaKw.js";import{M as s}from"./Message.component-B1iAiVng.js";import{P as g}from"./PortalProvider.component-CYly1JRh.js";import{C as o}from"./CodeBlock.component-BH4M5YJG.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-COcNEv4I.js";import"./JsonViewer.component-C9MKBow7.js";import"./SearchInput.component-CzeqmlTG.js";import"./Stack.component-QM4rGgtI.js";const S=({children:r,shadowRoot:d,shadowRootMode:i})=>d?e.jsx(f,{mode:i,children:e.jsx(e.Fragment,{children:r})}):r,h=({shadowRoot:r=!0,shadowRootMode:d="open",stylesWrapper:i="inline",theme:c=m,children:u})=>e.jsx(S,{shadowRoot:r,shadowRootMode:d,children:e.jsx(y,{theme:c,stylesWrapper:r?"inline":i,children:e.jsx(g,{children:u})})});try{h.displayName="AppShellProvider",h.__docgenInfo={description:"The `AppShellProvider` component serves as a wrapper for Juno apps. It integrates both\n`StyleProvider` and `PortalProvider`, offering consistent theming and managing portals across the app.\nThis provider can optionally render within a `ShadowRoot` to encapsulate styles independently.",displayName:"AppShellProvider",props:{stylesWrapper:{defaultValue:{value:"inline"},description:'Specifies where app stylesheets are imported.\nThis is relevant only if `shadowRoot` is `false`. Must be `"inline"` if using a `ShadowRoot`.',name:"stylesWrapper",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"head"'}]}},theme:{defaultValue:{value:"theme-dark"},description:'Determines the theme of the application, choosing between `"theme-dark"` or `"theme-light"`.\nDefaults to the global default theme name.',name:"theme",required:!1,type:{name:"enum",value:[{value:'"theme-dark"'},{value:'"theme-light"'}]}},children:{defaultValue:null,description:"React nodes or a collection of React nodes to be rendered as content.",name:"children",required:!1,type:{name:"ReactNode"}},shadowRoot:{defaultValue:{value:"true"},description:"Determines whether the app is rendered inside a `ShadowRoot`.\nOnly set to `false` if the app runs as a standalone application.",name:"shadowRoot",required:!1,type:{name:"boolean"}},shadowRootMode:{defaultValue:{value:"open"},description:"Specifies the mode of the `ShadowRoot`.",name:"shadowRootMode",required:!1,type:{name:"enum",value:[{value:'"open"'},{value:'"closed"'}]}}}}}catch{}const B={title:"Layout/AppShellProvider",component:h,argTypes:{children:{control:!1}}},a={args:{children:[e.jsx(s,{children:"Juno styles are added inline"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},t={args:{shadowRoot:!1,children:[e.jsx(s,{children:"No ShadowRoot, but the styles are still inline (default)"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},l={args:{shadowRoot:!1,stylesWrapper:"head",children:[e.jsx(s,{children:"Juno styles are added to the head tag"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},n={args:{shadowRoot:!1,stylesWrapper:"inline",children:[e.jsx(s,{children:"Juno style are added inline"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},p={args:{theme:"theme-light",children:[e.jsx(s,{children:"Light Theme"},0),e.jsx(o,{children:`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`},1)]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const C=["Default","NoShadowRoot","StylesInHead","StylesInline","ThemeLight"];export{a as Default,t as NoShadowRoot,l as StylesInHead,n as StylesInline,p as ThemeLight,C as __namedExportsOrder,B as default};
