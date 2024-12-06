/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"

export const withDeprecationWarning = (WrappedComponent, message) => {
  const ComponentWithDeprecationWarning = (props) => {
    useEffect(() => {
      console.warn(message)
    }, [])

    return <WrappedComponent {...props} />
  }

  return ComponentWithDeprecationWarning
}
