/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { Pagination } from "./Pagination.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

const meta: Meta<typeof Pagination> = {
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
    (Story) => (
      <div className="jn:pb-12">
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6,
  },
}

export const PaginationWithNumber: Story = {
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6,
  },
}

export const PaginationWithSelect: Story = {
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6,
  },
}

export const PaginationWithInput: Story = {
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6,
  },
}

export const DisabledPagination: Story = {
  args: {
    disabled: true,
  },
}

export const ProgressPagination: Story = {
  args: {
    progress: true,
  },
}
