import{j as T}from"./iframe-C9X_P3k-.js";import{T as S}from"./TextInput.component-DLsZ4Grw.js";import"./Label.component-BIGn-I5S.js";import"./Icon.component-CZUbTn4p.js";import"./FormHint.component-B9OauT_4.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,I={title:"Forms/TextInput",component:S,args:{onFocus:f()},argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},value:{control:{type:"text"}}}},e={args:{}},r={args:{label:"Text Input"}},s={args:{label:"Required Text Input",required:!0}},a={args:{invalid:!0}},t={args:{valid:!0}},o={args:{autoFocus:!0}},c={args:{disabled:!0}},n={args:{readOnly:!0}},p={args:{type:"email"}},i={args:{type:"tel"}},u={args:{type:"url"}},d={args:{type:"number"}},m={args:{type:"password"}},l={args:{helptext:"This is an explanatory text referring to the input"}},g={args:{helptext:T.jsxs(T.Fragment,{children:["This is a helptext with a ",T.jsx("a",{href:"#",children:"Link"})]})}},x={args:{successtext:"This field is a great success!"}},h={args:{errortext:"This field has an error"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Text Input"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required Text Input",
    required: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    valid: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "email"
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "tel"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "url"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    helptext: "This is an explanatory text referring to the input"
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    helptext: <>
        This is a helptext with a <a href="#">Link</a>
      </>
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    successtext: "This field is a great success!"
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    errortext: "This field has an error"
  }
}`,...h.parameters?.docs?.source}}};const R=["Default","WithLabel","RequiredWithLabel","Invalid","Valid","Autofocus","Disabled","ReadOnly","Email","Tel","Url","Number","Password","WithHelpText","WithHelpTextAsNode","WithSuccessText","WithErrorText"];export{o as Autofocus,e as Default,c as Disabled,p as Email,a as Invalid,d as Number,m as Password,n as ReadOnly,s as RequiredWithLabel,i as Tel,u as Url,t as Valid,h as WithErrorText,l as WithHelpText,g as WithHelpTextAsNode,r as WithLabel,x as WithSuccessText,R as __namedExportsOrder,I as default};
