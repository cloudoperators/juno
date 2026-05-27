import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-DRsum30A.js";import{i as r,n as i,r as a,t as o}from"./SideNavigationItem.component-CshwUROR.js";import{n as s,r as c}from"./Icon.component-DcP1ZSHK.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),r(),i(),c(),l=t(),u={title:`Navigation/SideNavigation/SideNavigationItem`,component:o,argTypes:{icon:{options:[null,...Object.keys(s)],control:{type:`select`}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,l.jsx)(a,{children:(0,l.jsx)(e,{})})]},d={args:{label:`Navigation Item`}},f={args:{label:`Active Navigation Item`,selected:!0}},p={args:{label:`Active Navigation Item`,disabled:!0,href:`#`}},m={args:{label:`Navigation Item With Icon`,icon:`addCircle`}},h={args:{label:`Navigation Item as Anchor`,href:`#`}},g={args:{label:`itm-1`,children:`Item 1`}},_={args:{label:`Expandable Navigation Item`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsxs)(o,{label:`Child Item 2`,children:[(0,l.jsx)(o,{label:`Sub-Child Item 1`}),(0,l.jsx)(o,{label:`Sub-Child Item 2`})]}),(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsxs)(o,{label:`Child Item 2`,children:[(0,l.jsx)(o,{label:`Sub-Child Item 1`}),(0,l.jsx)(o,{label:`Sub-Child Item 2`})]})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items. Note: Styling is supported for three nested levels only (recommended). Beyond this, custom styling is required.`}}}},v={args:{label:`Expandable Navigation Item`,icon:`error`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsxs)(o,{label:`Child Item 2`,icon:`addCircle`,children:[(0,l.jsx)(o,{label:`Sub-Child Item 1`,icon:`addCircle`}),(0,l.jsx)(o,{label:`Sub-Child Item 2`})]}),(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsx)(o,{label:`Child Item 2`})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items with icon. Note: Only the first level can contain an icon.`}}}},y={args:{label:`1st Level Item`,icon:`error`,disabled:!0,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`2nd Level Item`,href:`#`,icon:`addCircle`}),(0,l.jsx)(o,{label:`2nd Level Item`,icon:`addCircle`,children:(0,l.jsx)(o,{label:`3rd Level Item`,icon:`addCircle`,children:(0,l.jsx)(o,{label:`4th Level Item`,href:`#`,icon:`addCircle`})})})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items with icons.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    selected: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    disabled: true,
    href: "#"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item With Icon",
    icon: "addCircle"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item as Anchor",
    href: "#"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "itm-1",
    children: "Item 1"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Active`,`Disabled`,`WithIcon`,`AsLink`,`WithChildren`,`Expandable`,`ExpandableWithIcon`,`DisabledWithExpandable`]}))();export{f as Active,h as AsLink,d as Default,p as Disabled,y as DisabledWithExpandable,_ as Expandable,v as ExpandableWithIcon,g as WithChildren,m as WithIcon,b as __namedExportsOrder,u as default};