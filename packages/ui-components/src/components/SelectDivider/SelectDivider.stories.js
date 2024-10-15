/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SelectDivider } from "./index.js"
import { Select } from "../Select/index.js"
import { SelectOption } from "../SelectOption/index.js"
import { PortalProvider } from "../../deprecated_js/PortalProvider/PortalProvider.component.js"

export default {
  title: "Forms/Select/SelectDivider",
  component: SelectDivider,
  argTypes: {},
  decorators: [(story) => <PortalProvider>{story()}</PortalProvider>],
}

const Template = () => {
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
