import { createRequire } from "node:module"
import { merge } from "storybook/manager-api"
import svgr from "vite-plugin-svgr"

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Create require function for CommonJS modules
const require = createRequire(import.meta.url)

// Import CommonJS modules after require is defined
const globImporter = require("node-sass-glob-importer")
const vitePluginGlob = require("vite-plugin-glob")

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/docs/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: ["@storybook/addon-links", "@storybook/addon-docs", "./local-preset"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  staticDirs: ["../public"],

  viteFinal: async (config) => {
    config = merge(config, {
      assetsInclude: ["**/*.png", "**/*.jpg"],
      plugins: [
        vitePluginGlob(),
        svgr({
          svgo: false,
        }),
      ],
      css: {
        preprocessorOptions: {
          scss: {
            sassOptions: {
              importer: globImporter(),
            },
          },
        },
      },
    })
    return config
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
}

export default config
