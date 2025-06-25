/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ShadowRoot } from "./ShadowRoot.component"

const meta: Meta<typeof ShadowRoot> = {
  title: "Layout/ShadowRoot",
  component: ShadowRoot,
  argTypes: {
    children: {
      control: false,
    },
  },
  render: (args) => (
    <ShadowRoot {...args}>
      <h1>Welcome</h1>
    </ShadowRoot>
  ),
}

export default meta
type Story = StoryObj<typeof meta>

export const EncapsulateStyles: Story = {
  args: {
    mode: "closed",
  },
}
