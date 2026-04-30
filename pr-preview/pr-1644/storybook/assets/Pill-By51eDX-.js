import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,z as n}from"./iframe-DHpab_zH.js";import{t as r}from"./Icon.component-CZ3KKYA5.js";import{t as i}from"./Icon-5ZW6h_ux.js";var a,o,s,c,l,u=e((()=>{n(),i(),a=t(),o=e=>`
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
  `,s=e=>`
    jn:bg-theme-background-lvl-4
    jn:text-theme-high
    ${e?`jn:group-hover:text-theme-highest`:``}
    jn:px-1
    jn:py-0.5
    jn:rounded-sm
    jn:inline-block
  `,c=e=>`
    jn:px-1
    jn:py-0.5
    jn:text-theme-high
    ${e?`jn:group-hover:text-theme-highest`:``}
    jn:inline-block
  `,l=({uid:e=``,pillKey:t=``,pillKeyLabel:n=``,pillValue:i=``,pillValueLabel:l=``,closeable:u=!1,onClick:d,onClose:f,className:p=``,...m})=>{let h=n=>{f&&f(n,e||t||i)},g=n=>{d&&d(n,e||t||i)};return(0,a.jsxs)(`div`,{className:`juno-pill ${o(!!d)} ${p}`,...m,children:[!i&&!l?(0,a.jsx)(`span`,{className:`${c(!1)}`,children:`set pillValue or pillValueLabel`}):(0,a.jsxs)(a.Fragment,{children:[(n||t)&&(0,a.jsx)(`span`,{className:`pill-key ${s(!!d)}`,onClick:g,children:n||t}),(0,a.jsx)(`span`,{className:`pill-value ${c(!!d)}`,onClick:g,children:l||i})]}),u&&(0,a.jsx)(r,{icon:`close`,size:18,onClick:h})]})};try{l.displayName=`Pill`,l.__docgenInfo={description:`A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.`,displayName:`Pill`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Pill/Pill.component.tsx`,methods:[],props:{uid:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`The unique identifier of the pill. Returned by the onClose callback`,name:`uid`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`string`}},pillKey:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional.`,name:`pillKey`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`string`}},pillKeyLabel:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`The visible label to describe the pill key. If not set pillKey is used. Optional.`,name:`pillKeyLabel`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`string`}},pillValue:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined`,name:`pillValue`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`string`}},pillValueLabel:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`The visible label to describe the pill value. If not set pillValue is used. Optional.`,name:`pillValueLabel`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`Add custom classNames`,name:`className`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`string`}},closeable:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`Whether the pill should be closeable`,name:`closeable`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)`,name:`onClose`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`EventHandler`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`}],description:`Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)`,name:`onClick`,parent:{fileName:`ui-components/src/components/Pill/Pill.component.tsx`,name:`PillProps`},required:!1,tags:{},type:{name:`EventHandler`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-pill--docs
{@link PillProps }`}}}catch{}})),d=e((()=>{u()}));export{l as n,d as t};