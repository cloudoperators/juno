import{j as a}from"./jsx-runtime-D6fbYt3N.js";import{r as t}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{L as Pe,F as C}from"./FormHint.component-Dbm6hcqV.js";import{I as G}from"./Icon.component-BXxTB2S-.js";import{F as De}from"./FormRow.component-DNDnl0QH.js";import{w as Ne}from"./withDeprecationWarning.component-Cd49MbBc.js";import"./widgets-BR6-ubtP.js";const Ie=`
  jn-inline-block
  jn-relative
`,$e=`
  jn-bg-theme-textinput
  jn-text-theme-textinput
  jn-border
  jn-text-base
  jn-leading-4
  jn-px-4
  jn-rounded-3px
  jn-align-top
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
`,Ce=`
  jn-border-theme-textinput-default
`,Fe=`
  jn-border-theme-error
`,He=`
  jn-border-theme-success
`,Oe=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,ke=`
  jn-py-4
`,Ae=`
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
  jn-pr-4
  jn-bg-theme-textinput
`,Le=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,_e=`
  jn-opacity-50
`,F=`
  jn-mt-0
`,H=({value:u="",id:V="",placeholder:d="",disabled:n=!1,readOnly:E=!1,required:W=!1,invalid:c=!1,valid:p=!1,autoFocus:S=!1,className:P="",autoComplete:D="off",helptext:o="",successtext:s="",errortext:r="",onChange:m=void 0,onFocus:k=void 0,onBlur:A=void 0,label:f=void 0,width:N="full",wrapperClassName:ye="",...we})=>{const i=l=>!(typeof l=="string"&&l.trim().length===0),Te=()=>"juno-textarea-"+t.useId(),L=t.useRef(),[I,_]=t.useState(""),[je,$]=t.useState(!1),[h,qe]=t.useState(!1),[x,Re]=t.useState(!1);t.useEffect(()=>{document.hasFocus()&&L.current.contains(document.activeElement)&&$(!0)},[]),t.useEffect(()=>{_(u)},[u]);const B=t.useMemo(()=>c||!!(r&&i(r)),[c,r]),M=t.useMemo(()=>p||!!(s&&i(s)),[p,s]);t.useEffect(()=>{qe(B)},[B]),t.useEffect(()=>{Re(M)},[M]);const Ve=l=>{_(l.target.value),m&&m(l)},Ee=l=>{$(!0),k&&k(l)},We=l=>{$(!1),A&&A(l)},Se=({disabled:l})=>x||h?a.jsxs("div",{className:`juno-textinput-row-icon-container ${Le} ${l?_e:""}`,children:[h?a.jsx(G,{icon:"dangerous",color:"jn-text-theme-error"}):null,x?a.jsx(G,{icon:"checkCircle",color:"jn-text-theme-success"}):null]}):"",z=V||Te();return a.jsxs("div",{children:[a.jsxs("div",{className:`
          juno-textarea-wrapper 
          ${Ie}
          ${N=="auto"?"jn-inline-block":"jn-block"}
          ${N=="auto"?"jn-w-auto":"jn-w-full"}
          ${ye}
        `,children:[f&&f.length?a.jsx(Pe,{text:f,htmlFor:z,className:`${Ae}`,disabled:n,required:W,floating:!0,minimized:!!(d||je||I&&I.length)}):"",a.jsx("textarea",{name,autoComplete:D,value:I,id:z,ref:L,placeholder:d,disabled:n,readOnly:E,autoFocus:S,onChange:Ve,onFocus:Ee,onBlur:We,className:`juno-textarea 
            ${$e}
            ${f?Oe:ke}
            ${h?"juno-textarea-invalid "+Fe:""} 
            ${x?"juno-textarea-valid "+He:""}  
            ${x||h?"":Ce} 
            ${N=="auto"?"jn-w-auto":"jn-w-full"}
            ${P}
          `,...we}),a.jsx(Se,{disabled:n})]}),r&&i(r)?a.jsx(C,{text:r,variant:"error",className:`${F}`}):"",s&&i(s)?a.jsx(C,{text:s,variant:"success",className:`${F}`}):"",o&&i(o)?a.jsx(C,{text:o,className:`${F}`}):""]})};H.propTypes={name:e.string,label:e.string,value:e.oneOfType([e.string,e.number]),id:e.string,placeholder:e.string,disabled:e.bool,readOnly:e.bool,required:e.bool,invalid:e.bool,valid:e.bool,autoFocus:e.bool,className:e.string,autoComplete:e.string,onChange:e.func,onFocus:e.func,onBlur:e.func,helptext:e.node,successtext:e.node,errortext:e.node,width:e.oneOf(["full","auto"]),wrapperClassName:e.string};H.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, url derivates.`,methods:[],displayName:"Textarea",props:{value:{defaultValue:{value:'""',computed:!1},description:"Pass a value",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Pass a placeholder",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Render a disabled input",type:{name:"bool"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Render a readonly input",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the field is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is valid",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"Whether the field receives autofocus",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname. The class name is applied to the internal textarea element.",type:{name:"string"},required:!1},autoComplete:{defaultValue:{value:'"off"',computed:!1},description:"Pass a valid autocomplete value. We do not police validity.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Textarea",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Textarea was successfully validated",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Textarea has an error or could not be validated",type:{name:"node"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"Pass a focus handler",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"Pass a blur handler",type:{name:"func"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"The label of the textarea",type:{name:"string"},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:"The width of the textarea. Either 'full' (default) or 'auto'.",type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},name:{description:"Pass a name attribute",type:{name:"string"},required:!1}}};const O=({value:u="",name:V=null,label:d=null,id:n=null,placeholder:E=null,required:W=null,invalid:c=!1,errortext:p="",valid:S=!1,successtext:P="",helptext:D=null,className:o="",disabled:s=null,onChange:r=void 0,...m})=>a.jsx(De,{children:a.jsx(H,{value:u,name:V,id:n,label:d,required:W,placeholder:E,disabled:s,invalid:c,valid:S,onChange:r,errortext:p,helptext:D,successtext:P,className:o,...m})});O.propTypes={value:e.string,name:e.string,label:e.string,id:e.string,helptext:e.node,placeholder:e.string,required:e.bool,invalid:e.bool,errortext:e.string,valid:e.bool,successtext:e.string,className:e.string,disabled:e.bool,onChange:e.func};const Be=Ne(O,"TextareaRow is deprecated and will be removed in future versions. To be future-proof, use Textarea instead.");O.__docgenInfo={description:"DEPRECATED: A textarea row containing a textarea, associated label, optional helptext, and structural markup. This component is DEPRECATED, use Textarea instead.",methods:[],displayName:"TextareaRow",props:{value:{defaultValue:{value:'""',computed:!1},description:"Optional initial value",type:{name:"string"},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the textarea element",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:"null",computed:!1},description:"Placeholder for the text input. Will not be visible on floating label inputs.",type:{name:"string"},required:!1},required:{defaultValue:{value:"null",computed:!1},description:"Specify whether the input is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Error text to display when validation fails. Will automatically invalidate the field if passed.",type:{name:"string"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is valid",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Text to display when validation is successful. Will automatically set the field to valid if passed.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:"null",computed:!1},description:"Help text",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className to the Textarea",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the textarea",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to the checkbox element",type:{name:"func"},required:!1}}};const Ye={title:"Deprecated/TextareaRow",component:Be,parameters:{docs:{description:{component:"DEPRECATED: A textarea row containing a textarea, associated label, optional helptext, and structural markup. This component is DEPRECATED, use Textarea instead."}}},argTypes:{errortext:{control:!1},helptext:{control:!1},successtext:{control:!1},children:{control:!1}}},v={args:{label:"Default Textarea Row"}},g={args:{label:"Disabled Textarea Row",disabled:!0}},b={args:{name:"my-input",label:"Textarea Row with Helptext",helptext:"Oh so helpful helptext"}},y={args:{name:"my-input",label:"Textarea Row with Helptext",helptext:a.jsxs(a.Fragment,{children:["Helptext with a ",a.jsx("a",{href:"#",children:"Link"})]})}},w={args:{label:"Required Textarea",required:!0}},T={args:{label:"Invalid TextareaRow",invalid:!0}},j={args:{label:"Textarea Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the TextareaRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the TextareaRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},q={args:{label:"Valid TextareaRow",valid:!0}},R={args:{label:"Textarea Row with Success Text",helptext:"Oh so helpful helptext",successtext:"When passed a successtext prop, the TextareaRow will be set to valid automatically."},parameters:{docs:{description:{story:"Passing a `successtext` prop to the TextareaRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."}}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: "Default Textarea Row"
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Disabled Textarea Row",
    disabled: true
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Textarea Row with Helptext",
    helptext: "Oh so helpful helptext"
  }
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,le,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    name: "my-input",
    label: "Textarea Row with Helptext",
    helptext: <>
        Helptext with a <a href="#">Link</a>
      </>
  }
}`,...(se=(le=y.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,ne,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: "Required Textarea",
    required: true
  }
}`,...(oe=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ue,de;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: "Invalid TextareaRow",
    invalid: true
  }
}`,...(de=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,pe,me;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: "Textarea Row with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the TextareaRow will be set to invalid automatically."
  },
  parameters: {
    docs: {
      description: {
        story: "Passing an \`errortext\` prop to the TextareaRow component will automatically invalidate it, so there is no need to explicitly set \`invalid\` as well."
      }
    }
  }
}`,...(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,he,xe;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: "Valid TextareaRow",
    valid: true
  }
}`,...(xe=(he=q.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ve,ge,be;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: "Textarea Row with Success Text",
    helptext: "Oh so helpful helptext",
    successtext: "When passed a successtext prop, the TextareaRow will be set to valid automatically."
  },
  parameters: {
    docs: {
      description: {
        story: "Passing a \`successtext\` prop to the TextareaRow component will automatically set it to valid, so there is no need to explicitly set \`valid\` as well."
      }
    }
  }
}`,...(be=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const Ze=["Default","Disabled","WithHelpText","WithHelpTextWithLink","Required","Invalid","WithErrorText","Valid","WithSuccessText"];export{v as Default,g as Disabled,T as Invalid,w as Required,q as Valid,j as WithErrorText,b as WithHelpText,y as WithHelpTextWithLink,R as WithSuccessText,Ze as __namedExportsOrder,Ye as default};
