import{j as e}from"./iframe-8mFGz_IY.js";import{N as d,a}from"./NavigationItem.component-C5J44c4u.js";import"./Icon.component-wwPg9qoH.js";const t=({children:v,...u})=>e.jsx(d,{...u,children:v}),N={title:"Internal/Navigation",component:d,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},onActiveItemChange:{control:!1,table:{type:{summary:"(value: ReactNode) => void"}}}}},i={render:t,args:{activeItem:"Item 1",children:[e.jsx(a,{children:"Item 1"},"i-1"),e.jsx(a,{children:"Item 2"},"i-2"),e.jsx(a,{children:"Item 3"},"i-3"),e.jsx(a,{disabled:!0,children:"Item 4"},"i-4")]}},r={render:t,args:{children:[e.jsx(a,{value:"i-1",label:"Item 1"},"i-1"),e.jsx(a,{value:"i-2",label:"Item 2"},"i-2"),e.jsx(a,{value:"i-3",label:"Item 3"},"i-3")]}},n={render:t,args:{children:[e.jsx(a,{value:"i-1",label:"Item 1 Label",children:"Item 1"},"i-1"),e.jsx(a,{value:"i-2",label:"Item 2 Label",children:"Item 2"},"i-2"),e.jsx(a,{value:"i-3",label:"Item 3 Label",children:"Item 3"},"i-3")]}},m={render:t,args:{children:[e.jsx(a,{value:"Item 1"},"i-1"),e.jsx(a,{value:"Item 2",active:!0},"i-2"),e.jsx(a,{value:"Item 3"},"i-3")]}},s={render:t,args:{activeItem:"item-2",children:[e.jsx(a,{value:"item-1",label:"Item 1"},"i-1"),e.jsx(a,{value:"item-2",label:"Item 2"},"i-2"),e.jsx(a,{value:"item-3",label:"Item 3"},"i-3")]}},l={render:t,args:{activeItem:"Item 2",children:[e.jsx(a,{value:"item-1",label:"Item 1"},"i-1"),e.jsx(a,{value:"item-2",label:"Item 2"},"i-2"),e.jsx(a,{value:"item-3",label:"Item 3"},"i-3")]}},o={render:t,args:{activeItem:"Item 2",children:[e.jsx(a,{value:"itm-1",children:"Item 1"},"i-1"),e.jsx(a,{value:"itm-2",children:"Item 2"},"i-2"),e.jsx(a,{value:"itm-3",children:"Item 3"},"i-3")]}},c={render:t,args:{disabled:!0,children:[e.jsx(a,{children:"Item 1"},"i-1"),e.jsx(a,{active:!0,children:"Item 2"},"i-2"),e.jsx(a,{children:"Item 3"},"i-3")]}},I={render:t,args:{children:[e.jsx(a,{href:"https://www.sap.com",children:"Link 1"},"i-1"),e.jsx(a,{href:"https://www.sap.com",children:"Link 2"},"i-2"),e.jsx(a,{href:"https://www.sap.com",children:"Link 3"},"i-3")]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    activeItem: "Item 1",
    children: [<NavigationItem key="i-1">Item 1</NavigationItem>, <NavigationItem key="i-2">Item 2</NavigationItem>, <NavigationItem key="i-3">Item 3</NavigationItem>, <NavigationItem key="i-4" disabled>
        Item 4
      </NavigationItem>]
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<NavigationItem key="i-1" value="i-1" label="Item 1" />, <NavigationItem key="i-2" value="i-2" label="Item 2" />, <NavigationItem key="i-3" value="i-3" label="Item 3" />]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<NavigationItem key="i-1" value="i-1" label="Item 1 Label">
        Item 1
      </NavigationItem>, <NavigationItem key="i-2" value="i-2" label="Item 2 Label">
        Item 2
      </NavigationItem>, <NavigationItem key="i-3" value="i-3" label="Item 3 Label">
        Item 3
      </NavigationItem>]
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<NavigationItem key="i-1" value="Item 1" />, <NavigationItem key="i-2" value="Item 2" active />, <NavigationItem key="i-3" value="Item 3" />]
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    activeItem: "item-2",
    children: [<NavigationItem key="i-1" value="item-1" label="Item 1" />, <NavigationItem key="i-2" value="item-2" label="Item 2" />, <NavigationItem key="i-3" value="item-3" label="Item 3" />]
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    activeItem: "Item 2",
    children: [<NavigationItem key="i-1" value="item-1" label="Item 1" />, <NavigationItem key="i-2" value="item-2" label="Item 2" />, <NavigationItem key="i-3" value="item-3" label="Item 3" />]
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    activeItem: "Item 2",
    children: [<NavigationItem key="i-1" value="itm-1">
        Item 1
      </NavigationItem>, <NavigationItem key="i-2" value="itm-2">
        Item 2
      </NavigationItem>, <NavigationItem key="i-3" value="itm-3">
        Item 3
      </NavigationItem>]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    children: [<NavigationItem key="i-1">Item 1</NavigationItem>, <NavigationItem key="i-2" active>
        Item 2
      </NavigationItem>, <NavigationItem key="i-3">Item 3</NavigationItem>]
  }
}`,...c.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<NavigationItem href="https://www.sap.com" key="i-1">
        Link 1
      </NavigationItem>, <NavigationItem href="https://www.sap.com" key="i-2">
        Link 2
      </NavigationItem>, <NavigationItem href="https://www.sap.com" key="i-3">
        Link 3
      </NavigationItem>]
  }
}`,...I.parameters?.docs?.source}}};const b=["DefaultWithChildren","WithValuesAndLabels","WithValuesLabelsAndChildren","ValuesOnly","WithActiveItemByValue","WithActiveItemByLabel","WithActiveItemByChild","Disabled","ItemsAsLinks"];export{i as DefaultWithChildren,c as Disabled,I as ItemsAsLinks,m as ValuesOnly,o as WithActiveItemByChild,l as WithActiveItemByLabel,s as WithActiveItemByValue,r as WithValuesAndLabels,n as WithValuesLabelsAndChildren,b as __namedExportsOrder,N as default};
