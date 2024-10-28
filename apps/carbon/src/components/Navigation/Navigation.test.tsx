/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import Navigation from "./Navigation"

const extensions = [
  {
    name: "extension1",
    title: "Extension 1",
    url: "/extension1",
  },
  {
    name: "extension2",
    title: "Extension 2",
    url: "/extension2",
  },
  {
    name: "extension3",
    title: "Extension 3",
    url: "/extension3",
  },
]

const getElementByRole = (name: string, role = "link") => screen.getByRole(role, { name })

describe("Navigation", () => {
  test("renders apps", () => {
    render(<Navigation extensions={extensions} />)
    expect(getElementByRole("Extension 1")).toBeInTheDocument()
    expect(getElementByRole("Extension 2")).toBeInTheDocument()
    expect(getElementByRole("Extension 3")).toBeInTheDocument()
  })
})
