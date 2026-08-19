import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{t as i}from"./Icon.component-fjyINsO0.js";import{t as a}from"./Icon-_mAo93LW.js";import{n as o,t as s}from"./CodeBlockFooter.component-O5y9O-tQ.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{c=t(n()),o(),a(),l=r(),u={title:`Components/CodeBlock/CodeBlockFooter`,component:s,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},onCopy:{action:`copied`}}},d={parameters:{docs:{description:{story:"Default footer with a Copy button. `isCopied` drives the tooltip confirmation."}}},args:{copy:!0,isCopied:!1}},f={parameters:{docs:{description:{story:'Footer with `isCopied={true}` — the "Copied!" tooltip is shown on the Copy button.'}}},args:{copy:!0,isCopied:!0}},p={parameters:{docs:{description:{story:"Footer with `copy={false}` — no Copy button is rendered."}}},args:{copy:!1,isCopied:!1}},m={parameters:{docs:{description:{story:"Custom content passed as `children` renders to the left of the Copy button. Here a Download icon is added alongside Copy."}}},render:e=>(0,l.jsx)(s,{...e,children:(0,l.jsx)(i,{icon:`download`})}),args:{copy:!0,isCopied:!1}},h={parameters:{docs:{description:{story:"Custom content with `copy={false}` — only the custom child (Download icon) is shown."}}},render:e=>(0,l.jsx)(s,{...e,children:(0,l.jsx)(i,{icon:`download`})}),args:{copy:!1,isCopied:!1}},g={parameters:{docs:{description:{story:`Fully wired example: clicking Copy toggles the "Copied!" tooltip for 1 second.`},source:{code:`const [isCopied, setIsCopied] = useState(false)
const handleCopy = () => {
  setIsCopied(true)
  setTimeout(() => setIsCopied(false), 1000)
}

<CodeBlockFooter onCopy={handleCopy} isCopied={isCopied} copy={true} />`}}},render:()=>{let[e,t]=(0,c.useState)(!1),n=(0,c.useCallback)(()=>{t(!0),setTimeout(()=>t(!1),1e3)},[]);return(0,l.jsx)(s,{onCopy:n,isCopied:e,copy:!0})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default footer with a Copy button. \`isCopied\` drives the tooltip confirmation."
      }
    }
  },
  args: {
    copy: true,
    isCopied: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Footer with \`isCopied={true}\` — the "Copied!" tooltip is shown on the Copy button.'
      }
    }
  },
  args: {
    copy: true,
    isCopied: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Footer with \`copy={false}\` — no Copy button is rendered."
      }
    }
  },
  args: {
    copy: false,
    isCopied: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Custom content passed as \`children\` renders to the left of the Copy button. Here a Download icon is added alongside Copy."
      }
    }
  },
  render: args => <CodeBlockFooter {...args}>
      <Icon icon="download" />
    </CodeBlockFooter>,
  args: {
    copy: true,
    isCopied: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Custom content with \`copy={false}\` — only the custom child (Download icon) is shown."
      }
    }
  },
  render: args => <CodeBlockFooter {...args}>
      <Icon icon="download" />
    </CodeBlockFooter>,
  args: {
    copy: false,
    isCopied: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Fully wired example: clicking Copy toggles the "Copied!" tooltip for 1 second.'
      },
      source: {
        code: \`const [isCopied, setIsCopied] = useState(false)
const handleCopy = () => {
  setIsCopied(true)
  setTimeout(() => setIsCopied(false), 1000)
}

<CodeBlockFooter onCopy={handleCopy} isCopied={isCopied} copy={true} />\`
      }
    }
  },
  render: () => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = useCallback(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    }, []);
    return <CodeBlockFooter onCopy={handleCopy} isCopied={isCopied} copy={true} />;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Copied`,`NoCopyButton`,`WithChildren`,`WithChildrenNoCopy`,`Interactive`]})))()}v();export{f as Copied,d as Default,g as Interactive,p as NoCopyButton,m as WithChildren,h as WithChildrenNoCopy,_ as __namedExportsOrder,u as default};