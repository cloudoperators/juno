/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { renderHook, act } from "@testing-library/react"
import {
  useAlertsActions,
  useAlertEnrichedLabels,
  StoreProvider,
  useAlertsItemsFiltered,
} from "../components/StoreProvider"

describe("createAlertsSlice", () => {
  describe("setEnrichedLabels", () => {
    it("return status as default", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useAlertsActions(),
          enrichedLabels: useAlertEnrichedLabels(),
        }),
        { wrapper }
      )
      expect(store.result.current.enrichedLabels).toEqual(["status"])
    })
  })

  describe("setFilteredItems", () => {
    it("return empty array as default", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useAlertsActions(),
          itemsFiltered: useAlertsItemsFiltered(),
        }),
        { wrapper }
      )
      expect(store.result.current.itemsFiltered).toEqual([])
    })
  })
})
