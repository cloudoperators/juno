import{j as e}from"./iframe-BrL5FYlk.js";import{S as l}from"./SideNavigationGroup.component-DD6pKe9q.js";import{S as n,a}from"./SideNavigationItem.component-179Ra7QT.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-DgTHrRdc.js";import"./Navigation.component-DCBarZ17.js";const g={title:"Navigation/SideNavigation/SideNavigationGroup",component:l,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[t=>e.jsx(n,{children:e.jsx(t,{})})]},i={args:{label:"Group"}},r={args:{label:"Expandable Group",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"1st Level Item",href:"#",icon:"addCircle"}),e.jsx(a,{label:"1st Level Item",icon:"addCircle",children:e.jsx(a,{label:"2nd Level Item",icon:"addCircle",children:e.jsx(a,{label:"3rd Level Item",href:"#",icon:"addCircle",children:e.jsx(a,{label:"4th Level Item",href:"#",icon:"addCircle"})})})})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Group"
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Default","Expandable"];export{i as Default,r as Expandable,v as __namedExportsOrder,g as default};
