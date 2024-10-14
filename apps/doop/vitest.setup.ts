/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll } from "vitest"

beforeAll(() => {
  // Mock global objects if necessary
  global.window = window
  global.document = window.document
})
