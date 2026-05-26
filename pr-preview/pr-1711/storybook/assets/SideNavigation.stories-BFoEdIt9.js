import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-B_vdqilJ.js";import{n as r,r as i,t as a}from"./SideNavigationItem.component-CzckjxJH.js";import{t as o}from"./SideNavigation-8zAIk1uy.js";import{n as s,t as c}from"./SideNavigationList.component-BxF6P-Xm.js";import{n as l,t as u}from"./SideNavigationGroup.component-S3_Ey3xN.js";var d,f,p,m,h,g;e((()=>{n(),o(),r(),s(),l(),d=t(),f={title:`Navigation/SideNavigation/SideNavigation`,component:i,decorators:[e=>(0,d.jsx)(`div`,{style:{width:250},children:(0,d.jsx)(e,{})})],argTypes:{children:{control:!1}}},p={args:{ariaLabel:`Default Side Navigation`},render:e=>(0,d.jsx)(i,{...e,children:(0,d.jsxs)(c,{children:[(0,d.jsx)(a,{label:`Home`,href:`/`}),(0,d.jsxs)(a,{label:`Messages`,children:[(0,d.jsx)(a,{label:`Inbox`}),(0,d.jsx)(a,{label:`Sent Items`})]}),(0,d.jsx)(a,{label:`Searches`,icon:`search`})]})}),parameters:{docs:{description:{story:`This default setup includes a basic side navigation menu with various items, showcasing fundamental usage.`}}}},m={render:e=>(0,d.jsx)(i,{...e,children:(0,d.jsxs)(c,{children:[(0,d.jsx)(a,{label:`Item 1`,icon:`addCircle`,selected:!0,href:`#`}),(0,d.jsxs)(a,{label:`Item 2`,icon:`addCircle`,children:[(0,d.jsx)(a,{label:`Sub-Child 1`}),(0,d.jsx)(a,{label:`Sub-Child 2`,children:(0,d.jsx)(a,{label:`Sub-Child 3`})})]}),(0,d.jsx)(a,{label:`Item 3`,href:`#`}),(0,d.jsxs)(u,{label:`Group Example`,children:[(0,d.jsx)(a,{label:`Grouped Item 1`}),(0,d.jsxs)(a,{label:`Grouped Item 2`,children:[(0,d.jsx)(a,{label:`Sub-Child 1`}),(0,d.jsx)(a,{label:`Sub-Child 2`,selected:!0})]})]})]})}),parameters:{docs:{description:{story:`Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure.`}}}},h={render:e=>(0,d.jsx)(i,{...e,onActiveItemChange:e=>console.log(`Active item changed:`,e),children:(0,d.jsxs)(c,{children:[(0,d.jsx)(a,{label:`Dashboard`,href:`/`}),(0,d.jsxs)(a,{label:`Settings`,icon:`search`,children:[(0,d.jsx)(a,{label:`Profile`}),(0,d.jsx)(a,{label:`Preferences`})]}),(0,d.jsxs)(u,{label:`Project Management`,children:[(0,d.jsx)(a,{label:`Overview`}),(0,d.jsxs)(a,{label:`Analytics`,children:[(0,d.jsx)(a,{label:`Reports`}),(0,d.jsx)(a,{label:`Statistics`,selected:!0})]})]})]})}),parameters:{docs:{description:{story:`An interactive navigation setup that logs active item changes.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`NavigationWithGroups`,`InteractiveNavigation`]}))();export{p as Default,h as InteractiveNavigation,m as NavigationWithGroups,g as __namedExportsOrder,f as default};