/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import YamlData from "./YamlData"

describe("YamlData", () => {
  describe("rendering", () => {
    it("should render with valid data", () => {
      const mockData = {
        name: "test",
        version: "1.0.0",
        metadata: {
          labels: {
            app: "test-app",
          },
        },
      }

      render(<YamlData value={mockData} data-testid="codemirror" />)
      const editor = screen.getByTestId("codemirror")
      expect(editor).toBeInTheDocument()
      expect(editor).toHaveAttribute("aria-label", "YAML data viewer (read-only)")
      expect(editor).toHaveAttribute("aria-readonly", "true")
    })

    it("should render YAML content correctly", () => {
      const mockData = {
        apiVersion: "v1",
        kind: "PluginPreset",
        metadata: {
          name: "my-preset",
        },
      }

      render(<YamlData value={mockData} data-testid="codemirror" />)

      const editor = screen.getByTestId("codemirror")
      const editorText = editor.textContent || ""

      expect(editorText).toContain("apiVersion")
      expect(editorText).toContain("v1")
      expect(editorText).toContain("kind")
      expect(editorText).toContain("PluginPreset")
      expect(editorText).toContain("metadata")
      expect(editorText).toContain("name")
      expect(editorText).toContain("my-preset")
    })

    it('should use auto height when heightMode is "auto"', () => {
      const mockData = {
        apiVersion: "v1",
        kind: "PluginPreset",
        metadata: {
          name: "my-preset",
        },
      }

      const { container } = render(<YamlData value={mockData} heightMode="auto" />)

      const editorContainer = container.firstChild as HTMLElement
      expect(editorContainer.getAttribute("data-height")).toBe("auto")
    })

    it('should use calculated height when heightMode is "fill"', async () => {
      const mockData = {
        apiVersion: "v1",
        kind: "PluginPreset",
        metadata: {
          name: "my-preset",
        },
      }

      const { container } = render(<YamlData value={mockData} heightMode="fill" />)

      await waitFor(() => {
        const editorContainer = container.firstChild as HTMLElement
        expect(editorContainer.getAttribute("data-height")).not.toBe("auto")
      })
    })
  })

  describe("error handling", () => {
    it("should display error message when YAML serialization fails", () => {
      // Create an object that will cause yaml.dump to fail
      const circularRef: any = { a: 1 }
      circularRef.self = circularRef

      render(<YamlData value={circularRef} data-testid="codemirror" />)

      // Check if ErrorMessage is rendered (outside editor)
      expect(screen.getByText(/Failed to serialize object to YAML/i)).toBeInTheDocument()
      expect(screen.queryByTestId("codemirror")).not.toBeInTheDocument()
    })
  })
})
