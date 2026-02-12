import React, { useEffect, useState } from "react"
import CodeMirror, { EditorView, highlightWhitespace } from "@uiw/react-codemirror"
import { yaml } from "@codemirror/lang-yaml"
import yamlParser from "js-yaml"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"

interface YamlDataProps {
  value?: object
  height?: string
}

export default function YamlData({ value, height = "100%" }: YamlDataProps) {
  const [yamlContent, setYamlContent] = useState<string>("")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (!value) {
      setYamlContent("")
      return
    }

    try {
      const yamlString = yamlParser.dump(value, {
        indent: 2,
        lineWidth: -1,
        noRefs: true,
        sortKeys: false,
      })
      setYamlContent(yamlString)
    } catch (err) {
      setError(`Failed to convert JSON to YAML: ${(err as Error).message}`)
    }
  }, [value])

  return (
    <>
      {error && <ErrorMessage error={new Error(error)} />}
      <CodeMirror
        value={yamlContent}
        height={height}
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
        basicSetup={{
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
        }}
      />
    </>
  )
}
