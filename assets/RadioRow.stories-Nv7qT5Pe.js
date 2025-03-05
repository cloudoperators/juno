import{j as c}from"./jsx-runtime-D6fbYt3N.js";import{a as te}from"./Radio.component-C3z3YBHD.js";import{w as re}from"./withDeprecationWarning.component-DcP1MqMf.js";import"./index-DysCNOs_.js";import"./Label.component-B3thB2lY.js";import"./Icon.component-BIKVVhSf.js";import"./widgets-BR6-ubtP.js";import"./FormHint.component-Bac6eIcI.js";const ie=({value:p="",checked:U=!1,name:$=void 0,label:z=void 0,id:B=void 0,helptext:G="",className:J="",disabled:K=!1,required:M=!1,errortext:Q="",valid:X=!1,invalid:Y,successtext:Z="",onChange:ee=void 0,...ae})=>c.jsx(te,{value:p,checked:U,name:$,label:z,id:B,helptext:G,disabled:K,required:M,invalid:Y,valid:X,errortext:Q,successtext:Z,className:J,onChange:ee,...ae}),oe=re(ie,"RadioRow is deprecated and will be removed in future versions. To be future-proof, use Radio instead.");try{RadioRowcomponent.displayName="RadioRowcomponent",RadioRowcomponent.__docgenInfo={description:"",displayName:"RadioRowcomponent",props:{value:{defaultValue:{value:""},description:"Optional initial value",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Pass checked state",name:"checked",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:"Name attribute of the Radio element",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"undefined"},description:"Label text",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:{value:"undefined"},description:"Id",name:"id",required:!1,type:{name:"string"}},helptext:{defaultValue:{value:""},description:"Help text",name:"helptext",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Pass to disable the Radio",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Whether the Radio is required",name:"required",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the Radio is invalid",name:"invalid",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"Error text to be displayed. When passed, the Radio will automatically be invalidated.",name:"errortext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Whether the Radio is valid",name:"valid",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"Success text to be displayed when the Radio is valid. When passed, will set the radio to valid automatically.",name:"successtext",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"undefined"},description:"Pass a handler to the checkbox element",name:"onChange",required:!1,type:{name:"EventUpdateHandler"}}}}}catch{}const he={title:"Deprecated/RadioRow",component:oe,parameters:{docs:{description:{component:"DEPRECATED: A radio row containing a radio, associated label, and structural markup. This component is DEPRECATED, use Radio instead."}}},argTypes:{}},e={args:{label:"Default Radio Row",id:"radio-row-default"}},a={args:{label:"Checked Radio Row",checked:!0,id:"radio-row-checked"}},t={args:{name:"my-input",label:"Radio Row with help text",helptext:"Oh so helpful helptext",id:"radio-row-withHelptext"}},r={args:{name:"my-input",label:"Radio Row with help text",helptext:c.jsxs(c.Fragment,{children:["Helptext with a ",c.jsx("a",{href:"#",children:"Link"})]}),id:"radio-row-withHelptext-WithLink"}},i={args:{label:"Disabled Radio",id:"radio-row-disabled",disabled:!0}},o={args:{label:"Required Radio",id:"required-radio",required:!0}},s={args:{label:"Invalid Option",invalid:!0}},d={args:{label:"Option with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the RadioRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the RadioRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},l={args:{label:"Valid Option",valid:!0}},n={args:{label:"Radio validated by successtext",successtext:"Pass a successtext to validate a CheckboxRow"}};var u,m,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Default Radio Row",
    id: "radio-row-default"
  }
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var R,x,f;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Checked Radio Row",
    checked: true,
    id: "radio-row-checked"
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,b,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Radio Row with help text",
    helptext: "Oh so helpful helptext",
    id: "radio-row-withHelptext"
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,y,q;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Radio Row with help text",
    helptext: <>
        Helptext with a <a href="#">Link</a>
      </>,
    id: "radio-row-withHelptext-WithLink"
  }
}`,...(q=(y=r.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var k,W,V;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Disabled Radio",
    id: "radio-row-disabled",
    disabled: true
  }
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var T,D,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Required Radio",
    id: "required-radio",
    required: true
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var S,H,O;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Invalid Option",
    invalid: true
  }
}`,...(O=(H=s.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var _,C,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Option with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the RadioRow will be set to invalid automatically."
  },
  parameters: {
    docs: {
      description: {
        story: "Passing an \`errortext\` prop to the RadioRow component will automatically invalidate it, so there is no need to explicitly set \`invalid\` as well."
      }
    }
  }
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var N,L,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Valid Option",
    valid: true
  }
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var j,A,F;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Radio validated by successtext",
    successtext: "Pass a successtext to validate a CheckboxRow"
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Re=["Default","Checked","WithHelpText","WithHelpTextWithLink","Disabled","Required","Invalid","WithErrorText","Valid","WithSuccessText"];export{a as Checked,e as Default,i as Disabled,s as Invalid,o as Required,l as Valid,d as WithErrorText,t as WithHelpText,r as WithHelpTextWithLink,n as WithSuccessText,Re as __namedExportsOrder,he as default};
