/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button } from "../Button/index"
import { ButtonRow } from "../ButtonRow/index"
import { KnownIcons } from "../Icon/Icon.component"

const modalfooterstyles = `
	jn:flex
	jn:flex-row
	jn:border-t
	jn:border-theme-background-lvl-4
	jn:py-2
	jn:px-8
`

const defaultmodalfooterstyles = `
	jn:justify-end
	jn:gap-3.5
`

/**
A Footer component for Modal.
Renders a simple "Close" Button (and accepts a corresponding onCancel-handler) by default.
Can be passed a confirmButtonLabel and cancelButton label with corresponding onConfirm- and onCancel-handlers.
Can alternatively render all custom children as passed.
*/

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className = "",
  children,
  confirmButtonLabel = "",
  cancelButtonLabel = "",
  confirmButtonIcon,
  cancelButtonIcon,
  disableConfirmButton = false,
  disableCancelButton = false,
  onConfirm,
  onCancel,
  ...props
}) => {
  const handleConfirmClick = (event: React.MouseEvent<HTMLElement>) => {
    onConfirm && onConfirm(event)
  }

  const handleCancelClick = (event: React.MouseEvent<HTMLElement>) => {
    onCancel && onCancel(event)
  }

  return (
    <div
      className={`juno-modal-footer ${modalfooterstyles} ${children ? null : defaultmodalfooterstyles} ${className} `}
      {...props}
    >
      {children ? (
        children
      ) : confirmButtonLabel || onConfirm ? (
        <ButtonRow>
          <Button
            variant="primary"
            label={confirmButtonLabel || "Confirm"}
            icon={confirmButtonIcon || undefined}
            disabled={disableConfirmButton}
            onClick={handleConfirmClick}
          />
          <Button
            variant="subdued"
            label={cancelButtonLabel || "Cancel"}
            disabled={disableCancelButton}
            icon={cancelButtonIcon || undefined}
            onClick={handleCancelClick}
          />
        </ButtonRow>
      ) : (
        <ButtonRow>
          <Button
            variant="subdued"
            label={cancelButtonLabel || "Close"}
            disabled={disableCancelButton}
            icon={cancelButtonIcon || undefined}
            onClick={handleCancelClick}
          />
        </ButtonRow>
      )}
    </div>
  )
}

export interface ModalFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** A custom className. Useful to configure flex items alignment when passing custom content as children. */
  className?: string
  /** Custom children to render. */
  children?: React.ReactNode
  /** The label for the Confirm-button. When passed, the component will render a Confirm button and a cancel button, otherwise the component will ONLY render a Close-Button. */
  confirmButtonLabel?: string
  /** Custom label for the cancel button. ONLY has an effect if a `confirmButtonLabel` is passed. */
  cancelButtonLabel?: string
  /** Pass an Icon name to show on the confirming action button */
  confirmButtonIcon?: KnownIcons
  /** Pass an icon name to show on the cancelling button */
  cancelButtonIcon?: KnownIcons
  /** Determines whether the confirm action button should be disabled */
  disableConfirmButton?: boolean
  /** Determines whether the cancel action button should be disabled */
  disableCancelButton?: boolean
  /** Handler to execute once the confirming button is clicked */
  onConfirm?: React.MouseEventHandler<HTMLElement>
  /** Handler to execute once the cancelling button is clicked */
  onCancel?: React.MouseEventHandler<HTMLElement>
}
