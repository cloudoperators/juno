import{j as l}from"./iframe-sRp0gZ7A.js";import{I as j}from"./Icon.component-BzGEdsVM.js";const v=e=>`
    jn:inline-flex
    jn:basis-auto
    jn:shrink
    jn:items-center
    jn:flex-nowrap
    jn:text-xs
    jn:p-px
    jn:border
    jn:rounded
    jn:border-theme-background-lvl-4
    jn:group
    ${e?"jn:cursor-pointer":""}
  `,x=e=>`
    jn:bg-theme-background-lvl-4
    jn:text-theme-high
    ${e?"jn:group-hover:text-theme-highest":""}
    jn:px-1
    jn:py-0.5
    jn:rounded-sm
    jn:inline-block
  `,h=e=>`
    jn:px-1
    jn:py-0.5
    jn:text-theme-high
    ${e?"jn:group-hover:text-theme-highest":""}
    jn:inline-block
  `,c=({uid:e="",pillKey:n="",pillKeyLabel:p="",pillValue:s="",pillValueLabel:d="",closeable:y=!1,onClick:a,onClose:m,className:f="",...g})=>{const V=u=>{m&&m(u,e||n||s)},b=u=>{a&&a(u,e||n||s)};return l.jsxs("div",{className:`juno-pill ${v(!!a)} ${f}`,...g,children:[!s&&!d?l.jsx("span",{className:`${h(!1)}`,children:"set pillValue or pillValueLabel"}):l.jsxs(l.Fragment,{children:[(p||n)&&l.jsx("span",{className:`pill-key ${x(!!a)}`,onClick:b,children:p||n}),l.jsx("span",{className:`pill-value ${h(!!a)}`,onClick:b,children:d||s})]}),y&&l.jsx(j,{icon:"close",size:18,onClick:V})]})};try{c.displayName="Pill",c.__docgenInfo={description:"A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.",displayName:"Pill",props:{uid:{defaultValue:{value:""},description:"The unique identifier of the pill. Returned by the onClose callback",name:"uid",required:!1,type:{name:"string"}},pillKey:{defaultValue:{value:""},description:"The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional.",name:"pillKey",required:!1,type:{name:"string"}},pillKeyLabel:{defaultValue:{value:""},description:"The visible label to describe the pill key. If not set pillKey is used. Optional.",name:"pillKeyLabel",required:!1,type:{name:"string"}},pillValue:{defaultValue:{value:""},description:"The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined",name:"pillValue",required:!1,type:{name:"string"}},pillValueLabel:{defaultValue:{value:""},description:"The visible label to describe the pill value. If not set pillValue is used. Optional.",name:"pillValueLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Add custom classNames",name:"className",required:!1,type:{name:"string"}},closeable:{defaultValue:{value:"false"},description:"Whether the pill should be closeable",name:"closeable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",name:"onClose",required:!1,type:{name:"EventHandler"}},onClick:{defaultValue:null,description:"Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",name:"onClick",required:!1,type:{name:"EventHandler"}}}}}catch{}const S={title:"Components/Pill",component:c,argTypes:{onClose:{table:{type:{summary:"(event: React.MouseEvent<HTMLElement>, id: string) => void"}}},onClick:{table:{type:{summary:"(event: React.MouseEvent<HTMLElement>, id: string) => void"}}}}},t={args:{pillKey:"os",pillKeyLabel:"OS",pillValue:"mac_os",pillValueLabel:"Mac OS"}},r={args:{pillKey:"os",pillKeyLabel:"OS",pillValue:"mac_os",pillValueLabel:"Mac OS",closeable:!0}},i={args:{pillValue:"mac_os",pillValueLabel:"Mac OS"}},o={args:{pillValue:"mac_os",pillValueLabel:"Mac OS",closeable:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","Closeable","ValueOnly","ValueOnlyCloseable"];export{r as Closeable,t as Default,i as ValueOnly,o as ValueOnlyCloseable,_ as __namedExportsOrder,S as default};
