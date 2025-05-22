/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
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
    className: {
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    onKeyPress: {
      control: false,
      table: {
        type: { summary: "(controlCurrentPage?: number) => void" },
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="jn:pb-12">
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
} as Meta<typeof Pagination>

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />

type Story = StoryObj<PaginationProps>

export const Default: Story = {
  render: Template,
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6,
  },
}

export const PaginationWithNumber: Story = {
  render: Template,
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6,
  },
}

export const PaginationWithSelect: Story = {
  render: Template,
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6,
  },
}

export const PaginationWithInput: Story = {
  render: Template,
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6,
  },
}

export const DisabledPagination: Story = {
  render: Template,
  args: {
    disabled: true,
  },
}

export const ProgressPagination: Story = {
  render: Template,
  args: {
    progress: true,
  },
}
