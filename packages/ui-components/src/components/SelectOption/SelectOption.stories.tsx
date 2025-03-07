/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Select } from "../Select/Select.component"
import { SelectOption, SelectOptionProps } from "./SelectOption.component"
import { PortalProvider } from "../PortalProvider"

export default {
  title: "Forms/Select/SelectOption",
  component: SelectOption,
  argTypes: {
    children: {
      control: { type: "string" },
      table: {
        type: { summary: "string" },
      },
    },
  },
  decorators: [(story: () => null | undefined) => <PortalProvider>{story()}</PortalProvider>],
}

const Template = (args: React.JSX.IntrinsicAttributes & SelectOptionProps) => {
  return (
    <Select open>
      <SelectOption {...args} />
    </Select>
  )
}

export const Default = {
  render: Template,

  args: {
    value: "Option 1",
  },
}

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
    value: "Disabled Option",
  },
}

export const ChildrenOnly = {
  render: Template,

  args: {
    children: ["Option 1"],
  },
}

export const withLabel = {
  render: Template,

  args: {
    value: "option-1",
    label: "Option 1",
  },
}
