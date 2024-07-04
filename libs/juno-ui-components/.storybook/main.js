/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const path = require("path")
const globImporter = require("node-sass-glob-importer")

const config = {
  stories: ["../src/docs/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-mdx-gfm",
    "./juno-addon",
  ],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    // Exclude SVG files so that they can be loaded via svgr
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/, // import filename: *.svg?url
    })

    config.module.rules.push({
      test: /\.svg$/i,
      enforce: "pre",
      issuer: /\.jsx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if import filename *.svg?url
      loader: require.resolve("@svgr/webpack"),
      options: {
        svgo: false,
        titleProp: true,
      },
    })

    // this is for background svgs in css
    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      issuer: /\.s?css$/,
      type: "asset",
    })

    // other images
    config.module.rules.push({
      test: /\.(png|jpg)$/i,
      type: "asset",
    })

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "css-loader",
        {
          loader: "postcss-loader",
          // important! use local installed postcss (version 8)
          options: {
            implementation: require("postcss"),
          },
        },
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              importer: globImporter(),
            },
          },
        },
      ],
      include: [path.resolve(__dirname, "../src")],
    })

    return config
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
}
export default config
