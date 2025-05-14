import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T,a}from"./TabNavigationItem.component-DetM-Mff.js";import"./index-BdGwgT04.js";import"./NavigationItem.component-CZ2VkXJ9.js";import"./Icon.component-Ctcp0kJb.js";const W={title:"Navigation/TabNavigation/TabNavigation",component:T,argTypes:{children:{control:!1},onActiveItemChange:{control:!1},tabStyle:{options:["main","content"],control:{type:"radio"}}}},m=({children:N,...y})=>e.jsx(T,{...y,children:N}),t={render:m,args:{children:[e.jsx(a,{label:"Item 1"},"item-1"),e.jsx(a,{label:"Item 2",active:!0},"item-2"),e.jsx(a,{label:"Item with Icon",icon:"warning"},"item-3"),e.jsx(a,{label:"Disabled Item",disabled:!0},"item-4")]}},i={render:m,parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[e.jsx(a,{label:"Item 1"},"item-1"),e.jsx(a,{label:"Item 2"},"item-2"),e.jsx(a,{label:"Item 3"},"item-3"),e.jsx(a,{label:"Item 4"},"item-4")]}},n={render:m,parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}},args:{activeItem:"item-3",children:[e.jsx(a,{label:"Item 1",value:"item-1"},"i-1"),e.jsx(a,{label:"Item 2",value:"item-2"},"i-2"),e.jsx(a,{label:"Item 3",value:"item-3"},"i-3"),e.jsx(a,{label:"Item 4",value:"item-4"},"i-4")]}},r={render:m,parameters:{docs:{description:{story:"Alternatively, navigation items can render children passed to them."}}},args:{activeItem:"item-1",children:[e.jsx(a,{value:"item-1",children:"Item 1"},"i-1"),e.jsx(a,{value:"item-2",children:"Item 2"},"i-2"),e.jsx(a,{value:"item-3",children:"Item 3"},"i-3"),e.jsx(a,{value:"item-4",children:"Item 4"},"i-4")]}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="item-2" active></TabNavigationItem>, <TabNavigationItem label="Item with Icon" key="item-3" icon="warning"></TabNavigationItem>, <TabNavigationItem label="Disabled Item" key="item-4" disabled></TabNavigationItem>]
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,c,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
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
}`,...(v=(c=i.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var b,I,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
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
}`,...(g=(I=n.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var p,h,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
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
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const A=["Default","Disabled","WithValues","WithChildren"];export{t as Default,i as Disabled,r as WithChildren,n as WithValues,A as __namedExportsOrder,W as default};
