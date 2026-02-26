/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PortalProvider } from "@cloudoperators/juno-ui-components"
import { FalsePositiveModal } from "./index"

const defaultProps = {
  open: true,
  onClose: () => {},
  onConfirm: () => Promise.resolve(),
  vulnerability: "CVE-2024-1234",
  service: "my-service",
  image: "my-image",
}

const renderModal = (props = {}) => {
  return render(
    <PortalProvider>
      <FalsePositiveModal {...defaultProps} {...props} />
    </PortalProvider>
  )
}

describe("FalsePositiveModal", () => {
  it("renders with title and vulnerability details when open", () => {
    renderModal()
    expect(screen.getByRole("heading", { name: "Mark as False Positive" })).toBeInTheDocument()
    expect(screen.getByText(/Vulnerability:/)).toBeInTheDocument()
    expect(screen.getByText("CVE-2024-1234")).toBeInTheDocument()
    expect(screen.getByText(/Service:/)).toBeInTheDocument()
    expect(screen.getByText("my-service")).toBeInTheDocument()
    expect(screen.getByText(/Image:/)).toBeInTheDocument()
    expect(screen.getByText("my-image")).toBeInTheDocument()
  })

  it("renders Cancel and Mark as False Positive buttons", () => {
    renderModal()
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Mark as False Positive" })).toBeInTheDocument()
  })

  it("calls onClose when Cancel is clicked", async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    renderModal({ onClose })
    await user.click(screen.getByRole("button", { name: "Cancel" }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
