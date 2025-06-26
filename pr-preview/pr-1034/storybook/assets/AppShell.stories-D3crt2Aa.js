import{j as e,a as W,C as ue}from"./iframe-DJs9yO2V.js";import{A as fe}from"./AppBody.component-Dh8-pByc.js";import{P as H}from"./PageHeader.component-CHfCwtMJ.js";import{M as k}from"./MainContainer.component-D0Uwk2Tu.js";import{P as M}from"./PageFooter.component-4VAXvyKk.js";import{H as F}from"./HeaderContainer.component-DQONVbkB.js";import{S as P,a as t}from"./SideNavigationItem.component-DHFEitXP.js";import{T as w,a as i}from"./TopNavigationItem.component-CSFCmN2H.js";import{T as ve,a as T}from"./TabNavigationItem.component-DIaCMfbh.js";import{C as a}from"./ContentHeading.component-g4J9KcNB.js";import"./NavigationItem.component-CSKYAdub.js";import"./Icon.component-95mA2ogL.js";const ye=`
  jn:flex
  jn:grow
`,be=`
  jn:2xl:container
  jn:2xl:mx-auto
`,Ne=`
  jn:3xl:container
  jn:3xl:mx-auto
`,C=({children:o,fullWidth:s=!1,hasSideNav:l=!1,className:r="",...p})=>e.jsx("div",{className:`
        juno-main-inner
         ${ye}
         ${s?"juno-main-inner-fullwidth":l?Ne:be}
         ${r}`,...p,children:o});try{C.displayName="MainContainerInner",C.__docgenInfo={description:"An inner wrapper to constrain page / view content width.",displayName:"MainContainerInner",props:{children:{defaultValue:null,description:"The children to render",name:"children",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"Whether the page/view content will stretch over the full width of the viewport or not. Default is `false`.",name:"fullWidth",required:!1,type:{name:"boolean"}},hasSideNav:{defaultValue:{value:"false"},description:"Whether the main inner container needs to house a side navigation or not. Do not use, for internal use only.",name:"hasSideNav",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a custom class",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S=({children:o,className:s="",embedded:l=!1,pageHeader:r=e.jsx(H,{}),pageFooter:p=e.jsx(M,{}),fullWidthContent:R,sideNavigation:d,topNavigation:c,...he})=>{const m=l?R!==!1:R===!0;return e.jsx(fe,{className:s,...he,children:l?e.jsxs(e.Fragment,{children:[c&&e.jsx(F,{fullWidth:m,children:c}),e.jsx(k,{children:e.jsxs(C,{fullWidth:m,hasSideNav:!!d,className:`${c?"jn:mt-[3.875rem]":""}`,children:[d&&d,e.jsx(W,{children:o})]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(F,{fullWidth:m,children:[r&&typeof r=="string"?e.jsx(H,{heading:r}):r,c]}),e.jsx(k,{children:e.jsxs(C,{fullWidth:m,hasSideNav:!!d,className:"jn:mt-[3.875rem]",children:[d,e.jsx(W,{children:o})]})}),p||e.jsx(M,{})]})})};try{S.displayName="AppShell",S.__docgenInfo={description:"Body of the app. Treat this like the body tag of an html page.",displayName:"AppShell",props:{children:{defaultValue:null,description:"The main content of the app.",name:"children",required:!1,type:{name:"ReactNode"}},pageHeader:{defaultValue:{value:"<PageHeader />"},description:"Pass either the `<PageHeader>` component or if you don't need to add any content to the page header pass a string to be used as the app name in the standard page header.",name:"pageHeader",required:!1,type:{name:"ReactNode"}},pageFooter:{defaultValue:{value:"<PageFooter />"},description:"Optional. If specified pass a `<PageFooter>` component. If undefined will use default PageFooter",name:"pageFooter",required:!1,type:{name:"ReactNode"}},topNavigation:{defaultValue:null,description:"Optional. If specified expects a `<TopNavigation>` component. If undefined no top navigation is rendered.",name:"topNavigation",required:!1,type:{name:"ReactNode"}},sideNavigation:{defaultValue:null,description:"Optional. If specified expects a `<SideNavigation>` component. If undefined no side navigation is rendered.",name:"sideNavigation",required:!1,type:{name:"ReactNode"}},embedded:{defaultValue:{value:"false"},description:`Optional: Defaults to false. Set embedded to true if app is to be rendered embedded in another app/page.
In this case only the content area and children are rendered, a TopNavigation if passed, but no header/footer or remaining layout components`,name:"embedded",required:!1,type:{name:"boolean"}},fullWidthContent:{defaultValue:null,description:"Whether the main page / view content can spread over the full available width of the viewport or not. Default is `false` (resulting in a width-constrained, centred content column on very wide screens) UNLESS the AppShell is rendered with embedded as true, then the main content will be full-width by default. In embedded mode, `fullWidthContent` can still be passed as `false` explicitly.",name:"fullWidthContent",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ke={title:"Layout/AppShell",component:S,argTypes:{pageHeader:{control:!1},pageFooter:{control:!1},topNavigation:{control:!1},sideNavigation:{control:!1},children:{control:!1}}},n=({children:o,...s})=>e.jsx(S,{...s,children:e.jsx(ue,{py:!0,children:o})}),g={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with content heading and default header and footer."}}},args:{children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},h={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere)."}}},args:{embedded:!0,children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},u={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode."}}},args:{embedded:!0,topNavigation:e.jsxs(w,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},f={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode."}}},args:{embedded:!0,sideNavigation:e.jsxs(P,{children:[e.jsx(t,{active:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},v={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with provided app name for the header and default footer."}}},args:{pageHeader:"My App",children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},y={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with custom page header and default footer."}}},args:{pageHeader:e.jsx(H,{heading:"My Custom Header"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},b={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with default header and custom footer."}}},args:{pageFooter:e.jsx(M,{children:"My custom footer"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},N={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with a side navigation."}}},args:{sideNavigation:e.jsxs(P,{children:[e.jsx(t,{active:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},x={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with top navigation."}}},args:{topNavigation:e.jsxs(w,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},j={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with both a top navigation and side navigation."}}},args:{topNavigation:e.jsxs(w,{children:[e.jsx(i,{icon:"home",label:"Home"}),e.jsx(i,{active:!0,label:"Navigation Item"})]}),sideNavigation:e.jsxs(P,{children:[e.jsx(t,{active:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},I={render:n,parameters:{},args:{children:[e.jsxs(ve,{children:[e.jsx(T,{label:"Item 1",active:!0}),e.jsx(T,{label:"Item 2"}),e.jsx(T,{label:"Item 3"})]},"1"),e.jsx(a,{children:"My Page"},"2")]}};var _,A,E;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(A=g.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var q,V,D;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(V=h.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var O,$,B;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=($=u.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var L,U,z;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <SideNavigationItem active label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...(z=(U=f.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with custom page header and default footer."
      }
    }
  },
  args: {
    pageHeader: <PageHeader heading="My Custom Header" />,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,oe;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
        <SideNavigationItem active label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...(oe=(te=N.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ie,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,le,pe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
        <SideNavigationItem active label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>]
  }
}`,...(pe=(le=j.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,me,ge;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: Template,
  parameters: {},
  args: {
    children: [<TabNavigation key="1">
        <TabNavigationItem label="Item 1" active />
        <TabNavigationItem label="Item 2" />
        <TabNavigationItem label="Item 3" />
      </TabNavigation>, <ContentHeading key="2">My Page</ContentHeading>]
  }
}`,...(ge=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const Fe=["Default","Embedded","EmbeddedWithTopNav","EmbeddedWithSideNav","AppName","CustomPageHeader","CustomPageFooter","WithSideNavigation","WithTopNavigation","WithSideAndTopNavigation","WithTabNavigation"];export{v as AppName,b as CustomPageFooter,y as CustomPageHeader,g as Default,h as Embedded,f as EmbeddedWithSideNav,u as EmbeddedWithTopNav,j as WithSideAndTopNavigation,N as WithSideNavigation,I as WithTabNavigation,x as WithTopNavigation,Fe as __namedExportsOrder,ke as default};
