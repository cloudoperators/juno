/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-expect-error TS(2732): Cannot find module './peaks.json'. Consider using ... Remove this comment to see the full error message
import peaks from "./peaks.json"

export default {
  peaks,
  // add more mocks here
}
