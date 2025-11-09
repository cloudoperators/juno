/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "./index"

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox/Checkbox",
  component: Checkbox,
  argTypes: {
    errortext: {
      control: false,
    },
    helptext: {
      control: false,
    },
    successtext: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const WithLabel: Story = {
  args: {
    label: "Checkbox with Label",
  },
}

export const Required: Story = {
  args: {
    required: true,
    label: "Required Checkbox",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}

export const Valid: Story = {
  args: {
    valid: true,
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}

export const ValidWithLabel: Story = {
  args: {
    valid: true,
    label: "Validated checkbox with label and icon",
    successtext: "This option is valid.",
    helptext: "Validation icons will only show when there is a label on the Checkbox",
  },
}

export const InvalidWithLabel: Story = {
  args: {
    invalid: true,
    label: "Invalidated checkbox with label and icon",
    errortext: "This option is invalid.",
    helptext: "Validation icons will only show when there is a label on the Checkbox",
  },
}

export const IndeterminateWithLabel: Story = {
  args: {
    indeterminate: true,
    label: "Indeterminate checkbox with label",
    helptext: "A checkbox can be indeterminate as parent of multiple checkboxes with mixed checked states",
  },
}
