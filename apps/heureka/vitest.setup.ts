/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll } from "vitest"
import * as matchers from "@testing-library/jest-dom/matchers"

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
})
