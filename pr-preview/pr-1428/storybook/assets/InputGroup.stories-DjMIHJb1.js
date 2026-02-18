import{r as h,j as e}from"./iframe-PzjH_KfA.js";import{S as f}from"./Stack.component-DW07RE2n.js";import{B as t}from"./Button.component-BNsOINMY.js";import{T as g}from"./TextInput.component-Di38bSju.js";import{S as k,a as y}from"./SelectOption.component-BkWeLEJ2.js";import{P}from"./PortalProvider.component-_KkCzLOP.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-BDRCRdNq.js";import"./Spinner.component-C3uInnD0.js";import"./Label.component-CZlYsnpd.js";import"./FormHint.component-5tDpSaR5.js";import"./element-movement-Wg2AUS3m.js";import"./floating-ui.react-BKl2IdZ1.js";import"./frozen-SNT1PTXa.js";import"./use-text-value-U1Krg-Bk.js";const G=(r,n,a)=>{if(!h.isValidElement(r))return r;const o={variant:r.props.variant||n,disabled:r.props.disabled||a};return h.cloneElement(r,o)},T=(r,n,a)=>`
    ${r}-${n}
    ${a?`${r}-disabled`:""}
  `,x=({children:r,className:n="",variant:a="default",disabled:o=!1,...j})=>{const S=h.Children.map(r,I=>G(I,a,o)),v=T("juno-input-group",a,o);return e.jsx(f,{className:`juno-input-group ${v} ${n}`,...j,children:S})};try{x.displayName="InputGroup",x.__docgenInfo={description:`InputGroup is a component used to visually group related elements such as
Buttons, TextInput, and Select elements, providing a cohesive styling approach.`,displayName:"InputGroup",props:{children:{defaultValue:null,description:`The children to render within the InputGroup.
This can be any React node or a collection of React nodes such as Buttons, TextInput, and Select elements.`,name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS class name(s) to apply to the InputGroup for custom styling.",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"The variant style to apply to the group and its children.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},disabled:{defaultValue:{value:"false"},description:`If true, all elements within the InputGroup will be disabled.
Individual elements can override this setting if needed.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const B=r=>e.jsxs(k,{...r,children:[e.jsx(y,{value:"value1",label:"Label 1"}),e.jsx(y,{value:"value2",label:"Label 2"}),e.jsx(y,{value:"value3",label:"Label 3"})]}),O={title:"WiP/InputGroup",component:x,argTypes:{children:{control:!1}},decorators:[r=>e.jsx("div",{className:"jn:pb-12",style:{minHeight:"250px"},children:e.jsx(P,{children:e.jsx(r,{})})})]},s={args:{children:[e.jsx(t,{label:"Button 1"},0),e.jsx(t,{children:"Button 2"},1),e.jsx(t,{label:"Button 3"},2)]}},l={args:{variant:"primary",children:[e.jsx(t,{label:"Primary Button"},0),e.jsx(t,{label:"Primary Button"},1),e.jsx(t,{label:"Primary Button"},2)]}},u={args:{variant:"primary-danger",children:[e.jsx(t,{label:"Primary Danger Button"},0),e.jsx(t,{label:"Primary Danger Button",variant:"primary"},1),e.jsx(t,{label:"Primary Danger Button"},2)]}},i={args:{variant:"subdued",children:[e.jsx(t,{label:"Subdued Button"},0),e.jsx(t,{label:"Subdued Button"},1),e.jsx(t,{label:"Subdued Button"},2)]}},p={args:{disabled:!0,children:[e.jsx(t,{label:"Button"},0),e.jsx(t,{label:"Button"},1),e.jsx(t,{label:"Button"},2)]}},c={args:{children:[e.jsx(t,{icon:"home"},0),e.jsx(t,{icon:"help"},1),e.jsx(t,{icon:"forum"},2)]}},d={args:{children:[e.jsx(g,{placeholder:"Enter a value…"},0),e.jsx(t,{label:"Submit"},1)]}},m={args:{children:[e.jsx(g,{placeholder:"First Name"},0),e.jsx(g,{placeholder:"Last Name"},1),e.jsx(t,{label:"Submit"},2)]}},b={args:{variant:"subdued",children:[e.jsx(B,{label:"Some label"},0),e.jsx(B,{},1),e.jsx(B,{},2),e.jsx(t,{icon:"filterAlt"},3)]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Button key={0} label="Button 1" />, <Button key={1}>Button 2</Button>, <Button key={2} label="Button 3" />]
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: [<Button key={0} label="Primary Button" />, <Button key={1} label="Primary Button" />, <Button key={2} label="Primary Button" />]
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary-danger",
    children: [<Button key={0} label="Primary Danger Button" />, <Button key={1} label="Primary Danger Button" variant="primary" />, <Button key={2} label="Primary Danger Button" />]
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "subdued",
    children: [<Button key={0} label="Subdued Button" />, <Button key={1} label="Subdued Button" />, <Button key={2} label="Subdued Button" />]
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: [<Button key={0} label="Button" />, <Button key={1} label="Button" />, <Button key={2} label="Button" />]
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Button key={0} icon="home" />, <Button key={1} icon="help" />, <Button key={2} icon="forum" />]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TextInput key={0} placeholder="Enter a value…" />, <Button key={1} label="Submit" />]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<TextInput key={0} placeholder="First Name" />, <TextInput key={1} placeholder="Last Name" />, <Button key={2} label="Submit" />]
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "subdued",
    children: [<SelectInput key={0} label="Some label" />, <SelectInput key={1} />, <SelectInput key={2} />, <Button key={3} icon="filterAlt" />]
  }
}`,...b.parameters?.docs?.source}}};const H=["Default","PrimaryInputGroup","PrimaryDangerInputGroup","SubduedInputGroup","Disabled","IconButtons","TextInputWithButton","MultipleTextInputsWithButton","SelectInputsWithButton"];export{s as Default,p as Disabled,c as IconButtons,m as MultipleTextInputsWithButton,u as PrimaryDangerInputGroup,l as PrimaryInputGroup,b as SelectInputsWithButton,i as SubduedInputGroup,d as TextInputWithButton,H as __namedExportsOrder,O as default};
