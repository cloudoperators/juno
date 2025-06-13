/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonRow } from "./index"
import { Button } from "../Button/index"

const meta: Meta<typeof ButtonRow> = {
  title: "Forms/ButtonRow",
  component: ButtonRow,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Button key="1" label="Cancel" title="Cancel" />,
      <Button key="2" label="Save" title="Save" variant="primary" />,
    ],
  },
}
