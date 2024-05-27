/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { renderHook, act, waitFor } from "@testing-library/react"
import {
  useGlobalsDisabledCAs,
  useGlobalsDocumentationLinks,
  useGlobalsActions,
} from "./useStore"

describe("setDisabledCAs", () => {
  it("return default empty array", () => {
    const { result } = renderHook(useGlobalsDisabledCAs)
    expect(result.current).toEqual([])
  })

  it("accepts and transforms to array of strings coma separated strings containing the CA names which should not be displayed", () => {
    const actions = renderHook(useGlobalsActions)
    const { result } = renderHook(useGlobalsDisabledCAs)

    act(() => {
      actions.result.current.setDisabledCAs("galvani-pki,mutual_tls-pki")
    })

    expect(result.current).toEqual(["galvani-pki", "mutual_tls-pki"])
  })
})

describe("setDocumentationLinks", () => {
  it("return default empty object", () => {
    const { result } = renderHook(useGlobalsDocumentationLinks)
    expect(result.current).toEqual({})
  })

  it("accepts and transforms to an object strings with key value pairs separated by '=' and each pair separated by ','", () => {
    const actions = renderHook(useGlobalsActions)
    const { result } = renderHook(useGlobalsDocumentationLinks)

    act(() => {
      actions.result.current.setDocumentationLinks(
        "2fa-pki=https://doculink1.com,mutual_tls-pki=https://doculink2.com"
      )
    })

    expect(result.current).toEqual({
      "2fa-pki": "https://doculink1.com",
      "mutual_tls-pki": "https://doculink2.com",
    })
  })
})
