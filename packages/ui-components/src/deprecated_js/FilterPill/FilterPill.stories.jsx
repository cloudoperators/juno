/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterPill } from "./index.js"

export default {
  title: "Deprecated/Filter/FilterPill",
  component: FilterPill,
  argTypes: {},
}

export const Default = {
  args: {
    filterKey: "os",
    filterKeyLabel: "OS",
    filterValue: "mac_os",
    filterValueLabel: "Mac OS",
  },
}
