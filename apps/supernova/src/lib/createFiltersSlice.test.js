/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { renderHook, act } from "@testing-library/react"
import {
  useFilterLabels,
  useFilterActions,
  useSearchTerm,
  StoreProvider,
  usePredefinedFilters,
  useActivePredefinedFilter,
  useActiveFilters,
} from "../hooks/useAppStore"

describe("createFiltersSlice", () => {
  describe("setLabels", () => {
    it("return default status label", () => {
      const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useFilterActions(),
          filterLabels: useFilterLabels(),
        }),
        { wrapper }
      )
      expect(store.result.current.filterLabels).toEqual(["status"])
    })

    it("Adds array with strings to select", () => {
      const props = {
        filterLabels: [
          "app",
          "cluster",
          "cluster_type",
          "context",
          "job",
          "region",
          "service",
          "severity",
          "support_group",
          "tier",
          "type",
        ],
      }
      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useFilterActions(),
          filterLabels: useFilterLabels(),
        }),
        { wrapper }
      )

      expect(store.result.current.filterLabels).toEqual(
        expect.arrayContaining([
          "app",
          "status",
          "cluster",
          "cluster_type",
          "context",
          "job",
          "region",
          "service",
          "severity",
          "support_group",
          "tier",
          "type",
        ])
      )
    })

    it("Adds empty array to select", () => {
      const props = {
        filterLabels: [],
      }
      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useFilterActions(),
          filterLabels: useFilterLabels(),
        }),
        { wrapper }
      )

      expect(store.result.current.filterLabels).toEqual(expect.arrayContaining(["status"]))
    })

    it("warns the user if labels are not an array", () => {
      const spy = jest.spyOn(console, "warn").mockImplementation(() => {})
      const props = {
        filterLabels: { app: "app" },
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>
      renderHook(
        () => ({
          actions: useFilterActions(),
          filterLabels: useFilterLabels(),
        }),
        { wrapper }
      )

      // expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith("[supernova]::setLabels: labels object is not an array")
      spy.mockRestore()
    })

    it("warns the user if labels array also includes non-strings and adds the valid labels", () => {
      const spy = jest.spyOn(console, "warn").mockImplementation(() => {})

      const props = {
        filterLabels: ["app", 1, 9],
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useFilterActions(),
          filterLabels: useFilterLabels(),
        }),
        { wrapper }
      )

      // Is the warning called?
      // expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith("[supernova]::setLabels: Some elements of the array are not strings.")
      spy.mockRestore()

      // Are valid labels still set?
      expect(store.result.current.filterLabels).toEqual(expect.arrayContaining(["app", "status"]))
    })
  })

  describe("setSearchTerm", () => {
    it("empty search term", () => {
      const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useFilterActions(),
          searchTerm: useSearchTerm(),
        }),
        { wrapper }
      )

      expect(store.result.current.searchTerm).toEqual("")
    })

    it("Set a search term", () => {
      const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          actions: useFilterActions(),
          searchTerm: useSearchTerm(),
        }),
        { wrapper }
      )

      act(() => {
        store.result.current.actions.setSearchTerm("k8s")
      })

      expect(store.result.current.searchTerm).toEqual("k8s")
    })
  })

  describe("parsePredefinedFilters", () => {
    it("parses predefined filters correctly", () => {
      const props = {
        predefinedFilters: [
          {
            name: "filter1",
            displayName: "Filter 1",
            matchers: { label1: "regex1", label2: "regex2" },
          },
          {
            name: "filter2",
            displayName: "Filter 2",
            matchers: { label3: "regex3" },
          },
        ],
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      const store = renderHook(
        () => ({
          predefinedFilters: usePredefinedFilters(),
          activePredefinedFilter: useActivePredefinedFilter(),
        }),
        { wrapper }
      )

      expect(store.result.current.predefinedFilters).toEqual(props.predefinedFilters)
      expect(store.result.current.activePredefinedFilter).toEqual("filter1")
    })

    it("returns an empty array when no predefined filters are provided", () => {
      const props = {
        predefinedFilters: [],
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      const store = renderHook(
        () => ({
          predefinedFilters: usePredefinedFilters(),
          activePredefinedFilter: useActivePredefinedFilter(),
        }),
        { wrapper }
      )

      expect(store.result.current.predefinedFilters).toEqual(props.predefinedFilters)
      expect(store.result.current.activePredefinedFilter).toEqual(null)
    })

    it("throws an warn if predefined filters are not in correct format", () => {
      const spy = jest.spyOn(console, "warn").mockImplementation(() => {})
      const props = {
        predefinedFilters: "Not an Array",
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>
      renderHook(
        () => ({
          predefinedFilters: usePredefinedFilters(),
          activePredefinedFilter: useActivePredefinedFilter(),
        }),
        { wrapper }
      )

      expect(spy).toHaveBeenCalledWith("[supernova]::parsePredefinedFilter: predefinedFilters object is not an array")
      expect(spy).toHaveBeenCalledWith(
        "[supernova]::parseActivePredefinedFilter: predefinedFilters object is not an array"
      )

      spy.mockRestore()
    })

    it("is an empty array if predefined filters are not provided", () => {
      const props = {}

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      const store = renderHook(
        () => ({
          predefinedFilters: usePredefinedFilters(),
          activePredefinedFilter: useActivePredefinedFilter(),
        }),
        { wrapper }
      )

      expect(store.result.current.predefinedFilters).toEqual([])
      expect(store.result.current.activePredefinedFilter).toEqual(null)
    })
  })
  describe("parseInitialFilters", () => {
    it("parses predefined filters correctly", () => {
      const props = {
        initialFilters: {
          region: ["europe"],
          app: ["frontendapp", "monitoring", "store"],
        },
        filterLabels: ["app", "region", "service"],
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      const store = renderHook(
        () => ({
          activeFilters: useActiveFilters(),
        }),
        { wrapper }
      )

      expect(store.result.current.activeFilters).toEqual(props.initialFilters)
    })
    it("warns because some keys are not in filterLabels and filters initialFilters to only include valid keys", () => {
      const spy = jest.spyOn(console, "warn").mockImplementation(() => {})

      const props = {
        initialFilters: {
          region: ["europe"],
          app: ["frontendapp", "monitoring", "store"],
        },
        filterLabels: ["region"],
      }

      const expectedFilters = {
        region: ["europe"],
      } // Only region is a valid filter label, we except everything else to be filtered out

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      const store = renderHook(
        () => ({
          activeFilters: useActiveFilters(),
        }),
        { wrapper }
      )

      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(
          "[supernova]::parseInitialFilters: Some keys of the initialFilters object are not valid filter labels."
        )
      )
      expect(store.result.current.activeFilters).toEqual(expectedFilters)
      spy.mockRestore()
    })

    it("warns because initial filters is not a object", () => {
      const spy = jest.spyOn(console, "warn").mockImplementation(() => {})

      const props = {
        initialFilters: "app: frontendapp",
        filterLabels: ["region"],
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      renderHook(
        () => ({
          activeFilters: useActiveFilters(),
        }),
        { wrapper }
      )

      const store = renderHook(
        () => ({
          activeFilters: useActiveFilters(),
        }),
        { wrapper }
      )

      expect(store.result.current.activeFilters).toEqual({})
      expect(spy).toHaveBeenCalledWith("[supernova]::validateExcludedLabels: labels object is not an array of strings")
      spy.mockRestore()
    })

    it("initialFilters is empty", () => {
      const props = {
        initialFilters: {},
        filterLabels: ["region"],
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      const store = renderHook(
        () => ({
          activeFilters: useActiveFilters(),
        }),
        { wrapper }
      )
      expect(store.result.current.activeFilters).toEqual({})
    })

    it("initialFilters is null", () => {
      const props = {
        initialFilters: null,
        filterLabels: ["region"],
      }

      const wrapper = ({ children }) => <StoreProvider options={props}>{children}</StoreProvider>

      const store = renderHook(
        () => ({
          activeFilters: useActiveFilters(),
        }),
        { wrapper }
      )

      expect(store.result.current.activeFilters).toEqual({})
    })
  })
})
