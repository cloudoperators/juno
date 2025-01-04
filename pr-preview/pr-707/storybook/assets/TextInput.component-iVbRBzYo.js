import{j as l}from"./jsx-runtime-D6fbYt3N.js";import{r as t}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{L as K,F as h}from"./FormHint.component-BiIM_CZV.js";import{I as P}from"./Icon.component-BXxTB2S-.js";const Q=`
	jn-bg-theme-textinput
	jn-text-theme-textinput
  jn-border
	jn-text-base
	jn-leading-4
	jn-px-4
	jn-h-textinput
	jn-rounded-3px
	focus:jn-outline-none
	focus:jn-ring-2
	focus:jn-ring-theme-focus
	disabled:jn-opacity-50
  autofill:jn-bg-theme-textinput-autofill
  autofill:jn-text-theme-textinput-autofill
  peer
`,U=`
	jn-border-theme-textinput-default
`,X=`
	jn-border-theme-error
`,Y=`
	jn-border-theme-success
`,Z=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,ee=`
  jn-py-4
`,te=`
  jn-inline-block
  jn-relative
`,ae=`
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`,le=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,ne=`
  jn-opacity-50
`,v=`
  jn-mt-0
`,F=({value:j="",id:S="",placeholder:y="",disabled:d=!1,readOnly:E=!1,required:C=!1,invalid:x=!1,valid:b=!1,autoFocus:A=!1,className:O="",autoComplete:W="off",helptext:p="",successtext:n="",errortext:s="",onChange:g=void 0,onFocus:q=void 0,onBlur:V=void 0,type:k=null,label:o=void 0,width:f="full",wrapperClassName:L="",...R})=>{const u=a=>!(typeof a=="string"&&a.trim().length===0),B=()=>"juno-textinput-"+t.useId(),w=t.useRef(),[c,I]=t.useState(""),[M,m]=t.useState(!1),[i,_]=t.useState(!1),[r,z]=t.useState(!1);t.useEffect(()=>{document.hasFocus()&&w.current.contains(document.activeElement)&&m(!0)},[]),t.useEffect(()=>{I(j)},[j]);const $=t.useMemo(()=>x||!!(s&&u(s)),[x,s]),N=t.useMemo(()=>b||!!(n&&u(n)),[b,n]);t.useEffect(()=>{_($)},[$]),t.useEffect(()=>{z(N)},[N]);const D=a=>{I(a.target.value),g&&g(a)},H=a=>{m(!0),q&&q(a)},G=a=>{m(!1),V&&V(a)},J=({disabled:a})=>r||i?l.jsxs("div",{className:`juno-textinput-row-icon-container ${le} ${a?ne:""}`,children:[i?l.jsx(P,{icon:"dangerous",color:"jn-text-theme-error"}):null,r?l.jsx(P,{icon:"checkCircle",color:"jn-text-theme-success"}):null]}):"",T=S||B();return l.jsxs("div",{children:[l.jsxs("span",{className:`
          juno-textinput-wrapper 
          ${te}
          ${f=="auto"?"jn-inline-block":"jn-block"}
          ${f=="auto"?"jn-w-auto":"jn-w-full"}
          ${L}
          `,children:[l.jsx("input",{type:k,name,autoComplete:W,value:c,id:T,ref:w,placeholder:y,disabled:d,readOnly:E,autoFocus:A,onChange:D,onFocus:H,onBlur:G,className:`juno-textinput 
            ${Q}
            ${o?Z:ee}
            ${i?"juno-textinput-invalid "+X:""} 
            ${r?"juno-textinput-valid "+Y:""}  
            ${r||i?"":U} 
            ${f=="auto"?"jn-w-auto":"jn-w-full"}
            ${O}
          `,...R}),o&&o.length?l.jsx(K,{text:o,htmlFor:T,className:`${ae}`,disabled:d,required:C,floating:!0,minimized:!!(y||M||c&&c.length)}):"",l.jsx(J,{disabled:d})]}),s&&u(s)?l.jsx(h,{text:s,variant:"error",className:`${v}`}):"",n&&u(n)?l.jsx(h,{text:n,variant:"success",className:`${v}`}):"",p&&u(p)?l.jsx(h,{text:p,className:`${v}`}):""]})};F.propTypes={name:e.string,value:e.oneOfType([e.string,e.number]),id:e.string,placeholder:e.string,disabled:e.bool,readOnly:e.bool,required:e.bool,invalid:e.bool,valid:e.bool,autoFocus:e.bool,className:e.string,autoComplete:e.string,onChange:e.func,onFocus:e.func,onBlur:e.func,type:e.oneOf(["text","email","password","tel","url","number"]),label:e.string,helptext:e.node,successtext:e.node,errortext:e.node,width:e.oneOf(["full","auto"]),wrapperClassName:e.string};F.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, url derivates.`,methods:[],displayName:"TextInput",props:{value:{defaultValue:{value:'""',computed:!1},description:"Pass a value",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"Pass a placeholder",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Render a disabled input",type:{name:"bool"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Render a readonly input",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the field is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the field is valid",type:{name:"bool"},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},description:"Whether the field receives autofocus",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname. The class name is applied to the internal input element.",type:{name:"string"},required:!1},autoComplete:{defaultValue:{value:'"off"',computed:!1},description:"Pass a valid autocomplete value. We do not police validity.",type:{name:"string"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the TextInput",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the TextInput was successfully validated",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the TextInput has an error or could not be validated",type:{name:"node"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onFocus:{defaultValue:{value:"undefined",computed:!0},description:"Pass a focus handler",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"undefined",computed:!0},description:"Pass a blur handler",type:{name:"func"},required:!1},type:{defaultValue:{value:"null",computed:!1},description:'Specify the type attribute. Defaults to an input with no type attribute, which in turn will be treateas as type="text" by browsers.',type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"email"',computed:!1},{value:'"password"',computed:!1},{value:'"tel"',computed:!1},{value:'"url"',computed:!1},{value:'"number"',computed:!1}]},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"The label of the input",type:{name:"string"},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:"The width of the text input. Either 'full' (default) or 'auto'.",type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},name:{description:"Pass a name attribute",type:{name:"string"},required:!1}}};export{F as T};
