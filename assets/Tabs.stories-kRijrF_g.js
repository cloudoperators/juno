import{j as e,r as d}from"./iframe-DpzLhcSD.js";import{T as c,a as p}from"./TabList.component-Ci9s6MWY.js";import{T as n}from"./Tab.component-C8pDirth.js";import{T as a}from"./TabPanel.component-44J-vbdS.js";import"./TabPanel-BlseO2XN.js";import"./Icon.component-CZd049u1.js";const k={title:"Layout/Tabs/Tabs",component:c,argTypes:{variant:{options:["content","main"],control:{type:"radio"}},children:{control:!1,table:{type:{summary:"ReactNode"}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:t,tabpanels:s,...b})=>e.jsxs(c,{...b,children:[e.jsx(p,{children:t}),s]})},r={args:{tabs:[e.jsx(n,{children:"Tab 1"},"t-1"),e.jsx(n,{children:"Tab 2"},"t-2"),e.jsx(n,{children:"Tab 3"},"t-3")],tabpanels:[e.jsx(a,{children:"Content 1"},"tp-1"),e.jsx(a,{children:"Content 2"},"tp-2"),e.jsx(a,{children:"Content 3"},"tp-3")]}},o={args:{tabs:[e.jsx(n,{icon:"warning",children:"Warning"},"t-1"),e.jsx(n,{icon:"danger",children:"Danger"},"t-2"),e.jsx(n,{icon:"info",children:"Info"},"t-3")],tabpanels:[e.jsx(a,{children:"Warning Content"},"tp-1"),e.jsx(a,{children:"Danger Content"},"tp-2"),e.jsx(a,{children:"Info Content"},"tp-3")]}},l={render:({selectedIndex:t,onSelect:s,tabs:b,tabpanels:x,...m})=>{const[h,i]=d.useState(t||0);d.useEffect(()=>{i(t)},[t]);const u=T=>{i(T),s&&s(T)};return e.jsxs(c,{...m,selectedIndex:h,onSelect:u,children:[e.jsx(p,{children:b}),x]})},args:{tabs:[e.jsx(n,{children:"Tab 1"},"t-1"),e.jsx(n,{children:"Tab 2"},"t-2"),e.jsx(n,{children:"Tab 3"},"t-3")],tabpanels:[e.jsx(a,{children:"Content 1"},"tp-1"),e.jsx(a,{children:"Content 2"},"tp-2"),e.jsx(a,{children:"Content 3"},"tp-3")],selectedIndex:1,onSelect:()=>{}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">Tab 1</Tab>, <Tab key="t-2">Tab 2</Tab>, <Tab key="t-3">Tab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">Content 1</TabPanel>, <TabPanel key="tp-2">Content 2</TabPanel>, <TabPanel key="tp-3">Content 3</TabPanel>]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const I=["Default","TabsWithIcons","ControlledTabs"];export{l as ControlledTabs,r as Default,o as TabsWithIcons,I as __namedExportsOrder,k as default};
