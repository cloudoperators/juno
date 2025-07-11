import{j as e}from"./iframe-tVRGKblC.js";import{M as c}from"./ModalFooter.component-Dea4jitB.js";import{B as s}from"./Button.component-BoxrbPp2.js";import{B as l}from"./ButtonRow.component-BHxTTNAN.js";import{S as u}from"./Stack.component-DqfULp2j.js";import{I as m}from"./Icon.component-Bmmq8bBw.js";import"./Spinner.component-IvAhrjQg.js";const o=i=>e.jsx(c,{...i}),j={title:"Components/Modal/ModalFooter",component:c,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}}},r={render:o,args:{disableConfirmButton:!1,disableCancelButton:!1}},n={render:o,args:{confirmButtonLabel:"Confirm Action",cancelButtonLabel:"Cancel Action"}},a={render:o,args:{confirmButtonLabel:"Confirm Action",cancelButtonLabel:"Cancel Action",disableConfirmButton:!0,disableCancelButton:!0}},t={render:o,args:{className:"jn:justify-between jn:items-center",children:[e.jsxs(u,{gap:"2",children:[e.jsx(m,{}),e.jsx("span",{children:"Some status here"})]},"s1"),e.jsxs(l,{children:[e.jsx(s,{variant:"primary-danger",label:"Destruction"},"b-1"),e.jsx(s,{variant:"primary",label:"World Peace"},"b-2"),e.jsx(s,{variant:"subdued",label:"Surprise Me!"},"b-3")]},"br-1")]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    disableConfirmButton: false,
    disableCancelButton: false
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    className: "jn:justify-between jn:items-center",
    children: [<Stack gap="2" key="s1">
        <Icon />
        <span>Some status here</span>
      </Stack>, <ButtonRow key="br-1">
        <Button variant="primary-danger" label="Destruction" key="b-1" />
        <Button variant="primary" label="World Peace" key="b-2" />
        <Button variant="subdued" label="Surprise Me!" key="b-3" />
      </ButtonRow>]
  }
}`,...t.parameters?.docs?.source}}};const x=["Default","Configure","ConfigureWithDisabledButtons","Custom"];export{n as Configure,a as ConfigureWithDisabledButtons,t as Custom,r as Default,x as __namedExportsOrder,j as default};
