/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll } from "vitest"
import "@testing-library/jest-dom"

beforeAll(() => {
  // Mock global objects if necessary
  global.window = window
  global.document = window.document
})
