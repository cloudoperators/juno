/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { renderHook, act } from "@testing-library/react"
import StoreProvider, {
  useDataActions,
  useDataFilteredItems,
  useDataDetailsViolationGroup,
  useDataFilterEntries,
  useDataClusterIdentities,
} from "../../components/StoreProvider.jsx"

import data from "../../db.json"

describe("createDataSlice", () => {
  describe("setData", () => {
    it("should update the filtered items", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useDataActions(),
          filteredItems: useDataFilteredItems(),
        }),
        { wrapper }
      )

      // default should be empty
      // @ts-expect-error - filteredItems is an object
      expect(Object.keys(store.result.current.filteredItems).length).toEqual(0)
      act(() => {
        // @ts-expect-error - setData is a function
        store.result.current.actions.setData(data)
      })
      // after setting the doop data should update the filtered items which is equal to the violation_groups since there are no filters
      // @ts-expect-error - filteredItems is an object
      expect(store.result.current.filteredItems.length).toEqual(data.templates.length)
    })
  })

  describe("setDetailsViolationGroupName", () => {
    it("should should set detailsViolationGroup object", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          detailsViolationGroup: useDataDetailsViolationGroup(),
        }),
        { wrapper }
      )
      // @ts-expect-error - setData is a function
      store.result.current.dataActions.setData(data)

      // default should be empty
      expect(store.result.current.detailsViolationGroup).toBe(null)
      // set a detailsViolationGroup
      act(() => {
        // @ts-expect-error - setDetailsViolationGroupName is a function
        store.result.current.dataActions.setDetailsViolationGroupKind(data.templates[0].kind)
      })

      // check if the detailsViolationItems is set
      expect(store.result.current.detailsViolationGroup).toEqual(data.templates[0])
    })

    it("violationGroups should contain violationCount and severities", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filteredItems: useDataFilteredItems(),
        }),
        { wrapper }
      )

      act(() => {
        // @ts-expect-error - setData is a function
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error - filteredItems is an object
      expect(store.result.current.filteredItems[0].severities?.length > 0).toEqual(true)
      // @ts-expect-error - filteredItems is an object
      expect(store.result.current.filteredItems[0].violationCount).toBeDefined()
      // set a detailsViolationGroup
    })

    it("filterEntries should be prefilled with available values from data", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filteredItems: useDataFilteredItems(),
          filterEntries: useDataFilterEntries(),
        }),
        { wrapper }
      )

      act(() => {
        // @ts-expect-error - setData is a function
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error - filterEntries is an object
      expect(store.result.current.filterEntries.length > 0).toEqual(true)
    })

    it("clusterIdentities should be an array", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          clusterIdentities: useDataClusterIdentities(),
        }),
        { wrapper }
      )

      act(() => {
        // @ts-expect-error - setData is a function
        store.result.current.dataActions.setData(data)
      })

      expect(Array.isArray(store.result.current.clusterIdentities)).toEqual(true)
    })
  })
})
