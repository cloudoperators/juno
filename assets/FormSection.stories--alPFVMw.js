import{j as e}from"./iframe-k6nEyjrJ.js";import{F as n}from"./FormSection.component-B7NTvfUu.js";import{T as s}from"./TextInput.component-UByv2CyU.js";import{F as t}from"./FormRow.component-HcPKT4Ad.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.component-CT6wMMii.js";import"./Icon.component-D_-JRqaH.js";import"./FormHint.component-BK54cbg7.js";const u={title:"Forms/FormSection",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},r={args:{children:[e.jsx(t,{children:e.jsx(s,{label:"Address Line 1"})},"1"),e.jsx(t,{children:e.jsx(s,{label:"Address Line 2"})},"2")]}},o={args:{title:"Form Section With Title",children:[e.jsx(t,{children:e.jsx(s,{label:"Address Line 1"})},"1"),e.jsx(t,{children:e.jsx(s,{label:"Address Line 2"})},"2")]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<FormRow key="1">
        <TextInput label="Address Line 1" />
      </FormRow>, <FormRow key="2">
        <TextInput label="Address Line 2" />
      </FormRow>]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Form Section With Title",
    children: [<FormRow key="1">
        <TextInput label="Address Line 1" />
      </FormRow>, <FormRow key="2">
        <TextInput label="Address Line 2" />
      </FormRow>]
  }
}`,...o.parameters?.docs?.source}}};const F=["Default","WithTitle"];export{r as Default,o as WithTitle,F as __namedExportsOrder,u as default};
