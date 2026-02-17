/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ComponentPropsWithoutRef, ReactNode } from "react"

const codeStyles = `
  jn:bg-theme-code-block
  jn:text-sm
`

/**
 * The `Code` component is a lightweight inline `<code>` element used for displaying code snippets or text.
 * It can accept content directly through the `content` prop or render children encapsulated within it.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-code--docs
 * @see {@link CodeProps}
 */
export const Code = ({ content = "", children, className = "", ...props }: CodeProps): ReactNode => {
  return (
    <code className={`juno-code ${codeStyles} ${className}`} {...props}>
      {content || children}
    </code>
  )
}

export interface CodeProps extends ComponentPropsWithoutRef<"code"> {
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
  children?: ReactNode
}
