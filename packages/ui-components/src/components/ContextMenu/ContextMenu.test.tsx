/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"

import { ContextMenu } from "./ContextMenu.component"

describe("ContextMenu", () => {
  test("renders a ContextMenu Toggle", () => {
    render(<ContextMenu />)
    const iconElement = screen.getByRole("img")

    expect(iconElement).toHaveAccessibleName("More")
    expect(iconElement.querySelector("title")?.textContent).toBe("More")
  })

  test("toggles Context Menu on click", async () => {
    await waitFor(() => render(<ContextMenu />))
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()

    await waitFor(() => userEvent.click(screen.getByRole("button")))
    await waitFor(() => expect(screen.getByRole("menu")).toBeInTheDocument())
    await waitFor(() => userEvent.click(screen.getByRole("button")))
    await waitFor(() => expect(screen.queryByRole("menu")).not.toBeInTheDocument())
  })
})
