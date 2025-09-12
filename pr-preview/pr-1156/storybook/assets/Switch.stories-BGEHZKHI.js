import{j as p}from"./iframe-BeG3WsIH.js";import{S as h}from"./Switch.component-B1eyk_aT.js";import"./Label.component-ByWEDmMj.js";import"./Icon.component-D6geAhlr.js";import"./FormHint.component-CXxyLwFG.js";const b={title:"Forms/Switch",component:h,argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1}}},e={parameters:{docs:{description:{story:'Default Switch. Defaults to "off".'}}},args:{label:"Switch",id:"switch-default"}},r={args:{size:"small",label:"Small Switch",id:"switch-small"}},s={args:{size:"large",label:"Large Switch",id:"switch-large"}},a={parameters:{docs:{description:{story:'Render a checked Switch by passing bool "on".'}}},args:{on:!0}},t={parameters:{docs:{description:{story:'Disable a Switch by passing bool "disabled".'}}},args:{on:!0,disabled:!0,label:"Disabled Switch",id:"switch-disabled"}},i={args:{invalid:!0,label:"Invalid Switch",id:"switch-invalid"}},o={args:{valid:!0,label:"Valid Switch",id:"switch-valid"}},c={args:{label:"Switch",helptext:"This is an explanatory text referring to the input"}},l={args:{label:"Switch",helptext:p.jsxs(p.Fragment,{children:["This is a helptext with a ",p.jsx("a",{href:"#",children:"Link"})]})}},n={args:{label:"Switch",successtext:"This field is a great success!"}},d={args:{label:"Switch",errortext:"This field has an error"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default Switch. Defaults to "off".'
      }
    }
  },
  args: {
    label: "Switch",
    id: "switch-default"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small Switch",
    id: "switch-small"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Large Switch",
    id: "switch-large"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Render a checked Switch by passing bool "on".'
      }
    }
  },
  args: {
    on: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disable a Switch by passing bool "disabled".'
      }
    }
  },
  args: {
    on: true,
    disabled: true,
    label: "Disabled Switch",
    id: "switch-disabled"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    label: "Invalid Switch",
    id: "switch-invalid"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    valid: true,
    label: "Valid Switch",
    id: "switch-valid"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Switch",
    helptext: "This is an explanatory text referring to the input"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Switch",
    helptext: <>
        This is a helptext with a <a href="#">Link</a>
      </>
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Switch",
    successtext: "This field is a great success!"
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Switch",
    errortext: "This field has an error"
  }
}`,...d.parameters?.docs?.source}}};const x=["Default","Small","Large","On","Disabled","Invalid","Valid","WithHelpText","WithHelpTextAsNode","WithSuccessText","WithErrorText"];export{e as Default,t as Disabled,i as Invalid,s as Large,a as On,r as Small,o as Valid,d as WithErrorText,c as WithHelpText,l as WithHelpTextAsNode,n as WithSuccessText,x as __namedExportsOrder,b as default};
