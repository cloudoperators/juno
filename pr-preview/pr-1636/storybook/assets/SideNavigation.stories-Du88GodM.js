import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{n,t as r}from"./SideNavigationItem.component-P5DDl8et.js";import"./SideNavigation-itNqCdF9.js";import{t as i}from"./SideNavigationList.component-CGW6fAJs.js";import{t as a}from"./SideNavigationGroup.component-mu-ioPm5.js";e();var o=t(),s={title:`Navigation/SideNavigation/SideNavigation`,component:n,decorators:[e=>(0,o.jsx)(`div`,{style:{width:250},children:(0,o.jsx)(e,{})})],argTypes:{children:{control:!1}}},c={args:{ariaLabel:`Default Side Navigation`},render:e=>(0,o.jsx)(n,{...e,children:(0,o.jsxs)(i,{children:[(0,o.jsx)(r,{label:`Home`,href:`/`}),(0,o.jsxs)(r,{label:`Messages`,children:[(0,o.jsx)(r,{label:`Inbox`}),(0,o.jsx)(r,{label:`Sent Items`})]}),(0,o.jsx)(r,{label:`Searches`,icon:`search`})]})}),parameters:{docs:{description:{story:`This default setup includes a basic side navigation menu with various items, showcasing fundamental usage.`}}}},l={render:e=>(0,o.jsx)(n,{...e,children:(0,o.jsxs)(i,{children:[(0,o.jsx)(r,{label:`Item 1`,icon:`addCircle`,selected:!0,href:`#`}),(0,o.jsxs)(r,{label:`Item 2`,icon:`addCircle`,children:[(0,o.jsx)(r,{label:`Sub-Child 1`}),(0,o.jsx)(r,{label:`Sub-Child 2`,children:(0,o.jsx)(r,{label:`Sub-Child 3`})})]}),(0,o.jsx)(r,{label:`Item 3`,href:`#`}),(0,o.jsxs)(a,{label:`Group Example`,children:[(0,o.jsx)(r,{label:`Grouped Item 1`}),(0,o.jsxs)(r,{label:`Grouped Item 2`,children:[(0,o.jsx)(r,{label:`Sub-Child 1`}),(0,o.jsx)(r,{label:`Sub-Child 2`,selected:!0})]})]})]})}),parameters:{docs:{description:{story:`Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure.`}}}},u={render:e=>(0,o.jsx)(n,{...e,onActiveItemChange:e=>console.log(`Active item changed:`,e),children:(0,o.jsxs)(i,{children:[(0,o.jsx)(r,{label:`Dashboard`,href:`/`}),(0,o.jsxs)(r,{label:`Settings`,icon:`search`,children:[(0,o.jsx)(r,{label:`Profile`}),(0,o.jsx)(r,{label:`Preferences`})]}),(0,o.jsxs)(a,{label:`Project Management`,children:[(0,o.jsx)(r,{label:`Overview`}),(0,o.jsxs)(r,{label:`Analytics`,children:[(0,o.jsx)(r,{label:`Reports`}),(0,o.jsx)(r,{label:`Statistics`,selected:!0})]})]})]})}),parameters:{docs:{description:{story:`An interactive navigation setup that logs active item changes.`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`NavigationWithGroups`,`InteractiveNavigation`];export{c as Default,u as InteractiveNavigation,l as NavigationWithGroups,d as __namedExportsOrder,s as default};