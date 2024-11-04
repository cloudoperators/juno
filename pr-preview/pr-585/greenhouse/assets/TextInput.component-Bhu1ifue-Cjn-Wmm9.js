import{R as e,r as t}from"./index-MWXP7VhR.js";import{S as K,L as W,I,t as v}from"./Shell-T-IZjxXQ.js";const se=r=>{let{children:l=null,className:i="",...u}=r;return e.createElement(K,{gap:"2",distribution:"end",className:`juno-button-row ${i}`,...u},l)},P=`
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`,Q=`
	jn-ml-auto
`,re=r=>{let{search:l,className:i="",children:u=null,...c}=r;return e.createElement("div",{className:`juno-datagrid-toolbar ${P} ${i}`,...c},l&&e.createElement("div",null,l),e.createElement("div",{className:Q},u))},U=`
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
`,V=`
  jn-border-theme-textinput-default
`,X=`
  jn-border-theme-error
`,Y=`
  jn-border-theme-success
`,Z=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,_=`
  jn-py-4
`,ee=`
  jn-inline-block
  jn-relative
`,te=`
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`,ne=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,le=`
  jn-opacity-50
`,y=`
  jn-mt-0
`,ie=r=>{let{value:l="",id:i="",name:u=void 0,placeholder:c="",disabled:p=!1,readOnly:L=!1,required:R=!1,invalid:E=!1,valid:g=!1,autoFocus:q=!1,className:D="",autoComplete:T="off",helptext:b="",successtext:a="",errortext:o="",onChange:$=void 0,onFocus:N=void 0,onBlur:w=void 0,type:z=void 0,label:d=void 0,width:x="full",wrapperClassName:G="",...H}=r;const s=n=>typeof n!="string"||n.trim().length!==0,S=t.useRef(null),[f,F]=t.useState(""),[M,h]=t.useState(!1),[m,O]=t.useState(!1),[j,A]=t.useState(!1);t.useEffect(()=>{document.hasFocus()&&S.current.contains(document.activeElement)&&h(!0)},[]),t.useEffect(()=>{F(l)},[l]);const k=t.useMemo(()=>E||!!(o&&s(o)),[E,o]),C=t.useMemo(()=>g||!!(a&&s(a)),[g,a]);t.useEffect(()=>{O(k)},[k]),t.useEffect(()=>{A(C)},[C]);const B=i||"juno-textinput-"+t.useId();return e.createElement("div",null,e.createElement("span",{className:`
          juno-textinput-wrapper 
          ${ee}
          ${x=="auto"?"jn-inline-block":"jn-block"}
          ${x=="auto"?"jn-w-auto":"jn-w-full"}
          ${G}
          `},e.createElement("input",{type:z,name:u,autoComplete:T,value:f,id:B,ref:S,placeholder:c,disabled:p,readOnly:L,autoFocus:q,onChange:n=>{F(n.target.value),$&&$(n)},onFocus:n=>{h(!0),N&&N(n)},onBlur:n=>{h(!1),w&&w(n)},className:`juno-textinput 
            ${U}
            ${d?Z:_}
            ${m?"juno-textinput-invalid "+X:""} 
            ${j?"juno-textinput-valid "+Y:""}  
            ${j||m?"":V} 
            ${x=="auto"?"jn-w-auto":"jn-w-full"}
            ${D}
          `,...H}),d&&d.length?e.createElement(W,{text:d,htmlFor:B,className:`${te}`,disabled:p,required:R,floating:!0,minimized:!!(c||M||f&&s(f))}):"",e.createElement(n=>{let{disabled:J}=n;return j||m?e.createElement("div",{className:`juno-textinput-row-icon-container ${ne} ${J?le:""}`},m?e.createElement(I,{icon:"dangerous",color:"jn-text-theme-error"}):null,j?e.createElement(I,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},{disabled:p})),o&&s(o)?e.createElement(v,{text:o,variant:"error",className:`${y}`}):"",a&&s(a)?e.createElement(v,{text:a,variant:"success",className:`${y}`}):"",b&&s(b)?e.createElement(v,{text:b,className:`${y}`}):"")};export{se as B,re as D,ie as T};
