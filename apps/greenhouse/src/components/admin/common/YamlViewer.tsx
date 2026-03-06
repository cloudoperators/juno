/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useRef, useEffect } from "react"
import { EditorView, highlightWhitespace, lineNumbers } from "@codemirror/view"
import { EditorState } from "@codemirror/state"
import { yaml } from "@codemirror/lang-yaml"
import { oneDark } from "@codemirror/theme-one-dark"
import yamlParser from "js-yaml"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"

interface YamlViewerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "value"> {
  value: object
  className?: string
}

function createEditorExtensions() {
  return [
    yaml(),
    oneDark,
    highlightWhitespace(),
    lineNumbers(),
    EditorView.editable.of(false),
    EditorView.lineWrapping,
    EditorView.theme({
      ".cm-highlightSpace": {
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><circle cx='3' cy='3' r='1' fill='%23cccccc' /></svg>\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 0.1,
      },
      ".cm-scroller": {
        fontFamily: "monospace",
      },
    }),
    EditorView.contentAttributes.of({
      "aria-label": "YAML data viewer (read-only)",
      "aria-readonly": "true",
    }),
  ]
}

export default function YamlViewer({ value, className = "", ...props }: YamlViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const editorViewRef = useRef<EditorView | null>(null)

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

  // Store initial content in a ref to avoid triggering effect re-runs
  const initialContentRef = useRef(yamlContent)

  // Create the CodeMirror editor instance once
  useEffect(() => {
    if (!containerRef.current) return

    const state = EditorState.create({
      doc: initialContentRef.current,
      extensions: createEditorExtensions(),
    })

    const view = new EditorView({
      state,
      parent: containerRef.current,
    })

    editorViewRef.current = view

    return () => {
      view.destroy()
      editorViewRef.current = null
    }
  }, [])

  // Update editor content when yamlContent changes
  useEffect(() => {
    if (!editorViewRef.current) return

    const currentDoc = editorViewRef.current.state.doc.toString()
    if (currentDoc !== yamlContent) {
      const scrollPos = editorViewRef.current.scrollDOM.scrollTop

      editorViewRef.current.dispatch({
        changes: {
          from: 0,
          to: editorViewRef.current.state.doc.length,
          insert: yamlContent,
        },
      })

      editorViewRef.current.scrollDOM.scrollTop = scrollPos
    }
  }, [yamlContent])

  return (
    <div className={`overflow-x-auto max-w-full ${className}`} {...props}>
      {error ? <ErrorMessage error={new Error(error)} /> : <div ref={containerRef} />}
    </div>
  )
}
