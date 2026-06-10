import{i as e}from"./preload-helper-usAeo7Bx.js";import{F as t,M as n,P as r,U as i,j as a,tt as o}from"./iframe-ZTuwarm2.js";import{n as s,t as c}from"./AppBody-Cehc3QfJ.js";import{n as l,t as u}from"./PageHeader-DiDVqdpc.js";import{n as d,t as f}from"./MainContainer-DH8DA4Zh.js";import{n as p,t as m}from"./PageFooter-QOuqicbY.js";import{n as h,t as g}from"./HeaderContainer-CU5qFnRZ.js";import{r as _,t as v}from"./SideNavigationItem.component-BZNQbFgj.js";import{t as y}from"./SideNavigation-CcgjHYJM.js";import{t as b}from"./SideNavigationItem-ofae5Vi1.js";import{i as x,r as ee,t as S}from"./TopNavigationItem.component-BaRryCXw.js";import{t as te}from"./TopNavigationItem-T9pXfYA4.js";import{a as ne,i as C,n as w,t as T}from"./TabNavigationItem-DSXqPsjh.js";import{n as E,t as D}from"./ContentHeading.component-DZ-LVAIb.js";var O,k,A,j,M=e((()=>{o(),O=i(),k=`
  jn:flex
  jn:grow
`,A=`
  jn:2xl:container
  jn:2xl:mx-auto
`,j=({children:e,fullWidth:t=!1,className:n=``,...r})=>(0,O.jsx)(`div`,{className:`
        juno-main-inner
         ${k}
         ${t?`juno-main-inner-fullwidth`:A}
         ${n}`,...r,children:e});try{j.displayName=`MainContainerInner`,j.__docgenInfo={description:"`MainContainerInner` offers a structured inner wrapper for page content, enabling width constraints\nor full-width rendering as needed.",displayName:`MainContainerInner`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx`,name:`MainContainerInnerProps`}],description:`The children to render within the container.`,name:`children`,parent:{fileName:`ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx`,name:`MainContainerInnerProps`},required:!1,tags:{},type:{name:`ReactNode`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx`,name:`MainContainerInnerProps`}],description:`Determines if content stretches to full viewport width.`,name:`fullWidth`,parent:{fileName:`ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx`,name:`MainContainerInnerProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx`,name:`MainContainerInnerProps`}],description:`Custom CSS class names for stylized rendering.`,name:`className`,parent:{fileName:`ui-components/src/components/MainContainerInner/MainContainerInner.component.tsx`,name:`MainContainerInnerProps`},required:!1,tags:{default:`""`},type:{name:`string`}}},tags:{}}}catch{}})),N=e((()=>{M()})),P,F,I=e((()=>{o(),c(),u(),f(),N(),r(),m(),g(),P=i(),F=({children:e,className:n=``,embedded:r=!1,pageHeader:i=(0,P.jsx)(l,{}),pageFooter:a=(0,P.jsx)(p,{}),fullWidthContent:o,sideNavigation:c,topNavigation:u,...f})=>{let m=r?o!==!1:o===!0;return(0,P.jsx)(s,{className:n,...f,children:r?(0,P.jsxs)(P.Fragment,{children:[u&&(0,P.jsx)(h,{fullWidth:m,children:u}),(0,P.jsx)(d,{children:(0,P.jsxs)(j,{fullWidth:m,children:[c,(0,P.jsx)(t,{children:e})]})})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(h,{fullWidth:m,children:[i&&typeof i==`string`?(0,P.jsx)(l,{applicationName:i}):i,u]}),(0,P.jsx)(d,{children:(0,P.jsxs)(j,{fullWidth:m,children:[c,(0,P.jsx)(t,{children:e})]})}),a||(0,P.jsx)(p,{})]})})};try{F.displayName=`AppShell`,F.__docgenInfo={description:"The `AppShell` component provides the foundational layout structure for the application.\nIt acts similarly to an HTML `body` element, organizing pages with headers, footers,\nnavigation, and content areas. For simpler manual layout setup, consider using `AppBody`.",displayName:`AppShell`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/AppShell/AppShell.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:`The main content of the app.`,name:`children`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:`Add a custom class name to style the component.`,name:`className`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{default:`""`},type:{name:`string`}},embedded:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:`Determines if the app should be rendered in embedded mode, reducing layout components to core content.`,name:`embedded`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},pageHeader:{defaultValue:{value:`<PageHeader />`},declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:"Pass either a `<PageHeader>` component or a string to be used as the application name in the standard page header.",name:`pageHeader`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{default:"`<PageHeader />`"},type:{name:`ReactNode`}},pageFooter:{defaultValue:{value:`<PageFooter />`},declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:"An optional `<PageFooter>` component if specified. Uses the default `<PageFooter />` if undefined.",name:`pageFooter`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{default:"`<PageFooter />`"},type:{name:`ReactNode`}},topNavigation:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:"Optional `<TopNavigation>` component. Only rendered if provided.",name:`topNavigation`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{},type:{name:`ReactNode`}},sideNavigation:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:"Optional `<SideNavigation>` component. Only rendered if provided.",name:`sideNavigation`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{},type:{name:`ReactNode`}},fullWidthContent:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`}],description:"Indicates whether the main content should span the full viewport width.\nDefaults to `false` unless embedded, allowing content to occupy full width.",name:`fullWidthContent`,parent:{fileName:`ui-components/src/components/AppShell/AppShell.component.tsx`,name:`AppShellProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/layout-appshell--docs
{@link AppShellProps }`}}}catch{}})),L=e((()=>{I()})),R=e((()=>{E()})),z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{o(),L(),u(),m(),y(),b(),ee(),te(),C(),T(),R(),a(),z=i(),B={title:`Layout/AppShell`,component:F,argTypes:{pageHeader:{control:!1},pageFooter:{control:!1},topNavigation:{control:!1},sideNavigation:{control:!1},children:{control:!1}}},V=({children:e,...t})=>(0,z.jsx)(F,{...t,children:(0,z.jsx)(n,{py:!0,children:e})}),H={render:V,parameters:{docs:{description:{story:`Responsive shell for your application with content heading and default header and footer.`}}},args:{children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},U={render:V,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere).`}}},args:{embedded:!0,children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},W={render:V,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode.`}}},args:{embedded:!0,topNavigation:(0,z.jsxs)(x,{children:[(0,z.jsx)(S,{icon:`home`,label:`Home`}),(0,z.jsx)(S,{active:!0,label:`Navigation Item`})]}),children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},G={render:V,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode.`}}},args:{embedded:!0,sideNavigation:(0,z.jsxs)(_,{children:[(0,z.jsx)(v,{selected:!0,label:`Item 1`}),(0,z.jsx)(v,{label:`Item 2`}),(0,z.jsx)(v,{label:`Item 3`})]}),children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},K={render:V,parameters:{docs:{description:{story:`Responsive shell for your application with provided app name for the header and default footer.`}}},args:{pageHeader:`My App`,children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},q={render:V,parameters:{docs:{description:{story:`Responsive shell for your application with custom page header and default footer.`}}},args:{pageHeader:(0,z.jsx)(l,{applicationName:`My Custom Header`}),children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},J={render:V,parameters:{docs:{description:{story:`Responsive shell for your application with default header and custom footer.`}}},args:{pageFooter:(0,z.jsx)(p,{children:`My custom footer`}),children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},Y={render:V,parameters:{docs:{description:{story:`Responsive shell for your application with a side navigation.`}}},args:{sideNavigation:(0,z.jsxs)(_,{children:[(0,z.jsx)(v,{selected:!0,label:`Item 1`}),(0,z.jsx)(v,{label:`Item 2`}),(0,z.jsx)(v,{label:`Item 3`})]}),children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},X={render:V,parameters:{docs:{description:{story:`Responsive shell for your application with top navigation.`}}},args:{topNavigation:(0,z.jsxs)(x,{children:[(0,z.jsx)(S,{icon:`home`,label:`Home`}),(0,z.jsx)(S,{active:!0,label:`Navigation Item`})]}),children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},Z={render:V,parameters:{docs:{description:{story:`Responsive shell for your application with both a top navigation and side navigation.`}}},args:{topNavigation:(0,z.jsxs)(x,{children:[(0,z.jsx)(S,{icon:`home`,label:`Home`}),(0,z.jsx)(S,{active:!0,label:`Navigation Item`})]}),sideNavigation:(0,z.jsxs)(_,{children:[(0,z.jsx)(v,{selected:!0,label:`Item 1`}),(0,z.jsx)(v,{label:`Item 2`}),(0,z.jsx)(v,{label:`Item 3`})]}),children:[(0,z.jsx)(D,{children:`My Page`},`1`),(0,z.jsx)(`p`,{children:`Content goes here`},`2`)]}},Q={render:V,parameters:{},args:{children:[(0,z.jsxs)(ne,{children:[(0,z.jsx)(w,{label:`Item 1`,active:!0}),(0,z.jsx)(w,{label:`Item 2`}),(0,z.jsx)(w,{label:`Item 3`})]},`1`),(0,z.jsx)(D,{children:`My Page`},`2`)]}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with content heading and default header and footer."
      }
    }
  },
  args: {
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere)."
      }
    }
  },
  args: {
    embedded: true,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode."
      }
    }
  },
  args: {
    embedded: true,
    topNavigation: <TopNavigation>
        <TopNavigationItem icon="home" label="Home" />
        <TopNavigationItem active label="Navigation Item" />
      </TopNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode."
      }
    }
  },
  args: {
    embedded: true,
    sideNavigation: <SideNavigation>
        <SideNavigationItem selected label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with provided app name for the header and default footer."
      }
    }
  },
  args: {
    pageHeader: "My App",
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with custom page header and default footer."
      }
    }
  },
  args: {
    pageHeader: <PageHeader applicationName="My Custom Header" />,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with default header and custom footer."
      }
    }
  },
  args: {
    pageFooter: <PageFooter>My custom footer</PageFooter>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with a side navigation."
      }
    }
  },
  args: {
    sideNavigation: <SideNavigation>
        <SideNavigationItem selected label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with top navigation."
      }
    }
  },
  args: {
    topNavigation: <TopNavigation>
        <TopNavigationItem icon="home" label="Home" />
        <TopNavigationItem active label="Navigation Item" />
      </TopNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with both a top navigation and side navigation."
      }
    }
  },
  args: {
    topNavigation: <TopNavigation>
        <TopNavigationItem icon="home" label="Home" />
        <TopNavigationItem active label="Navigation Item" />
      </TopNavigation>,
    sideNavigation: <SideNavigation>
        <SideNavigationItem selected label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {},
  args: {
    children: [<TabNavigation key="1">
        <TabNavigationItem label="Item 1" active />
        <TabNavigationItem label="Item 2" />
        <TabNavigationItem label="Item 3" />
      </TabNavigation>, <ContentHeading key="2">My Page</ContentHeading>]
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Embedded`,`EmbeddedWithTopNav`,`EmbeddedWithSideNav`,`AppName`,`CustomPageHeader`,`CustomPageFooter`,`WithSideNavigation`,`WithTopNavigation`,`WithSideAndTopNavigation`,`WithTabNavigation`]}))();export{K as AppName,J as CustomPageFooter,q as CustomPageHeader,H as Default,U as Embedded,G as EmbeddedWithSideNav,W as EmbeddedWithTopNav,Z as WithSideAndTopNavigation,Y as WithSideNavigation,Q as WithTabNavigation,X as WithTopNavigation,$ as __namedExportsOrder,B as default};