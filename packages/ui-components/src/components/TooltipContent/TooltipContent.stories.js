/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tooltip } from "../Tooltip/index.js"
import { TooltipContent } from "./index.js"
import { TooltipTrigger } from "../TooltipTrigger/index.js"

export default {
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

const Template = ({ ...args }) => {
  return <TooltipContent {...args}>This is a tooltip</TooltipContent>
}

export const Default = {
  render: Template,
  args: {},
}
