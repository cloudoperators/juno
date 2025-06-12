/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Textarea } from "./index"
import { fn } from "storybook/test" // Import the fn function for mocking handlers
import type { Meta, StoryObj } from "@storybook/react-vite" // Import type definitions

// Define the component type
type TextareaProps = React.ComponentProps<typeof Textarea>

// Properly type the Meta object
const meta: Meta<TextareaProps> = {
  title: "Forms/Textarea",
  component: Textarea,
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
  },
}

export default meta

// Define story types
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Some text here",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Textarea",
  },
}

export const RequiredWithLabel: Story = {
  args: {
    label: "Required Textarea",
    required: true,
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: "Some invalid text here",
  },
}

export const Valid: Story = {
  args: {
    valid: true,
    placeholder: "Some valid text here",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "A disabled textarea",
  },
}

export const Autofocus: Story = {
  args: {
    placeholder: "An autofocussing textarea",
    autoFocus: true,
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
