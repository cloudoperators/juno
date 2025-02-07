import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{T,a as t}from"./TopNavigationItem.component-Ce_M12XW.js";import"./index-DysCNOs_.js";import"./NavigationItem.component-DsMXrRRP.js";import"./Icon.component-C7a0R5Z3.js";import"./widgets-BR6-ubtP.js";const A={title:"Navigation/TopNavigation/TopNavigation",component:T,argTypes:{items:{table:{disable:!0}},children:{control:!1}}},o=({children:y,...N})=>e.jsx(T,{...N,children:y}),a={render:o,args:{children:[e.jsx(t,{label:"Item 1"},"item-1"),e.jsx(t,{label:"Item 2",active:!0},"item-2"),e.jsx(t,{label:"Item with Icon",icon:"warning"},"item-3"),e.jsx(t,{label:"Disabled Item",disabled:!0},"item-4")]}},i={render:o,parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[e.jsx(t,{label:"Item 1"},"item-1"),e.jsx(t,{label:"Item 2"},"item-2"),e.jsx(t,{label:"Item 3"},"item-3"),e.jsx(t,{label:"Item 4"},"item-4")]}},n={render:o,parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}},args:{activeItem:"i-3",children:[e.jsx(t,{label:"Item 1",value:"i-1"},"item-1"),e.jsx(t,{label:"Item 2",value:"i-2"},"item-2"),e.jsx(t,{label:"Item 3",value:"i-3"},"item-3"),e.jsx(t,{label:"Item 4",value:"i-4"},"item-4")]}},r={render:o,parameters:{docs:{description:{story:"Alternatively, navigation items can render children passed to them."}}},args:{activeItem:"item-1",children:[e.jsx(t,{value:"item-1",children:"Item 1"},"i-1"),e.jsx(t,{value:"item-2",children:"Item 2"},"i-2"),e.jsx(t,{value:"item-3",children:"Item 3"},"i-3"),e.jsx(t,{value:"item-4",children:"Item 4"},"i-4")]}};var s,m,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<TopNavigationItem label="Item 1" key="item-1" />, <TopNavigationItem label="Item 2" key="item-2" active />, <TopNavigationItem label="Item with Icon" key="item-3" icon="warning" />, <TopNavigationItem label="Disabled Item" key="item-4" disabled />]
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    children: [<TopNavigationItem label="Item 1" key="item-1" />, <TopNavigationItem label="Item 2" key="item-2" />, <TopNavigationItem label="Item 3" key="item-3" />, <TopNavigationItem label="Item 4" key="item-4" />]
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,I,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "When needed, navigation items can take a \`value\` prop as a technical identifier that is different form the human-readable \`label\`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual \`SideNavigationItem\` can be set to \`active\`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."
      }
    }
  },
  args: {
    activeItem: "i-3",
    children: [<TopNavigationItem label="Item 1" key="item-1" value="i-1" />, <TopNavigationItem label="Item 2" key="item-2" value="i-2" />, <TopNavigationItem label="Item 3" key="item-3" value="i-3" />, <TopNavigationItem label="Item 4" key="item-4" value="i-4" />]
  }
}`,...(g=(I=n.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var b,u,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    children: [<TopNavigationItem key="i-1" value="item-1">
        Item 1
      </TopNavigationItem>, <TopNavigationItem key="i-2" value="item-2">
        Item 2
      </TopNavigationItem>, <TopNavigationItem key="i-3" value="item-3">
        Item 3
      </TopNavigationItem>, <TopNavigationItem key="i-4" value="item-4">
        Item 4
      </TopNavigationItem>]
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const D=["Default","Disabled","WithValues","WithChildren"];export{a as Default,i as Disabled,r as WithChildren,n as WithValues,D as __namedExportsOrder,A as default};
