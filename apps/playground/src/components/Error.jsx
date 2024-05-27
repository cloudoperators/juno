/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { CodeBlock } from "juno-ui-components"

const preErrorClasses = `
custom-error-pre
border-theme-error
border
h-full
w-full
`

const Error = ({ error }) => {
  return (
    <CodeBlock className={preErrorClasses} copy={false}>
      {error?.message || error?.toString() || "An error occurred"}
    </CodeBlock>
  )
}

export default Error
