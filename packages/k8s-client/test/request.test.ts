/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeEach, describe, expect, test, vi } from "vitest"
import request from "../src/request"

const testUrl = "https://apiEndpoint.com"

// TODO: tests response errors
describe("request", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() => Promise.resolve({ status: 200 } as Response)) as unknown as typeof fetch
  })

  test("request should call fetch", async () => {
    await request("GET", testUrl, {})
    expect(fetch).toHaveBeenCalled()
  })

  describe("GET", () => {
    test("call fetch with GET testUrl and options", async () => {
      await request("GET", testUrl, { key1: "value1", key2: "value2" })
      expect(fetch).toHaveBeenCalledWith(testUrl, {
        method: "GET",
        credentials: "same-origin",
      })
    })
  })

  describe("POST", () => {
    test("call fetch with POST testUrl and options", async () => {
      await request("POST", testUrl, { key1: "value1", key2: "value2" })
      expect(fetch).toHaveBeenCalledWith(testUrl, {
        method: "POST",
        credentials: "same-origin",
      })
    })
  })

  describe("PUT", () => {
    test("call fetch with PUT testUrl and options", async () => {
      await request("PUT", testUrl, { key1: "value1", key2: "value2" })
      expect(fetch).toHaveBeenCalledWith(testUrl, {
        method: "PUT",
        credentials: "same-origin",
      })
    })
  })

  describe("PATCH", () => {
    test("call fetch with PATCH testUrl and options", async () => {
      await request("PATCH", testUrl, { key1: "value1", key2: "value2" })
      expect(fetch).toHaveBeenCalledWith(testUrl, {
        method: "PATCH",
        credentials: "same-origin",
      })
    })
  })

  describe("DELETE", () => {
    test("call fetch with DELETE testUrl and options", async () => {
      await request("DELETE", testUrl, { key1: "value1", key2: "value2" })
      expect(fetch).toHaveBeenCalledWith(testUrl, {
        method: "DELETE",
        credentials: "same-origin",
      })
    })
  })

  describe("HEAD", () => {
    test("call fetch with HEAD testUrl and options", async () => {
      await request("HEAD", testUrl, { key1: "value1", key2: "value2" })
      expect(fetch).toHaveBeenCalledWith(testUrl, {
        method: "HEAD",
        credentials: "same-origin",
      })
    })
  })

  test("provide only allowed options to fetch", async () => {
    await request("GET", testUrl, {
      signal: "test" as unknown as AbortSignal,
      headers: { key1: "value1" },
      body: JSON.stringify({ key1: "value1" }),
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
    })
    expect(fetch).toHaveBeenCalledWith(testUrl, {
      method: "GET",
      credentials: "omit",
      headers: { key1: "value1" },
      body: JSON.stringify({ key1: "value1" }),
      mode: "cors",
      cache: "no-cache",
      signal: "test",
    })
  })

  test("should ignore null or undefined values", async () => {
    await request("GET", testUrl, {
      key1: "value1",
      key2: "value2",
      headers: null,
      body: null,
      mode: undefined,
      cache: "no-cache",
      credentials: "omit",
    })
    expect(fetch).toHaveBeenCalledWith(testUrl, {
      method: "GET",
      credentials: "omit",
      cache: "no-cache",
    })
  })

  test("add params to testUrl", async () => {
    await request("GET", testUrl, {
      params: { key1: "value1", key2: "value2", key3: "value3", watch: 1 },
    })
    expect(fetch).toHaveBeenCalledWith(testUrl + "?key1=value1&key2=value2&key3=value3&watch=1", {
      method: "GET",
      credentials: "same-origin",
    })
  })
})
