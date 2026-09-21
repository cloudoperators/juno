/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { Icon } from "../Icon"
import { Tooltip } from "../Tooltip"
import { TooltipTrigger } from "../TooltipTrigger/TooltipTrigger.component"
import { TooltipContent } from "../TooltipContent/TooltipContent.component"

const bottomBarStyles = `
  jn:flex
  jn:justify-end
  jn:items-center
  jn:px-3
  jn:py-2
  jn:border-t
  jn:border-theme-codeblock-footer
  jn:gap-2
`

// Omit `onCopy` from HTMLAttributes because React defines it as a ClipboardEventHandler,
// which conflicts with our `onCopy: () => void` copy-to-clipboard callback.
export interface CodeBlockFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, "onCopy"> {
  /**
   * Callback function to handle the copy action. Required when `copy` is true (the default).
   */
  onCopy: () => void

  /**
   * Indicates whether the content has been copied. Drives the "Copied!" tooltip on the Copy button.
   */
  isCopied: boolean

  /**
   * Whether to show the Copy button. Defaults to true.
   */
  copy: boolean

  /**
   * Optional children rendered to the left of the Copy button.
   */
  children?: ReactNode

  /**
   * Optional. Additional CSS classes for customizing the footer container.
   */
  className?: string
}

export const CodeBlockFooter = ({
  onCopy,
  isCopied = false,
  copy = true,
  children,
  className = "",
  ...props
}: CodeBlockFooterProps) => (
  <div className={`juno-codeblock-bottombar ${bottomBarStyles} ${className}`} {...props}>
    {children}
    {copy && (
      <Tooltip open={isCopied} placement="top">
        <TooltipTrigger asChild>
          <Icon icon="contentCopy" onClick={onCopy} />
        </TooltipTrigger>
        <TooltipContent>Copied!</TooltipContent>
      </Tooltip>
    )}
  </div>
)
