import{j as e}from"./jsx-runtime-BP6H2k8O.js";import{M as s}from"./Message.component-B7H3qzyI.js";import{S as B,D as _}from"./StyleProvider.component-BtEDxZlw.js";import{S as C}from"./ShadowRoot.component-Bx6-v4Ew.js";import{P as N}from"./PortalProvider.component-Dpl-KYct.js";import{C as o}from"./CodeBlock.component-BTM9yb6L.js";import"./index-DysCNOs_.js";import"./Icon.component-Cri6u08O.js";import"./widgets-BR6-ubtP.js";import"./index-DxJeRO9x.js";import"./JsonViewer.component-D37LkJ1s.js";import"./SearchInput.component-pWfXUtZJ.js";import"./Stack.component-JaLCSfPt.js";const I=({children:r,shadowRoot:h,shadowRootMode:c})=>h?e.jsx(C,{mode:c,children:e.jsx(e.Fragment,{children:r})}):r,i=({shadowRoot:r=!0,shadowRootMode:h="open",stylesWrapper:c="inline",theme:T=_,children:W})=>e.jsx(I,{shadowRoot:r,shadowRootMode:h,children:e.jsx(B,{theme:T,stylesWrapper:r?"inline":c,children:e.jsx(N,{children:W})})});try{i.displayName="AppShellProvider",i.__docgenInfo={description:"This provider acts as a wrapper for Juno apps. It renders a StyleProvider and PortalProvider",displayName:"AppShellProvider",props:{stylesWrapper:{defaultValue:{value:"inline"},description:"Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline.",name:"stylesWrapper",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"inline"'}]}},theme:{defaultValue:{value:"theme-dark"},description:"theme: theme-dark or theme-light",name:"theme",required:!1,type:{name:"enum",value:[{value:'"theme-dark"'},{value:'"theme-light"'}]}},children:{defaultValue:null,description:"React nodes or a collection of React nodes to be rendered as content.",name:"children",required:!1,type:{name:"ReactNode"}},shadowRoot:{defaultValue:{value:"true"},description:"Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application.",name:"shadowRoot",required:!1,type:{name:"boolean"}},shadowRootMode:{defaultValue:{value:"open"},description:"Shadow root mode",name:"shadowRootMode",required:!1,type:{name:"enum",value:[{value:'"closed"'},{value:'"open"'}]}}}}}catch{}const K={title:"Layout/AppShellProvider",component:i,argTypes:{children:{control:!1}}},a=r=>e.jsx(i,{...r,children:r.children}),l={render:a,args:{children:[e.jsx(s,{children:"Juno styles are added inline"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},t={render:a,args:{shadowRoot:!1,children:[e.jsx(s,{children:"No ShadowRoot, but the styles are still inline (default)"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},p={render:a,args:{shadowRoot:!1,stylesWrapper:"head",children:[e.jsx(s,{children:"Juno styles are added to the head tag"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},n={render:a,args:{shadowRoot:!1,stylesWrapper:"inline",children:[e.jsx(s,{children:"Juno style are added inline"},0),e.jsx(o,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},d={render:a,args:{theme:"theme-light",children:[e.jsx(s,{children:"Light Theme"},0),e.jsx(o,{children:`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`},1)]}};var m,u,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
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
}`,...(y=(u=l.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,S,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
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
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var g,A,P;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
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
}`,...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var x,R,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
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
}`,...(w=(R=n.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var k,j,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
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
}`,...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const Q=["Default","NoShadowRoot","StylesInHead","StylesInline","ThemeLight"];export{l as Default,t as NoShadowRoot,p as StylesInHead,n as StylesInline,d as ThemeLight,Q as __namedExportsOrder,K as default};
