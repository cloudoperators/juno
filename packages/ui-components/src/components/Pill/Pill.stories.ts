/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Pill } from "./index.ts"

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    onClose: {
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLElement>, id: string) => void" },
      },
    },
    onClick: {
      table: {
        type: { summary: "(event: React.MouseEvent<HTMLElement>, id: string) => void" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
  },
}

export const Closeable: Story = {
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true,
  },
}

export const ValueOnly: Story = {
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
  },
}

export const ValueOnlyCloseable: Story = {
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true,
  },
}
