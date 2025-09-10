import{j as e}from"./iframe-DVIhrKFE.js";import{S as s,a as i}from"./SideNavigationItem.component-CKC_C1hZ.js";import"./NavigationItem.component-MZdi181I.js";import"./Icon.component-U3dv04UZ.js";const c={title:"Navigation/SideNavigation/SideNavigation",component:s,argTypes:{children:{control:!1}}},t={args:{children:[e.jsx(i,{label:"Item 1"},"item-1"),e.jsx(i,{label:"Item 2",active:!0},"item-2"),e.jsx(i,{icon:"warning",label:"Item with Icon"},"item-3"),e.jsx(i,{label:"Disabled Item",disabled:!0},"item-4")]}},a={parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[e.jsx(i,{label:"Item 1"},"item-1"),e.jsx(i,{label:"Item 2"},"item-2"),e.jsx(i,{label:"Active Item",active:!0},"item-3")]}},n={parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label` or the `children` of the item. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win"}}},args:{activeItem:"i-3",children:[e.jsx(i,{label:"Item 1",value:"i-1"},"item-1"),e.jsx(i,{label:"Item 2",value:"i-2"},"item-2"),e.jsx(i,{label:"Item 3",value:"i-3"},"item-3"),e.jsx(i,{label:"Item 4",value:"i-4"},"item-4")]}},r={parameters:{docs:{description:{story:"Navigation items can render children passed to them."}}},args:{activeItem:"item-1",children:[e.jsx(i,{value:"item-1",children:"Item 1"},"i-1"),e.jsx(i,{value:"item-2",children:"Item 2"},"i-2"),e.jsx(i,{value:"item-3",children:"Item 3"},"i-3"),e.jsx(i,{value:"item-4",children:"Item 4"},"i-4")]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<SideNavigationItem key="item-1" label="Item 1" />, <SideNavigationItem key="item-2" label="Item 2" active />, <SideNavigationItem key="item-3" icon="warning" label="Item with Icon" />, <SideNavigationItem key="item-4" label="Disabled Item" disabled />]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All navigation items can be disabled by passing \`disabled\` to the \`TabNavigation\`."
      }
    }
  },
  args: {
    disabled: true,
    children: [<SideNavigationItem key="item-1" label="Item 1" />, <SideNavigationItem key="item-2" label="Item 2" />, <SideNavigationItem key="item-3" label="Active Item" active />]
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When needed, navigation items can take a \`value\` prop as a technical identifier that is different form the human-readable \`label\` or the \`children\` of the item. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual \`SideNavigationItem\` can be set to \`active\`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win"
      }
    }
  },
  args: {
    activeItem: "i-3",
    children: [<SideNavigationItem label="Item 1" key="item-1" value="i-1" />, <SideNavigationItem label="Item 2" key="item-2" value="i-2" />, <SideNavigationItem label="Item 3" key="item-3" value="i-3" />, <SideNavigationItem label="Item 4" key="item-4" value="i-4" />]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Navigation items can render children passed to them."
      }
    }
  },
  args: {
    activeItem: "item-1",
    children: [<SideNavigationItem key="i-1" value="item-1">
        Item 1
      </SideNavigationItem>, <SideNavigationItem key="i-2" value="item-2">
        Item 2
      </SideNavigationItem>, <SideNavigationItem key="i-3" value="item-3">
        Item 3
      </SideNavigationItem>, <SideNavigationItem key="i-4" value="item-4">
        Item 4
      </SideNavigationItem>]
  }
}`,...r.parameters?.docs?.source}}};const v=["Default","Disabled","WithValues","WithChildren"];export{t as Default,a as Disabled,r as WithChildren,n as WithValues,v as __namedExportsOrder,c as default};
