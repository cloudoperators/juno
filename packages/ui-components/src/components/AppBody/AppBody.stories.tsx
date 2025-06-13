/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { AppBody } from "./index.ts"

const meta: Meta<typeof AppBody> = {
  title: "Internal/AppBody",
  component: AppBody,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Body: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead. Body of the app. Treat this like the body tag of an html page.",
      },
    },
  },
  args: {},
}
