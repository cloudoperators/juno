import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-CmJWSAiZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{r as i,t as a}from"./TabList.component-C-4yCwkE.js";import{n as o,t as s}from"./TabList-Bk25nZ_t.js";import{n as c,t as l}from"./Tab.component-BsuuEv1r.js";import{n as u,t as d}from"./TabPanel-Bkfn6oeV.js";var f,p,m,h,g,_,v;t((()=>{f=e(n()),o(),c(),s(),d(),p=r(),m={title:`Layout/Tabs/Tabs`,component:i,argTypes:{variant:{options:[`content`,`main`],control:{type:`radio`}},children:{control:!1,table:{type:{summary:`ReactNode`}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:e,tabpanels:t,...n})=>(0,p.jsxs)(i,{...n,children:[(0,p.jsx)(a,{children:e}),t]})},h={args:{tabs:[(0,p.jsx)(l,{children:`Tab 1`},`t-1`),(0,p.jsx)(l,{children:`Tab 2`},`t-2`),(0,p.jsx)(l,{children:`Tab 3`},`t-3`)],tabpanels:[(0,p.jsx)(u,{children:`Content 1`},`tp-1`),(0,p.jsx)(u,{children:`Content 2`},`tp-2`),(0,p.jsx)(u,{children:`Content 3`},`tp-3`)]}},g={args:{tabs:[(0,p.jsx)(l,{icon:`warning`,children:`Warning`},`t-1`),(0,p.jsx)(l,{icon:`danger`,children:`Danger`},`t-2`),(0,p.jsx)(l,{icon:`info`,children:`Info`},`t-3`)],tabpanels:[(0,p.jsx)(u,{children:`Warning Content`},`tp-1`),(0,p.jsx)(u,{children:`Danger Content`},`tp-2`),(0,p.jsx)(u,{children:`Info Content`},`tp-3`)]}},_={render:({selectedIndex:e,onSelect:t,tabs:n,tabpanels:r,...o})=>{let[s,c]=(0,f.useState)(e||0);(0,f.useEffect)(()=>{c(e)},[e]);let l=e=>{c(e),t&&t(e)};return(0,p.jsxs)(i,{...o,selectedIndex:s,onSelect:l,children:[(0,p.jsx)(a,{children:n}),r]})},args:{tabs:[(0,p.jsx)(l,{children:`Tab 1`},`t-1`),(0,p.jsx)(l,{children:`Tab 2`},`t-2`),(0,p.jsx)(l,{children:`Tab 3`},`t-3`)],tabpanels:[(0,p.jsx)(u,{children:`Content 1`},`tp-1`),(0,p.jsx)(u,{children:`Content 2`},`tp-2`),(0,p.jsx)(u,{children:`Content 3`},`tp-3`)],selectedIndex:1,onSelect:()=>{}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`TabsWithIcons`,`ControlledTabs`]}))();export{_ as ControlledTabs,h as Default,g as TabsWithIcons,v as __namedExportsOrder,m as default};