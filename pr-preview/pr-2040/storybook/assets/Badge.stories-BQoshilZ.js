import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,r as a,t as o}from"./Icon.component-D2UtG4Gh.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s=t(n()),a(),c=r(),l=`
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
    ${d[e]}
    ${x?`${u} ${f[e]}`:``}
    ${x&&s?`juno-badge-disabled jn:opacity-50 jn:pointer-events-none`:``}
    ${r}
  `,C=(0,c.jsxs)(c.Fragment,{children:[y&&(0,c.jsx)(o,{icon:y,size:`1.125rem`,className:p,color:b}),i||n]});return a?(0,c.jsx)(`a`,{href:s?void 0:a,role:s?`link`:void 0,className:S,onClick:s?void 0:m,"aria-disabled":s||void 0,tabIndex:s?-1:void 0,ref:v,..._,children:C}):m?(0,c.jsx)(`button`,{type:`button`,className:S,onClick:s?void 0:m,disabled:s,ref:v,..._,children:C}):(0,c.jsx)(`span`,{className:S,ref:v,..._,children:C})}),v.displayName=`Badge`;try{v.displayName=`Badge`,v.__docgenInfo={description:"The `Badge` component visually represents properties or states of an entity.\nIt supports multiple semantic variants, each with distinct styling. An optional\nicon can be included to further emphasize meaning. Pass `onClick` to render the\nbadge as a `<button>`, or `href` to render it as an `<a>` element, with hover,\nfocus, active, and disabled states applied automatically.",displayName:`Badge`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Badge/Badge.component.tsx`,methods:[],props:{variant:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Specify a semantic variant that determines the appearance of the badge.`,name:`variant`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`"default"`},type:{name:`enum`,raw:`BadgeVariantType`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"default"`}]}},icon:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Determines whether to display an icon. If set to \`true\`, an icon related
to the variant will be used. If a valid string representing a known icon
is provided, that icon will be displayed.`,name:`icon`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean | "info" | "warning" | "danger" | "error" | "success" | "search" | "help" | "default" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 47 more ...`}},text:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`The optional text content of the badge. If children are provided, they take precedence.`,name:`text`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:`Additional CSS class to apply to the badge.`,name:`className`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`""`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"React nodes or a collection of React nodes to be rendered as content, taking\nprecedence over the `text` property.",name:`children`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`ReactNode`}},href:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Renders the badge as an `<a>` element. When combined with `onClick`, `href` takes precedence.",name:`href`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Click handler. Passing it renders the badge as a `<button>`, unless `href` is set.",name:`onClick`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`}],description:"Disables the badge. Only meaningful when rendered as a `<button>` or `<a>`.",name:`disabled`,parent:{fileName:`ui-components/src/components/Badge/Badge.component.tsx`,name:`BadgeProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
{@link BadgeProps }`}}}catch{}})))()}function b(){return(b=e((()=>{y()})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{a(),b(),x={title:`Components/Badge`,component:v,args:{onClick:void 0},argTypes:{icon:{options:[`default`,...Object.values(i)],control:{type:`select`}},children:{control:!1}}},S={parameters:{docs:{description:{story:"Pass `icon={true}` to show the icon that matches the current variant. The default variant uses the `default` icon."}}},args:{text:`With Icon`,icon:!0}},C={parameters:{docs:{description:{story:"Render arbitrary content inside the badge using `children`. Children take precedence over the `text` prop."}}},args:{children:`Children content`}},w={parameters:{docs:{description:{story:"Pass any icon name from `KnownIcons` to show a custom icon, independent of the variant."}}},args:{text:`Deleted`,icon:`deleteForever`}},T={parameters:{docs:{description:{story:"Use the `info` variant to highlight informational states or properties."}}},args:{variant:`info`,text:`Info`}},E={parameters:{docs:{description:{story:`Info variant with a matching icon. The icon is colored to match the variant.`}}},args:{variant:`info`,text:`Info`,icon:!0}},D={parameters:{docs:{description:{story:"Use the `success` variant to indicate a positive or completed state."}}},args:{variant:`success`,text:`Success`}},O={parameters:{docs:{description:{story:`Success variant with a matching icon.`}}},args:{variant:`success`,text:`Success`,icon:!0}},k={parameters:{docs:{description:{story:"Use the `warning` variant to flag states that require attention but are not critical."}}},args:{variant:`warning`,text:`Warning`}},A={parameters:{docs:{description:{story:`Warning variant with a matching icon.`}}},args:{variant:`warning`,text:`Warning`,icon:!0}},j={parameters:{docs:{description:{story:"Use the `danger` variant to indicate a destructive or high-risk state."}}},args:{variant:`danger`,text:`Danger`}},M={parameters:{docs:{description:{story:`Danger variant with a matching icon.`}}},args:{variant:`danger`,text:`Danger`,icon:!0}},N={parameters:{docs:{description:{story:"Use the `error` variant to label a failed or invalid state."}}},args:{variant:`error`,text:`Error`}},P={parameters:{docs:{description:{story:`Error variant with a matching icon.`}}},args:{variant:`error`,text:`Error`,icon:!0}},F={parameters:{docs:{description:{story:"Renders the badge as a `<button>` element. Pass `onClick` to make a badge interactive."}}},args:{text:`Clickable`,onClick:()=>{}}},I={parameters:{docs:{description:{story:`A disabled button badge. The button is inert and visually dimmed.`}}},args:{text:`Disabled`,onClick:()=>{},disabled:!0}},L={parameters:{docs:{description:{story:"Renders the badge as an `<a>` element. Pass `href` to make a badge a navigable link."}}},args:{text:`Link`,href:`#`}},R={parameters:{docs:{description:{story:'A disabled anchor badge. The `href` is stripped, `aria-disabled` and `tabIndex={-1}` are applied, and `role="link"` is preserved so screen readers still announce it as a link.'}}},args:{text:`Disabled Link`,href:`#`,disabled:!0}},z={args:{variant:`info`,text:`Info`,onClick:()=>{}}},B={args:{variant:`success`,text:`Success`,onClick:()=>{}}},V={args:{variant:`warning`,text:`Warning`,onClick:()=>{}}},H={args:{variant:`danger`,text:`Danger`,onClick:()=>{}}},U={args:{variant:`error`,text:`Error`,onClick:()=>{}}},W={args:{variant:`info`,text:`Info`,href:`#`}},G={args:{variant:`danger`,text:`Danger`,href:`#`}},K={args:{text:`Clickable`,icon:!0,onClick:()=>{}}},q=[`WithDefaultIcon`,`WithChildren`,`WithAnyIcon`,`Info`,`InfoWithIcon`,`Success`,`SuccessWithIcon`,`Warning`,`WarningWithIcon`,`Danger`,`DangerWithIcon`,`Error`,`ErrorWithIcon`,`AsButton`,`AsButtonDisabled`,`AsLink`,`AsLinkDisabled`,`AsButtonInfo`,`AsButtonSuccess`,`AsButtonWarning`,`AsButtonDanger`,`AsButtonError`,`AsLinkInfo`,`AsLinkDanger`,`AsButtonWithIcon`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`icon={true}\` to show the icon that matches the current variant. The default variant uses the \`default\` icon."
      }
    }
  },
  args: {
    text: "With Icon",
    icon: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Render arbitrary content inside the badge using \`children\`. Children take precedence over the \`text\` prop."
      }
    }
  },
  args: {
    children: "Children content"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass any icon name from \`KnownIcons\` to show a custom icon, independent of the variant."
      }
    }
  },
  args: {
    text: "Deleted",
    icon: "deleteForever"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`info\` variant to highlight informational states or properties."
      }
    }
  },
  args: {
    variant: "info",
    text: "Info"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Info variant with a matching icon. The icon is colored to match the variant."
      }
    }
  },
  args: {
    variant: "info",
    text: "Info",
    icon: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`success\` variant to indicate a positive or completed state."
      }
    }
  },
  args: {
    variant: "success",
    text: "Success"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Success variant with a matching icon."
      }
    }
  },
  args: {
    variant: "success",
    text: "Success",
    icon: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`warning\` variant to flag states that require attention but are not critical."
      }
    }
  },
  args: {
    variant: "warning",
    text: "Warning"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Warning variant with a matching icon."
      }
    }
  },
  args: {
    variant: "warning",
    text: "Warning",
    icon: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`danger\` variant to indicate a destructive or high-risk state."
      }
    }
  },
  args: {
    variant: "danger",
    text: "Danger"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Danger variant with a matching icon."
      }
    }
  },
  args: {
    variant: "danger",
    text: "Danger",
    icon: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`error\` variant to label a failed or invalid state."
      }
    }
  },
  args: {
    variant: "error",
    text: "Error"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Error variant with a matching icon."
      }
    }
  },
  args: {
    variant: "error",
    text: "Error",
    icon: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    onClick: () => {}
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    text: "Success",
    onClick: () => {}
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    text: "Warning",
    onClick: () => {}
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    onClick: () => {}
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    text: "Error",
    onClick: () => {}
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    text: "Info",
    href: "#"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    text: "Danger",
    href: "#"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Clickable",
    icon: true,
    onClick: () => {}
  }
}`,...K.parameters?.docs?.source}}}})))()}J();export{F as AsButton,H as AsButtonDanger,I as AsButtonDisabled,U as AsButtonError,z as AsButtonInfo,B as AsButtonSuccess,V as AsButtonWarning,K as AsButtonWithIcon,L as AsLink,G as AsLinkDanger,R as AsLinkDisabled,W as AsLinkInfo,j as Danger,M as DangerWithIcon,N as Error,P as ErrorWithIcon,T as Info,E as InfoWithIcon,D as Success,O as SuccessWithIcon,k as Warning,A as WarningWithIcon,w as WithAnyIcon,C as WithChildren,S as WithDefaultIcon,q as __namedExportsOrder,x as default};