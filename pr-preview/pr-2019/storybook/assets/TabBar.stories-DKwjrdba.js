import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,n as i,o as a,t as o}from"./TabBarItem-Dp8Gkyr_.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r(),o(),s=n(),c={title:`Navigation/TabBar/TabBar`,component:a,argTypes:{children:{control:!1},onActiveItemChange:{control:!1},appearance:{options:[`main`,`content`],control:{type:`radio`}}}},l={args:{children:[(0,s.jsx)(i,{label:`Item 1`},`item-1`),(0,s.jsx)(i,{label:`Item 2`,active:!0},`item-2`),(0,s.jsx)(i,{label:`Item with Icon`,icon:`warning`},`item-3`),(0,s.jsx)(i,{label:`Disabled Item`,disabled:!0},`item-4`)]}},u={parameters:{docs:{description:{story:"All tab bar items can be disabled by passing `disabled` to the `TabBar`."}}},args:{disabled:!0,children:[(0,s.jsx)(i,{label:`Item 1`},`item-1`),(0,s.jsx)(i,{label:`Item 2`},`item-2`),(0,s.jsx)(i,{label:`Item 3`},`item-3`),(0,s.jsx)(i,{label:`Item 4`},`item-4`)]}},d={parameters:{docs:{description:{story:"When needed, tab bar items can take a `value` prop as a technical identifier that is different from the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `TabBarItem` can be set to `active`. When both an individual item is set to active and an activeItem is set on the parent, the latter will win."}}},args:{activeItem:`item-3`,children:[(0,s.jsx)(i,{label:`Item 1`,value:`item-1`},`i-1`),(0,s.jsx)(i,{label:`Item 2`,value:`item-2`},`i-2`),(0,s.jsx)(i,{label:`Item 3`,value:`item-3`},`i-3`),(0,s.jsx)(i,{label:`Item 4`,value:`item-4`},`i-4`)]}},f={parameters:{docs:{description:{story:`Alternatively, tab bar items can render children passed to them.`}}},args:{activeItem:`item-1`,children:[(0,s.jsx)(i,{value:`item-1`,children:`Item 1`},`i-1`),(0,s.jsx)(i,{value:`item-2`,children:`Item 2`},`i-2`),(0,s.jsx)(i,{value:`item-3`,children:`Item 3`},`i-3`),(0,s.jsx)(i,{value:`item-4`,children:`Item 4`},`i-4`)]}},p=[`Default`,`Disabled`,`WithValues`,`WithChildren`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TabBarItem label="Item 1" key="item-1"></TabBarItem>, <TabBarItem label="Item 2" key="item-2" active></TabBarItem>, <TabBarItem label="Item with Icon" key="item-3" icon="warning"></TabBarItem>, <TabBarItem label="Disabled Item" key="item-4" disabled></TabBarItem>]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "All tab bar items can be disabled by passing \`disabled\` to the \`TabBar\`."
      }
    }
  },
  args: {
    disabled: true,
    children: [<TabBarItem label="Item 1" key="item-1"></TabBarItem>, <TabBarItem label="Item 2" key="item-2"></TabBarItem>, <TabBarItem label="Item 3" key="item-3"></TabBarItem>, <TabBarItem label="Item 4" key="item-4"></TabBarItem>]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When needed, tab bar items can take a \`value\` prop as a technical identifier that is different from the human-readable \`label\`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual \`TabBarItem\` can be set to \`active\`. When both an individual item is set to active and an activeItem is set on the parent, the latter will win."
      }
    }
  },
  args: {
    activeItem: "item-3",
    children: [<TabBarItem label="Item 1" key="i-1" value="item-1"></TabBarItem>, <TabBarItem label="Item 2" key="i-2" value="item-2"></TabBarItem>, <TabBarItem label="Item 3" key="i-3" value="item-3"></TabBarItem>, <TabBarItem label="Item 4" key="i-4" value="item-4"></TabBarItem>]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Alternatively, tab bar items can render children passed to them."
      }
    }
  },
  args: {
    activeItem: "item-1",
    children: [<TabBarItem key="i-1" value="item-1">
        Item 1
      </TabBarItem>, <TabBarItem key="i-2" value="item-2">
        Item 2
      </TabBarItem>, <TabBarItem key="i-3" value="item-3">
        Item 3
      </TabBarItem>, <TabBarItem key="i-4" value="item-4">
        Item 4
      </TabBarItem>]
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Default,u as Disabled,f as WithChildren,d as WithValues,p as __namedExportsOrder,c as default};