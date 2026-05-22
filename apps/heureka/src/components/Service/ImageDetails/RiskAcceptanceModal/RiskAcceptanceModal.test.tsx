/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PortalProvider } from "@cloudoperators/juno-ui-components"
import { AuthProvider } from "@cloudoperators/greenhouse-auth-provider"
import { RiskAcceptanceModal } from "./index"
import { RemediationTypeValues } from "../../../../generated/graphql"

// Mock DateTimePicker so tests can set dates without flatpickr DOM interaction
vi.mock("@cloudoperators/juno-ui-components", async (importActual) => {
  const actual = await importActual<typeof import("@cloudoperators/juno-ui-components")>()
  return {
    ...actual,
    DateTimePicker: ({ label, onChange, required, invalid, errortext }: any) => (
      <div>
        <label htmlFor="mock-date-input">
          {label}
          {required ? " *" : ""}
        </label>
        <input
          id="mock-date-input"
          aria-label={label as string}
          type="date"
          onChange={(e) => (onChange as Function)?.(e.target.value ? [new Date(e.target.value)] : [])}
        />
        {invalid && errortext ? <span>{errortext as string}</span> : null}
      </div>
    ),
  }
})

const mockAuth = { getSnapshot: () => ({ status: "anonymous" as const }) }

const defaultProps = {
  open: true,
  onClose: vi.fn(),
  onConfirm: vi.fn().mockResolvedValue(undefined),
  vulnerability: "CVE-2024-1234",
  service: "my-service",
  image: "my-image",
}

const renderModal = (props: Partial<typeof defaultProps> & Record<string, unknown> = {}) =>
  render(
    <AuthProvider embedded auth={mockAuth}>
      <PortalProvider>
        <RiskAcceptanceModal {...defaultProps} {...props} />
      </PortalProvider>
    </AuthProvider>
  )

describe("RiskAcceptanceModal", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------

  describe("rendering", () => {
    it("renders with title and vulnerability details when open", () => {
      renderModal()
      expect(screen.getByRole("heading", { name: "Accept Risk" })).toBeInTheDocument()
      expect(screen.getByText(/Vulnerability:/)).toBeInTheDocument()
      expect(screen.getByText("CVE-2024-1234")).toBeInTheDocument()
      expect(screen.getByText(/Service:/)).toBeInTheDocument()
      expect(screen.getByText("my-service")).toBeInTheDocument()
      expect(screen.getByText(/Image:/)).toBeInTheDocument()
      expect(screen.getByText("my-image")).toBeInTheDocument()
    })

    it("renders Cancel and Accept Risk buttons", () => {
      renderModal()
      expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Accept Risk" })).toBeInTheDocument()
    })

    it("renders the Jira Ticket / Source Ticket input field", () => {
      renderModal()
      expect(screen.getByPlaceholderText("e.g. JIRA-1234")).toBeInTheDocument()
    })

    it("confirm button is disabled when all required fields are empty", () => {
      renderModal()
      expect(screen.getByRole("button", { name: "Accept Risk" })).toBeDisabled()
    })

    it("confirm button is disabled when only description is filled", async () => {
      const user = userEvent.setup()
      renderModal()
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Some reason")
      expect(screen.getByRole("button", { name: "Accept Risk" })).toBeDisabled()
    })

    it("confirm button is disabled when description and user ID are filled but expiration date is missing", async () => {
      const user = userEvent.setup()
      renderModal()
      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Some reason")
      expect(screen.getByRole("button", { name: "Accept Risk" })).toBeDisabled()
    })

    it("shows an error message when onConfirm returns an error", async () => {
      const onConfirm = vi.fn().mockResolvedValue({ error: "Server error occurred" })
      const user = userEvent.setup()
      renderModal({ onConfirm })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Some reason")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      await user.click(screen.getByRole("button", { name: "Accept Risk" }))

      expect(await screen.findByText("Server error occurred")).toBeInTheDocument()
    })
  })

  // ---------------------------------------------------------------------------
  // Validation
  // ---------------------------------------------------------------------------

  describe("validation", () => {
    it("confirm button becomes enabled only once all required fields are filled", async () => {
      const user = userEvent.setup()
      renderModal()

      const confirmButton = screen.getByRole("button", { name: "Accept Risk" })

      // Empty state
      expect(confirmButton).toBeDisabled()

      // Description only
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Some reason")
      expect(confirmButton).toBeDisabled()

      // Description + user ID
      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      expect(confirmButton).toBeDisabled()

      // All three required fields → button enabled
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      expect(confirmButton).not.toBeDisabled()
    })

    it("does not call onConfirm when confirm button is clicked while disabled", async () => {
      const onConfirm = vi.fn()
      renderModal({ onConfirm })

      // Button is disabled — click should not reach onConfirm
      fireEvent.click(screen.getByRole("button", { name: "Accept Risk" }))
      expect(onConfirm).not.toHaveBeenCalled()
    })
  })

  // ---------------------------------------------------------------------------
  // Interactions
  // ---------------------------------------------------------------------------

  describe("interactions", () => {
    it("calls onClose when Cancel is clicked", async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()
      renderModal({ onClose })
      await user.click(screen.getByRole("button", { name: "Cancel" }))
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it("calls onConfirm with RiskAccepted type and correct fields when all required fields are filled", async () => {
      const onConfirm = vi.fn().mockResolvedValue(undefined)
      const user = userEvent.setup()
      renderModal({ onConfirm })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Low exposure, accepted")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })

      await user.click(screen.getByRole("button", { name: "Accept Risk" }))

      expect(onConfirm).toHaveBeenCalledWith(
        expect.objectContaining({
          type: RemediationTypeValues.RiskAccepted,
          vulnerability: "CVE-2024-1234",
          service: "my-service",
          image: "my-image",
          remediatedBy: "user-123",
          description: "Low exposure, accepted",
        })
      )
    })

    it("includes source ticket prefix in description when source ticket is provided", async () => {
      const onConfirm = vi.fn().mockResolvedValue(undefined)
      const user = userEvent.setup()
      renderModal({ onConfirm })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText("e.g. JIRA-1234"), "JIRA-9999")
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Accepted")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })

      await user.click(screen.getByRole("button", { name: "Accept Risk" }))

      expect(onConfirm).toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Source Ticket: JIRA-9999\n\nAccepted",
        })
      )
    })

    it("does not include source ticket prefix when source ticket field is empty", async () => {
      const onConfirm = vi.fn().mockResolvedValue(undefined)
      const user = userEvent.setup()
      renderModal({ onConfirm })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Accepted")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })

      await user.click(screen.getByRole("button", { name: "Accept Risk" }))

      expect(onConfirm).toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Accepted",
        })
      )
    })

    it("clears error message when Cancel is clicked after a server error", async () => {
      const onConfirm = vi.fn().mockResolvedValue({ error: "Server error occurred" })
      const onClose = vi.fn()
      const user = userEvent.setup()
      renderModal({ onConfirm, onClose })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText(/Add a description explaining the reason/i), "Some reason")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      await user.click(screen.getByRole("button", { name: "Accept Risk" }))

      expect(await screen.findByText("Server error occurred")).toBeInTheDocument()

      await user.click(screen.getByRole("button", { name: "Cancel" }))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
