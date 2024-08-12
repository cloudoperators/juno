import { buildUrl } from "../src/urlHelpers"

let hostUrl = "http://apiEndpoint.com"

describe("buildUrl", () => {
  test("do not allow count of parameters smaller than 2", () => {
    expect(() => buildUrl(hostUrl)).toThrow()
  })

  test("accept any count of params greater then 1", () => {
    const length = Math.floor(Math.random() * 8) + 2 // between 2 and 10
    const params = Array.from(
      { length },
      () => `${Math.floor(Math.random() * 10)}`
    )
    params.unshift("http://test.com")
    expect(() => buildUrl(...params)).not.toThrow()
  })

  test("accept map as last parameter", () => {
    expect(() => buildUrl(hostUrl, { key1: "value1" })).not.toThrow()
  })

  test("should combine path tokens", () => {
    expect(buildUrl(hostUrl, "path2", "path3")).toEqual(
      hostUrl + "/path2/path3"
    )
  })

  test("should accept string and number parameters", () => {
    expect(buildUrl(hostUrl, "v", 2)).toEqual(hostUrl + "/v/2")
  })

  test("should not accept an array parameter", () => {
    expect(() => buildUrl(hostUrl, "v", [2, 45])).toThrow()
  })

  test("should not accept a hashmap parameter", () => {
    expect(() => buildUrl(hostUrl, { test: "2" }, "v")).toThrow()
  })

  test("should remove double slashes in url beginning with http", () => {
    expect(buildUrl(hostUrl, "/path2")).toEqual(hostUrl + "/path2")
  })

  test("should remove double slashes beginning with https", () => {
    expect(buildUrl("https://apiEndpoint.com", "/path2")).toEqual(
      "https://apiEndpoint.com/path2"
    )
  })

  test("should add parameters", () => {
    expect(
      buildUrl(hostUrl, "path1", "v", 2, {
        key1: "value1",
        key2: "value2",
      })
    ).toEqual(hostUrl + "/path1/v/2?key1=value1&key2=value2")
  })
})
