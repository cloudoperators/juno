/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { Status } from "./Status.component"
import { DataGrid } from "../DataGrid/DataGrid.component"
import { DataGridRow } from "../DataGridRow/DataGridRow.component"
import { DataGridCell } from "../DataGridCell/DataGridCell.component"

describe("Status", () => {
  it("renders a Status", () => {
    render(<Status />)
    expect(screen.getByRole("alert")).toBeInTheDocument()
    expect(screen.getByRole("alert")).toHaveClass("juno-status")
  })

  it("renders with role alert for error status", () => {
    render(<Status status="error" />)
    expect(screen.getByRole("alert")).toBeInTheDocument()
  })

  it("renders with role status for non-error statuses", () => {
    render(<Status status="progress" />)
    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("renders a spinner when status is progress", () => {
    render(<Status status="progress" />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("juno-spinner")
  })

  it("does not render a spinner by default for non-progress statuses", () => {
    render(<Status status="error" />)
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
  })

  it("renders a spinner when spinner prop is true", () => {
    render(<Status status="error" spinner={true} />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveClass("juno-spinner")
  })

  it("does not render a spinner when spinner prop is false even for progress status", () => {
    render(<Status status="progress" spinner={false} />)
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
  })

  it("renders the spinner with the primary variant", () => {
    render(<Status status="progress" />)
    expect(screen.getByRole("progressbar")).toHaveClass("jn:text-theme-accent")
  })

  it("renders the default error title with no props", () => {
    render(<Status />)
    expect(screen.getByRole("alert")).toHaveTextContent("Something went wrong")
  })

  it("renders the default title for the progress status", () => {
    render(<Status status="progress" />)
    expect(screen.getByRole("status")).toHaveTextContent("Loading…")
  })

  it("renders the default title for the empty status", () => {
    render(<Status status="empty" />)
    expect(screen.getByRole("status")).toHaveTextContent("No items")
  })

  it("renders title and body from HTTP error code", () => {
    render(<Status status="error" code={404} />)
    expect(screen.getByText("Page Not Found")).toBeInTheDocument()
    expect(screen.getByText("The requested URL does not exist or may have moved.")).toBeInTheDocument()
  })

  it("overrides default title when title prop is passed", () => {
    render(<Status status="error" title="Custom title" />)
    expect(screen.getByText("Custom title")).toBeInTheDocument()
  })

  it("renders body text", () => {
    render(<Status body="Please try again." />)
    expect(screen.getByText("Please try again.")).toBeInTheDocument()
  })

  it("renders details in a pre element", () => {
    render(<Status details="Error: something failed" />)
    expect(screen.getByLabelText("Error details")).toBeInTheDocument()
    expect(screen.getByText("Error: something failed")).toBeInTheDocument()
  })

  it("does not render details when not passed", () => {
    render(<Status />)
    expect(screen.queryByLabelText("Error details")).not.toBeInTheDocument()
  })

  it("renders code outside a DataGrid", () => {
    render(<Status status="error" code={500} />)
    expect(screen.getByText("500")).toBeInTheDocument()
  })

  it("renders the action slot", () => {
    render(<Status action={<button>Retry</button>} />)
    expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument()
  })

  it("renders a custom className", () => {
    render(<Status className="my-custom-class" />)
    expect(screen.getByRole("alert")).toHaveClass("my-custom-class")
  })

  it("passes arbitrary props to the root element", () => {
    render(<Status data-testid="my-status" />)
    expect(screen.getByTestId("my-status")).toBeInTheDocument()
  })

  it("does not render a code inside a DataGrid", () => {
    render(
      <DataGrid columns={1}>
        <DataGridRow>
          <DataGridCell>
            <Status status="error" code={404} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    )
    expect(screen.queryByText("404")).not.toBeInTheDocument()
  })

  it("adds a datagrid identifier class when rendered inside a DataGrid", () => {
    render(
      <DataGrid columns={1}>
        <DataGridRow>
          <DataGridCell>
            <Status />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>
    )
    expect(screen.getByRole("alert")).toHaveClass("juno-status-datagrid")
  })
})
