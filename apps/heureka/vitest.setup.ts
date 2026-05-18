/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import "@testing-library/jest-dom/vitest"
import { beforeAll, vi } from "vitest"

beforeAll(() => {
  // Mock ResizeObserver globally using vi.stubGlobal (Vitest 4 recommended approach)
  const ResizeObserverMock = vi.fn(class {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  })
  vi.stubGlobal('ResizeObserver', ResizeObserverMock)
})
