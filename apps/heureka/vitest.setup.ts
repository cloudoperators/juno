/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll, afterEach, afterAll } from "vitest"
import * as matchers from "@testing-library/jest-dom/matchers"
import { server } from "./src/mocks/server"

expect.extend(matchers)
beforeAll(() => {
  // Mock global objects if necessary
  global.window = window
  global.document = window.document
  // Global mocks that apply to all tests
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  // Start msw server to intercept requests
  server.listen({ onUnhandledRequest: "error" })
})

// Reset handlers after each test
afterEach(() => server.resetHandlers())

// Stop msw server
afterAll(() => server.close())
