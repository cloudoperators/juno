/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { CheckboxGroup } from "./index"
import { Checkbox } from "../Checkbox/index"

describe("CheckboxGroup", () => {
  test("renders a CheckboxGroup container", async () => {
    render(
      <CheckboxGroup
        name="my-checkboxgroup"
        data-testid="checkbox-group"
      ></CheckboxGroup>
    )
    expect(screen.getByTestId("checkbox-group")).toBeInTheDocument()
  })

  test("renders a CheckboxGroup with an id as passed", async () => {
    render(<CheckboxGroup data-testid="group" id="my-checkboxgroup-1" />)
    expect(screen.getByTestId("group")).toBeInTheDocument()
    expect(screen.getByTestId("group")).toHaveAttribute(
      "id",
      "my-checkboxgroup-1"
    )
  })

  test("renders a CheckboxGroup with an auto-generated id if no id is passed", async () => {
    render(<CheckboxGroup data-testid="group" />)
    expect(screen.getByTestId("group")).toBeInTheDocument()
    expect(screen.getByTestId("group")).toHaveAttribute("id")
    expect(screen.getByTestId("group").getAttribute("id")).toMatch(
      "juno-checkboxgroup"
    )
  })

  test("renders a CheckboxGroup with an associated label as passed", async () => {
    render(
      <CheckboxGroup
        name="my-checkboxgroup"
        label="My Group of Checkboxes"
      ></CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByText("My Group of Checkboxes")).toBeInTheDocument()
  })

  test("renders a required label as passed", async () => {
    render(
      <CheckboxGroup
        name="my-checkboxgroup"
        label="my-labeled-checkboxgroup"
        required
      ></CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("does not render any checkboxes if no children passed", async () => {
    render(<CheckboxGroup name="my-checkboxgroup"></CheckboxGroup>)
    expect(() => {
      screen.getByRole("checkbox")
    }).toThrow()
  })

  test("renders Checkboxes as passed", async () => {
    render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    )
    expect(screen.getAllByRole("checkbox")).toHaveLength(3)
  })

  test("renders individually named Checkboxes as passed", async () => {
    render(
      <CheckboxGroup name="my-checkboxgroup">
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    )
    expect(screen.getAllByRole("checkbox")).toHaveLength(3)
  })

  test("renders Checkboxes with an auto-generated name if no name was passed", async () => {
    render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    )
    const checkboxes = screen.getAllByRole("checkbox")
    checkboxes.forEach((checkbox) => expect(checkbox).toHaveAttribute("name"))
  })

  test("renders Checkboxes as passed with one item", async () => {
    render(
      <CheckboxGroup name="my-checkboxgroup">
        <Checkbox />
      </CheckboxGroup>
    )
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "name",
      "my-checkboxgroup"
    )
  })

  test("renders checked Checkboxes as passed", async () => {
    render(
      <CheckboxGroup selected={["test-checkbox"]}>
        <Checkbox value="test-checkbox" />
      </CheckboxGroup>
    )
    expect(screen.getByRole("checkbox")).toBeChecked()
  })

  test("renders disabled child Checkboxes as passed", async () => {
    render(
      <CheckboxGroup disabled>
        <Checkbox id="c-1" />
        <Checkbox id="c-2" />
      </CheckboxGroup>
    )
    expect(document.getElementById("c-1")).toBeDisabled()
    expect(document.getElementById("c-2")).toBeDisabled()
  })

  test("renders a valid CheckboxGroup as passed", async () => {
    render(
      <CheckboxGroup valid>
        <Checkbox value="test-checkbox" />
      </CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveClass("juno-checkboxgroup-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders a valid CheckboxGroup when successtext is passed", async () => {
    render(
      <CheckboxGroup successtext="Great Success!">
        <Checkbox value="test-checkbox" />
      </CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveClass("juno-checkboxgroup-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
    expect(screen.getByText("Great Success!")).toBeInTheDocument()
  })

  test("renders an invalid CheckboxGroup as passed", async () => {
    render(
      <CheckboxGroup invalid>
        <Checkbox value="test-checkbox" />
      </CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveClass("juno-checkboxgroup-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders an invalid CheckboxGroup when errortext is passed", async () => {
    render(
      <CheckboxGroup errortext="Big Error!">
        <Checkbox value="test-checkbox" />
      </CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveClass("juno-checkboxgroup-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
    expect(screen.getByText("Big Error!")).toBeInTheDocument()
  })

  test("renders a helptext as passed", async () => {
    render(
      <CheckboxGroup helptext="This is a helpful text">
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-help"
    )
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "This is a helpful text"
    )
  })

  test("renders a custom className", async () => {
    render(
      <CheckboxGroup name="my-checkboxgroup" className="my-custom-classname">
        <Checkbox value="test-checkbox" />
      </CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveClass("my-custom-classname")
  })

  test("renders all props", async () => {
    render(
      <CheckboxGroup name="my-checkboxgroup" data-lolol="some-prop">
        <Checkbox value="test-checkbox" />
      </CheckboxGroup>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByRole("group")).toHaveAttribute("data-lolol", "some-prop")
  })
})
