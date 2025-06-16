import{j as e,c as B,k as C,S as _}from"./iframe-BJ4-9zl6.js";import{M as s}from"./Message.component-DU10Eg8n.js";import{P as T}from"./PortalProvider.component-5xq3rfmD.js";import{C as o}from"./CodeBlock.component-B5uZvSAf.js";import"./Icon.component-BlpBxAQ3.js";import"./JsonViewer.component-b8ZsmELb.js";import"./SearchInput.component-ByQ9uME0.js";import"./Stack.component-DkhMXesq.js";const N=({children:r,shadowRoot:d,shadowRootMode:i})=>d?e.jsx(_,{mode:i,children:e.jsx(e.Fragment,{children:r})}):r,h=({shadowRoot:r=!0,shadowRootMode:d="open",stylesWrapper:i="inline",theme:M=C,children:W})=>e.jsx(N,{shadowRoot:r,shadowRootMode:d,children:e.jsx(B,{theme:M,stylesWrapper:r?"inline":i,children:e.jsx(T,{children:W})})});try{h.displayName="AppShellProvider",h.__docgenInfo={description:"This provider acts as a wrapper for Juno apps. It renders a StyleProvider and PortalProvider",displayName:"AppShellProvider",props:{stylesWrapper:{defaultValue:{value:"inline"},description:"Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline.",name:"stylesWrapper",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"head"'}]}},theme:{defaultValue:{value:"theme-dark"},description:"theme: theme-dark or theme-light",name:"theme",required:!1,type:{name:"enum",value:[{value:'"theme-dark"'},{value:'"theme-light"'}]}},children:{defaultValue:null,description:"React nodes or a collection of React nodes to be rendered as content.",name:"children",required:!1,type:{name:"ReactNode"}},shadowRoot:{defaultValue:{value:"true"},description:"Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application.",name:"shadowRoot",required:!1,type:{name:"boolean"}},shadowRootMode:{defaultValue:{value:"open"},description:"Shadow root mode",name:"shadowRootMode",required:!1,type:{name:"enum",value:[{value:'"open"'},{value:'"closed"'}]}}}}}catch{}const H={title:"Layout/AppShellProvider",component:h,argTypes:{children:{control:!1}}},a={args:{children:[e.jsx(s,{children:"Juno styles are added inline"},0),e.jsx(o,{children:`
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
  </AppShellProvider>`},1)]}};var c,u,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var m,f,S;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,g,A;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(g=t.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var P,x,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(x=p.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var k,w,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const F=["Default","NoShadowRoot","StylesInHead","StylesInline","ThemeLight"];export{a as Default,l as NoShadowRoot,t as StylesInHead,p as StylesInline,n as ThemeLight,F as __namedExportsOrder,H as default};
