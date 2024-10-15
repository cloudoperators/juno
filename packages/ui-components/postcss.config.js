/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer"), require("postcss-url")({ url: "inline" })],
}
