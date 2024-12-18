/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const globImporter = require("node-sass-glob-importer")
const vitePluginGlob = require('vite-plugin-glob');
import { merge } from '@storybook/manager-api';
import svgr from "vite-plugin-svgr";

const config = {
  stories: ["../src/docs/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "./local-preset",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
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
        })
      ],
      css: {
        preprocessorOptions: {
          scss: {
            sassOptions: {
              importer: globImporter(),
            },
          },
        },
      }
    })
    return config
  },
  framework: {
    name: "@storybook/react-vite",
    options: { },
  },
  docs: {
    autodocs: true,
  },
}

export default config
