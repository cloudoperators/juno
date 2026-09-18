/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProgressBar } from "./index"

const meta: Meta<typeof ProgressBar> = {
  title: "WIP/ProgressBar",
  component: ProgressBar,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 0,
  },
}

export const Quarter: Story = {
  args: {
    value: 25,
  },
}

export const Half: Story = {
  args: {
    value: 50,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}

export const Busy: Story = {
  args: {
    busy: true,
  },
}

export const Playground: Story = {
  args: {
    value: 50,
    busy: false,
  },
}
