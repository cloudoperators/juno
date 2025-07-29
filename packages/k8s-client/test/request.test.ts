/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { beforeEach, describe, expect, test, vi, afterEach } from "vitest"
import request from "../src/request"

import https from "https"

// Mock https module with proper return value
vi.mock("https", () => ({
  default: {
    Agent: vi.fn(),
  },
  Agent: vi.fn(),
}))

const testUrl = "https://apiEndpoint.com"
const httpUrl = "http://apiEndpoint.com"

describe("request", () => {
  let mockFetch: ReturnType<typeof vi.fn>
  const mockedHttps = vi.mocked(https)

  beforeEach(() => {
    mockFetch = vi.fn()
    mockFetch.mockResolvedValue({ status: 200 } as Response)
    global.fetch = mockFetch

    // Mock https.Agent for SSL tests
    const mockAgent = {} as https.Agent
    Object.defineProperty(https, "Agent", {
      value: vi.fn().mockImplementation(() => mockAgent),
      writable: true,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("request should call fetch", async () => {
    await request("GET", testUrl, {})
    expect(mockFetch).toHaveBeenCalled()
  })

  describe("HTTP Methods", () => {
    describe("GET", () => {
      test("call fetch with GET testUrl and options", async () => {
        await request("GET", testUrl, { key1: "value1", key2: "value2" })
        expect(mockFetch).toHaveBeenCalledWith(testUrl, {
          method: "GET",
          credentials: "same-origin",
        })
      })
    })

    describe("POST", () => {
      test("call fetch with POST testUrl and options", async () => {
        await request("POST", testUrl, { key1: "value1", key2: "value2" })
        expect(mockFetch).toHaveBeenCalledWith(testUrl, {
          method: "POST",
          credentials: "same-origin",
        })
      })
    })

    describe("PUT", () => {
      test("call fetch with PUT testUrl and options", async () => {
        await request("PUT", testUrl, { key1: "value1", key2: "value2" })
        expect(mockFetch).toHaveBeenCalledWith(testUrl, {
          method: "PUT",
          credentials: "same-origin",
        })
      })
    })

    describe("PATCH", () => {
      test("call fetch with PATCH testUrl and options", async () => {
        await request("PATCH", testUrl, { key1: "value1", key2: "value2" })
        expect(mockFetch).toHaveBeenCalledWith(testUrl, {
          method: "PATCH",
          credentials: "same-origin",
        })
      })
    })

    describe("DELETE", () => {
      test("call fetch with DELETE testUrl and options", async () => {
        await request("DELETE", testUrl, { key1: "value1", key2: "value2" })
        expect(mockFetch).toHaveBeenCalledWith(testUrl, {
          method: "DELETE",
          credentials: "same-origin",
        })
      })
    })

    describe("HEAD", () => {
      test("call fetch with HEAD testUrl and options", async () => {
        await request("HEAD", testUrl, { key1: "value1", key2: "value2" })
        expect(mockFetch).toHaveBeenCalledWith(testUrl, {
          method: "HEAD",
          credentials: "same-origin",
        })
      })
    })
  })

  describe("Request Options", () => {
    test("provide only allowed options to fetch", async () => {
      globalThis.window = undefined!
      await request("GET", testUrl, {
        signal: "test" as unknown as AbortSignal,
        headers: { key1: "value1" },
        body: JSON.stringify({ key1: "value1" }),
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        ignoreSsl: true, // Should be filtered out
      })
      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "GET",
        credentials: "omit",
        headers: { key1: "value1" },
        body: JSON.stringify({ key1: "value1" }),
        mode: "cors",
        cache: "no-cache",
        signal: "test",
        agent: expect.any(Object) as https.Agent, // HTTPS agent should be present due to ignoreSsl: true
      })
    })

    test("should ignore null or undefined values", async () => {
      await request("GET", testUrl, {
        key1: "value1",
        key2: "value2",
        body: null,
        mode: undefined,
        cache: "no-cache",
        credentials: "omit",
        ignoreSsl: false,
      })
      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "GET",
        credentials: "omit",
        cache: "no-cache",
      })
    })

    test("add params to testUrl", async () => {
      await request("GET", testUrl, {
        params: { key1: "value1", key2: "value2", key3: "value3", watch: 1 },
      })
      expect(mockFetch).toHaveBeenCalledWith(testUrl + "?key1=value1&key2=value2&key3=value3&watch=1", {
        method: "GET",
        credentials: "same-origin",
      })
    })
  })

  describe("SSL Ignore Functionality", () => {
    test("should create HTTPS agent when ignoreSsl is true for HTTPS URL", async () => {
      globalThis.window = undefined!
      await request("GET", testUrl, {
        ignoreSsl: true,
        headers: { Authorization: "Bearer token" },
      })

      expect(mockedHttps.Agent).toHaveBeenCalledWith({
        rejectUnauthorized: false,
      })

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "GET",
        credentials: "same-origin",
        headers: { Authorization: "Bearer token" },
        agent: expect.any(Object) as https.Agent, // HTTPS agent should be present
      })
    })

    test("should not create HTTPS agent when ignoreSsl is true for HTTP URL", async () => {
      await request("GET", httpUrl, {
        ignoreSsl: true,
        headers: { "Content-Type": "application/json" },
      })

      expect(mockedHttps.Agent).not.toHaveBeenCalled()

      expect(mockFetch).toHaveBeenCalledWith(httpUrl, {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      })
    })

    test("should not create HTTPS agent when ignoreSsl is false", async () => {
      await request("GET", testUrl, {
        ignoreSsl: false,
        headers: { Accept: "application/json" },
      })

      expect(mockedHttps.Agent).not.toHaveBeenCalled()

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "GET",
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      })
    })

    test("should not create HTTPS agent when ignoreSsl is undefined", async () => {
      await request("GET", testUrl, {
        headers: { "User-Agent": "test-client" },
      })

      expect(mockedHttps.Agent).not.toHaveBeenCalled()

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "GET",
        credentials: "same-origin",
        headers: { "User-Agent": "test-client" },
      })
    })

    test("should filter out ignoreSsl from fetch options", async () => {
      globalThis.window = undefined!
      await request("POST", testUrl, {
        body: { data: "test" },
        headers: { "Content-Type": "application/json" },
        ignoreSsl: true,
        customProperty: "should also be filtered",
      })

      const fetchCall = mockFetch.mock.calls[0][1] as RequestInit & { agent?: https.Agent }
      expect(fetchCall).not.toHaveProperty("ignoreSsl")
      expect(fetchCall).not.toHaveProperty("customProperty")
      expect(fetchCall).toHaveProperty("agent") // Agent should be present
    })

    test("should handle mixed requests with different SSL settings", async () => {
      globalThis.window = undefined!
      // First request with SSL verification (default)
      await request("GET", testUrl, {
        headers: { Accept: "application/json" },
      })
      expect(mockedHttps.Agent).not.toHaveBeenCalled()

      // Second request ignoring SSL
      await request("GET", testUrl, {
        ignoreSsl: true,
        headers: { Authorization: "Bearer token" },
      })
      expect(mockedHttps.Agent).toHaveBeenCalledWith({
        rejectUnauthorized: false,
      })

      // Third request back to SSL verification
      vi.clearAllMocks()
      await request("GET", testUrl, {
        ignoreSsl: false,
        headers: { "Content-Type": "application/json" },
      })
      expect(mockedHttps.Agent).not.toHaveBeenCalled()
    })

    test("should work with all HTTP methods and ignoreSsl", async () => {
      const methods = ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"]
      const testBody = { test: "data" }
      globalThis.window = undefined!

      for (const method of methods) {
        vi.clearAllMocks()

        const options: Record<string, unknown> = {
          ignoreSsl: true,
          headers: { Authorization: "Bearer token" },
        }

        // Add body for methods that typically use it
        if (["POST", "PUT", "PATCH"].includes(method)) {
          options.body = testBody
        }

        await request(method, testUrl, options)

        expect(mockedHttps.Agent).toHaveBeenCalledWith({
          rejectUnauthorized: false,
        })

        expect(mockFetch).toHaveBeenCalledWith(
          testUrl,
          expect.objectContaining({
            method,
            agent: expect.any(Object) as https.Agent,
          })
        )
      }
    })

    test("should handle JSON body serialization with ignoreSsl", async () => {
      globalThis.window = undefined!
      const requestBody = {
        name: "test-resource",
        spec: { replicas: 3 },
        metadata: { labels: { app: "test" } },
      }

      await request("POST", testUrl, {
        body: requestBody,
        headers: { "Content-Type": "application/json" },
        ignoreSsl: true,
      })

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
        agent: expect.any(Object) as https.Agent, // HTTPS agent should be present
      })
    })

    test("should handle string body without modification with ignoreSsl", async () => {
      globalThis.window = undefined!
      const stringBody = "raw string data"

      await request("POST", testUrl, {
        body: stringBody,
        ignoreSsl: true,
      })

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "POST",
        credentials: "same-origin",
        body: stringBody,
        agent: expect.any(Object) as https.Agent, // HTTPS agent should be present
      })
    })

    test("should handle URL parameters with ignoreSsl", async () => {
      globalThis.window = undefined!
      await request("GET", testUrl, {
        params: {
          labelSelector: "app=nginx",
          fieldSelector: "status.phase=Running",
          watch: "true",
        },
        ignoreSsl: true,
      })

      expect(mockFetch).toHaveBeenCalledWith(
        testUrl + "?labelSelector=app%3Dnginx&fieldSelector=status.phase%3DRunning&watch=true",
        expect.objectContaining({
          method: "GET",
          agent: expect.any(Object) as https.Agent, // HTTPS agent should be present
        })
      )
    })
  })

  describe("Body Serialization", () => {
    test("should stringify object body", async () => {
      const objectBody = { key: "value", number: 123 }

      await request("POST", testUrl, {
        body: objectBody,
      })

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify(objectBody),
      })
    })

    test("should not stringify string body", async () => {
      const stringBody = "already a string"

      await request("POST", testUrl, {
        body: stringBody,
      })

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "POST",
        credentials: "same-origin",
        body: stringBody,
      })
    })

    test("should handle null body", async () => {
      await request("DELETE", testUrl, {
        body: null,
      })

      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: "DELETE",
        credentials: "same-origin",
      })
    })
  })
})
