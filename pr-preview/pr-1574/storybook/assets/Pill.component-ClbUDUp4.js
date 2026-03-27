import{j as l}from"./iframe-2dps-xUY.js";import{I as b}from"./Icon.component-NvrSsj3N.js";const j=e=>`
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
  `,y=e=>`
    jn:bg-theme-background-lvl-4
    jn:text-theme-high
    ${e?"jn:group-hover:text-theme-highest":""}
    jn:px-1
    jn:py-0.5
    jn:rounded-sm
    jn:inline-block
  `,d=e=>`
    jn:px-1
    jn:py-0.5
    jn:text-theme-high
    ${e?"jn:group-hover:text-theme-highest":""}
    jn:inline-block
  `,p=({uid:e="",pillKey:a="",pillKeyLabel:s="",pillValue:t="",pillValueLabel:r="",closeable:c=!1,onClick:n,onClose:o,className:h="",...f})=>{const m=i=>{o&&o(i,e||a||t)},u=i=>{n&&n(i,e||a||t)};return l.jsxs("div",{className:`juno-pill ${j(!!n)} ${h}`,...f,children:[!t&&!r?l.jsx("span",{className:`${d(!1)}`,children:"set pillValue or pillValueLabel"}):l.jsxs(l.Fragment,{children:[(s||a)&&l.jsx("span",{className:`pill-key ${y(!!n)}`,onClick:u,children:s||a}),l.jsx("span",{className:`pill-value ${d(!!n)}`,onClick:u,children:r||t})]}),c&&l.jsx(b,{icon:"close",size:18,onClick:m})]})};try{p.displayName="Pill",p.__docgenInfo={description:"A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.",displayName:"Pill",props:{uid:{defaultValue:{value:""},description:"The unique identifier of the pill. Returned by the onClose callback",name:"uid",required:!1,type:{name:"string"}},pillKey:{defaultValue:{value:""},description:"The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional.",name:"pillKey",required:!1,type:{name:"string"}},pillKeyLabel:{defaultValue:{value:""},description:"The visible label to describe the pill key. If not set pillKey is used. Optional.",name:"pillKeyLabel",required:!1,type:{name:"string"}},pillValue:{defaultValue:{value:""},description:"The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined",name:"pillValue",required:!1,type:{name:"string"}},pillValueLabel:{defaultValue:{value:""},description:"The visible label to describe the pill value. If not set pillValue is used. Optional.",name:"pillValueLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Add custom classNames",name:"className",required:!1,type:{name:"string"}},closeable:{defaultValue:{value:"false"},description:"Whether the pill should be closeable",name:"closeable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",name:"onClose",required:!1,type:{name:"EventHandler"}},onClick:{defaultValue:null,description:"Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",name:"onClick",required:!1,type:{name:"EventHandler"}}}}}catch{}export{p as P};
