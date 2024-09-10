/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useId } from "react"
import { createPortal } from "react-dom"
import PropTypes from "prop-types"
import FocusTrap from "focus-trap-react"
import { ModalFooter } from "../ModalFooter/index"
import { Icon, knownIcons } from "../../deprecated_js/Icon/Icon.component"
import { usePortalRef } from "../PortalProvider/PortalProvider.component"

/*
 * handle height/scrolling TODO -> allow optional constrainHeight=false prop?
 * Unfocus element on ESC, close modal on ESC when no element is focussed
 * Spare "variant" prop for semantic variants later.
 * a11y (voicereader, keyboard accessibilty) TODO
 */

const modalcontainerstyles = `
	jn-fixed
	jn-inset-0
	jn-flex
	jn-items-center
	jn-bg-theme-modal-backdrop
	jn-backdrop-blur-[2px]
	jn-z-[9990]
`

const modalstyles = `
	jn-bg-theme-background-lvl-0
	jn-relative
	jn-rounded
	jn-m-auto
	jn-overflow-y-auto
	jn-max-h-[90%]
`

const headerstyles = `
	jn-flex
	jn-py-2
	jn-px-8
	jn-border-b
	jn-border-theme-background-lvl-4
	jn-h-[2.8125rem]
`

const titlestyles = `
	jn-text-xl
	jn-font-bold
`

const contentstyles = `
	jn-min-h-[5rem]
`

const contentpaddingstyles = `
	jn-py-4
	jn-px-8
`

const sizeClass = (size) => {
  switch (size) {
    case "large":
      return `jn-w-[40rem]`
    default:
      return `jn-w-[33.625rem]`
  }
}

/**
A generic Modal component.

The Modal component can automatically create cancelling and confirming buttons with the desired labels and handlers. 

For more complex use cases, more buttons, etc., an instance of `<ModalFooter>` with all custom content as children can be passed as prop `modalFooter` and will be rendered.

The Modal uses a boolean 'open' prop to determine whether it is open or not. Alternatively, the open state can be handled outside the component, e.g. in a global state. In this case the 'open' prop needs to be passed as true always, otherwise the Modal component will not render.

By default, the modal will close (i.e. set its `open` state to false) once the user cancels the Modal. When confirming, you will have to either set the `open` to false to close the modal, or use whatever global state mechanism you have to handle modals.

To make the modal less intrusive and effectively un-modal it, pass `closeOnBackdropClick`. This will close the modal when the user clicks the modal backdrop.
*/
export const Modal = ({
  ariaLabel,
  cancelButtonIcon = null,
  cancelButtonLabel = "",
  confirmButtonIcon = null,
  confirmButtonLabel = "",
  children = null,
  closeable = true,
  closeOnBackdropClick = false,
  closeOnEsc = true,
  heading = "",
  initialFocus,
  modalFooter = null,
  onConfirm,
  onCancel,
  open = false,
  size = "small",
  title = "",
  unpad = false,
  className = "",
  ...props
}) => {
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

  const handleConfirmClick = (event) => {
    onConfirm && onConfirm(event)
  }

  const handleCancelClick = (event) => {
    setIsOpen(false)
    onCancel && onCancel(event)
  }

  const handleEsc = (event) => {
    if (isCloseable && isCloseableOnEsc) {
      setIsOpen(false)
      onCancel && onCancel(event)
    }
  }

  const handleBackdropClick = (event) => {
    if (isCloseabelOnBackdropClick) {
      setIsOpen(false)
      onCancel && onCancel(event)
    } else {
      event.stopPropagation()
    }
  }

  const portalContainer = usePortalRef()

  const modalRef = useRef(null)

  const theTitle = title || heading

  const modalTitleId = uniqueId()

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={`juno-modal-container ${modalcontainerstyles}`} onClick={handleBackdropClick}>
            <FocusTrap
              focusTrapOptions={{
                initialFocus: initialFocus,
                clickOutsideDeactivates: isCloseabelOnBackdropClick,
                fallbackFocus: () => modalRef.current,
                allowOutsideClick: true,
                escapeDeactivates: () => {
                  handleEsc()
                },
              }}
            >
              <div
                className={`juno-modal ${sizeClass(size)} ${modalstyles} ${className}`}
                role="dialog"
                ref={modalRef}
                {...props}
                aria-labelledby={theTitle && theTitle.length ? modalTitleId : null}
                aria-label={ariaLabel}
              >
                <div
                  className={`juno-modal-header ${headerstyles} ${theTitle && theTitle.length ? `jn-justify-between` : `jn-justify-end`}`}
                >
                  {title || heading ? (
                    <h1 className={`juno-modal-title ${titlestyles}`} id={modalTitleId}>
                      {title || heading}
                    </h1>
                  ) : (
                    ""
                  )}
                  {isCloseable ? <Icon icon="close" onClick={handleCancelClick} /> : ""}
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
                      onConfirm={onConfirm ? handleConfirmClick : null}
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

Modal.propTypes = {
  /** The aria-label of the modal. Use only if the modal does NOT have a `title` or `heading`.  */
  ariaLabel: PropTypes.string,
  /** The title of the modal. This will be rendering as the heading of the modal, and the modal's `arial-labelledby` attribute will reference the title/heading element. If the modal does not have `title` or `heading`, use `ariaLabel` to provide an accessible name for the modal. */
  title: PropTypes.string,
  /** Also the title of the modal, just for API flexibility. If both `title` and `heading` are passed, `title` will win. */
  heading: PropTypes.string,
  /** The Modal size */
  size: PropTypes.oneOf(["small", "large"]),
  /** Pass a label to render a confirm button and a Cancel button */
  confirmButtonLabel: PropTypes.string,
  /** Pass a label for the cancel button. Defaults to "Cancel" */
  cancelButtonLabel: PropTypes.string,
  /** Pass an Icon name to show on the confirming action button */
  confirmButtonIcon: PropTypes.oneOf(knownIcons),
  /** Pass an icon name to show on the cancelling button */
  cancelButtonIcon: PropTypes.oneOf(knownIcons),
  /** Whether the modal will be open */
  open: PropTypes.bool,
  /** The children of the modal. These will be rendered as the modal content. To render custom buttons at the bottom, see `modalFooter` below.*/
  children: PropTypes.node,
  /** Optional. Pass a `<ModalFooter />` component with custom content as required. Will default to using the `<ModalFooter/>` component internally. */
  modalFooter: PropTypes.element,
  /** Whether the modal can be closed using an "X"-Button at the top right. Defaults to true. */
  closeable: PropTypes.bool,
  /** Pass to remove default padding from the content area of the modal */
  unpad: PropTypes.bool,
  /** Custom className to add to the modal */
  className: PropTypes.string,
  /** A handler to execute once the modal is confirmed by clicking the confrim button if exists. Note that we do not close the modal automatically. */
  onConfirm: PropTypes.func,
  /** A handler to execute once the modal is cancelled or dismissed using the x-Close button,  Cancel-button or pressing ESC */
  onCancel: PropTypes.func,
  /** Whether the modal should be closed when the backdrop is clicked. Essentially 'un-modals' the modal. */
  closeOnBackdropClick: PropTypes.bool,
  /** Whether the modal can be closed by hitting the ESC key */
  closeOnEsc: PropTypes.bool,
  /** By default, the first element in the tab order of the Modal content will be focussed. To specify an element to be focussed when the modal opens, pass an element, DOM node, or selector string. */
  initialFocus: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}
