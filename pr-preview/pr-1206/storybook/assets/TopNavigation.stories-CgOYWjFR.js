import{j as e}from"./iframe-BrL5FYlk.js";import{T as s,a as t}from"./TopNavigationItem.component-CYP_qvtq.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.component-DCBarZ17.js";import"./NavigationItem.component-_W-H2iEZ.js";import"./Icon.component-DgTHrRdc.js";const v={title:"Navigation/TopNavigation/TopNavigation",component:s,argTypes:{children:{control:!1}}},a={args:{children:[e.jsx(t,{label:"Item 1"},"item-1"),e.jsx(t,{label:"Item 2",active:!0},"item-2"),e.jsx(t,{label:"Item with Icon",icon:"warning"},"item-3"),e.jsx(t,{label:"Disabled Item",disabled:!0},"item-4")]}},i={args:{disabled:!0,children:[e.jsx(t,{label:"Item 1"},"item-1"),e.jsx(t,{label:"Item 2"},"item-2"),e.jsx(t,{label:"Item 3"},"item-3"),e.jsx(t,{label:"Item 4"},"item-4")]},parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}}},n={args:{activeItem:"i-3",children:[e.jsx(t,{label:"Item 1",value:"i-1"},"item-1"),e.jsx(t,{label:"Item 2",value:"i-2"},"item-2"),e.jsx(t,{label:"Item 3",value:"i-3"},"item-3"),e.jsx(t,{label:"Item 4",value:"i-4"},"item-4")]},parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}}},o={args:{activeItem:"item-1",children:[e.jsx(t,{value:"item-1",children:"Item 1"},"i-1"),e.jsx(t,{value:"item-2",children:"Item 2"},"i-2"),e.jsx(t,{value:"item-3",children:"Item 3"},"i-3"),e.jsx(t,{value:"item-4",children:"Item 4"},"i-4")]},parameters:{docs:{description:{story:"Alternatively, navigation items can render children passed to them."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TopNavigationItem label="Item 1" key="item-1" />, <TopNavigationItem label="Item 2" key="item-2" active />, <TopNavigationItem label="Item with Icon" key="item-3" icon="warning" />, <TopNavigationItem label="Disabled Item" key="item-4" disabled />]
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: [<TopNavigationItem label="Item 1" key="item-1" />, <TopNavigationItem label="Item 2" key="item-2" />, <TopNavigationItem label="Item 3" key="item-3" />, <TopNavigationItem label="Item 4" key="item-4" />]
  },
  parameters: {
    docs: {
      description: {
        story: "All navigation items can be disabled by passing \`disabled\` to the \`TabNavigation\`."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    activeItem: "i-3",
    children: [<TopNavigationItem label="Item 1" key="item-1" value="i-1" />, <TopNavigationItem label="Item 2" key="item-2" value="i-2" />, <TopNavigationItem label="Item 3" key="item-3" value="i-3" />, <TopNavigationItem label="Item 4" key="item-4" value="i-4" />]
  },
  parameters: {
    docs: {
      description: {
        story: "When needed, navigation items can take a \`value\` prop as a technical identifier that is different form the human-readable \`label\`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual \`SideNavigationItem\` can be set to \`active\`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    activeItem: "item-1",
    children: [<TopNavigationItem key="i-1" value="item-1">
        Item 1
      </TopNavigationItem>, <TopNavigationItem key="i-2" value="item-2">
        Item 2
      </TopNavigationItem>, <TopNavigationItem key="i-3" value="item-3">
        Item 3
      </TopNavigationItem>, <TopNavigationItem key="i-4" value="item-4">
        Item 4
      </TopNavigationItem>]
  },
  parameters: {
    docs: {
      description: {
        story: "Alternatively, navigation items can render children passed to them."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const I=["Default","Disabled","WithValues","WithChildren"];export{a as Default,i as Disabled,o as WithChildren,n as WithValues,I as __namedExportsOrder,v as default};
