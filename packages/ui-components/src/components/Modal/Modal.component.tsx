/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useId, ReactNode } from "react"
import { createPortal } from "react-dom"
import { FocusTrap } from "focus-trap-react"
import { ModalFooter } from "../ModalFooter/index"
import { Icon, KnownIcons } from "../Icon/Icon.component"
import { usePortalRef } from "../PortalProvider/PortalProvider.component"

/*
 * handle height/scrolling TODO -> allow optional constrainHeight=false prop?
 * Unfocus element on ESC, close modal on ESC when no element is focussed
 * Spare "variant" prop for semantic variants later.
 * a11y (voicereader, keyboard accessibilty) TODO
 */

const modalcontainerstyles = `
	jn:fixed
	jn:inset-0
	jn:flex
	jn:items-center
	jn:bg-theme-modal-backdrop
	jn:backdrop-blur-[2px]
	jn:z-9990
`

const modalstyles = `
	jn:bg-theme-background-lvl-0
	jn:relative
	jn:rounded
	jn:m-auto
	jn:overflow-y-auto
	jn:max-h-[90%]
`

const headerstyles = `
	jn:flex
	jn:py-2
	jn:px-8
	jn:border-b
	jn:border-theme-background-lvl-4
	jn:h-[2.8125rem]
`

const titlestyles = `
  jn:text-xl
  jn:font-bold
`

const contentstyles = `
	jn:min-h-[5rem]
`

const contentpaddingstyles = `
	jn:py-4
	jn:px-8
`

const sizeClass = (size: ModalSize) => {
  switch (size) {
    case "large":
      return `jn:w-[40rem]`
    case "xl":
      return `jn:w-[76.75rem]`
    case "2xl":
      return `jn:w-[80%] jn:min-w-[85rem] jn:max-w-[112.5rem]`
    default:
      return `jn:w-[33.625rem]`
  }
}

/**
 * The `Modal` component provides a flexible dialog window for user interactions,
 * supporting titles, dismissal controls, sizing options, and comprehensive footer configurations.
 */
export const Modal = ({
  title = "",
  heading = "",
  ariaLabel,
  initialFocus,
  open = false,
  closeable = true,
  closeOnEsc = true,
  closeOnBackdropClick = false,
  disableCloseButton,
  size = "small",
  unpad = false,
  className = "",
  children,
  modalFooter,
  confirmButtonLabel = "",
  cancelButtonLabel = "",
  confirmButtonIcon,
  cancelButtonIcon,
  disableConfirmButton = false,
  disableCancelButton = false,
  onConfirm,
  onCancel,
  ...props
}: ModalProps): ReactNode => {
  const uniqueId = () => "juno-modal-" + useId()

  const [isOpen, setIsOpen] = useState(open)
  const [isCloseable, setIsCloseable] = useState(closeable)
  const [isCloseabelOnBackdropClick, setIsCloseableOnBackdropClick] = useState(closeOnBackdropClick)
  const [isCloseableOnEsc, setisCloseableOnEsc] = useState(closeOnEsc)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  useEffect(() => {
    setIsCloseable(closeable)
  }, [closeable])

  useEffect(() => {
    setIsCloseableOnBackdropClick(closeOnBackdropClick)
  }, [closeOnBackdropClick])

  useEffect(() => {
    setisCloseableOnEsc(closeOnEsc)
  }, [closeOnEsc])

  const handleConfirmClick = (event: MouseEvent<HTMLElement>) => {
    onConfirm && onConfirm(event)
  }

  const handleCancelClick = (event: MouseEvent<HTMLElement>) => {
    setIsOpen(false)
    onCancel && onCancel(event)
  }

  const handleEsc = (event: KeyboardEvent) => {
    if (isCloseable && isCloseableOnEsc) {
      setIsOpen(false)
      onCancel && onCancel(event)
    }
  }

  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    if (isCloseabelOnBackdropClick) {
      setIsOpen(false)
      onCancel && onCancel(event)
    } else {
      event.stopPropagation()
    }
  }

  const portalContainer = usePortalRef()

  const modalRef = useRef<HTMLDivElement | null>(null)

  const modalTitle = title || heading
  const hasTitle = Boolean(modalTitle)
  const modalTitleId = hasTitle ? uniqueId() : undefined

  const renderModalTitle = () => {
    if (modalTitle === null || modalTitle === undefined || modalTitle === false) {
      return null
    }
    if (typeof modalTitle === "string") {
      return (
        <h1 className={`juno-modal-title ${titlestyles}`} id={modalTitleId}>
          {modalTitle}
        </h1>
      )
    }
    return (
      <div className={`juno-modal-title ${titlestyles}`} id={modalTitleId}>
        {modalTitle}
      </div>
    )
  }

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={`juno-modal-container ${modalcontainerstyles}`} onClick={handleBackdropClick}>
            <FocusTrap
              focusTrapOptions={{
                initialFocus: initialFocus,
                clickOutsideDeactivates: isCloseabelOnBackdropClick,
                fallbackFocus: () => modalRef.current!,
                allowOutsideClick: true,
                escapeDeactivates: (e: KeyboardEvent) => {
                  handleEsc(e)
                  return false
                },
              }}
            >
              <div
                className={`juno-modal ${sizeClass(size)} ${modalstyles} ${className}`}
                role="dialog"
                ref={modalRef}
                {...props}
                aria-labelledby={modalTitleId}
                aria-label={ariaLabel}
              >
                <div
                  className={`juno-modal-header ${headerstyles} ${modalTitle ? `jn:justify-between` : `jn:justify-end`}`}
                >
                  {renderModalTitle()}
                  {isCloseable ? (
                    <Icon
                      icon="close"
                      onClick={handleCancelClick}
                      disabled={disableCancelButton || disableCloseButton}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className={`juno-modal-content ${contentstyles} ${unpad ? "" : contentpaddingstyles}`}>
                  {children}
                </div>
                {isCloseable ? (
                  modalFooter ? (
                    modalFooter
                  ) : (
                    <ModalFooter
                      confirmButtonLabel={confirmButtonLabel}
                      cancelButtonLabel={cancelButtonLabel}
                      confirmButtonIcon={confirmButtonIcon}
                      cancelButtonIcon={cancelButtonIcon}
                      disableConfirmButton={disableConfirmButton}
                      disableCancelButton={disableCancelButton}
                      onConfirm={onConfirm ? handleConfirmClick : undefined}
                      onCancel={handleCancelClick}
                    />
                  )
                ) : null}
              </div>
            </FocusTrap>
          </div>,
          portalContainer ? portalContainer : document.body
        )}
    </>
  )
}

type ModalSize = "small" | "large" | "xl" | "2xl"

export interface ModalProps extends Omit<HTMLProps<HTMLDivElement>, "size" | "title"> {
  /**
   * The title of the modal. This will be rendering as the heading of the modal, and the modal's `arial-labelledby` attribute will reference the title/heading element. If the modal does not have `title` or `heading`, use `ariaLabel` to provide an accessible name for the modal.
   */
  title?: ReactNode

  /**
   * Also the title of the modal, just for API flexibility. If both `title` and `heading` are passed, `title` will take precedence.
   */
  heading?: ReactNode

  /**
   * The aria-label of the modal. Use only if the modal does NOT have a `title` or `heading`.
   */
  ariaLabel?: string

  /**
   * By default, the first element in the tab order of the Modal content will be focussed. To specify an element to be focussed when the modal opens, pass an element, DOM node, or selector string.
   */
  initialFocus?: HTMLElement | SVGElement | string

  /**
   * Whether the modal will be open.
   * @default false
   */
  open?: boolean

  /**
   * Whether the modal can be closed using an "X"-Button at the top right.
   * @default true
   */
  closeable?: boolean

  /**
   * Whether the modal should be closed when the backdrop is clicked. Essentially 'un-modals' the modal.
   * @default false
   */
  closeOnBackdropClick?: boolean

  /**
   * Determines whether the close button should be disabled.
   * @default false
   */
  disableCloseButton?: boolean

  /**
   * Whether the modal can be closed by hitting the ESC key.
   * @default true
   */
  closeOnEsc?: boolean

  /**
   * The Modal size, determines the aesthetics of the modal.
   * @default small
   */
  size?: ModalSize

  /**
   * Pass to remove default padding from the content area of the modal.
   * @default false
   */
  unpad?: boolean

  /**
   * Custom className to add to the modal for additional styling.
   * @default ""
   */
  className?: string

  /**
   * The children of the modal. These will be rendered as the modal content. To render custom buttons at the bottom, see `modalFooter` below.
   */
  children?: ReactNode

  /**
   * Optional. Pass a `<ModalFooter />` component with custom content as required. Will default to using the `<ModalFooter/>` component internally.
   */
  modalFooter?: ReactElement

  /**
   * Pass a label to render a confirm button and a Cancel button.
   * @default ""
   */
  confirmButtonLabel?: string

  /**
   * Pass a label for the cancel button. Defaults to "Cancel".
   * @default "Cancel"
   */
  cancelButtonLabel?: string

  /**
   * Pass an Icon name to show on the confirming action button.
   */
  confirmButtonIcon?: KnownIcons

  /**
   * Pass an icon name to show on the cancelling button.
   */
  cancelButtonIcon?: KnownIcons

  /**
   * Determines whether the confirm action button should be disabled.
   * @default false
   */
  disableConfirmButton?: boolean

  /**
   * Determines whether the cancel action button should be disabled.
   * @default false
   */
  disableCancelButton?: boolean

  /**
   * A handler to execute once the modal is confirmed by clicking the confirm button if exists. Note that we do not close the modal automatically.
   */
  onConfirm?: MouseEventHandler<HTMLElement>

  /**
   * A handler to execute once the modal is cancelled or dismissed using the x-Close button,  Cancel-button or pressing ESC.
   */
  onCancel?: (_event: MouseEvent<HTMLElement> | KeyboardEvent) => void
}
