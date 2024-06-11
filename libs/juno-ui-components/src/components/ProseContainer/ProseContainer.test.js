import * as React from "react"
import { render, screen } from "@testing-library/react"
import { ProseContainer } from "./index"

describe("ProseContainer", () => {
  test("renders a custom className as passed", async () => {
    render(<ProseContainer className="my-class" data-testid="my-pagination" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveClass("my-class")
  })

  test("renders all props as passed", async () => {
    render(<ProseContainer data-testid="my-pagination" data-lolol="123-456" />)
    expect(screen.getByTestId("my-pagination")).toBeInTheDocument()
    expect(screen.getByTestId("my-pagination")).toHaveAttribute("data-lolol", "123-456")
  })
})
