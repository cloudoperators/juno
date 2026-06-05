import{i as e}from"./preload-helper-usAeo7Bx.js";import{B as t,H as n,L as r,R as i,U as a,V as o,tt as s,z as c}from"./iframe-C4qxQgER.js";import{t as l}from"./Message.component-I0z0JsLK.js";import{t as u}from"./Message-DEFMUe20.js";import{t as d}from"./PortalProvider.component-CsEKhqXW.js";import{t as f}from"./PortalProvider-DwXng3ZC.js";import{n as p,t as m}from"./CodeBlock.component-DJ-yVmU-.js";var h=e((()=>{n()})),g,_,v,y=e((()=>{s(),r(),h(),f(),t(),g=a(),_=({children:e,shadowRoot:t,shadowRootMode:n})=>t?(0,g.jsx)(o,{mode:n,children:(0,g.jsx)(g.Fragment,{children:e})}):e,v=({shadowRoot:e=!0,shadowRootMode:t=`open`,stylesWrapper:n=`inline`,theme:r=i,children:a})=>(0,g.jsx)(_,{shadowRoot:e,shadowRootMode:t,children:(0,g.jsx)(c,{theme:r,stylesWrapper:e?`inline`:n,children:(0,g.jsx)(d,{children:a})})});try{v.displayName=`AppShellProvider`,v.__docgenInfo={description:"The `AppShellProvider` component serves as a wrapper for Juno apps. It integrates both\n`StyleProvider` and `PortalProvider`, offering consistent theming and managing portals across the app.\nThis provider can optionally render within a `ShadowRoot` to encapsulate styles independently.",displayName:`AppShellProvider`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,methods:[],props:{stylesWrapper:{defaultValue:{value:`inline`},declarations:[{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`AppShellProviderProps`}],description:'Specifies where app stylesheets are imported.\nThis is relevant only if `shadowRoot` is `false`. Must be `"inline"` if using a `ShadowRoot`.',name:`stylesWrapper`,parent:{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`AppShellProviderProps`},required:!1,tags:{default:`"inline"`},type:{name:`enum`,raw:`AppShellStyleWrapper`,value:[{value:`"inline"`},{value:`"head"`}]}},theme:{defaultValue:{value:`theme-dark`},declarations:[{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`AppShellProviderProps`}],description:'Determines the theme of the application, choosing between `"theme-dark"` or `"theme-light"`.\nDefaults to the global default theme name.',name:`theme`,parent:{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`AppShellProviderProps`},required:!1,tags:{default:`DEFAULT_THEME_NAME`},type:{name:`enum`,raw:`"theme-dark" | "theme-light"`,value:[{value:`"theme-dark"`},{value:`"theme-light"`}]}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`WrapperProps`}],description:`React nodes or a collection of React nodes to be rendered as content.`,name:`children`,parent:{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`WrapperProps`},required:!1,tags:{},type:{name:`ReactNode`}},shadowRoot:{defaultValue:{value:`true`},declarations:[{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`WrapperProps`}],description:"Determines whether the app is rendered inside a `ShadowRoot`.\nOnly set to `false` if the app runs as a standalone application.",name:`shadowRoot`,parent:{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`WrapperProps`},required:!1,tags:{default:`true`},type:{name:`boolean`}},shadowRootMode:{defaultValue:{value:`open`},declarations:[{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`WrapperProps`}],description:"Specifies the mode of the `ShadowRoot`.",name:`shadowRootMode`,parent:{fileName:`ui-components/src/components/AppShellProvider/AppShellProvider.component.tsx`,name:`WrapperProps`},required:!1,tags:{default:`"open"`},type:{name:`enum`,raw:`ShadowRootMode`,value:[{value:`"open"`},{value:`"closed"`}]}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/layout-appshellprovider--docs
{@link AppShellProviderProps }`}}}catch{}})),b=e((()=>{p()})),x,S,C,w,T,E,D,O;e((()=>{s(),u(),y(),b(),x=a(),S={title:`Layout/AppShellProvider`,component:v,argTypes:{children:{control:!1}}},C={args:{children:[(0,x.jsx)(l,{children:`Juno styles are added inline`},0),(0,x.jsx)(m,{children:`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},w={args:{shadowRoot:!1,children:[(0,x.jsx)(l,{children:`No ShadowRoot, but the styles are still inline (default)`},0),(0,x.jsx)(m,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},T={args:{shadowRoot:!1,stylesWrapper:`head`,children:[(0,x.jsx)(l,{children:`Juno styles are added to the head tag`},0),(0,x.jsx)(m,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},E={args:{shadowRoot:!1,stylesWrapper:`inline`,children:[(0,x.jsx)(l,{children:`Juno style are added inline`},0),(0,x.jsx)(m,{children:`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`},1)]}},D={args:{theme:`theme-light`,children:[(0,x.jsx)(l,{children:`Light Theme`},0),(0,x.jsx)(m,{children:`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`},1)]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`NoShadowRoot`,`StylesInHead`,`StylesInline`,`ThemeLight`]}))();export{C as Default,w as NoShadowRoot,T as StylesInHead,E as StylesInline,D as ThemeLight,O as __namedExportsOrder,S as default};