import { createClient } from "../src/client"

describe("index", () => {
  test("createClient should be a function", () => {
    expect(typeof createClient).toEqual("function")
  })
})
