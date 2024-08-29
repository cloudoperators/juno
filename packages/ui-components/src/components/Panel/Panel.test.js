/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Panel } from "./index"

const closedClass = "jn-translate-x-[100%]"

describe("Panel", () => {
  test("renders a panel", async () => {
    await waitFor(() => render(<Panel />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveClass("juno-panel")
  })

  test("renders a closed panel by default", async () => {
    await waitFor(() => render(<Panel />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveClass(closedClass)
  })

  test("renders an opened panel", async () => {
    await waitFor(() => render(<Panel opened />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).not.toHaveClass(closedClass)
  })

  test("renders a panel with heading", async () => {
    await waitFor(() => render(<Panel heading="My heading" opened />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveTextContent("My heading")
  })

  test("renders a panel with close button by default", async () => {
    await waitFor(() => render(<Panel />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByLabelText("close")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "close")
    expect(screen.getByRole("img")).toHaveAttribute("alt", "close")
  })

  test("renders a panel without a close button", async () => {
    await waitFor(() => render(<Panel closeable={false} />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
    expect(screen.queryByLabelText("close")).not.toBeInTheDocument()
  })

  test("renders a custom classname", async () => {
    await waitFor(() => render(<Panel className="my-custom-classname" />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveClass("my-custom-classname")
  })

  test("renders all props as passed", async () => {
    await waitFor(() => render(<Panel data-xyz={true} />))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveAttribute("data-xyz")
  })

  // EVENTS

  test("on click on close button closes panel", async () => {
    await waitFor(() => render(<Panel />))
    await waitFor(() => userEvent.click(screen.getByRole("button")))
    expect(screen.getByRole("dialog")).toHaveClass(closedClass)
  })

  test("on click on close button fires onClose handler as passed", async () => {
    const handleClose = jest.fn()
    await waitFor(() => render(<Panel onClose={handleClose} />))
    await waitFor(() => userEvent.click(screen.getByRole("button")))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
