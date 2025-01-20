import{I as oe,K as ee}from"./Icon.component-CZB-Rh8M.js";import{j as h}from"./jsx-runtime-D6fbYt3N.js";import"./index-DysCNOs_.js";import"./widgets-BR6-ubtP.js";const ce=`
  jn-rounded
  jn-text-sm
  jn-text-theme-default
  jn-py-0.5
  jn-px-1
  jn-justify-center
  jn-items-center
`,v={default:"jn-bg-theme-badge-default",info:"jn-bg-theme-info/25",success:"jn-bg-theme-success/25",warning:"jn-bg-theme-warning/25",danger:"jn-bg-theme-danger/25",error:"jn-bg-theme-error/25"},ie="jn-mr-1 jn-items-center",de=e=>v[e]||v.default,ue=(e,r)=>{if(typeof e=="string"&&pe(e))return e;if(e===!0)return r},le=(e,r)=>{if(e===!0)return`jn-text-theme-${r}`},pe=e=>new Set(Object.values(ee)).has(e),g=({variant:e="default",icon:r=!1,text:re="",className:ae="",children:ne,...te})=>{const f=ue(r,e),se=le(r,e);return h.jsxs("span",{className:`
        juno-badge 
        juno-badge-${e} 
        ${ce} 
        ${de(e)} 
        ${r?"jn-inline-flex":""} 
        ${ae}`,...te,children:[f&&h.jsx(oe,{icon:f,size:"1.125rem",className:ie,color:se}),ne||re]})};try{g.displayName="Badge",g.__docgenInfo={description:`A Badge is used to visually represent properties or states of an entity.
It supports multiple semantic versions, each with distinct styling.
Optionally, an icon can be included to further emphasize the meaning.`,displayName:"Badge",props:{variant:{defaultValue:{value:"default"},description:"Specify an optional semantic variant that determines the appearance of a badge.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"default"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},icon:{defaultValue:{value:"false"},description:`Optional.
If true, an icon corresponding to the variant will be displayed.
If a string is provided and it's a valid icon name, that icon will be displayed.`,name:"icon",required:!1,type:{name:'boolean | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | "cancel" | "check" | "checkCircle" | "chevronLeft" | ... 40 more ...'}},text:{defaultValue:{value:""},description:`Pass an optional string of text to be rendered as content.
Alternatively, content can be passed as children (see below).
If children are provided, they will take precedence.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the message.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Pass optional React nodes or a collection of React nodes to be rendered as content.
Takes precedence over the text property.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const ve={title:"Components/Badge",component:g,parameters:{text:"default"},argTypes:{icon:{options:["default",...Object.values(ee)],control:{type:"select"}},children:{control:!1}}},a={args:{text:"With Icon",icon:!0}},n={args:{text:"Deleted",icon:"deleteForever"}},t={args:{variant:"info",text:"Info"}},s={args:{variant:"info",text:"Info",icon:!0}},o={args:{variant:"success",text:"Success"}},c={args:{variant:"success",text:"Success",icon:!0}},i={args:{variant:"warning",text:"Warning"}},d={args:{variant:"warning",text:"Warning",icon:!0}},u={args:{variant:"danger",text:"Danger"}},l={args:{variant:"danger",text:"Danger",icon:!0}},p={args:{variant:"error",text:"Error"}},m={args:{variant:"error",text:"Error",icon:!0}};var x,I,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...(y=(I=a.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var S,j,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var W,w,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,_,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...(N=(_=s.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var V,B,C;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var A,$,q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var O,R,T;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var k,P,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var F,K,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var L,G,H;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const xe=["WithDefaultIcon","WithAnyIcon","Info","InfoWithIcon","Success","SuccessWithIcon","Warning","WarningWithIcon","Danger","DangerWithIcon","Error","ErrorWithIcon"];export{u as Danger,l as DangerWithIcon,p as Error,m as ErrorWithIcon,t as Info,s as InfoWithIcon,o as Success,c as SuccessWithIcon,i as Warning,d as WarningWithIcon,n as WithAnyIcon,a as WithDefaultIcon,xe as __namedExportsOrder,ve as default};
