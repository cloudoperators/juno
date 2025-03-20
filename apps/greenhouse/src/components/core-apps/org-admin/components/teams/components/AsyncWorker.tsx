/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import useUrlState from "../hooks/useUrlState"

const AsyncWorker = ({ consumerId }: any) => {
  useUrlState(consumerId)
  return null
}

export default AsyncWorker
