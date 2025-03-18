/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * to load the built addon in this test Storybook
 */
function previewAnnotations(entry = []) {
  return [...entry, require.resolve("../src/juno-addon/preview.js")]
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("../src/juno-addon/manager.js")]
}

module.exports = {
  managerEntries,
  previewAnnotations,
}
