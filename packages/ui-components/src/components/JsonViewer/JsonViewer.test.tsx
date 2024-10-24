/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { JsonViewer } from "./index"
import { getTypeOfTheValue } from "./JsonViewer.component"

describe("JsonViewer", () => {
  test("renders json data", () => {
    render(<JsonViewer data={{ name: "test" }} data-testid="my-json-viewer" />)
    expect(screen.getByTestId("my-json-viewer")).toBeInTheDocument()
  })

  test("renders a custom class as passed", () => {
    render(<JsonViewer data={{ name: "test" }} data-testid="my-json-viewer" className="my-custom-class" />)
    expect(screen.getByTestId("my-json-viewer")).toHaveClass("my-custom-class")
  })

  test("renders other props as passed", () => {
    render(<JsonViewer data={{ name: "test" }} data-testid="my-json-viewer" name="My shiny JsonViewer" />)
    expect(screen.getByTestId("my-json-viewer")).toHaveAttribute("name", "My shiny JsonViewer")
  })

  test("getTypeOfTheValue returns correct type", () => {
    const func = (a: number) => {
      return a + 1
    }

    expect(getTypeOfTheValue("test")).toBe("string")
    expect(getTypeOfTheValue(1)).toBe("integer")
    expect(getTypeOfTheValue(1.5)).toBe("float")
    expect(getTypeOfTheValue(true)).toBe("boolean")
    expect(getTypeOfTheValue(0 / 0)).toBe("nan")
    expect(getTypeOfTheValue({})).toBe("object")
    expect(getTypeOfTheValue(new Date())).toBe("date")
    expect(getTypeOfTheValue(undefined)).toBe("undefined")
    expect(getTypeOfTheValue(null)).toBe("null")
    expect(getTypeOfTheValue(new RegExp("a"))).toBe("regexp")
    expect(getTypeOfTheValue(["a"])).toBe("array")
    expect(getTypeOfTheValue(func)).toBe("function")

    expect(getTypeOfTheValue("")).toBe("string")
    expect(getTypeOfTheValue(0)).toBe("integer")
    expect(getTypeOfTheValue(false)).toBe("boolean")
    expect(getTypeOfTheValue([])).toBe("array")
  })
})
