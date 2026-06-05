/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { NotificationManager, toast } from "./index"

describe("NotificationManager", () => {
  afterEach(() => {
    toast.dismiss()
    cleanup()
  })

  test("renders a toaster region", async () => {
    render(<NotificationManager />)

    await waitFor(() => {
      expect(screen.getByLabelText("Notifications alt+T")).toBeInTheDocument()
    })
  })

  test("renders semantic custom toast content once with description", async () => {
    render(<NotificationManager id="semantic-test" />)

    toast.success("Semantic toast title", {
      toasterId: "semantic-test",
      description: "Semantic toast description",
    })

    await waitFor(() => {
      expect(screen.getByText("Semantic toast title")).toBeInTheDocument()
      expect(screen.getAllByText("Semantic toast description")).toHaveLength(1)
    })

    expect(document.querySelector(".juno-toast-success")).toBeInTheDocument()
  })

  test("dismisses a notification by id", async () => {
    render(<NotificationManager id="dismiss-test" />)

    const id = toast.info("Dismissable toast", {
      toasterId: "dismiss-test",
      duration: 100000,
    })

    await waitFor(() => {
      expect(screen.getByText("Dismissable toast")).toBeInTheDocument()
    })

    toast.dismiss(id)

    await waitFor(() => {
      expect(screen.queryByText("Dismissable toast")).not.toBeInTheDocument()
    })
  })

  test("scopes notifications to matching toasterId", async () => {
    render(
      <>
        <NotificationManager id="manager-a" />
        <NotificationManager id="manager-b" />
      </>
    )

    toast("Only manager A should show this", { toasterId: "manager-a" })

    await waitFor(() => {
      expect(screen.getAllByText("Only manager A should show this")).toHaveLength(1)
    })

    toast("Only manager B should show this", { toasterId: "manager-b" })

    await waitFor(() => {
      expect(screen.getAllByText("Only manager B should show this")).toHaveLength(1)
    })
  })

  test("closes toast when close button is clicked", async () => {
    render(<NotificationManager id="close-btn-test" />)

    toast.info("Close me", { toasterId: "close-btn-test", duration: 100000 })

    await waitFor(() => {
      expect(screen.getByText("Close me")).toBeInTheDocument()
    })

    await userEvent.click(screen.getByTitle("Close"))

    await waitFor(() => {
      expect(screen.queryByText("Close me")).not.toBeInTheDocument()
    })
  })

  test("fires onDismiss when close button is clicked", async () => {
    const handleDismiss = vi.fn()
    render(<NotificationManager id="ondismiss-test" />)

    toast.info("Dismiss callback toast", {
      toasterId: "ondismiss-test",
      duration: 100000,
      onDismiss: handleDismiss,
    })

    await waitFor(() => {
      expect(screen.getByText("Dismiss callback toast")).toBeInTheDocument()
    })

    await userEvent.click(screen.getByTitle("Close"))

    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  test("fires onAutoClose after duration expires", async () => {
    const handleAutoClose = vi.fn()
    render(<NotificationManager id="autoclose-test" />)

    toast.info("Auto-close toast", {
      toasterId: "autoclose-test",
      duration: 100,
      onAutoClose: handleAutoClose,
    })

    await waitFor(() => {
      expect(screen.getByText("Auto-close toast")).toBeInTheDocument()
    })

    await waitFor(() => expect(handleAutoClose).toHaveBeenCalledTimes(1), { timeout: 2000 })
  })

  test("toast() without variant renders as info", async () => {
    render(<NotificationManager id="default-variant-test" />)

    toast("Default variant toast", { toasterId: "default-variant-test" })

    await waitFor(() => {
      expect(screen.getByText("Default variant toast")).toBeInTheDocument()
      expect(document.querySelector(".juno-toast-info")).toBeInTheDocument()
    })
  })

  test("renders toast with lazy message and description functions", async () => {
    render(<NotificationManager id="lazy-test" />)

    toast.warning(() => "Lazy title", {
      toasterId: "lazy-test",
      description: () => "Lazy description",
    })

    await waitFor(() => {
      expect(screen.getByText("Lazy title")).toBeInTheDocument()
      expect(screen.getByText("Lazy description")).toBeInTheDocument()
    })
  })
})
