import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{n,t as r}from"./Icon.component-BYUQ4r57.js";e();var i=t(),a=`
  jn:inline-flex
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,o={default:`jn:bg-theme-badge-default`,info:`jn:bg-theme-info/25`,success:`jn:bg-theme-success/25`,warning:`jn:bg-theme-warning/25`,danger:`jn:bg-theme-danger/25`,error:`jn:bg-theme-error/25`},s=`jn:mr-1 jn:items-center`,c=e=>o[e]||o.default,l=(e,t)=>{if(typeof e==`string`&&d(e))return e;if(e===!0)return t},u=(e,t)=>{if(e===!0)return`jn:text-theme-${t}`},d=e=>new Set(Object.values(n)).has(e),f=({variant:e=`default`,icon:t=!1,text:n=``,className:o=``,children:d,...f})=>{let p=l(t,e),m=u(t,e);return(0,i.jsxs)(`span`,{className:`
        juno-badge
        juno-badge-${e}
        ${a}
        ${c(e)}
        ${o}`,...f,children:[p&&(0,i.jsx)(r,{icon:p,size:`1.125rem`,className:s,color:m}),d||n]})};try{f.displayName=`Badge`,f.__docgenInfo={description:`The \`Badge\` component visually represents properties or states of an entity.
It supports multiple semantic variants, each with distinct styling. An optional
icon can be included to further emphasize meaning.`,displayName:`Badge`,props:{variant:{defaultValue:{value:`default`},description:`Specify a semantic variant that determines the appearance of the badge.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"danger"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},icon:{defaultValue:{value:`false`},description:`Determines whether to display an icon. If set to \`true\`, an icon related
to the variant will be used. If a valid string representing a known icon
is provided, that icon will be displayed.`,name:`icon`,required:!1,type:{name:`boolean | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | "cancel" | ... 47 more ...`}},text:{defaultValue:{value:``},description:`The optional text content of the badge. If children are provided, they take precedence.`,name:`text`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Additional CSS class to apply to the badge.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:"React nodes or a collection of React nodes to be rendered as content, taking\nprecedence over the `text` property.",name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var p={title:`Components/Badge`,component:f,parameters:{text:`default`},argTypes:{icon:{options:[`default`,...Object.values(n)],control:{type:`select`}},children:{control:!1}}},m={args:{text:`With Icon`,icon:!0}},h={args:{text:`Deleted`,icon:`deleteForever`}},g={args:{variant:`info`,text:`Info`}},_={args:{variant:`info`,text:`Info`,icon:!0}},v={args:{variant:`success`,text:`Success`}},y={args:{variant:`success`,text:`Success`,icon:!0}},b={args:{variant:`warning`,text:`Warning`}},x={args:{variant:`warning`,text:`Warning`,icon:!0}},S={args:{variant:`danger`,text:`Danger`}},C={args:{variant:`danger`,text:`Danger`,icon:!0}},w={args:{variant:`error`,text:`Error`}},T={args:{variant:`error`,text:`Error`,icon:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...T.parameters?.docs?.source}}};var E=[`WithDefaultIcon`,`WithAnyIcon`,`Info`,`InfoWithIcon`,`Success`,`SuccessWithIcon`,`Warning`,`WarningWithIcon`,`Danger`,`DangerWithIcon`,`Error`,`ErrorWithIcon`];export{S as Danger,C as DangerWithIcon,w as Error,T as ErrorWithIcon,g as Info,_ as InfoWithIcon,v as Success,y as SuccessWithIcon,b as Warning,x as WarningWithIcon,h as WithAnyIcon,m as WithDefaultIcon,E as __namedExportsOrder,p as default};