import{r as v,e as x,j as s}from"./iframe-DyCPtK3f.js";import{I as h}from"./Icon.component-DwNHa71Q.js";const T=`
    jn:bg-theme-background-lvl-1
    jn:text-theme-high 
    jn:inline-flex	
    jn:items-start
    jn:p-2
    jn:mb-8
    jn:rounded
`,k=`
    jn:mx-4
    jn:max-w-full
`,M=e=>{switch(e){case"error":return"dangerous";default:return e}},d=({variant:e="info",children:g,text:y="",autoDismiss:p=!1,autoDismissTimeout:c=1e4,onDismiss:f,className:j="",...b})=>{const[S,D]=v.useState(!0),m=x.useRef(setTimeout(()=>l(),c));x.useEffect(()=>()=>clearTimeout(m.current),[]),v.useEffect(()=>{p&&(clearTimeout(m.current),m.current=setTimeout(()=>l(),c))},[p,c]);const l=()=>{D(!1),f&&f()};return s.jsx(s.Fragment,{children:S&&s.jsxs("div",{className:`juno-toast juno-toast-${e} ${T} ${j}`,...b,children:[s.jsx(h,{icon:M(e),color:"jn:text-theme-"+e,className:"jn:shrink-0"}),s.jsx("div",{className:`juno-toast-text ${k}`,children:g||y}),s.jsx(h,{icon:"close",onClick:l,className:"juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0"})]})})};try{d.displayName="Toast",d.__docgenInfo={description:"A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.",displayName:"Toast",props:{variant:{defaultValue:{value:"info"},description:"Specify a semantic variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'}]}},children:{defaultValue:null,description:"Pass child nodes to be rendered as contents",name:"children",required:!1,type:{name:"ReactNode"}},text:{defaultValue:{value:""},description:"Pass an optional text",name:"text",required:!1,type:{name:"string"}},autoDismiss:{defaultValue:{value:"false"},description:"Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout",name:"autoDismiss",required:!1,type:{name:"boolean"}},autoDismissTimeout:{defaultValue:{value:"10000"},description:"Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).",name:"autoDismissTimeout",required:!1,type:{name:"number"}},onDismiss:{defaultValue:null,description:"Optional. Pass a handler that will be called when the message is dismissed",name:"onDismiss",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"Pass an optional className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const E={title:"WiP/Toast",component:d,argTypes:{children:{control:!1}}},a={args:{text:"Default Message."}},t={args:{variant:"warning",text:"Warning Message."}},r={args:{variant:"error",text:"Error Message."}},o={args:{variant:"danger",text:"Danger Message."}},n={args:{variant:"success",text:"Success Message"}},i={args:{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},u={args:{text:"AutoDismiss in 10 sec.",autoDismiss:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Default Message."
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning Message."
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error Message."
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger Message."
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success Message"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: "AutoDismiss in 10 sec.",
    autoDismiss: true
  }
}`,...u.parameters?.docs?.source}}};const L=["Default","Warning","Error","Danger","Success","ToastWithLongText","AutoDismiss"];export{u as AutoDismiss,o as Danger,a as Default,r as Error,n as Success,i as ToastWithLongText,t as Warning,L as __namedExportsOrder,E as default};
