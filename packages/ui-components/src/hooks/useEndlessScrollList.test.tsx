/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, queryByAttribute, renderHook } from "@testing-library/react"
import { useEndlessScrollList } from "./useEndlessScrollList"

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
})
window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock)

describe("useEndlessScrollList", () => {
  it("return no scroll items if items not all provided", () => {
    const { result } = renderHook(() => useEndlessScrollList([]))
    expect(result?.current?.scrollListItems?.length).toBe(0)
  })

  describe("scrollListItems", () => {
    it("return all items if the whole amount is less then 20", () => {
      const { result } = renderHook(() => useEndlessScrollList(["1", "2", "3"]))
      expect(result?.current?.scrollListItems?.length).toBe(3)
    })
    it("return 20 items if the whole amount is more then 20", () => {
      const newArray = Array.from({ length: 30 }, (_, i) => `${i + 1}`)
      const { result } = renderHook(() => useEndlessScrollList(newArray))
      expect(result?.current?.scrollListItems?.length).toBe(20)
    })
  })

  describe("iterator", () => {
    it("returns a map function which iterates over all scrollListItems and adds the intersection ref if nothing else specified in options", () => {
      const { result } = renderHook(() => useEndlessScrollList(["1", "2", "3"]))
      const mapFunction = result.current.iterator.map(
        // eslint-disable-next-line no-unused-vars
        (item: unknown, index: number, array: unknown[]): React.ReactElement => item as React.ReactElement
      )
      const getById = queryByAttribute.bind(null, "id")
      const dom = render(mapFunction)
      const intersectionRefElement = getById(dom.container, "endlessScrollListLastItemRef")
      expect(intersectionRefElement).toBeTruthy()
    })

    it("returns a map function which iterates over all scrollListItems and do not include the intersection ref or do not call refFunction if showRef is set to false in options", () => {
      const refFunction = vi.fn()
      const { result } = renderHook(() =>
        useEndlessScrollList(["1", "2", "3"], {
          showRef: false,
          refFunction: refFunction,
        })
      )
      const mapFunction = result.current.iterator.map(
        // eslint-disable-next-line no-unused-vars
        (item: unknown, index: number, array: unknown[]): React.ReactElement => item as React.ReactElement
      )
      const getById = queryByAttribute.bind(null, "id")
      const dom = render(mapFunction)
      const intersectionRefElement = getById(dom.container, "endlessScrollListLastItemRef")
      expect(intersectionRefElement).toBeFalsy()
      expect(refFunction).not.toHaveBeenCalled()
    })

    it("returns a map function which iterates over all scrollListItems and does not add an intersection ref element", () => {
      const refFunction = vi.fn()
      const { result } = renderHook(() =>
        useEndlessScrollList(["1", "2", "3"], {
          refFunction: refFunction,
        })
      )
      const mapFunction = result.current.iterator.map(
        // eslint-disable-next-line no-unused-vars
        (item: unknown, index: number, array: unknown[]): React.ReactElement => item as React.ReactElement
      )
      const getById = queryByAttribute.bind(null, "id")
      const dom = render(mapFunction)
      const intersectionRefElement = getById(dom.container, "endlessScrollListLastItemRef")
      expect(intersectionRefElement).toBeFalsy()
      expect(refFunction).toHaveBeenCalled()
    })
  })
})
