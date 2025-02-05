import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as J}from"./index-DysCNOs_.js";import{C as S}from"./CodeBlock.component-Ba9QfAaQ.js";import{T as L,a as R}from"./TabList.component-BTxnUz4v.js";import{T as P}from"./Tab.component-CHaKSVt5.js";import{T as K}from"./TabPanel.component-CXntPBi5.js";import"./JsonViewer.component-bFLonl-Q.js";import"./SearchInput.component-DSR9w9aC.js";import"./Icon.component-XX6hOoyn.js";import"./widgets-BR6-ubtP.js";import"./Stack.component-Cte3SL04.js";import"./TabPanel-SXlHHxNZ.js";const E={args:{label:"A Tab Label",children:"Tab 1"}},Z={title:"Components/CodeBlock",component:S,argTypes:{size:{options:["auto","small","medium","large"],control:{type:"select"}},children:{control:!1,table:{type:{summary:"ReactNode"}}}}},U=({tabs:v,codeBlocks:W})=>e.jsxs(L,{variant:"codeblocks",children:[e.jsx(R,{children:v.map((d,c)=>J.createElement(P,{...d,key:`t-${c}`}))}),W.map((d,c)=>e.jsx(K,{children:e.jsx(S,{...d})},c))]}),n={parameters:{docs:{description:{story:"Default code block"}}},args:{content:"Some code goes here"}},o={parameters:{docs:{description:{story:"Code Block with children"}}},args:{lang:"html",children:`<html lang="en">
    <head>
      <title="Multi-line Html" />
    </head>
    <body>
      <main>
      </main>
    </body>
  </html>`}},a={parameters:{docs:{description:{story:"Code Block with Heading WIP"}}},args:{children:`<CodeBlock>
    <p>some code here</p>
  </CodeBlock>`,heading:"CodeBlock.jsx"}},s={parameters:{docs:{description:{story:"Fixed size CodeBlock with overflow scrollbars"}}},args:{size:"small",content:` -------- BEGIN CERTIFICATE -------- 
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
    -------- END CERTIFICATE -------- `}},r={parameters:{docs:{description:{story:"Pass `wrap={false}` to disable line-wrapping"}}},args:{wrap:!1,children:"-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------"}},t={parameters:{docs:{description:{story:"Json View"}}},args:{lang:"json",heading:"Json CodeBlock",content:{someKey:"some value",someOtherKey:"some other value",nestedKeys:{firstNestedKey:"first nested value"}}}},C={render:U,parameters:{docs:{description:{story:"Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant='codeblocks'` to the `<Tabs>` component."}}},args:{tabs:[{...E.args,children:"UserData.jsx",key:"t-0"},{...E.args,children:"data.json",key:"t-1"},{...E.args,children:"UserData.html",key:"t-2"}],codeBlocks:[{content:"<UserData name='User' data={data.json} />"},{lang:"json",content:{firstName:"Joan",lastName:"Clarke",placeOfBirth:"West Norwood, London, England"}},{content:`<div>
    <dl>
      <dt>First Name</dt>
      <dd>Joan</dd>
      <dt>Last Name</dt>
      <dd>Clarke</dd>
      <dt>Place of Birth</dt>
      <dd>West Norwood, London, England</dd>
    </dl>
  </div>`}]}};var A,i,l;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var D,F,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(B=(F=o.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,b,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var u,k,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,N,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(N=t.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var I,j,x;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      ...TabStory.args,
      children: "UserData.jsx",
      key: "t-0"
    }, {
      ...TabStory.args,
      children: "data.json",
      key: "t-1"
    }, {
      ...TabStory.args,
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
}`,...(x=(j=C.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const ee=["Default","DefaultWithChildren","DefaultWithHeading","FixedSize","NonWrappingCodeBlock","JSONView","CodeBlocksWithTabs"];export{C as CodeBlocksWithTabs,n as Default,o as DefaultWithChildren,a as DefaultWithHeading,s as FixedSize,t as JSONView,r as NonWrappingCodeBlock,ee as __namedExportsOrder,Z as default};
