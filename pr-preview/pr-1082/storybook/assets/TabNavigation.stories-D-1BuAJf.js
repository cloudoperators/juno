import{j as e}from"./iframe-Co0hevCM.js";import{T as u,a}from"./TabNavigationItem.component-0LUk_NWc.js";import"./NavigationItem.component-CquIxy80.js";import"./Icon.component-IJHM0szB.js";const f={title:"Navigation/TabNavigation/TabNavigation",component:u,argTypes:{children:{control:!1},onActiveItemChange:{control:!1},tabStyle:{options:["main","content"],control:{type:"radio"}}}},t={args:{children:[e.jsx(a,{label:"Item 1"},"item-1"),e.jsx(a,{label:"Item 2",active:!0},"item-2"),e.jsx(a,{label:"Item with Icon",icon:"warning"},"item-3"),e.jsx(a,{label:"Disabled Item",disabled:!0},"item-4")]}},i={parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[e.jsx(a,{label:"Item 1"},"item-1"),e.jsx(a,{label:"Item 2"},"item-2"),e.jsx(a,{label:"Item 3"},"item-3"),e.jsx(a,{label:"Item 4"},"item-4")]}},n={parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}},args:{activeItem:"item-3",children:[e.jsx(a,{label:"Item 1",value:"item-1"},"i-1"),e.jsx(a,{label:"Item 2",value:"item-2"},"i-2"),e.jsx(a,{label:"Item 3",value:"item-3"},"i-3"),e.jsx(a,{label:"Item 4",value:"item-4"},"i-4")]}},m={parameters:{docs:{description:{story:"Alternatively, navigation items can render children passed to them."}}},args:{activeItem:"item-1",children:[e.jsx(a,{value:"item-1",children:"Item 1"},"i-1"),e.jsx(a,{value:"item-2",children:"Item 2"},"i-2"),e.jsx(a,{value:"item-3",children:"Item 3"},"i-3"),e.jsx(a,{value:"item-4",children:"Item 4"},"i-4")]}};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="item-2" active></TabNavigationItem>, <TabNavigationItem label="Item with Icon" key="item-3" icon="warning"></TabNavigationItem>, <TabNavigationItem label="Disabled Item" key="item-4" disabled></TabNavigationItem>]
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All navigation items can be disabled by passing \`disabled\` to the \`TabNavigation\`."
      }
    }
  },
  args: {
    disabled: true,
    children: [<TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="item-2"></TabNavigationItem>, <TabNavigationItem label="Item 3" key="item-3"></TabNavigationItem>, <TabNavigationItem label="Item 4" key="item-4"></TabNavigationItem>]
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var v,b,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When needed, navigation items can take a \`value\` prop as a technical identifier that is different form the human-readable \`label\`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual \`SideNavigationItem\` can be set to \`active\`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."
      }
    }
  },
  args: {
    activeItem: "item-3",
    children: [<TabNavigationItem label="Item 1" key="i-1" value="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="i-2" value="item-2"></TabNavigationItem>, <TabNavigationItem label="Item 3" key="i-3" value="item-3"></TabNavigationItem>, <TabNavigationItem label="Item 4" key="i-4" value="item-4"></TabNavigationItem>]
  }
}`,...(I=(b=n.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var g,p,h;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Alternatively, navigation items can render children passed to them."
      }
    }
  },
  args: {
    activeItem: "item-1",
    children: [<TabNavigationItem key="i-1" value="item-1">
        Item 1
      </TabNavigationItem>, <TabNavigationItem key="i-2" value="item-2">
        Item 2
      </TabNavigationItem>, <TabNavigationItem key="i-3" value="item-3">
        Item 3
      </TabNavigationItem>, <TabNavigationItem key="i-4" value="item-4">
        Item 4
      </TabNavigationItem>]
  }
}`,...(h=(p=m.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const j=["Default","Disabled","WithValues","WithChildren"];export{t as Default,i as Disabled,m as WithChildren,n as WithValues,j as __namedExportsOrder,f as default};
