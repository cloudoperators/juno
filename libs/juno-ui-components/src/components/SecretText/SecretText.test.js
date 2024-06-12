/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SecretText } from "./index";

describe("SecretText", () => {
  let originalClipboard;

  beforeAll(() => {
    // Save the original clipboard object
    originalClipboard = { ...navigator.clipboard };

    // Mock the clipboard methods if they don't exist
    navigator.clipboard = {
      writeText: jest.fn(),
      readText: jest.fn().mockResolvedValue("pasted text"),
    };
  });

  afterAll(() => {
    // Restore the original clipboard object
    navigator.clipboard = originalClipboard;
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  test("renders a SecretText component", async () => {
    render(<SecretText />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea");
  });

  test("renders an autocomplete attribute to the SecretText textarea", async () => {
    render(<SecretText autoComplete="on" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("autoComplete", "on");
  });

  test("renders Clear, Reveal, Copy, and Paste buttons by default", async () => {
    render(<SecretText />);
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument();
  });

  test("does not render a Clear button as passed", async () => {
    render(<SecretText clear={false} />);
    expect(
      screen.queryByRole("button", { name: "Clear" })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument();
  });

  test("does not render a Reveal button as passed", async () => {
    render(<SecretText toggle={false} />);
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Reveal" })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument();
  });

  test("does not render a Copy button as passed", async () => {
    render(<SecretText copy={false} />);
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Copy" })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Paste" })).toBeInTheDocument();
  });

  test("does not render a Paste button as passed", async () => {
    render(<SecretText paste={false} />);
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reveal" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Paste" })
    ).not.toBeInTheDocument();
  });

  test("renders a Hide button when set to reveal", async () => {
    render(<SecretText reveal />);
    expect(screen.getByRole("button", { name: "Hide" })).toBeInTheDocument();
  });

  test("renders concealed text by default", async () => {
    render(<SecretText />);
    expect(document.querySelector(".juno-secret-cover")).toBeInTheDocument();
  });

  test("renders unconcealed text when set to reveal", async () => {
    render(<SecretText reveal />);
    expect(
      document.querySelector(".juno-secret-cover")
    ).not.toBeInTheDocument();
  });

  test("renders a disabled SecretText textarea as passed", async () => {
    render(<SecretText disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  test("renders a label as passed", async () => {
    render(<SecretText label="My Secret Text" required />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(document.querySelector(".juno-label")).toBeInTheDocument();
    expect(document.querySelector(".juno-label")).toHaveTextContent(
      "My Secret Text"
    );
  });

  test("renders an id as passed", async () => {
    render(<SecretText id="my-secrettext-id" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "id",
      "my-secrettext-id"
    );
  });

  test("renders a generated id when no id was passed", async () => {
    render(<SecretText />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("id");
  });

  test("associates label with textarea using an id as passed", async () => {
    render(<SecretText label="secret label" id="secret-id" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "secret-id");
    expect(document.querySelector(".juno-label")).toHaveAttribute(
      "for",
      "secret-id"
    );
  });

  test("renders a name attribute as passed", async () => {
    render(<SecretText name="my-secret-name" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "name",
      "my-secret-name"
    );
  });

  test("renders a placeholder as passed", async () => {
    render(<SecretText placeholder="secret text goes here" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "secret text goes here"
    );
  });

  test("renders a readOnly textarea as passed", async () => {
    render(<SecretText readOnly />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readOnly");
  });

  test("renders a required SecretText component as passed", async () => {
    render(<SecretText label="My Secret Text" required />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(document.querySelector(".juno-label")).toBeInTheDocument();
    expect(document.querySelector(".juno-required")).toBeInTheDocument();
  });

  test("does not render a Toggle button if passed", async () => {
    render(<SecretText toggle={false} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea");
    expect(
      screen.queryByRole("button", { name: "Hide" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Reveal" })
    ).not.toBeInTheDocument();
  });

  test("renders an invalid SecretText", async () => {
    render(<SecretText invalid />);
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea");
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-invalid");
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument();
  });

  test("renders a valid SecretText", async () => {
    render(<SecretText valid />);
    expect(screen.getByRole("textbox")).toHaveClass("juno-secret-textarea");
    expect(screen.getByRole("textbox")).toHaveClass("juno-textarea-valid");
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument();
  });

  test("renders an errortext as passed", async () => {
    render(<SecretText errortext="This is an errortext" />);
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument();
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-error"
    );
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "This is an errortext"
    );
  });

  test("renders an helptext as passed", async () => {
    render(<SecretText helptext="This is a helptext" />);
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument();
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-help"
    );
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "This is a helptext"
    );
  });

  test("renders an successtext as passed", async () => {
    render(<SecretText successtext="This is a successtext" />);
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument();
    expect(document.querySelector(".juno-form-hint")).toHaveClass(
      "juno-form-hint-success"
    );
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent(
      "This is a successtext"
    );
  });

  test("renders a value as passed", async () => {
    render(<SecretText value="my secret text" />);
    expect(screen.getByRole("textbox")).toHaveValue("my secret text");
  });

  test("renders a className as passed", async () => {
    render(<SecretText className="my-custom-class" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("my-custom-class");
  });

  test("renders other props as passed", async () => {
    render(<SecretText data-lolol="527" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute("data-lolol", "527");
  });

  test("renders a wrapperClassName to the outermost wrapping element", async () => {
    render(<SecretText wrapperClassName="my-wrapper-class" />);
    expect(document.querySelector(".my-wrapper-class")).toBeInTheDocument();
  });
});
