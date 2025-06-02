import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DI7CEG0L.js";import{I as m,K as x}from"./Icon.component-CS1mzCYa.js";const B=`
    jn-text-theme-high
    jn-flex
    jn-rounded
    jn-leading-5
    jn-overflow-hidden
    jn-items-center
`,S=`
    jn-font-bold
`,N=`
    jn-py-3
    jn-pr-4
    jn-ml-7
`,V=`
    jn-w-[4px]
    jn-self-stretch
    jn-border-l-4
    jn-mr-6
    jn-shrink-0
`,I=`
    jn-ml-auto
    jn-self-stretch
    jn-flex
    jn-flex-col
    jn-py-2.5
    jn-pr-2.5
`,s={default:"jn-border-theme-message-default",defaultBg:"jn-bg-theme-message-default",error:"jn-border-theme-message-error",errorBg:"jn-bg-theme-message-error",warning:"jn-border-theme-message-warning",warningBg:"jn-bg-theme-message-warning",danger:"jn-border-theme-message-danger",dangerBg:"jn-bg-theme-message-danger",success:"jn-border-theme-message-success",successBg:"jn-bg-theme-message-success"},q=e=>{switch(e){case"error":return s.errorBg;case"warning":return s.warningBg;case"success":return s.successBg;case"info":return s.defaultBg;case"danger":return s.dangerBg;default:return s.defaultBg}},T=e=>{switch(e){case"error":return s.error;case"warning":return s.warning;case"success":return s.success;case"info":return s.default;case"danger":return s.danger;default:return s.default}},_=e=>new Set(Object.values(x)).has(e),$=e=>e==="error"?"dangerous":_(e)?e:"default",k=(e,n,o,t)=>{!e||n<1||(t.current!==null&&clearTimeout(t.current),t.current=window.setTimeout(()=>{o()},n))},D=e=>{e.current!==null&&(clearTimeout(e.current),e.current=null)},g=({title:e,variant:n="info",dismissible:o=!1,autoDismiss:t=!1,autoDismissTimeout:i=1e4,onDismiss:l,className:f="",...c})=>{const[p,h]=r.useState(!0),u=r.useRef(null),{text:j,children:y}=c,d=()=>{h(!1),l&&l()};if(r.useEffect(()=>()=>{D(u)},[]),r.useEffect(()=>{k(t,i,d,u)},[t,i]),!p)return null;const b=$(n),v=q(n),w=T(n);return a.jsxs("div",{className:`juno-message juno-message-${n} ${B} ${v} ${f}`,...c,children:[a.jsx("div",{className:`juno-message-border ${V} ${w}`}),a.jsx(m,{icon:b,color:`jn-text-theme-${n}`,className:"jn-shrink-0"}),a.jsxs("div",{className:`juno-message-content ${N}`,children:[e&&a.jsx("h1",{className:S,children:e}),a.jsx("div",{children:y||j})]}),o&&a.jsx("div",{className:I,children:a.jsx(m,{icon:"close",onClick:d,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100"})})]})};try{g.displayName="Message",g.__docgenInfo={description:`A Message holds generally important information to help understand the contents, purpose, or state of a whole page or view.
Use sparingly, there should never be two or more subsequent instances of Message as direct siblings/neighbors on an individual view.`,displayName:"Message",props:{title:{defaultValue:null,description:"Pass an optional title.",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:`Pass an optional string of text to be rendered as content.
Alternatively, content can be passed as children (see below).
If children are provided, they will take precedence.`,name:"text",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"Specify an optional semantic variant that determines the appearance of a message.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'}]}},dismissible:{defaultValue:{value:"false"},description:"Optional. If true, the message will have a 'close' button to dismiss it.",name:"dismissible",required:!1,type:{name:"boolean"}},autoDismiss:{defaultValue:{value:"false"},description:"Optional. If true, the message will be automatically dismissed after the default or passed autoDismissTimeout.",name:"autoDismiss",required:!1,type:{name:"boolean"}},autoDismissTimeout:{defaultValue:{value:"10000"},description:`Optional. The timeout in milliseconds after which the message auto-dismisses.
By default 10000 (10s).`,name:"autoDismissTimeout",required:!1,type:{name:"number"}},onDismiss:{defaultValue:null,description:"Optional. Pass a handler that will be called when the message is dismissed.",name:"onDismiss",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the message.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Pass optional React nodes or a collection of React nodes to be rendered as content.
Takes precedence over the text property.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{g as M};
