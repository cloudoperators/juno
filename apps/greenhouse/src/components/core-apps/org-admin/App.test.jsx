/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library"
import App from "./App"

//mock fetch
globalThis.fetch = vi.fn()

test("renders app", async () => {
  render(<App />)

  expect(screen.getByShadowTestId("greenhouse-org-admin")).toBeInTheDocument()
})
