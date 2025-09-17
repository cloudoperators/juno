import{r,j as t}from"./iframe-B0cMG-31.js";import{I as m,K as x}from"./Icon.component-DVmOjCZA.js";const B=`
    jn:text-theme-high
    jn:flex
    jn:rounded
    jn:leading-5
    jn:overflow-hidden
    jn:items-center
`,S=`
    jn:font-bold
`,N=`
    jn:py-3
    jn:pr-4
    jn:ml-7
`,V=`
    jn:w-[4px]
    jn:self-stretch
    jn:border-l-4
    jn:mr-6
    jn:shrink-0
`,k=`
    jn:ml-auto
    jn:self-stretch
    jn:flex
    jn:flex-col
    jn:py-2.5
    jn:pr-2.5
`,s={default:"jn:border-theme-message-default",defaultBg:"jn:bg-theme-message-default",error:"jn:border-theme-message-error",errorBg:"jn:bg-theme-message-error",warning:"jn:border-theme-message-warning",warningBg:"jn:bg-theme-message-warning",danger:"jn:border-theme-message-danger",dangerBg:"jn:bg-theme-message-danger",success:"jn:border-theme-message-success",successBg:"jn:bg-theme-message-success"},I=e=>{switch(e){case"error":return s.errorBg;case"warning":return s.warningBg;case"success":return s.successBg;case"info":return s.defaultBg;case"danger":return s.dangerBg;default:return s.defaultBg}},q=e=>{switch(e){case"error":return s.error;case"warning":return s.warning;case"success":return s.success;case"info":return s.default;case"danger":return s.danger;default:return s.default}},T=e=>new Set(Object.values(x)).has(e),_=e=>e==="error"?"dangerous":T(e)?e:"default",$=e=>{switch(e){case"info":return"jn:text-theme-info jn:shrink-0";case"warning":return"jn:text-theme-warning jn:shrink-0";case"danger":return"jn:text-theme-danger jn:shrink-0";case"error":return"jn:text-theme-error jn:shrink-0";case"success":return"jn:text-theme-success jn:shrink-0";default:return"jn:text-theme-info jn:shrink-0"}},D=(e,n,i,a)=>{!e||n<1||(a.current!==null&&clearTimeout(a.current),a.current=window.setTimeout(()=>{i()},n))},M=e=>{e.current!==null&&(clearTimeout(e.current),e.current=null)},g=({title:e,variant:n="info",dismissible:i=!1,autoDismiss:a=!1,autoDismissTimeout:o=1e4,onDismiss:l,className:f="",...c})=>{const[h,p]=r.useState(!0),u=r.useRef(null),{text:j,children:y}=c,d=()=>{p(!1),l&&l()};if(r.useEffect(()=>()=>{M(u)},[]),r.useEffect(()=>{D(a,o,d,u)},[a,o]),!h)return null;const b=_(n),w=I(n),v=q(n);return t.jsxs("div",{className:`juno-message juno-message-${n} ${B} ${w} ${f}`,...c,children:[t.jsx("div",{className:`juno-message-border ${V} ${v}`}),t.jsx(m,{icon:b,className:`${$(n)}`}),t.jsxs("div",{className:`juno-message-content ${N}`,children:[e&&t.jsx("h1",{className:S,children:e}),t.jsx("div",{children:y||j})]}),i&&t.jsx("div",{className:k,children:t.jsx(m,{icon:"close",onClick:d,className:"juno-message-close-button jn:opacity-50 jn:hover:opacity-100"})})]})};try{g.displayName="Message",g.__docgenInfo={description:`A Message holds generally important information to help understand the contents, purpose, or state of a whole page or view.
Use sparingly, there should never be two or more subsequent instances of Message as direct siblings/neighbors on an individual view.`,displayName:"Message",props:{title:{defaultValue:null,description:"Pass an optional title.",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:`Pass an optional string of text to be rendered as content.
Alternatively, content can be passed as children (see below).
If children are provided, they will take precedence.`,name:"text",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"Specify an optional semantic variant that determines the appearance of a message.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'}]}},dismissible:{defaultValue:{value:"false"},description:"Optional. If true, the message will have a 'close' button to dismiss it.",name:"dismissible",required:!1,type:{name:"boolean"}},autoDismiss:{defaultValue:{value:"false"},description:"Optional. If true, the message will be automatically dismissed after the default or passed autoDismissTimeout.",name:"autoDismiss",required:!1,type:{name:"boolean"}},autoDismissTimeout:{defaultValue:{value:"10000"},description:`Optional. The timeout in milliseconds after which the message auto-dismisses.
By default 10000 (10s).`,name:"autoDismissTimeout",required:!1,type:{name:"number"}},onDismiss:{defaultValue:null,description:"Optional. Pass a handler that will be called when the message is dismissed.",name:"onDismiss",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the message.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Pass optional React nodes or a collection of React nodes to be rendered as content.
Takes precedence over the text property.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{g as M};
