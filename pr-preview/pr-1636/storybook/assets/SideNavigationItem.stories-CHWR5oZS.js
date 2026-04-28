import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{n,t as r}from"./SideNavigationItem.component-P5DDl8et.js";import{n as i}from"./Icon.component-BYUQ4r57.js";e();var a=t(),o={title:`Navigation/SideNavigation/SideNavigationItem`,component:r,argTypes:{icon:{options:[null,...Object.keys(i)],control:{type:`select`}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,a.jsx)(n,{children:(0,a.jsx)(e,{})})]},s={args:{label:`Navigation Item`}},c={args:{label:`Active Navigation Item`,selected:!0}},l={args:{label:`Active Navigation Item`,disabled:!0,href:`#`}},u={args:{label:`Navigation Item With Icon`,icon:`addCircle`}},d={args:{label:`Navigation Item as Anchor`,href:`#`}},f={args:{label:`itm-1`,children:`Item 1`}},p={args:{label:`Expandable Navigation Item`,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{label:`Child Item 1`}),(0,a.jsxs)(r,{label:`Child Item 2`,children:[(0,a.jsx)(r,{label:`Sub-Child Item 1`}),(0,a.jsx)(r,{label:`Sub-Child Item 2`})]}),(0,a.jsx)(r,{label:`Child Item 1`}),(0,a.jsxs)(r,{label:`Child Item 2`,children:[(0,a.jsx)(r,{label:`Sub-Child Item 1`}),(0,a.jsx)(r,{label:`Sub-Child Item 2`})]})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items. Note: Styling is supported for three nested levels only (recommended). Beyond this, custom styling is required.`}}}},m={args:{label:`Expandable Navigation Item`,icon:`error`,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{label:`Child Item 1`}),(0,a.jsxs)(r,{label:`Child Item 2`,icon:`addCircle`,children:[(0,a.jsx)(r,{label:`Sub-Child Item 1`,icon:`addCircle`}),(0,a.jsx)(r,{label:`Sub-Child Item 2`})]}),(0,a.jsx)(r,{label:`Child Item 1`}),(0,a.jsx)(r,{label:`Child Item 2`})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items with icon. Note: Only the first level can contain an icon.`}}}},h={args:{label:`1st Level Item`,icon:`error`,disabled:!0,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{label:`2nd Level Item`,href:`#`,icon:`addCircle`}),(0,a.jsx)(r,{label:`2nd Level Item`,icon:`addCircle`,children:(0,a.jsx)(r,{label:`3rd Level Item`,icon:`addCircle`,children:(0,a.jsx)(r,{label:`4th Level Item`,href:`#`,icon:`addCircle`})})})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items with icons.`}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    selected: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    disabled: true,
    href: "#"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item With Icon",
    icon: "addCircle"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item as Anchor",
    href: "#"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "itm-1",
    children: "Item 1"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Active`,`Disabled`,`WithIcon`,`AsLink`,`WithChildren`,`Expandable`,`ExpandableWithIcon`,`DisabledWithExpandable`];export{c as Active,d as AsLink,s as Default,l as Disabled,h as DisabledWithExpandable,p as Expandable,m as ExpandableWithIcon,f as WithChildren,u as WithIcon,g as __namedExportsOrder,o as default};