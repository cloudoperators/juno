/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ComboBox } from "./index.js"
import { ComboBoxOption } from "../ComboBoxOption/index.js"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

export default {
  title: "Forms/ComboBox/ComboBox",
  component: ComboBox,
  argTypes: {
    children: {
      control: false,
    },
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
  decorators: [
    (Story) => (
      <div className="jn-pb-12">
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
}

const Template = ({ children, ...args }) => {
  return <ComboBox {...args}>{children}</ComboBox>
}

// define prop types fro Template
Template.propTypes = {
  children: PropTypes.any,
}

const ConstrainedWidthTemplate = ({ children, ...args }) => {
  return (
    <div style={{ width: "300px" }}>
      <ComboBox {...args}>{children}</ComboBox>
    </div>
  )
}

// define prop types for ConstrainedWidthTemplate
ConstrainedWidthTemplate.propTypes = {
  children: PropTypes.any,
}

const ControlledTemplate = ({ value, children }) => {
  const [v, setV] = useState(value)

  useEffect(() => {
    setV(value)
  }, [value])

  return <ComboBox value={v}>{children}</ComboBox>
}

// define prop types for ControlledTemplate
ControlledTemplate.propTypes = {
  value: PropTypes.string,
  children: PropTypes.any,
}

export const Default = {
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

export const ControlledComboBox = {
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

export const UncontrolledComboBox = {
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

export const WithLabel = {
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

export const WithLabelAndPlaceholder = {
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

export const Required = {
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

export const Valid = {
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

export const Invalid = {
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

export const Disabled = {
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

export const DisabledOption = {
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

export const WithHelpText = {
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

export const WithHelpTextAsNode = {
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

export const WithErrorText = {
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

export const WithSuccessText = {
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

export const NonNullable = {
  render: Template,

  args: {
    nullable: false,
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

export const NonTruncatedOptions = {
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

export const TruncatedOptions = {
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

export const OptionsWithLabels = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "If an option has both a label and a child, then the child is displayed instead of the label",
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

export const Loading = {
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

export const ValueAndDefaultValue = {
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
