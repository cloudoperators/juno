import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-DloHrdSc.js";import{r,t as i}from"./SideNavigationItem.component-i2mf7tWP.js";import{t as a}from"./SideNavigation-Cw0BPSQw.js";import{t as o}from"./SideNavigationItem-BESJfCiA.js";import{n as s,t as c}from"./SideNavigationList.component-CZ_2Afjc.js";import{n as l,t as u}from"./SideNavigationGroup.component-icnS55x9.js";var d=e((()=>{l()})),f,p,m,h;e((()=>{n(),s(),o(),d(),a(),f=t(),p={title:`Navigation/SideNavigation/SideNavigationList`,component:c,decorators:[e=>(0,f.jsx)(r,{children:(0,f.jsx)(e,{})})]},m={render:()=>(0,f.jsxs)(c,{children:[(0,f.jsx)(i,{label:`Overview`,icon:`home`}),(0,f.jsxs)(i,{label:`Settings`,children:[(0,f.jsx)(i,{label:`Profile`,icon:`home`}),(0,f.jsx)(i,{label:`Preferences`})]}),(0,f.jsxs)(u,{label:`Team`,open:!0,children:[(0,f.jsx)(i,{label:`Members`}),(0,f.jsxs)(i,{label:`Projects`,children:[(0,f.jsx)(i,{label:`Current`}),(0,f.jsx)(i,{label:`Archived`,disabled:!0})]})]})]}),parameters:{docs:{description:{story:`Illustrates a nested navigation structure using SideNavigationItems and SideNavigationGroups, enabling complex hierarchies and visual organization within side navigation menus.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`NestedNavigationExample`]}))();export{m as NestedNavigationExample,h as __namedExportsOrder,p as default};