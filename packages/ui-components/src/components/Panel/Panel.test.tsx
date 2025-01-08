/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

import { Panel } from "./Panel.component"
import { PortalProvider } from "../PortalProvider"

const closedClass = "jn-translate-x-[100%]"

describe("Panel", () => {
  describe("Basic Rendering", () => {
    test("renders a panel", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).toHaveClass("juno-panel")
    })

    test("renders a closed panel by default", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).toHaveClass(closedClass)
    })

    test("renders a panel without any props", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })

    test("renders an opened panel", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel opened />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).not.toHaveClass(closedClass)
    })

    test("renders a panel with heading", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel heading="My heading" opened />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).toHaveTextContent("My heading")
    })

    test("renders a custom classname", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel className="my-custom-classname" />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).toHaveClass("my-custom-classname")
    })

    test("renders all props as passed", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel data-xyz={true} />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).toHaveAttribute("data-xyz")
    })

    test("renders a panel with undefined className", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel className={undefined} />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })
  })

  describe("Conditional Rendering", () => {
    test("renders a panel with close button by default", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("button")).toBeInTheDocument()
      expect(screen.getByLabelText("close")).toBeInTheDocument()
      expect(screen.getByRole("button")).toHaveAttribute("aria-label", "close")
      expect(screen.getByRole("img")).toHaveAttribute("alt", "close")
    })

    test("renders a panel without a close button", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel closeable={false} />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.queryByRole("button")).not.toBeInTheDocument()
      expect(screen.queryByLabelText("close")).not.toBeInTheDocument()
    })

    test("renders a panel without a heading", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel opened />
          </PortalProvider>
        )
      )
      expect(screen.getByRole("dialog")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).not.toHaveTextContent("My heading")
    })
  })

  describe("Events", () => {
    test("on click on close button closes panel", async () => {
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel />
          </PortalProvider>
        )
      )
      await waitFor(() => userEvent.click(screen.getByRole("button")))
      expect(screen.getByRole("dialog")).toHaveClass(closedClass)
    })

    test("on click on close button fires onClose handler as passed", async () => {
      const handleClose = vi.fn()
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel onClose={handleClose} />
          </PortalProvider>
        )
      )
      await waitFor(() => userEvent.click(screen.getByRole("button")))
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    test("on click on close button when panel is already closed", async () => {
      const handleClose = vi.fn()
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel opened={false} onClose={handleClose} />
          </PortalProvider>
        )
      )
      const button = screen.queryByRole("button")
      await waitFor(() => (button ? userEvent.click(button) : null))
      expect(screen.getByRole("dialog")).toHaveClass(closedClass)
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    test("double-click on close button fires onClose handler twice", async () => {
      const handleClose = vi.fn()
      await waitFor(() =>
        render(
          <PortalProvider>
            <Panel onClose={handleClose} />
          </PortalProvider>
        )
      )
      await waitFor(() => userEvent.dblClick(screen.getByRole("button")))
      expect(handleClose).toHaveBeenCalledTimes(2)
    })
  })
})
