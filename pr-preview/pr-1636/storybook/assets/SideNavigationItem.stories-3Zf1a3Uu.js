import{g as e}from"./iframe-DaLLswkI.js";import{n as t,t as n}from"./SideNavigationItem.component-DpBKez45.js";import{n as r}from"./Icon.component-q7FNz7wU.js";import"react";var i=e(),a={title:`Navigation/SideNavigation/SideNavigationItem`,component:n,argTypes:{icon:{options:[null,...Object.keys(r)],control:{type:`select`}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,i.jsx)(t,{children:(0,i.jsx)(e,{})})]},o={args:{label:`Navigation Item`}},s={args:{label:`Active Navigation Item`,selected:!0}},c={args:{label:`Active Navigation Item`,disabled:!0,href:`#`}},l={args:{label:`Navigation Item With Icon`,icon:`addCircle`}},u={args:{label:`Navigation Item as Anchor`,href:`#`}},d={args:{label:`itm-1`,children:`Item 1`}},f={args:{label:`Expandable Navigation Item`,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{label:`Child Item 1`}),(0,i.jsxs)(n,{label:`Child Item 2`,children:[(0,i.jsx)(n,{label:`Sub-Child Item 1`}),(0,i.jsx)(n,{label:`Sub-Child Item 2`})]}),(0,i.jsx)(n,{label:`Child Item 1`}),(0,i.jsxs)(n,{label:`Child Item 2`,children:[(0,i.jsx)(n,{label:`Sub-Child Item 1`}),(0,i.jsx)(n,{label:`Sub-Child Item 2`})]})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items. Note: Styling is supported for three nested levels only (recommended). Beyond this, custom styling is required.`}}}},p={args:{label:`Expandable Navigation Item`,icon:`error`,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{label:`Child Item 1`}),(0,i.jsxs)(n,{label:`Child Item 2`,icon:`addCircle`,children:[(0,i.jsx)(n,{label:`Sub-Child Item 1`,icon:`addCircle`}),(0,i.jsx)(n,{label:`Sub-Child Item 2`})]}),(0,i.jsx)(n,{label:`Child Item 1`}),(0,i.jsx)(n,{label:`Child Item 2`})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items with icon. Note: Only the first level can contain an icon.`}}}},m={args:{label:`1st Level Item`,icon:`error`,disabled:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{label:`2nd Level Item`,href:`#`,icon:`addCircle`}),(0,i.jsx)(n,{label:`2nd Level Item`,icon:`addCircle`,children:(0,i.jsx)(n,{label:`3rd Level Item`,icon:`addCircle`,children:(0,i.jsx)(n,{label:`4th Level Item`,href:`#`,icon:`addCircle`})})})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items with icons.`}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    selected: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    disabled: true,
    href: "#"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item With Icon",
    icon: "addCircle"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item as Anchor",
    href: "#"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "itm-1",
    children: "Item 1"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`Active`,`Disabled`,`WithIcon`,`AsLink`,`WithChildren`,`Expandable`,`ExpandableWithIcon`,`DisabledWithExpandable`];export{s as Active,u as AsLink,o as Default,c as Disabled,m as DisabledWithExpandable,f as Expandable,p as ExpandableWithIcon,d as WithChildren,l as WithIcon,h as __namedExportsOrder,a as default};