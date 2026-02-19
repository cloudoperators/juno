import{j as e,r as u}from"./iframe-CkPUQXkT.js";import{T as h,a as m}from"./TabList.component-DUgzQYeH.js";import{T as t}from"./Tab.component-CwZV5KAb.js";import{T as l}from"./TabPanel.component-BB_Hwcam.js";import"./preload-helper-PPVm8Dsz.js";import"./TabPanel-BWLeDpq_.js";import"./Icon.component-udzxEiov.js";const r=({children:a,defaultIndex:n,selectedIndex:s,onSelect:i,className:b="",...c})=>e.jsx(h,{defaultIndex:n,selectedIndex:s,onSelect:i,className:b,variant:"main",...c,children:a});try{r.displayName="MainTabs",r.__docgenInfo={description:"`MainTabs` represents primary tab navigation at the content area's top, for complete content switching.\nIdeal for major interface tabbing; use `Tabs` for partial content areas.",displayName:"MainTabs",props:{children:{defaultValue:null,description:"All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s).",name:"children",required:!1,type:{name:"ReactNode"}},defaultIndex:{defaultValue:null,description:'The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".',name:"defaultIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:null,description:'The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.',name:"selectedIndex",required:!1,type:{name:"number | null"}},onSelect:{defaultValue:null,description:'Handler required in "Controlled Mode".',name:"onSelect",required:!1,type:{name:"((_value: number) => void)"}},className:{defaultValue:{value:""},description:"Add a custom className to the whole Tabs construct.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Layout/Tabs/MainTabs",component:r,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:a,tabpanels:n,...s})=>e.jsxs(r,{...s,children:[e.jsx(m,{children:a}),n]})},d={args:{tabs:[e.jsx(t,{children:"MainTab 1"},"t-1"),e.jsx(t,{children:"MainTab 2"},"t-2"),e.jsx(t,{children:"MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")]}},o={render:({onSelect:a,selectedIndex:n,tabs:s,tabpanels:i,...b})=>{const[c,T]=u.useState(0);u.useEffect(()=>{T(n)},[n]);const x=p=>{T(p),a&&a(p)};return e.jsxs(r,{...b,selectedIndex:c,onSelect:x,children:[e.jsx(m,{children:s}),i]})},args:{tabs:[e.jsx(t,{children:"Controlled MainTab 1"},"t-1"),e.jsx(t,{children:"Controlled MainTab 2"},"t-2"),e.jsx(t,{children:"Controlled MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")],selectedIndex:1}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const k=["Default","Controlled"];export{o as Controlled,d as Default,k as __namedExportsOrder,S as default};
