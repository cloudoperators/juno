/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Pagination, PaginationProps } from "./Pagination.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    variant: {
      options: ["default", "number", "select", "input"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="jn-pb-12">
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
} as Meta<typeof Pagination>

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />

export const Default = {
  render: Template,
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6,
  },
}

export const PaginationWithNumber = {
  render: Template,
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6,
  },
}

export const PaginationWithSelect = {
  render: Template,
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6,
  },
}

export const PaginationWithInput = {
  render: Template,
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6,
  },
}

export const DisabledPagination = {
  render: Template,
  args: {
    disabled: true,
  },
}

export const ProgressPagination = {
  render: Template,
  args: {
    progress: true,
  },
}
