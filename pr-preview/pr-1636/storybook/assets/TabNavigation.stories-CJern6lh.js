import{g as e}from"./iframe-Cx-zHds2.js";import{n as t,t as n}from"./TabNavigationItem-BBA9Vso_.js";import"react";var r=e(),i={title:`Navigation/TabNavigation/TabNavigation`,component:t,argTypes:{children:{control:!1},onActiveItemChange:{control:!1},tabStyle:{options:[`main`,`content`],control:{type:`radio`}}}},a={args:{children:[(0,r.jsx)(n,{label:`Item 1`},`item-1`),(0,r.jsx)(n,{label:`Item 2`,active:!0},`item-2`),(0,r.jsx)(n,{label:`Item with Icon`,icon:`warning`},`item-3`),(0,r.jsx)(n,{label:`Disabled Item`,disabled:!0},`item-4`)]}},o={parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[(0,r.jsx)(n,{label:`Item 1`},`item-1`),(0,r.jsx)(n,{label:`Item 2`},`item-2`),(0,r.jsx)(n,{label:`Item 3`},`item-3`),(0,r.jsx)(n,{label:`Item 4`},`item-4`)]}},s={parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}},args:{activeItem:`item-3`,children:[(0,r.jsx)(n,{label:`Item 1`,value:`item-1`},`i-1`),(0,r.jsx)(n,{label:`Item 2`,value:`item-2`},`i-2`),(0,r.jsx)(n,{label:`Item 3`,value:`item-3`},`i-3`),(0,r.jsx)(n,{label:`Item 4`,value:`item-4`},`i-4`)]}},c={parameters:{docs:{description:{story:`Alternatively, navigation items can render children passed to them.`}}},args:{activeItem:`item-1`,children:[(0,r.jsx)(n,{value:`item-1`,children:`Item 1`},`i-1`),(0,r.jsx)(n,{value:`item-2`,children:`Item 2`},`i-2`),(0,r.jsx)(n,{value:`item-3`,children:`Item 3`},`i-3`),(0,r.jsx)(n,{value:`item-4`,children:`Item 4`},`i-4`)]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="item-2" active></TabNavigationItem>, <TabNavigationItem label="Item with Icon" key="item-3" icon="warning"></TabNavigationItem>, <TabNavigationItem label="Disabled Item" key="item-4" disabled></TabNavigationItem>]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Disabled`,`WithValues`,`WithChildren`];export{a as Default,o as Disabled,c as WithChildren,s as WithValues,l as __namedExportsOrder,i as default};