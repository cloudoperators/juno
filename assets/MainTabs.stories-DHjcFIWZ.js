import{j as e,r as p}from"./iframe-B9fiukDd.js";import{T as x,a as h}from"./TabList.component-CZ7J5hlH.js";import{T as t}from"./Tab.component-D2InwSEJ.js";import{T as l}from"./TabPanel.component-MfAXThDV.js";import"./TabPanel-uy9P9I4A.js";import"./Icon.component-DwNj8wEt.js";const r=({children:a,defaultIndex:n,selectedIndex:s,onSelect:i,className:b="",...c})=>e.jsx(x,{defaultIndex:n,selectedIndex:s,onSelect:i,className:b,variant:"main",...c,children:a});try{r.displayName="MainTabs",r.__docgenInfo={description:"Main Tabs are used at the top of the content area when using the tabs to switch the complete content area content. If you only want to have tabs for parts of the content use 'Tabs' instead and place them in the part of the content where the tabbed content should live. You will probably want to use a 'Container' inside the TabPanels to get nice padding.",displayName:"MainTabs",props:{children:{defaultValue:null,description:"All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s)",name:"children",required:!1,type:{name:"ReactNode"}},defaultIndex:{defaultValue:null,description:'The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".',name:"defaultIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:null,description:'The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.',name:"selectedIndex",required:!1,type:{name:"number | null"}},onSelect:{defaultValue:null,description:'Handler required in "Controlled Mode"',name:"onSelect",required:!1,type:{name:"((value: number) => void)"}},className:{defaultValue:{value:""},description:"Add a custom className to the whole Tabs construct",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g={title:"Layout/Tabs/MainTabs",component:r,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:a,tabpanels:n,...s})=>e.jsxs(r,{...s,children:[e.jsx(h,{children:a}),n]})},d={args:{tabs:[e.jsx(t,{children:"MainTab 1"},"t-1"),e.jsx(t,{children:"MainTab 2"},"t-2"),e.jsx(t,{children:"MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")]}},o={render:({onSelect:a,selectedIndex:n,tabs:s,tabpanels:i,...b})=>{const[c,T]=p.useState(0);p.useEffect(()=>{T(n)},[n]);const m=u=>{T(u),a&&a(u)};return e.jsxs(r,{...b,selectedIndex:c,onSelect:m,children:[e.jsx(h,{children:s}),i]})},args:{tabs:[e.jsx(t,{children:"Controlled MainTab 1"},"t-1"),e.jsx(t,{children:"Controlled MainTab 2"},"t-2"),e.jsx(t,{children:"Controlled MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")],selectedIndex:1}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>]
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    onSelect,
    selectedIndex,
    tabs,
    tabpanels,
    ...args
  }) => {
    const [index, setIndex] = useState<number | undefined | null>(0);
    useEffect(() => {
      setIndex(selectedIndex);
    }, [selectedIndex]);
    const handleSelect = (idx: number) => {
      setIndex(idx);
      onSelect && onSelect(idx);
    };
    return <MainTabs {...args} selectedIndex={index} onSelect={handleSelect}>
        <TabList>{tabs}</TabList>
        {tabpanels}
      </MainTabs>;
  },
  args: {
    tabs: [<Tab key="t-1">Controlled MainTab 1</Tab>, <Tab key="t-2">Controlled MainTab 2</Tab>, <Tab key="t-3">Controlled MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>],
    selectedIndex: 1
  }
}`,...o.parameters?.docs?.source}}};const S=["Default","Controlled"];export{o as Controlled,d as Default,S as __namedExportsOrder,g as default};
