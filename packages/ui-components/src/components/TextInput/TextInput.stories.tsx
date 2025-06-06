/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TextInput } from "./index"
import { fn } from "storybook/test" // Import the fn function for mocking handlers
import type { Meta, StoryObj } from "@storybook/react-vite" // Import type definitions

// Define the component type
type TextInputProps = React.ComponentProps<typeof TextInput>

// Properly type the Meta object
const meta: Meta<TextInputProps> = {
  title: "Forms/TextInput",
  component: TextInput,
  // Add explicit spy functions for all callback props
  args: {
    onFocus: fn(),
  },
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
    value: {
      control: { type: "text" },
    },
  },
}

export default meta

// Define story types
type Story = StoryObj<TextInputProps>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: "Text Input",
  },
}

export const RequiredWithLabel: Story = {
  args: {
    label: "Required Text Input",
    required: true,
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}

export const Valid: Story = {
  args: {
    valid: true,
  },
}

export const Autofocus: Story = {
  args: {
    autoFocus: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
}

export const Email: Story = {
  args: {
    type: "email",
  },
}

export const Tel: Story = {
  args: {
    type: "tel",
  },
}

export const Url: Story = {
  args: {
    type: "url",
  },
}

export const Number: Story = {
  args: {
    type: "number",
  },
}

export const Password: Story = {
  args: {
    type: "password",
  },
}

export const WithHelpText: Story = {
  args: {
    helptext: "This is an explanatory text referring to the input",
  },
}

export const WithHelpTextAsNode: Story = {
  args: {
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
  },
}

export const WithSuccessText: Story = {
  args: {
    successtext: "This field is a great success!",
  },
}

export const WithErrorText: Story = {
  args: {
    errortext: "This field has an error",
  },
}
