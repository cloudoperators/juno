/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, act, waitFor } from "@testing-library/react"
// support shadow dom queries
// https://reactjsexample.com/an-extension-of-dom-testing-library-to-provide-hooks-into-the-shadow-dom/
import { screen } from "shadow-dom-testing-library"
import App from "./App"

import * as actions from "./actions"
jest.mock("./actions.js")
actions.fetchAssetsManifest = jest.fn().mockResolvedValue({})

import * as reactQuery from "@tanstack/react-query"

reactQuery.useQuery = jest.fn(() => ({
  isLoading: false,
  isError: false,
  data: {},
  error: null,
}))

test("renders app", async () => {
  await act(
    async () =>
      await render(
        <App manifestUrl="https://assets.juno.qa-de-1.cloud.sap/manifest.json" />
      )
  )

  let loginTitle = await screen.queryAllByShadowText(/Converged Cloud/i)
  expect(loginTitle.length > 0).toBe(true)
})
