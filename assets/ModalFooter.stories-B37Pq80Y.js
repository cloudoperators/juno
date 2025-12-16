import{j as e}from"./iframe-D4ToV9Lq.js";import{M as i}from"./ModalFooter.component-rHpfT0gI.js";import{B as c}from"./Button.component-zbyMrdDl.js";import{B as l}from"./ButtonRow.component-brLDkanI.js";import{S as u}from"./Stack.component-5x3AFy3S.js";import{I as m}from"./Icon.component-BxYcz8tR.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner.component-CZU4KUf6.js";const o=s=>e.jsx(i,{...s}),x={title:"Components/Modal/ModalFooter",component:i,argTypes:{children:{control:!1}},parameters:{actions:{argTypesRegex:null}}},r={render:o,args:{disableConfirmButton:!1,disableCancelButton:!1}},n={render:o,args:{confirmButtonLabel:"Confirm Action",cancelButtonLabel:"Cancel Action"}},t={render:o,args:{confirmButtonLabel:"Confirm Action",cancelButtonLabel:"Cancel Action",disableConfirmButton:!0,disableCancelButton:!0}},a={render:o,args:{className:"jn:justify-between jn:items-center",children:[e.jsxs(u,{gap:"2",children:[e.jsx(m,{}),e.jsx("span",{children:"Some status here"})]},"s1"),e.jsxs(l,{children:[e.jsx(c,{variant:"primary-danger",label:"Destruction"},"b-1"),e.jsx(c,{variant:"primary",label:"World Peace"},"b-2"),e.jsx(c,{variant:"subdued",label:"Surprise Me!"},"b-3")]},"br-1")]},parameters:{docs:{source:{transform:s=>s.replace(/jn:/g,"")}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action",
    disableConfirmButton: true,
    disableCancelButton: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      source: {
        transform: (source: string): string => {
          // Remove :jn prefix for docs, internal use only
          return source.replace(/jn:/g, "");
        }
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const y=["Default","Configure","ConfigureWithDisabledButtons","Custom"];export{n as Configure,t as ConfigureWithDisabledButtons,a as Custom,r as Default,y as __namedExportsOrder,x as default};
