/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReconcileButton } from "./ReconcileButton"

const renderComponent = async (onReconcile?: () => void, mockPatch?: any, onError?: (error: Error) => void) => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/test",
    component: () => (
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                retry: false,
              },
              mutations: {
                retry: false,
              },
            },
          })
        }
      >
        <ReconcileButton
          resourceType="plugins"
          resourceName="test-plugin"
          namespace="test-namespace"
          onReconcile={onReconcile}
          onError={onError}
        />
      </QueryClientProvider>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = createRouter({
    routeTree: routeTree,
    defaultPendingMinMs: 0,
    context: {
      apiClient: {
        patch: mockPatch || vi.fn().mockResolvedValue({}),
      },
      user: {
        organization: "test-org",
        supportGroups: [],
      },
    },
    history: createMemoryHistory({
      initialEntries: ["/test"],
    }),
  })

  return await act(async () => {
    return render(<RouterProvider router={router} />)
  })
}

describe("ReconcileButton", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should render the button with correct label", async () => {
    await renderComponent()
    const button = screen.getByRole("button", { name: "Reconcile" })
    expect(button).toBeInTheDocument()
  })

  it("should call apiClient.patch with correct parameters when clicked", async () => {
    const mockPatch = vi.fn().mockResolvedValue({})
    await renderComponent(undefined, mockPatch)

    const button = screen.getByRole("button", { name: "Reconcile" })
    await userEvent.click(button)

    await waitFor(() => {
      expect(mockPatch).toHaveBeenCalledWith(
        "/apis/greenhouse.sap/v1alpha1/namespaces/test-namespace/plugins/test-plugin",
        {
          metadata: {
            annotations: {
              "greenhouse.sap/reconcile": expect.any(String),
            },
          },
        }
      )
    })
  })

  it("should show 'Reconciling' label and disable button during mutation", async () => {
    const mockPatch = vi.fn().mockImplementation(() => new Promise((resolve) => setTimeout(() => resolve({}), 100)))
    await renderComponent(undefined, mockPatch)

    const button = screen.getByRole("button", { name: "Reconcile" })
    await userEvent.click(button)

    // Button should show "Reconciling" and be disabled
    await waitFor(() => {
      const reconcilingButton = screen.getByRole("button", { name: "Reconciling" })
      expect(reconcilingButton).toBeInTheDocument()
      expect(reconcilingButton).toBeDisabled()
    })
  })

  it("should call onReconcile callback after successful mutation", async () => {
    const mockPatch = vi.fn().mockResolvedValue({})
    const onReconcile = vi.fn()
    await renderComponent(onReconcile, mockPatch)

    const button = screen.getByRole("button", { name: "Reconcile" })
    await userEvent.click(button)

    await waitFor(() => {
      expect(onReconcile).toHaveBeenCalledTimes(1)
    })
  })

  it("should generate ISO timestamp for reconcile annotation", async () => {
    const mockPatch = vi.fn().mockResolvedValue({})
    await renderComponent(undefined, mockPatch)

    const button = screen.getByRole("button", { name: "Reconcile" })
    await userEvent.click(button)

    await waitFor(() => {
      // Get the patch payload (second argument of the patch call)
      const patchPayload = mockPatch.mock.calls[0][1]
      const timestamp = patchPayload.metadata.annotations["greenhouse.sap/reconcile"]

      // Verify it's a valid ISO timestamp
      expect(timestamp).toBeTruthy()
      expect(new Date(timestamp).toISOString()).toBe(timestamp)
    })
  })

  it("should call onError callback when mutation fails", async () => {
    const mockPatch = vi.fn().mockRejectedValue(new Error("Network error"))
    const onError = vi.fn()
    await renderComponent(undefined, mockPatch, onError)

    const button = screen.getByRole("button", { name: "Reconcile" })
    await userEvent.click(button)

    await waitFor(() => {
      expect(onError).toHaveBeenCalledTimes(1)
      expect(onError).toHaveBeenCalledWith(new Error("Network error"))
    })

    // Button should re-enable after error
    await waitFor(() => {
      expect(button).not.toBeDisabled()
    })
  })
})
