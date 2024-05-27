/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Stack, Button, Container } from "juno-ui-components"
import {
  useTheme,
  useReadOnly,
  useInitialEditorCode,
} from "./components/StoreProvider"
import Preview from "./components/Preview"
import CodeEditor from "@uiw/react-textarea-code-editor"
import { ErrorBoundary } from "react-error-boundary"
import Error from "./components/Error"

// By default, the dark-mode is automatically switched according to the system. If you need to switch manually, just set the data-color-mode="dark" parameter for html Element.
const editorStyles = {
  width: "100%",
  height: "100%",
  // text-sm
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
}

const fallbackRender = ({ error, resetErrorBoundary }) => {
  return (
    <div className="w-1/2">
      <Error error={error} />
    </div>
  )
}

const AppContent = (props) => {
  const theme = useTheme()
  const readOnly = useReadOnly()
  const initialEditorCodeString = useInitialEditorCode()
  const [editorCode, setEditorCode] = useState(initialEditorCodeString)
  const [compiledCode, setCompiledCode] = useState(initialEditorCodeString)

  const onCodeChange = (evn) => {
    setEditorCode(evn.target.value)
  }

  const onCompileClick = () => {
    setCompiledCode(editorCode)
  }

  return (
    <Container py className="h-full">
      <Stack className="h-full">
        <Stack direction="vertical" className="w-1/2">
          <Stack
            direction="horizontal"
            alignment="center"
            className="p-2 bg-theme-background-lvl-1"
          >
            <span className="w-full font-bold">Juno Playground</span>
            {!readOnly && (
              <Button
                icon="chevronRight"
                variant="primary"
                onClick={onCompileClick}
              />
            )}
          </Stack>
          <CodeEditor
            value={editorCode}
            language="jsx"
            placeholder="Please enter JSX code."
            onChange={onCodeChange}
            padding={15}
            readOnly={readOnly}
            data-color-mode={theme === "theme-dark" ? "dark" : "light"}
            style={editorStyles}
          />
        </Stack>
        <div className="separator border-r border-theme-background-lvl-4 mx-4" />
        <ErrorBoundary
          fallbackRender={fallbackRender}
          resetKeys={[compiledCode]}
        >
          <Preview code={compiledCode} />
        </ErrorBoundary>
      </Stack>
    </Container>
  )
}

export default AppContent
