/* eslint-disable import/first */

jest.mock("../src/request", () => ({
  __esModule: true,
  default: jest.fn(),
}))

import request from "../src/request"
import { Watch, ADDED, MODIFIED, DELETED, ERROR } from "../src/watch"

describe("ADDED", () => {
  test("should be defined", () => {
    expect(ADDED).toBeDefined()
  })
})

describe("MODIFIED", () => {
  test("should be defined", () => {
    expect(MODIFIED).toBeDefined()
  })
})

describe("DELETED", () => {
  test("should be defined", () => {
    expect(DELETED).toBeDefined()
  })
})

describe("ERROR", () => {
  test("should be defined", () => {
    expect(ERROR).toBeDefined()
  })
})

describe("Watch", () => {
  let watch
  const url = "https://apiEndpoint.com"

  beforeEach(() => {
    request.mockReturnValue(
      Promise.resolve({
        status: 200,
        json: () => null,
        body: {
          getReader: jest.fn(() => ({
            read: jest.fn().mockResolvedValue({ value: "test", done: true }),
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
