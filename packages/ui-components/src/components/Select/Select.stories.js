/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Select } from "./Select.component"
import { SelectOption } from "../SelectOption/SelectOption.component"
import { PortalProvider } from "../../deprecated_js/PortalProvider/PortalProvider.component"

export default {
  title: "Forms/Select/Select",
  component: Select,
  argTypes: {
    variant: {
      options: ["default", "primary", "primary-danger", "subdued"],
      control: { type: "select" },
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
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="jn-pb-12" style={{ minHeight: "250px" }}>
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
}

const Template = ({ children, ...args }) => {
  return <Select {...args}>{children}</Select>
}

Template.propTypes = {
  children: PropTypes.node,
}

const ConstrainedWidthTemplate = ({ children, ...args }) => {
  return (
    <div style={{ width: "300px" }}>
      <Select {...args}>{children}</Select>
    </div>
  )
}

ConstrainedWidthTemplate.propTypes = {
  children: PropTypes.node,
}

const ControlledTemplate = ({ value, children, ...args }) => {
  const [v, setV] = useState(value)

  useEffect(() => {
    setV(value)
  }, [value])

  const handleChange = (val) => {
    setV(val)
  }

  return (
    <Select {...args} value={v} onChange={handleChange}>
      {children}
    </Select>
  )
}

ControlledTemplate.propTypes = {
  value: PropTypes.any,
  children: PropTypes.node,
}

const BottomPositionTemplate = ({ parentStyles, children, ...args }) => (
  <div style={parentStyles}>
    Bottom Positioned Select
    <Select {...args}>{children}</Select>
  </div>
)

BottomPositionTemplate.propTypes = {
  parentStyles: PropTypes.object,
  children: PropTypes.node,
}

export const Default = {
  render: Template,
  args: {
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Primary = {
  render: Template,
  args: {
    variant: "primary",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const PrimaryDanger = {
  render: Template,
  args: {
    variant: "primary-danger",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Subdued = {
  render: Template,
  args: {
    variant: "subdued",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const WithPlaceholder = {
  render: Template,

  args: {
    placeholder: "Custom placeholder…",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const WithLabel = {
  render: Template,

  args: {
    label: "Your label here",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const RequiredWithLabel = {
  render: Template,

  args: {
    label: "Required Select",
    required: true,
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const DisabledOption = {
  render: Template,

  args: {
    helptext: "Option 2 is not avilable",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" disabled />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Valid = {
  render: Template,

  args: {
    valid: true,
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Invalid = {
  render: Template,

  args: {
    invalid: true,
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const WithHelptext = {
  render: Template,

  args: {
    helptext: "You may select anything, really.",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const WithHelptextAsNode = {
  render: Template,

  args: {
    helptext: (
      <>
        More Info <a href="#">here</a>.
      </>
    ),
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const WithErrortext = {
  render: Template,

  args: {
    errortext: "Please rethink your selection, somethig seems fishy.",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const WithSuccesstext = {
  render: Template,

  args: {
    successtext: "That seems to be a valid selection.",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Error = {
  render: Template,

  args: {
    error: true,
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Loading = {
  render: Template,

  args: {
    loading: true,
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const ManyOptions = {
  render: Template,

  args: {
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
      <SelectOption key="4" value="Option 4" />,
      <SelectOption key="5" value="Option 5" />,
      <SelectOption key="6" value="Option 6" />,
      <SelectOption key="7" value="Option 7" />,
      <SelectOption key="8" value="Option 8" />,
      <SelectOption key="9" value="Option 9" />,
      <SelectOption key="10" value="Option 10" />,
      <SelectOption key="11" value="Option 11" />,
      <SelectOption key="12" value="Option 12" />,
      <SelectOption key="13" value="Option 13" />,
      <SelectOption key="14" value="Option 14" />,
      <SelectOption key="15" value="Option 15" />,
    ],
  },
}

export const EmptyOption = {
  render: Template,

  args: {
    children: [
      <SelectOption key="1" value="" label="" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
      <SelectOption key="4" value="Option 4" />,
    ],
  },
}

export const OptionsWithLabels = {
  render: Template,

  args: {
    placeholder: "Please select",
    children: [
      <SelectOption value="option-1" label="Option 1" key="1" />,
      <SelectOption value="option-2" label="Option 2" key="2">
        Option 2 child is displayed if present
      </SelectOption>,
    ],
  },

  parameters: {
    docs: {
      description: {
        story:
          "Optionally the SelectOptions can be passed a `label`-prop if the value is not suitable for display. If in addition to the label prop the option has a child, then the child is displayed instead.",
      },
    },
  },
}

export const UncontrolledSelectWithDefaultValue = {
  render: Template,
  args: {
    defaultValue: "Option 2",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const ControlledSelect = {
  render: ControlledTemplate,

  args: {
    value: "Option 3",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

/**
 * If you used the Select as a controlled component (by passing the `value` prop) and if your SelectOptions
 * have labels, then you'll have to pass the `valueLabel` of the selected option as well.
 * */
export const ControlledSelectWithOptionLabels = {
  render: ControlledTemplate,

  args: {
    value: "Option 3",
    valueLabel: "Option 3 Label",
    children: [
      <SelectOption key="1" value="Option 1" label="Option 1 Label" />,
      <SelectOption key="2" value="Option 2" label="Option 2 Label" />,
      <SelectOption key="3" value="Option 3" label="Option 3 Label" />,
    ],
  },
}

export const UncontrolledSelect = {
  render: Template,

  args: {
    defaultValue: "Option 2",
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

/**
 * Similar to the controlled Select, if you used the Select as an uncontrolled component (by passing the `defaultValue` prop) and if your SelectOptions
 * have labels, then you'll have to pass the `valueLabel` of the selected option as well.
 */
export const UncontrolledSelectWithOptionLabels = {
  render: Template,

  args: {
    defaultValue: "Option 2",
    valueLabel: "Option 2 Label",
    children: [
      <SelectOption key="1" value="Option 1" label="Option 1 Label" />,
      <SelectOption key="2" value="Option 2" label="Option 2 Label" />,
      <SelectOption key="3" value="Option 3" label="Option 3 Label" />,
    ],
  },
}

export const TruncatedOptions = {
  render: ConstrainedWidthTemplate,

  args: {
    truncateOptions: true,
    children: [
      <SelectOption value="Option with a very long title that will most likely not fit into the menu width" key="1" />,
      <SelectOption
        value="Another option with a very long title that will most likely not fit into the menu width"
        key="2"
      />,
      <SelectOption
        value="Yet another option with a very long title that will most likely not fit into the menu width"
        key="3"
      />,
    ],
  },
}

export const NonTruncatedOptions = {
  render: ConstrainedWidthTemplate,

  args: {
    children: [
      <SelectOption value="Option with a very long title that will most likely not fit into the menu width" key="1" />,
      <SelectOption
        value="Another option with a very long title that will most likely not fit into the menu width"
        key="2"
      />,
      <SelectOption
        value="Yet another option with a very long title that will most likely not fit into the menu width"
        key="3"
      />,
    ],
  },
}

/**
 * As an alernative to using a `value`-prop, strings as children can be passed. Though we don't recommend this approach
 * as it will likely be deprecated or changed in the future.
 * */
export const WithChildrenOnly = {
  render: Template,

  args: {
    children: [
      <SelectOption key="1">Option 1</SelectOption>,
      <SelectOption key="2">Option 2</SelectOption>,
      <SelectOption key="3">Option 3</SelectOption>,
      <SelectOption key="4">Option 4</SelectOption>,
      <SelectOption key="5">Option 5</SelectOption>,
    ],
  },
}

export const MultiSelect = {
  render: Template,
  args: {
    multiple: true,
    children: [
      <SelectOption key="1">Option 1</SelectOption>,
      <SelectOption key="2">Option 2</SelectOption>,
      <SelectOption key="3">Option 3</SelectOption>,
      <SelectOption key="4">Option 4</SelectOption>,
      <SelectOption key="5">Option 5</SelectOption>,
    ],
  },
}

export const MultiSelectWithValue = {
  render: ControlledTemplate,
  args: {
    multiple: true,
    value: ["Option 1", "Option 3"],
    children: [
      <SelectOption key="1">Option 1</SelectOption>,
      <SelectOption key="2">Option 2</SelectOption>,
      <SelectOption key="3">Option 3</SelectOption>,
      <SelectOption key="4">Option 4</SelectOption>,
      <SelectOption key="5">Option 5</SelectOption>,
    ],
  },
}

export const MultiSelectWithOptionValuesAndLabels = {
  render: ControlledTemplate,
  args: {
    multiple: true,
    placeholder: "Select multiple…",
    children: [
      <SelectOption key="1" value="opt-1" label="Option 1" />,
      <SelectOption key="2" value="opt-2" label="Option 2" />,
      <SelectOption key="3" value="opt-3" label="Option 3" />,
    ],
  },
}

export const BottomPositionedSelect = {
  render: BottomPositionTemplate,
  args: {
    parentStyles: {
      position: "absolute",
      bottom: "0",
    },
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
      <SelectOption key="4" value="Option 4" />,
    ],
  },
}
