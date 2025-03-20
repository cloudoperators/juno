/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { deleteSilences, createSilences } from "./silences"

type MutationFunctions = {
  deleteSilences: (variables: Record<string, any>) => Promise<Response>
  createSilences: (variables: Record<string, any>) => Promise<any>
}

export const MUTATION_FUNCTIONS: MutationFunctions = {
  deleteSilences: deleteSilences,
  createSilences: createSilences,
}
