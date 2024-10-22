/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import PropTypes from "prop-types"
import useQueryClientFn from "../hooks/useQueryClientFn"
import useUrlState from "../hooks/useUrlState"

const AsyncWorker = ({ consumerId, mockAPI }) => {
  useQueryClientFn(mockAPI)
  useUrlState(consumerId)
  return null
}

AsyncWorker.propTypes = {
  consumerId: PropTypes.string.isRequired,
  mockAPI: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
}

export default AsyncWorker
