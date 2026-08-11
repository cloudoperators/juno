import { merge } from "storybook/manager-api"
import svgr from "vite-plugin-svgr"

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import vitePluginGlob from "vite-plugin-glob"

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/docs/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: ["@storybook/addon-links", "@storybook/addon-docs", "./local-preset"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  staticDirs: ["../public"],

  viteFinal: async (config) => {
    // Remove esmExternalRequirePlugin to allow React bundling in static builds
    if (config.plugins) {
      config.plugins = config.plugins.filter((p) => p?.name !== "vite:esmExternalRequire")
    }

    config = merge(config, {
      assetsInclude: ["**/*.png", "**/*.jpg"],
      plugins: [
        vitePluginGlob(),
        svgr({
          svgo: false,
        }),
      ],
    })
    return config
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
}

export default config
