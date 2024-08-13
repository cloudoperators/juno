import { createClient } from "../src/client"
import { describe, expect, test, vi } from "vitest"

describe("index", () => {
  test("createClient should be a function", () => {
    expect(typeof createClient).toEqual("function")
  })
})
