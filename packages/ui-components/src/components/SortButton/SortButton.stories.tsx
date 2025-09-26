/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { SortButton } from "./SortButton.component"

const meta: Meta<typeof SortButton> = {
  title: "Components/SortButton",
  component: SortButton,
  argTypes: {
    order: {
      control: {
        type: "radio",
        options: ["asc", "desc"],
      },
      description: "Initial sort order state, either ascending ('asc') or descending ('desc').",
    },
    disabled: {
      control: "boolean",
      description: "Whether the sort button is disabled.",
    },
    onOrderChange: {
      action: "orderChanged",
      description: "Callback triggered when the sort order changes.",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    order: "desc",
    onOrderChange: (order) => console.log("Sort order changed to:", order),
  },
  parameters: {
    docs: {
      description: {
        story: "Default SortButton toggling between ascending and descending order.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    order: "asc",
    disabled: true,
    onOrderChange: (order) => console.log("Attempted to change sort order to:", order),
  },
  parameters: {
    docs: {
      description: {
        story: "SortButton in a disabled state, showing the initial sorting direction.",
      },
    },
  },
}
