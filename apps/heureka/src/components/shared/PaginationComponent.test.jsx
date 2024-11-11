/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { vi } from "vitest"
import PaginationComponent from "./PaginationComponent"

// Mocking queryOptions and countData props
const mockSetQueryOptions = vi.fn()
const mockQueryKey = "testQuery"
const mockQueryOptions = {}
const mockCountData = {
  testEntity: {
    pageInfo: {
      pages: [
        { pageNumber: 1, after: "1" },
        { pageNumber: 2, after: "2" },
      ],
    },
  },
}

test('should update currentPage when "Next Page" button is clicked', async () => {
  render(
    <PaginationComponent
      queryKey={mockQueryKey}
      queryOptions={mockQueryOptions}
      entityName="testEntity"
      setQueryOptions={mockSetQueryOptions}
      countData={mockCountData}
    />
  )

  // Initial value should be "1"
  expect(screen.getByRole("textbox").value).toBe("1")

  // Simulate click on "Next Page"
  fireEvent.click(screen.getByText(/Next Page/i))

  // Wait for the currentPage to update to "2"
  await waitFor(() => expect(screen.getByRole("textbox").value).toBe("2"))

  // Verify that the `setQueryOptions` function was called with the correct after value for the next page
  expect(mockSetQueryOptions).toHaveBeenCalledWith(mockQueryKey, {
    ...mockQueryOptions,
    after: "2",
  })
})

test('should update currentPage when "Previous Page" button is clicked', async () => {
  render(
    <PaginationComponent
      queryKey={mockQueryKey}
      queryOptions={mockQueryOptions}
      entityName="testEntity"
      setQueryOptions={mockSetQueryOptions}
      countData={mockCountData}
    />
  )

  // Simulate click on "Next Page" to go to page 2
  fireEvent.click(screen.getByText(/Next Page/i))
  expect(screen.getByRole("textbox").value).toBe("2")

  // Simulate click on "Previous Page"
  fireEvent.click(screen.getByText(/Previous Page/i))

  // Wait for the currentPage to update to "1"
  await waitFor(() => expect(screen.getByRole("textbox").value).toBe("1"))

  // Verify that the `setQueryOptions` function was called with the correct after value for the previous page
  expect(mockSetQueryOptions).toHaveBeenCalledWith(mockQueryKey, {
    ...mockQueryOptions,
    after: "1",
  })
})
