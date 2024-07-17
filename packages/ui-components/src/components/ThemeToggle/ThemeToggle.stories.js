import React from "react";
import { ThemeToggle } from "./index";
import { StyleProvider } from "../StyleProvider/index";

// TODO: update decorator to accept a theme

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
  decorators: [
    (Story) => (
      <StyleProvider theme="theme-light">
        <div className="jn-p-12" style={{ minHeight: "250px" }}>
          <Story />
          <p> Some content. </p>
        </div>
      </StyleProvider>
    ),
  ],
};

const Template = (args) => <ThemeToggle {...args} />;

export const Default = {
  parameters: {},
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
