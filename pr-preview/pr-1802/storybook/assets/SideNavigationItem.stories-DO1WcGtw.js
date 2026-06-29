import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{a as r,i,n as a,t as o}from"./SideNavigationItem.component-DwqA-Q6t.js";import{n as s,r as c}from"./Icon.component-D1JIB4re.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{t(),r(),a(),c(),l=n(),u={title:`Navigation/SideNavigation/Item`,component:o,argTypes:{icon:{options:[null,...Object.keys(s)],control:{type:`select`}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,l.jsx)(i,{children:(0,l.jsx)(e,{})})]},d={args:{label:`Navigation Item`},parameters:{docs:{description:{story:`Displays a standard navigation item without additional attributes.`}}}},f={args:{label:`Active Navigation Item`,selected:!0},parameters:{docs:{description:{story:`Showcases an item that is marked as selected or active within its group.`}}}},p={args:{label:`Disabled Navigation Item`,disabled:!0},parameters:{docs:{description:{story:`Demonstrates a navigation item that is disabled and non-interactive.`}}}},m={args:{label:`Navigation Item With Icon`,icon:`addCircle`},parameters:{docs:{description:{story:`Presents a navigation item that includes an icon for visual assistance.`}}}},h={args:{label:`Navigation Item as Anchor`,href:`#`},parameters:{docs:{description:{story:`Displays an item intended to function as a link within navigation.`}}}},g={args:{label:`Item with Children`,children:`Item 1`},parameters:{docs:{description:{story:`Illustrates an item with children, showing nesting capabilities.`}}}},_={args:{label:`Expandable Navigation Item`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsxs)(o,{label:`Child Item 2`,children:[(0,l.jsx)(o,{label:`Sub-Child Item 1`}),(0,l.jsx)(o,{label:`Sub-Child Item 2`})]}),(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsxs)(o,{label:`Child Item 2`,children:[(0,l.jsx)(o,{label:`Sub-Child Item 1`}),(0,l.jsx)(o,{label:`Sub-Child Item 2`})]})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items. Note that styling support is provided for three nested levels only.`}}}},v={args:{label:`Expandable Navigation Item`,icon:`error`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsxs)(o,{label:`Child Item 2`,icon:`addCircle`,children:[(0,l.jsx)(o,{label:`Sub-Child Item 1`,icon:`addCircle`}),(0,l.jsx)(o,{label:`Sub-Child Item 2`})]}),(0,l.jsx)(o,{label:`Child Item 1`}),(0,l.jsx)(o,{label:`Child Item 2`})]})},parameters:{docs:{description:{story:`Illustrates an expandable navigation item with children and an icon, noting that only the first level can include an icon.`}}}},y={args:{label:`Disabled Expandable Item`,icon:`error`,disabled:!0,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`2nd Level Item`,href:`#`,icon:`addCircle`}),(0,l.jsx)(o,{label:`2nd Level Item`,icon:`addCircle`,children:(0,l.jsx)(o,{label:`3rd Level Item`,icon:`addCircle`,children:(0,l.jsx)(o,{label:`4th Level Item`,href:`#`,icon:`addCircle`})})})]})},parameters:{docs:{description:{story:`Displays an expandable navigation item in a disabled state with nested children.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item"
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a standard navigation item without additional attributes."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Active Navigation Item",
    selected: true
  },
  parameters: {
    docs: {
      description: {
        story: "Showcases an item that is marked as selected or active within its group."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Navigation Item",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a navigation item that is disabled and non-interactive."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item With Icon",
    icon: "addCircle"
  },
  parameters: {
    docs: {
      description: {
        story: "Presents a navigation item that includes an icon for visual assistance."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Navigation Item as Anchor",
    href: "#"
  },
  parameters: {
    docs: {
      description: {
        story: "Displays an item intended to function as a link within navigation."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Item with Children",
    children: "Item 1"
  },
  parameters: {
    docs: {
      description: {
        story: "Illustrates an item with children, showing nesting capabilities."
      }
    }
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
        story: "Demonstrates an expandable SideNavigationItem with nested child items. Note that styling support is provided for three nested levels only."
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
        story: "Illustrates an expandable navigation item with children and an icon, noting that only the first level can include an icon."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Expandable Item",
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
        story: "Displays an expandable navigation item in a disabled state with nested children."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Active`,`Disabled`,`WithIcon`,`AsLink`,`WithChildren`,`Expandable`,`ExpandableWithIcon`,`DisabledWithExpandable`]}))();export{f as Active,h as AsLink,d as Default,p as Disabled,y as DisabledWithExpandable,_ as Expandable,v as ExpandableWithIcon,g as WithChildren,m as WithIcon,b as __namedExportsOrder,u as default};