import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./Icon.component-CeSd25G7.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),i(),o=n(),s=`
  jn:inline-flex
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,c=`
  jn:hover:text-theme-highest
  jn:focus:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
  jn:disabled:pointer-events-none
`,l={default:`jn:bg-theme-badge-default`,info:`jn:bg-theme-info/25`,success:`jn:bg-theme-success/25`,warning:`jn:bg-theme-warning/25`,danger:`jn:bg-theme-danger/25`,error:`jn:bg-theme-error/25`},u={default:`jn:active:ring-1 jn:active:ring-inset jn:active:ring-current jn:active:text-theme-highest`,info:`jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-accent jn:active:text-theme-highest`,success:`jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-success jn:active:text-theme-highest`,warning:`jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-warning jn:active:text-theme-highest`,danger:`jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-danger jn:active:text-theme-highest`,error:`jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-error jn:active:text-theme-highest`},d=`jn:mr-1 jn:items-center`,f=(e,t)=>{if(typeof e==`string`&&m(e))return e;if(e===!0)return t},p=(e,t)=>{if(e===!0)return`jn:text-theme-${t}`},m=e=>new Set(Object.values(r)).has(e),h=({variant:e=`default`,icon:t=!1,text:n=``,className:r=``,children:i,interactive:m=!1,disabled:h,...g})=>{let _=f(t,e),v=p(t,e),y=`
    juno-badge
    juno-badge-${e}
    ${s}
    ${l[e]}
    ${m?`${c} ${u[e]}`:``}
    ${r}
  `,b=(0,o.jsxs)(o.Fragment,{children:[_&&(0,o.jsx)(a,{icon:_,size:`1.125rem`,className:d,color:v}),i||n]});return m?(0,o.jsx)(`button`,{...g,type:`button`,className:y,disabled:h,children:b}):(0,o.jsx)(`span`,{className:y,...g,children:b})};try{h.displayName=`Badge`,h.__docgenInfo={description:"The `Badge` component visually represents properties or states of an entity.\nIt supports multiple semantic variants, each with distinct styling. An optional\nicon can be included to further emphasize meaning. Set `interactive` to render\nthe badge as a button with hover, focus, active, and disabled states.",displayName:`Badge`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Badge/Badge.component.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Specify a semantic variant that determines the appearance of the badge.`,name:`variant`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`"default"`},type:{name:`enum`,raw:`BadgeVariantType`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`}]}},icon:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Determines whether to display an icon. If set to \`true\`, an icon related
to the variant will be used. If a valid string representing a known icon
is provided, that icon will be displayed.`,name:`icon`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean | "info" | "warning" | "danger" | "error" | "success" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | ... 48 more ...`}},text:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`The optional text content of the badge. If children are provided, they take precedence.`,name:`text`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Additional CSS class to apply to the badge.`,name:`className`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`""`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"React nodes or a collection of React nodes to be rendered as content, taking\nprecedence over the `text` property.",name:`children`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`ReactNode`}},interactive:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Renders the badge as a `<button>` with hover, focus, active, and disabled states.",name:`interactive`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Disables the badge. Only meaningful when `interactive` is `true`.",name:`disabled`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
{@link BadgeProps }`}}}catch{}})))()}function _(){return(_=e((()=>{g()})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{i(),_(),v={title:`Components/Badge`,component:h,parameters:{text:`default`},argTypes:{icon:{options:[`default`,...Object.values(r)],control:{type:`select`}},children:{control:!1}}},y={args:{text:`With Icon`,icon:!0}},b={args:{text:`Deleted`,icon:`deleteForever`}},x={args:{variant:`info`,text:`Info`}},S={args:{variant:`info`,text:`Info`,icon:!0}},C={args:{variant:`success`,text:`Success`}},w={args:{variant:`success`,text:`Success`,icon:!0}},T={args:{variant:`warning`,text:`Warning`}},E={args:{variant:`warning`,text:`Warning`,icon:!0}},D={args:{variant:`danger`,text:`Danger`}},O={args:{variant:`danger`,text:`Danger`,icon:!0}},k={args:{variant:`error`,text:`Error`}},A={args:{variant:`error`,text:`Error`,icon:!0}},j={args:{text:`Clickable`,interactive:!0}},M={args:{text:`Disabled`,interactive:!0,disabled:!0}},N={args:{variant:`info`,text:`Info`,interactive:!0}},P={args:{variant:`success`,text:`Success`,interactive:!0}},F={args:{variant:`warning`,text:`Warning`,interactive:!0}},I={args:{variant:`danger`,text:`Danger`,interactive:!0}},L={args:{variant:`error`,text:`Error`,interactive:!0}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Clickable",
    interactive: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Disabled",
    interactive: true,
    disabled: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    interactive: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    interactive: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    interactive: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    interactive: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    interactive: true
  }
}`,...L.parameters?.docs?.source}}},R=[`WithDefaultIcon`,`WithAnyIcon`,`Info`,`InfoWithIcon`,`Success`,`SuccessWithIcon`,`Warning`,`WarningWithIcon`,`Danger`,`DangerWithIcon`,`Error`,`ErrorWithIcon`,`Interactive`,`InteractiveDisabled`,`InteractiveInfo`,`InteractiveSuccess`,`InteractiveWarning`,`InteractiveDanger`,`InteractiveError`]})))()}z();export{D as Danger,O as DangerWithIcon,k as Error,A as ErrorWithIcon,x as Info,S as InfoWithIcon,j as Interactive,I as InteractiveDanger,M as InteractiveDisabled,L as InteractiveError,N as InteractiveInfo,P as InteractiveSuccess,F as InteractiveWarning,C as Success,w as SuccessWithIcon,T as Warning,E as WarningWithIcon,b as WithAnyIcon,y as WithDefaultIcon,R as __namedExportsOrder,v as default};