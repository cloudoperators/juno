/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readStateFromUrl, saveStateToUrl } from "./utils"

describe("saveStateToUrl", () => {
  it("should save state to url", () => {
    saveStateToUrl({ key1: "value1", key2: "value2" })

    expect(window.location.search).toBe("?key1=value1&key2=value2")
  })
})

describe("readStateFromUrl", () => {
  it("should read state from the url", () => {
    saveStateToUrl({ key3: "value3", key4: "value4" })

    expect(readStateFromUrl()).toMatchObject({
      key3: "value3",
      key4: "value4",
    })
  })
})
