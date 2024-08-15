import { describe, it, expect } from "vitest"
import { buildUrl } from "../src/urlHelpers"

const hostUrl = "http://apiEndpoint.com"

describe("buildUrl", () => {
  it("does not allow count of parameters smaller than 2", () => {
    expect(() => buildUrl(hostUrl)).toThrow()
  })

  it("accepts any count of params greater than 1", () => {
    const length = Math.floor(Math.random() * 8) + 2 // between 2 and 10
    const params = Array.from({ length }, () => `${Math.floor(Math.random() * 10)}`)
    params.unshift("http://test.com")
    expect(() => buildUrl(...params)).not.toThrow()
  })

  it("accepts a map as the last parameter", () => {
    expect(() => buildUrl(hostUrl, { key1: "value1" })).not.toThrow()
  })

  it("should combine path tokens", () => {
    expect(buildUrl(hostUrl, "path2", "path3")).toEqual(hostUrl + "/path2/path3")
  })

  it("should accept string and number parameters", () => {
    expect(buildUrl(hostUrl, "v", 2)).toEqual(hostUrl + "/v/2")
  })

  it("should not accept an array parameter", () => {
    expect(() => buildUrl(hostUrl, "v", [2, 45])).toThrow()
  })

  it("should not accept a hashmap parameter in the middle", () => {
    expect(() => buildUrl(hostUrl, { test: "2" }, "v")).toThrow()
  })

  it("should remove double slashes in URLs beginning with http", () => {
    expect(buildUrl(hostUrl, "/path2")).toEqual(hostUrl + "/path2")
  })

  it("should remove double slashes in URLs beginning with https", () => {
    expect(buildUrl("https://apiEndpoint.com", "/path2")).toEqual("https://apiEndpoint.com/path2")
  })

  it("should add query parameters", () => {
    expect(
      buildUrl(hostUrl, "path1", "v", 2, {
        key1: "value1",
        key2: "value2",
      })
    ).toEqual(hostUrl + "/path1/v/2?key1=value1&key2=value2")
  })
})
