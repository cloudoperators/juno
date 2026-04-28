import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./Icon.component-hvX4Q9Gp.js";import"./Icon-DLrP9JFG.js";import"react";var n=e(),r=e=>`
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
    ${e?`jn:cursor-pointer`:``}
  `,i=e=>`
    jn:bg-theme-background-lvl-4
    jn:text-theme-high
    ${e?`jn:group-hover:text-theme-highest`:``}
    jn:px-1
    jn:py-0.5
    jn:rounded-sm
    jn:inline-block
  `,a=e=>`
    jn:px-1
    jn:py-0.5
    jn:text-theme-high
    ${e?`jn:group-hover:text-theme-highest`:``}
    jn:inline-block
  `,o=({uid:e=``,pillKey:o=``,pillKeyLabel:s=``,pillValue:c=``,pillValueLabel:l=``,closeable:u=!1,onClick:d,onClose:f,className:p=``,...m})=>{let h=t=>{f&&f(t,e||o||c)},g=t=>{d&&d(t,e||o||c)};return(0,n.jsxs)(`div`,{className:`juno-pill ${r(!!d)} ${p}`,...m,children:[!c&&!l?(0,n.jsx)(`span`,{className:`${a(!1)}`,children:`set pillValue or pillValueLabel`}):(0,n.jsxs)(n.Fragment,{children:[(s||o)&&(0,n.jsx)(`span`,{className:`pill-key ${i(!!d)}`,onClick:g,children:s||o}),(0,n.jsx)(`span`,{className:`pill-value ${a(!!d)}`,onClick:g,children:l||c})]}),u&&(0,n.jsx)(t,{icon:`close`,size:18,onClick:h})]})};try{o.displayName=`Pill`,o.__docgenInfo={description:`A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.`,displayName:`Pill`,props:{uid:{defaultValue:{value:``},description:`The unique identifier of the pill. Returned by the onClose callback`,name:`uid`,required:!1,type:{name:`string`}},pillKey:{defaultValue:{value:``},description:`The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional.`,name:`pillKey`,required:!1,type:{name:`string`}},pillKeyLabel:{defaultValue:{value:``},description:`The visible label to describe the pill key. If not set pillKey is used. Optional.`,name:`pillKeyLabel`,required:!1,type:{name:`string`}},pillValue:{defaultValue:{value:``},description:`The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined`,name:`pillValue`,required:!1,type:{name:`string`}},pillValueLabel:{defaultValue:{value:``},description:`The visible label to describe the pill value. If not set pillValue is used. Optional.`,name:`pillValueLabel`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Add custom classNames`,name:`className`,required:!1,type:{name:`string`}},closeable:{defaultValue:{value:`false`},description:`Whether the pill should be closeable`,name:`closeable`,required:!1,type:{name:`boolean`}},onClose:{defaultValue:null,description:`Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)`,name:`onClose`,required:!1,type:{name:`EventHandler`}},onClick:{defaultValue:null,description:`Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)`,name:`onClick`,required:!1,type:{name:`EventHandler`}}}}}catch{}export{o as t};