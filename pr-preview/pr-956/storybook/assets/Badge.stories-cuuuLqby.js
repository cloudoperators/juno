import{I as oe,K as re}from"./Icon.component-DUX6NYcJ.js";import{j as h}from"./iframe-CEZqkFCg.js";const ce=`
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,x={default:"jn:bg-theme-badge-default",info:"jn:bg-theme-info/25",success:"jn:bg-theme-success/25",warning:"jn:bg-theme-warning/25",danger:"jn:bg-theme-danger/25",error:"jn:bg-theme-error/25"},ie="jn:mr-1 jn:items-center",de=e=>x[e]||x.default,ue=(e,r)=>{if(typeof e=="string"&&pe(e))return e;if(e===!0)return r},le=(e,r)=>{if(e===!0)return`jn:text-theme-${r}`},pe=e=>new Set(Object.values(re)).has(e),g=({variant:e="default",icon:r=!1,text:ne="",className:ae="",children:te,...se})=>{const f=ue(r,e),v=le(r,e);return console.log(v),h.jsxs("span",{className:`
        juno-badge 
        juno-badge-${e} 
        ${ce} 
        ${de(e)} 
        ${r?"jn:inline-flex":""} 
        ${ae}`,...se,children:[f&&h.jsx(oe,{icon:f,size:"1.125rem",className:ie,color:v}),te||ne]})};try{g.displayName="Badge",g.__docgenInfo={description:`A Badge is used to visually represent properties or states of an entity.
It supports multiple semantic versions, each with distinct styling.
Optionally, an icon can be included to further emphasize the meaning.`,displayName:"Badge",props:{variant:{defaultValue:{value:"default"},description:"Specify an optional semantic variant that determines the appearance of a badge.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"default"'}]}},icon:{defaultValue:{value:"false"},description:`Optional.
If true, an icon corresponding to the variant will be displayed.
If a string is provided and it's a valid icon name, that icon will be displayed.`,name:"icon",required:!1,type:{name:'boolean | "info" | "warning" | "danger" | "error" | "success" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | ... 39 more ...'}},text:{defaultValue:{value:""},description:`Pass an optional string of text to be rendered as content.
Alternatively, content can be passed as children (see below).
If children are provided, they will take precedence.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the message.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Pass optional React nodes or a collection of React nodes to be rendered as content.
Takes precedence over the text property.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const fe={title:"Components/Badge",component:g,parameters:{text:"default"},argTypes:{icon:{options:["default",...Object.values(re)],control:{type:"select"}},children:{control:!1}}},n={args:{text:"With Icon",icon:!0}},a={args:{text:"Deleted",icon:"deleteForever"}},t={args:{variant:"info",text:"Info"}},s={args:{variant:"info",text:"Info",icon:!0}},o={args:{variant:"success",text:"Success"}},c={args:{variant:"success",text:"Success",icon:!0}},i={args:{variant:"warning",text:"Warning"}},d={args:{variant:"warning",text:"Warning",icon:!0}},u={args:{variant:"danger",text:"Danger"}},l={args:{variant:"danger",text:"Danger",icon:!0}},p={args:{variant:"error",text:"Error"}},m={args:{variant:"error",text:"Error",icon:!0}};var I,y,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,b,W;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...(W=(b=a.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var w,D,E;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...(E=(D=t.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var _,N,V;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...(V=(N=s.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var A,B,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var $,q,O;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...(O=(q=c.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var R,T,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...(P=(T=i.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var k,z,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var K,M,G;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...(G=(M=u.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var H,J,L;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...(L=(J=l.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ve=["WithDefaultIcon","WithAnyIcon","Info","InfoWithIcon","Success","SuccessWithIcon","Warning","WarningWithIcon","Danger","DangerWithIcon","Error","ErrorWithIcon"];export{u as Danger,l as DangerWithIcon,p as Error,m as ErrorWithIcon,t as Info,s as InfoWithIcon,o as Success,c as SuccessWithIcon,i as Warning,d as WarningWithIcon,a as WithAnyIcon,n as WithDefaultIcon,ve as __namedExportsOrder,fe as default};
