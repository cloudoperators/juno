import React, { useMemo } from "react"
import CodeMirror, { EditorView, highlightWhitespace } from "@uiw/react-codemirror"
import { yaml } from "@codemirror/lang-yaml"
import yamlParser from "js-yaml"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"

interface YamlDataProps {
  value?: object
  height?: string
}

export default function YamlData({ value, height = "100%" }: YamlDataProps) {
  const { yamlContent, error } = useMemo(() => {
    if (!value) {
      return { yamlContent: "", error: "" }
    }

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
        error: `Failed to convert JSON to YAML: ${(err as Error).message}`,
      }
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
      />
    </>
  )
}
