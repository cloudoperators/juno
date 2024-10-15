/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react"
import { render } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library"
import App from "./App"
import { vi } from "vitest"

vi.mock("./components/AsyncWorker", () => ({
  __esModule: true, // This ensures it's treated as an ES module
  default: () => <div>AsyncWorker</div>,
}))

test("renders app", async () => {
  await render(<App embedded={false} />)

  let loginTitle = screen.queryAllByShadowText(/Access greenhouse cluster/i)
  expect(loginTitle.length > 0).toBe(true)
})
