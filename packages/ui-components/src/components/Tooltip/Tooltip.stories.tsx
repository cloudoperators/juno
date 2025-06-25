/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip } from "./index"
import { TooltipContent } from "../TooltipContent/index"
import { TooltipTrigger } from "../TooltipTrigger/index"
import { Icon } from "../Icon/index"
import { ToolTipVariant, TooltipPlacement } from "./ToolTip.types"

interface TooltipStoryProps {
  placement?: TooltipPlacement
  variant?: ToolTipVariant
  initialOpen?: boolean
  open?: boolean
  triggerEvent?: "click" | "hover"
  disabled?: boolean
  text?: string
  triggerText?: string
  children?: React.ReactNode
}

const meta: Meta<TooltipStoryProps> = {
  title: "Components/Tooltip/Tooltip",
  component: Tooltip,
  argTypes: {
    text: {
      table: {
        disable: true,
      },
    },
    triggerText: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="jn-my-6 jn-flex jn-justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<TooltipStoryProps>

// Reusable render templates
const DefaultTemplate = ({
  placement,
  variant,
  initialOpen,
  open,
  triggerEvent,
  disabled,
  text,
  triggerText,
  ...args
}: TooltipStoryProps) => {
  return (
    <Tooltip
      initialOpen={initialOpen}
      placement={placement}
      variant={variant}
      open={open}
      triggerEvent={triggerEvent}
      disabled={disabled}
    >
      <TooltipTrigger>
        <span key="tooltip-trigger-text">{triggerText}</span>
      </TooltipTrigger>
      <TooltipContent {...args}>{text}</TooltipContent>
    </Tooltip>
  )
}

const AsChildIconTemplate = ({
  initialOpen,
  placement,
  variant,
  open,
  triggerEvent,
  disabled,
  text,
  ...args
}: TooltipStoryProps) => {
  return (
    <Tooltip
      initialOpen={initialOpen}
      placement={placement}
      variant={variant}
      open={open}
      triggerEvent={triggerEvent}
      disabled={disabled}
    >
      <TooltipTrigger asChild={true}>
        <Icon />
      </TooltipTrigger>
      <TooltipContent {...args}>{text}</TooltipContent>
    </Tooltip>
  )
}

const AsChildButtonTemplate = ({
  initialOpen,
  placement,
  variant,
  open,
  triggerEvent,
  disabled,
  text,
  ...args
}: TooltipStoryProps) => {
  return (
    <Tooltip
      initialOpen={initialOpen}
      placement={placement}
      variant={variant}
      open={open}
      triggerEvent={triggerEvent}
      disabled={disabled}
    >
      <TooltipTrigger asChild={true}>
        <TooltipTrigger>
          <button>hover me</button>
        </TooltipTrigger>
      </TooltipTrigger>
      <TooltipContent {...args}>{text}</TooltipContent>
    </Tooltip>
  )
}

export const Default: Story = {
  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true,
  },
  render: DefaultTemplate,
}

export const Hover: Story = {
  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover",
  },
  render: DefaultTemplate,
}

export const AsChildTooltipTrigger: Story = {
  args: {
    text: "A Tooltip with asChild Icon trigger",
  },
  parameters: {
    docs: {
      description: {
        story:
          "If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger",
      },
    },
  },
  render: AsChildIconTemplate,
}

export const ButtonAsChildTooltipTrigger: Story = {
  args: {
    text: "A Tooltip with asChild Button trigger",
    triggerEvent: "hover",
  },
  parameters: {
    docs: {
      description: {
        story:
          "If the asChild option is set on the TooltipTrigger the passed child element is used as the tooltip trigger. This is useful for when you want to use e.g. an Icon or Button as the trigger",
      },
    },
  },
  render: AsChildButtonTemplate,
}

export const InfoTooltip: Story = {
  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true,
  },
  render: AsChildIconTemplate,
}

export const WarningTooltip: Story = {
  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true,
  },
  render: AsChildIconTemplate,
}

export const ErrorTooltip: Story = {
  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true,
  },
  render: AsChildIconTemplate,
}

export const DangerTooltip: Story = {
  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true,
  },
  render: AsChildIconTemplate,
}

export const SuccessTooltip: Story = {
  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true,
  },
  render: AsChildIconTemplate,
}

export const Disabled: Story = {
  args: {
    text: "A disabled tooltip",
    disabled: true,
  },
  render: AsChildIconTemplate,
}
