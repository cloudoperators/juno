import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-BEvAk4pr.js";var i,a,o,s,c,l=t((()=>{i=e(r()),a=n(),o=`
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-theme-default
`,s=`jn:p-4`,c=(0,i.forwardRef)(({children:e,padding:t=!1,className:n=``,href:r,onClick:i,disabled:c=!1,...l},u)=>{let d=`juno-card ${o} ${t?s:``} ${n} ${c?`jn:cursor-not-allowed`:``}`,f=e=>{if(c){e.preventDefault();return}i?.(e)};return r?(0,a.jsx)(`a`,{ref:u,href:c?void 0:r,className:`${d} jn:block jn:text-inherit`,onClick:f,"aria-disabled":c?!0:void 0,tabIndex:c?-1:void 0,...l,children:e}):i?(0,a.jsx)(`button`,{ref:u,type:`button`,className:`${d} jn:text-left`,onClick:f,disabled:c,...l,children:e}):(0,a.jsx)(`div`,{ref:u,className:d,...l,children:e})}),c.displayName=`Card`;try{c.displayName=`Card`,c.__docgenInfo={description:`The \`Card\` component acts as a versatile container for various types of content, providing
an optional padding feature for additional layout flexibility. It is commonly used for
displaying information or grouping elements, allowing for consistent styling and shadow effects.`,displayName:`Card`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Card/Card.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Components or elements to be rendered as content.`,name:`children`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{},type:{name:`ReactNode`}},padding:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Optional padding for the Card component.`,name:`padding`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Additional CSS styles to apply.`,name:`className`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{default:`""`},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`When set, renders the card as an <a> element.`,name:`href`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`When set (without href), renders the card as a <button> element.`,name:`onClick`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLElement>`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`}],description:`Disables interaction; native disabled on <button>, aria-disabled + stripped href on <a>, renders "not-allowed"-cursor.`,name:`disabled`,parent:{fileName:`ui-components/src/components/Card/Card.component.tsx`,name:`CardProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs
{@link CardProps }`}}}catch{}})),u,d,f,p,m,h,g,_;t((()=>{l(),u={title:`Components/Card`,component:c,argTypes:{}},d={args:{children:`Some content in a Card with padding.`,padding:!0,onClick:void 0}},f={args:{children:`Card rendered as <button> when onClick is passed (with padding). Note: Rendered as <a> when href is passed.`,padding:!0,onClick:()=>alert(`You clicked a card with an onClick event.`)}},p={args:{children:`Card rendered as <a> when href is passed (with padding).`,padding:!0,onClick:void 0,href:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs`}},m={args:{children:`Card rendered as <a> when href and onClick are passed (with padding).`,padding:!0,onClick:()=>alert(`You clicked the card.`),href:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs`}},h={args:{children:`Disabled card (with href, onClick and padding).`,padding:!0,onClick:()=>alert(`This card should be disabled`),href:`https://cloudoperators.github.io/juno/?path=/docs/components-card--docs`,disabled:!0}},g={args:{children:`A Card without padding.`,onClick:void 0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Card with padding.",
    padding: true,
    onClick: undefined
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Card rendered as <button> when onClick is passed (with padding). Note: Rendered as <a> when href is passed.",
    padding: true,
    onClick: () => alert("You clicked a card with an onClick event.")
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Card rendered as <a> when href is passed (with padding).",
    padding: true,
    onClick: undefined,
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Card rendered as <a> when href and onClick are passed (with padding).",
    padding: true,
    onClick: () => alert("You clicked the card."),
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled card (with href, onClick and padding).",
    padding: true,
    onClick: () => alert("This card should be disabled"),
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs",
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "A Card without padding.",
    onClick: undefined
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithClickEvent`,`WithHref`,`WithHrefAndClickEvent`,`Disabled`,`WithoutPadding`]}))();export{d as Default,h as Disabled,f as WithClickEvent,p as WithHref,m as WithHrefAndClickEvent,g as WithoutPadding,_ as __namedExportsOrder,u as default};