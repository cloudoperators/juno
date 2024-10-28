/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import SelectRow from "./SelectRow.component"
import { SelectOption } from "../../deprecated_js/SelectOption/SelectOption.component"
import { PortalProvider } from "../../deprecated_js/PortalProvider/PortalProvider.component"

export default {
  title: "Deprecated/SelectRow",
  component: SelectRow,
  parameters: {
    docs: {
      description: {
        component:
          "DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead.",
      },
    },
  },
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [(story) => <PortalProvider>{story()}</PortalProvider>],
}
const defaultSelectArgs = { value: "Option 1" }
const Template = ({ items, ...args }) => (
  <SelectRow {...args}>
    {items.map((item, i) => (
      <SelectOption {...item} key={`${i}`} />
    ))}
  </SelectRow>
)

Template.propTypes = {
  items: PropTypes.array,
}

const ControlledTemplate = ({ value, children, ...args }) => {
  const [val, setVal] = useState(undefined)

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <SelectRow
      value={val}
      onValueChange={(value) => {
        setVal(value)
      }}
      {...args}
    >
      {children}
    </SelectRow>
  )
}

ControlledTemplate.propTypes = {
  value: PropTypes.string,
  children: PropTypes.array,
}

export const Default = {
  render: Template,

  args: {
    name: "",
    placeholder: "Select…",
    id: "",
    required: false,
    className: "",
    helptext: "",
    disabled: false,
    invalid: false,
    errortext: "",
    value: undefined,
    onValueChange: undefined,
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Select Row",
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },
}

export const Controlled = {
  render: ControlledTemplate,

  args: {
    name: "",
    placeholder: "Select…",
    id: "",
    required: false,
    className: "",
    helptext: "",
    disabled: false,
    invalid: false,
    errortext: "",
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Controlled SelectRow",
    value: "2",
    children: [
      <SelectOption value="1" key="1">
        Value 1
      </SelectOption>,
      <SelectOption value="2" key="2">
        Value 2
      </SelectOption>,
      <SelectOption value="3" key="3">
        Value 3
      </SelectOption>,
    ],
  },
}

export const WithHelpTextAndPlaceholder = {
  render: Template,

  args: {
    name: "",
    id: "",
    required: false,
    className: "",
    disabled: false,
    invalid: false,
    errortext: "",
    value: undefined,
    onValueChange: undefined,
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Select Row with Helptext and placeholder",
    helptext: "Select one",
    placeholder: "Select an option…",
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },
}

export const WithHelpTextWithLink = {
  render: Template,

  args: {
    name: "",
    placeholder: "Select…",
    id: "",
    required: false,
    className: "",
    disabled: false,
    invalid: false,
    errortext: "",
    value: undefined,
    onValueChange: undefined,
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Select Row with Helptext",
    helptext: (
      <>
        Helptext with a <a href="#">Link</a>
      </>
    ),
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },
}

export const Required = {
  render: Template,

  args: {
    label: "Required Select Row",
    required: true,
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },
}

export const WithSelectedOption = {
  render: Template,

  args: {
    label: "Select Row with selected option",
    required: true,
    value: "d-2",
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      {
        ...defaultSelectArgs,
        value: "d-2",
        label: "Option 2 is selected",
      },
      { ...defaultSelectArgs, value: "d-3", label: "Option 3" },
    ],
  },
}

export const Disabled = {
  render: Template,

  args: {
    label: "Required Select Row",
    disabled: true,
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },
}

export const Invalid = {
  render: Template,

  args: {
    invalid: true,
    label: "Invalid SelectRow",
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },
}

export const WithErrorText = {
  render: Template,

  args: {
    label: "Select Row with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the SelectRow will be set to invalid automatically.",
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },

  parameters: {
    docs: {
      description: {
        story:
          "Passing an `errortext` prop to the SelectRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well.",
      },
    },
  },
}

export const Valid = {
  render: Template,

  args: {
    valid: true,
    label: "Valid SelectRow",
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },
}

export const WithSuccessText = {
  render: Template,

  args: {
    label: "Select Row with Error Text",
    successtext: "When passed an successtext prop, the SelectRow will be set to valid automatically.",
    items: [
      { ...defaultSelectArgs, value: "d-1", label: "Option 1" },
      { ...defaultSelectArgs, value: "d-2", label: "Option 2" },
    ],
  },

  parameters: {
    docs: {
      description: {
        story:
          "Passing a `successtext` prop to the SelectRow component will automatically validate it, so there is no need to explicitly set `valid` as well.",
      },
    },
  },
}

export const Loading = {
  render: Template,

  args: {
    loading: true,
    label: "Loading options…",
    items: [],
  },

  parameters: {
    docs: {
      description: {
        story: "Set a SelectRow to `loading` when a Select is busy loading the optiins to display",
      },
    },
  },
}

export const Error = {
  render: Template,

  args: {
    error: true,
    label: "Loading options failed",
    items: [],
  },

  parameters: {
    docs: {
      description: {
        story:
          "Set a SelectRow to `error` when a loading options, e.g. from a remote API, failed. When the Select has been negatively validated, use `invalid` instead.",
      },
    },
  },
}
