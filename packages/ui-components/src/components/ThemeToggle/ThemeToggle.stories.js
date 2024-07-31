import React from "react"
import { ThemeToggle } from "./index"
//import { StyleProvider } from "../StyleProvider/index"

export default {
  title: "Components/ThemeToggle",
  component: ThemeToggle,

  argTypes: {},
  // // Comment out decorator for now, as all StyleProviders read and write to the same key "juno-theme" in localStorage:
  // decorators: [
  //   (Story, context) => {
  //     const theme = context.args.theme
  //     return (
  //       <StyleProvider theme={theme}>
  //         <div className="jn-p-12" style={{ minHeight: "250px" }}>
  //           <Story />
  //           <p> Some content. </p>
  //         </div>
  //       </StyleProvider>
  //     )
  //   },
  // ],
}

export const Default = {
  parameters: {},
  args: {},
}

export const LightTheme = {
  args: {
    theme: "theme-light",
  },
}

export const Disabled = {
  args: {
    disabled: true,
  },
}
