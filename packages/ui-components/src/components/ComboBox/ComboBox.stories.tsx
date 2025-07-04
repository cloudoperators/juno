/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { ComboBox } from "./index"
import { ComboBoxOption } from "../ComboBoxOption/index"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"
import { ComboBoxProps } from "./ComboBox.component"
import { fn } from "storybook/test" // Import the fn function for mocking handlers
import type { Meta, StoryObj } from "@storybook/react-vite" // Import Meta and StoryObj types

const meta: Meta<typeof ComboBox> = {
  title: "Forms/ComboBox/ComboBox",
  component: ComboBox,
  args: {
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
    onInputChange: fn(),
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    errortext: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    helptext: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    successtext: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onBlur: {
      control: false,
    },
    onChange: {
      control: false,
    },
    onFocus: {
      control: false,
    },
    onInputChange: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="jn:pb-12">
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const Template = ({ children, ...args }: ComboBoxProps) => {
  return <ComboBox {...args}>{children}</ComboBox>
}

const ConstrainedWidthTemplate = ({ children, ...args }: ComboBoxProps) => {
  return (
    <div style={{ width: "300px" }}>
      <ComboBox {...args}>{children}</ComboBox>
    </div>
  )
}

const ControlledTemplate = ({ value, children }: ControlledTemplateProps) => {
  const [v, setV] = useState(value)

  useEffect(() => {
    setV(value)
  }, [value])

  return <ComboBox value={v}>{children}</ComboBox>
}

// define prop types for ControlledTemplate
interface ControlledTemplateProps extends ComboBoxProps {
  value?: string
}

export const Default: Story = {
  render: Template,

  args: {
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const ControlledComboBox: Story = {
  render: ControlledTemplate,

  args: {
    value: "Houdini",
    label: "A controlled ComboBox",
    children: [
      <ComboBoxOption value="Caligari" key="1">
        Caligari
      </ComboBoxOption>,
      <ComboBoxOption value="Houdini" key="2">
        Houdini
      </ComboBoxOption>,
      <ComboBoxOption value="Lencia" key="3"></ComboBoxOption>,
    ],
  },
}

export const UncontrolledComboBox: Story = {
  render: Template,

  args: {
    defaultValue: "Lencia",
    label: "An uncontrolled ComboBox",
    children: [
      <ComboBoxOption value="Caligari" key="1">
        Caligari
      </ComboBoxOption>,
      <ComboBoxOption value="Houdini" key="2">
        Houdini
      </ComboBoxOption>,
      <ComboBoxOption value="Lencia" key="3"></ComboBoxOption>,
    ],
  },
}

export const WithLabel: Story = {
  render: Template,

  args: {
    label: "ComboBox",
    placeholder: "",
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const WithLabelAndPlaceholder: Story = {
  render: Template,

  args: {
    label: "ComboBox",
    placeholder: "Type or select an Option…",
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const Required: Story = {
  render: Template,

  args: {
    label: "Required ComboBox",
    required: true,
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const Valid: Story = {
  render: Template,

  args: {
    label: "Valid ComboBox",
    valid: true,
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const Invalid: Story = {
  render: Template,

  args: {
    label: "invalid ComboBox",
    invalid: true,
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const Disabled: Story = {
  render: Template,

  args: {
    label: "Disabled ComboBox",
    disabled: true,
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const DisabledOption: Story = {
  render: Template,

  args: {
    label: "ComboBox with a Disabled Option",
    helptext: "Option Carrots should be disabled",
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2" disabled>
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
    ],
  },
}

export const WithHelpText: Story = {
  render: Template,

  args: {
    label: "ComboBox",
    helptext: "Helptext to describe meaning and significance of the ComboBox",
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const WithHelpTextAsNode: Story = {
  render: Template,

  args: {
    label: "ComboBox",
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const WithErrorText: Story = {
  render: Template,

  args: {
    label: "ComboBox",
    errortext: "Invalidated by passing an errortext",
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const WithSuccessText: Story = {
  render: Template,

  args: {
    label: "ComboBox",
    successtext: "Validated by passing a successtext",
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
      <ComboBoxOption value="Eggplant" key="7">
        Eggplant
      </ComboBoxOption>,
      <ComboBoxOption value="Zucchini" key="8">
        Zucchini
      </ComboBoxOption>,
      <ComboBoxOption value="Brussels sprouts" key="9">
        Brussels Sprouts
      </ComboBoxOption>,
      <ComboBoxOption value="Horseradish" key="10">
        Horseradish
      </ComboBoxOption>,
      <ComboBoxOption value="Green beans" key="11">
        Green Beans
      </ComboBoxOption>,
      <ComboBoxOption value="Mushrooms" key="12">
        Mushrooms
      </ComboBoxOption>,
      <ComboBoxOption value="Leek" key="13">
        Leek
      </ComboBoxOption>,
      <ComboBoxOption value="Artichokes" key="14">
        Artichokes
      </ComboBoxOption>,
      <ComboBoxOption value="Peas" key="15">
        Peas
      </ComboBoxOption>,
      <ComboBoxOption value="Potatoes" key="16">
        Potatoes
      </ComboBoxOption>,
    ],
  },
}

export const NonNullable: Story = {
  render: Template,

  args: {
    // nullable: false,
    label: "Non-Nullable ComboBox",
    helptext:
      "This Select can not be reset to having no value selected. The last selected value will remian selected when emptying the input field.",
    children: [
      <ComboBoxOption value="Rhubarb" key="1">
        Rhubarb
      </ComboBoxOption>,
      <ComboBoxOption value="Carrots" key="2">
        Carrots
      </ComboBoxOption>,
      <ComboBoxOption value="Spinach" key="3">
        Spinach
      </ComboBoxOption>,
      <ComboBoxOption value="Tomatoes" key="4">
        Tomatoes
      </ComboBoxOption>,
      <ComboBoxOption value="Cucumbers" key="5">
        Cucumbers
      </ComboBoxOption>,
      <ComboBoxOption value="Cauliflower" key="6">
        Cauliflower
      </ComboBoxOption>,
    ],
  },
}

export const NonTruncatedOptions: Story = {
  render: ConstrainedWidthTemplate,

  args: {
    children: [
      <ComboBoxOption
        value="Option with a very long title that is so long it will most likely not fit into the menu width, not at all really."
        key="1"
      ></ComboBoxOption>,
      <ComboBoxOption
        value="Yet another option with a very long title that is so long it will most likely not fit into the menu width, not at all really."
        key="2"
      ></ComboBoxOption>,
    ],
  },
}

export const TruncatedOptions: Story = {
  render: ConstrainedWidthTemplate,

  args: {
    truncateOptions: true,
    children: [
      <ComboBoxOption
        value="Option with a very long title that is so long it will most likely not fit into the menu width, not at all really."
        key="1"
      ></ComboBoxOption>,
      <ComboBoxOption
        value="Yet another option with a very long title that is so long it will most likely not fit into the menu width, not at all really."
        key="2"
      ></ComboBoxOption>,
    ],
  },
}

export const OptionsWithLabels: Story = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "If an option has both a label and a child, then the child is displayed instead of the label",
      },
    },
  },

  args: {
    children: [
      <ComboBoxOption value="option1_value" label="Option 1 Label" key="1" />,
      <ComboBoxOption value="option2_value" label="Option 2 Label" key="2">
        Option 2 child is displayed instead of label
      </ComboBoxOption>,
    ],
  },
}

export const Loading: Story = {
  render: Template,

  args: {
    loading: true,
    helptext: "ComboBox busy loading options",
  },
}

export const Error = {
  render: Template,

  args: {
    error: true,
    errortext: "ComboBox having trouble loading options",
  },
}

export const ValueAndDefaultValue: Story = {
  render: Template,

  args: {
    value: "Option 1",
    defaultValue: "Option 2",
    children: [
      <ComboBoxOption value="Option 1" key="1" />,
      <ComboBoxOption value="Option 2" key="2" />,
      <ComboBoxOption value="Option 3" key="3" />,
    ],
  },
}
