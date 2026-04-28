import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";var i=e(t()),a=n(),o=`
    jn:bg-theme-background-lvl-1
    jn:text-theme-high 
    jn:inline-flex	
    jn:items-start
    jn:p-2
    jn:mb-8
    jn:rounded
`,s=`
    jn:mx-4
    jn:max-w-full
`,c=e=>{switch(e){case`error`:return`dangerous`;default:return e}},l=({variant:e=`info`,children:t,text:n=``,autoDismiss:l=!1,autoDismissTimeout:u=1e4,onDismiss:d,className:f=``,...p})=>{let[m,h]=(0,i.useState)(!0),g=(0,i.useRef)(setTimeout(()=>_(),u));(0,i.useEffect)(()=>()=>clearTimeout(g.current),[]),(0,i.useEffect)(()=>{l&&(clearTimeout(g.current),g.current=setTimeout(()=>_(),u))},[l,u]);let _=()=>{h(!1),d&&d()};return(0,a.jsx)(a.Fragment,{children:m&&(0,a.jsxs)(`div`,{className:`juno-toast juno-toast-${e} ${o} ${f}`,...p,children:[(0,a.jsx)(r,{icon:c(e),color:`jn:text-theme-`+e,className:`jn:shrink-0`}),(0,a.jsx)(`div`,{className:`juno-toast-text ${s}`,children:t||n}),(0,a.jsx)(r,{icon:`close`,onClick:_,className:`juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0`})]})})};try{l.displayName=`Toast`,l.__docgenInfo={description:`A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.`,displayName:`Toast`,props:{variant:{defaultValue:{value:`info`},description:`Specify a semantic variant`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"danger"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},children:{defaultValue:null,description:`Pass child nodes to be rendered as contents`,name:`children`,required:!1,type:{name:`ReactNode`}},text:{defaultValue:{value:``},description:`Pass an optional text`,name:`text`,required:!1,type:{name:`string`}},autoDismiss:{defaultValue:{value:`false`},description:`Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout`,name:`autoDismiss`,required:!1,type:{name:`boolean`}},autoDismissTimeout:{defaultValue:{value:`10000`},description:`Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).`,name:`autoDismissTimeout`,required:!1,type:{name:`number`}},onDismiss:{defaultValue:null,description:`Optional. Pass a handler that will be called when the message is dismissed`,name:`onDismiss`,required:!1,type:{name:`(() => void)`}},className:{defaultValue:{value:``},description:`Pass an optional className`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var u={title:`WiP/Toast`,component:l,argTypes:{children:{control:!1}}},d={args:{text:`Default Message.`}},f={args:{variant:`warning`,text:`Warning Message.`}},p={args:{variant:`error`,text:`Error Message.`}},m={args:{variant:`danger`,text:`Danger Message.`}},h={args:{variant:`success`,text:`Success Message`}},g={args:{text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`}},_={args:{text:`AutoDismiss in 10 sec.`,autoDismiss:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Default Message."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning Message."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error Message."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger Message."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success Message"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    text: "AutoDismiss in 10 sec.",
    autoDismiss: true
  }
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`Warning`,`Error`,`Danger`,`Success`,`ToastWithLongText`,`AutoDismiss`];export{_ as AutoDismiss,m as Danger,d as Default,p as Error,h as Success,g as ToastWithLongText,f as Warning,v as __namedExportsOrder,u as default};