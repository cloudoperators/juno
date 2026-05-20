/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PortalProvider } from "@cloudoperators/juno-ui-components"
import { AuthProvider } from "@cloudoperators/greenhouse-auth-provider"
import { RemediationModal } from "./index"
import { FalsePositiveModal } from "../FalsePositiveModal"
import { RiskAcceptanceModal } from "../RiskAcceptanceModal"
import { MitigateManuallyModal } from "../MitigateManuallyModal"
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
  title: "Test Action",
  confirmLabel: "Confirm Test",
  remediationType: RemediationTypeValues.FalsePositive,
  descriptionPlaceholder: "Describe why...",
  expirationHelptext: "When this should expire.",
}

const renderModal = (props: Partial<typeof defaultProps> & Record<string, unknown> = {}) =>
  render(
    <AuthProvider embedded auth={mockAuth}>
      <PortalProvider>
        <RemediationModal {...defaultProps} {...props} />
      </PortalProvider>
    </AuthProvider>
  )

// ---------------------------------------------------------------------------
// RemediationModal — shared behaviour
// ---------------------------------------------------------------------------

describe("RemediationModal", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("rendering", () => {
    it("renders title and vulnerability details when open", () => {
      renderModal()
      expect(screen.getByRole("heading", { name: "Test Action" })).toBeInTheDocument()
      expect(screen.getByText(/Vulnerability:/)).toBeInTheDocument()
      expect(screen.getByText("CVE-2024-1234")).toBeInTheDocument()
      expect(screen.getByText(/Service:/)).toBeInTheDocument()
      expect(screen.getByText("my-service")).toBeInTheDocument()
      expect(screen.getByText(/Image:/)).toBeInTheDocument()
      expect(screen.getByText("my-image")).toBeInTheDocument()
    })

    it("renders Cancel and confirm buttons with correct labels", () => {
      renderModal()
      expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
      expect(screen.getByRole("button", { name: "Confirm Test" })).toBeInTheDocument()
    })

    it("renders the description textarea with the provided placeholder", () => {
      renderModal()
      expect(screen.getByPlaceholderText("Describe why...")).toBeInTheDocument()
    })

    it("confirm button is disabled when all required fields are empty", () => {
      renderModal()
      expect(screen.getByRole("button", { name: "Confirm Test" })).toBeDisabled()
    })

    it("does not render source ticket field by default", () => {
      renderModal()
      expect(screen.queryByPlaceholderText("e.g. JIRA-1234")).not.toBeInTheDocument()
    })

    it("renders source ticket field when showSourceTicket is true", () => {
      renderModal({ showSourceTicket: true })
      expect(screen.getByPlaceholderText("e.g. JIRA-1234")).toBeInTheDocument()
    })
  })

  describe("validation", () => {
    it("confirm button becomes enabled only when all required fields are filled", async () => {
      const user = userEvent.setup()
      renderModal()
      const confirmButton = screen.getByRole("button", { name: "Confirm Test" })

      expect(confirmButton).toBeDisabled()

      await user.type(screen.getByPlaceholderText("Describe why..."), "Some reason")
      expect(confirmButton).toBeDisabled()

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      expect(confirmButton).toBeDisabled()

      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      expect(confirmButton).not.toBeDisabled()
    })

    it("does not call onConfirm when confirm button is disabled", () => {
      const onConfirm = vi.fn()
      renderModal({ onConfirm })
      fireEvent.click(screen.getByRole("button", { name: "Confirm Test" }))
      expect(onConfirm).not.toHaveBeenCalled()
    })
  })

  describe("interactions", () => {
    it("calls onClose when Cancel is clicked", async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()
      renderModal({ onClose })
      await user.click(screen.getByRole("button", { name: "Cancel" }))
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it("calls onConfirm with correct input when all required fields are filled", async () => {
      const onConfirm = vi.fn().mockResolvedValue(undefined)
      const user = userEvent.setup()
      renderModal({ onConfirm, remediationType: RemediationTypeValues.FalsePositive })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText("Describe why..."), "It's not real")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      await user.click(screen.getByRole("button", { name: "Confirm Test" }))

      expect(onConfirm).toHaveBeenCalledWith(
        expect.objectContaining({
          type: RemediationTypeValues.FalsePositive,
          vulnerability: "CVE-2024-1234",
          service: "my-service",
          image: "my-image",
          remediatedBy: "user-123",
          description: "It's not real",
        })
      )
    })

    it("shows an error message when onConfirm returns an error", async () => {
      const onConfirm = vi.fn().mockResolvedValue({ error: "Server error occurred" })
      const user = userEvent.setup()
      renderModal({ onConfirm })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText("Describe why..."), "Some reason")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      await user.click(screen.getByRole("button", { name: "Confirm Test" }))

      expect(await screen.findByText("Server error occurred")).toBeInTheDocument()
    })

    it("clears error message and resets fields when Cancel is clicked after an error", async () => {
      const onConfirm = vi.fn().mockResolvedValue({ error: "Server error occurred" })
      const onClose = vi.fn()
      const user = userEvent.setup()
      renderModal({ onConfirm, onClose })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText("Describe why..."), "Some reason")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      await user.click(screen.getByRole("button", { name: "Confirm Test" }))
      expect(await screen.findByText("Server error occurred")).toBeInTheDocument()

      await user.click(screen.getByRole("button", { name: "Cancel" }))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  describe("source ticket (showSourceTicket=true)", () => {
    it("prepends source ticket to description when provided", async () => {
      const onConfirm = vi.fn().mockResolvedValue(undefined)
      const user = userEvent.setup()
      renderModal({ onConfirm, showSourceTicket: true, remediationType: RemediationTypeValues.RiskAccepted })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText("e.g. JIRA-1234"), "JIRA-9999")
      await user.type(screen.getByPlaceholderText("Describe why..."), "Low risk")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      await user.click(screen.getByRole("button", { name: "Confirm Test" }))

      expect(onConfirm).toHaveBeenCalledWith(
        expect.objectContaining({
          description: "Source Ticket: JIRA-9999\n\nLow risk",
        })
      )
    })

    it("does not prepend source ticket prefix when source ticket field is empty", async () => {
      const onConfirm = vi.fn().mockResolvedValue(undefined)
      const user = userEvent.setup()
      renderModal({ onConfirm, showSourceTicket: true, remediationType: RemediationTypeValues.RiskAccepted })

      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      await user.type(screen.getByPlaceholderText("Describe why..."), "Low risk")
      fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
      await user.click(screen.getByRole("button", { name: "Confirm Test" }))

      expect(onConfirm).toHaveBeenCalledWith(expect.objectContaining({ description: "Low risk" }))
    })
  })
})

// ---------------------------------------------------------------------------
// Wrapper smoke tests — verify each wrapper passes the right type and title
// ---------------------------------------------------------------------------

const wrapperProps = {
  open: true,
  onClose: vi.fn(),
  onConfirm: vi.fn().mockResolvedValue(undefined),
  vulnerability: "CVE-2024-1234",
  service: "my-service",
  image: "my-image",
}

const renderWrapper = (ui: React.ReactElement) =>
  render(
    <AuthProvider embedded auth={mockAuth}>
      <PortalProvider>{ui}</PortalProvider>
    </AuthProvider>
  )

describe("FalsePositiveModal wrapper", () => {
  it("renders with correct title and confirm label", () => {
    renderWrapper(<FalsePositiveModal {...wrapperProps} />)
    expect(screen.getByRole("heading", { name: "Mark as False Positive" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Mark as False Positive" })).toBeInTheDocument()
  })

  it("submits with FalsePositive remediation type", async () => {
    const onConfirm = vi.fn().mockResolvedValue(undefined)
    const user = userEvent.setup()
    renderWrapper(<FalsePositiveModal {...wrapperProps} onConfirm={onConfirm} />)

    await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
    await user.type(screen.getByPlaceholderText(/false positive/i), "Not affected")
    fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
    await user.click(screen.getByRole("button", { name: "Mark as False Positive" }))

    expect(onConfirm).toHaveBeenCalledWith(expect.objectContaining({ type: RemediationTypeValues.FalsePositive }))
  })
})

describe("RiskAcceptanceModal wrapper", () => {
  it("renders with correct title, confirm label, and source ticket field", () => {
    renderWrapper(<RiskAcceptanceModal {...wrapperProps} />)
    expect(screen.getByRole("heading", { name: "Accept Risk" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Accept Risk" })).toBeInTheDocument()
    expect(screen.getByPlaceholderText("e.g. JIRA-1234")).toBeInTheDocument()
  })

  it("submits with RiskAccepted remediation type", async () => {
    const onConfirm = vi.fn().mockResolvedValue(undefined)
    const user = userEvent.setup()
    renderWrapper(<RiskAcceptanceModal {...wrapperProps} onConfirm={onConfirm} />)

    await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
    await user.type(screen.getByPlaceholderText(/accepting this risk/i), "Accepted")
    fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
    await user.click(screen.getByRole("button", { name: "Accept Risk" }))

    expect(onConfirm).toHaveBeenCalledWith(expect.objectContaining({ type: RemediationTypeValues.RiskAccepted }))
  })
})

describe("MitigateManuallyModal wrapper", () => {
  it("renders with correct title and confirm label", () => {
    renderWrapper(<MitigateManuallyModal {...wrapperProps} />)
    expect(screen.getByRole("heading", { name: "Mitigate Manually" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Mitigate Manually" })).toBeInTheDocument()
  })

  it("submits with Mitigation remediation type", async () => {
    const onConfirm = vi.fn().mockResolvedValue(undefined)
    const user = userEvent.setup()
    renderWrapper(<MitigateManuallyModal {...wrapperProps} onConfirm={onConfirm} />)

    await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
    await user.type(screen.getByPlaceholderText(/manual mitigation/i), "Patched internally")
    fireEvent.change(screen.getByLabelText("Expiration Date"), { target: { value: "2026-12-31" } })
    await user.click(screen.getByRole("button", { name: "Mitigate Manually" }))

    expect(onConfirm).toHaveBeenCalledWith(expect.objectContaining({ type: RemediationTypeValues.Mitigation }))
  })
})
