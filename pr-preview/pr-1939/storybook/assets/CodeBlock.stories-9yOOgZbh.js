import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{t as i}from"./Icon.component-Ckfze2h2.js";import{t as a}from"./Icon-DBxGZksg.js";import{n as o,t as s}from"./CodeBlock.component-Dj79VrwL.js";import{r as c,t as l}from"./TabList.component-Ue2tVoPa.js";import{n as u,t as d}from"./TabList-DmNxn5pk.js";import{t as f}from"./Tab.component-RcpD7qkc.js";import{t as p}from"./Tab-oAgftAlf.js";import{n as m,t as h}from"./TabPanel-DNCj2k3J.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{g=t(n()),o(),a(),u(),d(),p(),h(),_=n(),v=r(),y=({tabs:e,codeBlocks:t})=>(0,v.jsxs)(c,{variant:`codeblocks`,children:[(0,v.jsx)(l,{children:e.map((e,t)=>(0,_.createElement)(f,{...e,key:`t-${t}`}))}),t.map((e,t)=>(0,v.jsx)(m,{children:(0,v.jsx)(s,{...e})},t))]}),b={title:`Components/CodeBlock`,component:s,argTypes:{size:{options:[`auto`,`small`,`medium`,`large`],control:{type:`select`}},children:{control:!1,table:{type:{summary:`ReactNode`}}}}},x={parameters:{docs:{description:{story:`Default code block`}}},args:{content:`Some code goes here`}},S={parameters:{docs:{description:{story:`Code Block with children`}}},args:{lang:`html`,children:`<html lang="en">
    <head>
      <title="Multi-line Html" />
    </head>
    <body>
      <main>
      </main>
    </body>
  </html>`}},C={parameters:{docs:{description:{story:`Code Block with Heading WIP`}}},args:{children:`<CodeBlock>
    <p>some code here</p>
  </CodeBlock>`,heading:`CodeBlock.jsx`}},w={parameters:{docs:{description:{story:`Fixed size CodeBlock with overflow scrollbars`}}},args:{size:`small`,content:` -------- BEGIN CERTIFICATE --------
    30818902818100C4A06B7B52F8D17DC1C0
    B47362C64AB799AAE19E245A7559E9CEEC
    7D8AA4DF07CB0B21FDFD763C63A313A668
    FE9D764ED913C51A676788DB62AF624F42
    2C2F112C1316922AA5D37823CD9F43D1FC
    54513D14B2-9E36991F08A042C42EAAEEE
    5FE8E2CB10167174A359CEBF6FACC2C9CA
    933AD403137EE2C3F4CBED9460129C72B0
    030100030818902818100C4A06B7B52F8D
    17DC1CCB47362C64AB799AAE19E245A755
    9E9CEEC7D8AA4DF07CB0B21FDFD763C63A
    313A668FE9D764ED913C51A676788DB62A
    F624F422C2F112C1316922AA5D37823CD9
    F43D1FC54513D14B2-9E36991F08A042C4
    2EAAEEE5FE8E2CB10167174A359CEBF6FA
    CC2C9CA933AD403137E2C3F4CBED946012
    9C72B020301000
    -------- END CERTIFICATE -------- `}},T={parameters:{docs:{description:{story:"Pass `wrap={false}` to disable line-wrapping"}}},args:{wrap:!1,children:`-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------`}},E={parameters:{docs:{description:{story:`Json View`}}},args:{lang:`json`,heading:`Json CodeBlock`,content:{someKey:`some value`,someOtherKey:`some other value`,nestedKeys:{firstNestedKey:`first nested value`}}}},D={render:y,parameters:{docs:{description:{story:"Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant='codeblocks'` to the `<Tabs>` component."}}},args:{tabs:[{label:`A Tab Label`,children:`UserData.jsx`,key:`t-0`},{label:`A Tab Label`,children:`data.json`,key:`t-1`},{label:`A Tab Label`,children:`UserData.html`,key:`t-2`}],codeBlocks:[{content:`<UserData name='User' data={data.json} />`},{lang:`json`,content:{firstName:`Joan`,lastName:`Clarke`,placeOfBirth:`West Norwood, London, England`}},{content:`<div>
    <dl>
      <dt>First Name</dt>
      <dd>Joan</dd>
      <dt>Last Name</dt>
      <dd>Clarke</dd>
      <dt>Place of Birth</dt>
      <dd>West Norwood, London, England</dd>
    </dl>
  </div>`}]}},O=`const greeting = "Hello, world!"
console.log(greeting)`,k={name:`CodeBlock with Custom Footer (no Copy)`,parameters:{docs:{description:{story:"Pass content into `codeBlockFooter` to add custom actions to the footer bar. Here a Download icon is shown with `copy={false}` to hide the Copy button."},source:{code:`<CodeBlock
  content={code}
  copy={false}
  codeBlockFooter={<Icon icon="download" onClick={handleDownload} />}
/>`}}},render:()=>{let e=(0,g.useCallback)(()=>{let e=new Blob([O],{type:`text/plain`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`code.txt`,n.click(),URL.revokeObjectURL(t)},[]);return(0,v.jsx)(s,{content:O,copy:!1,codeBlockFooter:(0,v.jsx)(i,{icon:`download`,onClick:e})})}},A={name:`CodeBlock with Custom Footer and Copy`,parameters:{docs:{description:{story:"Pass content into `codeBlockFooter` and keep `copy={true}` (the default) to show custom actions and the Copy button together in one bar. The tooltip confirmation floats above and does not affect layout."},source:{code:`<CodeBlock
  content={code}
  codeBlockFooter={<Icon icon="download" onClick={handleDownload} />}
/>`}}},render:()=>{let e=(0,g.useCallback)(()=>{let e=new Blob([O],{type:`text/plain`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`code.txt`,n.click(),URL.revokeObjectURL(t)},[]);return(0,v.jsx)(s,{content:O,codeBlockFooter:(0,v.jsx)(i,{icon:`download`,onClick:e})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default code block"
      }
    }
  },
  args: {
    content: "Some code goes here"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Code Block with children"
      }
    }
  },
  args: {
    lang: "html",
    children: \`<html lang="en">
    <head>
      <title="Multi-line Html" />
    </head>
    <body>
      <main>
      </main>
    </body>
  </html>\`
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Code Block with Heading WIP"
      }
    }
  },
  args: {
    children: \`<CodeBlock>
    <p>some code here</p>
  </CodeBlock>\`,
    heading: "CodeBlock.jsx"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Fixed size CodeBlock with overflow scrollbars"
      }
    }
  },
  args: {
    size: "small",
    content: \` -------- BEGIN CERTIFICATE --------
    30818902818100C4A06B7B52F8D17DC1C0
    B47362C64AB799AAE19E245A7559E9CEEC
    7D8AA4DF07CB0B21FDFD763C63A313A668
    FE9D764ED913C51A676788DB62AF624F42
    2C2F112C1316922AA5D37823CD9F43D1FC
    54513D14B2-9E36991F08A042C42EAAEEE
    5FE8E2CB10167174A359CEBF6FACC2C9CA
    933AD403137EE2C3F4CBED9460129C72B0
    030100030818902818100C4A06B7B52F8D
    17DC1CCB47362C64AB799AAE19E245A755
    9E9CEEC7D8AA4DF07CB0B21FDFD763C63A
    313A668FE9D764ED913C51A676788DB62A
    F624F422C2F112C1316922AA5D37823CD9
    F43D1FC54513D14B2-9E36991F08A042C4
    2EAAEEE5FE8E2CB10167174A359CEBF6FA
    CC2C9CA933AD403137E2C3F4CBED946012
    9C72B020301000
    -------- END CERTIFICATE -------- \`
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`wrap={false}\` to disable line-wrapping"
      }
    }
  },
  args: {
    wrap: false,
    children: "-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Json View"
      }
    }
  },
  args: {
    lang: "json",
    heading: "Json CodeBlock",
    content: {
      someKey: "some value",
      someOtherKey: "some other value",
      nestedKeys: {
        firstNestedKey: "first nested value"
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: TabsTemplate,
  parameters: {
    docs: {
      description: {
        story: "Tabbed CodeBlocks can be composed using the \`<Tabs>\`, \`<Tab>\`, \`<TabList>\`, and \`<TabPanel>\` components. Make sure to pass \`variant='codeblocks'\` to the \`<Tabs>\` component."
      }
    }
  },
  args: {
    tabs: [{
      label: "A Tab Label",
      children: "UserData.jsx",
      key: "t-0"
    }, {
      label: "A Tab Label",
      children: "data.json",
      key: "t-1"
    }, {
      label: "A Tab Label",
      children: "UserData.html",
      key: "t-2"
    }],
    codeBlocks: [{
      content: "<UserData name='User' data={data.json} />"
    }, {
      lang: "json",
      content: {
        firstName: "Joan",
        lastName: "Clarke",
        placeOfBirth: "West Norwood, London, England"
      }
    }, {
      content: \`<div>
    <dl>
      <dt>First Name</dt>
      <dd>Joan</dd>
      <dt>Last Name</dt>
      <dd>Clarke</dd>
      <dt>Place of Birth</dt>
      <dd>West Norwood, London, England</dd>
    </dl>
  </div>\`
    }]
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "CodeBlock with Custom Footer (no Copy)",
  parameters: {
    docs: {
      description: {
        story: "Pass content into \`codeBlockFooter\` to add custom actions to the footer bar. Here a Download icon is shown with \`copy={false}\` to hide the Copy button."
      },
      source: {
        code: \`<CodeBlock
  content={code}
  copy={false}
  codeBlockFooter={<Icon icon="download" onClick={handleDownload} />}
/>\`
      }
    }
  },
  render: () => {
    const handleDownload = useCallback(() => {
      const blob = new Blob([customFooterContent], {
        type: "text/plain"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "code.txt";
      a.click();
      URL.revokeObjectURL(url);
    }, []);
    return <CodeBlock content={customFooterContent} copy={false} codeBlockFooter={<Icon icon="download" onClick={handleDownload} />} />;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "CodeBlock with Custom Footer and Copy",
  parameters: {
    docs: {
      description: {
        story: "Pass content into \`codeBlockFooter\` and keep \`copy={true}\` (the default) to show custom actions and the Copy button together in one bar. The tooltip confirmation floats above and does not affect layout."
      },
      source: {
        code: \`<CodeBlock
  content={code}
  codeBlockFooter={<Icon icon="download" onClick={handleDownload} />}
/>\`
      }
    }
  },
  render: () => {
    const handleDownload = useCallback(() => {
      const blob = new Blob([customFooterContent], {
        type: "text/plain"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "code.txt";
      a.click();
      URL.revokeObjectURL(url);
    }, []);
    return <CodeBlock content={customFooterContent} codeBlockFooter={<Icon icon="download" onClick={handleDownload} />} />;
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`DefaultWithChildren`,`DefaultWithHeading`,`FixedSize`,`NonWrappingCodeBlock`,`JSONView`,`CodeBlocksWithTabs`,`CustomCodeBlockFooter`,`CustomCodeBlockFooterWithCopy`]})))()}M();export{D as CodeBlocksWithTabs,k as CustomCodeBlockFooter,A as CustomCodeBlockFooterWithCopy,x as Default,S as DefaultWithChildren,C as DefaultWithHeading,w as FixedSize,E as JSONView,T as NonWrappingCodeBlock,j as __namedExportsOrder,b as default};