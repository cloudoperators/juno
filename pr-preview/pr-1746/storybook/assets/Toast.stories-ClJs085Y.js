import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-D9306ajn.js";import{t as i}from"./Icon.component-BlqS6xSE.js";import{t as a}from"./Icon-CH0I9Ofc.js";var o,s,c,l,u,d,f=t((()=>{o=e(r()),a(),s=n(),c=`
    jn:bg-theme-background-lvl-1
    jn:text-theme-high 
    jn:inline-flex	
    jn:items-start
    jn:p-2
    jn:mb-8
    jn:rounded
`,l=`
    jn:mx-4
    jn:max-w-full
`,u=e=>{switch(e){case`error`:return`dangerous`;default:return e}},d=({variant:e=`info`,children:t,text:n=``,autoDismiss:r=!1,autoDismissTimeout:a=1e4,onDismiss:d,className:f=``,...p})=>{let[m,h]=(0,o.useState)(!0),g=(0,o.useRef)(setTimeout(()=>_(),a));(0,o.useEffect)(()=>()=>clearTimeout(g.current),[]),(0,o.useEffect)(()=>{r&&(clearTimeout(g.current),g.current=setTimeout(()=>_(),a))},[r,a]);let _=()=>{h(!1),d&&d()};return(0,s.jsx)(s.Fragment,{children:m&&(0,s.jsxs)(`div`,{className:`juno-toast juno-toast-${e} ${c} ${f}`,...p,children:[(0,s.jsx)(i,{icon:u(e),color:`jn:text-theme-`+e,className:`jn:shrink-0`}),(0,s.jsx)(`div`,{className:`juno-toast-text ${l}`,children:t||n}),(0,s.jsx)(i,{icon:`close`,onClick:_,className:`juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0`})]})})};try{d.displayName=`Toast`,d.__docgenInfo={description:`A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.`,displayName:`Toast`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Toast/Toast.component.tsx`,methods:[],props:{variant:{defaultValue:{value:`info`},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Specify a semantic variant`,name:`variant`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`enum`,raw:`IconType`,value:[{value:`"danger"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Pass child nodes to be rendered as contents`,name:`children`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`ReactNode`}},text:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Pass an optional text`,name:`text`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`string`}},autoDismiss:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout`,name:`autoDismiss`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`boolean`}},autoDismissTimeout:{defaultValue:{value:`10000`},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).`,name:`autoDismissTimeout`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`number`}},onDismiss:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Optional. Pass a handler that will be called when the message is dismissed`,name:`onDismiss`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`(() => void)`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Pass an optional className`,name:`className`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/wip-toast--docs
{@link ToastProps }`}}}catch{}})),p=t((()=>{f()})),m,h,g,_,v,y,b,x,S;t((()=>{p(),m={title:`WiP/Toast`,component:d,argTypes:{children:{control:!1}}},h={args:{text:`Default Message.`}},g={args:{variant:`warning`,text:`Warning Message.`}},_={args:{variant:`error`,text:`Error Message.`}},v={args:{variant:`danger`,text:`Danger Message.`}},y={args:{variant:`success`,text:`Success Message`}},b={args:{text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`}},x={args:{text:`AutoDismiss in 10 sec.`,autoDismiss:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Default Message."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning Message."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error Message."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger Message."
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success Message"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    text: "AutoDismiss in 10 sec.",
    autoDismiss: true
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Warning`,`Error`,`Danger`,`Success`,`ToastWithLongText`,`AutoDismiss`]}))();export{x as AutoDismiss,v as Danger,h as Default,_ as Error,y as Success,b as ToastWithLongText,g as Warning,S as __namedExportsOrder,m as default};