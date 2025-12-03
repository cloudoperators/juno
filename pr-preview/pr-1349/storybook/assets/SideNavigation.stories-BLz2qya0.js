import{j as e}from"./iframe-CiTNZcjj.js";import{S as r,a as i}from"./SideNavigationItem.component-DR5zFaFI.js";import{S as o}from"./SideNavigationList.component-6UN5xoeH.js";import{S as l}from"./SideNavigationGroup.component-BlRTwDgW.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.component-BT6Vb-Jq.js";import"./Icon.component-pnNcXtfv.js";const u={title:"Navigation/SideNavigation/SideNavigation",component:r,decorators:[a=>e.jsx("div",{style:{width:250},children:e.jsx(a,{})})],argTypes:{children:{control:!1}}},t={args:{ariaLabel:"Default Side Navigation"},render:a=>e.jsx(r,{...a,children:e.jsxs(o,{children:[e.jsx(i,{label:"Home",href:"/"}),e.jsxs(i,{label:"Messages",children:[e.jsx(i,{label:"Inbox"}),e.jsx(i,{label:"Sent Items"})]}),e.jsx(i,{label:"Searches",icon:"search"})]})}),parameters:{docs:{description:{story:"This default setup includes a basic side navigation menu with various items, showcasing fundamental usage."}}}},n={render:a=>e.jsx(r,{...a,children:e.jsxs(o,{children:[e.jsx(i,{label:"Item 1",icon:"addCircle",selected:!0,href:"#"}),e.jsxs(i,{label:"Item 2",icon:"addCircle",children:[e.jsx(i,{label:"Sub-Child 1"}),e.jsx(i,{label:"Sub-Child 2",children:e.jsx(i,{label:"Sub-Child 3"})})]}),e.jsx(i,{label:"Item 3",href:"#"}),e.jsxs(l,{label:"Group Example",children:[e.jsx(i,{label:"Grouped Item 1"}),e.jsxs(i,{label:"Grouped Item 2",children:[e.jsx(i,{label:"Sub-Child 1"}),e.jsx(i,{label:"Sub-Child 2",selected:!0})]})]})]})}),parameters:{docs:{description:{story:"Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure."}}}},s={render:a=>e.jsx(r,{...a,onActiveItemChange:d=>console.log("Active item changed:",d),children:e.jsxs(o,{children:[e.jsx(i,{label:"Dashboard",href:"/"}),e.jsxs(i,{label:"Settings",icon:"search",children:[e.jsx(i,{label:"Profile"}),e.jsx(i,{label:"Preferences"})]}),e.jsxs(l,{label:"Project Management",children:[e.jsx(i,{label:"Overview"}),e.jsxs(i,{label:"Analytics",children:[e.jsx(i,{label:"Reports"}),e.jsx(i,{label:"Statistics",selected:!0})]})]})]})}),parameters:{docs:{description:{story:"An interactive navigation setup that logs active item changes."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const N=["Default","NavigationWithGroups","InteractiveNavigation"];export{t as Default,s as InteractiveNavigation,n as NavigationWithGroups,N as __namedExportsOrder,u as default};
