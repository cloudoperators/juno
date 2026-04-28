import{g as e}from"./iframe-DaLLswkI.js";import{n as t,t as n}from"./TabList.component-DQslbSvH.js";import"./TabList-BD9hywtR.js";import{t as r}from"./Tab.component-Xd1IWqOn.js";import"./Tab-3KMCt1ld.js";import{t as i}from"./TabPanel-Dl18fZJR.js";import{useEffect as a,useState as o}from"react";var s=e(),c=({children:e,defaultIndex:n,selectedIndex:r,onSelect:i,className:a=``,...o})=>(0,s.jsx)(t,{defaultIndex:n,selectedIndex:r,onSelect:i,className:a,variant:`main`,...o,children:e});try{c.displayName=`MainTabs`,c.__docgenInfo={description:"`MainTabs` represents primary tab navigation at the content area's top, for complete content switching.\nIdeal for major interface tabbing; use `Tabs` for partial content areas.",displayName:`MainTabs`,props:{children:{defaultValue:null,description:`All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s).`,name:`children`,required:!1,type:{name:`ReactNode`}},defaultIndex:{defaultValue:null,description:`The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".`,name:`defaultIndex`,required:!1,type:{name:`number`}},selectedIndex:{defaultValue:null,description:`The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.`,name:`selectedIndex`,required:!1,type:{name:`number | null`}},onSelect:{defaultValue:null,description:`Handler required in "Controlled Mode".`,name:`onSelect`,required:!1,type:{name:`((_value: number) => void)`}},className:{defaultValue:{value:``},description:`Add a custom className to the whole Tabs construct.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var l={title:`Layout/Tabs/MainTabs`,component:c,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:e,tabpanels:t,...r})=>(0,s.jsxs)(c,{...r,children:[(0,s.jsx)(n,{children:e}),t]})},u={args:{tabs:[(0,s.jsx)(r,{children:`MainTab 1`},`t-1`),(0,s.jsx)(r,{children:`MainTab 2`},`t-2`),(0,s.jsx)(r,{children:`MainTab 3`},`t-3`)],tabpanels:[(0,s.jsx)(i,{children:`TabPanel 1`},`tp-1`),(0,s.jsx)(i,{children:`TabPanel 2`},`tp-2`),(0,s.jsx)(i,{children:`TabPanel 3`},`tp-3`)]}},d={render:({onSelect:e,selectedIndex:t,tabs:r,tabpanels:i,...l})=>{let[u,d]=o(0);a(()=>{d(t)},[t]);let f=t=>{d(t),e&&e(t)};return(0,s.jsxs)(c,{...l,selectedIndex:u,onSelect:f,children:[(0,s.jsx)(n,{children:r}),i]})},args:{tabs:[(0,s.jsx)(r,{children:`Controlled MainTab 1`},`t-1`),(0,s.jsx)(r,{children:`Controlled MainTab 2`},`t-2`),(0,s.jsx)(r,{children:`Controlled MainTab 3`},`t-3`)],tabpanels:[(0,s.jsx)(i,{children:`TabPanel 1`},`tp-1`),(0,s.jsx)(i,{children:`TabPanel 2`},`tp-2`),(0,s.jsx)(i,{children:`TabPanel 3`},`tp-3`)],selectedIndex:1}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Controlled`];export{d as Controlled,u as Default,f as __namedExportsOrder,l as default};