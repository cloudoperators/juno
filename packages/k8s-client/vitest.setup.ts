/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll, vi } from "vitest"

beforeAll(() => {
  // Mock global objects if necessary
  global.window = window
  global.document = window.document
  global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  )
})
