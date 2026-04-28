import{g as e}from"./iframe-Cx-zHds2.js";import{n as t,t as n}from"./TabList.component-B5iBmVbT.js";import"./TabList-CTiHONhc.js";import{t as r}from"./Tab.component-B3U00jpS.js";import{t as i}from"./TabPanel-CnnlKS9c.js";import{useEffect as a,useState as o}from"react";var s=e(),c={title:`Layout/Tabs/Tabs`,component:t,argTypes:{variant:{options:[`content`,`main`],control:{type:`radio`}},children:{control:!1,table:{type:{summary:`ReactNode`}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:e,tabpanels:r,...i})=>(0,s.jsxs)(t,{...i,children:[(0,s.jsx)(n,{children:e}),r]})},l={args:{tabs:[(0,s.jsx)(r,{children:`Tab 1`},`t-1`),(0,s.jsx)(r,{children:`Tab 2`},`t-2`),(0,s.jsx)(r,{children:`Tab 3`},`t-3`)],tabpanels:[(0,s.jsx)(i,{children:`Content 1`},`tp-1`),(0,s.jsx)(i,{children:`Content 2`},`tp-2`),(0,s.jsx)(i,{children:`Content 3`},`tp-3`)]}},u={args:{tabs:[(0,s.jsx)(r,{icon:`warning`,children:`Warning`},`t-1`),(0,s.jsx)(r,{icon:`danger`,children:`Danger`},`t-2`),(0,s.jsx)(r,{icon:`info`,children:`Info`},`t-3`)],tabpanels:[(0,s.jsx)(i,{children:`Warning Content`},`tp-1`),(0,s.jsx)(i,{children:`Danger Content`},`tp-2`),(0,s.jsx)(i,{children:`Info Content`},`tp-3`)]}},d={render:({selectedIndex:e,onSelect:r,tabs:i,tabpanels:c,...l})=>{let[u,d]=o(e||0);a(()=>{d(e)},[e]);let f=e=>{d(e),r&&r(e)};return(0,s.jsxs)(t,{...l,selectedIndex:u,onSelect:f,children:[(0,s.jsx)(n,{children:i}),c]})},args:{tabs:[(0,s.jsx)(r,{children:`Tab 1`},`t-1`),(0,s.jsx)(r,{children:`Tab 2`},`t-2`),(0,s.jsx)(r,{children:`Tab 3`},`t-3`)],tabpanels:[(0,s.jsx)(i,{children:`Content 1`},`tp-1`),(0,s.jsx)(i,{children:`Content 2`},`tp-2`),(0,s.jsx)(i,{children:`Content 3`},`tp-3`)],selectedIndex:1,onSelect:()=>{}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`TabsWithIcons`,`ControlledTabs`];export{d as ControlledTabs,l as Default,u as TabsWithIcons,f as __namedExportsOrder,c as default};