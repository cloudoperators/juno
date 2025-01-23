import{j as s}from"./jsx-runtime-D6fbYt3N.js";import{r as v,e as x}from"./index-DysCNOs_.js";import{I as h}from"./Icon.component-CNx4B0MY.js";import"./widgets-BR6-ubtP.js";const z=`
    jn-bg-theme-background-lvl-1
    jn-text-theme-high 
    jn-inline-flex	
    jn-items-start
    jn-p-2
    jn-mb-8
    jn-rounded
`,G=`
    jn-mx-4
    jn-max-w-full
`,H=e=>{switch(e){case"error":return"dangerous";default:return e}},d=({variant:e="info",children:p,text:$="",autoDismiss:g=!1,autoDismissTimeout:m=1e4,onDismiss:f,className:F="",...B})=>{const[C,U]=v.useState(!0),c=x.useRef(setTimeout(()=>l(),m));x.useEffect(()=>()=>clearTimeout(c.current),[]),v.useEffect(()=>{g&&(clearTimeout(c.current),c.current=setTimeout(()=>l(),m))},[g,m]);const l=()=>{U(!1),f&&f()};return s.jsx(s.Fragment,{children:C&&s.jsxs("div",{className:`juno-toast juno-toast-${e} ${z} ${F}`,...B,children:[s.jsx(h,{icon:H(e),color:"jn-text-theme-"+e,className:"jn-shrink-0"}),s.jsx("div",{className:`juno-toast-text ${G}`,children:p||$}),s.jsx(h,{icon:"close",onClick:l,className:"juno-message-close-button jn-opacity-50 hover:jn-opacity-100 jn-shrink-0"})]})})};try{d.displayName="Toast",d.__docgenInfo={description:"A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.",displayName:"Toast",props:{variant:{defaultValue:{value:"info"},description:"Specify a semantic variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},children:{defaultValue:null,description:"Pass child nodes to be rendered as contents",name:"children",required:!1,type:{name:"ReactNode"}},text:{defaultValue:{value:""},description:"Pass an optional text",name:"text",required:!1,type:{name:"string"}},autoDismiss:{defaultValue:{value:"false"},description:"Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout",name:"autoDismiss",required:!1,type:{name:"boolean"}},autoDismissTimeout:{defaultValue:{value:"10000"},description:"Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).",name:"autoDismissTimeout",required:!1,type:{name:"number"}},onDismiss:{defaultValue:null,description:"Optional. Pass a handler that will be called when the message is dismissed",name:"onDismiss",required:!1,type:{name:"(() => unknown)"}},className:{defaultValue:{value:""},description:"Pass an optional className",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Y={title:"WiP/Toast",component:d,argTypes:{children:{control:!1}}},a={args:{text:"Default Message."}},t={args:{variant:"warning",text:"Warning Message."}},r={args:{variant:"error",text:"Error Message."}},o={args:{variant:"danger",text:"Danger Message."}},n={args:{variant:"success",text:"Success Message"}},i={args:{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},u={args:{text:"AutoDismiss in 10 sec.",autoDismiss:!0}};var y,j,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: "Default Message."
  }
}`,...(b=(j=a.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var S,D,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning Message."
  }
}`,...(T=(D=t.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var k,w,M;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error Message."
  }
}`,...(M=(w=r.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var q,_,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger Message."
  }
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var L,N,V;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success Message"
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var A,W,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  }
}`,...(I=(W=i.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var O,P,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: "AutoDismiss in 10 sec.",
    autoDismiss: true
  }
}`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const Z=["Default","Warning","Error","Danger","Success","ToastWithLongText","autoDismiss"];export{o as Danger,a as Default,r as Error,n as Success,i as ToastWithLongText,t as Warning,Z as __namedExportsOrder,u as autoDismiss,Y as default};
