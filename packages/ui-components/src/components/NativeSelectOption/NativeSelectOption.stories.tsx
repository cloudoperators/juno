/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelectOption } from "./NativeSelectOption.component"

const meta: Meta<typeof NativeSelectOption> = {
  title: "Forms/NativeSelect/NativeSelectOption",
  component: NativeSelectOption,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "my-option-value",
    label: "My option",
  },
}

export const Disabled: Story = {
  args: {
    value: "my-disabled-option-value",
    label: "My disabled option",
    disabled: true,
  },
}
