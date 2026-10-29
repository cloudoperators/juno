/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createPluginMount } from "@cloudoperators/greenhouse-core"
import App from "./App"

// The whole plugin surface is a single `PluginModule` value. If the shared contract grows new
// methods in the future, this file stays unchanged — the shell is the only side that has to adapt.
export const plugin = createPluginMount(App)
