/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { MainContainer } from "./index"

const meta: Meta<typeof MainContainer> = {
  title: "Internal/MainContainer",
  component: MainContainer,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead. Main container for all content of the app. Wrapper for content containers.",
      },
    },
  },
  args: {
    children: "main content",
  },
}
