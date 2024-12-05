/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { fetchAlerts } from "./alertsQueries"
import { fetchSilences } from "./silencesQueries"

export const QUERY_FUNCTIONS = {
  alerts: fetchAlerts,
  silences: fetchSilences,
}
