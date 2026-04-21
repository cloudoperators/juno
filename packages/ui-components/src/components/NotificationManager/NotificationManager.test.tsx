/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
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
})
