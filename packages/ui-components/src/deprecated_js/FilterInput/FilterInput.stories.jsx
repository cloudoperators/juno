/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterInput } from "./index.js"

export default {
  title: "Deprecated/Filter/FilterInput",
  component: FilterInput,
  argTypes: {},
}

export const Default = {
  args: {
    valuePlaceholder: "Enter a value",
    options: [
      { label: "Filter 1", key: "filter-1" },
      { label: "Filter 2", key: "filter-2", disabled: true },
      { label: "Filter 3", key: "filter-3" },
    ],
  },
}

export const Preselected = {
  args: {
    keyLabel: "Select a fancy Filter",
    selectedFilterKey: "filter-2",
    options: [
      { label: "Filter 1", key: "filter-1" },
      { label: "Filter 2", key: "filter-2" },
      { label: "Filter 3", key: "filter-3" },
    ],
  },
}

export const Loading = {
  args: {
    options: [],
    loading: true,
  },
}

export const WithError = {
  args: {
    options: [],
    error: true,
  },
}
