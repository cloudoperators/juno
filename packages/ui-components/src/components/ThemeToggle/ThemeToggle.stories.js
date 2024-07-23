import React from "react";
import { ThemeToggle } from "./index";
import { StyleProvider } from "../StyleProvider/index";

// TODO: update decorator to accept a theme

export default {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  
  argTypes: {},
  decorators: [
    (Story, context) => {
      const theme = context.args.theme
      return (
        <StyleProvider theme={theme}>
          <div className="jn-p-12" style={{ minHeight: "250px" }}>
            <Story />
            <p> Some content. </p>
          </div>
        </StyleProvider>
      )
    },
  ],
};

const Template = (args) => <ThemeToggle {...args} />;

export const Default = {
  parameters: {},
  args: {},
};

export const LightTheme = {
  args: {
    theme: "theme-light"
  }
}

export const Disabled = {
  args: {
    disabled: true,
  },
};
