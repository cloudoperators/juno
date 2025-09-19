/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleButton } from "./ToggleButton.component"

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    options: {
      control: {
        type: "object",
      },
      description: "Array of options to cycle through, can be plain values or objects with value and label.",
    },
    value: {
      control: {
        type: "text",
      },
      description: "The currently selected value from the options.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled.",
    },
    renderLabel: {
      control: false,
      description: "A function to render the label based on the selected value.",
    },
    onChange: {
      action: "toggleChanged",
      description: "Callback for whenever the toggle changes.",
    },
    variant: {
      control: {
        type: "select",
        options: ["primary", "default", "primary-danger", "subdued"],
      },
      description: "Variant styling for the button.",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 1",
    onChange: (value) => console.log("Changed to:", value),
  },
  parameters: {
    docs: {
      description: {
        story: "Default ToggleButton cycling through three options.",
      },
    },
  },
}

export const WithObjectOptions: Story = {
  args: {
    options: [
      { value: "Theme 1", label: "Light Theme" },
      { value: "Theme 2", label: "Dark Theme" },
      { value: "Theme 3", label: "Colorful Theme" },
    ],
    value: "Theme 1",
    onChange: (value) => console.log("Theme changed to:", value),
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton using options with value-label objects.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 1",
    disabled: true,
    onChange: (value) => console.log("Attempted change to:", value),
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton in a disabled state, showing initial option.",
      },
    },
  },
}

export const PrimaryVariant: Story = {
  args: {
    options: ["Option A", "Option B", "Option C"],
    value: "Option A",
    variant: "primary",
    onChange: (value) => console.log("Changed to:", value),
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton rendered with primary variant styling.",
      },
    },
  },
}
