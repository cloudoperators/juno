import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as N,a as t}from"./SideNavigationItem.component-CEO6B2fp.js";import"./NavigationItem.component-Brx4m6jI.js";import"./index-DI7CEG0L.js";import"./Icon.component-DwRmdXUS.js";const T={title:"Navigation/SideNavigation/SideNavigation",component:N,argTypes:{items:{table:{disable:!0}},children:{control:!1}}},s=({children:S,...y})=>e.jsx(N,{...y,children:S}),i={render:s,args:{children:[e.jsx(t,{label:"Item 1"},"item-1"),e.jsx(t,{label:"Item 2",active:!0},"item-2"),e.jsx(t,{icon:"warning",label:"Item with Icon"},"item-3"),e.jsx(t,{label:"Disabled Item",disabled:!0},"item-4")]}},a={render:s,parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[e.jsx(t,{label:"Item 1"},"item-1"),e.jsx(t,{label:"Item 2"},"item-2"),e.jsx(t,{label:"Active Item",active:!0},"item-3")]}},n={render:s,parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label` or the `children` of the item. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win"}}},args:{activeItem:"i-3",children:[e.jsx(t,{label:"Item 1",value:"i-1"},"item-1"),e.jsx(t,{label:"Item 2",value:"i-2"},"item-2"),e.jsx(t,{label:"Item 3",value:"i-3"},"item-3"),e.jsx(t,{label:"Item 4",value:"i-4"},"item-4")]}},r={render:s,parameters:{docs:{description:{story:"Navigation items can render children passed to them."}}},args:{activeItem:"item-1",children:[e.jsx(t,{value:"item-1",children:"Item 1"},"i-1"),e.jsx(t,{value:"item-2",children:"Item 2"},"i-2"),e.jsx(t,{value:"item-3",children:"Item 3"},"i-3"),e.jsx(t,{value:"item-4",children:"Item 4"},"i-4")]}};var m,o,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<SideNavigationItem key="item-1" label="Item 1" />, <SideNavigationItem key="item-2" label="Item 2" active />, <SideNavigationItem key="item-3" icon="warning" label="Item with Icon" />, <SideNavigationItem key="item-4" label="Disabled Item" disabled />]
  }
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,c,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    children: [<SideNavigationItem key="item-1" label="Item 1" />, <SideNavigationItem key="item-2" label="Item 2" />, <SideNavigationItem key="item-3" label="Active Item" active />]
  }
}`,...(v=(c=a.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var p,I,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
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
}`,...(h=(I=n.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var g,u,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
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
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const W=["Default","Disabled","WithValues","WithChildren"];export{i as Default,a as Disabled,r as WithChildren,n as WithValues,W as __namedExportsOrder,T as default};
