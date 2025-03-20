/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { renderHook } from "@testing-library/react"
import { StoreProvider, useGlobalsEmbedded, useGlobalsActions } from "./StoreProvider"

describe("createGlobalsSlice", () => {
  const mockOptions = {
    embedded: "false",
  }

  const wrapper = ({ children }: any) => <StoreProvider options={mockOptions}>{children}</StoreProvider>

  it("should initialize with correct default values", () => {
    const { result } = renderHook(
      () => ({
        embedded: useGlobalsEmbedded(),
      }),
      { wrapper }
    )

    expect(result.current).toEqual({
      embedded: false,
    })
  })
  it("should update embedded state", () => {
    const { result } = renderHook(
      () => ({
        embedded: useGlobalsEmbedded(),
        actions: useGlobalsActions(),
      }),
      { wrapper }
    )
    act(() => {
      // @ts-ignore
      result.current.actions.setEmbedded(true)
    })

    expect(result.current.embedded).toBe(true)
  })
})
