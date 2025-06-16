/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "./index"

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
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
  parameters: {
    docs: {
      description: { story: 'Default Switch. Defaults to "off".' },
    },
  },
  args: {
    label: "Switch",
    id: "switch-default",
  },
}

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Switch",
    id: "switch-small",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Switch",
    id: "switch-large",
  },
}

export const On: Story = {
  parameters: {
    docs: {
      description: { story: 'Render a checked Switch by passing bool "on".' },
    },
  },
  args: {
    on: true,
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: { story: 'Disable a Switch by passing bool "disabled".' },
    },
  },
  args: {
    on: true,
    disabled: true,
    label: "Disabled Switch",
    id: "switch-disabled",
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    label: "Invalid Switch",
    id: "switch-invalid",
  },
}

export const Valid: Story = {
  args: {
    valid: true,
    label: "Valid Switch",
    id: "switch-valid",
  },
}

export const WithHelpText: Story = {
  args: {
    label: "Switch",
    helptext: "This is an explanatory text referring to the input",
  },
}

export const WithHelpTextAsNode: Story = {
  args: {
    label: "Switch",
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
  },
}

export const WithSuccessText: Story = {
  args: {
    label: "Switch",
    successtext: "This field is a great success!",
  },
}

export const WithErrorText: Story = {
  args: {
    label: "Switch",
    errortext: "This field has an error",
  },
}
