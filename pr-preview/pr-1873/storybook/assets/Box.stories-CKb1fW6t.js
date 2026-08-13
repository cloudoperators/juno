import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-CSnjoAvk.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{n as r,t as i}from"./Divider.component-CXaFSxrO.js";import{t as a}from"./ButtonRow.component-DpJYAeiz.js";import{t as o}from"./ButtonRow-Drz34OG-.js";import{t as s}from"./Button.component-CNVwMkLT.js";import{t as c}from"./Button-BOqMwsC6.js";var l,u,d,f,p,m,h,g=e((()=>{t(),l=n(),u=`
  jn:text-sm
  jn:rounded
  jn:border
`,d=`
  jn:bg-theme-box-default
  jn:border-theme-box-default
`,f=`
  jn:font-bold
  jn:mb-1
`,p=`
  jn:py-1
  jn:px-2
`,m={info:`jn:bg-theme-box-info jn:border-theme-box-info`,success:`jn:bg-theme-box-success jn:border-theme-box-success`,warning:`jn:bg-theme-box-warning jn:border-theme-box-warning`,error:`jn:bg-theme-box-error jn:border-theme-box-error`,danger:`jn:bg-theme-box-danger jn:border-theme-box-danger`},h=({children:e,title:t,unpad:n=!1,className:r=``,variant:i,...a})=>{let o=i?m[i]:d;return(0,l.jsx)(`div`,{className:`juno-box ${i?`juno-box-${i}`:`juno-box-default`} ${u} ${o} ${n?``:p} ${r}`,...a,children:t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`strong`,{className:`juno-box-title ${f}`,children:t}),(0,l.jsx)(`div`,{children:e})]}):e})};try{h.displayName=`Box`,h.__docgenInfo={description:`The \`Box\` component is a versatile container with optional padding and a subtle border.
It is perfect for annotations, supplementary explanations, and remarks where more visually
pronounced components like a MessageBox or InfoBox would be excessive.
This component typically displays small text but can contain any child elements as required, which supports implementing the Inline Action Box pattern.`,displayName:`Box`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Box/Box.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`The child elements to be rendered inside the Box.`,name:`children`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{},type:{name:`ReactNode`}},title:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`Optional title rendered above the content in bold.`,name:`title`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{},type:{name:`string`}},unpad:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`Determines whether the Box should render without padding.
When true, padding is removed.`,name:`unpad`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`Additional CSS classes to apply to the Box component.`,name:`className`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{default:`""`},type:{name:`string`}},variant:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`}],description:`Specify an optional semantic variant that determines the appearance of a Box. If not passed, the Box will appear neutral (default).`,name:`variant`,parent:{fileName:`ui-components/src/components/Box/Box.component.tsx`,name:`BoxProps`},required:!1,tags:{},type:{name:`enum`,raw:`BoxVariantType`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`}]}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-box--docs
{@link BoxProps }`}}}catch{}})),_=e((()=>{g()})),v=e((()=>{r()})),y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{t(),_(),v(),o(),c(),y=n(),b={title:`Components/Box`,component:h,argTypes:{variant:{control:{type:`select`},options:[`default`,`info`,`success`,`warning`,`error`,`danger`],mapping:{default:void 0}}}},x={args:{children:`Some content in a Box.`}},S={parameters:{docs:{description:{story:"To remove padding, set the `unpad` prop."}}},args:{children:`A Box without padding`,unpad:!0}},C={parameters:{docs:{description:{story:"Use the `title` prop to render a bold label above the content."}}},args:{title:`Box Title`,children:`Some content in a Box with a title.`}},w={parameters:{docs:{description:{story:'Pass `variant="info"` to render an Info Box.'}}},args:{variant:`info`,children:`This is an Info Box.`}},T={parameters:{docs:{description:{story:'Pass `variant="warning"` to render a Warning Box.'}}},args:{variant:`warning`,children:`This is a Warning Box.`}},E={parameters:{docs:{description:{story:'Pass `variant="success"` to render a Success Box.'}}},args:{variant:`success`,children:`This is a Success Box.`}},D={parameters:{docs:{description:{story:'Pass `variant="error"` to render an Error Box.'}}},args:{variant:`error`,children:`This is an Error Box.`}},O={parameters:{docs:{description:{story:'Pass `variant="danger"` to render a Danger Box.'}}},args:{variant:`danger`,children:`This is a Danger Box.`}},k={parameters:{docs:{description:{story:`An Inline Action Box to offer one or more actions in the current context without interrupting the flow or implying urgency.`}}},render:e=>(0,y.jsxs)(h,{title:`This is an Inline Action Box`,...e,children:[(0,y.jsx)(`p`,{children:`Use it to offer one or more actions in the current context without interrupting the flow or implying urgency.`}),(0,y.jsx)(i,{color:`jn:border-theme-higher`}),(0,y.jsx)(a,{children:(0,y.jsx)(s,{size:`small`,children:`Click me`})})]})},A={parameters:{docs:{description:{story:`An Inline Action Box to offer one or more actions in the current context without interrupting the flow or implying urgency.`}}},args:{variant:`info`},render:e=>(0,y.jsxs)(h,{title:`This is an Inline Info Action Box`,...e,children:[(0,y.jsx)(`p`,{children:`Use it to offer one or more actions in the current context without interrupting the flow or implying urgency.`}),(0,y.jsx)(i,{color:`jn:border-theme-higher`}),(0,y.jsxs)(a,{children:[(0,y.jsx)(s,{size:`small`,children:`Click me`}),(0,y.jsx)(s,{size:`small`,variant:`primary`,children:`Click me`})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Box."
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "To remove padding, set the \`unpad\` prop."
      }
    }
  },
  args: {
    children: "A Box without padding",
    unpad: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`title\` prop to render a bold label above the content."
      }
    }
  },
  args: {
    title: "Box Title",
    children: "Some content in a Box with a title."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`variant="info"\` to render an Info Box.'
      }
    }
  },
  args: {
    variant: "info",
    children: "This is an Info Box."
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`variant="warning"\` to render a Warning Box.'
      }
    }
  },
  args: {
    variant: "warning",
    children: "This is a Warning Box."
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`variant="success"\` to render a Success Box.'
      }
    }
  },
  args: {
    variant: "success",
    children: "This is a Success Box."
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`variant="error"\` to render an Error Box.'
      }
    }
  },
  args: {
    variant: "error",
    children: "This is an Error Box."
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`variant="danger"\` to render a Danger Box.'
      }
    }
  },
  args: {
    variant: "danger",
    children: "This is a Danger Box."
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "An Inline Action Box to offer one or more actions in the current context without interrupting the flow or implying urgency."
      }
    }
  },
  render: args => <Box title="This is an Inline Action Box" {...args}>
      <p>
        Use it to offer one or more actions in the current context without interrupting the flow or implying urgency.
      </p>
      <Divider color="jn:border-theme-higher" />
      <ButtonRow>
        <Button size="small">Click me</Button>
      </ButtonRow>
    </Box>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "An Inline Action Box to offer one or more actions in the current context without interrupting the flow or implying urgency."
      }
    }
  },
  args: {
    variant: "info"
  },
  render: args => <Box title="This is an Inline Info Action Box" {...args}>
      <p>
        Use it to offer one or more actions in the current context without interrupting the flow or implying urgency.
      </p>
      <Divider color="jn:border-theme-higher" />
      <ButtonRow>
        <Button size="small">Click me</Button>
        <Button size="small" variant="primary">
          Click me
        </Button>
      </ButtonRow>
    </Box>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithoutPadding`,`WithTitle`,`InfoBox`,`WarningBox`,`SuccessBox`,`ErrorBox`,`DangerBox`,`InlineActionBox`,`InlineInfoActionBox`]}))();export{O as DangerBox,x as Default,D as ErrorBox,w as InfoBox,k as InlineActionBox,A as InlineInfoActionBox,E as SuccessBox,T as WarningBox,C as WithTitle,S as WithoutPadding,j as __namedExportsOrder,b as default};