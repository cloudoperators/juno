import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-CqTKIliT.js";import{n as r,r as i,t as a}from"./SideNavigationItem.component-DTMqPpyk.js";import{t as o}from"./SideNavigation-0ygpvI0P.js";import{n as s,t as c}from"./SideNavigationList.component-BlxlehOf.js";import{n as l,t as u}from"./SideNavigationGroup.component-BkLVklkB.js";var d,f,p,m,h;e((()=>{n(),o(),r(),s(),l(),d=t(),f={title:`Navigation/SideNavigation/Default`,component:i,decorators:[e=>(0,d.jsx)(`div`,{style:{width:250},children:(0,d.jsx)(e,{})})],argTypes:{children:{control:!1}}},p={args:{ariaLabel:`Default Side Navigation`},render:e=>(0,d.jsx)(i,{...e,children:(0,d.jsxs)(c,{children:[(0,d.jsx)(a,{label:`Home`,href:`#`}),(0,d.jsxs)(a,{label:`Messages`,children:[(0,d.jsx)(a,{label:`Inbox`}),(0,d.jsx)(a,{label:`Sent Items`})]}),(0,d.jsx)(a,{label:`Searches`,icon:`search`})]})}),parameters:{docs:{description:{story:`This default setup includes a basic side navigation menu with various items, showcasing fundamental usage.`}}}},m={render:e=>(0,d.jsx)(i,{...e,children:(0,d.jsxs)(c,{children:[(0,d.jsx)(a,{label:`Item 1`,icon:`addCircle`,selected:!0,href:`#`}),(0,d.jsxs)(a,{label:`Item 2`,icon:`addCircle`,children:[(0,d.jsx)(a,{label:`Sub-Child 1`}),(0,d.jsx)(a,{label:`Sub-Child 2`,children:(0,d.jsx)(a,{label:`Sub-Child 3`})})]}),(0,d.jsx)(a,{label:`Item 3`,href:`#`}),(0,d.jsxs)(u,{label:`Group Example`,children:[(0,d.jsx)(a,{label:`Grouped Item 1`}),(0,d.jsxs)(a,{label:`Grouped Item 2`,children:[(0,d.jsx)(a,{label:`Sub-Child 1`}),(0,d.jsx)(a,{label:`Sub-Child 2`,selected:!0})]})]})]})}),parameters:{docs:{description:{story:`Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Default Side Navigation"
  },
  render: args => <SideNavigation {...args}>
      <SideNavigationList>
        <SideNavigationItem label="Home" href="#" />
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`NavigationWithGroups`]}))();export{p as Default,m as NavigationWithGroups,h as __namedExportsOrder,f as default};