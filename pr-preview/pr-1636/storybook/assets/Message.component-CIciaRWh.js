import{g as e}from"./iframe-DmqlBy6I.js";import{n as t,t as n}from"./Icon.component-Bc6oc1sZ.js";import"./Icon-D5Vcq2jT.js";import{useEffect as r,useRef as i,useState as a}from"react";var o=e(),s=`
    jn:text-theme-high
    jn:flex
    jn:rounded
    jn:leading-5
    jn:overflow-hidden
    jn:items-start
`,c=`
    jn:mt-2
	jn:mb-2
`,l=`
    jn:font-bold
`,u=`
    jn:pt-2
	jn:pb-2.5
    jn:pr-4
    jn:ml-2.5
`,d=`
    jn:w-[4px]
    jn:self-stretch
    jn:border-l-4
    jn:mr-2.5
    jn:shrink-0
`,f=`
    jn:ml-auto
    jn:self-stretch
    jn:flex
    jn:flex-col
    jn:py-2
    jn:pr-2.5
`,p={default:`jn:border-theme-message-default`,defaultBg:`jn:bg-theme-message-default`,error:`jn:border-theme-message-error`,errorBg:`jn:bg-theme-message-error`,warning:`jn:border-theme-message-warning`,warningBg:`jn:bg-theme-message-warning`,danger:`jn:border-theme-message-danger`,dangerBg:`jn:bg-theme-message-danger`,success:`jn:border-theme-message-success`,successBg:`jn:bg-theme-message-success`},m=e=>{switch(e){case`error`:return p.errorBg;case`warning`:return p.warningBg;case`success`:return p.successBg;case`info`:return p.defaultBg;case`danger`:return p.dangerBg;default:return p.defaultBg}},h=e=>{switch(e){case`error`:return p.error;case`warning`:return p.warning;case`success`:return p.success;case`info`:return p.default;case`danger`:return p.danger;default:return p.default}},g=e=>new Set(Object.values(t)).has(e),_=e=>e===`error`?`dangerous`:g(e)?e:`default`,v=e=>{switch(e){case`info`:return`jn:text-theme-info jn:shrink-0`;case`warning`:return`jn:text-theme-warning jn:shrink-0`;case`danger`:return`jn:text-theme-danger jn:shrink-0`;case`error`:return`jn:text-theme-error jn:shrink-0`;case`success`:return`jn:text-theme-success jn:shrink-0`;default:return`jn:text-theme-info jn:shrink-0`}},y=(e,t,n,r)=>{!e||t<1||(r.current!==null&&clearTimeout(r.current),r.current=window.setTimeout(()=>{n()},t))},b=e=>{e.current!==null&&(clearTimeout(e.current),e.current=null)},x=({title:e,variant:t=`info`,dismissible:p=!1,autoDismiss:g=!1,autoDismissTimeout:x=1e4,onDismiss:S,className:C=``,...w})=>{let[T,E]=a(!0),D=i(null),{text:O,children:k}=w,A=()=>{E(!1),S&&S()};if(r(()=>()=>{b(D)},[]),r(()=>{y(g,x,A,D)},[g,x]),!T)return null;let j=_(t),M=m(t),N=h(t);return(0,o.jsxs)(`div`,{className:`juno-message juno-message-${t} ${s} ${M} ${C}`,...w,children:[(0,o.jsx)(`div`,{className:`juno-message-border ${d} ${N}`}),(0,o.jsx)(n,{icon:j,size:21,className:`${v(t)} ${c}`}),(0,o.jsxs)(`div`,{className:`juno-message-content ${u}`,children:[e&&(0,o.jsx)(`h1`,{className:l,children:e}),(0,o.jsx)(`div`,{children:k||O})]}),p&&(0,o.jsx)(`div`,{className:f,children:(0,o.jsx)(n,{icon:`close`,onClick:A,className:`juno-message-close-button jn:opacity-50 jn:hover:opacity-100`})})]})};try{x.displayName=`Message`,x.__docgenInfo={description:"The `Message` component displays important information or alerts concerning the content,\npage state, or the view's purpose, with support for dismissible and auto-dismiss features.",displayName:`Message`,props:{title:{defaultValue:null,description:`Optional title for the message.`,name:`title`,required:!1,type:{name:`string`}},text:{defaultValue:null,description:`Optional string of text to be rendered as content.
Alternatively, content can be passed as children (see below).
If children are provided, they will take precedence.`,name:`text`,required:!1,type:{name:`string`}},variant:{defaultValue:{value:`info`},description:`Specify an optional semantic variant that determines the appearance of a message.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`}]}},dismissible:{defaultValue:{value:`false`},description:`Optional. If true, the message will have a 'close' button to dismiss it.`,name:`dismissible`,required:!1,type:{name:`boolean`}},autoDismiss:{defaultValue:{value:`false`},description:`Optional. If true, the message will be automatically dismissed after the default or passed autoDismissTimeout.`,name:`autoDismiss`,required:!1,type:{name:`boolean`}},autoDismissTimeout:{defaultValue:{value:`10000`},description:`Optional. The timeout in milliseconds after which the message auto-dismisses.
By default 10000 (10s).`,name:`autoDismissTimeout`,required:!1,type:{name:`number`}},onDismiss:{defaultValue:null,description:`Optional. Pass a handler that will be called when the message is dismissed.`,name:`onDismiss`,required:!1,type:{name:`(() => void)`}},className:{defaultValue:{value:``},description:`Pass an optional CSS class to apply to the message.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Pass optional React nodes or a collection of React nodes to be rendered as content.
Takes precedence over the text property.`,name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}export{x as t};