import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{i as r,n as i,t as a}from"./SideNavigationItem.component-DTGdmnNk.js";import{t as o}from"./SideNavigation-zRfwpW9S.js";import{n as s,t as c}from"./SideNavigationList.component-g8vFOhh2.js";import{n as l,t as u}from"./SideNavigationGroup.component-Yb4DEw35.js";var d,f,p,m,h,g;e((()=>{t(),o(),i(),s(),l(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Navigation/SideNavigation/Default`,component:r,decorators:[e=>(0,d.jsx)(`div`,{style:{width:250},children:(0,d.jsx)(e,{})})],argTypes:{children:{control:!1}}},m={args:{ariaLabel:`Default Side Navigation`},render:e=>(0,d.jsx)(r,{...e,children:(0,d.jsxs)(c,{children:[(0,d.jsx)(a,{label:`Home`,href:`#`}),(0,d.jsxs)(a,{label:`Messages`,onToggle:f(`onToggle`),children:[(0,d.jsx)(a,{label:`Inbox`}),(0,d.jsx)(a,{label:`Sent Items`})]}),(0,d.jsx)(a,{label:`Searches`})]})}),parameters:{docs:{description:{story:`This default setup includes a basic side navigation menu with various items, showcasing fundamental usage.`}}}},h={render:e=>(0,d.jsx)(r,{...e,children:(0,d.jsxs)(c,{children:[(0,d.jsxs)(u,{label:`Group 1`,open:!0,onToggle:f(`onToggle`),children:[(0,d.jsx)(a,{label:`Grouped-Item 1`}),(0,d.jsx)(a,{label:`Grouped-Item 2`,onToggle:f(`onToggle`),children:(0,d.jsx)(a,{label:`Grouped-Item 3`})})]}),(0,d.jsxs)(u,{label:`Group 2`,open:!0,onToggle:f(`onToggle`),children:[(0,d.jsx)(a,{label:`Grouped Item 1`}),(0,d.jsxs)(a,{label:`Grouped Item 2`,onToggle:f(`onToggle`),children:[(0,d.jsx)(a,{label:`Sub-Child 1`}),(0,d.jsx)(a,{label:`Sub-Child 2`})]})]})]})}),parameters:{docs:{description:{story:`Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Default Side Navigation"
  },
  render: args => <SideNavigation {...args}>
      <SideNavigationList>
        <SideNavigationItem label="Home" href="#" />
        <SideNavigationItem label="Messages" onToggle={action("onToggle")}>
          <SideNavigationItem label="Inbox" />
          <SideNavigationItem label="Sent Items" />
        </SideNavigationItem>
        <SideNavigationItem label="Searches" />
      </SideNavigationList>
    </SideNavigation>,
  parameters: {
    docs: {
      description: {
        story: "This default setup includes a basic side navigation menu with various items, showcasing fundamental usage."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <SideNavigation {...args}>
      <SideNavigationList>
        <SideNavigationGroup label="Group 1" open onToggle={action("onToggle")}>
          <SideNavigationItem label="Grouped-Item 1" />
          <SideNavigationItem label="Grouped-Item 2" onToggle={action("onToggle")}>
            <SideNavigationItem label="Grouped-Item 3" />
          </SideNavigationItem>
        </SideNavigationGroup>
        <SideNavigationGroup label="Group 2" open onToggle={action("onToggle")}>
          <SideNavigationItem label="Grouped Item 1" />
          <SideNavigationItem label="Grouped Item 2" onToggle={action("onToggle")}>
            <SideNavigationItem label="Sub-Child 1" />
            <SideNavigationItem label="Sub-Child 2" />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigationList>
    </SideNavigation>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`NavigationWithGroups`]}))();export{m as Default,h as NavigationWithGroups,g as __namedExportsOrder,p as default};