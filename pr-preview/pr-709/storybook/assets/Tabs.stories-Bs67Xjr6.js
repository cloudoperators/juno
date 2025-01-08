import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as d}from"./index-DysCNOs_.js";import{T as c,a as f}from"./TabList.component-D1Ky5kTU.js";import{T as n}from"./Tab.component-B2nrnc_G.js";import{T as a}from"./TabPanel.component-DSoVN15q.js";import"./TabPanel-SXlHHxNZ.js";import"./Icon.component-C0iYw0aN.js";import"./widgets-BR6-ubtP.js";const z={title:"Layout/Tabs/Tabs",component:c,argTypes:{variant:{options:["content","main"],control:{type:"radio"}},children:{control:!1},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}}},P=({tabs:t,tabpanels:r,...b})=>e.jsxs(c,{...b,children:[e.jsx(f,{children:t}),r]}),W=({selectedIndex:t,onSelect:r,tabs:b,tabpanels:k,...I})=>{const[S,T]=d.useState(0);d.useEffect(()=>{T(t)},[t]);const D=i=>{T(i),r&&r(i)};return e.jsxs(c,{...I,selectedIndex:S,onSelect:D,children:[e.jsx(f,{children:b}),k]})},s={render:P,args:{tabs:[e.jsx(n,{children:"Tab 1"},"t-1"),e.jsx(n,{children:"Tab 2"},"t-2"),e.jsx(n,{children:"Tab 3"},"t-3")],tabpanels:[e.jsx(a,{children:"Content 1"},"tp-1"),e.jsx(a,{children:"Content 2"},"tp-2"),e.jsx(a,{children:"Content 3"},"tp-3")]}},o={render:P,args:{tabs:[e.jsx(n,{icon:"warning",children:"Warning"},"t-1"),e.jsx(n,{icon:"danger",children:"Danger"},"t-2"),e.jsx(n,{icon:"info",children:"Info"},"t-3")],tabpanels:[e.jsx(a,{children:"Warning Content"},"tp-1"),e.jsx(a,{children:"Danger Content"},"tp-1"),e.jsx(a,{children:"Info Content"},"tp-1")]}},l={render:W,args:{tabs:[e.jsx(n,{children:"Tab 1"},"t-1"),e.jsx(n,{children:"Tab 2"},"t-2"),e.jsx(n,{children:"Tab 3"},"t-3")],tabpanels:[e.jsx(a,{children:"Content 1"},"tp-1"),e.jsx(a,{children:"Content 2"},"tp-2"),e.jsx(a,{children:"Content 3"},"tp-3")],selectedIndex:1,defaultIndex:null,onSelect:()=>{}}};var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>]
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,j,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: [<Tab key="t-1" icon="warning">
        Warning
      </Tab>, <Tab key="t-2" icon="danger">
        Danger
      </Tab>, <Tab key="t-3" icon="info">
        Info
      </Tab>],
    tabpanels: [<TabPanel key="tp-1">Warning Content</TabPanel>, <TabPanel key="tp-1">Danger Content</TabPanel>, <TabPanel key="tp-1">Info Content</TabPanel>]
  }
}`,...(u=(j=o.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var g,C,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>],
    selectedIndex: 1,
    defaultIndex: null,
    onSelect: () => {}
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const A=["Default","TabsWithIcons","ControlledTabs"];export{l as ControlledTabs,s as Default,o as TabsWithIcons,A as __namedExportsOrder,z as default};
