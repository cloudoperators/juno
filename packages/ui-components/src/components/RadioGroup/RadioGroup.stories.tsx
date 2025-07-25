/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { RadioGroup } from "./RadioGroup.component"
import { Radio } from "../Radio/Radio.component"

const meta: Meta<typeof RadioGroup> = {
  title: "Forms/Radio/RadioGroup",
  component: RadioGroup,
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
      <Radio value="default-1" label="Option 1" key="1" />,
      <Radio value="default-2" label="Option 2" key="2" />,
      <Radio value="default-3" label="Option 3" key="3" />,
    ],
  },
}

export const Selected: Story = {
  args: {
    name: "group-selected-radiogroup",
    selected: "selected-2",
    children: [
      <Radio id="group-selected-1" value="selected-1" label="Option 1" key="1" />,
      <Radio id="group-selected-2" value="selected-2" label="Option 2" key="2" />,
      <Radio id="group-selected-3" value="selected-3" label="Option 3" key="3" />,
    ],
  },
}

export const IndividuallyChecked: Story = {
  args: {
    name: "individually-checked-radiogroup",
    children: [
      <Radio id="individually-checked-1" value="individually-checked-1" label="Option 1" key="1" />,
      <Radio id="individually-checked-2" value="individually-checked-2" label="Option 2" key="2" />,
      <Radio id="individually-checked-3" value="individually-checked-3" label="Option 3" key="3" checked />,
    ],
  },
}

export const WithLabel: Story = {
  args: {
    name: "labelled-radiogroup",
    selected: "labelled-1",
    label: "Labelled RadioGroup",
    children: [
      <Radio id="labelled-1" value="labelled-1" label="Option 1" key="1" />,
      <Radio id="labelled-2" value="labelled-2" label="Option 2" key="2" />,
      <Radio id="labelled-3" value="labelled-3" label="Option 3" key="3" />,
    ],
  },
}

export const Required: Story = {
  args: {
    name: "required-radiogroup",
    selected: "required-1",
    label: "Required RadioGroup",
    required: true,
    children: [
      <Radio id="required-1" value="required-1" label="Option 1" key="1" />,
      <Radio id="required-2" value="required-2" label="Option 2" key="2" />,
      <Radio id="required-3" value="required-3" label="Option 3" key="3" />,
    ],
  },
}

export const Disabled: Story = {
  args: {
    name: "disabled-radiogroup",
    selected: "disabled-1",
    label: "Disabled RadioGroup",
    disabled: true,
    children: [
      <Radio id="disabled-1" value="disabled-1" label="Option 1" key="1" />,
      <Radio id="disabled-2" value="disabled-2" label="Option 2" key="2" />,
      <Radio id="disabled-3" value="disabled-3" label="Option 3" key="3" />,
    ],
  },
}

export const Valid: Story = {
  args: {
    name: "valid-radiogroup",
    selected: "",
    label: "Valid RadioGroup",
    valid: true,
    children: [
      <Radio id="valid-1" value="valid-1" label="Option 1" key="1" />,
      <Radio id="valid-2" value="valid-2" label="Option 2" key="2" />,
      <Radio id="valid-3" value="valid-3" label="Option 3" key="3" />,
    ],
  },
}

export const Invalid: Story = {
  args: {
    name: "invalid-radiogroup",
    selected: "",
    label: "Invalid RadioGroup",
    invalid: true,
    children: [
      <Radio id="invalid-1" value="invalid-1" label="Option 1" key="1" />,
      <Radio id="invalid-2" value="invalid-2" label="Option 2" key="2" />,
      <Radio id="invalid-3" value="invalid-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithHelptext: Story = {
  args: {
    name: "with-helptext",
    selected: "",
    label: "A RadioGroup",
    helptext: "Some additional explanation goes here",
    children: [
      <Radio id="invalid-1" value="with-helptext-1" label="Option 1" key="1" />,
      <Radio id="invalid-2" value="with-helptext-2" label="Option 2" key="2" />,
      <Radio id="invalid-3" value="with-helptext-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithHelptextAsNode: Story = {
  args: {
    name: "with-helptext-as-node",
    selected: "",
    label: "A RadioGroup",
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
    children: [
      <Radio id="invalid-1" value="with-helptext-node-1" label="Option 1" key="1" />,
      <Radio id="invalid-2" value="with-helptext-node-2" label="Option 2" key="2" />,
      <Radio id="invalid-3" value="with-helptext-node-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithSuccess: Story = {
  args: {
    name: "success-radiogroup",
    selected: "success-1",
    successtext: "A RadioGroup with successful validation",
    label: "RadioGroup with success",
    children: [
      <Radio id="success-1" value="success-1" label="Option 1" key="1" />,
      <Radio id="success-2" value="success-2" label="Option 2" key="2" />,
      <Radio id="success-3" value="success-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithError: Story = {
  args: {
    name: "error-radiogroup",
    selected: "error-1",
    errortext: "A RadioGroup with failed validation",
    label: "RadioGroup with error",
    children: [
      <Radio id="error-1" value="error-1" label="Option 1" key="1" />,
      <Radio id="error-2" value="error-2" label="Option 2" key="2" />,
      <Radio id="error-3" value="error-3" label="Option 3" key="3" />,
    ],
  },
}
