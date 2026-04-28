import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{n,t as r}from"./SideNavigationItem.component-P5DDl8et.js";import"./SideNavigation-itNqCdF9.js";import"./SideNavigationItem-CQiXwANd.js";import{t as i}from"./SideNavigationList.component-CGW6fAJs.js";import{t as a}from"./SideNavigationGroup.component-mu-ioPm5.js";e();var o=t(),s={title:`Navigation/SideNavigation/SideNavigationList`,component:i,decorators:[e=>(0,o.jsx)(n,{children:(0,o.jsx)(e,{})})]},c={render:()=>(0,o.jsxs)(i,{children:[(0,o.jsx)(r,{label:`Overview`,icon:`home`}),(0,o.jsxs)(r,{label:`Settings`,children:[(0,o.jsx)(r,{label:`Profile`,icon:`home`}),(0,o.jsx)(r,{label:`Preferences`})]}),(0,o.jsxs)(a,{label:`Team`,open:!0,children:[(0,o.jsx)(r,{label:`Members`}),(0,o.jsxs)(r,{label:`Projects`,children:[(0,o.jsx)(r,{label:`Current`}),(0,o.jsx)(r,{label:`Archived`,disabled:!0})]})]})]}),parameters:{docs:{description:{story:`Illustrates a nested navigation structure using SideNavigationItems and SideNavigationGroups, enabling complex hierarchies and visual organization within side navigation menus.`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`NestedNavigationExample`];export{c as NestedNavigationExample,l as __namedExportsOrder,s as default};