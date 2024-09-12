/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ComponentType, useEffect } from "react"

function withDeprecationWarning<T extends object>(WrappedComponent: ComponentType<T>, message: string) {
  const ComponentWithDeprecationWarning: React.FC<T> = (props: T) => {
    useEffect(() => {
      console.warn(message)
    }, [])

    return <WrappedComponent {...props} />
  }

  return ComponentWithDeprecationWarning
}

export { withDeprecationWarning }
