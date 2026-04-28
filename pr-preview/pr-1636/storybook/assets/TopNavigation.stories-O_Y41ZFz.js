import{g as e}from"./iframe-DmqlBy6I.js";import{n as t,t as n}from"./TopNavigationItem.component-DfWms_lR.js";import"react";var r=e(),i={title:`Navigation/TopNavigation/TopNavigation`,component:t,argTypes:{children:{control:!1}}},a={args:{children:[(0,r.jsx)(n,{label:`Item 1`},`item-1`),(0,r.jsx)(n,{label:`Item 2`,active:!0},`item-2`),(0,r.jsx)(n,{label:`Item with Icon`,icon:`warning`},`item-3`),(0,r.jsx)(n,{label:`Disabled Item`,disabled:!0},`item-4`)]}},o={args:{disabled:!0,children:[(0,r.jsx)(n,{label:`Item 1`},`item-1`),(0,r.jsx)(n,{label:`Item 2`},`item-2`),(0,r.jsx)(n,{label:`Item 3`},`item-3`),(0,r.jsx)(n,{label:`Item 4`},`item-4`)]},parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}}},s={args:{activeItem:`i-3`,children:[(0,r.jsx)(n,{label:`Item 1`,value:`i-1`},`item-1`),(0,r.jsx)(n,{label:`Item 2`,value:`i-2`},`item-2`),(0,r.jsx)(n,{label:`Item 3`,value:`i-3`},`item-3`),(0,r.jsx)(n,{label:`Item 4`,value:`i-4`},`item-4`)]},parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}}},c={args:{activeItem:`item-1`,children:[(0,r.jsx)(n,{value:`item-1`,children:`Item 1`},`i-1`),(0,r.jsx)(n,{value:`item-2`,children:`Item 2`},`i-2`),(0,r.jsx)(n,{value:`item-3`,children:`Item 3`},`i-3`),(0,r.jsx)(n,{value:`item-4`,children:`Item 4`},`i-4`)]},parameters:{docs:{description:{story:`Alternatively, navigation items can render children passed to them.`}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TopNavigationItem label="Item 1" key="item-1" />, <TopNavigationItem label="Item 2" key="item-2" active />, <TopNavigationItem label="Item with Icon" key="item-3" icon="warning" />, <TopNavigationItem label="Disabled Item" key="item-4" disabled />]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Disabled`,`WithValues`,`WithChildren`];export{a as Default,o as Disabled,c as WithChildren,s as WithValues,l as __namedExportsOrder,i as default};