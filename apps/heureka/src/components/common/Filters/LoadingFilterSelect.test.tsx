/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { LoadingFilterSelect } from "./LoadingFilterSelect"
import { AppShellProvider } from "@cloudoperators/juno-ui-components/index"

const renderComponent = () => {
  return render(
    <AppShellProvider shadowRoot={false}>
      <LoadingFilterSelect />
    </AppShellProvider>
  )
}

describe("LoadingFilterSelect", () => {
  it("renders the loading filter select component", () => {
    renderComponent()
    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })
})
