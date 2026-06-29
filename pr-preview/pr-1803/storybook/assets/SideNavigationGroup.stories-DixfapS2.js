import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{a as i,i as a,n as o,t as s}from"./SideNavigationItem.component-DyJTT9AC.js";import{n as c,t as l}from"./SideNavigationGroup.component-nqNJFymF.js";var u,d,f,p,m,h,g,_;t((()=>{u=e(n()),c(),i(),o(),d=r(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Navigation/SideNavigation/Group`,component:l,args:{onToggle:f()},argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,d.jsx)(a,{children:(0,d.jsx)(e,{})})]},m={args:{label:`Group`,children:[(0,d.jsx)(s,{label:`Item 1`,href:`#`},`1`),(0,d.jsx)(s,{label:`Item 2`,href:`#`},`2`),(0,d.jsx)(s,{label:`Item 3`,href:`#`},`3`)]},parameters:{docs:{description:{story:`Displays a simple SideNavigationGroup with a few items, useful for organizing items.`}}}},h={args:{label:`Expandable Group`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{label:`1st Level Item`,href:`#`}),(0,d.jsx)(s,{label:`Nested`,children:(0,d.jsxs)(s,{label:`2nd Level Item`,children:[(0,d.jsx)(s,{label:`3rd Level Item`,href:`#`}),(0,d.jsx)(s,{label:`4th Level Item`,href:`#`})]})})]})},parameters:{docs:{description:{story:`Shows a SideNavigationGroup with expandable items, demonstrating hierarchical navigation.`}}}},g={render:()=>(0,d.jsx)(()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(l,{label:`Controlled Group (${e?`open`:`closed`})`,open:e,onToggle:t,children:[(0,d.jsx)(s,{label:`Item 1`,href:`#`}),(0,d.jsx)(s,{label:`Item 2`,href:`#`}),(0,d.jsx)(s,{label:`Item 3`,href:`#`})]})},{}),parameters:{docs:{description:{story:"Demonstrates a controlled SideNavigationGroup: the parent owns the open state via the `open` prop and is notified of user toggles via `onToggle`."}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group",
    children: [<SideNavigationItem key="1" label="Item 1" href="#" />, <SideNavigationItem key="2" label="Item 2" href="#" />, <SideNavigationItem key="3" label="Item 3" href="#" />]
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a simple SideNavigationGroup with a few items, useful for organizing items."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expandable Group",
    children: <>
        <SideNavigationItem label="1st Level Item" href="#" />
        <SideNavigationItem label="Nested">
          <SideNavigationItem label="2nd Level Item">
            <SideNavigationItem label="3rd Level Item" href="#" />
            <SideNavigationItem label="4th Level Item" href="#" />
          </SideNavigationItem>
        </SideNavigationItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a SideNavigationGroup with expandable items, demonstrating hierarchical navigation."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledGroup = () => {
      const [open, setOpen] = useState(true);
      return <SideNavigationGroup label={\`Controlled Group (\${open ? "open" : "closed"})\`} open={open} onToggle={setOpen}>
          <SideNavigationItem label="Item 1" href="#" />
          <SideNavigationItem label="Item 2" href="#" />
          <SideNavigationItem label="Item 3" href="#" />
        </SideNavigationGroup>;
    };
    return <ControlledGroup />;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a controlled SideNavigationGroup: the parent owns the open state via the \`open\` prop and is notified of user toggles via \`onToggle\`."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Expandable`,`Controlled`]}))();export{g as Controlled,m as Default,h as Expandable,_ as __namedExportsOrder,p as default};