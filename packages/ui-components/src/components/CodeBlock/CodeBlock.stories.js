/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { CodeBlock } from "./index.js"
import { Tabs } from "../../deprecated_js/Tabs/index.js"
import { TabList } from "../../deprecated_js/TabList/index.js"
import { Tab } from "../../deprecated_js/Tab/index.js"
import { TabPanel } from "../../deprecated_js/TabPanel/index.js"

const TabStory = {
  args: {
    label: "A Tab Label",
    children: "Tab 1",
  },
}

export default {
  title: "Components/CodeBlock",
  component: CodeBlock,
  argTypes: {
    size: {
      options: ["auto", "small", "medium", "large"],
      control: { type: "select" },
    },
    children: {
      control: false,
    },
  },
}

const TabsTemplate = ({ tabs, codeBlocks }) => (
  <Tabs variant="codeblocks">
    <TabList>
      {tabs.map((tab, t) => (
        <Tab {...tab} key={`t-${t}`}></Tab>
      ))}
    </TabList>
    {codeBlocks.map((codeBlock, c) => (
      <TabPanel key={c}>
        <CodeBlock {...codeBlock} />
      </TabPanel>
    ))}
  </Tabs>
)

TabsTemplate.propTypes = {
  tabs: PropTypes.array,
  codeBlocks: PropTypes.array,
}

export const Default = {
  parameters: {
    docs: {
      description: {
        story: "Default code block",
      },
    },
  },

  args: {
    content: "Some code goes here",
  },
}

export const DefaultWithChildren = {
  parameters: {
    docs: {
      description: {
        story: "Code Block with children",
      },
    },
  },

  args: {
    lang: "html",
    children: `<html lang="en">
    <head>
      <title="Multi-line Html" />
    </head>
    <body>
      <main>
      </main>
    </body>
  </html>`,
  },
}

export const DefaultWithHeading = {
  parameters: {
    docs: {
      description: {
        story: "Code Block with Heading WIP",
      },
    },
  },

  args: {
    children: `<CodeBlock>
    <p>some code here</p>
  </CodeBlock>`,
    heading: "CodeBlock.jsx",
  },
}

export const FixedSize = {
  parameters: {
    docs: {
      description: {
        story: "Fixed size CodeBlock with overflow scrollbars",
      },
    },
  },

  args: {
    size: "small",
    content: ` -------- BEGIN CERTIFICATE -------- 
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
    -------- END CERTIFICATE -------- `,
  },
}

export const NonWrappingCodeBlock = {
  parameters: {
    docs: {
      description: {
        story: "Pass `wrap={false}` to disable line-wrapping",
      },
    },
  },

  args: {
    wrap: false,
    children:
      "-------- BEGIN CERTIFICATE -------- 30818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137EE2C3F4CBED9460129C72B02030100030818902818100C4A06B7B52F8D17DC1CCB47362C64AB799AAE19E245A7559E9CEEC7D8AA4DF07CB0B21FDFD763C63A313A668FE9D764ED913C51A676788DB62AF624F422C2F112C1316922AA5D37823CD9F43D1FC54513D14B2-9E36991F08A042C42EAAEEE5FE8E2CB10167174A359CEBF6FACC2C9CA933AD403137E2C3F4CBED9460129C72B020301000 -------- END CERTIFICATE --------",
  },
}

export const JSONView = {
  parameters: {
    docs: {
      description: {
        story: "Json View",
      },
    },
  },

  args: {
    lang: "json",
    heading: "Json CodeBlock",
    content: {
      someKey: "some value",
      someOtherKey: "some other value",
      nestedKeys: {
        firstNestedKey: "first nested value",
      },
    },
  },
}

export const CodeBlocksWithTabs = {
  render: TabsTemplate,

  parameters: {
    docs: {
      description: {
        story:
          "Tabbed CodeBlocks can be composed using the `<Tabs>`, `<Tab>`, `<TabList>`, and `<TabPanel>` components. Make sure to pass `variant='codeblocks'` to the `<Tabs>` component.",
      },
    },
  },

  args: {
    tabs: [
      { ...TabStory.args, children: "UserData.jsx", key: "t-0" },
      { ...TabStory.args, children: "data.json", key: "t-1" },
      { ...TabStory.args, children: "UserData.html", key: "t-2" },
    ],
    codeBlocks: [
      { content: "<UserData name='User' data={data.json} />" },
      {
        lang: "json",
        content: {
          firstName: "Joan",
          lastName: "Clarke",
          placeOfBirth: "West Norwood, London, England",
        },
      },
      {
        content: `<div>
    <dl>
      <dt>First Name</dt>
      <dd>Joan</dd>
      <dt>Last Name</dt>
      <dd>Clarke</dd>
      <dt>Place of Birth</dt>
      <dd>West Norwood, London, England</dd>
    </dl>
  </div>`,
      },
    ],
  },
}
