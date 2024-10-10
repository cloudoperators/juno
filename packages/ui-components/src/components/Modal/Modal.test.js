/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Modal } from "./index"
import { PortalProvider } from "../../deprecated_js/PortalProvider/PortalProvider.component"
import { TextInput } from "../../deprecated_js/TextInput/index.js"

const mockOnConfirm = jest.fn()
const mockOnCancel = jest.fn()

describe("Modal", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a Modal", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveClass("juno-modal")
  })

  test("renders a title as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal title="My Modal" open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveTextContent("My Modal")
  })

  test("renders a title when a 'heading' prop is passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal heading="My Modal Heading" open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveTextContent("My Modal Heading")
  })

  test("renders an aria-labelledby attribute referencing the title if passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal title="My a11y Modal" open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const modalTitle = screen.getByText("My a11y Modal")
    expect(modalTitle).toHaveAttribute("id")
    const modalTitleId = modalTitle.getAttribute("id")
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-labelledby", modalTitleId)
  })

  test("renders an aria-labelledby attribute referencing the heading if passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal title="My other a11y Modal" open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const modalTitle = screen.getByText("My other a11y Modal")
    expect(modalTitle).toHaveAttribute("id")
    const modalTitleId = modalTitle.getAttribute("id")
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-labelledby", modalTitleId)
  })

  test("renders an arial-label attribute as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal ariaLabel="Otherwise unnamed modal" open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-label", "Otherwise unnamed modal")
  })

  test("renders children as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open>
            <button>Child Button</button>
            <span>Something here</span>
          </Modal>
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Child Button" })).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toHaveTextContent("Something here")
  })

  test("renders a Modal with two Close buttons by default", async () => {
    // there should be one in the header and one in the footer
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(2)
  })

  test("renders a non-closeable Modal as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open closeable={false} />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
    expect(screen.queryAllByRole("button")).toHaveLength(0)
  })

  test("renders a cancel button with a label as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open cancelButtonLabel="Click here to Cancel" />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Click here to Cancel" })).toBeInTheDocument()
  })

  test("renders a confirm button with a label as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open confirmButtonLabel="Click here to Proceed" />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Click here to Proceed" })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Click here to Proceed" })).toHaveClass("juno-button-primary")
  })

  test("closes the modal when clicking the close button in the title bar", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const titleBarCloseButton = screen.queryAllByRole("button")[0]
    expect(titleBarCloseButton).toHaveAttribute("aria-label", "close")
    await waitFor(() => userEvent.click(titleBarCloseButton))
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  test("closes the modal when clicking the default close button in the modal footer", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open cancelButtonLabel="Cancel all the things" />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const footerCloseButton = screen.queryAllByRole("button")[1]
    expect(footerCloseButton).toHaveTextContent("Cancel all the things")
    await waitFor(() => userEvent.click(footerCloseButton))
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  test("does not close the modal when clicking on the backdrop by default", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const backdrop = document.querySelector(".juno-modal-container")
    await waitFor(() => userEvent.click(backdrop))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  test("closes the modal when clicking on the background and the modal is configured to do so", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open closeOnBackdropClick />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const backdrop = document.querySelector(".juno-modal-container")
    await waitFor(() => userEvent.click(backdrop))
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  // confirm button
  test("executes an onConfirm handler as passed and closes the modal when clicking the confirm button", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open onConfirm={mockOnConfirm} confirmButtonLabel={"OK"} />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const confirmButton = screen.getByRole("button", { name: "OK" })
    await waitFor(() => userEvent.click(confirmButton))
    expect(mockOnConfirm).toHaveBeenCalled()
  })

  // cancel button
  test("executes an onCancel handler as passed and closes the modal when clicking the cancel button", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open onCancel={mockOnCancel} cancelButtonLabel="Cancel" />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const cancelButton = screen.getByRole("button", { name: "Cancel" })
    await waitFor(() => userEvent.click(cancelButton))
    expect(mockOnCancel).toHaveBeenCalled()
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  // cancel button
  test("executes an onCancel handler as passed and closes the modal when clicking the close button in the modal header", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open onCancel={mockOnCancel} />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    const closeButton = screen.getByRole("button", { name: "close" })
    await waitFor(() => userEvent.click(closeButton))
    expect(mockOnCancel).toHaveBeenCalled()
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  // close on ESC
  test("executes an onCancel handler as passed and closes the modal when hitting the ESC key", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open onCancel={mockOnCancel} />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    await waitFor(() => userEvent.keyboard("{Escape}"))
    expect(mockOnCancel).toHaveBeenCalled()
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  // initialFocus
  test("focusses an element inside the modal as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open initialFocus="#focusinput">
            <TextInput id="focusinput" />
          </Modal>
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    waitFor(() => {
      expect(screen.getByRole("textbox")).toHaveFocus()
    })
  })

  // trap focus
  test("traps the focus in a modal", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open cancelButtonLabel="Cancel" />
          <TextInput name="textinput" />
        </PortalProvider>
      )
    )
    const user = userEvent.setup()
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    waitFor(() => {
      user.keyboard("{Tab}")
      expect(screen.getByRole("textbox")).toHaveFocus()
      user.keyboard("{Tab}")
      expect(screen.getByRole("button", { name: "Cancel" })).toHaveFocus()
      user.keyboard("{Tab}")
      expect(screen.getByRole("button", { name: "close" })).toHaveFocus()
      user.keyboard("{Tab}")
      expect(screen.getByRole("textbox")).toHaveFocus()
    })
  })

  test("renders custom classNames as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open className="my-custom-class" />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", async () => {
    await waitFor(() =>
      render(
        <PortalProvider>
          <Modal open name="My little Modal" />
        </PortalProvider>
      )
    )
    expect(screen.getByRole("dialog")).toHaveAttribute("name", "My little Modal")
  })
})
