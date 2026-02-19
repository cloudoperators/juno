/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeAll, vi } from "vitest"
import { expect } from "vitest"
import * as matchers from "@testing-library/jest-dom/matchers"

expect.extend(matchers)

global.fetch = vi.fn(
  () =>
    Promise.resolve({
      ok: true, // Indicates if the request was successful (status code 2xx)
      status: 200, // HTTP status code

      json: () => Promise.resolve({}), // Mocking the json method
    } as Response) // Cast to Response type to satisfy TypeScript
)

beforeAll(() => {
  // Mock global objects if necessary
  global.window = window
  global.document = window.document

  // Mock DOM methods required by CodeMirror
  const mockGetClientRects = function () {
    return {
      length: 0,
      item: () => null,
      [Symbol.iterator]: function* () {},
    } as DOMRectList
  }

  const mockGetBoundingClientRect = function () {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON: () => {},
    } as DOMRect
  }

  // Mock for Range
  if (typeof Range.prototype.getClientRects === "undefined") {
    Range.prototype.getClientRects = mockGetClientRects
  }

  if (typeof Range.prototype.getBoundingClientRect === "undefined") {
    Range.prototype.getBoundingClientRect = mockGetBoundingClientRect
  }

  // Mock for Element
  if (typeof Element.prototype.getClientRects === "undefined") {
    Element.prototype.getClientRects = mockGetClientRects
  }

  if (typeof Element.prototype.getBoundingClientRect === "undefined") {
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect
  }

  // Mock for Text nodes (this is what CodeMirror is calling)
  if (typeof Text.prototype.getClientRects === "undefined") {
    // @ts-expect-error - Adding missing DOM API for testing
    Text.prototype.getClientRects = mockGetClientRects
  }

  if (typeof Text.prototype.getBoundingClientRect === "undefined") {
    // @ts-expect-error - Adding missing DOM API for testing
    Text.prototype.getBoundingClientRect = mockGetBoundingClientRect
  }
})
