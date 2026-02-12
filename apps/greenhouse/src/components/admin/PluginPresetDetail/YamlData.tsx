/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useMemo } from "react"
import CodeMirror, { EditorView, highlightWhitespace } from "@uiw/react-codemirror"
import { yaml } from "@codemirror/lang-yaml"
import yamlParser from "js-yaml"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"

interface YamlDataProps {
  value?: Record<string, unknown>
  height?: string
}

// YAML dumping configuration
const YAML_DUMP_OPTIONS = {
  indent: 2,
  lineWidth: -1,
  noRefs: true,
  sortKeys: false,
}

// CodeMirror basic setup configuration
const BASIC_SETUP_CONFIG = {
  lineNumbers: true,
  highlightActiveLineGutter: true,
  highlightSpecialChars: true,
  foldGutter: true,
  drawSelection: true,
  dropCursor: true,
  allowMultipleSelections: true,
  indentOnInput: true,
  syntaxHighlighting: true,
  bracketMatching: true,
  closeBrackets: true,
  autocompletion: true,
  rectangularSelection: true,
  crosshairCursor: true,
  highlightActiveLine: true,
  highlightSelectionMatches: true,
  closeBracketsKeymap: true,
  searchKeymap: true,
  foldKeymap: true,
  completionKeymap: true,
  lintKeymap: true,
}

/**
 * YamlData component displays an object as read-only YAML in a CodeMirror editor.
 * 
 * @param value - The object to display as YAML
 * @param height - The height of the editor (CSS value, defaults to "100%")
 */
export default function YamlData({ value, height = "100%" }: YamlDataProps) {
  const [yamlContent, setYamlContent] = useState<string>("")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (!value) {
      setYamlContent("")
      setError("")
      return
    }

    try {
      const yamlString = yamlParser.dump(value, YAML_DUMP_OPTIONS)
      setYamlContent(yamlString)
      setError("") // Clear any previous errors
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err)
      setError(`Failed to convert data to YAML: ${errorMessage}`)
    }
  }, [value])

  // Memoize theme configuration to prevent recreation on each render
  const themeExtension = useMemo(
    () =>
      EditorView.theme({
        ".cm-highlightSpace": {
          backgroundImage:
            "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><circle cx='3' cy='3' r='1' fill='%23cccccc' /></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.1,
        },
      }),
    []
  )

  // Memoize extensions array to prevent recreation on each render
  const extensions = useMemo(() => [yaml(), highlightWhitespace(), themeExtension], [themeExtension])

  return (
    <>
      {error && <ErrorMessage error={new Error(error)} />}
      <CodeMirror
        value={yamlContent}
        height={height}
        theme="dark"
        extensions={extensions}
        editable={false}
        basicSetup={BASIC_SETUP_CONFIG}
        aria-label="YAML data viewer"
        role="textbox"
        aria-readonly="true"
      />
    </>
  )
}
