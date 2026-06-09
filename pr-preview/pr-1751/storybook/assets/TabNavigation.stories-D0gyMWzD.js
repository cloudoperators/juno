import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-BvKBmIeq.js";import{a as r,i,n as a,t as o}from"./TabNavigationItem-BOqEwAA0.js";var s,c,l,u,d,f,p;e((()=>{n(),i(),o(),s=t(),c={title:`Navigation/TabNavigation/TabNavigation`,component:r,argTypes:{children:{control:!1},onActiveItemChange:{control:!1},tabStyle:{options:[`main`,`content`],control:{type:`radio`}}}},l={args:{children:[(0,s.jsx)(a,{label:`Item 1`},`item-1`),(0,s.jsx)(a,{label:`Item 2`,active:!0},`item-2`),(0,s.jsx)(a,{label:`Item with Icon`,icon:`warning`},`item-3`),(0,s.jsx)(a,{label:`Disabled Item`,disabled:!0},`item-4`)]}},u={parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[(0,s.jsx)(a,{label:`Item 1`},`item-1`),(0,s.jsx)(a,{label:`Item 2`},`item-2`),(0,s.jsx)(a,{label:`Item 3`},`item-3`),(0,s.jsx)(a,{label:`Item 4`},`item-4`)]}},d={parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}},args:{activeItem:`item-3`,children:[(0,s.jsx)(a,{label:`Item 1`,value:`item-1`},`i-1`),(0,s.jsx)(a,{label:`Item 2`,value:`item-2`},`i-2`),(0,s.jsx)(a,{label:`Item 3`,value:`item-3`},`i-3`),(0,s.jsx)(a,{label:`Item 4`,value:`item-4`},`i-4`)]}},f={parameters:{docs:{description:{story:`Alternatively, navigation items can render children passed to them.`}}},args:{activeItem:`item-1`,children:[(0,s.jsx)(a,{value:`item-1`,children:`Item 1`},`i-1`),(0,s.jsx)(a,{value:`item-2`,children:`Item 2`},`i-2`),(0,s.jsx)(a,{value:`item-3`,children:`Item 3`},`i-3`),(0,s.jsx)(a,{value:`item-4`,children:`Item 4`},`i-4`)]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="item-2" active></TabNavigationItem>, <TabNavigationItem label="Item with Icon" key="item-3" icon="warning"></TabNavigationItem>, <TabNavigationItem label="Disabled Item" key="item-4" disabled></TabNavigationItem>]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Disabled`,`WithValues`,`WithChildren`]}))();export{l as Default,u as Disabled,f as WithChildren,d as WithValues,p as __namedExportsOrder,c as default};