import{j as e}from"./iframe-6j5EHCpl.js";import{S as n}from"./SideNavigationList.component-8Gs1oJZN.js";import{a as i,S as o}from"./SideNavigationItem.component-IqFAxMKG.js";import{S as r}from"./SideNavigationGroup.component-_cIuec0u.js";import"./preload-helper-PPVm8Dsz.js";import"./Navigation.component-DhwAotLG.js";import"./Icon.component-dWbaNs6o.js";const p={title:"Navigation/SideNavigation/SideNavigationList",component:n,decorators:[t=>e.jsx(o,{children:e.jsx(t,{})})]},a={render:()=>e.jsxs(n,{children:[e.jsx(i,{label:"Overview",icon:"home"}),e.jsxs(i,{label:"Settings",children:[e.jsx(i,{label:"Profile",icon:"home"}),e.jsx(i,{label:"Preferences"})]}),e.jsxs(r,{label:"Team",open:!0,children:[e.jsx(i,{label:"Members"}),e.jsxs(i,{label:"Projects",children:[e.jsx(i,{label:"Current"}),e.jsx(i,{label:"Archived",disabled:!0})]})]})]}),parameters:{docs:{description:{story:"Illustrates a nested navigation structure using SideNavigationItems and SideNavigationGroups, enabling complex hierarchies and visual organization within side navigation menus."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const S=["NestedNavigationExample"];export{a as NestedNavigationExample,S as __namedExportsOrder,p as default};
