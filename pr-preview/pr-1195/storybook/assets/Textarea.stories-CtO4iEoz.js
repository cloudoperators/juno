import{j as p}from"./iframe-5yRFlHT9.js";import{T as u}from"./Textarea.component-DIN1Gpp5.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.component-BxU3xP1y.js";import"./Icon.component-BRbUBjSG.js";import"./FormHint.component-DRJ67U_h.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,b={title:"Forms/Textarea",component:u,args:{onFocus:m()},argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1}}},e={args:{placeholder:"Some text here"}},r={args:{label:"Textarea"}},a={args:{label:"Required Textarea",required:!0}},s={args:{invalid:!0,placeholder:"Some invalid text here"}},t={args:{valid:!0,placeholder:"Some valid text here"}},o={args:{disabled:!0,placeholder:"A disabled textarea"}},c={args:{placeholder:"An autofocussing textarea",autoFocus:!0}},n={args:{helptext:"This is an explanatory text referring to the input"}},i={args:{helptext:p.jsxs(p.Fragment,{children:["This is a helptext with a ",p.jsx("a",{href:"#",children:"Link"})]})}},l={args:{successtext:"This field is a great success!"}},d={args:{errortext:"This field has an error"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Some text here"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Textarea"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required Textarea",
    required: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: "Some invalid text here"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valid: true,
    placeholder: "Some valid text here"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "A disabled textarea"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "An autofocussing textarea",
    autoFocus: true
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    helptext: "This is an explanatory text referring to the input"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    helptext: <>
        This is a helptext with a <a href="#">Link</a>
      </>
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    successtext: "This field is a great success!"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    errortext: "This field has an error"
  }
}`,...d.parameters?.docs?.source}}};const W=["Default","WithLabel","RequiredWithLabel","Invalid","Valid","Disabled","Autofocus","WithHelpText","WithHelpTextAsNode","WithSuccessText","WithErrorText"];export{c as Autofocus,e as Default,o as Disabled,s as Invalid,a as RequiredWithLabel,t as Valid,d as WithErrorText,n as WithHelpText,i as WithHelpTextAsNode,r as WithLabel,l as WithSuccessText,W as __namedExportsOrder,b as default};
