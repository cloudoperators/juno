import{j as a}from"./jsx-runtime-D6fbYt3N.js";import{I as N}from"./Icon.component-sIHPjgQO.js";import"./index-DysCNOs_.js";import"./widgets-BR6-ubtP.js";const M=e=>`
    jn-inline-flex
    jn-basis-auto
    jn-shrink
    jn-items-center
    jn-flex-nowrap
    jn-text-xs
    jn-p-px
    jn-border
    jn-rounded
    jn-border-theme-background-lvl-4
    jn-group
    ${e?"jn-cursor-pointer":""}
  `,$=e=>`
    jn-bg-theme-background-lvl-4
    jn-text-theme-high
    ${e?"group-hover:jn-text-theme-highest":""}
    jn-px-1
    jn-py-0.5
    jn-rounded-sm
    jn-inline-block
  `,h=e=>`
    jn-px-1
    jn-py-0.5
    jn-text-theme-high
    ${e?"group-hover:jn-text-theme-highest":""}
    jn-inline-block
  `,c=({uid:e="",pillKey:s="",pillKeyLabel:p="",pillValue:r="",pillValueLabel:d="",closeable:L=!1,onClick:n=void 0,onClose:m=void 0,className:K="",...q})=>{const P=l=>{m&&m(l,e||s||r)},b=l=>{n&&n(l,e||s||r)};return a.jsxs("div",{className:`juno-pill ${M(!!n)} ${K}`,...q,children:[!r&&!d?a.jsx("span",{className:`${h(!1)}`,children:"set pillValue or pillValueLabel"}):a.jsxs(a.Fragment,{children:[(p||s)&&a.jsx("span",{className:`pill-key ${$(!!n)}`,onClick:l=>b(l),children:p||s}),a.jsx("span",{className:`pill-value ${h(!!n)}`,onClick:l=>b(l),children:d||r})]}),L&&a.jsx(N,{icon:"close",size:18,onClick:l=>P(l)})]})};try{c.displayName="Pill",c.__docgenInfo={description:"A Pill to represent a value, or key and value. Can e.g. be used to represent selected filter values in a filter component. Can optionally be closed. On close the uid, if provided, or the pillKey is returned in the callback.",displayName:"Pill",props:{uid:{defaultValue:{value:""},description:"The unique identifier of the pill. Returned by the onClose callback",name:"uid",required:!1,type:{name:"string"}},pillKey:{defaultValue:{value:""},description:"The key of the filter the pill represents. Returned by the onClose callback if uid undefined. Optional.",name:"pillKey",required:!1,type:{name:"string"}},pillKeyLabel:{defaultValue:{value:""},description:"The visible label to describe the pill key. If not set pillKey is used. Optional.",name:"pillKeyLabel",required:!1,type:{name:"string"}},pillValue:{defaultValue:{value:""},description:"The value of filter the pill represents. Returned by the onClose callback if uid and pillKey undefined",name:"pillValue",required:!1,type:{name:"string"}},pillValueLabel:{defaultValue:{value:""},description:"The visible label to describe the pill value. If not set pillValue is used. Optional.",name:"pillValueLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"add custom classNames",name:"className",required:!1,type:{name:"string"}},closeable:{defaultValue:{value:"false"},description:"Whether the pill should be closeable",name:"closeable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:{value:"undefined"},description:"Pass a handler to be executed when closing the Pill. Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",name:"onClose",required:!1,type:{name:"EventHandler"}},onClick:{defaultValue:{value:"undefined"},description:"Pass a handler to be executed when clicking on the Pill (but not on the close button). Also returns the event and the uid (fallback: pillKey -> fallback: pillValue)",name:"onClick",required:!1,type:{name:"EventHandler"}}}}}catch{}const w={title:"Components/Pill",component:c,argTypes:{}},t={args:{pillKey:"os",pillKeyLabel:"OS",pillValue:"mac_os",pillValueLabel:"Mac OS"}},i={args:{pillKey:"os",pillKeyLabel:"OS",pillValue:"mac_os",pillValueLabel:"Mac OS",closeable:!0}},o={args:{pillValue:"mac_os",pillValueLabel:"Mac OS"}},u={args:{pillValue:"mac_os",pillValueLabel:"Mac OS",closeable:!0}};var f,y,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS"
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var V,j,v;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var x,k,O;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS"
  }
}`,...(O=(k=o.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var S,_,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true
  }
}`,...(C=(_=u.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const A=["Default","Closeable","ValueOnly","ValueOnlyCloseable"];export{i as Closeable,t as Default,o as ValueOnly,u as ValueOnlyCloseable,A as __namedExportsOrder,w as default};
