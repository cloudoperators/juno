/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import PolicyEngine from "./engine"

const init = (config) => new PolicyEngine(config)
export { init as default, PolicyEngine }
