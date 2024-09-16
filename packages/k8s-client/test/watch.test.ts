import { beforeEach, describe, expect, test, vi, Mock } from "vitest"
import request from "../src/request"
import { Watch, ADDED, MODIFIED, DELETED, ERROR } from "../src/watch"

vi.mock("../src/request", () => ({
  __esModule: true,
  default: vi.fn(),
}))

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
  })
})
