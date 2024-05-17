/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Icon } from "../Icon/Icon.component"

const panelClasses = (isOpen, isTransitioning, size) => {
  return `
      jn-fixed
      jn-right-0
      jn-transition-transform
      jn-ease-out
      jn-duration-300
      jn-inset-y-0
      jn-z-[9989]
      jn-grid
      jn-grid-rows-[auto_1fr]
      jn-bg-theme-panel
      jn-backdrop-blur
      jn-backdrop-saturate-150     
      jn-shadow-md
      ${size === "large" ? `
          jn-w-[90%]
          xl:jn-w-[80%]
          2xl:jn-w-[1228px]` 
        : `
          jn-w-[75%]
          xl:jn-w-[55%]
          2xl:jn-w-[844px]`
        }
			${!isOpen ? `jn-translate-x-[100%]` : ""}
			${!isOpen && !isTransitioning ? `jn-invisible` : ""}
		`
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
}

const contentWrapperClasses = `
  jn-overflow-auto
`

const panelHeaderClasses = `
  jn-flex
  jn-items-center
  jn-py-4
  jn-px-8
`

const panelTitleClasses = `
  jn-text-theme-high
  jn-text-lg
  jn-font-bold
`

/** A slide-in panel for the Content Area.  */
export const Panel = ({
  heading,
  size,
  className,
  opened,
  closeable,
  onClose,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(opened)
  const [isCloseable, setIsCloseable] = useState(closeable)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // ensure we notice if the opened parameter is changed from the outside
  useEffect(() => {
    setIsOpen(opened)
  }, [opened])

  // ensure we notice if the cloeseable parameter is changed from the outside
  useEffect(() => {
    setIsCloseable(closeable)
  }, [closeable])

  // ----- Timeout stuff -------
  // necessary because we want to set the panel to invisible only after the closing transition has finished
  // the invisible panel is to ensure that the panel can't be tab targeted when closed
  const timeoutRef = React.useRef(null)

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current) // clear when component is unmounted
  }, [])

  // if isOpen state changes to false set the transitioning state to true for 500ms
  useEffect(() => {
    if (!isOpen) {
      setIsTransitioning(true)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [isOpen])

  const handleClose = (event) => {
    setIsOpen(false)
    onClose && onClose(event)
  }

  return (
    <div
      className={`juno-panel ${panelClasses(
        isOpen,
        isTransitioning,
        size
      )} ${className}`}
      role="dialog"
      aria-labelledby="juno-panel-title"
      {...props}
    >
      <div className={`juno-panel-header ${panelHeaderClasses}`}>
        <div
          className={`juno-panel-title ${panelTitleClasses}`}
          id="juno-panel-title"
        >
          {heading}
        </div>
        { isCloseable &&
            <Icon
            icon="close"
            onClick={handleClose}
            className="juno-panel-close jn-ml-auto"
          />
        }
      </div>
      <div className={`juno-panel-content-wrapper ${contentWrapperClasses}`}>
        {children}
      </div>
    </div>
  )
}

Panel.propTypes = {
  /** Pass a Panel heading/title. */
  heading: PropTypes.node,
  /** Size of the opened panel. If unspecified, default size is used. */
  size: PropTypes.oneOf(["default", "large"]),
  /**  Pass open state  */
  opened: PropTypes.bool,
  /**  Pass whether panel should be closeable via a close button or not. If false, the close button will not be rendered. The panel can still be closed by setting "opened" to false.  */
  closeable: PropTypes.bool,
  /** Pass a handler that will be called when the close button is clicked */
  onClose: PropTypes.func,
  /** Pass an optional className */
  className: PropTypes.string,
  /** Pass child nodes to be rendered in the main body of the Panel */
  children: PropTypes.node,
}

Panel.defaultProps = {
  heading: "",
  size: undefined,
  opened: false,
  closeable: true,
  onClose: undefined,
  className: "",
}
