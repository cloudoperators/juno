import{g as e}from"./iframe-DaLLswkI.js";import{n as t,t as n}from"./SideNavigationItem.component-DpBKez45.js";import"./SideNavigation-D8NnlcFi.js";import{t as r}from"./SideNavigationList.component-168lGSRZ.js";import{t as i}from"./SideNavigationGroup.component-me_Zw4vn.js";import"react";var a=e(),o={title:`Navigation/SideNavigation/SideNavigation`,component:t,decorators:[e=>(0,a.jsx)(`div`,{style:{width:250},children:(0,a.jsx)(e,{})})],argTypes:{children:{control:!1}}},s={args:{ariaLabel:`Default Side Navigation`},render:e=>(0,a.jsx)(t,{...e,children:(0,a.jsxs)(r,{children:[(0,a.jsx)(n,{label:`Home`,href:`/`}),(0,a.jsxs)(n,{label:`Messages`,children:[(0,a.jsx)(n,{label:`Inbox`}),(0,a.jsx)(n,{label:`Sent Items`})]}),(0,a.jsx)(n,{label:`Searches`,icon:`search`})]})}),parameters:{docs:{description:{story:`This default setup includes a basic side navigation menu with various items, showcasing fundamental usage.`}}}},c={render:e=>(0,a.jsx)(t,{...e,children:(0,a.jsxs)(r,{children:[(0,a.jsx)(n,{label:`Item 1`,icon:`addCircle`,selected:!0,href:`#`}),(0,a.jsxs)(n,{label:`Item 2`,icon:`addCircle`,children:[(0,a.jsx)(n,{label:`Sub-Child 1`}),(0,a.jsx)(n,{label:`Sub-Child 2`,children:(0,a.jsx)(n,{label:`Sub-Child 3`})})]}),(0,a.jsx)(n,{label:`Item 3`,href:`#`}),(0,a.jsxs)(i,{label:`Group Example`,children:[(0,a.jsx)(n,{label:`Grouped Item 1`}),(0,a.jsxs)(n,{label:`Grouped Item 2`,children:[(0,a.jsx)(n,{label:`Sub-Child 1`}),(0,a.jsx)(n,{label:`Sub-Child 2`,selected:!0})]})]})]})}),parameters:{docs:{description:{story:`Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure.`}}}},l={render:e=>(0,a.jsx)(t,{...e,onActiveItemChange:e=>console.log(`Active item changed:`,e),children:(0,a.jsxs)(r,{children:[(0,a.jsx)(n,{label:`Dashboard`,href:`/`}),(0,a.jsxs)(n,{label:`Settings`,icon:`search`,children:[(0,a.jsx)(n,{label:`Profile`}),(0,a.jsx)(n,{label:`Preferences`})]}),(0,a.jsxs)(i,{label:`Project Management`,children:[(0,a.jsx)(n,{label:`Overview`}),(0,a.jsxs)(n,{label:`Analytics`,children:[(0,a.jsx)(n,{label:`Reports`}),(0,a.jsx)(n,{label:`Statistics`,selected:!0})]})]})]})}),parameters:{docs:{description:{story:`An interactive navigation setup that logs active item changes.`}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Default Side Navigation"
  },
  render: args => <SideNavigation {...args}>
      <SideNavigationList>
        <SideNavigationItem label="Home" href="/" />
        <SideNavigationItem label="Messages">
          <SideNavigationItem label="Inbox" />
          <SideNavigationItem label="Sent Items" />
        </SideNavigationItem>
        <SideNavigationItem label="Searches" icon="search" />
      </SideNavigationList>
    </SideNavigation>,
  parameters: {
    docs: {
      description: {
        story: "This default setup includes a basic side navigation menu with various items, showcasing fundamental usage."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <SideNavigation {...args}>
      <SideNavigationList>
        <SideNavigationItem label="Item 1" icon="addCircle" selected={true} href="#" />
        <SideNavigationItem label="Item 2" icon="addCircle">
          <SideNavigationItem label="Sub-Child 1" />
          <SideNavigationItem label="Sub-Child 2">
            <SideNavigationItem label="Sub-Child 3" />
          </SideNavigationItem>
        </SideNavigationItem>
        <SideNavigationItem label="Item 3" href="#" />
        <SideNavigationGroup label="Group Example">
          <SideNavigationItem label="Grouped Item 1" />
          <SideNavigationItem label="Grouped Item 2">
            <SideNavigationItem label="Sub-Child 1" />
            <SideNavigationItem label="Sub-Child 2" selected />
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <SideNavigation {...args} onActiveItemChange={item => console.log("Active item changed:", item)}>
      <SideNavigationList>
        <SideNavigationItem label="Dashboard" href="/" />
        <SideNavigationItem label="Settings" icon="search">
          <SideNavigationItem label="Profile" />
          <SideNavigationItem label="Preferences" />
        </SideNavigationItem>
        <SideNavigationGroup label="Project Management">
          <SideNavigationItem label="Overview" />
          <SideNavigationItem label="Analytics">
            <SideNavigationItem label="Reports" />
            <SideNavigationItem label="Statistics" selected />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigationList>
    </SideNavigation>,
  parameters: {
    docs: {
      description: {
        story: "An interactive navigation setup that logs active item changes."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`NavigationWithGroups`,`InteractiveNavigation`];export{s as Default,l as InteractiveNavigation,c as NavigationWithGroups,u as __namedExportsOrder,o as default};