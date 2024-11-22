import{r as e,R as n}from"./index-0-azV7Rr.js";import{L as J,I as C,F as x}from"./Shell-2rYha37n.js";const K=`
  jn-inline-block
  jn-relative
`,P=`
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
`,Q=`
  jn-border-theme-textinput-default
`,U=`
  jn-border-theme-error
`,V=`
  jn-border-theme-success
`,W=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,X=`
  jn-py-4
`,Y=`
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
  jn-pr-4
  jn-bg-theme-textinput
`,Z=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,_=`
  jn-opacity-50
`,b=`
  jn-mt-0
`,ne=k=>{let{name:I,value:f="",id:L="",placeholder:h="",disabled:c=!1,readOnly:q=!1,required:B=!1,invalid:v=!1,valid:g=!1,autoFocus:R=!1,className:z="",autoComplete:H="off",helptext:u="",successtext:a="",errortext:l="",onChange:y=void 0,onFocus:E=void 0,onBlur:$=void 0,label:o=void 0,width:d="full",wrapperClassName:M="",...O}=k;const r=t=>typeof t!="string"||t.trim().length!==0,m=e.useRef(null),[j,w]=e.useState(""),[T,p]=e.useState(!1),[s,A]=e.useState(!1),[i,D]=e.useState(!1);e.useEffect(()=>{document.hasFocus()&&m.current&&m.current.contains(document.activeElement)&&p(!0)},[]),e.useEffect(()=>{w(f.toString())},[f]);const S=e.useMemo(()=>v||!!(l&&r(l)),[v,l]),F=e.useMemo(()=>g||!!(a&&r(a)),[g,a]);e.useEffect(()=>{A(S)},[S]),e.useEffect(()=>{D(F)},[F]);const N=L||"juno-textarea-"+e.useId();return n.createElement("div",null,n.createElement("div",{className:`
          juno-textarea-wrapper 
          ${K}
          ${d=="auto"?"jn-inline-block":"jn-block"}
          ${d=="auto"?"jn-w-auto":"jn-w-full"}
          ${M}
        `},o&&o.length?n.createElement(J,{text:o,htmlFor:N,className:`${Y}`,disabled:c,required:B,floating:!0,minimized:!!(h||T||j&&j.length)}):"",n.createElement("textarea",{name:I,autoComplete:H,value:j,id:N,ref:m,placeholder:h,disabled:c,readOnly:q,autoFocus:R,onChange:t=>{w(t.target.value),y&&y(t)},onFocus:t=>{p(!0),E&&E(t)},onBlur:t=>{p(!1),$&&$(t)},className:`juno-textarea 
            ${P}
            ${o?W:X}
            ${s?"juno-textarea-invalid "+U:""} 
            ${i?"juno-textarea-valid "+V:""}  
            ${i||s?"":Q} 
            ${d=="auto"?"jn-w-auto":"jn-w-full"}
            ${z}
          `,...O}),n.createElement(t=>{let{disabled:G}=t;return i||s?n.createElement("div",{className:`juno-textinput-row-icon-container ${Z} ${G?_:""}`},s?n.createElement(C,{icon:"dangerous",color:"jn-text-theme-error"}):null,i?n.createElement(C,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},{disabled:c})),l&&r(l)?n.createElement(x,{text:l,variant:"error",className:`${b}`}):"",a&&r(a)?n.createElement(x,{text:a,variant:"success",className:`${b}`}):"",u&&r(u)?n.createElement(x,{text:u,className:`${b}`}):"")};export{ne as T};
