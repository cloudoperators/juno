/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import useAlertmanagerAPI from "../hooks/useAlertmanagerAPI"
import useUrlState from "../hooks/useUrlState"

const AsyncWorker = ({ endpoint }) => {
  useAlertmanagerAPI(endpoint)
  useUrlState()
  return null
}

export default AsyncWorker
