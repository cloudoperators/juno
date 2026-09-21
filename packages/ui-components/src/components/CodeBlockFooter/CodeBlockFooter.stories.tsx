/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React, { useCallback, useState } from "react"
import { CodeBlockFooter } from "./CodeBlockFooter.component"
import { Icon } from "../Icon"

const meta: Meta<typeof CodeBlockFooter> = {
  title: "Components/CodeBlock/CodeBlockFooter",
  component: CodeBlockFooter,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onCopy: { action: "copied" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default footer with a Copy button. `isCopied` drives the tooltip confirmation.",
      },
    },
  },
  args: {
    copy: true,
    isCopied: false,
  },
}

export const Copied: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Footer with `isCopied={true}` — the "Copied!" tooltip is shown on the Copy button.',
      },
    },
  },
  args: {
    copy: true,
    isCopied: true,
  },
}

export const NoCopyButton: Story = {
  parameters: {
    docs: {
      description: {
        story: "Footer with `copy={false}` — no Copy button is rendered.",
      },
    },
  },
  args: {
    copy: false,
    isCopied: false,
  },
}

export const WithChildren: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Custom content passed as `children` renders to the left of the Copy button. Here a Download icon is added alongside Copy.",
      },
    },
  },
  render: (args) => (
    <CodeBlockFooter {...args}>
      <Icon icon="download" />
    </CodeBlockFooter>
  ),
  args: {
    copy: true,
    isCopied: false,
  },
}

export const WithChildrenNoCopy: Story = {
  parameters: {
    docs: {
      description: {
        story: "Custom content with `copy={false}` — only the custom child (Download icon) is shown.",
      },
    },
  },
  render: (args) => (
    <CodeBlockFooter {...args}>
      <Icon icon="download" />
    </CodeBlockFooter>
  ),
  args: {
    copy: false,
    isCopied: false,
  },
}

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Fully wired example: clicking Copy toggles the "Copied!" tooltip for 1 second.',
      },
      source: {
        code: `const [isCopied, setIsCopied] = useState(false)
const handleCopy = () => {
  setIsCopied(true)
  setTimeout(() => setIsCopied(false), 1000)
}

<CodeBlockFooter onCopy={handleCopy} isCopied={isCopied} copy={true} />`,
      },
    },
  },
  render: () => {
    const [isCopied, setIsCopied] = useState(false)
    const handleCopy = useCallback(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 1000)
    }, [])
    return <CodeBlockFooter onCopy={handleCopy} isCopied={isCopied} copy={true} />
  },
}
