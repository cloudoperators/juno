/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SelectDivider } from "./SelectDivider.component"
import { Select } from "../Select"
import { SelectOption } from "../SelectOption"
import { PortalProvider } from "../PortalProvider"

const meta: Meta<typeof SelectDivider> = {
  title: "Forms/Select/SelectDivider",
  component: SelectDivider,
  argTypes: {},
  decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
  render: () => {
    return (
      <Select open>
        <SelectOption value="1">1</SelectOption>
        <SelectDivider />
        <SelectOption value="3">3</SelectOption>
      </Select>
    )
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
