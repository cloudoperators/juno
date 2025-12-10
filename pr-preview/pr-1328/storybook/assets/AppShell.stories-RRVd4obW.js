import{j as e,a as k,C as A}from"./iframe-D1I1Il4I.js";import{A as E}from"./AppBody.component-BlNbk3JT.js";import{P as S}from"./PageHeader.component-Dwp0j82A.js";import{M as W}from"./MainContainer.component-BI7EogIg.js";import{P as H}from"./PageFooter.component-CdU2iGr0.js";import{H as F}from"./HeaderContainer.component-Y5dvMhGa.js";import{S as M,a as t}from"./SideNavigationItem.component-s4oKcgRG.js";import{T as P,a as i}from"./TopNavigationItem.component-0rf0RVoz.js";import{T as q,a as T}from"./TabNavigationItem.component-DaoPDtN1.js";import{C as a}from"./ContentHeading.component-Cr1rpA7v.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.component-CduRRX8s.js";import"./Icon.component-B76pEyav.js";import"./NavigationItem.component-Cajm3_x-.js";const V=`
  jn:flex
  jn:grow
`,D=`
  jn:2xl:container
  jn:2xl:mx-auto
`,j=({children:o,fullWidth:s=!1,className:d="",...r})=>e.jsx("div",{className:`
        juno-main-inner
         ${V}
         ${s?"juno-main-inner-fullwidth":D}
         ${d}`,...r,children:o});try{j.displayName="MainContainerInner",j.__docgenInfo={description:"An inner wrapper to constrain page / view content width.",displayName:"MainContainerInner",props:{children:{defaultValue:null,description:"The children to render",name:"children",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"Whether the page/view content will stretch over the full width of the viewport or not. Default is `false`.",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a custom class",name:"className",required:!1,type:{name:"string"}}}}}catch{}const I=({children:o,className:s="",embedded:d=!1,pageHeader:r=e.jsx(S,{}),pageFooter:w=e.jsx(H,{}),fullWidthContent:R,sideNavigation:C,topNavigation:l,..._})=>{const p=d?R!==!1:R===!0;return e.jsx(E,{className:s,..._,children:d?e.jsxs(e.Fragment,{children:[l&&e.jsx(F,{fullWidth:p,children:l}),e.jsx(W,{children:e.jsxs(j,{fullWidth:p,className:`${l?"jn:mt-[3.875rem]":""}`,children:[C&&C,e.jsx(k,{children:o})]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(F,{fullWidth:p,children:[r&&typeof r=="string"?e.jsx(S,{applicationName:r}):r,l]}),e.jsx(W,{children:e.jsxs(j,{fullWidth:p,className:"jn:mt-[3.875rem]",children:[C,e.jsx(k,{children:o})]})}),w||e.jsx(H,{})]})})};try{I.displayName="AppShell",I.__docgenInfo={description:"Body of the app. Treat this like the body tag of an html page.",displayName:"AppShell",props:{children:{defaultValue:null,description:"The main content of the app.",name:"children",required:!1,type:{name:"ReactNode"}},pageHeader:{defaultValue:{value:"<PageHeader />"},description:"Pass either the `<PageHeader>` component or if you don't need to add any content to the page header pass a string to be used as the app name in the standard page header.",name:"pageHeader",required:!1,type:{name:"ReactNode"}},pageFooter:{defaultValue:{value:"<PageFooter />"},description:"Optional. If specified pass a `<PageFooter>` component. If undefined will use default PageFooter",name:"pageFooter",required:!1,type:{name:"ReactNode"}},topNavigation:{defaultValue:null,description:"Optional. If specified expects a `<TopNavigation>` component. If undefined no top navigation is rendered.",name:"topNavigation",required:!1,type:{name:"ReactNode"}},sideNavigation:{defaultValue:null,description:"Optional. If specified expects a `<SideNavigation>` component. If undefined no side navigation is rendered.",name:"sideNavigation",required:!1,type:{name:"ReactNode"}},embedded:{defaultValue:{value:"false"},description:`Optional: Defaults to false. Set embedded to true if app is to be rendered embedded in another app/page.
In this case only the content area and children are rendered, a TopNavigation if passed, but no header/footer or remaining layout components`,name:"embedded",required:!1,type:{name:"boolean"}},fullWidthContent:{defaultValue:null,description:"Whether the main page / view content can spread over the full available width of the viewport or not. Default is `false` (resulting in a width-constrained, centred content column on very wide screens) UNLESS the AppShell is rendered with embedded as true, then the main content will be full-width by default. In embedded mode, `fullWidthContent` can still be passed as `false` explicitly.",name:"fullWidthContent",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ae={title:"Layout/AppShell",component:I,argTypes:{pageHeader:{control:!1},pageFooter:{control:!1},topNavigation:{control:!1},sideNavigation:{control:!1},children:{control:!1}}},n=({children:o,...s})=>e.jsx(I,{...s,children:e.jsx(A,{py:!0,children:o})}),c={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with content heading and default header and footer."}}},args:{children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},m={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere)."}}},args:{embedded:!0,children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},g={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode."}}},args:{embedded:!0,topNavigation:e.jsxs(P,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},h={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode."}}},args:{embedded:!0,sideNavigation:e.jsxs(M,{children:[e.jsx(t,{selected:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},u={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with provided app name for the header and default footer."}}},args:{pageHeader:"My App",children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},f={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with custom page header and default footer."}}},args:{pageHeader:e.jsx(S,{applicationName:"My Custom Header"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},y={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with default header and custom footer."}}},args:{pageFooter:e.jsx(H,{children:"My custom footer"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},v={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with a side navigation."}}},args:{sideNavigation:e.jsxs(M,{children:[e.jsx(t,{selected:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},b={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with top navigation."}}},args:{topNavigation:e.jsxs(P,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},N={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with both a top navigation and side navigation."}}},args:{topNavigation:e.jsxs(P,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),sideNavigation:e.jsxs(M,{children:[e.jsx(t,{selected:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},x={render:n,parameters:{},args:{children:[e.jsxs(q,{children:[e.jsx(T,{label:"Item 1",active:!0}),e.jsx(T,{label:"Item 2"}),e.jsx(T,{label:"Item 3"})]},"1"),e.jsx(a,{children:"My Page"},"2")]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {},
  args: {
    children: [<TabNavigation key="1">
        <TabNavigationItem label="Item 1" active />
        <TabNavigationItem label="Item 2" />
        <TabNavigationItem label="Item 3" />
      </TabNavigation>, <ContentHeading key="2">My Page</ContentHeading>]
  }
}`,...x.parameters?.docs?.source}}};const ne=["Default","Embedded","EmbeddedWithTopNav","EmbeddedWithSideNav","AppName","CustomPageHeader","CustomPageFooter","WithSideNavigation","WithTopNavigation","WithSideAndTopNavigation","WithTabNavigation"];export{u as AppName,y as CustomPageFooter,f as CustomPageHeader,c as Default,m as Embedded,h as EmbeddedWithSideNav,g as EmbeddedWithTopNav,N as WithSideAndTopNavigation,v as WithSideNavigation,x as WithTabNavigation,b as WithTopNavigation,ne as __namedExportsOrder,ae as default};
