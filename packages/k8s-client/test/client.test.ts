import { beforeEach, describe, expect, test, vi, Mock } from "vitest"
import { createClient } from "../src/client"
import request from "../src/request"

// Mock the request module
vi.mock("../src/request", () => ({
  __esModule: true,
  default: vi.fn(),
}))

describe("k8sClient", () => {
  beforeEach(() => {
    // mock fetch to avoid network calls
    global.fetch = vi.fn(() => Promise.resolve({ status: 200 } as Response))
  })

  describe("createClient", () => {
    describe("all required options are provided", () => {
      const options = { apiEndpoint: "test", token: "test" }

      test("should not throw an error", () => {
        expect(() => createClient(options)).not.toThrow()
      })

      test("should return a client object", () => {
        expect(createClient(options)).toBeDefined()
      })
    })
  })
})

describe("Client", () => {
  let client: ReturnType<typeof createClient>

  beforeEach(() => {
    client = createClient({ apiEndpoint: "https://test.com", token: "test" })

    // mock request return value to be a Promise
    ;(request as Mock).mockReturnValue(
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(null),
        body: {
          getReader: vi.fn(() => ({
            read: vi.fn().mockResolvedValue({ value: "test", done: true }),
          })),
        },
      })
    )
  })

  describe("get", () => {
    test("respond to get", () => {
      expect(client.get).toBeDefined()
    })

    test("call request", () => {
      client.get("/api/v1", { params: { key1: "value1", key2: "value2" } })
      expect(request).toHaveBeenLastCalledWith("GET", "https://test.com/api/v1", {
        headers: expect.anything(),
        params: { key1: "value1", key2: "value2" },
      })
    })

    test("allow to override default options", () => {
      client.get("/api/v1", {
        headers: { Authorization: "test", "Content-Type": "text" },
      })
      expect(request).toHaveBeenLastCalledWith("GET", "https://test.com/api/v1", {
        headers: { Authorization: "test", "Content-Type": "text" },
      })
    })
  })

  describe("post", () => {
    test("respond to post", () => {
      expect(client.post).toBeDefined()
    })

    test("call request", () => {
      client.post("/api/v1", { key1: "value1" }, { params: { key1: "value1", key2: "value2" } })
      expect(request).toHaveBeenLastCalledWith("POST", "https://test.com/api/v1", {
        headers: expect.anything(),
        params: { key1: "value1", key2: "value2" },
        body: { key1: "value1" },
      })
    })
  })

  describe("put", () => {
    test("respond to put", () => {
      expect(client.put).toBeDefined()
    })

    test("call request", () => {
      client.put("/api/v1", { key1: "value1" }, { params: { key1: "value1", key2: "value2" } })
      expect(request).toHaveBeenLastCalledWith("PUT", "https://test.com/api/v1", {
        headers: {
          Authorization: "Bearer test",
          "Content-Type": "application/json",
        },
        params: { key1: "value1", key2: "value2" },
        body: { key1: "value1" },
      })
    })
  })

  describe("patch", () => {
    test("respond to patch", () => {
      expect(client.patch).toBeDefined()
    })

    test("call request", () => {
      client.patch(
        "/api/v1",
        { key1: "value1" },
        {
          params: { key1: "value1", key2: "value2" },
        }
      )
      expect(request).toHaveBeenLastCalledWith("PATCH", "https://test.com/api/v1", {
        headers: {
          Authorization: "Bearer test",
          "Content-Type": "application/merge-patch+json",
        },
        params: { key1: "value1", key2: "value2" },
        body: { key1: "value1" },
      })
    })
  })

  describe("delete", () => {
    test("respond to delete", () => {
      expect(client.delete).toBeDefined()
    })

    test("call request", () => {
      client.delete("/api/v1", null, {
        params: { key1: "value1", key2: "value2" },
      })
      expect(request).toHaveBeenLastCalledWith("DELETE", "https://test.com/api/v1", {
        headers: expect.anything(),
        body: null,
        params: { key1: "value1", key2: "value2" },
      })
    })
  })

  describe("head", () => {
    test("respond to head", () => {
      expect(client.head).toBeDefined()
    })

    test("call request", () => {
      client.head("/api/v1", { params: { key1: "value1", key2: "value2" } })
      expect(request).toHaveBeenLastCalledWith("HEAD", "https://test.com/api/v1", {
        headers: expect.anything(),
        params: { key1: "value1", key2: "value2" },
      })
    })
  })

  describe("watch", () => {
    test("respond to watch", () => {
      expect(client.watch).toBeDefined()
    })

    test("watch", () => {
      client.watch("/api/v1", {
        params: { key1: "value1" },
        headers: { "Content-Type": "text" },
      })
    })
  })
})
