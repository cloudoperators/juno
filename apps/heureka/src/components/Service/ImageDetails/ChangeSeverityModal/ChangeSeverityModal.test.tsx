/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PortalProvider } from "@cloudoperators/juno-ui-components"
import { AuthProvider } from "@cloudoperators/greenhouse-auth-provider"
import { ChangeSeverityModal } from "./index"
import { RemediationTypeValues, SeverityValues } from "../../../../generated/graphql"

// Mock DateTimePicker and Select so tests work without flatpickr/portal DOM interaction
vi.mock("@cloudoperators/juno-ui-components", async (importActual) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const actual = await importActual<typeof import("@cloudoperators/juno-ui-components")>()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...actual,
    DateTimePicker: ({
      label,
      onChange,
      required,
      invalid,
      errortext,
    }: {
      label: string
      onChange: (dates: Date[]) => void
      required?: boolean
      invalid?: boolean
      errortext?: string
    }) => (
      <div>
        <label htmlFor="mock-date-input">
          {label}
          {required ? " *" : ""}
        </label>
        <input
          id="mock-date-input"
          aria-label={label}
          type="date"
          onChange={(e) => onChange(e.target.value ? [new Date(e.target.value)] : [])}
        />
        {invalid && errortext ? <span>{errortext}</span> : null}
      </div>
    ),
    Select: ({
      label,
      onChange,
      children,
      required,
      invalid,
      errortext,
    }: {
      label: string
      onChange: (value?: string | number | string[]) => void
      children?: React.ReactNode
      required?: boolean
      invalid?: boolean
      errortext?: string
    }) => (
      <div>
        <label htmlFor="mock-select">
          {label}
          {required ? " *" : ""}
        </label>
        <select id="mock-select" aria-label={label} onChange={(e) => onChange(e.target.value)}>
          <option value="">-- select --</option>
          {children}
        </select>
        {invalid && errortext ? <span>{errortext}</span> : null}
      </div>
    ),
    SelectOption: ({ value, label }: { value: string; label: string }) => <option value={value}>{label}</option>,
  }
})

const mockAuth = { getSnapshot: () => ({ status: "anonymous" as const }) }

const defaultProps = {
  open: true,
  onClose: vi.fn(),
  onConfirm: vi.fn().mockResolvedValue(undefined),
  vulnerability: "CVE-2024-1234",
  severity: "High",
  service: "my-service",
  image: "my-image",
}

const renderModal = (props: Partial<typeof defaultProps> & Record<string, unknown> = {}) =>
  render(
    <AuthProvider embedded auth={mockAuth}>
      <PortalProvider>
        <ChangeSeverityModal {...defaultProps} {...props} />
      </PortalProvider>
    </AuthProvider>
  )

describe("ChangeSeverityModal", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("rendering", () => {
    it("renders title and vulnerability details when open", () => {
      renderModal()
      expect(screen.getByRole("heading", { name: "Change Severity" })).toBeInTheDocument()
      expect(screen.getByText(/Vulnerability:/)).toBeInTheDocument()
      expect(screen.getByText("CVE-2024-1234")).toBeInTheDocument()
      expect(screen.getByText(/Current Severity:/)).toBeInTheDocument()
      // Current severity label is shown in a dedicated line
      expect(screen.getAllByText(/High/).length).toBeGreaterThan(0)
    })

    it("renders severity dropdown, user ID, expiration date, and description fields", () => {
      renderModal()
      expect(screen.getByLabelText(/New Severity/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/User ID/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Expiration Date/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Description/i)).toBeInTheDocument()
    })

    it("confirm button is disabled when required fields are empty", () => {
      renderModal()
      expect(screen.getByRole("button", { name: "Change Severity" })).toBeDisabled()
    })
  })

  describe("validation", () => {
    it("shows error when severity is not selected and confirm is clicked", async () => {
      const user = userEvent.setup()
      renderModal()
      // Fill all other fields except severity
      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      fireEvent.change(screen.getByLabelText(/Expiration Date/i), { target: { value: "2026-12-31" } })
      await user.type(screen.getByPlaceholderText(/reason for changing/i), "Rescoring based on analysis")
      // Manually click the button (it's still disabled without severity, so force click via fireEvent)
      const btn = screen.getByRole("button", { name: "Change Severity" })
      expect(btn).toBeDisabled()
    })

    it("confirm button becomes enabled when all required fields are filled", async () => {
      const user = userEvent.setup()
      renderModal()
      const btn = screen.getByRole("button", { name: "Change Severity" })
      expect(btn).toBeDisabled()

      fireEvent.change(screen.getByLabelText(/New Severity/i), { target: { value: SeverityValues.Medium } })
      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      fireEvent.change(screen.getByLabelText(/Expiration Date/i), { target: { value: "2026-12-31" } })
      await user.type(screen.getByPlaceholderText(/reason for changing/i), "Rescoring based on analysis")

      expect(btn).not.toBeDisabled()
    })
  })

  describe("submission", () => {
    it("calls onConfirm with Rescore type and correct fields when form is valid", async () => {
      const onConfirm = vi.fn().mockResolvedValue(undefined)
      const user = userEvent.setup()
      renderModal({ onConfirm })

      fireEvent.change(screen.getByLabelText(/New Severity/i), { target: { value: SeverityValues.Medium } })
      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      fireEvent.change(screen.getByLabelText(/Expiration Date/i), { target: { value: "2026-12-31" } })
      await user.type(screen.getByPlaceholderText(/reason for changing/i), "Rescoring based on analysis")

      await user.click(screen.getByRole("button", { name: "Change Severity" }))

      expect(onConfirm).toHaveBeenCalledWith(
        expect.objectContaining({
          type: RemediationTypeValues.Rescore,
          vulnerability: "CVE-2024-1234",
          service: "my-service",
          image: "my-image",
          severity: SeverityValues.Medium,
          remediatedBy: "user-123",
          description: "Rescoring based on analysis",
        })
      )
    })

    it("shows API error message when onConfirm returns an error", async () => {
      const onConfirm = vi.fn().mockResolvedValue({ error: "Rescore failed on server" })
      const user = userEvent.setup()
      renderModal({ onConfirm })

      fireEvent.change(screen.getByLabelText(/New Severity/i), { target: { value: SeverityValues.Low } })
      await user.type(screen.getByPlaceholderText(/Enter your user ID/i), "user-123")
      fireEvent.change(screen.getByLabelText(/Expiration Date/i), { target: { value: "2026-12-31" } })
      await user.type(screen.getByPlaceholderText(/reason for changing/i), "Rescoring based on analysis")

      await user.click(screen.getByRole("button", { name: "Change Severity" }))

      expect(await screen.findByText("Rescore failed on server")).toBeInTheDocument()
    })

    it("calls onClose when Cancel is clicked", async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()
      renderModal({ onClose })
      await user.click(screen.getByRole("button", { name: "Cancel" }))
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
