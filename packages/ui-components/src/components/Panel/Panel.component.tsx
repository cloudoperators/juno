/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, FC, HTMLAttributes, ReactNode, MouseEvent } from "react"
import { createPortal } from "react-dom"

import { Icon } from "../Icon/Icon.component"
import { usePortalRef } from "../PortalProvider/PortalProvider.component"

const panelStyles = (isOpen: boolean, isTransitioning: boolean, size?: PanelSize): string => {
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
      ${
        size === "large"
          ? `
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

const contentWrapperStyles = `jn-overflow-auto`

const panelHeaderStyles = `
  jn-flex
  jn-items-center
  jn-py-4
  jn-px-8
`

const panelTitleStyles = `
  jn-text-theme-high
  jn-text-lg
  jn-font-bold
`

type PanelSize = "default" | "large"

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Title of the panel.
   */
  heading?: ReactNode
  /**
   * Size of the opened panel.
   */
  size?: PanelSize
  /**
   * Controls whether the panel is open and visible.
   */
  opened?: boolean
  /**
   * Determines whether the panel can be closed using a close button.
   */
  closeable?: boolean
  /**
   * Handler called when the close button is clicked.
   */
  // eslint-disable-next-line no-unused-vars
  onClose?: (event: MouseEvent<HTMLElement>) => void
  /**
   * Additional CSS classes to apply to the panel for custom styling.
   */
  className?: string
  /**
   * Content to be rendered inside the main body of the panel.
   */
  children?: ReactNode
}

/**
 * A Panel component that slides in from the right side of the screen.
 * It can be used to display additional content/controls for the content area.
 */
export const Panel: FC<PanelProps> = ({
  heading = "",
  size = "default",
  opened = false,
  closeable = true,
  onClose,
  className = "",
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(opened)
  const [isCloseable, setIsCloseable] = useState(closeable)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const portalContainer = usePortalRef()

  // Update if the 'opened' prop changes from outside
  useEffect(() => setIsOpen(opened), [opened])

  // Update if the 'closeable' prop changes from outside
  useEffect(() => setIsCloseable(closeable), [closeable])

  // Clear timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // ----- Timeout handling -----
  // Set the panel to invisible only after the closing transition has finished (500ms).
  // This ensures the panel can't be tab-targeted when closed.
  useEffect(() => {
    if (!isOpen) {
      setIsTransitioning(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [isOpen])

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setIsOpen(false)
    onClose?.(event)
  }

  return createPortal(
    <div
      className={`juno-panel ${panelStyles(isOpen, isTransitioning, size)} ${className}`}
      role="dialog"
      aria-labelledby="juno-panel-title"
      {...props}
    >
      <div className={`juno-panel-header ${panelHeaderStyles}`}>
        <div className={`juno-panel-title ${panelTitleStyles}`} id="juno-panel-title">
          {heading}
        </div>
        {isCloseable && <Icon icon="close" onClick={handleClose} className="juno-panel-close jn-ml-auto" />}
      </div>
      <div className={`juno-panel-content-wrapper ${contentWrapperStyles}`}>{children}</div>
    </div>,
    portalContainer ? portalContainer : document.body
  )
}
