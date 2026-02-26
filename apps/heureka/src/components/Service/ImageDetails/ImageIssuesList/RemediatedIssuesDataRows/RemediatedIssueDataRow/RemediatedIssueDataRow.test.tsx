/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { RemediatedIssueDataRow } from "./index"
import type { ImageVulnerability } from "../../../../../Services/utils"

const mockIssue: ImageVulnerability = {
  id: "vul-1",
  name: "CVE-2024-1234",
  severity: "High",
  earliestTargetRemediationDate: "2024-12-31T00:00:00Z",
  description: "A test vulnerability description.",
  sourceUrl: "https://nvd.nist.gov/vuln/detail/CVE-2024-1234",
}

describe("RemediatedIssueDataRow", () => {
  it("renders issue name and description", () => {
    render(<RemediatedIssueDataRow issue={mockIssue} onSelect={() => {}} />)
    expect(screen.getByText("CVE-2024-1234")).toBeInTheDocument()
    expect(screen.getByText("A test vulnerability description.")).toBeInTheDocument()
  })

  it("calls onSelect when row is clicked", async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(<RemediatedIssueDataRow issue={mockIssue} onSelect={onSelect} />)
    await user.click(screen.getByText("CVE-2024-1234"))
    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it("returns null when issue has no name", () => {
    const { container } = render(<RemediatedIssueDataRow issue={{ ...mockIssue, name: "" }} onSelect={() => {}} />)
    expect(container.firstChild).toBeNull()
  })
})
