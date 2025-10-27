import{j as e}from"./iframe-CxcBTvzQ.js";import{S as n}from"./SideNavigationGroup.component-BOy8E24e.js";import{S as o,a}from"./SideNavigationItem.component-Df-T3B-f.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-3N0I9PAU.js";import"./Navigation.component-FtX6id0S.js";const b={title:"Navigation/SideNavigation/SideNavigationGroup",component:n,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[l=>e.jsx(o,{children:e.jsx(l,{})})]},r={args:{label:"Group"}},i={args:{label:"Group",disabled:!0}},t={args:{label:"Expandable Group",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"1st Level Item",href:"#",icon:"addCircle"}),e.jsx(a,{label:"1st Level Item",icon:"addCircle",children:e.jsx(a,{label:"2nd Level Item",icon:"addCircle",children:e.jsx(a,{label:"3rd Level Item",href:"#",icon:"addCircle",children:e.jsx(a,{label:"4th Level Item",href:"#",icon:"addCircle"})})})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
