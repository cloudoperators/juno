import{r,e as Le,j as e}from"./iframe-357CoNpC.js";import{T as Be}from"./Textarea.component-CoyMRDxi.js";import{B as Ye}from"./ButtonRow.component-D8wML4_M.js";import{B as i}from"./Button.component-BR3W8M4E.js";import{F as j}from"./FormHint.component-D-OhGCsj.js";import{S as Oe}from"./Stack.component-CcT0fif7.js";import{L as We}from"./Label.component-jVgqyWPH.js";import"./Icon.component-BneaDTI7.js";import"./Spinner.component-Ce7rUs3m.js";const Ie=`
  jn:relative
`,De=`
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
  jn:z-20
`,Ge=`
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
`,$e=`
  jn:bg-theme-background-lvl-1
  jn:font-bold
  jn:px-3
  jn:py-1
  jn:rounded
`,_e=`
  jn:break-all
  jn:min-h-[7.5rem]
`,q="",d=`
  jn:h-[1.875rem]
`,w=({autoComplete:C="off",className:ge="",clear:be=!0,copy:xe=!0,copyConfirmtext:Se="Secret copied to clipboard.",disableClear:Te=!1,disableCopy:je=!1,disabled:s=!1,disablePaste:qe=!1,disableToggle:we=!1,errortext:g,helptext:b,id:Ce="",onBlur:N,onChange:Q,onClear:V,onCopy:X,onFocus:Z,onHide:P,onPaste:F,onReveal:R,onToggle:k,label:x,name:Ne,paste:Qe=!0,placeholder:J="",readOnly:S=!1,required:Ve=!1,reveal:K=!1,successtext:T,toggle:Xe=!0,valid:Ze=!1,invalid:Pe,value:U="",wrapperClassName:Fe="",...Re})=>{const l=t=>!(typeof t=="string"&&t.trim().length===0),H=Ce||"juno-secrettext-"+r.useId(),[n,E]=r.useState(!1),[a,o]=r.useState(""),[z,M]=r.useState(!1),[ke,L]=r.useState(!1),B=Le.useRef(null);r.useEffect(()=>{E(K)},[K]),r.useEffect(()=>{o(U)},[U]);const Je=t=>{o(t.target.value),Q&&Q(t)},Ke=()=>{n?P&&P():R&&R(),E(!n),k&&k()},Ue=()=>{o(""),V&&V()},He=()=>{navigator.clipboard.writeText(a||"").then(()=>{M(!0),clearTimeout(B.current||void 0),B.current=window.setTimeout(()=>M(!1),1e3),X&&X(a)}).catch(()=>{console.warn("Failed to read clipboard.")})},Ee=()=>{navigator.clipboard.readText().then(t=>{o(t),F&&F(t)}).catch(()=>{console.warn("Failed to read clipboard.")})},ze=t=>{L(!0),Z&&Z(t)},Me=t=>{L(!1),N&&N(t)};return e.jsxs("div",{className:`
        juno-secret-wrapper  
        ${Fe}  
      `,children:[e.jsxs("div",{className:`
          juno-secret-wrapper-inner
          ${Ie} 
        `,children:[x&&l(x)?e.jsx(We,{className:`${De}`,htmlFor:H,text:x,disabled:s,required:Ve,floating:!0,minimized:!!(J||ke||a&&a.length)}):"",z||!n?e.jsx("div",{className:`juno-secret-cover ${Ge} `,children:z?e.jsx("span",{className:`juno-secret-copyconfirmmessage ${$e}`,children:Se}):""}):"",e.jsx(Be,{autoComplete:C,className:`juno-secret-textarea jn:font-mono ${_e} ${ge}`,disabled:s,id:H,invalid:Pe,name:Ne,onBlur:Me,onChange:Je,onFocus:ze,placeholder:J,readOnly:S,valid:Ze,value:a,...Re})]}),e.jsxs(Oe,{children:[e.jsxs("div",{className:"jn:grow",children:[g&&l(g)?e.jsx(j,{text:g,variant:"error",className:`${q}`}):"",T&&l(T)?e.jsx(j,{text:T,variant:"success",className:`${q}`}):"",b&&l(b)?e.jsx(j,{text:b,className:`${q}`}):""]}),e.jsxs(Ye,{className:"jn-secret-actions jn:justify-self-end jn:mt-2",children:[be&&!S?e.jsx(i,{size:"small",className:`${d}`,onClick:Ue,disabled:s||Te||!a.length?!0:void 0,title:"Clear",children:"Clear"}):"",Xe?e.jsx(i,{size:"small",className:`${d}`,onClick:Ke,title:n?"Hide":"Reveal",disabled:s||we?!0:void 0,children:n?"Hide":"Reveal"}):"",xe?e.jsx(i,{size:"small",className:`${d}`,onClick:He,disabled:s||je||!a.length?!0:void 0,title:"Copy",children:"Copy"}):"",Qe&&!S?e.jsx(i,{size:"small",className:`${d}`,onClick:Ee,title:"Paste",disabled:s||qe?!0:void 0,children:"Paste"}):""]})]})]})};try{w.displayName="SecretText",w.__docgenInfo={description:"A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed.",displayName:"SecretText",props:{autoComplete:{defaultValue:{value:"off"},description:"Whether the secret field should autocomplete.",name:"autoComplete",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom className to the Secret input field.",name:"className",required:!1,type:{name:"string"}},clear:{defaultValue:{value:"true"},description:"Whether the Clear button is rendered.",name:"clear",required:!1,type:{name:"boolean"}},copy:{defaultValue:{value:"true"},description:"Whether the Copy button is rendered.",name:"copy",required:!1,type:{name:"boolean"}},copyConfirmtext:{defaultValue:{value:"Secret copied to clipboard."},description:"A small text to display for a second to confirm the secret's content was copied to the clipboard.",name:"copyConfirmtext",required:!1,type:{name:"string"}},disableClear:{defaultValue:{value:"false"},description:"Disable the Clear button",name:"disableClear",required:!1,type:{name:"boolean"}},disableCopy:{defaultValue:{value:"false"},description:"Disable the Copy button",name:"disableCopy",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the Secret's input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disablePaste:{defaultValue:{value:"false"},description:"Disable the Paste button",name:"disablePaste",required:!1,type:{name:"boolean"}},disableToggle:{defaultValue:{value:"false"},description:"Disable the Hide/Reveal button",name:"disableToggle",required:!1,type:{name:"boolean"}},errortext:{defaultValue:null,description:"A small text to display information regarding any errors in the context of the Secret.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:null,description:"A small text to display giving more information and context about the Secret.",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"Pass an id",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Whether the Secret's content is invalid.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"A label to display above the SecretText's textarea.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the SecretText's textarea.",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"A handler to execute when the Secret's input area looses focus.",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"A handler to execute when the Secret's content changes.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}},onClear:{defaultValue:null,description:"A handler to execute when the user clears the Secret's content using the Clear button.",name:"onClear",required:!1,type:{name:"(() => void)"}},onCopy:{defaultValue:null,description:"A handler to execute when the user copies the Secret's content to the clipboard.",name:"onCopy",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"A handler to execute when the SecretText textarea receives focus",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onHide:{defaultValue:null,description:"A handler to execute when the user hides the Secret's content.",name:"onHide",required:!1,type:{name:"(() => void)"}},onPaste:{defaultValue:null,description:"A handler to execute when the user pastes text from the clipboard into the SecretText.",name:"onPaste",required:!1,type:{name:"((value: string) => void)"}},onReveal:{defaultValue:null,description:"A handler to execute when the user reveals the Secret's content.",name:"onReveal",required:!1,type:{name:"(() => void)"}},onToggle:{defaultValue:null,description:"A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden.",name:"onToggle",required:!1,type:{name:"(() => void)"}},paste:{defaultValue:{value:"true"},description:"Whether a button to paste text content even in hidden mode is rendered.",name:"paste",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"Pass a placeholder to the SecretText's textarea",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"Whether the SecretText content is read only, i.e. can not be edited..",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.",name:"required",required:!1,type:{name:"boolean"}},reveal:{defaultValue:{value:"false"},description:"Whether the secret's content is revealed / legible.",name:"reveal",required:!1,type:{name:"boolean"}},successtext:{defaultValue:null,description:"A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.",name:"successtext",required:!1,type:{name:"ReactNode"}},toggle:{defaultValue:{value:"true"},description:"Whether a button to toggle visibility of the SecretText's content should be rendered.",name:"toggle",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the Secret's content was successfully validated.",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"The value of the SecretText, i.e. the Secret's content.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a className to the outer wrapper element",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}const ct={title:"Forms/SecretText",component:w,argTypes:{onBlur:{control:!1},onChange:{control:!1},onClear:{control:!1},onCopy:{control:!1},onFocus:{control:!1},onHide:{control:!1},onPaste:{control:!1},onReveal:{control:!1},onToggle:{control:!1}}},c={args:{}},u={args:{value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},p={args:{reveal:!0,value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"},parameters:{docs:{description:{story:"Set `reveal` to `true` to show the SecretText's content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."}}}},m={args:{label:"Secret things"}},h={args:{label:"Secret things",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"}},f={args:{required:!0,label:"Secret things"}},A={args:{value:"It's a secret.",clear:!1,toggle:!1,paste:!1}},v={args:{disabled:!0}},y={parameters:{docs:{description:{story:"Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."}}},args:{readOnly:!0,disablePaste:!0,label:"Read Only Secret",value:"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm",helptext:"This secret text can not be edited."}};var Y,O,W;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {}
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var I,D,G;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...(G=(D=u.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var $,_,ee;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ee=(_=p.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,ae,re;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: "Secret things"
  }
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,le;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: "Secret things",
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ie,de;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    required: true,
    label: "Secret things"
  }
}`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,pe;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    value: "It's a secret.",
    clear: false,
    toggle: false,
    paste: false
  }
}`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,fe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(fe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Ae,ve,ye;y.parameters={...y.parameters,docs:{...(Ae=y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(ye=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const ut=["Default","WithValue","RevealWithValue","WithLabel","WithValueWithLabel","RequiredWithLabel","NoClearNoToggleNoPaste","Disabled","ReadOnly"];export{c as Default,v as Disabled,A as NoClearNoToggleNoPaste,y as ReadOnly,f as RequiredWithLabel,p as RevealWithValue,m as WithLabel,u as WithValue,h as WithValueWithLabel,ut as __namedExportsOrder,ct as default};
