/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen, act } from "@testing-library/react"
import { ModalFooter } from "./index"

describe("ModalFooter", () => {
  test("renders a ModalFooter", () => {
    render(<ModalFooter data-testid="my-modal-footer" />)
    expect(screen.getByTestId("my-modal-footer")).toBeInTheDocument()
    expect(screen.getByTestId("my-modal-footer")).toHaveClass("juno-modal-footer")
  })

  test("renders a ModalFooter with a single 'Close' button by default", () => {
    render(<ModalFooter />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  test("renders a ModalFooter with a 'Confirm' and a 'Cancel' button when a confirmButtonLabel is passed", () => {
    render(<ModalFooter confirmButtonLabel="Confirm" />)
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
  })

  test("renders a ModalFooter with a 'Confirm' and a 'Cancel' button when an onComfirm handler is passed", () => {
    const confirmHandler = () => {
      console.log("confirmed!")
    }
    render(<ModalFooter onConfirm={confirmHandler} />)
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
  })

  test("does not render a 'Confirm' button but a single 'Close' button when neither a label nor a handler are being passed", () => {
    render(<ModalFooter />)
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Confirm" })).not.toBeInTheDocument()
  })

  test("renders a ModalFooter with a custom label for the cancelling button as passed", () => {
    render(<ModalFooter cancelButtonLabel="Mach zu" />)
    expect(screen.getByRole("button", { name: "Mach zu" })).toBeInTheDocument()
  })

  test("renders a ModalFooter with children as passed", () => {
    render(
      <ModalFooter>
        <button>Button</button>
      </ModalFooter>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("onCancel handler is called when clicking the cancelling button as passed", () => {
    const onClickSpy = vi.fn()
    render(<ModalFooter onCancel={onClickSpy} />)
    act(() => screen.getByRole("button").click())
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("onConfirm handler is called when clicking the confirming button as passed", () => {
    const onClickSpy = vi.fn()
    render(<ModalFooter confirmButtonLabel="Confirm" onConfirm={onClickSpy} />)
    act(() => screen.getByRole("button", { name: "Confirm" }).click())
    expect(onClickSpy).toHaveBeenCalled()
  })

  test("renders custom classNames as passed", () => {
    render(<ModalFooter data-testid="my-modal-footer" className="my-custom-class" />)
    expect(screen.getByTestId("my-modal-footer")).toHaveClass("my-custom-class")
  })

  test("renders all props as passed", () => {
    render(<ModalFooter data-testid="my-modal-footer" name="My little ModalFooter" />)
    expect(screen.getByTestId("my-modal-footer")).toHaveAttribute("name", "My little ModalFooter")
  })

  describe("Disabled Button Tests", () => {
    test("renders a disabled confirm action button when disableConfirmButton is true and ensures onConfirm isn't triggered", () => {
      const onClickSpy = vi.fn()
      render(<ModalFooter confirmButtonLabel="Confirm" onConfirm={onClickSpy} disableConfirmButton />)

      const confirmButton = screen.getByRole("button", { name: "Confirm" })
      expect(confirmButton).toBeInTheDocument()
      expect(confirmButton).toHaveAttribute("disabled")

      act(() => confirmButton.click())
      expect(onClickSpy).not.toHaveBeenCalled()
    })

    test("renders a disabled cancel action button when disableCancelButton is true and ensures onCancel isn't triggered", () => {
      const onClickSpy = vi.fn()
      render(<ModalFooter cancelButtonLabel="Cancel" onCancel={onClickSpy} disableCancelButton />)

      const cancelButton = screen.getByRole("button", { name: "Cancel" })
      expect(cancelButton).toBeInTheDocument()
      expect(cancelButton).toHaveAttribute("disabled")

      act(() => cancelButton.click())
      expect(onClickSpy).not.toHaveBeenCalled()
    })

    test("renders disabled confirm and cancel buttons and ensures onConfirm and onCancel aren't triggered", () => {
      const onConfirmSpy = vi.fn()
      const onCancelSpy = vi.fn()

      render(
        <ModalFooter
          confirmButtonLabel="Confirm"
          cancelButtonLabel="Cancel"
          onConfirm={onConfirmSpy}
          onCancel={onCancelSpy}
          disableConfirmButton
          disableCancelButton
        />
      )

      const confirmButton = screen.getByRole("button", { name: "Confirm" })
      expect(confirmButton).toBeInTheDocument()
      expect(confirmButton).toHaveAttribute("disabled")
      act(() => confirmButton.click())
      expect(onConfirmSpy).not.toHaveBeenCalled()

      const cancelButton = screen.getByRole("button", { name: "Cancel" })
      expect(cancelButton).toBeInTheDocument()
      expect(cancelButton).toHaveAttribute("disabled")
      act(() => cancelButton.click())
      expect(onCancelSpy).not.toHaveBeenCalled()
    })
  })
})
