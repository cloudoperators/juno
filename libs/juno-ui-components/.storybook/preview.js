/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// import { useDarkMode } from "storybook-dark-mode"
// import { DocsContainer } from "./components/DocsContainer"
// import { themes } from "@storybook/theming"

// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   ArgsTable,
//   PRIMARY_STORY,
//   Stories,
// } from "@storybook/addon-docs"
// import React from "react"
// import "../src/global.scss"
// import { StyleProvider } from "../src/components/StyleProvider"
// import { ContentArea } from "../src/components/ContentArea/index"
// import { Container } from "../src/components/Container/index"

// export const parameters = {
//   options: {
//     storySort: {
//       order: ["Components", "Forms", "Layout", "*", "WiP", "Internal"],
//       method: "alphabetical",
//     },
//   },
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   backgrounds: { disable: true },
//   darkMode: {
//     stylePreview: true,
//     classTarget: "html",
//     darkClass: "theme-dark",
//     lightClass: "theme-light",
//     // one additional piece of the puzzle to make dark mode work properly is the preview-head.html in this folder
//     // in there we are able to set the background color of stories using inbuilt CSS escape hatches.
//     // See documentation here: https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/theming.md#storybook-theming
//   },
//   docs: {
//     /**
//      * A custom docs container seems to be necessary because we want the docs container theme to switch depending on
//      * the result of the useDarkMode hook from the storybook-dark-mode addon.
//      * See more info in ./components/DocsContainer
//      */
//     container: DocsContainer,
//     /**
//      * We're using a custom docs page setup here at the moment because by default the storybook docspage renders the first
//      * story from the stories file as a special "primary" story that is adjustable with the args table but it does not
//      * include the primary story below with the list of other stories. This leads to the description for the primary
//      * story not being displayed anywhere on the docspage which is annoying. Therefore I've adjusted the default Docs Page
//      * to include the primary story with the story list. There's an open issue that might fix this issue and render the
//      * need for a custom page obsolete: https://github.com/storybookjs/storybook/issues/8093
//      *
//      * Also there's still an open issue regarding the descriptions of stories. Ideally it would be possible to write standard
//      * jsdoc descriptions for stories but currently this doesn't work. Instead you have to pass the description as a parameter.
//      * This issue is here: https://github.com/storybookjs/storybook/issues/8527
//      */
//     page: () => (
//       <>
//         <Title />
//         <Subtitle />
//         <Description />
//         <Primary />
//         <ArgsTable story={PRIMARY_STORY} />
//         <Stories includePrimary={true} title="" />
//       </>
//     ),
//     // ensure that decorators aren't rendered for dynamic code display in stories
//     // if decorators should be rendered for a story or component add the below to the component's config under parameters: { docs: { source: ...} }
//     // and set excludeDecorators to false
//     source: {
//       type: "dynamic",
//       excludeDecorators: true,
//     },
//   },
//   controls: {
//     expanded: true,
//     matchers: {
//       //color: /(background|color)$/i,    // comment out to prevent storybook from rendering their custom color input
//       date: /Date$/,
//     },
//   },
// }
// import "../src/global.scss"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    // layout: "centered",
    options: {
      storySort: {
        order: ["Components", "Forms", "Layout", "*", "WiP", "Internal"],
        method: "alphabetical",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        //color: /(background|color)$/i,    // comment out to prevent storybook from rendering their custom color input
        date: /Date$/,
      },
    },
  },
}

export default preview
