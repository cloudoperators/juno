/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { afterEach, beforeEach, describe, expect, test, vi, Mock } from "vitest"
import request from "../src/request"
import { Watch, ADDED, MODIFIED, DELETED, ERROR } from "../src/watch"

vi.mock("../src/request", () => ({
  __esModule: true,
  default: vi.fn(),
}))

/**
 * Build a fake streaming Response body that yields the given NDJSON `lines` as a single
 * chunk and then completes. Mirrors the `res.body.getReader()` surface watch.ts consumes.
 */
const streamResponse = (lines: string[]) => {
  // Each NDJSON line is newline-terminated, including the last — this matches a real k8s
  // watch stream and ensures watch.ts's `events.pop()` discards an empty trailing token
  // rather than the final event.
  const payload = lines.map((line) => `${line}\n`).join("")
  let sent = false
  return {
    status: 200,
    json: () => Promise.resolve(null),
    body: {
      getReader: () => ({
        read: () => {
          if (sent) return Promise.resolve({ value: undefined, done: true })
          sent = true
          return Promise.resolve({ value: new TextEncoder().encode(payload), done: false })
        },
      }),
    },
  }
}

const event = (type: string, obj: Record<string, unknown> = {}) => JSON.stringify({ type, object: obj })

describe("Constants", () => {
  test("ADDED should be defined", () => {
    expect(ADDED).toBeDefined()
  })

  test("MODIFIED should be defined", () => {
    expect(MODIFIED).toBeDefined()
  })

  test("DELETED should be defined", () => {
    expect(DELETED).toBeDefined()
  })

  test("ERROR should be defined", () => {
    expect(ERROR).toBeDefined()
  })
})

describe("Watch", () => {
  let watch: Watch
  const url = "https://apiEndpoint.com"

  beforeEach(() => {
    const requestMock = request as Mock
    requestMock.mockReturnValue(
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

    watch = new Watch(url)
  })

  test("should be defined", () => {
    expect(Watch).toBeDefined()
  })

  describe("on", () => {
    test("respond to on", () => {
      expect(watch.on).toBeDefined()
    })

    test("registers a listener and returns the Watch instance for chaining", () => {
      expect(watch.on(ADDED, () => {})).toBe(watch)
    })

    test.each([ADDED, MODIFIED, DELETED, ERROR])("accepts the valid event type %s", (type) => {
      expect(() => watch.on(type, () => {})).not.toThrow()
    })

    test("throws on an unknown event type", () => {
      expect(() => watch.on("NONSENSE", () => {})).toThrow(/Bad type/)
    })
  })

  describe("cancel", () => {
    test("respond to cancel", () => {
      expect(watch.cancel).toBeDefined()
    })
  })

  describe("start", () => {
    test("respond to start", () => {
      expect(watch.start).toBeDefined()
    })

    // Regression test for the removal of the `const that = this` aliases in watch.ts.
    // Those aliases were deleted in favour of lexical `this` (all methods/callbacks are arrow
    // functions). The removal is only safe because `start()` returns the instance-bound `cancel`
    // arrow field, so the returned reference still aborts the connection when called detached.
    // This test locks that invariant in: it fails if `cancel` is ever turned back into an
    // unbound prototype method (which is what would have forced the `that = this` workaround).
    test("returns a cancel function that aborts the connection when called detached", () => {
      // start() returns a reference to cancel. Capture it and invoke it detached from the
      // instance: this only aborts the controller if the returned value is the instance-bound
      // `cancel` arrow field.
      const stop = watch.start()

      // The returned reference is the bound cancel method itself.
      expect(stop).toBe(watch.cancel)

      // Observe the abort via the signal cancel() aborts. `start`/`cancel` are arrow fields,
      // so `this.signal` / `this.controller` resolve lexically with no `that` alias.
      const aborted = vi.fn()
      const signal: AbortSignal = watch["signal"]
      signal.addEventListener("abort", aborted)
      expect(signal.aborted).toBe(false)

      stop()

      expect(signal.aborted).toBe(true)
      expect(aborted).toHaveBeenCalledTimes(1)
    })
  })

  describe("refreshToken", () => {
    test("rewrites the Authorization header on the shared options", () => {
      const options = { headers: { Authorization: "Bearer old" } }
      const w = new Watch(url, options)

      w.refreshToken("new")

      expect(options.headers.Authorization).toBe("Bearer new")
    })

    test("is a no-op when no headers were provided", () => {
      const w = new Watch(url, {})
      expect(() => w.refreshToken("new")).not.toThrow()
    })
  })

  // Behavioural tests drive the whole start() flow through the mocked request.
  // Fake timers are needed because event dispatch happens inside setTimeout.
  describe("watch flow", () => {
    let requestMock: Mock

    beforeEach(() => {
      vi.useFakeTimers()
      requestMock = request as Mock
      // Clear call history so the absolute-index assertions (mock.calls[0]/[1]) and
      // toHaveBeenCalledTimes below see only this test's requests. The project does not
      // enable clearMocks, and the outer beforeEach only sets a return value.
      requestMock.mockClear()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    // Flush the start() promise chain and the setTimeout-based dispatch.
    const flush = async () => {
      await vi.runAllTimersAsync()
    }

    test("fetches the resource version first, then opens the watch with it", async () => {
      requestMock
        .mockResolvedValueOnce({
          json: () => Promise.resolve({ items: null, metadata: { resourceVersion: "42" } }),
        })
        .mockResolvedValueOnce(streamResponse([]))

      new Watch(url).start()
      await flush()

      // First call: resource-version bootstrap (no watch params).
      expect(requestMock.mock.calls[0][0]).toBe("GET")
      expect(requestMock.mock.calls[0][1]).toBe(url)

      // Second call: the actual watch, carrying the resolved resourceVersion.
      const watchOptions = requestMock.mock.calls[1][2] as {
        params: { watch: number; allowWatchBookmarks: boolean; resourceVersion: string }
      }
      expect(watchOptions.params).toMatchObject({
        watch: 1,
        allowWatchBookmarks: true,
        resourceVersion: "42",
      })
    })

    test("delivers initial items from the bootstrap to ADDED listeners", async () => {
      const items = [{ name: "pod-a" }, { name: "pod-b" }]
      requestMock
        .mockResolvedValueOnce({
          json: () => Promise.resolve({ items, metadata: { resourceVersion: "1" } }),
        })
        .mockResolvedValueOnce(streamResponse([]))

      const onAdded = vi.fn()
      new Watch(url).on(ADDED, onAdded).start()
      await flush()

      expect(onAdded).toHaveBeenCalledWith(items)
    })

    test("skips the bootstrap fetch when a resourceVersion is supplied in params", async () => {
      requestMock.mockResolvedValueOnce(streamResponse([]))

      new Watch(url, { params: { resourceVersion: "99" } }).start()
      await flush()

      // Only the watch request runs; no separate bootstrap call.
      expect(requestMock).toHaveBeenCalledTimes(1)
      const watchOptions = requestMock.mock.calls[0][2] as { params: { resourceVersion: string } }
      expect(watchOptions.params.resourceVersion).toBe("99")
    })

    test("strips resourceVersion out of the caller's params object", () => {
      const options = { params: { resourceVersion: "7", labelSelector: "app=x" } }
      new Watch(url, options)
      expect(options.params).not.toHaveProperty("resourceVersion")
      expect(options.params).toHaveProperty("labelSelector", "app=x")
    })

    test("parses streamed events and dispatches them to listeners grouped by type", async () => {
      requestMock
        .mockResolvedValueOnce({
          json: () => Promise.resolve({ items: null, metadata: { resourceVersion: "1" } }),
        })
        .mockResolvedValueOnce(
          streamResponse([event(ADDED, { name: "a" }), event(MODIFIED, { name: "b" }), event(DELETED, { name: "c" })])
        )

      const onAdded = vi.fn()
      const onModified = vi.fn()
      const onDeleted = vi.fn()
      new Watch(url).on(ADDED, onAdded).on(MODIFIED, onModified).on(DELETED, onDeleted).start()
      await flush()

      expect(onAdded).toHaveBeenCalledWith([{ name: "a" }])
      expect(onModified).toHaveBeenCalledWith([{ name: "b" }])
      expect(onDeleted).toHaveBeenCalledWith([{ name: "c" }])
    })

    test("treats BOOKMARK events as resource-version updates, not listener notifications", async () => {
      requestMock
        .mockResolvedValueOnce({
          json: () => Promise.resolve({ items: null, metadata: { resourceVersion: "1" } }),
        })
        .mockResolvedValueOnce(
          streamResponse([event("BOOKMARK", { metadata: { resourceVersion: "500" } }), event(ADDED, { name: "a" })])
        )

      const onAdded = vi.fn()
      const w = new Watch(url).on(ADDED, onAdded)
      const readResourceVersion = (): string | null => w["resourceVersion"]
      w.start()
      await flush()

      // The bookmark advances the tracked resourceVersion (observable effect of the special-case)...
      expect(readResourceVersion()).toBe("500")
      // ...but is never delivered to listeners; only the real ADDED event reaches the listener.
      expect(onAdded).toHaveBeenCalledTimes(1)
      expect(onAdded).toHaveBeenCalledWith([{ name: "a" }])
    })

    test("on a 404 stream error, notifies ERROR listeners and cancels", async () => {
      const notFound = Object.assign(new Error("not found"), { code: 404 })
      requestMock
        .mockResolvedValueOnce({
          json: () => Promise.resolve({ items: null, metadata: { resourceVersion: "1" } }),
        })
        .mockRejectedValueOnce(notFound)

      const onError = vi.fn()
      const w = new Watch(url).on(ERROR, onError)
      const signal: AbortSignal = w["signal"]
      w.start()
      await flush()

      expect(onError).toHaveBeenCalledWith([notFound])
      expect(signal.aborted).toBe(true)
    })

    test("isolates a throwing listener so other listeners still run", async () => {
      requestMock
        .mockResolvedValueOnce({
          json: () => Promise.resolve({ items: null, metadata: { resourceVersion: "1" } }),
        })
        .mockResolvedValueOnce(streamResponse([event(ADDED, { name: "a" })]))

      const boom = vi.fn(() => {
        throw new Error("listener blew up")
      })
      const ok = vi.fn()
      new Watch(url).on(ADDED, boom).on(ADDED, ok).start()
      await flush()

      expect(boom).toHaveBeenCalled()
      expect(ok).toHaveBeenCalledWith([{ name: "a" }])
    })
  })
})
