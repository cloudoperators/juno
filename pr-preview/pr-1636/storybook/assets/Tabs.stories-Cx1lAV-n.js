import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{n as r,t as i}from"./TabList.component-0u4kl4S_.js";import"./TabList-BpNNYO4F.js";import{t as a}from"./Tab.component-A0BDtoAP.js";import{t as o}from"./TabPanel-ehoTv4ss.js";var s=e(t()),c=n(),l={title:`Layout/Tabs/Tabs`,component:r,argTypes:{variant:{options:[`content`,`main`],control:{type:`radio`}},children:{control:!1,table:{type:{summary:`ReactNode`}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:e,tabpanels:t,...n})=>(0,c.jsxs)(r,{...n,children:[(0,c.jsx)(i,{children:e}),t]})},u={args:{tabs:[(0,c.jsx)(a,{children:`Tab 1`},`t-1`),(0,c.jsx)(a,{children:`Tab 2`},`t-2`),(0,c.jsx)(a,{children:`Tab 3`},`t-3`)],tabpanels:[(0,c.jsx)(o,{children:`Content 1`},`tp-1`),(0,c.jsx)(o,{children:`Content 2`},`tp-2`),(0,c.jsx)(o,{children:`Content 3`},`tp-3`)]}},d={args:{tabs:[(0,c.jsx)(a,{icon:`warning`,children:`Warning`},`t-1`),(0,c.jsx)(a,{icon:`danger`,children:`Danger`},`t-2`),(0,c.jsx)(a,{icon:`info`,children:`Info`},`t-3`)],tabpanels:[(0,c.jsx)(o,{children:`Warning Content`},`tp-1`),(0,c.jsx)(o,{children:`Danger Content`},`tp-2`),(0,c.jsx)(o,{children:`Info Content`},`tp-3`)]}},f={render:({selectedIndex:e,onSelect:t,tabs:n,tabpanels:a,...o})=>{let[l,u]=(0,s.useState)(e||0);(0,s.useEffect)(()=>{u(e)},[e]);let d=e=>{u(e),t&&t(e)};return(0,c.jsxs)(r,{...o,selectedIndex:l,onSelect:d,children:[(0,c.jsx)(i,{children:n}),a]})},args:{tabs:[(0,c.jsx)(a,{children:`Tab 1`},`t-1`),(0,c.jsx)(a,{children:`Tab 2`},`t-2`),(0,c.jsx)(a,{children:`Tab 3`},`t-3`)],tabpanels:[(0,c.jsx)(o,{children:`Content 1`},`tp-1`),(0,c.jsx)(o,{children:`Content 2`},`tp-2`),(0,c.jsx)(o,{children:`Content 3`},`tp-3`)],selectedIndex:1,onSelect:()=>{}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ({
    selectedIndex,
    onSelect,
    tabs,
    tabpanels,
    ...args
  }) => {
    const [i, setI] = useState<number | undefined>(selectedIndex || 0);
    useEffect(() => {
      setI(selectedIndex);
    }, [selectedIndex]);
    const handleSelect = (idx: number) => {
      setI(idx);
      onSelect && onSelect(idx);
    };
    return <Tabs {...args} selectedIndex={i} onSelect={handleSelect}>
        <TabList>{tabs}</TabList>
        {tabpanels}
      </Tabs>;
  },
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>],
    selectedIndex: 1,
    onSelect: () => {}
  }
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`TabsWithIcons`,`ControlledTabs`];export{f as ControlledTabs,u as Default,d as TabsWithIcons,p as __namedExportsOrder,l as default};