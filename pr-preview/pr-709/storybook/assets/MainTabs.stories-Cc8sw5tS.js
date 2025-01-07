import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as u}from"./index-DysCNOs_.js";import{T as C,a as M}from"./TabList.component-D1Ky5kTU.js";import{T as t}from"./Tab.component-DU2OiVA8.js";import{T as l}from"./TabPanel.component-D5P2tUK3.js";import"./TabPanel-SXlHHxNZ.js";import"./Icon.component-C2yU3WBp.js";import"./widgets-BR6-ubtP.js";const s=({children:a=null,defaultIndex:n,selectedIndex:r,onSelect:i,className:b="",...c})=>e.jsx(C,{defaultIndex:n,selectedIndex:r,onSelect:i,className:b,variant:"main",...c,children:a});try{s.displayName="MainTabs",s.__docgenInfo={description:"Main Tabs are used at the top of the content area when using the tabs to switch the complete content area content. If you only want to have tabs for parts of the content use 'Tabs' instead and place them in the part of the content where the tabbed content should live. You will probably want to use a 'Container' inside the TabPanels to get nice padding.",displayName:"MainTabs",props:{children:{defaultValue:{value:"null"},description:"All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s)",name:"children",required:!1,type:{name:"MainTabElement"}},defaultIndex:{defaultValue:null,description:'The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".',name:"defaultIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:null,description:'The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.',name:"selectedIndex",required:!1,type:{name:"number"}},onSelect:{defaultValue:null,description:'Handler required in "Controlled Mode"',name:"onSelect",required:!1,type:{name:"OnSelectHander"}},className:{defaultValue:{value:""},description:"Add a custom className to the whole Tabs construct",name:"className",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Layout/Tabs/MainTabs",component:s,argTypes:{children:{control:!1},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}}},g=({tabs:a,tabpanels:n,...r})=>e.jsxs(s,{...r,children:[e.jsx(M,{children:a}),n]}),k=({onSelect:a,selectedIndex:n,tabs:r,tabpanels:i,...b})=>{const[c,T]=u.useState(0);u.useEffect(()=>{T(n)},[n]);const j=p=>{T(p),a&&a(p)};return e.jsxs(s,{...b,selectedIndex:c,onSelect:j,children:[e.jsx(M,{children:r}),i]})},o={render:g,args:{tabs:[e.jsx(t,{children:"MainTab 1"},"t-1"),e.jsx(t,{children:"MainTab 2"},"t-2"),e.jsx(t,{children:"MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")]}},d={render:k,args:{tabs:[e.jsx(t,{children:"Controlled MainTab 1"},"t-1"),e.jsx(t,{children:"Controlled MainTab 2"},"t-2"),e.jsx(t,{children:"Controlled MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")],selectedIndex:1,defaultIndex:null}};var h,m,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>]
  }
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,y,P;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    tabs: [<Tab key="t-1">Controlled MainTab 1</Tab>, <Tab key="t-2">Controlled MainTab 2</Tab>, <Tab key="t-3">Controlled MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>],
    selectedIndex: 1,
    defaultIndex: null
  }
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const D=["Default","Controlled"];export{d as Controlled,o as Default,D as __namedExportsOrder,V as default};
