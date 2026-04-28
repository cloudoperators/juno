import{g as e}from"./iframe-DaLLswkI.js";import{n as t,t as n}from"./SideNavigationItem.component-DpBKez45.js";import"./SideNavigationItem-Q0SJ5zOA.js";import{t as r}from"./SideNavigationGroup.component-me_Zw4vn.js";import"react";var i=e(),a={title:`Navigation/SideNavigation/SideNavigationGroup`,component:r,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[e=>(0,i.jsx)(t,{children:(0,i.jsx)(e,{})})]},o={args:{label:`Group`}},s={args:{label:`Group`,disabled:!0}},c={args:{label:`Expandable Group`,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{label:`1st Level Item`,href:`#`,icon:`addCircle`}),(0,i.jsx)(n,{label:`1st Level Item`,icon:`addCircle`,children:(0,i.jsx)(n,{label:`2nd Level Item`,icon:`addCircle`,children:(0,i.jsx)(n,{label:`3rd Level Item`,href:`#`,icon:`addCircle`,children:(0,i.jsx)(n,{label:`4th Level Item`,href:`#`,icon:`addCircle`})})})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Expandable Group",
    children: <>
        <SideNavigationItem label="1st Level Item" href="#" icon="addCircle" />
        <SideNavigationItem label="1st Level Item" icon="addCircle">
          <SideNavigationItem label="2nd Level Item" icon="addCircle">
            <SideNavigationItem label="3rd Level Item" href="#" icon="addCircle">
              <SideNavigationItem label="4th Level Item" href="#" icon="addCircle" />
            </SideNavigationItem>
          </SideNavigationItem>
        </SideNavigationItem>
      </>
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Disabled`,`Expandable`];export{o as Default,s as Disabled,c as Expandable,l as __namedExportsOrder,a as default};