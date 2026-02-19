import{I as b,K as x}from"./Icon.component-BfGXLch-.js";import{j as h}from"./iframe-B4yXLd1L.js";import"./preload-helper-PPVm8Dsz.js";const w=`
  jn:inline-flex
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,v={default:"jn:bg-theme-badge-default",info:"jn:bg-theme-info/25",success:"jn:bg-theme-success/25",warning:"jn:bg-theme-warning/25",danger:"jn:bg-theme-danger/25",error:"jn:bg-theme-error/25"},D="jn:mr-1 jn:items-center",E=e=>v[e]||v.default,_=(e,r)=>{if(typeof e=="string"&&V(e))return e;if(e===!0)return r},N=(e,r)=>{if(e===!0)return`jn:text-theme-${r}`},V=e=>new Set(Object.values(x)).has(e),g=({variant:e="default",icon:r=!1,text:I="",className:y="",children:S,...j})=>{const f=_(r,e),W=N(r,e);return h.jsxs("span",{className:`
        juno-badge
        juno-badge-${e}
        ${w}
        ${E(e)}
        ${y}`,...j,children:[f&&h.jsx(b,{icon:f,size:"1.125rem",className:D,color:W}),S||I]})};try{g.displayName="Badge",g.__docgenInfo={description:"The `Badge` component visually represents properties or states of an entity.\nIt supports multiple semantic variants, each with distinct styling. An optional\nicon can be included to further emphasize meaning.",displayName:"Badge",props:{variant:{defaultValue:{value:"default"},description:"Specify a semantic variant that determines the appearance of the badge.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"default"'}]}},icon:{defaultValue:{value:"false"},description:"Determines whether to display an icon. If set to `true`, an icon related\nto the variant will be used. If a valid string representing a known icon\nis provided, that icon will be displayed.",name:"icon",required:!1,type:{name:'boolean | "info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 45 more ...'}},text:{defaultValue:{value:""},description:"The optional text content of the badge. If children are provided, they take precedence.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS class to apply to the badge.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"React nodes or a collection of React nodes to be rendered as content, taking\nprecedence over the `text` property.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const q={title:"Components/Badge",component:g,parameters:{text:"default"},argTypes:{icon:{options:["default",...Object.values(x)],control:{type:"select"}},children:{control:!1}}},n={args:{text:"With Icon",icon:!0}},a={args:{text:"Deleted",icon:"deleteForever"}},t={args:{variant:"info",text:"Info"}},s={args:{variant:"info",text:"Info",icon:!0}},o={args:{variant:"success",text:"Success"}},c={args:{variant:"success",text:"Success",icon:!0}},i={args:{variant:"warning",text:"Warning"}},d={args:{variant:"warning",text:"Warning",icon:!0}},u={args:{variant:"danger",text:"Danger"}},l={args:{variant:"danger",text:"Danger",icon:!0}},p={args:{variant:"error",text:"Error"}},m={args:{variant:"error",text:"Error",icon:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const R=["WithDefaultIcon","WithAnyIcon","Info","InfoWithIcon","Success","SuccessWithIcon","Warning","WarningWithIcon","Danger","DangerWithIcon","Error","ErrorWithIcon"];export{u as Danger,l as DangerWithIcon,p as Error,m as ErrorWithIcon,t as Info,s as InfoWithIcon,o as Success,c as SuccessWithIcon,i as Warning,d as WarningWithIcon,a as WithAnyIcon,n as WithDefaultIcon,R as __namedExportsOrder,q as default};
