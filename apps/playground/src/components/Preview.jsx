/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import * as junoUIComponents from "juno-ui-components"
import { executeCode } from "../lib/executeCode"
import PreviewShell from "./PreviewShell"
import Error from "./Error"
import HintLoading from "./HintLoading"

// display if no code is provided
const compilerPlaceHolder = `
import React from "react"

export default function App() {
  return (
    <>Nothing to display</>
  )
}
`.trim()

const Preview = ({ code }) => {
  const [preview, setPreview] = useState(null)
  const [isCompilerLoading, setIsCompilerLoading] = useState(true)

  useEffect(() => {
    const compileCode = code || compilerPlaceHolder

    executeCode(compileCode, {
      react: React,
      "juno-ui-components": junoUIComponents,
    })
      .then((Preview) => {
        setPreview(
          <PreviewShell>
            <junoUIComponents.Container>
              <Preview />
            </junoUIComponents.Container>
          </PreviewShell>
        )
      })
      .catch((err) => {
        setPreview(<Error error={err} />)
      })
      .finally(() => setIsCompilerLoading(false))
  }, [code])

  return (
    <div className="w-1/2">
      {isCompilerLoading ? (
        <HintLoading text="Loading SWC Compiler" centered />
      ) : (
        preview
      )}
    </div>
  )
}

export default Preview
