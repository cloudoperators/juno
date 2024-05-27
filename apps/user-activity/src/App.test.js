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

jest.mock("communicator", () => {
  return {
    broadcast: jest.fn(),
    watch: jest.fn(() => () => null),
    get: jest.fn(),
    onGet: jest.fn(),
  }
})

test("renders app", async () => {
  const spy = jest.spyOn(React, "useEffect")
  await act(() => render(<App />))
  expect(spy).toHaveBeenCalled()
})
