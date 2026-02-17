import{r as a,j as s}from"./iframe-uajUw8cl.js";import{I as x}from"./Icon.component-p83e1SuN.js";import"./preload-helper-PPVm8Dsz.js";const D=`
    jn:bg-theme-background-lvl-1
    jn:text-theme-high 
    jn:inline-flex	
    jn:items-start
    jn:p-2
    jn:mb-8
    jn:rounded
`,T=`
    jn:mx-4
    jn:max-w-full
`,k=e=>e==="error"?"dangerous":e,p=({variant:e="info",children:g,text:h="",autoDismiss:f=!1,autoDismissTimeout:m=1e4,onDismiss:v,className:y="",...j})=>{const[b,S]=a.useState(!0),l=a.useRef(setTimeout(()=>d(),m));a.useEffect(()=>()=>clearTimeout(l.current),[]),a.useEffect(()=>{f&&(clearTimeout(l.current),l.current=setTimeout(()=>d(),m))},[f,m]);const d=()=>{S(!1),v&&v()};return s.jsx(s.Fragment,{children:b&&s.jsxs("div",{className:`juno-toast juno-toast-${e} ${D} ${y}`,...j,children:[s.jsx(x,{icon:k(e),color:"jn:text-theme-"+e,className:"jn:shrink-0"}),s.jsx("div",{className:`juno-toast-text ${T}`,children:g||h}),s.jsx(x,{icon:"close",onClick:d,className:"juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0"})]})})};try{p.displayName="Toast",p.__docgenInfo={description:"A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.",displayName:"Toast",props:{variant:{defaultValue:{value:"info"},description:"Specify a semantic variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'}]}},children:{defaultValue:null,description:"Pass child nodes to be rendered as contents",name:"children",required:!1,type:{name:"ReactNode"}},text:{defaultValue:{value:""},description:"Pass an optional text",name:"text",required:!1,type:{name:"string"}},autoDismiss:{defaultValue:{value:"false"},description:"Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout",name:"autoDismiss",required:!1,type:{name:"boolean"}},autoDismissTimeout:{defaultValue:{value:"10000"},description:"Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).",name:"autoDismissTimeout",required:!1,type:{name:"number"}},onDismiss:{defaultValue:null,description:"Optional. Pass a handler that will be called when the message is dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"Pass an optional className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const E={title:"WiP/Toast",component:p,argTypes:{children:{control:!1}}},t={args:{text:"Default Message."}},r={args:{variant:"warning",text:"Warning Message."}},o={args:{variant:"error",text:"Error Message."}},n={args:{variant:"danger",text:"Danger Message."}},i={args:{variant:"success",text:"Success Message"}},u={args:{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},c={args:{text:"AutoDismiss in 10 sec.",autoDismiss:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Default Message."
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning Message."
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error Message."
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger Message."
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success Message"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: "AutoDismiss in 10 sec.",
    autoDismiss: true
  }
}`,...c.parameters?.docs?.source}}};const L=["Default","Warning","Error","Danger","Success","ToastWithLongText","AutoDismiss"];export{c as AutoDismiss,n as Danger,t as Default,o as Error,i as Success,u as ToastWithLongText,r as Warning,L as __namedExportsOrder,E as default};
