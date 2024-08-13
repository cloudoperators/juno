import { describe, it, expect } from "vitest"
import * as utils from "../src/utils"

describe("isString", () => {
  it("returns true for a string", () => {
    expect(utils.isString("string")).toBe(true)
  })

  it("returns false for an object", () => {
    expect(utils.isString({})).toBe(false)
  })

  it("returns false for an array", () => {
    expect(utils.isString([])).toBe(false)
  })

  it("returns false for a number", () => {
    expect(utils.isString(2)).toBe(false)
  })
})

describe("isNumber", () => {
  it("returns true for a number", () => {
    expect(utils.isNumber(1)).toBe(true)
  })

  it("returns false for an object", () => {
    expect(utils.isNumber({})).toBe(false)
  })

  it("returns false for an array", () => {
    expect(utils.isNumber([])).toBe(false)
  })

  it("returns false for a string", () => {
    expect(utils.isNumber("test")).toBe(false)
  })
})

describe("isObject", () => {
  it("returns true for an object", () => {
    expect(utils.isObject({})).toBe(true)
  })

  it("returns false for a string", () => {
    expect(utils.isObject("test")).toBe(false)
  })

  it("returns false for an array", () => {
    expect(utils.isObject([])).toBe(false)
  })

  it("returns false for a number", () => {
    expect(utils.isObject(2)).toBe(false)
  })
})

describe("isArray", () => {
  it("returns true for an array", () => {
    expect(utils.isArray([])).toBe(true)
  })

  it("returns false for a string", () => {
    expect(utils.isArray("test")).toBe(false)
  })

  it("returns false for an object", () => {
    expect(utils.isArray({})).toBe(false)
  })

  it("returns false for a number", () => {
    expect(utils.isArray(2)).toBe(false)
  })
})

describe("isFunction", () => {
  it("returns true for a function", () => {
    expect(utils.isFunction(() => null)).toBe(true)
  })

  it("returns false for a string", () => {
    expect(utils.isFunction("test")).toBe(false)
  })

  it("returns false for an object", () => {
    expect(utils.isFunction({})).toBe(false)
  })

  it("returns false for a number", () => {
    expect(utils.isFunction(2)).toBe(false)
  })

  it("returns false for an array", () => {
    expect(utils.isFunction([])).toBe(false)
  })
})

describe("isNull", () => {
  it("returns true for null", () => {
    expect(utils.isNull(null)).toBe(true)
  })

  it("returns false for a string", () => {
    expect(utils.isNull("test")).toBe(false)
  })

  it("returns false for an object", () => {
    expect(utils.isNull({})).toBe(false)
  })

  it("returns false for a number", () => {
    expect(utils.isNull(2)).toBe(false)
  })

  it("returns false for undefined", () => {
    expect(utils.isNull(undefined)).toBe(false)
  })
})

describe("isUndefined", () => {
  it("returns true for undefined", () => {
    expect(utils.isUndefined(undefined)).toBe(true)
  })

  it("returns false for a string", () => {
    expect(utils.isUndefined("test")).toBe(false)
  })

  it("returns false for an object", () => {
    expect(utils.isUndefined({})).toBe(false)
  })

  it("returns false for a number", () => {
    expect(utils.isUndefined(2)).toBe(false)
  })

  it("returns false for null", () => {
    expect(utils.isUndefined(null)).toBe(false)
  })
})
