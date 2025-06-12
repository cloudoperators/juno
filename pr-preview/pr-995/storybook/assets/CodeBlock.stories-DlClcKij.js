import{j as e,r as W}from"./iframe-B7VDxPWK.js";import{C as x}from"./CodeBlock.component-Bz6wXxqi.js";import{T as S,a as J}from"./TabList.component-DGRsmTxA.js";import{T as R}from"./Tab.component-B4UAokJM.js";import{T as P}from"./TabPanel.component-C8s8TEg5.js";import"./JsonViewer.component-Ctj_Njbe.js";import"./SearchInput.component-CT3n2lLg.js";import"./Icon.component-BrQtvuC3.js";import"./Stack.component-BikFyd-_.js";import"./TabPanel-CL6Qig0a.js";const K=({tabs:v,codeBlocks:L})=>e.jsxs(S,{variant:"codeblocks",children:[e.jsx(J,{children:v.map((d,A)=>W.createElement(R,{...d,key:`t-${A}`}))}),L.map((d,A)=>e.jsx(P,{children:e.jsx(x,{...d})},A))]}),Q={title:"Components/CodeBlock",component:x,argTypes:{size:{options:["auto","small","medium","large"],control:{type:"select"}},children:{control:!1,table:{type:{summary:"ReactNode"}}}}},n={parameters:{docs:{description:{story:"Default code block"}}},args:{content:"Some code goes here"}},a={parameters:{docs:{description:{story:"Code Block with children"}}},args:{lang:"html",children:`<html lang="en">
    <head>
      <title="Multi-line Html" />
    </head>
    <body>
      <main>
      </main>
    </body>
  </html>`}},o={parameters:{docs:{description:{story:"Code Block with Heading WIP"}}},args:{children:`<CodeBlock>
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
    -------- END CERTIFICATE -------- `}},r={parameters:{docs:{description:{story:"Pass `wrap={false}` to disable line-wrapping"}}},args:{wrap:!1,children:"-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------"}},t={parameters:{docs:{description:{story:"Json View"}}},args:{lang:"json",heading:"Json CodeBlock",content:{someKey:"some value",someOtherKey:"some other value",nestedKeys:{firstNestedKey:"first nested value"}}}},C={render:K,parameters:{docs:{description:{story:"Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant='codeblocks'` to the `<Tabs>` component."}}},args:{tabs:[{label:"A Tab Label",children:"UserData.jsx",key:"t-0"},{label:"A Tab Label",children:"data.json",key:"t-1"},{label:"A Tab Label",children:"UserData.html",key:"t-2"}],codeBlocks:[{content:"<UserData name='User' data={data.json} />"},{lang:"json",content:{firstName:"Joan",lastName:"Clarke",placeOfBirth:"West Norwood, London, England"}},{content:`<div>
    <dl>
      <dt>First Name</dt>
      <dd>Joan</dd>
      <dt>Last Name</dt>
      <dd>Clarke</dd>
      <dt>Place of Birth</dt>
      <dd>West Norwood, London, England</dd>
    </dl>
  </div>`}]}};var E,c,l;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,D,F;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(F=(D=a.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var B,m,p;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,b,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var T,u,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(u=r.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var y,f,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(f=t.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var w,I,j;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(I=C.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const X=["Default","DefaultWithChildren","DefaultWithHeading","FixedSize","NonWrappingCodeBlock","JSONView","CodeBlocksWithTabs"];export{C as CodeBlocksWithTabs,n as Default,a as DefaultWithChildren,o as DefaultWithHeading,s as FixedSize,t as JSONView,r as NonWrappingCodeBlock,X as __namedExportsOrder,Q as default};
