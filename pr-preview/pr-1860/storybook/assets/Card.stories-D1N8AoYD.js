import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";var i,a,o,s,c,l,u=t((()=>{i=e(n()),a=r(),o=`
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-theme-default
`,s=`
  jn:cursor-pointer
  jn:hover:border-theme-card-hover
  jn:hover:shadow-theme-default-hover
  jn:active:border-theme-accent
  jn:focus:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
`,c=`jn:p-4`,l=(0,i.forwardRef)(({children:e,padding:t=!1,className:n=``,href:r,onClick:i,disabled:l=!1,...u},d)=>{let f=(!!r||!!i)&&!l,p=`juno-card ${f?`juno-card-interactive`:``} ${o} ${f?s:``} ${t?c:``} ${n} ${l?`jn:cursor-not-allowed`:``}`,m=e=>{if(l){e.preventDefault();return}i?.(e)};return r?(0,a.jsx)(`a`,{ref:d,href:l?void 0:r,className:`${p} jn:block jn:text-inherit`,onClick:m,"aria-disabled":l?!0:void 0,tabIndex:l?-1:void 0,...u,children:e}):i?(0,a.jsx)(`button`,{ref:d,type:`button`,className:`${p} jn:text-left`,onClick:m,disabled:l,...u,children:e}):(0,a.jsx)(`div`,{ref:d,className:p,...u,children:e})}),l.displayName=`Card`;try{l.displayName=`Card`,l.__docgenInfo={description:`The \`Card\` component acts as a versatile container for various types of content, providing
an optional padding feature for additional layout flexibility. It is commonly used for
displaying information or grouping elements, allowing for consistent styling and shadow effects.`,displayName:`Card`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Card/Card.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Components or elements to be rendered as content.`,name:`children`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{},type:{name:`ReactNode`}},padding:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Optional padding for the Card component.`,name:`padding`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Additional CSS styles to apply.`,name:`className`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{default:`""`},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`When set, renders the card as an <a> element.`,name:`href`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`When set (without href), renders the card as a <button> element.`,name:`onClick`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLElement>`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Disables interaction; native disabled on <button>, aria-disabled + stripped href on <a>, renders "not-allowed"-cursor.`,name:`disabled`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs
{@link CardProps }`}}}catch{}})),d,f,p,m,h,g,_,v;t((()=>{u(),d={title:`Components/Card`,component:l,argTypes:{}},f={args:{children:`Some content in a Card with padding.`,padding:!0,onClick:void 0}},p={args:{children:`Card rendered as <button> when onClick is passed (with padding). Note: Rendered as <a> when href is passed.`,padding:!0,onClick:()=>alert(`You clicked a card with an onClick event.`)}},m={args:{children:`Card rendered as <a> when href is passed (with padding).`,padding:!0,onClick:void 0,href:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs`}},h={args:{children:`Card rendered as <a> when href and onClick are passed (with padding).`,padding:!0,onClick:()=>alert(`You clicked the card.`),href:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs`}},g={args:{children:`Disabled card (with href, onClick and padding).`,padding:!0,onClick:()=>alert(`This card should be disabled`),href:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs`,disabled:!0}},_={args:{children:`A Card without padding.`,onClick:void 0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Card with padding.",
    padding: true,
    onClick: undefined
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Card rendered as <button> when onClick is passed (with padding). Note: Rendered as <a> when href is passed.",
    padding: true,
    onClick: () => alert("You clicked a card with an onClick event.")
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Card rendered as <a> when href is passed (with padding).",
    padding: true,
    onClick: undefined,
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Card rendered as <a> when href and onClick are passed (with padding).",
    padding: true,
    onClick: () => alert("You clicked the card."),
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled card (with href, onClick and padding).",
    padding: true,
    onClick: () => alert("This card should be disabled"),
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs",
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: "A Card without padding.",
    onClick: undefined
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithClickEvent`,`WithHref`,`WithHrefAndClickEvent`,`Disabled`,`WithoutPadding`]}))();export{f as Default,g as Disabled,p as WithClickEvent,m as WithHref,h as WithHrefAndClickEvent,_ as WithoutPadding,v as __namedExportsOrder,d as default};