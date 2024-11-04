import{R as t,r as d}from"./index-MWXP7VhR.js";import{S as v,I as f,K as w}from"./Shell-T-IZjxXQ.js";const N=(e,s,r)=>{if(!d.isValidElement(e))return e;const n={variant:e.props.variant||s,disabled:e.props.disabled||r};return t.cloneElement(e,n)},B=(e,s,r)=>`
    ${e}-${s}
    ${r?`${e}-disabled`:""}
  `,H=e=>{let{children:s=null,className:r="",variant:n="default",disabled:c=!1,...m}=e;const u=t.Children.map(s,g=>N(g,n,c)),o=B("juno-input-group",n,c);return t.createElement(v,{className:`juno-input-group ${o} ${r}`,...m},u)},S=`
    jn-text-theme-high
    jn-flex
    jn-rounded
    jn-leading-5
    jn-overflow-hidden
    jn-items-center
`,V=`
    jn-font-bold
`,I=`
    jn-py-3
    jn-pr-4
    jn-ml-7
`,K=`
    jn-w-[4px]
    jn-self-stretch
    jn-border-l-4
    jn-mr-6
    jn-shrink-0
`,T=`
    jn-ml-auto
    jn-self-stretch
    jn-flex
    jn-flex-col
    jn-py-2.5
    jn-pr-2.5
`,a={default:"jn-border-theme-message-default",defaultBg:"jn-bg-theme-message-default",error:"jn-border-theme-message-error",errorBg:"jn-bg-theme-message-error",warning:"jn-border-theme-message-warning",warningBg:"jn-bg-theme-message-warning",danger:"jn-border-theme-message-danger",dangerBg:"jn-bg-theme-message-danger",success:"jn-border-theme-message-success",successBg:"jn-bg-theme-message-success"},C=e=>e==="error"?a.errorBg:e==="warning"?a.warningBg:e==="success"?a.successBg:e==="info"?a.defaultBg:e==="danger"?a.dangerBg:a.defaultBg,D=e=>e==="error"?a.error:e==="warning"?a.warning:e==="success"?a.success:e==="info"?a.default:e==="danger"?a.danger:a.default,R=e=>new Set(Object.values(w)).has(e),F=e=>e==="error"?"dangerous":R(e)?e:"default",L=(e,s,r,n)=>{!e||1>s||(n.current!==null&&clearTimeout(n.current),n.current=window.setTimeout(()=>{r()},s))},P=e=>{e.current!==null&&(clearTimeout(e.current),e.current=null)},O=e=>{let{title:s=null,text:r=null,variant:n="info",dismissible:c=!1,autoDismiss:m=!1,autoDismissTimeout:u=1e4,onDismiss:o,className:g="",children:p,...h}=e;const[b,j]=d.useState(!0),l=d.useRef(null),y=()=>{j(!1),o&&o()};if(d.useEffect(()=>()=>{P(l)},[]),d.useEffect(()=>{L(m,u,y,l)},[m,u]),!b)return null;const E=F(n),$=C(n),k=D(n);return t.createElement("div",{className:`juno-message juno-message-${n} ${S} ${$} ${g}`,...h},t.createElement("div",{className:`juno-message-border ${K} ${k}`}),t.createElement(f,{icon:E,color:`jn-text-theme-${n}`,className:"jn-shrink-0"}),t.createElement("div",{className:`juno-message-content ${I}`},s&&t.createElement("h1",{className:V},s),t.createElement("div",null,p||r)),c&&t.createElement("div",{className:T},t.createElement(f,{icon:"close",onClick:y,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100"})))},A=e=>`
    jn-inline-flex
    jn-basis-auto
    jn-shrink
    jn-items-center
    jn-flex-nowrap
    jn-text-xs
    jn-p-px
    jn-border
    jn-rounded
    jn-border-theme-background-lvl-4
    jn-group
    ${e?"jn-cursor-pointer":""}
  `,M=e=>`
    jn-bg-theme-background-lvl-4
    jn-text-theme-high
    ${e?"group-hover:jn-text-theme-highest":""}
    jn-px-1
    jn-py-0.5
    jn-rounded-sm
    jn-inline-block
  `,x=e=>`
    jn-px-1
    jn-py-0.5
    jn-text-theme-high
    ${e?"group-hover:jn-text-theme-highest":""}
    jn-inline-block
  `,U=e=>{let{uid:s="",pillKey:r="",pillKeyLabel:n="",pillValue:c="",pillValueLabel:m="",closeable:u=!1,onClick:o=void 0,onClose:g=void 0,className:p="",...h}=e;const b=l=>{g&&g(l,s||r||c)},j=l=>{o&&o(l,s||r||c)};return t.createElement("div",{className:`juno-pill ${A(!!o)} ${p}`,...h},c||m?t.createElement(t.Fragment,null,(n||r)&&t.createElement("span",{className:`pill-key ${M(!!o)}`,onClick:l=>j(l)},n||r),t.createElement("span",{className:`pill-value ${x(!!o)}`,onClick:l=>j(l)},m||c)):t.createElement("span",{className:`${x(!1)}`},"set pillValue or pillValueLabel"),u&&t.createElement(f,{icon:"close",size:18,onClick:l=>b(l)}))};var i=(e=>(e[e.ready=0]="ready",e[e.unkown=1]="unkown",e[e.notReady=2]="notReady",e))(i||{});const q={state:i[i.unkown],color:"text-theme-default",icon:"warning"},W=e=>{let s="";return e.some(n=>(s=n.message??"",n.type==="Ready"&&n.status==="True"))?{state:i[i.ready],color:"text-theme-accent",icon:"success",message:s}:e.some(n=>(s=n.message??"",n.type==="Ready"&&n.status==="False"))?{state:i[i.notReady],color:"text-theme-danger",icon:"danger",message:s}:q};export{H as I,O as M,U as P,W as g,q as r};
