/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import queryString from "query-string"
import { DecodedObject } from "./types"

const decode = (string: string): DecodedObject =>
  queryString.parse(string, {
    arrayFormat: "comma",
    parseBooleans: true,
    parseNumbers: true,
  })

export default decode
