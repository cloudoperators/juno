import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Stack.component-O2Jjm6dw.js";import"./Stack-LLgz_L3W.js";import{t as i}from"./Button.component-J1fJR8AZ.js";import"./Button-DFKvvwdO.js";import{t as ee}from"./ButtonRow.component-D4LFaHbK.js";import"./ButtonRow-DZhlvLNZ.js";import{t as a}from"./Label.component-3mysfpZZ.js";import"./Label-BqZqxTuH.js";import{t as o}from"./FormHint.component-DOXQVwyU.js";import"./FormHint-CKFGCT8Z.js";import{t as te}from"./Textarea.component-shFh0cif.js";import"./Textarea-X4IY0JQD.js";var s=e(t()),c=n(),l=`
  jn:relative
`,u=`
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
  jn:z-20
`,ne=`
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
`,re=`
  jn:bg-theme-background-lvl-1
  jn:font-bold
  jn:px-3
  jn:py-1
  jn:rounded
`,ie=`
  jn:break-all
  jn:min-h-[7.5rem]
`,d=``,f=`
  jn:h-[1.875rem]
`,p=({autoComplete:e=`off`,className:t=``,clear:n=!0,copy:p=!0,copyConfirmtext:m=`Secret copied to clipboard.`,disableClear:h=!1,disableCopy:g=!1,disabled:_=!1,disablePaste:v=!1,disableToggle:y=!1,errortext:b,helptext:x,id:S=``,onBlur:C,onChange:w,onClear:T,onCopy:E,onFocus:D,onHide:O,onPaste:k,onReveal:A,onToggle:j,label:M,name:ae,paste:N=!0,placeholder:P=``,readOnly:F=!1,required:oe=!1,reveal:I=!1,successtext:L,toggle:R=!0,valid:z=!1,invalid:B,value:V=``,wrapperClassName:H=``,...U})=>{let W=e=>!(typeof e==`string`&&e.trim().length===0),G=S||`juno-secrettext-`+(0,s.useId)(),[K,q]=(0,s.useState)(!1),[J,Y]=(0,s.useState)(``),[X,Z]=(0,s.useState)(!1),[se,Q]=(0,s.useState)(!1),$=(0,s.useRef)(null);(0,s.useEffect)(()=>{q(I)},[I]),(0,s.useEffect)(()=>{Y(V)},[V]);let ce=e=>{Y(e.target.value),w&&w(e)},le=()=>{K?O&&O():A&&A(),q(!K),j&&j()},ue=()=>{Y(``),T&&T()},de=()=>{navigator.clipboard.writeText(J||``).then(()=>{Z(!0),clearTimeout($.current||void 0),$.current=window.setTimeout(()=>Z(!1),1e3),E&&E(J)}).catch(()=>{console.warn(`Failed to read clipboard.`)})},fe=()=>{navigator.clipboard.readText().then(e=>{Y(e),k&&k(e)}).catch(()=>{console.warn(`Failed to read clipboard.`)})};return(0,c.jsxs)(`div`,{className:`
        juno-secret-wrapper  
        ${H}  
      `,children:[(0,c.jsxs)(`div`,{className:`
          juno-secret-wrapper-inner
          ${l} 
        `,children:[M&&W(M)?(0,c.jsx)(a,{className:`${u}`,htmlFor:G,text:M,disabled:_,required:oe,floating:!0,minimized:!!(P||se||J&&J.length)}):``,X||!K?(0,c.jsx)(`div`,{className:`juno-secret-cover ${ne} `,children:X?(0,c.jsx)(`span`,{className:`juno-secret-copyconfirmmessage ${re}`,children:m}):``}):``,(0,c.jsx)(te,{autoComplete:e,className:`juno-secret-textarea jn:font-mono ${ie} ${t}`,disabled:_,id:G,invalid:B,name:ae,onBlur:e=>{Q(!1),C&&C(e)},onChange:ce,onFocus:e=>{Q(!0),D&&D(e)},placeholder:P,readOnly:F,valid:z,value:J,...U})]}),(0,c.jsxs)(r,{children:[(0,c.jsxs)(`div`,{className:`jn:grow`,children:[b&&W(b)?(0,c.jsx)(o,{text:b,variant:`error`,className:`${d}`}):``,L&&W(L)?(0,c.jsx)(o,{text:L,variant:`success`,className:`${d}`}):``,x&&W(x)?(0,c.jsx)(o,{text:x,className:`${d}`}):``]}),(0,c.jsxs)(ee,{className:`jn-secret-actions jn:justify-self-end jn:mt-2`,children:[n&&!F?(0,c.jsx)(i,{size:`small`,className:`${f}`,onClick:ue,disabled:_||h||!J.length?!0:void 0,title:`Clear`,children:`Clear`}):``,R?(0,c.jsx)(i,{size:`small`,className:`${f}`,onClick:le,title:K?`Hide`:`Reveal`,disabled:_||y?!0:void 0,children:K?`Hide`:`Reveal`}):``,p?(0,c.jsx)(i,{size:`small`,className:`${f}`,onClick:de,disabled:_||g||!J.length?!0:void 0,title:`Copy`,children:`Copy`}):``,N&&!F?(0,c.jsx)(i,{size:`small`,className:`${f}`,onClick:fe,title:`Paste`,disabled:_||v?!0:void 0,children:`Paste`}):``]})]})]})};try{p.displayName=`SecretText`,p.__docgenInfo={description:`A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed.`,displayName:`SecretText`,props:{autoComplete:{defaultValue:{value:`off`},description:`Whether the secret field should autocomplete.`,name:`autoComplete`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Pass a custom className to the Secret input field.`,name:`className`,required:!1,type:{name:`string`}},clear:{defaultValue:{value:`true`},description:`Whether the Clear button is rendered.`,name:`clear`,required:!1,type:{name:`boolean`}},copy:{defaultValue:{value:`true`},description:`Whether the Copy button is rendered.`,name:`copy`,required:!1,type:{name:`boolean`}},copyConfirmtext:{defaultValue:{value:`Secret copied to clipboard.`},description:`A small text to display for a second to confirm the secret's content was copied to the clipboard.`,name:`copyConfirmtext`,required:!1,type:{name:`string`}},disableClear:{defaultValue:{value:`false`},description:`Disable the Clear button`,name:`disableClear`,required:!1,type:{name:`boolean`}},disableCopy:{defaultValue:{value:`false`},description:`Disable the Copy button`,name:`disableCopy`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},description:`Whether the Secret's input is disabled.`,name:`disabled`,required:!1,type:{name:`boolean`}},disablePaste:{defaultValue:{value:`false`},description:`Disable the Paste button`,name:`disablePaste`,required:!1,type:{name:`boolean`}},disableToggle:{defaultValue:{value:`false`},description:`Disable the Hide/Reveal button`,name:`disableToggle`,required:!1,type:{name:`boolean`}},errortext:{defaultValue:null,description:`A small text to display information regarding any errors in the context of the Secret.`,name:`errortext`,required:!1,type:{name:`ReactNode`}},helptext:{defaultValue:null,description:`A small text to display giving more information and context about the Secret.`,name:`helptext`,required:!1,type:{name:`ReactNode`}},id:{defaultValue:{value:``},description:`Pass an id`,name:`id`,required:!1,type:{name:`string`}},invalid:{defaultValue:null,description:`Whether the Secret's content is invalid.`,name:`invalid`,required:!1,type:{name:`boolean`}},label:{defaultValue:null,description:`A label to display above the SecretText's textarea.`,name:`label`,required:!1,type:{name:`string`}},name:{defaultValue:null,description:`The name of the SecretText's textarea.`,name:`name`,required:!1,type:{name:`string`}},onBlur:{defaultValue:null,description:`A handler to execute when the Secret's input area looses focus.`,name:`onBlur`,required:!1,type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},onChange:{defaultValue:null,description:`A handler to execute when the Secret's content changes.`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLTextAreaElement>`}},onClear:{defaultValue:null,description:`A handler to execute when the user clears the Secret's content using the Clear button.`,name:`onClear`,required:!1,type:{name:`(() => void)`}},onCopy:{defaultValue:null,description:`A handler to execute when the user copies the Secret's content to the clipboard.`,name:`onCopy`,required:!1,type:{name:`((value: string) => void)`}},onFocus:{defaultValue:null,description:`A handler to execute when the SecretText textarea receives focus`,name:`onFocus`,required:!1,type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},onHide:{defaultValue:null,description:`A handler to execute when the user hides the Secret's content.`,name:`onHide`,required:!1,type:{name:`(() => void)`}},onPaste:{defaultValue:null,description:`A handler to execute when the user pastes text from the clipboard into the SecretText.`,name:`onPaste`,required:!1,type:{name:`((value: string) => void)`}},onReveal:{defaultValue:null,description:`A handler to execute when the user reveals the Secret's content.`,name:`onReveal`,required:!1,type:{name:`(() => void)`}},onToggle:{defaultValue:null,description:`A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden.`,name:`onToggle`,required:!1,type:{name:`(() => void)`}},paste:{defaultValue:{value:`true`},description:`Whether a button to paste text content even in hidden mode is rendered.`,name:`paste`,required:!1,type:{name:`boolean`}},placeholder:{defaultValue:{value:``},description:`Pass a placeholder to the SecretText's textarea`,name:`placeholder`,required:!1,type:{name:`string`}},readOnly:{defaultValue:{value:`false`},description:`Whether the SecretText content is read only, i.e. can not be edited..`,name:`readOnly`,required:!1,type:{name:`boolean`}},required:{defaultValue:{value:`false`},description:"Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.",name:`required`,required:!1,type:{name:`boolean`}},reveal:{defaultValue:{value:`false`},description:`Whether the secret's content is revealed / legible.`,name:`reveal`,required:!1,type:{name:`boolean`}},successtext:{defaultValue:null,description:`A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.`,name:`successtext`,required:!1,type:{name:`ReactNode`}},toggle:{defaultValue:{value:`true`},description:`Whether a button to toggle visibility of the SecretText's content should be rendered.`,name:`toggle`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Whether the Secret's content was successfully validated.`,name:`valid`,required:!1,type:{name:`boolean`}},value:{defaultValue:{value:``},description:`The value of the SecretText, i.e. the Secret's content.`,name:`value`,required:!1,type:{name:`string`}},wrapperClassName:{defaultValue:{value:``},description:`Pass a className to the outer wrapper element`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}var m={title:`Forms/SecretText`,component:p,argTypes:{onBlur:{control:!1},onChange:{control:!1},onClear:{control:!1},onCopy:{control:!1},onFocus:{control:!1},onHide:{control:!1},onPaste:{control:!1},onReveal:{control:!1},onToggle:{control:!1}}},h={args:{}},g={args:{value:`ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm`}},_={args:{reveal:!0,value:`ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm`},parameters:{docs:{description:{story:"Set `reveal` to `true` to show the SecretText's content. When `reveal` is set to true, the SecretText can be edited unless et to `readOnly`."}}}},v={args:{label:`Secret things`}},y={args:{label:`Secret things`,value:`ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm`}},b={args:{required:!0,label:`Secret things`}},x={args:{value:`It's a secret.`,clear:!1,toggle:!1,paste:!1}},S={args:{disabled:!0}},C={parameters:{docs:{description:{story:"Pass `readOnly` in order to make sure users can not edit the SecretText content by typing into the field when it is revealed."}}},args:{readOnly:!0,disablePaste:!0,label:`Read Only Secret`,value:`ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm`,helptext:`This secret text can not be edited.`}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secret things"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secret things",
    value: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArvLhT1yR4G3l0aTmUjP6ktK8xVJcQoZi/s5NQq5Z9ENJkZnQ+2lPkhslk/qf3AQHfw5QrI2vQjN5CvX0b8LS5yX+TYEkFpeQZD6b2CqY3OJVTzH1eENBoM1yTlgZe9UdU6wYuR+9p/JrDJ8KjzOG6uToINt6XodR9nMFLAnZHSqQoP/M2w1PCoWXgF5VtRt1UOcMZJX1C8KRdzvF4X6YBY4tMX1FfH5/Uj2Kn6h8u38fUqsn2wrAVzpPnSXPU1eHsdJZGn4dd+3Q8p0K9rwnX1LrF57ZxKxe/mKm"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: "Secret things"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: "It's a secret.",
    clear: false,
    toggle: false,
    paste: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};var w=[`Default`,`WithValue`,`RevealWithValue`,`WithLabel`,`WithValueWithLabel`,`RequiredWithLabel`,`NoClearNoToggleNoPaste`,`Disabled`,`ReadOnly`];export{h as Default,S as Disabled,x as NoClearNoToggleNoPaste,C as ReadOnly,b as RequiredWithLabel,_ as RevealWithValue,v as WithLabel,g as WithValue,y as WithValueWithLabel,w as __namedExportsOrder,m as default};