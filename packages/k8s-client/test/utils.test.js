import * as utils from "../src/utils"

describe("isString", () => {
  test("returns true", () => {
    expect(utils.isString("string")).toEqual(true)
  })

  test("returns false for object", () => {
    expect(utils.isString({})).toEqual(false)
  })

  test("returns false for array", () => {
    expect(utils.isString([])).toEqual(false)
  })
  test("returns false for number", () => {
    expect(utils.isString(2)).toEqual(false)
  })
})

describe("isNumber", () => {
  test("returns true", () => {
    expect(utils.isNumber(1)).toEqual(true)
  })

  test("returns false for object", () => {
    expect(utils.isNumber({})).toEqual(false)
  })

  test("returns false for array", () => {
    expect(utils.isNumber([])).toEqual(false)
  })
  test("returns false for string", () => {
    expect(utils.isNumber("test")).toEqual(false)
  })
})

describe("isObject", () => {
  test("returns true", () => {
    expect(utils.isObject({})).toEqual(true)
  })

  test("returns false for string", () => {
    expect(utils.isObject("test")).toEqual(false)
  })

  test("returns false for array", () => {
    expect(utils.isObject([])).toEqual(false)
  })
  test("returns false for number", () => {
    expect(utils.isObject(2)).toEqual(false)
  })
})

describe("isArray", () => {
  test("returns true", () => {
    expect(utils.isArray([])).toEqual(true)
  })

  test("returns false for string", () => {
    expect(utils.isArray("test")).toEqual(false)
  })

  test("returns false for object", () => {
    expect(utils.isArray({})).toEqual(false)
  })
  test("returns false for number", () => {
    expect(utils.isArray(2)).toEqual(false)
  })
})

describe("isFunction", () => {
  test("returns true", () => {
    expect(utils.isFunction(() => null)).toEqual(true)
  })

  test("returns false for string", () => {
    expect(utils.isFunction("test")).toEqual(false)
  })

  test("returns false for object", () => {
    expect(utils.isFunction({})).toEqual(false)
  })
  test("returns false for number", () => {
    expect(utils.isFunction(2)).toEqual(false)
  })
  test("returns false for array", () => {
    expect(utils.isFunction([])).toEqual(false)
  })
})

describe("isNull", () => {
  test("returns true", () => {
    expect(utils.isNull(null)).toEqual(true)
  })

  test("returns false for string", () => {
    expect(utils.isNull("test")).toEqual(false)
  })

  test("returns false for object", () => {
    expect(utils.isNull({})).toEqual(false)
  })
  test("returns false for number", () => {
    expect(utils.isNull(2)).toEqual(false)
  })
  test("returns false for undefined", () => {
    expect(utils.isNull(undefined)).toEqual(false)
  })
})

describe("isUndefined", () => {
  test("returns true", () => {
    expect(utils.isUndefined(undefined)).toEqual(true)
  })

  test("returns false for string", () => {
    expect(utils.isUndefined("test")).toEqual(false)
  })

  test("returns false for object", () => {
    expect(utils.isUndefined({})).toEqual(false)
  })
  test("returns false for number", () => {
    expect(utils.isUndefined(2)).toEqual(false)
  })
  test("returns false for null", () => {
    expect(utils.isUndefined(null)).toEqual(false)
  })
})
