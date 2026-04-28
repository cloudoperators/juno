import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{n as r,t as i}from"./TabList.component-0u4kl4S_.js";import"./TabList-BpNNYO4F.js";import{t as a}from"./Tab.component-A0BDtoAP.js";import"./Tab-p39yac01.js";import{t as o}from"./TabPanel-ehoTv4ss.js";var s=e(t()),c=n(),l=({children:e,defaultIndex:t,selectedIndex:n,onSelect:i,className:a=``,...o})=>(0,c.jsx)(r,{defaultIndex:t,selectedIndex:n,onSelect:i,className:a,variant:`main`,...o,children:e});try{l.displayName=`MainTabs`,l.__docgenInfo={description:"`MainTabs` represents primary tab navigation at the content area's top, for complete content switching.\nIdeal for major interface tabbing; use `Tabs` for partial content areas.",displayName:`MainTabs`,props:{children:{defaultValue:null,description:`All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s).`,name:`children`,required:!1,type:{name:`ReactNode`}},defaultIndex:{defaultValue:null,description:`The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".`,name:`defaultIndex`,required:!1,type:{name:`number`}},selectedIndex:{defaultValue:null,description:`The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.`,name:`selectedIndex`,required:!1,type:{name:`number | null`}},onSelect:{defaultValue:null,description:`Handler required in "Controlled Mode".`,name:`onSelect`,required:!1,type:{name:`((_value: number) => void)`}},className:{defaultValue:{value:``},description:`Add a custom className to the whole Tabs construct.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var u={title:`Layout/Tabs/MainTabs`,component:l,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:e,tabpanels:t,...n})=>(0,c.jsxs)(l,{...n,children:[(0,c.jsx)(i,{children:e}),t]})},d={args:{tabs:[(0,c.jsx)(a,{children:`MainTab 1`},`t-1`),(0,c.jsx)(a,{children:`MainTab 2`},`t-2`),(0,c.jsx)(a,{children:`MainTab 3`},`t-3`)],tabpanels:[(0,c.jsx)(o,{children:`TabPanel 1`},`tp-1`),(0,c.jsx)(o,{children:`TabPanel 2`},`tp-2`),(0,c.jsx)(o,{children:`TabPanel 3`},`tp-3`)]}},f={render:({onSelect:e,selectedIndex:t,tabs:n,tabpanels:r,...a})=>{let[o,u]=(0,s.useState)(0);(0,s.useEffect)(()=>{u(t)},[t]);let d=t=>{u(t),e&&e(t)};return(0,c.jsxs)(l,{...a,selectedIndex:o,onSelect:d,children:[(0,c.jsx)(i,{children:n}),r]})},args:{tabs:[(0,c.jsx)(a,{children:`Controlled MainTab 1`},`t-1`),(0,c.jsx)(a,{children:`Controlled MainTab 2`},`t-2`),(0,c.jsx)(a,{children:`Controlled MainTab 3`},`t-3`)],tabpanels:[(0,c.jsx)(o,{children:`TabPanel 1`},`tp-1`),(0,c.jsx)(o,{children:`TabPanel 2`},`tp-2`),(0,c.jsx)(o,{children:`TabPanel 3`},`tp-3`)],selectedIndex:1}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Controlled`];export{f as Controlled,d as Default,p as __namedExportsOrder,u as default};