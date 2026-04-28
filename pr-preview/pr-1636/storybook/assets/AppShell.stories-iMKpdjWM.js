import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{d as t,f as n,g as r}from"./iframe-qPHz0liX.js";import{t as i}from"./AppBody-CFyq8imc.js";import{t as a}from"./PageHeader-BAC1IHjH.js";import{t as o}from"./MainContainer-DjbiqcPl.js";import{t as s}from"./PageFooter-BCNb_Esa.js";import{t as c}from"./HeaderContainer-DgOskB-Y.js";import{n as l,t as u}from"./SideNavigationItem.component-P5DDl8et.js";import"./SideNavigation-itNqCdF9.js";import"./SideNavigationItem-CQiXwANd.js";import{n as d,t as f}from"./TopNavigationItem.component-B6bhkYFY.js";import"./TopNavigationItem-JwXYaliv.js";import{n as p,t as m}from"./TabNavigationItem-atDmaitz.js";import{t as h}from"./ContentHeading.component-DSZyy5xC.js";e();var g=r(),_=`
  jn:flex
  jn:grow
`,v=`
  jn:2xl:container
  jn:2xl:mx-auto
`,y=({children:e,fullWidth:t=!1,className:n=``,...r})=>(0,g.jsx)(`div`,{className:`
        juno-main-inner
         ${_}
         ${t?`juno-main-inner-fullwidth`:v}
         ${n}`,...r,children:e});try{y.displayName=`MainContainerInner`,y.__docgenInfo={description:"`MainContainerInner` offers a structured inner wrapper for page content, enabling width constraints\nor full-width rendering as needed.",displayName:`MainContainerInner`,props:{children:{defaultValue:null,description:`The children to render within the container.`,name:`children`,required:!1,type:{name:`ReactNode`}},fullWidth:{defaultValue:{value:`false`},description:`Determines if content stretches to full viewport width.`,name:`fullWidth`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Custom CSS class names for stylized rendering.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var b=({children:e,className:t=``,embedded:r=!1,pageHeader:l=(0,g.jsx)(a,{}),pageFooter:u=(0,g.jsx)(s,{}),fullWidthContent:d,sideNavigation:f,topNavigation:p,...m})=>{let h=r?d!==!1:d===!0;return(0,g.jsx)(i,{className:t,...m,children:r?(0,g.jsxs)(g.Fragment,{children:[p&&(0,g.jsx)(c,{fullWidth:h,children:p}),(0,g.jsx)(o,{children:(0,g.jsxs)(y,{fullWidth:h,className:`${p?`jn:mt-15.5`:``}`,children:[f,(0,g.jsx)(n,{children:e})]})})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c,{fullWidth:h,children:[l&&typeof l==`string`?(0,g.jsx)(a,{applicationName:l}):l,p]}),(0,g.jsx)(o,{children:(0,g.jsxs)(y,{fullWidth:h,className:`jn:mt-15.5`,children:[f,(0,g.jsx)(n,{children:e})]})}),u||(0,g.jsx)(s,{})]})})};try{b.displayName=`AppShell`,b.__docgenInfo={description:"The `AppShell` component provides the foundational layout structure for the application.\nIt acts similarly to an HTML `body` element, organizing pages with headers, footers,\nnavigation, and content areas. For simpler manual layout setup, consider using `AppBody`.",displayName:`AppShell`,props:{children:{defaultValue:null,description:`The main content of the app.`,name:`children`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Add a custom class name to style the component.`,name:`className`,required:!1,type:{name:`string`}},embedded:{defaultValue:{value:`false`},description:`Determines if the app should be rendered in embedded mode, reducing layout components to core content.`,name:`embedded`,required:!1,type:{name:`boolean`}},pageHeader:{defaultValue:{value:`<PageHeader />`},description:"Pass either a `<PageHeader>` component or a string to be used as the application name in the standard page header.",name:`pageHeader`,required:!1,type:{name:`ReactNode`}},pageFooter:{defaultValue:{value:`<PageFooter />`},description:"An optional `<PageFooter>` component if specified. Uses the default `<PageFooter />` if undefined.",name:`pageFooter`,required:!1,type:{name:`ReactNode`}},topNavigation:{defaultValue:null,description:"Optional `<TopNavigation>` component. Only rendered if provided.",name:`topNavigation`,required:!1,type:{name:`ReactNode`}},sideNavigation:{defaultValue:null,description:"Optional `<SideNavigation>` component. Only rendered if provided.",name:`sideNavigation`,required:!1,type:{name:`ReactNode`}},fullWidthContent:{defaultValue:null,description:"Indicates whether the main content should span the full viewport width.\nDefaults to `false` unless embedded, allowing content to occupy full width.",name:`fullWidthContent`,required:!1,type:{name:`boolean`}}}}}catch{}var x={title:`Layout/AppShell`,component:b,argTypes:{pageHeader:{control:!1},pageFooter:{control:!1},topNavigation:{control:!1},sideNavigation:{control:!1},children:{control:!1}}},S=({children:e,...n})=>(0,g.jsx)(b,{...n,children:(0,g.jsx)(t,{py:!0,children:e})}),C={render:S,parameters:{docs:{description:{story:`Responsive shell for your application with content heading and default header and footer.`}}},args:{children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},w={render:S,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere).`}}},args:{embedded:!0,children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},T={render:S,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode.`}}},args:{embedded:!0,topNavigation:(0,g.jsxs)(d,{children:[(0,g.jsx)(f,{icon:`home`,label:`Home`}),(0,g.jsx)(f,{active:!0,label:`Navigation Item`})]}),children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},E={render:S,parameters:{docs:{description:{story:`Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode.`}}},args:{embedded:!0,sideNavigation:(0,g.jsxs)(l,{children:[(0,g.jsx)(u,{selected:!0,label:`Item 1`}),(0,g.jsx)(u,{label:`Item 2`}),(0,g.jsx)(u,{label:`Item 3`})]}),children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},D={render:S,parameters:{docs:{description:{story:`Responsive shell for your application with provided app name for the header and default footer.`}}},args:{pageHeader:`My App`,children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},O={render:S,parameters:{docs:{description:{story:`Responsive shell for your application with custom page header and default footer.`}}},args:{pageHeader:(0,g.jsx)(a,{applicationName:`My Custom Header`}),children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},k={render:S,parameters:{docs:{description:{story:`Responsive shell for your application with default header and custom footer.`}}},args:{pageFooter:(0,g.jsx)(s,{children:`My custom footer`}),children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},A={render:S,parameters:{docs:{description:{story:`Responsive shell for your application with a side navigation.`}}},args:{sideNavigation:(0,g.jsxs)(l,{children:[(0,g.jsx)(u,{selected:!0,label:`Item 1`}),(0,g.jsx)(u,{label:`Item 2`}),(0,g.jsx)(u,{label:`Item 3`})]}),children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},j={render:S,parameters:{docs:{description:{story:`Responsive shell for your application with top navigation.`}}},args:{topNavigation:(0,g.jsxs)(d,{children:[(0,g.jsx)(f,{icon:`home`,label:`Home`}),(0,g.jsx)(f,{active:!0,label:`Navigation Item`})]}),children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},M={render:S,parameters:{docs:{description:{story:`Responsive shell for your application with both a top navigation and side navigation.`}}},args:{topNavigation:(0,g.jsxs)(d,{children:[(0,g.jsx)(f,{icon:`home`,label:`Home`}),(0,g.jsx)(f,{active:!0,label:`Navigation Item`})]}),sideNavigation:(0,g.jsxs)(l,{children:[(0,g.jsx)(u,{selected:!0,label:`Item 1`}),(0,g.jsx)(u,{label:`Item 2`}),(0,g.jsx)(u,{label:`Item 3`})]}),children:[(0,g.jsx)(h,{children:`My Page`},`1`),(0,g.jsx)(`p`,{children:`Content goes here`},`2`)]}},N={render:S,parameters:{},args:{children:[(0,g.jsxs)(p,{children:[(0,g.jsx)(m,{label:`Item 1`,active:!0}),(0,g.jsx)(m,{label:`Item 2`}),(0,g.jsx)(m,{label:`Item 3`})]},`1`),(0,g.jsx)(h,{children:`My Page`},`2`)]}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {},
  args: {
    children: [<TabNavigation key="1">
        <TabNavigationItem label="Item 1" active />
        <TabNavigationItem label="Item 2" />
        <TabNavigationItem label="Item 3" />
      </TabNavigation>, <ContentHeading key="2">My Page</ContentHeading>]
  }
}`,...N.parameters?.docs?.source}}};var P=[`Default`,`Embedded`,`EmbeddedWithTopNav`,`EmbeddedWithSideNav`,`AppName`,`CustomPageHeader`,`CustomPageFooter`,`WithSideNavigation`,`WithTopNavigation`,`WithSideAndTopNavigation`,`WithTabNavigation`];export{D as AppName,k as CustomPageFooter,O as CustomPageHeader,C as Default,w as Embedded,E as EmbeddedWithSideNav,T as EmbeddedWithTopNav,M as WithSideAndTopNavigation,A as WithSideNavigation,N as WithTabNavigation,j as WithTopNavigation,P as __namedExportsOrder,x as default};