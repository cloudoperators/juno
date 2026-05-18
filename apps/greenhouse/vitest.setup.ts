/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import "@testing-library/jest-dom/vitest"
import { beforeAll, vi } from "vitest"

beforeAll(() => {
  // Mock fetch globally using vi.stubGlobal (Vitest 4 recommended approach)
  const mockFetch = vi.fn(
    () =>
      Promise.resolve({
        ok: true, // Indicates if the request was successful (status code 2xx)
        status: 200, // HTTP status code
        json: () => Promise.resolve({}), // Mocking the json method
      } as Response) // Cast to Response type to satisfy TypeScript
  )
  vi.stubGlobal('fetch', mockFetch)
})
