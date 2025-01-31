/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import peaksData from "./peaks.json"

export interface Peak {
  id: number
  name: string
  height: string
  region: string
  mainrange: string
  countries: string
  url?: string
}

const peaks: Peak[] = peaksData

export default {
  peaks,
  // add more mocks here
}
