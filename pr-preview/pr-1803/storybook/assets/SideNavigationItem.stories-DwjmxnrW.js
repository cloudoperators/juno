import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{a as i,i as a,n as o,t as s}from"./SideNavigationItem.component-DyJTT9AC.js";import{n as c,r as l}from"./Icon.component-D0_R5E3L.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{u=e(n()),i(),o(),l(),d=r(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Navigation/SideNavigation/Item`,component:s,args:{onClick:f(),onToggle:f()},argTypes:{icon:{options:[null,...Object.keys(c)],control:{type:`select`}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,d.jsx)(a,{children:(0,d.jsx)(e,{})})]},m={args:{label:`Navigation Item`},parameters:{docs:{description:{story:`Displays a standard navigation item without additional attributes.`}}}},h={args:{label:`Active Navigation Item`,selected:!0},parameters:{docs:{description:{story:`Showcases an item that is marked as selected or active within its group.`}}}},g={args:{label:`Disabled Navigation Item`,disabled:!0},parameters:{docs:{description:{story:`Demonstrates a navigation item that is disabled and non-interactive.`}}}},_={args:{label:`Navigation Item With Icon`,icon:`addCircle`},parameters:{docs:{description:{story:`Presents a navigation item that includes an icon for visual assistance.`}}}},v={args:{label:`Navigation Item as Anchor`,href:`#`},parameters:{docs:{description:{story:`Displays an item intended to function as a link within navigation.`}}}},y={args:{label:`Item with Children`,children:`Item 1`},parameters:{docs:{description:{story:`Illustrates an item with children, showing nesting capabilities.`}}}},b={args:{label:`Expandable Navigation Item`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{label:`Child Item 1`}),(0,d.jsxs)(s,{label:`Child Item 2`,children:[(0,d.jsx)(s,{label:`Sub-Child Item 1`}),(0,d.jsx)(s,{label:`Sub-Child Item 2`})]}),(0,d.jsx)(s,{label:`Child Item 1`}),(0,d.jsxs)(s,{label:`Child Item 2`,children:[(0,d.jsx)(s,{label:`Sub-Child Item 1`}),(0,d.jsx)(s,{label:`Sub-Child Item 2`})]})]})},parameters:{docs:{description:{story:`Demonstrates an expandable SideNavigationItem with nested child items. Note that styling support is provided for three nested levels only.`}}}},x={args:{label:`Expandable Navigation Item`,icon:`error`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{label:`Child Item 1`}),(0,d.jsxs)(s,{label:`Child Item 2`,icon:`addCircle`,children:[(0,d.jsx)(s,{label:`Sub-Child Item 1`,icon:`addCircle`}),(0,d.jsx)(s,{label:`Sub-Child Item 2`})]}),(0,d.jsx)(s,{label:`Child Item 1`}),(0,d.jsx)(s,{label:`Child Item 2`})]})},parameters:{docs:{description:{story:`Illustrates an expandable navigation item with children and an icon, noting that only the first level can include an icon.`}}}},S={args:{label:`Disabled Expandable Item`,icon:`error`,disabled:!0,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{label:`2nd Level Item`,href:`#`,icon:`addCircle`}),(0,d.jsx)(s,{label:`2nd Level Item`,icon:`addCircle`,children:(0,d.jsx)(s,{label:`3rd Level Item`,icon:`addCircle`,children:(0,d.jsx)(s,{label:`4th Level Item`,href:`#`,icon:`addCircle`})})})]})},parameters:{docs:{description:{story:`Displays an expandable navigation item in a disabled state with nested children.`}}}},C={render:()=>(0,d.jsx)(()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(s,{label:`Controlled Item (${e?`open`:`closed`})`,open:e,onToggle:t,children:[(0,d.jsx)(s,{label:`Child A`,href:`#`}),(0,d.jsx)(s,{label:`Child B`,href:`#`})]})},{}),parameters:{docs:{description:{story:"Demonstrates a controlled SideNavigationItem: the parent owns the open state via the `open` prop and is notified of user toggles via `onToggle`. The chevron toggles open/close; the label remains independent for navigation."}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledItem = () => {
      const [open, setOpen] = useState(true);
      return <SideNavigationItem label={\`Controlled Item (\${open ? "open" : "closed"})\`} open={open} onToggle={setOpen}>
          <SideNavigationItem label="Child A" href="#" />
          <SideNavigationItem label="Child B" href="#" />
        </SideNavigationItem>;
    };
    return <ControlledItem />;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a controlled SideNavigationItem: the parent owns the open state via the \`open\` prop and is notified of user toggles via \`onToggle\`. The chevron toggles open/close; the label remains independent for navigation."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Active`,`Disabled`,`WithIcon`,`AsLink`,`WithChildren`,`Expandable`,`ExpandableWithIcon`,`DisabledWithExpandable`,`Controlled`]}))();export{h as Active,v as AsLink,C as Controlled,m as Default,g as Disabled,S as DisabledWithExpandable,b as Expandable,x as ExpandableWithIcon,y as WithChildren,_ as WithIcon,w as __namedExportsOrder,p as default};