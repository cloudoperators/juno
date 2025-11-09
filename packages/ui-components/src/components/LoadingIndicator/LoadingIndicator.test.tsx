/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { LoadingIndicator } from "./"

describe("LoadingIndicator", () => {
  describe("Default Rendering", () => {
    test("renders a LoadingIndicator", () => {
      render(<LoadingIndicator />)
      expect(screen.getByRole("progressbar")).toBeInTheDocument()
    })
  })

  describe("Size Prop Handling", () => {
    test("renders a LoadingIndicator with a numerical size as passed", () => {
      render(<LoadingIndicator size={1000} />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute("width", "1000")
      expect(progressBar).toHaveAttribute("height", "1000")
    })

    test("defaults when size of zero is passed", () => {
      render(<LoadingIndicator size={0} />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute("width", "96")
      expect(progressBar).toHaveAttribute("height", "96")
    })

    test("defaults when a negative size is passed", () => {
      render(<LoadingIndicator size={-50} />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute("width", "96")
      expect(progressBar).toHaveAttribute("height", "96")
    })

    test("defaults when an empty string size is passed", () => {
      render(<LoadingIndicator size="" />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute("width", "96")
      expect(progressBar).toHaveAttribute("height", "96")
    })

    test("defaults when an invalid string size is passed", () => {
      render(<LoadingIndicator size="x10px" />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute("width", "96")
      expect(progressBar).toHaveAttribute("height", "96")
    })
  })

  describe("Color Class Handling", () => {
    test("renders a LoadingIndicator with a color as passed", () => {
      render(<LoadingIndicator color="jn:text-danger" />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveClass("jn:text-danger")
    })
  })

  describe("ClassName Prop Handling", () => {
    test("renders a custom className as passed", () => {
      render(<LoadingIndicator className="some-custom-class" />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveClass("some-custom-class")
    })
  })

  describe("Additional Props Handling", () => {
    test("renders all props as passed", () => {
      render(<LoadingIndicator data-lolol="1-2-3-lol" />)
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar).toBeInTheDocument()
      expect(progressBar).toHaveAttribute("data-lolol", "1-2-3-lol")
    })
  })
})
