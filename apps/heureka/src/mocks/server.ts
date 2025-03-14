/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { setupServer } from "msw/node"
import { handlers } from "./handlers"

export const server = setupServer(...handlers)
