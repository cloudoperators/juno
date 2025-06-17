/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { HeaderContainer } from "./index"

const meta: Meta<typeof HeaderContainer> = {
  title: "Internal/HeaderContainer",
  component: HeaderContainer,
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
          "Only needed if you want to create the framework of your application manually. In most cases, it is better to use the AppShell component instead. The header container includes <PageHeader> and <TopNavigation>. When scrolling the page, the component sticks to the top and above the content.",
      },
    },
  },
  args: {
    children: "Header content",
  },
}
