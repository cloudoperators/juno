/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { AppShellProvider } from "@cloudoperators/juno-ui-components/index"
import { PlaceHolderFilterSelect, PlaceHolderFilterSelectProps } from "./PlaceHolderFilterSelect"

const renderComponent = ({ loading, error }: PlaceHolderFilterSelectProps) => {
  return render(
    <AppShellProvider shadowRoot={false}>
      <PlaceHolderFilterSelect loading={loading} error={error} />
    </AppShellProvider>
  )
}

describe("PlaceHolderFilterSelect", () => {
  it("renders the filter select in loading state", () => {
    renderComponent({ loading: true })
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })
  it("renders filter select in error state", () => {
    renderComponent({ error: new Error("Something went wrong") })
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByText("Something went wrong")).toBeInTheDocument()
  })
})
