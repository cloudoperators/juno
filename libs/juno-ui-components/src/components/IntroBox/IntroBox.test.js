/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { IntroBox } from "./index"

describe("IntroBox", () => {
  test("renders an IntroBox", async () => {
    render(<IntroBox data-testid="my-introbox" />)
    expect(screen.getByTestId("my-introbox")).toBeInTheDocument()
  })

  test("renders an IntroBox with background image as passed if variant hero", async () => {
    render(
      <IntroBox
        data-testid="my-introbox"
        variant="hero"
        heroImage="url('bg-fake-img')"
      />
    )
    expect(screen.getByTestId("my-introbox")).toHaveStyle({backgroundImage: "url('bg-fake-img')"})
  })

  test("renders an IntroBox without background image as passed if variant is not hero", async () => {
    render(
      <IntroBox
        data-testid="my-introbox"
        heroImage="url('bg-fake-img')"
      />
    )
    expect(screen.getByTestId("my-introbox")).not.toHaveStyle({backgroundImage: "url('bg-fake-img')"})
  })

  test("renders a title as passed", async () => {
    render(<IntroBox data-testid="my-introbox" title="My IntroBox Heading" />)
    expect(screen.getByTestId("my-introbox")).toHaveTextContent(
      "My IntroBox Heading"
    )
  })

  test("renders a text as passed", async () => {
    render(
      <IntroBox data-testid="my-introbox" text="My IntroBox text goes here." />
    )
    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          content.startsWith("My IntroBox text goes here.")
        )
      })
    ).toBeTruthy()
  })

  test("renders a custom class as passed", async () => {
    render(<IntroBox data-testid="my-introbox" className="my-custom-class" />)
    expect(screen.getByTestId("my-introbox")).toHaveClass("my-custom-class")
  })

  test("renders children passed as children", async () => {
    render(
      <IntroBox data-testid="my-introbox">
        <div>My Introbox text in a div goes here!</div>
      </IntroBox>
    )
    expect(
      screen.getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "div" &&
          content.startsWith("My Introbox text in a div goes here!")
        )
      })
    ).toBeTruthy()
  })

  test("renders text as passed as children if both children and 'text' prop were passed", async () => {
    render(
      <IntroBox data-testid="my-introbox" text="I should not be here.">
        {"My Introbox children text goes here!"}
      </IntroBox>
    )
    expect(screen.getByTestId("my-introbox")).toHaveTextContent(
      "My Introbox children text goes here!"
    )
  })

  test("renders other props as passed", async () => {
    render(
      <IntroBox data-testid="my-introbox" name="My shiny little IntroBox" />
    )
    expect(screen.getByTestId("my-introbox")).toHaveAttribute(
      "name",
      "My shiny little IntroBox"
    )
  })
})
