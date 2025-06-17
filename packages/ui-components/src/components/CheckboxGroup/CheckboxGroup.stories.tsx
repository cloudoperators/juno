/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckboxGroup } from "./index"
import { Checkbox } from "../Checkbox/index"

const meta: Meta<typeof CheckboxGroup> = {
  title: "Forms/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
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
    children: {
      control: false,
    },
    selected: {
      control: false,
    },
    onChange: {
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Checkbox value="val-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" label="Option 3" key="3" />,
    ],
  },
}

export const Selected: Story = {
  args: {
    selected: ["val-2"],
    children: [
      <Checkbox value="val-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" label="Option 3" key="3" />,
    ],
  },
}

export const IndividuallyChecked: Story = {
  args: {
    children: [
      <Checkbox value="val-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" label="Option 2" key="2" checked />,
      <Checkbox value="val-3" label="Option 3" key="3" checked />,
      <Checkbox value="val-4" label="Option 4" key="4" />,
    ],
  },
}

export const WithLabel: Story = {
  args: {
    name: "Labelled ChechboxGroup",
    label: "A Labelled CheckboxGroup",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const Required: Story = {
  args: {
    name: "Required Labelled ChechboxGroup",
    label: "A Required, Labelled CheckboxGroup",
    required: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const Disabled: Story = {
  args: {
    label: "A disabled CheckboxGroup",
    disabled: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const ValidCheckboxGroup: Story = {
  args: {
    name: "valid-checkbox-group",
    label: "A valid CheckboxGroup",
    valid: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithHelptext: Story = {
  args: {
    name: "checkbox-group-with-helptext",
    label: "A CheckboxGroup with helptext",
    helptext: "A helptext",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithHelptextAsNode: Story = {
  args: {
    name: "checkbox-group-with-helptext-as-node",
    label: "A CheckboxGroup with helptext as node",
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithSuccesstext: Story = {
  args: {
    name: "checkbox-group-with-success",
    label: "A CheckboxGroup with successful validation",
    successtext: "This group is valid.",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const InvalidCheckboxGroup: Story = {
  args: {
    name: "invalid-checkbox-group",
    label: "An invalid CheckboxGroup",
    invalid: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithErrortext: Story = {
  args: {
    name: "checkbox-group-with-error",
    label: "A CheckboxGroup with an Error",
    errortext: "This group has an error.",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}
