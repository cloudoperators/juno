import{R as e,r as n}from"./index-X__xL7jY.js";import{S as K,L as W,I as R,F as v}from"./Shell-BYt-p1eQ.js";const me=l=>{let{children:t=null,className:a="",...o}=l;return e.createElement(K,{gap:"2",distribution:"end",className:`juno-button-row ${a}`,...o},t)},P=`
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`,Q=`
	jn-ml-auto
`,de=l=>{let{search:t,className:a="",children:o=null,...r}=l;return e.createElement("div",{className:`juno-datagrid-toolbar ${P} ${a}`,...r},t&&e.createElement("div",null,t),e.createElement("div",{className:Q},o))},U=`
  jn-mb-8
`,V=`
  jn-text-2xl
  jn-font-bold
  jn-mb-4
`,je=l=>{let{title:t="",className:a="",children:o,...r}=l;return e.createElement("form",{className:`juno-form ${U} ${a}`,...r},t?e.createElement("h1",{className:`juno-form-heading ${V}`},t):null,o)},X=`
  jn-mb-2
`,pe=l=>{let{children:t,className:a="",...o}=l;return e.createElement("div",{className:`juno-form-row ${X} ${a}`,...o},t)},Y=`
    jn-mb-8
    jn-last:mb-0
`,Z=`
    jn-text-lg
    jn-font-bold
    jn-mb-4
`,be=l=>{let{title:t="",children:a,className:o="",...r}=l;return e.createElement("section",{className:`juno-form-section ${Y} ${o}`,...r},t?e.createElement("h1",{className:`juno-formsection-heading ${Z}`},t):null,a)},_=`
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
`,ee=`
  jn-border-theme-textinput-default
`,te=`
  jn-border-theme-error
`,ne=`
  jn-border-theme-success
`,le=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,ae=`
  jn-py-4
`,oe=`
  jn-inline-block
  jn-relative
`,se=`
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`,re=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,ce=`
  jn-opacity-50
`,y=`
  jn-mt-0
`,fe=l=>{let{value:t="",id:a="",name:o=void 0,placeholder:r="",disabled:p=!1,readOnly:I=!1,required:L=!1,invalid:$=!1,valid:E=!1,autoFocus:T=!1,className:q="",autoComplete:D="off",helptext:b="",successtext:c="",errortext:i="",onChange:g=void 0,onFocus:N=void 0,onBlur:S=void 0,type:z=void 0,label:m=void 0,width:f="full",wrapperClassName:G="",...H}=l;const u=s=>typeof s!="string"||s.trim().length!==0,w=n.useRef(null),[h,F]=n.useState(""),[M,x]=n.useState(!1),[d,O]=n.useState(!1),[j,A]=n.useState(!1);n.useEffect(()=>{document.hasFocus()&&w.current.contains(document.activeElement)&&x(!0)},[]),n.useEffect(()=>{F(t)},[t]);const B=n.useMemo(()=>$||!!(i&&u(i)),[$,i]),k=n.useMemo(()=>E||!!(c&&u(c)),[E,c]);n.useEffect(()=>{O(B)},[B]),n.useEffect(()=>{A(k)},[k]);const C=a||"juno-textinput-"+n.useId();return e.createElement("div",null,e.createElement("span",{className:`
          juno-textinput-wrapper 
          ${oe}
          ${f=="auto"?"jn-inline-block":"jn-block"}
          ${f=="auto"?"jn-w-auto":"jn-w-full"}
          ${G}
          `},e.createElement("input",{type:z,name:o,autoComplete:D,value:h,id:C,ref:w,placeholder:r,disabled:p,readOnly:I,autoFocus:T,onChange:s=>{F(s.target.value),g&&g(s)},onFocus:s=>{x(!0),N&&N(s)},onBlur:s=>{x(!1),S&&S(s)},className:`juno-textinput 
            ${_}
            ${m?le:ae}
            ${d?"juno-textinput-invalid "+te:""} 
            ${j?"juno-textinput-valid "+ne:""}  
            ${j||d?"":ee} 
            ${f=="auto"?"jn-w-auto":"jn-w-full"}
            ${q}
          `,...H}),m&&m.length?e.createElement(W,{text:m,htmlFor:C,className:`${se}`,disabled:p,required:L,floating:!0,minimized:!!(r||M||h&&u(h))}):"",e.createElement(s=>{let{disabled:J}=s;return j||d?e.createElement("div",{className:`juno-textinput-row-icon-container ${re} ${J?ce:""}`},d?e.createElement(R,{icon:"dangerous",color:"jn-text-theme-error"}):null,j?e.createElement(R,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},{disabled:p})),i&&u(i)?e.createElement(v,{text:i,variant:"error",className:`${y}`}):"",c&&u(c)?e.createElement(v,{text:c,variant:"success",className:`${y}`}):"",b&&u(b)?e.createElement(v,{text:b,className:`${y}`}):"")};export{me as B,de as D,be as F,fe as T,pe as a,je as b};
