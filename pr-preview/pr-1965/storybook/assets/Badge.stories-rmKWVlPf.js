import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,r as a,t as o}from"./Icon.component-RrYTo7Ui.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s=t(n()),a(),c=r(),l=`
  jn:inline-flex
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`,u=`
  jn:cursor-pointer
  jn:hover:text-theme-highest
  jn:focus:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
  jn:active:ring-1
  jn:active:ring-inset
  jn:active:text-theme-highest
`,d={default:`jn:bg-theme-badge-default`,info:`jn:bg-theme-info/25`,success:`jn:bg-theme-success/25`,warning:`jn:bg-theme-warning/25`,danger:`jn:bg-theme-danger/25`,error:`jn:bg-theme-error/25`},f={default:`jn:active:ring-current`,info:`jn:active:ring-theme-accent`,success:`jn:active:ring-theme-success`,warning:`jn:active:ring-theme-warning`,danger:`jn:active:ring-theme-danger`,error:`jn:active:ring-theme-error`},p=`jn:mr-1`,m=new Set(Object.values(i)),h=(e,t)=>{if(typeof e==`string`&&_(e))return e;if(e===!0&&_(t))return t},g=(e,t)=>{if(e===!0)return`jn:text-theme-${t}`},_=e=>m.has(e),v=(0,s.forwardRef)(({variant:e=`default`,icon:t=!1,text:n=``,className:r=``,children:i,href:a,disabled:s,onClick:m,..._},v)=>{let y=h(t,e),b=g(t,e),x=!!(a||m),S=`
    juno-badge
    juno-badge-${e}
    ${l}
    ${d[e]??d.default}
    ${x?`${u} ${f[e]??f.default}`:``}
    ${x&&s?`juno-badge-disabled jn:opacity-50 jn:pointer-events-none`:``}
    ${r}
  `,C=(0,c.jsxs)(c.Fragment,{children:[y&&(0,c.jsx)(o,{icon:y,size:`1.125rem`,className:p,color:b}),i||n]});return a?(0,c.jsx)(`a`,{href:s?void 0:a,role:s?`link`:void 0,className:S,onClick:s?void 0:m,"aria-disabled":s||void 0,tabIndex:s?-1:void 0,ref:v,..._,children:C}):m?(0,c.jsx)(`button`,{type:`button`,className:S,onClick:m,disabled:s,ref:v,..._,children:C}):(0,c.jsx)(`span`,{className:S,ref:v,..._,children:C})}),v.displayName=`Badge`;try{v.displayName=`Badge`,v.__docgenInfo={description:"The `Badge` component visually represents properties or states of an entity.\nIt supports multiple semantic variants, each with distinct styling. An optional\nicon can be included to further emphasize meaning. Pass `onClick` to render the\nbadge as a `<button>`, or `href` to render it as an `<a>` element, with hover,\nfocus, active, and disabled states applied automatically.",displayName:`Badge`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Badge/Badge.component.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Specify a semantic variant that determines the appearance of the badge.`,name:`variant`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`"default"`},type:{name:`enum`,raw:`BadgeVariantType`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`}]}},icon:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Determines whether to display an icon. If set to \`true\`, an icon related
to the variant will be used. If a valid string representing a known icon
is provided, that icon will be displayed.`,name:`icon`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean | "info" | "warning" | "danger" | "error" | "success" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | ... 48 more ...`}},text:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`The optional text content of the badge. If children are provided, they take precedence.`,name:`text`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Additional CSS class to apply to the badge.`,name:`className`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`""`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"React nodes or a collection of React nodes to be rendered as content, taking\nprecedence over the `text` property.",name:`children`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`ReactNode`}},href:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Renders the badge as an `<a>` element. When combined with `onClick`, `href` takes precedence.",name:`href`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Click handler. Passing it renders the badge as a `<button>`, unless `href` is set.",name:`onClick`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Disables the badge. Only meaningful when rendered as a `<button>` or `<a>`.",name:`disabled`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
{@link BadgeProps }`}}}catch{}})))()}function b(){return(b=e((()=>{y()})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{a(),b(),x={title:`Components/Badge`,component:v,args:{onClick:void 0},argTypes:{icon:{options:[`default`,...Object.values(i)],control:{type:`select`}},children:{control:!1}}},S={},C={args:{children:`Children content`}},w={args:{text:`With Icon`,icon:!0}},T={args:{text:`Deleted`,icon:`deleteForever`}},E={args:{variant:`info`,text:`Info`}},D={args:{variant:`info`,text:`Info`,icon:!0}},O={args:{variant:`success`,text:`Success`}},k={args:{variant:`success`,text:`Success`,icon:!0}},A={args:{variant:`warning`,text:`Warning`}},j={args:{variant:`warning`,text:`Warning`,icon:!0}},M={args:{variant:`danger`,text:`Danger`}},N={args:{variant:`danger`,text:`Danger`,icon:!0}},P={args:{variant:`error`,text:`Error`}},F={args:{variant:`error`,text:`Error`,icon:!0}},I={parameters:{docs:{description:{story:"Renders the badge as a `<button>` element. Pass `onClick` to make a badge interactive."}}},args:{text:`Clickable`,onClick:()=>{}}},L={parameters:{docs:{description:{story:`A disabled button badge. The button is inert and visually dimmed.`}}},args:{text:`Disabled`,onClick:()=>{},disabled:!0}},R={parameters:{docs:{description:{story:"Renders the badge as an `<a>` element. Pass `href` to make a badge a navigable link."}}},args:{text:`Link`,href:`#`}},z={parameters:{docs:{description:{story:'A disabled anchor badge. The `href` is stripped, `aria-disabled` and `tabIndex={-1}` are applied, and `role="link"` is preserved so screen readers still announce it as a link.'}}},args:{text:`Disabled Link`,href:`#`,disabled:!0}},B={args:{variant:`info`,text:`Info`,onClick:()=>{}}},V={args:{variant:`success`,text:`Success`,onClick:()=>{}}},H={args:{variant:`warning`,text:`Warning`,onClick:()=>{}}},U={args:{variant:`danger`,text:`Danger`,onClick:()=>{}}},W={args:{variant:`error`,text:`Error`,onClick:()=>{}}},G={args:{variant:`info`,text:`Info`,href:`#`}},K={args:{variant:`danger`,text:`Danger`,href:`#`}},q={args:{text:`Clickable`,icon:!0,onClick:()=>{}}},J=`Default.WithChildren.WithDefaultIcon.WithAnyIcon.Info.InfoWithIcon.Success.SuccessWithIcon.Warning.WarningWithIcon.Danger.DangerWithIcon.Error.ErrorWithIcon.AsButton.AsButtonDisabled.AsLink.AsLinkDisabled.AsButtonInfo.AsButtonSuccess.AsButtonWarning.AsButtonDanger.AsButtonError.AsLinkInfo.AsLinkDanger.AsButtonWithIcon`.split(`.`),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Children content"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    text: "With Icon",
    icon: true // Default icon based on variant
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Renders the badge as a \`<button>\` element. Pass \`onClick\` to make a badge interactive."
      }
    }
  },
  args: {
    text: "Clickable",
    onClick: () => {}
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A disabled button badge. The button is inert and visually dimmed."
      }
    }
  },
  args: {
    text: "Disabled",
    onClick: () => {},
    disabled: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Renders the badge as an \`<a>\` element. Pass \`href\` to make a badge a navigable link."
      }
    }
  },
  args: {
    text: "Link",
    href: "#"
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A disabled anchor badge. The \`href\` is stripped, \`aria-disabled\` and \`tabIndex={-1}\` are applied, and \`role="link"\` is preserved so screen readers still announce it as a link.'
      }
    }
  },
  args: {
    text: "Disabled Link",
    href: "#",
    disabled: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    onClick: () => {}
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    onClick: () => {}
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    onClick: () => {}
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    onClick: () => {}
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    onClick: () => {}
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    href: "#"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    href: "#"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Clickable",
    icon: true,
    onClick: () => {}
  }
}`,...q.parameters?.docs?.source}}}})))()}Y();export{I as AsButton,U as AsButtonDanger,L as AsButtonDisabled,W as AsButtonError,B as AsButtonInfo,V as AsButtonSuccess,H as AsButtonWarning,q as AsButtonWithIcon,R as AsLink,K as AsLinkDanger,z as AsLinkDisabled,G as AsLinkInfo,M as Danger,N as DangerWithIcon,S as Default,P as Error,F as ErrorWithIcon,E as Info,D as InfoWithIcon,O as Success,k as SuccessWithIcon,A as Warning,j as WarningWithIcon,T as WithAnyIcon,C as WithChildren,w as WithDefaultIcon,J as __namedExportsOrder,x as default};