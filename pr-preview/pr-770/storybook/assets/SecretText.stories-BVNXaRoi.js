import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as n,e as Be}from"./index-DysCNOs_.js";import{T as Ye}from"./Textarea.component-DpPHBnB1.js";import{B as Oe}from"./ButtonRow.component-CbUzWAno.js";import{B as c}from"./Button.component-hu71_onW.js";import{F as C}from"./FormHint.component-Bac6eIcI.js";import{S as Ie}from"./Stack.component-Cte3SL04.js";import{L as We}from"./Label.component-B3thB2lY.js";import"./Icon.component-BeY45KNK.js";import"./widgets-BR6-ubtP.js";import"./Spinner.component-BpiUnySA.js";const De=`
  jn-relative
`,Ge=`
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
  jn-pr-4
  jn-bg-theme-textinput
  jn-z-20
`,$e=`
  jn-absolute
  jn-top-0
  jn-left-0
  jn-right-0
  jn-bottom-0
  jn-cursor-not-allowed
  jn-backdrop-blur-[4px]
  jn-bg-theme-background-lvl-2/30
  jn-z-10
  jn-flex
  jn-justify-center
  jn-items-center
`,_e=`
  jn-bg-theme-background-lvl-1
  jn-font-bold
  jn-px-3
  jn-py-1
  jn-rounded
`,et=`
  jn-break-all
  jn-min-h-[7.5rem]
`,N="",u=`
  jn-h-[1.875rem]
`,b=({autoComplete:o="off",className:xe="",clear:be=!0,copy:Te=!0,copyConfirmtext:Se="Secret copied to clipboard.",disableClear:je=!1,disableCopy:qe=!1,disabled:s=!1,disablePaste:we=!1,disableToggle:Ce=!1,errortext:T,helptext:S,id:Ne="",onBlur:Q,onChange:V,onClear:X,onCopy:Z,onFocus:P,onHide:F,onPaste:R,onReveal:k,onToggle:J,label:j,name:Qe,paste:Ve=!0,placeholder:K="",readOnly:q=!1,required:Xe=!1,reveal:U=!1,successtext:w,toggle:Ze=!0,valid:Pe=!1,invalid:Fe,value:H="",wrapperClassName:Re="",...ke})=>{const i=t=>!(typeof t=="string"&&t.trim().length===0),E=Ne||"juno-secrettext-"+n.useId(),[l,z]=n.useState(!1),[r,d]=n.useState(""),[M,L]=n.useState(!1),[Je,B]=n.useState(!1),Y=Be.useRef(null);n.useEffect(()=>{z(U)},[U]),n.useEffect(()=>{d(H)},[H]);const Ke=t=>{d(t.target.value),V&&V(t)},Ue=()=>{l?F&&F():k&&k(),z(!l),J&&J()},He=()=>{d(""),X&&X()},Ee=()=>{navigator.clipboard.writeText(r||"").then(()=>{L(!0),clearTimeout(Y.current||void 0),Y.current=window.setTimeout(()=>L(!1),1e3),Z&&Z(r)}).catch(()=>{console.warn("Failed to read clipboard.")})},ze=()=>{navigator.clipboard.readText().then(t=>{d(t),R&&R(t)}).catch(()=>{console.warn("Failed to read clipboard.")})},Me=t=>{B(!0),P&&P(t)},Le=t=>{B(!1),Q&&Q(t)};return e.jsxs("div",{className:`
        juno-secret-wrapper  
        ${Re}  
      `,children:[e.jsxs("div",{className:`
          juno-secret-wrapper-inner
          ${De} 
        `,children:[j&&i(j)?e.jsx(We,{className:`${Ge}`,htmlFor:E,text:j,disabled:s,required:Xe,floating:!0,minimized:!!(K||Je||r&&r.length)}):"",M||!l?e.jsx("div",{className:`juno-secret-cover ${$e} `,children:M?e.jsx("span",{className:`juno-secret-copyconfirmmessage ${_e}`,children:Se}):""}):"",e.jsx(Ye,{autoComplete:o,className:`juno-secret-textarea jn-font-mono ${et} ${xe}`,disabled:s,id:E,invalid:Fe,name:Qe,onBlur:Le,onChange:Ke,onFocus:Me,placeholder:K,readOnly:q,valid:Pe,value:r,...ke})]}),e.jsxs(Ie,{children:[e.jsxs("div",{className:"jn-grow",children:[T&&i(T)?e.jsx(C,{text:T,variant:"error",className:`${N}`}):"",w&&i(w)?e.jsx(C,{text:w,variant:"success",className:`${N}`}):"",S&&i(S)?e.jsx(C,{text:S,className:`${N}`}):""]}),e.jsxs(Oe,{className:"jn-secret-actions jn-justify-self-end jn-mt-2",children:[be&&!q?e.jsx(c,{size:"small",className:`${u}`,onClick:He,disabled:s||je||!r.length?!0:void 0,title:"Clear",children:"Clear"}):"",Ze?e.jsx(c,{size:"small",className:`${u}`,onClick:Ue,title:l?"Hide":"Reveal",disabled:s||Ce?!0:void 0,children:l?"Hide":"Reveal"}):"",Te?e.jsx(c,{size:"small",className:`${u}`,onClick:Ee,disabled:s||qe||!r.length?!0:void 0,title:"Copy",children:"Copy"}):"",Ve&&!q?e.jsx(c,{size:"small",className:`${u}`,onClick:ze,title:"Paste",disabled:s||we?!0:void 0,children:"Paste"}):""]})]})]})};try{b.displayName="SecretText",b.__docgenInfo={description:"A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed.",displayName:"SecretText",props:{autoComplete:{defaultValue:{value:"off"},description:"Whether the secret field should autocomplete.",name:"autoComplete",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom className to the Secret input field.",name:"className",required:!1,type:{name:"string"}},clear:{defaultValue:{value:"true"},description:"Whether the Clear button is rendered.",name:"clear",required:!1,type:{name:"boolean"}},copy:{defaultValue:{value:"true"},description:"Whether the Copy button is rendered.",name:"copy",required:!1,type:{name:"boolean"}},copyConfirmtext:{defaultValue:{value:"Secret copied to clipboard."},description:"A small text to display for a second to confirm the secret's content was copied to the clipboard.",name:"copyConfirmtext",required:!1,type:{name:"string"}},disableClear:{defaultValue:{value:"false"},description:"Disable the Clear button",name:"disableClear",required:!1,type:{name:"boolean"}},disableCopy:{defaultValue:{value:"false"},description:"Disable the Copy button",name:"disableCopy",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the Secret's input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disablePaste:{defaultValue:{value:"false"},description:"Disable the Paste button",name:"disablePaste",required:!1,type:{name:"boolean"}},disableToggle:{defaultValue:{value:"false"},description:"Disable the Hide/Reveal button",name:"disableToggle",required:!1,type:{name:"boolean"}},errortext:{defaultValue:null,description:"A small text to display information regarding any errors in the context of the Secret.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:null,description:"A small text to display giving more information and context about the Secret.",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"Pass an id",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Whether the Secret's content is invalid.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"A label to display above the SecretText's textarea.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the SecretText's textarea.",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"A handler to execute when the Secret's input area looses focus.",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"A handler to execute when the Secret's content changes.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}},onClear:{defaultValue:null,description:"A handler to execute when the user clears the Secret's content using the Clear button.",name:"onClear",required:!1,type:{name:"(() => void)"}},onCopy:{defaultValue:null,description:"A handler to execute when the user copies the Secret's content to the clipboard.",name:"onCopy",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"A handler to execute when the SecretText textarea receives focus",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onHide:{defaultValue:null,description:"A handler to execute when the user hides the Secret's content.",name:"onHide",required:!1,type:{name:"(() => void)"}},onPaste:{defaultValue:null,description:"A handler to execute when the user pastes text from the clipboard into the SecretText.",name:"onPaste",required:!1,type:{name:"((value: string) => void)"}},onReveal:{defaultValue:null,description:"A handler to execute when the user reveals the Secret's content.",name:"onReveal",required:!1,type:{name:"(() => void)"}},onToggle:{defaultValue:null,description:"A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden.",name:"onToggle",required:!1,type:{name:"(() => void)"}},paste:{defaultValue:{value:"true"},description:"Whether a button to paste text content even in hidden mode is rendered.",name:"paste",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"Pass a placeholder to the SecretText's textarea",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"Whether the SecretText content is read only, i.e. can not be edited..",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.",name:"required",required:!1,type:{name:"boolean"}},reveal:{defaultValue:{value:"false"},description:"Whether the secret's content is revealed / legible.",name:"reveal",required:!1,type:{name:"boolean"}},successtext:{defaultValue:null,description:"A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.",name:"successtext",required:!1,type:{name:"ReactNode"}},toggle:{defaultValue:{value:"true"},description:"Whether a button to toggle visibility of the SecretText's content should be rendered.",name:"toggle",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the Secret's content was successfully validated.",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"The value of the SecretText, i.e. the Secret's content.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a className to the outer wrapper element",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}const mt={title:"Forms/SecretText",component:b,argTypes:{onBlur:{control:!1},onChange:{control:!1},onClear:{control:!1},onCopy:{control:!1},onFocus:{control:!1},onHide:{control:!1},onPaste:{control:!1},onReveal:{control:!1},onToggle:{control:!1}}},a=({...o})=>e.jsx(b,{...o}),p={render:a,args:{}},m={render:a,args:{value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},h={render:a,args:{reveal:!0,value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"},parameters:{docs:{description:{story:"Set `reveal` to `true` to show the SecretText's content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."}}}},f={render:a,args:{label:"Secret things"}},A={render:a,args:{label:"Secret things",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},v={render:a,args:{required:!0,label:"Secret things"}},y={render:a,args:{value:"It's a secret.",clear:!1,toggle:!1,paste:!1}},g={render:a,args:{disabled:!0}},x={parameters:{docs:{description:{story:"Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."}}},render:a,args:{readOnly:!0,disablePaste:!0,label:"Read Only Secret",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",helptext:"This secret text can not be edited."}};var O,I,W;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(W=(I=p.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var D,G,$;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...($=(G=m.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var _,ee,te;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    reveal: true,
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  },
  parameters: {
    docs: {
      description: {
        story: "Set \`reveal\` to \`true\` to show the SecretText's content. When \`reveal\` is set to true, the SecretText can be edited unless et to \`readOnly\`."
      }
    }
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,ne;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Secret things"
  }
}`,...(ne=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,le,oe;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Secret things",
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...(oe=(le=A.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,de,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    required: true,
    label: "Secret things"
  }
}`,...(ce=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,me;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: "It's a secret.",
    clear: false,
    toggle: false,
    paste: false
  }
}`,...(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,Ae;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true
  }
}`,...(Ae=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var ve,ye,ge;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`readOnly\` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."
      }
    }
  },
  render: Template,
  args: {
    readOnly: true,
    disablePaste: true,
    label: "Read Only Secret",
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
    helptext: "This secret text can not be edited."
  }
}`,...(ge=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};const ht=["Default","withValue","revealWithValue","WithLabel","WithValueWithLabel","RequiredWithLabel","NoClearNoToggleNoPaste","Disabled","ReadOnly"];export{p as Default,g as Disabled,y as NoClearNoToggleNoPaste,x as ReadOnly,v as RequiredWithLabel,f as WithLabel,A as WithValueWithLabel,ht as __namedExportsOrder,mt as default,h as revealWithValue,m as withValue};
