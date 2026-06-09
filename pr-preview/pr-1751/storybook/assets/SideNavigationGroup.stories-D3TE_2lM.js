import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-BvKBmIeq.js";import{i as r,n as i,r as a,t as o}from"./SideNavigationItem.component-Cwj-p7GC.js";import{n as s,t as c}from"./SideNavigationGroup.component-BLxChTX8.js";var l,u,d,f,p;e((()=>{n(),s(),r(),i(),l=t(),u={title:`Navigation/SideNavigation/Group`,component:c,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,l.jsx)(a,{children:(0,l.jsx)(e,{})})]},d={args:{label:`Group`},parameters:{docs:{description:{story:`Displays a simple SideNavigationGroup without children, useful for organizing items.`}}}},f={args:{label:`Expandable Group`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`1st Level Item`,href:`#`,icon:`addCircle`}),(0,l.jsx)(o,{label:`Nested`,icon:`addCircle`,children:(0,l.jsxs)(o,{label:`2nd Level Item`,icon:`addCircle`,children:[(0,l.jsx)(o,{label:`3rd Level Item`,href:`#`,icon:`addCircle`}),(0,l.jsx)(o,{label:`4th Level Item`,href:`#`,icon:`addCircle`})]})})]})},parameters:{docs:{description:{story:`Shows a SideNavigationGroup with expandable items, demonstrating hierarchical navigation.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group"
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a simple SideNavigationGroup without children, useful for organizing items."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expandable Group",
    children: <>
        <SideNavigationItem label="1st Level Item" href="#" icon="addCircle" />
        <SideNavigationItem label="Nested" icon="addCircle">
          <SideNavigationItem label="2nd Level Item" icon="addCircle">
            <SideNavigationItem label="3rd Level Item" href="#" icon="addCircle" />
            <SideNavigationItem label="4th Level Item" href="#" icon="addCircle" />
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