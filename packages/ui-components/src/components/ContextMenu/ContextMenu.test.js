/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContextMenu } from "./index.js"

describe("ContextMenu", () => {
  test("renders a ContextMenu Toggle", async () => {
    await waitFor(() => render(<ContextMenu />))
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveClass("juno-contextmenu-toggle")
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("title", "More")
  })

  test("toggles Context Menu on click", async () => {
    await waitFor(() => render(<ContextMenu />))
    expect(screen.queryByRole("menu")).not.toBeInTheDocument()

    await waitFor(() => userEvent.click(screen.getByRole("button")))
    await waitFor(() => expect(screen.getByRole("menu")).toBeInTheDocument())
    await waitFor(() => userEvent.click(screen.getByRole("button")))
    await waitFor(() =>
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    )
  })
})
