/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from "../src/client"
import { describe, expect, test } from "vitest"

describe("index", () => {
  test("createClient should be a function", () => {
    expect(typeof createClient).toEqual("function")
  })
})
