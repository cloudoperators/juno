import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./CodeBlock.component-Dibhn6Gn.js";import{n as i,t as a}from"./TabList.component-0u4kl4S_.js";import"./TabList-BpNNYO4F.js";import{t as o}from"./Tab.component-A0BDtoAP.js";import"./Tab-p39yac01.js";import{t as s}from"./TabPanel-ehoTv4ss.js";var c=e(t()),l=n(),u=({tabs:e,codeBlocks:t})=>(0,l.jsxs)(i,{variant:`codeblocks`,children:[(0,l.jsx)(a,{children:e.map((e,t)=>(0,c.createElement)(o,{...e,key:`t-${t}`}))}),t.map((e,t)=>(0,l.jsx)(s,{children:(0,l.jsx)(r,{...e})},t))]}),d={title:`Components/CodeBlock`,component:r,argTypes:{size:{options:[`auto`,`small`,`medium`,`large`],control:{type:`select`}},children:{control:!1,table:{type:{summary:`ReactNode`}}}}},f={parameters:{docs:{description:{story:`Default code block`}}},args:{content:`Some code goes here`}},p={parameters:{docs:{description:{story:`Code Block with children`}}},args:{lang:`html`,children:`<html lang="en">
    <head>
      <title="Multi-line Html" />
    </head>
    <body>
      <main>
      </main>
    </body>
  </html>`}},m={parameters:{docs:{description:{story:`Code Block with Heading WIP`}}},args:{children:`<CodeBlock>
    <p>some code here</p>
  </CodeBlock>`,heading:`CodeBlock.jsx`}},h={parameters:{docs:{description:{story:`Fixed size CodeBlock with overflow scrollbars`}}},args:{size:`small`,content:` -------- BEGIN CERTIFICATE -------- 
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
    -------- END CERTIFICATE -------- `}},g={parameters:{docs:{description:{story:"Pass `wrap={false}` to disable line-wrapping"}}},args:{wrap:!1,children:`-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------`}},_={parameters:{docs:{description:{story:`Json View`}}},args:{lang:`json`,heading:`Json CodeBlock`,content:{someKey:`some value`,someOtherKey:`some other value`,nestedKeys:{firstNestedKey:`first nested value`}}}},v={render:u,parameters:{docs:{description:{story:"Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant='codeblocks'` to the `<Tabs>` component."}}},args:{tabs:[{label:`A Tab Label`,children:`UserData.jsx`,key:`t-0`},{label:`A Tab Label`,children:`data.json`,key:`t-1`},{label:`A Tab Label`,children:`UserData.html`,key:`t-2`}],codeBlocks:[{content:`<UserData name='User' data={data.json} />`},{lang:`json`,content:{firstName:`Joan`,lastName:`Clarke`,placeOfBirth:`West Norwood, London, England`}},{content:`<div>
    <dl>
      <dt>First Name</dt>
      <dd>Joan</dd>
      <dt>Last Name</dt>
      <dd>Clarke</dd>
      <dt>Place of Birth</dt>
      <dd>West Norwood, London, England</dd>
    </dl>
  </div>`}]}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`DefaultWithChildren`,`DefaultWithHeading`,`FixedSize`,`NonWrappingCodeBlock`,`JSONView`,`CodeBlocksWithTabs`];export{v as CodeBlocksWithTabs,f as Default,p as DefaultWithChildren,m as DefaultWithHeading,h as FixedSize,_ as JSONView,g as NonWrappingCodeBlock,y as __namedExportsOrder,d as default};