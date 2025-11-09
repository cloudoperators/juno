/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Code } from "./index"

const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default inline code",
      },
    },
  },
  args: {
    content: "<span>Some code passed as content prop.</span>",
  },
}

export const WithChildren: Story = {
  parameters: {
    docs: {
      description: {
        story: "Inline code with children",
      },
    },
  },
  args: {
    children: "<Code>Some code with children</Code>",
  },
}
