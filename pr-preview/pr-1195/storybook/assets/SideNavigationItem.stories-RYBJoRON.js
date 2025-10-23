import{j as e}from"./iframe-BDLy6KZQ.js";import{a,S as h}from"./SideNavigationItem.component-BWzpsCPG.js";import{K as I}from"./Icon.component-CcZ-IY85.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.component-XbyB092c.js";const S={title:"Navigation/SideNavigation/SideNavigationItem",component:a,argTypes:{icon:{options:[null,...Object.keys(I)],control:{type:"select"}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[m=>e.jsx(h,{children:e.jsx(m,{})})]},i={args:{label:"Navigation Item"}},t={args:{label:"Active Navigation Item",selected:!0}},n={args:{label:"Active Navigation Item",disabled:!0,href:"#"}},r={args:{label:"Navigation Item With Icon",icon:"addCircle"}},l={args:{label:"Navigation Item as Anchor",href:"#"}},s={args:{label:"itm-1",children:"Item 1"}},o={args:{label:"Expandable Navigation Item",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Child Item 1"}),e.jsxs(a,{label:"Child Item 2",children:[e.jsx(a,{label:"Sub-Child Item 1"}),e.jsx(a,{label:"Sub-Child Item 2"})]}),e.jsx(a,{label:"Child Item 1"}),e.jsxs(a,{label:"Child Item 2",children:[e.jsx(a,{label:"Sub-Child Item 1"}),e.jsx(a,{label:"Sub-Child Item 2"})]})]})},parameters:{docs:{description:{story:"Demonstrates an expandable SideNavigationItem with nested child items. Note: Styling is supported for three nested levels only (recommended). Beyond this, custom styling is required."}}}},d={args:{label:"Expandable Navigation Item",icon:"error",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Child Item 1"}),e.jsxs(a,{label:"Child Item 2",icon:"addCircle",children:[e.jsx(a,{label:"Sub-Child Item 1",icon:"addCircle"}),e.jsx(a,{label:"Sub-Child Item 2"})]}),e.jsx(a,{label:"Child Item 1"}),e.jsx(a,{label:"Child Item 2"})]})},parameters:{docs:{description:{story:"Demonstrates an expandable SideNavigationItem with nested child items with icon. Note: Only the first level can contain an icon."}}}},c={args:{label:"1st Level Item",icon:"error",disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"2nd Level Item",href:"#",icon:"addCircle"}),e.jsx(a,{label:"2nd Level Item",icon:"addCircle",children:e.jsx(a,{label:"3rd Level Item",icon:"addCircle",children:e.jsx(a,{label:"4th Level Item",href:"#",icon:"addCircle"})})})]})},parameters:{docs:{description:{story:"Demonstrates an expandable SideNavigationItem with nested child items with icons."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    selected: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    disabled: true,
    href: "#"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item With Icon",
    icon: "addCircle"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item as Anchor",
    href: "#"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "itm-1",
    children: "Item 1"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expandable Navigation Item",
    children: <>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2">
          <SideNavigationItem label="Sub-Child Item 1" />
          <SideNavigationItem label="Sub-Child Item 2" />
        </SideNavigationItem>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2">
          <SideNavigationItem label="Sub-Child Item 1" />
          <SideNavigationItem label="Sub-Child Item 2" />
        </SideNavigationItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates an expandable SideNavigationItem with nested child items. Note: Styling is supported for three nested levels only (recommended). Beyond this, custom styling is required."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expandable Navigation Item",
    icon: "error",
    children: <>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" icon="addCircle">
          <SideNavigationItem label="Sub-Child Item 1" icon="addCircle" />
          <SideNavigationItem label="Sub-Child Item 2" />
        </SideNavigationItem>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" />
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates an expandable SideNavigationItem with nested child items with icon. Note: Only the first level can contain an icon."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "1st Level Item",
    icon: "error",
    disabled: true,
    children: <>
        <SideNavigationItem label="2nd Level Item" href="#" icon="addCircle" />
        <SideNavigationItem label="2nd Level Item" icon="addCircle">
          <SideNavigationItem label="3rd Level Item" icon="addCircle">
            <SideNavigationItem label="4th Level Item" href="#" icon="addCircle" />
          </SideNavigationItem>
        </SideNavigationItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates an expandable SideNavigationItem with nested child items with icons."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const N=["Default","Active","Disabled","WithIcon","AsLink","WithChildren","Expandable","ExpandableWithIcon","DisabledWithExpandable"];export{t as Active,l as AsLink,i as Default,n as Disabled,c as DisabledWithExpandable,o as Expandable,d as ExpandableWithIcon,s as WithChildren,r as WithIcon,N as __namedExportsOrder,S as default};
