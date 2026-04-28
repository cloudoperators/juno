import{d as e,f as t,g as n}from"./iframe-Cx-zHds2.js";import{t as r}from"./AppBody-CsYrhvpf.js";import{t as i}from"./PageHeader-1Ob0tLr6.js";import{t as a}from"./MainContainer-CWNp80im.js";import{t as o}from"./PageFooter-bx5F-P2n.js";import{t as s}from"./HeaderContainer-CNWihhg9.js";import{n as c,t as l}from"./SideNavigationItem.component-BY3vdROA.js";import"./SideNavigation-RwECb1cY.js";import"./SideNavigationItem-BN-zLRTN.js";import{n as u,t as d}from"./TopNavigationItem.component-C29PAJvj.js";import"./TopNavigationItem-DY3rkdQq.js";import{n as f,t as p}from"./TabNavigationItem-BBA9Vso_.js";import{t as m}from"./ContentHeading.component-CNlnN9Jh.js";import"react";var h=n(),g=`
  jn:flex
  jn:grow
`,_=`
  jn:2xl:container
  jn:2xl:mx-auto
`,v=({children:e,fullWidth:t=!1,className:n=``,...r})=>(0,h.jsx)(`div`,{className:`
        juno-main-inner
         ${g}
         ${t?`juno-main-inner-fullwidth`:_}
         ${n}`,...r,children:e});try{v.displayName=`MainContainerInner`,v.__docgenInfo={description:"`MainContainerInner` offers a structured inner wrapper for page content, enabling width constraints\nor full-width rendering as needed.",displayName:`MainContainerInner`,props:{children:{defaultValue:null,description:`The children to render within the container.`,name:`children`,required:!1,type:{name:`ReactNode`}},fullWidth:{defaultValue:{value:`false`},description:`Determines if content stretches to full viewport width.`,name:`fullWidth`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Custom CSS class names for stylized rendering.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var y=({children:e,className:n=``,embedded:c=!1,pageHeader:l=(0,h.jsx)(i,{}),pageFooter:u=(0,h.jsx)(o,{}),fullWidthContent:d,sideNavigation:f,topNavigation:p,...m})=>{let g=c?d!==!1:d===!0;return(0,h.jsx)(r,{className:n,...m,children:c?(0,h.jsxs)(h.Fragment,{children:[p&&(0,h.jsx)(s,{fullWidth:g,children:p}),(0,h.jsx)(a,{children:(0,h.jsxs)(v,{fullWidth:g,className:`${p?`jn:mt-15.5`:``}`,children:[f,(0,h.jsx)(t,{children:e})]})})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(s,{fullWidth:g,children:[l&&typeof l==`string`?(0,h.jsx)(i,{applicationName:l}):l,p]}),(0,h.jsx)(a,{children:(0,h.jsxs)(v,{fullWidth:g,className:`jn:mt-15.5`,children:[f,(0,h.jsx)(t,{children:e})]})}),u||(0,h.jsx)(o,{})]})})};try{y.displayName=`AppShell`,y.__docgenInfo={description:"The `AppShell` component provides the foundational layout structure for the application.\nIt acts similarly to an HTML `body` element, organizing pages with headers, footers,\nnavigation, and content areas. For simpler manual layout setup, consider using `AppBody`.",displayName:`AppShell`,props:{children:{defaultValue:null,description:`The main content of the app.`,name:`children`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Add a custom class name to style the component.`,name:`className`,required:!1,type:{name:`string`}},embedded:{defaultValue:{value:`false`},description:`Determines if the app should be rendered in embedded mode, reducing layout components to core content.`,name:`embedded`,required:!1,type:{name:`boolean`}},pageHeader:{defaultValue:{value:`<PageHeader />`},description:"Pass either a `<PageHeader>` component or a string to be used as the application name in the standard page header.",name:`pageHeader`,required:!1,type:{name:`ReactNode`}},pageFooter:{defaultValue:{value:`<PageFooter />`},description:"An optional `<PageFooter>` component if specified. Uses the default `<PageFooter />` if undefined.",name:`pageFooter`,required:!1,type:{name:`ReactNode`}},topNavigation:{defaultValue:null,description:"Optional `<TopNavigation>` component. Only rendered if provided.",name:`topNavigation`,required:!1,type:{name:`ReactNode`}},sideNavigation:{defaultValue:null,description:"Optional `<SideNavigation>` component. Only rendered if provided.",name:`sideNavigation`,required:!1,type:{name:`ReactNode`}},fullWidthContent:{defaultValue:null,description:"Indicates whether the main content should span the full viewport width.\nDefaults to `false` unless embedded, allowing content to occupy full width.",name:`fullWidthContent`,required:!1,type:{name:`boolean`}}}}}catch{}var b={title:`Layout/AppShell`,component:y,argTypes:{pageHeader:{control:!1},pageFooter:{control:!1},topNavigation:{control:!1},sideNavigation:{control:!1},children:{control:!1}}},x=({children:t,...n})=>(0,h.jsx)(y,{...n,children:(0,h.jsx)(e,{py:!0,children:t})}),S={render:x,parameters:{docs:{description:{story:`Responsive shell for your application with content heading and default header and footer.`}}},args:{children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},C={render:x,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere).`}}},args:{embedded:!0,children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},w={render:x,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode.`}}},args:{embedded:!0,topNavigation:(0,h.jsxs)(u,{children:[(0,h.jsx)(d,{icon:`home`,label:`Home`}),(0,h.jsx)(d,{active:!0,label:`Navigation Item`})]}),children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},T={render:x,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode.`}}},args:{embedded:!0,sideNavigation:(0,h.jsxs)(c,{children:[(0,h.jsx)(l,{selected:!0,label:`Item 1`}),(0,h.jsx)(l,{label:`Item 2`}),(0,h.jsx)(l,{label:`Item 3`})]}),children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},E={render:x,parameters:{docs:{description:{story:`Responsive shell for your application with provided app name for the header and default footer.`}}},args:{pageHeader:`My App`,children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},D={render:x,parameters:{docs:{description:{story:`Responsive shell for your application with custom page header and default footer.`}}},args:{pageHeader:(0,h.jsx)(i,{applicationName:`My Custom Header`}),children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},O={render:x,parameters:{docs:{description:{story:`Responsive shell for your application with default header and custom footer.`}}},args:{pageFooter:(0,h.jsx)(o,{children:`My custom footer`}),children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},k={render:x,parameters:{docs:{description:{story:`Responsive shell for your application with a side navigation.`}}},args:{sideNavigation:(0,h.jsxs)(c,{children:[(0,h.jsx)(l,{selected:!0,label:`Item 1`}),(0,h.jsx)(l,{label:`Item 2`}),(0,h.jsx)(l,{label:`Item 3`})]}),children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},A={render:x,parameters:{docs:{description:{story:`Responsive shell for your application with top navigation.`}}},args:{topNavigation:(0,h.jsxs)(u,{children:[(0,h.jsx)(d,{icon:`home`,label:`Home`}),(0,h.jsx)(d,{active:!0,label:`Navigation Item`})]}),children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},j={render:x,parameters:{docs:{description:{story:`Responsive shell for your application with both a top navigation and side navigation.`}}},args:{topNavigation:(0,h.jsxs)(u,{children:[(0,h.jsx)(d,{icon:`home`,label:`Home`}),(0,h.jsx)(d,{active:!0,label:`Navigation Item`})]}),sideNavigation:(0,h.jsxs)(c,{children:[(0,h.jsx)(l,{selected:!0,label:`Item 1`}),(0,h.jsx)(l,{label:`Item 2`}),(0,h.jsx)(l,{label:`Item 3`})]}),children:[(0,h.jsx)(m,{children:`My Page`},`1`),(0,h.jsx)(`p`,{children:`Content goes here`},`2`)]}},M={render:x,parameters:{},args:{children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(p,{label:`Item 1`,active:!0}),(0,h.jsx)(p,{label:`Item 2`}),(0,h.jsx)(p,{label:`Item 3`})]},`1`),(0,h.jsx)(m,{children:`My Page`},`2`)]}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {},
  args: {
    children: [<TabNavigation key="1">
        <TabNavigationItem label="Item 1" active />
        <TabNavigationItem label="Item 2" />
        <TabNavigationItem label="Item 3" />
      </TabNavigation>, <ContentHeading key="2">My Page</ContentHeading>]
  }
}`,...M.parameters?.docs?.source}}};var N=[`Default`,`Embedded`,`EmbeddedWithTopNav`,`EmbeddedWithSideNav`,`AppName`,`CustomPageHeader`,`CustomPageFooter`,`WithSideNavigation`,`WithTopNavigation`,`WithSideAndTopNavigation`,`WithTabNavigation`];export{E as AppName,O as CustomPageFooter,D as CustomPageHeader,S as Default,C as Embedded,T as EmbeddedWithSideNav,w as EmbeddedWithTopNav,j as WithSideAndTopNavigation,k as WithSideNavigation,M as WithTabNavigation,A as WithTopNavigation,N as __namedExportsOrder,b as default};