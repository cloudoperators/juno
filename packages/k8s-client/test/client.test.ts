/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { beforeEach, describe, expect, test, vi, afterEach } from "vitest"
import { createClient } from "../src/client"
import https from "https"

// Mock only external dependencies
vi.mock("https")

// Helper function to create proper Response mock
const createMockResponse = (
  data: any = {},
  options: {
    status?: number
    statusText?: string
    headers?: Record<string, string>
  } = {}
): Response => {
  const { status = 200, statusText = "OK", headers = {} } = options

  return {
    status,
    statusText,
    ok: status >= 200 && status < 300,
    headers: new Headers(headers),
    url: "https://test.com",
    type: "basic" as ResponseType,
    redirected: false,
    bodyUsed: false,

    json: vi.fn().mockResolvedValue(data),
    text: vi.fn().mockResolvedValue(typeof data === "string" ? data : JSON.stringify(data)),
    blob: vi.fn().mockResolvedValue(new Blob([JSON.stringify(data)])),
    arrayBuffer: vi.fn().mockResolvedValue(new TextEncoder().encode(JSON.stringify(data)).buffer),
    formData: vi.fn().mockResolvedValue(new FormData()),
    clone: vi.fn().mockReturnThis(),
  } as unknown as Response
}

describe("k8sClient", () => {
  const mockFetch = vi.fn()
  const mockedHttps = vi.mocked(https)

  beforeEach(() => {
    vi.clearAllMocks()

    // Set up default successful response
    mockFetch.mockResolvedValue(createMockResponse({ success: true }))
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

  describe("createClient", () => {
    describe("with valid options", () => {
      const options = { apiEndpoint: "https://k8s-test.com", token: "test-token" }

      test("should not throw an error when all required options are provided", () => {
        expect(() => createClient(options)).not.toThrow()
      })

      test("should return a client object with all expected methods", () => {
        const client = createClient(options)

        expect(client).toBeDefined()
        expect(client.get).toBeDefined()
        expect(client.post).toBeDefined()
        expect(client.put).toBeDefined()
        expect(client.patch).toBeDefined()
        expect(client.delete).toBeDefined()
        expect(client.head).toBeDefined()
        expect(client.watch).toBeDefined()
        expect(client.refreshToken).toBeDefined()
        expect(client.currentToken).toBeDefined()
      })
    })
  })

  describe("Client HTTP methods", () => {
    let client: ReturnType<typeof createClient>

    beforeEach(() => {
      client = createClient({
        apiEndpoint: "https://k8s-api.test.com",
        token: "bearer-token-123",
      })
    })

    describe("get", () => {
      test("should make GET request with correct parameters", async () => {
        const responseData = { items: [{ name: "pod1" }, { name: "pod2" }] }
        mockFetch.mockResolvedValue(createMockResponse(responseData))

        const result = await client.get("/api/v1/pods", {
          params: { labelSelector: "app=nginx", limit: "10" },
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringMatching(/https:\/\/k8s-api\.test\.com\/api\/v1\/pods\?.*labelSelector=app%3Dnginx/),
          expect.objectContaining({
            method: "GET",
            credentials: "same-origin",
            headers: expect.objectContaining({
              Authorization: "Bearer bearer-token-123",
              "Content-Type": "application/json",
            }) as Record<string, string>,
          })
        )

        expect(result).toEqual(responseData)
      })

      test("should allow overriding default headers", async () => {
        const customHeaders = {
          Authorization: "Bearer custom-token",
          "Content-Type": "application/yaml",
          Accept: "application/json",
        }

        mockFetch.mockResolvedValue(createMockResponse({}))

        await client.get("/api/v1/namespaces", { headers: customHeaders })

        expect(mockFetch).toHaveBeenCalledWith(
          "https://k8s-api.test.com/api/v1/namespaces",
          expect.objectContaining({
            headers: customHeaders,
          })
        )
      })

      test("should handle requests without parameters", async () => {
        mockFetch.mockResolvedValue(createMockResponse({ version: "v1.28.0" }))

        await client.get("/version")

        expect(mockFetch).toHaveBeenCalledWith(
          "https://k8s-api.test.com/version",
          expect.objectContaining({
            method: "GET",
          })
        )
      })
    })

    describe("post", () => {
      test("should make POST request with body", async () => {
        const podSpec = {
          apiVersion: "v1",
          kind: "Pod",
          metadata: { name: "test-pod" },
          spec: { containers: [{ name: "nginx", image: "nginx:latest" }] },
        }
        const responseData = { ...podSpec, metadata: { ...podSpec.metadata, uid: "abc-123" } }

        mockFetch.mockResolvedValue(createMockResponse(responseData, { status: 201 }))

        const result = await client.post("/api/v1/namespaces/default/pods", podSpec, {
          params: { dryRun: "All" },
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringMatching(/https:\/\/k8s-api\.test\.com\/api\/v1\/namespaces\/default\/pods\?.*dryRun=All/),
          expect.objectContaining({
            method: "POST",
            headers: expect.objectContaining({
              Authorization: "Bearer bearer-token-123",
              "Content-Type": "application/json",
            }) as Record<string, string>,
            body: JSON.stringify(podSpec),
          })
        )

        expect(result).toEqual(responseData)
      })
    })

    describe("put", () => {
      test("should make PUT request with body", async () => {
        const updatedResource = { metadata: { labels: { updated: "true" } } }
        mockFetch.mockResolvedValue(createMockResponse(updatedResource))

        await client.put("/api/v1/namespaces/default/pods/test-pod", updatedResource, {
          params: { fieldManager: "kubectl-client-side-apply" },
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringMatching(/fieldManager=kubectl-client-side-apply/),
          expect.objectContaining({
            method: "PUT",
            headers: {
              Authorization: "Bearer bearer-token-123",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedResource),
          })
        )
      })
    })

    describe("patch", () => {
      test("should make PATCH request with merge-patch content type", async () => {
        const patchData = { metadata: { labels: { patched: "true" } } }
        mockFetch.mockResolvedValue(createMockResponse(patchData))

        await client.patch("/api/v1/namespaces/default/pods/test-pod", patchData, {
          params: { fieldManager: "kubectl" },
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringMatching(/fieldManager=kubectl/),
          expect.objectContaining({
            method: "PATCH",
            headers: {
              Authorization: "Bearer bearer-token-123",
              "Content-Type": "application/merge-patch+json",
            },
            body: JSON.stringify(patchData),
          })
        )
      })

      test("should allow overriding patch content type", async () => {
        const strategicPatch = { spec: { replicas: 3 } }
        mockFetch.mockResolvedValue(createMockResponse(strategicPatch))

        await client.patch("/apis/apps/v1/namespaces/default/deployments/nginx", strategicPatch, {
          headers: { "Content-Type": "application/strategic-merge-patch+json" },
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.any(String),
          expect.objectContaining({
            headers: expect.objectContaining({
              "Content-Type": "application/strategic-merge-patch+json",
            }) as Record<string, string>,
          })
        )
      })
    })

    describe("delete", () => {
      test("should make DELETE request with optional body", async () => {
        const deleteOptions = {
          gracePeriodSeconds: 30,
          propagationPolicy: "Foreground",
        }
        mockFetch.mockResolvedValue(createMockResponse({ status: "Success" }))

        await client.delete("/api/v1/namespaces/default/pods/test-pod", deleteOptions, {
          params: { gracePeriodSeconds: "30" },
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringMatching(/gracePeriodSeconds=30/),
          expect.objectContaining({
            method: "DELETE",
            headers: expect.objectContaining({
              Authorization: "Bearer bearer-token-123",
            }) as Record<string, string>,
            body: JSON.stringify(deleteOptions),
          })
        )
      })

      test("should make DELETE request without body", async () => {
        mockFetch.mockResolvedValue(createMockResponse({ status: "Success" }))

        await client.delete("/api/v1/namespaces/test-namespace")

        expect(mockFetch).toHaveBeenCalledWith(
          "https://k8s-api.test.com/api/v1/namespaces/test-namespace",
          expect.objectContaining({
            method: "DELETE",
          })
        )
      })
    })

    describe("head", () => {
      test("should make HEAD request and return response object", async () => {
        const headResponse = createMockResponse(
          {},
          {
            status: 200,
            headers: { "Content-Length": "1234" },
          }
        )
        mockFetch.mockResolvedValue(headResponse)

        const result = await client.head("/api/v1/namespaces/default/pods/test-pod", {
          params: { resourceVersion: "12345" },
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringMatching(/resourceVersion=12345/),
          expect.objectContaining({
            method: "HEAD",
          })
        )

        expect(result).toBe(headResponse)
      })
    })
  })

  describe("SSL ignore functionality", () => {
    test("should create client with ignoreSsl option", () => {
      const client = createClient({
        apiEndpoint: "https://internal-k8s.company.com",
        token: "test-token",
        ignoreSsl: true,
      })

      expect(client).toBeDefined()
    })

    test("should pass ignoreSsl to request when making HTTP calls", async () => {
      const client = createClient({
        apiEndpoint: "https://internal-k8s.company.com",
        token: "test-token",
        ignoreSsl: true,
      })

      mockFetch.mockResolvedValue(createMockResponse({ pods: [] }))

      await client.get("/api/v1/pods")

      expect(mockedHttps.Agent).toHaveBeenCalledWith({
        rejectUnauthorized: false,
      })

      expect(mockFetch).toHaveBeenCalledWith(
        "https://internal-k8s.company.com/api/v1/pods",
        expect.objectContaining({
          agent: expect.any(Object) as https.Agent,
        })
      )
    })

    test("should allow per-request SSL override", async () => {
      const client = createClient({
        apiEndpoint: "https://k8s-api.company.com",
        token: "test-token",
        ignoreSsl: false, // Default: verify SSL
      })

      mockFetch.mockResolvedValue(createMockResponse({}))

      // This specific request should ignore SSL
      await client.get("/api/v1/nodes", { ignoreSsl: true })

      expect(mockedHttps.Agent).toHaveBeenCalledWith({
        rejectUnauthorized: false,
      })
    })
  })

  describe("token management", () => {
    test("should refresh token", () => {
      const client = createClient({
        apiEndpoint: "https://k8s-api.test.com",
        token: "old-token",
      })

      expect(client.currentToken()).toBe("old-token")

      client.refreshToken("new-token")

      expect(client.currentToken()).toBe("new-token")
    })

    test("should use updated token in subsequent requests", async () => {
      const client = createClient({
        apiEndpoint: "https://k8s-api.test.com",
        token: "initial-token",
      })

      mockFetch.mockResolvedValue(createMockResponse({}))

      // Make request with initial token
      await client.get("/api/v1/pods")
      expect(mockFetch).toHaveBeenLastCalledWith(
        expect.any(String),
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: "Bearer initial-token",
          }) as Record<string, string>,
        })
      )

      // Update token
      client.refreshToken("updated-token")

      // Make another request with updated token
      await client.get("/api/v1/services")
      expect(mockFetch).toHaveBeenLastCalledWith(
        expect.any(String),
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: "Bearer updated-token",
          }) as Record<string, string>,
        })
      )
    })
  })

  describe("error handling", () => {
    let client: ReturnType<typeof createClient>

    beforeEach(() => {
      client = createClient({
        apiEndpoint: "https://k8s-api.test.com",
        token: "test-token",
      })
    })

    test("should handle 404 Not Found errors", async () => {
      mockFetch.mockResolvedValue(
        createMockResponse({ message: "pods 'nonexistent' not found" }, { status: 404, statusText: "Not Found" })
      )

      await expect(client.get("/api/v1/namespaces/default/pods/nonexistent")).rejects.toThrow("Not Found")
    })

    test("should handle 403 Forbidden errors", async () => {
      mockFetch.mockResolvedValue(
        createMockResponse({ message: "forbidden: insufficient permissions" }, { status: 403, statusText: "Forbidden" })
      )

      await expect(client.get("/api/v1/secrets")).rejects.toThrow("Forbidden")
    })

    test("should handle 500 Internal Server Error", async () => {
      mockFetch.mockResolvedValue(
        createMockResponse({ message: "internal server error" }, { status: 500, statusText: "Internal Server Error" })
      )

      await expect(client.post("/api/v1/namespaces/default/pods", {})).rejects.toThrow("Internal Server Error")
    })
  })

  describe("watch functionality", () => {
    test("should create watch instance", () => {
      const client = createClient({
        apiEndpoint: "https://k8s-api.test.com",
        token: "test-token",
      })

      const watch = client.watch("/api/v1/namespaces/default/pods", {
        params: { watch: "true", resourceVersion: "0" },
        headers: { Accept: "application/json" },
      })

      expect(watch).toBeDefined()
      // Note: We're not testing Watch internals here since that would be a separate test suite
    })

    test("should provide watch event constants", () => {
      const client = createClient({
        apiEndpoint: "https://k8s-api.test.com",
        token: "test-token",
      })

      expect(client.WATCH_ADDED).toBeDefined()
      expect(client.WATCH_MODIFIED).toBeDefined()
      expect(client.WATCH_DELETED).toBeDefined()
      expect(client.WATCH_ERROR).toBeDefined()
    })
  })
})
