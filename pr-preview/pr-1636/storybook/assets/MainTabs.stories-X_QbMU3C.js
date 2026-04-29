import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,z as r}from"./iframe-BzVF-GWx.js";import{r as i,t as a}from"./TabList.component-4C1jcWlg.js";import{n as o,t as s}from"./TabList-vkPymxLE.js";import{t as c}from"./Tab.component-CrYSopGM.js";import{t as l}from"./Tab-DopG4ChH.js";import{n as u,t as d}from"./TabPanel-D1dijunF.js";var f,p,m=e((()=>{r(),o(),f=n(),p=({children:e,defaultIndex:t,selectedIndex:n,onSelect:r,className:a=``,...o})=>(0,f.jsx)(i,{defaultIndex:t,selectedIndex:n,onSelect:r,className:a,variant:`main`,...o,children:e});try{p.displayName=`MainTabs`,p.__docgenInfo={description:"`MainTabs` represents primary tab navigation at the content area's top, for complete content switching.\nIdeal for major interface tabbing; use `Tabs` for partial content areas.",displayName:`MainTabs`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/MainTabs/MainTabs.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`}],description:`All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s).`,name:`children`,parent:{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`},required:!1,tags:{},type:{name:`ReactNode`}},defaultIndex:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`}],description:`The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".`,name:`defaultIndex`,parent:{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`},required:!1,tags:{},type:{name:`number`}},selectedIndex:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`}],description:`The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.`,name:`selectedIndex`,parent:{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`},required:!1,tags:{},type:{name:`number | null`}},onSelect:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`}],description:`Handler required in "Controlled Mode".`,name:`onSelect`,parent:{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`},required:!1,tags:{},type:{name:`((_value: number) => void)`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`}],description:`Add a custom className to the whole Tabs construct.`,name:`className`,parent:{fileName:`ui-components/src/components/MainTabs/MainTabs.component.tsx`,name:`MainTabsProps`},required:!1,tags:{default:`""`},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-maintabs--docs
{@link MainTabsProps }`}}}catch{}})),h=e((()=>{m()})),g,_,v,y,b,x;e((()=>{g=t(r()),h(),l(),s(),d(),_=n(),v={title:`Layout/Tabs/MainTabs`,component:p,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:e,tabpanels:t,...n})=>(0,_.jsxs)(p,{...n,children:[(0,_.jsx)(a,{children:e}),t]})},y={args:{tabs:[(0,_.jsx)(c,{children:`MainTab 1`},`t-1`),(0,_.jsx)(c,{children:`MainTab 2`},`t-2`),(0,_.jsx)(c,{children:`MainTab 3`},`t-3`)],tabpanels:[(0,_.jsx)(u,{children:`TabPanel 1`},`tp-1`),(0,_.jsx)(u,{children:`TabPanel 2`},`tp-2`),(0,_.jsx)(u,{children:`TabPanel 3`},`tp-3`)]}},b={render:({onSelect:e,selectedIndex:t,tabs:n,tabpanels:r,...i})=>{let[o,s]=(0,g.useState)(0);(0,g.useEffect)(()=>{s(t)},[t]);let c=t=>{s(t),e&&e(t)};return(0,_.jsxs)(p,{...i,selectedIndex:o,onSelect:c,children:[(0,_.jsx)(a,{children:n}),r]})},args:{tabs:[(0,_.jsx)(c,{children:`Controlled MainTab 1`},`t-1`),(0,_.jsx)(c,{children:`Controlled MainTab 2`},`t-2`),(0,_.jsx)(c,{children:`Controlled MainTab 3`},`t-3`)],tabpanels:[(0,_.jsx)(u,{children:`TabPanel 1`},`tp-1`),(0,_.jsx)(u,{children:`TabPanel 2`},`tp-2`),(0,_.jsx)(u,{children:`TabPanel 3`},`tp-3`)],selectedIndex:1}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Controlled`]}))();export{b as Controlled,y as Default,x as __namedExportsOrder,v as default};