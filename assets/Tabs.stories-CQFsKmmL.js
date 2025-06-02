import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DI7CEG0L.js";import{T as c,a as P}from"./TabList.component-BVFT5iPY.js";import{T as n}from"./Tab.component-BMxemJFh.js";import{T as a}from"./TabPanel.component-DCdQej-v.js";import"./TabPanel-BMxd_RTe.js";import"./Icon.component-CS1mzCYa.js";const O={title:"Layout/Tabs/Tabs",component:c,argTypes:{variant:{options:["content","main"],control:{type:"radio"}},children:{control:!1,table:{type:{summary:"ReactNode"}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}}},k=({tabs:t,tabpanels:r,...b})=>e.jsxs(c,{...b,children:[e.jsx(P,{children:t}),r]}),W=({selectedIndex:t,onSelect:r,tabs:b,tabpanels:f,...I})=>{const[S,T]=p.useState(0);p.useEffect(()=>{T(t)},[t]);const D=i=>{T(i),r&&r(i)};return e.jsxs(c,{...I,selectedIndex:S,onSelect:D,children:[e.jsx(P,{children:b}),f]})},s={render:k,args:{tabs:[e.jsx(n,{children:"Tab 1"},"t-1"),e.jsx(n,{children:"Tab 2"},"t-2"),e.jsx(n,{children:"Tab 3"},"t-3")],tabpanels:[e.jsx(a,{children:"Content 1"},"tp-1"),e.jsx(a,{children:"Content 2"},"tp-2"),e.jsx(a,{children:"Content 3"},"tp-3")]}},o={render:k,args:{tabs:[e.jsx(n,{icon:"warning",children:"Warning"},"t-1"),e.jsx(n,{icon:"danger",children:"Danger"},"t-2"),e.jsx(n,{icon:"info",children:"Info"},"t-3")],tabpanels:[e.jsx(a,{children:"Warning Content"},"tp-1"),e.jsx(a,{children:"Danger Content"},"tp-2"),e.jsx(a,{children:"Info Content"},"tp-3")]}},l={render:W,args:{tabs:[e.jsx(n,{children:"Tab 1"},"t-1"),e.jsx(n,{children:"Tab 2"},"t-2"),e.jsx(n,{children:"Tab 3"},"t-3")],tabpanels:[e.jsx(a,{children:"Content 1"},"tp-1"),e.jsx(a,{children:"Content 2"},"tp-2"),e.jsx(a,{children:"Content 3"},"tp-3")],selectedIndex:1,onSelect:()=>{}}};var d,m,x;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>]
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,j,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: [<Tab key="t-1" icon="warning">
        Warning
      </Tab>, <Tab key="t-2" icon="danger">
        Danger
      </Tab>, <Tab key="t-3" icon="info">
        Info
      </Tab>],
    tabpanels: [<TabPanel key="tp-1">Warning Content</TabPanel>, <TabPanel key="tp-2">Danger Content</TabPanel>, <TabPanel key="tp-3">Info Content</TabPanel>]
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var g,C,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>],
    selectedIndex: 1,
    onSelect: () => {}
  }
}`,...(u=(C=l.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const q=["Default","TabsWithIcons","ControlledTabs"];export{l as ControlledTabs,s as Default,o as TabsWithIcons,q as __namedExportsOrder,O as default};
