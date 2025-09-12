import{I as b,K as x}from"./Icon.component-Dw4B9o5V.js";import{j as v}from"./iframe-4X5yIpLS.js";const w=`
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,h={default:"jn:bg-theme-badge-default",info:"jn:bg-theme-info/25",success:"jn:bg-theme-success/25",warning:"jn:bg-theme-warning/25",danger:"jn:bg-theme-danger/25",error:"jn:bg-theme-error/25"},D="jn:mr-1 jn:items-center",E=e=>h[e]||h.default,_=(e,r)=>{if(typeof e=="string"&&V(e))return e;if(e===!0)return r},N=(e,r)=>{if(e===!0)return`jn:text-theme-${r}`},V=e=>new Set(Object.values(x)).has(e),g=({variant:e="default",icon:r=!1,text:I="",className:y="",children:S,...j})=>{const f=_(r,e),W=N(r,e);return v.jsxs("span",{className:`
        juno-badge 
        juno-badge-${e} 
        ${w} 
        ${E(e)} 
        ${r?"jn:inline-flex":""} 
        ${y}`,...j,children:[f&&v.jsx(b,{icon:f,size:"1.125rem",className:D,color:W}),S||I]})};try{g.displayName="Badge",g.__docgenInfo={description:`A Badge is used to visually represent properties or states of an entity.
It supports multiple semantic versions, each with distinct styling.
Optionally, an icon can be included to further emphasize the meaning.`,displayName:"Badge",props:{variant:{defaultValue:{value:"default"},description:"Specify an optional semantic variant that determines the appearance of a badge.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"default"'}]}},icon:{defaultValue:{value:"false"},description:`Optional.
If true, an icon corresponding to the variant will be displayed.
If a string is provided and it's a valid icon name, that icon will be displayed.`,name:"icon",required:!1,type:{name:'boolean | "info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 40 more ...'}},text:{defaultValue:{value:""},description:`Pass an optional string of text to be rendered as content.
Alternatively, content can be passed as children (see below).
If children are provided, they will take precedence.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass an optional CSS class to apply to the message.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Pass optional React nodes or a collection of React nodes to be rendered as content.
Takes precedence over the text property.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const C={title:"Components/Badge",component:g,parameters:{text:"default"},argTypes:{icon:{options:["default",...Object.values(x)],control:{type:"select"}},children:{control:!1}}},a={args:{text:"With Icon",icon:!0}},n={args:{text:"Deleted",icon:"deleteForever"}},t={args:{variant:"info",text:"Info"}},s={args:{variant:"info",text:"Info",icon:!0}},o={args:{variant:"success",text:"Success"}},c={args:{variant:"success",text:"Success",icon:!0}},i={args:{variant:"warning",text:"Warning"}},d={args:{variant:"warning",text:"Warning",icon:!0}},u={args:{variant:"danger",text:"Danger"}},l={args:{variant:"danger",text:"Danger",icon:!0}},p={args:{variant:"error",text:"Error"}},m={args:{variant:"error",text:"Error",icon:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...m.parameters?.docs?.source}}};const $=["WithDefaultIcon","WithAnyIcon","Info","InfoWithIcon","Success","SuccessWithIcon","Warning","WarningWithIcon","Danger","DangerWithIcon","Error","ErrorWithIcon"];export{u as Danger,l as DangerWithIcon,p as Error,m as ErrorWithIcon,t as Info,s as InfoWithIcon,o as Success,c as SuccessWithIcon,i as Warning,d as WarningWithIcon,n as WithAnyIcon,a as WithDefaultIcon,$ as __namedExportsOrder,C as default};
