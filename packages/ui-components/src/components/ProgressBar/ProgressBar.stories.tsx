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
    mode: {
      control: { type: "select" },
      options: ["determinate", "busy", "simulated"],
    },
    "aria-label": {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

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
    mode: "busy",
  },
}

export const Simulated: Story = {
  args: {
    mode: "simulated",
  },
}

export const Playground: Story = {
  args: {
    value: 50,
    mode: "determinate",
    "aria-label": "Progress",
    width: "jn:w-44",
    className: "",
  },
}
