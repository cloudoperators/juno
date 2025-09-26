import{r,e as ve,j as e}from"./iframe-BnBPAdQF.js";import{T as ye}from"./Textarea.component-BZFBcXF_.js";import{B as ge}from"./ButtonRow.component-BXa9OHaW.js";import{B as i}from"./Button.component-CdjD_WC_.js";import{F as j}from"./FormHint.component-BujjNtLd.js";import{S as be}from"./Stack.component-M8r1hD4L.js";import{L as xe}from"./Label.component-BIh9IGpA.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-BuxiMLAz.js";import"./Spinner.component-DaD25DGi.js";const Se=`
  jn:relative
`,Te=`
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
  jn:z-20
`,je=`
  jn:absolute
  jn:top-0
  jn:left-0
  jn:right-0
  jn:bottom-0
  jn:cursor-not-allowed
  jn:backdrop-blur-[4px]
  jn:bg-theme-background-lvl-2/30
  jn:z-10
  jn:flex
  jn:justify-center
  jn:items-center
`,qe=`
  jn:bg-theme-background-lvl-1
  jn:font-bold
  jn:px-3
  jn:py-1
  jn:rounded
`,we=`
  jn:break-all
  jn:min-h-[7.5rem]
`,q="",d=`
  jn:h-[1.875rem]
`,w=({autoComplete:C="off",className:Y="",clear:O=!0,copy:W=!0,copyConfirmtext:I="Secret copied to clipboard.",disableClear:D=!1,disableCopy:G=!1,disabled:s=!1,disablePaste:$=!1,disableToggle:_=!1,errortext:g,helptext:b,id:ee="",onBlur:N,onChange:Q,onClear:V,onCopy:X,onFocus:Z,onHide:P,onPaste:F,onReveal:R,onToggle:k,label:x,name:te,paste:ae=!0,placeholder:J="",readOnly:S=!1,required:re=!1,reveal:K=!1,successtext:T,toggle:se=!0,valid:ne=!1,invalid:le,value:U="",wrapperClassName:oe="",...ie})=>{const l=t=>!(typeof t=="string"&&t.trim().length===0),H=ee||"juno-secrettext-"+r.useId(),[n,E]=r.useState(!1),[a,o]=r.useState(""),[z,M]=r.useState(!1),[de,L]=r.useState(!1),B=ve.useRef(null);r.useEffect(()=>{E(K)},[K]),r.useEffect(()=>{o(U)},[U]);const ce=t=>{o(t.target.value),Q&&Q(t)},ue=()=>{n?P&&P():R&&R(),E(!n),k&&k()},pe=()=>{o(""),V&&V()},me=()=>{navigator.clipboard.writeText(a||"").then(()=>{M(!0),clearTimeout(B.current||void 0),B.current=window.setTimeout(()=>M(!1),1e3),X&&X(a)}).catch(()=>{console.warn("Failed to read clipboard.")})},he=()=>{navigator.clipboard.readText().then(t=>{o(t),F&&F(t)}).catch(()=>{console.warn("Failed to read clipboard.")})},fe=t=>{L(!0),Z&&Z(t)},Ae=t=>{L(!1),N&&N(t)};return e.jsxs("div",{className:`
        juno-secret-wrapper  
        ${oe}  
      `,children:[e.jsxs("div",{className:`
          juno-secret-wrapper-inner
          ${Se} 
        `,children:[x&&l(x)?e.jsx(xe,{className:`${Te}`,htmlFor:H,text:x,disabled:s,required:re,floating:!0,minimized:!!(J||de||a&&a.length)}):"",z||!n?e.jsx("div",{className:`juno-secret-cover ${je} `,children:z?e.jsx("span",{className:`juno-secret-copyconfirmmessage ${qe}`,children:I}):""}):"",e.jsx(ye,{autoComplete:C,className:`juno-secret-textarea jn:font-mono ${we} ${Y}`,disabled:s,id:H,invalid:le,name:te,onBlur:Ae,onChange:ce,onFocus:fe,placeholder:J,readOnly:S,valid:ne,value:a,...ie})]}),e.jsxs(be,{children:[e.jsxs("div",{className:"jn:grow",children:[g&&l(g)?e.jsx(j,{text:g,variant:"error",className:`${q}`}):"",T&&l(T)?e.jsx(j,{text:T,variant:"success",className:`${q}`}):"",b&&l(b)?e.jsx(j,{text:b,className:`${q}`}):""]}),e.jsxs(ge,{className:"jn-secret-actions jn:justify-self-end jn:mt-2",children:[O&&!S?e.jsx(i,{size:"small",className:`${d}`,onClick:pe,disabled:s||D||!a.length?!0:void 0,title:"Clear",children:"Clear"}):"",se?e.jsx(i,{size:"small",className:`${d}`,onClick:ue,title:n?"Hide":"Reveal",disabled:s||_?!0:void 0,children:n?"Hide":"Reveal"}):"",W?e.jsx(i,{size:"small",className:`${d}`,onClick:me,disabled:s||G||!a.length?!0:void 0,title:"Copy",children:"Copy"}):"",ae&&!S?e.jsx(i,{size:"small",className:`${d}`,onClick:he,title:"Paste",disabled:s||$?!0:void 0,children:"Paste"}):""]})]})]})};try{w.displayName="SecretText",w.__docgenInfo={description:"A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed.",displayName:"SecretText",props:{autoComplete:{defaultValue:{value:"off"},description:"Whether the secret field should autocomplete.",name:"autoComplete",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom className to the Secret input field.",name:"className",required:!1,type:{name:"string"}},clear:{defaultValue:{value:"true"},description:"Whether the Clear button is rendered.",name:"clear",required:!1,type:{name:"boolean"}},copy:{defaultValue:{value:"true"},description:"Whether the Copy button is rendered.",name:"copy",required:!1,type:{name:"boolean"}},copyConfirmtext:{defaultValue:{value:"Secret copied to clipboard."},description:"A small text to display for a second to confirm the secret's content was copied to the clipboard.",name:"copyConfirmtext",required:!1,type:{name:"string"}},disableClear:{defaultValue:{value:"false"},description:"Disable the Clear button",name:"disableClear",required:!1,type:{name:"boolean"}},disableCopy:{defaultValue:{value:"false"},description:"Disable the Copy button",name:"disableCopy",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the Secret's input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disablePaste:{defaultValue:{value:"false"},description:"Disable the Paste button",name:"disablePaste",required:!1,type:{name:"boolean"}},disableToggle:{defaultValue:{value:"false"},description:"Disable the Hide/Reveal button",name:"disableToggle",required:!1,type:{name:"boolean"}},errortext:{defaultValue:null,description:"A small text to display information regarding any errors in the context of the Secret.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:null,description:"A small text to display giving more information and context about the Secret.",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"Pass an id",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Whether the Secret's content is invalid.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"A label to display above the SecretText's textarea.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the SecretText's textarea.",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"A handler to execute when the Secret's input area looses focus.",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"A handler to execute when the Secret's content changes.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}},onClear:{defaultValue:null,description:"A handler to execute when the user clears the Secret's content using the Clear button.",name:"onClear",required:!1,type:{name:"(() => void)"}},onCopy:{defaultValue:null,description:"A handler to execute when the user copies the Secret's content to the clipboard.",name:"onCopy",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"A handler to execute when the SecretText textarea receives focus",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onHide:{defaultValue:null,description:"A handler to execute when the user hides the Secret's content.",name:"onHide",required:!1,type:{name:"(() => void)"}},onPaste:{defaultValue:null,description:"A handler to execute when the user pastes text from the clipboard into the SecretText.",name:"onPaste",required:!1,type:{name:"((value: string) => void)"}},onReveal:{defaultValue:null,description:"A handler to execute when the user reveals the Secret's content.",name:"onReveal",required:!1,type:{name:"(() => void)"}},onToggle:{defaultValue:null,description:"A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden.",name:"onToggle",required:!1,type:{name:"(() => void)"}},paste:{defaultValue:{value:"true"},description:"Whether a button to paste text content even in hidden mode is rendered.",name:"paste",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"Pass a placeholder to the SecretText's textarea",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"Whether the SecretText content is read only, i.e. can not be edited..",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.",name:"required",required:!1,type:{name:"boolean"}},reveal:{defaultValue:{value:"false"},description:"Whether the secret's content is revealed / legible.",name:"reveal",required:!1,type:{name:"boolean"}},successtext:{defaultValue:null,description:"A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.",name:"successtext",required:!1,type:{name:"ReactNode"}},toggle:{defaultValue:{value:"true"},description:"Whether a button to toggle visibility of the SecretText's content should be rendered.",name:"toggle",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the Secret's content was successfully validated.",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"The value of the SecretText, i.e. the Secret's content.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a className to the outer wrapper element",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}const Ke={title:"Forms/SecretText",component:w,argTypes:{onBlur:{control:!1},onChange:{control:!1},onClear:{control:!1},onCopy:{control:!1},onFocus:{control:!1},onHide:{control:!1},onPaste:{control:!1},onReveal:{control:!1},onToggle:{control:!1}}},c={args:{}},u={args:{value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},p={args:{reveal:!0,value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"},parameters:{docs:{description:{story:"Set `reveal` to `true` to show the SecretText's content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."}}}},m={args:{label:"Secret things"}},h={args:{label:"Secret things",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},f={args:{required:!0,label:"Secret things"}},A={args:{value:"It's a secret.",clear:!1,toggle:!1,paste:!1}},v={args:{disabled:!0}},y={parameters:{docs:{description:{story:"Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."}}},args:{readOnly:!0,disablePaste:!0,label:"Read Only Secret",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",helptext:"This secret text can not be edited."}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secret things"
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secret things",
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: "Secret things"
  }
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    value: "It's a secret.",
    clear: false,
    toggle: false,
    paste: false
  }
}`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`readOnly\` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."
      }
    }
  },
  args: {
    readOnly: true,
    disablePaste: true,
    label: "Read Only Secret",
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",
    helptext: "This secret text can not be edited."
  }
}`,...y.parameters?.docs?.source}}};const Ue=["Default","WithValue","RevealWithValue","WithLabel","WithValueWithLabel","RequiredWithLabel","NoClearNoToggleNoPaste","Disabled","ReadOnly"];export{c as Default,v as Disabled,A as NoClearNoToggleNoPaste,y as ReadOnly,f as RequiredWithLabel,p as RevealWithValue,m as WithLabel,u as WithValue,h as WithValueWithLabel,Ue as __namedExportsOrder,Ke as default};
