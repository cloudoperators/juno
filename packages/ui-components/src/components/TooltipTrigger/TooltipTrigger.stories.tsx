/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip } from "../Tooltip/index"
import { TooltipContent } from "../TooltipContent/index"
import { TooltipTriggerProps } from "./TooltipTrigger.component"
import { TooltipTrigger } from "./index"
import { Icon } from "../Icon/index"

const meta: Meta<typeof TooltipTrigger> = {
  title: "Components/Tooltip/TooltipTrigger",
  component: TooltipTrigger,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="jn-my-6 jn-flex jn-justify-center">
        <Tooltip initialOpen={true}>
          <Story />
          <TooltipContent>This is a tooltip</TooltipContent>
        </Tooltip>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// Reusable templates
const DefaultTemplate = (args: TooltipTriggerProps) => {
  return <TooltipTrigger {...args}>clickMe</TooltipTrigger>
}

const AsChildTemplate = (args: TooltipTriggerProps) => {
  return (
    <TooltipTrigger asChild={true} {...args}>
      <Icon />
    </TooltipTrigger>
  )
}

export const Default: Story = {
  args: {},
  render: DefaultTemplate,
}

export const AsChildTooltipTrigger: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger",
      },
    },
  },
  render: AsChildTemplate,
}
