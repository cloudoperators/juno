import{j as e,a as k,C as A}from"./iframe-DnjCMMu2.js";import{A as E}from"./AppBody.component-DxnkA_4z.js";import{P as T}from"./PageHeader.component-BbrVC9RA.js";import{M as F}from"./MainContainer.component-DV4msYLm.js";import{P as S}from"./PageFooter.component-MCu_5fg1.js";import{H as W}from"./HeaderContainer.component-CBl5o_GR.js";import{S as H,a as t}from"./SideNavigationItem.component-ClGz2Zxg.js";import{T as M,a as i}from"./TopNavigationItem.component-CPd_E-Nv.js";import{T as q,a as I}from"./TabNavigationItem.component-B5XsY1xy.js";import{C as a}from"./ContentHeading.component-l1uiTjsn.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.component-Cir86k4T.js";import"./Icon.component-CgXwGdZP.js";import"./NavigationItem.component-B-ZIkyZx.js";const V=`
  jn:flex
  jn:grow
`,D=`
  jn:2xl:container
  jn:2xl:mx-auto
`,x=({children:o,fullWidth:s=!1,className:d="",...r})=>e.jsx("div",{className:`
        juno-main-inner
         ${V}
         ${s?"juno-main-inner-fullwidth":D}
         ${d}`,...r,children:o});try{x.displayName="MainContainerInner",x.__docgenInfo={description:"`MainContainerInner` offers a structured inner wrapper for page content, enabling width constraints\nor full-width rendering as needed.",displayName:"MainContainerInner",props:{children:{defaultValue:null,description:"The children to render within the container.",name:"children",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"Determines if content stretches to full viewport width.",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom CSS class names for stylized rendering.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=({children:o,className:s="",embedded:d=!1,pageHeader:r=e.jsx(T,{}),pageFooter:P=e.jsx(S,{}),fullWidthContent:w,sideNavigation:R,topNavigation:l,..._})=>{const p=d?w!==!1:w===!0;return e.jsx(E,{className:s,..._,children:d?e.jsxs(e.Fragment,{children:[l&&e.jsx(W,{fullWidth:p,children:l}),e.jsx(F,{children:e.jsxs(x,{fullWidth:p,className:`${l?"jn:mt-[3.875rem]":""}`,children:[R,e.jsx(k,{children:o})]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(W,{fullWidth:p,children:[r&&typeof r=="string"?e.jsx(T,{applicationName:r}):r,l]}),e.jsx(F,{children:e.jsxs(x,{fullWidth:p,className:"jn:mt-[3.875rem]",children:[R,e.jsx(k,{children:o})]})}),P||e.jsx(S,{})]})})};try{C.displayName="AppShell",C.__docgenInfo={description:"The `AppShell` component provides the foundational layout structure for the application.\nIt acts similarly to an HTML `body` element, organizing pages with headers, footers,\nnavigation, and content areas. For simpler manual layout setup, consider using `AppBody`.",displayName:"AppShell",props:{children:{defaultValue:null,description:"The main content of the app.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom class name to style the component.",name:"className",required:!1,type:{name:"string"}},embedded:{defaultValue:{value:"false"},description:"Determines if the app should be rendered in embedded mode, reducing layout components to core content.",name:"embedded",required:!1,type:{name:"boolean"}},pageHeader:{defaultValue:{value:"<PageHeader />"},description:"Pass either a `<PageHeader>` component or a string to be used as the application name in the standard page header.",name:"pageHeader",required:!1,type:{name:"ReactNode"}},pageFooter:{defaultValue:{value:"<PageFooter />"},description:"An optional `<PageFooter>` component if specified. Uses the default `<PageFooter />` if undefined.",name:"pageFooter",required:!1,type:{name:"ReactNode"}},topNavigation:{defaultValue:null,description:"Optional `<TopNavigation>` component. Only rendered if provided.",name:"topNavigation",required:!1,type:{name:"ReactNode"}},sideNavigation:{defaultValue:null,description:"Optional `<SideNavigation>` component. Only rendered if provided.",name:"sideNavigation",required:!1,type:{name:"ReactNode"}},fullWidthContent:{defaultValue:null,description:"Indicates whether the main content should span the full viewport width.\nDefaults to `false` unless embedded, allowing content to occupy full width.",name:"fullWidthContent",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Layout/AppShell",component:C,argTypes:{pageHeader:{control:!1},pageFooter:{control:!1},topNavigation:{control:!1},sideNavigation:{control:!1},children:{control:!1}}},n=({children:o,...s})=>e.jsx(C,{...s,children:e.jsx(A,{py:!0,children:o})}),c={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with content heading and default header and footer."}}},args:{children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},m={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere)."}}},args:{embedded:!0,children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},g={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode."}}},args:{embedded:!0,topNavigation:e.jsxs(M,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},h={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode."}}},args:{embedded:!0,sideNavigation:e.jsxs(H,{children:[e.jsx(t,{selected:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},u={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with provided app name for the header and default footer."}}},args:{pageHeader:"My App",children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},y={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with custom page header and default footer."}}},args:{pageHeader:e.jsx(T,{applicationName:"My Custom Header"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},f={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with default header and custom footer."}}},args:{pageFooter:e.jsx(S,{children:"My custom footer"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},v={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with a side navigation."}}},args:{sideNavigation:e.jsxs(H,{children:[e.jsx(t,{selected:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},N={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with top navigation."}}},args:{topNavigation:e.jsxs(M,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},b={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with both a top navigation and side navigation."}}},args:{topNavigation:e.jsxs(M,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),sideNavigation:e.jsxs(H,{children:[e.jsx(t,{selected:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},j={render:n,parameters:{},args:{children:[e.jsxs(q,{children:[e.jsx(I,{label:"Item 1",active:!0}),e.jsx(I,{label:"Item 2"}),e.jsx(I,{label:"Item 3"})]},"1"),e.jsx(a,{children:"My Page"},"2")]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {},
  args: {
    children: [<TabNavigation key="1">
        <TabNavigationItem label="Item 1" active />
        <TabNavigationItem label="Item 2" />
        <TabNavigationItem label="Item 3" />
      </TabNavigation>, <ContentHeading key="2">My Page</ContentHeading>]
  }
}`,...j.parameters?.docs?.source}}};const ne=["Default","Embedded","EmbeddedWithTopNav","EmbeddedWithSideNav","AppName","CustomPageHeader","CustomPageFooter","WithSideNavigation","WithTopNavigation","WithSideAndTopNavigation","WithTabNavigation"];export{u as AppName,f as CustomPageFooter,y as CustomPageHeader,c as Default,m as Embedded,h as EmbeddedWithSideNav,g as EmbeddedWithTopNav,b as WithSideAndTopNavigation,v as WithSideNavigation,j as WithTabNavigation,N as WithTopNavigation,ne as __namedExportsOrder,ae as default};
