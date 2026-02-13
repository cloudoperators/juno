/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState, useEffect, useRef } from "react"
import CodeMirror, { EditorView, highlightWhitespace } from "@uiw/react-codemirror"
import { yaml } from "@codemirror/lang-yaml"
import yamlParser from "js-yaml"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"

interface YamlViewerProps {
  value: object
}

export default function YamlViewer({ value, ...props }: YamlViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { yamlContent, error } = useMemo(() => {
    try {
      const yamlString = yamlParser.dump(value, {
        indent: 2,
        lineWidth: -1,
        noRefs: true,
        sortKeys: false,
      })
      return { yamlContent: yamlString, error: "" }
    } catch (err) {
      return {
        yamlContent: "",
        error: `Failed to serialize object to YAML: ${(err as Error).message}`,
      }
    }
  }, [value])

  return (
    <div ref={containerRef}>
      {error ? (
        <ErrorMessage error={new Error(error)} />
      ) : (
        <CodeMirror
          value={yamlContent}
          height="100%"
          theme="dark"
          extensions={[
            yaml(),
            highlightWhitespace(),
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
          ]}
          editable={false}
          aria-label="YAML data viewer (read-only)"
          aria-readonly="true"
          {...props}
        />
      )}
    </div>
  )
}
