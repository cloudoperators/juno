import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{a as r,i,n as a,t as o}from"./SideNavigationItem.component-HauEur7M.js";import{n as s,t as c}from"./SideNavigationGroup.component-BRcCiHgD.js";var l,u,d,f,p;e((()=>{t(),s(),r(),a(),l=n(),u={title:`Navigation/SideNavigation/Group`,component:c,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,l.jsx)(i,{children:(0,l.jsx)(e,{})})]},d={args:{label:`Group`,children:[(0,l.jsx)(o,{label:`Item 1`,href:`#`},`1`),(0,l.jsx)(o,{label:`Item 2`,href:`#`},`2`),(0,l.jsx)(o,{label:`Item 3`,href:`#`},`3`)]},parameters:{docs:{description:{story:`Displays a simple SideNavigationGroup with a few items, useful for organizing items.`}}}},f={args:{label:`Expandable Group`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`1st Level Item`,href:`#`}),(0,l.jsx)(o,{label:`Nested`,children:(0,l.jsxs)(o,{label:`2nd Level Item`,children:[(0,l.jsx)(o,{label:`3rd Level Item`,href:`#`}),(0,l.jsx)(o,{label:`4th Level Item`,href:`#`})]})})]})},parameters:{docs:{description:{story:`Shows a SideNavigationGroup with expandable items, demonstrating hierarchical navigation.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group",
    children: [<SideNavigationItem key="1" label="Item 1" href="#" />, <SideNavigationItem key="2" label="Item 2" href="#" />, <SideNavigationItem key="3" label="Item 3" href="#" />]
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a simple SideNavigationGroup with a few items, useful for organizing items."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expandable Group",
    children: <>
        <SideNavigationItem label="1st Level Item" href="#" />
        <SideNavigationItem label="Nested">
          <SideNavigationItem label="2nd Level Item">
            <SideNavigationItem label="3rd Level Item" href="#" />
            <SideNavigationItem label="4th Level Item" href="#" />
          </SideNavigationItem>
        </SideNavigationItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a SideNavigationGroup with expandable items, demonstrating hierarchical navigation."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Expandable`]}))();export{d as Default,f as Expandable,p as __namedExportsOrder,u as default};