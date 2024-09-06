/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tooltip } from "../Tooltip/index"
import { TooltipContent, TooltipContentProps } from "./TooltipContent.component"
import { TooltipTrigger } from "../TooltipTrigger/index"

export default {
  title: "Components/Tooltip/TooltipContent",
  component: TooltipContent,
  argTypes: {},
  decorators: [
    (Story: React.FC<TooltipContentProps>) => (
      <div className="jn-my-6 jn-flex jn-justify-center">
        <Tooltip initialOpen={true}>
          <TooltipTrigger>clickMe</TooltipTrigger>
          <Story />
        </Tooltip>
      </div>
    ),
  ],
}

const Template: React.FC<TooltipContentProps> = ({ ...args }) => {
  return <TooltipContent {...args}>This is a tooltip</TooltipContent>
}

export const Default = {
  render: Template,
  args: {},
}
