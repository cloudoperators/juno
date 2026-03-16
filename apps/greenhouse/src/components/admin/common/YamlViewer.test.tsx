/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen, waitFor, within } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import YamlViewer from "./YamlViewer"

describe("YamlViewer", () => {
  describe("rendering", () => {
    it("should render with valid data", async () => {
      const mockData = {
        name: "test",
        version: "1.0.0",
        metadata: {
          labels: {
            app: "test-app",
          },
        },
      }

      render(<YamlViewer value={mockData} data-testid="yaml-viewer" />)

      await waitFor(() => {
        const editorWrapper = screen.getByTestId("yaml-viewer")
        expect(editorWrapper).toBeInTheDocument()
        const editorContent = within(editorWrapper).getByLabelText("YAML data viewer (read-only)")
        expect(editorContent).toHaveAttribute("aria-readonly", "true")
      })
    })

    it("should render YAML content correctly", async () => {
      const mockData = {
        apiVersion: "v1",
        kind: "PluginPreset",
        metadata: {
          name: "my-preset",
        },
      }

      render(<YamlViewer value={mockData} data-testid="yaml-viewer" />)

      await waitFor(() => {
        const editorWrapper = screen.getByTestId("yaml-viewer")
        const editorText = editorWrapper.textContent || ""

        expect(editorText).toContain("apiVersion")
        expect(editorText).toContain("v1")
        expect(editorText).toContain("kind")
        expect(editorText).toContain("PluginPreset")
        expect(editorText).toContain("metadata")
        expect(editorText).toContain("name")
        expect(editorText).toContain("my-preset")
      })
    })
  })

  describe("error handling", () => {
    it("should display error message when YAML serialization fails", async () => {
      // Create an object with a function property which yaml.dump cannot serialize
      const invalidData = {
        name: "test",
        invalidFunction: () => {},
      }

      render(<YamlViewer value={invalidData} data-testid="yaml-viewer" />)

      await waitFor(() => {
        // Check if ErrorMessage is rendered (outside editor)
        expect(screen.getByText(/Failed to serialize object to YAML/i)).toBeInTheDocument()
        // expect(screen.queryByTestId("yaml-viewer")).not.toBeInTheDocument()
        const editorWrapper = screen.getByTestId("yaml-viewer")
        expect(within(editorWrapper).queryByLabelText("YAML data viewer (read-only)")).not.toBeInTheDocument()
      })
    })
  })
})
