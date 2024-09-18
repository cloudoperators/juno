/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tooltip } from "./index"
import { TooltipContent } from "../TooltipContent/index"
import { TooltipTrigger } from "../TooltipTrigger/index"
import { Icon } from "../../deprecated_js/Icon/index"
import { ToolTipVariant, TooltipPlacement } from "./ToolTip.types"

export default {
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
    (Story: React.FC) => (
      <div className="jn-my-6 jn-flex jn-justify-center">
        <Story />
      </div>
    ),
  ],
}

interface TemplateProps {
  placement?: TooltipPlacement
  variant?: ToolTipVariant
  initialOpen?: boolean
  open?: boolean
  triggerEvent?: "click" | "hover"
  disabled?: boolean
  text?: string
  triggerText?: string
}

const Template = ({
  placement,
  variant,
  initialOpen,
  open,
  triggerEvent,
  disabled,
  text,
  triggerText,
  ...args
}: TemplateProps) => {
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
        {/* Wrap the triggerText in a JSX element */}
        <span key="tooltip-trigger-text">{triggerText}</span>
      </TooltipTrigger>
      <TooltipContent {...args}>{text}</TooltipContent>
    </Tooltip>
  )
}

const TemplateAsChildAnchor = ({
  initialOpen,
  placement,
  variant,
  open,
  triggerEvent,
  disabled,
  text,
  ...args
}: TemplateProps) => {
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

const TemplateButtonAsChildAnchor = ({
  initialOpen,
  placement,
  variant,
  open,
  triggerEvent,
  disabled,
  text,
  ...args
}: TemplateProps) => {
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
          {/* Wrap the triggerText in a JSX element */}
          <button>hover me</button>
        </TooltipTrigger>
      </TooltipTrigger>
      <TooltipContent {...args}>{text}</TooltipContent>
    </Tooltip>
  )
}

export const Default = {
  render: Template,

  args: {
    text: "A default tooltip",
    triggerText: "click me",
    initialOpen: true,
  },
}

export const Hover = {
  render: Template,

  args: {
    text: "A default tooltip opened on hover",
    triggerText: "hover me",
    triggerEvent: "hover",
  },
}

export const AsChildTooltipTrigger = {
  render: TemplateAsChildAnchor,

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
}

export const ButtonAsChildTooltipTrigger = {
  render: TemplateButtonAsChildAnchor,

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
}

export const InfoTooltip = {
  render: TemplateAsChildAnchor,

  args: {
    variant: "info",
    text: "An Info Tooltip",
    open: true,
  },
}

export const WarningTooltip = {
  render: TemplateAsChildAnchor,

  args: {
    variant: "warning",
    text: "A Warning Tooltip",
    open: true,
  },
}

export const ErrorTooltip = {
  render: TemplateAsChildAnchor,

  args: {
    variant: "error",
    text: "An Error Tooltip",
    open: true,
  },
}

export const DangerTooltip = {
  render: TemplateAsChildAnchor,

  args: {
    variant: "danger",
    text: "A Danger Tooltip.",
    open: true,
  },
}

export const SuccessTooltip = {
  render: TemplateAsChildAnchor,

  args: {
    variant: "success",
    text: "A Success Tooltip",
    open: true,
  },
}

export const Disabled = {
  render: TemplateAsChildAnchor,

  args: {
    text: "A disabled tooltip",
    disabled: true,
  },
}
