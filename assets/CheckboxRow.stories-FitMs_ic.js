import{j as d}from"./jsx-runtime-D6fbYt3N.js";import{C as re}from"./Checkbox.component-DfUNl78X.js";import{w as oe}from"./withDeprecationWarning.component-DcP1MqMf.js";import"./index-DysCNOs_.js";import"./Label.component-D1jWKEjF.js";import"./Icon.component-mRvJQXAl.js";import"./widgets-BR6-ubtP.js";import"./FormHint.component-Bac6eIcI.js";const se=({value:u="",checked:M=!1,indeterminate:$=!1,name:z=void 0,label:B=void 0,id:G=void 0,helptext:J=void 0,required:K=void 0,disabled:Q=!1,invalid:U=!1,errortext:X="",valid:Y=!1,successtext:Z="",className:ee="",onChange:ae,...te})=>d.jsx(re,{value:u,checked:M,indeterminate:$,name:z,label:B,id:G,helptext:J,disabled:Q,required:K,invalid:U,valid:Y,errortext:X,successtext:Z,className:ee,onChange:ae,...te}),ie=oe(se,"CheckboxRow is deprecated and will be removed in future versions. To be future-proof, use Checkbox instead.");try{CheckboxRowcomponent.displayName="CheckboxRowcomponent",CheckboxRowcomponent.__docgenInfo={description:"",displayName:"CheckboxRowcomponent",props:{value:{defaultValue:{value:""},description:"Optional initial value",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Pass checked state",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"Whether the checkbox is indeterminate",name:"indeterminate",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:"Name attribute of the checkbox element",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"undefined"},description:"Label text",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:{value:"undefined"},description:"Id",name:"id",required:!1,type:{name:"string"}},helptext:{defaultValue:{value:"undefined"},description:"Help text",name:"helptext",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"undefined"},description:"Specify whether the checkbox is required",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disable the Checkbox",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Whether the CheckboxRow is invalid",name:"invalid",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"The error text to render with the CheckboxRow. If passed, the Checkbox row will be set to invalid automatically.",name:"errortext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Whether the CheckboxRow is valid",name:"valid",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"The text to render when the field is validated. If passed, the Checkbox will be set to valid automatically.",name:"successtext",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Pass a handler to the checkbox element",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const xe={title:"Deprecated/CheckboxRow",component:ie,parameters:{docs:{description:{component:"DEPRECATED: A radio row containing a radio, associated label, and structural markup. This component is DEPRECATED, use Radio instead."}}},argTypes:{}},e={args:{label:"Default Checkbox Row",id:"default"}},a={args:{label:"Checked CheckboxRow",id:"checked",checked:!0}},t={args:{name:"my-input",label:"Checkbox Row with Help text",helptext:"Oh so helpful helptext",id:"withHelptext"}},r={args:{name:"my-input",label:"Checkbox Row with Help text",helptext:d.jsxs(d.Fragment,{children:["Helptext with a ",d.jsx("a",{href:"#",children:"Link"})]}),id:"withHelptext-withLink"}},o={args:{label:"Required Checkbox Row",required:!0,id:"required"}},s={args:{label:"Disabled Checkbox Row",id:"disabled-checkbox-row",disabled:!0}},i={args:{label:"Invalid Checkbox",id:"invalid-checkbox-row",invalid:!0}},n={args:{label:"Checkbox invalidated by errortext",id:"invalid-checkbox-by-errortext",errortext:"Pass an errortext to invalidate a CheckboxRow"}},l={args:{label:"Valid Checkbox",id:"valid-checkbox-row",valid:!0}},c={args:{label:"Checkbox validated by successtext",id:"valid-checkbox-by-successtext",successtext:"Pass a successtext to validate a CheckboxRow"}};var p,h,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Default Checkbox Row",
    id: "default"
  }
}`,...(m=(h=e.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,b,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Checked CheckboxRow",
    id: "checked",
    checked: true
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var f,v,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Checkbox Row with Help text",
    helptext: "Oh so helpful helptext",
    id: "withHelptext"
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,g,R;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Checkbox Row with Help text",
    helptext: <>
        Helptext with a <a href="#">Link</a>
      </>,
    id: "withHelptext-withLink"
  }
}`,...(R=(g=r.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var y,q,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Required Checkbox Row",
    required: true,
    id: "required"
  }
}`,...(V=(q=o.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var H,T,D;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checkbox Row",
    id: "disabled-checkbox-row",
    disabled: true
  }
}`,...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var W,S,E;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Invalid Checkbox",
    id: "invalid-checkbox-row",
    invalid: true
  }
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var _,I,N;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Checkbox invalidated by errortext",
    id: "invalid-checkbox-by-errortext",
    errortext: "Pass an errortext to invalidate a CheckboxRow"
  }
}`,...(N=(I=n.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,L,j;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Valid Checkbox",
    id: "valid-checkbox-row",
    valid: true
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var O,A,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Checkbox validated by successtext",
    id: "valid-checkbox-by-successtext",
    successtext: "Pass a successtext to validate a CheckboxRow"
  }
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const be=["Default","Checked","WithHelpText","WithHelpTextWithLink","Required","Disabled","Invalid","WithErrorText","Valid","WithSuccessText"];export{a as Checked,e as Default,s as Disabled,i as Invalid,o as Required,l as Valid,n as WithErrorText,t as WithHelpText,r as WithHelpTextWithLink,c as WithSuccessText,be as __namedExportsOrder,xe as default};
