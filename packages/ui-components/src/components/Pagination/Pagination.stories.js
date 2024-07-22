/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Pagination } from "./index.js"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    variant: {
      options: ['"" (default)', "number", "select", "input"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story) => (
      <div className="jn-pb-12">
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
}

const Template = ({ currentPage, pages, ...args }) => {
  const [page, setPage] = React.useState(currentPage)
  const prev = React.useCallback(() => setPage(page > 1 ? page - 1 : 1), [page])
  const next = React.useCallback(
    () => setPage(!pages || page < pages ? page + 1 : pages),
    [page]
  )

  return (
    <Pagination
      {...args}
      pages={pages}
      currentPage={page}
      onPressPrevious={prev}
      onPressNext={next}
    />
  )
}

Template.propTypes = {
  currentPage: PropTypes.number,
  pages: PropTypes.number,
}

export const Default = {
  render: Template,
  args: {},
}

export const PaginationWithNumber = {
  render: Template,

  args: {
    variant: "number",
    currentPage: 3,
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
