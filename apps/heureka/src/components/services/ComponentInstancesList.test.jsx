/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, act, fireEvent } from "@testing-library/react"
import { vi } from "vitest"
import {
  StoreProvider,
  useGlobalsQueryClientFnReady,
  useGlobalsQueryOptions,
  useGlobalsActions,
} from "../StoreProvider"
import { useQuery } from "@tanstack/react-query"
import ComponentInstancesList from "./ComponentInstancesList"

// Mock dependencies
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}))

vi.mock("../StoreProvider", () => ({
  // Mock StoreProvider to just render children
  StoreProvider: ({ children }) => <div>{children}</div>,
  useGlobalsQueryClientFnReady: vi.fn(),
  useGlobalsQueryOptions: vi.fn(),
  useGlobalsActions: vi.fn(),
}))

vi.mock("../shared/LoadElement", () => ({
  default: () => <div>Loading...</div>, // Mock loading element
}))

vi.mock("../shared/Helper", () => ({
  severityString: vi.fn(() => "High"), // Mock severity string
  highestSeverity: vi.fn(),
}))

describe("ComponentInstancesList", () => {
  const mockSetQueryOptions = vi.fn() // Mock function for setting query options
  const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider> // Wrapper to provide context

  beforeEach(() => {
    // Clear previous mocks and set mock values for queries and actions
    vi.clearAllMocks()
    useGlobalsQueryClientFnReady.mockReturnValue(true)
    useGlobalsQueryOptions.mockReturnValue({})
    useGlobalsActions.mockReturnValue({ setQueryOptions: mockSetQueryOptions })
  })

  // Test: Renders the component with loading state
  it("renders loading state", () => {
    useQuery.mockReturnValue({ data: null, isLoading: true }) // Simulate loading state

    render(<ComponentInstancesList serviceCcrn="test-service" />, { wrapper }) // Render component with mock data

    // Assert: Check if the loading message is displayed
    const loadingText = screen.queryByText("Loading...")
    expect(loadingText).toBeTruthy() // Check if element is found (using toBeTruthy for Vitest)
  })

  // Test: Renders the component with mock data when available
  it("renders data when available", () => {
    useQuery.mockReturnValue({
      data: {
        ComponentInstances: {
          edges: [
            {
              node: {
                ccrn: "comp-1",
                componentVersion: { version: "1.0.0" },
                issueMatches: { totalCount: 5, edges: [] },
              },
            },
          ],
          pageInfo: {
            pages: [{ pageNumber: 1 }],
          },
        },
      },
      isLoading: false, // Simulate loaded state
    })

    render(<ComponentInstancesList serviceCcrn="test-service" />, { wrapper }) // Render component with mock data

    // Assert: Check if the component instances and other details are displayed correctly
    const componentInstancesText = screen.queryByText("Component Instances")
    expect(componentInstancesText).toBeTruthy() // Check if "Component Instances" text is found

    const comp1Text = screen.queryByText("comp-1")
    expect(comp1Text).toBeTruthy() // Check if "comp-1" component is found

    const versionText = screen.queryByText("1.0.0")
    expect(versionText).toBeTruthy() // Check if the version "1.0.0" is displayed

    const issueCountText = screen.queryByText("5")
    expect(issueCountText).toBeTruthy() // Check if the issue count "5" is displayed

    const severityText = screen.queryByText("High")
    expect(severityText).toBeTruthy() // Check if the severity "High" is displayed
  })

  // Test: Simulates pagination interaction and verifies query updates
  it("handles pagination changes", () => {
    useQuery.mockReturnValue({
      data: {
        ComponentInstances: {
          edges: [],
          pageInfo: {
            pages: [
              { pageNumber: 1, after: "cursor-1" },
              { pageNumber: 2, after: "cursor-2" },
            ],
          },
        },
      },
      isLoading: false, // Simulate loaded state
    })

    render(<ComponentInstancesList serviceCcrn="test-service" />, { wrapper }) // Render component with pagination data

    const nextButton = screen.getByRole("button", { name: /next/i }) // Find the 'Next' button in the DOM

    act(() => {
      fireEvent.click(nextButton) // Simulate a click on the 'Next' button
    })

    // Assert: Check if the correct query parameters were set after clicking the 'Next' button
    expect(mockSetQueryOptions).toHaveBeenCalledWith("ComponentInstancesOfService", {
      after: "cursor-2", // Check if pagination correctly updates the 'after' cursor
    })
  })
})
