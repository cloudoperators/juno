/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes } from "react"
import { Icon } from "../Icon"

const bottomBarStyles = `
  jn:flex
  jn:justify-end
  jn:px-3
  jn:py-2
  jn:border-t
  jn:border-theme-codeblock-footer
`

const copyTextStyles = `
  jn:font-bold
  jn:text-sm
  jn:mr-4
  jn:mt-1
`

// Omit `onCopy` from HTMLAttributes because React defines it as a ClipboardEventHandler,
// which conflicts with our `onCopy: () => void` copy-to-clipboard callback.
export interface CodeBlockFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, "onCopy"> {
  /**
   * Callback function to handle the copy action.
   */
  onCopy: () => void

  /**
   * Indicates whether the content has been copied.
   */
  isCopied: boolean

  /**
   * Optional. Additional CSS classes for customizing the footer container.
   */
  className?: string
}

export const CodeBlockFooter = ({ onCopy, isCopied, className = "", ...props }: CodeBlockFooterProps) => (
  <div className={`juno-codeblock-bottombar ${bottomBarStyles} ${className}`} {...props}>
    <span className={`${copyTextStyles}`}>{isCopied ? "Copied!" : ""}</span>
    <Icon icon="contentCopy" onClick={onCopy} />
  </div>
)
