import{r as e,j as a}from"./iframe-CcDtRYdv.js";import{L as K}from"./Label.component-BUY5JpG-.js";import{I as E}from"./Icon.component-DqFB0nZU.js";import{F as h}from"./FormHint.component-CIkracNy.js";const Q=`
  jn:bg-theme-textinput
  jn:text-theme-textinput
  jn:border
  jn:text-base
  jn:leading-4
  jn:px-4
  jn:h-textinput
  jn:rounded-3px
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
  jn:disabled:opacity-50
  jn:autofill:bg-theme-textinput-autofill
  jn:autofill:text-theme-textinput-autofill
  peer
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
`,te=`
  jn:inline-block
  jn:relative
`,ae=`
  jn:peer-autofill:text-theme-textinput-autofill-label
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
`,ne=`
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`,le=`
  jn:opacity-50
`,j=`
  jn:mt-0
`,T=({value:o="",id:F="",name:S,placeholder:v="",disabled:d=!1,readOnly:P=!1,required:C=!1,invalid:y=!1,valid:x=!1,autoFocus:_=!1,className:H="",autoComplete:L="off",helptext:p="",successtext:n="",errortext:l="",onChange:b,onFocus:g,onBlur:q,type:R,label:u,width:c="full",wrapperClassName:A="",...M})=>{const s=t=>!(typeof t=="string"&&t.trim().length===0),W=()=>"juno-textinput-"+e.useId(),V=e.useRef(null),[f,w]=e.useState(""),[k,m]=e.useState(!1),[i,B]=e.useState(!1),[r,O]=e.useState(!1);e.useEffect(()=>{document.hasFocus()&&V.current.contains(document.activeElement)&&m(!0)},[]),e.useEffect(()=>{w(o)},[o]);const I=e.useMemo(()=>y||!!(l&&s(l)),[y,l]),N=e.useMemo(()=>x||!!(n&&s(n)),[x,n]);e.useEffect(()=>{B(I)},[I]),e.useEffect(()=>{O(N)},[N]);const z=t=>{w(t.target.value),b&&b(t)},D=t=>{m(!0),g&&g(t)},G=t=>{m(!1),q&&q(t)},J=({disabled:t})=>r||i?a.jsxs("div",{className:`juno-textinput-row-icon-container ${ne} ${t?le:""}`,children:[i?a.jsx(E,{icon:"dangerous",color:"jn:text-theme-error"}):null,r?a.jsx(E,{icon:"checkCircle",color:"jn:text-theme-success"}):null]}):"",$=F||W();return a.jsxs("div",{className:"juno-textinput-outer-wrapper",children:[a.jsxs("span",{className:`
          juno-textinput-wrapper 
          ${te}
          ${c=="auto"?"jn:inline-block":"jn:block"}
          ${c=="auto"?"jn:w-auto":"jn:w-full"}
          ${A}
          `,children:[a.jsx("input",{type:R,name:S,autoComplete:L,value:f,id:$,ref:V,placeholder:v,disabled:d,readOnly:P,autoFocus:_,onChange:z,onFocus:D,onBlur:G,className:`juno-textinput 
            ${Q}
            ${u?Z:ee}
            ${i?"juno-textinput-invalid "+X:""} 
            ${r?"juno-textinput-valid "+Y:""}  
            ${r||i?"":U} 
            ${c=="auto"?"jn:w-auto":"jn:w-full"}
            ${H}
          `,...M}),u&&u.length?a.jsx(K,{text:u,htmlFor:$,className:`${ae}`,disabled:d,required:C,floating:!0,minimized:!!(v||k||f&&s(f))}):"",a.jsx(J,{disabled:d})]}),l&&s(l)?a.jsx(h,{text:l,variant:"error",className:`${j}`}):"",n&&s(n)?a.jsx(h,{text:n,variant:"success",className:`${j}`}):"",p&&s(p)?a.jsx(h,{text:p,className:`${j}`}):""]})};try{T.displayName="TextInput",T.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, url derivates.`,displayName:"TextInput",props:{name:{defaultValue:null,description:"Pass a name attribute",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"Pass a value",name:"value",required:!1,type:{name:"string | number"}},id:{defaultValue:{value:""},description:"Pass an id",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"Pass a placeholder",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Render a disabled input",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Render a readonly input",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Whether the field is required",name:"required",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Whether the field is invalid",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the field is valid",name:"valid",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Whether the field receives autofocus",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a classname. The class name is applied to the internal input element.",name:"className",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"Pass a valid autocomplete value. We do not police validity.",name:"autoComplete",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Pass a change handler",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"Pass a focus handler",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"Pass a blur handler",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:'Specify the type attribute. Defaults to an input with no type attribute, which in turn will be treateas as type="text" by browsers.',name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},label:{defaultValue:null,description:"The label of the input",name:"label",required:!1,type:{name:"string"}},helptext:{defaultValue:{value:""},description:"A helptext to render to explain meaning and significance of the TextInput",name:"helptext",required:!1,type:{name:"ReactNode"}},successtext:{defaultValue:{value:""},description:"A text to render when the TextInput was successfully validated",name:"successtext",required:!1,type:{name:"ReactNode"}},errortext:{defaultValue:{value:""},description:"A text to render when the TextInput has an error or could not be validated",name:"errortext",required:!1,type:{name:"ReactNode"}},width:{defaultValue:{value:"full"},description:"The width of the text input. Either 'full' (default) or 'auto'.",name:"width",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}export{T};
