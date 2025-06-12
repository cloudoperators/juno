import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./index-DI7CEG0L.js";import{L as J}from"./Label.component-B6h6U6xd.js";import{I as F}from"./Icon.component-tc_P4JTR.js";import{F as h}from"./FormHint.component-F7CCEkle.js";const K=`
  jn:inline-block
  jn:relative
`,Q=`
  jn:bg-theme-textinput
  jn:text-theme-textinput
  jn:border
  jn:text-base
  jn:leading-4
  jn:px-4
  jn:rounded-3px
  jn:align-top
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
`,U=`
  jn:border-theme-textinput-default
`,X=`
  jn:border-theme-error
`,Y=`
  jn:border-theme-success
`,Z=`
  jn:pt-[1.125rem] 
  jn:pb-1
`,ee=`
  jn:py-4
`,ae=`
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
`,te=`
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`,ne=`
  jn:opacity-50
`,j=`
  jn:mt-0
`,I=({name:v,value:x="",id:S="",placeholder:y="",disabled:u=!1,readOnly:P=!1,required:C=!1,invalid:g=!1,valid:b=!1,autoFocus:A=!1,className:_="",autoComplete:H="off",helptext:d="",successtext:n="",errortext:l="",onChange:q,onFocus:V,onBlur:w,label:r,width:c="full",wrapperClassName:L="",...R})=>{const s=a=>!(typeof a=="string"&&a.trim().length===0),M=()=>"juno-textarea-"+e.useId(),f=e.useRef(null),[m,N]=e.useState(""),[W,p]=e.useState(!1),[o,k]=e.useState(!1),[i,B]=e.useState(!1);e.useEffect(()=>{document.hasFocus()&&f.current&&f.current.contains(document.activeElement)&&p(!0)},[]),e.useEffect(()=>{N(x.toString())},[x]);const T=e.useMemo(()=>g||!!(l&&s(l)),[g,l]),$=e.useMemo(()=>b||!!(n&&s(n)),[b,n]);e.useEffect(()=>{k(T)},[T]),e.useEffect(()=>{B($)},[$]);const O=a=>{N(a.target.value),q&&q(a)},z=a=>{p(!0),V&&V(a)},D=a=>{p(!1),w&&w(a)},G=({disabled:a})=>i||o?t.jsxs("div",{className:`juno-textinput-row-icon-container ${te} ${a?ne:""}`,children:[o?t.jsx(F,{icon:"dangerous",color:"jn:text-theme-error"}):null,i?t.jsx(F,{icon:"checkCircle",color:"jn:text-theme-success"}):null]}):"",E=S||M();return t.jsxs("div",{children:[t.jsxs("div",{className:`
          juno-textarea-wrapper 
          ${K}
          ${c=="auto"?"jn:inline-block":"jn:block"}
          ${c=="auto"?"jn:w-auto":"jn:w-full"}
          ${L}
        `,children:[r&&r.length?t.jsx(J,{text:r,htmlFor:E,className:`${ae}`,disabled:u,required:C,floating:!0,minimized:!!(y||W||m&&m.length)}):"",t.jsx("textarea",{name:v,autoComplete:H,value:m,id:E,ref:f,placeholder:y,disabled:u,readOnly:P,autoFocus:A,onChange:O,onFocus:z,onBlur:D,className:`juno-textarea 
            ${Q}
            ${r?Z:ee}
            ${o?"juno-textarea-invalid "+X:""} 
            ${i?"juno-textarea-valid "+Y:""}  
            ${i||o?"":U} 
            ${c=="auto"?"jn:w-auto":"jn:w-full"}
            ${_}
          `,...R}),t.jsx(G,{disabled:u})]}),l&&s(l)?t.jsx(h,{text:l,variant:"error",className:`${j}`}):"",n&&s(n)?t.jsx(h,{text:n,variant:"success",className:`${j}`}):"",d&&s(d)?t.jsx(h,{text:d,className:`${j}`}):""]})};try{I.displayName="Textarea",I.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, url derivates.`,displayName:"Textarea",props:{name:{defaultValue:null,description:"Pass a name attribute",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The label of the textarea",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Pass a value",name:"value",required:!1,type:{name:"string | number"}},id:{defaultValue:{value:""},description:"Pass an id",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"Pass a placeholder",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Render a disabled input",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Render a readonly input",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Whether the field is required",name:"required",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Whether the field is invalid",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the field is valid",name:"valid",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Whether the field receives autofocus",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a classname. The class name is applied to the internal textarea element.",name:"className",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"Pass a valid autocomplete value. We do not police validity.",name:"autoComplete",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Pass a change handler",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}},onFocus:{defaultValue:null,description:"Pass a focus handler",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"Pass a blur handler",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},helptext:{defaultValue:{value:""},description:"A helptext to render to explain meaning and significance of the Textarea",name:"helptext",required:!1,type:{name:"ReactNode"}},successtext:{defaultValue:{value:""},description:"A text to render when the Textarea was successfully validated",name:"successtext",required:!1,type:{name:"ReactNode"}},errortext:{defaultValue:{value:""},description:"A text to render when the Textarea has an error or could not be validated",name:"errortext",required:!1,type:{name:"ReactNode"}},width:{defaultValue:{value:"full"},description:"The width of the textarea. Either 'full' (default) or 'auto'.",name:"width",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}export{I as T};
