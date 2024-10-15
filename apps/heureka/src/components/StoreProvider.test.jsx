/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"
import { renderHook } from "@testing-library/react"
import {
  StoreProvider,
  useGlobalsEmbedded,
  // useGlobalsApiEndpoint,
  // useGlobalsShowPanel,
  // useGlobalsActiveView,
  useGlobalsActions,
  // useGlobalsQueryClientFnReady,
  // useGlobalsShowServiceDetail,
  // useGlobalsShowIssueDetail,
  // useGlobalsQueryOptions,
} from "./StoreProvider"
// import constants from "../../components/shared/constants"

describe("createGlobalsSlice", () => {
  const mockOptions = {
    embedded: "false",
  }

  const wrapper = ({ children }) => <StoreProvider options={mockOptions}>{children}</StoreProvider>

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
      result.current.actions.setEmbedded(true)
    })

    expect(result.current.embedded).toBe(true)
  })
})
