import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-IGKVQItS.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{n as r,o as i,s as a,t as o}from"./SideNavigationItem.component-Cg01QNPC.js";import{n as s,t as c}from"./SideNavigationGroup.component-oRsTp62Y.js";var l,u,d,f,p;e((()=>{t(),s(),a(),r(),l=n(),u={title:`Navigation/SideNavigation/Group`,component:c,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,l.jsx)(i,{children:(0,l.jsx)(e,{})})]},d={args:{label:`Group`},parameters:{docs:{description:{story:`Displays a simple SideNavigationGroup without children, useful for organizing items.`}}}},f={args:{label:`Expandable Group`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{label:`1st Level Item`,href:`#`,icon:`addCircle`}),(0,l.jsx)(o,{label:`Nested`,icon:`addCircle`,children:(0,l.jsxs)(o,{label:`2nd Level Item`,icon:`addCircle`,children:[(0,l.jsx)(o,{label:`3rd Level Item`,href:`#`,icon:`addCircle`}),(0,l.jsx)(o,{label:`4th Level Item`,href:`#`,icon:`addCircle`})]})})]})},parameters:{docs:{description:{story:`Shows a SideNavigationGroup with expandable items, demonstrating hierarchical navigation.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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