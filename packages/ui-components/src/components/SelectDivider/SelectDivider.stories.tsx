/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SelectDivider, SelectDividerProps } from "./SelectDivider.component"
import { Select } from "../Select"
import { SelectOption } from "../SelectOption"
import { PortalProvider } from "../PortalProvider"

export default {
  title: "Forms/Select/SelectDivider",
  component: SelectDivider,
  argTypes: {},
  decorators: [(story: () => React.ReactNode) => <PortalProvider>{story()}</PortalProvider>],
}

const Template: React.FC<SelectDividerProps> = () => {
  return (
    <Select open>
      <SelectOption value="1">1</SelectOption>
      <SelectDivider />
      <SelectOption value="3">3</SelectOption>
    </Select>
  )
}

export const Default = {
  render: Template,
  args: {},
}
