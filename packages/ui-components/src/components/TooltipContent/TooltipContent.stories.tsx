/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip } from "../Tooltip/index"
import { TooltipContent, TooltipContentProps } from "./TooltipContent.component"
import { TooltipTrigger } from "../TooltipTrigger/index"

const meta: Meta<typeof TooltipContent> = {
  title: "Components/Tooltip/TooltipContent",
  component: TooltipContent,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="jn-my-6 jn-flex jn-justify-center">
        <Tooltip initialOpen={true}>
          <TooltipTrigger>clickMe</TooltipTrigger>
          <Story />
        </Tooltip>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// Reusable template
const DefaultTemplate = (args: TooltipContentProps) => {
  return <TooltipContent {...args}>This is a tooltip</TooltipContent>
}

export const Default: Story = {
  args: {},
  render: DefaultTemplate,
}
