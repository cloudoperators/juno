import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-CqTKIliT.js";import{t as r}from"./Icon.component-C3boFjVm.js";import{t as i}from"./Icon-_GDjKWP0.js";var a,o,s,c,l,u=e((()=>{n(),i(),a=t(),o=`
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
`,c=e=>{switch(e){case`error`:return`dangerous`;default:return e}},l=({variant:e=`info`,children:t,text:n=``,onDismiss:i,className:l=``,...u})=>(0,a.jsxs)(`div`,{className:`juno-toast juno-toast-${e} ${o} ${l}`,...u,children:[(0,a.jsx)(r,{icon:c(e),color:`jn:text-theme-`+e,className:`jn:shrink-0`}),(0,a.jsx)(`div`,{className:`juno-toast-text ${s}`,children:t||n}),(0,a.jsx)(r,{icon:`close`,onClick:i,className:`juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0`})]});try{l.displayName=`Toast`,l.__docgenInfo={description:`A purely presentational Toast component. Renders toast content with semantic
styling and icons. All lifecycle logic (timers, auto-dismiss, queueing) is
delegated to NotificationManager.

Use NotificationManager with the toast() API for handling notifications.`,displayName:`Toast`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Toast/Toast.component.tsx`,methods:[],props:{variant:{defaultValue:{value:`info`},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Specify a semantic variant`,name:`variant`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`enum`,raw:`ToastVariant`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`}]}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Pass child nodes to be rendered as contents`,name:`children`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`ReactNode`}},text:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Pass an optional text`,name:`text`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`string`}},onDismiss:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Pass a handler that will be called when the close button is clicked`,name:`onDismiss`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`(() => void)`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`}],description:`Pass an optional className`,name:`className`,parent:{fileName:`ui-components/src/components/Toast/Toast.component.tsx`,name:`ToastProps`},required:!1,tags:{},type:{name:`string`}}},tags:{see:`NotificationManager - Handles all toast lifecycle and queueing
https://cloudoperators.github.io/juno/?path=/docs/wip-toast--docs
{@link ToastProps }`}}}catch{}})),d=e((()=>{u()}));export{l as n,u as r,d as t};