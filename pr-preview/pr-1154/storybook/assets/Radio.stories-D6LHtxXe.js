import{j as p}from"./iframe-C6pN-Bcm.js";import{a as h}from"./Radio.component-CyW8PqvP.js";import"./preload-helper-D9Z9MdNV.js";import"./Label.component-DjcDTX8c.js";import"./Icon.component-vJ41iLzB.js";import"./FormHint.component-CHjFI_uU.js";const w={title:"Forms/Radio",component:h,argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1}}},e={args:{value:"1"}},a={args:{checked:!0}},r={args:{id:"radio-with-label",label:"Radio with label"}},s={args:{required:!0,label:"Required Radio",helptext:"Only a Radio with a label passed will render a required marker."}},i={args:{label:"A Radio",helptext:"Never comes alone"}},t={args:{label:"A Radio",helptext:p.jsxs(p.Fragment,{children:["Helptext with a ",p.jsx("a",{href:"#",children:"Link"})]})}},o={args:{checked:!0,disabled:!0,label:"Disabled Radio with label"}},l={args:{valid:!0,label:"This Radio is valid"}},n={args:{invalid:!0,label:"This Radio is invalid"}},d={args:{valid:!0,label:"Validated Radio with label and icon",successtext:"This option is valid",helptext:"Validation icons will only show when there is a label on the Radio"}},c={args:{invalid:!0,label:"Invalidated Radio with label and icon",helptext:"Validation icons will only show when there is a label on the Radio",errortext:"This option is invalid."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: "1"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: "radio-with-label",
    label: "Radio with label"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: "Required Radio",
    helptext: "Only a Radio with a label passed will render a required marker."
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "A Radio",
    helptext: "Never comes alone"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "A Radio",
    helptext: <>
        Helptext with a <a href="#">Link</a>
      </>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: "Disabled Radio with label"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    valid: true,
    label: "This Radio is valid"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    label: "This Radio is invalid"
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    valid: true,
    label: "Validated Radio with label and icon",
    successtext: "This option is valid",
    helptext: "Validation icons will only show when there is a label on the Radio"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    label: "Invalidated Radio with label and icon",
    helptext: "Validation icons will only show when there is a label on the Radio",
    errortext: "This option is invalid."
  }
}`,...c.parameters?.docs?.source}}};const v=["Default","Checked","WithLabel","Required","WithHelptext","WithHelpTextAsNode","Disabled","Valid","Invalid","ValidWithLabel","InvalidWithLabel"];export{a as Checked,e as Default,o as Disabled,n as Invalid,c as InvalidWithLabel,s as Required,l as Valid,d as ValidWithLabel,t as WithHelpTextAsNode,i as WithHelptext,r as WithLabel,v as __namedExportsOrder,w as default};
