/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Icon } from "../Icon/index.js"

const message = `
	jn-text-theme-high
	jn-flex
	jn-rounded
	jn-leading-5
	jn-overflow-hidden
	jn-items-center
`

const messageBorderStyles = `
	jn-w-[4px]
	jn-self-stretch
	jn-border-l-4
	jn-mr-6
	jn-shrink-0
`

const messageDefault = `
	jn-border-theme-message-default
`

const messageDefaultBg = `
	jn-bg-theme-message-default
`

const messageError = `
	jn-border-theme-message-error
`

const messageErrorBg = `
	jn-bg-theme-message-error
`

const messageWarning = `
	jn-border-theme-message-warning
`

const messageWarningBg = `
	jn-bg-theme-message-warning
`

const messageDanger = `
	jn-border-theme-message-danger
`

const messageDangerBg = `
	jn-bg-theme-message-danger
`

const messageSuccess = `
	jn-border-theme-message-success
`

const messageSuccessBg = `
	jn-bg-theme-message-success
`

const messageContentStyles = `
	jn-py-3
	jn-pr-4
	jn-ml-7
`

const messageHeading = `
	jn-font-bold
`

const dismissButtonStyles = `
	jn-ml-auto
	jn-self-stretch
	jn-flex
	jn-flex-col
	jn-py-2.5
	jn-pr-2.5
`

const backgroundClass = (variant) => {
  switch (variant) {
    case "error":
      return messageErrorBg
    case "warning":
      return messageWarningBg
    case "success":
      return messageSuccessBg
    case "info":
      return messageDefaultBg
    case "danger":
      return messageDangerBg
    default:
      return messageDefaultBg
  }
}

const variantClass = (variant) => {
  switch (variant) {
    case "error":
      return messageError
    case "warning":
      return messageWarning
    case "success":
      return messageSuccess
    case "info":
      return messageDefault
    case "danger":
      return messageDanger
    default:
      return messageDefault
  }
}

// get the appropriate icon for message type by MUI name:
const getMuiIcon = (messageType) => {
  switch (messageType) {
    case "error":
      return "dangerous"
    default:
      return messageType
  }
}

/**
* A Message holds generally important information to help understand the contents, purpose, or state of a whole page or view.
Use sparingly, there should never be any two or more subsequent instances of Message as direct siblings/neighbors on an individual view.
*/
export const Message = ({
  title = null,
  text = null,
  variant = "info",
  dismissible = false,
  autoDismiss = false,
  autoDismissTimeout = 10000,
  onDismiss,
  className = "",
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(true)

  // ----- Timeout stuff -------
  const timeoutRef = React.useRef(null)

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current) // clear when component is unmounted
  }, [])

  // if autoDissmiss is true, hide message after passed or preconfigured timeout
  useEffect(() => {
    if (autoDismiss) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => hideMessage(), autoDismissTimeout)
    }
  }, [autoDismiss, autoDismissTimeout])

  const hideMessage = () => {
    setVisible(false)
    // call the callback dismiss message (if any)
    onDismiss && onDismiss()
  }

  return (
    <>
      {visible && (
        <div
          className={`juno-message juno-message-${variant} ${message} ${backgroundClass(
            variant
          )} ${className}`}
          {...props}
        >
          <div
            className={`juno-message-border ${messageBorderStyles} ${variantClass(
              variant
            )}`}
          ></div>
          <Icon
            icon={getMuiIcon(variant)}
            color={"jn-text-theme-" + variant}
            className="jn-shrink-0"
          />
          <div className={`juno-message-content ${messageContentStyles}`}>
            {title ? <h1 className={`${messageHeading}`}>{title}</h1> : ""}
            <div>{children ? children : text}</div>
          </div>
          {dismissible && (
            <div className={dismissButtonStyles}>
              <Icon
                icon="close"
                onClick={hideMessage}
                className="juno-message-close-button jn-opacity-50 hover:jn-opacity-100"
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}

Message.propTypes = {
  /** Pass an optional title */
  title: PropTypes.string,
  /** Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below) */
  text: PropTypes.string,
  /** Specify a semantic variant */
  variant: PropTypes.oneOf(["info", "warning", "danger", "error", "success"]),
  /** Optional. If set to 'true', the message will get a close button to dismiss the message. */
  dismissible: PropTypes.bool,
  /** Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout */
  autoDismiss: PropTypes.bool,
  /** Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).*/
  autoDismissTimeout: PropTypes.number,
  /** Optional. Pass a handler that will be called when the message is dismissed */
  onDismiss: PropTypes.func,
  /** Pass an optional className */
  className: PropTypes.string,
  /** Pass child nodes to be rendered as contents */
  children: PropTypes.node,
}
