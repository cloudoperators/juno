import * as React from "react";
import { render, screen, user } from "@testing-library/react";
import { ThemeToggle } from "./index";

describe("ThemeToggle", () => {
  test("renders a theme toggle", async () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("juno-themetoggle");
  });

  test("renders a disabled themeToggle as passed", async () => {
    render(<ThemeToggle disabled />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders a name attribute as passed", async () => {
    render(<ThemeToggle name="my-theme-toggle" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute(
      "name",
      "my-theme-toggle"
    );
  });

  test("renders a custom className", async () => {
    render(<ThemeToggle className="my-class" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("my-class");
  });

  test("renders all props", async () => {
    render(<ThemeToggle data-lol="123" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("data-lol", "123");
  });
});
