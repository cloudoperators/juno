import{j as e,r as p}from"./iframe-CI61WwEo.js";import{T as I,a as M}from"./TabList.component-BOA7Ljdu.js";import{T as t}from"./Tab.component-B7pH2WdW.js";import{T as l}from"./TabPanel.component-D11-_PXw.js";import"./TabPanel-BX0k_eap.js";import"./clsx-B-dksMZM.js";import"./Icon.component-Tv7K8ju9.js";const r=({children:a,defaultIndex:n,selectedIndex:s,onSelect:i,className:b="",...c})=>e.jsx(I,{defaultIndex:n,selectedIndex:s,onSelect:i,className:b,variant:"main",...c,children:a});try{r.displayName="MainTabs",r.__docgenInfo={description:"Main Tabs are used at the top of the content area when using the tabs to switch the complete content area content. If you only want to have tabs for parts of the content use 'Tabs' instead and place them in the part of the content where the tabbed content should live. You will probably want to use a 'Container' inside the TabPanels to get nice padding.",displayName:"MainTabs",props:{children:{defaultValue:null,description:"All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s)",name:"children",required:!1,type:{name:"ReactNode"}},defaultIndex:{defaultValue:null,description:'The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".',name:"defaultIndex",required:!1,type:{name:"number"}},selectedIndex:{defaultValue:null,description:'The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.',name:"selectedIndex",required:!1,type:{name:"number | null"}},onSelect:{defaultValue:null,description:'Handler required in "Controlled Mode"',name:"onSelect",required:!1,type:{name:"((value: number) => void)"}},className:{defaultValue:{value:""},description:"Add a custom className to the whole Tabs construct",name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Layout/Tabs/MainTabs",component:r,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},tabs:{table:{disable:!0}},tabpanels:{table:{disable:!0}}},render:({tabs:a,tabpanels:n,...s})=>e.jsxs(r,{...s,children:[e.jsx(M,{children:a}),n]})},o={args:{tabs:[e.jsx(t,{children:"MainTab 1"},"t-1"),e.jsx(t,{children:"MainTab 2"},"t-2"),e.jsx(t,{children:"MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")]}},d={render:({onSelect:a,selectedIndex:n,tabs:s,tabpanels:i,...b})=>{const[c,T]=p.useState(0);p.useEffect(()=>{T(n)},[n]);const j=u=>{T(u),a&&a(u)};return e.jsxs(r,{...b,selectedIndex:c,onSelect:j,children:[e.jsx(M,{children:s}),i]})},args:{tabs:[e.jsx(t,{children:"Controlled MainTab 1"},"t-1"),e.jsx(t,{children:"Controlled MainTab 2"},"t-2"),e.jsx(t,{children:"Controlled MainTab 3"},"t-3")],tabpanels:[e.jsx(l,{children:"TabPanel 1"},"tp-1"),e.jsx(l,{children:"TabPanel 2"},"tp-2"),e.jsx(l,{children:"TabPanel 3"},"tp-3")],selectedIndex:1}};var h,m,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: [<Tab key="t-1">MainTab 1</Tab>, <Tab key="t-2">MainTab 2</Tab>, <Tab key="t-3">MainTab 3</Tab>],
    tabpanels: [<TabPanel key="tp-1">TabPanel 1</TabPanel>, <TabPanel key="tp-2">TabPanel 2</TabPanel>, <TabPanel key="tp-3">TabPanel 3</TabPanel>]
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,y,P;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const N=["Default","Controlled"];export{d as Controlled,o as Default,N as __namedExportsOrder,q as default};
