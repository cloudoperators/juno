import{j as e}from"./iframe-CFsHabiD.js";import{S as n}from"./SideNavigationGroup.component-D6OBd6zl.js";import{S as o,a}from"./SideNavigationItem.component-YzZrzmTX.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-DXPqhiKX.js";import"./Navigation.component-5osSfhh6.js";const b={title:"Navigation/SideNavigation/SideNavigationGroup",component:n,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[l=>e.jsx(o,{children:e.jsx(l,{})})]},r={args:{label:"Group"}},i={args:{label:"Group",disabled:!0}},t={args:{label:"Expandable Group",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"1st Level Item",href:"#",icon:"addCircle"}),e.jsx(a,{label:"1st Level Item",icon:"addCircle",children:e.jsx(a,{label:"2nd Level Item",icon:"addCircle",children:e.jsx(a,{label:"3rd Level Item",href:"#",icon:"addCircle",children:e.jsx(a,{label:"4th Level Item",href:"#",icon:"addCircle"})})})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group",
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["Default","Disabled","Expandable"];export{r as Default,i as Disabled,t as Expandable,u as __namedExportsOrder,b as default};
