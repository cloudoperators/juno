import{j as e,c as y,k as m,S as f}from"./iframe-CvtOlpm5.js";import{M as s}from"./Message.component-PcWKCpWu.js";import{P as S}from"./PortalProvider.component-ByA1f-lR.js";import{C as o}from"./CodeBlock.component-CwEgr9xY.js";import"./Icon.component-H28GPzCC.js";import"./JsonViewer.component-BjkS15rp.js";import"./SearchInput.component-CqjRDanD.js";import"./Stack.component-BaN1lQgh.js";const v=({children:r,shadowRoot:d,shadowRootMode:i})=>d?e.jsx(f,{mode:i,children:e.jsx(e.Fragment,{children:r})}):r,h=({shadowRoot:r=!0,shadowRootMode:d="open",stylesWrapper:i="inline",theme:c=m,children:u})=>e.jsx(v,{shadowRoot:r,shadowRootMode:d,children:e.jsx(y,{theme:c,stylesWrapper:r?"inline":i,children:e.jsx(S,{children:u})})});try{h.displayName="AppShellProvider",h.__docgenInfo={description:"This provider acts as a wrapper for Juno apps. It renders a StyleProvider and PortalProvider",displayName:"AppShellProvider",props:{stylesWrapper:{defaultValue:{value:"inline"},description:"Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline.",name:"stylesWrapper",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"head"'}]}},theme:{defaultValue:{value:"theme-dark"},description:"theme: theme-dark or theme-light",name:"theme",required:!1,type:{name:"enum",value:[{value:'"theme-dark"'},{value:'"theme-light"'}]}},children:{defaultValue:null,description:"React nodes or a collection of React nodes to be rendered as content.",name:"children",required:!1,type:{name:"ReactNode"}},shadowRoot:{defaultValue:{value:"true"},description:"Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application.",name:"shadowRoot",required:!1,type:{name:"boolean"}},shadowRootMode:{defaultValue:{value:"open"},description:"Shadow root mode",name:"shadowRootMode",required:!1,type:{name:"enum",value:[{value:'"open"'},{value:'"closed"'}]}}}}}catch{}const M={title:"Layout/AppShellProvider",component:h,argTypes:{children:{control:!1}}},a={args:{children:[e.jsx(s,{children:"Juno styles are added inline"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},l={args:{shadowRoot:!1,children:[e.jsx(s,{children:"No ShadowRoot, but the styles are still inline (default)"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},t={args:{shadowRoot:!1,stylesWrapper:"head",children:[e.jsx(s,{children:"Juno styles are added to the head tag"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},p={args:{shadowRoot:!1,stylesWrapper:"inline",children:[e.jsx(s,{children:"Juno style are added inline"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},n={args:{theme:"theme-light",children:[e.jsx(s,{children:"Light Theme"},0),e.jsx(o,{children:`
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const W=["Default","NoShadowRoot","StylesInHead","StylesInline","ThemeLight"];export{a as Default,l as NoShadowRoot,t as StylesInHead,p as StylesInline,n as ThemeLight,W as __namedExportsOrder,M as default};
