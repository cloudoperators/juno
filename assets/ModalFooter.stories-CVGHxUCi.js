import{j as e}from"./iframe-CT1UHKc3.js";import{M as s}from"./ModalFooter.component-RcN2eH0t.js";import{B as t}from"./Button.component--U7LwOis.js";import{B as m}from"./ButtonRow.component-BnSriAPR.js";import{S as i}from"./Stack.component-2vfs5rrg.js";import{I as l}from"./Icon.component-Dy-SymY7.js";import"./Spinner.component-Bx3eImqC.js";const o=c=>e.jsx(s,{...c}),x={title:"Components/Modal/ModalFooter",component:s,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}}},r={render:o,args:{}},a={render:o,args:{confirmButtonLabel:"Confirm Action",cancelButtonLabel:"Cancel Action"}},n={render:o,args:{className:"jn:justify-between jn:items-center",children:[e.jsxs(i,{gap:"2",children:[e.jsx(l,{}),e.jsx("span",{children:"Some status here"})]},"s1"),e.jsxs(m,{children:[e.jsx(t,{variant:"primary-danger",label:"Destruction"},"b-1"),e.jsx(t,{variant:"primary",label:"World Peace"},"b-2"),e.jsx(t,{variant:"subdued",label:"Surprise Me!"},"b-3")]},"br-1")]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const y=["Default","Configure","Custom"];export{a as Configure,n as Custom,r as Default,y as __namedExportsOrder,x as default};
