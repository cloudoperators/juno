/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll, vi } from "vitest"

beforeAll(() => {
  // Mock fetch globally using vi.stubGlobal (Vitest 4 recommended approach)
  const mockFetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  )
  vi.stubGlobal('fetch', mockFetch)
})
