import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-ChscHnXh.js";import{i as r,n as i,r as a,t as o}from"./TopNavigationItem.component-BE6HYp8S.js";var s,c,l,u,d,f,p;e((()=>{n(),a(),i(),s=t(),c={title:`Navigation/TopNavigation/TopNavigation`,component:r,argTypes:{children:{control:!1}}},l={args:{children:[(0,s.jsx)(o,{label:`Item 1`},`item-1`),(0,s.jsx)(o,{label:`Item 2`,active:!0},`item-2`),(0,s.jsx)(o,{label:`Item with Icon`,icon:`warning`},`item-3`),(0,s.jsx)(o,{label:`Disabled Item`,disabled:!0},`item-4`)]}},u={args:{disabled:!0,children:[(0,s.jsx)(o,{label:`Item 1`},`item-1`),(0,s.jsx)(o,{label:`Item 2`},`item-2`),(0,s.jsx)(o,{label:`Item 3`},`item-3`),(0,s.jsx)(o,{label:`Item 4`},`item-4`)]},parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}}},d={args:{activeItem:`i-3`,children:[(0,s.jsx)(o,{label:`Item 1`,value:`i-1`},`item-1`),(0,s.jsx)(o,{label:`Item 2`,value:`i-2`},`item-2`),(0,s.jsx)(o,{label:`Item 3`,value:`i-3`},`item-3`),(0,s.jsx)(o,{label:`Item 4`,value:`i-4`},`item-4`)]},parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}}},f={args:{activeItem:`item-1`,children:[(0,s.jsx)(o,{value:`item-1`,children:`Item 1`},`i-1`),(0,s.jsx)(o,{value:`item-2`,children:`Item 2`},`i-2`),(0,s.jsx)(o,{value:`item-3`,children:`Item 3`},`i-3`),(0,s.jsx)(o,{value:`item-4`,children:`Item 4`},`i-4`)]},parameters:{docs:{description:{story:`Alternatively, navigation items can render children passed to them.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TopNavigationItem label="Item 1" key="item-1" />, <TopNavigationItem label="Item 2" key="item-2" active />, <TopNavigationItem label="Item with Icon" key="item-3" icon="warning" />, <TopNavigationItem label="Disabled Item" key="item-4" disabled />]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Disabled`,`WithValues`,`WithChildren`]}))();export{l as Default,u as Disabled,f as WithChildren,d as WithValues,p as __namedExportsOrder,c as default};