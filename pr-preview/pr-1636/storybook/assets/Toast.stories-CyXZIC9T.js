import{g as e}from"./iframe-DmqlBy6I.js";import{t}from"./Icon.component-Bc6oc1sZ.js";import"./Icon-D5Vcq2jT.js";import{useEffect as n,useRef as r,useState as i}from"react";var a=e(),o=`
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
`,c=e=>{switch(e){case`error`:return`dangerous`;default:return e}},l=({variant:e=`info`,children:l,text:u=``,autoDismiss:d=!1,autoDismissTimeout:f=1e4,onDismiss:p,className:m=``,...h})=>{let[g,_]=i(!0),v=r(setTimeout(()=>y(),f));n(()=>()=>clearTimeout(v.current),[]),n(()=>{d&&(clearTimeout(v.current),v.current=setTimeout(()=>y(),f))},[d,f]);let y=()=>{_(!1),p&&p()};return(0,a.jsx)(a.Fragment,{children:g&&(0,a.jsxs)(`div`,{className:`juno-toast juno-toast-${e} ${o} ${m}`,...h,children:[(0,a.jsx)(t,{icon:c(e),color:`jn:text-theme-`+e,className:`jn:shrink-0`}),(0,a.jsx)(`div`,{className:`juno-toast-text ${s}`,children:l||u}),(0,a.jsx)(t,{icon:`close`,onClick:y,className:`juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0`})]})})};try{l.displayName=`Toast`,l.__docgenInfo={description:`A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.`,displayName:`Toast`,props:{variant:{defaultValue:{value:`info`},description:`Specify a semantic variant`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`}]}},children:{defaultValue:null,description:`Pass child nodes to be rendered as contents`,name:`children`,required:!1,type:{name:`ReactNode`}},text:{defaultValue:{value:``},description:`Pass an optional text`,name:`text`,required:!1,type:{name:`string`}},autoDismiss:{defaultValue:{value:`false`},description:`Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout`,name:`autoDismiss`,required:!1,type:{name:`boolean`}},autoDismissTimeout:{defaultValue:{value:`10000`},description:`Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).`,name:`autoDismissTimeout`,required:!1,type:{name:`number`}},onDismiss:{defaultValue:null,description:`Optional. Pass a handler that will be called when the message is dismissed`,name:`onDismiss`,required:!1,type:{name:`(() => void)`}},className:{defaultValue:{value:``},description:`Pass an optional className`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var u={title:`WiP/Toast`,component:l,argTypes:{children:{control:!1}}},d={args:{text:`Default Message.`}},f={args:{variant:`warning`,text:`Warning Message.`}},p={args:{variant:`error`,text:`Error Message.`}},m={args:{variant:`danger`,text:`Danger Message.`}},h={args:{variant:`success`,text:`Success Message`}},g={args:{text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`}},_={args:{text:`AutoDismiss in 10 sec.`,autoDismiss:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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