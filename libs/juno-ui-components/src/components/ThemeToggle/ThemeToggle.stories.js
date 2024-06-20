import React from "react";
import { ThemeToggle } from "./index";

export default {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    docs: {
      description: {
        component: "A toggle to switch between Dark and Light Theme.",
      },
    },
  },
  argTypes: {},
};

export const Default = {
  parameters: {},
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
