import{g as e}from"./iframe-DmqlBy6I.js";import{n as t,t as n}from"./SideNavigationItem.component-CFvAqsAf.js";import"./SideNavigation-ea7SyGqH.js";import"./SideNavigationItem-Cic6s356.js";import{t as r}from"./SideNavigationList.component-xd98Y9x8.js";import{t as i}from"./SideNavigationGroup.component-CbIcKYZV.js";import"react";var a=e(),o={title:`Navigation/SideNavigation/SideNavigationList`,component:r,decorators:[e=>(0,a.jsx)(t,{children:(0,a.jsx)(e,{})})]},s={render:()=>(0,a.jsxs)(r,{children:[(0,a.jsx)(n,{label:`Overview`,icon:`home`}),(0,a.jsxs)(n,{label:`Settings`,children:[(0,a.jsx)(n,{label:`Profile`,icon:`home`}),(0,a.jsx)(n,{label:`Preferences`})]}),(0,a.jsxs)(i,{label:`Team`,open:!0,children:[(0,a.jsx)(n,{label:`Members`}),(0,a.jsxs)(n,{label:`Projects`,children:[(0,a.jsx)(n,{label:`Current`}),(0,a.jsx)(n,{label:`Archived`,disabled:!0})]})]})]}),parameters:{docs:{description:{story:`Illustrates a nested navigation structure using SideNavigationItems and SideNavigationGroups, enabling complex hierarchies and visual organization within side navigation menus.`}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SideNavigationList>
      <SideNavigationItem label="Overview" icon="home" />
      <SideNavigationItem label="Settings">
        <SideNavigationItem label="Profile" icon="home" />
        <SideNavigationItem label="Preferences" />
      </SideNavigationItem>
      <SideNavigationGroup label="Team" open={true}>
        <SideNavigationItem label="Members" />
        <SideNavigationItem label="Projects">
          <SideNavigationItem label="Current" />
          <SideNavigationItem label="Archived" disabled={true} />
        </SideNavigationItem>
      </SideNavigationGroup>
    </SideNavigationList>,
  parameters: {
    docs: {
      description: {
        story: "Illustrates a nested navigation structure using SideNavigationItems and SideNavigationGroups, enabling complex hierarchies and visual organization within side navigation menus."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};var c=[`NestedNavigationExample`];export{s as NestedNavigationExample,c as __namedExportsOrder,o as default};