import{g as e}from"./iframe-DmqlBy6I.js";import{n as t,t as n}from"./Icon.component-Bc6oc1sZ.js";import"react";var r=e(),i=`
  jn:inline-flex
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,a={default:`jn:bg-theme-badge-default`,info:`jn:bg-theme-info/25`,success:`jn:bg-theme-success/25`,warning:`jn:bg-theme-warning/25`,danger:`jn:bg-theme-danger/25`,error:`jn:bg-theme-error/25`},o=`jn:mr-1 jn:items-center`,s=e=>a[e]||a.default,c=(e,t)=>{if(typeof e==`string`&&u(e))return e;if(e===!0)return t},l=(e,t)=>{if(e===!0)return`jn:text-theme-${t}`},u=e=>new Set(Object.values(t)).has(e),d=({variant:e=`default`,icon:t=!1,text:a=``,className:u=``,children:d,...f})=>{let p=c(t,e),m=l(t,e);return(0,r.jsxs)(`span`,{className:`
        juno-badge
        juno-badge-${e}
        ${i}
        ${s(e)}
        ${u}`,...f,children:[p&&(0,r.jsx)(n,{icon:p,size:`1.125rem`,className:o,color:m}),d||a]})};try{d.displayName=`Badge`,d.__docgenInfo={description:`The \`Badge\` component visually represents properties or states of an entity.
It supports multiple semantic variants, each with distinct styling. An optional
icon can be included to further emphasize meaning.`,displayName:`Badge`,props:{variant:{defaultValue:{value:`default`},description:`Specify a semantic variant that determines the appearance of the badge.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`}]}},icon:{defaultValue:{value:`false`},description:`Determines whether to display an icon. If set to \`true\`, an icon related
to the variant will be used. If a valid string representing a known icon
is provided, that icon will be displayed.`,name:`icon`,required:!1,type:{name:`boolean | "search" | "info" | "warning" | "danger" | "error" | "success" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | ... 46 more ...`}},text:{defaultValue:{value:``},description:`The optional text content of the badge. If children are provided, they take precedence.`,name:`text`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Additional CSS class to apply to the badge.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:"React nodes or a collection of React nodes to be rendered as content, taking\nprecedence over the `text` property.",name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var f={title:`Components/Badge`,component:d,parameters:{text:`default`},argTypes:{icon:{options:[`default`,...Object.values(t)],control:{type:`select`}},children:{control:!1}}},p={args:{text:`With Icon`,icon:!0}},m={args:{text:`Deleted`,icon:`deleteForever`}},h={args:{variant:`info`,text:`Info`}},g={args:{variant:`info`,text:`Info`,icon:!0}},_={args:{variant:`success`,text:`Success`}},v={args:{variant:`success`,text:`Success`,icon:!0}},y={args:{variant:`warning`,text:`Warning`}},b={args:{variant:`warning`,text:`Warning`,icon:!0}},x={args:{variant:`danger`,text:`Danger`}},S={args:{variant:`danger`,text:`Danger`,icon:!0}},C={args:{variant:`error`,text:`Error`}},w={args:{variant:`error`,text:`Error`,icon:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...w.parameters?.docs?.source}}};var T=[`WithDefaultIcon`,`WithAnyIcon`,`Info`,`InfoWithIcon`,`Success`,`SuccessWithIcon`,`Warning`,`WarningWithIcon`,`Danger`,`DangerWithIcon`,`Error`,`ErrorWithIcon`];export{x as Danger,S as DangerWithIcon,C as Error,w as ErrorWithIcon,h as Info,g as InfoWithIcon,_ as Success,v as SuccessWithIcon,y as Warning,b as WarningWithIcon,m as WithAnyIcon,p as WithDefaultIcon,T as __namedExportsOrder,f as default};