/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { tokenize } from "./lexer"

describe("lexer tokenize", () => {
  let result
  beforeEach(() => {
    result = tokenize(
      "rule:admin_required and (is_admin_project:True or domain_id:'ccadmin' or user_id:%(user_id)s) and not user_id:D064310"
    )
  })

  it("returned value is defined", () => {
    expect(result).toBeDefined()
  })

  it("returned value is an array", () => {
    expect(Array.isArray(result)).toEqual(true)
  })

  it("returns tokens", () => {
    expect(result).toEqual([
      { type: "expression", value: "rule:admin_required" },
      { type: "operator", value: "and" },
      { type: "operator", value: "(" },
      { type: "expression", value: "is_admin_project:True" },
      { type: "operator", value: "or" },
      { type: "expression", value: "domain_id:'ccadmin'" },
      { type: "operator", value: "or" },
      { type: "expression", value: "user_id:%(user_id)s" },
      { type: "operator", value: ")" },
      { type: "operator", value: "and" },
      { type: "operator", value: "not" },
      { type: "expression", value: "user_id:D064310" },
    ])
  })

  it("a:true and b:true", () => {
    expect(tokenize("a:true and b:true")).toEqual([
      { type: "expression", value: "a:true" },
      { type: "operator", value: "and" },
      { type: "expression", value: "b:true" },
    ])
  })

  it("a:true or b:true or c:true", () => {
    expect(tokenize("a:true or b:true or c:true")).toEqual([
      { type: "expression", value: "a:true" },
      { type: "operator", value: "or" },
      { type: "expression", value: "b:true" },
      { type: "operator", value: "or" },
      { type: "expression", value: "c:true" },
    ])
  })

  it("a:true and b:true or c:true", () => {
    expect(tokenize("a:true and b:true or c:true")).toEqual([
      { type: "expression", value: "a:true" },
      { type: "operator", value: "and" },
      { type: "expression", value: "b:true" },
      { type: "operator", value: "or" },
      { type: "expression", value: "c:true" },
    ])
  })

  it("a:true and ( b:true or c:true )", () => {
    expect(tokenize("a:true and ( b:true or c:true )")).toEqual([
      { type: "expression", value: "a:true" },
      { type: "operator", value: "and" },
      { type: "operator", value: "(" },
      { type: "expression", value: "b:true" },
      { type: "operator", value: "or" },
      { type: "expression", value: "c:true" },
      { type: "operator", value: ")" },
    ])
  })

  it("a:true and not b:true", () => {
    expect(tokenize("a:true and not b:true")).toEqual([
      { type: "expression", value: "a:true" },
      { type: "operator", value: "and" },
      { type: "operator", value: "not" },
      { type: "expression", value: "b:true" },
    ])
  })

  it("a:true and ( b:true or c:true  and ( d:true or e:true ) )", () => {
    expect(
      tokenize("a:true and ( b:true or c:true  and ( d:true or e:true ) )")
    ).toEqual([
      { type: "expression", value: "a:true" },
      { type: "operator", value: "and" },
      { type: "operator", value: "(" },
      { type: "expression", value: "b:true" },
      { type: "operator", value: "or" },
      { type: "expression", value: "c:true" },
      { type: "operator", value: "and" },
      { type: "operator", value: "(" },
      { type: "expression", value: "d:true" },
      { type: "operator", value: "or" },
      { type: "expression", value: "e:true" },
      { type: "operator", value: ")" },
      { type: "operator", value: ")" },
    ])
  })

  it("@", () => {
    expect(tokenize("@")).toEqual([{ type: "expression", value: "@" }])
  })
  it("!", () => {
    expect(tokenize("!")).toEqual([{ type: "expression", value: "!" }])
  })
})
