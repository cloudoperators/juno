import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,z as n}from"./iframe-NsHGmDuJ.js";import{n as r,r as i,t as a}from"./Icon.component-Cv8Z0gH2.js";var o,s,c,l,u,d,f,p,m,h=e((()=>{n(),i(),o=t(),s=`
  jn:inline-flex
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,c={default:`jn:bg-theme-badge-default`,info:`jn:bg-theme-info/25`,success:`jn:bg-theme-success/25`,warning:`jn:bg-theme-warning/25`,danger:`jn:bg-theme-danger/25`,error:`jn:bg-theme-error/25`},l=`jn:mr-1 jn:items-center`,u=e=>c[e]||c.default,d=(e,t)=>{if(typeof e==`string`&&p(e))return e;if(e===!0)return t},f=(e,t)=>{if(e===!0)return`jn:text-theme-${t}`},p=e=>new Set(Object.values(r)).has(e),m=({variant:e=`default`,icon:t=!1,text:n=``,className:r=``,children:i,...c})=>{let p=d(t,e),m=f(t,e);return(0,o.jsxs)(`span`,{className:`
        juno-badge
        juno-badge-${e}
        ${s}
        ${u(e)}
        ${r}`,...c,children:[p&&(0,o.jsx)(a,{icon:p,size:`1.125rem`,className:l,color:m}),i||n]})};try{m.displayName=`Badge`,m.__docgenInfo={description:`The \`Badge\` component visually represents properties or states of an entity.
It supports multiple semantic variants, each with distinct styling. An optional
icon can be included to further emphasize meaning.`,displayName:`Badge`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Badge/Badge.component.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Specify a semantic variant that determines the appearance of the badge.`,name:`variant`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`"default"`},type:{name:`enum`,raw:`BadgeVariantType`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`}]}},icon:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Determines whether to display an icon. If set to \`true\`, an icon related
to the variant will be used. If a valid string representing a known icon
is provided, that icon will be displayed.`,name:`icon`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean | "info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 45 more ...`}},text:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`The optional text content of the badge. If children are provided, they take precedence.`,name:`text`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Additional CSS class to apply to the badge.`,name:`className`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`""`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"React nodes or a collection of React nodes to be rendered as content, taking\nprecedence over the `text` property.",name:`children`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
{@link BadgeProps }`}}}catch{}})),g=e((()=>{h()})),_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{i(),g(),_={title:`Components/Badge`,component:m,parameters:{text:`default`},argTypes:{icon:{options:[`default`,...Object.values(r)],control:{type:`select`}},children:{control:!1}}},v={args:{text:`With Icon`,icon:!0}},y={args:{text:`Deleted`,icon:`deleteForever`}},b={args:{variant:`info`,text:`Info`}},x={args:{variant:`info`,text:`Info`,icon:!0}},S={args:{variant:`success`,text:`Success`}},C={args:{variant:`success`,text:`Success`,icon:!0}},w={args:{variant:`warning`,text:`Warning`}},T={args:{variant:`warning`,text:`Warning`,icon:!0}},E={args:{variant:`danger`,text:`Danger`}},D={args:{variant:`danger`,text:`Danger`,icon:!0}},O={args:{variant:`error`,text:`Error`}},k={args:{variant:`error`,text:`Error`,icon:!0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...k.parameters?.docs?.source}}},A=[`WithDefaultIcon`,`WithAnyIcon`,`Info`,`InfoWithIcon`,`Success`,`SuccessWithIcon`,`Warning`,`WarningWithIcon`,`Danger`,`DangerWithIcon`,`Error`,`ErrorWithIcon`]}))();export{E as Danger,D as DangerWithIcon,O as Error,k as ErrorWithIcon,b as Info,x as InfoWithIcon,S as Success,C as SuccessWithIcon,w as Warning,T as WarningWithIcon,y as WithAnyIcon,v as WithDefaultIcon,A as __namedExportsOrder,_ as default};