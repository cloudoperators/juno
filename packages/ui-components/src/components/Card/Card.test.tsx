import * as React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Card } from "./Card.component"

describe("Card Component", () => {
  describe("Basic Rendering", () => {
    test("renders a card with children", () => {
      render(<Card data-testid="card">Children</Card>)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveTextContent("Children")
    })
  })

  describe("Padding", () => {
    test("renders a card without padding or children by default", () => {
      render(<Card data-testid="card" />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).not.toHaveClass("jn:p-4")
    })

    test("renders a card with padding when true", () => {
      render(<Card data-testid="card" padding />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveClass("jn:p-4")
    })
  })

  describe("Additional Classnames and Props", () => {
    test("renders additional classNames when passed", () => {
      render(<Card data-testid="card" className="my-custom-class" />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveClass("my-custom-class")
    })

    test("renders additional props when passed", () => {
      render(<Card data-testid="card" data-custom={true} />)
      expect(screen.getByTestId("card")).toBeInTheDocument()
      expect(screen.getByTestId("card")).toHaveAttribute("data-custom")
    })
  })
})
