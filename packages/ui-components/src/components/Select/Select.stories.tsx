/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import type { ReactElement } from "react"
import { Select, SelectProps } from "./Select.component"
import { SelectOption } from "../SelectOption/SelectOption.component"
import { PortalProvider } from "../PortalProvider"
import { fn } from "@storybook/test" // Import the fn function for mocking handlers
import type { Meta, StoryObj } from "@storybook/react" // Import Storybook types

type StoryFunction = () => ReactElement

// Define explicit type for the default export
const meta: Meta<typeof Select> = {
  title: "Forms/Select/Select",
  component: Select,
  // Add explicit spy functions for all callback props
  args: {
    onChange: fn(),
    onValueChange: fn(),
  },
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
    (story: StoryFunction) => (
      <div className="jn-pb-12" style={{ minHeight: "250px" }}>
        <PortalProvider>{story()}</PortalProvider>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Select>

// Create a proper render function for Storybook
const Template = (args: SelectProps) => {
  return <Select {...args}>{args.children}</Select>
}

const ConstrainedWidthTemplate = (args: SelectProps) => {
  return (
    <div style={{ width: "300px" }}>
      <Select {...args}>{args.children}</Select>
    </div>
  )
}

const ControlledTemplate = (args: SelectProps) => {
  const [val, setVal] = useState(args.value)

  const handleChange = (val?: string | number | string[]) => {
    setVal(val)
  }

  return (
    <Select {...args} value={val} onChange={handleChange}>
      {args.children}
    </Select>
  )
}

// For the specialized bottom position template, we need to extend SelectProps
interface BottomPositionProps extends SelectProps {
  parentStyles: React.CSSProperties
}

const BottomPositionTemplate = (args: BottomPositionProps) => (
  <div style={args.parentStyles}>
    Bottom Positioned Select
    <Select {...args}>{args.children}</Select>
  </div>
)

export const Default: Story = {
  render: Template,
  args: {
    children: [
      <SelectOption key="1" value="Option 1" />,
      <SelectOption key="2" value="Option 2" />,
      <SelectOption key="3" value="Option 3" />,
    ],
  },
}

export const Primary: Story = {
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

export const PrimaryDanger: Story = {
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

export const Subdued: Story = {
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

export const WithPlaceholder: Story = {
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

export const WithLabel: Story = {
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

export const RequiredWithLabel: Story = {
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

export const Disabled: Story = {
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

export const DisabledOption: Story = {
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

export const Valid: Story = {
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

export const Invalid: Story = {
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

export const WithHelptext: Story = {
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

export const WithHelptextAsNode: Story = {
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

export const WithErrortext: Story = {
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

export const WithSuccesstext: Story = {
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

export const Error: Story = {
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

export const Loading: Story = {
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

export const ManyOptions: Story = {
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

export const EmptyOption: Story = {
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

export const OptionsWithLabels: Story = {
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

export const UncontrolledSelectWithDefaultValue: Story = {
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

export const ControlledSelect: Story = {
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
export const ControlledSelectWithOptionLabels: Story = {
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

export const UncontrolledSelect: Story = {
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
export const UncontrolledSelectWithOptionLabels: Story = {
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

export const TruncatedOptions: Story = {
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

export const NonTruncatedOptions: Story = {
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
export const WithChildrenOnly: Story = {
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

export const MultiSelect: Story = {
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

export const MultiSelectWithValue: Story = {
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

export const MultiSelectWithOptionValuesAndLabels: Story = {
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

// We need to create a specific type for the bottom positioned story
type BottomPositionStory = StoryObj<BottomPositionProps>

export const BottomPositionedSelect: BottomPositionStory = {
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
