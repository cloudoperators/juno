/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { renderHook, act } from "@testing-library/react"
import StoreProvider, {
  useDataActions,
  useFiltersActions,
  useDataFilteredItems,
  useFiltersActive,
} from "../../components/StoreProvider"

import data from "../../db.json"

describe("createFiltersSlice", () => {
  describe("ensureFilterType", () => {
    it("should convert the unknown filter type to the correct type", () => {
      const props = {
        initialFilters: { support_group: ["containers"] },
      }
      const wrapper = ({ children }: any) => <StoreProvider options={props}>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filterActions: useFiltersActions(),
          activeFilters: useFiltersActive(),
        }),
        { wrapper }
      )
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters.length).toEqual(1)
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters[0].type).toEqual("unknown")
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters.length).toEqual(1)
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters[0].type).toEqual("check")
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters[0].key).toEqual("check:support_group")
    })
  })

  describe("set", () => {
    it("should set the initial filters and convert the object", () => {
      const props = {
        initialFilters: { support_group: ["containers"] },
      }
      const wrapper = ({ children }: any) => <StoreProvider options={props}>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          activeFilters: useFiltersActive(),
        }),
        { wrapper }
      )
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters.length).toEqual(1)
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters[0].id).toEqual("support_group")
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters[0].type).toEqual("unknown")
      // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
      expect(store.result.current.activeFilters[0].value).toEqual("containers")
    })

    it("should update the filtered items", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filterActions: useFiltersActions(),
          filteredItems: useDataFilteredItems(),
        }),
        { wrapper }
      )
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(Object.keys(store.result.current.filteredItems).length).toEqual(data.templates.length)

      // set filters
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'activeFilters' does not exist on type 'any'.
        store.result.current.filterActions.set([
          { key: "check:support-group", value: "support-group-2" },
          { key: "check:support-group", value: "support-group-4" },
        ])
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length < data.templates.length).toEqual(true)
    })
  })

  describe("add", () => {
    it("should update the filtered items", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filterActions: useFiltersActions(),
          filteredItems: useDataFilteredItems(),
        }),
        { wrapper }
      )
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'dataActions' does not exist on type 'any'.
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length).toEqual(data.templates.length)
      // add filters
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'filterActions' does not exist on type 'any'.
        store.result.current.filterActions.add("check:support-group", "support-group-2")
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length < data.templates.length).toEqual(true)
    })
  })

  describe("remove", () => {
    it("should update the filtered items", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filterActions: useFiltersActions(),
          filteredItems: useDataFilteredItems(),
        }),
        { wrapper }
      )
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'dataActions' does not exist on type 'any'.
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length).toEqual(data.templates.length)
      // set filters
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'filterActions' does not exist on type 'any'.
        store.result.current.filterActions.set([
          { key: "check:support_group", value: "support-group-2" },
          { key: "check:support_group", value: "support-group-4" },
        ])
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length).toEqual(2)

      // remove a filter
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'filterActions' does not exist on type 'any'.
        store.result.current.filterActions.remove("check:support_group", "support-group-2")
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length).toEqual(1)
    })
  })

  describe("removeAll", () => {
    it("should update the filtered items", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filterActions: useFiltersActions(),
          filteredItems: useDataFilteredItems(),
        }),
        { wrapper }
      )
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'dataActions' does not exist on type 'any'.
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length).toEqual(data.templates.length)
      // set filters
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'filterActions' does not exist on type 'any'.
        store.result.current.filterActions.set([
          { key: "check:support_group", value: "support-group-2" },
          { key: "check:support_group", value: "support-group-4" },
        ])
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length < data.templates.length).toEqual(true)
      // remove a filter
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'filterActions' does not exist on type 'any'.
        store.result.current.filterActions.removeAll()
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length).toEqual(data.templates.length)
    })
  })

  describe("setSearchTerm", () => {
    it("should update the filtered items", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          dataActions: useDataActions(),
          filterActions: useFiltersActions(),
          filteredItems: useDataFilteredItems(),
        }),
        { wrapper }
      )
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'dataActions' does not exist on type 'any'.
        store.result.current.dataActions.setData(data)
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length).toEqual(data.templates.length)
      // set search term. It should match the support_group name
      act(() => {
        // @ts-expect-error TS(2339) FIXME: Property 'filterActions' does not exist on type 'any'.
        store.result.current.filterActions.setSearchTerm("support-group-2")
      })
      // @ts-expect-error TS(2339) FIXME: Property 'filteredItems' does not exist on type 'any'.
      expect(store.result.current.filteredItems.length < data.templates.length).toEqual(true)
    })
  })
})
