import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{A as ye}from"./AppBody.component-BF1AGHSW.js";import{P as w}from"./PageHeader.component-DCzjq6T5.js";import{M as _}from"./MainContainer.component-CEaVW4UM.js";import{C as A}from"./ContentContainer.component-Ce7uhB0I.js";import{P as M}from"./PageFooter.component-NMWcR93m.js";import{H as E}from"./HeaderContainer.component-DxMuqi0R.js";import{S as P,a as t}from"./SideNavigationItem.component-Bs8q0Sq_.js";import{T as R,a as r}from"./TopNavigationItem.component-BnL8BlHe.js";import{T as be,a as H}from"./TabNavigationItem.component-6YnOpuLG.js";import{C as a}from"./ContentHeading.component-2jM_dgUw.js";import{C as Ne}from"./Container.component-CzIMm-Jh.js";import"./index-DysCNOs_.js";import"./NavigationItem.component-DvZ-FO9F.js";import"./Icon.component-BzIpr4Ej.js";import"./widgets-BR6-ubtP.js";const xe=`
  jn-flex
  jn-grow
`,je=`
  2xl:jn-container
  2xl:jn-mx-auto
`,Ce=`
  3xl:jn-container
  3xl:jn-mx-auto
`,j=({children:o=null,fullWidth:i=!1,hasSideNav:s=!1,className:I="",...S})=>e.jsx("div",{className:`
        juno-main-inner
         ${xe}
         ${i?"juno-main-inner-fullwidth":s?Ce:je}
         ${I}`,...S,children:o});try{j.displayName="MainContainerInner",j.__docgenInfo={description:"An inner wrapper to constrain page / view content width.",displayName:"MainContainerInner",props:{children:{defaultValue:{value:"null"},description:"The children to render",name:"children",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"Whether the page/view content will stretch over the full width of the viewport or not. Default is `false`.",name:"fullWidth",required:!1,type:{name:"boolean"}},hasSideNav:{defaultValue:{value:"false"},description:"Whether the main inner container needs to house a side navigation or not. Do not use, for internal use only.",name:"hasSideNav",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a custom class",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=({children:o,className:i="",contentHeading:s="",embedded:I=!1,pageHeader:S=e.jsx(w,{}),pageFooter:W=e.jsx(M,{}),sideNavigation:d,topNavigation:p,...k})=>{s&&s.length&&console.warn("AppShell: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a ContentHeading element as a child in your main content.");const{fullWidthContent:T}=k,ve=(l,F)=>!l&&!F?null:e.jsxs(E,{fullWidth:T===!0,children:[l&&typeof l=="string"?e.jsx(w,{heading:l}):l,F]});return e.jsxs(ye,{className:i,...k,children:[s||"",I?e.jsxs(e.Fragment,{children:[p&&e.jsx(E,{children:p}),e.jsx(_,{children:e.jsxs(j,{fullWidth:T!==!1,hasSideNav:!!d,className:`${p?"jn-mt-[3.875rem]":""}`,children:[d&&d,e.jsx(A,{children:o})]})})]}):e.jsxs(e.Fragment,{children:[ve(S,p),e.jsx(_,{children:e.jsxs(j,{fullWidth:T===!0,hasSideNav:!!d,className:"jn-mt-[3.875rem]",children:[d,e.jsx(A,{children:o})]})}),W||e.jsx(M,{})]})]})};try{C.displayName="AppShell",C.__docgenInfo={description:"Body of the app. Treat this like the body tag of an html page.",displayName:"AppShell",props:{children:{defaultValue:null,description:"The main content of the app.",name:"children",required:!1,type:{name:"ReactNode"}},pageHeader:{defaultValue:{value:"<PageHeader />"},description:"Pass either the `<PageHeader>` component or if you don't need to add any content to the page header pass a string to be used as the app name in the standard page header.",name:"pageHeader",required:!1,type:{name:"ReactNode"}},pageFooter:{defaultValue:{value:"<PageFooter />"},description:"Optional. If specified pass a `<PageFooter>` component. If undefined will use default PageFooter",name:"pageFooter",required:!1,type:{name:"ReactNode"}},topNavigation:{defaultValue:null,description:"Optional. If specified expects a `<TopNavigation>` component. If undefined no top navigation is rendered.",name:"topNavigation",required:!1,type:{name:"ReactNode"}},sideNavigation:{defaultValue:null,description:"Optional. If specified expects a `<SideNavigation>` component. If undefined no side navigation is rendered.",name:"sideNavigation",required:!1,type:{name:"ReactNode"}},contentHeading:{defaultValue:{value:""},description:"OBSOLETE: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a `<ContentHeading>` element as a child in your main content.",name:"contentHeading",required:!1,type:{name:"string"}},embedded:{defaultValue:{value:"false"},description:`Optional: Defaults to false. Set embedded to true if app is to be rendered embedded in another app/page.
In this case only the content area and children are rendered, a TopNavigation if passed, but no header/footer or remaining layout components`,name:"embedded",required:!1,type:{name:"boolean"}},fullWidthContent:{defaultValue:null,description:"Whether the main page / view content can spread over the full available width of the viewport or not. Default is `false` (resulting in a width-constrained, centred content column on very wide screens) UNLESS the AppShell is rendered with embedded as true, then the main content will be full-width by default. In embedded mode, `fullWidthContent` can still be passed as `false` explicitly.",name:"fullWidthContent",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Oe={title:"Layout/AppShell",component:C,argTypes:{pageHeader:{control:!1},pageFooter:{control:!1},topNavigation:{control:!1},sideNavigation:{control:!1},children:{control:!1}}},n=({children:o,...i})=>e.jsx(C,{...i,children:e.jsx(Ne,{py:!0,children:o})}),c={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with content heading and default header and footer."}}},args:{children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},m={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere)."}}},args:{embedded:!0,children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},g={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode."}}},args:{embedded:!0,topNavigation:e.jsxs(R,{children:[e.jsx(r,{icon:"home",label:"Home"}),e.jsx(r,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},h={render:n,parameters:{docs:{description:{story:"Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode."}}},args:{embedded:!0,sideNavigation:e.jsxs(P,{children:[e.jsx(t,{active:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},u={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with provided app name for the header and default footer."}}},args:{pageHeader:"My App",children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},f={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with custom page header and default footer."}}},args:{pageHeader:e.jsx(w,{heading:"My Custom Header"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},v={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with default header and custom footer."}}},args:{pageFooter:e.jsx(M,{children:"My custom footer"}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},y={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with a side navigation."}}},args:{sideNavigation:e.jsxs(P,{children:[e.jsx(t,{active:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},b={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with top navigation."}}},args:{topNavigation:e.jsxs(R,{children:[e.jsx(r,{icon:"home",label:"Home"}),e.jsx(r,{active:!0,label:"Navigation Item"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},N={render:n,parameters:{docs:{description:{story:"Responsive shell for your application with both a top navigation and side navigation."}}},args:{topNavigation:e.jsxs(R,{children:[e.jsx(r,{icon:"home",label:"Home"}),e.jsx(r,{active:!0,label:"Navigation Item"})]}),sideNavigation:e.jsxs(P,{children:[e.jsx(t,{active:!0,label:"Item 1"}),e.jsx(t,{label:"Item 2"}),e.jsx(t,{label:"Item 3"})]}),children:[e.jsx(a,{children:"My Page"},"1"),e.jsx("p",{children:"Content goes here"},"2")]}},x={render:n,parameters:{},args:{children:[e.jsxs(be,{children:[e.jsx(H,{label:"Item 1",active:!0}),e.jsx(H,{label:"Item 2"}),e.jsx(H,{label:"Item 3"})]},"1"),e.jsx(a,{children:"My Page"},"2")]}};var q,V,O;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var D,$,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var L,U,z;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(U=g.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ie,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,le,pe;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(le=b.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,me,ge;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(me=N.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ue,fe;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: Template,
  parameters: {},
  args: {
    children: [<TabNavigation key="1">
        <TabNavigationItem label="Item 1" active />
        <TabNavigationItem label="Item 2" />
        <TabNavigationItem label="Item 3" />
      </TabNavigation>, <ContentHeading key="2">My Page</ContentHeading>]
  }
}`,...(fe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};const De=["Default","Embedded","EmbeddedWithTopNav","EmbeddedWithSideNav","AppName","CustomPageHeader","CustomPageFooter","WithSideNavigation","WithTopNavigation","WithSideAndTopNavigation","WithTabNavigation"];export{u as AppName,v as CustomPageFooter,f as CustomPageHeader,c as Default,m as Embedded,h as EmbeddedWithSideNav,g as EmbeddedWithTopNav,N as WithSideAndTopNavigation,y as WithSideNavigation,x as WithTabNavigation,b as WithTopNavigation,De as __namedExportsOrder,Oe as default};
