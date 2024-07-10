/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

module.exports = {
  transform: { "\\.[jt]sx?$": "babel-jest" },
  transformIgnorePatterns: [
    "node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)",
  ],
}
