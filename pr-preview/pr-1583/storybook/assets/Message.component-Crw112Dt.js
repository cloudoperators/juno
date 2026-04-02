import{r,j as t}from"./iframe-Y9o7PP7r.js";import{I as m,K as v}from"./Icon.component-UmRr9xjR.js";const S=`
    jn:text-theme-high
    jn:flex
    jn:rounded
    jn:leading-5
    jn:overflow-hidden
    jn:items-start
`,B=`
    jn:mt-2
	jn:mb-2 // In case without message title, to keep height consistent
`,I=`
    jn:font-bold
`,N=`
    jn:pt-2
	jn:pb-2.5
    jn:pr-4
    jn:ml-2.5
`,k=`
    jn:w-[4px]
    jn:self-stretch
    jn:border-l-4
    jn:mr-2.5
    jn:shrink-0
`,V=`
    jn:ml-auto
    jn:self-stretch
    jn:flex
    jn:flex-col
    jn:py-2
    jn:pr-2.5
`,s={default:"jn:border-theme-message-default",defaultBg:"jn:bg-theme-message-default",error:"jn:border-theme-message-error",errorBg:"jn:bg-theme-message-error",warning:"jn:border-theme-message-warning",warningBg:"jn:bg-theme-message-warning",danger:"jn:border-theme-message-danger",dangerBg:"jn:bg-theme-message-danger",success:"jn:border-theme-message-success",successBg:"jn:bg-theme-message-success"},T=e=>{switch(e){case"error":return s.errorBg;case"warning":return s.warningBg;case"success":return s.successBg;case"info":return s.defaultBg;case"danger":return s.dangerBg;default:return s.defaultBg}},q=e=>{switch(e){case"error":return s.error;case"warning":return s.warning;case"success":return s.success;case"info":return s.default;case"danger":return s.danger;default:return s.default}},$=e=>new Set(Object.values(v)).has(e),_=e=>e==="error"?"dangerous":$(e)?e:"default",D=e=>{switch(e){case"info":return"jn:text-theme-info jn:shrink-0";case"warning":return"jn:text-theme-warning jn:shrink-0";case"danger":return"jn:text-theme-danger jn:shrink-0";case"error":return"jn:text-theme-error jn:shrink-0";case"success":return"jn:text-theme-success jn:shrink-0";default:return"jn:text-theme-info jn:shrink-0"}},O=(e,n,i,a)=>{!e||n<1||(a.current!==null&&clearTimeout(a.current),a.current=window.setTimeout(()=>{i()},n))},M=e=>{e.current!==null&&(clearTimeout(e.current),e.current=null)},g=({title:e,variant:n="info",dismissible:i=!1,autoDismiss:a=!1,autoDismissTimeout:o=1e4,onDismiss:l,className:f="",...c})=>{const[h,p]=r.useState(!0),u=r.useRef(null),{text:j,children:y}=c,d=()=>{p(!1),l&&l()};if(r.useEffect(()=>()=>{M(u)},[]),r.useEffect(()=>{O(a,o,d,u)},[a,o]),!h)return null;const b=_(n),w=T(n),x=q(n);return t.jsxs("div",{className:`juno-message juno-message-${n} ${S} ${w} ${f}`,...c,children:[t.jsx("div",{className:`juno-message-border ${k} ${x}`}),t.jsx(m,{icon:b,size:21,className:`${D(n)} ${B}`}),t.jsxs("div",{className:`juno-message-content ${N}`,children:[e&&t.jsx("h1",{className:I,children:e}),t.jsx("div",{children:y||j})]}),i&&t.jsx("div",{className:V,children:t.jsx(m,{icon:"close",onClick:d,className:"juno-message-close-button jn:opacity-50 jn:hover:opacity-100"})})]})};try{g.displayName="Message",g.__docgenInfo={description:"The `Message` component displays important information or alerts concerning the content,\npage state, or the view's purpose, with support for dismissible and auto-dismiss features.",displayName:"Message",props:{title:{defaultValue:null,description:"Optional title for the message.",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:`Optional string of text to be rendered as content.
Alternatively, content can be passed as children (see below).
If children are provided, they will take precedence.`,name:"text",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"Specify an optional semantic variant that determines the appearance of a message.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'}]}},dismissible:{defaultValue:{value:"false"},description:"Optional. If true, the message will have a 'close' button to dismiss it.",name:"dismissible",required:!1,type:{name:"boolean"}},autoDismiss:{defaultValue:{value:"false"},description:"Optional. If true, the message will be automatically dismissed after the default or passed autoDismissTimeout.",name:"autoDismiss",required:!1,type:{name:"boolean"}},autoDismissTimeout:{defaultValue:{value:"10000"},description:`Optional. The timeout in milliseconds after which the message auto-dismisses.
By default 10000 (10s).`,name:"autoDismissTimeout",required:!1,type:{name:"number"}},onDismiss:{defaultValue:null,description:"Optional. Pass a handler that will be called when the message is dismissed.",name:"onDismiss",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the message.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Pass optional React nodes or a collection of React nodes to be rendered as content.
Takes precedence over the text property.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{g as M};
