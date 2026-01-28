/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const codeStyles = `
  jn:bg-theme-code-block
  jn:text-sm
`

/**
 * The `Code` component is a lightweight inline `<code>` element used for displaying code snippets or text.
 * It can accept content directly through the `content` prop or render children encapsulated within it.
 *
 * @component
 * @param {string} [content] Text content to display within the code element. Defaults to an empty string.
 * @param {React.ReactNode} [children] Elements or text to render inside the code element.
 * @param {string} [className] Additional CSS classes for styling the code element. Defaults to an empty string.
 * @returns {React.ReactElement} A styled inline code element.
 */
export const Code: React.FC<CodeProps> = ({ content = "", children, className = "", ...props }) => {
  return (
    <code className={`juno-code ${codeStyles} ${className}`} {...props}>
      {content || children}
    </code>
  )
}

export interface CodeProps extends React.ComponentPropsWithoutRef<"code"> {
  /**
   * Text content to render within the code element. Overrides `children`.
   * @default ""
   */
  content?: string

  /** Additional CSS class names for styling the code element.
   * @default ""
   */
  className?: string

  /** Elements or text to render inside the code element. */
  children?: React.ReactNode
}
