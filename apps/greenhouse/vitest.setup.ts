/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll, vi } from "vitest"
import { expect } from "vitest"
import matchers from "@testing-library/jest-dom/matchers"

expect.extend(matchers)

global.fetch = vi.fn(
  () =>
    Promise.resolve({
      ok: true, // Indicates if the request was successful (status code 2xx)
      status: 200, // HTTP status code
      json: () => Promise.resolve({}), // Mocking the json method
    } as Response) // Cast to Response type to satisfy TypeScript
)

beforeAll(() => {
  // Mock global objects if necessary
  global.window = window
  global.document = window.document
})
